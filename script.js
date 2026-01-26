// ==================== DATA MANAGEMENT ====================
const portfolioData = {
    personalInfo: {
        name: "Ahmed Almostafa",
        title: "Software Engineer & Full-Stack Developer",
        email: "almostafa0338@gmail.com",
        location: "Doha, Qatar",
        website: "almostafa0338.vercel.app",
        about: "I am a passionate Software Engineer with a Bachelor's in Information Technology (Honours) from the University of Science and Technology, graduating with a GPA of 3.95/4.0. I have been freelancing as a Web Developer since 2020, building scalable websites and applications. My expertise spans full-stack web development, web security, responsive design, and various programming languages.",
        languages: ["English - Fluent", "Arabic - Native"],
        interests: ["Coaching", "Linux"]
    },
    
    stats: [
        { number: "4+", label: "Years Experience" },
        { number: "50+", label: "Projects Completed" },
        { number: "12+", label: "Technologies" },
    ],
    
    skills: {
        "Programming Languages": [
            { name: "C", level: 90 },
            { name: "C++", level: 85 },
            { name: "Python", level: 95 },
            { name: "Java", level: 88 },
            { name: "JavaScript", level: 92 },
            { name: "SQL", level: 87 },
            { name: "Bash", level: 80 },
            { name: "PHP", level: 85 },
            { name: "VB Programming", level: 75 }
        ],
        "Web Development": [
            { name: "DevOps", level: 82 },
            { name: "Responsive Design", level: 95 },
            { name: "Security Best Practices", level: 88 },
            { name: "Testing and Debugging", level: 90 },
            { name: "Performance Optimization", level: 85 }
        ],
        ".NET Development": [
            { name: "ASP.NET MVC", level: 85 },
            { name: "Entity Framework", level: 80 },
            { name: "LINQ", level: 82 },
            { name: "RESTful API Development", level: 88 },
            { name: "Azure & Cloud Services", level: 78 },
            { name: "Unit Testing & TDD", level: 85 }
        ],
        "Databases": [
            { name: "PostgreSQL", level: 90 },
            { name: "MySQL", level: 88 },
            { name: "Oracle", level: 75 },
            { name: "MongoDB", level: 80 }
        ],
        "Tools & Other": [
            { name: "Git & GitHub", level: 95 },
            { name: "CI/CD", level: 82 },
            { name: "Linux SysAdmin", level: 85 },
            { name: "Critical Thinking", level: 90 },
            { name: "Problem Solving", level: 92 },
            { name: "Collaboration", level: 88 }
        ]
    },
    
    projects: [
        {
            title: "Final Year GPA Predictor",
            description: "A machine learning model for predicting final year GPA of IT students",
            technologies: ["Machine Learning", "Scikit-learn", "Python"],
            repository: "https://github.com/almostafa0338/Project_38_GPA_Predictor",
            color: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
            image: "images/FYGPA.png"
        },
        {
            title: "Hiwarat LMS",
            description: "A seamless learning ecosystem designed to bridge the gap between lecture hall listening and true academic mastery",
            technologies: ["React", "JavaScript", "CSS", "Responsive Design"],
            repository: "https://github.com/almostafa0338/Hiwarat-LMS",
            color: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            image: "images/hiwarat.png"
        },
        {
            title: "LoomStack",
            description: "A high-performance web framework designed to seamlessly weave together disparate microservices into a single, cohesive digital fabric.",
            technologies: ["C#", "TypeScript", "Angular", "PostgreSQL"],
            repository: "https://github.com/almostafa0338/LoomStack",
            color: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
            image: "images/loomstack.png"
        }
    ],
    
    blogs: [
        {
            title: "Why 'Working Code' Isn't Enough",
            date: "January 2026",
            excerpt: "The Case for Readable Architecture and Maintainable Systems",
            url: "blog/working-code.html",
            color: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
            image: "images/loomstack.png",
            duration: "8 min"
        },
        {
            title: "Bridging the Gap",
            date: "November 2025",
            excerpt: "How to Translate Complex Business Requirements into Scalable Back-End Logic",
            url: "blog/bridging-the-gap.html",
            color: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            image: "images/btg.png",
            duration: "6 min"
        },
        {
            title: "Architecture for Performance",
            date: "September 2025",
            excerpt: "Best Practices for Building Highly Functional and Resource-Efficient Systems",
            url: "blog/architecture-for-performance.html",
            color: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
            image: "images/afp.png",
            duration: "10 min"
        }
    ],
    
    typingTexts: [
        "Backend Engineer",
        "Web Developer",
        "Software Engineer",
    ]
};

