// Mobile menu toggle
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});

// Profile image interactivity
const profileImage = document.getElementById('profileImage');
if (profileImage) {
    let isOriginal = true;
    const originalSrc = profileImage.src;
    const traditionalSrc = 'images/profile-traditional.jpg'; // Add this image
    
    profileImage.addEventListener('click', function() {
        if (isOriginal) {
            this.src = traditionalSrc;
            this.alt = "Beverly in traditional attire";
        } else {
            this.src = originalSrc;
            this.alt = "Beverly Chemutai";
        }
        isOriginal = !isOriginal;
    });
}

// Animate skill bars on scroll
const skills = document.querySelectorAll('.skill');
if (skills.length > 0) {
    window.addEventListener('scroll', function() {
        skills.forEach(skill => {
            const skillPosition = skill.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (skillPosition < screenPosition) {
                const percent = skill.getAttribute('data-percent');
                skill.querySelector('.bar').style.width = percent + '%';
            }
        });
    });
}

// Make recipe cards clickable
const recipeCards = document.querySelectorAll('.recipe-card');
recipeCards.forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function() {
        window.location.href = this.getAttribute('onclick').split("'")[1];
    });
});