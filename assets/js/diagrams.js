LANGS = {
   thousands: ' ',
   'processing': 'Подождите...',
   'search': 'Поиск:',
   'lengthMenu': 'Показать _MENU_ записей',
   'info': 'Записи с _START_ до _END_ из _TOTAL_ записей',
   'infoEmpty': 'Записи с 0 до 0 из 0 записей',
   'infoFiltered': '(отфильтровано из _MAX_ записей)',
   'infoPostFix': '',
   'loadingRecords': 'Загрузка записей...',
   'zeroRecords': 'Записи отсутствуют.',
   'emptyTable': 'В таблице отсутствуют данные',
   'paginate': {
      'first': 'Первая',
      'previous': 'Предыдущая',
      'next': 'Следующая',
      'last': 'Последняя',
   },
   'aria': {
      'sortAscending': ': активировать для сортировки столбца по возрастанию',
      'sortDescending': ': активировать для сортировки столбца по убыванию',
   },
   'select': {
      'rows': {
         '0': 'Кликните по записи для выбора',
         '1': 'Выбрана одна запись',
         '_': 'Выбрано записей: %d',
      },
   },
};
tableapi = 0;
var App = function () {
   'use strict';
   var e,
      t,
      i,
      o,
      n,
      a,
      r,
      l,
      s,
      c,
      d,
      u,
      p,
      h,
      f,
      g,
      m,
      b,
      v = {
         assetsPath: 'assets',
         imgPath: 'img',
         jsPath: 'js',
         libsPath: 'lib',
         leftSidebarSlideSpeed: 200,
         leftSidebarToggleSpeed: 300,
         enableLeftSidebar: !0,
         enableSwipe: !0,
         swipeTreshold: 100,
         scrollTop: !0,
         openRightSidebarClass: 'open-right-sidebar',
         openLeftSidebarClass: 'open-left-sidebar',
         disabledLeftSidebarClass: 'be-left-sidebar-disabled',
         offCanvasLeftSidebarClass: 'be-offcanvas-menu',
         offCanvasLeftSidebarMobileClass: 'be-offcanvas-menu-sm',
         topHeaderMenuClass: 'be-top-menu',
         closeRsOnClickOutside: !0,
         removeLeftSidebarClass: 'be-nosidebar-left',
         collapsibleSidebarClass: 'be-collapsible-sidebar',
         collapsibleSidebarCollapsedClass: 'be-collapsible-sidebar-collapsed',
         openLeftSidebarOnClick: !0,
         transitionClass: 'be-animate',
         openSidebarDelay: 400,
      },
      w = {},
      k = {};

   function y(e) {
      var t = $('<div>', {
            class: e
         }).appendTo('body'),
         i = t.css('background-color');
      return t.remove(), i;
   }

   function C(e) {
      void 0 !== e && e.update();
   }

   function S(e) {
      e.destroy();
   }

   function x(e) {
      if (void 0 !== e[0]) {
         return new PerfectScrollbar(e[0], {
            wheelPropagation: !1
         });
      }
   }

   function A() {
      $('.be-scroller', n);
      var t = $('.be-scroller-chat', n),
         i = $('.be-scroller-todo', n),
         o = $('.be-scroller-settings', n);

      function a() {
         e.removeClass(v.openRightSidebarClass)
            .addClass(v.transitionClass), T();
      }

      n.length > 0 && ($('.be-toggle-right-sidebar').on('click', function (t) {
               s && e.hasClass(v.openRightSidebarClass) ? a() : s || (e.addClass(v.openRightSidebarClass + ' ' + v.transitionClass), s = !0), t.preventDefault();
            }),
            $(document).on('mousedown touchstart', function (t) {
               !$(t.target)
                  .closest(n).length && e.hasClass(v.openRightSidebarClass) && (v.closeRsOnClickOutside || $.isSm()) && a();
            })), void 0 !== h && h && h.nodeName || !t.length || (h = x(t)), void 0 !== f && f && f.nodeName || !i.length || (f = x(i)), void 0 !== g && g && g.nodeName || !o.length || (g = x(o)), $(window)
         .resize(function () {
            P(function () {
               C(h), C(f), C(g);
            }, 500, 'be_rs_update_scroller');
         }), $('a[data-toggle="tab"]', n).on('shown.bs.tab', function (e) {
            C(h), C(f), C(g);
         });
   }

   function T() {
      s = !0, setTimeout(function () {
         s = !1;
      }, v.openSidebarDelay);
   }

   function _() {
      var e = $('.be-right-sidebar .tab-chat'),
         t = $('.chat-contacts', e),
         i = $('.chat-window', e),
         o = $('.chat-messages', i),
         n = $('.content ul', o),
         a = $('.be-scroller-messages', o),
         r = $('.chat-input', i),
         l = $('input', r),
         s = $('.send-msg', r);

      function c(e, t) {
         var i = $('<li class="' + (t ? 'self' : 'friend') + '"></li>');
         '' != e && ($('<div class="msg">' + e + '</div>')
            .appendTo(i), i.appendTo(n), a.stop()
            .animate({
               scrollTop: a.prop('scrollHeight')
            }, 900, 'swing'), C(m));
      }

      $('.user a', t).on('click', function (t) {
         e.hasClass('chat-opened') || (e.addClass('chat-opened'), void 0 !== m && m && m.nodeName || (m = x(a))), t.preventDefault();
      }), $('.title .return', i).on('click', function (t) {
         e.hasClass('chat-opened') && e.removeClass('chat-opened'), M();
      }), l.keypress(function (e) {
         var t = e.keyCode ? e.keyCode : e.which,
            i = $(this).val();
         '13' == t && (c(i, !0), $(this).val('')), e.stopPropagation();
      }), s.on('click', function () {
         c(l.val(), !0), l.val('');
      });
   }

   function M() {
      void 0 !== c && c && c.nodeName || (c = x(r));
   }

   var E,
      P = (E = {}, function (e, t, i) {
         i || (i = 'x1x2x3x4'), E[i] && clearTimeout(E[i]), E[i] = setTimeout(e, t);
      });
   return {
      conf: v,
      color: w,
      scroller: k,
      init: function (E) {
         var B,
            L;
         (e = $('body'), t = $('.be-wrapper'), i = $('.be-top-header', t), o = $('.be-left-sidebar', t), n = $('.be-right-sidebar', t), a = $('.be-scroller-aside', t), l = $('.be-toggle-left-sidebar', i), r = $('.be-scroller-notifications', i), s = !1,
            $.extend(v, E),
            v.enableLeftSidebar ? function () {
               var n,
                  a,
                  r = $('.sidebar-elements > li > a', o),
                  c = $('.sidebar-elements li a', o),
                  h = $('.left-sidebar-scroll', o),
                  f = $('.left-sidebar-toggle', o),
                  g = !!v.openLeftSidebarOnClick;

               function m() {
                  return t.hasClass(v.collapsibleSidebarCollapsedClass);
               }

               function b(e, i) {
                  var n = $(i.currentTarget),
                     a = $(e).parent(),
                     r = $('li.open', a),
                     l = !n.closest(o).length,
                     s = v.leftSidebarSlideSpeed,
                     c = n.parents().eq(1).hasClass('sidebar-elements');
                  !$.isSm() && m() && (c || l) ? (a.removeClass('open'), e.removeClass('visible'), r.removeClass('open')
                     .removeAttr('style')) : e.slideUp({
                     duration: s,
                     complete: function () {
                        a.removeClass('open'), $(this)
                           .removeAttr('style'), r.removeClass('open')
                           .removeAttr('style'), t.hasClass('be-fixed-sidebar') && !$.isSm() && C(d);
                     },
                  });
               }

               function w(e, i) {
                  var o = $(e),
                     n = $(o).parent(),
                     a = $(o).next(),
                     r = v.leftSidebarSlideSpeed,
                     l = $(i.currentTarget)
                     .parents()
                     .eq(1)
                     .hasClass('sidebar-elements'),
                     s = n.siblings('.open');
                  s && b($('> ul', s), i), !$.isSm() && m() && l ? (n.addClass('open'), a.addClass('visible'), void 0 !== p && S(p), void 0 !== p && p && p.nodeName || (p = x(n.find('.be-scroller'))), $(window)
                     .resize(function () {
                        P(function () {
                           $.isXs() || void 0 !== p && C(p);
                        }, 500, 'am_check_phone_classes');
                     })) : a.slideDown({
                     duration: r,
                     complete: function () {
                        n.addClass('open'), $(this)
                           .removeAttr('style'), t.hasClass('be-fixed-sidebar') && !$.isSm() && C(d);
                     },
                  });
               }

               t.hasClass(v.collapsibleSidebarClass) && (a = void 0 !== n ? n : $('.sidebar-elements > li', o), $.each(a, function () {
                     var e = $(this).find('> a span').html(),
                        t = $(this).find('> ul'),
                        i = $('> li', t);
                     e = $('<li class="title">' + e + '</li>');
                     var o = $('<li class="nav-items"><div class="be-scroller"><div class="content"><ul></ul></div></div></li>');
                     t.find('> li.title').length || (t.prepend(e), i.appendTo(o.find('.content ul')), o.appendTo(t));
                  }), $('.be-toggle-left-sidebar').on('click', function () {
                     t.hasClass(v.collapsibleSidebarCollapsedClass) ? (t.removeClass(v.collapsibleSidebarCollapsedClass), $('li.open', o)
                        .removeClass('open'), $('li.active', o)
                        .parents('.parent')
                        .addClass('active open'), o.trigger('shown.left-sidebar.collapse'), void 0 !== u && u && u.nodeName || (u = x($('.be-scroller', o))), S(u), void 0 !== p && S(p)) : (t.addClass(v.collapsibleSidebarCollapsedClass), $('li.active', o)
                        .parents('.parent')
                        .removeClass('open'), $('li.open', o)
                        .removeClass('open'), o.trigger('hidden.left-sidebar.collapse'));
                  }), function () {
                     for (var e = $('.sidebar-elements > li > a', o), i = 0; i <= e.length; i++) {
                        var n = e[i],
                           a = $('> span', n).text();
                        $(n)
                           .attr({
                              'data-toggle': 'tooltip',
                              'data-placement': 'right',
                              title: a,
                           }), $(n).tooltip({
                              trigger: 'manual'
                           });
                     }
                     e.on('mouseenter', function () {
                        !$.isSm() && t.hasClass(v.collapsibleSidebarCollapsedClass) && $(this)
                           .tooltip('show');
                     }), e.on('mouseleave', function () {
                        $(this).tooltip('hide');
                     });
                  }(), g || (r.on('mouseover', function (e) {
                     m() && w(this, e);
                  }), r.on('touchstart', function (e) {
                     var t = $(this),
                        i = t.parent(),
                        o = t.next();
                     m() && !$.isSm() && (i.hasClass('open') ? b(o, e) : w(this, e), $(this)
                        .next()
                        .is('ul') && e.preventDefault());
                  }), r.on('mouseleave', function (e) {
                     var t = $(this),
                        i = t.parent(),
                        o = i.find('> ul');
                     !$.isSm() && m() && (o.length > 0 ? setTimeout(function () {
                        o.is(':hover') ? o.on('mouseleave', function () {
                           setTimeout(function () {
                              t.is(':hover') || (b(o, e), o.off('mouseleave'));
                           }, 300);
                        }) : b(o, e);
                     }, 300) : i.removeClass('open'));
                  })), $(document).on('mousedown touchstart', function (e) {
                     $(e.target)
                        .closest(o).length || $.isSm() || b($('ul.visible', o), e);
                  })), c.on('click', function (e) {
                     var t = $(this),
                        i = t.parent(),
                        o = t.next();
                     t.parents()
                        .eq(1)
                        .hasClass('sidebar-elements'), i.siblings('.open'), i.hasClass('open') ? b(o, e) : w(this, e), t.next()
                        .is('ul') && e.preventDefault();
                  }), t.hasClass(v.collapsibleSidebarCollapsedClass) ? $('li.active', o)
                  .parents('.parent')
                  .addClass('active') : $('li.active', o)
                  .parents('.parent')
                  .addClass('active open'), i.find('.container-fluid > .navbar-collapse').length && o.length && (t.addClass(v.offCanvasLeftSidebarClass)
                     .addClass(v.offCanvasLeftSidebarMobileClass), t.addClass(v.topHeaderMenuClass), l = $('<a class="nav-link be-toggle-left-sidebar" href="#"><span class="icon mdi mdi-menu"></span></a>'), $('.be-navbar-header', i)
                     .prepend(l)), t.hasClass('be-fixed-sidebar') && ($.isSm() && !t.hasClass(v.offCanvasLeftSidebarClass) || void 0 !== d && d && d.nodeName || (d = x(h)), $(window)
                     .resize(function () {
                        P(function () {
                           $.isSm() && !t.hasClass(v.offCanvasLeftSidebarClass) ? S(d) : h.hasClass('ps') ? C(d) : void 0 !== d && d && d.nodeName || (d = x(h));
                        }, 500, 'be_update_scroller');
                     })), f.on('click', function (e) {
                     var t = $(this).next('.left-sidebar-spacer');
                     $(this)
                        .toggleClass('open'), t.slideToggle(v.leftSidebarToggleSpeed, function () {
                           $(this).removeAttr('style').toggleClass('open');
                        }), e.preventDefault();
                  }), t.hasClass(v.offCanvasLeftSidebarClass) && (l.on('click', function (t) {
                     s && e.hasClass(v.openLeftSidebarClass) ? (e.removeClass(v.openLeftSidebarClass), T()) : (e.addClass(v.openLeftSidebarClass + ' ' + v.transitionClass), s = !0), t.preventDefault();
                  }), $(document).on('mousedown touchstart', function (t) {
                     $(t.target).closest(o).length || $(t.target)
                        .closest(l).length || !e.hasClass(v.openLeftSidebarClass) || (e.removeClass(v.openLeftSidebarClass), T());
                  }));
            }() : t.addClass(v.disabledLeftSidebarClass), n.length && (A(), _()),
            v.scrollTop && ((B = $('<div class="be-scroll-top"></div>')).appendTo('body'), $(window)
               .on('scroll', function () {
                  $(this).scrollTop() > 220 ? B.fadeIn(500) : B.fadeOut(500);
               }), B.on('touchstart mouseup', function (e) {
                  $('html, body')
                     .animate({
                        scrollTop: 0
                     }, 500), e.preventDefault();
               })), a.length && (L = a, b = x(a), $(window).resize(function () {
               $.isSm() && !t.hasClass(v.offCanvasLeftSidebarClass) ? S(b) : L.hasClass('ps') ? C(b) : void 0 !== b && b && b.nodeName || (b = x(a));
            })), r.length && M(), w.primary = y('clr-primary'), w.success = y('clr-success'), w.warning = y('clr-warning'), w.danger = y('clr-danger'), w.grey = y('clr-grey'), k.be_scroller_notifications = c, k.left_sidebar_scroll = d, k.be_left_sidebar_scroll = u, k.sub_menu_scroll = p, k.chat_scroll = h, k.todo_scroll = f, k.settings_scroll = g, k.messages_scroll = m, k.aside_scroll = b, k.updateScroller = C, k.destroyScroller = S,
            k.initScroller = x, $('.be-icons-nav .dropdown')
            .on('shown.bs.dropdown', function () {
               C(c);
            }),
            $('[data-toggle="tooltip"]')
            .tooltip(), $('[data-toggle="popover"]').popover(),
            $('.modal').on('show.bs.modal', function () {
               $('html').addClass('be-modal-open');
            }), $('.modal').on('hidden.bs.modal', function () {
               $('html').removeClass('be-modal-open');
            }), 'function' == typeof Swal && t.hasClass('be-boxed-layout')) && new MutationObserver(function (e, t) {
            e.forEach(function (e) {
               'attributes' == e.type && 'style' == e.attributeName && (document.body.className.indexOf('swal2-shown') > 0 ? i.css({
                  marginLeft: 'calc(-' + document.body.style.paddingRight + ' / 2)'
               }) : i.css({
                  marginLeft: '0'
               }));
            });
         }).observe(document.body, {
            attributes: !0
         });
      },
      activeItemLeftSidebar: function (e) {
         var t = $(e).parent(),
            i = $(t).parents('li');
         t.hasClass('active') || ($('li.active', o)
            .removeClass('active'), $(i).addClass('active'), $(t)
            .addClass('active'));
      },
   };
}();
App = function () {
   'use strict';
   return App.dashboard = function () {
      var e,
         t,
         i,
         o,
         n,
         a,
         r,
         l,
         s,
         c,
         d,
         u,
         p,
         h,
         f,
         g,
         m,
         b;

      $('[data-toggle="counter"]').each(function (e, t) {
            var i = $(this),
               o = '',
               n = '',
               a = 0,
               r = 0,
               l = 0,
               s = 2.5;
            i.data('prefix') && (o = i.data('prefix')), i.data('suffix') && (n = i.data('suffix')), i.data('start') && (a = i.data('start')), i.data('end') && (r = i.data('end')), i.data('decimals') && (l = i.data('decimals')), i.data('duration') && (s = i.data('duration')), new CountUp(i.get(0), a, r, l, s, {
               suffix: n,
               prefix: o,
               separator: ' ',
            }).start();
         }), $('.toggle-loading').on('click', function () {
            var e = $(this).parents('.widget, .panel');
            e.length && (e.addClass('be-loading-active'), setTimeout(function () {
               e.removeClass('be-loading-active');
            }, 3e3));
         }), e = App.color.primary, t = App.color.warning, i = App.color.success, o = App.color.danger,

         $('#spark1')
         .sparkline('html', {
            width: '85',
            height: '35',
            lineColor: e,
            highlightSpotColor: e,
            highlightLineColor: e,
            fillColor: !1,
            spotColor: !1,
            minSpotColor: !1,
            maxSpotColor: !1,
            lineWidth: 1.15,
         }),
         $('#spark2')
         .sparkline('html', {
            type: 'line',
            width: '85',
            height: '35',
            barWidth: 3,
            barSpacing: 3,
            fillColor: window.chartColors.greena,
            lineColor: window.chartColors.green,
         }),
         $('#spark3')
         .sparkline('html', {
            type: 'line',
            width: '85',
            height: '35',
            lineHeight: 20,
            lineColor: i,
            xwidth: 18,
         }),
         $('#spark4')
         .sparkline('html', {
            width: '85',
            height: '35',
            lineColor: o,
            highlightSpotColor: o,
            highlightLineColor: o,
            fillColor: !1,
            spotColor: !1,
            minSpotColor: !1,
            maxSpotColor: !1,
            lineWidth: 1.15,
         }),
         ['#spark1', '#spark2', '#spark3', '#spark4'].forEach(function (id) {
            $(id).css('visibility', 'visible');
         }),
         r = 'rgb(129, 173, 248)', l = 'rgb(162, 195, 250)';
   }, App;
}();

