/* ========================================
   САДИБА "КИЧЕРА" - JAVASCRIPT
   ======================================== */

// Глобальні змінні для галереї
const galleries = {};

document.addEventListener('DOMContentLoaded', function() {
    // Навігація при скролі
    initNavbar();
    
    // Мобільне меню
    initMobileMenu();
    
    // Плавна прокрутка для якорних посилань
    initSmoothScroll();
    
    // Закриття модальних вікон при кліку поза ними
    initModalClose();
    
    // Ініціалізація галерей
    initGalleries();
});

/* ========================================
   НАВІГАЦІЯ ПРИ СКРОЛІ
   ======================================== */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    if (!navbar) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/* ========================================
   МОБІЛЬНЕ МЕНЮ
   ======================================== */
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    if (!mobileToggle || !mobileMenu) return;
    
    // Відкриття/закриття меню
    mobileToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        
        // Зміна іконки
        const icon = mobileToggle.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Закриття меню при кліку на посилання
    mobileLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

/* ========================================
   ПЛАВНА ПРОКРУТКА
   ======================================== */
function initSmoothScroll() {
    // Для всіх посилань з хешем
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Пропускаємо порожні хеші
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                // Відступ для фіксованої навігації
                const navHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ========================================
   МОДАЛЬНІ ВІКНА
   ======================================== */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Забороняємо скрол сторінки
        
        // Скидаємо галерею до першого слайда
        const galleryId = modal.querySelector('.gallery-slides')?.id;
        if (galleryId) {
            currentSlide(galleryId, 0);
        }
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Дозволяємо скрол сторінки
    }
}

function initModalClose() {
    // Закриття при кліку поза модальним вікном
    document.querySelectorAll('.modal').forEach(function(modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Закриття при натисканні Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(function(modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
    });
}

/* ========================================
   ГАЛЕРЕЯ ФОТОГРАФІЙ
   ======================================== */
<script>
        // Ініціалізація слайдерів номерів
        document.querySelectorAll('.room-slider').forEach(slider => {
            const track = slider.querySelector('.room-slider-track');
            const slides = slider.querySelectorAll('.room-slide');
            const dotsContainer = slider.querySelector('.slider-dots');
            let currentIndex = 0;

            // Якщо фото тільки 1, ховаємо стрілки та крапки
            if (slides.length <= 1) {
                const btns = slider.querySelectorAll('.slider-btn');
                btns.forEach(btn => btn.style.display = 'none');
            }

            // Додаємо крапки навігації
            slides.forEach((_, idx) => {
                const dot = document.createElement('button');
                dot.classList.add('slider-dot');
                if (idx === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(slider, idx));
                dotsContainer.appendChild(dot);
            });

            // Відкриття фото в повному розмірі
            slides.forEach((slide, idx) => {
                slide.querySelector('img').addEventListener('click', () => {
                    openLightbox(slider, idx);
                });
            });

            // Підтримка свайпів на мобільних пристроях
            let touchStartX = 0;
            let touchEndX = 0;

            track.addEventListener('touchstart', e => {
                touchStartX = e.changedTouches[0].screenX;
            }, {passive: true});

            track.addEventListener('touchend', e => {
                touchEndX = e.changedTouches[0].screenX;
                if (touchEndX < touchStartX - 40) moveSlideCustom(slider, 1);
                if (touchEndX > touchStartX + 40) moveSlideCustom(slider, -1);
            }, {passive: true});
        });

        function moveSlide(btn, direction) {
            const slider = btn.closest('.room-slider');
            moveSlideCustom(slider, direction);
        }

        function moveSlideCustom(slider, direction) {
            const track = slider.querySelector('.room-slider-track');
            const slides = track.querySelectorAll('.room-slide');
            const dots = slider.querySelectorAll('.slider-dot');
            let current = parseInt(slider.dataset.currentIndex || 0);

            current += direction;
            if (current < 0) current = slides.length - 1;
            if (current >= slides.length) current = 0;

            slider.dataset.currentIndex = current;
            track.style.transform = `translateX(-${current * 100}%)`;

            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === current);
            });
        }

        function goToSlide(slider, index) {
            const track = slider.querySelector('.room-slider-track');
            const dots = slider.querySelectorAll('.slider-dot');
            const slides = track.querySelectorAll('.room-slide');

            if (index < 0 || index >= slides.length) return;

            slider.dataset.currentIndex = index;
            track.style.transform = `translateX(-${index * 100}%)`;

            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === index);
            });
        }

        // Повноекранний перегляд (Lightbox)
        let activeLightboxSlider = null;
        let activeLightboxIndex = 0;

        function openLightbox(slider, index) {
            activeLightboxSlider = slider;
            activeLightboxIndex = index;
            updateLightboxImage();
            document.getElementById('lightboxModal').classList.add('active');
        }

        function closeLightbox() {
            document.getElementById('lightboxModal').classList.remove('active');
        }

        function changeLightboxSlide(direction) {
            if (!activeLightboxSlider) return;
            const slides = activeLightboxSlider.querySelectorAll('.room-slide');
            activeLightboxIndex += direction;
            if (activeLightboxIndex < 0) activeLightboxIndex = slides.length - 1;
            if (activeLightboxIndex >= slides.length) activeLightboxIndex = 0;
            updateLightboxImage();
        }

        function updateLightboxImage() {
            if (!activeLightboxSlider) return;
            const slides = activeLightboxSlider.querySelectorAll('.room-slide');
            const imgSrc = slides[activeLightboxIndex].querySelector('img').src;
            document.getElementById('lightboxImage').src = imgSrc;
        }

        document.getElementById('lightboxModal').addEventListener('click', (e) => {
            if (e.target.id === 'lightboxModal') closeLightbox();
        });

        // Перемикач мобільного меню
        const mobileToggle = document.getElementById('mobileToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileToggle && mobileMenu) {
            mobileToggle.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
            });
        }
    </script>/* ========================================
   АНІМАЦІЇ ПРИ СКРОЛІ
   ======================================== */
// Intersection Observer для анімацій елементів при скролі
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Спостерігаємо за карточками
document.querySelectorAll('.room-card, .service-card, .review-card, .attraction-category').forEach(function(el) {
    observer.observe(el);
});

/* ========================================
   ЛІНИВЕ ЗАВАНТАЖЕННЯ ЗОБРАЖЕНЬ (опціонально)
   ======================================== */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(function(img) {
        imageObserver.observe(img);
    });
}

/* ========================================
   КОНСОЛЬ - ПЕРЕВІРКА ЗАВАНТАЖЕННЯ
   ======================================== */
console.log('%c Садиба "Кичера" ', 'background: #2d5a3d; color: white; font-size: 20px; padding: 10px 20px; border-radius: 10px;');
console.log('%c Сайт успішно завантажено! ', 'color: #2d5a3d; font-size: 14px;');
