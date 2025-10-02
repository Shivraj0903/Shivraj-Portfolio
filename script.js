
        document.addEventListener('DOMContentLoaded', function() {
            const typedTextSpan = document.querySelector('.typed-text');
            const cursorSpan = document.querySelector('.cursor');
            
            const textArray = ['Full-Stack Developer', 'Cloud Enthusiast', 'Problem Solver', 'Tech Innovator'];
            const typingDelay = 100;
            const erasingDelay = 50;
            const newTextDelay = 1500;
            let textArrayIndex = 0;
            let charIndex = 0;
            
            function type() {
                if (charIndex < textArray[textArrayIndex].length) {
                    if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
                    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                    charIndex++;
                    setTimeout(type, typingDelay);
                } 
                else {
                    cursorSpan.classList.remove('typing');
                    setTimeout(erase, newTextDelay);
                }
            }
            
            function erase() {
                if (charIndex > 0) {
                    if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
                    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
                    charIndex--;
                    setTimeout(erase, erasingDelay);
                } 
                else {
                    cursorSpan.classList.remove('typing');
                    textArrayIndex++;
                    if(textArrayIndex >= textArray.length) textArrayIndex = 0;
                    setTimeout(type, typingDelay + 500);
                }
            }
            
           
            setTimeout(type, newTextDelay + 250);

     
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });


            document.getElementById('contactForm').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
            });

            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-links a');

            window.addEventListener('scroll', () => {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (scrollY >= (sectionTop - 200)) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === current) {
                        link.classList.add('active');
                    }
                });
            });
            
        });