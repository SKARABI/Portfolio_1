    /*I ZOOM THE PICTURES IN THE CARDS*/
$(document).ready(function(){
    $('.materialboxed').materialbox();

    /* SWITCH BETWEEN IMAGES IN THE CAROUSEL*/
    $('.carousel').carousel();

    /* SHOW MESSAGES WHILE SCROLLING*/
    var options = [{selector: '.card', offset: 500, callback: function(el) { Materialize.toast("This is our ScrollFire Card!", 1500 ); } }, {selector: '.card', offset: 5000, callback: function(el) { Materialize.toast("Please continue scrolling!", 1500 ); } }, {selector: '.card', offset: 400, callback: function(el) { Materialize.showStaggeredList($(el)); } }, {selector: '.card', offset: 5000, callback: function(el) { Materialize.fadeInImage($(el)); } } ]; Materialize.scrollFire(options);


});