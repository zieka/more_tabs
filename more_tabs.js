// Test if last nav tab is overflowing
function isTabOverflow() {
    var LastTabWidth = $('.tabs-more>li[class!="hide"]').not('.tabs-more-dropdown').last().width();
    var LastTabPosition = $('.tabs-more>li[class!="hide"]').not('.tabs-more-dropdown').last().position().left;
    var threshold = 0;

    if ((LastTabWidth +LastTabPosition + threshold) >= screen.width) {
        console.log("overflow");
        // Does more tab exist
          // If more tab does not exist add it and hide 2 tabs
            // unshift 2 tabs to the dropdown on more tab
          // If more tabe exists pop 1 tab
            // unshift 1 tab to dropdown
        hide($('.tabs-more>li[class!="hide"]').not('.tabs-more-dropdown').last());
        show($('.tabs-more-dropdown'));
    }
    if (LastTabPosition <= screen.width) {
        console.log("no overflow");


        show($('.tabs-more>li[class="hide"]').not('.tabs-more-dropdown').first());
    }
};

function hide(elem) {
    elem.addClass('hide')
}

function show(elem) {
    elem.removeClass('hide')
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
