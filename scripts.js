document.addEventListener('DOMContentLoaded', () => {
    // Implement parallax effects and 3D animations
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.parallax').forEach(elem => {
            let speed = elem.getAttribute('data-speed');
            let yPos = -(window.scrollY * speed / 100);
            elem.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Implement microinteractions and hover effects
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#00ffcc';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#ffffff';
        });
    });

    // Integrate voice commands for navigation
    if (annyang) {
        const commands = {
            'go to home': () => window.location.hash = '#home',
            'go to about': () => window.location.hash = '#about',
            'go to projects': () => window.location.hash = '#projects',
            'go to contact': () => window.location.hash = '#contact',
        };
        annyang.addCommands(commands);
        annyang.start();
    }

    console.log('JavaScript is running');
});

