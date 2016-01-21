(function (){

  "use strict"; 
  //  angular.module("app", []).controller((){});
  //  }());

//

    // =====naming convention====== 
    //  $scope or var camel case
    //  function snake case

  angular.module("app.controllers").controller("listingNewCtrl", function($scope,$http,$window) {

      $scope.setup = function(){
      $http.get("/api/v1/autos.json").then(function(response){
      $scope.autoCollections = response.data;
      });

      $http.get("/api/v1/autos/new.json").then(function(response){
      $scope.autoMakeByModels = response.data;
      });

      create_auto_years(1980);
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
    $scope.selectedCondition = {value: ''};
    $scope.selectedEngine = {value: ''};
    $scope.selectedTransmission = {transmission: ''};
    $scope.selectedYear = {value: ''};
    $scope.selectedVin = {value: ''};
    $scope.selectedOdometer = {value: ''};
    $scope.selectedDrive = {value: ''};
    $scope.selectedFuel = {value: ''};
    $scope.selectedMpg = {value: ''};
    $scope.selectedInterior_color = {value: ''};
    $scope.selectedExterior_color = {value: ''};
    $scope.selectedTitle = {value: ''};
    $scope.selectedStyle = {value: ''};
    $scope.selectedPackages = {value: ''};
    $scope.selectedDoors = {value: ''};
    $scope.selectedFeatures = {value: ''};
    $scope.selectedOptions = {value: ''};
    $scope.inputZip = {value: ''};
    $scope.inputAddress = {value: ''};

    $scope.featureSelection = {
      values: {}
    }
    $scope.optionSelection = {
      values: {}
    };

    // auto details 
    
    //condition
    $scope.autoConditions = ["New","Excellent","Great","Good","Fair","Salvage"];
    $scope.autoTitles=["Clean","Salvage"];
    
    //spec details
    $scope.autoEngines = ["3 Cylinder","4 Cylinder","5 Cylinder","6 Cylinder (I-6 vs. v-6)","8 Cylinder", "Electric","Hybrid","Rotary Engine"];
    $scope.autoDrives = ["AWD/4WD","Front Wheel","Drive Rear Wheel Drive"];
    $scope.autoTransmissions = [
                                {transmission: "Automatic", speed:["4","5","6","7","8","9","10"]},
                                {transmission: "CVT"},
                                {transmission: "Dual Clutch"},
                                {transmission: "SMG"},
                                {transmission: "Manual", speed:["5","6","7"]},
                              ];

    $scope.autoFuels =["Gasonline","Hybrid","Electric","Diesel","Alternative"];
    $scope.autoMpgs =["40+ MPG","31 - 40 MPG","21 - 30 MPG","10 - 20 MPG"];
    
    //deisgn
    $scope.autoDoors = ["2 Door","3 Door","4 Door","5 Door","6 Door"];
    $scope.autoStyles = ["Convertiable","Couple","Sedan","SUV/Cross Over","Truck","Wagon","Van/Minivan","Hatchback","Commerical"];
    $scope.autoInteriorColors = [];
    $scope.autoExteriorColors=[];

    //options
    $scope.autoPackages = ["Premium","Comfort","Driver assistance","luxury","Technology","Sport","Cold weather","Ultimate","Lighting"];
    $scope.autoOptions = ["Sport Seat","Lock lug nuts","Navigation","Active cruise control","Rear sunshine","Rear seat entertainment",{Options: "Wheel Size", Size:[]}];
    $scope.autoFeatures = ["3rd Row Seats","Backup Camera","Bluetooth, Hands-Free","CD Player","Cruise Control","Disability Equipped","DVD Player","Heated Seats","Keyless Entry","Leather Seats","Lift Kit","Multi-zone Climate Control","Navigation","Portable Audio Connection","Power Locks","Power Windows"," Premium Audio","Premium Wheels","Security System","Steering Wheel Controls","Sunroof","Trailer Hitch"];

    $scope.autoYears = [];
    $scope.modelSelection = true;
    //console.log($scope.autoCollections);

    $scope.showTransAuto = function(){
      if($scope.selectedTransmission.transmission.transmission == 'Automatic'){
        return true;
      }
    }

    $scope.makeChange = function(){

      $scope.modelSelection = false;

    }

 
  // get city and state by zip


    $scope.$watch('inputZip.value.length', function(newInput,oldInput){
      if(newInput == 5 && $scope.inputAddress.value != '' ){
        //alert("working!");

        console.log("inside watch get geocode!")
      $http.get('http://maps.googleapis.com/maps/api/geocode/json?address='+$scope.inputAddress+"+"+$scope.inputZip.value+'&sensor=true').then(function (response) {
      $scope.geocodingResults = response.data;
      
      console.log($scope.geocodingResults);
      //console.log($scope.geocodeResults.results.[0].geometry);
      //console.log($scope.selectedEngine.value);
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

      var div = document.getElementById('div-user');
      $scope.currentUser = {id: div.getAttribute("data-item-current")};

      $scope.addListing = function(){
        var newListing = {
          id: $scope.currentUser.id,
          auto_maker: $scope.selectedMake.value,
          auto_model: '',
          address: $scope.inputAddress.value,
          zip_code: $scope.inputZip.value,
          state: $scope.geocodingResults.results[0].address_components[2].long_name,
          city: $scope.geocodingResults.results[0].address_components[1].long_name,
          lat: $scope.geocodingResults.results[0].geometry.location.lat,
          lng: $scope.geocodingResults.results[0].geometry.location.lng,
          engine: $scope.selectedEngine.value,
          year: $scope.selectedYear.value,
          vin: $scope.selectedVin.value,
          odometer: $scope.selectedOdometer.value,
          condition: $scope.selectedCondition.value, 
          engine: $scope.selectedEngine.value,
          drive: $scope.selectedDrive.value,
          fuel: $scope.selectedFuel.value,
          mpg: $scope.selectedMpg.value,
          interior_color: $scope.selectedInterior_color.value,
          exterior_color: $scope.selectedExterior_color.value,
          title: $scope.selectedTitle.value,
          transmission: $scope.selectedTransmission.value,
          style: $scope.selectedStyle.value,
          packages:$scope.selectedPackages.value,
          doors: $scope.selectedDoors.value,
          features: $scope.selectedFeatures.value,
          options: $scope.selectedOptions.value,
          status: "active"
        };
        console.log(newListing);
        $http.post('/api/v1/autos.json', newListing).then(function(response){
        console.log("saved!!")
        });
        $window.location.href = '/members';  
      }

      // $scope.getLatLng = function(){
      //   $http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+ $scope.'+' $scope.inputZip.value'&key=AIzaSyB_uSXhQhTSC6e5vN0lRYqsMkosb5yrIdM').then(function(response){
      //   $scope.geocodeResults = response.data;
      //   });
      // }

//'https://maps.googleapis.com/maps/api/geocode/json?address='+ {{address}} + '&key=AIzaSyB_uSXhQhTSC6e5vN0lRYqsMkosb5yrIdM'

        window.$scope = $scope;
  

  });
})();