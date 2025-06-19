import{a as S,S as f,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const w="50804236-703018bc97defe2a99a93e985",q="https://pixabay.com/api/";async function p(r,o=1){return(await S.get(q,{params:{key:w,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})).data}const y=document.querySelector(".gallery"),g=document.querySelector(".loader"),$=new f(".gallery a");function h(r){const o=`
    <ul class="gallery-list">
      ${r.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:a,comments:L,downloads:v})=>`
        <li class="gallery__item">
          <a href="${i}">
            <img src="${s}" alt="${e}" />
            <div class="info">
              <p><b>Likes:</b> ${t}</p>
              <p><b>Views:</b> ${a}</p>
              <p><b>Comments:</b> ${L}</p>
              <p><b>Downloads:</b> ${v}</p>
            </div>
          </a>
        </li>
      `).join("")}
    </ul>
  `;y.insertAdjacentHTML("beforeend",o),$.refresh()}function P(){y.innerHTML=""}function u(){g.classList.remove("is-hidden")}function R(){g.classList.add("is-hidden")}document.querySelector(".load-more");let l=1,b="",d=0;const O=document.querySelector(".form");O.addEventListener("submit",async r=>{r.preventDefault(),l=1;const o=r.target.elements.searchQuery.value.trim();if(b=o,!o){n.warning({message:"Будь ласка, введіть слово для пошуку!",position:"topRight"});return}c.classList.remove("is-visible"),P(),u();try{u();const s=await p(o,l),i=s.hits;i.length===0?n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(h(i),_.refresh(),d=s.totalHits,d>15&&c.classList.add("is-visible"))}catch{n.error({message:"Сталася помилка. Спробуйте ще раз.",position:"topRight"})}finally{R()}});const c=document.querySelector(".load-more"),m=document.querySelectorAll(".loader")[1],_=new f(".gallery a");c.addEventListener("click",async()=>{l+=1,m.classList.remove("is-hidden");try{const r=await p(b,l);h(r.hits),x(),l*15>=d&&(c.classList.remove("is-visible"),n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({message:"Ошибка при загрузке",position:"topRight"})}finally{m.classList.add("is-hidden")}});function x(){const{height:r}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
