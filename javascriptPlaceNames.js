var timer2 = false;
$(window).on('wheel', displayName);

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


function displayName(){ 
  
  if(timer2 == false){
     
     timer2 = true;
  
        if($('#placeNameID').hasClass('locationName1')){ 
            $('#placeNameID').removeClass("fadeInUp").removeClass("fadeInDown");
            $('#placeNameID').text("");
            setTimeout(function() {
                $('#placeNameID').text("WELLINGTON");
                $('#placeNameID').addClass("fadeInUp");
            }, 5);
            setTimeout(function() {
                $('#placeNameID').text("");
                
            }, 2600);
            
            
        }
        
          if($('#placeNameID').hasClass('locationName2')){
              $('#placeNameID').removeClass("fadeInUp").removeClass("fadeInDown");
              $('#placeNameID').text("");
            setTimeout(function() {
                $('#placeNameID').text("HAMILTON");
                $('#placeNameID').addClass("fadeInUp");
            }, 5);
            setTimeout(function() {
                $('#placeNameID').text("");
                
            }, 2600);
        }
        
          if($('#placeNameID').hasClass('locationName3')){
              $('#placeNameID').removeClass("fadeInUp").removeClass("fadeInDown");
              $('#placeNameID').text("");
            setTimeout(function() {
                $('#placeNameID').text("TEST 3");
                $('#placeNameID').addClass("fadeInUp");
            }, 5);
            setTimeout(function() {
                $('#placeNameID').text("");
                
            }, 2600);
        }
        
          if($('#placeNameID').hasClass('locationName4')){
              $('#placeNameID').removeClass("fadeInUp").removeClass("fadeInDown");
              $('#placeNameID').text("");
            setTimeout(function() {
                $('#placeNameID').text("TEST 4");
                $('#placeNameID').addClass("fadeInUp");
            }, 5);
            setTimeout(function() {
                $('#placeNameID').text("");
                
            }, 2600);
        }
        
          if($('#placeNameID').hasClass('locationName5')){
              $('#placeNameID').removeClass("fadeInUp").removeClass("fadeInDown");
              $('#placeNameID').text("");
            setTimeout(function() {
                $('#placeNameID').text("TEST 5");
                $('#placeNameID').addClass("fadeInUp");
            }, 5);
            setTimeout(function() {
                $('#placeNameID').text("");
                
            }, 2600);
        }
        
          if($('#placeNameID').hasClass('locationName6')){
              $('#placeNameID').removeClass("fadeInUp").removeClass("fadeInDown");
              $('#placeNameID').text("");
            setTimeout(function() {
                $('#placeNameID').text("TEST 6");
                $('#placeNameID').addClass("fadeInUp");
            }, 5);
            setTimeout(function() {
                $('#placeNameID').text("");
                
            }, 2600);
        }
        
        if($('#placeNameID').hasClass('locationName1Up')){ 
            $('#placeNameID').removeClass("fadeInDown").removeClass("fadeInUp");
              
              $('#placeNameID').text("");
          setTimeout(function() {
                $('#placeNameID').text("WELLINGTON");
                $('#placeNameID').addClass("fadeInDown");
            }, 5);
            setTimeout(function() {
                $('#placeNameID').text("");
                
            }, 2600);
            
            
        }
        
          if($('#placeNameID').hasClass('locationName2Up')){
              $('#placeNameID').removeClass("fadeInDown").removeClass("fadeInUp");
              
              $('#placeNameID').text("");
            setTimeout(function() {
                $('#placeNameID').text("HAMILTON");
                $('#placeNameID').addClass("fadeInDown");
            }, 5);
            setTimeout(function() {
                $('#placeNameID').text("");
                
            }, 2600);
        }
        
          if($('#placeNameID').hasClass('locationName3Up')){
              $('#placeNameID').removeClass("fadeInDown").removeClass("fadeInUp");
        
              $('#placeNameID').text("");
            setTimeout(function() {
                $('#placeNameID').text("TEST 3");
                $('#placeNameID').addClass("fadeInDown").removeClass("fadeInUp");
            }, 5);
            setTimeout(function() {
                $('#placeNameID').text("");
                
            }, 2600);
        }
        
          if($('#placeNameID').hasClass('locationName4Up')){
              $('#placeNameID').removeClass("fadeInDown").removeClass("fadeInUp");
        
              $('#placeNameID').text("");
            setTimeout(function() {
                $('#placeNameID').text("TEST 4");
                $('#placeNameID').addClass("fadeInDown");
            }, 5);
            setTimeout(function() {
                $('#placeNameID').text("");
                
            }, 2600);
        }
        
          if($('#placeNameID').hasClass('locationName5Up')){
              $('#placeNameID').removeClass("fadeInDown").removeClass("fadeInUp");
        
              $('#placeNameID').text("");
            setTimeout(function() {
                $('#placeNameID').text("TEST 5");
                $('#placeNameID').addClass("fadeInDown");
            }, 5);
            setTimeout(function() {
                $('#placeNameID').text("");
                
            }, 2600);
        }
        
          if($('#placeNameID').hasClass('locationName6Up')){
              $('#placeNameID').removeClass("fadeInDown").removeClass("fadeInUp");
        
              $('#placeNameID').text("");
            setTimeout(function() {
                $('#placeNameID').text("TEST 6");
                $('#placeNameID').addClass("fadeInDown");
            }, 5);
            setTimeout(function() {
                $('#placeNameID').text("");
                
            }, 2600);
        }  
        
      setTimeout(function() {
      timer2 = false;
       }, 2600); 
  }  

};

// Up Animations

