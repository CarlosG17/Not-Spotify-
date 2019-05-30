/* global $ */

var baseURL = "https://ws.audioscrobbler.com/2.0/";

var songApiMethod =  "?method=track.search&track=";
var artistApiMethod = "?method=artist.gettoptracks&artist=";

var adamApi = "https://youtube-cn.herokuapp.com/search?q="

var apiKey = "&api_key=7424bc8327fbe32ea30c48abefd6ebff&format=json";


 $('#search-button').click(function() {
    var searchTerm = $("#search-term").val();
    
    
    
    // var apiRequestURL = baseURL + songApiMethod + searchTerm + apiKey;
    var apiRequestURL = adamApi +  searchTerm;
    
    // console.log(apiRequestURL);
    
    
    $.ajax({
      url: apiRequestURL,
      method: "GET",
      success: function(response) {
        console.log(response[0].embed_url);
        // var music = response.results.trackmatches.track[0].url
         $("#some-text").html('<iframe id="player" type="text/html" width="640" height="390" src=' + response[0].embed_url + 'frameborder="0"></iframe>');
          
        // console.log(music);
        // var artist= response.results.trackmatches.track[]
      },
    }); 
});


//test

$('#artist-button').click(function() {
 var artistButton = $("#artist").val();
    
    
    
 // var apiRequestURL = baseURL + songApiMethod + searchTerm + apiKey;
 var apiRequestURL = adamApi +  artistButton
    
 // console.log(apiRequestURL);
    
    
 $.ajax({
   url: apiRequestURL,
   method: "GET",
   success: function(response) {
     console.log(response[0].embed_url);
     // var music = response.results.trackmatches.track[0].url
      $("#some-text").html('<iframe id="player" type="text/html" width="640" height="390" src=' + response[0].embed_url + 'frameborder="0"></iframe>');
          
     // console.log(music);
     // var artist= response.results.trackmatches.track[]
   },
 }); 


//test


$("#artist").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#artist-button").click();
    }
});

$("#search-term").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#search-button").click();
    }
});