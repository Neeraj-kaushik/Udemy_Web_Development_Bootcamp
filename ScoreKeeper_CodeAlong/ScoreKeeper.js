const p1display=document.getElementById("p1score")
const p2display=document.getElementById("p2score")
const p1button=document.getElementById("add1")
const p2button=document.getElementById("add2")
const resetbtn=document.getElementById("reset")
let p1ans=0
let p2ans=0
const selectval=document.getElementById("ScoreTT");
let winscore=5
let isGameOver=false
selectval.addEventListener('change', () => {
    winscore=parseInt(selectval.value)
});
p1button.addEventListener('click',() =>{
    if(!isGameOver){
        p1ans+=1
        if(p1ans === winscore){
            p1display.style.color="#03fc0b";
            p2display.style.color="#fc0303"; 
            isGameOver=true; 
        }
        p1display.textContent=p1ans;
        
    }
});
p2button.addEventListener('click',() =>{
    if(!isGameOver){
        p2ans+=1
        if(p2ans === winscore){
            p2display.style.color="#03fc0b";
            p2display.style.color="#fc0303"; 
            isGameOver=true; 
        }
        p2display.textContent=p2ans;
        
    }
});
    
resetbtn.addEventListener('click', () =>{
    p1ans=0;
    p2ans=0;
    p1display.textContent=p1ans;
    p2display.textContent=p2ans;
    p2display.style.color="#0a0a0a";
    p1display.style.color="#0a0a0a";
    isGameOver=false;
})

