
var baseURL = "https://ws.audioscrobbler.com/2.0/";
var apiMethod =  "?method=track.search&track=";
var apiKey = "&api_key=7424bc8327fbe32ea30c48abefd6ebff&format=json";


 $('#search-button').click(function() {
    var searchTerm = $("#search-term").val();
    
    
    
    var apiRequestURL = baseURL + apiMethod + searchTerm + apiKey;
    
    // console.log(apiRequestURL);
    
    
    $.ajax({
      url: apiRequestURL,
      method: "GET",
      success: function(response) {
        var music = response.results.trackmatches.track[0].url
        $("#some-text").text(music);
          console.log(music);
          
      },
    }); 
});