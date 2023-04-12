/*Transition animation on page load*/
$(window).on('load', () => {
    $("body").slideDown(250);
});

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

//Animation change on link click
$("a").click( (e) => {
    e.preventDefault();
    let location = e.currentTarget.href;
    $("body").slideUp(250, ()=>{
        window.location.href = location;
    })
})