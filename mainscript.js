client = document.getElementById("main");
drow = client.getContext("2d");

client.width = 1920;
client.height = 1070;

/*<------------------------------------메인------------------------------------>*/
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
    pointer["x"] += (mouse["x"] - pointer["x"])/10 - 0.5
    pointer["y"] += (mouse["y"] - pointer["y"])/10 - 0.5
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
                            location.href = "#1";
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
class githubBUTTON{
    constructor (x , y , width , height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        drow.fillStyle = "lavender"
        if (pointer["x"] > this.x){
            if (pointer["x"] < this.x+200){
                if (pointer["y"] > this.y){
                    if (pointer["y"] < this.y+100){
                        drow.fillStyle = "white";
                        if (pointerEvent["on"] == 1){drow.fillStyle = "gray"}
                        if (pointerEvent["click"] == 1){
                            window.open("https://github.com/5-23/just-square", '_blank')
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


/*<------------------------------------게임------------------------------------>*/

inputKey = null
inputKeys = {}
var SOUNDstart = new Audio("https://github.com/5-23/gameMaking/blob/main/enter.wav?raw=true");
var lvl;
var oldlvl;
player = {
    "color" : "blue",

    "x" : 0,
    "y" : 10000,
    "resetPos" : [0,0],

    "width" : client.width/10,
    "height" : client.width/10,

    "speeds": {
        "U" : 0,
        "L" : 0,
        "R" : 0,

        "speed" : 0.15,
        "resistor" : 0.1,
        "max" : 5,
    },
    "jumps": {
        "setGravity" : 0.1,
        "gravity" : 0.1,
        "power" : 0.5,
        "maxPower" : 3,
        "maxGravity" : 100,
        "endY" : 0,
        "jump" : 0,
    },
    "collider" : 10

}


function playerMove(x,y){
    player["x"] += x
    player["y"] -= y

    drow.fillStyle = player["color"]
    drow.fillRect(
        player["x"]+x,
        player["y"]-y,
        player["width"],
        player["height"]
    );
}

function blockcollider(self){
    if (self.x - self.width < player["x"]){
        if (self.x > player["x"]){
            if (self.y + self.width - self.endl > player["y"]){
                if (self.y - self.width + self.endl < player["y"]){
                    player["speeds"]["L"] = 0;
                    player["speeds"]["R"] = 0;
                    player["x"] = self.x - self.width;
                }
            }
        }
    }
    if (self.x + self.width > player["x"]){
        if (self.x < player["x"]){
            if (self.y + self.width - self.endl > player["y"]){
                if (self.y - self.width + self.endl < player["y"]){
                    player["speeds"]["L"] = 0;
                    player["speeds"]["R"] = 0;
                    player["x"] = self.x + self.width;
                }
            }
        }
    }
    if (self.y + self.width > player["y"]){
        if (self.y < player["y"]){
            if (self.x + self.width - self.endl > player["x"]){
                if (self.x - self.width + self.endl < player["x"]){
                    player["jumps"]["jump"] = 0;
                    player["speeds"]["U"] = -1;

                    player["y"] = self.y + self.width;
                }
            }
        }
    }
    if (self.y - self.width < player["y"]){
        if (self.y > player["y"]){
            if (self.x + self.width - self.endl > player["x"]){
                if (self.x - self.width + self.endl < player["x"]){
                    player["jumps"]["gravity"] = player["jumps"]["setGravity"]
                    player["jumps"]["endY"] = self.y - player["jumps"]["maxGravity"];
                    player["jumps"]["jump"] = 1;

                    player["speeds"]["U"] = 0;
                    player["y"] = self.y - self.width;
                }
            }
        }
    }
}
function moreJumpcollider(self){
    if (self.x - self.width < player["x"]){
        if (self.x > player["x"]){
            if (self.y + self.width - self.endl > player["y"]){
                if (self.y - self.width + self.endl < player["y"]){
                    player["jumps"]["gravity"] = player["jumps"]["setGravity"]
                    player["jumps"]["endY"] = self.y - player["jumps"]["maxGravity"];
                    player["jumps"]["jump"] = 1;
                }
            }
        }
    }
    if (self.x + self.width > player["x"]){
        if (self.x < player["x"]){
            if (self.y + self.width - self.endl > player["y"]){
                if (self.y - self.width + self.endl < player["y"]){
                    player["jumps"]["gravity"] = player["jumps"]["setGravity"]
                    player["jumps"]["endY"] = self.y - player["jumps"]["maxGravity"];
                    player["jumps"]["jump"] = 1;
                }
            }
        }
    }
    if (self.y + self.width > player["y"]){
        if (self.y < player["y"]){
            if (self.x + self.width - self.endl > player["x"]){
                if (self.x - self.width + self.endl < player["x"]){
                    player["jumps"]["gravity"] = player["jumps"]["setGravity"]
                    player["jumps"]["endY"] = self.y - player["jumps"]["maxGravity"];
                    player["jumps"]["jump"] = 1;
                }
            }
        }
    }
    if (self.y - self.width < player["y"]){
        if (self.y > player["y"]){
            if (self.x + self.width - self.endl > player["x"]){
                if (self.x - self.width + self.endl < player["x"]){
                    player["jumps"]["gravity"] = player["jumps"]["setGravity"]
                    player["jumps"]["endY"] = self.y - player["jumps"]["maxGravity"];
                    player["jumps"]["jump"] = 1;
                }
            }
        }
    }
}
function endcollider(self){
    if (self.x - self.width < player["x"]){
        if (self.x > player["x"]){
            if (self.y + self.width - self.endl > player["y"]){
                if (self.y - self.width + self.endl < player["y"]){
                    location.href = `#${lvl+1}`;
                }
            }
        }
    }
    if (self.x + self.width > player["x"]){
        if (self.x < player["x"]){
            if (self.y + self.width - self.endl > player["y"]){
                if (self.y - self.width + self.endl < player["y"]){
                    location.href = `#${lvl+1}`;
                }
            }
        }
    }
    if (self.y + self.width > player["y"]){
        if (self.y < player["y"]){
            if (self.x + self.width - self.endl > player["x"]){
                if (self.x - self.width + self.endl < player["x"]){
                    location.href = `#${lvl+1}`;
                }
            }
        }
    }
    if (self.y - self.width < player["y"]){
        if (self.y > player["y"]){
            if (self.x + self.width - self.endl > player["x"]){
                if (self.x - self.width + self.endl < player["x"]){
                    location.href = `#${lvl+1}`;
                }
            }
        }
    }
}
function lavacollider(self){
    if (self.x - self.width < player["x"]){
        if (self.x > player["x"]){
            if (self.y + self.width - self.endl > player["y"]){
                if (self.y - self.width + self.endl < player["y"]){
                    player["y"] = 10000;

                    player["speeds"]["L"] = 0;
                    player["speeds"]["R"] = 0;
                    player["x"] = self.x - self.width;
                }
            }
        }
    }
    if (self.x + self.width > player["x"]){
        if (self.x < player["x"]){
            if (self.y + self.width - self.endl > player["y"]){
                if (self.y - self.width + self.endl < player["y"]){
                    player["y"] = 10000;

                    player["speeds"]["L"] = 0;
                    player["speeds"]["R"] = 0;
                    player["x"] = self.x + self.width;
                }
            }
        }
    }
    if (self.y + self.width > player["y"]){
        if (self.y < player["y"]){
            if (self.x + self.width - self.endl > player["x"]){
                if (self.x - self.width + self.endl < player["x"]){
                    player["y"] = 10000;
                    
                    player["speeds"]["U"] = 0;
                    player["y"] = self.y + self.width;
                }
            }
        }
    }
    if (self.y - self.width < player["y"]){
        if (self.y > player["y"]){
            if (self.x + self.width - self.endl > player["x"]){
                if (self.x - self.width + self.endl < player["x"]){
                    player["y"] = 10000;

                    player["speeds"]["U"] = 0;
                    player["y"] = self.y - self.width;
                }
            }
        }
    }
}
function jumpboostercollider(self){
    if (self.x - self.width < player["x"]){
        if (self.x > player["x"]){
            if (self.y + self.width - self.endl > player["y"]){
                if (self.y - self.width + self.endl < player["y"]){
                    player["speeds"]["L"] = 0;
                    player["speeds"]["R"] = 0;
                    player["x"] = self.x - self.width;
                }
            }
        }
    }
    if (self.x + self.width > player["x"]){
        if (self.x < player["x"]){
            if (self.y + self.width - self.endl > player["y"]){
                if (self.y - self.width + self.endl < player["y"]){
                    player["speeds"]["L"] = 0;
                    player["speeds"]["R"] = 0;
                    player["x"] = self.x + self.width;
                }
            }
        }
    }
    if (self.y + self.width > player["y"]){
        if (self.y < player["y"]){
            if (self.x + self.width - self.endl > player["x"]){
                if (self.x - self.width + self.endl < player["x"]){
                    player["jumps"]["jump"] = 0;
                    player["speeds"]["U"] = -1;

                    player["y"] = self.y + self.width;
                }
            }
        }
    }
    if (self.y - self.width < player["y"]){
        if (self.y > player["y"]){
            if (self.x + self.width - self.endl > player["x"]){
                if (self.x - self.width + self.endl < player["x"]){
                    player["jumps"]["gravity"] = player["jumps"]["setGravity"]/2;
                    player["jumps"]["endY"] = self.y - player["jumps"]["maxGravity"];
                    player["jumps"]["jump"] = 1;

                    player["speeds"]["U"] = 0;
                    player["y"] = self.y - self.width;
                }
            }
        }
    }
}

class block{
    constructor(x , y , id , moveX = 0 , moveY = 0){
        drow.fillStyle = "black";
        this.x = x;
        this.y = y;
        this.width = client.width/30;
        this.endl = player["collider"];

        drow.fillRect(
            this.x,
            this.y,
            this.width,
            this.width
        );
        player["speeds"]["D"] += player["speeds"]["gravity"];
        blockcollider(this);
    }
}
class moreJump{
    constructor(x , y , id){
        drow.fillStyle = "lavender";
        this.x = x;
        this.y = y;
        this.width = client.width/50;
        this.endl = 0

        drow.fillRect(
            this.x,
            this.y,
            this.width,
            this.width
        );
        moreJumpcollider(this);
    }
}
class end{
    constructor(x,y){
        drow.fillStyle = "lightgreen";
        this.x = x;
        this.y = y;
        this.width = client.width/50;
        this.endl = 0;

        drow.fillRect(
            this.x,
            this.y,
            this.width,
            this.width
        );
        endcollider(this);
    }
}
class lavablock{
    constructor(x , y , id , moveX = 0 , moveY = 0){
        drow.fillStyle = "red";
        this.x = x;
        this.y = y;
        this.width = client.width/30;
        this.endl = 0;

        drow.fillRect(
            this.x,
            this.y,
            this.width,
            this.width
        );
        player["speeds"]["D"] += player["speeds"]["gravity"];
        lavacollider(this);
    }
}
class jumpbooster{
    constructor(x , y , id , moveX = 0 , moveY = 0){
        drow.fillStyle = "gray";
        this.x = x;
        this.y = y;
        this.width = client.width/30;
        this.endl = player["collider"];

        drow.fillRect(
            this.x,
            this.y,
            this.width,
            this.width
        );
        player["speeds"]["D"] += player["speeds"]["gravity"];
        jumpboostercollider(this);
    }
}

time = 0;

function frame(){
    lvl = location.href.split("#")[1];
    if (lvl == undefined){
        location.href = "#main";
        document.body.backgroundColor = "#ffee00";
    }
    if (lvl == ""){
        location.href = "#main";
        document.body.backgroundColor = "#ffee00";
    }
    time ++;
    if (lvl == "main"){
        drow.clearRect(0 , 0 , client.width , client.height);
        new strtBUTTON(800,300 , 200 , 100);
        new githubBUTTON(1800,10 , 100 , 100);
        new youtubeBUTTON(1800,120 , 100 , 100);
        new discordBUTTON(1800,230 , 100 , 100);
        mousepointer();
    }
    else{
        lvl = Number(lvl);
        if (lvl != oldlvl){player["y"] = 10000;time = 0;}
        blockObjs = [];
        moreJumpObjs = [];
        endObj = [];
        lavaObjs = [];
        jumpboosterObjs = [];
        if (time === 1){SOUNDstart.play();}
        /*<------------- 멥 코드 ------------->*/
        if (lvl == 1){
            player["resetPos"] = [0,830]
            for (i = 0;i<=30;i++){
                blockObjs.push([i*64,900]);
            }
            for (i = 0;i<=2;i++){
                blockObjs.push([400 , i*64 + 760])
            }
            for (i = 0;i<=25;i++){
                blockObjs.push([i*64+400,760]);
            }
            for (i = 0;i<=28;i++){
                blockObjs.push([i*64+400,760]);
            }
            for (i = 0;i<=25;i++){
                blockObjs.push([i*64+700,620]);
            }
            for (i = 0;i<=2;i++){
                blockObjs.push([700 , i*64 + 620])
            }
            for (i = 0;i<=25;i++){
                blockObjs.push([i*64+800,320]);
            }
            for (i = 0;i<=10;i++){
                moreJumpObjs.push([760 , i*32 + 320])
            }


            endObj = [1500 , 200]
            jumpboosterObjs.push([300,890]);
            jumpboosterObjs.push([600,750]);
        }
        else if (lvl == 2){
            player["resetPos"] = [0,900]

            for (i = 0;i<=28;i++){
                blockObjs.push([i*64,1000]);
            }


            for (i = 0;i<=2;i++){
                lavaObjs.push([i*60+100,999])
            }
            endObj = [1000,900]
        }
        else if (lvl == 3){
            player["resetPos"] = [0,430]
            for (i = 0;i<=28;i++){
                blockObjs.push([i*64,500]);
            }
            for (i = 0;i <= 2;i++){
                blockObjs.push([600,i*64+130]);
            }
            lavaObjs.push([600,430]);

            endObj = [750,450]
        }
        else if (lvl == 4){
            player["resetPos"] = [0,430]
            for (i = 0;i<=28;i++){
                blockObjs.push([i*64,500]);
            }

            for (i = 0;i<=20;i++){
                blockObjs.push([i*64+600,200]);
            }

            blockObjs.push([200,450])
            blockObjs.push([0,365])

            moreJumpObjs.push([400,260]);
            moreJumpObjs.push([300,160]);
            lavaObjs.push([800,400]);

            endObj = [800,130]
        }
        else if (lvl == 5){
            player["resetPos"] = [0,430]
            for (i = 0;i<=28;i++){
                blockObjs.push([i*64,500]);
            }
            for (i = 0;i<=28;i++){
                lavaObjs.push([i*64+100,499]);
                lavaObjs.push([i*64+100,200]);
            }
            for (i = 0;i<=5;i++){
                moreJumpObjs.push([i*250+100,350]);
            }
            endObj = [i*250+100,350]
        }
        else if (lvl == 6){
            player["resetPos"] = [0,430]
            for (i = 0;i<=28;i++){
                blockObjs.push([i*64,500]);
            }
            for (i = 0;i<=28;i++){
                lavaObjs.push([i*64+100,499]);
            }
            for (i = 0;i<=28;i++){
                blockObjs.push([i*64,500]);
            }
            for (i = 0;i <= 2;i++){
            }
            endObj = [i*250+390,370];
            jumpboosterObjs.push([300,450]);
        }
        else if (lvl == 7){
            player["resetPos"] = [55,0];
            for (i = 0;i<=10;i++){
                lavaObjs.push([120,50*i-300]);
            }
            blockObjs.push([60,65]);
            blockObjs.push([160,160]);
            for (i = 0;i<=28;i++){
                blockObjs.push([i*64,500]);
            }
            for (i = 0;i<=3;i++){
                lavaObjs.push([i*64,499]);
            }
            moreJumpObjs.push([100,350])
            moreJumpObjs.push([100,380])
            moreJumpObjs.push([100,410])
            moreJumpObjs.push([540,310])
            moreJumpObjs.push([200,160])

            jumpboosterObjs.push([500,490])

            lavaObjs.push([500,320])
            lavaObjs.push([500,321])
            lavaObjs.push([500,319])

            blockObjs.push([500,310])
            endObj = [190,0]
        }
        else if (lvl == 8){
            player["resetPos"] = [0,430]
            for (i = 0;i<=28;i++){
                blockObjs.push([i*64,500]);
            }
            for (i = 0;i<=28;i++){
                lavaObjs.push([i*64+100,499]);
            }
            for (i = 0;i<=28;i++){
                blockObjs.push([i*64,500]);
            }
            for (i = 0;i <= 2;i++){
                lavaObjs.push([600,i*64+130]);
            }
            moreJumpObjs.push([i*250+100,370]);
            endObj = [i*250+400,370];
            jumpboosterObjs.push([300,450]);
        }
        else{
            player["resetPos"] = [0,400];
            for (i = 0;i<=28;i++){
                blockObjs.push([i*64,500]);
            }
        }


        /*<------------- 기본 코드 ------------->*/

        bg = Math.floor(Math.acos((time) / 70)*100+555599);
        document.getElementById("bg").style.backgroundColor = `#${bg}`;
        client.style.backgroundColor=`#${bg}`;
        
        drow.clearRect(0 , 0 , client.width , client.height)

        player["width"] = client.width/30
        player["height"] = client.width/30

        if (player["jumps"]["jump"] == 1){
            if (inputKeys["w"] == 1){if (player["jumps"]["maxPower"] >= player["speeds"]["U"]){player["speeds"]["U"] += player["jumps"]["power"];}else{player["speeds"]["U"] = player["jumps"]["maxPower"];}}
            
            if (player["jumps"]["endY"] > player["y"]){player["jumps"]["jump"] = 0;}

            // if (player["jumps"]["endY"] >= 449.9){
            //     if (player["jumps"]["endY"] - 140 > player["y"]){player["jumps"]["jump"] = 0;}
            // }else{
            //     if (player["jumps"]["endY"] > player["y"]){player["jumps"]["jump"] = 0;}
            // }
        }
        
        if (inputKeys["d"] == 1){if (player["speeds"]["max"] >= player["speeds"]["R"]){player["speeds"]["R"] += player["speeds"]["speed"];}else{player["speeds"]["R"] = player["speeds"]["max"];}}
        if (inputKeys["a"] == 1){if (player["speeds"]["max"] >= player["speeds"]["L"]){player["speeds"]["L"] += player["speeds"]["speed"];}else{player["speeds"]["L"] = player["speeds"]["max"];}}

        player["speeds"]["U"] -= player["jumps"]["gravity"];

        if (player["speeds"]["R"] > 0){player["speeds"]["R"] -= player["speeds"]["resistor"];}
        if (player["speeds"]["R"] < 0){player["speeds"]["R"] = 0;}

        if (player["speeds"]["L"] > 0){player["speeds"]["L"] -= player["speeds"]["resistor"];}
        if (player["speeds"]["L"] < 0){player["speeds"]["L"] = 0;}
        
        grv = 36.1;
        
        if (player["jumps"]["endY"] <= player["y"] - grv){player["jumps"]["jump"] = 0;}
        
        
        for (i = 0;i < jumpboosterObjs.length; i++){
            new jumpbooster(jumpboosterObjs[i][0] , jumpboosterObjs[i][1] , i);
        }
        for (i = 0;i < moreJumpObjs.length; i++){
            new moreJump(moreJumpObjs[i][0] , moreJumpObjs[i][1] , i);
        }
        for (i = 0;i < blockObjs.length; i++){
            new block(blockObjs[i][0] , blockObjs[i][1] , i , blockObjs[2]);
        }
        for (i = 0;i < lavaObjs.length; i++){
            new lavablock(lavaObjs[i][0] , lavaObjs[i][1] , i);
        }

        new end(endObj[0] , endObj[1])
        
        oldlvl = lvl;
        playerMove(player["speeds"]["R"]-player["speeds"]["L"] , player["speeds"]["U"])
        if (player["y"] > 1200){player["x"] = player["resetPos"][0];player["y"] = player["resetPos"][1];}
    }

    requestAnimationFrame(frame);


    delete pointerEvent["click"];
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

document.addEventListener('keydown' , function(key){
    inputKeys[key.key] = 1;
}
)

document.addEventListener('keyup' , function(key){
delete inputKeys[key.key];

if (key.key == "w"){
    player["jumps"]["jump"] = 0
}
}
)

/*<-----------커멘드----------->*/
function pos(x , y){
    player["x"] = x;
    player["y"] = y;
    return (player["x"] = x , player["y"] = y);
}
function gravity(number){
    player["jumps"]["setGravity"] = number;
    return (["jumps"]["setGravity"]);
}
function resistor(number){
    player["speeds"]["resistor"] = number;
}
function speed(number){
    player["speeds"]["speed"] = number;
}
function maxSpeed(number){
    player["speeds"]["max"] = number;
}
