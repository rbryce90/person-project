(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){},34:function(e,t,a){e.exports=a(77)},43:function(e,t,a){},44:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(30),o=a.n(r),c=a(10),i=a(16),s={user:"",admin:!1,user_id:""},u="LOGIN_USER";var m=Object(i.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return console.log(t.payload),Object.assign({},e,{user:t.payload.username,admin:t.payload.admin,user_id:t.payload.user_id});default:return e}}),b=(a(43),a(2)),d=a(3),p=a(6),h=a(4),g=a(5),f=a(78),E=(a(44),function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={toggleNav:!1},e}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state.toggleNav,a=this.props.userObj,n=a.user,r=a.admin;return console.log(t),l.a.createElement("div",{className:"header"},l.a.createElement("div",null,l.a.createElement("div",{className:"top"},l.a.createElement("h1",null,"Not the Realtor for You"),l.a.createElement("button",{onClick:function(){return!1===t?e.setState({toggleNav:!0}):e.setState({toggleNav:!1})}},l.a.createElement("div",{className:"bar"}),l.a.createElement("div",{className:"bar"}),l.a.createElement("div",{className:"bar"}))),l.a.createElement("ol",{className:!1===t?"hide":"show"},l.a.createElement("div",null,l.a.createElement("li",null,l.a.createElement(f.a,{style:{textDecoration:"none",color:"white"},to:"/"},"Home"))),0===n.length?l.a.createElement("div",null,l.a.createElement("li",null,l.a.createElement(f.a,{style:{textDecoration:"none",color:"white"},to:"/register"},"Register"))):null,0!==n.length?l.a.createElement("div",null,l.a.createElement("li",null,l.a.createElement(f.a,{style:{textDecoration:"none",color:"white"},to:"/blogs"},"Blogs")),l.a.createElement("li",null,l.a.createElement(f.a,{style:{textDecoration:"none",color:"white"},to:"/about"},"About")),l.a.createElement("li",null,l.a.createElement(f.a,{style:{textDecoration:"none",color:"white"},to:"/contact"},"Contact")),l.a.createElement("li",null,l.a.createElement(f.a,{style:{textDecoration:"none",color:"white"},to:"/stripe"},"Donate"))):null,!0===r?l.a.createElement("div",null,l.a.createElement("li",null,l.a.createElement(f.a,{style:{textDecoration:"none",color:"white"},to:"/dashboard/clients"},"Admin"))):null)))}}]),t}(n.Component)),v=Object(c.b)(function(e){return{userObj:e}})(E),O=a(7),j=a.n(O),y=(a(66),function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={weather:[],temp:""},e}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a.get("http://api.openweathermap.org/data/2.5/weather?zip=85003&APPID=c297a5a7fe855de9c8f9e2fc267941bd&units=imperial").then(function(t){e.setState({weather:t.data,temp:t.data.main.temp})})}},{key:"render",value:function(){var e=this.state,t=e.weather,a=e.temp;return l.a.createElement("div",{className:"welcome"},l.a.createElement("h1",null," Welcome to nottherealtorforyou.com, although we are not Realtor's, this blog is all about Real Estate in Phoenix. Currently, the weather in ",t.name," is ",a," degrees! ")," ",l.a.createElement("br",null))}}]),t}(n.Component)),w=(a(67),function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).getMessage=function(e){return e.response?e.response.data?e.response.data.message:JSON.stringify(e.response.data,null,2):e.message},a.login=function(){a.setState({message:null});var e=a.refs.username.value,t=a.refs.password.value;j.a.post("/login",{username:e,password:t}).then(function(e){a.props.userFn(e.data)}).catch(function(e){a.setState({message:"Something went wrong: "+a.getMessage(e)})})},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return console.log(),console.log(this.props.userObj.user.length),l.a.createElement("div",{className:"home",style:{backgroundColor:"rgb(209, 209, 209"}},0===this.props.userObj.user.length?l.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},l.a.createElement("h1",null,"Username: "),l.a.createElement("input",{type:"text",ref:"username"}),l.a.createElement("h1",null,"Password: "),l.a.createElement("input",{type:"password",ref:"password"}),l.a.createElement("input",{type:"submit",value:"Log In",onClick:this.login})):l.a.createElement(y,null),l.a.createElement("img",{src:"https://marketplace.canva.com/MADGyYVoY2c/4/screen/canva-aerial-photography-of-cityscape-MADGyYVoY2c.jpg",alt:"placeholder"}))}}]),t}(n.Component)),k={userFn:function(e){return{type:u,payload:e}}},_=Object(c.b)(function(e){return{userObj:e}},k)(w),N=(a(68),function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={admins:[]},e}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a.get("/api/admins").then(function(t){e.setState({admins:t.data})})}},{key:"render",value:function(){var e=this.state.admins.map(function(e){return l.a.createElement("div",{className:"about",key:e.user_id},l.a.createElement("img",{src:e.picture,style:{height:"100px"},alt:"pictures"}),l.a.createElement("h1",null," ",e.first_name," ",e.last_name," "),l.a.createElement("p",null,e.bio))});return l.a.createElement("div",null,e)}}]),t}(n.Component)),S=(a(29),function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).deleteBlog=function(t){console.log(t),j.a.delete("/api/blog/".concat(t)).then(function(t){console.log(t.data),e.setState({blogs:t.data})})},e.state={blogs:[]},e}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a.get("/api/blogs").then(function(t){e.setState({blogs:t.data})})}},{key:"render",value:function(){var e=this,t=this.state.blogs;console.log(this.props.userObj);var a=t.map(function(t){return l.a.createElement("div",{key:t.blog_id},!0===e.props.userObj.admin?l.a.createElement("button",{style:{float:"right",background:"red"},onClick:function(){return e.deleteBlog(t.blog_id)}},"X"):null,l.a.createElement(f.a,{to:"/blog/".concat(t.blog_id)},l.a.createElement("div",null,l.a.createElement("img",{src:t.picture,alt:"this is my alt"}),l.a.createElement("h1",null,t.blog_title),l.a.createElement("h2",null,"By: ",t.first_name," ",t.last_name),l.a.createElement("hr",null))))});return l.a.createElement("div",{className:"blogs"},a)}}]),t}(n.Component)),C=Object(c.b)(function(e){return{userObj:e}})(S),x=function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).updateBlogBodyState=function(t){var a=e.state,n=a.blog,l=a.blog_body,r=a.editMode;console.log(n.blog_id,l),!1===r?e.setState({editMode:!1===e.state.editMode,blog_body:e.state.blog.blog_body}):j.a.put("/api/blog/".concat(t,"/").concat(l)).then(function(t){e.setState({blog:t.data,editMode:!1})})},e.state={blog:[],editMode:!1,blog_body:""},e}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a.get("/api/blog/".concat(this.props.match.params.blog_id)).then(function(t){e.setState({blog:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state,a=t.blog,n=t.blog_body,r=t.editMode;console.log(a.blog_id,n);var o=a.map(function(t){return l.a.createElement("div",{className:"singleBlog",key:t.blog_id},l.a.createElement("h1",null,t.blog_title),l.a.createElement("br",null),!1===r?l.a.createElement("p",null,t.blog_body):l.a.createElement("textarea",{value:n,onChange:function(t){e.setState({blog_body:t.target.value})}},e.state.blog_body),l.a.createElement("br",null),!0===e.props.userObj.admin?l.a.createElement("button",{style:{float:"right",background:"white"},onClick:function(){return e.updateBlogBodyState(t.blog_id)}},!1===r?"Edit Post":"Save Post"):null)});return console.log(this.state.editMode),l.a.createElement("div",null,o)}}]),t}(n.Component),D=Object(c.b)(function(e){return{userObj:e}})(x),M=(a(69),function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={admins:[]},e}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a.get("/api/admins").then(function(t){e.setState({admins:t.data})})}},{key:"render",value:function(){var e=this.state.admins;console.log(this.state.admins);var t=e.map(function(e){return l.a.createElement("div",{className:"contact"},l.a.createElement("h1",null,e.first_name," ",e.last_name),l.a.createElement("h2",null,"Phone Number: ",e.phone_number),l.a.createElement("h2",null,"Email: ",e.email))});return l.a.createElement("div",null,l.a.createElement("h1",{style:{fontSize:"50px"}},"Contact Us"),l.a.createElement("hr",null),t)}}]),t}(n.Component)),B=(a(70),function(e){function t(){return Object(b.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{style:{fontSize:"30px"}},l.a.createElement(f.a,{to:"/dashboard/clients"},"Clients")," /",l.a.createElement(f.a,{to:"/dashboard/addblog"},"Add Blog")),l.a.createElement("hr",null))}}]),t}(n.Component)),P=function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={users:[]},e}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a.get("/api/users").then(function(t){return e.setState({users:t.data})})}},{key:"render",value:function(){var e=this.state.users;console.log(e);var t=e.map(function(e){return l.a.createElement("div",{className:"clients",key:e.id},l.a.createElement("h1",null,e.first_name," ",e.last_name),l.a.createElement("h2",null," Phone number: ",e.phone_number),l.a.createElement("h2",null," Email: ",e.email))});return l.a.createElement("div",null,!1===this.props.userObj.admin?l.a.createElement(_,null):l.a.createElement("div",null,l.a.createElement(B,null),t))}}]),t}(n.Component),A=Object(c.b)(function(e){return{userObj:e}})(P),T=(a(71),function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).addBlog=function(){var e=a.refs,t=e.blog_title,n=e.blog_body,l=a.props.userObj.user_id;console.log(t.value,n.value,l);var r={author_id:l,blog_title:t.value,blog_body:n.value};j.a.post("/api/blog",r).then()},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return console.log(this.props.userObj.admin),l.a.createElement("div",null,!1===this.props.userObj.admin?l.a.createElement(_,null):l.a.createElement("div",{className:"addblog"},l.a.createElement(B,null),l.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},l.a.createElement("label",null,"Title:"),l.a.createElement("input",{type:"text",ref:"blog_title"}),l.a.createElement("label",null,"Body:"),l.a.createElement("textarea",{rows:"4",cols:"50",name:"comment",form:"usrform",ref:"blog_body"}),l.a.createElement(f.a,{to:"/blogs"},l.a.createElement("input",{type:"submit",onClick:this.addBlog})))))}}]),t}(n.Component)),R=Object(c.b)(function(e){return{userObj:e}})(T),W=a(32),Y=a.n(W),z=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).onToken=function(e){console.log("onToken",e),j.a.post("/api/stripe",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:e.id}).then(function(e){return e.json()}).then(function(e){console.log("json",e)})},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{style:{width:"80%",margin:"0 auto",fontSize:"44px"}},"Donate to our site so we can keep making content for you!"),l.a.createElement("br",null),l.a.createElement(Y.a,{token:this.onToken,stripeKey:"pk_test_N93rD2WkRxHsvEWWySb7redc"}))}}]),t}(l.a.Component),F=(a(72),function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).getMessage=function(e){return e.response?e.response.data?e.response.data.message:JSON.stringify(e.response.data,null,2):e.message},e.register=function(){e.setState({message:null});var t=e.refs,a=t.firstName,n=t.lastName,l=t.phoneNumber,r=t.email,o=t.username,c=t.password;j.a.post("/register",{first_name:a.value,last_name:n.value,phone_number:l.value,email:r.value,username:o.value,password:c.value}).then(function(t){e.setState({user:t.data})}).catch(function(t){console.log(t),e.setState({message:"Something went wrong: "+e.getMessage(t)})})},e.state={user:null},e}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"register"},l.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},l.a.createElement("h1",null,"Create an account to get expert information on houses in the Pheonix area, already have an account? Click here to Log in!"),l.a.createElement("br",null),l.a.createElement("label",null,"First Name: "),l.a.createElement("input",{ref:"firstName",type:"text"}),l.a.createElement("label",null,"Last Name: "),l.a.createElement("input",{type:"text",ref:"lastName"}),l.a.createElement("label",null,"Phone Number: "),l.a.createElement("input",{type:"text",ref:"phoneNumber"}),l.a.createElement("label",null,"Email: "),l.a.createElement("input",{type:"text",ref:"email"}),l.a.createElement("label",null,"Username: "),l.a.createElement("input",{type:"text",ref:"username"}),l.a.createElement("label",null,"Password: "),l.a.createElement("input",{type:"password",ref:"password"}),l.a.createElement(f.a,{to:"/"},l.a.createElement("input",{type:"submit",onClick:this.register}))))}}]),t}(n.Component)),I=(a(73),a(80)),J=function(e){function t(){return Object(b.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"body"},l.a.createElement(I.a,{path:"/stripe",component:z}),l.a.createElement(I.a,{path:"/contact",component:M}),l.a.createElement(I.a,{path:"/blogs",component:C}),l.a.createElement(I.a,{path:"/blog/:blog_id",component:D}),l.a.createElement(I.a,{path:"/about",component:N}),l.a.createElement(I.a,{path:"/dashboard/clients",component:A}),l.a.createElement(I.a,{path:"/dashboard/addblog",component:R}),l.a.createElement(I.a,{path:"/register",component:F}),l.a.createElement(I.a,{exact:!0,path:"/",component:_}))}}]),t}(n.Component),L=(a(75),function(e){function t(){return Object(b.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",null,"this is a FOOT!")}}]),t}(n.Component)),U=(a(76),function(e){function t(){return Object(b.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v,null),l.a.createElement(J,null),l.a.createElement(L,null))}}]),t}(n.Component)),G=a(79);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(c.a,{store:m},l.a.createElement(G.a,null,l.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.ce862f2d.chunk.js.map