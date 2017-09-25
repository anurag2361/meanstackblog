blogapp.controller('mainController', ['$http', 'BlogService', function ($http, BlogService) {

    var main = this;
    this.heading = 'Simple Blog in MEAN Stack.'

    this.allBlogs = [];
    console.log(this.allBlogs);

    this.baseUrl = 'http://localhost:5000/blogs';

    this.showAllBlogs = function () {
        BlogService.getBlogs().then(function successCallback(response) {
            console.log(response);
            main.allBlogs = response.data;
            console.log(main.allBlogs);
        }, function errorCallback(response) {
            alert("Some Error Occured. Check Console");
            console.log(response);
        });
    }

    this.deleteBlog = function (blogId, index) {
        var myData = {};
        console.log(index);

        console.log("Length Before Deleting a blog " + main.allBlogs.length);
        BlogService.deleteBlog(blogId).then(function successCallback(response) {
            alert('Blog Deleted');

            main.allBlogs.splice(index, 1);
            console.log("Length After Deleting a blog " + main.allBlogs.length);

        }, function errorCallback(response) {
            alert("Some Error Occured");
            console.log(response);
        });
    }


}])