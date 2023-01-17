/* Credit and Thanks:
Matrix - Particles.js;
SliderJS - Ettrics;
Design - Sara Mazal Web;
Fonts - Google Fonts
*/

window.onload = function () {
	Particles.init({
	  selector: ".background"
	});
  };
  const particles = Particles.init({
	selector: ".background",
	color: ["#03dac6", "#ff0266", "#000000"],
	connectParticles: true,
	responsive: [
	  {
		breakpoint: 768,
		options: {
		  color: ["#faebd7", "#03dac6", "#ff0266"],
		  maxParticles: 43,
		  connectParticles: false
		}
	  }
	]
  });
  
  class NavigationPage {
	constructor() {
	  this.currentId = null;
	  this.currentTab = null;
	  this.tabContainerHeight = 70;
	  this.lastScroll = 0;
	  let self = this;
	  $(".nav-tab").click(function () {
		self.onTabClick(event, $(this));
	  });
	  $(window).scroll(() => {
		this.onScroll();
	  });
	  $(window).resize(() => {
		this.onResize();
	  });
	}
  
	onTabClick(event, element) {
	  event.preventDefault();
	  let scrollTop =
		$(element.attr("href")).offset().top - this.tabContainerHeight + 1;
	  $("html, body").animate({ scrollTop: scrollTop }, 600);
	}
  
	onScroll() {
	  this.checkHeaderPosition();
	  this.findCurrentTabSelector();
	  this.lastScroll = $(window).scrollTop();
	}
  
	onResize() {
	  if (this.currentId) {
		this.setSliderCss();
	  }
	}
  
	checkHeaderPosition() {
	  const headerHeight = 75;
	  if ($(window).scrollTop() > headerHeight) {
		$(".nav-container").addClass("nav-container--scrolled");
	  } else {
		$(".nav-container").removeClass("nav-container--scrolled");
	  }
	  let offset =
		$(".nav").offset().top +
		$(".nav").height() -
		this.tabContainerHeight -
		headerHeight;
	  if (
		$(window).scrollTop() > this.lastScroll &&
		$(window).scrollTop() > offset
	  ) {
		$(".nav-container").addClass("nav-container--move-up");
		$(".nav-container").removeClass("nav-container--top-first");
		$(".nav-container").addClass("nav-container--top-second");
	  } else if (
		$(window).scrollTop() < this.lastScroll &&
		$(window).scrollTop() > offset
	  ) {
		$(".nav-container").removeClass("nav-container--move-up");
		$(".nav-container").removeClass("nav-container--top-second");
		$(".nav-container-container").addClass("nav-container--top-first");
	  } else {
		$(".nav-container").removeClass("nav-container--move-up");
		$(".nav-container").removeClass("nav-container--top-first");
		$(".nav-container").removeClass("nav-container--top-second");
	  }
	}
  
	findCurrentTabSelector(element) {
	  let newCurrentId;
	  let newCurrentTab;
	  let self = this;
	  $(".nav-tab").each(function () {
		let id = $(this).attr("href");
		let offsetTop = $(id).offset().top - self.tabContainerHeight;
		let offsetBottom =
		  $(id).offset().top + $(id).height() - self.tabContainerHeight;
		if (
		  $(window).scrollTop() > offsetTop &&
		  $(window).scrollTop() < offsetBottom
		) {
		  newCurrentId = id;
		  newCurrentTab = $(this);
		}
	  });
	  if (this.currentId != newCurrentId || this.currentId === null) {
		this.currentId = newCurrentId;
		this.currentTab = newCurrentTab;
		this.setSliderCss();
	  }
	}
  
	setSliderCss() {
	  let width = 0;
	  let left = 0;
	  if (this.currentTab) {
		width = this.currentTab.css("width");
		left = this.currentTab.offset().left;
	  }
	  $(".nav-tab-slider").css("width", width);
	  $(".nav-tab-slider").css("left", left);
	}
  }
  
  new NavigationPage();
  /* Credit and Thanks:
  Matrix - Particles.js;
  SliderJS - Ettrics;
  Design - Sara Mazal Web;
  Fonts - Google Fonts
  */

  



  

/* navigation menu animation with way points */

$('.nav-animate').waypoint(function(direction) {
	$('.secondary-menu').toggleClass('hide', direction === "down");
	$('.navbar').toggleClass('comeup', direction === "down");
}, {
	offset: '10%'
});

// Block scrolling
	
$('.nav li a').bind('click', function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1200);
		if($(window).width() < 768){
			var $navMain = $(".navbar-collapse");
			$navMain.collapse('hide');
		}
		e.preventDefault();
});

/* play list music button */
$(document).ready(function(){
	
	var obj = document.createElement("audio");
	obj.src = "../HTML/audio/audio.mp3";
	obj.volume = 1;
	obj.autoPlay = true;
	obj.preLoad = true;       
	
	$('#playNowBtn').click(function(e){
		var $playNowButton = $(this);																/* button variable */
		var $playlist = $playNowButton.parent().parent();						/* play list section class */
		var $disk			= $playlist.children().children('.disk');			/* disk image */
		
		if ($disk.hasClass('rotating')) {
			$disk.removeClass('rotating');
			$playNowButton.children('i').removeClass('fa-pause').addClass('fa-play');
			obj.pause();
		} else {
			$disk.addClass('rotating');
			$playNowButton.children('i').removeClass('fa-play').addClass('fa-pause');
			obj.play();
		}
		e.preventDefault();
	});
	
});
 
/* *************************************** */
// One page navigation 
/* *************************************** */

$('.nav').onePageNav({
    currentClass: 'active',
    changeHash: true,
    scrollSpeed: 1000,
    scrollThreshold: 0.1
});

// Block scrolling
	
$('.nav a').bind('click', function(e){
		if($(window).width() < 768){
			var $navMain = $(".navbar-collapse");
			$navMain.collapse('hide');
		}
		e.preventDefault();
});

/* Owl-Carousel Client Slider */
 
$(document).ready(function() {
  $("#portfolioOwl").owlCarousel({
		autoPlay: 3000,
		slideSpeed: 1200,
	  paginationSpeed : 500,
	  stopOnHover: true,
    items : 4,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [991,3],
    itemsTabletSmall : [767,2]
  }); 
});

/* tool-tip initialize */

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


/* Scroll to Top */  

$(".totop").hide();
$(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop()>300)
		{
			$('.totop').fadeIn();
		} 
		else
		{
			$('.totop').fadeOut();
		}
	});

	$('.totop a').click(function (e) {
		e.preventDefault();
		$('body,html').animate({scrollTop: 0}, 1200);
	});

});