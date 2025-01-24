const audio= new Audio();
const listner=document.getElementById("playlist");
const trck=playlist.getElementsByTagName("li");
const play=document.getElementById("playbtn");
const pause=document.getElementById("pausebtn");


console.log("listner", trck);




let currentindex=0;

 //function on track the attribute
const loadtrak=(index)=>{
audio.src=trck[index].getAttribute("data-src");
};
//play the track
const playtrack=()=>{
   audio.play();
   play.classList.remove("hide");
   pause.classList.add("hide");
};
//pause track
const pausetrack=()=>{
    audio.play();
    play.classList.add("hide");
    pause.classList.remove("hide");
};
//function to next track
const nexttrack=()=>{
    currentindex=(currentindex+1) % trck.length;
loadtrak(currentindex);
playtrack();
};
//function to privrs track
const prives=()=>{
currentindex=(currentindex-1+trck.length) % trck.length;
loadtrak(currentindex);
playtrack();
};



 // object to create array
Array.from(trck).forEach((iteam,index)=>{
    iteam.addEventListener("click", () => {
//console.log(iteam);
currentindex=index;
loadtrak(currentindex);
playtrack();
    });
});


loadtrak(currentindex);
