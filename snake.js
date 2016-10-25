/**
 * Created by Jeka on 24.10.2016.
 */
mouse_x = mouse_y = 0;
sAngle_x = sAngle_y = 0;
newDiv = document.createElement("div");
newDiv.setAttribute("class", "sBody");
document.body.appendChild(newDiv);
newDiv.style.top = sHead.style.top;
newDiv.style.left = sHead.style.left.split("px")[0]-10 +"px";

function to_mouse() {
    setTimeout(function()
    {
        sHead_x = sHead.style.left.split("px")[0];
        sHead_y = sHead.style.top.split("px")[0];

        if(mouse_x > sHead_x){
            sHead.style.left = sHead_x - (-1) +"px";
            if(mouse_y != sHead_y)
            {
                sAngle_x = 15;
            }
            else {
                sAngle_x = 20;
            }
        }
        if(mouse_x < sHead_x){
            sHead.style.left = sHead_x - 1 +"px";
            if(mouse_y != sHead_y)
            {
                sAngle_x = -15;
            }
            else {
                sAngle_x = -20;
            }
        }
        if(mouse_y > sHead_y){
            sHead.style.top = sHead_y - (-1) +"px";
            if(mouse_x != sHead_x)
            {
                sAngle_y = 15;
            }
            else {
                sAngle_y = 20;
            }
        }
        if(mouse_y < sHead_y){
            sHead.style.top =  sHead_y  - 1 +"px";
            if(mouse_x != sHead_x)
            {
                sAngle_y = -15;
            }
            else {
                sAngle_y = -20;
            }
        }
        if(mouse_x == sHead_x)
        {
            sAngle_x = 0;
        }
        if(mouse_y == sHead_y)
        {
            sAngle_y = 0;
        }
        to_mouse();
    }, 10)
}
to_mouse();




function movement() {
    setTimeout(function()
    {
        sHead_x = sHead.style.left.split("px")[0];
        sHead_y = sHead.style.top.split("px")[0];
        sBody = document.getElementsByClassName("sBody")[0];

        if(mouse_x > sHead_x){
            sBody.style.left = sHead_x - sAngle_x  + "px";
        }
        if(mouse_x < sHead_x){
            sBody.style.left = sHead_x - sAngle_x  + "px";
        }
        if(mouse_y > sHead_y){
            sBody.style.top = sHead_y - sAngle_y + "px";
        }
        if(mouse_y < sHead_y){
            sBody.style.top = sHead_y - sAngle_y + "px";
        }
        if(mouse_x == sHead_x)
        {
            sBody.style.left = sHead_x - sAngle_x  + "px";
        }
        if(mouse_y == sHead_y)
        {
            sBody.style.top = sHead_y - sAngle_y + "px";
        }

        movement();
    }, 1)
}
movement();
ns4 = (document.layers) ? true : false;
ie4 = (document.all) ? true : false;

function init() {
    if(ns4) {
        document.captureEvents(Event.MOUSEMOVE);
    }
    document.onmousemove = mousemove;
}

function mousemove(event) {

    mouse_x = event.clientX;
    mouse_y = event.clientY;
}
init();