function reportDate(start, end) {
   $('#daterangepicker-reports').daterangepicker({
      startDate: new Date(start),
      endDate: new Date(end),
      'minDate': window.dateSelectorMinDate ? window.dateSelectorMinDate : '01/01/2020',
      'maxDate': moment().subtract(1, 'days'),
      'opens': 'left',
      locale: {
         'format': 'DD.MM.YYYY',
         'applyLabel': 'Применить',
         'cancelLabel': 'Закрыть',
         'fromLabel': 'От',
         'toLabel': 'До',
         'daysOfWeek': [
            'Вс',
            'Пн',
            'Вт',
            'Ср',
            'Чт',
            'Пт',
            'Сб',
         ],
         'monthNames': [
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
         'firstDay': 1,
      },
   }, function (start, end) {
      var x = new URL(window.location);
      x.searchParams.set('d1', start.format('DD.MM.YYYY'));
      x.searchParams.set('d2', end.format('DD.MM.YYYY'));

      window.location = x.href;
      return false;
   });
}

function formatMoney(amount, decimalCount = 0, decimal = '', thousands = ' ') {
   try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

      const negativeSign = amount < 0 ? '-' : '';

      let i = parseInt(amount = Math.abs(Number(amount) || 0)
         .toFixed(decimalCount)).toString();
      let j = (i.length > 3) ? i.length % 3 : 0;

      return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j)
         .replace(/(\d{3})(?=\d)/g, '$1' + thousands) + (decimalCount ? decimal + Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2) : '');
   } catch (e) {}
}

