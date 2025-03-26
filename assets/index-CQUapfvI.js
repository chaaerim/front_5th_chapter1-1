(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function u(n){this.$container=n,this.render=()=>{this.$container.innerHTML=`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`},this.render()}const d=(n,t)=>{try{const o=window.localStorage.getItem(n);return o?JSON.parse(o):t}catch(o){return console.log(o),t}},h=(n,t)=>{try{window.localStorage.setItem(n,JSON.stringify(t))}catch(o){console.log(o)}},m=n=>{try{window.localStorage.removeItem(n)}catch(t){console.log(t)}},l=location.hash!=="",f=()=>{const n=d("user",null),t=location.pathname,o=location.hash,s=l?o==="#/":t==="/",e=l?o==="#/profile":t==="/profile",r="/",a="/profile",i="/login";return` 
  <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a href="${r}" class="move-to-home ${s?"text-blue-600 font-bold":"text-gray-600 font-normal"}">홈</a></li>
        <li><a href="${a}" class="move-to-profile ${e?"text-blue-600 font-bold":"text-gray-600 font-normal"}">프로필</a></li>
        <li>${n?`<a href='${i}' id='logout' class='text-gray-600 font-normal'>로그아웃</a>`:`<a href='${i}' id='login' class='text-gray-600 font-normal'>로그인</a>`}</li>
      </ul>
    </nav>
`},p=()=>`
    <footer class="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 항해플러스. All rights reserved.</p>
      </footer>
`,y=[{id:1,name:"홍길동",createdAt:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{id:2,name:"김철수",createdAt:"15분 전",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{id:3,name:"이영희",createdAt:"30분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{id:4,name:"박민수",createdAt:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{id:5,name:"정수연",createdAt:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],x=n=>{const{name:t,createdAt:o,content:s}=n;return`
        <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">${t}</p>
                <p class="text-sm text-gray-500">${o}</p>
              </div>
            </div>
            <p>${s}</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>
`},c=(n,t=!1)=>{const o=new CustomEvent("historychanged",{detail:{to:n,isReplace:t}});dispatchEvent(o)};function b(n){this.$container=n,this.render=()=>{this.$container.innerHTML=`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${f()}
      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>
        <div class="space-y-4">
         ${y.map(x).join("")}
        </div>
      </main>

      ${p()}
    </div>
  </div>
`},this.render(),this.$loginButton=this.$container.querySelector("#login"),this.$logoutButton=this.$container.querySelector("#logout"),this.$logoutButton&&this.$logoutButton.addEventListener("click",()=>{m("user")}),this.$nav=this.$container.querySelector("nav").addEventListener("click",t=>{const o=t.target.closest("a");if(!(o instanceof HTMLAnchorElement))return;t.preventDefault();const s=o.href.replace(location.origin,"");console.log(s,"targetPath"),l?location.hash=s:c(s,!0)})}function g(n){if(d("user",null)){l?location.hash="/":c("/",!0);return}this.$container=n,this.render=()=>{this.$container.innerHTML=`
     <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input id="username" required type="text" placeholder="사용자 이름" class="w-full p-2 border rounded">
        </div>
        <div class="mb-6">
          <input id="password" required type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`},this.render(),this.form=this.$container.querySelector("#login-form"),this.form.addEventListener("submit",o=>{o.preventDefault();const s=this.form.querySelector("#username"),e=this.form.querySelector("#password"),r=s.value;h("user",{username:r,email:"",bio:""}),s.value="",e.value="",l?location.hash="#/":c("/",!0)})}function v(n){const t=d("user",null);if(!t){l?location.hash="/login":c("/login",!0);return}this.$container=n,this.render=()=>{this.$container.innerHTML=`
  <div id="root">
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${f()}
        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            <form id="profile-form">
              <div class="mb-4">
                <label
                  for="username"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >사용자 이름</label
                >
                <input
                  type="text"
                  id="username"
                  name="username"
                  value="${t.username}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-4">
                <label
                  for="email"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >이메일</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  value="${t.email}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-6">
                <label
                  for="bio"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >자기소개</label
                >
                <textarea
                  id="bio"
                  name="bio"
                  rows="4"
                  class="w-full p-2 border rounded"
                >${t.bio}</textarea
                >
              </div>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white p-2 rounded font-bold"
              >
                프로필 업데이트
              </button>
            </form>
          </div>
        </main>
        ${p()}
      </div>
    </div>
  </div>
`},this.render(),this.$logoutButton=this.$container.querySelector("#logout"),this.$logoutButton.addEventListener("click",()=>{m("user")}),this.form=this.$container.querySelector("#profile-form"),this.form.addEventListener("submit",o=>{o.preventDefault();const s=this.form.querySelector("#username"),e=this.form.querySelector("#email"),r=this.form.querySelector("#bio");h("user",{username:s.value,email:e.value,bio:r.value})}),this.$nav=this.$container.querySelector("nav").addEventListener("click",o=>{const s=o.target.closest("a");if(!(s instanceof HTMLAnchorElement))return;o.preventDefault();const e=s.href.replace(location.origin,"");l?location.hash=e:c(e,!0)})}const w=[{path:"/",component:b},{path:"/login",component:g},{path:"/profile",component:v}],$=[{path:"#/",component:b},{path:"#/login",component:g},{path:"#/profile",component:v}];function L(n){this.$container=n;const t=()=>{var r,a;console.log("location.hash",location.hash);const e=location.hash===""?((r=w.find(i=>i.path===location.pathname))==null?void 0:r.component)||u:((a=$.find(i=>i.path===location.hash))==null?void 0:a.component)||u;new e(this.$container)},o=()=>{window.addEventListener("historychanged",({detail:e})=>{const{to:r,isReplace:a}=e;a||r===location.pathname?history.replaceState(null,"",r):history.pushState(null,"",r),t()}),window.addEventListener("popstate",()=>{console.log("popstate"),t()})};(()=>{window.addEventListener("hashchange",()=>{t()}),window.addEventListener("popstate",()=>{t()})})(),o(),t()}function S(n){this.$container=n,(()=>{new L(this.$container)})()}new S(document.getElementById("root"));
