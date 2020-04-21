//initializing your player spot and opponent spot
var firstEmpty = true;
var secondEmpty = true;
var foesLeft = 2;

$(document).ready(function () {

    //$(".container").click(function () {
        //var activate = function () {

            

                $("#spaceghost").on("click", function () {
                    //$("#spaceghost").detach().appendTo('#player');
                    //$("#spaceghost").removeClass("col-lg-3 col-md-3 col-sm-6").addClass("col-sm-12");
                    
                    console.log("You clicked me!");
                });
                /*$("#zorak").one("click", function () {
                    $("#zorak").detach().appendTo('#player');
                    $("#zorak").removeClass("col-lg-3 col-md-3 col-sm-6").addClass("col-sm-12");
                    firstEmpty = false;
                    console.log(firstEmpty);
                });
                $("#moltar").one("click", function () {
                    $("#moltar").detach().appendTo('#player');
                    $("#moltar").removeClass("col-lg-3 col-md-3 col-sm-6").addClass("col-sm-12");
                    firstEmpty = false;
                    console.log(firstEmpty);
                });
                $("#hulk").one("click", function () {
                    $("#hulk").detach().appendTo('#player');
                    $("#hulk").removeClass("col-lg-3 col-md-3 col-sm-6").addClass("col-sm-12");
                    firstEmpty = false;
                });
            } else {
                $(".gallery #ironman").one("click", function () {
                    $("#ironman").detach().appendTo('#opponent');
                    $("#ironman").removeClass("col-lg-3 col-md-3 col-sm-6").addClass("col-sm-12");
                    $("#attackbtn").prop("disabled", false);
                    secondEmpty = false;
                });
                $(".gallery #cap").one("click", function () {
                    $("#cap").detach().appendTo('#opponent');
                    $("#cap").removeClass("col-lg-3 col-md-3 col-sm-6").addClass("col-sm-12");
                    $("#attackbtn").prop("disabled", false);
                    secondEmpty = false;
                });
                $(".gallery #thor").one("click", function () {
                    $("#thor").detach().appendTo('#opponent');
                    $("#thor").removeClass("col-lg-3 col-md-3 col-sm-6").addClass("col-sm-12");
                    $("#attackbtn").prop("disabled", false);
                    secondEmpty = false;
                });
                $(".gallery #hulk").one("click", function () {
                    $("#hulk").detach().appendTo('#opponent');
                    $("#hulk").removeClass("col-lg-3 col-md-3 col-sm-6").addClass("col-sm-12");
                    $("#attackbtn").prop("disabled", false);
                    secondEmpty = false;
                });

            }
        };

        activate(); */
    });


    $("#attackbtn").on("click", function () {
        //if (!firstEmpty && !secondEmpty) {
            //console.log(firstEmpty);
        //}
    //else {
        console.log("Hello there!");
    }
//}

    $("#resetbtn").on("click", function () {
        $(".thumb").off("click");
        var resetAttack = $(".attack").attr("value");
        $(".attack").text(resetAttack);
    })
