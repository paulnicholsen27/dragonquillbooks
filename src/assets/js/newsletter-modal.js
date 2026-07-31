// Newsletter Modal Functionality
(function() {
    'use strict';

    const modal = document.getElementById('newsletter-modal');
    if (!modal) return;

    const closeButtons = modal.querySelectorAll('[data-close-modal]');
    const modalContent = modal.querySelector('.modal-content');

    // Open modal
    function openModal() {
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
