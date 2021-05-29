$(document).ready(function () {
   // Function for expand ui ===== -- Start
   $('body').on('click', '[data-expand-click]', function (e) {
      let this_data = $(this).attr('data-expand');
      let this_child = $(this).parent().find('[data-expand-box]:first');
      console.log(this_child)
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

   // Function for daterangepicker ui ===== -- Start
   $('input[name="daterange"]').daterangepicker({
      "locale": {
         "format": "MM/DD/YYYY",
         "separator": " - ",
         "applyLabel": "Применить",
         "cancelLabel": "Закрыть ",
         "fromLabel": "From",
         "toLabel": "To",
         "customRangeLabel": "Custom",
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