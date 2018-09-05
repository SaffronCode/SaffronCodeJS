import React, { Component } from 'react';

var preLoaderColor = "#777777ff",
    Width = 200 ,
    Height = 200 ,
    AnimSpeed = 0.2 ;


class Preloader extends Component<null> {


    static setUp(newColor:string="#777777ff",width:number=200,height:number=200,animSpeed:number=0.2)
    {
        Width = width ;
        Height = height ;
        AnimSpeed = animSpeed ;
        preLoaderColor = newColor ;
    }

    rad:number = 0 ;
    ctx:any = null ;
    intervalId:number = 0 ;

    onCanvasCreated(canvas:any) {
        //Start animation
        if(canvas===null)
        {
            return ;
        }
        /**@type {canvas} */
        this.rad = 0 ;
        this.ctx = canvas.getContext('2d');
        
        this.animate();
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.animate.bind(this),10);
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    animate()
    {
        /**@type {canvas} */
        let canvas:any = this.ctx ;

        canvas.clearRect(0,0,Width,Height);

        canvas.strokeStyle=preLoaderColor;
        canvas.lineWidth=3;
        canvas.beginPath();
        canvas.arc(Width/2,Height/2,Width/4,this.rad,this.rad+Math.PI,false);
        canvas.stroke();
        canvas.beginPath();
        canvas.arc(Width/2,Height/2,Width/4-2,this.rad-1,(this.rad+Math.PI-1),false);
        canvas.stroke();

        this.rad+=AnimSpeed ;
    }
    
    render() {
        return (
            <canvas style={{width:100,height:100,margin:'auto',display:'block'}} ref={this.onCanvasCreated.bind(this)} width={Width} height={Height}/>
        );
    }
};

interface PreloaderModul {
    setUp:typeof Preloader.setUp 
}

export {Preloader,PreloaderModul};