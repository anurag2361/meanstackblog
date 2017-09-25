blogapp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'angular/views/indexview.html',
            controller: 'mainController',
            controllerAs: 'newBlog'
        })

        .when('/blogs', {
            templateUrl: 'angular/views/indexview.html',
            controller: 'mainController',
            controllerAs: 'newBlog'
        })

        .when('/add', {
            templateUrl: 'angular/views/create.html',
            controller: 'createController',
            controllerAs: 'createBlog'
        })

        .when('/blogs/:blogId', {
            templateUrl: 'angular/views/singleblog.html',
            controller: 'singleBlogController',
            controllerAs: 'currentBlog'
        })

        .when('/blogs/:blogId/edit', {
            templateUrl: 'angular/views/edit.html',
            controller: 'editController',
            controllerAs: 'editBlog'
        })

        .otherwise(
        {
            template: '<h1>Page Not Found</h1>'
        }
        );
}]);