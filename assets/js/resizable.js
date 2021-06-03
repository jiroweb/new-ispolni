$(function () {
   let pressed = false;
   let start = undefined;
   let startX, startWidth;

   $('[data-table] th').mousedown(function (e) {
      start = $(this);
      pressed = true;
      startX = e.pageX;
      table = $(this).parent().parent().parent()
      tableWidth = $(table).width()

      startWidth = $(this).width();
      $(start).addClass("resizing");
      $(start).addClass("noSelect");
   });

   $(document).mousemove(function (e) {
      if (pressed) {
         $(start).width(startWidth + (e.pageX - startX));
         $(table).width(tableWidth + (e.pageX - startX))
      }
   });

   $(document).mouseup(function () {
      if (pressed) {
         $(start).removeClass("resizing");
         $(start).removeClass("noSelect");
         pressed = false;
      }
   });
});

let tables = document.querySelectorAll('[data-table]');
for (let i = 0; i < tables.length; i++) {
   resizableGrid(tables[i]);
}

function resizableGrid(table) {
   let row = table.getElementsByTagName('th')
   for (let i = 0; i < row.length; i++) {
      let div = createDiv();
      row[i].appendChild(div);
      row[i].style.position = 'relative';
   }

   function createDiv(height) {
      let div = document.createElement('div');
      div.style.top = '50%';
      div.style.transform = 'translate(0, -50%)'
      div.style.right = 0;
      div.style.width = '1px';
      div.style.height = '25px'
      div.style.position = 'absolute';
      div.style.cursor = 'col-resize';
      div.style.userSelect = 'none';
      div.style.height = height + 'px';
      div.style.zIndex = '999'
      div.style.backgroundColor = '#E1E1E1'
      return div;
   }
};

// $(document).ready(function () {
//    // '.table-body' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
//    $(window).on("load resize", function () {
//       let scrollWidth = $('.table-block').width() - $('.table-block table').width();
//       $('[data-table]').css({
//          'padding-right': scrollWidth
//       });
//       console.log(scrollWidth)
//    }).resize();

// })