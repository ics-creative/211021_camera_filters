import"./modulepreload-polyfill.b7f2da20.js";/* empty css              */import*as d from"pixi.js";import{O as p,G as u}from"./vendor.f9fb1aa9.js";const t=document.querySelector("video"),o=document.querySelector("canvas"),v={video:{width:t.clientWidth,height:t.clientHeight},audio:!1},l=async e=>{try{return await navigator.mediaDevices.getUserMedia(e)}catch{alert("\u30C7\u30D0\u30A4\u30B9\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F")}},h=async()=>{try{return await navigator.mediaDevices.enumerateDevices()}catch{return[]}},g=async()=>{const a=(await h()).filter(i=>i.kind==="videoinput"),c=(i,n)=>`<label><input name="camera" type="radio" value=${i.toString()} />${n.toString()}</label><br />`,r=document.querySelector(".input_wrapper"),m=a.reduce((i,n)=>i+c(n.deviceId,n.label),"");r.innerHTML=m,r.querySelectorAll("input").forEach(i=>{i.addEventListener("change",n=>{y(n.target.value)})})},y=async e=>{const a=await l({video:{width:t.clientWidth,height:t.clientHeight,deviceId:e}});t.srcObject=await a};let s;const w=()=>{s=new d.Application({view:o});const e=d.Sprite.from(t);e.width=o.width,e.height=o.height,s.stage.addChild(e),f()},f=()=>{const e=new p,a=()=>{e.seed=Math.random(),requestAnimationFrame(a)};a();const c=new u,r=()=>{c.time+=.01,requestAnimationFrame(r)};r(),s.stage.filters=[c]};document.addEventListener("DOMContentLoaded",async()=>{const e=await l(v);t.srcObject=await e,await g(),await t.play(),w()});
