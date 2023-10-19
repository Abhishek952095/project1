let sideNav=document.getElementsByClassName("right-nav");
sideNav.style.left="1000px";
 function showhideNav(){
            if(sideNav.style.left == "1000px"){
                sideNav.style.left = "980px";
            }
            else{
                 sideNav.style.left = "1000px";
             }
        }