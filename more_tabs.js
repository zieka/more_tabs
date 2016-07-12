function TabOverflow() {
    show($('.more-tab'));
    var TabsWidth = $(".nav-tabs-more").width();
    var threshold = 5;

    if ($('.nav-tabs-more>li').not('.more-tab').length != 0) {
        var LastTabWidth = $('.nav-tabs-more>li').not('.more-tab').last().width();
        var LastTabPosition = $('.nav-tabs-more>li').not('.more-tab').last().position().left;
    } else {
        var LastTabWidth = 1;
        var LastTabPosition = 1;
    }

    // If there is overflow lets move the overflowing tab to the more dropdown
    if ((1.5*LastTabWidth + LastTabPosition + threshold) >= TabsWidth) {
        movetoMore();
        TabOverflow();
    }
    // If there is enough room for a tab lets move the menu item back to the tabs list
    if ($('.more-tab-menu>li').length == 1) {
      if ((LastTabWidth + LastTabPosition + threshold) < TabsWidth) {
          movetoTabs();
      }
    }
    if ((3*LastTabWidth + LastTabPosition + threshold) < TabsWidth) {
        movetoTabs();
    }
    if ($('.more-tab-menu>li').length == 0) {
        hide($('.more-tab'));
    }
};

function movetoMore() {
    $('.more-tab-menu').prepend($('.nav-tabs-more>li').not('.more-tab').last()); //move item to begining
}

function movetoTabs(elem) {
    $('.more-tab').before($('.more-tab-menu>li').first()); //move item before the more tab
}

function hide(elem) {
    //unless hide class exists add
    if (!(elem.hasClass('hide'))) {
      elem.addClass('hide')
    }
}

function show(elem) {
    elem.removeClass('hide')
}

(function() {
  //TODO: need to have iife to set initial configuration
  // Can iterate through the height of the last non more tab

}());


// iife to check if screen has changed
(function() {
    var width = screen.width;
    setInterval(function() {
        if (screen.width !== width) {
            width = screen.width;
            $(window).trigger('widthchange');
        }
    }, 50);
}());

//TODO:on width change close more menu
$(window).bind('widthchange', TabOverflow);
