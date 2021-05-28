$('body').on('click', '[data-expand-click]', function (e) {
   let this_data = $(this).attr('data-expand');
   let this_child = $(this).parent().find('[data-expand-box]:first');
   let arrow = $(this).find('[data-expand-icon]');
   if (arrow.hasClass('rotate')) {
      $(arrow).removeClass('rotate');
   } else {
      $(arrow).addClass('rotate');
   }
   if (this_data === 'true') {
      $(this).attr('data-expand', 'false');
      this_child.slideUp(250);

   } else if (this_data === 'false') {
      this_child.slideDown(250);
      $(this).attr('data-expand', 'true');
   } else {
      this_child.slideUp(250);
   }
});