// IEEE Pune Blockchain Group - Institutional Theme Client Logic

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Drawer Toggle
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

  // Pill Checkbox Multi-Select Handling
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

  // Join Form Validation & Submission
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
