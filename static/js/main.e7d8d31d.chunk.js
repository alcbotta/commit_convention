(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(37)},29:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a.n(n),l=a(14),c=a.n(l),s=(a(29),a(1)),r=a(5),m=a(6),i=a(7),u=a(8),d=a(9),h=(a(30),a(23)),v=a(39),p=a(40),b=a(41),g=a(42),f=(a(31),a(32),[{value:"feat",label:"feat"},{value:"fix",label:"fix"},{value:"docs",label:"docs"},{value:"style",label:"style"},{value:"refactor",label:"refactor"},{value:"test",label:"test"},{value:"chore",label:"chore"}]),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).getCommitMessage=function(){return"".concat(a.state.type?a.state.type.value:""," (").concat(a.state.scope,"): ").concat(a.state.subject," \n\n").concat(a.state.body,"\n    \n").concat(a.state.footer)},a.onChange=function(e){a.setState(Object(s.a)({},e.target.name,e.target.value?e.target.value:""))},a.state={type:null,scope:"",subject:"",body:"",footer:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"app-container"},o.a.createElement("div",{className:"two-screens-container"},o.a.createElement("div",{className:"screen left"},o.a.createElement(v.a,null,o.a.createElement(p.a,null,o.a.createElement(b.a,null,"Type"),o.a.createElement(h.a,{name:"type",value:this.state.type,onChange:function(t){e.setState({type:t||null})},options:f})),o.a.createElement(p.a,null,o.a.createElement(b.a,null,"Scope"),o.a.createElement(g.a,{onChange:this.onChange,value:this.state.scope,name:"scope"})),o.a.createElement(p.a,null,o.a.createElement(b.a,null,"Subject"),o.a.createElement(g.a,{onChange:this.onChange,value:this.state.subject,name:"subject"})),o.a.createElement(p.a,null,o.a.createElement(b.a,null,"Message Body"),o.a.createElement(g.a,{onChange:this.onChange,value:this.state.body,name:"body",type:"textarea"})),o.a.createElement(p.a,null,o.a.createElement(b.a,null,"Footer"),o.a.createElement(g.a,{onChange:this.onChange,value:this.state.footer,name:"footer",type:"textarea"})))),o.a.createElement("div",{className:"screen right"},o.a.createElement("div",{id:"commit-message-formatted"}," Commit message "),o.a.createElement("div",{className:"commit-message-formatted"},this.getCommitMessage()))),o.a.createElement("div",{className:"footer"},o.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){var t=document.createElement("textarea");t.value='"'+e.getCommitMessage()+'"',console.log(t.value),t.setAttribute("readonly",""),t.style={position:"absolute",left:"-9999px"},document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},"Copy commit message"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.e7d8d31d.chunk.js.map