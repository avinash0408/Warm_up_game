const solutions=['Water + Acetone','Water + Ethanol','Water + Propanal'];
const temp=[56,78.4,97];
var i=Math.floor(Math.random() * 3)
//console.log(solutions);
    var canvas= new fabric.StaticCanvas('canvas');
    canvas.setHeight(600);
    canvas.setWidth(800);
    function pic(image,src,x,y,scale){
        
            image=fabric.Image.fromURL(src, function(oImg) {
            oImg.scale(scale).set('flipX', true);
            oImg.left = x;
            oImg.top = y;
            canvas.add(oImg);
          });
          return image;
         
    }
    var text = new fabric.Text(solutions[i], { left: 120, top: 35 ,fontSize:30});
    canvas.add(text);
    var distillator=new pic(distillator,'distillator.png',50,150,1);
    var blueBeaker=new pic(blueBeaker,'blueBeaker.png',75,25,0.2);
function check_ans(){
    var ans=document.getElementById('selected-temp');
    if(ans.value>=temp[i]){
        //console.log("Possible");
        document.getElementById('try-again').innerHTML="";

    }else
    {
        document.getElementById('try-again').innerHTML="<span style='color: red;'>Try Again!</span>";
    }
}

    // db.collection('Distillation-Game').get().then((snapshot)=>{
    //   snapshot.docs.forEach(doc =>{
    //     name=(doc.data().name);
    //     age=doc.data().Age;
    //   })
    // });
function give_hint(){
    document.getElementById('hint').innerHTML='Boiling point of '+solutions[i].slice(8,solutions[i].length)+ " is "+temp[i];
}
function check_bp(){
    console.log(document.ask.question1.value);
}
