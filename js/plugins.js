$(document).ready(function () {
    $(".hamburguer").click(function () {
        $("nav li").toggle(1000);
    });
});

$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#bg-2').css('top',(0-(scrolled*2.25))+'px');
    $('#bg-3').css('top',(20-(scrolled*2))+'px');
    $('#bg-4').css('top',(40-(scrolled*1.75))+'px');
    $('#bg-5').css('top',(60-(scrolled*1.5))+'px');
    $('#bg-6').css('top',(80-(scrolled*1.25))+'px');
    $('#bg-7').css('top',(100-(scrolled*1))+'px');
    $('#bg-8').css('top',(120-(scrolled*.75))+'px');
    $('#bg-9').css('top',(140-(scrolled*.5))+'px');
    $('#bg-10').css('top',(160-(scrolled*.25))+'px');
}
