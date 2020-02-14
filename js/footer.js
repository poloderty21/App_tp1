$(window).on("load",function(){
    var screenWith = window.screen.width;
    if(screenWith>1200){
        $(window).scroll(function(){
            var y = $(window).scrollTop();
            console.log(y);
            if(y > 950){
                var array =[];
                array[0] = document.querySelector(".pleineLargeur h3");
                array[1] = document.querySelector(".social");
                array[2] = document.querySelector(".navigation");
                array[3] = document.querySelector(".copyright");
                for (let i = 0; i < array.length; i++) {
                    array[i].classList.add("animationOpaciteSection");
                }
            }
        });
    }
});