(self.webpackChunklarisa_bainton=self.webpackChunklarisa_bainton||[]).push([[674],{4129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(7294),u=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function l(e,t){return e(t={exports:{}},t.exports),t.exports}var E=l((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.EMBEDDED_RESOURCE="embedded-resource-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))}));c(E);E.BLOCKS;var f=l((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.RESOURCE_HYPERLINK="resource-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline",e.EMBEDDED_RESOURCE="embedded-resource-inline"}(t.INLINES||(t.INLINES={}))}));c(f);f.INLINES;var s=l((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript"}(n||(n={})),t.default=n}));c(s);var d=l((function(e,t){var n,r=a&&a.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,u=t.length;o<u;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},o=a&&a.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var u=o(s);t.TOP_LEVEL_BLOCKS=[E.BLOCKS.PARAGRAPH,E.BLOCKS.HEADING_1,E.BLOCKS.HEADING_2,E.BLOCKS.HEADING_3,E.BLOCKS.HEADING_4,E.BLOCKS.HEADING_5,E.BLOCKS.HEADING_6,E.BLOCKS.OL_LIST,E.BLOCKS.UL_LIST,E.BLOCKS.HR,E.BLOCKS.QUOTE,E.BLOCKS.EMBEDDED_ENTRY,E.BLOCKS.EMBEDDED_ASSET,E.BLOCKS.EMBEDDED_RESOURCE,E.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[E.BLOCKS.PARAGRAPH,E.BLOCKS.HEADING_1,E.BLOCKS.HEADING_2,E.BLOCKS.HEADING_3,E.BLOCKS.HEADING_4,E.BLOCKS.HEADING_5,E.BLOCKS.HEADING_6,E.BLOCKS.OL_LIST,E.BLOCKS.UL_LIST,E.BLOCKS.HR,E.BLOCKS.QUOTE,E.BLOCKS.EMBEDDED_ENTRY,E.BLOCKS.EMBEDDED_ASSET,E.BLOCKS.EMBEDDED_RESOURCE],t.TABLE_BLOCKS=[E.BLOCKS.TABLE,E.BLOCKS.TABLE_ROW,E.BLOCKS.TABLE_CELL,E.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[E.BLOCKS.HR,E.BLOCKS.EMBEDDED_ENTRY,E.BLOCKS.EMBEDDED_ASSET,E.BLOCKS.EMBEDDED_RESOURCE],t.CONTAINERS=((n={})[E.BLOCKS.OL_LIST]=[E.BLOCKS.LIST_ITEM],n[E.BLOCKS.UL_LIST]=[E.BLOCKS.LIST_ITEM],n[E.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[E.BLOCKS.QUOTE]=[E.BLOCKS.PARAGRAPH],n[E.BLOCKS.TABLE]=[E.BLOCKS.TABLE_ROW],n[E.BLOCKS.TABLE_ROW]=[E.BLOCKS.TABLE_CELL,E.BLOCKS.TABLE_HEADER_CELL],n[E.BLOCKS.TABLE_CELL]=[E.BLOCKS.PARAGRAPH],n[E.BLOCKS.TABLE_HEADER_CELL]=[E.BLOCKS.PARAGRAPH],n),t.HEADINGS=[E.BLOCKS.HEADING_1,E.BLOCKS.HEADING_2,E.BLOCKS.HEADING_3,E.BLOCKS.HEADING_4,E.BLOCKS.HEADING_5,E.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=r([E.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[E.BLOCKS.DOCUMENT,E.BLOCKS.PARAGRAPH,E.BLOCKS.HEADING_1,E.BLOCKS.HEADING_2,E.BLOCKS.HEADING_3,E.BLOCKS.HEADING_4,E.BLOCKS.HEADING_5,E.BLOCKS.HEADING_6,E.BLOCKS.OL_LIST,E.BLOCKS.UL_LIST,E.BLOCKS.LIST_ITEM,E.BLOCKS.HR,E.BLOCKS.QUOTE,E.BLOCKS.EMBEDDED_ENTRY,E.BLOCKS.EMBEDDED_ASSET,f.INLINES.HYPERLINK,f.INLINES.ENTRY_HYPERLINK,f.INLINES.ASSET_HYPERLINK,f.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[u.default.BOLD,u.default.CODE,u.default.ITALIC,u.default.UNDERLINE]}));c(d);d.V1_MARKS,d.V1_NODE_TYPES,d.TEXT_CONTAINERS,d.HEADINGS,d.CONTAINERS,d.VOID_BLOCKS,d.TABLE_BLOCKS,d.LIST_ITEM_BLOCKS,d.TOP_LEVEL_BLOCKS;var _=l((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));c(_);var L=l((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));c(L);var O=l((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:E.BLOCKS.DOCUMENT,data:{},content:[{nodeType:E.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n}));c(O);var S=l((function(e,t){function n(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){if(t===e[r[n]])return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return n(f.INLINES,e.nodeType)},t.isBlock=function(e){return n(E.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}}));c(S);S.isText,S.isBlock,S.isInline;var p=l((function(e,t){var n=a&&a.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=a&&a.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=a&&a.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},u=a&&a.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&n(t,e,o);return r(t,e),t},i=a&&a.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return E.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return f.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return i(s).default}}),o(d,t),o(_,t),o(L,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return i(O).default}});var c=u(S);t.helpers=c}));c(p);var y,B,m=p.helpers,I=(p.EMPTY_DOCUMENT,p.MARKS),T=p.INLINES,C=p.BLOCKS;function A(e,t){return e.map((function(e,n){return r=D(e,t),u=n,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:u}):r;var r,u}))}function D(e,t){var n=t.renderNode,r=t.renderMark,o=t.renderText,i=t.preserveWhitespace;if(m.isText(e)){var a=o?o(e.value):e.value;if(i){var c=(a=a.replace(/ {2,}/g,(function(e){return"&nbsp;".repeat(e.length)}))).split("\n"),l=[];c.forEach((function(e,t){l.push(e),t!==c.length-1&&l.push(u.createElement("br",null))})),a=l}return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),a)}var E=A(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,E):u.createElement(u.Fragment,null,E)}var N=((y={})[C.DOCUMENT]=function(e,t){return t},y[C.PARAGRAPH]=function(e,t){return u.createElement("p",null,t)},y[C.HEADING_1]=function(e,t){return u.createElement("h1",null,t)},y[C.HEADING_2]=function(e,t){return u.createElement("h2",null,t)},y[C.HEADING_3]=function(e,t){return u.createElement("h3",null,t)},y[C.HEADING_4]=function(e,t){return u.createElement("h4",null,t)},y[C.HEADING_5]=function(e,t){return u.createElement("h5",null,t)},y[C.HEADING_6]=function(e,t){return u.createElement("h6",null,t)},y[C.EMBEDDED_ENTRY]=function(e,t){return u.createElement("div",null,t)},y[C.EMBEDDED_RESOURCE]=function(e,t){return u.createElement("div",null,t)},y[C.UL_LIST]=function(e,t){return u.createElement("ul",null,t)},y[C.OL_LIST]=function(e,t){return u.createElement("ol",null,t)},y[C.LIST_ITEM]=function(e,t){return u.createElement("li",null,t)},y[C.QUOTE]=function(e,t){return u.createElement("blockquote",null,t)},y[C.HR]=function(){return u.createElement("hr",null)},y[C.TABLE]=function(e,t){return u.createElement("table",null,u.createElement("tbody",null,t))},y[C.TABLE_ROW]=function(e,t){return u.createElement("tr",null,t)},y[C.TABLE_HEADER_CELL]=function(e,t){return u.createElement("th",null,t)},y[C.TABLE_CELL]=function(e,t){return u.createElement("td",null,t)},y[T.ASSET_HYPERLINK]=function(e){return K(T.ASSET_HYPERLINK,e)},y[T.ENTRY_HYPERLINK]=function(e){return K(T.ENTRY_HYPERLINK,e)},y[T.RESOURCE_HYPERLINK]=function(e){return R(T.RESOURCE_HYPERLINK,e)},y[T.EMBEDDED_ENTRY]=function(e){return K(T.EMBEDDED_ENTRY,e)},y[T.EMBEDDED_RESOURCE]=function(e,t){return R(T.EMBEDDED_RESOURCE,e)},y[T.HYPERLINK]=function(e,t){return u.createElement("a",{href:e.data.uri},t)},y),v=((B={})[I.BOLD]=function(e){return u.createElement("b",null,e)},B[I.ITALIC]=function(e){return u.createElement("i",null,e)},B[I.UNDERLINE]=function(e){return u.createElement("u",null,e)},B[I.CODE]=function(e){return u.createElement("code",null,e)},B[I.SUPERSCRIPT]=function(e){return u.createElement("sup",null,e)},B[I.SUBSCRIPT]=function(e){return u.createElement("sub",null,e)},B);function K(e,t){return u.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}function R(e,t){return u.createElement("span",{key:t.data.target.sys.urn},"type: ",t.nodeType," urn: ",t.data.target.sys.urn)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?D(e,{renderNode:i(i({},N),t.renderNode),renderMark:i(i({},v),t.renderMark),renderText:t.renderText,preserveWhitespace:t.preserveWhitespace}):null}},3903:function(e,t,n){"use strict";n.r(t);var r=n(3346),o=n.n(r),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,u=c}finally{try{!r&&a.return&&a.return()}finally{if(o)throw u}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var c={},l=function(e,t){var n=t.entryId,r=t.linkType,o=t.spaceId,u=t.environmentId;return o&&u?e.get(o+"!"+u+"!"+r+"!"+n):e.get(r+"!"+n)},E=function(e,t){var n=t.sys,r=n.type,o=n.linkType;if("ResourceLink"===r){var u=function(e){var t=/.*:spaces\/([^/]+)(?:\/environments\/([^/]+))?\/entries\/([^/]+)$/;if(t.test(e)){var n=e.match(t),r=i(n,4),o=(r[0],r[1]),u=r[2];return{spaceId:o,environmentId:void 0===u?"master":u,entryId:r[3]}}}(t.sys.urn),a=u.spaceId,E=u.environmentId,f=u.entryId,s=o.split(":")[1];return l(e,{linkType:s,entryId:f,spaceId:a,environmentId:E})||c}var d=t.sys.id;return l(e,{linkType:o,entryId:d})||c},f=function e(t,n,r,o){if(n(t))return r(t);if(t&&"object"===(void 0===t?"undefined":u(t))){for(var i in t)t.hasOwnProperty(i)&&(t[i]=e(t[i],n,r,o));o&&(t=function(e){if(Array.isArray(e))return e.filter((function(e){return e!==c}));for(var t in e)e[t]===c&&delete e[t];return e}(t))}return t};t.default=function(e,t){if(t=t||{},!e.items)return[];var n=o()(e),r=Object.keys(n.includes||{}).reduce((function(t,n){return[].concat(a(t),a(e.includes[n]))}),[]),u=[].concat(a(n.items),a(r)).filter((function(e){return Boolean(e.sys)})),i=new Map(u.reduce((function(e,t){var n,r=(n=t.sys,n.space&&n.environment?[n.type+"!"+n.id,n.space.sys.id+"!"+n.environment.sys.id+"!"+n.type+"!"+n.id]:[n.type+"!"+n.id]).map((function(e){return[e,t]}));return e.push.apply(e,a(r)),e}),[]));return u.forEach((function(e){var n=function(e,t){return Array.isArray(t)?Object.keys(e).filter((function(e){return-1!==t.indexOf(e)})).reduce((function(t,n){return t[n]=e[n],t}),{}):e}(e,t.itemEntryPoints);Object.assign(e,f(n,(function(e){return(t=e)&&t.sys&&"Link"===t.sys.type||function(e){return e&&e.sys&&"ResourceLink"===e.sys.type}(e);var t}),(function(e){return function(e,t,n){var r=E(e,t);return r===c?n?r:t:r}(i,e,t.removeUnresolved)}),t.removeUnresolved))})),n.items}},3346:function(e,t,n){e.exports=function(){"use strict";var e=Function.prototype.toString,t=Object.create,r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,a=Object.getPrototypeOf,c=Object.prototype,l=c.hasOwnProperty,E=c.propertyIsEnumerable,f="function"==typeof i,s="function"==typeof WeakMap,d=function(){if(s)return function(){return new WeakMap};var e=function(){function e(){this._keys=[],this._values=[]}return e.prototype.has=function(e){return!!~this._keys.indexOf(e)},e.prototype.get=function(e){return this._values[this._keys.indexOf(e)]},e.prototype.set=function(e,t){this._keys.push(e),this._values.push(t)},e}();return function(){return new e}}(),_=function(n,r){var o=n.__proto__||a(n);if(!o)return t(null);var u=o.constructor;if(u===r.Object)return o===r.Object.prototype?{}:t(o);if(~e.call(u).indexOf("[native code]"))try{return new u}catch(c){}return t(o)},L=function(e,t,n,r){var o=_(e,t);for(var u in r.set(e,o),e)l.call(e,u)&&(o[u]=n(e[u],r));if(f)for(var a=i(e),c=0,s=a.length,d=void 0;c<s;++c)d=a[c],E.call(e,d)&&(o[d]=n(e[d],r));return o},O=function(e,t,n,a){var c=_(e,t);a.set(e,c);for(var l=f?u(e).concat(i(e)):u(e),E=0,s=l.length,d=void 0,L=void 0;E<s;++E)if("callee"!==(d=l[E])&&"caller"!==d)if(L=o(e,d)){L.get||L.set||(L.value=n(e[d],a));try{r(c,d,L)}catch(O){c[d]=L.value}}else c[d]=n(e[d],a);return c},S=function(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},p=Array.isArray,y=Object.getPrototypeOf,B=function(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:(console&&console.error&&console.error('Unable to locate global object, returning "this".'),this)}();function m(e,t){var n=!(!t||!t.isStrict),r=t&&t.realm||B,o=n?O:L,u=function(e,t){if(!e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);var i,a=e.__proto__||y(e),c=a&&a.constructor;if(!c||c===r.Object)return o(e,r,u,t);if(p(e)){if(n)return O(e,r,u,t);i=new c,t.set(e,i);for(var l=0,E=e.length;l<E;++l)i[l]=u(e[l],t);return i}if(e instanceof r.Date)return new c(e.getTime());if(e instanceof r.RegExp)return(i=new c(e.source,e.flags||S(e))).lastIndex=e.lastIndex,i;if(r.Map&&e instanceof r.Map)return i=new c,t.set(e,i),e.forEach((function(e,n){i.set(n,u(e,t))})),i;if(r.Set&&e instanceof r.Set)return i=new c,t.set(e,i),e.forEach((function(e){i.add(u(e,t))})),i;if(r.Blob&&e instanceof r.Blob)return e.slice(0,e.size,e.type);if(r.Buffer&&r.Buffer.isBuffer(e))return i=r.Buffer.allocUnsafe?r.Buffer.allocUnsafe(e.length):new c(e.length),t.set(e,i),e.copy(i),i;if(r.ArrayBuffer){if(r.ArrayBuffer.isView(e))return i=new c(e.buffer.slice(0)),t.set(e,i),i;if(e instanceof r.ArrayBuffer)return i=e.slice(0),t.set(e,i),i}return"function"==typeof e.then||e instanceof Error||r.WeakMap&&e instanceof r.WeakMap||r.WeakSet&&e instanceof r.WeakSet?e:o(e,r,u,t)};return u(e,d())}return m.default=m,m.strict=function(e,t){return m(e,{isStrict:!0,realm:t?t.realm:void 0})},m}()},8872:function(e,t,n){"use strict";var r=n(4836);t.Z=function(e,t){let{raw:n,references:r}=e;void 0===t&&(t={});const i=JSON.parse(n||null);if(!r||!r.length)return(0,o.documentToReactComponents)(i,t);const a={items:[{sys:{type:"Entry"},richText:i}],includes:{Entry:r.filter((e=>{let{__typename:t}=e;return"ContentfulAsset"!==t})).map((e=>({...e,sys:{type:"Entry",id:e.contentful_id}}))),Asset:r.filter((e=>{let{__typename:t}=e;return"ContentfulAsset"===t})).map((e=>({...e,sys:{type:"Asset",id:e.contentful_id}})))}},c=(0,u.default)(a,{removeUnresolved:!0});return(0,o.documentToReactComponents)(c[0].richText,t)};var o=n(4129),u=r(n(3903))},1494:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(1084),u=n(8032),i=n(8872);t.default=e=>{let{data:t}=e;const n=t.contentfulEvent,{name:a,performances:c,description:l,coverPhoto:E}=n;return r.createElement(o.Z,null,r.createElement("main",{className:"event-page"},(e=>e&&r.createElement(u.G,{className:"cover-photo",image:(0,u.c)(e),alt:""}))(E),r.createElement("div",{className:"title"},a),r.createElement("div",{className:"event-page_performances"},r.createElement("ul",{className:"performance-list"},c.map(((e,t)=>{let{date:n,venue:o,venueLink:u}=e;return r.createElement("li",{className:"performance-list-item",key:"performance-"+t},r.createElement("div",{className:"performance-list-item_date"},(e=>{const t=new Date(e);return r.createElement("div",{className:"calendar_list-item_performances_date"},r.createElement("div",{className:"calendar_list-item_performances_date_mdy"},t.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",weekday:"short"})),r.createElement("div",{className:"calendar_list-item_performances_date_time"},t.toLocaleTimeString("en-US",{hour12:!0,hour:"numeric",minute:"numeric"})))})(n)),r.createElement("div",{className:"performance-list-item_location"},r.createElement("a",{className:"text-link",href:u},o)))})))),r.createElement("div",{className:"event-page_description"},l&&(0,i.Z)(l))))}}}]);
//# sourceMappingURL=component---src-pages-events-contentful-event-name-js-6da86f6ca7ceca5f884b.js.map