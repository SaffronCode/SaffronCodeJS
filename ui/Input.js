import React, { Component } from 'react';

export default class Input extends Component {

    static defaultProps = {
        onChange:function(){},
        id:"",
        type:"text",
        value:"",
        name:'',
        /*defaultChecked:false,
        checked:false,*/
    }

    constructor(props) {
        super(props);
        this.state = props ;
    }

    componentWillReceiveProps(props)
    {
        this.setState(props);
    }
    
    onChange(item)
    {
        item.target.value = this.NumberChange(this.correctString(item.target.value));
        this.state.onChange(item);
    }

    correctString(str='')
    {
        return str.split('ي').join('ی').split('ة').join('ه').split('‏').join(' ').split('ك').join('ک');
    }

    
    NumberChange(str='',zero='۰')
    {
        var I = String('۰').charCodeAt(0);
        for(var i=0 ; i<10 ; i++){
            str = str.split(String.fromCharCode(i+I)).join(String(i));
        }
        return str;
    }

  render() {
      let inputmode = null ;
      let currentType = this.state.type ;
      if(currentType==='number')
      {
            //inputmode = "numeric";
            currentType = 'text';
      }
      console.log("this.state.checked : ",this.state.checked);
      console.log("this.state.defaultChecked : ",this.state.defaultChecked);
    return (
        <input step="any" 
            onChange={this.onChange.bind(this)} 
            name={this.state.name} 
            id={this.state.id} 
            type={currentType} 
            value={this.state.value} 
            inputmode={inputmode} 
            defaultChecked={this.state.defaultChecked} 
            checked={this.state.checked}/>
    )
  }
};
