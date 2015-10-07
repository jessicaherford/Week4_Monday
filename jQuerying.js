$(document).ready(function(){
  //Question 1
  $("#hover").mouseenter(function(){
    $(this).css("background-color", "red");
  });

  $("#hover").click(function(){
    $(this).addClass('green');
  });

  $("#hover").dblclick(function(){
    $(this).removeClass('green');
  });

//Question 2
  $(".hideMe").click(function(){
    $(this).hide();
});
//Question 3
  $(".changeColor").click(function(){
    $('ul li:nth-child(3)').css('color', '#8A2BE2' );
  });
  //Question 4
  $('#removeLi').click(function(){
    $('ul li:nth-child(2)').hide();
  });
//Question 5
  $('ul').click(function(){
    for(var i = 0; i<1; i++){
    $('ul li:nth-child(4)').clone().appendTo('ul li:nth-child(4)');
  }
});
//Question 6
  $('ul li:last-child').click(function(){
    $('ul li:last-child').css('font-size', '40px');
     $('ul li:not(:last-child)').hide();
}) ;
//Question 7
  $('.cute').click(function(){
    for (var i = 0; i <20; i++){
    $(this).clone().appendTo('.clones');
  }
  });
//Question 8
  $('body').dblclick(function(){
    $('#makeSquare').css('border-radius','0px');
  });
//Question 9
  $('#dontClick').click(function(){
    alert("Well aren't you just a little rebel!");
  });
//Question 10
  $('.black').click(function(){
    $('html').css('background-color', 'black');
  });

  $('.wood').click(function(){
    $('html').css('background-image', 'url(http://phandroid.s3.amazonaws.com/wp-content/uploads/2015/03/wood-wallpaper-3.jpg)');
  });

  $('.chaos').click(function(){
    $('html').css('background-image', 'url(http://www.henderson-art.co.uk/art/wallpaper/chaos.jpg)');
  });


});
