const $ = (s) => document.querySelector(s);
$('#year').textContent = new Date().getFullYear();
const menu = $('.menu-toggle');
menu.addEventListener('click', () => { const opened = $('.nav-links').classList.toggle('open'); menu.setAttribute('aria-expanded', String(opened)); menu.setAttribute('aria-label', opened ? 'ปิดเมนู' : 'เปิดเมนู'); });
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => { $('.nav-links').classList.remove('open'); menu.setAttribute('aria-expanded','false'); }));
const back = $('#back-top');
window.addEventListener('scroll', () => back.classList.toggle('visible', window.scrollY > 450), {passive:true});
back.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
const labels={media:'สื่อการสอน', innovation:'นวัตกรรม',activity:'กิจกรรม'};
const defaultData={email:'',works:[],gallery:['','','']};
let works=[];
function renderWorks(filter='all') {
 const grid=$('#work-grid');grid.replaceChildren();
 const items=works.filter(w=>filter==='all'||w.category===filter);
 if(!items.length){const p=document.createElement('p');p.textContent='ยังไม่มีผลงานในหมวดนี้';grid.append(p);return;}
 for(const w of items){const article=document.createElement('article');article.className='work-card';
 const art=document.createElement('div');art.className='work-art '+(labels[w.category]?w.category:'media');art.textContent=w.icon||'✿';
 const body=document.createElement('div');body.className='work-body';const small=document.createElement('small');small.textContent=labels[w.category]||'ผลงาน';const title=document.createElement('h3');title.textContent=w.title||'ผลงาน';const desc=document.createElement('p');desc.textContent=w.description||'';body.append(small,title,desc);
 if(w.link && /^https?:\/\//i.test(w.link)){const link=document.createElement('a');link.href=w.link;link.target='_blank';link.rel='noopener noreferrer';link.textContent='ดูรายละเอียด ↗';link.style.cssText='display:inline-block;margin-top:12px;color:#9674db;font-size:12px;font-weight:600';body.append(link)}
 article.append(art,body);grid.append(article);
 }
}
function renderGallery(images){const grid=$('#gallery-grid');grid.replaceChildren();for(let i=0;i<Math.max(3,images.length);i++){const src=images[i]||'';const box=document.createElement('div');box.className='gallery-tile';if(src){const btn=document.createElement('button');btn.className='gallery-open';btn.type='button';btn.setAttribute('aria-label','ดูภาพกิจกรรมที่ '+(i+1));const img=document.createElement('img');img.src=src;img.alt='ภาพกิจกรรมที่ '+(i+1);img.onerror=()=>{box.replaceChildren();showGalleryPlaceholder(box,i)};btn.append(img);btn.addEventListener('click',()=>{$('#dialog-image').src=src;$('#image-dialog').showModal()});box.append(btn)}else showGalleryPlaceholder(box,i);grid.append(box)}}
function showGalleryPlaceholder(box,i){const p=document.createElement('div');p.className='gallery-placeholder';const s=document.createElement('span');s.textContent=['☁','♡','✿'][i%3];p.append(s,document.createTextNode('เพิ่มภาพกิจกรรม '+(i+1)));box.append(p)}
$('#close-dialog').addEventListener('click',()=>$('#image-dialog').close());$('#image-dialog').addEventListener('click',e=>{if(e.target===$('#image-dialog'))e.target.close()});
document.querySelectorAll('.filter-btn').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderWorks(b.dataset.filter)}));
fetch('data/portfolio.json').then(r=>{if(!r.ok)throw Error('Data unavailable');return r.json()}).catch(()=>defaultData).then(data=>{works=Array.isArray(data.works)?data.works:[];renderWorks();renderGallery(Array.isArray(data.gallery)?data.gallery:[]);if(data.email&&/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)){$('#email-link').href='mailto:'+data.email;$('#contact .contact-panel small').textContent='ยินดีรับการติดต่อและแลกเปลี่ยนเรียนรู้ค่ะ'}else{$('#email-link').removeAttribute('href');$('#email-link').style.opacity='.65';$('#email-link').style.cursor='default';$('#email-link').textContent='ช่องทางติดต่อ (รอเพิ่มข้อมูล)'}});
