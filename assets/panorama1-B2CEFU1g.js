import{r as n,j as i}from"./main-CrOrkNBP.js";import{V as m,M as l,c as u,A as w,C as v}from"./MarkerContent-YIvS1hNm.js";import{o as x}from"./om2-DNRCrzn9.js";import{t as y}from"./tiket-DNlMfWZf.js";import{p}from"./parking_space-DWrKzHHg.js";const D=()=>{const s=n.useRef(null),a=n.useRef(null),[,g]=n.useState(!1),h="https://photo-sphere-viewer-data.netlify.app/assets/",d="https://backend.roamin.id/uploads/20241125011735-873411427f646a82.jpg",r=[{id:"marker1",position:{yaw:5.552078955083891,pitch:.08079001571617095},color:"#00808f",svgPath:x,tooltip:"Pura Dalem Jatiluwih",contentRef:n.useRef(null),contentType:"image",contentData:{imageUrl:"https://streetviewpixels-pa.googleapis.com/v1/thumbnail?cb_client=maps_sv.tactile&w=900&h=600&pitch=-19.84780455749879&panoid=L9wbnvdrCeHNCW_7m3h0xg&yaw=28.70403261152506",description:"A sacred site honoring ancestral spirits, reflecting traditional Balinese temple architecture."}},{id:"marker2",position:{yaw:5.131288851660418,pitch:.17785970590230082},color:"#00808f",svgPath:y,tooltip:"Check Point Barat",contentRef:n.useRef(null),contentType:"image",contentData:{imageUrl:"https://streetviewpixels-pa.googleapis.com/v1/thumbnail?cb_client=maps_sv.tactile&w=900&h=600&pitch=18.9351424499863&panoid=gIGNjsFT8jPHj_nSRGpmfg&yaw=278.22557993858726",description:"Entry point on the western side of Jatiluwih, providing access to the area’s scenic views and attractions."}},{id:"marker3",position:{yaw:3.63535638895185,pitch:.09323872237389108},color:"#00808f",svgPath:p,tooltip:"Parking Space 2",contentRef:n.useRef(null),contentType:"image",contentData:{imageUrl:"https://streetviewpixels-pa.googleapis.com/v1/thumbnail?cb_client=maps_sv.tactile&w=900&h=600&pitch=-3.35074811348386&panoid=sjkLxErCI_w4d9hEZG9xKw&yaw=24.230850768086704",description:"Designated areas for visitor parking, ensuring convenient access to Jatiluwih’s attractions."}},{id:"marker4",position:{yaw:2.993042842367654,pitch:.014175430974464831},color:"#00808f",svgPath:p,tooltip:"Parking Space 3",contentRef:n.useRef(null),contentType:"image",contentData:{imageUrl:"",description:"Designated areas for visitor parking, ensuring convenient access to Jatiluwih’s attractions."}}],f=`
    <div style="margin-bottom: 10px; width: 22px; height: 22px;">
      <svg viewBox="-2 -2 29 29" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12.5" cy="12.5" r="12.5" fill="gray" />
      <circle cx="12.5" cy="12.5" r="12.5" fill="none" stroke="white" stroke-width="1" />
      <text x="12.5" y="19" font-family="Arial" font-size="18" text-anchor="middle" fill="white">i</text>
      </svg>
    </div>
  `;return n.useEffect(()=>{if(!s.current)return;const t=new m({container:s.current,panorama:d,loadingImg:h+"loader.gif",canvasBackground:"#fff",sphereCorrection:{pan:"0deg",tilt:"15deg"},navbar:["autorotate","zoom","move","description",{id:"change",title:"Tooltips",tabbable:!0,visible:!0,content:f,onClick(){const e=a.current;e&&g(o=>(e.getMarkers().forEach(c=>{o?e.hideMarkerTooltip(c.id):e.showMarkerTooltip(c.id)}),!o))}},"markers","markersList","caption","fullscreen"],plugins:[[l,{markers:r.map(e=>{var o;return{id:e.id,position:e.position,html:u(e.color,e.svgPath),size:{width:80,height:80},anchor:"bottom center",zoomLvl:100,tooltip:{content:e.tooltip,position:"top center"},content:(o=e.contentRef.current)==null?void 0:o.innerHTML,data:{compass:"#ff0000"}}})}],[w,{autostartDelay:1e5,autorotatePitch:"5deg"}],[v,{size:"5rem",backgroundSvg:`
              <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="250" cy="250" r="250" fill="gray" /> 
              </svg>
            `}]]});return a.current=t.getPlugin(l),()=>{t&&t.destroy()}},[]),i.jsx("div",{className:"h-screen",children:i.jsx("div",{ref:s,style:{height:"100%",width:"100%"},children:r.map((t,e)=>i.jsx("div",{id:`${t.id}-content`,ref:t.contentRef,style:{display:"none"},children:t.contentType==="image"?i.jsxs(i.Fragment,{children:[i.jsx("b",{style:{fontSize:"30px"},children:t.tooltip}),i.jsx("img",{src:t.contentData.imageUrl,alt:`Marker ${e+1}`,style:{width:"300px",height:"auto"}}),i.jsx("p",{children:t.contentData.description})]}):t.contentType==="text"?i.jsxs(i.Fragment,{children:[i.jsx("b",{style:{fontSize:"30px"},children:t.tooltip}),i.jsx("p",{children:t.contentData.description})]}):i.jsx("div",{dangerouslySetInnerHTML:{__html:t.contentData.description||""}})},e))})})};export{D as default};