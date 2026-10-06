// IEEE Pune Blockchain Group - Interactive Client Logic & Flutter M3 Widgets
// Master Data Source: window.IEEE_DATA (loaded from data/site-data.js)

document.addEventListener('DOMContentLoaded', () => {
  const masterData = window.IEEE_DATA || { events: [], guests: [] };

  // ==================== 1. MOBILE NAVIGATION DRAWER ====================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenu.classList.toggle('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', (!isExpanded).toString());
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ==================== 2. PILL CHECKBOX MULTI-SELECT ====================
  const pillCheckboxes = document.querySelectorAll('input[name="areasOfInterest"]');
  pillCheckboxes.forEach(checkbox => {
    const parentLabel = checkbox.closest('.pill-checkbox');
    const updateStyle = () => {
      if (checkbox.checked) {
        parentLabel?.classList.add('is-checked');
      } else {
        parentLabel?.classList.remove('is-checked');
      }
    };
    checkbox.addEventListener('change', updateStyle);
    updateStyle();
  });

  // ==================== 3. FULL-SCREEN MODAL MEDIA LIGHTBOX (PLAYLIST & ARROWS) ====================
  const lightbox = document.getElementById('media-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxMeta = document.getElementById('lightbox-meta');
  const lightboxSource = document.getElementById('lightbox-source');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const lightboxCounter = document.getElementById('lightbox-counter');

  let lightboxPlaylist = [];
  let currentLightboxIndex = 0;

  function collectLightboxItems() {
    const triggers = document.querySelectorAll('[data-lightbox-src]');
    const items = [];
    triggers.forEach(tr => {
      items.push({
        src: tr.getAttribute('data-lightbox-src'),
        title: tr.getAttribute('data-lightbox-title') || 'Institutional Media',
        meta: tr.getAttribute('data-lightbox-meta') || '',
        source: tr.getAttribute('data-lightbox-source') || ''
      });
    });
    return items;
  }

  function displayLightboxItem(index) {
    if (!lightbox || !lightboxImg || lightboxPlaylist.length === 0) return;
    if (index < 0) index = lightboxPlaylist.length - 1;
    if (index >= lightboxPlaylist.length) index = 0;
    currentLightboxIndex = index;

    const item = lightboxPlaylist[currentLightboxIndex];
    lightboxImg.src = item.src;
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxMeta) lightboxMeta.textContent = item.meta;
    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${lightboxPlaylist.length}`;
    }

    if (lightboxSource) {
      if (item.source) {
        lightboxSource.href = item.source;
        lightboxSource.classList.remove('hidden');
      } else {
        lightboxSource.classList.add('hidden');
      }
    }
  }

  function openLightbox(src, title, meta, sourceUrl) {
    if (!lightbox || !lightboxImg) return;
    lightboxPlaylist = collectLightboxItems();
    
    // Find index of clicked item or prepend if not present
    let idx = lightboxPlaylist.findIndex(it => it.src === src);
    if (idx === -1) {
      lightboxPlaylist.unshift({ src, title, meta, source: sourceUrl });
      idx = 0;
    }
    
    displayLightboxItem(idx);
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      displayLightboxItem(currentLightboxIndex - 1);
    });
  }
  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      displayLightboxItem(currentLightboxIndex + 1);
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox?.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') displayLightboxItem(currentLightboxIndex - 1);
    if (e.key === 'ArrowRight') displayLightboxItem(currentLightboxIndex + 1);
  });

  // Global delegate for data-lightbox-src
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-lightbox-src]');
    if (trigger) {
      e.preventDefault();
      const src = trigger.getAttribute('data-lightbox-src');
      const title = trigger.getAttribute('data-lightbox-title') || '';
      const meta = trigger.getAttribute('data-lightbox-meta') || '';
      const source = trigger.getAttribute('data-lightbox-source') || '';
      openLightbox(src, title, meta, source);
    }
  });

  // ==================== 4. PHOTO SHOWCASE GALLERY FILTER CHIPS ====================
  const galleryChips = document.querySelectorAll('.gallery-filter-chip');
  const galleryCards = document.querySelectorAll('[data-gallery-category]');

  galleryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const selectedCategory = chip.getAttribute('data-category');
      galleryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      galleryCards.forEach(card => {
        const cardCat = card.getAttribute('data-gallery-category');
        if (selectedCategory === 'all' || cardCat === selectedCategory) {
          card.classList.remove('hidden');
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transition = 'opacity 0.25s ease';
          }, 10);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ==================== 5. HARDWARE RIG INSPECTOR SWITCHER ====================
  const inspectorHotspots = document.querySelectorAll('.inspector-hotspot');
  const inspectorMainImg = document.getElementById('inspector-main-img');
  const inspectorImgCaption = document.getElementById('inspector-img-caption');
  const inspectorDetailTitle = document.getElementById('inspector-detail-title');
  const inspectorDetailDesc = document.getElementById('inspector-detail-desc');

  inspectorHotspots.forEach(hotspot => {
    hotspot.addEventListener('click', () => {
      inspectorHotspots.forEach(h => h.classList.remove('active'));
      hotspot.classList.add('active');

      const imgSrc = hotspot.getAttribute('data-img');
      const imgCaption = hotspot.getAttribute('data-caption');
      const title = hotspot.getAttribute('data-title');
      const desc = hotspot.getAttribute('data-desc');

      if (inspectorMainImg && imgSrc) {
        inspectorMainImg.style.opacity = '0.3';
        setTimeout(() => {
          inspectorMainImg.src = imgSrc;
          inspectorMainImg.style.opacity = '1';
        }, 120);
      }
      if (inspectorImgCaption && imgCaption) inspectorImgCaption.textContent = imgCaption;
      if (inspectorDetailTitle && title) inspectorDetailTitle.textContent = title;
      if (inspectorDetailDesc && desc) inspectorDetailDesc.textContent = desc;
    });
  });

  // ==================== 6. DYNAMIC EVENT TABS & EVENT DETAIL PANEL ====================
  const subtabsContainer = document.getElementById('event-subtabs-container');
  const detailPanel = document.getElementById('event-detail-panel');
  const timelineTabs = document.querySelectorAll('.timeline-tab');
  const eventCards = document.querySelectorAll('[data-event-year]');
  const eventSearchInput = document.getElementById('event-search-input');
  const eventCountBadge = document.getElementById('event-count-badge');

  let currentYear = 'all';
  let activeEventId = null;

  function getInitials(name) {
    return name.split(' ').map(n => n[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  }

  function renderEventDetail(event) {
    if (!detailPanel || !event) return;

    // Resolve guests
    const resolvedGuests = event.guestsResolved || [];

    // Render Event Gallery
    let galleryHtml = '';
    if (event.gallery && event.gallery.length > 0) {
      galleryHtml = `
        <div class="mt-5 border-t border-white/10 pt-4">
          <h4 class="font-heading text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-ieee-brightcyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            Event Photo Gallery (${event.gallery.length} Photos)
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            ${event.gallery.map(img => `
              <div 
                class="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 cursor-pointer transition hover:border-ieee-brightcyan"
                data-lightbox-src="${img.image}"
                data-lightbox-title="${event.name}"
                data-lightbox-meta="${img.caption} · ${img.credit || ''}"
                data-lightbox-source="${event.links?.sources?.[0]?.url || ''}"
              >
                <img src="${img.image}" alt="${img.alt || event.name}" class="h-32 w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-2 opacity-90 group-hover:opacity-100">
                  <p class="text-[10px] text-white line-clamp-2 leading-tight">${img.caption}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Render Guests / Speakers Cards
    let guestsHtml = '';
    if (resolvedGuests.length > 0) {
      guestsHtml = `
        <div class="mt-5 border-t border-white/10 pt-4">
          <h4 class="font-heading text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-ieee-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
            Featured Speakers & Dignitaries (${resolvedGuests.length})
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            ${resolvedGuests.map(g => `
              <div class="rounded-xl border border-white/10 bg-white/5 p-3 flex flex-col justify-between">
                <div class="flex items-start gap-2.5">
                  <div class="w-9 h-9 rounded-full bg-gradient-to-br from-ieee-primary to-ieee-brightcyan flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm">
                    ${getInitials(g.name)}
                  </div>
                  <div class="min-w-0 flex-1">
                    <h5 class="text-xs font-bold text-white truncate">${g.name}</h5>
                    <p class="text-[10px] text-cyan-300 truncate">${g.role}</p>
                    <p class="text-[10px] text-slate-400 truncate">${g.organization}</p>
                  </div>
                </div>
                <div class="mt-2.5 pt-2 border-t border-white/10 flex items-center gap-2">
                  ${g.linkedin ? `
                    <a href="${g.linkedin}" target="_blank" rel="noopener noreferrer" class="text-[10px] inline-flex items-center gap-1 font-semibold text-ieee-brightcyan hover:underline">
                      <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      LinkedIn ✓
                    </a>
                  ` : `
                    <span class="text-[9px] text-slate-500">Profile on record</span>
                  `}
                  ${g.website ? `
                    <a href="${g.website}" target="_blank" rel="noopener noreferrer" class="text-[10px] text-slate-400 hover:text-white ml-auto">
                      Website ↗
                    </a>
                  ` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Render Action & Source Links
    const sourceLinks = event.links?.sources || [];
    let linksHtml = '';
    if (sourceLinks.length > 0 || event.links?.recap || event.links?.registration) {
      linksHtml = `
        <div class="mt-5 border-t border-white/10 pt-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-slate-400 font-medium">Verified Sources:</span>
            ${sourceLinks.map(s => `
              <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="rounded bg-white/10 px-2 py-0.5 text-[11px] text-cyan-200 hover:bg-white/20 transition">
                ${s.label} ↗
              </a>
            `).join('')}
          </div>
          <div class="flex items-center gap-2">
            ${event.links?.recap ? `
              <a href="${event.links.recap}" target="_blank" rel="noopener noreferrer" class="btn-primary text-xs py-1.5 px-3">
                Event Recap / Archive ↗
              </a>
            ` : ''}
            ${event.links?.registration ? `
              <a href="${event.links.registration}" target="_blank" rel="noopener noreferrer" class="rounded-full bg-ieee-gold px-3 py-1.5 text-xs font-bold text-slate-900 hover:bg-amber-400 transition">
                Conference Portal ↗
              </a>
            ` : ''}
          </div>
        </div>
      `;
    }

    // Detail Panel Output
    detailPanel.innerHTML = `
      <div class="grid gap-6 lg:grid-cols-12 items-start">
        <div class="lg:col-span-4">
          <div 
            class="group relative overflow-hidden rounded-xl border border-white/15 bg-black cursor-pointer shadow-lg"
            data-lightbox-src="${event.coverImage || event.gallery?.[0]?.image || 'assets/images/events/symposium-2024-stage.jpg'}"
            data-lightbox-title="${event.name}"
            data-lightbox-meta="${event.date} · ${event.venue}"
            data-lightbox-source="${event.links?.sources?.[0]?.url || ''}"
          >
            <img 
              src="${event.coverImage || event.gallery?.[0]?.image || 'assets/images/events/symposium-2024-stage.jpg'}" 
              alt="${event.name}" 
              class="w-full h-56 sm:h-64 object-cover transition duration-300 group-hover:scale-105" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-3.5">
              <span class="chip chip-cyan w-fit mb-1">${event.year} Cover Image</span>
              <span class="text-xs text-white/90 font-medium">Click to Inspect in Lightbox ↗</span>
            </div>
          </div>
        </div>

        <div class="lg:col-span-8 flex flex-col justify-between">
          <div>
            <div class="flex flex-wrap items-center gap-2">
              <span class="event-badge badge-symposium">${event.type}</span>
              <span class="rounded bg-white/10 px-2 py-0.5 text-xs font-semibold text-white">${event.year}</span>
              <span class="text-xs text-slate-300">📅 ${event.date}</span>
            </div>

            <h3 class="font-heading mt-2 text-xl sm:text-2xl font-bold text-white">
              ${event.name}
            </h3>

            <p class="mt-1 text-xs sm:text-sm font-medium text-ieee-brightcyan">
              📍 ${event.venue}
            </p>

            <p class="mt-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
              ${event.description}
            </p>

            <div class="mt-3 flex flex-wrap items-center gap-2 text-xs">
              <span class="rounded bg-ieee-primary/30 border border-ieee-primary/50 px-2.5 py-1 text-cyan-200 font-medium">
                Role: ${event.puneGroupRole}
              </span>
              ${event.participants ? `
                <span class="rounded bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-1 text-emerald-300 font-medium">
                  ${event.participants}
                </span>
              ` : ''}
            </div>

            ${event.topics ? `
              <div class="mt-3 flex flex-wrap gap-1.5">
                ${event.topics.map(t => `<span class="rounded bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] text-slate-300">${t}</span>`).join('')}
              </div>
            ` : ''}
          </div>
        </div>
      </div>

      ${galleryHtml}
      ${guestsHtml}
      ${linksHtml}
    `;
  }

  function renderSubtabs(year) {
    if (!subtabsContainer) return;
    const events = (year === 'all') 
      ? masterData.events 
      : masterData.events.filter(e => e.year === year);

    if (events.length === 0) {
      subtabsContainer.innerHTML = '<span class="text-xs text-slate-400">No events found for this filter.</span>';
      return;
    }

    subtabsContainer.innerHTML = events.map((ev, idx) => {
      const isActive = (activeEventId === ev.id) || (!activeEventId && idx === 0);
      if (isActive) activeEventId = ev.id;
      return `
        <button 
          type="button" 
          class="event-selector-pill ${isActive ? 'active' : ''}" 
          data-event-id="${ev.id}"
          role="tab"
          aria-selected="${isActive}"
        >
          <span class="w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-cyan-400'}"></span>
          <span class="truncate max-w-[200px]">${ev.name}</span>
        </button>
      `;
    }).join('');

    // Attach listeners
    subtabsContainer.querySelectorAll('.event-selector-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        subtabsContainer.querySelectorAll('.event-selector-pill').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        activeEventId = btn.getAttribute('data-event-id');
        const selectedEvent = masterData.events.find(e => e.id === activeEventId);
        renderEventDetail(selectedEvent);
      });
    });

    const currentEvent = masterData.events.find(e => e.id === activeEventId) || events[0];
    renderEventDetail(currentEvent);
  }

  // Initialize Event subtabs & detail
  if (masterData.events && masterData.events.length > 0) {
    renderSubtabs('all');
  }

  // Year filter buttons logic
  timelineTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      timelineTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      currentYear = tab.getAttribute('data-year') || 'all';

      // Update Subtabs and Detail
      activeEventId = null;
      renderSubtabs(currentYear);

      // Filter 10-event grid below
      applyEventFilters();
    });
  });

  // Search logic for 10-event grid
  function applyEventFilters() {
    let visibleCount = 0;
    const query = (eventSearchInput?.value || '').toLowerCase().trim();

    eventCards.forEach(card => {
      const cardYear = card.getAttribute('data-event-year') || '';
      const textContent = card.textContent.toLowerCase();

      const matchesYear = (currentYear === 'all' || cardYear === currentYear);
      const matchesSearch = (!query || textContent.includes(query));

      if (matchesYear && matchesSearch) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    if (eventCountBadge) {
      eventCountBadge.textContent = `Showing ${visibleCount} of ${eventCards.length} events`;
    }
  }

  if (eventSearchInput) {
    eventSearchInput.addEventListener('input', applyEventFilters);
  }

  // ==================== 7. GUESTS & SPEAKERS DIRECTORY ====================
  const guestsGrid = document.getElementById('guests-directory-grid');
  const guestSearchInput = document.getElementById('guest-search-input');
  const guestCountBadge = document.getElementById('guest-count-badge');
  const guestFilterChips = document.querySelectorAll('[data-guest-filter]');

  let currentGuestCategory = 'all';
  let guestSearchQuery = '';

  function renderGuests() {
    if (!guestsGrid) return;
    const allGuests = masterData.guests || [];

    const filtered = allGuests.filter(g => {
      // Category filter
      let matchesCat = true;
      if (currentGuestCategory === 'keynote') {
        matchesCat = (g.role?.toLowerCase().includes('chair') || g.role?.toLowerCase().includes('keynote') || g.role?.toLowerCase().includes('director'));
      } else if (currentGuestCategory === 'industry') {
        matchesCat = (g.role?.toLowerCase().includes('founder') || g.role?.toLowerCase().includes('vp') || g.role?.toLowerCase().includes('consultant') || g.role?.toLowerCase().includes('practitioner') || g.role?.toLowerCase().includes('executive') || g.role?.toLowerCase().includes('manager'));
      } else if (currentGuestCategory === 'academic') {
        matchesCat = (g.role?.toLowerCase().includes('professor') || g.role?.toLowerCase().includes('coordinator') || g.role?.toLowerCase().includes('scholar') || g.organization?.toLowerCase().includes('pccoe') || g.organization?.toLowerCase().includes('college'));
      }

      // Query filter
      const text = `${g.name} ${g.role} ${g.organization} ${g.bio || ''}`.toLowerCase();
      const matchesQuery = !guestSearchQuery || text.includes(guestSearchQuery);

      return matchesCat && matchesQuery;
    });

    if (guestCountBadge) {
      guestCountBadge.textContent = `Showing ${filtered.length} of ${allGuests.length} guests`;
    }

    if (filtered.length === 0) {
      guestsGrid.innerHTML = `
        <div class="col-span-full py-8 text-center bg-white rounded-xl border border-slate-200">
          <p class="text-sm font-semibold text-slate-700">No guests match your search filter.</p>
          <p class="text-xs text-slate-500 mt-1">Try another keyword or select "All Guests".</p>
        </div>
      `;
      return;
    }

    guestsGrid.innerHTML = filtered.map(g => {
      // Map events they appeared at
      const appearedEvents = (g.events || []).map(evId => {
        const found = masterData.events.find(e => e.id === evId);
        return found ? { id: found.id, name: found.name, year: found.year } : null;
      }).filter(Boolean);

      return `
        <div class="guest-card">
          <div class="flex items-start gap-3">
            <div class="guest-avatar-ring">
              ${g.photo ? `
                <img src="${g.photo}" alt="${g.name}" loading="lazy" />
              ` : `
                <div class="guest-avatar-initials">${getInitials(g.name)}</div>
              `}
            </div>
            <div class="min-w-0 flex-1">
              <h4 class="font-heading text-sm font-bold text-ieee-navy leading-snug">${g.name}</h4>
              <p class="text-xs font-semibold text-ieee-primary mt-0.5 line-clamp-1">${g.role}</p>
              <p class="text-[11px] text-slate-500 line-clamp-1">${g.organization}</p>
            </div>
          </div>

          <p class="mt-3 text-xs text-slate-600 leading-relaxed flex-1 line-clamp-3">
            ${g.bio || 'Distinguished subject-matter expert contributing to IEEE Pune Blockchain Group initiatives.'}
          </p>

          <!-- Appeared At Badges -->
          ${appearedEvents.length > 0 ? `
            <div class="mt-3 pt-2.5 border-t border-slate-100">
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Appeared At:</span>
              <div class="flex flex-wrap gap-1">
                ${appearedEvents.map(ev => `
                  <button 
                    type="button" 
                    class="guest-event-jump text-[10px] bg-slate-100 hover:bg-sky-100 hover:text-ieee-primary text-slate-700 px-2 py-0.5 rounded transition font-medium text-left truncate max-w-[190px]"
                    data-jump-event-id="${ev.id}"
                    data-jump-year="${ev.year}"
                  >
                    ${ev.year} · ${ev.name}
                  </button>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Contact & Profile Links -->
          <div class="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
            ${g.linkedin ? `
              <a href="${g.linkedin}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 font-semibold text-ieee-primary hover:text-ieee-brightcyan transition">
                <svg class="w-3.5 h-3.5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span>LinkedIn</span>
                <span class="text-[10px] text-emerald-600 font-bold">✓</span>
              </a>
            ` : `
              <span class="text-[11px] text-slate-400">Profile Verified</span>
            `}

            ${g.website ? `
              <a href="${g.website}" target="_blank" rel="noopener noreferrer" class="text-xs text-slate-500 hover:text-ieee-navy font-medium">
                Official Site ↗
              </a>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');

    // Attach click handlers to jump to event tabs
    guestsGrid.querySelectorAll('.guest-event-jump').forEach(btn => {
      btn.addEventListener('click', () => {
        const evId = btn.getAttribute('data-jump-event-id');
        const evYear = btn.getAttribute('data-jump-year');
        if (!evId) return;

        // Switch timeline year tab
        timelineTabs.forEach(t => {
          if (t.getAttribute('data-year') === evYear) {
            t.classList.add('active');
            t.setAttribute('aria-selected', 'true');
          } else {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
          }
        });

        currentYear = evYear;
        activeEventId = evId;
        renderSubtabs(evYear);
        applyEventFilters();

        // Scroll smoothly to events section
        document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  renderGuests();

  guestFilterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      guestFilterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentGuestCategory = chip.getAttribute('data-guest-filter') || 'all';
      renderGuests();
    });
  });

  if (guestSearchInput) {
    guestSearchInput.addEventListener('input', (e) => {
      guestSearchQuery = e.target.value.toLowerCase().trim();
      renderGuests();
    });
  }

  // ==================== 8. JOIN FORM VALIDATION & SUBMISSION ====================
  const joinForm = document.getElementById('join-form');
  const formStatus = document.getElementById('form-status');
  const formSuccess = document.getElementById('form-success');
  const submitBtn = document.getElementById('submit-btn');
  const submitAnotherBtn = document.getElementById('submit-another-btn');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const SUBMISSION_ENDPOINT = "https://script.google.com/macros/s/AKfycbzwS5F36cS8behn9sgMW-tfEBiRtcY2zzlfUqbhGu62gkwxNtgCuKSawPD0W-v3bOhZsg/exec";

  function showError(msg) {
    if (formStatus) {
      formStatus.textContent = msg;
      formStatus.classList.remove('hidden');
    }
  }

  function clearError() {
    if (formStatus) {
      formStatus.textContent = '';
      formStatus.classList.add('hidden');
    }
  }

  if (joinForm) {
    joinForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      clearError();

      const formData = new FormData(joinForm);
      const fullName = String(formData.get('fullName') || '').trim();
      const email = String(formData.get('email') || '').trim();
      const phone = String(formData.get('phone') || '').trim();
      const membershipNumber = String(formData.get('membershipNumber') || '').trim();
      const category = String(formData.get('category') || '').trim();
      const organization = String(formData.get('organization') || '').trim();
      const message = String(formData.get('message') || '').trim();

      const checkedInterests = Array.from(
        document.querySelectorAll('input[name="areasOfInterest"]:checked')
      ).map(cb => cb.value);

      if (!fullName) {
        showError('Please enter your full name.');
        return;
      }
      if (!email || !emailRegex.test(email)) {
        showError('Please enter a valid academic or professional email address.');
        return;
      }
      if (!category) {
        showError('Please select what best describes your primary affiliation.');
        return;
      }
      if (!organization) {
        showError('Please enter your institution or organization name.');
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting Application...';
      }

      const payload = {
        fullName,
        email,
        phone,
        membershipNumber,
        category,
        organization,
        areasOfInterest: checkedInterests,
        message,
        timestamp: new Date().toISOString()
      };

      try {
        await fetch(SUBMISSION_ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        joinForm.classList.add('hidden');
        if (formSuccess) formSuccess.classList.remove('hidden');
      } catch (err) {
        showError('Connection error during submission. Please verify internet access.');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Submit Registration';
        }
      }
    });
  }

  if (submitAnotherBtn) {
    submitAnotherBtn.addEventListener('click', () => {
      joinForm?.reset();
      pillCheckboxes.forEach(cb => {
        cb.checked = false;
        cb.closest('.pill-checkbox')?.classList.remove('is-checked');
      });
      clearError();
      if (formSuccess) formSuccess.classList.add('hidden');
      joinForm?.classList.remove('hidden');
    });
  }
});
