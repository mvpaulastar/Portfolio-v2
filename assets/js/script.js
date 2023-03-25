/*Toggle banner and about section on button click*/
$(".call-to-action").click( () => {
    $(".banner").slideToggle(500);
    $(".about").slideToggle(500);
})

/*Responsive Mobile Menu*/
$(".hamburger").click( () => {
    $(".navbar").animate({left: "0px"});
});
$(".menu-exit").click( () => {
    $(".navbar").animate({left: "-110%"});
});
$(window).resize( () => {
    if($(window).width() > 700){
        $(".navbar").animate({left: "0px"})
    }
});