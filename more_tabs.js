// Test if last nav tab is overflowing
function isTabOverflow() {
    var LastTabWidth = $('.nav-tabs-more>li[class!="hide"]').not('.more-tab').last().width();
    var LastTabPosition = $('.nav-tabs-more>li[class!="hide"]').not('.more-tab').last().position().left;
    var threshold = 0;

    // If there is overflow lets move the overflowing tab to the more dropdown
    if ((LastTabWidth + LastTabPosition + threshold) >= screen.width) {
        console.log("overflow");
        movetoMore($('.nav-tabs-more>li').not('.more-tab').last());
    }
    // If there is enough room for a tab lets move the menu item back to the tabs list
    if (LastTabPosition <= screen.width) {
        console.log("no overflow");
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
    elem.addClass('hide')
}

// annoymous iife to check if screen has changed
(function() {
    var width = screen.width;
    var height = screen.height;
    setInterval(function() {
        if (screen.width !== width || screen.height !== height) {
            width = screen.width;
            height = screen.height;
            $(window).trigger('resolutionchange');
        }
    }, 50);
}());


$(window).bind('resolutionchange', isTabOverflow);
