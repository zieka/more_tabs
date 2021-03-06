
if (typeof jQuery === 'undefined') {
  throw new Error('More Tab requires jQuery')
}

function TabOverflow() {
    show($('.more-tab'));

    var TabsWidth = $(".nav-tabs-more").width();
    var threshold = 5; //for tunable purposes

    if ($('.nav-tabs-more>li').not('.more-tab').length != 0) {
        var LastTabWidth = $('.nav-tabs-more>li').not('.more-tab').last().width();
        var LastTabPosition = $('.nav-tabs-more>li').not('.more-tab').last().position().left;
    } else {
        var LastTabWidth = 1;
        var LastTabPosition = 1;
    }

    // If there is overflow lets move the overflowing tab to the more dropdown
    if ((1.5 * LastTabWidth + LastTabPosition + threshold) >= TabsWidth) {
        movetoMore();
        TabOverflow();
    }
    // If there is enough room for a tab lets move the menu item back to the tabs list
    if ($('.more-tab-menu>li').length == 1) {
        if ((LastTabWidth + LastTabPosition - threshold) < TabsWidth) {
            movetoTabs();
        }
    }
    if ((3 * LastTabWidth + LastTabPosition - threshold) < TabsWidth) {
        movetoTabs();
    }
    if ($('.more-tab-menu>li').length == 0) {
        hide($('.more-tab'));
    }
};

//move item to the top of the more tab list
function movetoMore() {
    $('.more-tab-menu').prepend($('.nav-tabs-more>li').not('.more-tab').last());
}

//move item to the left of the more tab
function movetoTabs(elem) {
    $('.more-tab').before($('.more-tab-menu>li').first());
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

// invoke on window load
$(window).bind("load", function() {
    TabOverflow();
});

// call function if window is resized
window.addEventListener("resize", TabOverflow);