function initSrokChanger(tarif1cost, tarif2cost, tarif3cost, tarif4cost) {
   $('.srokselector input').on('change', function () {
      var sr = $('input:checked').val() ^ 0;
      var disc = 1;
      if (sr == 3) {
         disc = 0.9;
      }
      if (sr == 6) {
         disc = 0.8;
      }
      $('.val.middle').text(formatMoney(tarif1cost * sr * disc));
      $('.val.big').text(formatMoney(tarif2cost * sr * disc));
      $('.val.extra').text(formatMoney(tarif3cost * sr * disc));
      $('.val.corporate').text(formatMoney(tarif4cost * sr * disc));
      if (sr != 1) {
         $('.priceval .mark').text('рублей');
      } else {
         $('.priceval .mark').text('руб/месяц');
      }

   });
}

function subPromocode() {
   swal({
      title: 'Введите текст промокода',
      content: 'input',
      button: {
         text: 'Применить'
      },
   }).then((value) => {
      if ((value == '') || (value == null)) {
         return false;
      }
      $.post('/bills/applypromo', {
         promo: value
      }, function (data) {
         if (data.result == -2) {
            swal('Это промокод, применяемый к счету. Вам нужно сформировать счет на оплату (выбрать тариф и срок) и указать это промо на странице счета.');
         } else {
            if (data.result <= 0) {
               swal('Промокод с таким текстом не найден');
            } else {
               swal('Отлично, промокод применен, сейчас обновим страницу');
               window.location.reload();
            }
         }
      }, 'json');
   });
   return false;
}

