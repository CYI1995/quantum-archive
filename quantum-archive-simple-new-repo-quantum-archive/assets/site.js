/* Quantum Archive | no build tool, dependency-free browser interactions */
(()=>{
 'use strict';
 const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
 const base=(document.documentElement.dataset.base||'').replace(/\/$/,'');
 const progress=$('#readingProgress');
 const updateProgress=()=>{if(progress){const m=document.documentElement.scrollHeight-innerHeight;progress.style.width=(m>0?100*scrollY/m:0)+'%';}};
 addEventListener('scroll',updateProgress,{passive:true});addEventListener('resize',updateProgress);updateProgress();
 // Accessibility and warm-paper theme
 const theme=$('#themeToggle');try{if(localStorage.getItem('qh-color')==='paper')document.documentElement.dataset.theme='paper';}catch(_){}
 theme?.addEventListener('click',()=>{const paper=document.documentElement.dataset.theme!=='paper';document.documentElement.dataset.theme=paper?'paper':'archive';try{localStorage.setItem('qh-color',paper?'paper':'archive')}catch(_){}});
 const nav=$('#mobileNav'),menu=$('#menuToggle');menu?.addEventListener('click',()=>{const opened=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(opened))});
 // Auto-generate article table of contents from Markdown headings
 const article=$('#articleContent'),toc=$('#desktopToc'),mobile=$('#mobileToc');
 if(article){const heads=$$('h2,h3',article);heads.forEach((h,i)=>{if(!h.id)h.id='section-'+String(i+1).padStart(2,'0');for(const target of [toc,mobile]){if(!target)continue;const a=document.createElement('a');a.href='#'+h.id;a.className=h.tagName==='H3'?'level-3':'';a.textContent=h.textContent;target.appendChild(a)}});if(!heads.length){if(toc)toc.innerHTML='<small>暂无章节</small>';if(mobile)mobile.innerHTML='<small>暂无章节</small>'}}
 // Timeline filtering
 const filters=$$('[data-stage-filter]'),inline=$('#timelineSearch');let active='all';
 function applyFilter(){let count=0;const q=(inline?.value||'').trim().toLowerCase();$$('.timeline-group').forEach(group=>{let matches=0;$$('.timeline-row',group).forEach(row=>{const yes=(active==='all'||group.dataset.stage===active)&&(!q||row.textContent.toLowerCase().includes(q));row.hidden=!yes;if(yes)matches++;});group.hidden=!matches;count+=matches;});const empty=$('#timelineEmpty');if(empty)empty.hidden=count>0;}
 filters.forEach(btn=>btn.addEventListener('click',()=>{active=btn.dataset.stageFilter;filters.forEach(b=>{b.classList.toggle('selected',b===btn);b.setAttribute('aria-pressed',String(b===btn))});applyFilter()}));inline?.addEventListener('input',applyFilter);
 // Search across current Markdown article text via Jekyll generated JSON, with no external service
 let catalogue=null,pending=null;
 const dlg=$('#searchDialog'),field=$('#globalSearch'),results=$('#searchResults');
 const h=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 async function loadIndex(){if(catalogue)return catalogue;if(!pending)pending=fetch(base+'/search-index.json').then(r=>{if(!r.ok)throw new Error('HTTP '+r.status);return r.json()}).then(x=>catalogue=x).catch(err=>{pending=null;throw err});return pending;}
 function render(){if(!results||!catalogue)return;const q=(field?.value||'').trim().toLocaleLowerCase();const found=(q?catalogue.filter(e=>[e.year,e.title,e.person,e.keyword,e.summary,e.body].join(' ').toLocaleLowerCase().includes(q)):catalogue.slice(0,9));results.innerHTML='<div class="search-count">'+(q?`找到 ${found.length} 个结果`:'推荐浏览 · 输入关键词搜索全文')+'</div>'+(found.length?found.slice(0,60).map(e=>`<a class="search-result" href="${h(e.url)}"><time>${h(e.year)}</time><span><strong>${h(e.title)}</strong><small>${h(e.person)} · ${h(e.summary)}</small></span></a>`).join(''):'<div class="search-empty">没有找到匹配记录，请尝试其他关键词。</div>');}
 async function openSearch(){if(!dlg)return;dlg.showModal();if(results)results.textContent='加载搜索索引中…';field.value='';field.focus();try{await loadIndex();render()}catch(err){results.textContent='搜索索引加载失败，请检查 GitHub Pages 是否已发布。'}}
 $$('[data-open-search]').forEach(b=>b.addEventListener('click',openSearch));$('#closeSearch')?.addEventListener('click',()=>dlg.close());field?.addEventListener('input',render);field?.addEventListener('keydown',e=>{if(e.key==='Enter'){const first=$('.search-result',results);if(first)location.href=first.href}});dlg?.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
 addEventListener('keydown',e=>{const typing=['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName);if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openSearch()}else if(e.key==='/'&&!typing){e.preventDefault();openSearch()}});
 // Retained educational laboratory drawings. These are simplified conceptual visualisations.
 $$('.learning-lab').forEach(lab=>{const kind=lab.dataset.lab,range=$('input[type="range"]',lab),value=$('.lab-value',lab),answer=$('.lab-answer',lab),plot=$('.lab-graph',lab);if(!range||!value||!answer||!plot)return;
 const pathOf=fn=>Array.from({length:140},(_,i)=>{const t=i/139;return (i?'L':'M')+(15+t*530).toFixed(2)+' '+(130-fn(t)*105).toFixed(2)}).join(' ');
 function redraw(){const v=Number(range.value);value.textContent=v;let label='',fn=()=>0;
 if(kind==='photoelectric'){const photon=1239.841984/v,work=2.3,ke=Math.max(0,photon-work);label=`光子能量 ${photon.toFixed(2)} eV；${ke>0?`电子最大动能 ${ke.toFixed(2)} eV`:'低于逸出阈值，理想单光子模型中不发生光电发射'}`;fn=t=>Math.exp(-Math.pow((t-.38)/.17,2))*(ke>0?.8:.24)}
 else if(kind==='balmer'){const wavelength=1/(.010973731568160*(1/4-1/(v*v)));label=`氢原子 n=${v} → n=2：发射波长约 ${wavelength.toFixed(1)} nm（真空近似）`;fn=t=>Math.exp(-Math.pow((t-Math.max(.1,Math.min(.9,(wavelength-380)/430)))/.018,2))}
 else if(kind==='debroglie'){const wavelength=1.2264/Math.sqrt(v);label=`电子德布罗意波长约 ${wavelength.toFixed(4)} nm（非相对论近似）`;fn=t=>.45*Math.cos(2*Math.PI*(3+Math.sqrt(v)/10)*t)*Math.exp(-Math.pow((t-.5)/.4,2))+.45}
 else if(kind==='bell'){const S=2*Math.sqrt(2)*v/100;label=`CHSH 示意值 |S| = ${S.toFixed(3)}；${S>2?'超过局域界 2':'未超过局域界 2'}`;fn=t=>.47+.45*v/100*Math.cos(t*2*Math.PI)}
 else if(kind==='wavepacket'){const sigma=v/250;label=`高斯波包示意：宽度参数 σ = ${sigma.toFixed(3)}（无量纲）`;fn=t=>.47+Math.exp(-Math.pow((t-.5)/sigma,2))*.43*Math.cos((t-.5)*28*Math.PI)}
 answer.textContent=label;plot.setAttribute('d',pathOf(fn));}
 range.addEventListener('input',redraw);redraw();});
})();
