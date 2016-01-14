// (function (){

//   "use strict"; 
//   angular.module("app",["ui.bootstrap","ngAnimate"]).controller("mainSearchCtrl", function($scope,$http) {


//       $scope.setup = function(){
//       $http.get("/api/v1/autos.json").then(function(response){
//       $scope.autoMakers = response.data;
//       });
//     }


//       $scope.makeDescription = "Select a Make";
//       $scope.modelDescription = "Select a Model";
//       $scope.searchDetails = []; 
//       // $scope.searchList = [];
//       // $scope.searchDetailsIndex = [];


//       function return_index_of_car_make(car_make,car_array){
//         if(car_array.length < 1){
//           console.log("the array is empty")
//           return null;
//         } 
//         else {
//           for(var i = 0;i < car_array.length;i++ ){
//             if(car_make === car_array[i].make){
//               return i;
//             }
//           }
          
//           return null;
//         }
//       }

//       function add_new_car(car_make,car_array){
//         if(return_index_of_car_make(car_make,car_array) || return_index_of_car_make(car_make,car_array) == 0){
//         } 
//         else {
//             console.log("the array was empty but now adding stuff")
//             car_array.push({
//             make: car_make,
//             model: null,
//             year: null
//           });
//             console.log(car_array[0])
//         }
//       }

//       function delete_existing_car(car_make,car_array){
//         car_array.splice(return_index_of_car_make(car_make,car_array),1);
//       }


//       $scope.tabUnlock = function(make){
//         add_new_car(make, $scope.searchDetails)
//         // console.log(make);
//         // $scope.modelNames = [];
//          // $scope.autoYears = [];
//         for(var i = 0; i < $scope.autoMakers.length; i++){
//             var mymake = $scope.autoMakers[i];
//             if(mymake.make_name === make){
            
//         //     if($scope.searchDetailsIndex.indexOf(index) === -1){
//         //       $scope.searchList.push(make); 
//         //       $scope.searchDetailsIndex.push(index);
//         //     }  else {
//         //       var myIndex = $scope.searchDetailsIndex.indexOf(index);
//         //       $scope.searchList.splice(myIndex, 1);
//         //       $scope.searchDetailsIndex.splice(myIndex,1); 
//         //     }
//         //       // console.log(mymake.auto_details.auto_models);
//         //       console.log($scope.searchList);

              
//               $scope.makeDescription = mymake.make_description;
//               // console.log($scope.makesDescription);
//               $scope.models = mymake.auto_details.auto_models;
//               for(var j = 0; j < $scope.models.length; j++){
//                  $scope.modelNames.push($scope.models[j].model_name); 
//                   // console.log($scope.modelNames);
//               }
//             }
//           }
        
//         // var currentYear = new Date().getFullYear();
        
//         // console.log(currentYear);
        
//         // for(var i = 1980;i < currentYear; i++){
//         //   $scope.autoYears[i-1980] = i;
//         // }

//         // console.log($scope.autoYears);
        
       


//     window.$scope = $scope;
  

//   });
// }());