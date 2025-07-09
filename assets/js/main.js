jQuery(document).ready(function () {


   jQuery('#menuToggleIcon').click(function () {
      jQuery('#navmenu').toggleClass('active');
      jQuery(this).toggleClass('bi-list bi-x');
   });


   jQuery('.navmenu a').click(function () {
      jQuery('.navmenu a').removeClass('active');
      jQuery(this).addClass('active');
      jQuery('#navmenu').removeClass('active');
      jQuery('#menuToggleIcon').removeClass('bi-x').addClass('bi-list');
   });

});