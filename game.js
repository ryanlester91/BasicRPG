//initializing your player spot and opponent spot
var firstEmpty = true;
var secondEmpty = true;
var foesLeft = 2;

$(document).ready(function () {

    $(".container").click(function () {
        var activate = function () {
        }
    }


    $("#attackbtn").on("click", function () {
        if (!firstEmpty && !secondEmpty) {
            console.log(firstEmpty);
        }}

    $("#resetbtn").on("click", function () {
        $(".thumb").off("click");
        var resetAttack = $(".attack").attr("value");
        $(".attack").text(resetAttack);
