const yearEl=document.getElementById('year');
if(yearEl){yearEl.textContent=new Date().getFullYear();}

const i18n={
  en:{
    nav_services:'Services',nav_how:'How It Works',nav_faq:'FAQ',nav_cta:'Book Now',
    hero_title:"Home Barbing, Anywhere In The World",
    hero_subtitle:"Professional barbers to your doorstep. Fast, reliable, and stylish.",
    hero_book:'Book a Barber',hero_learn:'Learn More',
    section_services_title:'Services',
    card_classic_title:'Classic Haircut',card_classic_desc:'Timeless cuts tailored to your style, delivered at home.',
    card_beard_title:'Beard & Grooming',card_beard_desc:'Precision trimming and grooming for a polished look.',
    card_family_title:'Kids & Family',card_family_desc:'Friendly at-home sessions for the whole family.',
    section_how_title:'How It Works.',
    step1_title:'Tell Us Where',step1_desc:'Enter your location worldwide and choose your service.',
    step2_title:'Pick A Barber',step2_desc:'Browse vetted pros and select the time that suits you.',
    step3_title:'Relax At Home',step3_desc:'Your barber arrives on time. Great hair, zero travel.',
    cta_title:'Join The Barbering Team',cta_desc:'Book a professional barber to your doorstep in minutes.',cta_button:'Join Now',
    faq_title:'Frequently Asked Questions',
    faq_q1:'Do you operate worldwide?',faq_a1:'Yes. We connect you with vetted local barbers in many countries and cities.',
    faq_q2:'What equipment do I need at home?',faq_a2:'Just a well-lit space and a chair. Barbers bring sanitized tools.',
    faq_q3:'How do payments work?',faq_a3:'Secure online payments during booking. Cash may be available in select regions.',
    footer_privacy:'Privacy',footer_terms:'Terms'
  },
  tr:{
    nav_services:'Hizmetler',nav_how:'Nasıl Çalışır',nav_faq:'SSS',nav_cta:'Hemen Rezervasyon',
    hero_title:'Dünyanın Her Yerinde Evde Berberlik',
    hero_subtitle:'Profesyonel berberler adresinize gelir. Hızlı, güvenilir, şık.',
    hero_book:'Berber Rezervasyonu',hero_learn:'Daha Fazla Bilgi',
    section_services_title:'Hizmetler',
    card_classic_title:'Klasik Saç Kesimi',card_classic_desc:'Tarzınıza uygun zamansız kesimler, evinizde.',
    card_beard_title:'Sakal ve Bakım',card_beard_desc:'Şık bir görünüm için hassas kesim ve bakım.',
    card_family_title:'Çocuk ve Aile',card_family_desc:'Tüm aile için evde rahat randevular.',
    section_how_title:'Nasıl Çalışır',
    step1_title:'Neredesiniz?',step1_desc:'Konumunuzu girin ve hizmetinizi seçin.',
    step2_title:'Berber Seçin',step2_desc:'Onaylı profesyonelleri inceleyin ve uygun zamanı seçin.',
    step3_title:'Evde Rahatlayın',step3_desc:'Berberiniz zamanında gelir. Harika saç, sıfır yol.',
    cta_title:'Hazır Mısınız?',cta_desc:'Dakikalar içinde adresinize profesyonel berber.',cta_button:'Hemen Rezervasyon',
    faq_title:'Sıkça Sorulan Sorular',
    faq_q1:'Dünya genelinde hizmet veriyor musunuz?',faq_a1:'Evet. Birçok ülke ve şehirde onaylı yerel berberlerle sizi buluşturuyoruz.',
    faq_q2:'Evde hangi ekipman gerekli?',faq_a2:'İyi aydınlatılmış bir alan ve sandalye yeterli. Berberler steril ekipman getirir.',
    faq_q3:'Ödemeler nasıl yapılır?',faq_a3:'Rezervasyon sırasında güvenli online ödeme. Bazı bölgelerde nakit olabilir.',
    footer_privacy:'Gizlilik',footer_terms:'Şartlar'
  },
  el:{
    nav_services:'Υπηρεσίες',nav_how:'Πώς Λειτουργεί',nav_faq:'Συχνές Ερωτήσεις',nav_cta:'Κράτηση Τώρα',
    hero_title:'Κομμωτική στο σπίτι, παντού στον κόσμο',
    hero_subtitle:'Επαγγελματίες στο σπίτι σας. Γρήγορα, αξιόπιστα και στιλάτα.',
    hero_book:'Κράτηση Κομμωτή',hero_learn:'Μάθετε Περισσότερα',
    section_services_title:'Υπηρεσίες',
    card_classic_title:'Κλασικό Κούρεμα',card_classic_desc:'Διαχρονικά κουρέματα προσαρμοσμένα στο στυλ σας, στο σπίτι.',
    card_beard_title:'Γένια & Περιποίηση',card_beard_desc:'Ακριβές τριμάρισμα και περιποίηση για κομψή εμφάνιση.',
    card_family_title:'Παιδιά & Οικογένεια',card_family_desc:'Άνετες επισκέψεις στο σπίτι για όλη την οικογένεια.',
    section_how_title:'Πώς Λειτουργεί',
    step1_title:'Πείτε μας πού',step1_desc:'Εισάγετε την τοποθεσία σας και επιλέξτε υπηρεσία.',
    step2_title:'Επιλέξτε Κομμωτή',step2_desc:'Δείτε επαγγελματίες και διαλέξτε την ώρα που σας βολεύει.',
    step3_title:'Χαλαρώστε στο σπίτι',step3_desc:'Ο κομμωτής έρχεται στην ώρα του. Τέλεια μαλλιά, χωρίς μετακίνηση.',
    cta_title:'Έτοιμοι για ανανέωση;',cta_desc:'Κλείστε επαγγελματία στο σπίτι σας σε λίγα λεπτά.',cta_button:'Κράτηση Τώρα',
    faq_title:'Συχνές Ερωτήσεις',
    faq_q1:'Λειτουργείτε παγκοσμίως;',faq_a1:'Ναι. Σας συνδέουμε με αξιόπιστους επαγγελματίες σε πολλές χώρες και πόλεις.',
    faq_q2:'Τι χρειάζομαι στο σπίτι;',faq_a2:'Έναν καλά φωτισμένο χώρο και μια καρέκλα. Οι επαγγελματίες φέρνουν απολυμασμένα εργαλεία.',
    faq_q3:'Πώς γίνονται οι πληρωμές;',faq_a3:'Ασφαλείς online πληρωμές κατά την κράτηση. Σε ορισμένες περιοχές υπάρχει και μετρητά.',
    footer_privacy:'Προσωπικά Δεδομένα',footer_terms:'Όροι'
  }
};

