// --- عناصر التحكم ---
const modeBtn = document.getElementById('mode-toggle');
const langBtn = document.getElementById('lang-toggle');
const body = document.body;

// --- Day/Night Mode ---
modeBtn.addEventListener('click', () => {
  body.classList.toggle('night');
  modeBtn.textContent = body.classList.contains('night') ? '☀️' : '🌙';
});

// --- الترجمة الديناميكية ---
const translations = {
  ar: {
    logo: 'هابي باوز',
    heroTitle: 'مرحبا بكم في Happy Paws',
    heroText: 'المكان المثالي لراحة وسعادة كلبك مع فريق متخصص وخدمات فندقية مميزة للحيوانات الأليفة',
    aboutTitle: 'عن فندق Happy Paws',
    aboutText: 'هدفنا هو توفير رعاية مميزة لكلبك في بيئة آمنة ومريحة. يعمل فريقنا المتخصص على الاهتمام بجميع احتياجات الكلاب وتقديم أفضل خدمة ممكنة.',
    storyTitle: 'قصتنا',
    storyText: 'بدأ Happy Paws بحب كبير للحيوانات ورغبة في إنشاء مكان يشعر فيه الكلب بالراحة والسعادة أثناء غياب أصحابه. نحن نوفر إقامة مريحة وأنشطة ممتعة ورعاية صحية لضمان أفضل تجربة لكل كلب.',
    teamTala: 'مديرة الفندق وخبيرة تدريب كلاب',
    teamIman: 'خبيرة تدريب كلاب',
    teamAdam: 'مساعد مدرب وخبير بالحيوانات',
    teamMohand: 'طبيب بيطري',
    teamIbrahem: 'مشرف رعاية الكلاب والأنشطة اليومية',
    teamZainab: 'أخصائية تغذية ورعاية صحية للحيوانات'
  },
  en: {
    logo: 'Happy Paws',
    heroTitle: 'Welcome to Happy Paws',
    heroText: "The perfect place for your dog's comfort and happiness with a specialized team and premium services.",
    aboutTitle: 'About Happy Paws Hotel',
    aboutText: "Our goal is to provide exceptional care for your dog in a safe and comfortable environment. Our specialized team takes care of all dog needs to provide the best possible service.",
    storyTitle: 'Our Story',
    storyText: "Happy Paws started with a great love for animals and a desire to create a place where dogs feel comfortable and happy while their owners are away. We provide comfortable accommodation, fun activities, and healthcare to ensure the best experience for every dog.",
    teamTala: 'Hotel Manager & Dog Trainer',
    teamIman: 'Dog Trainer',
    teamAdam: 'Assistant Trainer & Animal Expert',
    teamMohand: 'Veterinarian',
    teamIbrahem: 'Dog Care & Activities Supervisor',
    teamZainab: 'Nutrition & Animal Health Specialist'
  }
};

let currentLang = 'ar';

// --- وظيفة تغيير اللغة ---
langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  langBtn.textContent = currentLang === 'ar' ? 'EN' : 'AR';

  // تغيير اللوجو
  const logo = document.querySelector('header .logo');
  if (logo) logo.textContent = translations[currentLang].logo;

  // Hero Section
  document.querySelector('.hero-text h1').innerText = translations[currentLang].heroTitle;
  document.querySelector('.hero-text p').innerText = translations[currentLang].heroText;

  // About Section
  document.querySelector('.about h1').innerText = translations[currentLang].aboutTitle;
  document.querySelector('.about > p').innerText = translations[currentLang].aboutText;

  // Story Section
  document.querySelector('.story h2').innerText = translations[currentLang].storyTitle;
  document.querySelector('.story p').innerText = translations[currentLang].storyText;

  // Team Cards
  const teamCards = document.querySelectorAll('.team-cards .card p');
  teamCards[0].innerText = translations[currentLang].teamTala;
  teamCards[1].innerText = translations[currentLang].teamIman;
  teamCards[2].innerText = translations[currentLang].teamAdam;
  teamCards[3].innerText = translations[currentLang].teamMohand;
  teamCards[4].innerText = translations[currentLang].teamIbrahem;
  teamCards[5].innerText = translations[currentLang].teamZainab;
});