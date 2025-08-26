// ========================================
// Vue.js Application
// ========================================
var app = new Vue({
    el: '#app',
    
    data: function() {
        return {
            // État de l'application
            isLoading: true,
            theme: 'light',
            currentLang: 'FR',
            
            // Navigation
            isScrolled: false,
            isMobileMenuOpen: false,
            activeSection: 'home',
            
            // Typing effect
            typingTexts: [
                'Développeur Full Stack',
                'Créateur d\'expériences web',
                'Passionné de technologie',
                'Expert Node.js & Vue.js'
            ],
            currentTypingText: '',
            typingTextIndex: 0,
            typingCharIndex: 0,
            isDeleting: false,
            
            // Projects
            activeFilter: 'all',
            projects: [
                {
                    id: 1,
                    name: 'GS Location',
                    description: 'Application complète d\'agence de location de véhicules avec système de réservation et vente de formations',
                    category: 'web',
                    image: 'img/gsPIC.png   ',
                    link: 'https://gslocation-59b35b52dd7a.herokuapp.com',
                    github: null,
                    techs: ['Node.js', 'Vue.js', 'Socket.io']
                },
                // {
                //     id: 2,
                //     name: 'Bombanime',
                //     description: 'Plateforme de mini-jeux multijoueurs sur l\'univers anime avec système de rooms en temps réel',
                //     category: 'game',
                //     image: 'img/bombanime.jpg',
                //     link: 'https://bombanime-59b3534b52dd7a.herokuapp.com',
                //     github: 'https://github.com/naahas/bombanime',
                //     techs: ['Node.js', 'Socket.io', 'Vue.js']
                // },
                {
                    id: 2,
                    name: 'LV9Dreams',
                    description: 'Site e-commerce moderne pour la vente de shilajit avec système de paiement intégré',
                    category: 'web',
                    image: 'img/lv9PIC.png',
                    link: 'https://www.lv9dreams.com',
                    github: null,
                    techs: ['Node.js', 'Vue.js', 'Socket.io']
                },
                {
                    id: 3,
                    name: 'Go Beyond',
                    description: 'Site vitrine premium pour service de coaching gaming avec interface interactive',
                    category: 'web',
                    image: 'img/beyond1.png',
                    link: 'https://beyond-5e66ea01eb9a.herokuapp.com/',
                    github: null,
                    techs: ['Node.js', 'Vue.js', 'jQuery']
                },
                // {
                //     id: 5,
                //     name: 'ShonenPath',
                //     description: 'Quiz interactif basé sur l\'univers anime/manga avec système de scores et classements',
                //     category: 'game',
                //     image: 'img/shonenpath.jpg',
                //     link: 'https://shonenpath-59h326eydd7a.herokuapp.com',
                //     github: 'https://github.com/naahas/shonenpath',
                //     techs: ['Node.js', 'Socket.io', 'Vue.js']
                // },
                {
                    id: 4,
                    name: 'NeoShell',
                    description: 'Mini shell interactif avec commandes personnalisées développé en C',
                    category: 'tool',
                    image: 'img/neoshell1.png',
                    link: null,
                    github: 'https://github.com/naahas/neoshell',
                    techs: ['C', 'Unix', 'Shell']
                }
            ],
            
            // Contact form
            contactForm: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },
            isSubmitting: false,
            formSuccess: false,
            formError: false,
            
            // Particles
            particles: [],
            mousePosition: { x: null, y: null },
            
            // Translations
            translations: {
                FR: {
                    nav: {
                        home: 'Accueil',
                        about: 'À propos',
                        skills: 'Compétences',
                        projects: 'Projets',
                        contact: 'Contact'
                    },
                    hero: {
                        subtitle: null,
                        tagline: 'Web • Application • Game',
                        viewProjects: 'Voir mes projets',
                        contactMe: 'Me contacter'
                    },
                    about: {
                        title: 'À propos',
                        intro: 'Développeur Full Stack passionné consciencieux et créatif , je transforme des idées en expériences numériques innovantes !',
                        creative: 'Créatif',
                        creativeDesc: 'Je conçois des solutions uniques et innovantes pour chaque projet',
                        conscientious: 'Consciencieux',
                        conscientiousDesc: 'Chaque ligne de code est écrite avec rigueur et attention aux détails',
                        curious: 'Curieux',
                        curiousDesc: 'Toujours en veille technologique pour proposer les meilleures solutions',
                        statsProjects: 'Projets réalisés',
                        statsYears: 'Années d\'expérience',
                        statsTechs: 'Technologies maîtrisées'
                    },
                    skills: {
                        title: 'Compétences',
                        frontend: 'Frontend',
                        backend: 'Backend',
                        others: 'Autres'
                    },
                    projects: {
                        title: 'Projets',
                        all: 'Tous',
                        webApps: 'Applications Web',
                        games: 'Jeux',
                        tools: 'Outils'
                    },
                    contact: {
                        title: 'Contact',
                        workTogether: 'Travaillons ensemble',
                        text: 'Vous avez un projet en tête ? N\'hésitez pas à me contacter pour en discuter.',
                        namePlaceholder: 'Votre nom',
                        emailPlaceholder: 'Votre email',
                        subjectPlaceholder: 'Sujet',
                        messagePlaceholder: 'Votre message',
                        send: 'Envoyer',
                        sending: 'Envoi...',
                        success: 'Message envoyé avec succès !',
                        error: 'Une erreur est survenue. Veuillez réessayer.'
                    }
                },
                EN: {
                    nav: {
                        home: 'Home',
                        about: 'About',
                        skills: 'Skills',
                        projects: 'Projects',
                        contact: 'Contact'
                    },
                    hero: {
                        subtitle: null,
                        tagline: 'Web • Application • Game',
                        viewProjects: 'Go to projects',
                        contactMe: 'Contact me'
                    },
                    about: {
                        title: 'About',
                        intro: 'Passionate, conscientious and creative Full Stack Developer, I transform ideas into innovative digital experiences !',
                        creative: 'Creative',
                        creativeDesc: 'I design unique and innovative solutions for each project',
                        conscientious: 'Conscientious',
                        conscientiousDesc: 'Every line of code is written with rigor and attention to detail',
                        curious: 'Curious',
                        curiousDesc: 'Always keeping up with technology to offer the best solutions',
                        statsProjects: 'Completed projects',
                        statsYears: 'Years of experience',
                        statsTechs: 'Technologies mastered'
                    },
                    skills: {
                        title: 'Skills',
                        frontend: 'Frontend',
                        backend: 'Backend',
                        others: 'Others'
                    },
                    projects: {
                        title: 'Projects',
                        all: 'All',
                        webApps: 'Web Apps',
                        games: 'Games',
                        tools: 'Tools'
                    },
                    contact: {
                        title: 'Contact',
                        workTogether: 'Let\'s work together',
                        text: 'Have a project in mind? Feel free to contact me to discuss it.',
                        namePlaceholder: 'Your name',
                        emailPlaceholder: 'Your email',
                        subjectPlaceholder: 'Subject',
                        messagePlaceholder: 'Your message',
                        send: 'Send',
                        sending: 'Sending...',
                        success: 'Message sent successfully!',
                        error: 'An error occurred. Please try again.'
                    }
                }
            },

            isTerminalOpen: false,
            terminalInput: '',
            terminalHistory: [],
            terminalCommands: {
                help: () => 'Available commands: projects, about, skills, contact, clear, github, linkedin',
                projects: () => 'My projects:\n• GS Location - Vehicle rental application\n• LV9Dreams - E-commerce platform\n• Go Beyond - Gaming coaching service\n• NeoShell - Custom shell in C\n\nType "open <project>" to visit',
                about: () => 'Adam Jami - Full Stack Developer\n4+ years of experience\nPassionate about creating innovative web experiences\nDouble degree in Mathematics & Computer Science',
                skills: () => 'Frontend: HTML5, CSS3, JavaScript, Vue.js, React\nBackend: Node.js, Express, Java, Spring Boot, Python\nDatabase: SQL, MongoDB\nTools: Git, Socket.io, Heroku',
                contact: () => 'Email: ademjami75@gmail.com\nPhone: +33 7 67 60 67 35\nGitHub: github.com/naahas\nLinkedIn: linkedin.com/in/adam-jami',
                clear: () => 'CLEAR',
                github: () => { window.open('https://github.com/naahas', '_blank'); return 'Opening GitHub...'; },
                linkedin: () => { window.open('https://www.linkedin.com/in/adam-jami', '_blank'); return 'Opening LinkedIn...'; },
            }

            
        }


    },
    
    computed: {
        // Traductions actuelles
        t() {
            return this.translations[this.currentLang];
        },
        
        // Projets filtrés
        filteredProjects() {
            if (this.activeFilter === 'all') {
                return this.projects;
            }
            return this.projects.filter(project => project.category === this.activeFilter);
        }
    },
    
    methods: {

        openTerminal() {
            this.isTerminalOpen = true;
            this.$nextTick(() => {
                this.$refs.terminalInputField?.focus();
            });
        },

        closeTerminal() {
            this.isTerminalOpen = false;
            this.terminalHistory = [];
            this.terminalInput = '';
        },

        executeCommand(cmd) {
            const command = cmd.toLowerCase().trim();
            
            if (command === 'clear') {
                this.terminalHistory = [];
                return;
            }
            
            // Ajoute la commande tapée
            this.terminalHistory.push({
                id: Date.now(),
                text: `<span style="color: #4CAF50">$</span> ${command}`
            });
            
            // Execute et affiche le résultat
            if (this.terminalCommands[command]) {
                const output = this.terminalCommands[command]();
                if (output !== 'CLEAR') {
                    this.terminalHistory.push({
                        id: Date.now() + 1,
                        text: output
                    });
                }
            } else {
                this.terminalHistory.push({
                    id: Date.now() + 1,
                    text: `Command not found: ${command}. Type 'help' for available commands.`
                });
            }
            
            // Scroll to bottom
            this.$nextTick(() => {
                const output = this.$refs.terminalOutput;
                if (output) output.scrollTop = output.scrollHeight;
            });
        },

        handleTerminalCommand() {
            if (this.terminalInput.trim()) {
                this.executeCommand(this.terminalInput);
                this.terminalInput = '';
            }
        },
        // Initialisation
        initApp() {
            // Charger le thème sauvegardé
            const savedTheme = localStorage.getItem('theme') || 'light';
            this.theme = savedTheme;
            document.documentElement.setAttribute('data-theme', savedTheme);
            
            // Charger la langue sauvegardée
            const savedLang = localStorage.getItem('lang') || 'FR';
            this.currentLang = savedLang;
            
            // Initialiser AOS
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
            
            // Masquer le loader après 1.5s
            setTimeout(() => {
                this.isLoading = false;
                const loader = document.getElementById('loader');
                if (loader) {
                    loader.classList.add('fade-out');
                    setTimeout(() => {
                        loader.style.display = 'none';
                    }, 500);
                }
            }, 1500);
            
            // Démarrer l'effet de typing
            this.startTypingEffect();
            
            // Initialiser les événements
            this.initScrollEvents();
            this.initParticleTrail();
        },
        
        // Navigation
        toggleMobileMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.getElementById('hamburger');
            
            if (this.isMobileMenuOpen) {
                navMenu.classList.add('active');
                hamburger.classList.add('active');
            } else {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        },
        
        closeMobileMenu() {
            this.isMobileMenuOpen = false;
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.getElementById('hamburger');
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        },
        
        // Scroll events
        initScrollEvents() {
            window.addEventListener('scroll', () => {
                // Navbar scroll effect
                this.isScrolled = window.scrollY > 50;
                const navbar = document.getElementById('navbar');
                if (navbar) {
                    if (this.isScrolled) {
                        navbar.classList.add('scrolled');
                    } else {
                        navbar.classList.remove('scrolled');
                    }
                }
                
                // Active section detection
                const sections = document.querySelectorAll('section');
                let current = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (window.scrollY >= (sectionTop - 200)) {
                        current = section.getAttribute('id');
                    }
                });
                
                this.activeSection = current;
            });
        },
        
        // Smooth scroll
        scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                this.closeMobileMenu();
            }
        },
        
        // Theme toggle
        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', this.theme);
            localStorage.setItem('theme', this.theme);
        },
        
        // Language toggle
        toggleLanguage() {
            this.currentLang = this.currentLang === 'FR' ? 'EN' : 'FR';
            localStorage.setItem('lang', this.currentLang);
        },
        
        // Typing effect
        startTypingEffect() {
            this.typeText();
        },
        
        typeText() {
            const currentText = this.typingTexts[this.typingTextIndex];
            
            if (this.isDeleting) {
                this.currentTypingText = currentText.substring(0, this.typingCharIndex - 1);
                this.typingCharIndex--;
            } else {
                this.currentTypingText = currentText.substring(0, this.typingCharIndex + 1);
                this.typingCharIndex++;
            }
            
            let typeSpeed = this.isDeleting ? 50 : 100;
            
            if (!this.isDeleting && this.typingCharIndex === currentText.length) {
                typeSpeed = 2000; // Pause at end
                this.isDeleting = true;
            } else if (this.isDeleting && this.typingCharIndex === 0) {
                this.isDeleting = false;
                this.typingTextIndex = (this.typingTextIndex + 1) % this.typingTexts.length;
                typeSpeed = 500; // Pause before new text
            }
            
            setTimeout(() => {
                this.typeText();
            }, typeSpeed);
        },
        
        // Particle trail
        // Particle trail
