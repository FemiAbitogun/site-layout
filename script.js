




$(window).on("load", function () {

    /*
        $(".profile div").hover(function () {
          //  $(this).effect( "bounce", { times: 3 }, 300);
        })
    */


    /*
        selector.effect( "bounce", {arguments}, speed );
        Parameters
        Here is the description of all the arguments − 
>>>> direction − The direction of the effect. Can be "up", "down", "left", "right". Default is "up".
    >>>>>  distance − Distance to bounce. Default is 20
       >>>>> mode: The mode of the effect. Can be "show "hide" or "effect". Default is "effect".
          >>>> times − Times to bounce. Default is 5.
        
        */



    $("#hi ").hide();
    $("#mynameis").hide();
    $("#femi").hide();

    $("#phone ").hide();
    $("#mail2 ").hide();
    $("#title ").hide();



    $("#hi").toggle(1000, function () {

        $("#mynameis").toggle(1000, function () {

            $("#femi").toggle(1000, function () {

                setTimeout(() => {

                    callnext();
                }, 100)
            })

        })
    })




    function callnext() {

        $("#title ").toggle(1000, function () {

            $("#phone ").toggle(1000, function () {

                $("#mail2 ").toggle(1000)

            })
        })


    }



    setInterval(() => {

        $(".profile #hi").effect("bounce", { times: 8, distance: -60 }, 1000);
        $(".profile #mynameis").effect("bounce", { times: 8, distance: -50 }, 1000);
        $(".profile  #femi").effect("bounce", { times: 10, distance: -20 }, 1000);
    }, 4000)







}

)

