// IEEE Pune Blockchain Group - Interactive Client Logic & Flutter M3 Widget Handlers

document.addEventListener('DOMContentLoaded', () => {
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

  // ==================== 3. MODAL MEDIA LIGHTBOX ====================
  const lightbox = document.getElementById('media-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxMeta = document.getElementById('lightbox-meta');
  const lightboxSource = document.getElementById('lightbox-source');
  const lightboxClose = document.getElementById('lightbox-close');

  function openLightbox(src, title, meta, sourceUrl) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    if (lightboxTitle) lightboxTitle.textContent = title || 'Institutional Media';
    if (lightboxMeta) lightboxMeta.textContent = meta || '';
    if (lightboxSource) {
      if (sourceUrl) {
        lightboxSource.href = sourceUrl;
        lightboxSource.classList.remove('hidden');
      } else {
        lightboxSource.classList.add('hidden');
      }
    }
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox?.classList.contains('is-open')) {
      closeLightbox();
    }
  });

  // Attach Lightbox triggers to gallery cards and thumbnails
  document.querySelectorAll('[data-lightbox-src]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const src = trigger.getAttribute('data-lightbox-src');
      const title = trigger.getAttribute('data-lightbox-title') || '';
      const meta = trigger.getAttribute('data-lightbox-meta') || '';
      const source = trigger.getAttribute('data-lightbox-source') || '';
      openLightbox(src, title, meta, source);
    });
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

  // ==================== 6. INTERACTIVE EVENT TIMELINE & LIVE SEARCH ====================
  const timelineTabs = document.querySelectorAll('.timeline-tab');
  const eventCards = document.querySelectorAll('[data-event-year]');
  const eventSearchInput = document.getElementById('event-search-input');
  const eventCountBadge = document.getElementById('event-count-badge');

  let currentYearFilter = 'all';
  let currentSearchQuery = '';

  function applyEventFilters() {
    let visibleCount = 0;

    eventCards.forEach(card => {
      const cardYear = card.getAttribute('data-event-year') || '';
      const textContent = card.textContent.toLowerCase();

      const matchesYear = (currentYearFilter === 'all' || cardYear === currentYearFilter);
      const matchesSearch = (!currentSearchQuery || textContent.includes(currentSearchQuery));

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

  timelineTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      timelineTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentYearFilter = tab.getAttribute('data-year') || 'all';
      applyEventFilters();
    });
  });

  if (eventSearchInput) {
    eventSearchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      applyEventFilters();
    });
  }

  // ==================== 7. JOIN FORM VALIDATION & SUBMISSION ====================
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
      if (checkedInterests.length === 0) {
        showError('Please select at least one area of interest.');
        return;
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
        chapter: 'IEEE Pune Blockchain Group',
        submittedAt: new Date().toISOString()
      };

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = 'Submitting Application…';
      }

      try {
        await fetch(SUBMISSION_ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify(payload)
        });

        joinForm.classList.add('hidden');
        if (formSuccess) {
          formSuccess.classList.remove('hidden');
        }
        joinForm.reset();
        pillCheckboxes.forEach(cb => {
          cb.checked = false;
          cb.closest('.pill-checkbox')?.classList.remove('is-checked');
        });
      } catch (err) {
        console.error('Submission error:', err);
        showError('Something went wrong. Please check your network connection and try again.');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = 'Submit Registration';
        }
      }
    });
  }

  if (submitAnotherBtn && joinForm && formSuccess) {
    submitAnotherBtn.addEventListener('click', () => {
      formSuccess.classList.add('hidden');
      joinForm.classList.remove('hidden');
      clearError();
    });
  }
});
