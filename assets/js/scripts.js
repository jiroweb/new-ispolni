$(document).ready(function () {
   // Function for expand ui ===== -- Start
   $('body').on('click', '[data-expand-click]', function () {
      let this_data = $(this).attr('data-expand');
      let this_child = $(this).parent().find('[data-expand-box]:first');
      $('[data-outside-expand]').slideUp(250);
      $('[data-not-outside-expand]').attr('data-expand', 'false');
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
   // Function for expand ui ===== -- End

   // Function for change active ui ===== -- Start
   $('body').on('click', '[data-change-active]', function () {
      let thic_parent = $(this).parent();
      let this_active = $(thic_parent).find('[data-change-active]');
      $(this_active).removeClass('active');
      $(this).addClass('active');
   });
   // Function for change active ui ===== -- End

   // Function for modal ui ===== -- Start
   $('body').on('click', '[data-open-modal]', function () {
      let findModal = $('body').find('[data-modal-box]')
      let modalName = $(this).data('modalName')
      $(findModal).each(function () {
         if ($(this).data('modalName') === modalName) {
            $(this).fadeIn(250)
         }
      })
   })
   $('body').on('click', '[data-close-modal]', function () {
      $('body').find('[data-modal-box]').fadeOut(250)
   })
   // Function for modal ui ===== -- End

   // Function for window clicks anywhere outside blocks ui ===== -- Start
   $(window).on('click', function (e) {
      if (!$(e.target).closest('[data-not-outside]').length) {
         // clicks anywhere outside of the expand
         $('[data-outside-expand]').slideUp(250);
         $('[data-not-outside-expand]').attr('data-expand', 'false');
         let arrow = $('[data-expand-icon]');
         if (arrow.hasClass('rotate')) {
            $(arrow).removeClass('rotate');
         }
         $(arrow).addClass('rotate');

         // clicks anywhere outside of the modal
         $('[data-modal-box]').fadeOut(250)
      }
   });
   // Function for window clicks anywhere outside blocks ui ===== -- End


   // Function for daterangepicker ui ===== -- Start
   $('input[name="daterange"]').daterangepicker({
      "locale": {
         "format": "MM/DD/YYYY",
         "separator": " - ",
         "applyLabel": "Применить",
         "cancelLabel": "Закрыть ",
         // "fromLabel": "From",
         // "toLabel": "To",
         // "customRangeLabel": "Custom",
         "daysOfWeek": [
            'Вс',
            'Пн',
            'Вт',
            'Ср',
            'Чт',
            'Пт',
            'Сб',
         ],
         "monthNames": [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь',
         ],
         "firstDay": 1
      }
   })
   // Function for daterangepicker ui ===== -- End
})