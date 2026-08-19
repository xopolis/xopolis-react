import { useMemo } from 'react'

/**
 * Dense decorative knowledge graph for the dark hero, rendered as an inline SVG
 * (viewBox + width:100% → intrinsic, reliable sizing, unlike a bare canvas box).
 * ~90 nodes with a few bright hubs, a thick web of nearest-neighbour edges,
 * gentle group drift + per-node twinkle via CSS. aria-hidden, reduced-motion safe.
 */
function mulberry32(a: number) {
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function HeroGraph() {
  const { nodes, edges } = useMemo(() => {
    const rnd = mulberry32(20260819)
    const W = 600
    const H = 400
    const N = 92
    type Node = { x: number; y: number; r: number; hub: boolean; delay: number; dur: number }
    const nodes: Node[] = []
    // a few loose cluster centres so the web reads as structured, not pure noise
    const centres = Array.from({ length: 6 }, () => ({ x: 40 + rnd() * (W - 80), y: 34 + rnd() * (H - 68) }))
    for (let i = 0; i < N; i++) {
      const hub = i < 10
      const useCluster = !hub && rnd() < 0.62
      let x: number
      let y: number
      if (useCluster) {
        const c = centres[Math.floor(rnd() * centres.length)]
        x = Math.min(W - 18, Math.max(18, c.x + (rnd() - 0.5) * 150))
        y = Math.min(H - 16, Math.max(16, c.y + (rnd() - 0.5) * 120))
      } else {
        x = 20 + rnd() * (W - 40)
        y = 18 + rnd() * (H - 36)
      }
      nodes.push({
        x,
        y,
        r: hub ? 4.6 + rnd() * 2.8 : 1.5 + rnd() * 2.6,
        hub,
        delay: +(rnd() * 5).toFixed(2),
        dur: +(3.6 + rnd() * 3.4).toFixed(2),
      })
    }
    const edges: [number, number][] = []
    const seen = new Set<string>()
    const add = (a: number, b: number) => {
      if (a === b) return
      const k = a < b ? `${a}_${b}` : `${b}_${a}`
      if (seen.has(k)) return
      seen.add(k)
      edges.push([a, b])
    }
    for (let i = 0; i < N; i++) {
      const near = nodes
        .map((n, j) => ({ j, d: (n.x - nodes[i].x) ** 2 + (n.y - nodes[i].y) ** 2 }))
        .filter((o) => o.j !== i)
        .sort((p, q) => p.d - q.d)
      const k = nodes[i].hub ? 6 : 3
      for (let m = 0; m < k && m < near.length; m++) add(i, near[m].j)
    }
    return { nodes, edges }
  }, [])

  return (
    <div className="hero-graph" aria-hidden="true">
      <svg className="hero-graph-svg" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet" role="presentation">
        <defs>
          <linearGradient id="hg-edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7EA9F2" />
            <stop offset="1" stopColor="#8342D7" />
          </linearGradient>
          <radialGradient id="hg-halo">
            <stop offset="0" stopColor="#8f6ff0" stopOpacity="0.6" />
            <stop offset="1" stopColor="#8f6ff0" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g className="hg-drift">
          <g className="hg-edges" stroke="url(#hg-edge)" fill="none">
            {edges.map(([a, b], i) => (
              <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} />
            ))}
          </g>
          <g className="hg-halos">
            {nodes.filter((n) => n.hub).map((n, i) => (
              <circle key={i} cx={n.x} cy={n.y} r={n.r * 4.4} fill="url(#hg-halo)" />
            ))}
          </g>
          <g className="hg-nodes">
            {nodes.map((n, i) => (
              <circle
                key={i}
                cx={n.x}
                cy={n.y}
                r={n.r}
                className={n.hub ? 'hub' : undefined}
                style={{ animationDelay: `${n.delay}s`, animationDuration: `${n.dur}s` }}
              />
            ))}
          </g>
        </g>
      </svg>
    </div>
  )
}
