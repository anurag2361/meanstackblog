blogapp.factory('BlogService',function BlogFactory($http){
    
    var blogs={};
    var baseUrl='http://localhost:5000/blogs';

    blogs.getBlogs=function(){
        return $http({
            method:'GET',
            url:baseUrl+'/'
        })
    }

    blogs.createBlog=function(blogData){
        return $http.post(baseUrl+'/add',blogData)
    }

    blogs.editBlog=function(blogId,blogData){
        return $http.put(baseUrl+'/'+blogId+'/edit',blogData)
    }

    blogs.deleteBlog=function(blogId){
        return $http.post(baseUrl+'/'+blogId+'/remove',null);
    }

    return blogs;
});