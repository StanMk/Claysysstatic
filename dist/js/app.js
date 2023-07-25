(function(){"use strict";var t={7866:function(t,n,i){var o=i(9242),e=i(3396);const s={class:"nav-item"};function a(t,n,i,o,a,c){const r=(0,e.up)("notifications");return(0,e.wg)(),(0,e.iD)("nav",null,[(0,e._)("div",s,[(0,e.Wm)(r,{count:a.unreadCount,onSendNotification:c.sendNotification,onResetNotifications:c.resetNotifications},null,8,["count","onSendNotification","onResetNotifications"])])])}var c=i(7139);const r=t=>((0,e.dD)("data-v-3536317a"),t=t(),(0,e.Cn)(),t),u={class:"navbar"},f={class:"nav-item"},l={class:"notifications"},d={class:"notification-button-container"},h=r((()=>(0,e._)("i",{class:"ri-notification-line bell-icon"},null,-1))),p={key:0,class:"notification-count"},v={key:0,class:"notification-list"},g=r((()=>(0,e._)("div",{class:"welcome-message"},"Welcome to real-time notification portal",-1))),w={class:"post__buttons"};function b(t,n,i,o,s,a){return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("nav",u,[(0,e._)("div",f,[(0,e._)("div",l,[(0,e._)("div",d,[(0,e._)("button",{class:"notification-button",onClick:n[0]||(n[0]=(...t)=>a.toggleNotifications&&a.toggleNotifications(...t))},[h,i.count>0?((0,e.wg)(),(0,e.iD)("span",p,(0,c.zw)(a.formatUnreadCount(i.count)),1)):(0,e.kq)("",!0)])]),s.showNotifications?((0,e.wg)(),(0,e.iD)("div",v,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(s.notifications,(t=>((0,e.wg)(),(0,e.iD)("div",{key:t.id,class:"notification"},(0,c.zw)(t.message),1)))),128))])):(0,e.kq)("",!0)]),g])]),(0,e._)("div",w,[(0,e._)("button",{class:"send-notification-button",onClick:n[1]||(n[1]=(...t)=>a.sendNotification&&a.sendNotification(...t))},"Send Notification"),(0,e._)("button",{class:"reset-notification-button",onClick:n[2]||(n[2]=(...t)=>a.resetNotifications&&a.resetNotifications(...t))},"Reset Notifications")])],64)}var y={data(){return{showNotifications:!1,notifications:[]}},props:{count:{type:Number,required:!0}},methods:{toggleNotifications(){this.showNotifications=!this.showNotifications},formatUnreadCount(t){return t>99?"99+":t.toString()},sendNotification(){this.$emit("send-notification")},resetNotifications(){this.$emit("reset-notifications")}}},N=i(89);const m=(0,N.Z)(y,[["render",b],["__scopeId","data-v-3536317a"]]);var C=m,_=i(4161),k=i(6195),R=i(8396),O=i(6811),S={name:"App",components:{Notifications:C},data(){return{connection:null,unreadCount:0}},methods:{initSignalR(){this.connection=(new k.s).withUrl("Endpoint=https://claysyssignalr.service.signalr.net;AccessKey=ltupsMrwxks3ZIoRRYKDi5i44Lf+slndOteuPnRem5c=;Version=1.0/notificationsHub;",{skipNegotiation:!0,transport:R.n.WebSockets}).configureLogging(O.i.Information).build(),this.connection.on("ReceiveNotification",(()=>{this.unreadCount++})),this.connection.on("ReceiveNotification",(()=>{console.log("Received new notification."),this.unreadCount++})),this.connection.start().then((()=>{console.log("SignalR connection established.")})).catch((t=>{console.error("Error while establishing SignalR connection:",t)}))},async fetchUnreadCount(){try{const t=await _.Z.get("https://claysys.azurewebsites.net/api/notifications/unread");this.unreadCount=t.data.unreadCount}catch(t){console.error("Error while fetching unread notification count:",t)}},formatUnreadCount(t){return t>99?"99+":t.toString()},async sendNotification(){try{await _.Z.post("https://claysys.azurewebsites.net/api/notifications/send"),this.fetchUnreadCount()}catch(t){console.error("Error while sending notification:",t)}},async resetNotifications(){try{await _.Z.post("https://claysys.azurewebsites.net/api/notifications/reset"),this.fetchUnreadCount()}catch(t){console.error("Error while resetting notifications:",t)}}},created(){this.fetchUnreadCount(),this.initSignalR()}};const D=(0,N.Z)(S,[["render",a]]);var U=D;(0,o.ri)(U).mount("#app")}},n={};function i(o){var e=n[o];if(void 0!==e)return e.exports;var s=n[o]={exports:{}};return t[o].call(s.exports,s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(n,o,e,s){if(!o){var a=1/0;for(f=0;f<t.length;f++){o=t[f][0],e=t[f][1],s=t[f][2];for(var c=!0,r=0;r<o.length;r++)(!1&s||a>=s)&&Object.keys(i.O).every((function(t){return i.O[t](o[r])}))?o.splice(r--,1):(c=!1,s<a&&(a=s));if(c){t.splice(f--,1);var u=e();void 0!==u&&(n=u)}}return n}s=s||0;for(var f=t.length;f>0&&t[f-1][2]>s;f--)t[f]=t[f-1];t[f]=[o,e,s]}}(),function(){i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,{a:n}),n}}(),function(){i.d=function(t,n){for(var o in n)i.o(n,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};i.O.j=function(n){return 0===t[n]};var n=function(n,o){var e,s,a=o[0],c=o[1],r=o[2],u=0;if(a.some((function(n){return 0!==t[n]}))){for(e in c)i.o(c,e)&&(i.m[e]=c[e]);if(r)var f=r(i)}for(n&&n(o);u<a.length;u++)s=a[u],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(f)},o=self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=i.O(void 0,[998],(function(){return i(7866)}));o=i.O(o)})();
//# sourceMappingURL=app.js.map