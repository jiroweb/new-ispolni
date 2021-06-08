$(document).ready(function () {
   // Function for expand ui ===== -- Start
   $('body').on('click', '[data-expand-click]', function () {
      let this_data = $(this).attr('data-expand')
      let this_child = $(this).parent().find('[data-expand-box]:first')
      $('[data-outside-expand], [data-sub-outside-expand]').slideUp(250)
      $('[data-not-outside-expand], [data-sub-not-outside-expand]').attr('data-expand', 'false')
      $('[data-expand-outside-icon], [data-sub-expand-outside-icon]').removeClass('rotate')
      $('[data-table-sidebar-filter]').removeClass('active')
      let arrow = $(this).find('[data-expand-icon]')
      let tableSidebarFilter = $(this).parent().find('[data-table-sidebar-filter]')
      if (this_data === 'true') {
         $(this).attr('data-expand', 'false')
         this_child.slideUp(250);
         $(arrow).removeClass('rotate')
         $(tableSidebarFilter).removeClass('active')

      } else if (this_data === 'false') {
         this_child.slideDown(250);
         $(this).attr('data-expand', 'true')
         $(arrow).addClass('rotate')
         $(tableSidebarFilter).addClass('active')
      } else {
         this_child.slideUp(250);
      }
   });

   $('body').on('click', '[data-sub-expand-click]', function () {
      let this_data = $(this).attr('data-expand')
      let this_child = $(this).parent().find('[data-expand-box]:first')
      $('[data-sub-outside-expand]').slideUp(250)
      $('[data-sub-not-outside-expand]').attr('data-expand', 'false')
      // $('[data-sub-expand-outside-icon]').removeClass('rotate')
      let arrow = $(this).find('[data-sub-expand-icon]')
      // let tableSidebarFilter = $(this).parent().find('[data-table-sidebar-filter]')
      if (this_data === 'true') {
         $(this).attr('data-expand', 'false')
         this_child.slideUp(250);
         $(arrow).removeClass('rotate')
         // $(tableSidebarFilter).removeClass('active')

      } else if (this_data === 'false') {
         this_child.slideDown(250);
         $(this).attr('data-expand', 'true')
         $(arrow).addClass('rotate')
         // $(tableSidebarFilter).addClass('active')
      } else {
         this_child.slideUp(250);
      }
   });
   $('body').on('click', '[data-expand-click-icon]', function () {
      $(this).toggleClass('rotate')
   })
   // Function for expand ui ===== -- End

   // Function for change active ui ===== -- Start
   $('body').on('click', '[data-change-active]', function () {
      let thic_parent = $(this).parent()
      let this_active = $(thic_parent).find('[data-change-active]')
      $(this_active).removeClass('active')
      $(this).addClass('active')
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
         $('[data-outside-expand], [data-sub-outside-expand]').slideUp(250);
         $('[data-not-outside-expand], [data-sub-not-outside-expand]').attr('data-expand', 'false')
         $('[data-expand-outside-icon], [data-sub-expand-outside-icon]').removeClass('rotate')

         // clicks anywhere outside of the table side bar filter
         $('[data-table-sidebar-filter]').removeClass('active')

         // clicks anywhere outside of the modal
         $('[data-modal-box]').fadeOut(250)
      }
   });
   // Function for window clicks anywhere outside blocks ui ===== -- End


   // tooltip function
   $('body').on('mouseenter', '[data-src-tooltip]', function () {
      let srcImg = $(this).data('img')
      let doc = document.documentElement;
      let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      let left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
      let offset_y = $(this).offset().top - top * 2.2;
      let offset_x = $(this).offset().left - left + 40;

      $('body').append(
         `<div class="table-img-tooltip" data-img-tooltip style="top: ${offset_y + "px"}; left: ${offset_x + "px"}">
            <img src="${srcImg}">
         </div>
         `)
   });
   $('body').on('mouseleave', '[data-src-tooltip]', function () {
      $('[data-img-tooltip]').remove();
   });


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

function myFunction() {
   var input, filter, ul, li, a, i;
   input = document.getElementById("filterCompany");
   filter = input.value.toUpperCase();
   ul = document.getElementById("filterList");
   li = ul.getElementsByTagName("li");
   for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("div")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
         li[i].style.display = "";
      } else {
         li[i].style.display = "none";
      }
   }
}