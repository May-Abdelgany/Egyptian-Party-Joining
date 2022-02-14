/// <reference path="../typings/index.d.ts" />

//close sidebar 
function close() {

    $(".containt").animate({ paddingLeft: "0px" }, 600);
    $(".openList").animate({ width: "0px" }, 600, function () {
        $(".openList").css({ display: "none" });
    });
}

//action of button open
$(".btnOpen").click(function () {
    let listwidth = $(".openList").css("width");
    if (listwidth == "0px") {
        $(".openList").css({ display: "block" });
        $(".openList").animate({ width: "250px" }, 600);
        $(".containt").animate({ paddingLeft: "250px" }, 600);
    }
    else {
        close();
    }
});

//action of X
$(".openList i").click(close);

//details 
$(".details h2").click(function () {
    $(this).next().slideToggle(500, function () {
        $(".details p").not(this).slideUp(300);
    });
});
//counter dowen to event 
setInterval(
    function () {

        let date1 = new Date("04/14/2025")
        let date2 = new Date();
        // get total seconds between the times
        delta = Math.abs(date2 - date1) / 1000;

        // calculate (and subtract) whole days
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;

        // calculate (and subtract) whole hours
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        // calculate (and subtract) whole minutes
        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        // what's left is seconds
        var seconds = Math.floor(delta % 60);
        $(".days").text(`${days} D`)
        $(".hours").text(`${hours} h`)
        $(".minutes").text(`${minutes} m`)
        $(".seconds").text(`${seconds} s`)
    });

//counter dowen of text area    
let countChar = $("textarea").val();
function count(countChar) {
    let number = 100;
    number -= countChar.length;
    console.log(number)
    $("form span").text(number);
}
