(this.webpackJsonpconfusio=this.webpackJsonpconfusio||[]).push([[0],{145:function(e,s,t){"use strict";t.r(s);var c=t(0),n=t(2),r=t.n(n),a=t(27),o=t.n(a),i=(t(94),t(21)),l=t(22),j=t(24),d=t(23),h=(t(95),t(96),t(15)),m=t(20),b=t(146),u=t(147),O=t(148),x=t(149),f=t(150),p=t(151),g=t(10),N=function(){return Object(c.jsxs)("div",{className:"col-12",children:[Object(c.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(c.jsx)("p",{children:"Loading . . ."})]})},v="https://fake-server-rr-vv00.herokuapp.com/";function y(e){var s=e.dish;return Object(c.jsx)(m.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(c.jsx)(b.a,{children:Object(c.jsxs)(g.b,{to:"/menu/".concat(s.id),children:[Object(c.jsx)(u.a,{width:"100%",src:v+s.image,alt:s.name}),Object(c.jsx)(O.a,{children:Object(c.jsx)(x.a,{children:s.name})})]})})})}var w=function(e){var s=e.dishes.dishes.map((function(e){return Object(c.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(c.jsx)(y,{dish:e})},e.id)}));return e.dishes.isLoading?Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(N,{})})}):e.dishes.errMess?Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-12",children:Object(c.jsx)("h4",{children:e.dishes.errMess})})})}):Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)(f.a,{children:[Object(c.jsx)(p.a,{children:Object(c.jsx)(g.b,{to:"/home",children:"Home"})}),Object(c.jsx)(p.a,{active:!0,children:"Menu"})]}),Object(c.jsxs)("div",{className:"col-12",children:[Object(c.jsx)("h3",{children:"Menu"}),Object(c.jsx)("hr",{})]})]}),Object(c.jsx)("div",{className:"row",children:s})]})},M=t(25),k=t(152),L=t(153),C=t(154),E=t(173),S=t(155),F=t(156),T=t(157),D=t(158),I=t(159),A=t(9),R=function(e){return function(s){return!s||s.length<=e}};function q(e){var s=e.dish;return null!=s?Object(c.jsx)("div",{children:Object(c.jsx)(m.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)(u.a,{top:!0,src:v+s.image,alt:s.name}),Object(c.jsxs)(k.a,{children:[Object(c.jsx)(x.a,{children:s.name}),Object(c.jsx)(L.a,{children:s.description})]})]})})}):Object(c.jsx)("div",{})}function P(e){var s=e.comments,t=e.postComment,n=e.dishId;if(null!=s){var r=s.map((function(e){return Object(c.jsx)(m.Fade,{in:!0,children:Object(c.jsxs)("li",{children:[Object(c.jsx)("p",{children:e.comment}),Object(c.jsxs)("p",{children:["-- ",e.author,",",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))]})]},e.id)})}));return Object(c.jsxs)("div",{className:"",children:[Object(c.jsx)("h4",{children:"Comments"}),Object(c.jsx)("ul",{className:"list-unstyled",children:Object(c.jsx)(m.Stagger,{in:!0,children:r})}),Object(c.jsx)(H,{dishId:n,postComment:t})]})}return Object(c.jsx)("div",{})}var H=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(e){var c;return Object(i.a)(this,t),(c=s.call(this,e)).toggleModal=c.toggleModal.bind(Object(M.a)(c)),c.state={isModalOpen:!1},c}return Object(l.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,s=this;return Object(c.jsxs)("div",{children:[Object(c.jsx)(C.a,{color:"secondary",outline:!0,onClick:this.toggleModal,children:Object(c.jsx)("span",{className:"fa fa-pencil fa-lg",children:"Submit Comment"})}),Object(c.jsxs)(E.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(c.jsx)(S.a,{toggle:this.toggleModal,children:"Submit Comment"}),Object(c.jsx)(F.a,{children:Object(c.jsxs)(A.LocalForm,{onSubmit:function(e){return s.handleSubmit(e)},children:[Object(c.jsxs)(T.a,{className:"form-group",children:[Object(c.jsx)(D.a,{md:12,htmlFor:"rating",children:"Rating"}),Object(c.jsx)(I.a,{md:12,children:Object(c.jsxs)(A.Control.select,{model:".rating",name:"rating",className:"form-control",children:[Object(c.jsx)("option",{children:"1"}),Object(c.jsx)("option",{children:"2"}),Object(c.jsx)("option",{children:"3"}),Object(c.jsx)("option",{children:"4"}),Object(c.jsx)("option",{children:"5"})]})})]}),Object(c.jsxs)(T.a,{className:"form-group",children:[Object(c.jsx)(D.a,{md:12,htmlFor:"author",children:"Your Name"}),Object(c.jsxs)(I.a,{md:12,children:[Object(c.jsx)(A.Control.text,{model:".author",id:"author",name:"author",placeholder:"Your Name",className:"form-control",validators:{minLength:(e=3,function(s){return s&&s.length>=e}),maxLength:R(15)}}),Object(c.jsx)(A.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 3 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(c.jsxs)(T.a,{className:"form-group",children:[Object(c.jsx)(D.a,{md:12,htmlFor:"comment",children:"Comment"}),Object(c.jsx)(I.a,{md:12,children:Object(c.jsx)(A.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"6",className:"form-control"})})]}),Object(c.jsx)(C.a,{type:"submit",value:"submit",color:"primary",children:"Submit"})]})})]})]})}}]),t}(h.Component),_=function(e){return e.isLoading?Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(N,{})})}):e.errMess?Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("h4",{children:e.errMess})})}):null!=e.dish?Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)(f.a,{children:[Object(c.jsx)(p.a,{children:Object(c.jsx)(g.b,{to:"/menu",children:"Menu"})}),Object(c.jsx)(p.a,{active:!0,children:e.dish.name})]}),Object(c.jsxs)("div",{className:"col-12",children:[Object(c.jsx)("h3",{children:e.dish.name}),Object(c.jsx)("hr",{})]})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(c.jsx)(q,{dish:e.dish})}),Object(c.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(c.jsx)(P,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id})})]})]}):Object(c.jsx)("div",{})},Y=t(160),U=t(161),B=t(162),G=t(163),W=t(164),K=t(165),z=t(166),J=t(167),Z=t(168),$=t(169),Q=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(e){var c;return Object(i.a)(this,t),(c=s.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},c.toggleNav=c.toggleNav.bind(Object(M.a)(c)),c.toggleModal=c.toggleModal.bind(Object(M.a)(c)),c.handleLogin=c.handleLogin.bind(Object(M.a)(c)),c}return Object(l.a)(t,[{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{children:[Object(c.jsx)(Y.a,{dark:!0,expand:"md",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(U.a,{onClick:this.toggleNav}),Object(c.jsx)(B.a,{className:"mr-auto App-logo",href:"/",children:Object(c.jsx)("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})}),Object(c.jsxs)(G.a,{isOpen:this.state.isNavOpen,navbar:!0,children:[Object(c.jsxs)(W.a,{navbar:!0,children:[Object(c.jsx)(K.a,{children:Object(c.jsxs)(g.c,{className:"nav-link",to:"/home",children:[Object(c.jsx)("span",{className:"fa fa-home fa-lg"})," Home"]})}),Object(c.jsx)(K.a,{children:Object(c.jsxs)(g.c,{className:"nav-link",to:"/aboutus",children:[Object(c.jsx)("span",{className:"fa fa-info fa-lg"})," About Us"]})}),Object(c.jsx)(K.a,{children:Object(c.jsxs)(g.c,{className:"nav-link",to:"/menu",children:[Object(c.jsx)("span",{className:"fa fa-list fa-lg"})," Menu"]})}),Object(c.jsx)(K.a,{children:Object(c.jsxs)(g.c,{className:"nav-link",to:"/contactus",children:[Object(c.jsx)("span",{className:"fa fa-address-card fa-lg"})," Contact Us"]})})]}),Object(c.jsx)(W.a,{className:"ml-auto",navbar:!0,children:Object(c.jsx)(K.a,{children:Object(c.jsxs)(C.a,{outline:!0,onClick:this.toggleModal,children:[Object(c.jsx)("span",{className:"fa fa-sign-in fa-lg"})," Login"]})})})]})]})}),Object(c.jsx)(z.a,{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row row-header",children:Object(c.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(c.jsx)("h1",{children:"Ristorante con Fusion"}),Object(c.jsx)("p",{children:"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"})]})})})}),Object(c.jsxs)(E.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(c.jsx)(S.a,{toggle:this.toggleModal,children:"Login"}),Object(c.jsx)(F.a,{children:Object(c.jsxs)(J.a,{onSubmit:this.handleLogin,children:[Object(c.jsxs)(Z.a,{children:[Object(c.jsx)(D.a,{htmlFor:"username",children:"Username"}),Object(c.jsx)($.a,{type:"text",id:"username",name:"username",innerRef:function(s){return e.username=s}})]}),Object(c.jsxs)(Z.a,{children:[Object(c.jsx)(D.a,{htmlFor:"password",children:"Password"}),Object(c.jsx)($.a,{type:"password",id:"password",name:"password",innerRef:function(s){return e.password=s}})]}),Object(c.jsx)(Z.a,{check:!0,children:Object(c.jsxs)(D.a,{check:!0,children:[Object(c.jsx)($.a,{type:"checkbox",name:"remember",innerRef:function(s){return e.remember=s}}),"Remember me"]})}),Object(c.jsx)(C.a,{type:"submit",value:"submit",color:"primary",children:"Login"})]})})]})]})}}]),t}(h.Component);var V=function(e){return Object(c.jsx)("div",{className:"footer",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"row justify-content-center",children:[Object(c.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(c.jsx)("h5",{children:"Links"}),Object(c.jsxs)("ul",{className:"list-unstyled",children:[Object(c.jsx)("li",{children:Object(c.jsx)(g.b,{to:"/home",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(g.b,{to:"/aboutus",children:"About Us"})}),Object(c.jsx)("li",{children:Object(c.jsx)(g.b,{to:"/menu",children:"Menu"})}),Object(c.jsx)("li",{children:Object(c.jsx)(g.b,{to:"/contactus",children:"Contact Us"})})]})]}),Object(c.jsxs)("div",{className:"col-7 col-sm-5",children:[Object(c.jsx)("h5",{children:"Our Address"}),Object(c.jsxs)("address",{children:["121, Clear Water Bay Road",Object(c.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(c.jsx)("br",{}),"HONG KONG",Object(c.jsx)("br",{}),Object(c.jsx)("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",Object(c.jsx)("br",{}),Object(c.jsx)("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",Object(c.jsx)("br",{}),Object(c.jsx)("i",{className:"fa fa-envelope fa-lg"}),": ",Object(c.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(c.jsx)("div",{className:"col-12 col-sm-4 align-self-center",children:Object(c.jsxs)("div",{className:"text-center",children:[Object(c.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+",children:Object(c.jsx)("i",{className:"fa fa-google-plus"})}),Object(c.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id=",children:Object(c.jsx)("i",{className:"fa fa-facebook"})}),Object(c.jsx)("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/",children:Object(c.jsx)("i",{className:"fa fa-linkedin"})}),Object(c.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(c.jsx)("i",{className:"fa fa-twitter"})}),Object(c.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(c.jsx)("i",{className:"fa fa-youtube"})}),Object(c.jsx)("a",{className:"btn btn-social-icon",href:"mailto:",children:Object(c.jsx)("i",{className:"fa fa-envelope-o"})})]})})]}),Object(c.jsx)("div",{className:"row justify-content-center",children:Object(c.jsx)("div",{className:"col-auto",children:Object(c.jsx)("p",{children:"\xa9 Copyright 2018 Ristorante Con Fusion"})})})]})})},X=t(170);function ee(e){var s=e.item,t=e.isLoading,n=e.errMess;return t?Object(c.jsx)(N,{}):n?Object(c.jsx)("h4",{children:n}):Object(c.jsx)(m.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)(u.a,{src:v+s.image,alt:s.name}),Object(c.jsxs)(k.a,{children:[Object(c.jsx)(x.a,{children:s.name}),s.designation?Object(c.jsx)(X.a,{children:s.designation}):null,Object(c.jsx)(L.a,{children:s.description})]})]})})}var se=function(e){return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"row align-items-start",children:[Object(c.jsx)("div",{className:"col-12 col-md m-1",children:Object(c.jsx)(ee,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})}),Object(c.jsx)("div",{className:"col-12 col-md m-1",children:Object(c.jsx)(ee,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})}),Object(c.jsx)("div",{className:"col-12 col-md m-1",children:Object(c.jsx)(ee,{item:e.leader,isLoading:e.leadersLoading,errMess:e.leadersErrMess})})]})})},te=t(12),ce=t(28),ne=function(e){return e&&e.length},re=function(e){return function(s){return!s||s.length<=e}},ae=function(e){return function(s){return s&&s.length>=e}},oe=function(e){return!isNaN(Number(e))},ie=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},le=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(e){var c;return Object(i.a)(this,t),(c=s.call(this,e)).handleSubmit=c.handleSubmit.bind(Object(M.a)(c)),c}return Object(l.a)(t,[{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(e)),alert("Thank you for your feedback!\n "+JSON.stringify(e)),this.props.postFeedback(e.firstname,e.lastname,e.telnum,e.email,e.agree,e.contactType,e.message),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)(f.a,{children:[Object(c.jsx)(p.a,{children:Object(c.jsx)(g.b,{to:"/home",children:"Home"})}),Object(c.jsx)(p.a,{active:!0,children:"Contact Us"})]}),Object(c.jsxs)("div",{className:"col-12",children:[Object(c.jsx)("h3",{children:"Contact Us"}),Object(c.jsx)("hr",{})]})]}),Object(c.jsxs)("div",{className:"row row-content",children:[Object(c.jsx)("div",{className:"col-12",children:Object(c.jsx)("h3",{children:"Location Information"})}),Object(c.jsxs)("div",{className:"col-12 col-sm-4 offset-sm-1",children:[Object(c.jsx)("h5",{children:"Our Address"}),Object(c.jsxs)("address",{children:["121, Clear Water Bay Road",Object(c.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(c.jsx)("br",{}),"HONG KONG",Object(c.jsx)("br",{}),Object(c.jsx)("i",{className:"fa fa-phone"}),": +852 1234 5678",Object(c.jsx)("br",{}),Object(c.jsx)("i",{className:"fa fa-fax"}),": +852 8765 4321",Object(c.jsx)("br",{}),Object(c.jsx)("i",{className:"fa fa-envelope"}),": ",Object(c.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(c.jsx)("div",{className:"col-12 col-sm-6 offset-sm-1",children:Object(c.jsx)("h5",{children:"Map of our Location"})}),Object(c.jsx)("div",{className:"col-12 col-sm-11 offset-sm-1",children:Object(c.jsxs)("div",{className:"btn-group",role:"group",children:[Object(c.jsxs)("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678",children:[Object(c.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(c.jsxs)("a",{role:"button",className:"btn btn-info",children:[Object(c.jsx)("i",{className:"fa fa-skype"})," Skype"]}),Object(c.jsxs)("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net",children:[Object(c.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})]})})]}),Object(c.jsxs)("div",{className:"row row-content",children:[Object(c.jsx)("div",{className:"col-12 ",children:Object(c.jsx)("h3",{children:"Send us your Feedback"})}),Object(c.jsx)("div",{className:"col-12 col-md-9",children:Object(c.jsxs)(A.Form,{model:"feedback",onSubmit:function(s){return e.handleSubmit(s)},children:[Object(c.jsxs)(T.a,{className:"form-group",children:[Object(c.jsx)(D.a,{htmlFor:"firstname",md:2,children:"First Name"}),Object(c.jsxs)(I.a,{md:10,children:[Object(c.jsx)(A.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:ne,minLength:ae(3),maxLength:re(15)}}),Object(c.jsx)(A.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(c.jsxs)(T.a,{className:"form-group",children:[Object(c.jsx)(D.a,{htmlFor:"lastname",md:2,children:"Last Name"}),Object(c.jsxs)(I.a,{md:10,children:[Object(c.jsx)(A.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:ne,minLength:ae(3),maxLength:re(15)}}),Object(c.jsx)(A.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(c.jsxs)(T.a,{className:"form-group",children:[Object(c.jsx)(D.a,{htmlFor:"telnum",md:2,children:"Contact Tel."}),Object(c.jsxs)(I.a,{md:10,children:[Object(c.jsx)(A.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:ne,minLength:ae(3),maxLength:re(15),isNumber:oe}}),Object(c.jsx)(A.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}})]})]}),Object(c.jsxs)(T.a,{className:"form-group",children:[Object(c.jsx)(D.a,{htmlFor:"email",md:2,children:"Email"}),Object(c.jsxs)(I.a,{md:10,children:[Object(c.jsx)(A.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:ne,validEmail:ie}}),Object(c.jsx)(A.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}})]})]}),Object(c.jsxs)(T.a,{className:"form-group",children:[Object(c.jsx)(I.a,{mod:{size:3,offset:7},children:Object(c.jsx)("div",{className:"form-check",children:Object(c.jsxs)(D.a,{check:!0,children:[Object(c.jsx)(A.Control.checkbox,{model:".agree",className:"form-check-input",name:"agree"}),Object(c.jsx)("strong",{children:"May we contact you?"})]})})}),Object(c.jsx)(I.a,{mod:{size:1,offset:1},children:Object(c.jsxs)(A.Control.select,{model:".contactType",className:"form-control",name:"contactType",children:[Object(c.jsx)("option",{children:"Tel."}),Object(c.jsx)("option",{children:"Email"})]})})]}),Object(c.jsxs)(T.a,{className:"form-group",children:[Object(c.jsx)(D.a,{htmlFor:"message",md:2,children:"Your Feedback"}),Object(c.jsx)(I.a,{md:10,children:Object(c.jsx)(A.Control.textarea,{model:".message",id:"message",rows:"12",className:"form-control",name:"message"})})]}),Object(c.jsxs)(T.a,{className:"form-group",children:[Object(c.jsx)(I.a,{md:{size:4,offset:3},children:Object(c.jsx)(C.a,{type:"submit",color:"primary",children:"Send Feedback"})}),Object(c.jsx)(I.a,{md:{size:4,offset:1},children:Object(c.jsx)(C.a,{type:"cancel",class:"close",onClick:this.props.resetFeedbackForm(),color:"secondary",children:"Cancel"})})]})]})})]})]})}}]),t}(h.Component),je=t(171),de=t(172);function he(e){var s=e.leader;return Object(c.jsxs)(je.a,{children:[Object(c.jsx)(je.a,{left:!0,className:"col-12 col-md-2",children:Object(c.jsx)(je.a,{object:!0,src:v+s.image,alt:s.name})}),Object(c.jsx)(je.a,{body:!0,className:"col-12 col-md-10",children:Object(c.jsxs)(je.a,{className:"row",children:[Object(c.jsx)(je.a,{className:"col-12",children:Object(c.jsxs)("h3",{children:["  ",s.name]})}),Object(c.jsx)(je.a,{className:"col-12",children:Object(c.jsx)("h7",{children:s.designation})}),Object(c.jsx)(je.a,{className:"col-12",children:s.description})]})})]})}var me=function(e){return e.leaders.isLoading?Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(N,{})})}):e.leaders.errMess?Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("h4",{children:e.leaders.errMess})})}):Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)(f.a,{children:[Object(c.jsx)(p.a,{children:Object(c.jsx)(g.b,{to:"/home",children:"Home"})}),Object(c.jsx)(p.a,{active:!0,children:"About Us"})]})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-12 col-md-2 ",children:Object(c.jsx)("h3",{children:"About Us"})})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-12 ",children:Object(c.jsx)("hr",{})})}),Object(c.jsxs)("div",{className:"row row-content",children:[Object(c.jsxs)("div",{className:"col-12 col-md-6",children:[Object(c.jsx)("h2",{children:"Our History"}),Object(c.jsx)("p",{children:"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."}),Object(c.jsxs)("p",{children:["The restaurant traces its humble beginnings to ",Object(c.jsx)("em",{children:"The Frying Pan"}),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan."]})]}),Object(c.jsx)("div",{className:"col-12 col-md-5",children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)(de.a,{className:"bg-primary text-white",children:"Facts At a Glance"}),Object(c.jsx)(k.a,{children:Object(c.jsxs)("dl",{className:"row p-1",children:[Object(c.jsx)("dt",{className:"col-6",children:"Started"}),Object(c.jsx)("dd",{className:"col-6",children:"3 Feb. 2013"}),Object(c.jsx)("dt",{className:"col-6",children:"Major Stake Holder"}),Object(c.jsx)("dd",{className:"col-6",children:"HK Fine Foods Inc."}),Object(c.jsx)("dt",{className:"col-6",children:"Last Year's Turnover"}),Object(c.jsx)("dd",{className:"col-6",children:"$1,250,375"}),Object(c.jsx)("dt",{className:"col-6",children:"Employees"}),Object(c.jsx)("dd",{className:"col-6",children:"40"})]})})]})}),Object(c.jsx)("div",{className:"col-12",children:Object(c.jsx)(b.a,{children:Object(c.jsx)(k.a,{className:"bg-faded",children:Object(c.jsxs)("blockquote",{className:"blockquote",children:[Object(c.jsx)("p",{className:"mb-0",children:"You better cut the pizza in four pieces because I'm not hungry enough to eat six."}),Object(c.jsxs)("footer",{className:"blockquote-footer",children:["Yogi Berra,",Object(c.jsx)("cite",{title:"Source Title",children:"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"})]})]})})})})]}),Object(c.jsxs)("div",{className:"row row-content",children:[Object(c.jsx)("div",{className:"col-12 col-md-5",children:Object(c.jsx)("h2",{children:"Corporate Leadership"})}),Object(c.jsx)("div",{className:"col-12",children:Object(c.jsx)(je.a,{list:!0,children:Object(c.jsx)(m.Stagger,{in:!0,children:e.leaders.leaders.map((function(e){return Object(c.jsx)(m.Fade,{in:!0,children:Object(c.jsx)(he,{leader:e})})}))})})})]})]})},be=t(17),ue="ADD_COMMENT",Oe="DISHES_LOADING",xe="DISHES_FAILED",fe="ADD_DISHES",pe="ADD_COMMENTS",ge="COMMENTS_FAILED",Ne="PROMOS_LOADING",ve="ADD_PROMOS",ye="PROMOS_FAILED",we="ADD_LEADERS",Me="LEADERS_LOADING",ke="LEADERS_FAILED",Le=function(e,s,t,c){return function(n){var r={dishId:e,rating:s,author:t,comment:c};return r.date=(new Date).toISOString(),fetch(v+"comments",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return n(function(e){return{type:ue,payload:e}}(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}},Ce=function(){return{type:Oe}},Ee=function(e){return{type:xe,payload:e}},Se=function(e){return{type:fe,payload:e}},Fe=function(e){return{type:ge,payload:e}},Te=function(e){return{type:pe,payload:e}},De=function(){return{type:Ne}},Ie=function(e){return{type:ye,payload:e}},Ae=function(e){return{type:ve,payload:e}},Re=function(){return{type:Me}},qe=function(e){return{type:ke,payload:e}},Pe=function(e){return{type:we,payload:e}},He=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"onDishSelect",value:function(e){this.setState({selectedDish:e})}},{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{children:[Object(c.jsx)(Q,{}),Object(c.jsx)("div",{children:Object(c.jsx)(be.TransitionGroup,{children:Object(c.jsx)(be.CSSTransition,{classNames:"page",timeout:300,children:Object(c.jsxs)(te.d,{location:this.props.location,children:[Object(c.jsx)(te.b,{path:"/home",component:function(){return Object(c.jsx)(se,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess})}}),Object(c.jsx)(te.b,{exact:!0,path:"/aboutus",component:function(){return Object(c.jsx)(me,{leaders:e.props.leaders})}}),Object(c.jsx)(te.b,{exact:!0,path:"/menu",component:function(){return Object(c.jsx)(w,{dishes:e.props.dishes})}}),Object(c.jsx)(te.b,{path:"/menu/:dishId",component:function(s){var t=s.match;return Object(c.jsx)(_,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),Object(c.jsx)(te.b,{exact:!0,path:"/contactus",component:function(){return Object(c.jsx)(le,{postFeedback:e.props.postFeedback,resetFeedbackForm:e.props.resetFeedbackForm})}}),Object(c.jsx)(te.a,{to:"/home"})]})},this.props.location.key)})}),Object(c.jsx)(V,{})]})}}]),t}(h.Component),_e=Object(te.g)(Object(ce.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(s,t,c,n){return e(Le(s,t,c,n))},postFeedback:function(s,t,c,n,r,a,o){return e(function(e,s,t,c,n,r,a){return function(o){var i={firstname:e,lastname:s,telnum:t,email:c,agree:n,contactType:r,message:a};return i.date=(new Date).toISOString(),fetch(v+"feedback",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return alert(e),e})).catch((function(e){console.log("post feedback ",e.message),alert("Your feedback could not be posted\nError: "+e.message)}))}}(s,t,c,n,r,a,o))},fetchDishes:function(){e((function(e){return e(Ce(!0)),fetch(v+"dishes").then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(s){return e(Se(s))})).catch((function(s){return e(Ee(s.message))}))}))},resetFeedbackForm:function(){e(A.actions.reset("feedback"))},fetchComments:function(){return e((function(e){return fetch(v+"comments").then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(s){return e(Te(s))})).catch((function(s){return e(Fe(s.message))}))}))},fetchPromos:function(){return e((function(e){return e(De(!0)),fetch(v+"promotions").then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(s){return e(Ae(s))})).catch((function(s){return e(Ie(s.message))}))}))},fetchLeaders:function(){return e((function(e){return e(Re(!0)),fetch(v+"leaders").then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(s){return e(Pe(s))})).catch((function(s){return e(qe(s.message))}))}))}}}))(He)),Ye=t(7),Ue=t(33),Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case fe:return Object(Ye.a)(Object(Ye.a)({},e),{},{isLoading:!1,errMess:null,dishes:s.payload});case Oe:return Object(Ye.a)(Object(Ye.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case xe:return Object(Ye.a)(Object(Ye.a)({},e),{},{isLoading:!1,errMess:s.payload});default:return e}},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case pe:return Object(Ye.a)(Object(Ye.a)({},e),{},{errMess:null,comments:s.payload});case ge:return Object(Ye.a)(Object(Ye.a)({},e),{},{errMess:s.payload});case ue:var t=s.payload;return Object(Ye.a)(Object(Ye.a)({},e),{},{comments:e.comments.concat(t)});default:return e}},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case ve:return Object(Ye.a)(Object(Ye.a)({},e),{},{isLoading:!1,errMess:null,promotions:s.payload});case Ne:return Object(Ye.a)(Object(Ye.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case ye:return Object(Ye.a)(Object(Ye.a)({},e),{},{isLoading:!1,errMess:s.payload});default:return e}},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case we:return Object(Ye.a)(Object(Ye.a)({},e),{},{isLoading:!1,errMess:null,leaders:s.payload});case Me:return Object(Ye.a)(Object(Ye.a)({},e),{},{isLoading:!0,errMess:null,leaders:[]});case ke:return Object(Ye.a)(Object(Ye.a)({},e),{},{isLoading:!1,errMess:s.payload,leaders:[]});default:return e}},ze=t(86),Je=t(87),Ze=t.n(Je),$e={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},Qe=Object(Ue.createStore)(Object(Ue.combineReducers)(Object(Ye.a)({dishes:Be,comments:Ge,promotions:We,leaders:Ke},Object(A.createForms)({feedback:$e}))),Object(Ue.applyMiddleware)(ze.a,Ze.a)),Ve=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(c.jsx)(ce.Provider,{store:Qe,children:Object(c.jsx)(g.a,{children:Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(_e,{})})})})}}]),t}(h.Component),Xe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,174)).then((function(s){var t=s.getCLS,c=s.getFID,n=s.getFCP,r=s.getLCP,a=s.getTTFB;t(e),c(e),n(e),r(e),a(e)}))};t(143),t(144);o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(Ve,{})}),document.getElementById("root")),Xe()},94:function(e,s,t){},95:function(e,s,t){}},[[145,1,2]]]);
//# sourceMappingURL=main.7d8bfb2e.chunk.js.map