$(function(){

  var gifData = {};
  var giffy = {};
  var userInput = 0;

  $("#getGif").on("click", function(){
    getUserInput();
    getTheGif(); 
  });

  function getTheGif(){
    $.get('http://api.giphy.com/v1/gifs/search?q='+ userInput + '&api_key=dc6zaTOxFJmzC').done(function(response){
      console.log(response);
      giffy = response;
      beginProcessinggiffy();
      $('<img src="'+ giffy.data[0].embed_url +'">').load(function() {
      $(this).appendTo('#img');
      });
    })
    //   $.ajax({
    //   url: 'http://api.giphy.com/v1/gifs/search?q='+ userInput + '&api_key=dc6zaTOxFJmzC',
    //   type: 'GET'
    // }).done(function(response){
    //   console.log(response);
    //   giffy = response;
    //   beginProcessinggiffy();
    // })

  }

  function beginProcessinggiffy(){
    $("body").append("<p> " + giffy.data[0].bitly_url + "</p>");
  }
  function getUserInput(){
    userInput = $("#theInput").val();
    $("#theInput").val("userInput");
    return (userInput);
  }


})