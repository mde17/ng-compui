webpackJsonp([1],[,function(t,n,e){"use strict";var a=e(0);a.module("app").run(["$templateCache",function(t){t.put("app/footer.html",'<footer class="footer">\n  Build with ♥ by the&nbsp;\n  <a href="https://github.com/orgs/FountainJS/people">\n    FountainJS team\n  </a>\n</footer>\n'),t.put("app/header.html",'<header class="header">\n  <p class="header-title">\n    <a href="https://github.com/FountainJS/generator-fountain-webapp" target="_blank">\n      Fountain Generator\n    </a>\n  </p>\n  <p class="header-date">\n    Generated with FountainJS v0.6.0 on Fri Aug 05 2016 11:15:42 GMT+0800 (PHT)\n  </p>\n</header>\n'),t.put("app/main.html",'<div class="main-container">\n  <fountain-header></fountain-header>\n  <main class="main">\n    <fountain-title></fountain-title>\n    <fountain-techs></fountain-techs>\n  </main>\n  <fountain-footer></fountain-footer>\n</div>\n'),t.put("app/title.html",'<div class="title">\n  <h1 class="title-h1">\'Allo, \'Allo!</h1>\n  <div>\n    <img class="title-logo" src="http://fountainjs.io/assets/imgs/yeoman.png">\n    <img class="title-logo" src="http://fountainjs.io/assets/imgs/fountain.png">\n  </div>\n  <h2 class="title-h2">Always a pleasure scaffolding your apps.</h2>\n</div>\n'),t.put("app/techs/tech.html",'<div class="tech">\n  <img class="tech-logo" ng-src="{{ $ctrl.tech.logo }}">\n  <h3 class="tech-h3">\n    {{ $ctrl.tech.title }}\n  </h3>\n  <p>{{ $ctrl.tech.text1 }}</p>\n  <p>{{ $ctrl.tech.text2 }}</p>\n</div>\n'),t.put("app/techs/techs.html",'<div class="techs-container">\n  <h2 class="techs-h2">\n    Cooked with all these awesome technologies:\n  </h2>\n  <div class="techs">\n    <fountain-tech ng-repeat="tech in $ctrl.techs" tech="tech"></fountain-tech>\n  </div>\n</div>\n')}])},function(t,n,e){"use strict";var a=e(0),o=e(8),i=e(7),s=e(6),c=e(11),h=e(5);e(4),a.module("app",[o.techsModule]).component("app",i.main).component("fountainHeader",s.header).component("fountainTitle",c.title).component("fountainFooter",h.footer)},,function(t,n){},function(t,n){"use strict";n.footer={templateUrl:"app/footer.html"}},function(t,n){"use strict";n.header={templateUrl:"app/header.html"}},function(t,n){"use strict";n.main={templateUrl:"app/main.html"}},function(t,n,e){"use strict";var a=e(0),o=e(9),i=e(10);n.techsModule="techs",a.module(n.techsModule,[]).component("fountainTech",o.tech).component("fountainTechs",i.techs)},function(t,n){"use strict";n.tech={templateUrl:"app/techs/tech.html",bindings:{tech:"<"}}},function(t,n){"use strict";var e=(function(){function t(t,n,e,a){this.logo=t,this.title=n,this.text1=e,this.text2=a}return t}(),function(){function t(t){var n=this;this.$http=t,t.get("app/techs/techs.json").then(function(t){n.techs=t.data})}return t.$inject=["$http"],t}());n.techs={templateUrl:"app/techs/techs.html",controller:e}},function(t,n){"use strict";n.title={templateUrl:"app/title.html"}},function(t,n,e){e(2),t.exports=e(1)}],[12]);