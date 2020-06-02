function getRandomColor () {
    let letters = '01234567ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i ++){
        color +=letters[Math.round(Math.random() * 15)];
    }
    return color;
}

let clickedTime,createdTime,reactionTime;

function makeBox(){
    let time = Math.random();
    time = time*5000;

    setTimeout(()=>{
        if(Math.random() > 0.5){
            document.getElementById('box').style.borderRadius ="100px";
        }else{
            document.getElementById('box').style.borderRadius ="0px";
        }
        let top = Math.random();
        top = top*300;
        let left = Math.random();
        left = left*500;

        document.getElementById('box').style.top = top+"px";
        document.getElementById('box').style.left = left+"px";

        document.getElementById('box').style.backgroundColor = getRandomColor();
        document.getElementById('box').style.display = "block";

        createdTime = Date.now();
    },time)
}

document.getElementById('box').onclick = function() {
    clickedTime = Date.now();
    reactionTime = (clickedTime-createdTime)/1000;
    document.getElementById('time').innerHTML = reactionTime;
    this.style.display = "none";
    makeBox();
}

makeBox();