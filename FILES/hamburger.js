/* Article progress bar */
var $globalSearchBox = '';
$('progress').affix({
    offset: {
        top: $('.main-header').height()
    }
});

/* Adds dropshadow to fixed header when scrolling */
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 60) {
        $(".main-header").addClass("shadow");
    }
    if (scroll <= 60) {
        $(".main-header").removeClass("shadow");
    }
});

/* Hamburger menu */
$('.menu-link').click(function () {
    $('.menu-link').toggleClass('collapsed');
    $('.overlay').toggleClass('hidden');
    $('.main-menu-pane').toggleClass('slide');
    $('body').toggleClass('noscroll');
});
$('.overlay').click(function () {
    $('.menu-link').toggleClass('collapsed');
    $('.overlay').toggleClass('hidden');
    $('.main-menu-pane').toggleClass('slide');
    $('body').toggleClass('noscroll');
});

/* Responsive header */
$('.search-link').click(function () {
    $('.search-link').toggleClass('collapsed');
    $('.header-search').toggleClass('hidden');
});

/* Article reading progress bar */
$(document).on('ready', function () {
    $globalSearchBox = $('#txtGlobalSearchBox');
    var winHeight = $(window).height(),
        docHeight = $('div.article-body').height(),
        progressBar = $('progress'),
        max, value;

    /* Set the max scrollable area */
    max = docHeight - winHeight;
    progressBar.attr('max', max);

    $(document).on('scroll', function () {
        value = $(window).scrollTop();
        progressBar.attr('value', value);
    });
    //$('#txtGlobalSearchBox')
    $globalSearchBox.bind("keyup", function (event) {
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            btnGlobalSearch();
        }
    });
});
$(window).on('resize', function () {
    winHeight = $(window).height(),
        docHeight = $('div.article-body').height();

    max = docHeight - winHeight;
    progressBar.attr('max', max);

    value = $(window).scrollTop();
    progressBar.attr('value', value);
});
/* prevent search if empty*/
function btnGlobalSearch() {
    var txtGlobalSearchVal = $globalSearchBox.val();
    if (txtGlobalSearchVal.trim() == "") {
        return false;
    }
    else {
        var txtGlobalSearchEncoded = encodeURIComponent(txtGlobalSearchVal)
        var searchURL = "/search?q=" + txtGlobalSearchEncoded;
        window.location.href = searchURL;
    }
}

/* Lazy Load Images */
$(function () {
    $('.lazy').lazy({
        effect: "fadeIn",
        effectTime: 500,
        threshold: 0
    });
});