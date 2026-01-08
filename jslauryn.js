// Navigation entre pages
function showPage(pageName) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    document.getElementById(pageName).classList.add('active');
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    const activeLink = Array.from(navLinks).find(link => 
        link.getAttribute('onclick').includes(pageName)
    );
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    document.getElementById('nav-menu').classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle mobile menu
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}

// Gestion des catégories de compétences
function showSkillCategory(category) {
    console.log('Category clicked:', category); // Pour debug
    
    // Masquer toutes les catégories
    document.getElementById('reseaux').classList.remove('active');
    document.getElementById('dev').classList.remove('active');
    
    // Afficher la catégorie demandée
    document.getElementById(category).classList.add('active');
    
    // Mettre à jour les boutons
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (category === 'reseaux') {
        buttons[0].classList.add('active');
    } else {
        buttons[1].classList.add('active');
    }
}

// Gestion du formulaire de contact
function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    alert(`Message envoyé avec succès !\n\nNom: ${name}\nEmail: ${email}\nSujet: ${subject}\n\nVotre message a été reçu. Je vous répondrai dans les plus brefs délais.`);
    
    event.target.reset();
}

// Effet d'ombre sur la navbar au scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
    } else {
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});