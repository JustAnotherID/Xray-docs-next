import{p as e,d as t,s,D as a,a as r,S as o,b as i,c as n}from"./styles-2797ae0f.5cbaa298.js";import{G as d}from"./layout.3f4d34ab.js";import{l as c,c as l,h as p,y as g,i as b,j as h}from"./mermaid.core.3bfe3ee1.js";import{r as y}from"./index-05087a90.4f715195.js";import"./edges-97052da4.1db7f361.js";import"./createText-2f679d62.f2e6b693.js";import"./svgDraw-6750006d.8e92555f.js";import"./line.2b2e2097.js";import"./array.999c8e45.js";import"./constant.4f073c13.js";let f={},m=0;function u(e="",t=0,s="",a="----"){return`state-${e}${null!==s&&s.length>0?`${a}${s}`:""}-${t}`}const x=(e,t,s,o,i,n)=>{const d=s.id,p=null==(g=o[d])?"":g.classes?g.classes.join(" "):"";var g;if("root"!==d){let t="rect";!0===s.start&&(t="start"),!1===s.start&&(t="end"),s.type!==a&&(t=s.type),f[d]||(f[d]={id:d,shape:t,description:h.sanitizeText(d,l()),classes:`${p} statediagram-state`});const o=f[d];s.description&&(Array.isArray(o.description)?(o.shape="rectWithTitle",o.description.push(s.description)):o.description.length>0?(o.shape="rectWithTitle",o.description===d?o.description=[s.description]:o.description=[o.description,s.description]):(o.shape="rect",o.description=s.description),o.description=h.sanitizeTextOrArray(o.description,l())),1===o.description.length&&"rectWithTitle"===o.shape&&(o.shape="rect"),!o.type&&s.doc&&(c.info("Setting cluster for ",d,T(s)),o.type="group",o.dir=T(s),o.shape=s.type===r?"divider":"roundedWithTitle",o.classes=o.classes+" statediagram-cluster "+(n?"statediagram-cluster-alt":""));const i={labelStyle:"",shape:o.shape,labelText:o.description,classes:o.classes,style:"",id:d,dir:o.dir,domId:u(d,m),type:o.type,padding:15,centerLabel:!0};if(s.note){const t={labelStyle:"",shape:"note",labelText:s.note.text,classes:"statediagram-note",style:"",id:d+"----note-"+m,domId:u(d,m,"note"),type:o.type,padding:15},a={labelStyle:"",shape:"noteGroup",labelText:s.note.text,classes:o.classes,style:"",id:d+"----parent",domId:u(d,m,"parent"),type:"group",padding:0};m++;const r=d+"----parent";e.setNode(r,a),e.setNode(t.id,t),e.setNode(d,i),e.setParent(d,r),e.setParent(t.id,r);let n=d,c=t.id;"left of"===s.note.position&&(n=t.id,c=d),e.setEdge(n,c,{arrowhead:"none",arrowType:"",style:"fill:none",labelStyle:"",classes:"transition note-edge",arrowheadStyle:"fill: #333",labelpos:"c",labelType:"text",thickness:"normal"})}else e.setNode(d,i)}t&&"root"!==t.id&&(c.trace("Setting node ",d," to be child of its parent ",t.id),e.setParent(d,t.id)),s.doc&&(c.trace("Adding nodes children "),w(e,s,s.doc,o,i,!n))},w=(e,t,s,r,n,d)=>{c.trace("items",s),s.forEach((s=>{switch(s.stmt){case i:case a:x(e,t,s,r,n,d);break;case o:{x(e,t,s.state1,r,n,d),x(e,t,s.state2,r,n,d);const a={id:"edge"+m,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:"fill:none",labelStyle:"",label:h.sanitizeText(s.description,l()),arrowheadStyle:"fill: #333",labelpos:"c",labelType:"text",thickness:"normal",classes:"transition"};e.setEdge(s.state1.id,s.state2.id,a,m),m++}}}))},T=(e,t=n)=>{let s=t;if(e.doc)for(let a=0;a<e.doc.length;a++){const t=e.doc[a];"dir"===t.stmt&&(s=t.value)}return s},S={parser:e,db:t,renderer:{setConf:function(e){const t=Object.keys(e);for(const s of t)e[s]},getClasses:function(e,t){c.trace("Extracting classes"),t.db.clear();try{return t.parser.parse(e),t.db.extract(t.db.getRootDocV2()),t.db.getClasses()}catch(s){return s}},draw:async function(e,t,s,a){c.info("Drawing state diagram (v2)",t),f={},a.db.getDirection();const{securityLevel:r,state:o}=l(),i=o.nodeSpacing||50,n=o.rankSpacing||50;c.info(a.db.getRootDocV2()),a.db.extract(a.db.getRootDocV2()),c.info(a.db.getRootDocV2());const h=a.db.getStates(),m=new d({multigraph:!0,compound:!0}).setGraph({rankdir:T(a.db.getRootDocV2()),nodesep:i,ranksep:n,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));let u;x(m,void 0,a.db.getRootDocV2(),h,a.db,!0),"sandbox"===r&&(u=p("#i"+t));const w=p("sandbox"===r?u.nodes()[0].contentDocument.body:"body"),S=w.select(`[id="${t}"]`),j=w.select("#"+t+" g");await y(j,m,["barb"],"statediagram",t);g.insertTitle(S,"statediagramTitleText",o.titleTopMargin,a.db.getDiagramTitle());const D=S.node().getBBox(),$=D.width+16,A=D.height+16;S.attr("class","statediagram");const v=S.node().getBBox();b(S,A,$,o.useMaxWidth);const k=`${v.x-8} ${v.y-8} ${$} ${A}`;c.debug(`viewBox ${k}`),S.attr("viewBox",k);const B=document.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const d of B){const e=d.getBBox(),t=document.createElementNS("http://www.w3.org/2000/svg","rect");t.setAttribute("rx",0),t.setAttribute("ry",0),t.setAttribute("width",e.width),t.setAttribute("height",e.height),d.insertBefore(t,d.firstChild)}}},styles:s,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,t.clear()}};export{S as diagram};