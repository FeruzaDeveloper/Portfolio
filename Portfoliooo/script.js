window.addEventListener('DOMcontentloaded',  function(){
  window.addEventListener('scroll', function () {
  const header = this.document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 0)
  })  

  const menuBtn = document.querySelector('.menu-btn')
  const navigation = document.querySelector('.navigation')
  const navigationItems = document.querySelectorAll('.navigation a ')    

  menuBtn.addEventListener('cilck', () => {
 navigation.classList.toggle('active')
  })


  navigationItems.forEach(navItem => {
   navItem.addEventListener('cilck', () => {
     menuBtn.classList.remove('active')
    navigation.classList.remove('active')
   })
  })
  
  const scrollBtn = document.querySelector('.scrollToTop-btn')
  window.addEventListener('scroll', () =>{
     scrollBtn.classList.toggle('active', window .scrollY > 500  )
   
  })
  scrollBtn.addEventListener('click', () => {
     document.body.scrollTop = 0;
  })

  window.addEventListener('scroll', () => {
     let reveals = document.querySelectorAll('.reveal')

     for(let i = 0; i< reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 50;
       if(resizeTop < windowHeight - revealPoint){
           reveals[i].classList.add('active')
       }
     }
  })
})
                    // Takrorlash
window.addEventListener('DOMcontentloaded', function () {
   wiindow.addEventListener('scroll', function (){
       const header = this.document.querySelector ('header')
       header.classList.toggle('sticky', window.scrollY > 0)
   });
   const menuBtn = document.querySelector('menuBtn');
   const navigation = document.querySelector('navigation');
   const navigationItems = document.querySelector('navigation a ');
   menuBtn.addEventListener ('click', () => {
       navigation.classList.toogle('active')
   });
   navigationItems.forEach(navItem => {
       navItem.addEventListener = ('click', () => {
      menuBtn.classList.remove('active');
      navigation.classList.remove('active');

      const scrollBtn = document.querySelector('.scrollTop-btn');
      window.addEventListener ('scroll', () => {
       scrollBtnclassList.toggle('actve', window .scrollY > 500)
      });
      scrollBtn.addEventListener ('click', () => {
      document.body.scrollTop = 0
      });
      window.addEventListener('click', () => {
       let reveals = document.querySelector('.reveal')
       for (let i = 0; i< reveals.length; i++ ) {
           let windowHeight = window.innerHeight;
           let revealTop = reveals[i].getBoundingClientRect().top;
       let revealPoint = 50;
       if (resizeTop.windowHeight = revealPoint){
           reveals[i].classList.add('active')
       };
       };
      });
       });
   });
});