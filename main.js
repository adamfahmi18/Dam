(() => {
  const S = window.SITE, H = document.documentElement;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const wa = t => `https://wa.me/${S.wa}?text=${encodeURIComponent(t)}`;
  const rm = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const hov = matchMedia('(hover:hover)').matches;

  // Tombol magnetik (perangkat dengan hover)
  const mag = b => {
    if (!hov) return;
    b.addEventListener('pointermove', e => {
      if (!window.gsap || rm) return;
      const r = b.getBoundingClientRect();
      gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * .25, y: (e.clientY - r.top - r.height / 2) * .35, duration: .4, ease: 'power3.out' });
    });
    b.addEventListener('pointerleave', () => { if (window.gsap && !rm) gsap.to(b, { x: 0, y: 0, duration: .8, ease: 'elastic.out(1,.4)' }); });
  };

  // Karya
  $('#wl').innerHTML = S.projects.map(p => `
    <a class="row" data-r href="${p.url}" target="_blank" rel="noopener">
      <div><span class="tg">${p.tag}</span><h3>${p.t}</h3><p>${p.d}</p></div>
      <span class="th" style="--c:${p.c};${p.img ? `background-image:url(${p.img})` : ''}">${p.img ? '' : p.t.split(' ').pop()}</span>
      <span class="ar">Buka demo</span>
    </a>`).join('');

  // Layanan dan harga: tab kategori
  const tabs = $('#tabs'), pg = $('#pg'), td = $('#tabd');
  const li = (t, c) => `<li${c ? ` class="${c}"` : ''}>${t}</li>`;
  const card = (p, k) => `
    <article class="pc${p.hot ? ' hot' : ''}">${p.hot ? '<span class="bd">Paling populer</span>' : ''}
      <h3>${p.n}</h3>
      <div class="pr">${p.p}<small>sekali bayar</small></div>
      <p>${p.d}</p>
      <ul>${p.f.map(t => li(t)).join('')}${(p.x || []).map(t => li(t, 'x')).join('')}</ul>
      <a class="btn mag" target="_blank" rel="noopener" href="${wa(`Halo Dam, saya tertarik dengan paket ${p.n} (${k}).`)}">${p.hot ? 'Pilih paket ini' : 'Pesan sekarang'}</a>
    </article>`;
  const custom = c => `
    <article class="pc hot cu">
      <h3>${c.n}</h3><p>${c.d}</p>
      <ul>${c.f.map(t => li(t)).join('')}</ul>
      <a class="btn mag" target="_blank" rel="noopener" href="${wa('Halo Dam, saya ingin konsultasi soal website custom.')}">Konsultasi via WhatsApp</a>
    </article>`;
  const show = (i, anim) => {
    const c = S.cats[i];
    $$('.tb', tabs).forEach((b, j) => b.setAttribute('aria-selected', j === i));
    td.textContent = c.d;
    pg.innerHTML = c.custom ? custom(c.custom) : c.tiers.map(p => card(p, c.k)).join('');
    $$('.mag', pg).forEach(mag);
    if (anim && window.gsap && !rm) {
      gsap.from('#pg .pc', { y: 30, opacity: 0, duration: .6, ease: 'power3.out', stagger: .08 });
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    }
  };
  tabs.innerHTML = S.cats.map(c => `<button class="tb" role="tab">${c.k}</button>`).join('');
  tabs.onclick = e => { const b = e.target.closest('.tb'); if (b) show([...tabs.children].indexOf(b), true); };
  show(0);
  $('#note').textContent = S.note;

  // Kontak
  $$('[data-wa]').forEach(a => { a.href = wa(a.dataset.wa || S.waText); a.target = '_blank'; a.rel = 'noopener'; });
  const m = $('[data-mail]'); m.href = 'mailto:' + S.email; $('b', m).textContent = S.email;
  const g = $('[data-gh]'); g.href = S.github; g.target = '_blank'; g.rel = 'noopener';
  $$('.hero .mag').forEach(mag);

  // Tema: lingkaran meluas dari tombol (View Transitions), fallback cross-fade warna
  const set = t => { H.dataset.theme = t; try { localStorage.t = t; } catch (e) {} };
  $('.tt').onclick = e => {
    const n = H.dataset.theme === 'dark' ? 'light' : 'dark';
    if (document.startViewTransition && !rm) {
      const r = e.currentTarget.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
      const R = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      document.startViewTransition(() => set(n)).ready.then(() =>
        H.animate({ clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${R}px at ${x}px ${y}px)`] },
          { duration: 800, easing: 'cubic-bezier(.6,0,.2,1)', pseudoElement: '::view-transition-new(root)' }));
    } else {
      H.classList.add('theming'); set(n);
      setTimeout(() => H.classList.remove('theming'), 600);
    }
  };

  // Navbar: sembunyi saat scroll turun, muncul lagi saat scroll naik
  const nav = $('.nav'); let ly = 0;
  addEventListener('scroll', () => {
    const y = scrollY;
    nav.classList.toggle('hide', y > ly && y > 200);
    ly = y;
  }, { passive: true });

  if (!window.gsap || !window.ScrollTrigger || rm) return;
  gsap.registerPlugin(ScrollTrigger);

  // Pembuka: huruf naik dari balik topeng
  gsap.from('.hero h1 .ln > span', { yPercent: 115, duration: 1.2, ease: 'expo.out', stagger: .09, delay: .15 });
  gsap.from('[data-h]', { y: 24, opacity: 0, duration: .9, ease: 'power3.out', stagger: .12, delay: .7 });
  gsap.to('.hero h1', { yPercent: -14, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to('.bar', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: .3 } });

  // Muncul saat scroll turun, muncul lagi saat scroll naik, reset saat kembali ke atas
  $$('[data-r]').forEach(el => gsap.from(el, {
    y: 50, opacity: 0, duration: .9, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none restart reverse' }
  }));

  if (document.fonts) document.fonts.ready.then(() => ScrollTrigger.refresh());
})();