function initTables() {
   if (typeof (tdefOrder) == 'undefined') {
      tdefOrder = [];
   }
   /*
     deftableapi = $('#dtable').DataTable( {
       'language': LANGS,
       'searching': true,
       'pageLength': 25,
       "dom": 'frt<"row"<"col-2"l><"col-4"i><"col-6 text-right"p>>',
       'order': tdefOrder,
     });
   */
}

window.chartColors = {
   red: 'rgb(255, 99, 132)',
   blue: 'rgb(54, 162, 235)',
   orange: 'rgb(255, 159, 64)',
   yellow: 'rgb(255, 205, 86)',
   green: 'rgb(75, 192, 192)',
   purple: 'rgb(153, 102, 255)',
   grey: 'rgb(201, 203, 207)',
   magenta: 'rgb(255, 0, 255)',
   reda: 'rgba(255, 99, 132, 0.3)',
   bluea: 'rgba(54, 162, 235, 0.3)',
   orangea: 'rgba(255, 159, 64, 0.3)',
   yellowa: 'rgba(255, 205, 86, 0.3)',
   greena: 'rgba(75, 192, 192, 0.3)',
   purplea: 'rgba(153, 102, 255, 0.3)',
   greya: 'rgba(201, 203, 207,0.3)',
   magentaa: 'rgb(255, 0, 255, 0.3)',
};
window.chartColorsArray = Object.values(window.chartColors);

function buildSellsByDayGraph(dbDays, dbSells, dbSum) {
   var ByDaysChartData = {
      labels: dbDays,
      datasets: [{
         label: 'Продажи',
         borderColor: window.chartColors.red,
         backgroundColor: window.chartColors.reda,
         fill: true,
         data: dbSells,
         yAxisID: 'y-axis-1',
      }, {
         label: 'Выручка',
         borderColor: window.chartColors.blue,
         backgroundColor: window.chartColors.bluea,
         fill: true,
         data: dbSum,
         yAxisID: 'y-axis-2',
      }, ],
   };
   $('#bydaygraphs').siblings('.mp-loader-static').hide();
   var ctx = $('#bydaygraphs'); //document.getElementById('bydaygraphs').getContext('2d');

   let chart = Chart.Line(ctx, {
      data: ByDaysChartData,
      options: {
         responsive: true,
         maintainAspectRatio: false,
         hoverMode: 'index',
         stacked: false,
         tooltips: {
            callbacks: {
               label: function (label, index) {
                  return ' ' + formatMoney(label.yLabel) + (label.datasetIndex == 1 ? ' р.' : ' шт.');
               },
            },
         },
         scales: {
            yAxes: [{
                  ticks: {
                     callback: function (label, index, labels) {
                        return formatMoney(label);
                     },
                  },
                  type: 'linear',
                  display: 'auto',
                  position: 'left',
                  id: 'y-axis-1',
               },
               {
                  ticks: {
                     callback: function (label, index, labels) {
                        return formatMoney(label);
                     },
                  },
                  type: 'linear',
                  display: 'auto',
                  position: 'right',
                  id: 'y-axis-2',
                  gridLines: {
                     drawOnChartArea: false
                  },
               },
            ],
         },
      },
   });

   return chart;
}

function initWbItemGallery() {
   var e = $('.gallery-container');
   e.masonry({
         columnWidth: 0,
         itemSelector: '.item',
      }),
      $('#sidebar-collapse').click(function () {
         e.masonry();
      }),
      $('.image-zoom').magnificPopup({
         type: 'image',
         mainClass: 'mfp-with-zoom',
         zoom: {
            enabled: !0,
            duration: 300,
            easing: 'ease-in-out',
            opener: function (e) {
               return $(e).parents('div.img');
            },
         },
      });
   e.masonry();
}

