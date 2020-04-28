LadderArrayStart = [3, 5, 11, 20];
LadderArrayEnd = [22, 8, 26, 29];
SnakeArrayStart = [17, 19, 21, 27];
SnakeArrayEnd = [4, 7, 9, 1];
let GetDiceNumberPlayer1;
let GetDiceNumberPlayer2;
let PreviousValuePlayer1 = 0;
let PreviousValuePlayer2 = 0;
let ValueForPLayer1 = 0;
let ValueForPLayer2 = 0;

let player1Start = false;
let player2Start = false;

document.body.addEventListener("mouseover", (e)=>{
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX})`
})

let GameManager = {
    player1Move: ()=> {
        let getBoxEnd = document.querySelector(`.box${ValueForPLayer1}`);
        let getBoxStart = document.querySelector(`.box${PreviousValuePlayer1}`)
        getBoxEnd.style.backgroundColor = "#ffffff";
        
        if(getComputedStyle(getBoxStart).backgroundColor !== "rgb(255, 255, 0)") {
            getBoxStart.style.removeProperty("background-color");  
        }

        if(LadderArrayStart.includes(ValueForPLayer1)) {
            for(let i=0; i<LadderArrayStart.length; i++) {
                if(LadderArrayStart[i] === ValueForPLayer1) {
                    PreviousValuePlayer1=ValueForPLayer1;
                    ValueForPLayer1 = LadderArrayEnd[i];
                    let getBoxEnd = document.querySelector(`.box${ValueForPLayer1}`);
                    let getBoxStart = document.querySelector(`.box${PreviousValuePlayer1}`)
                    getBoxEnd.style.backgroundColor = "#ffffff";
                    
                    if(getComputedStyle(getBoxStart).backgroundColor !== "rgb(255, 255, 0)") {
                        getBoxStart.style.removeProperty("background-color");  
                    }
                    break;                    
                }
            }
            
        } else if(SnakeArrayStart.includes(ValueForPLayer1)) {
            for(let i=0; i<SnakeArrayStart.length; i++) {
                if(SnakeArrayStart[i] === ValueForPLayer1) {
                    PreviousValuePlayer1=ValueForPLayer1;
                    ValueForPLayer1 = SnakeArrayEnd[i];
                    let getBoxEnd = document.querySelector(`.box${ValueForPLayer1}`);
                    let getBoxStart = document.querySelector(`.box${PreviousValuePlayer1}`)
                    getBoxEnd.style.backgroundColor = "#ffffff";
                    
                    if(getComputedStyle(getBoxStart).backgroundColor !== "rgb(255, 255, 0)") {
                        getBoxStart.style.removeProperty("background-color");  
                    }
                    break;                    
                }
            }
            
        }
           
        if(ValueForPLayer1  == 30){
            alert("player 1 win");
            window.location.reload;
        } 
    },
    player2Move: ()=> {
        let getBoxEnd = document.querySelector(`.box${ValueForPLayer2}`);
        let getBoxStart = document.querySelector(`.box${PreviousValuePlayer2}`)
        getBoxEnd.style.backgroundColor = "#ffff00";
        if(getComputedStyle(getBoxStart).backgroundColor !== "rgb(255, 255, 255)") {
            getBoxStart.style.removeProperty("background-color");  
        }

        if(LadderArrayStart.includes(ValueForPLayer2)) {
            for(let i=0; i<LadderArrayStart.length; i++) {
                if(LadderArrayStart[i] === ValueForPLayer2) {
                    PreviousValuePlayer2=ValueForPLayer2;
                    ValueForPLayer2 = LadderArrayEnd[i];
                    let getBoxEnd = document.querySelector(`.box${ValueForPLayer2}`);
                    let getBoxStart = document.querySelector(`.box${PreviousValuePlayer2}`)
                    getBoxEnd.style.backgroundColor = "#ffff00";

                    if(getComputedStyle(getBoxStart).backgroundColor !== "rgb(255, 255, 255)") {
                        getBoxStart.style.removeProperty("background-color");  
                    }
                    break;                    
                }
            }
            
        } else if(SnakeArrayStart.includes(ValueForPLayer2)) {
            for(let i=0; i<SnakeArrayStart.length; i++) {
                if(SnakeArrayStart[i] === ValueForPLayer2) {
                    PreviousValuePlayer2=ValueForPLayer2;
                    ValueForPLayer2 = SnakeArrayEnd[i];
                    let getBoxEnd = document.querySelector(`.box${ValueForPLayer2}`);
                    let getBoxStart = document.querySelector(`.box${PreviousValuePlayer2}`)
                    getBoxEnd.style.backgroundColor = "#ffff00";
                    
                    if(getComputedStyle(getBoxStart).backgroundColor !== "rgb(255, 255, 255)") {
                        getBoxStart.style.removeProperty("background-color");  
                    }
                    break;                    
                }
            }
            
        }
             
        if(ValueForPLayer2  == 30){
            alert("player 2 win");
            window.location.reload;
        } 
    }
}

function player1Roll() {
    GetDiceNumberPlayer1 = Random(6);
    document.getElementById("player1_dice").innerHTML = GetDiceNumberPlayer1;

    if(GetDiceNumberPlayer1 === 1) {
        player1Start = true;
    }

    if(player1Start === true) {
        if(ValueForPLayer1<24){
            PreviousValuePlayer1 = ValueForPLayer1;
            ValueForPLayer1 += GetDiceNumberPlayer1;
    
            
            GameManager.player1Move();
        } else {
            if((30-ValueForPLayer1)>=GetDiceNumberPlayer1){
                PreviousValuePlayer1 = ValueForPLayer1;
                ValueForPLayer1 += GetDiceNumberPlayer1;
                GameManager.player1Move();
            }
        }
    }
    
}

function player2Roll() {
    GetDiceNumberPlayer2 = Random(6);
    document.getElementById("player2_dice").innerHTML = GetDiceNumberPlayer2;

    if(GetDiceNumberPlayer2 === 1) {
        player2Start = true;
    }

    if(player2Start === true) {
        if(ValueForPLayer2<24){
            PreviousValuePlayer2 = ValueForPLayer2;
            ValueForPLayer2 = ValueForPLayer2 + GetDiceNumberPlayer2;
            GameManager.player2Move(); 
        } else {
            if((30-ValueForPLayer2)>=GetDiceNumberPlayer2) {
                PreviousValuePlayer2 = ValueForPLayer2;
                ValueForPLayer2 = ValueForPLayer2 + GetDiceNumberPlayer2;
                GameManager.player2Move(); 
            }
        }
    }
    

}

let Random = (Upper) => {
    let random = Math.ceil(Math.random() * 10);
    while (random>Upper) {
        random = Math.ceil(Math.random() * 10);
    }
    return random;
}