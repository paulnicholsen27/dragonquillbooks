// Newsletter Modal Functionality
(function() {
    'use strict';

    const modal = document.getElementById('newsletter-modal');
    if (!modal) return;

    const closeButtons = modal.querySelectorAll('[data-close-modal]');
    const modalContent = modal.querySelector('.modal-content');
    let mailchimpLoaded = false;

    // Lazy-load Mailchimp script
    function loadMailchimp() {
        if (mailchimpLoaded) return;
        mailchimpLoaded = true;
        const script = document.createElement('script');
        script.async = true;
        script.src = location.hostname.includes('netlify')
            ? 'https://chimpstatic.com/mcjs-connected/js/users/f0ece3d2ae377b7f77972511c/f2d5d08aeea365bb80ad2bf66.js'
            : 'https://chimpstatic.com/mcjs-connected/js/users/f0ece3d2ae377b7f77972511c/0613b1066f38828eb7105f45a.js';
        document.head.appendChild(script);
    }

    // Open modal
    function openModal() {
        loadMailchimp();
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');

        // Focus the email input
        const emailInput = modal.querySelector('#mce-EMAIL');
        if (emailInput) {
            setTimeout(() => emailInput.focus(), 100);
        }
    }

    // Close modal
    function closeModal() {
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }

    // Event listeners for close buttons and overlay
    closeButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
            closeModal();
        }
    });

    // Prevent clicks inside modal content from closing
    modalContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Expose openModal globally so CTA button can trigger it
    window.openNewsletterModal = openModal;

    // Also allow triggering via data attribute
    document.querySelectorAll('[data-open-newsletter-modal]').forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    });
})();
