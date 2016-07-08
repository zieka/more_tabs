function TabOverflow() {
    show($('.more-tab'));

    if ($('.nav-tabs-more>li').not('.more-tab').length != 0) {
        var LastTabWidth = $('.nav-tabs-more>li').not('.more-tab').last().width();
        var LastTabPosition = $('.nav-tabs-more>li').not('.more-tab').last().position().left;
        var threshold = 100;
    } else {
        var LastTabWidth = 0;
        var LastTabPosition = 0;
    }

    // If there is overflow lets move the overflowing tab to the more dropdown
    if ((LastTabWidth + LastTabPosition + threshold) >= screen.width) {
        movetoMore($('.nav-tabs-more>li').not('.more-tab').last());
    }
    // If there is enough room for a tab lets move the menu item back to the tabs list
    if (2 * LastTabWidth + LastTabPosition + threshold < screen.width) {
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
    //TODO:check if hide class exists first
    elem.addClass('hide')
}

function show(elem) {
    elem.removeClass('hide')
}

//TODO: need to have initial iife to set initial configuration
(function() {
    'use strict';
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


$(window).bind('widthchange', TabOverflow);
