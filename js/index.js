const resultsClose = () => {
    $('.search__results').removeClass('search__results--open')
}

const backShow = () => {
    // $('.content__back').addClass('content__back--show')
    $('.content__back').fadeIn()
}

const backHide = () => {
    // $('.content__back').removeClass('content__back--show')
    $('.content__back').fadeOut()
}

// when document is loaded
jQuery(document).ready(function () {

    $('.header__search').click(() => {
        $('.bigMap__search').slideToggle()
    })

    $('.header__toggler').click(() => {
        $('.header__nav').addClass('header__nav--toggled')
        backShow();
        $(document).mouseup(function (e){ // событие клика по веб-документу
            // debugger
            var div = $(".header__nav"); // тут указываем ID элемента
            
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.removeClass('header__nav--toggled') // скрываем его
                backHide()
            }
        });
    })

    // filter prechange
    $(".filter__body:not(.filter__body--active)").slideToggle(300);

    // filter open function
    $('.filter__close').click(function (event) {
        $(this).closest('.filter__optBlock').children(".filter__body").slideToggle(300);
        $(this).toggleClass('filter__close--active')
        event.stopPropagation();
    });

    // language toggler
    $('.language__heading').click(() => {
        $('.language__body').toggleClass('language__body--open')
        $(document).mouseup(function (e){ // событие клика по веб-документу
            // backHide()
            var div = $(".language__body"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.removeClass('language__body--open')
            }
        });
    })

    // slick slider 1
    $('#slider-1').slick({
        slidesToShow: 2,
        infinite: false,
        appendArrows: $('#arrows-1'),
        nextArrow: '<a href="javascript://" class="arrow arrow-next"><span class="icon-arrow"></span></a>',
        prevArrow: '<a href="javascript://" class="arrow arrow-prev"><span class="icon-arrow"></span></a>',
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // slick slider 2
    $('#slider-2').slick({
        slidesToShow: 2,
        infinite: false,
        appendArrows: $('#arrows-2'),
        nextArrow: '<a href="javascript://" class="arrow arrow-next"><span class="icon-arrow"></span></a>',
        prevArrow: '<a href="javascript://" class="arrow arrow-prev"><span class="icon-arrow"></span></a>',
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })

});