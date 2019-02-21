$(".button").click(function() {

    var rotateDeg = 20;
    var skrString = "Skr";

    var left = Math.random() > 0.5 ? Math.random() * -300 - 20 : Math.random() * 300 + 20;
    var top = Math.random() > 0.5 ? Math.random() * -300 - 20 : Math.random() * 300 + 20; 

    var fontSize = Math.random() * 100 + 16;

    // =======================================

    var deg = Math.random() < 0.5 ? -rotateDeg : rotateDeg;

    $(this).css("transform", "rotate(" + deg + "deg)");
    $(this).animate({
        transform: "rotate(10)"
    }, 100, function() {
        $(this).css("transform", "rotate(0deg)")
    });

    for (var i = 0; i < Math.random() * 30; i++) {
        skrString += "r";
    }

    skrString += "a";

    $(".button-area").prepend("<p class='skr'>" + skrString + "</p>");

    $(".skr").animate({
        marginLeft: -left,
        marginTop: -top,
        fontSize: fontSize,
        opacity: 0
    }, 500);

});