// ==================== DOM ELEMENTS ====================
const DOM = {
    mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
    navLinks: document.getElementById('nav-links'),
    backToTop: document.getElementById('back-to-top'),
    typingText: document.getElementById('typing-text'),
    particlesContainer: document.getElementById('particles'),
    floatingShapes: document.getElementById('floating-shapes'),
    aboutStats: document.getElementById('about-stats'),
    projectsGrid: document.getElementById('projects-grid'),
    blogsGrid: document.getElementById('blogs-grid'),
    viewAllProjectsBtn: document.getElementById('view-all-projects-btn'),
    viewAllBlogsBtn: document.getElementById('view-all-blogs-btn')
};

// ==================== TYPING ANIMATION ====================
class TypingAnimation {
    constructor(texts, element, speed = 100, delay = 2000) {
        this.texts = texts;
        this.element = element;
        this.speed = speed;
        this.delay = delay;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.init();
    }
    
    init() {
        this.type();
    }
    
    type() {
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }
        
        if (!this.isDeleting && this.charIndex === currentText.length) {
            this.isDeleting = true;
            setTimeout(() => this.type(), this.delay);
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            setTimeout(() => this.type(), 500);
        } else {
            setTimeout(() => this.type(), this.isDeleting ? this.speed / 2 : this.speed);
        }
    }
}

// ==================== PARTICLE SYSTEM ====================
function createParticles() {
    const particlesContainer = DOM.particlesContainer;
    particlesContainer.innerHTML = '';
    
    const particleCount = window.innerWidth < 768 ? 30 : 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 10 + 5;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
        
        particlesContainer.appendChild(particle);
    }
    
    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% { transform: translate(0, 0) rotate(0deg); }
            100% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg); }
        }
    `;
    document.head.appendChild(style);
}

// ==================== FLOATING SHAPES ====================
function createFloatingShapes() {
    const shapesContainer = DOM.floatingShapes;
    shapesContainer.innerHTML = '';
    
    for (let i = 0; i < 5; i++) {
        const shape = document.createElement('div');
        shape.classList.add('floating-shape');
        
        const size = Math.random() * 100 + 50;
        const posX = Math.random() * 100 - 10;
        const posY = Math.random() * 100 - 10;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.left = `${posX}%`;
        shape.style.top = `${posY}%`;
        shape.style.animation = `floatShape ${duration}s ease-in-out ${delay}s infinite alternate`;
        
        shapesContainer.appendChild(shape);
    }
    
    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatShape {
            0% { transform: translate(0, 0) scale(1); opacity: 0.1; }
            100% { transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(${Math.random() * 0.5 + 0.8}); opacity: 0.2; }
        }
    `;
    document.head.appendChild(style);
}

// ==================== DYNAMIC CONTENT RENDERERS ====================
function renderStats() {
    const statsContainer = DOM.aboutStats;
    statsContainer.innerHTML = '';
    
    portfolioData.stats.forEach(stat => {
        const statElement = document.createElement('div');
        statElement.className = 'stat-item';
        statElement.innerHTML = `
            <span class="stat-number">${stat.number}</span>
            <span class="stat-label">${stat.label}</span>
        `;
        
        setTimeout(() => {
            statElement.style.opacity = '1';
            statElement.style.transform = 'translateY(0)';
        }, 100);
        
        statsContainer.appendChild(statElement);
    });
}

