client = document.getElementById("main");
drow = client.getContext("2d");

client.width = 1920;
client.height = 1070;

pointer = {
    "x" : 0,
    "y" : 0
}
mouse = {
    "x" : 0,
    "y" : 0
}
pointerEvent = {}

function mousepointer(){
    drow.fillStyle = "red";
    pointer["x"] += (mouse["x"] - pointer["x"])/10 - 1.3
    pointer["y"] += (mouse["y"] - pointer["y"])/10 - 1.3
    drow.fillRect(
        pointer["x"],
        pointer["y"],
        10,
        10
    )
}

class strtBUTTON{
    constructor (x , y , width , height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        drow.fillStyle = "black"
        if (pointer["x"] > this.x){
            if (pointer["x"] < this.x+200){
                if (pointer["y"] > this.y){
                    if (pointer["y"] < this.y+100){
                        drow.fillStyle = "yellow";
                        if (pointerEvent["on"] == 1){drow.fillStyle = "darkorange"}
                        if (pointerEvent["click"] == 1){
                            location.href = "game#1";
                        }
                    }
                }
            }
        }
        drow.fillRect(
            this.x,
            this.y,
            this.width,
            this.height
        )
    }
}

class youtubeBUTTON{
    constructor (x , y , width , height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        drow.fillStyle = "red"
        if (pointer["x"] > this.x){
            if (pointer["x"] < this.x+200){
                if (pointer["y"] > this.y){
                    if (pointer["y"] < this.y+100){
                        drow.fillStyle = "pink";
                        if (pointerEvent["on"] == 1){drow.fillStyle = "darkred"}
                        if (pointerEvent["click"] == 1){
                            window.open("https://www.youtube.com/c/SCRATCHER523/", '_blank')
                        }
                    }
                }
            }
        }
        drow.fillRect(
            this.x,
            this.y,
            this.width,
            this.height
        )
    }
}

class discordBUTTON{
    constructor (x , y , width , height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        drow.fillStyle = "blue"
        if (pointer["x"] > this.x){
            if (pointer["x"] < this.x+200){
                if (pointer["y"] > this.y){
                    if (pointer["y"] < this.y+100){
                        drow.fillStyle = "lightblue";
                        if (pointerEvent["on"] == 1){drow.fillStyle = "darkblue"}
                        if (pointerEvent["click"] == 1){
                            window.open("https://discord.com/invite/PjHUKkSJYg", '_blank')
                        }
                    }
                }
            }
        }
        drow.fillRect(
            this.x,
            this.y,
            this.width,
            this.height
        )
    }
}

function frame(){
    drow.clearRect(0 , 0 , client.width , client.height);
    new strtBUTTON(800,300 , 200 , 100);
    new youtubeBUTTON(1800,10 , 100 , 100);
    new discordBUTTON(1800,120 , 100 , 100);

    mousepointer();
    delete pointerEvent["click"];
    requestAnimationFrame(frame);
}

frame()

client.addEventListener("mousemove" , function (pos) {
        mouse["x"] = pos.x;
        mouse["y"] = pos.y;
    }
)
client.addEventListener("mousedown" , function (input){
    pointerEvent["on"] = 1;
    }
)

client.addEventListener("mouseup" , function (input){
        pointerEvent["click"] = 1;
        delete pointerEvent["on"];
    }
)
