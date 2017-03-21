//路径服务
angular.module('myapp').provider('basePath', function () {
   var path='/envisionWeb3.0/app/';
    this.routerTemplatePath=path+'routerTemplate/';
    this.$get = function () {
        return {
            directiveTemplatePath: path+'directiveTemplate/',
            path:path,
            imgPath:path+'assets/img/'
        };
    };
});
