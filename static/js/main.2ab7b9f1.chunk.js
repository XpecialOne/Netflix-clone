(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(2),a=n.n(i),r=n(15),o=n.n(r),s=(n(22),n(23),n(3)),l=n.n(s),d=n(4),u=n(5),h=n(16),f=n.n(h).a.create({baseURL:"https://api.themoviedb.org/3"});n(42);var b=function(e){var t=e.title,n=e.fetchURL,a=e.isLargeRow,r=Object(i.useState)([]),o=Object(u.a)(r,2),s=o[0],h=o[1];return Object(i.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(n);case 2:return t=e.sent,h(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("div",{className:"row_posters",children:s.map((function(e){return Object(c.jsx)("img",{className:"row_poster ".concat(a&&"row_posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(a?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))})]})},j="8440dd03ff61e550c0756a543ef31ee1",v={fetchTrending:"/trending/all/week?api_key=".concat(j,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(j,"&with_network=123"),fetchTopRated:"/movie/top_rated?api_key=".concat(j,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(j,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(j,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(j,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(j,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(j,"&with_genres=99")};n(43);var p=function(){var e=Object(i.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(v.fetchTrending);case 2:return t=e.sent,a(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url(\n        "https://image.tmdb.org/t/p/original/'.concat(null===n||void 0===n?void 0:n.backdrop_path,'"\n        )'),backgroundPosition:"center center"},children:["   ",Object(c.jsxs)("div",{className:"banner_contents",children:[Object(c.jsxs)("h1",{className:"banner_title",children:[" ",(null===n||void 0===n?void 0:n.title)||(null===n||void 0===n?void 0:n.name)||(null===n||void 0===n?void 0:n.original_name)," "]}),Object(c.jsxs)("div",{className:"banner_buttons",children:[Object(c.jsx)("button",{className:"banner_button",children:"Play"}),Object(c.jsx)("button",{className:"banner_button",children:"My List"})]}),Object(c.jsx)("h1",{className:"banner_description",children:null===n||void 0===n?void 0:n.overview})]}),Object(c.jsx)("div",{className:"banner--fadeBottom"})]})};var m=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(p,{}),Object(c.jsx)(b,{title:"Trending now",fetchURL:v.fetchTrending,isLargeRow:!0}),Object(c.jsx)(b,{title:"NETFLIX ORIGINALS",fetchURL:v.fetchNetflixOriginals}),Object(c.jsx)(b,{title:"Top Rated",fetchURL:v.fetchTopRated}),Object(c.jsx)(b,{title:"Action movies",fetchURL:v.fetchActionMovies}),Object(c.jsx)(b,{title:"Comedy Movies",fetchURL:v.fetchComedyMovies}),Object(c.jsx)(b,{title:"Horror Movies",fetchURL:v.fetchHorrorMovies}),Object(c.jsx)(b,{title:"Romance Movies",fetchURL:v.fetchRomanceMovies}),Object(c.jsx)(b,{title:"Documentaries",fetchURL:v.fetchDocumentaries})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),g()}},[[44,1,2]]]);
//# sourceMappingURL=main.2ab7b9f1.chunk.js.map