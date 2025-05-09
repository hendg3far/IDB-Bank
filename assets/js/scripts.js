$(document).ready(function () {
    $('.slick--hero').slick({
        dots: true,
        prevArrow: $(`[data-target=".hero-carousel"].slickPrev`),
        nextArrow: $(`[data-target=".hero-carousel"].slickNext`),
        appendDots: $(`[data-target=".hero-carousel"].slick-dots`),
    });

    $('.slick--coins').slick({
        infinite: true,
        slidesToShow: 1,
        variableWidth: true,
        arrows: false,
        autoplay: true,
        speed: 1000,
    });

    var swiper = new Swiper(".mySwiper", {
        freeMode: true,
        grabCursor: true,
        simulateTouch: true,
        slidesPerView: 'auto',
        spaceBetween: 15,
        pagination: false,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1000,
    });

    $('.slick--events').slick({
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

    $('.news--content h5').matchHeight();
    $('.news--content p').matchHeight();


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

    // document.querySelectorAll('.service--link').forEach(link => {
    //     link.addEventListener('mouseenter', () => {
    //         const bg = link.getAttribute('data-background');
    //         document.querySelector('.service--section').style.backgroundImage = bg;
    //         document.querySelector('.service--block-img').style.backgroundImage = bg;
    //     });

    //     link.addEventListener('mouseleave', () => {
    //         document.querySelector('.service--section').style.backgroundImage = '';
    //         document.querySelector('.service--block-img').style.backgroundImage = ''; // or reset to default
    //     });
    // });

    const serviceLinks = document.querySelectorAll('.service--link');
    const section = document.querySelector('.service--section');
    const blockImg = document.querySelector('.service--block-img');

    function updateBackground() {
        const activeLink = document.querySelector('.service--link.active');
        if (activeLink) {
            const bg = activeLink.getAttribute('data-background');
            section.style.backgroundImage = bg;
            blockImg.style.backgroundImage = bg;
        }
    }

    const firstServiceLink = serviceLinks[0];
    if (firstServiceLink) {
        firstServiceLink.classList.add('active');
    }
    updateBackground();

    serviceLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            serviceLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            updateBackground();
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

document.addEventListener("DOMContentLoaded", function () {
    const tables = document.querySelectorAll("table.table-dark-color");

    tables.forEach((table) => {
        const tbody = table.querySelector("tbody");
        const rows = Array.from(tbody.querySelectorAll("tr"));

        rows.forEach((row, index) => {
            // Skip the last row
            if (index < rows.length - 1) {
                const tdCount = row.querySelectorAll("td").length;

                if (tdCount > 0) {
                    const spacerRow = document.createElement("tr");
                    const td = document.createElement("td");

                    td.className = "bg-white"; // or your desired class
                    td.colSpan = tdCount + 1;

                    spacerRow.appendChild(td);
                    row.after(spacerRow);
                }
            }
        });
    });
});