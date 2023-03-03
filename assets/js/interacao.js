const menuToggle = document.querySelector('.menuToggle');
    const close = document.querySelector('.close');
    menuToggle.addEventListener('click', function(){
      menuToggle.classList.toggle('active');
    });


    close.addEventListener('click', function(){
      menuToggle.classList.toggle('active');
    });