;(function(){

    var menuButton = $('.menu-button'),
        sidenav = $('.sidebar-nav');

    menuButton.on('click', function() {

        if(sidenav.is(":visible")) {
            sidenav.slideUp();
        }
        else {
            sidenav.slideDown();
        }
    });

})();
