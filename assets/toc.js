(function(){
  var headings = Array.from(document.querySelectorAll('h3[id], h4[id]'));
  if(headings.length === 0) return;

  var backdrop = document.createElement('div');
  backdrop.className = 'toc-sheet-backdrop';
  document.body.appendChild(backdrop);

  var list = headings.map(function(h){
    var numEl = h.querySelector('.h3-num, .h4-num');
    var num = numEl ? numEl.textContent.trim() : '';
    var label = h.textContent.replace(num, '').trim();
    return '<li><a href="#' + h.id + '">' +
      (num ? '<span class="toc-num">' + num + '</span>' : '') +
      '<span>' + label + '</span></a></li>';
  }).join('');

  var sheet = document.createElement('div');
  sheet.className = 'toc-sheet';
  sheet.setAttribute('role','dialog');
  sheet.setAttribute('aria-label','Sommaire du chapitre');
  sheet.innerHTML =
    '<div class="toc-sheet-header">' +
      '<span class="toc-sheet-title">Sections</span>' +
      '<button class="toc-sheet-close" aria-label="Fermer">✕</button>' +
    '</div>' +
    '<ul class="toc-sheet-list">' + list + '</ul>';
  document.body.appendChild(sheet);

  var btn = document.createElement('button');
  btn.className = 'toc-float-btn';
  btn.setAttribute('aria-label','Ouvrir le sommaire');
  btn.innerHTML = '§ Sections';
  document.body.appendChild(btn);

  function open(){
    backdrop.classList.add('open');
    sheet.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function close(){
    backdrop.classList.remove('open');
    sheet.classList.remove('open');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', open);
  backdrop.addEventListener('click', close);
  sheet.querySelector('.toc-sheet-close').addEventListener('click', close);
  sheet.querySelectorAll('.toc-sheet-list a').forEach(function(a){
    a.addEventListener('click', close);
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') close();
  });
})();
