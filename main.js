/* Садиба «Кичера»: адаптивна навігація, галереї, перегляд фото та описи номерів. */
(() => {
  'use strict';

  const ROOM_GALLERIES = {
    1: {
      photos: ['room1.jpg','room1-2.jpg','room1-3.jpg','room1-4.jpg','room1-5.jpg','room1-6.jpg','room1-7.jpg','room1-8.jpg','room1-9.jpg','room1-10.jpg'],
      captions: [
        'Зовнішній вигляд дерев’яного будиночка серед карпатських краєвидів',
        'Спальня з двоспальним ліжком і виходом до панорамного вікна',
        'Затишний спальний простір із натуральним деревом в оздобленні',
        'Світла спальня з видом на природу',
        'Двоспальне ліжко та теплі дерев’яні деталі інтер’єру',
        'Кухонна зона з холодильником і місцем для приготування їжі',
        'Вітальня з м’яким диваном для відпочинку після прогулянок',
        'Санвузол із душовою зоною',
        'Обідня зона біля великих вікон',
        'Панорамне скління та місце для спокійних вечорів'
      ],
      description: 'Окремий дерев’яний будиночок для сім’ї або компанії до шести гостей. Затишний інтер’єр поєднує спальну зону, вітальню та кухонний простір. Є власний вхід, тераси й зона BBQ, а панорамні вікна допомагають насолоджуватися карпатськими краєвидами у будь-яку пору року.'
    },
    2: {
      photos: ['room2.jpg','room2-2.jpg','room2-3.jpg','room2-4.jpg','room2-5.jpg','room2-6.jpg','room2-7.jpg','room2-8.jpg','room2-9.jpg','room2-10.jpg'],
      captions: [
        'Спальна зона та обідній столик біля вікна з гірським краєвидом',
        'Кухонний куточок із необхідною технікою',
        'Загальний вигляд кімнати з кухнею та місцем для відпочинку',
        'Панорамні вікна наповнюють помешкання природним світлом',
        'Компактна кухня для самостійного приготування їжі',
        'Окрема спальня з двоспальним ліжком',
        'Світла кімната з виходом до зеленого подвір’я',
        'Спальне місце з видом на навколишні пагорби',
        'Ванна кімната з душем і пральною машиною',
        'Вечірній краєвид на гори з вікна'
      ],
      description: 'Двокімнатний варіант для чотирьох гостей, яким важливо мати окрему спальню й простір для спільного відпочинку. Кухонна зона дає змогу готувати самостійно, а панорамні вікна відкривають вид на навколишні гори. У ванній кімнаті є пральна машина.'
    },
    3: {
      photos: ['room3.jpg','room3-2.jpg','room3-3.jpg','room3-4.jpg','room3-5.jpg','room3-6.jpg','room3-7.jpg','room3-8.jpg','room3-9.jpg','room3-10.jpg','room3-11.jpg'],
      captions: [
        'Зовнішній вигляд будинку та балкони',
        'Спальня з двоспальним ліжком',
        'Спальний простір із додатковим місцем для відпочинку',
        'Світла кімната з вікном і телевізором',
        'Ванна кімната з душовою кабіною',
        'Умивальник і сантехніка у ванній кімнаті',
        'Спальня з акцентною стіною та великим ліжком',
        'Друга ванна кімната з душем',
        'Кухня з побутовою технікою та робочою поверхнею',
        'Вітальня й обідня зона для спільного дозвілля',
        'Зона відпочинку з м’якими меблями та піччю'
      ],
      description: 'Просторі апартаменти площею близько 100 м² для великої родини або компанії до восьми гостей. У плануванні передбачено дві спальні, дві ванні кімнати, повноцінну кухню та зону спільного відпочинку. Це зручний формат для кількох днів у горах, коли хочеться мати достатньо особистого простору.'
    },
    4: {
      photos: ['room4.jpg','room4-2.jpg','room4-3.jpg','room4-4.jpg','room4-5.jpg','room4-6.jpg','room4-7.jpg','room4-8.jpg','room4-9.jpg','room4-10.jpg','room4-11.jpg','room4-12.jpg','room4-13.jpg','room4-14.jpg','room4-15.jpg','room4-16.jpg'],
      captions: [
        'Окремий будиночок із власним входом',
        'Обладнана зона санвузла та пральна машина',
        'Душова зона й побутові зручності',
        'Загальний вигляд кухні та вітальні',
        'Кухонна зона й простір для спільного відпочинку',
        'Кухня з шафами та робочою поверхнею',
        'Вікно над робочою поверхнею кухні',
        'Обідній стіл біля панорамних вікон',
        'Спальна зона з видом на подвір’я',
        'Окрема кімната з ліжком і місцем для речей',
        'Затишна спальня з м’яким текстилем',
        'Вид із кімнати на обідню зону',
        'Спальня з дерев’яним оздобленням',
        'Гірський краєвид із вікна спальні',
        'Ще один ракурс краєвиду з вікна',
        'Відпочинкова тераса з панорамою на гори'
      ],
      description: 'Окремий будиночок для чотирьох гостей із двома спальнями, кухонною зоною та власним входом. Для приготування їжі є кухня, а поруч можна облаштувати вечір біля мангала у власній BBQ-зоні. Панорамний вид на гори додає відчуття приватності й спокою.'
    },
    5: {
      photos: ['room5.jpg','room5-2.jpg','room5-3.jpg','room5-4.jpg','room5-5.jpg','room5-6.jpg','room5-7.jpg','room5-8.jpg','room5-9.jpg','room5-10.jpg','room5-11.jpg','room5-12.jpg'],
      captions: [
        'Двомісний номер із панорамними вікнами та видом на гори',
        'Краєвид на карпатські схили з вікна',
        'Великі вікна відкривають вид на навколишні гори',
        'Куточок для відпочинку з панорамним видом',
        'Двоспальне ліжко в інтер’єрі з дерев’яним оздобленням',
        'Затишна спальня з теплим освітленням',
        'Санвузол із душовою кабіною',
        'Умивальник у ванній кімнаті',
        'Душова зона та санвузол',
        'Спальне місце й шафа для речей',
        'Кухонний куточок і загальний вигляд номера',
        'Відкрита тераса з панорамою на гірську долину'
      ],
      description: 'Затишний двомісний номер для пари або короткої втечі від міського ритму. Дерев’яне оздоблення створює теплу атмосферу, а великі вікна відкривають краєвиди на гори. У номері передбачені власна кухня та ванна кімната.'
    }
  };

  const byId = (id) => document.getElementById(id);
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  let activeGallery = null;
  let activePhotoIndex = 0;
  let lastFocusedElement = null;
  let lightboxTouchStartX = 0;
  let lightboxTouchStartY = 0;

  function getWebPath(filename) {
    return `web/${filename.replace(/\.(jpe?g|png)$/i, '.webp')}`;
  }

  function initNavbar() {
    const navbar = byId('navbar');
    if (!navbar) return;
    const setState = () => navbar.classList.toggle('scrolled', window.scrollY > 28);
    setState();
    window.addEventListener('scroll', setState, { passive: true });
  }

  function initMobileMenu() {
    const button = byId('mobileToggle');
    const menu = byId('mobileMenu');
    if (!button || !menu) return;

    const close = () => {
      menu.classList.remove('active');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Відкрити меню');
      const icon = $('i', button);
      if (icon) { icon.classList.remove('fa-xmark'); icon.classList.add('fa-bars'); }
    };

    button.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('active');
      button.setAttribute('aria-expanded', String(isOpen));
      button.setAttribute('aria-label', isOpen ? 'Закрити меню' : 'Відкрити меню');
      const icon = $('i', button);
      if (icon) { icon.classList.toggle('fa-xmark', isOpen); icon.classList.toggle('fa-bars', !isOpen); }
    });
    $$('.mobile-link', menu).forEach(link => link.addEventListener('click', close));
    document.addEventListener('click', event => {
      if (menu.classList.contains('active') && !menu.contains(event.target) && !button.contains(event.target)) close();
    });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
  }

  function makeImageSlide(filename, roomNumber, index, caption) {
    const slide = document.createElement('div');
    slide.className = 'room-slide';
    const img = document.createElement('img');
    img.src = getWebPath(filename);
    img.dataset.full = filename;
    img.alt = `${$(`.room-card:nth-child(${roomNumber}) .room-name`)?.textContent || 'Номер'} — ${caption}`;
    img.loading = index === 0 ? 'eager' : 'lazy';
    img.decoding = 'async';
    img.draggable = false;
    slide.appendChild(img);
    return slide;
  }

  function updateGalleryUI(slider, index) {
    const roomNumber = Number(slider.dataset.roomNumber);
    const gallery = ROOM_GALLERIES[roomNumber];
    const caption = gallery.captions[index] || 'Фото номера';
    const captionNode = $('.caption-text', slider.parentElement);
    const countNode = $('.gallery-count', slider.parentElement);
    if (captionNode) captionNode.textContent = caption;
    if (countNode) countNode.textContent = `${index + 1} / ${gallery.photos.length}`;
    $$('.slider-dot', slider).forEach((dot, dotIndex) => {
      const active = dotIndex === index;
      dot.classList.toggle('active', active);
      dot.setAttribute('aria-current', active ? 'true' : 'false');
      dot.setAttribute('aria-label', `Показати фото ${dotIndex + 1}`);
    });
    slider.dataset.currentIndex = String(index);
  }

  function goToSlide(slider, index) {
    const slides = $$('.room-slide', slider);
    if (!slides.length) return;
    const next = (index + slides.length) % slides.length;
    const track = $('.room-slider-track', slider);
    if (track) track.style.transform = `translateX(-${next * 100}%)`;
    updateGalleryUI(slider, next);
  }

  function moveSlide(slider, direction) {
    const index = Number(slider.dataset.currentIndex || 0);
    goToSlide(slider, index + direction);
  }

  function initGalleries() {
    $$('.room-card').forEach((card, cardIndex) => {
      const roomNumber = cardIndex + 1;
      const data = ROOM_GALLERIES[roomNumber];
      const slider = $('.room-slider', card);
      const track = $('.room-slider-track', slider);
      const dotContainer = $('.slider-dots', slider);
      if (!slider || !track || !data) return;
      slider.dataset.roomNumber = String(roomNumber);
      slider.setAttribute('aria-label', `Фотогалерея: ${$('.room-name', card)?.textContent || 'номер'}`);

      track.replaceChildren(...data.photos.map((filename, index) => makeImageSlide(filename, roomNumber, index, data.captions[index])));
      if (dotContainer) {
        dotContainer.replaceChildren(...data.photos.map((_, index) => {
          const dot = document.createElement('button');
          dot.type = 'button';
          dot.className = `slider-dot${index === 0 ? ' active' : ''}`;
          dot.setAttribute('aria-label', `Показати фото ${index + 1}`);
          dot.addEventListener('click', () => goToSlide(slider, index));
          return dot;
        }));
      }

      const previous = $('.slider-prev', slider);
      const next = $('.slider-next', slider);
      previous?.addEventListener('click', () => moveSlide(slider, -1));
      next?.addEventListener('click', () => moveSlide(slider, 1));
      if (data.photos.length <= 1) {
        if (previous) previous.hidden = true;
        if (next) next.hidden = true;
        if (dotContainer) dotContainer.hidden = true;
      }

      let touchStartX = 0;
      let touchStartY = 0;
      track.addEventListener('touchstart', event => {
        if (!event.changedTouches.length) return;
        touchStartX = event.changedTouches[0].clientX;
        touchStartY = event.changedTouches[0].clientY;
      }, { passive: true });
      track.addEventListener('touchend', event => {
        if (!event.changedTouches.length) return;
        const dx = event.changedTouches[0].clientX - touchStartX;
        const dy = event.changedTouches[0].clientY - touchStartY;
        if (Math.abs(dx) > 42 && Math.abs(dx) > Math.abs(dy) * 1.15) {
          slider.dataset.suppressClick = 'true';
          moveSlide(slider, dx < 0 ? 1 : -1);
          window.setTimeout(() => { delete slider.dataset.suppressClick; }, 400);
        }
      }, { passive: true });
      track.addEventListener('click', event => {
        const img = event.target.closest('img');
        if (!img) return;
        if (slider.dataset.suppressClick === 'true') { event.preventDefault(); return; }
        const allSlides = $$('.room-slide', slider);
        const index = allSlides.indexOf(img.closest('.room-slide'));
        openLightbox(slider, Math.max(index, 0));
      });
      updateGalleryUI(slider, 0);
    });
  }

  function updateLightbox() {
    if (!activeGallery) return;
    const roomNumber = Number(activeGallery.dataset.roomNumber);
    const data = ROOM_GALLERIES[roomNumber];
    const filename = data.photos[activePhotoIndex];
    const image = byId('lightboxImage');
    const caption = byId('lightboxCaption');
    const counter = byId('lightboxCounter');
    image.src = filename;
    image.alt = `${$('.room-name', activeGallery.closest('.room-card'))?.textContent || 'Номер'} — ${data.captions[activePhotoIndex]}`;
    caption.textContent = data.captions[activePhotoIndex] || '';
    counter.textContent = `${activePhotoIndex + 1} / ${data.photos.length}`;
    // Завчасно кешуємо наступну фотографію для плавного перелистування.
    const nextName = data.photos[(activePhotoIndex + 1) % data.photos.length];
    const preload = new Image(); preload.src = nextName;
  }

  function openLightbox(slider, index) {
    const modal = byId('lightboxModal');
    if (!modal) return;
    activeGallery = slider;
    activePhotoIndex = index;
    lastFocusedElement = document.activeElement;
    updateLightbox();
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    $('.lightbox-close', modal)?.focus({ preventScroll: true });
  }

  function closeLightbox() {
    const modal = byId('lightboxModal');
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    byId('lightboxImage').src = '';
    if (!byId('roomInfoModal')?.classList.contains('active')) document.body.classList.remove('modal-open');
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') lastFocusedElement.focus({ preventScroll: true });
  }

  function changeLightboxSlide(direction) {
    if (!activeGallery) return;
    const data = ROOM_GALLERIES[Number(activeGallery.dataset.roomNumber)];
    activePhotoIndex = (activePhotoIndex + direction + data.photos.length) % data.photos.length;
    updateLightbox();
  }

  function initLightbox() {
    const modal = byId('lightboxModal');
    if (!modal) return;
    $('.lightbox-close', modal)?.addEventListener('click', closeLightbox);
    $('.lightbox-prev', modal)?.addEventListener('click', () => changeLightboxSlide(-1));
    $('.lightbox-next', modal)?.addEventListener('click', () => changeLightboxSlide(1));
    modal.addEventListener('click', event => { if (event.target === modal) closeLightbox(); });
    modal.addEventListener('touchstart', event => {
      if (!event.changedTouches.length) return;
      lightboxTouchStartX = event.changedTouches[0].clientX;
      lightboxTouchStartY = event.changedTouches[0].clientY;
    }, { passive: true });
    modal.addEventListener('touchend', event => {
      if (!event.changedTouches.length) return;
      const dx = event.changedTouches[0].clientX - lightboxTouchStartX;
      const dy = event.changedTouches[0].clientY - lightboxTouchStartY;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.15) changeLightboxSlide(dx < 0 ? 1 : -1);
    }, { passive: true });
    document.addEventListener('keydown', event => {
      if (!modal.classList.contains('active')) return;
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowRight') changeLightboxSlide(1);
      if (event.key === 'ArrowLeft') changeLightboxSlide(-1);
    });
  }

  const ROOM_DETAILS = {
    1: { extra: 'Окремий дерев’яний будиночок для сім’ї або компанії до шести гостей. Затишний інтер’єр поєднує спальну зону, вітальню та кухонний простір. Є власний вхід, тераси й зона BBQ, а панорамні вікна допомагають насолоджуватися карпатськими краєвидами у будь-яку пору року.' },
    2: { extra: 'Двокімнатний варіант для чотирьох гостей, яким важливо мати окрему спальню й простір для спільного відпочинку. Кухонна зона дає змогу готувати самостійно, а панорамні вікна відкривають вид на навколишні гори. У ванній кімнаті є пральна машина.' },
    3: { extra: 'Просторі апартаменти площею близько 100 м² для великої родини або компанії до восьми гостей. У плануванні передбачено дві спальні, дві ванні кімнати, повноцінну кухню та зону спільного відпочинку. Це зручний формат для кількох днів у горах, коли хочеться мати достатньо особистого простору.' },
    4: { extra: 'Окремий будиночок для чотирьох гостей із двома спальнями, кухонною зоною та власним входом. Для приготування їжі є кухня, а поруч можна облаштувати вечір біля мангала у власній BBQ-зоні. Панорамний вид на гори додає відчуття приватності й спокою.' },
    5: { extra: 'Затишний двомісний номер для пари або короткої втечі від міського ритму. Дерев’яне оздоблення створює теплу атмосферу, а великі вікна відкривають краєвиди на гори. У номері передбачені власна кухня та ванна кімната.' }
  };

  function openRoomModal(roomNumber) {
    const card = $$('.room-card')[roomNumber - 1];
    const modal = byId('roomInfoModal');
    if (!card || !modal) return;
    lastFocusedElement = document.activeElement;
    const title = $('.room-name', card)?.textContent.trim() || 'Опис номера';
    const price = $('.room-price', card)?.textContent.trim() || '';
    const facts = $$('.room-info span', card).map(node => node.cloneNode(true));
    const features = $$('.feature-tag', card).map(node => node.textContent.trim());
    byId('roomModalTitle').textContent = title;
    byId('roomModalDescription').textContent = ROOM_DETAILS[roomNumber]?.extra || $('.room-desc', card)?.textContent || '';
    byId('roomModalPrice').textContent = price;
    byId('roomModalFacts').replaceChildren(...facts);
    byId('roomModalFeatures').replaceChildren(...features.map(text => {
      const tag = document.createElement('span'); tag.className = 'feature-tag'; tag.textContent = text; return tag;
    }));
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    $('.modal-close', modal)?.focus({ preventScroll: true });
  }

  function closeRoomModal() {
    const modal = byId('roomInfoModal');
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    if (!byId('lightboxModal')?.classList.contains('active')) document.body.classList.remove('modal-open');
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') lastFocusedElement.focus({ preventScroll: true });
  }

  function initRoomDetails() {
    $$('[data-room-detail]').forEach(button => {
      button.addEventListener('click', () => openRoomModal(Number(button.dataset.roomDetail)));
    });
    const modal = byId('roomInfoModal');
    if (!modal) return;
    $('.modal-close', modal)?.addEventListener('click', closeRoomModal);
    modal.addEventListener('click', event => { if (event.target === modal) closeRoomModal(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && modal.classList.contains('active')) closeRoomModal(); });
  }


  function initSmoothAnchors() {
    $$('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', event => {
        const href = anchor.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      });
    });
  }

  function init() {
    initNavbar();
    initMobileMenu();
    initSmoothAnchors();
    initGalleries();
    initLightbox();
    initRoomDetails();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
