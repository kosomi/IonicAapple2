angular.module('starter.controllers', [])

.controller('AppCtrl', function( ) { 
}) 

.controller('PlaylistsCtrl', function($scope, tasks, $cordovaGeolocation) {     

    $scope.nickName = tasks.nickName;

// Nickname

    $scope.tasks = tasks.itens; // initial DB

    $scope.items = tasks.getAllThreads();	// the DB will be added. 

////// GeoLocation my location starts /////////////////////////// 

    $scope.threads = tasks.getAllThreads();	// DB for geolocaiton

    var threads = $scope.threads;  
 
    var distance = function(thread){

    var posOptions = {timeout: 10000, enableHighAccuracy: false};
  
    $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function (position) {
            $scope.lat  = position.coords.latitude;
            $scope.long = position.coords.longitude;       

        var earthRadiusInKm    = 6371;
        var earthRadiusInMiles = 3959; 

        var lat = thread.lat - $scope.lat; // Difference of latitude
        var long = thread.lng - $scope.long; // Difference of longitud  

        // Vertical distance
        var disLat = (lat * Math.PI * earthRadiusInMiles) / 180;

        // Horizontal distance
        var disLon = (long * Math.PI * earthRadiusInMiles) / 180;

        // Total distance (calculated by Pythagore: a^2 + b^2 = c^2)
        var calculation = Math.sqrt(Math.pow(disLat, 2) + Math.pow(disLon, 2)); 

        thread.dist   = (calculation).toFixed(2);   

        console.log(111);
        console.log(112);

        }, function(error) { 
          console.log('Your Geolocation is messed up!')
        });    
	};  

        console.log('thanks');
     
    angular.forEach($scope.items, function(thread) {  
            distance('111'); 
            console.log(thread)
        });
     

////// GeoLocation my location Ends //////////////////////////////



////// Infinity Scroll Ends //////////////////////////////////////////////

    var currentStart = 2;
    

    
    $scope.maxItems = function(){
        return ($scope.tasks.length <= $scope.items.length)? true : false; 
    };
    
    $scope.refreshList = function(){
        tasks.refresh();
        $scope.$broadcast('scroll.refreshComplete'); 
    };

    var num = 0;

    $scope.addItems = function (){ 

        tasks.add( $scope.items[num] ); 
        if($scope.items[num+1]){
           tasks.add( $scope.items[num+1] );  
        }     
        if($scope.items[num+2]){
           tasks.add( $scope.items[num+2] );  
        }    
        if($scope.items[num+3]){
           tasks.add( $scope.items[num+3] );  
        }    
        if($scope.items[num+4]){
           tasks.add( $scope.items[num+4] );  
        }    
        if($scope.items[num+5]){
           tasks.add( $scope.items[num+5] );  
        }    
        if($scope.items[num+6]){
           tasks.add( $scope.items[num+6] );   
        } else {
            tasks.add( {
                      "title": "Finished! No more item!!"
                    })
        }       
        num += 7;
        $scope.$broadcast('scroll.infiniteScrollComplete');
    };  
 
////// Infinity Scroll Ends //////////////////////////////////////////////

////// Search Begins //////////////////////////////////////////////

    var options = {
		caseSensitive: false,
		includeScore: false,
		shouldSort: true,
		threshold: 0,
		location: 0,
		distance: 100,
		maxPatternLength: 32,
		keys: ["title"]
    };

	var books = [];
	books =  tasks.items;

	var fuse = new Fuse(books, options);

	$scope.searchText = {};
	//$scope.searchText.text = "1234";

	$scope.$watch('searchText.text', searchChange);

	function searchChange() {
		if($scope.searchText.text){
			var result = fuse.search($scope.searchText.text); 
			$scope.booktitles =  result;
		}
		else {
			$scope.booktitles =  tasks.itens;         
		}
	}

// $scope.playlists => searchChange(input) => $scope.booktitles;

////// Search Ends //////////////////////////////////////////////
 


})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
