$("#bold").click(function(){

//     var num1 = 12;
//     var num2 = 456;

//    var result =  (num1   num2)




     var fontWeight = $("#txt").css("font-weight");
  
     if( fontWeight == "bold" || fontWeight == "700"  ){
        $("#txt").css("font-weight","normal")
    }
    else{
        $("#txt").css("font-weight", "bold");
    }

});

$("#italic").click(function(){
    var fontStyle = $("#txt").css("font-style");
if( fontStyle == "italic"){
$("#txt").css("font-style", "normal");
}
else{
$("#txt").css("font-style", "italic");
    }
});



$("#underline").click(function(){
    console.log($("#txt").css("text-decoration-line"));
  var textDecoration = $("#txt").css("text-decoration-line");
    if( textDecoration == "underline" ){
$("#txt").css("text-decoration-line", "none");
    }
    else{
$("#txt").css("text-decoration-line", "underline");
}
});




   $("#Font").change(function(){
       $("#txt").css("font-family", $("#Font").val());
   });

   $("#Size").change(function(){
    $("#txt").css("font-size", $("#Size").val() + "px");
});
   