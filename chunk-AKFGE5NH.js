import{a as D}from"./chunk-JVDQRYTN.js";import{a as P,b as d,c as w,d as y,e as _,f as u,g as N,h as S,i as x,j as F}from"./chunk-HCMCGO3B.js";import{g as O,j as l}from"./chunk-YYKIJHCM.js";import{Ab as C,Kb as v,Ua as s,Va as c,aa as g,ba as f,la as h,nb as p,pc as M,sb as i,tb as r,ub as a,vc as b}from"./chunk-UUWTF7FU.js";var j=(()=>{let t=class t{constructor(o,e){this.authService=o,this.router=e,this.form=new _({userName:new u("",[d.required]),password:new u("",[d.required])})}onLogin(){this.authService.login(this.form.value.userName,this.form.value.password)&&(console.log("Login successful"),this.router.navigate(["/alerts"]))}};t.\u0275fac=function(e){return new(e||t)(c(D),c(O))},t.\u0275cmp=g({type:t,selectors:[["app-login"]],decls:9,vars:2,consts:[[1,"login-container"],[3,"formGroup","ngSubmit"],["ngSrc","assets/img.png","alt","","height","180","width","230"],["type","text","placeholder","Username","formControlName","userName"],["type","password","placeholder","Password","id","password","formControlName","password"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(e,m){e&1&&(i(0,"div",0)(1,"form",1),C("ngSubmit",function(){return m.onLogin()}),a(2,"img",2),i(3,"div"),a(4,"input",3),r(),i(5,"div"),a(6,"input",4),r(),i(7,"button",5),v(8,"Continue"),r()()()),e&2&&(s(),p("formGroup",m.form),s(6),p("disabled",!m.form.valid))},dependencies:[N,P,w,y,S,x,b],styles:[".wrapper[_ngcontent-%COMP%]{width:100%;height:100vh}.login-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh}.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:300px;padding:20px;border-radius:5px;background:transparent}.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:70%;margin:10px 0;padding:10px}.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;border:none;border-radius:4px;cursor:pointer}.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#0056b3}"],changeDetection:0});let n=t;return n})();var I=[{path:"",component:j}],J=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=f({type:t}),t.\u0275inj=h({imports:[M,l.forChild(I),F,l]});let n=t;return n})();export{J as LoginModule};
