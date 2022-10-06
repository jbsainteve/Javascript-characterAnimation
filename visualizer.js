function main() 
{
    console.log('loaded');
    const myCanvas = document.getElementById('myCanvas');
    const ctx = myCanvas.getContext('2d');
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;

    const pumpkin = new Pumpkin (
        myCanvas.width/2,
        myCanvas.height/2,
        Math.min(myCanvas.width, myCanvas.height)*0.4
    );

    const microphone = new Microphone(512);

    setInterval(function(){
        const openness = microphone.getVolume()*9;
        ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
        pumpkin.draw(ctx,openness); 
        // console.log('drawing pumpkin');
    },100);

    // let frameCount=0;
    // setInterval(function(){
    //     frameCount++;
    //     const openness = (Math.sin(frameCount/5)+1)/2;
    //     ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
    //     pumpkin.draw(ctx,openness); 
    //     console.log('drawing pumpkin');
    // },100);

    // pumpkin.draw(ctx);

    // function animate(){
    //     // console.log("animate");

    //     // ctx.clearRect(0,0,canvas.width,canvas.height);

    //     requestAnimationFrame(animate);
    // }
    // animate();
}



