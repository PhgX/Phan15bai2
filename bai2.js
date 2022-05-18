let foot = prompt("Nhập số feet");
let meter = prompt("Nhập số mét");


function foottomet(foot){
    meter = foot*0.305;
    document.getElementById("meter").innerHTML = meter;
}

function mettofoot(meter){
    foot = meter*3.729;
    document.getElementById("foot").innerHTML = foot;
}