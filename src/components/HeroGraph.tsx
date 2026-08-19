import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Decorative animated knowledge graph for the dark hero. Glowing nodes (a few
 * bright hubs with halos), faint royal/violet edges, and signal pulses that
 * travel along the edges — everything drifts gently. Pure client-side canvas,
 * transparent background, aria-hidden. Reduced motion renders a single settled
 * frame. All timers/observers torn down on unmount.
 */
export function HeroGraph() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const cvRef = useRef<HTMLCanvasElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const wrap = wrapRef.current
    const cv = cvRef.current
    if (!wrap || !cv) return
    const ctx = cv.getContext('2d')
    if (!ctx) return

    function mulberry32(a: number) {
      return function () {
        a |= 0
        a = (a + 0x6d2b79f5) | 0
        let t = Math.imul(a ^ (a >>> 15), 1 | a)
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
      }
    }
    const rnd = mulberry32(20260819)

    type GNode = { x: number; y: number; r: number; hub: boolean; ph: number; tw: number }
    const COUNT = 46
    const nodes: GNode[] = []
    for (let i = 0; i < COUNT; i++) {
      const hub = i < 6
      nodes.push({
        x: 0.08 + rnd() * 0.84,
        y: 0.1 + rnd() * 0.8,
        r: hub ? 3.2 + rnd() * 1.8 : 1.2 + rnd() * 1.9,
        hub,
        ph: rnd() * Math.PI * 2,
        tw: rnd() * Math.PI * 2,
      })
    }
    // Edges: each node links to its nearest few neighbours (hubs link to more).
    const edges: [number, number][] = []
    const seen = new Set<string>()
    const addEdge = (a: number, b: number) => {
      if (a === b) return
      const k = a < b ? `${a}-${b}` : `${b}-${a}`
      if (seen.has(k)) return
      seen.add(k)
      edges.push([a, b])
    }
    for (let i = 0; i < COUNT; i++) {
      const near = nodes
        .map((n, j) => ({ j, d: (n.x - nodes[i].x) ** 2 + (n.y - nodes[i].y) ** 2 }))
        .filter((o) => o.j !== i)
        .sort((p, q) => p.d - q.d)
      const k = nodes[i].hub ? 4 : 2
      for (let m = 0; m < k && m < near.length; m++) addEdge(i, near[m].j)
    }
    type Pulse = { e: number; t: number; dur: number }
    const pulses: Pulse[] = []
    for (let i = 0; i < 9; i++) {
      pulses.push({ e: Math.floor(rnd() * edges.length), t: rnd(), dur: 1.6 + rnd() * 1.7 })
    }

    let W = 0
    let H = 0
    let DPR = 1
    function resize() {
      const r = wrap!.getBoundingClientRect()
      DPR = Math.min(window.devicePixelRatio || 1, 2)
      W = r.width
      H = r.height
      cv!.width = Math.max(1, Math.round(W * DPR))
      cv!.height = Math.max(1, Math.round(H * DPR))
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0)
    }
    resize()

    let T = 0
    const px = (n: GNode): [number, number] => {
      const dx = Math.sin(T * 0.35 + n.ph) * 0.014
      const dy = Math.cos(T * 0.27 + n.ph * 1.3) * 0.014
      return [(n.x + dx) * W, (n.y + dy) * H]
    }

    function render() {
      ctx!.clearRect(0, 0, W, H)
      // edges
      for (const [a, b] of edges) {
        const [ax, ay] = px(nodes[a])
        const [bx, by] = px(nodes[b])
        const hub = nodes[a].hub || nodes[b].hub
        ctx!.strokeStyle = hub ? 'rgba(139,110,225,0.22)' : 'rgba(126,169,242,0.14)'
        ctx!.lineWidth = hub ? 1.0 : 0.7
        ctx!.beginPath()
        ctx!.moveTo(ax, ay)
        ctx!.lineTo(bx, by)
        ctx!.stroke()
      }
      // travelling pulses
      for (const p of pulses) {
        if (!edges[p.e]) continue
        const [a, b] = edges[p.e]
        const [ax, ay] = px(nodes[a])
        const [bx, by] = px(nodes[b])
        const x = ax + (bx - ax) * p.t
        const y = ay + (by - ay) * p.t
        const g = ctx!.createRadialGradient(x, y, 0, x, y, 7)
        g.addColorStop(0, 'rgba(255,255,255,0.92)')
        g.addColorStop(0.4, 'rgba(146,183,247,0.7)')
        g.addColorStop(1, 'rgba(146,183,247,0)')
        ctx!.fillStyle = g
        ctx!.beginPath()
        ctx!.arc(x, y, 7, 0, 6.2832)
        ctx!.fill()
      }
      // nodes
      for (const n of nodes) {
        const [x, y] = px(n)
        const tw = 0.72 + 0.28 * Math.sin(T * 1.5 + n.tw)
        const r = n.r * tw
        if (n.hub) {
          const g = ctx!.createRadialGradient(x, y, 0, x, y, r * 7)
          g.addColorStop(0, 'rgba(139,110,225,0.34)')
          g.addColorStop(1, 'rgba(139,110,225,0)')
          ctx!.fillStyle = g
          ctx!.beginPath()
          ctx!.arc(x, y, r * 7, 0, 6.2832)
          ctx!.fill()
        }
        ctx!.fillStyle = n.hub
          ? 'rgba(170,150,245,0.96)'
          : `rgba(126,169,242,${0.5 + 0.4 * tw})`
        ctx!.beginPath()
        ctx!.arc(x, y, Math.max(r, 0.8), 0, 6.2832)
        ctx!.fill()
      }
    }

    let raf = 0
    let t0 = performance.now()
    function tick(now: number) {
      const dt = Math.min((now - t0) / 1000, 0.05)
      t0 = now
      T += dt
      for (const p of pulses) {
        p.t += dt / p.dur
        if (p.t >= 1) {
          p.t = 0
          p.e = Math.floor(rnd() * edges.length)
          p.dur = 1.6 + rnd() * 1.7
        }
      }
      render()
      raf = requestAnimationFrame(tick)
    }

    if (reduce) {
      T = 6
      render()
    } else {
      raf = requestAnimationFrame(tick)
    }

    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => resize()) : null
    ro?.observe(wrap)

    return () => {
      cancelAnimationFrame(raf)
      ro?.disconnect()
    }
  }, [reduce])

  return (
    <div className="hero-graph" ref={wrapRef} aria-hidden="true">
      <canvas ref={cvRef} className="hero-graph-cv" />
    </div>
  )
}
