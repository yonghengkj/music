webpackJsonp([10],{"2XT+":function(t,e){function n(){}window.MessageChannel=n,window.setImmediate=n},"7YgM":function(t,e){t.exports={name:"mmplayer",version:"1.5.2",description:"Online music player",author:"maomao1996 <1714487678@qq.com>",private:!0,scripts:{dev:"webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",start:"npm run dev",build:"node build/build.js"},dependencies:{axios:"^0.17.1",fastclick:"^1.0.6",vue:"^2.5.2","vue-lazyload":"^1.2.3","vue-router":"^3.0.1",vuex:"^3.0.1"},devDependencies:{autoprefixer:"^7.1.2","babel-core":"^6.22.1","babel-helper-vue-jsx-merge-props":"^2.0.3","babel-loader":"^7.1.1","babel-plugin-syntax-jsx":"^6.18.0","babel-plugin-transform-runtime":"^6.22.0","babel-plugin-transform-vue-jsx":"^3.5.0","babel-polyfill":"^6.26.0","babel-preset-env":"^1.3.2","babel-preset-stage-2":"^6.22.0",chalk:"^2.0.1","copy-webpack-plugin":"^4.0.1","css-loader":"^0.28.0","extract-text-webpack-plugin":"^3.0.0","file-loader":"^1.1.4","friendly-errors-webpack-plugin":"^1.6.1","html-webpack-plugin":"^2.30.1",less:"^2.7.3","less-loader":"^4.0.5","node-notifier":"^5.1.2","optimize-css-assets-webpack-plugin":"^3.2.0",ora:"^1.2.0",portfinder:"^1.0.13","postcss-import":"^11.0.0","postcss-loader":"^2.0.8","postcss-url":"^7.2.1",rimraf:"^2.6.0",semver:"^5.3.0",shelljs:"^0.7.6","uglifyjs-webpack-plugin":"^1.1.1","url-loader":"^0.5.8","vue-loader":"^13.3.0","vue-style-loader":"^3.0.1","vue-template-compiler":"^2.5.2",webpack:"^3.6.0","webpack-bundle-analyzer":"^2.9.0","webpack-dev-server":"^2.9.1","webpack-merge":"^4.1.0"},engines:{node:">= 6.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},Lg5A:function(t,e){t.exports="data:image/png;base64,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"},N3MO:function(t,e,n){"use strict";var i={name:"mm-dialog",props:{dialogType:{type:Number,default:0},headText:{type:String,default:"提示"},bodyText:{type:String,default:""},cancelBtnText:{type:String,default:"取消"},confirmBtnText:{type:String,default:"确定"}},data:function(){return{dialogShow:!1}},methods:{show:function(){this.dialogShow=!0},hide:function(){this.dialogShow=!1},cancel:function(){this.hide(),this.$emit("cancel")},confirm:function(){this.hide(),this.$emit("confirm")}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"mm-dialog-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.dialogShow,expression:"dialogShow"}],staticClass:"mm-dialog-box"},[n("div",{staticClass:"mm-dialog-wrapper"},[n("div",{staticClass:"mm-dialog-content"},[n("div",{staticClass:"mm-dialog-head",domProps:{textContent:t._s(t.headText)}}),t._v(" "),t._t("default",[n("div",{staticClass:"mm-dialog-text",domProps:{innerHTML:t._s(t.bodyText)}})]),t._v(" "),n("div",{staticClass:"mm-dialog-btns"},[1!==t.dialogType?n("div",{staticClass:"mm-btn-cancel",domProps:{textContent:t._s(t.cancelBtnText)},on:{click:t.cancel}}):t._e(),t._v(" "),t._t("btn"),t._v(" "),n("div",{staticClass:"mm-btn-confirm",domProps:{textContent:t._s(t.confirmBtnText)},on:{click:t.confirm}})],2)],2)])])])},staticRenderFns:[]};var r=n("VU/8")(i,o,!1,function(t){n("uM2a")},null,null);e.a=r.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={};n.d(i,"audioEle",function(){return b}),n.d(i,"mode",function(){return T}),n.d(i,"playing",function(){return A}),n.d(i,"playlist",function(){return y}),n.d(i,"orderList",function(){return x}),n.d(i,"currentIndex",function(){return S}),n.d(i,"currentMusic",function(){return w}),n.d(i,"historyList",function(){return I}),n.d(i,"uid",function(){return P});var o={};n.d(o,"setPlaylist",function(){return D}),n.d(o,"selectPlay",function(){return O}),n.d(o,"selectAddPlay",function(){return R}),n.d(o,"clearPlayList",function(){return Y}),n.d(o,"removerPlayListItem",function(){return _}),n.d(o,"setHistory",function(){return C}),n.d(o,"removeHistory",function(){return M}),n.d(o,"clearHistory",function(){return N}),n.d(o,"setPlayMode",function(){return k}),n.d(o,"setUid",function(){return j});n("j1ja"),n("2XT+");var r=n("7+uW"),a=n("NYxO"),s=n("vgQg"),l=n("mvHQ"),u=n.n(l),c={get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(window.localStorage)return localStorage.getItem(t)?Array.isArray(e)?JSON.parse(localStorage.getItem(t)):localStorage.getItem(t):e},set:function(t,e){window.localStorage&&localStorage.setItem(t,e)},clear:function(t){window.localStorage&&localStorage.removeItem(t)}},m="__mmPlayer_historyList__",d=200;var p="__mmPlayer_mode__";var f="__mmPlayer_userID__";var v="__mmPlayer_version__";function h(t){return c.set(v,t),t}var g={audioEle:null,mode:Number(c.get(p,null))||s.e.listLoop,playing:!1,playlist:[],orderList:[],currentIndex:-1,historyList:c.get(m)||[],uid:Number(c.get(f,null))||null},b=function(t){return t.audioEle},T=function(t){return t.mode},A=function(t){return t.playing},y=function(t){return t.playlist},x=function(t){return t.orderList},S=function(t){return t.currentIndex},w=function(t){return t.playlist[t.currentIndex]||{}},I=function(t){return t.historyList},P=function(t){return t.uid},L=n("Gu7T"),E=n.n(L);var U,D=function(t,e){var n=t.commit,i=e.list;n("SET_PLAYLIST",i),n("SET_ORDERLIST",i)},O=function(t,e){var n=t.commit,i=e.list,o=e.index;n("SET_PLAYLIST",i),n("SET_ORDERLIST",i),n("SET_CURRENTINDEX",o),n("SET_PLAYING",!0)},R=function(t,e){var n=t.commit,i=t.state,o=[].concat(E()(i.playlist)),r=function(t,e){return t.findIndex(function(t){return t.id===e.id})}(o,e);r>-1?n("SET_CURRENTINDEX",r):(o.unshift(e),n("SET_PLAYLIST",o),n("SET_ORDERLIST",o),n("SET_CURRENTINDEX",0)),n("SET_PLAYING",!0)},Y=function(t){var e=t.commit;e("SET_PLAYING",!1),e("SET_CURRENTINDEX",-1),e("SET_PLAYLIST",[]),e("SET_ORDERLIST",[])},_=function(t,e){var n=t.commit,i=t.state,o=e.list,r=e.index,a=i.currentIndex;(r<i.currentIndex||o.length===i.currentIndex)&&n("SET_CURRENTINDEX",--a),n("SET_PLAYLIST",o),n("SET_ORDERLIST",o)},C=function(t,e){(0,t.commit)("SET_HISTORYLIST",function(t){var e=c.get(m),n=e.findIndex(function(e){return e.id===t.id});return 0===n?e:(n>0&&e.splice(n,1),e.unshift(t),d&&e.length>d&&e.pop(),c.set(m,u()(e)),e)}(e))},M=function(t,e){(0,t.commit)("SET_HISTORYLIST",function(t){return c.set(m,u()(t)),t}(e))},N=function(t){(0,t.commit)("SET_HISTORYLIST",(c.clear(m),[]))},k=function(t,e){(0,t.commit)("SET_PLAYMODE",function(t){return c.set(p,t),t}(e))},j=function(t,e){(0,t.commit)("SET_UID",function(t){return c.set(f,t),t}(e))},V=n("bOdI"),Q=n.n(V),F=(U={},Q()(U,"SET_AUDIOELE",function(t,e){t.audioEle=e}),Q()(U,"SET_PLAYMODE",function(t,e){t.mode=e}),Q()(U,"SET_PLAYING",function(t,e){t.playing=e}),Q()(U,"SET_PLAYLIST",function(t,e){t.playlist=e}),Q()(U,"SET_ORDERLIST",function(t,e){t.orderList=e}),Q()(U,"SET_CURRENTINDEX",function(t,e){t.currentIndex=e}),Q()(U,"SET_HISTORYLIST",function(t,e){t.historyList=e}),Q()(U,"SET_UID",function(t,e){t.uid=e}),U);n("sax8");r.a.use(a.a);var H=new a.a.Store({state:g,getters:i,mutations:F,actions:o,strict:!1,plugins:[]}),W=n("/ocq");r.a.use(W.a);var q=[{path:"/",redirect:"/music"},{path:"/music",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"ilYB"))},redirect:"/music/playlist",children:[{path:"/music/playlist",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"NilF"))},meta:{keepAlive:!0}},{path:"/music/userlist",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"rvUL"))},meta:{title:"我的歌单",keepAlive:!0}},{path:"/music/toplist",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"DUiI"))},meta:{title:"排行榜",keepAlive:!0}},{path:"/music/details/:id",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"3uZ1"))}},{path:"/music/historylist",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"u8QS"))},meta:{title:"我听过的"}},{path:"/music/search",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"NcgL"))},meta:{title:"搜索",keepAlive:!0}},{path:"/music/comment/:id",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"IqOq"))},meta:{title:"评论详情"}}]}],B=new W.a({linkActiveClass:"active",linkExactActiveClass:"active",routes:q}),X=n("Dd8w"),Z=n.n(X),K=n("gyMJ"),z=n("N3MO"),G={name:"mm-header",components:{MmDialog:z.a},data:function(){return{user:{},uidValue:""}},computed:Z()({},Object(a.c)(["uid"])),created:function(){this.uid&&this._getUserPlaylist(this.uid)},methods:Z()({openDialog:function(t){switch(t){case 0:this.$refs.loginDialog.show();break;case 1:this.$refs.loginDialog.hide(),this.$refs.helpDialog.show();break;case 2:this.$refs.outDialog.show()}},out:function(){this.user={},this.setUid(null),this.$mmToast("退出成功！")},login:function(){""===this.uidValue&&(this.$mmToast("UID不能为空"),this.openDialog(0)),this._getUserPlaylist(this.uidValue)},_getUserPlaylist:function(t){var e=this;Object(K.h)(t).then(function(n){if(200===n.data.code){if(e.uidValue="",0===n.data.playlist.length||!n.data.playlist[0].creator)return void e.$mmToast("未查询找UID为 "+t+" 的用户信息");e.setUid(t),e.user=n.data.playlist[0].creator,setTimeout(function(){e.$mmToast(e.user.nickname+" 欢迎使用")},200)}})}},Object(a.b)(["setUid"]))},J={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"mm-header"},[n("h1",{staticClass:"header"},[t._v("mmPlayer在线音乐播放器")]),t._v(" "),n("dl",{staticClass:"user"},[t.user.userId?[n("router-link",{staticClass:"user-info",attrs:{to:"/music/userlist",tag:"dt"}},[n("img",{attrs:{src:t.user.avatarUrl+"?param=50y50"}}),t._v(" "),n("span",[t._v(t._s(t.user.nickname))])]),t._v(" "),n("dd",{staticClass:"user-btn",on:{click:function(e){t.openDialog(2)}}},[t._v("退出")])]:n("dd",{staticClass:"user-btn",on:{click:function(e){t.openDialog(0)}}},[t._v("登录")])],2),t._v(" "),n("mm-dialog",{ref:"loginDialog",attrs:{headText:"登录",confirmBtnText:"登录",cancelBtnText:"关闭"},on:{confirm:t.login}},[n("div",{staticClass:"mm-dialog-text"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.uidValue,expression:"uidValue",modifiers:{trim:!0}}],staticClass:"mm-dialog-input",attrs:{type:"number",autofocus:"",placeholder:"请输入您的网易云UID"},domProps:{value:t.uidValue},on:{input:function(e){e.target.composing||(t.uidValue=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),n("div",{attrs:{slot:"btn"},on:{click:function(e){t.openDialog(1)}},slot:"btn"},[t._v("帮助")])]),t._v(" "),n("mm-dialog",{ref:"helpDialog",attrs:{headText:"登录帮助",confirmBtnText:"去登录",cancelBtnText:"关闭"},on:{confirm:function(e){t.openDialog(0)}}},[n("div",{staticClass:"mm-dialog-text"},[n("p",[t._v("1、"),n("a",{attrs:{target:"_blank",href:"http://music.163.com"}},[t._v("点我(http://music.163.com)")]),t._v("打开网易云音乐官网")]),t._v(" "),n("p",[t._v("2、点击页面右上角的“登录”")]),t._v(" "),n("p",[t._v("3、点击您的头像，进入我的主页")]),t._v(" "),n("p",[t._v("4、复制浏览器地址栏 /user/home?id= 后面的数字（网易云 UID）")])])]),t._v(" "),n("mm-dialog",{ref:"outDialog",attrs:{bodyText:"确定退出当前用户吗？"},on:{confirm:t.out}})],1)},staticRenderFns:[]};var $=n("VU/8")(G,J,!1,function(t){n("V4G1")},null,null).exports,tt=n("7YgM"),et={name:"app",components:{MmHeader:$,MmDialog:z.a},created:function(){var t=this,e=document.title,n=void 0;document.addEventListener("visibilitychange",function(){document.hidden?(document.title="死鬼去哪里了！",clearTimeout(n)):(document.title="(つェ⊂)咦!又好了!",n=setTimeout(function(){document.title=e},2e3))}),this.$nextTick(function(){t.setAudioele(t.$refs.mmPlayer)}),document.querySelector("#appLoading")&&(document.querySelector("#appLoading").classList.add("removeAnimate"),setTimeout(function(){document.body.removeChild(document.getElementById("appLoading"));var e=function(){var t=c.get(v,null);return Array.isArray(t)?null:t}(),n=tt.version;null!==e?(h(n),e!==n&&t.$refs.versionDialog.show()):(h(n),t.$refs.versionDialog.show())},500))},computed:{versionBody:function(){return'<div class="mm-dialog-text text-left">\n版本号：'+tt.version+"<br/>\n1、 新增评论详情功能<br>\n2、 新增title提示<br>\n3、 新增歌曲缓冲进度<br>\n4、 新增热门歌单<br>\n5、 新增图片懒加载<br>\n6、 修改热搜展示数据<br>\n7、 优化已知问题\n</div>"}},methods:Z()({},Object(a.d)({setAudioele:"SET_AUDIOELE"}))},nt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("mm-header"),this._v(" "),e("router-view",{staticClass:"router-view"}),this._v(" "),e("mm-dialog",{ref:"versionDialog",attrs:{dialogType:1,headText:"更新提示",bodyText:this.versionBody}}),this._v(" "),e("audio",{ref:"mmPlayer"})],1)},staticRenderFns:[]};var it=n("VU/8")(et,nt,!1,function(t){n("a7Xf")},null,null).exports,ot=n("mtWM"),rt=n.n(ot),at=n("v5o6"),st=n.n(at),lt=n("woOf"),ut=n.n(lt),ct={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"toast-fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"mm-toast",class:this.positionClasss},[this._v(this._s(this.message))])])},staticRenderFns:[]};var mt=n("VU/8")({name:"mm-toast",data:function(){return{position:"center",message:"",duration:1500,visible:!1}},computed:{positionClasss:function(){return"mm-toast-"+this.position}}},ct,!1,function(t){n("ugW1")},null,null).exports,dt=void 0,pt=!1,ft=void 0,vt={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=mt.data();ut()(n,e),t.prototype.$mmToast=function(e,i){pt&&(clearTimeout(ft),dt.vm.visible=pt=!1,document.body.removeChild(dt.vm.$el)),e&&(n.message=e),i&&(n.position=i);var o=t.extend(mt);(dt=new o({data:n})).vm=dt.$mount(),document.body.appendChild(dt.vm.$el),dt.vm.visible=pt=!0,ft=setTimeout(function(){dt.vm.visible=pt=!1,document.body.removeChild(dt.vm.$el)},n.duration)}}},ht=n("cTzj"),gt=n.n(ht);n("SPU+");r.a.prototype.$http=rt.a,st.a.attach(document.body),r.a.use(vt),r.a.use(gt.a,{preLoad:1,loading:n("Lg5A")});var bt=["/music/details","/music/comment"];B.beforeEach(function(t,e,n){bt.includes(t.path)?n("/"):(document.title=t.meta.title&&t.meta.title+" - mmPlayer在线音乐播放器"||"mmPlayer在线音乐播放器",n())});r.a.config.silent=!1,r.a.config.debug=!1,r.a.config.devtools=!1,r.a.config.productionTip=!1;var Tt=n("7YgM");window.mmPlayer=window.mmplayer="欢迎使用 mmPlayer!\n当前版本为：V"+Tt.version+"\n作者：茂茂\nGithub：https://github.com/maomao1996/Vue-mmPlayer\n歌曲来源于网易云音乐 (http://music.163.com)",console.info("%c"+mmPlayer,"color:blue"),new r.a({el:"#mmPlayer",store:H,router:B,components:{App:it},template:"<App/>"})},"SPU+":function(t,e){},V4G1:function(t,e){},a7Xf:function(t,e){},gyMJ:function(t,e,n){"use strict";e.g=function(){var t=r.a+"/toplist/detail";return o.a.get(t)},e.k=function(t){var e=r.a+"/top/list";return o.a.get(e,{params:{idx:t}})},e.e=function(){var t=r.a+"/personalized";return o.a.get(t)},e.f=function(t){var e=r.a+"/playlist/detail";return o.a.get(e,{params:{id:t}})},e.i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.c,i=r.a+"/search";return o.a.get(i,{params:{offset:e*n,limit:n,keywords:t}})},e.j=function(){var t=r.a+"/search/hot";return o.a.get(t)},e.h=function(t){var e=r.a+"/user/playlist";return o.a.get(e,{params:{uid:t}})},e.c=function(t){var e=r.a+"/song/detail";return o.a.get(e,{params:{ids:t}})},e.d=function(t){var e=r.a+"/music/url";return o.a.get(e,{params:{id:t}})},e.b=function(t){var e=r.a+"/lyric";return o.a.get(e,{params:{id:t}})},e.a=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.c,i=r.a+"/comment/music";return o.a.get(i,{params:{offset:e*n,limit:n,id:t}})};var i=n("mtWM"),o=n.n(i),r=n("vgQg")},uM2a:function(t,e){},ugW1:function(t,e){},vgQg:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"d",function(){return o}),n.d(e,"c",function(){return r}),n.d(e,"b",function(){return a}),n.d(e,"e",function(){return s});var i="https://api.mtnhao.com",o=1,r=30,a="http://cdn.mtnhao.com/music/bg.jpg",s={listLoop:0,order:1,random:2,loop:3}}},["NHnr"]);