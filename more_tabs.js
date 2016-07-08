function TabOverflow() {
    show($('.more-tab'));

    if ($('.nav-tabs-more>li').not('.more-tab').length != 0) {
        var LastTabWidth = $('.nav-tabs-more>li').not('.more-tab').last().width();
        var LastTabPosition = $('.nav-tabs-more>li').not('.more-tab').last().position().left;
        var threshold = 0;
    } else {
        var LastTabWidth = 1;
        var LastTabPosition = 1;
        var threshold = 100;
    }

    // If there is overflow lets move the overflowing tab to the more dropdown
    if ((2*LastTabWidth + LastTabPosition + threshold) >= screen.width) {
        movetoMore($('.nav-tabs-more>li').not('.more-tab').last());
    }
    // If there is enough room for a tab lets move the menu item back to the tabs list
    if (3*LastTabWidth + LastTabPosition + threshold < screen.width) {
        movetoTabs($('.more-tab-menu>li').first());
    }
    if ($('.more-tab-menu>li').length == 0) {
        hide($('.more-tab'));
    }
};

function movetoMore(elem) {
    $('.more-tab-menu').prepend(elem); //move item to begining
}

function movetoTabs(elem) {
    $('.more-tab').before(elem); //move item before the more tab
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
