"use strict";(self.webpackChunklarisa_bainton=self.webpackChunklarisa_bainton||[]).push([[390],{9389:function(e,a,t){var n=t(1883),l=t(7294);a.Z=e=>{let{title:a}=e;const t=(0,n.useStaticQuery)("2702842798").site.siteMetadata,r=a||t.title;return l.createElement(l.Fragment,null,l.createElement("title",null,r),l.createElement("meta",{name:"description",content:t.description}),l.createElement("meta",{name:"keywords",content:t.keywords}),l.createElement("meta",{name:"url",content:t.url}))}},1887:function(e,a,t){var n=t(7294);a.Z=e=>{let{sourcePage:a,eventsList:t,eventLinks:l}=e;return n.createElement("ul",{className:a+"_events_calendar events_calendar"},t.map((e=>{const{name:t,id:r,role:c,company:s,companyLink:i,performances:m,createPage:d}=e,o=d?((e,a,t)=>{const l=t.find((e=>e.pageContext.id===a));return n.createElement("a",{className:"title-link",href:l.path},e)})(t,r,l):t;return m&&m.map(((e,t)=>{let{venue:l,venueLink:r,date:m}=e;return n.createElement("li",{className:a+"_calendar_list-item calendar_list-item",key:t},n.createElement("div",{className:"calendar_list-item_background"}),n.createElement("div",{className:"calendar_list-item_foreground"},(e=>{const a=new Date(e);return n.createElement("div",{className:"calendar_list-item_performances_date"},n.createElement("div",{className:"calendar_list-item_performances_date_mdy"},a.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",weekday:"short"})),n.createElement("div",{className:"calendar_list-item_performances_date_time"},a.toLocaleTimeString("en-US",{hour12:!0,hour:"numeric",minute:"numeric"})))})(m),n.createElement("div",{className:"calendar_list-item_performances_show-info"},n.createElement("div",{className:"calendar_list-item_show-info_name"},o),n.createElement("div",{className:"calendar_list-item_show-info_role"},c),n.createElement("div",{className:"calendar_list-item_company"},n.createElement("a",{className:"text-link",href:i},s))),n.createElement("div",{className:"calendar_list-item_performances_venue"},n.createElement("a",{className:"text-link",href:r},l))))}))})))}},6818:function(e,a,t){t.r(a),t.d(a,{Head:function(){return s}});var n=t(7294),l=t(1084),r=t(1887),c=t(9389);a.default=e=>{let{data:a}=e;const t=[],c=[],s=a.allSitePage.nodes;return a.allContentfulEvent.nodes.forEach((e=>{e.performances.forEach((a=>{let{date:n}=a;if(new Date(n).getTime()-(new Date).getTime()>0){t.find((a=>a.id===e.id))||t.push(e)}else{c.find((a=>a.id===e.id))||c.push(e)}}))})),n.createElement(l.Z,null,n.createElement("main",{className:"calendar-page"},n.createElement("div",null,n.createElement("div",{className:"calendar-page_calendar_title"},"Upcoming Events"),n.createElement(r.Z,{sourcePage:"calendar-page",eventsList:t,eventLinks:s})),n.createElement("div",null,n.createElement("div",{className:"calendar-page_calendar_title"},"Past Events"),n.createElement(r.Z,{sourcePage:"calendar-page",eventsList:c,eventLinks:s}))))};const s=()=>n.createElement(c.Z,{title:"Larisa Bainton Hernandez | Calendar"})}}]);
//# sourceMappingURL=component---src-pages-calendar-js-0633b149dc1bad8a3570.js.map