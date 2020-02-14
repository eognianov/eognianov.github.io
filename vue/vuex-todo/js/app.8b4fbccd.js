(function(t){function e(e){for(var n,c,i=e[0],s=e[1],u=e[2],l=0,p=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,i=1;i<o.length;i++){var s=o[i];0!==r[s]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},r={app:0},a=[];function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=s;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"3d60":function(t,e,o){"use strict";var n=o("d686"),r=o.n(n);r.a},"3dbe":function(t,e,o){"use strict";var n=o("8b46"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"container"},[o("AddTodo"),o("FilterTodos"),o("Todos")],1)])},a=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h3",[t._v("Todos")]),t._m(0),o("div",{staticClass:"todos"},t._l(t.allTodos,(function(e){return o("div",{key:e.id,staticClass:"todo",class:{"is-complete":e.completed},on:{dblclick:function(o){return t.onDblClick(e)}}},[t._v(" "+t._s(e.title)+" "),o("i",{staticClass:"fas fa-trash-alt",on:{click:function(o){return t.deleteTodo(e.id)}}})])})),0)])},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"legend"},[o("span",[t._v("Double click to mark as complete")]),o("span",[o("span",{staticClass:"incomplete-box"}),t._v(" = Incomplete ")]),o("span",[o("span",{staticClass:"complete-box"}),t._v(" = Complete ")])])}],s=o("5530"),u=o("2f62"),d={name:"Todos",methods:Object(s["a"])({},Object(u["b"])(["fetchTodos","deleteTodo","updateTodo"]),{onDblClick:function(t){var e={id:t.id,title:t.title,completed:!t.completed};this.updateTodo(e)}}),computed:Object(u["c"])(["allTodos"]),created:function(){this.fetchTodos()}},l=d,p=(o("3d60"),o("2877")),f=Object(p["a"])(l,c,i,!1,null,"acce3f62",null),m=f.exports,v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h3",[t._v("Add Todo")]),o("div",{staticClass:"add"},[o("form",{on:{submit:t.onSubmit}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"Add Todo..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{attrs:{type:"submit",value:"Submit"}})])])])},h=[],b={name:"AddTodo",data:function(){return{title:""}},methods:Object(s["a"])({},Object(u["b"])(["addTodo"]),{onSubmit:function(t){t.preventDefault(),this.addTodo(this.title)}})},T=b,g=(o("3dbe"),Object(p["a"])(T,v,h,!1,null,"03d33ee3",null)),_=g.exports,w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._v(" Filter Todos: "),o("select",{on:{change:function(e){return t.filterTodos(e)}}},[o("option",{attrs:{value:"200"}},[t._v("200")]),o("option",{attrs:{value:"100"}},[t._v("100")]),o("option",{attrs:{value:"50"}},[t._v("50")]),o("option",{attrs:{value:"20"}},[t._v("20")]),o("option",{attrs:{value:"10"}},[t._v("10")]),o("option",{attrs:{value:"5"}},[t._v("5")])])])},j=[],x={name:"FilterTodos",methods:Object(u["b"])(["filterTodos"])},O=x,y=(o("ca40"),Object(p["a"])(O,w,j,!1,null,"4cbf9d3a",null)),k=y.exports,C={name:"app",components:{Todos:m,AddTodo:_,FilterTodos:k}},R=C,S=(o("034f"),Object(p["a"])(R,r,a,!1,null,null,null)),P=S.exports,$=(o("4de4"),o("c740"),o("a434"),o("96cf"),o("1da1")),A=o("bc3a"),E=o.n(A),D={todos:[]},F={allTodos:function(t){return t.todos}},I={fetchTodos:function(t){var e=t.commit;return Object($["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,E.a.get("https://jsonplaceholder.typicode.com/todos");case 2:o=t.sent,e("setTodos",o.data);case 4:case"end":return t.stop()}}),t)})))()},addTodo:function(t,e){var o=t.commit;return Object($["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,E.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1});case 2:n=t.sent,o("newTodo",n.data);case 4:case"end":return t.stop()}}),t)})))()},deleteTodo:function(t,e){var o=t.commit;return Object($["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,E.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e));case 2:o("removeTodo",e);case 3:case"end":return t.stop()}}),t)})))()},filterTodos:function(t,e){var o=t.commit;return Object($["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=parseInt(e.target.options[e.target.options.selectedIndex].innerText),t.next=3,E.a.get("https://jsonplaceholder.typicode.com/todos?_limit=".concat(n));case 3:r=t.sent,o("setTodos",r.data);case 5:case"end":return t.stop()}}),t)})))()},updateTodo:function(t,e){var o=t.commit;return Object($["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,E.a.put("https://jsonplaceholder.typicode.com/todos/".concat(e.id),e);case 2:n=t.sent,console.log(n.data),o("updateTodo",n.data);case 5:case"end":return t.stop()}}),t)})))()}},M={setTodos:function(t,e){return t.todos=e},newTodo:function(t,e){return t.todos.unshift(e)},removeTodo:function(t,e){return t.todos=t.todos.filter((function(t){return t.id!==e}))},updateTodo:function(t,e){var o=t.todos.findIndex((function(t){return t.id===e.id}));-1!==o&&t.todos.splice(o,1,e)}},J={state:D,getters:F,actions:I,mutations:M};n["a"].use(u["a"]);var N=new u["a"].Store({modules:{todos:J}});n["a"].config.productionTip=!1,new n["a"]({store:N,render:function(t){return t(P)}}).$mount("#app")},"85ec":function(t,e,o){},"8b46":function(t,e,o){},ca40:function(t,e,o){"use strict";var n=o("f73e"),r=o.n(n);r.a},d686:function(t,e,o){},f73e:function(t,e,o){}});
//# sourceMappingURL=app.8b4fbccd.js.map