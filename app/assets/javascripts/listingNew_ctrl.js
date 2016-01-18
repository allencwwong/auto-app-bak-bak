(function (){

  "use strict"; 
  //  angular.module("app", []).controller((){});
  //  }());

//

    // =====naming convention====== 
    //  $scope or var camel case
    //  function snake case

  angular.module("app.controllers").controller("listingNewCtrl", function($scope,$http) {

      $scope.setup = function(){
      $http.get("/api/v1/autos.json").then(function(response){
      $scope.autoCollections = response.data;
      });

      $http.get("/api/v1/autos/new.json").then(function(response){
      $scope.autoMakeByModels = response.data;
      });
    }

    //autoCollections
    /* 

    [{
      make_name: Acura,
      make_description: desc,
      auto_details:{auto_model:[{id:1,model_name:tsx},{id:2,model_name:mdx}]
        },{
      },{
  
      }
    }]

    */

    $scope.selectedMake = {value: ''};
    $scope.inputZip = {value: ''};
    $scope.inputAddress = {value: ''};


    $scope.autoYears = [];
    $scope.modelSelection = true;
    //console.log($scope.autoCollections);

    $scope.makeChange = function(){

      $scope.modelSelection = false;

    }

 
  // get city and state by zip


    $scope.$watch('inputZip.value.length', function(newInput,oldInput){
      if(newInput == 5){
        //alert("working!");

    
      $http.get('http://maps.googleapis.com/maps/api/geocode/json?address='+$scope.inputZip.value+'&sensor=true').then(function (response) {
      $scope.zipResults = response.data;
      console.log($scope.selectedMake.value);
  });
      }
    });

    function get_make_models(make){ 
      $scope.modelByMake = []; 
      for(var i=0;i<$scope.autoCollections.length;i++){
          console.log(make);
          //console.log($scope.autoCollections[0].make_name);
          if($scope.autoCollections[i].make_name === make){
            //var modelArrayLength = $scope.autoCollections[i].auto_details.auto_models.length;
            //var modelArrayLength = 3;
            //console.log(modelArrayLength);
            console.log($scope.autoCollections[i]);
            //console.log($scope.autoCollections[0].auto_details.auto_models[0].model_name);
            for(var j=0;j<$scope.autoCollections[i].auto_details.auto_models.length;j++){
              $scope.autoModels.push($scope.autoCollections[i].auto_details.auto_models[j].model_name);
            }
          }

        } 
      console.log($scope.autoModels);
        
      } // end of get make path

      function create_auto_years(start_year){
        var currentYear = new Date().getFullYear();
        for(var i=start_year;i<currentYear;i++){
          $scope.autoYears.push(i);
          //console.log(i);
        }
        //console.log("gen years!");
        //console.log($scope.autoYears);
      }

      create_auto_years(1980);

      $scope.addListing = function(){
        var newListing = {
          auto_maker: $scope.selectedMake.value,
          auto_model: '',
          zip_code: $scope.inputZip.value,
          address: $scope.inputAddress.value,
          state: $scope.zipResults.results[0].address_components[1].long_name,
          city: $scope.zipResults.results[0].address_components[3].long_name
        };
        $http.post('/api/v1/autos.json', newListing).then(function(response){
        console.log("saving!")  
        });
      }


        window.$scope = $scope;
  

  });
})();