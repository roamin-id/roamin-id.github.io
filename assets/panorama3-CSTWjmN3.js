import{r as n,j as e}from"./main-CrOrkNBP.js";import{V as u,M as c,c as f,A as m,C as w}from"./MarkerContent-YIvS1hNm.js";import{m as v}from"./monument-Bk_HzQNS.js";const j=()=>{const s=n.useRef(null),r=n.useRef(null),[,p]=n.useState(!1),d="https://photo-sphere-viewer-data.netlify.app/assets/",h="https://backend.roamin.id/uploads/20241125061133-87bf2d1c9103bb3fc.jpg",a=[{id:"marker1",position:{yaw:.09954329230468256,pitch:.40165297871457684},color:"#00808f",svgPath:v,tooltip:"Gapura",contentRef:n.useRef(null),contentType:"image",contentData:{imageUrl:"https://streetviewpixels-pa.googleapis.com/v1/thumbnail?cb_client=maps_sv.tactile&w=900&h=600&pitch=-3.252845668682056&panoid=E0RxFIfd9Y2uMPM5QN_rlQ&yaw=59.98743599169863",description:"Gapura: A traditional Balinese gate welcoming visitors to the Jatiluwih area, adorned with intricate carvings."}}],g=`
    <div style="margin-bottom: 10px; width: 22px; height: 22px;">
      <svg viewBox="-2 -2 29 29" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12.5" cy="12.5" r="12.5" fill="gray" />
      <circle cx="12.5" cy="12.5" r="12.5" fill="none" stroke="white" stroke-width="1" />
      <text x="12.5" y="19" font-family="Arial" font-size="18" text-anchor="middle" fill="white">i</text>
      </svg>
    </div>
  `;return n.useEffect(()=>{if(!s.current)return;const i=new u({container:s.current,panorama:h,loadingImg:d+"loader.gif",canvasBackground:"#fff",sphereCorrection:{pan:"5deg",tilt:"15deg"},navbar:["autorotate","zoom","move","description",{id:"change",title:"Tooltips",tabbable:!0,visible:!0,content:g,onClick(){const t=r.current;t&&p(o=>(t.getMarkers().forEach(l=>{o?t.hideMarkerTooltip(l.id):t.showMarkerTooltip(l.id)}),!o))}},"markers","markersList","caption","fullscreen"],plugins:[[c,{markers:a.map(t=>{var o;return{id:t.id,position:t.position,html:f(t.color,t.svgPath),size:{width:80,height:80},anchor:"bottom center",zoomLvl:100,tooltip:{content:t.tooltip,position:"top center"},content:(o=t.contentRef.current)==null?void 0:o.innerHTML,data:{compass:"#ff0000"}}})}],[m,{autostartDelay:1e5,autorotatePitch:"5deg"}],[w,{size:"5rem",backgroundSvg:`
              <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="250" cy="250" r="250" fill="gray" /> 
              </svg>
            `}]]});return r.current=i.getPlugin(c),()=>{i&&i.destroy()}},[]),e.jsx("div",{className:"h-screen",children:e.jsx("div",{ref:s,style:{height:"100%",width:"100%"},children:a.map((i,t)=>e.jsx("div",{id:`${i.id}-content`,ref:i.contentRef,style:{display:"none"},children:i.contentType==="image"?e.jsxs(e.Fragment,{children:[e.jsxs("b",{style:{fontSize:"30px"},children:["Deskripsi Marker ",t+1]}),e.jsx("img",{src:i.contentData.imageUrl,alt:`Marker ${t+1}`,style:{width:"300px",height:"auto"}}),e.jsx("p",{children:i.contentData.description})]}):e.jsx("div",{children:e.jsx("p",{children:"Konten tidak tersedia."})})},t))})})};export{j as default};