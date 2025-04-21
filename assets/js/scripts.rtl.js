$(document).ready(function () {
    $('.slick--hero').slick({
        rtl: true,
        dots: true,
        prevArrow: $(`[data-target=".hero-carousel"].slickPrev`),
        nextArrow: $(`[data-target=".hero-carousel"].slickNext`),
        appendDots: $(`[data-target=".hero-carousel"].slick-dots`),
    });

    $('.slick--coins').slick({
        rtl: true,
        infinite: true,
        slidesToShow: 1,
        variableWidth: true,
        arrows: false,
        autoplay: true,
        speed: 1000
    });

    $('.slick--events').slick({
        rtl: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $(`[data-target=".slick--events"].slickPrev`),
        nextArrow: $(`[data-target=".slick--events"].slickNext`),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    dots: false
                }
            }, {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
        ]
    })

    $('.slick--news').slick({
        rtl: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })

    $('.hero--item .hero-item--title').matchHeight();
    $('.hero--item .hero-item--desc').matchHeight();


    var $input = $(".flatpickr");

    if ($input.length) {
        var calendarInstance = $input.flatpickr({
            static: true,
            allowInput: true,
        });

        // Click on calendar icon
        $(".calendar-icon, .calendar-arrow").on("click", function () {
            if (calendarInstance && calendarInstance.open) {
                calendarInstance.open();
            }
        });
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const submenuLinks = document.querySelectorAll('.dropdown-submenu > a');

    submenuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const submenu = this.nextElementSibling;

            // Close any other open submenus
            document.querySelectorAll('.dropdown-submenu .dropdown-menu.show').forEach(menu => {
                if (menu !== submenu) menu.classList.remove('show');
            });

            // Toggle current submenu
            submenu.classList.toggle('show');
        });
    });

    // Prevent click inside submenu from closing it
    document.querySelectorAll('.dropdown-submenu .dropdown-menu').forEach(menu => {
        menu.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    });

    var input = document.querySelector("#phone");
    window.intlTelInput(input, {
        separateDialCode: true,
        initialCountry: "eg",
    });

    var phones = document.querySelectorAll(".phone");

    phones.forEach(function (input) {
        window.intlTelInput(input, {
            separateDialCode: true,
            initialCountry: "eg",
        });
    });


    var sumoSelect = $('.sumo-select');

    if (sumoSelect) {
        sumoSelect.SumoSelect({ triggerChangeCombined: true });
    }

    $('.ui.slider').each(function () {
        const $slider = $(this);
        $(this).addClass('reversed');
        const min = parseInt($slider.attr('min'), 10) || 0;
        const max = parseInt($slider.attr('max'), 10) || 100;
        const value = parseInt($slider.attr('start'), 10) || min;

        $slider.slider({
            min: min,
            max: max,
            start: value,
            showThumbTooltip: true,
            tooltipConfig: {
                position: 'top center',
                variation: 'small visible'
            },
            slide: function (event, ui) {
                console.log(`Slider value: ${ui.value}`);
            }
        });
    });

    document.querySelectorAll('.service--link').forEach(link => {
        link.addEventListener('mouseenter', () => {
            const bg = link.getAttribute('data-background');
            document.querySelector('.service--section').style.backgroundImage = bg;
            document.querySelector('.service--block-img').style.backgroundImage = bg;
        });

        link.addEventListener('mouseleave', () => {
            document.querySelector('.service--section').style.backgroundImage = '';
            document.querySelector('.service--block-img').style.backgroundImage = ''; // or reset to default
        });
    });


});


const backToTopBtn = document.querySelector('.backtotop');

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

window.addEventListener('load', function () {
    const spinner = document.getElementById('LoadingSpinner');
    if (spinner) {
        spinner.style.display = 'none';
    }
});