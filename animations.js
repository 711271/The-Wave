var HEIGHT = $(window).height();

            //This function moves a div down
            function moveDown(divId){
                $("#div"+divId).animate({
                    top: HEIGHT-60
                }, 1000, function(){
                    //Callback function for when the div reaches the bottom
                    moveUp(divId);
                });
            }

            //This function moves a div up
            function moveUp(divId){
                $("#div"+divId).animate({
                    top: 0
                }, 300, function(){
                    //Callback function for when the div reaches the top
                    //Start the next div's animation
                    if(divId<8){
                        moveDown(divId+1);
                    }
                    //If this is the last div, restart the animation after a delay
                    else{
                        setTimeout(function(){
                            moveDown(1);
                        }, 300);
                    }
                });
            }
        moveDown(1);
            //Start the animation with the first div