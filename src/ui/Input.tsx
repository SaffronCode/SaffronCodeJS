import React, { Component } from 'react';

interface InputProps {
    onChange:(inputTarget:any)=>null;
    id:string,
    type:string,
    value:string,
    name:string,
    className:string,
    placeholder:string,
    pattern:string,
    defaultChecked:boolean,
    checked:boolean
}

export default class Input extends Component<InputProps,InputProps> {

    static defaultProps = {
        onChange:function(){},
        id:"",
        type:"text",
        value:"",
        name:'',
        className:"",
        placeholder:null,
        pattern:"",
        /*defaultChecked:false,
        checked:false,*/
    }

    constructor(props:InputProps) {
        super(props);
        this.state = props ;
    }

    componentWillReceiveProps(props:InputProps)
    {
        this.setState(props);
    }
    
    onChange(item:any)
    {
        item.target.value = this.NumberChange(this.correctString(item.target.value));
        if(this.props.pattern!=="")
        {
            item.target.value = String(item.target.value).match(this.props.pattern);
        }
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
      let currentType = this.state.type ;
      if(currentType==='number')
      {
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
            className={this.state.className} 
            defaultChecked={this.state.defaultChecked} 
            placeholder={this.state.placeholder} 
            checked={this.state.checked}/>
    )
  }
};
