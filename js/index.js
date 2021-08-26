var sample_data = {
    "af": 0,
    "al": 0,
    "dz": 0,
    "ao": 0,
    "ag": 0,
    "ar": 0,
    "am": 0,
    "au": 0,
    "at": 0,
    "az": 0,
    "bs": 0,
    "bh": 0,
    "bd": 0,
    "bb": 0,
    "by": 0,
    "be": 0,
    "bz": 0,
    "bj": 0,
    "bt": 0,
    "bo": 0,
    "ba": 0,
    "bw": 0,
    "br": 0,
    "bn": 0,
    "bg": 0,
    "bf": 0,
    "bi": 0,
    "kh": 0,
    "cm": 0,
    "ca": 0,
    "cv": 0,
    "cf": 0,
    "td": 0,
    "cl": 0,
    "cn": 0,
    "co": 0,
    "km": 0,
    "cd": 0,
    "cg": 0,
    "cr": 0,
    "ci": 0,
    "hr": 0,
    "cy": 0,
    "cz": 0,
    "dk": 0,
    "dj": 0,
    "dm": 0,
    "do": 0,
    "ec": 0,
    "eg": 0,
    "sv": 0,
    "gq": 0,
    "er": 0,
    "ee": 0,
    "et": 0,
    "fj": 0,
    "fi": 0,
    "fr": 0,
    "ga": 0,
    "gm": 0,
    "ge": 0,
    "de": 0,
    "gh": 0,
    "gr": 0,
    "gd": 0,
    "gt": 0,
    "gn": 0,
    "gw": 0,
    "gy": 0,
    "ht": 0,
    "hn": 0,
    "hk": 0,
    "hu": 0,
    "is": 0,
    "in": 0,
    "id": 0,
    "ir": 0,
    "iq": 0,
    "ie": 0,
    "il": 0,
    "it": 0,
    "jm": 0,
    "jp": 0,
    "jo": 0,
    "kz": 0,
    "ke": 0,
    "ki": 0,
    "kr": 0,
    "gl": 0,
    "kw": 0,
    "kg": 0,
    "la": 0,
    "lv": 0,
    "lb": 0,
    "ls": 0,
    "lr": 0,
    "ly": 0,
    "lt": 0,
    "lu": 0,
    "mk": 0,
    "mg": 0,
    "mw": 0,
    "my": 0,
    "mv": 0,
    "ml": 0,
    "mt": 0,
    "mr": 0,
    "mu": 0,
    "mx": 0,
    "md": 0,
    "mn": 0,
    "me": 0,
    "ma": 0,
    "mz": 0,
    "mm": 0,
    "na": 0,
    "np": 0,
    "nl": 0,
    "nz": 0,
    "ni": 0,
    "ne": 0,
    "ng": 0,
    "no": 0,
    "om": 0,
    "pk": 0,
    "pa": 0,
    "pg": 0,
    "py": 0,
    "pe": 0,
    "ph": 0,
    "pl": 0,
    "pt": 0,
    "qa": 0,
    "ro": 0,
    "ru": 0,
    "rw": 0,
    "ws": 0,
    "st": 0,
    "sa": 0,
    "sn": 0,
    "rs": 0,
    "sc": 0,
    "sl": 0,
    "sg": 0,
    "sk": 0,
    "si": 0,
    "sb": 0,
    "za": 0,
    "es": 0,
    "lk": 0,
    "kn": 0,
    "lc": 0,
    "vc": 0,
    "sd": 0,
    "sr": 0,
    "sz": 0,
    "se": 0,
    "ch": 0,
    "sy": 0,
    "tw": 0,
    "tj": 0,
    "tz": 0,
    "th": 0,
    "tl": 0,
    "tg": 0,
    "to": 0,
    "tt": 0,
    "tn": 0,
    "tr": 0,
    "tm": 0,
    "ug": 0,
    "ua": 0,
    "ae": 0,
    "gb": 0,
    "us": 0,
    "uy": 0,
    "uz": 0,
    "vu": 0,
    "ve": 0,
    "vn": 0,
    "ye": 0,
    "zm": 0,
    "zw": 0

};

