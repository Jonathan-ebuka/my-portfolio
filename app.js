// SHOW MENU
const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('toggle'),
   navClose = document.getElementById('nav-close');

// ===== MENU SHOW
if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show')
   });
};

// ===== MENU HIDDEN

if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show')
   });
};

// ===== REMOVE MENU MOBILE

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
   const navMenu = document.getElementById('nav-menu')
   navMenu.classList.remove('show')
};

navLink.forEach(n => n.addEventListener('click', linkAction));

// ====== CHANGE BACKGROUND HEADER

const shadowHeader = () => {
   const header = document.getElementById("header");
   //  when the croll is grater than 50 vh height, add the shadow header tag to the header
   this.scrollY >= 50 ? header.classList.add('shadow-header')
      : header.classList.remove('shadow-header')
};

window.addEventListener('scroll', shadowHeader);

// ======= EMAIL JS ==========

const contactMessage = document.getElementById('contact-message')
const contactForm = document.getElementById('form')

const sendEmail = (e) => {
   e.preventDefault()

   // serviceID - templateID - #form - publicKey
   emailjs.sendForm('service_2ycr41b', 'template_6kw34al', '#form', 'DGh3yjZTG0jvkbH5d')
      .then(() => {
         // Show sent message
         contactMessage.textContent = 'Message sent successfully ✅'

         // Remove message after five seconds
         setTimeout(() => {
            contactMessage.textContent = ''
         }, 5000)

         // Clear input fields
         form.reset()

      }, () => {
         // Show error message
         contactMessage.textContent = 'Message not sent (service error)'
      })
}

contactForm.addEventListener('submit', sendEmail)

// ========== SHOW SCROLL UP ===========

const scrollUp = () => {
   const scrollUp = document.getElementById('scroll-up')
   //  when the croll is grater than 350 vh height, add the show scroll class to the a tag with the scrollup class
   this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
      : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

// =========== SHOW SECTIONS ACTIVE LINK =========
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
   const scrollDown = window.scrollY

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
         sectionTop = current.offsetTop - 58,
         sectionId = current.getAttribute('id'),
         sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
         sectionsClass.classList.add('active-link')
      } else {
         sectionsClass.classList.remove('active-link')
      }

   })
}

window.addEventListener('scroll', scrollActive)

// ====================== DARK THEME ========================= 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously sellected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains('darkTheme') ? 'dark' : 'light'
const getCurrenticon = () => themeButton.classList.contains('iconTheme') ? 'ri-moon-line' : 'ri-sun-line'

// we validate if the user previously chose a button
if (selectedTheme) {
   // if the validation is fufilled, we ask what the issue was to know if we activated of deactivated the dark
   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
   themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button 
themeButton.addEventListener('click', () => {
   // add or remove the dark icon theme 
   document.body.classList.toggle(darkTheme)
   themeButton.classList.toggle(iconTheme)

   // we save the theme and the current icon that the use chose
   localStorage.setItem('selected-theme', getCurrentTheme())
   localStorage.setItem('selected-icon', getCurrentTheme())
})

// ============ SCROLL REVEAL =============
function revealFunction() {
   window.sr = ScrollReveal({ duration: 1500, distance: '70px', easing: 'ease-out' });

   sr.reveal('.reveal-left', { origin: 'left', reset: true })
   sr.reveal('.reveal-right', { origin: 'right', reset: true })
   sr.reveal('.reveal-top', { origin: 'top', reset: true })
   sr.reveal('.reveal-bottom', { origin: 'bottom', reset: true })
}

window.addEventListener('load', () => {

   revealFunction();
})

