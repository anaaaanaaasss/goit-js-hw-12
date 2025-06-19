import{a as b,S as v,i as a}from"./assets/vendor-DqB7j7Ix.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const S="50804236-703018bc97defe2a99a93e985",w="https://pixabay.com/api/";async function f(r,o=1){return(await b.get(w,{params:{key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})).data}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),q=new v(".gallery a");function h(r){const o=`
    <ul class="gallery-list">
      ${r.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:n,comments:g,downloads:L})=>`
        <li class="gallery__item">
          <a href="${i}">
            <img src="${s}" alt="${e}" />
            <div class="info">
              <p><b>Likes:</b> ${t}</p>
              <p><b>Views:</b> ${n}</p>
              <p><b>Comments:</b> ${g}</p>
              <p><b>Downloads:</b> ${L}</p>
            </div>
          </a>
        </li>
      `).join("")}
    </ul>
  `;m.insertAdjacentHTML("beforeend",o),q.refresh()}function $(){m.innerHTML=""}function P(){p.classList.remove("is-hidden")}function R(){p.classList.add("is-hidden")}let c=1,y="",d=0;const O=document.querySelector(".form");O.addEventListener("submit",async r=>{r.preventDefault(),c=1;const o=r.target.elements.searchQuery.value.trim();if(y=o,!o){a.warning({message:"Будь ласка, введіть слово для пошуку!",position:"topRight"});return}l.classList.add("is-hidden"),$(),P();try{const s=await f(o,c),i=s.hits;i.length===0?a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(h(i),d=s.totalHits,d>15&&l.classList.remove("is-hidden"))}catch{a.error({message:"Сталася помилка. Спробуйте ще раз.",position:"topRight"})}finally{R()}});const l=document.querySelector(".load-more"),u=document.querySelectorAll(".loader")[1];l.addEventListener("click",async()=>{c+=1,u.classList.remove("is-hidden");try{const r=await f(y,c);h(r.hits),lightbox.refresh(),_(),c*15>=d&&(l.classList.add("is-hidden"),a.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch{a.error({message:"Ошибка при загрузке",position:"topRight"})}finally{u.classList.add("is-hidden")}});function _(){const{height:r}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