function initWbItemSellsGraph(dbDays, dbSells, dbSum, dbPricefinal, dbSumSells) {
   var ByDaysChartData = {
      labels: dbDays,
      datasets: [{
         label: 'Продажи',
         borderColor: window.chartColors.red,
         backgroundColor: window.chartColors.reda,
         fill: true,
         data: dbSells,
         yAxisID: 'y-axis-1',
      }, {
         label: 'Остаток',
         borderColor: window.chartColors.blue,
         backgroundColor: window.chartColors.bluea,
         fill: true,
         data: dbSum,
         yAxisID: 'y-axis-2',
      }, {
         label: 'Цена',
         steppedLine: 'middle',
         borderColor: window.chartColors.green,
         backgroundColor: window.chartColors.greena,
         fill: true,
         data: dbPricefinal,
         hidden: true,
         yAxisID: 'y-axis-3',
      }, {
         label: 'Выручка',
         borderColor: window.chartColors.purple,
         backgroundColor: window.chartColors.purplea,
         fill: true,
         data: dbSumSells,
         hidden: true,
         yAxisID: 'y-axis-4',
      }, ],
   };

   $('#sellsGraph').siblings('.mp-loader-static').hide();

   let chart = Chart.Line($('#sellsGraph'), {
      data: ByDaysChartData,
      options: {
         responsive: true,

         maintainAspectRatio: false,
         hoverMode: 'index',
         stacked: false,
         tooltips: {
            callbacks: {
               label: function (label, index) {
                  var t = '',
                     e = '';
                  if (label.datasetIndex == 0) {
                     t = 'Продажи';
                     e = 'шт';
                  }
                  if (label.datasetIndex == 1) {
                     t = 'Остаток';
                     e = 'шт';
                  }
                  if (label.datasetIndex == 2) {
                     t = 'Цена';
                     e = 'р';
                  }
                  if (label.datasetIndex == 3) {
                     t = 'Выручка';
                     e = 'р';
                  }

                  return t + ': ' + formatMoney(label.yLabel) + ' ' + e;
               },
            },
            //            mode: 'index',
            intersect: true,
         },
         scales: {
            yAxes: [{
                  ticks: {
                     callback: function (label, index, labels) {
                        return formatMoney(label);
                     },
                     fontColor: window.chartColors.red,
                  },
                  type: 'linear',
                  display: 'auto',
                  position: 'right',
                  id: 'y-axis-1',
                  gridLines: {
                     drawOnChartArea: true
                  },
               },
               {
                  ticks: {
                     callback: function (label, index, labels) {
                        return formatMoney(label);
                     },
                     fontColor: window.chartColors.blue,
                  },
                  type: 'linear',
                  display: 'auto',
                  position: 'left',
                  id: 'y-axis-2',
                  gridLines: {
                     drawOnChartArea: false
                  },
               },
               {
                  ticks: {
                     callback: function (label, index, labels) {
                        return formatMoney(label);
                     },
                     fontColor: window.chartColors.green,
                  },
                  type: 'linear',
                  display: 'auto',
                  position: 'left',
                  id: 'y-axis-3',
                  gridLines: {
                     drawOnChartArea: false
                  },
               },
               {
                  ticks: {
                     callback: function (label, index, labels) {
                        return formatMoney(label);
                     },
                     fontColor: window.chartColors.purple,
                  },
                  type: 'linear',
                  display: 'auto',
                  position: 'right',
                  id: 'y-axis-4',
                  gridLines: {
                     drawOnChartArea: false
                  },
               },
            ],
         },
      },
   });

   return chart;
}

function buildWBBrandSellsByDayGraph(dbDays, dbSells, dbSum) {
   var ByDaysChartData = {
      labels: dbDays,
      datasets: [{
         label: 'Продажи',
         borderColor: window.chartColors.red,
         backgroundColor: window.chartColors.reda,
         fill: true,
         data: dbSells,
         yAxisID: 'y-axis-1',
      }, {
         label: 'Остаток',
         borderColor: window.chartColors.blue,
         backgroundColor: window.chartColors.bluea,
         fill: true,
         data: dbSum,
         yAxisID: 'y-axis-2',
      }, ],
   };
   window.myLine = Chart.Line($('#sellsGraph'), {
      data: ByDaysChartData,
      options: {
         responsive: true,
         maintainAspectRatio: false,
         hoverMode: 'index',
         stacked: false,
         tooltips: {
            callbacks: {
               label: function (label, index) {
                  return (label.datasetIndex == 1 ? ' Остаток:' : ' Продаж:') + ' ' + formatMoney(label.yLabel) + ' шт';
               },
            },
            mode: 'index',
            intersect: true,
         },
         scales: {
            yAxes: [{
                  ticks: {
                     callback: function (label, index, labels) {
                        return formatMoney(label);
                     },
                  },
                  type: 'linear',
                  display: 'auto',
                  position: 'left',
                  id: 'y-axis-1',
               },
               {
                  ticks: {
                     callback: function (label, index, labels) {
                        return formatMoney(label);
                     },
                  },
                  type: 'linear',
                  display: 'auto',
                  position: 'right',
                  id: 'y-axis-2',
                  gridLines: {
                     drawOnChartArea: false
                  },
               },
            ],
         },
      },
   });
}

function buildWBBrandDonutSells(data, labels) {
   window.myDoughnut = new Chart($('#donutCatSells'), {
      type: 'doughnut',
      data: {
         datasets: [{
            data: data,
            backgroundColor: window.chartColorsArray,
            label: 'Продажи',
         }, ],
         labels: labels,
      },
      options: {
         responsive: true,
         maintainAspectRatio: false,
         legend: {
            position: 'left'
         },
         animation: {
            animateScale: true,
            animateRotate: true,
         },
         tooltips: {
            callbacks: {
               label: function (label, index) {
                  return index.labels[label.index] + ': ' + formatMoney(index.datasets[label.datasetIndex]['data'][label.index]);
               },
            },
         },
      },
   });
}

function buildWBCatDonutSells(data, labels) {
   window.myDoughnut = new Chart($('#donutSells'), {
      type: 'doughnut',
      data: {
         datasets: [{
            data: data,
            backgroundColor: window.chartColorsArray,
            label: 'Продажи',
         }, ],
         labels: labels,
      },
      options: {
         responsive: true,
         maintainAspectRatio: false,
         legend: {
            position: 'left'
         },
         animation: {
            animateScale: true,
            animateRotate: true,
         },
         tooltips: {
            callbacks: {
               label: function (label, index) {
                  return index.labels[label.index] + ': ' + formatMoney(index.datasets[label.datasetIndex]['data'][label.index]);
               },
            },
         },
      },
   });
}

function buildWBCatDonutSumms(data, labels) {
   window.myDoughnut = new Chart($('#donutSums'), {
      type: 'doughnut',
      data: {
         datasets: [{
            data: data,
            backgroundColor: window.chartColorsArray,
            label: 'Выручка',
         }, ],
         labels: labels,
      },
      options: {
         responsive: true,
         maintainAspectRatio: false,
         legend: {
            position: 'right'
         },
         animation: {
            animateScale: true,
            animateRotate: true,
         },
         tooltips: {
            callbacks: {
               label: function (label, index) {
                  return index.labels[label.index] + ': ' + formatMoney(index.datasets[label.datasetIndex]['data'][label.index]);
               },
            },
         },
      },
   });
}

function buildWBCatDonutBrandSells(data, labels) {
   window.myDoughnut = new Chart($('#donutBrandSells'), {
      type: 'doughnut',
      data: {
         datasets: [{
            data: data,
            backgroundColor: window.chartColorsArray,
            label: 'Продажи',
         }, ],
         labels: labels,
      },
      options: {
         responsive: true,
         maintainAspectRatio: false,
         legend: {
            position: 'left'
         },
         animation: {
            animateScale: true,
            animateRotate: true,
         },
         tooltips: {
            callbacks: {
               label: function (label, index) {
                  return index.labels[label.index] + ': ' + formatMoney(index.datasets[label.datasetIndex]['data'][label.index]);
               },
            },
         },
      },
   });
}

function buildWBCatDonutBrandSumms(data, labels) {
   window.myDoughnut = new Chart($('#donutBrandSums'), {
      type: 'doughnut',
      data: {
         datasets: [{
            data: data,
            backgroundColor: window.chartColorsArray,
            label: 'Выручка',
         }, ],
         labels: labels,
      },
      options: {
         responsive: true,
         maintainAspectRatio: false,
         legend: {
            position: 'right'
         },
         animation: {
            animateScale: true,
            animateRotate: true,
         },
         tooltips: {
            callbacks: {
               label: function (label, index) {
                  return index.labels[label.index] + ': ' + formatMoney(index.datasets[label.datasetIndex]['data'][label.index]);
               },
            },
         },
      },
   });
}

