function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{vmNf:function(n,t,e){"use strict";e.r(t),e.d(t,"PrismjsDemoModule",(function(){return u}));var a,c,s,o=e("TI2E"),r=e("ofXK"),i=e("tyNb"),b=e("fXoL"),l=e("Ue9J"),p=[{path:"",component:(a=function(){function n(){_classCallCheck(this,n),this.hamlContent="= ['hi', 'there', 'reader!'].join \" \"",this.cssContent="\n    .ui-datatable table {\n      border-collapse:collapse;\n      width: 100% !important;\n      table-layout: fixed;\n    }\n  ",this.scssContent="\n    $height:30px;\n    .ui-datatable table {\n        border-collapse:collapse;\n        width: 100% !important;\n        table-layout: fixed;\n    }\n  ",this.typescriptContent="\n    import { MenuItem } from './models';\n    import { Component, OnInit } from '@angular/core';\n    import { ActivatedRoute } from '@angular/router';\n\n    @Component({\n      selector: 'app-docs',\n      templateUrl: './docs.component.html',\n      styleUrls: ['./docs.component.scss']\n    })\n    export class DocsComponent implements OnInit {\n\n      menuList = new Array<MenuItem>();\n\n      constructor(\n        private activatedRoute: ActivatedRoute,\n      ) { }\n\n      ngOnInit() {\n        this.activatedRoute.data.subscribe(data => {\n          this.menuList = data.config;\n        });\n      }\n\n    }\n  "}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=b.Db({type:a,selectors:[["app-prismjs-demo"]],decls:39,vars:5,consts:[["ngxPrismjs","","ngLanguage","javascript"],["ngxPrismjs","","ngLanguage","css"],["ngxPrismjs","","ngLanguage","scss"],["ngxPrismjs","","ngLanguage","haml"],["ngxPrismjs","","ngLanguage","typescript"]],template:function(n,t){1&n&&(b.Mb(0,"h3"),b.hc(1,"\u666e\u901a\u6837\u5f0f"),b.Lb(),b.hc(2,"\nvar data = 1;\n"),b.Mb(3,"h3"),b.hc(4,"\u4ee5javascript\u9ad8\u4eae\u663e\u793a"),b.Lb(),b.Mb(5,"span",0),b.hc(6,"var data = 1;"),b.Lb(),b.Mb(7,"code",0),b.hc(8,"var data = 1;"),b.Lb(),b.Mb(9,"pre",0),b.hc(10,"var data = 1;"),b.Lb(),b.Mb(11,"pre"),b.Mb(12,"code",0),b.hc(13,"var data = 1;"),b.Lb(),b.Lb(),b.Mb(14,"h3"),b.hc(15,"\u4ee5css\u9ad8\u4eae\u663e\u793a"),b.Lb(),b.Mb(16,"div",1),b.hc(17),b.Lb(),b.Mb(18,"pre",1),b.Mb(19,"code"),b.hc(20),b.Lb(),b.Lb(),b.Mb(21,"h3"),b.hc(22,"\u4ee5scss\u9ad8\u4eae\u663e\u793a"),b.Lb(),b.Mb(23,"pre"),b.hc(24,"    "),b.Mb(25,"code",2),b.hc(26),b.Lb(),b.hc(27,"\n"),b.Lb(),b.Mb(28,"h3"),b.hc(29,"\u4ee5haml\u9ad8\u4eae\u663e\u793a"),b.Lb(),b.Mb(30,"code",3),b.hc(31),b.Lb(),b.Mb(32,"h3"),b.hc(33,"\u4ee5typescript\u9ad8\u4eae\u663e\u793a"),b.Lb(),b.Mb(34,"pre"),b.hc(35,"    "),b.Mb(36,"code",4),b.hc(37),b.Lb(),b.hc(38,"\n"),b.Lb()),2&n&&(b.zb(17),b.jc(" ",t.cssContent,"\n"),b.zb(3),b.ic(t.cssContent),b.zb(6),b.jc("\n    ",t.scssContent,"\n    "),b.zb(5),b.jc(" ",t.hamlContent,"\n"),b.zb(6),b.jc("\n        ",t.typescriptContent,"\n    "))},directives:[l.a],styles:[""]}),a)}],h=((s=function n(){_classCallCheck(this,n)}).\u0275mod=b.Hb({type:s}),s.\u0275inj=b.Gb({factory:function(n){return new(n||s)},imports:[[i.c.forChild(p)],i.c]}),s),u=((c=function n(){_classCallCheck(this,n)}).\u0275mod=b.Hb({type:c}),c.\u0275inj=b.Gb({factory:function(n){return new(n||c)},imports:[[r.b,h,o.d]]}),c)}}]);