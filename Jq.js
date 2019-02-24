function fakeLoad(){
  
  var animate  = $(".animate").addClass("run");
  var distance = $(".content").offset().top;    
  var timer    = setTimeout(function(){
    $(".loader").fadeOut(1000);
    $('html,body').animate({
      scrollTop: distance
    }, 1000);
  }, 10000);
}