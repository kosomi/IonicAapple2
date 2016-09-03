angular.module('starter.ProfileCtrl', []) 

.controller('ProfileCtrl', function($scope, $location) {   

    $scope.ctrlData = { 
      newPhrase : {"name" : ""}
    };

    $scope.ctrlImage = { 
      newPhrase : {"name" : ""}
    };

    $scope.randomeII = function(){
        var run = Math.floor((Math.random()*50)); 
        $scope.ctrlImage.splice(0, 1);
        $scope.ctrlImage.splice(0, 1);
        var phraseToAdd = ''; 
            phraseToAdd = run; 
        $scope.ctrlImage.push(phraseToAdd);
        localStorage.setItem('ctrlImage', JSON.stringify($scope.ctrlImage)); 
    };

    //Add data to localStorage 
    $scope.addData = function(){ 
        if(!$scope.ctrlData.newPhrase.name){
            return false;
        } else {
            $scope.storedData.splice(0, 1);
            $scope.storedData.splice(0, 1);
            var phraseToAdd = ''; 
                phraseToAdd = $scope.ctrlData.newPhrase.name; 
            $scope.storedData.push(phraseToAdd);
            $scope.ctrlData.newPhrase.name = '';
            localStorage.setItem('storedData', JSON.stringify($scope.storedData));  
            location.reload();
        }
    };

    //Add Image to localStorage 
    $scope.addImage = function() {
        console.log('addImage: ' );
        $scope.ctrlImage.splice(0, 1);
        $scope.ctrlImage.splice(0, 1);
        var phraseToAdd = ''; 
            phraseToAdd = $scope.ctrlImage.newPhrase.name; 
        $scope.ctrlImage.push(phraseToAdd);
        localStorage.setItem('ctrlImage', JSON.stringify($scope.ctrlImage));
        $scope.ctrlImage.newPhrase.name = '';
    };

    //Add data from localStorage 
    $scope.removeData = function(index) {
        $scope.storedData.splice(index, 1);
        localStorage.setItem('storedData', JSON.stringify($scope.storedData));
    };

    //Add Image from localStorage 
    $scope.removeImage = function(index) {
        $scope.ctrlImage.splice(index, 1);
        localStorage.setItem('ctrlImage', JSON.stringify($scope.ctrlImage));
    }; 

    $scope.$on('$ionicView.enter', function() {
        $scope.storedData = JSON.parse(localStorage.getItem('storedData')) || [];
        $scope.ctrlImage = JSON.parse(localStorage.getItem('ctrlImage')) || [];

        //Count timesVisited
        $scope.timesVisited = localStorage.getItem('timesVisited') || 0;
        $scope.timesVisited++;
        localStorage.setItem('timesVisited', $scope.timesVisited);
    });  
});