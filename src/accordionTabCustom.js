let firstT,secT,thrT,mm,resRes,ffr=null,previousWidth=window.innerWidth;function re(e){m.resize&&(clearTimeout(resRes),clearTimeout(mm),window.addEventListener("resize",()=>{resRes=setTimeout(()=>{let t=window.innerWidth;t!==previousWidth&&(m.selector.indexOf(".")>=0?t>m.tabs.responsive.media&&(loo=0,document.getElementsByClassName("acordianMobile_1").length>0?taA(e):ht(e),remTabC(e)):m.selector.indexOf("#")>=0&&(loo=0,document.getElementsByClassName("acordianMobile_1").length>0?taAId(e):htId(e),remTabCId(e))),previousWidth=window.innerWidth},200)}))}function ht(e){if(document.getElementsByClassName(e.selector.split(".")[1]).length>0){let t=document.querySelectorAll(`.${e.selector.split(".")[1]}`);Array.from(t).forEach(t=>{htCrea(t,e)})}}function htCrea(e,t){clearTimeout(ffr),clearTimeout(secT),Array.from(e.children).forEach((e,t)=>{e.style.cssText="",Array.from(e.children).forEach(e=>{e.style.cssText="",e.classList.remove("activeParent","activeChild","fade"),e.removeAttribute("data-active")}),ffr=setTimeout(()=>{null!==e.getAttribute("data-touch")&&(e.setAttribute("data-touch",0),e.children[0].classList.add("activeParent"),e.nextElementSibling.children[0].classList.add("activeChild","fade"))},10*t)}),secT=setTimeout(()=>{if(document.getElementsByClassName("tab-nav").length>0){let e=document.getElementsByClassName("tab-nav");Array.from(e).forEach(e=>{e.remove()})}id(),cl()},55)}function taA(e){if(clearTimeout(thrT),document.getElementsByClassName(e.selector.split(".")[1]).length>0){let t=document.querySelectorAll(`.${e.selector.split(".")[1]}`);Array.from(t).forEach((e,t)=>{let i=document.createElement("div");i.classList.add("child");let l=document.createDocumentFragment();Array.from(e.children[0].children).forEach((e,t)=>{let n=e.children[1].cloneNode(!0);n.style.cssText="",0==t?n.classList.add("activeChild","fade"):n.classList.remove("activeChild","fade"),n.classList.remove(m.tabs.toggleChildClass),i.appendChild(n);let s=e.children[0].cloneNode(!0);"0"==e.children[0].getAttribute("data-index")?s.classList.add("activeParent"):s.classList.remove("activeParent"),s.classList.remove(m.tabs.toggleParentClass),l.appendChild(s)}),e.appendChild(i),document.getElementsByClassName("parent")[t].innerHTML=" ",document.getElementsByClassName("parent")[t].append(l),thrT=setTimeout(()=>{if(document.getElementsByClassName("tab-nav").length>0){let e=document.getElementsByClassName("tab-nav");Array.from(e).forEach(e=>{e.remove()})}id(),cl()},55)})}}function taAId(e){if(clearTimeout(thrT),document.getElementById(e.selector.split("#")[1])){let t=document.getElementById(e.selector.split("#")[1]),i=document.createElement("div");i.classList.add("child");let l=document.createDocumentFragment();Array.from(t.children[0].children).forEach((e,t)=>{let n=e.children[1].cloneNode(!0);n.style.cssText="",0==t?n.classList.add("activeChild","fade"):n.classList.remove("activeChild","fade"),n.classList.remove(m.tabs.toggleChildClass),i.appendChild(n);let s=e.children[0].cloneNode(!0);"0"==e.children[0].getAttribute("data-index")?s.classList.add("activeParent"):s.classList.remove("activeParent"),s.classList.remove(m.tabs.toggleParentClass),l.appendChild(s)}),t.appendChild(i),document.getElementsByClassName("parent")[0].innerHTML=" ",document.getElementsByClassName("parent")[0].append(l),thrT=setTimeout(()=>{if(document.getElementsByClassName("tab-nav").length>0){let e=document.getElementsByClassName("tab-nav");Array.from(e).forEach(e=>{e.remove()})}id(),cl()},55)}}function htId(e){if(document.getElementById(e.selector.split("#")[1])){let t=document.getElementById(e.selector.split("#")[1]);htCreaId(t,e)}}function htCreaId(e,t){clearTimeout(ffr),clearTimeout(secT),Array.from(e.children).forEach((e,t)=>{e.style.cssText="",Array.from(e.children).forEach(e=>{e.style.cssText="",e.classList.remove("activeParent","activeChild","fade"),e.removeAttribute("data-active")}),ffr=setTimeout(()=>{null!==e.getAttribute("data-touch")&&(e.setAttribute("data-touch",0),e.children[0].classList.add("activeParent"),e.nextElementSibling.children[0].classList.add("activeChild","fade"))},10*t)}),secT=setTimeout(()=>{if(document.getElementsByClassName("tab-nav").length>0){let e=document.getElementsByClassName("tab-nav");Array.from(e).forEach(e=>{e.remove()})}id(),cl()},55)}function remTabC(e){window.innerWidth>m.tabs.responsive.media&&Array.from(document.getElementsByClassName(e.selector.split(".")[1])).forEach(e=>{Array.from(e.classList).forEach(t=>{t.startsWith("acordianMobile_")&&e.classList.remove(t)})})}function remTabCId(e){window.innerWidth>m.tabs.responsive.media&&Array.from(document.getElementById(e.selector.split("#")[1]).classList).forEach(t=>{t.startsWith("acordianMobile_")&&document.getElementById(e.selector.split("#")[1]).classList.remove(t)})}let m=null,loo=0,valGet=0,click=0,cP=null,wid=0,htmlsu="",tim=null;export default function tabCustom(e){if(m=e,document.getElementsByClassName("tab-nav").length>0){let t=document.getElementsByClassName("tab-nav");Array.from(t).forEach(e=>{e.remove()})}re(e),id(),cl()}function id(){if(m.selector.indexOf("#")>=0){let e=m.selector.split("#")[1];if(null!=document.getElementById(e)){let t=document.getElementById(e),i=t.children;cP=t.children,z(i),acc(i),m.slider.active&&window.matchMedia(`(min-width: ${m.tabs.responsive.media+1}px)`).matches&&sl(i),m.slider.active&&window.matchMedia(`(min-width: ${m.tabs.responsive.media+1}px)`).matches&&m.slider.touch&&(t.addEventListener("touchstart",function(e){handleTouchStart(e)},!1),t.addEventListener("touchmove",function(e){handleTouchMove(e,i)},!1))}}}function cl(){if(m.selector.indexOf(".")>=0){let e=m.selector.split(".")[1];for(let t=0;t<document.getElementsByClassName(e).length;t++){let i=document.getElementsByClassName(e)[t].children;cP=document.getElementsByClassName(e)[t].children,z(i),acc(i),m.slider.active&&window.matchMedia(`(min-width: ${m.tabs.responsive.media+1}px)`).matches&&sl(i),m.slider.active&&window.matchMedia(`(min-width: ${m.tabs.responsive.media+1}px)`).matches&&m.slider.touch&&(document.getElementsByClassName(e)[t].addEventListener("touchstart",function(e){handleTouchStart(e)},!1),document.getElementsByClassName(e)[t].addEventListener("touchmove",function(e){handleTouchMove(e,i)},!1))}}}let ii=0;function z(e){for(let t=0;t<e[0].children.length;t++)e[0].children[t].setAttribute("data-index",t),e[0].setAttribute("data-touch",0),e[0].children[t].addEventListener("click",function(){ii=t,slid(e,t),clAdd(e,t)})}function slid(e,t){m.slider.active&&window.matchMedia(`(min-width: ${m.tabs.responsive.media+1}px)`).matches&&m.slider.nav&&((click=t)==e[0].children.length-1?(e[2].children[1].setAttribute("disabled",!0),e[2].children[0].removeAttribute("disabled")):0==click?(e[2].children[1].removeAttribute("disabled"),e[2].children[0].setAttribute("disabled",!0)):(e[2].children[1].removeAttribute("disabled"),e[2].children[0].removeAttribute("disabled")))}function clAdd(e,t){for(let i=0;i<e[1].children.length;i++)if(e[0].children[t].getAttribute("for")==e[1].children[i].getAttribute("id")){for(let l=0;l<e[0].children.length;l++)e[0].children[l].classList.remove("activeParent");for(let n=0;n<e[1].children.length;n++)e[1].children[n].classList.remove("activeChild"),setTimeout(()=>{e[1].children[n].classList.remove("fade")});e[1].children[i].classList.add("activeChild"),e[0].children[t].classList.add("activeParent"),setTimeout(()=>{e[1].children[i].classList.add("fade")})}}function acc(e){if(m.tabs.responsive.media>0){loo+=1;let t=[],i=document.createDocumentFragment();if(window.matchMedia(`(max-width: ${m.tabs.responsive.media}px)`).matches){e[0].parentNode.classList.add(`acordianMobile_${loo}`),e[0].style.cssText="";for(let l=0;l<e[0].children.length;l++){let n=0;for(n=0;n<e[1].children.length;n++)if(e[0].children[l].getAttribute("for")==e[1].children[n].getAttribute("id")){let s=e[0].children[l],a=e[1].children[n];a.style.display="block";let d=document.createElement("div"),r=[m.tabs.class,`tabs_${l}`],c=s.cloneNode(!0);c.classList.remove("activeParent"),c.style.cssText="",""!==m.tabs.toggleParentClass&&c.classList.add(m.tabs.toggleParentClass);let h=a.cloneNode(!0);h.classList.remove("activeChild","fade"),""!==m.tabs.toggleChildClass&&h.classList.add(m.tabs.toggleChildClass),d.appendChild(c),d.appendChild(h),d.classList.add(...r),i.appendChild(d)}}e[0].innerHTML=" ",e[1].remove(),e[0].appendChild(i),setTimeout(()=>{for(let i=0;i<e[0].children.length;i++)t.push(e[0].children[i].children[1].offsetHeight),e[0].children[i].children[1].style.height="0px",e[0].children[i].children[1].style.overflow="hidden",e[0].children[i].children[1].style.transition="all 0.3s ease-in-out";togg(t,e[0])},100)}}}function togg(e,t){for(let i=0;i<t.children.length;i++)t.children[i].children[0].addEventListener("click",function(){if(m.tabs.allOpen)t.children[i].classList.toggle("accActive"),Number(t.children[i].children[1].style.height.split("px")[0])>0?(t.children[i].children[1].style.height="0px",t.children[i].children[1].style.overflow="hidden"):(t.children[i].children[1].style.height=e[i]+"px",t.children[i].children[1].style.overflow="auto");else{let l=Number(t.children[i].children[1].style.height.split("px")[0]),n=e[i]+"px";for(let s=0;s<t.children.length;s++)t.children[s].children[1].classList.remove("fade"),t.children[s].children[1].style.height="0px",t.children[s].children[1].style.overflow="hidden",t.children[s].classList.remove("accActive");l>0?(t.children[i].children[1].style.height="0px",t.children[i].classList.remove("accActive"),t.children[i].children[1].style.overflow="hidden"):(t.children[i].children[1].style.height=n,t.children[i].classList.add("accActive"),t.children[i].children[1].style.overflow="auto")}})}var xDown=null,yDown=null;function getTouches(e){return e.touches||e.originalEvent.touches}function handleTouchStart(e){let t=getTouches(e)[0];xDown=t.clientX,yDown=t.clientY}function handleTouchMove(e,t){if(xDown&&yDown){var i=e.touches[0].clientX,l=e.touches[0].clientY,n=xDown-i,s=yDown-l;Math.abs(n)>Math.abs(s)&&(n>0?nex(t):pre(t)),xDown=null,yDown=null}}let wi=0,clr=[];function slidResp(e,t,i){"minus"==i?mi(e,t):pl(e,t)}function mi(e,t){if(e+1==t[0].children.length&&"none"===window.getComputedStyle(t[0].children[e]).display){let i=wi+ccc;ccc=t[0].children[0].offsetWidth;for(let l=0;l<=e;l++)t[0].children[l].style.transform=`translateX(-${i}px)`;t[0].children[e].style.display="block"}if("none"===window.getComputedStyle(t[0].children[e]).display){wi=Number(window.getComputedStyle(t[0].children[e]).maxWidth.split("px")[0])+ccc,ccc=t[0].children[0].offsetWidth,t[0].setAttribute("data-touch",1);for(let n=0;n<=e;n++)t[0].children[n].style.transform=`translateX(-${wi}px)`;t[0].children[e].style.display="block"}}function pl(e,t){if("active"===t[0].children[e].getAttribute("data-active")){if(e+1===t[0].children.length-1){for(let i=0;i<t[0].children.length;i++)t[0].children[i].style.transform=`translateX(-${wi+ccc-ccc}px)`;t[0].children[e+1].style.display="none"}else{for(let l=0;l<t[0].children.length;l++)t[0].children[l].style.transform=`translateX(-${wi-ccc}px)`;t[0].children[e+1].style.display="none"}}else for(let n=0;n<t[0].children.length;n++)t[0].children[n].style.transform="","active"===t[0].children[n].getAttribute("data-active")&&(t[0].children[n].style.display="none",t[0].setAttribute("data-touch",0))}function sl(e,t){slbtn(e),slider(e),m.slider.active&&window.matchMedia(`(min-width: ${m.tabs.responsive.media+1}px)`).matches&&m.slider.nav?e[2].style.display="block":e[2].style.display="none",m.slider.active&&window.matchMedia(`(min-width: ${m.tabs.responsive.media+1}px)`).matches&&slidP(e)}function slbtn(e){let t=document.createElement("div");t.classList.add("tab-nav");let i=document.createElement("button");i.setAttribute("type","button"),i.setAttribute("disabled",!0),i.setAttribute("id","prev"),i.setAttribute("class","tab-nav-inner"),i.innerHTML="prev",t.appendChild(i);let l=document.createElement("button");l.setAttribute("type","button"),l.setAttribute("id","next"),l.setAttribute("class","tab-nav-inner"),l.innerHTML="next",t.appendChild(l),e[0].parentNode.appendChild(t)}function slider(e){e[2].children[1].addEventListener("click",function(){nex(e)},!1),e[2].children[0].addEventListener("click",function(){pre(e)},!1)}let index=0,forVal=0,ccc=0;function nex(e){for(let t=0;t<e[0].children.length;t++)if(!0===e[0].children[t].classList.contains("activeParent")){if(index=Number(e[0].children[t].getAttribute("data-index")),null!=e[0].children[index].nextElementSibling&&(forVal=e[0].children[index].nextElementSibling.getAttribute("for")),index==e[0].children.length-2&&(e[2].children[1].setAttribute("disabled",!0),e[2].children[0].removeAttribute("disabled")),null==e[0].children[index].nextElementSibling)break;e[0].children[index].nextElementSibling.classList.add("activeParent"),childSl(forVal,e),e[0].children[index].previousElementSibling,e[0].children[index].classList.remove("activeParent"),"0"==e[0].getAttribute("data-touch")&&(ccc=0),slidResp(index+1,e,"minus");break}e[2].children[0].removeAttribute("disabled")}function pre(e){for(let t=0;t<e[0].children.length;t++)if(!0===e[0].children[t].classList.contains("activeParent")){if(index=Number(e[0].children[t].getAttribute("data-index")),null!=e[0].children[index].previousElementSibling&&(forVal=e[0].children[index].previousElementSibling.getAttribute("for")),1==index&&(e[2].children[0].setAttribute("disabled",!0),e[2].children[1].removeAttribute("disabled")),null==e[0].children[index].previousElementSibling)break;e[0].children[index].previousElementSibling.classList.add("activeParent"),childSl(forVal,e),e[0].children[index].nextElementSibling,e[0].children[index].classList.remove("activeParent"),slidResp(index-1,e,"plus");break}e[2].children[1].removeAttribute("disabled")}function childSl(e,t){for(let i=0;i<t[1].children.length;i++)t[1].children[i].classList.remove("activeChild"),setTimeout(()=>{t[1].children[i].classList.remove("fade")});for(let l=0;l<t[1].children.length;l++)t[1].children[l].getAttribute("id")==e&&(t[1].children[l].classList.add("activeChild"),setTimeout(()=>{t[1].children[l].classList.add("fade")}))}function slidP(e){Object.keys(m.slider.responsive).forEach(t=>{for(let i=0;i<e[0].children.length;i++)window.matchMedia(`(min-width: ${t}px)`).matches&&void 0==m.slider.responsive[t].active?(e[0].children[i].style.maxWidth=`${e[0].offsetWidth/m.slider.responsive[t].items}px`,e[0].children[i].style.flex=`0 0 ${e[0].offsetWidth/m.slider.responsive[t].items}px`,e[0].offsetWidth/m.slider.responsive[t].items*i>=e[0].offsetWidth?(e[0].children[i].style.display="none",e[0].children[i].setAttribute("data-active","active")):(e[0].children[i].style.display="",e[0].children[i].removeAttribute("data-active")),e[0].style.flexWrap="inherit",e[0].style.width=`${e[0].parentNode.offsetWidth}px`,e[0].style.display="flex",e[0].style.overflow="hidden"):window.matchMedia(`(min-width: ${t}px)`).matches&&!1==m.slider.responsive[t].active&&(e[0].children[i].style.maxWidth="",e[0].children[i].style.flex="",e[0].children[i].style.display="",e[0].children[i].removeAttribute("data-active"),e[0].style.flexWrap="",e[0].style.width="",e[0].style.overflow="",e[0].style.display="",e[0].style.transform="")})}