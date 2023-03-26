$( window ).on("load", () => {
    $("h2:first").fadeIn(1000);
    $(".dbl-col").fadeOut(500, () =>{
        $(".dbl-col").fadeIn(500);
    });
});