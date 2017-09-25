blogapp.controller('createController',['$http','$location',function($http,$location){

    var main=this;

    this.heading='Create A Post';
    this.baseUrl='http://localhost:5000';

    this.createPost=function(){
        var myData={
            title:main.title,
            bodyHtml:main.bodyHtml,
            author:main.author
        }

        console.log(myData);
        $http({
            method:'POST',
            data:myData,
            url:main.baseUrl+'/add'
        }).then(function successCallback(response){
            alert("Blog Created");
            $location.path('/');
        },function errorCallback(response){
            alert("Some Error");
            console.log(response);
        });
    }
}]);