exports.ids=[3],exports.modules={105:function(t,o,e){"use strict";e.r(o);var n={name:"AdminAuthPage",layout:"admin",data:()=>({isLogin:!0,email:"",password:""}),methods:{onSubmit(){this.$store.dispatch("authenticateUser",{isLogin:this.isLogin,email:this.email,password:this.password}).then(()=>{this.$router.push("/admin")}).catch(t=>console.log(t))}}},r=e(1);var component=Object(r.a)(n,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"admin-auth-page"},[t._ssrNode('<div class="auth-container" data-v-0e193740>',"</div>",[t._ssrNode("<form data-v-0e193740>","</form>",[e("AppControlInput",{attrs:{type:"email"},model:{value:t.email,callback:function(o){t.email=o},expression:"email"}},[t._v("E-Mail Address")]),t._ssrNode(" "),e("AppControlInput",{attrs:{type:"password"},model:{value:t.password,callback:function(o){t.password=o},expression:"password"}},[t._v("Password")]),t._ssrNode(" "),e("AppButton",{attrs:{type:"submit"}},[t._v(t._s(t.isLogin?"Login":"Sign Up"))]),t._ssrNode(" "),e("AppButton",{staticStyle:{"margin-left":"10px"},attrs:{type:"button","btn-style":"inverted"},on:{click:function(o){t.isLogin=!t.isLogin}}},[t._v("Switch to "+t._s(t.isLogin?"Signup":"Login"))])],2)])])},[],!1,function(t){var o=e(93);o.__inject__&&o.__inject__(t)},"0e193740","4a092857");o.default=component.exports},81:function(t,o,e){var content=e(94);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=e(3).default;t.exports.__inject__=function(t){n("7bd8af78",content,!0,t)}},93:function(t,o,e){"use strict";e.r(o);var n=e(81),r=e.n(n);for(var d in n)"default"!==d&&function(t){e.d(o,t,function(){return n[t]})}(d);o.default=r.a},94:function(t,o,e){(t.exports=e(2)(!1)).push([t.i,".admin-auth-page[data-v-0e193740]{padding:20px}.auth-container[data-v-0e193740]{border:1px solid #ccc;border-radius:5px;box-shadow:0 2px 2px #ccc;width:300px;margin:auto;padding:10px;box-sizing:border-box}",""])}};
//# sourceMappingURL=59cd889ba515d0b22183.js.map