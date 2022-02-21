var client = document.getElementById("main");
var drow = client.getContext("2d");

client.width = 1920;
client.height = 1070;

inputKey = null
inputKeys = {}
var lvl = 1
var oldlvl = 0

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
        "gravity" : 0.1,
        "power" : 0.5,
        "maxPower" : 3,
        "maxGravity" : 100,
        "endY" : 0,
        "jump" : 0,
    },
    "colider" : 10

}

var SOUNDstart = new Audio("https://github.com/5-23/gameMaking/blob/main/enter.wav?raw=true");

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

function blockcolider(self){
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
                    player["jumps"]["endY"] = self.y - player["jumps"]["maxGravity"];
                    player["jumps"]["jump"] = 1;

                    player["speeds"]["U"] = 0;
                    player["y"] = self.y - self.width;
                }
            }
        }
    }
}
function moreJumpcolider(self){
    if (self.x - self.width < player["x"]){
        if (self.x > player["x"]){
            if (self.y + self.width - self.endl > player["y"]){
                if (self.y - self.width + self.endl < player["y"]){
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
                    player["jumps"]["endY"] = self.y - player["jumps"]["maxGravity"];
                    player["jumps"]["jump"] = 1;
                }
            }
        }
    }
}
function endcolider(self){
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
function lavacolider(self){
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


class block{
    constructor(x , y , id , moveX = 0 , moveY = 0){
        drow.fillStyle = "black";
        this.x = x;
        this.y = y;
        this.width = client.width/30;
        this.endl = player["colider"];

        drow.fillRect(
            this.x,
            this.y,
            this.width,
            this.width
        );
        player["speeds"]["D"] += player["speeds"]["gravity"];
        blockcolider(this);
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
        moreJumpcolider(this);
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
        endcolider(this);
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
        lavacolider(this);
    }
}

time = 0;
playerMove(0,0);
function frame(){
    time ++;
    lvl = Number(location.href.split("#")[1]);
    if (lvl != oldlvl){player["y"] = 10000;time = 0;}
    blockObjs = [];
    moreJumpObjs = [];
    endObj = [];
    lavaObjs = [];
    if (time === 1){console.log("a");SOUNDstart.play();}
    /*<------------- 멥 코드 ------------->*/
    if (lvl == 1){
        player["resetPos"] = [0,900]

        for (i = 0;i<=28;i++){
            blockObjs.push([i*64,1000]);
        }


        for (i = 0;i<=2;i++){
            lavaObjs.push([i*60+100,999])
        }
        endObj = [1000,900]
    }
    if (lvl == 2){
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
    if (lvl == 3){
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
    if (lvl == 4){
        player["resetPos"] = [0,430]
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
    }
    
    if (inputKeys["d"] == 1){if (player["speeds"]["max"] >= player["speeds"]["R"]){player["speeds"]["R"] += player["speeds"]["speed"];}else{player["speeds"]["R"] = player["speeds"]["max"];}}
    if (inputKeys["a"] == 1){if (player["speeds"]["max"] >= player["speeds"]["L"]){player["speeds"]["L"] += player["speeds"]["speed"];}else{player["speeds"]["L"] = player["speeds"]["max"];}}

    player["speeds"]["U"] -= player["jumps"]["gravity"];

    if (player["speeds"]["R"] > 0){player["speeds"]["R"] -= player["speeds"]["resistor"];}
    if (player["speeds"]["R"] < 0){player["speeds"]["R"] = 0;}

    if (player["speeds"]["L"] > 0){player["speeds"]["L"] -= player["speeds"]["resistor"];}
    if (player["speeds"]["L"] < 0){player["speeds"]["L"] = 0;}
     
    if (player["jumps"]["endY"] <= player["y"] - 36.1){player["jumps"]["jump"] = 0;}

    for (i = 0;i < blockObjs.length; i++){
        new block(blockObjs[i][0] , blockObjs[i][1] , i , blockObjs[2]);
    }
    for (i = 0;i < moreJumpObjs.length; i++){
        new moreJump(moreJumpObjs[i][0] , moreJumpObjs[i][1] , i);
    }
    for (i = 0;i < lavaObjs.length; i++){
        new lavablock(lavaObjs[i][0] , lavaObjs[i][1] , i);
    }

    new end(endObj[0] , endObj[1])

    requestAnimationFrame(frame)
    playerMove(player["speeds"]["R"]-player["speeds"]["L"] , player["speeds"]["U"])
    if (player["y"] > 1200){player["x"] = player["resetPos"][0];player["y"] = player["resetPos"][1];}

    // console.log(player["speeds"]["U"]);

    oldlvl = lvl;
}
frame();

/*<------------이벤트------------>*/
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
