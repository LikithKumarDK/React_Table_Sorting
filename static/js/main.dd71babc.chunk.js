(this.webpackJsonpreact_table_sorting=this.webpackJsonpreact_table_sorting||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(5),a=n.n(r),s=n(6),o=n(7),d=(n(12),n(0)),j=function(e){var t=function(e){var t=i.a.useState({key:"name",direction:"descending"}),n=Object(o.a)(t,2),c=n[0],r=n[1];return{items:i.a.useMemo((function(){var t=Object(s.a)(e);return null!==c&&t.sort((function(e,t){return e[c.key]<t[c.key]?"ascending"===c.direction?-1:1:e[c.key]>t[c.key]?"ascending"===c.direction?1:-1:0})),t}),[e,c]),requestSort:function(e){var t="ascending";c&&c.key===e&&"ascending"===c.direction&&(t="descending"),r({key:e,direction:t})},sortConfig:c}}(e.products),n=t.items,c=t.requestSort,r=t.sortConfig,a=function(e){if(r)return r.key===e?r.direction:void 0};return Object(d.jsxs)("table",{children:[Object(d.jsx)("caption",{style:{marginBottom:"30px"},children:Object(d.jsx)("b",{children:"Table Sorting Example"})}),Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:Object(d.jsx)("button",{type:"button",onClick:function(){return c("name")},className:a("name"),children:"Name"})}),Object(d.jsx)("th",{children:Object(d.jsx)("button",{type:"button",onClick:function(){return c("age")},className:a("age"),children:"In Stock"})})]})}),Object(d.jsx)("tbody",{children:n.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.age})]},e.id)}))})]})};function u(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(j,{products:[{id:1,name:"Abhishek",age:20},{id:2,name:"Manu",age:30},{id:3,name:"Chethan",age:40},{id:4,name:"Likith",age:22},{id:5,name:"Sharath",age:20}]})})}var b=document.getElementById("root");a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(u,{})}),b)}},[[14,1,2]]]);
//# sourceMappingURL=main.dd71babc.chunk.js.map