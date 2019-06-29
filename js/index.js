const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2019"
  },
};

// write your code here 

const container = document.querySelector('.container');


const nav = container.querySelectorAll('a');
// console.log(nav);

nav.forEach((element, index) => {
  element.textContent = siteContent.nav[`nav-item-${index + 1}`];
});


// nav[0].textContent = siteContent.nav['nav-item-1'];
// nav[1].textContent = siteContent.nav['nav-item-2'];
// nav[2].textContent = siteContent.nav['nav-item-3'];
// nav[3].textContent = siteContent.nav['nav-item-4'];
// nav[4].textContent = siteContent.nav['nav-item-5'];
// nav[5].textContent = siteContent.nav['nav-item-6'];

// nav[6].textContent = new Image(183, 36).src =  siteContent.nav['img-src'];


const imageHeder = container.querySelector('.logo');
imageHeder['src'] = siteContent.nav['img-src'];

const textHead = container.querySelector('.cta');
const textHeadH1 = textHead.querySelector('h1');
textHeadH1.textContent = siteContent.cta['h1'];

const textHeadBut = textHead.querySelector('button');
textHeadBut.textContent = siteContent.cta['button'];

const img = textHead.querySelector('img');
img['src'] = siteContent.cta['img-src'];


const mainContent = container.querySelector('.main-content');
const topContent = mainContent.querySelector('.top-content');
const textContent = topContent.querySelectorAll('.text-content');
const h4 = textContent[0].querySelector('h4');
h4.textContent = siteContent["main-content"]["features-h4"];
const p = textContent[0].querySelector('p');
p.textContent = siteContent["main-content"]["features-content"];

const th4 = textContent[1].querySelector('h4');
th4.textContent = siteContent["main-content"]['about-h4'];
const tp = textContent[1].querySelector('p');
tp.textContent = siteContent["main-content"]["about-content"];

const img2 = mainContent.querySelector('img');
img2['src'] = siteContent['main-content']['middle-img-src'];

const bottomContent = mainContent.querySelector('.bottom-content');
const botTextContent = bottomContent.querySelectorAll('.text-content');

const h41 = botTextContent[0].querySelector('h4');
h41.textContent = siteContent["main-content"]['services-h4'];
const p1 = botTextContent[0].querySelector('p');
p1.textContent = siteContent["main-content"]['services-content'];

const h42 = botTextContent[1].querySelector('h4');
h42.textContent = siteContent["main-content"]['product-h4'];
const p2 = botTextContent[1].querySelector('p');
p2.textContent = siteContent["main-content"]['product-content'];

const h43 = botTextContent[2].querySelector('h4');
h43.textContent = siteContent["main-content"]['vision-h4'];
const p3 = botTextContent[2].querySelector('p');
p3.textContent = siteContent["main-content"]['vision-content'];



const contact = container.querySelector('.contact');
const contactH4 = contact.querySelector('h4');
contactH4.textContent = siteContent.contact['contact-h4'];

const contactP = contact.querySelectorAll('p');
contactP[0].textContent = siteContent.contact['address'];
contactP[1].textContent = siteContent.contact['phone'];
contactP[2].textContent = siteContent.contact['email'];


const footer = container.querySelector('footer');
const footerP = footer.querySelector('p');
footerP.textContent = siteContent.footer['copyright'];


textHeadBut.addEventListener('click', (e)=> {
  location.reload();
});


