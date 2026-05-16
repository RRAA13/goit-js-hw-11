import{a as p,S as m,i as a}from"./assets/vendor-GgwdjDaY.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",h="55892968-2783f46f7c6177191ee022395";function y(o){return p.get(g,{params:{key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:s,comments:f,downloads:d})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${i}"
              alt="${e}"
            />
          </a>

          <div class="info">
            <p><b>Likes</b> ${t}</p>
            <p><b>Views</b> ${s}</p>
            <p><b>Comments</b> ${f}</p>
            <p><b>Downloads</b> ${d}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){c.innerHTML=""}function w(){u.classList.remove("hidden")}function P(){u.classList.add("hidden")}const l=document.querySelector(".form");l.addEventListener("submit",o=>{o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(r===""){a.error({message:"Please fill in the field!",position:"topRight"});return}S(),w(),y(r).then(i=>{if(i.hits.length===0){a.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(i.hits)}).catch(()=>{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{P(),l.reset()})});
//# sourceMappingURL=index.js.map
