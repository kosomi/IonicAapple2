angular.module('starter.SearchCtrl', []) 

.controller('SearchCtrl', function($scope, tasks, $location, $cordovaGeolocation) {     

    $scope.threads 		= tasks.getAllThreads(); 

    $scope.time12 		= 111; 

	$scope.logout = function(){        
	    //Todo: actually log out;
	    $location.path('login');
	}

    $scope.addThread = function(){  

    	console.log('newThreadTitle' + $scope.newThreadTitle);
    	console.log('Text12' + $scope.Text12);
    	console.log('OriginUser' + $scope.OriginUser);
    	console.log('time12' + $scope.time12);



        var newThread = { 
            title: $scope.newThreadTitle, 
            Text12: $scope.Text12, 
            username: $scope.OriginUser, 
            time12: $scope.time12,
            comments: [] 
        }; 

        $scope.threads.$add(newThread); 

        $scope.newThreadTitle = ''; //Clear the text in the input box 
        $scope.Text12 = ''; //Clear the text in the input box 
        $scope.OriginUser = ''; //Clear the text in the input box 
    }   
 

}) 