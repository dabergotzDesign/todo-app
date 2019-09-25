(window["webpackJsonptodo-app"]=window["webpackJsonptodo-app"]||[]).push([[0],{23:function(e,t,a){e.exports=a(37)},28:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(18),c=a.n(r),l=(a(28),a(20)),u=a(10),i=a(2),s=a(3),m=a(6),d=a(5),p=a(7),h=function(e){return o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"What to do?"),o.a.createElement("span",{className:"tagline"},e.tagline))},f=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleKeyUp",value:function(e){13===e.keyCode&&e.target.blur()}},{key:"render",value:function(){var e=this,t=this.props.data;return o.a.createElement("tr",{className:"todo-item","data-id":t.uuid},o.a.createElement("td",null,o.a.createElement("div",{className:"custom-control custom-checkbox"},o.a.createElement("input",{className:"custom-control-input",value:t.uuid,id:"todo-done-".concat(t.uuid),type:"checkbox",checked:t.done,onChange:this.props.toggleToDoDone}),o.a.createElement("label",{className:"custom-control-label",htmlFor:"todo-done-".concat(t.uuid)},"\xa0"))),o.a.createElement("td",null,o.a.createElement("input",{type:"text",className:"form-control",value:t.text,onChange:function(a){e.props.updateToDoText(t.uuid,a.target.value)},onKeyUp:function(t){e.handleKeyUp(t)}})),o.a.createElement("td",{className:"col-action"},o.a.createElement("i",{className:"icon-remove far fa-trash-alt",onClick:function(a){return e.props.removeToDo(t.uuid)}})))}}]),t}(o.a.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"todo-list"},o.a.createElement("table",{className:"todo-items  table table-borderless"},o.a.createElement("tbody",null,Object.keys(this.props.items).map((function(t){return o.a.createElement(f,{key:"todo-item-".concat(t),data:e.props.items[t],updateToDoText:e.props.updateToDoText,toggleToDoDone:e.props.toggleToDoDone,removeToDo:e.props.removeToDo})})))))}}]),t}(o.a.Component),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).textInput=o.a.createRef(),a.handleSubmit=function(e){e.preventDefault();var t=a.textInput.current.value.trim();a.props.addToDo(t),e.currentTarget.reset()},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"input-group my-3",onSubmit:this.handleSubmit},o.a.createElement("input",{className:"form-control",type:"text",placeholder:"Add a new to do item...",ref:this.textInput}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{className:"btn btn-outline-secondary",type:"submit"},o.a.createElement("i",{className:"fas fa-plus","aria-hidden":"true"}),"\xa0Add Item")))}}]),t}(o.a.Component),v=a(19),y=a.n(v);function E(){var e;return(e=["This could be your bucket list","This could be your Christmas list","This could be your shopping list","This could be your kill list"])[Math.floor(Math.random()*e.length)]}var D=new(function(){function e(){if(Object(i.a)(this,e),!this.canUseLocalStorage())throw Error("The Local storage is full or disabled")}return Object(s.a)(e,[{key:"set",value:function(e,t){localStorage.setItem(e,t)}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=localStorage.getItem(e);return null!==a?a:t}},{key:"canUseLocalStorage",value:function(){var e="this is a test";try{localStorage.setItem(e,e),localStorage.removeItem(e)}catch(t){return!1}return!0}}]),e}()),O=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).addToDo=function(e){var t={uuid:y()(),text:e,done:!1};a.setState((function(e){return e.toDoItems[t.uuid]=t,e}))},a.updateToDoText=function(e,t){a.setState((function(a){return a.toDoItems[e].text=t,a}))},a.toggleToDoDone=function(e){var t=e.target;a.setState((function(e){return e.toDoItems[t.value].done=t.checked,e}))},a.removeToDo=function(e){a.setState((function(t){return delete t.toDoItems[e],t}))},a.storageKey="react-todo";var n=D.get(a.storageKey);return a.state=n?JSON.parse(n):{toDoItems:{}},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){D.set(this.storageKey,JSON.stringify(this.state))}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(h,{tagline:E()}),o.a.createElement(g,{addToDo:this.addToDo}),o.a.createElement(b,{items:this.state.toDoItems,updateToDoText:this.updateToDoText,toggleToDoDone:this.toggleToDoDone,removeToDo:this.removeToDo}))}}]),t}(o.a.Component),T=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.title="HELP | What to do?"}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(h,{tagline:"Your questions will be answered here."}),o.a.createElement("p",null,"Where is the data stored?"),o.a.createElement("p",null,"We store all information in your browsers' Local Storage."))}}]),t}(o.a.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.title="Error 404 | What to do?"}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(h,{tagline:"404 - Page not found"}),o.a.createElement("div",{className:"alert alert-warning"},o.a.createElement("strong",null,"Oops...sorry!",o.a.createElement("br",null)),"The Requested page could not be found."))}}]),t}(o.a.Component),k=function(){return o.a.createElement(l.a,{basename:"/"},o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:"/",component:O}),o.a.createElement(u.a,{path:"/help",component:T}),o.a.createElement(u.a,{component:j})))};a(36);c.a.render(o.a.createElement(k,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.a53eb506.chunk.js.map