// -------------- NAV --------------

document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.burger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu-link');

    // Функция открытия/закрытия меню
    function toggleMenu() {
        burgerBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }

    // Открытие меню по клику на бургер
    burgerBtn.addEventListener('click', toggleMenu);

    // Закрытие меню по клику на затемненную область
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            toggleMenu();
        }
    });

    // Закрытие меню по клику на ссылку
    mobileLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!this.hasAttribute('target')) {
                e.preventDefault();
                toggleMenu();
                // Здесь можно добавить логику навигации
            }
        });
    });

    // Закрытие меню при ресайзе окна
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1280 && mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const chips = document.querySelectorAll('.chip');
  
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => {
          c.classList.remove('chip--active');
          c.setAttribute('aria-selected', 'false');
        });
        chip.classList.add('chip--active');
        chip.setAttribute('aria-selected', 'true');
  
        const selectedCategory = chip.dataset.category;
        // Здесь можно внедрить динамический фильтр через JS или WP
      });
    });
  });