function renderProjects() {
    const projectsContainer = DOM.projectsGrid;
    projectsContainer.innerHTML = '';
    
    portfolioData.projects.forEach((project, index) => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';
        
        const techHTML = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        projectElement.innerHTML = `
            <div class="project-img" style="background: url('${project.image}') center/cover no-repeat;"></div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">${techHTML}</div>
                <div class="project-buttons">
                    <a href="${project.repository}" target="_blank" class="repo-btn">
                        <i class="fab fa-github"></i> Repository
                    </a>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectElement);
        
        projectElement.addEventListener('click', (e) => {
            if (!e.target.closest('.repo-btn')) {
                // Handle project card click
            }
        });
    });
}

function renderBlogs() {
    const blogsContainer = DOM.blogsGrid;
    blogsContainer.innerHTML = '';
    
    portfolioData.blogs.forEach((blog, index) => {
        const blogElement = document.createElement('div');
        blogElement.className = 'blog-card';
        
        blogElement.innerHTML = `
            <div class="blog-img" style="background: url('${blog.image}') center/cover no-repeat;"></div>
            <div class="blog-content">
                <span class="blog-date">${blog.date}</span>
                <h3 class="blog-title">${blog.title}</h3>
                <p class="blog-excerpt">${blog.excerpt}</p>
                <div class="blog-buttons">
                    <span class="read-time">${blog.duration}</span>
                    <a href="${blog.url}" class="read-btn">
                        <i class="fas fa-book-open"></i> Read Article
                    </a>
                </div>
            </div>
        `;
        
        blogsContainer.appendChild(blogElement);
        
        blogElement.addEventListener('click', (e) => {
            if (!e.target.closest('.read-btn')) {
                // Handle blog card click
            }
        });
    });
}

// ==================== SCROLL ANIMATIONS ====================
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                if (entry.target.id === 'about-stats') {
                    animateStatsCounting();
                }
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.project-card').forEach(el => observer.observe(el));
    document.querySelectorAll('.blog-card').forEach(el => observer.observe(el));
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            document.getElementById('header').classList.add('scrolled');
        } else {
            document.getElementById('header').classList.remove('scrolled');
        }
        
        if (window.scrollY > 500) {
            DOM.backToTop.classList.add('visible');
        } else {
            DOM.backToTop.classList.remove('visible');
        }
        
        updateActiveNavLink();
    });
}

function animateStatsCounting() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
        }, 30);
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ==================== INITIALIZATION ====================
function init() {
    // Only create typing animation if element exists
    if (DOM.typingText) {
        const typingAnimation = new TypingAnimation(
            portfolioData.typingTexts, 
            DOM.typingText, 
            100, 
            2000
        );
    }
    
    // Render stats if element exists
    if (DOM.aboutStats) {
        renderStats();
    }
    
    // Render projects if element exists
    if (DOM.projectsGrid) {
        renderProjects();
    }
    
    // Render blogs if element exists
    if (DOM.blogsGrid) {
        renderBlogs();
    }
    
    // Create particles if container exists
    if (DOM.particlesContainer) {
        createParticles();
    }
    
    // Create floating shapes if container exists
    if (DOM.floatingShapes) {
        createFloatingShapes();
    }
    
    // Event listener for mobile menu toggle (if button exists)
    if (DOM.mobileMenuToggle && DOM.navLinks) {
        DOM.mobileMenuToggle.addEventListener('click', () => {
            DOM.navLinks.classList.toggle('active');
            DOM.mobileMenuToggle.innerHTML = DOM.navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Event listener for back to top button (if button exists)
    if (DOM.backToTop) {
        DOM.backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (DOM.navLinks) {
                DOM.navLinks.classList.remove('active');
            }
            if (DOM.mobileMenuToggle) {
                DOM.mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Event listener for View All Projects button (if exists)
    if (DOM.viewAllProjectsBtn) {
        DOM.viewAllProjectsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Handle view all projects
        });
    }
    
    // Event listener for View All Blogs button (if exists)
    if (DOM.viewAllBlogsBtn) {
        DOM.viewAllBlogsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Handle view all blogs
        });
    }
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (DOM.particlesContainer) {
            createParticles();
        }
        if (DOM.floatingShapes) {
            createFloatingShapes();
        }
    });
    
    // Initial active nav link
    updateActiveNavLink();
}

// ==================== START APPLICATION ====================
document.addEventListener('DOMContentLoaded', init);
