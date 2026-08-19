/* =========================================================================
   motion.js — A12-2026-08-07
   Companion to motion.css. Five behaviours, all additive, all no-ops when the
   markup they look for is absent, so one file loads on every page.

   PROGRESSIVE ENHANCEMENT, and it is not decoration here:
   - the reveal HIDDEN state is added by THIS script (html.js-motion), so with
     JS off nothing is hidden and the page is complete;
   - the count-up writes over a number that is ALREADY in the markup, so the
     real figure ships in the HTML and is what a crawler and a reduced-motion
     reader see;
   - the hero graph draws onto a canvas layered over the video, and reveals
     itself only after a successful first frame. Every failure path leaves the
     video playing.

   REDUCED MOTION is honoured here as well as in CSS, because three of these
   behaviours are scripted and a CSS media query cannot stop a rAF loop.
   ========================================================================= */
(function () {
  'use strict';

  var reduce = window.matchMedia &&
               window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- 2 · scroll reveal ------------------------------------------------ */
  (function reveal() {
    var els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;
    if (reduce || !('IntersectionObserver' in window)) return;  // stays visible

    document.documentElement.classList.add('js-motion');

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        io.unobserve(e.target);          // once, never on the way back up
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    Array.prototype.forEach.call(els, function (el) {
      // Anything already on screen at load is shown immediately and never
      // animated: a reveal that plays on content the reader is already looking
      // at reads as a glitch.
      var r = el.getBoundingClientRect();
      if (r.top < (window.innerHeight || 0) * 0.92) { el.classList.add('is-in'); return; }
      io.observe(el);
    });
  })();

  /* ---- 5 · number count-up --------------------------------------------- */
  (function countup() {
    var els = document.querySelectorAll('[data-countup]');
    if (!els.length || reduce || !('IntersectionObserver' in window)) return;

    function run(el) {
      // The target is READ FROM THE MARKUP, never passed in: the number in the
      // HTML stays the single source of truth, so this can never display a
      // figure the page does not actually claim.
      var raw = el.textContent.trim();
      var m = raw.match(/^([^\d-]*)(-?[\d,]+(?:\.\d+)?)(.*)$/);
      if (!m) return;
      var pre = m[1], post = m[3];
      var target = parseFloat(m[2].replace(/,/g, ''));
      if (!isFinite(target)) return;
      var dec = (m[2].split('.')[1] || '').length;
      var grouped = m[2].indexOf(',') > -1;
      var t0 = null, DUR = 900;

      el.setAttribute('aria-live', 'off');   // do not narrate every tick
      function fmt(v) {
        var s = v.toFixed(dec);
        if (grouped) s = s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return pre + s + post;
      }
      function step(ts) {
        if (t0 === null) t0 = ts;
        var p = Math.min(1, (ts - t0) / DUR);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(target * eased);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = raw;          // exact original string at the end
      }
      requestAnimationFrame(step);
    }

    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        run(e.target);
      });
    }, { threshold: 0.6 });
    Array.prototype.forEach.call(els, function (el) { io.observe(el); });
  })();

  /* ---- 3 · interactive hero graph -------------------------------------- */
  /* THE VIDEO IS THE BACKUP AND IT STAYS. This draws over it and only reveals
     itself on a good first frame. To go back to the video alone, set
     window.HERO_GRAPH = false in index.html — one line, no markup change. */
  (function heroGraph() {
    var host = document.querySelector('[data-hero-graph]');
    if (!host) return;
    if (window.HERO_GRAPH === false) return;
    if (reduce) return;                      // video keeps playing
    var ctxOK = !!(window.requestAnimationFrame && document.createElement('canvas').getContext);
    if (!ctxOK) return;

    var cv = document.createElement('canvas');
    cv.setAttribute('aria-hidden', 'true');  // the video carries the alt text
    host.appendChild(cv);
    var ctx = cv.getContext('2d');
    if (!ctx) { host.removeChild(cv); return; }

    var NODES = 46, LINK = 132, dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0, H = 0, nodes = [], edges = [], mouse = { x: -1e4, y: -1e4, on: false };

    // Deterministic layout: the hero must look the same on every load.
    var seed = 20260807;
    function rnd() { seed = (1103515245 * seed + 12345) % 2147483648; return seed / 2147483648; }

    function build() {
      var r = host.getBoundingClientRect();
      W = Math.max(1, r.width); H = Math.max(1, r.height);
      cv.width = W * dpr; cv.height = H * dpr;
      cv.style.width = W + 'px'; cv.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed = 20260807; nodes = []; edges = [];
      for (var i = 0; i < NODES; i++) {
        nodes.push({ x: rnd() * W, y: rnd() * H,
                     vx: (rnd() - .5) * .18, vy: (rnd() - .5) * .18,
                     r: rnd() < .18 ? 3.6 : 2.1 });
      }
      for (var a = 0; a < NODES; a++) {
        var d = [];
        for (var b = 0; b < NODES; b++) if (a !== b) {
          d.push([Math.pow(nodes[a].x - nodes[b].x, 2) + Math.pow(nodes[a].y - nodes[b].y, 2), b]);
        }
        d.sort(function (p, q) { return p[0] - q[0]; });
        for (var k = 0; k < 3 && edges.length < LINK; k++) {
          var j = d[k][1];
          if (a < j) edges.push([a, j]);
        }
      }
    }

    function frame() {
      ctx.clearRect(0, 0, W, H);
      var i, n;
      for (i = 0; i < nodes.length; i++) {
        n = nodes[i];
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }
      for (i = 0; i < edges.length; i++) {
        var A = nodes[edges[i][0]], B = nodes[edges[i][1]];
        var mx = (A.x + B.x) / 2 - mouse.x, my = (A.y + B.y) / 2 - mouse.y;
        var near = mouse.on ? Math.max(0, 1 - Math.sqrt(mx * mx + my * my) / 170) : 0;
        ctx.strokeStyle = 'rgba(46,115,234,' + (0.10 + near * 0.42).toFixed(3) + ')';
        ctx.lineWidth = 0.9 + near * 1.1;
        ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(B.x, B.y); ctx.stroke();
      }
      for (i = 0; i < nodes.length; i++) {
        n = nodes[i];
        var dx = n.x - mouse.x, dy = n.y - mouse.y;
        var prox = mouse.on ? Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / 150) : 0;
        ctx.fillStyle = prox > .02 ? 'rgba(131,66,215,' + (0.55 + prox * 0.45).toFixed(3) + ')'
                                   : 'rgba(23,45,103,0.62)';
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r + prox * 2.4, 0, 6.2832); ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    }

    var raf = null, started = false;
    function start() {
      if (started) return;
      try { build(); frame(); } catch (e) { return; }   // video stays on failure
      started = true;
      host.classList.add('graph-live');
    }

    host.addEventListener('pointermove', function (e) {
      var r = cv.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; mouse.on = true;
    });
    host.addEventListener('pointerleave', function () { mouse.on = false; });

    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt); rt = setTimeout(function () { if (started) build(); }, 160);
    });
    // Stop the loop when the tab is hidden — a rAF running behind a background
    // tab is a battery cost for something nobody is looking at.
    document.addEventListener('visibilitychange', function () {
      if (!started) return;
      if (document.hidden) { cancelAnimationFrame(raf); }
      else { raf = requestAnimationFrame(frame); }
    });

    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start);
  })();
})();
