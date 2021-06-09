$(function () {
   let pressed = false
   let start = undefined
   let startX, startWidth
   $('[data-table] th').mousedown(function (e) {
      start = $(this)
      pressed = true
      startX = e.pageX
      table = $(this).parent().parent().parent()
      tableWidth = $(table).width()
      startWidth = $(this).width()
      $(start).addClass("resizing")
      $(start).addClass("noSelect")
   })

   $(document).mousemove(function (e) {
      if (pressed) {
         $(start).width(startWidth + (e.pageX - startX))
         $(table).width(tableWidth + (e.pageX - startX))
      }
   })

   $(document).mouseup(function () {
      if (pressed) {
         $(start).removeClass("resizing")
         $(start).removeClass("noSelect")
         pressed = false
      }
   })
})

let tables = document.querySelectorAll('[data-table]')
for (let i = 0; i < tables.length; i++) {
   resizableGrid(tables[i])
}

function resizableGrid(table) {
   let row = table.getElementsByTagName('th')
   let col = table.querySelectorAll('thead tr')
   for (let i = 0; i < row.length; i++) {
      let div = createDiv()
      row[i].appendChild(div)
      row[i].style.position = 'relative'
   }

   for (let i = 0; i < col.length; i++) {
      let div = createDivCol()
      col[i].appendChild(div)
      col[i].style.position = 'relative'
   }

   function createDivCol() {
      let div = document.createElement('div')
      div.style.bottom = '-1px'
      div.style.right = 0
      div.style.width = '100%'
      div.style.height = '1px'
      div.style.position = 'absolute'
      div.style.zIndex = '999'
      div.style.backgroundColor = '#E1E1E1'
      return div
   }

   function createDiv() {
      let div = document.createElement('div')
      div.style.top = '50%'
      div.style.transform = 'translate(0, -50%)'
      div.style.right = 0
      div.style.width = '1px'
      div.style.height = '25px'
      div.style.position = 'absolute'
      div.style.cursor = 'ew-resize'
      div.style.userSelect = 'none'
      div.style.zIndex = '999'
      div.style.backgroundColor = '#E1E1E1'
      div.className = 'table-line'
      return div
   }
}


// var speed = 0;
// var scroll = 0;
// var container = $('.carousel-frame');
// var container_w = container.width();
// var max_scroll = container[0].scrollWidth - container.outerWidth();

// container.on('mousemove', function (e) {
//    var mouse_x = e.pageX - container.offset().left;
//    var mouseperc = 100 * mouse_x / container_w;
//    speed = mouseperc - 50;
// }).on('mouseleave', function () {
//    speed = 0;
// });

// function updatescroll() {
//    if (speed !== 0) {
//       scroll += speed / 5;
//       if (scroll < 0) scroll = 0;
//       if (scroll > max_scroll) scroll = max_scroll;
//       $('.carousel-frame').scrollLeft(scroll);
//    }
//    window.requestAnimationFrame(updatescroll);
// }
// window.requestAnimationFrame(updatescroll);

// $(document).ready(function () {
//    // '.table-body' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
//    $(window).on("load resize", function () {
//       let scrollWidth = $('.table-block').width() - $('.table-block table').width()
//       $('[data-table]').css({
//          'padding-right': scrollWidth
//       })
//       console.log(scrollWidth)
//    }).resize()

// })