function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"5x4V":function(n,t,e){"use strict";e.r(t),e.d(t,"JsoneditorDemoModule",(function(){return u}));var o,a,i,s=e("ofXK"),c=e("TI2E"),r=e("tyNb"),b=e("fXoL"),g=e("WvVJ"),h=[{path:"",component:(o=function(){function n(){_classCallCheck(this,n),this.jsonOption1={mode:c.a.CODE,search:!0},this.jsonOption2={mode:c.a.TREE,search:!0},this.jsonOption3={mode:c.a.VIEW,search:!0},this.jsonOption4={mode:c.a.FORM,search:!0},this.jsonOption5={mode:c.a.TEXT,search:!0},this.jsonData={Array:[1,2,3],Boolean:!0,Null:null,Number:123,Object:{a:"b",c:"d"},String:"Hello World"}}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"getJsonData",value:function(n){console.log(n),this.result=n}}]),n}(),o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=b.Db({type:o,selectors:[["app-jsoneditor-demo"]],decls:26,vars:13,consts:[[1,"demo-content"],[1,"content-item"],[3,"ngOptions","ngData","ngDataChange"]],template:function(n,t){1&n&&(b.Mb(0,"div",0),b.Mb(1,"div"),b.Mb(2,"label"),b.hc(3,"\u7ed3\u679c:"),b.Lb(),b.hc(4),b.Wb(5,"json"),b.Lb(),b.Mb(6,"div",1),b.Mb(7,"h3"),b.hc(8,"code\u6a21\u5f0f"),b.Lb(),b.Mb(9,"ngx-jsoneditor",2),b.Tb("ngDataChange",(function(n){return t.getJsonData(n)})),b.Lb(),b.Lb(),b.Mb(10,"div",1),b.Mb(11,"h3"),b.hc(12,"text\u6a21\u5f0f"),b.Lb(),b.Mb(13,"ngx-jsoneditor",2),b.Tb("ngDataChange",(function(n){return t.getJsonData(n)})),b.Lb(),b.Lb(),b.Mb(14,"div",1),b.Mb(15,"h3"),b.hc(16,"tree\u6a21\u5f0f"),b.Lb(),b.Mb(17,"ngx-jsoneditor",2),b.Tb("ngDataChange",(function(n){return t.getJsonData(n)})),b.Lb(),b.Lb(),b.Mb(18,"div",1),b.Mb(19,"h3"),b.hc(20,"view\u6a21\u5f0f"),b.Lb(),b.Mb(21,"ngx-jsoneditor",2),b.Tb("ngDataChange",(function(n){return t.getJsonData(n)})),b.Lb(),b.Lb(),b.Mb(22,"div",1),b.Mb(23,"h3"),b.hc(24,"form\u6a21\u5f0f"),b.Lb(),b.Mb(25,"ngx-jsoneditor",2),b.Tb("ngDataChange",(function(n){return t.getJsonData(n)})),b.Lb(),b.Lb(),b.Lb()),2&n&&(b.zb(4),b.jc(" ",b.Xb(5,11,t.result)," "),b.zb(5),b.ac("ngOptions",t.jsonOption1)("ngData",t.jsonData),b.zb(4),b.ac("ngOptions",t.jsonOption5)("ngData",t.jsonData),b.zb(4),b.ac("ngOptions",t.jsonOption2)("ngData",t.jsonData),b.zb(4),b.ac("ngOptions",t.jsonOption3)("ngData",t.jsonData),b.zb(4),b.ac("ngOptions",t.jsonOption4)("ngData",t.jsonData))},directives:[g.a],pipes:[s.e],styles:[".demo-content[_ngcontent-%COMP%]{width:100%;height:100%}.content-item[_ngcontent-%COMP%]{padding:10px 50px 10px 10px}h3[_ngcontent-%COMP%]{margin:0}ngx-jsoneditor[_ngcontent-%COMP%]{height:250px}"]}),o)}],p=((i=function n(){_classCallCheck(this,n)}).\u0275mod=b.Hb({type:i}),i.\u0275inj=b.Gb({factory:function(n){return new(n||i)},imports:[[r.c.forChild(h)],r.c]}),i),u=((a=function n(){_classCallCheck(this,n)}).\u0275mod=b.Hb({type:a}),a.\u0275inj=b.Gb({factory:function(n){return new(n||a)},imports:[[s.b,p,c.b]]}),a)}}]);