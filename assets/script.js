// Certificate Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('certificateModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');
    const viewButtons = document.querySelectorAll('.view-btn');

    // Download CV
    const downloadCV = document.getElementById('downloadCV');
    if (downloadCV) {
        downloadCV.addEventListener('click', function(e) {
            console.log('Mengunduh CV...');
            
            const originalText = this.textContent;
            this.textContent = 'Mengunduh...';
            this.style.opacity = '0.7';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.opacity = '1';
            }, 1500);
        });
    }
    
    // Open modal when view button is clicked
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const certificateImage = this.closest('.certificate-item').querySelector('img');
            modal.style.display = 'block';
            modalImg.src = certificateImage.src;
            modalImg.alt = certificateImage.alt;
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal when close button is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside the image
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});