(function(){
  var toggle = document.getElementById('menuToggle');
  var sidebar = document.getElementById('sidebar');
  var backdrop = document.getElementById('sidebarBackdrop');
  if(!toggle || !sidebar) return;

  function open(){
    sidebar.classList.add('open');
    backdrop && backdrop.classList.add('open');
    toggle.setAttribute('aria-expanded','true');
    document.body.style.overflow='hidden';
    sessionStorage.setItem('sidebarOpen','1');
  }
  function close(){
    sidebar.classList.remove('open');
    backdrop && backdrop.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
    document.body.style.overflow='';
    sessionStorage.removeItem('sidebarOpen');
  }

  toggle.addEventListener('click', function(){
    if(sidebar.classList.contains('open')) close(); else open();
  });
  backdrop && backdrop.addEventListener('click', close);
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && sidebar.classList.contains('open')) close();
  });

  // Lien de section (ancre) : garder la sidebar ouverte
  sidebar.querySelectorAll('.sidebar-sub').forEach(function(a){
    a.addEventListener('click', function(e){
      e.stopPropagation();
      // Fermer proprement pour libérer le scroll, puis naviguer
      sidebar.classList.remove('open');
      backdrop && backdrop.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
      document.body.style.overflow='';
      // Rouvrir après le scroll (ancre sur la même page)
      sessionStorage.setItem('sidebarOpen','1');
    });
  });

  // Lien de page : mémoriser que la sidebar était ouverte
  sidebar.querySelectorAll('.sidebar-link').forEach(function(a){
    a.addEventListener('click', function(){
      if(sidebar.classList.contains('open')){
        sessionStorage.setItem('sidebarOpen','1');
      }
    });
  });

  // Rouvrir si elle était ouverte sur la page précédente
  if(sessionStorage.getItem('sidebarOpen')){
    open();
  }
})();
