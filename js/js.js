// $(function(){

// 	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
// 		var target = $(this).attr('href'),
// 			bl_top = $(target).offset().top - 70;
// 		$('body, html').animate({scrollTop: bl_top}, 1500);
// 		return false;
// 	});


// });






$(document).ready(function(){

	var men=true;

$("#sandwich").click(function()
{
	if(men==false)
	{
		$(".bl-nav").slideUp();
		men=!men;
	}
	else
	{
		$(".bl-nav").slideDown();
		men=!men;
	}
});

	$("#sandwich, .menu_item").click(function() {
     $("#sandwich").toggleClass("active");
});

});



$(function(){
	$('.btn-up, .logo') .click(function(){
		$("html,body").animate({
			scrollTop:0
		},1000);
	})
})

$(window).scroll(function(){
	if($(this).scrollTop()>400) {
		$('.btn-up').fadeIn();
	}
	else {
		$('.btn-up').fadeOut();
	}
});



$(function(){
	 new WOW().init();

	 
});






var lastId,
  topMenu = $("#top-menu"),
  topMenuHeight = topMenu.outerHeight() + 1,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e) {
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 1000);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function() {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function() {
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent().removeClass("active")
      .end().filter("[href='#" + id + "']").parent().addClass("active");
  }
});




$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
	$('a#go').click( function(event){ // лoвим клик пo ссылки с id="go"
		event.preventDefault(); // выключaем стaндaртную рoль элементa
		$('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
		 	function(){ // пoсле выпoлнения предъидущей aнимaции
				$('#modal_form') 
					.css('display', 'inline-block') // убирaем у мoдaльнoгo oкнa display: none;
					.animate({opacity: 1, top: '30%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
		});
	});
	/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	$('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
				function(){ // пoсле aнимaции
					$(this).css('display', 'none'); // делaем ему display: none;
					$('#overlay').fadeOut(400); // скрывaем пoдлoжку
				}
			);
	});
});

// function hideloader(){
//   document.getElementById("load").style.display = "none";
// }
 
 
 jQuery(document).ready(function($) {
  $(window).load(function() {
    setTimeout(function() {
      $('#load').fadeOut('slow', function() {});
    }, 500);

  });
});

