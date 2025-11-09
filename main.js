/* ==================== main.js ==================== */

/* --------- Translation data --------- */
const data118 = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navLaptops: "Laptops",
    navAccessories: "Accessories",
    navTelephones: "Telephones",
    navContact: "Contact",
    aboutTitle: "About Code-Nestio",
    aboutText: `Welcome to Code-Nestio, your number one source for electronics. 
We're dedicated to giving you the very best of laptops, phones, and accessories, with a focus on quality, customer service, and uniqueness. 
Our mission is to provide customers with a seamless online shopping experience. We offer in-depth product descriptions, high-quality images, and expert reviews. 
Our dedicated support team is always ready to help with your queries and ensure a smooth purchase process. 
At Code-Nestio, we believe in innovation and constantly update our inventory with the latest technology. 
Whether you are looking for cutting-edge laptops, powerful smartphones, or trendy accessories, we have everything to suit your lifestyle and needs. 
Customer satisfaction is our top priority, and we strive to build long-lasting relationships by offering reliable products, fair pricing, and fast delivery. 
Join thousands of happy customers and explore our collection today!`,
    laptopsTitle: "Our Laptops",
    accessoriesTitle: "Our Accessories",
    telephonesTitle: "Our Telephones",
    contactTitle: "Contact Us",
    contactText: "Reach out to Code-Nestio for any questions or inquiries!",
    cardTitles: [
      "High Performance Laptops",
      "Top Accessories",
      "Latest Smartphones"
    ],
    cardTexts: [
      "Discover our selection of high performance laptops, perfect for work, gaming, and creative projects.",
      "Enhance your gadgets with our top quality accessories. From chargers to headphones, we have everything you need.",
      "Stay connected with the latest smartphones. Explore the newest models with advanced features and sleek designs."
    ],
   heroTitles: ["Welcome to Code-Nestio", "Latest Laptops", "Top Accessories"],
heroSubtitles: [
  "The best electronics store for laptops, phones & accessories",
  "High performance & sleek design",
  "Boost your gadgets experience"
],heroButton: ["Shop Now", "Shop Now", "Shop Now"],


  },
  ar: {
    navHome: "الرئيسية",
    navAbout: "عن المتجر",
    navLaptops: "الحواسيب",
    navAccessories: "الاكسسوارات",
    navTelephones: "الهواتف",
    navContact: "تواصل معنا",
    aboutTitle: "عن Code-Nestio",
    aboutText: `مرحبًا بكم في Code-Nestio، المصدر الأول للإلكترونيات. 
نحن ملتزمون بتقديم أفضل الحواسيب والهواتف والاكسسوارات، مع التركيز على الجودة وخدمة العملاء والتفرد. 
مهمتنا هي تقديم تجربة تسوق سلسة عبر الإنترنت. نوفر وصفًا مفصلاً للمنتجات، صورًا عالية الجودة، ومراجعات خبراء. 
فريق الدعم المخصص لدينا جاهز دائمًا لمساعدتك والإجابة على استفساراتك لضمان عملية شراء سلسة. 
في Code-Nestio، نؤمن بالابتكار ونعمل على تحديث المخزون بأحدث التقنيات باستمرار. 
سواء كنت تبحث عن حواسيب متطورة، هواتف ذكية قوية، أو اكسسوارات عصرية، لدينا كل ما يناسب أسلوب حياتك واحتياجاتك. 
رضا العملاء هو أولويتنا القصوى، ونسعى لبناء علاقات طويلة الأمد من خلال تقديم منتجات موثوقة، أسعار عادلة، وتسليم سريع. 
انضم إلى آلاف العملاء السعداء واستكشف مجموعتنا اليوم!`,
    laptopsTitle: "حواسيبنا",
    accessoriesTitle: "الاكسسوارات لدينا",
    telephonesTitle: "هواتفنا",
    contactTitle: "تواصل معنا",
    contactText: "تواصل مع Code-Nestio لأي استفسارات أو أسئلة!",
    cardTitles: [
      "حواسيب عالية الأداء",
      "أفضل الاكسسوارات",
      "أحدث الهواتف الذكية"
    ],
    cardTexts: [
      "استكشف مجموعتنا من الحواسيب عالية الأداء، المثالية للعمل والألعاب والمشاريع الإبداعية.",
      "حسّن تجربة أجهزتك مع اكسسواراتنا عالية الجودة. من الشواحن إلى السماعات، لدينا كل ما تحتاجه.",
      "ابقَ متصلاً مع أحدث الهواتف الذكية. اكتشف أحدث الموديلات مع ميزات متقدمة وتصاميم أنيقة."
    ],
 heroTitles: ["مرحبًا بكم في Code-Nestio", "أحدث الحواسيب", "أفضل الاكسسوارات"],
heroSubtitles: [
  "أفضل متجر للإلكترونيات من حواسيب وهواتف واكسسوارات",
  "أداء عالي وتصميم أنيق",
  "عزز تجربة أجهزتك مع أفضل الاكسسوارات"
],heroButton: ["تسوق الآن", "تسوق الآن", "تسوق الآن"],

  }
};

function updateHeroText(lang) {
  const heroSlides = document.querySelectorAll('.hero-slide');
  heroSlides.forEach((slide, i) => {
    const title = slide.querySelector('.hero-title');
    const subtitle = slide.querySelector('.hero-subtitle');
    const btn = slide.querySelector('button');
    if (title) title.textContent = data118[lang].heroTitles[i];
    if (subtitle) subtitle.textContent = data118[lang].heroSubtitles[i];
    if (btn) btn.textContent = data118[lang].heroButton[i];
  });
};
function updateCardsText(lang) {
  const cards = document.querySelectorAll('.card');
  const titles = data118[lang].cardTitles;
  const texts = data118[lang].cardTexts;
  cards.forEach((card, i) => {
    const cardTitle = card.querySelector('.card-title');
    const cardText = card.querySelector('.card-text');
    if (cardTitle && titles[i % titles.length]) cardTitle.textContent = titles[i % titles.length];
    if (cardText && texts[i % texts.length]) cardText.textContent = texts[i % texts.length];
  });
}


