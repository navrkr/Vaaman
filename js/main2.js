$(document) .ready(function() {

    $(".preloader-wrap").delay(1500).fadeOut('slow');
 
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      responsive: {
          0:{
              items:1
          },
          768:{
              items:1
          },
          1200:{
              items:1
          }
      }
     });
 
     $(document).ready(function() {

      $('.color-choose input').on('click', function() {
          var headphonesColor = $(this).attr('data-image');
    
          $('.active').removeClass('active');
          $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
          $(this).addClass('active');
      });
    
    });
    
    var swiper = new Swiper('.swiper', {
      autoplay: {
       delay: 4000,
     },
    });
 
    Revealator.effects_padding = '-500';
 
    
    $(function() {
    $('a[href*="#"]:not([href="#"])').on('click', function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       if (target.length) {
         $('html, body').animate({
           scrollTop: target.offset().top
         }, 1000);
         return false;
       }
     }
    });
 
   $(window).scroll(function() {
     var nav = $('.navbar');
     var top = 200;
     if ($(window).scrollTop() >= top) {
 
         nav.addClass('inbody');
 
     } else {
         nav.removeClass('inbody');
     }
   }); 
 
   $('body').scrollspy({ target: '.navbar' })
     
  
   
   /*Magnific Popup*/
    $(function() {
     $('div.item-wrap,.gallery').magnificPopup({delegate: 'a', 
       type: 'image',
       gallery: {
         enabled: true
       },
       removalDelay: 300,
       mainClass: 'mfp-fade'
     });
    });
 
    $(document).ready(function() {
     $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
         type: 'iframe',
         mainClass: 'mfp-fade',
         removalDelay: 160,
         preloader: false,
         fixedContentPos: true
     });
    });
 
    var filterizd = $('.filtr-container').filterizr({
       layout: 'sameSize',
       gridItemsSelector: '.filtr-item',
       gutterPixels: 20,
       selector: '.filtr-container',
       setupControls: true
    });
 
    $('.selector').animatedHeadline({
       animationType: 'loading-bar'
    });
    
 
 }); 
 });

 let slideIndex = 1;
 showSlides(slideIndex);
 
 function plusSlides(n) {
   showSlides(slideIndex += n);
 }
 
 function currentSlide(n) {
   showSlides(slideIndex = n);
 }
 
 function showSlides(n) {
   let i;
   let slides = document.getElementsByClassName("mySlides");
   let dots = document.getElementsByClassName("demo");
   let captionText = document.getElementById("caption");
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
   captionText.innerHTML = dots[slideIndex-1].alt;
 }

 
  /*======================================
     Google Map
     ======================================*/
     if ($('#google-map').length > 0) {
      //set your google maps parameters
      var latitude = 16.931237509128266,
              longitude = 81.95143785471352,
              map_zoom = 15;

      //google map custom marker icon 
      var marker_url = 'img/tag.png';

      //we define here the style of the map
      var style = [{"featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]}, {"featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]}, {"featureType": "road.highway", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "road.arterial", "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]}, {"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]}, {"featureType": "transit", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]}];

      //set google map options
      var map_options = {
          center: new google.maps.LatLng(latitude, longitude),
          zoom: map_zoom,
          panControl: true,
          zoomControl: true,
          mapTypeControl: true,
          streetViewControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          scrollwheel: false,
          styles: style,
      }
      //inizialize the map
      var map = new google.maps.Map(document.getElementById('google-map'), map_options);
      //add a custom marker to the map				
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(latitude, longitude),
          map: map,
          visible: true,
          icon: marker_url,
      });
  }