$(document).ready(function (){
   
    console.log("We are using jQuery");
// $('selector').action()  // selector Syntax


$('p').click();

// $('p').click(function(){     //usoing function
//     console.log('you clicked on p');

//     // $(this).hide();      // selector using this
//     // $('#id').hide();
//     // $('.class').hide();
// });

//double click event
$("p").dblclick(function(){
    $(this).hide();
  });


//element selector
//$('p').click();   

//id selector
$('#idselector').click();

//hide
$('#btn1').click(function(){

    //btn click 
    console.log("Hide");
   // $("#container").hide();
    $("#container").fadeOut(2000  ,function(){
        alert("fade Out / Hide");
    });
});

//show 
$('#btn2').click(function(){

    //btn click 
    console.log("Show");
    //$("#container").show();
    $("#container").fadeIn();
});

$('#btn3').click(function(){

    console.log("slide up");
    $("#container").slideUp(3000 , function(){
        alert("done");
    });
});

$('#btn4').click(function(){

    console.log("slide Down");
    $("#container").slideDown(100);
    });
});

//Animate
$('#btn5').dblclick(function(){

    console.log("Animate");

    $("#container").animate({
        width: "100px",
        height: "50px",
        left: "250px"
    }, function() {
        // Callback function here
    });
    
    });

    $('#btn6').click(function(){
        let v = $("#f").val();
        console.log("value is  "+ v);
    });

$('#btn7').click(function(){

    console.log("addClass ");
    $("#container").addClass("important");

});

$('#btn8').click(function(){

    console.log("RemoveClass ");
    $("#container").removeClass("important");
});