/* ===== Helper safe-getters ===== */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

/* ===== Hero Slider 3D ===== */
const slides = $$('.hero-slide');
const prevBtn = $('.hero-prev');
const nextBtn = $('.hero-next');
const indicators = $$('.hero-indicators span');
let currentSlide = 0;

function showSlide(index) {
  if (!slides.length) return;
  slides.forEach((slide, i) => {
    slide.classList.remove('active', 'prev', 'next');
    if (i === index) slide.classList.add('active');
    else if (i === (index - 1 + slides.length) % slides.length) slide.classList.add('prev');
    else if (i === (index + 1) % slides.length) slide.classList.add('next');
  });
  indicators.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

if (slides.length) showSlide(currentSlide);

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    restartAutoSlide();
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    restartAutoSlide();
  });
}

indicators.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentSlide = i;
    showSlide(currentSlide);
    restartAutoSlide();
  });
});

/* ===== Auto Slide Hero ===== */
let autoSlideInterval = 3000;
let autoSlide = null;

function startAutoSlide() {
  if (!slides.length || slides.length <= 1) return;
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, autoSlideInterval);
}

function restartAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

startAutoSlide();

/* ===== Dark Mode & Language ===== */
const darkModeBtn = $('#darkModeToggle');
const langToggleBtn = $('#langToggle');

/* Load saved theme */
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

/* Load saved language */
const savedLang = localStorage.getItem('lang') || 'en';
document.documentElement.lang = savedLang;
document.body.dir = savedLang === 'ar' ? 'rtl' : 'ltr';

/* Update texts on load */
updateNavbarText(savedLang);
updateAboutText(savedLang);
updatePageTitles(savedLang);
updateHeroText(savedLang);
updateCardsText(savedLang);

/* Dark Mode toggle */
if (darkModeBtn) {
  darkModeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-mode');
    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

/* Language toggle */
if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    const currentLang = document.documentElement.lang === 'ar' ? 'en' : 'ar';
    document.documentElement.lang = currentLang;
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', currentLang);
    updateNavbarText(currentLang);
    updateAboutText(currentLang);
    updatePageTitles(currentLang);
    updateCardsText(currentLang);
    updateHeroText(currentLang);

  });
}

/* ===== Apply theme function ===== */
function applyTheme(theme) {
  const bg = $('#threeD-bg');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    if (darkModeBtn) darkModeBtn.innerHTML = '☀️';
    if (bg) bg.style.background = 'radial-gradient(circle at 50% 50%, #111, #000)';
  } else {
    document.body.classList.remove('dark-mode');
    if (darkModeBtn) darkModeBtn.innerHTML = '🌙';
    if (bg) bg.style.background = 'radial-gradient(circle at 50% 50%, #1c4391, #454444)';
  }
}

/* ===== Update About text ===== */
function updateAboutText(lang) {
  const aboutTitle = $('#aboutTitle');
  const aboutText = $('.container p');
  if (aboutTitle) aboutTitle.textContent = data118[lang].aboutTitle;
  if (aboutText) aboutText.innerHTML = data118[lang].aboutText;
}

/* ===== Update page section titles ===== */
function updatePageTitles(lang) {
  const laptopsTitle = $('#laptopsTitle');
  const contactTitle = $('#contactTitle');
  const contactText = $('.contact p');
  if (laptopsTitle) laptopsTitle.textContent = data118[lang].laptopsTitle;
  if (contactTitle) contactTitle.textContent = data118[lang].contactTitle;
  if (contactText) contactText.textContent = data118[lang].contactText;
}

/* ===== Update Cards text ===== */
function updateCardsText(lang) {
  const cards = $$('.card');
  const titles = data118[lang].cardTitles;
  const texts = data118[lang].cardTexts;
  cards.forEach((card, i) => {
    const cardTitle = card.querySelector('.card-title');
    const cardText = card.querySelector('.card-text');
    if (cardTitle && titles[i % titles.length]) cardTitle.textContent = titles[i % titles.length];
    if (cardText && texts[i % texts.length]) cardText.textContent = texts[i % texts.length];
  });
}

/* ===== Navbar translation updater ===== */
function updateNavbarText(lang) {
  try {
    if (!data118 || !data118[lang]) return;
    const map = {
      'nav-home': data118[lang].navHome,
      'nav-about': data118[lang].navAbout,
      'nav-laptops': data118[lang].navLaptops,
      'nav-accessories': data118[lang].navAccessories,
      'nav-telephones': data118[lang].navTelephones,
      'nav-contact': data118[lang].navContact
    };
    Object.keys(map).forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = map[id];
    });
  } catch (err) {
    console.error('updateNavbarText error', err);
  }
}

/* ===== 3D Background Particles ===== */
const bg = $('#threeD-bg');
function createParticles(count = 150) {
  if (!bg) return;
  if (bg.dataset.particlesCreated === '1') return;
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
    bg.appendChild(particle);
  }
  bg.dataset.particlesCreated = '1';
}
createParticles(150);

/* ===== Cards 3D mouse tilt ===== */
const cards = $$('.card');
cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * 10;
    const rotateX = -((y - midY) / midY) * 10;
    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.05)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
  });
});

/* ===== Ensure autoSlide restarts on visibility change ===== */
document.addEventListener('visibilitychange', () => {
  if (document.hidden) clearInterval(autoSlide);
  else startAutoSlide();
});