function buildChartDoughnut(data, labels, selector, label, limit = 6) {
   if (labels.length > limit) {
      labels = labels.slice(0, limit);
      labels.push('Остальные');

      data = data.reduce((accum, cur, index) => {
         if (index <= limit) {
            accum.push(cur);
         } else {
            accum[accum.length - 1] = accum[accum.length - 1] + cur;
         }

         return accum;
      }, []);
   }
   $(selector).siblings('.mp-loader-static').hide();

   let chart = new Chart($(selector), {
      type: 'doughnut',
      data: {
         datasets: [{
            data: data,
            backgroundColor: window.chartColorsArray,
            label: label,
         }, ],
         labels: labels,
      },
      options: {
         responsive: true,
         maintainAspectRatio: false,
         legend: {
            position: 'left'
         },
         animation: {
            animateScale: true,
            animateRotate: true,
         },
         tooltips: {
            callbacks: {
               label: function (label, index) {
                  return index.labels[label.index] + ': ' + formatMoney(index.datasets[label.datasetIndex]['data'][label.index]);
               },
            },
         },
      },
   });

   return chart;
}

function buildWBBrandDonutSumms(data, labels) {
   window.myDoughnut = new Chart($('#donutCatSums'), {
      type: 'doughnut',
      data: {
         datasets: [{
            data: data,
            backgroundColor: window.chartColorsArray,
            label: 'Выручка',
         }, ],
         labels: labels,
      },
      options: {
         responsive: true,
         maintainAspectRatio: false,
         legend: {
            position: 'right'
         },
         animation: {
            animateScale: true,
            animateRotate: true,
         },
         tooltips: {
            callbacks: {
               label: function (label, index) {
                  return index.labels[label.index] + ': ' + formatMoney(index.datasets[label.datasetIndex]['data'][label.index]);
               },
            },
         },
      },
   });
}

function redrawSubDirsCharts() {
   x = getDataForSubCatsPies('cnt');
   window.sellsDon.config.data.datasets[0].data = x.values;
   window.sellsDon.config.data.labels = x.labels;
   window.sellsDon.update();
   x = getDataForSubCatsPies('sm');
   window.sumsDon.config.data.datasets[0].data = x.values;
   window.sumsDon.config.data.labels = x.labels;
   window.sumsDon.update();
}

function getStocks(d, id) {
   $('#hourlyTable').hide();
   $('#hourlyStocksData').html(d);
   $('.be-loading').addClass('be-loading-active');
   $('#hourlyStocks').niftyModal();
   $.post('/getHourlyStock', {
      'd': d,
      'i': id,
   }, function (data) {
      var fd = data;
      var sm = 0;
      var ht = '';
      if (fd.length == 0) {
         ht += '<tr><td class=\'text-center\' colspan="7">Данных по товару за ' + d + ' на данный момент нет</td></tr>';
      } else {
         for (i in fd) {
            var r = data[i];
            ht += '<tr><td>' + r['tm'] + '</td><td>' + r['price'] + '</td><td>' + r['pricefinal'] + '</td><td>' + r['commentscount'] + '</td><td>' + r['rating'] + '</td><td>' + r['count'] + '</td><td>' + r['sells'] + '</td></tr>';
            sm += r['sells'];
            lc = r['count'];
         }
         ht += '<tr><th colspan="4">Итого<th><th>' + lc + '</th><th>' + sm + '</th></tr>';
      }
      $('#hourlydata').html(ht);
      $('#hourlyTable').show();
      $('.be-loading').removeClass('be-loading-active');
   }, 'json');
}

function _getStocks(d, id) {
   $('#hourlyStocksData').html(d);

   let grid = window.wbitemsalesandbalancehourly;
   $('#hourlyStocks').niftyModal();

   grid.api.setRowData([]);
   grid.api.setPinnedBottomRowData([]);
   grid.api.showLoadingOverlay();

   $.get(`/api/wb/get/item/${id}/balance_by_day?d=${d}`, function (data) {

      grid.api.hideOverlay();
      grid.api.setRowData(data);
      setTimeout(() => {
         grid.api.sizeColumnsToFit();
      });
      if (!data.length) {
         grid.overlayNoRowsTemplate = 'Данных по товару за ' + d + ' на данный момент нет';
         grid.api.showNoRowsOverlay();
      } else {

         let summ = data.reduce(function (acc, current) {
            acc.sales += current.sales;
            return acc;
         }, {
            sales: 0
         });

         grid.api.setPinnedBottomRowData([{
            tm: 'Итого',
            price: null,
            final_price: null,
            comments: null,
            rating: null,
            balance: data[data.length - 1].balance,
            sales: summ.sales,
         }, ]);

      }

   }, 'json');
}

function initWBOrdersByRegionSize(keys, data, el) {
   const labels = Object.keys(data)
      .map(d => moment(d).format('DD.MM'));
   const datasets = [];
   const percentForHidden = 65;

   let ind = -1;

   Object.keys(keys).forEach((key, index) => {

      ind++;
      if (ind >= window.chartColorsArray.length) {
         ind = 0;
      }

      let balance = [],
         sales = [],
         salesHidden = false,
         balanceHidden = false;
      Object.keys(data).forEach(date => {

         balance.push(data[date][key].balance);
         sales.push(data[date][key].sales);

      });

      if (index !== 0) {
         salesHidden = (sales.filter(s => s === 'NaN').length / sales.length) * 100 >= percentForHidden;
         balanceHidden = (balance.filter(b => b === 'NaN').length / balance.length) * 100 >= percentForHidden;
      }

      datasets.push({
         label: key + ' заказы',
         borderColor: window.chartColorsArray[ind],
         data: sales,
         fill: false,
         hidden: salesHidden,
         yAxisID: 'y-axis',
      });
      datasets.push({
         label: key + ' остатки',
         borderColor: window.chartColorsArray[ind],
         data: balance,
         fill: false,
         hidden: balanceHidden,
         yAxisID: 'y-axis-1',
         borderDash: [5, 5],
      });
   });

   datasets.push({
      label: 'Скрыть все',
      fill: false,
      borderColor: window.chartColors.purple,
      backgroundColor: window.chartColors.purplea,
      data: [],
   });

   const legendLength = datasets.length - 1;

   const chart = Chart.Line($(el), {
      data: {
         labels,
         datasets,
      },
      options: {
         responsive: true,
         maintainAspectRatio: false,
         hoverMode: 'index',
         legend: {
            position: 'right',
            onClick: function (e, legendItem) {
               let show = chart.getVisibleDatasetCount() - 1;
               if (legendItem.datasetIndex === legendLength) {
                  for (let i = 0; i < legendLength; i++) {
                     chart.getDatasetMeta(i).hidden = (show == 0) ? false : true;
                  }
               } else {
                  chart.getDatasetMeta(legendItem.datasetIndex).hidden = chart.isDatasetVisible(legendItem.datasetIndex);
               }
               chart.config.data.datasets[legendLength].label = (chart.getVisibleDatasetCount() == 1) ? 'Показать все' : 'Скрыть все';
               chart.update();
            },
         },
         stacked: false,
         scales: {
            yAxes: [{
                  ticks: {
                     callback: function (label, index, labels) {
                        return formatMoney(label);
                     },
                  },
                  type: 'linear',
                  display: 'auto',
                  position: 'right',
                  id: 'y-axis',
                  gridLines: {
                     drawOnChartArea: true
                  },
               },
               {
                  ticks: {
                     callback: function (label, index, labels) {
                        return formatMoney(label);
                     },
                  },
                  type: 'linear',
                  display: 'auto',
                  position: 'left',
                  id: 'y-axis-1',
                  gridLines: {
                     drawOnChartArea: true
                  },
               },
            ],
         },
      },
   });

}

