(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{17:function(t,e,n){t.exports={filter:"Filter_filter__2mFkE",label:"Filter_label__1qY2U",input:"Filter_input__B2Fcl"}},2:function(t,e,n){t.exports={form:"ContactForm_form__12NIb",label:"ContactForm_label__3s1_-",input:"ContactForm_input__2A2F3",button:"ContactForm_button__3gKGG"}},20:function(t,e,n){t.exports={enter:"slide_enter__1Pqmi",enterActive:"slide_enterActive__2NkeB",exit:"slide_exit__uVI5l",exitActive:"slide_exitActive__2taCT"}},21:function(t,e,n){t.exports={alert:"Alert_alert__1hUMW"}},22:function(t,e,n){t.exports={appear:"title_appear__1Lma6",appearActive:"title_appearActive__2hjlh"}},23:function(t,e,n){t.exports={enter:"pop_enter__2TQQG",enterActive:"pop_enterActive__TVCOF",exit:"pop_exit__1psU3",exitActive:"pop_exitActive__w4icg"}},24:function(t,e,n){t.exports={enter:"alert_enter__2vItf",enterActive:"alert_enterActive__3GRWV",exit:"alert_exit__1fX31",exitActive:"alert_exitActive__26eaa"}},32:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n(5),s=n.n(i),c=(n(32),n(25)),r=n(16),o=n(11),l=n(12),u=n(15),m=n(14),b=n(8),_=n.n(b),p=n(10),d=n(2),h=n.n(d),j=n(0),f=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={name:"",number:""},t.nameInputId=_.a.generate(),t.numberInputId=_.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,i=n.value;t.setState(Object(p.a)({},a,i))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:h.a.form,children:[Object(j.jsxs)("label",{htmlFor:this.nameInputId,className:h.a.label,children:["Name ",Object(j.jsx)("input",{className:h.a.input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange,id:this.nameInputId})]}),Object(j.jsxs)("label",{htmlFor:this.numberInputId,className:h.a.label,children:["Number ",Object(j.jsx)("input",{className:h.a.input,type:"text",name:"number",value:this.state.number,onChange:this.handleChange,id:this.numberInputId})]}),Object(j.jsx)("button",{type:"submit",className:h.a.button,children:"Add contact"})]})}}]),n}(a.Component),x=n(17),v=n.n(x),O=function(t){var e=t.value,n=t.onChange;return Object(j.jsx)("div",{className:v.a.filter,children:Object(j.jsxs)("label",{className:v.a.label,htmlFor:"",children:["Find contacts by name",Object(j.jsx)("input",{className:v.a.input,type:"text",value:e,onChange:n})]})})},g=n(7),C=n.n(g),N=n(47),S=n(46),A=n(20),F=n.n(A),I=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)(N.a,{component:"ul",className:C.a.list,children:e.map((function(t){var e=t.name,a=t.number,i=t.id;return Object(j.jsx)(S.a,{timeout:250,classNames:F.a,unmountOnExit:!0,children:Object(j.jsxs)("li",{className:C.a.item,children:[Object(j.jsx)("p",{className:C.a.name,children:e}),Object(j.jsx)("p",{className:C.a.number,children:a}),Object(j.jsx)("button",{className:C.a.button,onClick:function(){return n(i)},children:"X"})]},i)},i)}))})},y=n(21),k=n.n(y),w=function(t){var e=t.message;return Object(j.jsx)("div",{className:k.a.alert,children:e})},L=(n(44),n(22)),T=n.n(L),V=n(23),E=n.n(V),M=n(24),D=n.n(M),G={isVisible:!1,message:""},J=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state=Object(r.a)({contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},G),t.setMessage=function(e){t.setState({isVisible:!0,message:e}),setTimeout((function(){t.setState(Object(r.a)({},G))}),1500)},t.addContact=function(e){var n=e.name,a=e.number;if(t.state.contacts.map((function(t){return t.name})).includes(n))t.setState({isVisible:!0,message:"Contact already exists!"}),setTimeout((function(){t.setState(Object(r.a)({},G))}),1500);else{var i={id:_.a.generate(),name:n,number:a};t.setState((function(t){return{contacts:[i].concat(Object(c.a)(t.contacts))}}))}},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.deleteContact=function(e){var n=t.state.contacts;t.setState({contacts:n.filter((function(t){return t.id!==e}))})},t.filterContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t){var e=this.state.contacts;t.contacts!==e&&localStorage.setItem("contacts",JSON.stringify(e))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=t.isVisible,i=t.message,s=this.filterContacts();return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(S.a,{in:!0,timeout:500,classNames:T.a,appear:!0,children:Object(j.jsx)("h1",{className:"title",children:"Phonebook"})}),Object(j.jsx)(S.a,{in:a,timeout:250,classNames:D.a,unmountOnExit:!0,children:Object(j.jsx)(w,{message:i})}),Object(j.jsx)(f,{onSubmit:this.addContact,onSetMessage:this.setMessage}),Object(j.jsx)(S.a,{in:e.length>0,timeout:250,classNames:E.a,unmountOnExit:!0,children:Object(j.jsx)(O,{value:n,onChange:this.changeFilter})}),Object(j.jsx)(I,{contacts:s,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);s.a.render(Object(j.jsx)(J,{}),document.getElementById("root"))},7:function(t,e,n){t.exports={list:"ContactList_list__vavTt",item:"ContactList_item__scqmS",name:"ContactList_name__3tKdW",number:"ContactList_number__3zMFx",button:"ContactList_button__1p6Xg"}}},[[45,1,2]]]);
//# sourceMappingURL=main.f6c08d9b.chunk.js.map