let now=0;
let urls
const pz=[];
pz[0,0]="8rzs"
pz[0,1]="img/hi712.png"

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
    page[5]="note"
    page[6]="present"
    let target = document.getElementById(page[now]);
    target.className="close";
    target=document.getElementById(page[pg]);
    target.className="active";
    now=pg;
    if(now==0){
      target=document.getElementById("hLg");
      target.className="close";
    }else{
      target=document.getElementById("hLg");
      target.className="active";
    }
    if(pg!=6){
      hmbCng()
    }
}

function home(pg){
  const page=[];
  page[0]="home";
  page[1]="guide";
  page[2]="fd";
  page[3]="gr";
  page[4]="event";
  page[5]="note"
  page[6]="present"
  let target = document.getElementById(page[now]);
  target.className="close";
  target=document.getElementById(page[pg]);
  target.className="active";
  now=pg;
  if(now==0){
    target=document.getElementById("hLg");
    target.className="close";
  }else{
    target=document.getElementById("hLg");
    target.className="active";
  }
}


function pass(){
  let pass = document.getElementById("ps").value
  console.log(pass);
  if(pass=="3rebe"){
    window.open("https://youtu.be/B-dLBhD7sjE");
    return
  }
  for(let i=0;i<pz.length;i++){
    if(pass==pz[i,0]){
      let elm=document.getElementById("pre");
      elm.src=pz[i,1]
      pageCng(6);
      return
    }
  }
  
return
}

