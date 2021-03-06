(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(t,e,n){t.exports={item:"CartItem_item__Ia8Gj",details:"CartItem_details__1UqnF",quantity:"CartItem_quantity__3y1Z6",price:"CartItem_price__1RXbh",itemprice:"CartItem_itemprice__2aJF9",actions:"CartItem_actions__2xpXg"}},,,,function(t,e,n){t.exports={item:"ProductItem_item__2PTJw",price:"ProductItem_price__12-dk",actions:"ProductItem_actions__2FG2q"}},function(t,e,n){t.exports={notification:"Notification_notification__2YRRt",error:"Notification_error__3Jo-g",success:"Notification_success__IeLdW"}},,,function(t,e,n){t.exports={cart:"Cart_cart__34MBq",empty:"Cart_empty__1_MjF"}},function(t,e,n){t.exports={button:"CartButton_button__ZHjn1",badge:"CartButton_badge__Q6mBK"}},,function(t,e,n){t.exports={card:"Card_card__mRUg_"}},function(t,e,n){t.exports={header:"MainHeader_header__u8o4i"}},function(t,e,n){t.exports={products:"Products_products__1b0Be"}},,,,,,,,,function(t,e,n){},,,function(t,e,n){"use strict";n.r(e);var c=n(7),i=n.n(c),r=n(2),a=n(5),s=n(18),o=Object(a.b)({name:"cart",initialState:{items:[],changed:!1},reducers:{replaceCart:function(t,e){console.log(e.payload.items),t.items=e.payload.items},addItem:function(t,e){var n=e.payload,c=t.items.findIndex((function(t){return t.id===n.id}));if(t.changed=!0,-1!==c)return t.items[c].quantity++,void(t.items[c].total+=n.price);t.items.push({id:n.id,total:n.price,quantity:1,info:{title:n.title,price:n.price}})},incrementQuantity:function(t,e){t.changed=!0,t.items.map((function(t){t.id===e.payload&&(t.quantity++,t.total=t.total+t.info.price)}))},decrementQuantity:function(t,e){var n=t.items;t.changed=!0;var c=n.findIndex((function(t){return t.id===e.payload}));if(n[c].quantity>1)return n[c].quantity--,void(n[c].total-=n[c].info.price);var i=n.filter((function(t){return t.id!==e.payload}));t.items=Object(s.a)(i),t.items.length&&(t.changed=!1)}}}),u=o.actions,d=o.reducer,l=Object(a.b)({name:"ui",initialState:{cartVisible:!1,notification:null},reducers:{toggleVisibility:function(t){t.cartVisible=!t.cartVisible},showNotification:function(t,e){t.notification={status:e.payload.status,title:e.payload.title,message:e.payload.message}}}}),j=l.actions,f=l.reducer,b=Object(a.a)({reducer:{cart:d,ui:f}}),p=(n(26),n(1)),m=n(15),h=n.n(m),x=n(0),O=function(t){return Object(x.jsx)("section",{className:"".concat(h.a.card," ").concat(t.className?t.className:""),children:t.children})},_=n(12),g=n.n(_),y=n(4),v=n.n(y),N=function(t){var e=Object(r.b)(),n=t.item,c=n.quantity,i=n.total,a=n.info,s=n.id;return Object(x.jsxs)("li",{className:v.a.item,children:[Object(x.jsxs)("header",{children:[Object(x.jsx)("h3",{children:a.title}),Object(x.jsxs)("div",{className:v.a.price,children:["$",i.toFixed(2)," ",Object(x.jsxs)("span",{className:v.a.itemprice,children:["($",a.price.toFixed(2),"/item)"]})]})]}),Object(x.jsxs)("div",{className:v.a.details,children:[Object(x.jsxs)("div",{className:v.a.quantity,children:["x ",Object(x.jsx)("span",{children:c})]}),Object(x.jsxs)("div",{className:v.a.actions,children:[Object(x.jsx)("button",{onClick:function(){e(u.decrementQuantity(s))},children:"-"}),Object(x.jsx)("button",{onClick:function(){e(u.incrementQuantity(s))},children:"+"})]})]})]})},C=function(t){var e=Object(r.c)((function(t){return t.ui})).cartVisible,n=Object(r.c)((function(t){return t.cart})).items.map((function(t){return Object(x.jsx)(N,{item:t},t.id)}));return Object(x.jsx)(x.Fragment,{children:e&&Object(x.jsxs)(O,{className:g.a.cart,children:[Object(x.jsx)("h2",{children:"Your Shopping Cart"}),Object(x.jsx)("ul",{children:n.length?n:Object(x.jsx)("p",{className:g.a.empty,children:"Cart is empty"})})]})})},w=n(13),k=n.n(w),I=function(t){var e=Object(r.b)(),n=Object(r.c)((function(t){return t.cart})).items.reduce((function(t,e){return t+e.quantity}),0);return Object(x.jsxs)("button",{onClick:function(){e(j.toggleVisibility())},className:k.a.button,children:[Object(x.jsx)("span",{children:"My Cart"}),n>0&&Object(x.jsx)("span",{className:k.a.badge,children:n})]})},q=n(16),F=n.n(q),S=function(t){return Object(x.jsxs)("header",{className:F.a.header,children:[Object(x.jsx)("h1",{children:"ReduxCart"}),Object(x.jsx)("nav",{children:Object(x.jsx)("ul",{children:Object(x.jsx)("li",{children:Object(x.jsx)(I,{})})})})]})},B=function(t){return Object(x.jsxs)(p.Fragment,{children:[Object(x.jsx)(S,{}),Object(x.jsx)("main",{children:t.children})]})},E=n(8),J=n.n(E),P=function(t){var e=t.item,n=Object(r.b)(),c=e.title,i=e.price,a=e.description;return Object(x.jsx)("li",{className:J.a.item,children:Object(x.jsxs)(O,{children:[Object(x.jsxs)("header",{children:[Object(x.jsx)("h3",{children:c}),Object(x.jsxs)("div",{className:J.a.price,children:["$",i.toFixed(2)]})]}),Object(x.jsx)("p",{children:a}),Object(x.jsx)("div",{className:J.a.actions,children:Object(x.jsx)("button",{onClick:function(){n(u.addItem(e))},children:"Add to Cart"})})]})})},T=n(17),V=n.n(T),Q=[{id:1,title:"Test11",price:6,description:"This is a first product - amazing11!"},{id:7,title:"Test22",price:12,description:"This is a first product - amazing22!"}],R=function(t){var e=Q.map((function(t){return Object(x.jsx)(P,{item:t},t.id)}));return Object(x.jsxs)("section",{className:V.a.products,children:[Object(x.jsx)("h2",{children:"Buy your favorite products"}),Object(x.jsx)("ul",{children:e})]})},M=n(9),U=n.n(M),$=function(t){var e=t.item,n=e.status,c=e.title,i=e.message,r="".concat(U.a.notification," ");return"error"===n&&(r+=U.a.error),"success"===n&&(r+=U.a.success),Object(x.jsxs)("section",{className:r,children:[Object(x.jsx)("h2",{children:c}),Object(x.jsx)("p",{children:i})]})},z=n(6),G=n(3),H=n.n(G);var X=function(){var t=Object(r.b)(),e=Object(r.c)((function(t){return t.cart})),n=Object(r.c)((function(t){return t.ui.notification}));return Object(p.useEffect)((function(){t(function(){var t=Object(z.a)(H.a.mark((function t(e){var n,c;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=function(){var t=Object(z.a)(H.a.mark((function t(){var e,n;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://fir-cart-8f57e-default-rtdb.europe-west1.firebasedatabase.app/cart.json");case 2:if((e=t.sent).ok){t.next=5;break}throw new Error("Could not fetch cart data");case 5:return t.next=7,e.json();case 7:return n=t.sent,t.abrupt("return",n);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=1,t.next=4,n();case 4:c=t.sent,e(u.replaceCart({items:c?c.items:[]})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(j.showNotification({status:"error",title:"Error!",message:"Fetching cart data failed!"}));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}())}),[t]),Object(p.useEffect)((function(){e.changed&&t(function(t){return function(){var e=Object(z.a)(H.a.mark((function e(n){var c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(j.showNotification({status:"pending",title:"Sending...",message:"Sending cart data!"})),c=function(){var e=Object(z.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fir-cart-8f57e-default-rtdb.europe-west1.firebasedatabase.app/cart.json",{method:"PUT",body:JSON.stringify({items:t.items})});case 2:if(e.sent.ok){e.next=5;break}throw new Error("Sending cart data failed.");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=2,e.next=5,c();case 5:n(j.showNotification({status:"success",title:"Success!",message:"Sent cart data successfully!"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),n(j.showNotification({status:"error",title:"Error!",message:"Sending cart data failed!"}));case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()}(e))}),[e]),Object(x.jsxs)(x.Fragment,{children:[n&&Object(x.jsx)($,{item:n}),Object(x.jsxs)(B,{children:[Object(x.jsx)(C,{}),Object(x.jsx)(R,{})]})]})};i.a.render(Object(x.jsx)(r.a,{store:b,children:Object(x.jsx)(X,{})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.ff79a6cf.chunk.js.map