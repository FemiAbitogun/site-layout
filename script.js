





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


    setInterval(() => {

        $(".profile h2").effect("bounce", { times: 10, distance: -60 }, 1000);
        $(".profile #femi").effect("bounce", { times: 10, distance: 15 }, 1000);

    }, 2000)



}

)

