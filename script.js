document.addEventListener('DOMContentLoaded', function() {
    // Padající pizzy
    const fallingPizzas = document.querySelector('.falling-pizzas');
    const pizzaImages = ['./assets/badPizza.png', './assets/pizza-icon.png', './assets/pizza1.png', './assets/pizza2.png', './assets/pizza3.png', './assets/pizza4.png', './assets/ticket.png'];
    
    let pizzaInterval;

    function createPizza() {
        const pizza = document.createElement('img');
        pizza.src = `${pizzaImages[Math.floor(Math.random() * pizzaImages.length)]}`;
        pizza.style.position = 'absolute';
        pizza.style.left = `${Math.random() * 100}vw`;
        pizza.style.top = '-80px';
        pizza.style.width = '150px';
        pizza.style.height = 'auto';
        pizza.style.opacity = '1';
        pizza.style.transform = `rotate(${Math.random() * 360}deg)`;
        pizza.style.transition = 'transform 1s linear, top 15s linear, opacity 0.3s';
        
        // Přidání event listeneru pro změnu opacity při najetí myší
        pizza.addEventListener('mouseover', function() {
            pizza.style.opacity = '1';
        });
        pizza.addEventListener('mouseout', function() {
            pizza.style.opacity = '0.5';
        });

        fallingPizzas.appendChild(pizza);
        
        setTimeout(() => {
            pizza.style.transform = `rotate(${Math.random() * 360}deg)`;
            pizza.style.top = '120vh';
        }, 100);
        
        setTimeout(() => {
            pizza.remove();
        }, 15000);
    }

    function adjustPizzaInterval() {
        const screenWidth = window.innerWidth;
        if (screenWidth > 768) {
            pizzaInterval = setInterval(createPizza, 1000); // Default interval time
        }
    }

    adjustPizzaInterval();

    window.addEventListener('resize', function() {
        clearInterval(pizzaInterval);
        adjustPizzaInterval();
    });

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Tokenomics Chart
    const ctx = document.getElementById('tokenomicsChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Launch', 'Presale', 'Marketing', 'Team', 'Staking', 'Game Rewards'],
            datasets: [{
                data: [35, 25, 15, 10, 10, 5],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            family: "'Press Start 2P', cursive",
                            size: 10
                        },
                        color: '#ffffff'
                    }
                },
                title: {
                    display: true,
                    text: 'Distribution',
                    font: {
                        family: "'Press Start 2P', cursive",
                        size: 16
                    },
                    color: '#ffffff'
                }
            }
        }
    });

    // Smooth scrolling pro navigační odkazy
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