initParticleTrail() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Particle class
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
            this.life = 100;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.life -= 2;
            if (this.size > 0.2) this.size -= 0.1;
        }
        
        draw() {
            // Détecte le thème actuel
            const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
            
            // Change la couleur selon le thème
            if (isDarkMode) {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.life / 100 * 0.3})`;
            } else {
                ctx.fillStyle = `rgba(26, 26, 26, ${this.life / 100 * 0.3})`;
            }
            
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Mouse move event
    window.addEventListener('mousemove', (e) => {
        this.mousePosition.x = e.x;
        this.mousePosition.y = e.y;
        
        for (let i = 0; i < 3; i++) {
            this.particles.push(new Particle(e.x, e.y));
        }
    });
    
    // Resize event
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    // Animation loop
    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        this.particles = this.particles.filter((particle) => {
            if (particle.life <= 0) {
                return false;
            }
            particle.update();
            particle.draw();
            return true;
        });
        
        requestAnimationFrame(animate);
    };
    
    animate();
},
        
        // Project filter
        setFilter(filter) {
            this.activeFilter = filter;
        },
        
        // Open project
        openProject(project) {
            if (project.link) {
                window.open(project.link, '_blank');
            } else if (project.github) {
                window.open(project.github, '_blank');
            }
        },
        
        // Contact form
        async submitContactForm(e) {
            e.preventDefault();
            
            if (this.isSubmitting) return;
            
            this.isSubmitting = true;
            this.formSuccess = false;
            this.formError = false;
            
            try {
                // Envoyer le formulaire au serveur
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.contactForm)
                });
                
                if (response.ok) {
                    this.formSuccess = true;
                    // Réinitialiser le formulaire
                    this.contactForm = {
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    };
                    
                    // Masquer le message de succès après 5 secondes
                    setTimeout(() => {
                        this.formSuccess = false;
                    }, 5000);
                } else {
                    throw new Error('Erreur lors de l\'envoi');
                }
            } catch (error) {
                console.error('Erreur:', error);
                this.formError = true;
                
                // Masquer le message d'erreur après 5 secondes
                setTimeout(() => {
                    this.formError = false;
                }, 5000);
            } finally {
                this.isSubmitting = false;
            }
        },

        openLatestProject() {
            window.open('https://gslocation-59b35b52dd7a.herokuapp.com', '_blank');
        },

        initCubeScroll() {
            const cubes = document.querySelectorAll('.cube');
            
            cubes.forEach(cube => {
                let rotationCount = 0;
                let isRotating = false;
                
                // Rotation au hover
                cube.addEventListener('mouseenter', function() {
                    if (isRotating) return;
                    isRotating = true;
                    
                    rotationCount++;
                    this.style.transform = `translateZ(-150px) rotateY(${-10 - (90 * rotationCount)}deg)`;
                    
                    // Empêche les rotations multiples
                    setTimeout(() => {
                        isRotating = false;
                    }, 600);
                });
                
                // Rotation au scroll
                cube.addEventListener('wheel', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    if (isRotating) return;
                    isRotating = true;
                    
                    if (e.deltaY > 0) {
                        rotationCount++;
                    } else {
                        rotationCount--;
                    }
                    
                    this.style.transform = `translateZ(-150px) rotateY(${-10 - (90 * rotationCount)}deg)`;
                    
                    // Empêche les rotations multiples
                    setTimeout(() => {
                        isRotating = false;
                    }, 600);
                });
            });
        }
    },
    
    mounted: function() {
        // Initialiser l'application
        this.initApp();
        this.initCubeScroll();

        
        
       
    }
});


window.addEventListener('scroll', () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            // Active rotation sur le premier projet visible
            const firstCube = document.querySelector('.cube');
            if (firstCube && !firstCube.classList.contains('auto-rotate')) {
                setTimeout(() => {
                    firstCube.classList.add('auto-rotate');
                }, 500);
            }
        }
    }
});