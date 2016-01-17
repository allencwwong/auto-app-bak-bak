(function () {
  angular.module("app.controllers").controller("listingCreateCtrl", function($scope,$http) {

    // =====naming convention====== 
    //  $scope or var camel case
    //  function snake case

    var makeList = <%= raw @make_list %>

    // get all make from ruby controller
    $scope.autoMakers = makeList;

    // get all model from ruby controller
    $scope.autoModels = "";

    //store makes and models into javascript array

    // store all selected data into an object save object into database

  }); // end of controller
})(); //end of self invoke 