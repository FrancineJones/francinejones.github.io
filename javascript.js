$(window).on('wheel', animationFunction);

var timer = false;

function upAnimation(){
    var currentClassNumber = parseInt($('body').attr("class").split("")[10]);
    
    var currentClass = $('body').attr("class").split(" ")[0];
    var newClass = "background" + (currentClassNumber - 1);
    var oldLocation =  "locationName" + currentClassNumber + "Up";
    var oldLocation2 =  "locationName" + currentClassNumber ;
    var newLocation = "locationName" + (currentClassNumber - 1) + "Up";
   
    $("body").removeClass(currentClass);
    $("body").addClass(newClass);
    
    $("#placeNameID").removeClass(oldLocation);
    $("#placeNameID").removeClass(oldLocation2);
    
    $("#placeNameID").addClass(newLocation);
    
    

    if ($("body").hasClass("background0")) {
        $("body").removeClass("background0").addClass("background1");
        $("#placeNameID").removeClass("locationName0Up").addClass("locationName1Up");
    }
    setTimeout(function() {
      timer = false;
    }, 2600);
}

function downAnimation() {
    var currentClassNumber = parseInt($('body').attr("class").split("")[10]);
    
    var currentClass = $('body').attr("class").split(" ")[0];
    var newClass = "background" + (currentClassNumber + 1);
    var oldLocation = "locationName" + (currentClassNumber);
    var oldLocation2 = "locationName" + (currentClassNumber + "Up");
    var newLocation = "locationName" + (currentClassNumber + 1);
   
    $("body").removeClass(currentClass);
    $("body").addClass(newClass);
    
    $("#placeNameID").removeClass(oldLocation);
    $("#placeNameID").removeClass(oldLocation2);
    
    $("#placeNameID").addClass(newLocation);
    
    
    
    $("#placeNameID").addClass("locationName" + (currentClassNumber + 1));

    if ($("body").hasClass("background6")) {
        $("body").removeClass("background6").addClass("background5");
        $("#placeNameID").removeClass("locationName6").addClass("locationName5");
    }
     setTimeout(function() {
      timer = false;
    }, 2600);
}

function animationFunction (e) {
  
  if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) { 
    if(timer == false){
      timer = true;
      downAnimation();
    }
  } else {
    if(timer == false){
      timer = true;
      upAnimation();
    }
    

  }
}
             

$(window).swipe( {
  swipeUp:function(event, direction, distance, duration) {
    if(timer == false){
      timer = true;
      downAnimation();  
    }
    
  },
  swipeDown:function(event, direction, distance, duration) {
    if(timer == false){
      timer = true;
      upAnimation();
    }
  },
  click:function(event, target) { 
  },
  threshold:100,
  allowPageScroll:"vertical"
});

