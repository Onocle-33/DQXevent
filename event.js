let now=0;


function hmbCng(){
    let target = document.getElementById("hmbOver");
    if (target.className == null || target.className==""||target.className=="close") {
      target.className = "active";
    } else {
      target.className = "close";
    }
    target = document.getElementById("hmbImg");
    if (target.className == null || target.className=="" || target.className=="active") {
      target.className = "close";
    } else {
      target.className = "active";
    }
    target = document.getElementById("hmbImgX");
    if (target.className == null || target.className=="" || target.className=="active") {
      target.className = "close";
    } else {
      target.className = "active";
    }
}

function pageCng(pg){
    const page=[];
    page[0]="home";
    page[1]="guide";
    page[2]="fd";
    page[3]="gr";
    page[4]="event";
    let target = document.getElementById(page[now]);
    target.className="close";
    target=document.getElementById(page[pg]);
    target.className="active";
    now=pg;

    hmbCng()
}






