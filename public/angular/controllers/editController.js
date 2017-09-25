blogapp.controller('editController', ['$http', '$routeParams', '$location', function ($http, $routeParams, $location) {

    var main = this;

    this.title = 'Simple Blog in MEAN Stack.'
    this.baseUrl = 'http://localhost:5000/blogs';

    this.blogId = $routeParams.blogId;
    console.log('Blog Id= ' + this.blogId);

    this.getCurrentPost = function () {
        $http({
            method: 'GET',
            url: main.baseUrl + '/' + main.blogId
        }).then(function succesCallback(response) {
            main.blog = response.data.data;
            console.log(main.blog);

            main.title = main.blog.title;
        }, function errorCallback(response) {
            alert("Some Error Occured. Check Console.");
            console.log(response);
        });
    }

    this.editPost = function (blogId) {
        var myData = {
            title: main.blog.title,
            bodyHtml: main.blog.bodyHtml,
            author: main.blog.author
        }

        console.log("Blog Data= " + myData);
        $http({
            method: 'PUT',
            data: myData,
            url: main.baseUrl + '/' + blogId + '/edit'
        }).then(function succesCallback(response) {
            alert("Blog Edited");
            console.log(response.data);
            $location.path('/blogs/' + blogId);
        }, function errorCallback(response) {
            alert("Some Error Occurred. Check The Console.");
            console.log(response);
        });
    }
}]);