function initWBPosesInCats(cats, ticks, dbSells, dbSum, dbPricefinal, dbSumSells) {
   let ds = [];
   let cnt = window.chartColorsArray.length;
   let ind = -1;
   let dels = [];
   for (let c in cats) {
      ind++;
      if (ind >= cnt) {
         ind = 0;
      }
      b = {
         label: c,
         borderColor: window.chartColorsArray[ind],
         data: cats[c],
         fill: false,
         hidden: null,
         yAxisID: 'y-axis',
      };
      ds.push(b);
      dels.push(c);
   }
   dels.push('Продажи');
   dels.push('Остаток');
   dels.push('Цена');
   dels.push('Выручка');
   ds.push({
      label: 'Продажи',
      borderColor: window.chartColors.red,
      backgroundColor: window.chartColors.reda,
      fill: true,
      data: dbSells,
      hidden: true,
      yAxisID: 'y-axis-1',
   });
   ds.push({
      label: 'Остаток',
      borderColor: window.chartColors.blue,
      backgroundColor: window.chartColors.bluea,
      fill: true,
      data: dbSum,
      hidden: true,
      yAxisID: 'y-axis-2',
   });
   ds.push({
      label: 'Цена',
      steppedLine: 'middle',
      borderColor: window.chartColors.green,
      backgroundColor: window.chartColors.greena,
      fill: true,
      data: dbPricefinal,
      hidden: true,
      yAxisID: 'y-axis-3',
   });
   ds.push({
      label: 'Выручка',
      borderColor: window.chartColors.purple,
      backgroundColor: window.chartColors.purplea,
      fill: true,
      data: dbSumSells,
      hidden: true,
      yAxisID: 'y-axis-4',
   });
   ds.push({
      label: 'Скрыть все',
      fill: false,
      borderColor: window.chartColors.purple,
      backgroundColor: window.chartColors.purplea,
      data: [],
   });
   const legendLength = ds.length - 1;

   var ByDaysChartData = {
      labels: ticks,
      datasets: ds,
   };
   window.myLine = Chart.Line($('#catsGraph'), {
      data: ByDaysChartData,
      options: {
         responsive: true,
         maintainAspectRatio: false,
         hoverMode: 'index',
         legend: {
            position: 'right',
            onClick: function (e, legendItem) {
               let ci = window.myLine;
               let show = window.myLine.getVisibleDatasetCount() - 1;
               if (legendItem.datasetIndex === legendLength) {
                  for (let i = 0; i < legendLength; i++) {
                     ci.getDatasetMeta(i).hidden = (show === 0) ? false : true;
                  }
               } else {
                  ci.getDatasetMeta(legendItem.datasetIndex).hidden = ci.isDatasetVisible(legendItem.datasetIndex);
               }
               ci.config.data.datasets[legendLength].label = (window.myLine.getVisibleDatasetCount() === 1) ? 'Показать все' : 'Скрыть все';
               ci.update();
            },
         },
         stacked: false,
         scales: {
            yAxes: [{
                  type: 'linear',
                  display: 'auto',
                  ticks: {
                     min: 1,
                     reverse: true,
                  },
                  position: 'right',
                  id: 'y-axis',
                  gridLines: {
                     drawOnChartArea: true
                  },
               },
               {
                  ticks: {
                     callback: function (label, index, labels) {
                        return formatMoney(label);
                     },
                     fontColor: window.chartColors.red,
                  },
                  type: 'linear',
                  display: 'auto',
                  position: 'right',
                  id: 'y-axis-1',
                  gridLines: {
                     drawOnChartArea: true
                  },
               },
               {
                  ticks: {
                     callback: function (label, index, labels) {
                        return formatMoney(label);
                     },
                     fontColor: window.chartColors.blue,
                  },
                  type: 'linear',
                  display: 'auto',
                  position: 'left',
                  id: 'y-axis-2',
                  gridLines: {
                     drawOnChartArea: false
                  },
               },
               {
                  ticks: {
                     callback: function (label, index, labels) {
                        return formatMoney(label);
                     },
                     fontColor: window.chartColors.green,
                  },
                  type: 'linear',
                  display: 'auto',
                  position: 'left',
                  id: 'y-axis-3',
                  gridLines: {
                     drawOnChartArea: false
                  },
               },
               {
                  ticks: {
                     callback: function (label, index, labels) {
                        return formatMoney(label);
                     },
                     fontColor: window.chartColors.purple,
                  },
                  type: 'linear',
                  display: 'auto',
                  position: 'right',
                  id: 'y-axis-4',
                  gridLines: {
                     drawOnChartArea: false
                  },
               },
            ],
         },
      },
   });
}

function imAlive() {
   setTimeout(function () {
      $.post('/imalive', {}, function () {});
   }, 2000);

}

function initMetas() {}

