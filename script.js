/**
// test alert
$(document).ready(function(){
  alert("hi");

});
**/

$(document).ready(function(){
  sessionTime();
  breakTime();
  timer();

  //testClick();
});


/**
function testClick(){
  $('#sessionUp').click(function(){
    alert("hi");

  });

}
**/


var myInterval = null;


function timer(){
  $("#timerStart").click(
    function(){
        var sessionDuration = $("#sessionCounter").html();

      var myInterval = setInterval(function(){
          sessionDuration --;
          $("#timerText").html(sessionDuration);
          //alert(sessionDuration);

          if(sessionDuration === 0){
            alert("Your time is up!");
            clearInterval(myInterval);
          }

            $("#timerReset").click(function(){
              //alert("test");
              clearInterval(myInterval);
              $("#timerText").html(sessionDuration + " Stopped");
            });


  },1000);

  }
  )};




















function sessionTime(){
  $("#sessionUp").click(
    function(){
    //  alert("hi");
      var count = $("#sessionCounter").html();

    //  alert(count);
      var countInt = parseInt(count);
    countInt++;
    //alert(countInt);
      var displayCount = countInt.toString();
     $("#sessionCounter").html(displayCount);
  });

  $("#sessionDown").click(
    function(){
     //alert("hi");
     var countDown = $("#sessionCounter").html();

     //alert(countDown);
     var countDownInt = parseInt(countDown);
    // alert(countDownInt);
    countDownInt--;
  //alert(countDownInt);
     var displayCountDown = countDownInt.toString();
    $("#sessionCounter").html(displayCountDown);
  });


};

function breakTime(){
  $("#breakUp").click(
    function(){
    //  alert("hi");
      var count = $("#breakCounter").html();

    //  alert(count);
      var countInt = parseInt(count);
    countInt++;
    //alert(countInt);
      var displayCount = countInt.toString();
     $("#breakCounter").html(displayCount);
  });

  $("#breakDown").click(
    function(){
     //alert("hi");
     var countDown = $("#breakCounter").html();

     //alert(countDown);
     var countDownInt = parseInt(countDown);
    // alert(countDownInt);
    countDownInt--;
  //alert(countDownInt);
     var displayCountDown = countDownInt.toString();
    $("#breakCounter").html(displayCountDown);
  });


};
