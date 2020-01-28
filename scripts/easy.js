// $(document).ready(function(){
// // $(".preloader").hide();
// $('.preloader').fadeOut('slow');
// alert("window is loaded");
//  // jQuery methods go here...
// });
// //
// // $(window).load(function() {
// //    $('.preloader').fadeOut('slow');
// // });


$(window).on("load", function(){
  $('.preloader').fadeOut('slow');
  $('img').each(function () {
        $(this).attr('src', $(this).data('src'));
    });
    $('.slide').each(function () {
          $(this).attr('background-image', $(this).data('background-image'));
      });
  // $('link').each(function () {
  //       $(this).attr('href', $(this).data('href'));
  //   });
})
//
// $(window).load(function() {
//  // executes when complete page is fully loaded, including all frames, objects and images
//  alert("window is loaded");
// });