function buildTrandByWeeksGraph(labels, sells, sellssum, items, brands, sellers, sumperitem) {
   ds = [];
   dels = [];
   ds.push({
      label: 'Продажи',
      borderColor: window.chartColors.red,
      backgroundColor: window.chartColors.reda,
      data: sells,
      fill: true,
      hidden: null,
      yAxisID: 'axsells',
   });
   ds.push({
      label: 'Выручка',
      borderColor: window.chartColors.blue,
      backgroundColor: window.chartColors.bluea,
      data: sellssum,
      fill: true,
      hidden: null,
      yAxisID: 'axsellssum',
   });
   ds.push({
      label: 'Число товаров',
      borderColor: window.chartColors.orange,
      backgroundColor: window.chartColors.orangea,
      data: items,
      fill: true,
      hidden: null,
      yAxisID: 'axitems',
   });
   ds.push({
      label: 'Число брендов',
      borderColor: window.chartColors.green,
      backgroundColor: window.chartColors.greena,
      data: brands,
      fill: true,
      hidden: null,
      yAxisID: 'axbrands',
   });
   ds.push({
      label: 'Число продавцов',
      borderColor: window.chartColors.yellow,
      backgroundColor: window.chartColors.yellow,
      data: sellers,
      fill: true,
      hidden: null,
      yAxisID: 'axsellers',
   });
   ds.push({
      label: 'Выручка на товар',
      borderColor: window.chartColors.purple,
      backgroundColor: window.chartColors.purplea,
      data: sumperitem,
      fill: true,
      hidden: null,
      yAxisID: 'axrubperitem',
   });
   dels.push('Продажи');
   dels.push('Выручка');
   dels.push('Число товаров');
   dels.push('Число брендов');
   dels.push('Число продавцов');
   dels.push('Выручка на товар');
   var ByDaysChartData = {
      labels: labels,
      datasets: ds,
   };
   $('#trandsGraph').siblings('.mp-loader-static').hide();
   let chart = Chart.Line($('#trandsGraph'), {
      data: ByDaysChartData,
      options: {
         responsive: true,
         maintainAspectRatio: false,
         hoverMode: 'index',
         legend: {
            position: 'right'
         },
         stacked: false,
         tooltips: {
            callbacks: {
               label: function (label, index) {
                  return dels[label.datasetIndex] + ': ' + formatMoney(label.yLabel);
               },
            },
            mode: 'index',
            intersect: true,
         },
         scales: {
            yAxes: [{
                  ticks: {
                     fontColor: window.chartColors.red
                  },
                  type: 'linear',
                  display: 'auto',
                  position: 'left',
                  id: 'axsells',
                  gridLines: {
                     drawOnChartArea: true
                  },
               },
               {
                  ticks: {
                     fontColor: window.chartColors.blue
                  },
                  type: 'linear',
                  display: 'auto',
                  position: 'right',
                  id: 'axsellssum',
                  gridLines: {
                     drawOnChartArea: true
                  },
               },
               {
                  ticks: {
                     fontColor: window.chartColors.orange
                  },
                  type: 'linear',
                  display: 'auto',
                  position: 'left',
                  id: 'axitems',
                  gridLines: {
                     drawOnChartArea: true
                  },
               },
               {
                  ticks: {
                     fontColor: window.chartColors.green
                  },
                  type: 'linear',
                  display: 'auto',
                  position: 'left',
                  id: 'axbrands',
                  gridLines: {
                     drawOnChartArea: true
                  },
               },
               {
                  ticks: {
                     fontColor: window.chartColors.yellow
                  },
                  type: 'linear',
                  display: 'auto',
                  position: 'left',
                  id: 'axsellers',
                  gridLines: {
                     drawOnChartArea: true
                  },
               },
               {
                  ticks: {
                     fontColor: window.chartColors.purple
                  },
                  type: 'linear',
                  display: 'auto',
                  position: 'right',
                  id: 'axrubperitem',
                  gridLines: {
                     drawOnChartArea: true
                  },
               },

            ],
         },
      },
   });

   return chart;
}

function initRegionToStore(regions, stores, regionToStore) {
   stores.forEach(function (s) {
      $('#storeList')
         .append('<a href=\'#\' data-id=\'' + s.id + '\' class=\'list-group-item list-group-item-action pl-2 pr-2 pt-2 pb-2\'>' + s.name + '</a>');
   });
   regions.forEach(function (s) {
      $('#regionList')
         .append('<a href=\'#\' data-id=\'' + s.id + '\' class=\'list-group-item list-group-item-action pl-2 pr-2 pt-2 pb-2\'>' + s.name + '</a>');
   });

   [{
      list: 'storeList',
      key: 'storeId',
      map: 'regionId',
      available: 'availableRegions',
      notAvailable: 'notAvailableRegions',
      ref: regions,
   }, {
      list: 'regionList',
      key: 'regionId',
      map: 'storeId',
      available: 'availableStores',
      notAvailable: 'notAvailableStores',
      ref: stores,
   }, ].forEach(function (tab) {

      $('#' + tab.list + ' a').click(function (event) {
         event.preventDefault();
         $('#' + tab.list + ' a.active').removeClass('active');
         $(this).addClass('active');
         var id = $(this).data('id');

         var ids = regionToStore.filter(function (rs) {
            return rs[tab.key] == id;
         }).map(function (rs) {
            return rs[tab.map];
         });

         var available = [],
            notAvailable = [];

         tab.ref.forEach(function (r) {
            if (ids.indexOf(r.id) !== -1) {
               available.push(r);
            } else {
               notAvailable.push(r);
            }
         });

         $('#' + tab.available).empty();
         $('#' + tab.notAvailable).empty();
         available.forEach(function (r) {
            $('#' + tab.available)
               .append('<li data-id=\'' + r.id + '\' class=\'list-group-item pl-2 pr-2 pt-2 pb-2\'>' + r.name + '</li>');
         });
         notAvailable.forEach(function (r) {
            $('#' + tab.notAvailable)
               .append('<li data-id=\'' + r.id + '\' class=\'list-group-item pl-2 pr-2 pt-2 pb-2\'>' + r.name + '</li>');
         });

      });

   });

   $('#storeList a[data-id="2737"]').click();
   $('#regionList a[data-id="3929"]').click();
}

function initNoteToItem(mp, sku) {
   const btn = $('#itemNoteSaveBtn'),
      textarea = $('#itemNote');

   $(btn).click(() => {
      save();
   });

   $(textarea).focusout(() => {
      save();
   });

   function save() {
      $(btn).prop('disabled', true);
      $(btn).text('Сохраняю ...');
      $.post('/api/favorite_items/note', {
         mp: mp,
         sku: sku,
         note: $(textarea).val(),
      }, function (data) {
         $(btn).prop('disabled', false);
         $(btn).text('Сохранить');
      }, 'json');
   }
}

function addItemToGroup(mp, sku) {
   $.post('/api/groups/item', {
      mp: mp,
      sku: sku,
      group: $('#fRubricSelect').val(),
      name: $('#fNewRubric').val(),
   }, function (data) {
      window.location.reload();
   }, 'json');
}

function addItemsToGroup(mp, grid) {
   $.post('/api/groups/item', {
      mp: mp,
      sku: grid.gridOptions.api.getSelectedNodes()
         .map(node => node.data.id),
      group: $('#fRubricSelect').val(),
      name: $('#fNewRubric').val(),
   }, function (data) {
      //window.location.reload();
      grid.gridOptions.api.deselectAll();
      $('#addToGroup').niftyModal('hide');
      $.gritter.add({
         title: 'Успешно',
         text: 'Выбранные позиции успешно добавлены',
         class_name: 'color success',
         time: 1500,

      });
   }, 'json');
}

function removeItemToGroup(groupId, id) {

   $.ajax({
      url: `/api/groups/${groupId}/item/${id}`,
      type: 'DELETE',
      success: function (data) {
         $(`#gr${id}`).remove();
      },
   });
}