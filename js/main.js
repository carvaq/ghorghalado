// Main JavaScript for Ghorghalado website
// This file loads content dynamically from JSON files for easy editing

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website
    initializeNavigation();
    loadDynamicContent();
    setupScrollEffects();
});

// Navigation functionality
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Load dynamic content from JSON files
async function loadDynamicContent() {
    try {
        // Load sections data
        const sectionsResponse = await fetch('data/sections.json');
        const sectionsData = await sectionsResponse.json();
        renderSections(sectionsData);

        // Load contact data
        const contactResponse = await fetch('data/contact.json');
        const contactData = await contactResponse.json();
        renderContact(contactData);

    } catch (error) {
        console.error('Error loading content:', error);
        // Fallback to show basic content if JSON files are not available
        showFallbackContent();
    }
}

// Render dynamic sections
function renderSections(data) {
    const container = document.getElementById('dynamic-sections');
    if (!container) return;

    container.innerHTML = '';

    data.sections.forEach(section => {
        const sectionElement = createSectionElement(section);
        container.appendChild(sectionElement);
    });

    // Add scroll animations to new elements
    setupScrollAnimations();
}

// Create a section element from data
function createSectionElement(sectionData) {
    const section = document.createElement('section');
    section.id = sectionData.id;
    section.className = 'section';

    let content = `
        <div class="container">
            <h2 class="section-title">${sectionData.title}</h2>
            <div class="section-content">
                <p>${sectionData.description}</p>
    `;

    // Add cards if they exist
    if (sectionData.cards && sectionData.cards.length > 0) {
        content += '<div class="section-grid">';
        sectionData.cards.forEach(card => {
            content += `
                <div class="card">
                    <h3 class="card-title">${card.title}</h3>
                    <p>${card.content}</p>
                </div>
            `;
        });
        content += '</div>';
    }

    // Add additional content if it exists
    if (sectionData.additionalContent) {
        sectionData.additionalContent.forEach(item => {
            if (item.type === 'paragraph') {
                content += `<p>${item.content}</p>`;
            } else if (item.type === 'list') {
                content += '<ul>';
                item.items.forEach(listItem => {
                    content += `<li>${listItem}</li>`;
                });
                content += '</ul>';
            }
        });
    }

    content += '</div></div>';
    section.innerHTML = content;

    return section;
}

// Render contact section
function renderContact(data) {
    const container = document.getElementById('contact-content');
    if (!container) return;

    let content = `<p>${data.description}</p>`;

    if (data.email) {
        content += `<p><strong>Email:</strong> <a href="mailto:${data.email}" style="color: white;">${data.email}</a></p>`;
    }

    if (data.phone) {
        content += `<p><strong>Teléfono:</strong> <a href="tel:${data.phone}" style="color: white;">${data.phone}</a></p>`;
    }

    if (data.address) {
        content += `<p><strong>Enderezo:</strong> ${data.address}</p>`;
    }

    if (data.socialMedia && data.socialMedia.length > 0) {
        content += '<div style="margin-top: 2rem;">';
        data.socialMedia.forEach(social => {
            content += `<a href="${social.url}" style="color: white; margin: 0 1rem; text-decoration: none;" target="_blank">${social.name}</a>`;
        });
        content += '</div>';
    }

    container.innerHTML = content;
}

// Fallback content if JSON files are not available
function showFallbackContent() {
    const container = document.getElementById('dynamic-sections');
    if (!container) return;

    container.innerHTML = `
        <section id="sobre-mel" class="section">
            <div class="container">
                <h2 class="section-title">Sobre o Mel Ghorghalado</h2>
                <div class="section-content">
                    <p>O mel Ghorghalado é un produto único de Galicia, elaborado polas nosas abelas que recollen o néctar das flores silvestres dos montes galegos.</p>
                    <div class="section-grid">
                        <div class="card">
                            <h3 class="card-title">Calidade Superior</h3>
                            <p>Mel artesanal de primeira calidade, sen aditivos nin conservantes artificiais.</p>
                        </div>
                        <div class="card">
                            <h3 class="card-title">Processo Natural</h3>
                            <p>Elaborado seguindo métodos tradicionais que respectan o medio ambiente.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="rexion" class="section">
            <div class="container">
                <h2 class="section-title">A Rexión</h2>
                <div class="section-content">
                    <p>O noso mel procede das montañas de Galicia, onde as abelas teñen acceso a unha gran variedade de flores silvestres.</p>
                </div>
            </div>
        </section>
        
        <section id="propiedades" class="section">
            <div class="container">
                <h2 class="section-title">Propiedades</h2>
                <div class="section-content">
                    <p>O mel Ghorghalado ten propiedades únicas grazas á diversidade floral da nosa rexión.</p>
                </div>
            </div>
        </section>
    `;

    // Load fallback contact
    const contactContainer = document.getElementById('contact-content');
    if (contactContainer) {
        contactContainer.innerHTML = `
            <p>Para máis información sobre o mel Ghorghalado, ponte en contacto connosco.</p>
            <p><strong>Email:</strong> <a href="mailto:info@ghorghalado.gl" style="color: white;">info@ghorghalado.gl</a></p>
        `;
    }

    setupScrollAnimations();
}

// Scroll effects and animations
function setupScrollEffects() {
    // Header background on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 254, 247, 0.98)';
        } else {
            header.style.background = 'rgba(255, 254, 247, 0.95)';
        }
    });
}

// Setup scroll animations for elements
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections and cards
    document.querySelectorAll('.section, .card').forEach(el => {
        observer.observe(el);
    });
}

// Utility function to safely load JSON with error handling
async function loadJSONFile(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error loading ${path}:`, error);
        return null;
    }
}