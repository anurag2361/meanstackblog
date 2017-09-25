blogapp.controller('singleBlogController', ['$http', '$routeParams', function ($http, $routeParams) {

    var main = this;

    this.title = '';


    this.blogId = $routeParams.blogId;
    console.log("Blog ID= " + this.blogId);

    this.baseUrl = 'http://localhost:5000/blogs/';
    this.loadSingleBlog = function () {
        $http({
            method: 'GET',
            url: main.baseUrl+main.blogId
        }).then(function successCallback(response) {
            main.blog = response.data;
            console.log(main.blog);

            main.title = main.blog.title;
        }, function errorCallback(response) {
            alert("Some Error. Check Console.");
            console.log(response);
        });
    }
}]);