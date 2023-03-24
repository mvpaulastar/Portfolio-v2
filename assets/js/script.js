let about = $(".about");
let banner = $(".banner");
let callToAction = $(".call-to-action");

callToAction.click( () => {
    banner.slideToggle(500);
    about.slideToggle(500);
})