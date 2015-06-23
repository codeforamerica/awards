$('.js-smooth-scroll').click(function(e){
    var that = this;
    var target = $(that.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
    };
});