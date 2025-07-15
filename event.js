let now=0;
let urls
const pz=[];
pz[0,0]="8rzs"
pz[0,1]="img/hi712.png"
pz[1,0]="naja"
pz[1,1]="img/bh001.png"
var im;

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
    page[7]="present2"
    document.getElementById("preview").className="close";
    document.getElementById("res").innerHTML="<p id='res'></p>";
    let target = document.getElementById(page[now]);
    target.scrollTo(0,0);
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
    if(pg!=6&&pg!=7){
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
  page[7]="present2"
  let target = document.getElementById(page[now]);
  target.scrollTo(0,0);
  target.className="close";
  document.getElementById("res").innerHTML="<p id='res'></p>";
  target=document.getElementById(page[pg]);
  target.className="active";
  now=pg;
  document.getElementById("preview").className="close";
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
  for(let i=-1;i<pz.length;i++){
    if(pass==pz[i,0]){
      if(i==0){
        let elm=document.getElementById("pre");
        elm.src=pz[i,1]
        pageCng(6);
        return
      }else{
        im=pz[i,1];
        loadImage('preview',im)
        pageCng(7);
        return
      }
    }
  }
  
return
}

//キャンバスに文字を描く
function drawText(canvas_id, text_id){

  
	let image = new Image();
    image.src = im;
    image.onload = (function () {
      //画像ロードが完了してからキャンバスの準備をする
      let canvas = document.getElementById("preview");
      let ctx = canvas.getContext('2d');
      //キャンバスのサイズを画像サイズに合わせる
      canvas.width = image.width;
      canvas.height = image.height;
      //キャンバスに画像を描画（開始位置0,0）
      ctx.drawImage(image, 0, 0);

    document.getElementById("preview").className="active"
    canvas = document.getElementById(canvas_id);
    ctx = canvas.getContext('2d');
    
    
    let text = document.getElementById(text_id);
    
    //文字のスタイルを指定
    ctx.font = '96px serif';
    ctx.fillStyle = '#63cde5ff';
    //文字の配置を指定（左上基準にしたければtop/leftだが、文字の中心座標を指定するのでcenter
    ctx.textBaseline = 'under';
    ctx.textAlign = 'left';
    //座標を指定して文字を描く（座標は画像の中心に）
    let x = (32);
    let y = (canvas.height-48);
    ctx.fillText("Name:"+text.value, x, y);

    document.getElementById("res").innerHTML=
          "<p id='res'>作成が完了しました！<br>画像を右クリックするか長押しで<br>保存することができます。</p>";
    document.getElementById("present2").scrollBy(0,500);
    
    return
    
      }
    );
  }


//キャンバスに画像を描画する
function loadImage(id,sr)
{
	//画像を読み込んでImageオブジェクトを作成する
	let image = new Image();
	image.src = sr;
	image.onload = (function () {
		//画像ロードが完了してからキャンバスの準備をする
		let canvas = document.getElementById(id);
		let ctx = canvas.getContext('2d');
		//キャンバスのサイズを画像サイズに合わせる
		canvas.width = image.width;
		canvas.height = image.height;
		//キャンバスに画像を描画（開始位置0,0）
		ctx.drawImage(image, 0, 0);
    }
  );
  
    return
}

function getimg(){
  return(im);
}