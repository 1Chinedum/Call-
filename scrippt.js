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