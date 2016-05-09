$(window).on('wheel', animationFunction);

var timer = false;

function upAnimation(){
    var currentClassNumber = parseInt($('body').attr("class").split("")[10]);
    
    var currentClass = $('body').attr("class").split(" ")[0];
    var newClass = "background" + (currentClassNumber - 1);
   
    $("body").removeClass(currentClass);
    $("body").addClass(newClass);

    if ($("body").hasClass("background0")) {
        $("body").removeClass("background0").addClass("background1");
    }
    setTimeout(function() {
      timer = false;
    }, 2600);
}

function downAnimation() {
    var currentClassNumber = parseInt($('body').attr("class").split("")[10]);
    
    var currentClass = $('body').attr("class").split(" ")[0];
    var newClass = "background" + (currentClassNumber + 1);
   
    $("body").removeClass(currentClass);
    $("body").addClass(newClass);

    if ($("body").hasClass("background6")) {
        $("body").removeClass("background6").addClass("background5");
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