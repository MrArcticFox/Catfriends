(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),l=(a(12),a(1)),i=a(2),s=a(4),h=a(3),u=function(e){var t=e.name,a=e.email,n=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(n+13,"?set=set4"),width:"250",height:"250"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(u,{key:a,id:t[a].id,name:t[a].name,email:t[a].email})})))},d=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Cats",onChange:t}))},f=(a(13),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid black",height:"750px"}},e.children)}),p=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(i.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Not good"):this.props.children}}]),a}(n.Component),b=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchfield,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f2"},"Cat Friends"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(p,null,r.a.createElement(m,{robots:n})))):r.a.createElement("h1",null,"Loading")}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(14);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.48596a25.chunk.js.map