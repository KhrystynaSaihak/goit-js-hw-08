function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,l=u||s||Function("return this")(),c=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return l.Date.now()};function p(e,t,n){var a,i,o,r,f,u,s=0,l=!1,c=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=a,o=i;return a=i=void 0,s=t,r=e.apply(o,n)}function h(e){return s=e,f=setTimeout(S,t),l?y(e):r}function I(e){var n=e-u;return void 0===u||n>=t||n<0||c&&e-s>=o}function S(){var e=g();if(I(e))return j(e);f=setTimeout(S,function(e){var n=t-(e-u);return c?d(n,o-(e-s)):n}(e))}function j(e){return f=void 0,p&&a?y(e):(a=i=void 0,r)}function T(){var e=g(),n=I(e);if(a=arguments,i=this,u=e,n){if(void 0===f)return h(u);if(c)return f=setTimeout(S,t),y(u)}return void 0===f&&(f=setTimeout(S,t)),r}return t=b(t)||0,v(n)&&(l=!!n.leading,o=(c="maxWait"in n)?m(b(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==f&&clearTimeout(f),s=0,a=u=i=f=void 0},T.flush=function(){return void 0===f?r:j(g())},T}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=o.test(e);return n||r.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var a=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(a="leading"in n?!!n.leading:a,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:a,maxWait:t,trailing:i})};const y={emailInp:document.querySelector('input[name="email"]'),messageInp:document.querySelector('textarea[name="message"]'),formRef:document.querySelector(".feedback-form")},h={email:"",message:"",getData:function(e){const t=e.target.value;this[e.target.name]=t},setData:function(e){this.email=e.email,this.message=e.message},setDataInFields:function(){y.emailInp.value=this.email,y.messageInp.value=this.message}},I=!!localStorage.getItem("feedback-form-state")&&JSON.parse(localStorage.getItem("feedback-form-state"));I&&(h.setData(I),h.setDataInFields());const S=e(t)((e=>{var t;h.getData(e),t=h,localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500);y.emailInp.addEventListener("input",S),y.messageInp.addEventListener("input",S),y.formRef.addEventListener("submit",(e=>{e.preventDefault();const t=e.currentTarget.elements,n=t.email.value,a=t.message.value;localStorage.removeItem("feedback-form-state"),y.formRef.reset(),console.log({email:n,message:a})}));
//# sourceMappingURL=03-feedback.a9c2d703.js.map
