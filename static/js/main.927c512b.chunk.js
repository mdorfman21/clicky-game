(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,c){e.exports=c(19)},16:function(e,t,c){},17:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),i=c(5),n=c.n(i),r=(c(16),c(17),c(1)),o=c(6),l=c(7),d=c(9),p=c(8),h=c(10);var m=function(e){return s.a.createElement("div",null,s.a.createElement("img",{src:e.src,onClick:e.handleClickedImage,alt:e.alt,reset:e.reset,clicked:e.clicked}))};var f=function(e){return s.a.createElement("div",null,s.a.createElement("h1",null,"Score: ",e.score," | Top Score: ",e.topScore))};var u=function(e){return s.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)},g=c(2),b=c.n(g);var k=function(e){return s.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)};var v=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return s.a.createElement("div",{className:t},e.children)},w=function(e){function t(){var e,c;Object(o.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(c=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={images:[{src:"https://thumbs-prod.si-cdn.com/qXrJJ-l_jMrQbARjnToD0fi-Tsg=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/d6/93/d6939718-4e41-44a8-a8f3-d13648d2bcd0/c3npbx.jpg",alt:"fish",clicked:!1},{src:"https://cdn-images-1.medium.com/max/2600/1*mJ11PM4ZSBF0ZIAj5TebIw.png",alt:"fish 2",clicked:!1},{src:"https://robbreportedit.files.wordpress.com/2019/01/shutterstock_755489131.jpg?w=1024",alt:"fish 4",clicked:!1},{src:"https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Fish/H-P/pufferfish-closeup.ngsversion.1427141760081.adapt.1900.1.jpg",alt:"fish 5",clicked:!1},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Georgia_Aquarium_-_Giant_Grouper_edit.jpg/220px-Georgia_Aquarium_-_Giant_Grouper_edit.jpg",alt:"fish 6",clicked:!1},{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScK_9Sh-iTLBni5h72m3bq64L6xgY6tdtO3zwG_gMhYLvG_GyY",alt:"fish 7",clicked:!1},{src:"https://cbsnews1.cbsistatic.com/hub/i/r/2018/10/29/edf8703e-590e-4cdf-98a7-95cc2355387b/thumbnail/1200x630/75b0462a423f0f938d746fccbdf99f6c/screen-shot-2018-10-29-at-1-38-58-pm.jpg",alt:"fish 8",clicked:!1},{src:"https://i.ytimg.com/vi/cC9r0jHF-Fw/maxresdefault.jpg",alt:"fish 9",clicked:!1},{src:"https://cdn.brainpop.com/science/diversityoflife/fish/screenshot1.png",alt:"fish 10",clicked:!1},{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTo0svLOzWN_RhJkEOzLZzIwhUKjs8rq4_0rX3k9EQbAD7fPws",alt:"fish 11",clicked:!1},{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-CEe0vJxhXNPnx0UZbeKRgE6GFGZrHo4EY3IutP3wgOzDNB_8sA",alt:"fish 12",clicked:!1},{src:"https://cdnph.upi.com/svc/sv/i/4881540575073/2018/1/15405765522500/Fish-evolved-near-shorelines-not-in-deep-waters-study-says.jpg",alt:"fish 13",clicked:!1},{src:"https://cdn.britannica.com/85/132085-131-C5B5089E.jpg",alt:"fish 14",clicked:!1},{src:"https://www.niwa.co.nz/sites/niwa.co.nz/files/sites/default/files/imported/attachments/106329/giant-kokopu.jpg",alt:"fish 15",clicked:!1},{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHMkYnsue5CW6xFQ2tDO2_YemUc0ayfAJQ8Qnf-yBog_P-f909g",alt:"fish 16",clicked:!1},{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpntRZmSadftHB2jryf0ebARcEr29LI6WfOhdERCU3_OkIyGgG",alt:"fish 17",clicked:!1},{src:"https://fullserviceaquatics.com/wp-content/uploads/2012/08/orange-bubble-fish2.jpg",alt:"fish 18",clicked:!1},{src:"http://media.heartlandtv.com/images/spring-pygmy-sunfish.jpg",alt:"fish 19",clicked:!1},{src:"https://oceanconservancy.org/wp-content/uploads/2017/04/sustainable2.jpg",alt:"fish 20",clicked:!1},{src:"https://cdn.shoplightspeed.com/shops/609770/files/3135713/380x275x1/reef-safe.jpg",alt:"fish 3",clicked:!1}],score:0,topScore:0},c.handleClickedImage=function(e){e.stopPropagation();var t,a=c.state.images,s=e.target.src,i=a.map(function(e){return s===e.src?Object(r.a)({},e,{clicked:!0}):e}),n=a.filter(function(e){if(s===e.src)return e}),o=c.state.score;if(n[0].clicked){t=0;var l=a.map(function(e){return Object(r.a)({},e,{clicked:!1})}),d=b.a.shuffle(l);c.setState(Object(r.a)({},c.state,{images:d,score:t}))}else{var p=b.a.shuffle(i);t=o+1,c.setState(Object(r.a)({},c.state,{images:p,score:t}))}},c}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.images;return s.a.createElement(u,null,s.a.createElement(k,null,s.a.createElement(v,{size:"12"},s.a.createElement(f,{score:this.state.score,topScore:this.state.topScore}))),s.a.createElement(k,null,t.map(function(t){return s.a.createElement(m,{src:t.src,alt:t.alt,key:t.src,handleClickedImage:e.handleClickedImage})})))}}]),t}(s.a.Component);var j=function(){return s.a.createElement(w,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(s.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.927c512b.chunk.js.map