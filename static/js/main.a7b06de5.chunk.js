(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{29:function(t,e,c){},34:function(t,e,c){},35:function(t,e,c){},38:function(t,e,c){},39:function(t,e,c){},40:function(t,e,c){},41:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c.n(n),i=c(15),s=c.n(i),o=(c(29),c(3)),r=c(9),l=c(11),d=c(10),j=(c(34),c.p+"static/media/house.8216284b.svg"),u=c.p+"static/media/calendar.4410650b.svg",b=c.p+"static/media/upcoming.934f8ff0.svg";c(35);var O=c(1),p=function(t){var e=Object(n.useState)(""),c=Object(r.a)(e,2),i=c[0],s=c[1],o=Object(n.useState)(""),l=Object(r.a)(o,2),d=l[0],j=l[1],u=Object(n.useState)(""),b=Object(r.a)(u,2),p=b[0],_=b[1];return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)("input",{type:"text",className:"create-project-btn__input",placeholder:"Enter path",onChange:function(t){s(t.target.value)}}),Object(O.jsx)("input",{type:"text",className:"create-project-btn__input",placeholder:"Enter title",onChange:function(t){j(t.target.value)}}),Object(O.jsx)("button",{className:"create-project-btn__btn",onClick:function(){""!=i&&""!=d?t.onSubmit(i,d):_("Fill in all the fields")},children:"Create"}),Object(O.jsx)("span",{className:"create-project-btn__error",children:p})]})},_=function(t){var e=Object(n.useState)(!1),c=Object(r.a)(e,2),i=c[0],s=c[1];return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)("button",{className:"create-project-btn",onClick:function(){s(!i)},children:"New Project"}),i?Object(O.jsx)(p,{onSubmit:function(e,c){t.onCreate(e,c),s(!1)}}):null]})},h=Object(l.b)((function(t){return{projects:t.projects}}),(function(t){return{createProject:function(e,c){return t(function(t,e){return{type:"CREATE_PROJECT",payload:{path:t,title:e}}}(e,c))}}}))((function(t){return Object(O.jsx)("aside",{className:"sidebar",children:Object(O.jsxs)("div",{className:"sidebar__links",children:[Object(O.jsxs)(d.b,{to:"/inbox",className:"sidebar__link",activeClassName:"sidebar__link_active",children:[Object(O.jsx)("img",{src:j,alt:"icon",className:"sidebar__icon"}),"Inbox"]}),Object(O.jsxs)(d.b,{to:"/today",className:"sidebar__link",activeClassName:"sidebar__link_active",children:[Object(O.jsx)("img",{src:u,alt:"icon",className:"sidebar__icon"}),"Today"]}),Object(O.jsxs)(d.b,{to:"/upcoming",className:"sidebar__link",activeClassName:"sidebar__link_active",children:[Object(O.jsx)("img",{src:b,alt:"icon",className:"sidebar__icon"}),"Upcoming"]}),Object(O.jsx)("div",{className:"sidebar__section-title",children:"Projects"}),Object.entries(t.projects).map((function(t){var e=Object(r.a)(t,2),c=e[0],n=e[1];return Object(O.jsx)(d.b,{to:"/"+c,className:"sidebar__link",activeClassName:"sidebar__link_active",children:n.title},c)})),Object(O.jsx)(_,{onCreate:t.createProject})]})})})),m=(c(38),c(39),Object(l.b)((function(t){return t}),(function(t){return{changeTodo:function(e,c,n){return t(function(t,e,c){return{type:"CHANGE_TODO"+(["inbox","upcoming","today"].includes(t)?"_MAIN":"_SECONDARY"),payload:{path:t,id:e,data:c}}}(e,c,n))},deleteTodo:function(e,c){return t(function(t,e){return{type:"DELETE_TODO"+(["inbox","upcoming","today"].includes(t)?"_MAIN":"_SECONDARY"),payload:{path:t,id:e}}}(e,c))}}}))((function(t){var e=function(e){e.target.style.height="1em",e.target.style.height=e.target.scrollHeight+"px",j(e.target.value),t.changeTodo(t.path,t.id,{content:d,checked:i})},c=Object(n.useState)(t.data.checked),a=Object(r.a)(c,2),i=a[0],s=a[1],o=Object(n.useState)(t.data.content),l=Object(r.a)(o,2),d=l[0],j=l[1];return Object(O.jsxs)("div",{className:"todo",children:[Object(O.jsx)("input",{className:"todo__checkbox",type:"checkbox",defaultChecked:t.data.checked,onChange:function(e){s(e.target.checked),t.changeTodo(t.path,t.id,{content:d,checked:e.target.checked})}}),Object(O.jsx)("textarea",{className:"todo__input "+(i?"todo__input_checked":""),type:"text",defaultValue:t.data.content,rows:1,onInput:e,onMouseMove:e}),Object(O.jsx)("button",{className:"todo__delete-btn",onClick:function(e){t.deleteTodo(t.path,t.id)},children:Object(O.jsx)("img",{src:"/icons/trash.svg",alt:"icon",className:"todo__icon"})})]})}))),x=function(t){return Object(O.jsx)("button",{className:"list__delete-btn",onClick:t.onClick,children:Object(O.jsx)("img",{src:"/icons/trash.svg",alt:"icon",className:"list__icon"})})},f=function(t){return Object(O.jsxs)("button",{className:"list__add-btn",onClick:t.onClick,children:["New task",Object(O.jsx)("img",{src:"/icons/plus.svg"})]})},N=Object(l.b)((function(t){return t}),(function(t){return{deleteProject:function(e){return t(function(t){return{type:"DELETE_PROJECT",payload:{path:t}}}(e))},addTodo:function(e){return t(function(t){return{type:"ADD_TODO"+(["inbox","upcoming","today"].includes(t)?"_MAIN":"_SECONDARY"),payload:{path:t}}}(e))}}}))((function(t){var e,c=Object(o.g)(),n=t.match.params.list,a=!1;void 0!==t.mainProjects[n]?e=t.mainProjects[n]:void 0!==t.projects[n]?(e=t.projects[n],a=!0):(e={title:"Not found",list:[{content:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c test",checked:!0}]},c.push("/inbox"));return Object(O.jsxs)("div",{className:"list",children:[Object(O.jsx)("div",{className:"list__header",children:Object(O.jsx)("div",{className:"list__container",children:Object(O.jsxs)("span",{className:"list__title",children:[e.title,a?Object(O.jsx)(x,{onClick:function(){c.push("/inbox"),t.deleteProject(n)}}):""]})})}),Object(O.jsx)("div",{className:"list__todos",children:Object(O.jsxs)("div",{className:"list__container",children:[Object(O.jsx)(f,{onClick:function(){t.addTodo(n)}}),e.list.map((function(t,e){return Object(O.jsx)(m,{id:e,data:t,path:n},n+e)}))]})})]})})),g=function(t){return Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)(h,{}),Object(O.jsxs)(o.d,{children:[Object(O.jsx)(o.b,{path:"/:list",component:N}),Object(O.jsx)(o.a,{from:"/",to:"/inbox"})]})]})},E=c(13),v=c(7),k={inbox:{title:"Inbox",list:[{content:"Test task 1",checked:!1},{content:"Test task 2",checked:!0}]},today:{title:"Today",list:[]},upcoming:{title:"Upcoming",list:[]}};var y=c(17),C={testproject:{title:"Test Project",list:[{content:"test task in test project",checked:!0}]}};var T=Object(E.b)({mainProjects:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"DELETE_PROJECT":return delete(t=Object(v.a)({},e))[c.payload.path],t;case"ADD_TODO_MAIN":return(t=Object(v.a)({},e))[c.payload.path].list.push({content:"Click to edit",checked:!1}),t;case"CHANGE_TODO_MAIN":return(t=Object(v.a)({},e))[c.payload.path].list[c.payload.id]=c.payload.data,t;case"DELETE_TODO_MAIN":return delete(t=Object(v.a)({},e))[c.payload.path].list[c.payload.id],t;default:return e}},projects:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"CREATE_PROJECT":return Object(v.a)(Object(v.a)({},e),{},Object(y.a)({},c.payload.path,{title:c.payload.title,list:[]}));case"DELETE_PROJECT":return delete(t=Object(v.a)({},e))[c.payload.path],t;case"ADD_TODO_SECONDARY":return(t=Object(v.a)({},e))[c.payload.path].list.push({content:"Click to edit",checked:!1}),t;case"CHANGE_TODO_SECONDARY":return(t=Object(v.a)({},e))[c.payload.path].list[c.payload.id]=c.payload.data,t;case"DELETE_TODO_SECONDARY":return delete(t=Object(v.a)({},e))[c.payload.path].list[c.payload.id],t;default:return e}}}),D=Object(E.c)(T,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),A=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;c(t),n(t),a(t),i(t),s(t)}))};c(40);s.a.render(Object(O.jsx)(l.a,{store:D,children:Object(O.jsx)(d.a,{children:Object(O.jsx)(g,{})})}),document.getElementById("root")),A()}},[[41,1,2]]]);
//# sourceMappingURL=main.a7b06de5.chunk.js.map