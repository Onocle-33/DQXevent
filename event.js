let now=0;
let urls
const pz=[];
for(let i=0;i<=999;i++){
  pz.push(["",""])
}
pz[0][0]="8rzs"
pz[0][1]="img/hi712.png"
pz[1][0]="naja"
pz[1][1]="img/bh001.png"
pz[2][0]="magicmoon"
pz[2][1]="img/bh002.png"
pz[3][0]="redl"
pz[3][1]="img/bh003.png"
pz[4][0]="heart"
pz[4][1]="img/bh004.png"
pz[5][0]="sound"
pz[5][1]="img/bh005.png"
pz[999][0]="test"
pz[999][1]="img/bh000.png"
var im;

const musics=[];
musics.push(["淡いまじない","music/magic-radiance.mp3"]);
musics.push(["影","music/reflection.mp3"]);
musics.push(["陽だまりの足音","music/walk.mp3"]);
musics.push(["星明かりのとばり","music/stary-night.mp3"]);
musics.push(["絢爛","music/kenran.mp3"]);
musics.push(["オーパーツ","music/void-tec.mp3"]);

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
    page[5]="music"
    page[6]="note"
    page[90]="present"
    page[91]="present2"
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
    if(pg!=90&&pg!=91){
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
  page[5]="music"
  page[6]="note"
  page[90]="present"
  page[91]="present2"
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
  for(let i=0;i<pz.length;i++){
    console.log("loop:"+i);
    if(pass==pz[i][0]&&pass!=""){
      if(i==0){
        let elm=document.getElementById("pre");
        elm.src=pz[i][1]
        pageCng(90);
        return
      }else{
        im=pz[i][1];
        loadImage('preview',im)
        pageCng(91);
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
          "<p id='res'>作成が完了しました！<br>"
          +"下のボタンからダウンロードできます。</p>"
          +"<button id='dl' onclick=dl()>download</button>";
    document.getElementById("present2").scrollBy(0,350);
    
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

function dl(){
	let canvas = document.getElementById("preview");

	let link = document.createElement("a");
	link.href = canvas.toDataURL("image/png");
	link.download = im;
	link.click();
  return;
}

function music(){
  let name;
  let src;
  let res="";
  for(let i=0;i<musics.length;i++){
    name=musics[i][0];
    src=musics[i][1];
    res=res+"<p>"+name+"</p>"
    res=res+"<audio id='play' controls loop src="+src+" type='audio/mp3'></audio>";
  }
  res=res+"<br><br><br>";
  document.getElementById("musicBox").innerHTML=res;
  return
}