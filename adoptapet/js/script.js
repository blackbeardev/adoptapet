//==========================
// Menu Dropdown
//==========================
$(document).ready(function() {
  $(".close-nav").hide();

  $(".burger-nav").click(function() {
    $(".menuTabs li").slideDown("slow");
    $(".burger-nav").hide();
    $(".close-nav").show();
  });

  $(".close-nav").click(function() {
    $(".menuTabs li").slideUp("slow");
    $(".burger-nav").show();
    $(".burger-nav").css("position", "fixed");
    $(".close-nav").hide();
  });

  //==========================
  //Fixed nav bar
  //==========================

  //Create a variable to hold the height of the backgroundImage
  var topSectionHeight = $(".nav").height();

  // Create a scroll function based on the window object
  $(window).scroll(function() {
    if( $(this).scrollTop() > topSectionHeight) {
      $("#arrowUp").show();
    } else {
      $("#arrowUp").hide();

    }
  });

  $("#animal1Image").mouseover(function() {
    this.src = "images/puppy1-lightened.jpg"
    $("#animal1Image").removeClass("adopteeImg").addClass("hoverBorder");
  }).mouseout(function() {
    this.src = "images/puppy1.jpg"
    $("#animal1Image").removeClass("hoverBorder").addClass("adopteeImg");
  });

  $("#animal2Image").mouseover(function() {
    this.src = "images/kitten1-lightened.jpg"
    $("#animal2Image").removeClass("adopteeImg").addClass("hoverBorder");
  }).mouseout(function() {
    this.src = "images/kitten1.jpg"
    $("#animal2Image").removeClass("hoverBorder").addClass("adopteeImg");
  });

  $("#animal3Image").mouseover(function() {
    this.src = "images/puppy2-lightened.jpg"
    $("#animal3Image").removeClass("adopteeImg").addClass("hoverBorder");
  }).mouseout(function() {
    this.src = "images/puppy2.jpg"
    $("#animal3Image").removeClass("hoverBorder").addClass("adopteeImg");
  });

  $("#animal4Image").mouseover(function() {
    this.src = "images/kitten2-lightened.jpg"
    $("#animal4Image").removeClass("adopteeImg").addClass("hoverBorder");
  }).mouseout(function() {
    this.src = "images/kitten2.jpg"
    $("#animal4Image").removeClass("hoverBorder").addClass("adopteeImg");
  });

})

// if(window.width() > 720 + "px") {
//   $(".burger-nav").hide();
//   $("close-nav").hide();
//   $(".mainMenu").css("width", "720");
// }

//==========================
//Featured adoptees Section
//==========================

//When the user hovers on animal 1
// $(".animal1").hover(function() {
//   $(this).attr("src", "images/puppy1-lightened.jpg");
// })
