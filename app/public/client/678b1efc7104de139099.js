(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{210:function(t,o,e){var content=e(221);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(11).default)("660d565f",content,!0,{sourceMap:!1})},220:function(t,o,e){"use strict";var n=e(210);e.n(n).a},221:function(t,o,e){(t.exports=e(10)(!1)).push([t.i,".admin-page[data-v-8aba695e]{padding:20px}.new-post[data-v-8aba695e]{border-bottom:2px solid #ccc;padding-bottom:10px}.existing-posts h1[data-v-8aba695e],.new-post[data-v-8aba695e]{text-align:center}",""])},239:function(t,o,e){"use strict";e.r(o);var n={layout:"admin",middleware:["check-auth","auth"],computed:{loadedPosts:function(){return this.$store.getters.loadedPosts}},methods:{onLogout:function(){this.$store.dispatch("logout"),this.$router.push("/admin/auth")}}},c=(e(220),e(2)),component=Object(c.a)(n,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"admin-page"},[e("section",{staticClass:"new-post"},[e("AppButton",{on:{click:function(o){return t.$router.push("/admin/new-post")}}},[t._v("Create Post")]),t._v(" "),e("AppButton",{on:{click:t.onLogout}},[t._v("Logout")])],1),t._v(" "),e("section",{staticClass:"existing-posts"},[e("h1",[t._v("Existing Posts")]),t._v(" "),e("PostList",{attrs:{posts:t.loadedPosts,isAdmin:""}})],1)])},[],!1,null,"8aba695e",null);o.default=component.exports}}]);