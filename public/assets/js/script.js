$(document).ready(function () {

    // toggle mobile menu
    $('[data-toggle="toggle-nav"]').on('click', function () {
        $(this).closest('nav').find($(this).attr('data-target')).toggleClass('hidden');
        return false;
    });

    // feather icons
    feather.replace();

    // smooth scroll
    var scroll = new SmoothScroll('a[href*="#"]');

    // tiny slider
    $('#slider-1').slick({
        infinite: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });

    $('#slider-2').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        customPaging: function (slider, i) {
            return '<div class="bg-white br-round w-1 h-1 opacity-50 mt-5" id=' + i + '> </div>'
        },
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    // -------------------------------
    // 💧 Apple-like Section Transitions
    // -------------------------------

    // Add transition classes
    $('section').addClass('section-transition');

    function showSection(id) {
        $('section').removeClass('section-visible');
        $(id).addClass('section-visible');
    }

    // On nav click
    $('nav a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        const targetId = $(this).attr('href');

        // scroll animation handled by SmoothScroll
        history.pushState(null, null, targetId);
        showSection(targetId);
    });

    // Show current section on page load
    const currentHash = window.location.hash || '#home';
    showSection(currentHash);
});
