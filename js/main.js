(function(){
  // Mobile menu
  var burger=document.getElementById('burger'),menu=document.getElementById('menu');
  burger.addEventListener('click',function(){
    var open=menu.classList.toggle('open');
    burger.setAttribute('aria-expanded',open);
    burger.setAttribute('aria-label',open?'Close menu':'Open menu');
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'&&menu.classList.contains('open')){burger.click();burger.focus();}
  });

  // Any link other than Home goes to the 404 page
  document.addEventListener('click',function(e){
    var a=e.target.closest('a[href]');
    if(!a)return;
    var h=a.getAttribute('href');
    if(h!=='index.html'&&h!=='404.html'&&h.charAt(0)!=='#'){e.preventDefault();location.href='404.html';}
  });

  // Subscribe forms
  document.querySelectorAll('.sub-form').forEach(function(f){
    var msg=f.nextElementSibling,input=f.querySelector('input');
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var ok=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
      msg.className='form-msg'+(ok?'':' err');
      msg.textContent=ok?'Thanks for subscribing!':'Enter a valid email address.';
      if(ok)input.value='';
    });
  });
})();
