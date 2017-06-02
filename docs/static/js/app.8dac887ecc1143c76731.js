webpackJsonp([1],[,,,,,,,,,,,,,function(t,e,s){"use strict";var a=s(7),n=s.n(a),o=s(110),i=s(97),r=s.n(i),c=s(96),d=s.n(c),m=s(99),u=(s.n(m),s(32)),l=(s.n(u),s(100)),p=s.n(l),v=s(33),h=s.n(v),f=s(31),b=s.n(f);n.a.use(o.a),e.a=new o.a({routes:[{path:"/",name:"Boards",component:r.a},{path:"/boards/:id",name:"Board",component:d.a},{path:"/boards/:id/list/:listid",name:"Task",component:h.a},{path:"/boards/:id/list/:listid",name:"Comment",component:b.a},{path:"/login",name:"Login",component:p.a}]})},,,,,,,,,,,,,,,,,,function(t,e,s){s(82);var a=s(3)(s(62),s(103),"data-v-17721eac",null);t.exports=a.exports},function(t,e,s){s(84);var a=s(3)(s(64),s(105),"data-v-32eec754",null);t.exports=a.exports},function(t,e,s){s(88);var a=s(3)(s(67),s(109),"data-v-7de155bd",null);t.exports=a.exports},,,function(t,e,s){"use strict";var a=s(41),n=s.n(a),o=s(13),i=s(112),r=s(7),c=s.n(r);c.a.use(i.a);var d=n.a.create({baseURL:"https://vue-kanban-k.herokuapp.com/api/",timeout:2e3,withCredentials:!0}),m=n.a.create({baseURL:"https://vue-kanban-k.herokuapp.com/",timeout:2e3,withCredentials:!0}),u=function(t,e){t.error=e};e.a=new i.a.Store({state:{boards:[],activeBoard:{},activeLists:[],activeList:{},activeTasks:{},activeComments:{},error:{},user:{}},mutations:{setBoards:function(t,e){t.boards=e},setActiveBoard:function(t,e){t.activeBoard=e},setBoard:function(t,e){t.activeBoard=e.board,t.activeLists=e.lists},setActiveList:function(t,e){t.activeList=e},setActiveLists:function(t,e){t.activeLists=e},setActiveTasks:function(t,e){c.a.set(t.activeTasks,e._id,e.tasks)},setActiveComments:function(t,e){c.a.set(t.activeComments,e._id,e.comments)},setAuth:function(t,e){t.user=e},setUser:function(t,e){t.user=e}},actions:{getBoards:function(t){var e=t.commit;t.dispatch;d("boards").then(function(t){e("setBoards",t.data.data)}).catch(u)},getBoard:function(t,e){var s=t.commit;t.dispatch;d("boards/"+e+"/list").then(function(t){s("setBoard",t.data.data)}).catch(u)},createBoard:function(t,e){var s=(t.commit,t.dispatch);d.post("boards/",e).then(function(t){s("getBoards")}).catch(u)},removeBoard:function(t,e){var s=(t.commit,t.dispatch);d.delete("boards/"+e._id).then(function(t){s("getBoards")}).catch(u)},getList:function(t,e){var s=t.commit;t.dispatch;d("boards/"+e.boardId+"/list/"+e._id).then(function(t){console.log("committing to activeList"),s("setActiveList",t.data.data)}).catch(u)},getLists:function(t,e,s){var a=t.commit;t.dispatch;d("boards/"+e+"/list/"+s).then(function(t){a("setActiveLists",t.data.data)}).catch(u)},createList:function(t,e){var s=(t.commit,t.dispatch);d.post("lists",e).then(function(t){s("getBoard",e.boardId)}).catch(u)},removeList:function(t,e){var s=(t.commit,t.dispatch);d.delete("lists/"+e._id).then(function(t){s("getBoard",e.boardId)}).catch(u)},createUser:function(t,e){var s=t.commit;t.dispatch;m.post("register/",e).then(function(t){if(console.log(t),t.data.error)return u(t.data.error);s("setUser",t.data.data),o.a.push("/")}).catch(u)},loginUser:function(t,e){var s=t.commit;t.dispatch;m.post("login/",e).then(function(t){if(console.log(t),t.data.error)return u(t.data.error);s("setUser",t.data.data),o.a.push("/")}).catch(u)},getAuth:function(t){var e=t.commit;t.dispatch;m.get("authenticate").then(function(t){e("setAuth",t.data.data),o.a.push("/")}).catch(function(t){o.a.push("/login")})},getTask:function(t,e){var s=t.commit;t.dispatch;d("boards/"+e.boardId+"/list/"+e._id).then(function(t){s("setActiveTasks",t.data.data)}).catch(u)},getComments:function(t,e){var s=t.commit;t.dispatch;d("boards/"+e.boardId+"/list/"+e.listId+"/tasks/"+e._id).then(function(t){console.log("comments response"),s("setActiveComments",t.data.data)}).catch(u)},createTask:function(t,e){var s=(t.commit,t.dispatch);d.post("tasks",e).then(function(t){s("getTask",{boardId:e.boardId,_id:e.listId})}).catch(u)},removeTask:function(t,e){var s=(t.commit,t.dispatch);console.log("sending to server"),d.delete("tasks/"+e._id).then(function(t){console.log("sending to getList"),s("getList",{boardId:e.boardId,_id:e.listId})}).catch(u)},createComment:function(t,e){var s=(t.commit,t.dispatch);d.post("comments",e).then(function(t){s("getComments",e)}).catch(u)},removeComment:function(t,e){var s=(t.commit,t.dispatch);d.delete("tasks/"+e.taskId).then(function(t){s("getComments",{boardId:e.boardId,listId:e.listId,_id:e._id})}).catch(u)}}})},,function(t,e,s){s(81);var a=s(3)(s(59),s(102),null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(98),n=s.n(a);e.default={name:"app",components:{Error:n.a},mounted:function(){this.$store.dispatch("getAuth")}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(32),n=s.n(a);e.default={name:"board",data:function(){return{name:"",description:"",newList:!1,addListButton:!0}},created:function(){this.$store.dispatch("getBoard",this.$route.params.id)},methods:{createList:function(t){this.$store.dispatch("createList",{name:this.name,description:this.description,boardId:this.$route.params.id})},listFormToggle:function(){this.newList=!0,this.addListButton=!1},listFormToggleBack:function(){this.newList=!1,this.addListButton=!0}},computed:{board:function(){return this.$store.state.activeBoard},lists:function(){return this.$store.state.activeLists},tasks:function(){return this.$store.state.activeTasks},comments:function(){return this.$store.state.activeComments}},components:{list:n.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"boards",data:function(){return{name:"",description:"",newBoard:!1,addBoardButton:!0}},mounted:function(){this.$store.dispatch("getBoards")},computed:{boards:function(){return this.$store.state.boards}},methods:{createBoard:function(){this.$store.dispatch("createBoard",{name:this.name,description:this.description})},removeBoard:function(t){this.$store.dispatch("removeBoard",t)},boardFormToggle:function(){this.newBoard=!0,this.addBoardButton=!1},boardFormToggleBack:function(){this.newBoard=!1,this.addBoardButton=!0}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"comments",props:["comment"],mounted:function(){},data:function(){return{}},methods:{createComments:function(){this.$store.dispatch("createComments",{name:this.name,description:this.description,boardId:this.task.boardId,listId:this.task.listId})},removeComment:function(){this.$store.dispatch("removeComment",this.comment)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"error",computed:{error:function(){return this.$root.$data.store.state.error}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(33),n=s.n(a);e.default={name:"list",props:["list"],data:function(){return{name:"",description:"",newTask:!1,addTaskButton:!0,listTasks:!1,listTasks1:!0}},created:function(){this.$store.dispatch("getList",this.list),this.$store.dispatch("getTask",this.list)},methods:{createTask:function(){this.$store.dispatch("createTask",{name:this.name,description:this.description,boardId:this.$route.params.id,listId:this.list._id})},removeList:function(){this.$store.dispatch("removeList",this.list)},taskToggle:function(){0==this.listTasks?(this.listTasks=!0,this.listTasks1=!1):(this.listTasks=!1,this.listTasks1=!0)},taskFormToggle:function(){this.newTask=!0,this.addTaskButton=!1},taskFormToggleBack:function(){this.newTask=!1,this.addTaskButton=!0}},computed:{board:function(){return this.$store.state.activeBoard},tasks:function(){return this.$store.state.activeTasks[this.list._id]},comments:function(){return this.$store.state.activeComments}},components:{task:n.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"lists",mounted:function(){},data:function(){return{}},props:["list"],methods:{createList:function(){this.$root.$data.store.actions.createList({name:this.name,description:this.description,boardId:this.$route.params.id})},removeList:function(t,e){this.$root.$data.store.actions.removeList(this.$route.params.id,e)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"login",data:function(){return{name:"",email:"",password:"",login:!0,register:!1}},computed:{},methods:{createUser:function(){this.$store.dispatch("createUser",{email:this.email,name:this.name,password:this.password})},loginUser:function(){this.$store.dispatch("loginUser",{email:this.email,password:this.password})},loginToggle:function(){this.login=!0,this.register=!1},registerToggle:function(){this.login=!1,this.register=!0}},components:{}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(31),n=s.n(a);e.default={name:"task",props:["task"],data:function(){return{name:"",description:"",newComment:!1,addCommentButton:!0}},created:function(){this.$store.dispatch("getComments",this.task)},methods:{createComment:function(){this.$store.dispatch("createComment",{name:this.name,description:this.description,boardId:this.$route.params.id,listId:this.task.listId,taskId:this.task._id})},commentFormToggle:function(){this.newComment=!0,this.addCommentButton=!1},commentFormToggleBack:function(){this.newComment=!1,this.addCommentButton=!0},removeTask:function(){console.log("component firing"),this.$store.dispatch("removeTask",this.task)}},computed:{board:function(){return this.$store.state.activeBoard},list:function(){return this.$store.state.activeList},comments:function(){return this.$store.state.activeComments[this.task._id]}},components:{comments:n.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(7),n=s.n(a),o=s(38),i=s.n(o),r=s(13),c=s(37),d=s.n(c),m=s(36);console.log("STORE",m.a);var u=d()("https://vue-kanban-k.herokuapp.com/");u.on("CONNECTED",function(t){console.log(t),u.emit("update",{data:"blarg",boardId:"3289748320"})}),new n.a({el:"#app",store:m.a,router:r.a,template:"<App/>",components:{App:i.a}})},,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,function(t,e,s){s(86);var a=s(3)(s(60),s(107),"data-v-5337eb44",null);t.exports=a.exports},function(t,e,s){s(80);var a=s(3)(s(61),s(101),"data-v-0c6e3af6",null);t.exports=a.exports},function(t,e,s){s(85);var a=s(3)(s(63),s(106),"data-v-49c58c80",null);t.exports=a.exports},function(t,e,s){s(83);var a=s(3)(s(65),s(104),"data-v-2392e0e6",null);t.exports=a.exports},function(t,e,s){s(87);var a=s(3)(s(66),s(108),"data-v-60b1dd3e",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"boards-view"}},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.addBoardButton,expression:"addBoardButton"}],staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.boardFormToggle}},[t._v("Add a Board")]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[s("router-link",{attrs:{to:"login"}},[t._v("Login/Register")])],1),s("br"),s("br"),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.newBoard,expression:"newBoard"}],staticClass:"Register"},[s("form",{staticClass:"form-inline create-board-form",on:{submit:function(e){e.preventDefault(),t.createBoard(e)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:"Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:"Board Description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit",id:"create-user-button"},on:{click:t.boardFormToggleBack}},[t._v("Create New Board")])])])]),t._v(" "),s("div",{attrs:{id:"myBoards"}},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},t._l(t.boards,function(e){return s("div",{staticClass:"col-sm-3"},[s("div",{staticClass:"well eachBoard boardName"},[s("router-link",{attrs:{to:"/boards/"+e._id}},[t._v(t._s(e.name))]),t._v(" "),s("button",{staticClass:"btn btn-xs btn-default",attrs:{type:"button"},on:{click:function(s){t.removeBoard(e)}}},[s("span",{staticClass:"glyphicon glyphicon-trash"})])],1)])}))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"tasks"}},[s("p",[t._v("Comment Name: "+t._s(t.comment.name)+" "),s("br"),t._v(" Description: "+t._s(t.comment.description))]),s("button",{staticClass:"btn btn-xs btn-default",on:{click:function(e){t.removeComment()}}},[s("span",{staticClass:"glyphicon glyphicon-trash"})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-sm-4",attrs:{id:"lists"}},[s("p",[s("router-link",{attrs:{to:"/boards/"+this.$route.params.id+"/list/"+this.list._id}},[t._v(t._s(t.list.name)+" - "+t._s(t.list.description))]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.removeList(t.list._id)}}},[s("span",{staticClass:"glyphicon glyphicon-trash"})])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-sm-4 indList"},[s("h4",[t._v("List Name:")]),t._v(" "),s("p",[t._v(t._s(t.list.name))]),s("br"),t._v(" "),s("p",[t._v("Description: "+t._s(t.list.description))]),s("button",{staticClass:"btn btn-xs btn-default",on:{click:t.removeList}},[s("span",{staticClass:"glyphicon glyphicon-trash"})]),s("br"),t._v(" "),s("a",{directives:[{name:"show",rawName:"v-show",value:t.listTasks1,expression:"listTasks1"}],on:{click:t.taskToggle}},[s("h3",[t._v("Show Tasks")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.listTasks,expression:"listTasks"}],staticClass:"listTasks"},[s("a",{on:{click:t.taskToggle}},[s("h3",[t._v("Hide Tasks")])]),t._v(" "),s("div",[t._l(t.tasks,function(t){return s("task",{attrs:{task:t}})}),t._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:t.addTaskButton,expression:"addTaskButton"}],staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.taskFormToggle}},[t._v("Add a Task")]),s("br"),s("br"),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.newTask,expression:"newTask"}],staticClass:"taskForm"},[s("form",{staticClass:"form-inline create-task-form",on:{submit:function(e){e.preventDefault(),t.createTask(e)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:"Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:"Task Description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),s("br"),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit",id:"create-task-button"},on:{click:t.taskFormToggleBack}},[t._v("Create New Task")]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.taskFormToggleBack}},[t._v("Cancel")])])])])],2)]),t._v(" "),s("br"),s("br"),t._v(" "),s("br"),s("br")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v(" \n  Error: "+t._s(t.error)+"\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"myBoard"},[s("h2",[t._v("Board Name:")]),t._v(" "),s("p",[t._v(t._s(t.board.name))]),t._v(" "),s("br"),s("h4",[t._v("Description:")]),t._v(" "),s("p",[t._v(t._s(t.board.description))]),s("br"),t._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:t.addListButton,expression:"addListButton"}],staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.listFormToggle}},[t._v("Add a List")]),s("br"),s("br"),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[t._l(t.lists,function(t){return s("list",{attrs:{list:t}})}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.newList,expression:"newList"}],staticClass:"ListForm"},[s("form",{staticClass:"form-inline create-list-form",on:{submit:function(e){e.preventDefault(),t.createList(e)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:"Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:"List Description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit",id:"create-list-button"},on:{click:t.listFormToggleBack}},[t._v("Create New List")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.listFormToggleBack}},[t._v("Cancel")])])])])],2)]),t._v(" "),s("br"),s("br")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Auth"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.register,expression:"register"}],staticClass:"Register"},[s("button",{attrs:{type:"button"},on:{click:t.loginToggle}},[t._v("Login")]),s("br"),s("br"),t._v(" "),s("form",{staticClass:"form-inline create-user-form",on:{submit:function(e){e.preventDefault(),t.createUser(e)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:"Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"text",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",name:"email",placeholder:"stuff@email.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit",id:"create-user-button"}},[t._v("Create New User")])])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.login,expression:"login"}],staticClass:"Login"},[s("button",{attrs:{type:"button"},on:{click:t.registerToggle}},[t._v("Register New User")]),s("br"),s("br"),t._v(" "),s("form",{staticClass:"form-inline login-form",on:{submit:function(e){e.preventDefault(),t.loginUser(e)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",name:"email",placeholder:"email@email.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"text",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit",id:"login-user-button"}},[t._v("Login")])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"indTask"},[s("p",[t._v("Task Name: "+t._s(t.task.name)+" "),s("br"),t._v(" Description: "+t._s(t.task.description))]),s("button",{staticClass:"btn btn-xs btn-default",on:{click:t.removeTask}},[s("span",{staticClass:"glyphicon glyphicon-trash"})]),s("br"),t._v(" "),t._l(t.comments,function(t){return s("comments",{attrs:{comment:t}})}),t._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:t.addCommentButton,expression:"addCommentButton"}],staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.commentFormToggle}},[t._v("Add a Comment")]),s("br"),s("br"),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.newComment,expression:"newComment"}],staticClass:"commentForm"},[s("form",{staticClass:"form-inline create-comment-form",on:{submit:function(e){e.preventDefault(),t.createComment(e)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:"Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:"Comment Description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit",id:"create-comment-button"},on:{click:t.commentFormToggleBack}},[t._v("Create New Comment")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.commentFormToggleBack}},[t._v("Cancel")])])])]),t._v(" "),s("br"),s("br")],2)},staticRenderFns:[]}},,,,,,function(t,e){}],[68]);
//# sourceMappingURL=app.8dac887ecc1143c76731.js.map