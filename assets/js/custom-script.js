var progressCallback = function () {
    $('.progress-bar').each(function () {
        newWidth = $(this).attr('aria-valuenow');
        $(this).text($(this).text() + "  -  " + newWidth + "%");
        $(this).animate({
            width: newWidth + '%'
        }, 1000);
    });
};

$(document).ready(function () {
    /* Progress animation */
    progressCallback();

    /* Add CSS animation class */
    $('h1').addClass('wow animated fadeInDown');
    $('h2,#portfoliolist').addClass('wow animated fadeInUp');
    $('.img-profile,.btn').addClass('wow animated fadeInLeft');
    $('.mini-desc').addClass('wow animated fadeIn');
    $('.timeline-badge').addClass('wow animated fadeInLeft');
    $('.timeline-panel').addClass('wow animated rotateInUpLeft');
    $('.languages i').addClass('wow animated fadeInRight');
    $('.hobbies .badge').addClass('wow animated fadeInRight');
    $('.published div,.awards li,.contact li').addClass('wow animated fadeInRight');
    $('.follow li').addClass('wow animated flipInY');
    $('.quick-contact i,.service-icon i').addClass('wow bounceIn');

    /* WOW Animation When You Scroll */
    wow = new WOW({
        mobile: false
    });
    wow.init();

    /* Portfolio */
    var filterList = {
        init: function () {
            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap',
                // call the hover effect
                onMixEnd: filterList.hoverEffect()
            });
        },
        hoverEffect: function () {
            // Simple parallax effect
            if ($(document).width() > 480) {
                $('#portfoliolist .portfolio').hover(
                    function () {
                        $(this).find('.label').stop().animate({ bottom: 0 }, 200, 'easeOutQuad');
                        $(this).find('img').stop().animate({ top: -30 }, 500, 'easeOutQuad');
                    },
                    function () {
                        $(this).find('.label').stop().animate({ bottom: -40 }, 200, 'easeInQuad');
                        $(this).find('img').stop().animate({ top: 0 }, 300, 'easeOutQuad');
                    }
                );
            }
        }
    };

    // Run the show!
    filterList.init();

    // Tooltip
    $('[data-toggle="tooltip"]').tooltip()
});