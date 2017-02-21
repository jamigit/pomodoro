/**
// test alert
$(document).ready(function(){
  alert("hi");

});
**/

$(document).ready(function(){
  sessionTime();
  //testClick();
});

/**
function testClick(){
  $('#sessionUp').click(function(){
    alert("hi");

  });

}
**/


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
     $("#sessionCounter").html(countInt);
  });
};
