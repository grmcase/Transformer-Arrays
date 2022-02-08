var chrs = [
    {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
    {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
    {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
    {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
    {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
    {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

let wrapperEle = document.body.querySelector(".wrapper");
// looks up the div you created in html

function writeitems(){
    wrapperEle.innerHTML="";
    for (let i=0; i<chrs.length; i++){
        elemaker(chrs[i])
    }
}

function elemaker(val){
    let ele = document.createElement("div");
    let html=`<p>Name: ${val.name}</p> <p>Class: ${val.class.toUpperCase()}</p>`;
    let vehicle_color = "black";

    if (val.vehicle === "truck")
        vehicle_color = "blue";
    else if (val.vehicle === "tank")
        vehicle_color = "green";
    else if (val.vehicle === "car")
        vehicle_color = "gold";
    else if (val.vehicle === "plane")
        vehicle_color = "white";

    html += `<p style="color: ${vehicle_color};">vehicle: ${val.vehicle}</p>`;

    ele.innerHTML=html;
    ele.className="character"+" "+ val.afl;
    wrapperEle.appendChild(ele);

    let imgEle = document.createElement("img");
    imgEle.src = val.afl + ".png";
    imgEle.className = "img";
    ele.appendChild(imgEle);
}

writeitems();


// let list = ["Lucky charms", "Game Stonk", "Tiny hands", "Dogecoin", "Smells"];
//
// let wrapperEle = document.body.querySelector(".wrapper");// run default list
// let textEle = document.body.querySelector("#text");// add text inside
// let clickerEle = document.body.querySelector("#clicker");// when the button is clicked it gets added to the listing
// let messageEle = document.body.querySelector("#message");
//
// function elemaker(val){
//     let ele = document.createElement("div");
//     ele.innerHTML=val;
//     wrapperEle.appendChild(ele);
// }
//
//
// // elemaker(list[2])
//
// function writeitems(){
//     wrapperEle.innerHTML="";
//     for (let i=0; i<list.length; i++){
//         elemaker(list[i])
//     }
// }
//
//
// clickerEle.addEventListener("click", function(){
//     if(textEle.value==="Graham"){
//         list.push(textEle.value);
//         messageEle.innerHTML="Hey, that's my name!";
//     } else if(textEle.value.replaceAll(" ", "")!==""){
//         list.push(textEle.value);
//         messageEle.innerHTML="";
//         //this clears the "you didn't type anthing in!"
//     } else{
//         messageEle.innerHTML="You didn't type anthing in!"
//     }
//
//     textEle.value="";     // this clears the form
//     writeitems();
// })
//
// writeitems();