(function(){
  var cur=(document.getElementById('site-header')||{dataset:{}}).dataset.current||'';
  var PAGES=[['home','Home','index.html'],['about','About','about.html'],['services','Services','services.html'],['contact','Contact','contact.html']];
  var CHEV='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  /* Shared SVG symbols */
  var defs=document.createElement('div');
  defs.innerHTML='<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>'
  +'<symbol id="person" viewBox="0 0 72 72"><rect width="72" height="72" fill="var(--bgc,#E8F1F2)"/><path d="M8 72c0-16 12-24 28-24s28 8 28 24z" fill="var(--coat,#1B2A5C)"/><path d="M30 48l6 10 6-10z" fill="#fff"/><rect x="31" y="38" width="10" height="12" rx="4" fill="var(--skin,#C68642)"/><ellipse cx="36" cy="28" rx="12" ry="14" fill="var(--skin,#C68642)"/><path d="M23 27c0-11 7-16 13-16s13 5 13 16c-3-5-7-8-13-8s-10 3-13 8z" fill="var(--hair,#2B1B12)"/></symbol>'
  +'<symbol id="ig" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"/></symbol>'
  +'<symbol id="tt" viewBox="0 0 24 24"><path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.3 2.6 2 4.4 5 4.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>'
  +'<symbol id="fb" viewBox="0 0 24 24"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5c0-.3.2-.5.5-.5z" fill="currentColor"/></symbol>'
  +'<symbol id="woman" viewBox="0 0 72 72"><rect width="72" height="72" fill="#DDE9EC"/><path d="M18 72V40c0-16 8-26 18-26s18 10 18 26v32z" fill="#E8C46A"/><path d="M10 72c0-15 11-22 26-22s26 7 26 22z" fill="#1B2A5C"/><rect x="31" y="40" width="10" height="12" rx="4" fill="#F1C9A5"/><ellipse cx="36" cy="30" rx="11.5" ry="13.5" fill="#F1C9A5"/><path d="M23 30c0-12 6-18 13-18s13 6 13 18c-2-6-5-10-8-11-4 4-12 6-18 11z" fill="#E8C46A"/><circle cx="31.5" cy="31" r="1.2" fill="#3A2416"/><circle cx="40.5" cy="31" r="1.2" fill="#3A2416"/><path d="M32 37c2 2 6 2 8 0" fill="none" stroke="#B5654A" stroke-width="1.4" stroke-linecap="round"/></symbol>'
  +'<linearGradient id="gBgB" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F8E9DA"/><stop offset="1" stop-color="#E9C7A4"/></linearGradient><linearGradient id="gBgS" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F3F5F9"/><stop offset="1" stop-color="#CBD3E2"/></linearGradient><linearGradient id="gBgG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFF6D4"/><stop offset="1" stop-color="#F3D26A"/></linearGradient><linearGradient id="mB" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F0B987"/><stop offset="1" stop-color="#9A5A2B"/></linearGradient><linearGradient id="mS" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FAFBFD"/><stop offset="1" stop-color="#8E98AD"/></linearGradient><linearGradient id="mG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFE98A"/><stop offset="1" stop-color="#C9961A"/></linearGradient><symbol id="art-bronze" viewBox="0 0 320 200"><rect width="320" height="200" fill="url(#gBgB)"/><rect x="78" y="34" width="124" height="150" rx="12" fill="#1B2A5C" opacity=".12"/><rect x="70" y="26" width="124" height="150" rx="12" fill="#fff"/><rect x="86" y="46" width="56" height="8" rx="4" fill="#D5DBE8"/><rect x="86" y="62" width="92" height="7" rx="3.5" fill="#E3E7F0"/><rect x="86" y="76" width="78" height="7" rx="3.5" fill="#E3E7F0"/><rect x="82" y="94" width="100" height="34" rx="8" fill="#FDECEC" stroke="#E5484D" stroke-width="1.5"/><rect x="92" y="105" width="76" height="6" rx="3" fill="#E5484D" opacity=".45"/><rect x="88" y="107" width="88" height="2.5" rx="1.2" fill="#E5484D"/><rect x="92" y="116" width="52" height="5" rx="2.5" fill="#E5484D" opacity=".3"/><rect x="86" y="140" width="84" height="7" rx="3.5" fill="#E3E7F0"/><rect x="86" y="154" width="60" height="7" rx="3.5" fill="#E3E7F0"/><circle cx="204" cy="132" r="25" fill="#fff" fill-opacity=".55" stroke="#1B2A5C" stroke-width="7"/><path d="M222 150l24 24" stroke="#1B2A5C" stroke-width="9" stroke-linecap="round"/><path d="M238 78l-10 34 22-8 22 8-10-34z" fill="#B9672F"/><circle cx="250" cy="58" r="32" fill="url(#mB)"/><circle cx="250" cy="58" r="23" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="2.5"/><path d="M239 59l8 8 14-17" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol id="art-silver" viewBox="0 0 320 200"><rect width="320" height="200" fill="url(#gBgS)"/><rect x="50" y="34" width="124" height="150" rx="12" fill="#1B2A5C" opacity=".12"/><rect x="42" y="26" width="124" height="150" rx="12" fill="#fff"/><rect x="58" y="46" width="56" height="8" rx="4" fill="#D5DBE8"/><rect x="58" y="62" width="92" height="7" rx="3.5" fill="#E3E7F0"/><rect x="54" y="80" width="100" height="40" rx="8" fill="#FDECEC" stroke="#E5484D" stroke-width="1.5"/><rect x="64" y="90" width="72" height="5" rx="2.5" fill="#E5484D" opacity=".4"/><rect x="60" y="92" width="84" height="2.5" rx="1.2" fill="#E5484D"/><rect x="64" y="102" width="76" height="6" rx="3" fill="#1E7A4C" opacity=".75"/><rect x="58" y="132" width="84" height="7" rx="3.5" fill="#E3E7F0"/><rect x="58" y="146" width="60" height="7" rx="3.5" fill="#E3E7F0"/><path d="M176 92h92a14 14 0 0 1 14 14v34a14 14 0 0 1-14 14h-58l-18 18v-18h-16a14 14 0 0 1-14-14v-34a14 14 0 0 1 14-14z" fill="#fff"/><rect x="190" y="108" width="70" height="7" rx="3.5" fill="#1B2A5C" opacity=".75"/><rect x="190" y="122" width="52" height="7" rx="3.5" fill="#D5DBE8"/><circle cx="262" cy="136" r="11" fill="#1E7A4C"/><path d="M257 136l4 4 7-8" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M258 74l-10 30 22-7 22 7-10-30z" fill="#6F7A92"/><circle cx="270" cy="52" r="32" fill="url(#mS)"/><circle cx="270" cy="52" r="23" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="2.5"/><path d="M270 38l4.2 8.8 9.6 1.2-7 6.6 1.8 9.5-8.6-4.7-8.6 4.7 1.8-9.5-7-6.6 9.6-1.2z" fill="#fff"/></symbol><symbol id="art-gold" viewBox="0 0 320 200"><rect width="320" height="200" fill="url(#gBgG)"/><g transform="rotate(-7 90 110)"><rect x="40" y="44" width="104" height="126" rx="12" fill="#1B2A5C" opacity=".12" transform="translate(6 6)"/><rect x="40" y="44" width="104" height="126" rx="12" fill="#fff"/><rect x="54" y="62" width="48" height="7" rx="3.5" fill="#D5DBE8"/><rect x="54" y="78" width="76" height="6" rx="3" fill="#E3E7F0"/><rect x="54" y="92" width="64" height="6" rx="3" fill="#E3E7F0"/><rect x="54" y="108" width="76" height="26" rx="7" fill="#FDECEC" stroke="#E5484D" stroke-width="1.3"/><rect x="62" y="118" width="58" height="2.5" rx="1.2" fill="#E5484D"/><rect x="54" y="144" width="52" height="6" rx="3" fill="#E3E7F0"/></g><g transform="rotate(6 190 100)"><rect x="124" y="28" width="108" height="132" rx="12" fill="#1B2A5C" opacity=".14" transform="translate(6 6)"/><rect x="124" y="28" width="108" height="132" rx="12" fill="#fff"/><rect x="138" y="46" width="48" height="7" rx="3.5" fill="#D5DBE8"/><rect x="138" y="62" width="78" height="6" rx="3" fill="#E3E7F0"/><rect x="138" y="76" width="64" height="6" rx="3" fill="#E3E7F0"/><rect x="138" y="92" width="78" height="28" rx="7" fill="#E6F6EC" stroke="#1E7A4C" stroke-width="1.3"/><rect x="146" y="103" width="60" height="6" rx="3" fill="#1E7A4C" opacity=".7"/><circle cx="206" cy="136" r="11" fill="#1E7A4C"/><path d="M201 136l4 4 7-8" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g><circle cx="140" cy="106" r="15" fill="#1B2A5C"/><path d="M133 106h14M140 99v14M133 106l4-4M133 106l4 4M147 106l-4-4M147 106l-4 4" stroke="#FFD55A" stroke-width="2.2" stroke-linecap="round" fill="none" opacity="0"/><path d="M132 104h16l-4-4M148 108h-16l4 4" stroke="#FFD55A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M262 84l-12 36 24-8 24 8-12-36z" fill="#B88414"/><circle cx="274" cy="58" r="38" fill="url(#mG)"/><circle cx="274" cy="58" r="28" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="2.5"/><path d="M274 40l5.4 11.3 12.3 1.5-9 8.5 2.3 12.2-11-6-11 6 2.3-12.2-9-8.5 12.3-1.5z" fill="#fff"/><path d="M300 112l3 7 7 3-7 3-3 7-3-7-7-3 7-3z M36 36l2.5 5.5 5.5 2.5-5.5 2.5-2.5 5.5-2.5-5.5-5.5-2.5 5.5-2.5z" fill="#fff" opacity=".9"/></symbol>'
  +'</defs></svg>';
  document.body.insertBefore(defs.firstChild,document.body.firstChild);

  /* Header */
  var h=document.getElementById('site-header');
  if(h){
    var li=PAGES.map(function(p){return '<li><a href="'+p[2]+'"'+(p[0]===cur?' aria-current="page"':'')+'>'+p[1]+'</a></li>';}).join('');
    var sl=PAGES.map(function(p){return '<a class="l" href="'+p[2]+'"'+(p[0]===cur?' aria-current="page"':'')+'>'+p[1]+'</a>';}).join('');
    h.className='topbar';h.id='topbar';
    h.innerHTML='<div class="wrap"><nav class="glass nav" aria-label="Primary">'
    +'<a class="brand" href="index.html" aria-label="RedlineMD, home"><svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z" fill="#E5484D"/></svg><span><span class="b1">REDLINE</span><span class="b2">MD</span></span></a>'
    +'<ul class="links">'+li+'</ul>'
    +'<button class="menu-btn" id="menubtn" type="button" aria-expanded="false" aria-controls="sheet" aria-label="Open menu"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 8h16M4 16h16"/></svg></button>'
    +'</nav><div class="glass sheet" id="sheet" hidden>'+sl+'</div></div>';
  }

  /* Footer */
  var f=document.getElementById('site-footer');
  if(f){
    f.className='foot';
    f.innerHTML='<div class="wrap">'
    +'<div class="foot-top"><p class="eyebrow" >Before you sign</p>'
    +'<h2><span class="redl">Fine print.</span> <span class="clear">Finally clear.</span></h2>'
    +'<a class="btn btn-gold" href="index.html#upload">Review my contract</a></div>'
    +'<div class="foot-grid"><div class="brandcol"><a class="brand" href="index.html" aria-label="RedlineMD, home"><svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z" fill="#E5484D"/></svg><span><span style="color:#fff">REDLINE</span><span style="color:var(--gold)">MD</span></span></a>'
    +'<p>AI-powered contract redlines for physicians. Know what you are signing, and what to ask for.</p>'
    +'<div class="social"><a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="RedlineMD on Instagram"><svg width="24" height="24" aria-hidden="true"><use href="#ig"/></svg></a><a href="https://www.tiktok.com/" target="_blank" rel="noopener" aria-label="RedlineMD on TikTok"><svg width="24" height="24" aria-hidden="true"><use href="#tt"/></svg></a><a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="RedlineMD on Facebook"><svg width="24" height="24" aria-hidden="true"><use href="#fb"/></svg></a></div></div>'
    +'<div><h3>Company</h3><ul><li><a href="about.html">About</a></li><li><a href="contact.html">Contact</a></li><li><a href="index.html#refer">Refer a colleague</a></li></ul></div>'
    +'<div><h3>Services</h3><ul><li><a href="services.html#bronze">Bronze</a></li><li><a href="services.html#silver">Silver</a></li><li><a href="services.html#gold">Gold</a></li></ul></div>'
    +'<div><h3>Trust</h3><ul><li><a href="about.html#privacy">Privacy</a></li><li><a href="#">Terms</a></li><li><a href="#">Security</a></li></ul></div></div>'
    +'<div class="legal"><span>© 2026 RedlineMD. All rights reserved.</span><span>RedlineMD provides contract analysis, not legal advice. [Confirm disclaimer wording with counsel.]</span></div></div>';
  }

  /* Nav behavior */
  var top=document.getElementById('topbar'), btn=document.getElementById('menubtn'), sheet=document.getElementById('sheet');
  if(btn&&sheet){
    var setMenu=function(o){btn.setAttribute('aria-expanded',o?'true':'false');btn.setAttribute('aria-label',o?'Close menu':'Open menu');sheet.hidden=!o;};
    btn.addEventListener('click',function(){setMenu(btn.getAttribute('aria-expanded')!=='true');});
    sheet.addEventListener('click',function(e){if(e.target.closest('a'))setMenu(false);});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false);});
  }
  var dark=document.querySelector('[data-dark-top]');
  if(top&&dark&&'IntersectionObserver' in window){
    new IntersectionObserver(function(en){top.classList.toggle('on-light',!en[0].isIntersecting);},{rootMargin:'-96px 0px 0px 0px',threshold:0}).observe(dark);
  }

  /* Hero video (only if media/hero.mp4 exists) */
  var v=document.getElementById('bgvideo'), pb=document.getElementById('vpause'), lb=document.getElementById('vlabel');
  if(v){
    var SRC='media/hero.mp4', reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
    var c=navigator.connection||{}, slow=c.saveData||/(^|-)(slow-)?(2g|3g)$/.test(c.effectiveType||''), userPaused=false;
    var setPaused=function(p){userPaused=p;if(p){v.pause();}else{v.play().catch(function(){});}};
    if(pb)pb.addEventListener('click',function(){setPaused(!userPaused);});
    var start=function(){
      v.src=SRC;v.load();v.play().then(function(){
        v.classList.add('on');
        if('IntersectionObserver' in window){new IntersectionObserver(function(en){if(userPaused)return;if(en[0].isIntersecting){v.play().catch(function(){});}else{v.pause();}},{threshold:.1}).observe(dark);}
      }).catch(function(){});
    };
    if(!reduce&&!slow){window.addEventListener('load',function(){('requestIdleCallback' in window)?requestIdleCallback(start,{timeout:2000}):setTimeout(start,400);});}
  }

  /* Referral */
  var rl=document.getElementById('reflink');if(rl)rl.addEventListener('focus',function(){this.select();});
  var cl=document.getElementById('copylink'), note=document.getElementById('sharenote'), LINK='redlinemd.ai/invite/YOUR-CODE';
  var copy=function(t,ok,fail){
    var fb=function(){var s=document.createElement('textarea');s.value=t;s.setAttribute('readonly','');s.style.position='fixed';s.style.opacity='0';document.body.appendChild(s);s.select();var r=false;try{r=document.execCommand('copy');}catch(e){}document.body.removeChild(s);r?ok():fail();};
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(ok,fb);}else{fb();}
  };
  if(cl){
    cl.addEventListener('click',function(){var b=this;copy('https://'+LINK,function(){b.textContent='Link copied';setTimeout(function(){b.textContent='Copy link';},2000);},function(){note.textContent='Select the link above and copy it.';if(rl)rl.select();});});
    [].forEach.call(document.querySelectorAll('[data-net]'),function(b){
      b.addEventListener('click',function(){
        var net=b.getAttribute('data-net'), url=b.getAttribute('data-open');
        var cap='Before you sign your physician contract, run it through RedlineMD. Use my link and we each save 5%: https://'+LINK;
        copy(cap,function(){note.textContent='Caption copied. Paste it into your '+net+' post or story.';window.open(url,'_blank','noopener');},function(){note.textContent='Could not copy automatically. Link: '+LINK;});
      });
    });
  }

  /* Contact form (mock-up) */
  var cf=document.getElementById('cform');
  if(cf){cf.addEventListener('submit',function(e){e.preventDefault();document.getElementById('cok').classList.add('show');});}

  /* Help assistant bubble (automated, labeled as such) */
  var A=document.createElement('div');
  A.className='agent';
  A.innerHTML='<div class="agent-panel glass-l" id="agentpanel" role="dialog" aria-label="RedlineMD assistant" hidden>'
  +'<div class="agent-h"><div class="ph round" style="width:44px;height:44px;flex-basis:44px"><svg viewBox="0 0 72 72" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><use href="#woman"/></svg><img src="media/people/agent.jpg" alt="" onerror="this.remove()"></div>'
  +'<div><b>RedlineMD Assistant</b><span><i></i>Automated help</span></div>'
  +'<button type="button" class="agent-x" id="agentx" aria-label="Close help">×</button></div>'
  +'<div class="agent-body" id="agentbody" aria-live="polite"><p class="msg bot">Hi! I’m RedlineMD’s automated assistant. What can I help you with?</p></div>'
  +'<div class="agent-chips" id="agentchips"><button type="button" data-q="how">How does it work?</button><button type="button" data-q="cost">What does it cost?</button><button type="button" data-q="priv">Is my contract private?</button><a href="contact.html">Talk to a person</a></div></div>'
  +'<button type="button" class="agent-fab" id="agentfab" aria-expanded="false" aria-controls="agentpanel" aria-label="Open help assistant"><div class="ph round" style="width:100%;height:100%"><svg viewBox="0 0 72 72" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><use href="#woman"/></svg><img src="media/people/agent.jpg" alt="" onerror="this.remove()"></div><span class="agent-dot" aria-hidden="true"></span></button>';
  document.body.appendChild(A);
  var fab=document.getElementById('agentfab'), panel=document.getElementById('agentpanel'), abody=document.getElementById('agentbody');
  var ANS={how:['How does it work?','Upload your contract, see the risky clauses with an estimate in dollars, then take the suggested edits to your negotiation. No account needed.'],cost:['What does it cost?','The Essential Review is a flat $199, or $179.10 with the Black Friday 10% off. Pricing for the other plans is coming soon.'],priv:['Is my contract private?','Your upload is encrypted and you can delete it at any time.']};
  function openA(o){panel.hidden=!o;fab.setAttribute('aria-expanded',o?'true':'false');fab.setAttribute('aria-label',o?'Close help assistant':'Open help assistant');if(o){var f=panel.querySelector('button[data-q]');if(f)f.focus();}}
  fab.addEventListener('click',function(){openA(panel.hidden);});
  document.getElementById('agentx').addEventListener('click',function(){openA(false);fab.focus();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!panel.hidden){openA(false);fab.focus();}});
  document.getElementById('agentchips').addEventListener('click',function(e){
    var b=e.target.closest('button[data-q]');if(!b)return;var a=ANS[b.getAttribute('data-q')];
    var u=document.createElement('p');u.className='msg me';u.textContent=a[0];abody.appendChild(u);
    var r=document.createElement('p');r.className='msg bot';r.textContent=a[1];abody.appendChild(r);abody.scrollTop=abody.scrollHeight;
  });

  /* Immersive motion: staged reveals, gentle hero parallax, fade between pages */
  var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!rm&&'IntersectionObserver' in window){
    document.documentElement.classList.add('js');
    var sel='.head,.sec-copy,.figure,.plan,.quote,.icard,.mgm-card,.band,.offer,.bar,details,.formcard,.foot-top,.foot-grid,.hand,.stat';
    var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
    [].forEach.call(document.querySelectorAll(sel),function(el){
      var sib=[].filter.call(el.parentNode.children,function(n){return n.matches(sel);});
      el.style.setProperty('--d',(sib.indexOf(el)*110)+'ms');
      el.classList.add('rv');io.observe(el);
    });
    var hb=document.querySelector('.hero-bg'), ticking=false;
    if(hb){window.addEventListener('scroll',function(){if(ticking)return;ticking=true;requestAnimationFrame(function(){var y=Math.min(window.scrollY,900);hb.style.transform='translate3d(0,'+(y*0.22)+'px,0)';ticking=false;});},{passive:true});}
  }
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a[href]');
    if(!a||e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||e.button!==0||a.target==='_blank')return;
    var h=a.getAttribute('href');
    if(!/^[a-z-]+\.html(#.*)?$/i.test(h)||rm||(window.CSS&&CSS.supports&&CSS.supports('selector(:active-view-transition)')))return;
    e.preventDefault();
    document.documentElement.classList.add('leaving');
    setTimeout(function(){window.location.href=h;},230);
    setTimeout(function(){document.documentElement.classList.remove('leaving');},2000);
  });
  window.addEventListener('pageshow',function(){document.documentElement.classList.remove('leaving');});
  /* Prefetch the other pages so navigation feels instant */
  (function(){var done={};function pf(h){if(done[h])return;done[h]=1;var l=document.createElement('link');l.rel='prefetch';l.href=h;document.head.appendChild(l);}
    var c=navigator.connection;if(c&&(c.saveData||/2g/.test(c.effectiveType||'')))return;
    document.addEventListener('pointerover',function(e){var a=e.target.closest&&e.target.closest('a[href$=".html"]');if(a)pf(a.getAttribute('href'));},{passive:true});
    (window.requestIdleCallback||function(f){setTimeout(f,1800);})(function(){['about.html','services.html','contact.html','index.html'].forEach(pf);});})();

  /* Card clips: load when near the viewport, play only while visible, still poster for reduced motion */
  var cv=[].slice.call(document.querySelectorAll('video[data-src]'));
  if(cv.length&&!rm&&'IntersectionObserver' in window){
    var vo=new IntersectionObserver(function(en){en.forEach(function(x){
      var v=x.target;
      if(x.isIntersecting){if(!v.getAttribute('src')){v.src=v.getAttribute('data-src');}v.play().catch(function(){});}
      else{v.pause();}
    });},{threshold:.25});
    cv.forEach(function(v){vo.observe(v);});
  }
})();
