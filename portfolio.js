var app = new Vue({
    el: '#app',
    
    data: function() {
        return {
            isLoading: true,
            theme: 'light',
            currentLang: 'FR',
            
            isScrolled: false,
            isMobileMenuOpen: false,
            activeSection: 'home',
            
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
            
            activeFilter: 'all',
            projects: [
                {
                    id: 1,
                    name: 'GS Location',
                    description: 'Application complète d\'agence de location de véhicules avec système de réservation et vente de formations',
                    category: 'web',
                    image: 'img/gsPIC.png   ',
                    link: 'https://gslocation-5cf284bc00f8.herokuapp.com/',
                    github: null,
                    techs: ['Node.js', 'Vue.js', 'Socket.io']
                },
                {
                    id: 2,
                    name: 'Nectar Secret',
                    description: 'Site de restauration moderne avec système de réservation par personnes',
                    category: 'web',
                    image: 'img/nectar.png',
                    link: 'https://nectarsecret-74dde5a99b16.herokuapp.com/',
                    github: null,
                    techs: ['Node.js', 'Socket.io', 'Vue.js']
                },
                {
                    id: 3,
                    name: 'Go Beyond',
                    description: 'Site vitrine premium pour service de coaching gaming avec interface interactive',
                    category: 'web',
                    image: 'img/beyond2.png',
                    link: 'https://beyond-1d74e60dd949.herokuapp.com/',
                    github: null,
                    techs: ['Node.js', 'Vue.js', 'jQuery']
                },
                {
                    id: 4,
                    name: 'Life Coach',
                    description: 'Plateforme de coaching sportif avec système de réservation multi-étapes',
                    category: 'web',
                    image: 'img/lifecoach.png',
                    link: 'https://lifecoach2-ce6f03c2d96e.herokuapp.com/',
                    github: null,
                    techs: ['Node.js', 'Socket.io', 'Vue.js']
                },
                {
                    id: 5,
                    name: '2Coupe en coupe',
                    description: 'Site de réservation pour barbier à domicile avec calcul automatique des frais de déplacement par zone',
                    category: 'web',
                    image: 'img/procut.png',
                    link: 'https://procut-6c5120a0b753.herokuapp.com/',
                    github: null,
                    techs: ['Node.js', 'Socket.io', 'Vue.js']
                },
                {
                    id: 6,
                    name: 'LV9Dreams',
                    description: 'Site e-commerce moderne pour la vente de shilajit avec système de paiement intégré',
                    category: 'web',
                    image: 'img/lv9PIC.png',
                    link: 'https://lv9dreams-a83af8a8f214.herokuapp.com/',
                    github: null,
                    techs: ['Node.js', 'Vue.js', 'Socket.io']
                },
                {
                    id: 7,
                    name: 'NeoShell',
                    description: 'Mini shell interactif avec commandes personnalisées développé en C',
                    category: 'tool',
                    image: 'img/neoshell1.png',
                    link: null,
                    github: 'https://github.com/naahas/neoshell',
                    techs: ['C', 'Unix', 'Shell']
                },
                {
                    id: 8,
                    name: 'Reqwest',
                    description: 'Client desktop de test d\'APIs REST, alternative légère à Postman avec support des collections et historique',
                    category: 'tool',
                    image: 'img/reqwest.png',
                    link: null,
                    github: 'https://github.com/naahas/reqwest',
                    techs: ['Electron', 'Vue.js', 'Node.js']
                },
                {
                    id: 9,
                    name: 'Tiktok Monitor',
                    description: 'Application de monitoring de Live Tiktok en temps réel avec suivi de commentaires et d"utilisateur',
                    category: 'tool',
                    image: 'img/tikmoni.png',
                    link: "https://tiktokmonitor-2e34dd231e21.herokuapp.com/",
                    github: 'https://github.com/naahas/tiktokmonitor',
                    techs: ['Node.js', 'Socket.io', 'Express']
                }
            ],
            
            contactForm: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },
            isSubmitting: false,
            formSuccess: false,
            formError: false,
            
            particles: [],
            mousePosition: { x: null, y: null },
            
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
                projects: () => 'My projects:\n• GS Location - Vehicle rental application\n• LV9Dreams - E-commerce platform\n• Go Beyond - Gaming coaching service\n• NeoShell - Custom shell in C\n• Tiktok Monitor - Live TikTok monitoring\n• Reqwest - API Testing Client\n\nType "open <project>" to visit',                skills: () => 'Frontend: HTML5, CSS3, JavaScript, Vue.js, React\nBackend: Node.js, Express, Java, Spring Boot, Python\nDatabase: SQL, MongoDB\nTools: Git, Socket.io, Heroku',
                contact: () => 'Email: ademjami75@gmail.com\nPhone: +33 7 67 60 67 35\nGitHub: github.com/naahas\nLinkedIn: linkedin.com/in/adam-jami',
                clear: () => 'CLEAR',
                github: () => { window.open('https://github.com/naahas', '_blank'); return 'Opening GitHub...'; },
                linkedin: () => { window.open('https://www.linkedin.com/in/adam-jami', '_blank'); return 'Opening LinkedIn...'; },
            }
        }
    },
    
    computed: {
        t() {
            return this.translations[this.currentLang];
        },
        
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
            
            this.terminalHistory.push({
                id: Date.now(),
                text: `<span style="color: #4CAF50">$</span> ${command}`
            });
            
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

        initApp() {
            const savedTheme = localStorage.getItem('theme') || 'light';
            this.theme = savedTheme;
            document.documentElement.setAttribute('data-theme', savedTheme);
            
            const savedLang = localStorage.getItem('lang') || 'FR';
            this.currentLang = savedLang;
            
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
            
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
            
            this.startTypingEffect();
            this.initScrollEvents();
            this.initParticleTrail();
        },
        
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
        
        initScrollEvents() {
            window.addEventListener('scroll', () => {
                this.isScrolled = window.scrollY > 50;
                const navbar = document.getElementById('navbar');
                if (navbar) {
                    if (this.isScrolled) {
                        navbar.classList.add('scrolled');
                    } else {
                        navbar.classList.remove('scrolled');
                    }
                }
                
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
        
        scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                this.closeMobileMenu();
            }
        },
        
        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', this.theme);
            localStorage.setItem('theme', this.theme);
        },
        
        toggleLanguage() {
            this.currentLang = this.currentLang === 'FR' ? 'EN' : 'FR';
            localStorage.setItem('lang', this.currentLang);
        },
        
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
                typeSpeed = 2000;
                this.isDeleting = true;
            } else if (this.isDeleting && this.typingCharIndex === 0) {
                this.isDeleting = false;
                this.typingTextIndex = (this.typingTextIndex + 1) % this.typingTexts.length;
                typeSpeed = 500;
            }
            
            setTimeout(() => {
                this.typeText();
            }, typeSpeed);
        },
        
        initParticleTrail() {
            const canvas = document.getElementById('particle-canvas');
            if (!canvas) return;
            
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
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
                    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
                    
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
            
            window.addEventListener('mousemove', (e) => {
                this.mousePosition.x = e.x;
                this.mousePosition.y = e.y;
                
                for (let i = 0; i < 3; i++) {
                    this.particles.push(new Particle(e.x, e.y));
                }
            });
            
            window.addEventListener('resize', () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            });
            
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
        
        setFilter(filter) {
            this.activeFilter = filter;
        },
        
        openProject(project) {
            if (project.link) {
                window.open(project.link, '_blank');
            } else if (project.github) {
                window.open(project.github, '_blank');
            }
        },
        
        async submitContactForm(e) {
            e.preventDefault();
            
            if (this.isSubmitting) return;
            
            this.isSubmitting = true;
            this.formSuccess = false;
            this.formError = false;
            
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.contactForm)
                });
                
                if (response.ok) {
                    this.formSuccess = true;
                    this.contactForm = {
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    };
                    
                    setTimeout(() => {
                        this.formSuccess = false;
                    }, 5000);
                } else {
                    throw new Error('Erreur lors de l\'envoi');
                }
            } catch (error) {
                console.error('Erreur:', error);
                this.formError = true;
                
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
                
                cube.addEventListener('mouseenter', function() {
                    if (isRotating) return;
                    isRotating = true;
                    
                    rotationCount++;
                    this.style.transform = `translateZ(-150px) rotateY(${-10 - (90 * rotationCount)}deg)`;
                    
                    setTimeout(() => {
                        isRotating = false;
                    }, 600);
                });
                
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
                    
                    setTimeout(() => {
                        isRotating = false;
                    }, 600);
                });
            });
        }
    },
    
    mounted: function() {
        this.initApp();
        this.initCubeScroll();
    }
});

window.addEventListener('scroll', () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const firstCube = document.querySelector('.cube');
            if (firstCube && !firstCube.classList.contains('auto-rotate')) {
                setTimeout(() => {
                    firstCube.classList.add('auto-rotate');
                }, 500);
            }
        }
    }
});