const applyLanguage=lang=>{
  const dict=i18n[lang]||i18n.en;
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.getAttribute('data-i18n');
    if(dict[key]) el.textContent=dict[key];
  });
};

const select=document.getElementById('lang-select');
if(select){
  select.addEventListener('change',e=>applyLanguage(e.target.value));
  applyLanguage(select.value||'en');
}

const hero=document.getElementById('hero');
const scissors=document.querySelector('.icon-scissors');
const comb=document.querySelector('.icon-comb');
const prefersReduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(hero&&!prefersReduced){
  const apply=(x,y)=>{
    const dx=(x/window.innerWidth-.5)*16;
    const dy=(y/window.innerHeight-.5)*16;
    if(scissors)scissors.style.transform=`translate3d(${dx}px,${-14+dy}px,0)`;
    if(comb)comb.style.transform=`translate3d(${-dx}px,${dy}px,0)`;
  };
  hero.addEventListener('mousemove',e=>apply(e.clientX,e.clientY));
  hero.addEventListener('touchmove',e=>{
    const t=e.touches[0];
    if(t)apply(t.clientX,t.clientY);
  },{passive:true});
}


const form = document.querySelector('.order-form')
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault()
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const details = String(data.get('details') || '').trim()
    const status = document.querySelector('.form-status')
    if (!name || !email || !details) {
      if (status) status.textContent = 'Please fill in required fields.'
      return
    }
    if (status) status.textContent = 'Thanks! We will contact you soon.'
    form.reset()
    setTimeout(() => { if (status) status.textContent = '' }, 4000)
  })
}