(function () {
      "use strict"; 
  angular.module("app.controllers").controller("searchByMakeCtrl", function($scope,$http,$window) {

    // =====naming convention====== 
    //  $scope or var camel case
    //  function snake case
    $scope.allen = "allen cw wong";

    $scope.getResults = function(make){
      console.log(make)
      var search = {maker: make};
      $http.post("/api/v1/autos/searchByMake.json", search).then(function(response){
        $scope.searchResults = [];
        $scope.searchResults = response.data;
        //$window.location.href = 'http://localhost:3000/autos/search-results';  
        $scope.initialize();
        store_returned_data($scope.searchResults);
        $scope.initialize();
        console.log($scope.hide);
        console.log($scope.searchResults);

      });
    }

        
    var listingIds = [];
    var listingTitles = [];
    var listing_zip = [];
    var listing_details = [];
    var listing_photos_url = [];
    var lat = [];
    var lng = [];
    var listingIds = [];
    function store_returned_data(){

      for(var i =0;i<$scope.searchResults.length;i++){
         listingIds[i] = $scope.searchResults[i].id;
         listing_zip[i] = $scope.searchResults[i].zip_code;
         lat[i] = $scope.searchResults[i].lat;
         lng[i] = $scope.searchResults[i].lng;
         listingTitles[i] = $scope.searchResults[i].auto_maker + " " + $scope.searchResults[i].auto_model;
         listing_details[i] = listingTitles[i];
         listing_photos_url[i] = "0";
      }
    }

    $scope.initialize = function() {



    var markers = new Array();

    var mapOptions = {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(1, 1)
    };

    // var locations = [
    //     [new google.maps.LatLng(0, 0), 'Marker 1', 'Infowindow content for Marker 1'],
    //     [new google.maps.LatLng(0, 1), 'Marker 2', 'Infowindow content for Marker 2'],
    //     [new google.maps.LatLng(0, 2), 'Marker 3', 'Infowindow content for Marker 3'],
    //     [new google.maps.LatLng(1, 0), 'Marker 4', 'Infowindow content for Marker 4'],
    //     [new google.maps.LatLng(1, 1), 'Marker 5', 'Infowindow content for Marker 5'],
    //     [new google.maps.LatLng(1, 2), 'Marker 6', 'Infowindow content for Marker 6']
    // ];

    //  console.log(locations[0][0]);
    //  console.log(locations[0][1]);
    //  console.log(locations[0][2]);

    var locations = [];
    
    // var listingLatLng = <%= @alisting_coordinates %>;
    // var listingTitles = <%= raw @listing_titles %>;

    //var lisintgDetails = <%= raw @listing_titles %>;
    // var listingIds = <%= @listing_ids %>

    // console.log(allLatLng);
    // var lat = <%= @listing_lat %>;
    // var lng = <%= @listing_lng %>;

    // var listing_photos_url = <%= raw @listing_photos_url %>;
    // var listing_zip = <%= raw @listing_details %>;
    //console.log(listing_photos_url);

    for(var i = 0; i < listingTitles.length; i++){
    
    var displayListingTitle = "<img src='" + listing_photos_url[i] + "'><h1>" + listingTitles[i] + "</h1><br><p>" + listing_zip[i] + "</p>";

      
    var displaylistingDetail = "<a class='listingDetails' href='autos/" + listingIds[i] + "'/><h1>" + listingTitles[i] + "</h1></a>";  

    locations[i] = [new google.maps.LatLng({lat:lat[i],lng:lng[i]}), displayListingTitle , displaylistingDetail]; 
    }


 // ############ CREATE MARKER ###############  

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var infowindow = new google.maps.InfoWindow();

    for (var i = 0; i < locations.length; i++) {

        // Append a link to the markers DIV for each marker
        $('#markers').append('<tr><td><a class="marker-link" data-markerid="' + i + '" href="autos/' + listingIds[i] + '">' + locations[i][1] + '</a></td></tr> ');

        // select #markers add <tr><td><a class="marker-link" data-markerid=i" href="autos">location</a></td></tr>


        var marker = new google.maps.Marker({
            position: locations[i][0],
            center: locations[i][0],
            map: map,
            title: locations[i][1],
        });
          console.log("maker created!");

        // Register a click event listener on the marker to display the corresponding infowindow content
        google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {

            return function () {
                infowindow.setContent(locations[i][2]);
                infowindow.open(map, marker);
                console.log("clicked marker")
            }

        })(marker, i));

        // Add marker to markers array
        markers.push(marker);
    }

    // Trigger a click event on each marker when the corresponding marker link is clicked
    $('.marker-link').on('mouseover', function () {

        google.maps.event.trigger(markers[$(this).data('markerid')], 'mouseover');
        console.log("clicked")
    });

}



        window.$scope = $scope;
  

  });
})();    