let sample_data_active = ['af', 'us', 'ru']

const id_part = '#jqvmap1_'
const results = $('.search__results')
let result = $('<span class="result"></span>')
const search_array = {
    'us': 'United States of America',
    'ru': 'Russian Federation',
    'af': 'Afganistan',
}
const empty = $('<p class="search__empty"> Ничего не найдено </p>')

// main search function
const searchEngine = (text) => {
    let queries = search_array;
    // console.log(queries)
    let bool
    let boolCount = 0

    for(let key in queries){
        bool = queries[key].toLowerCase().includes(text)
        debugger
        if(text != '' && bool){
            boolCount++;
            console.log('include!');
            empty.detach()
            let include = result.html(queries[key]).attr('country', key);
            console.log(include.html())
            results.append(include)
        } 
        
    }

    if(boolCount > 0){
        bool = true;
    }

    if( !bool){
        console.log('false')
        results.children().detach()
        results.append(empty)
        debugger
    }
}



// popup open function
const popupOpen = () => {
    $('.popups').fadeIn()
}
// popup close function
const popupClose = () => {
    $('.popups').fadeOut()
    let id_part = '#jqvmap1_'
    $('.jqvmap-region').removeClass('selected');
    $('.jqvmap-region').removeClass('jqvmap-region--blur')
    $('.bigMap__search .search__field').attr('disabled', false)
}

const resultsClose = () => {
    $('.search__results').removeClass('search__results--open')
}

// when document is loaded
jQuery(document).ready(function () {
    
    // search results show
    $('#search-btn-1').click(() => {
        let text = $('.bigMap__search .search__field').val()
        console.log(text)
        searchEngine(text);
        console.log('click!');
        $('.search__results').addClass('search__results--open')


        $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $(".search__results"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.removeClass('search__results--open') // скрываем его
            }
        });

        $('.result').click((el) => {
            let country = el.target.getAttribute('country')
            console.log(country)

            for(let i = 0; i < sample_data_active.length; i++){
                if(sample_data_active[i] == country){
                    console.log('countryyyyyyyyyy')
                    $('.jqvmap-region').removeClass('selected');
                    $(id_part + country).addClass('selected');
                    $('.jqvmap-region').addClass('jqvmap-region--blur')
                    resultsClose()
                    $('.bigMap__search .search__field').attr('disabled', true)
                    // console.log($('.bigMap__search .search__field').target.value)
                    popupOpen();
                }
            }
        })
    })

    

    for (let key in sample_data) {
        sample_data_active.forEach((item) => {
            if(key == item){
                $(id_part + key).addClass('avaliable');
                console.log('Match!');
                sample_data[key] = '1'
                console.log(id_part + key)
                
            }
        })
    }

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
    })

    // vector map
    jQuery('#map').vectorMap({
        map: 'world_en',
        backgroundColor: 'transparent',
        color: '#ffffff',
        hoverOpacity: 1,
        selectedColor: '',
        borderColor: '#000000',
        borderOpacity: 1,
        borderWidth: 0.5,
        enableZoom: true,
        showTooltip: true,
        scaleColors: ['#ECE8DF', '#05BE70'],
        values: sample_data,
        normalizeFunction: 'polynomial',
        onRegionSelect: function (event, code, region) {

            sample_data_active.forEach((item)=>{
                if(code == item){
                    $('.jqvmap-region').removeClass('selected');
                    $(id_part + code).addClass('selected');
                    $('.jqvmap-region').addClass('jqvmap-region--blur')
                    popupOpen();
                }
            })


            
            
            // alert(id_part + code)
        },

        onRegionDeselect: function (event, code, region) {
            let id_part = '#jqvmap1_'
            $(id_part + code).removeClass('selected');
            $('.jqvmap-region').removeClass('jqvmap-region--blur')
            // alert(id_part + code)
        },
    });

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