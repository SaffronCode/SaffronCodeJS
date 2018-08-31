import React, { Component } from 'react';
import StringFunctions from '../libs/StringFunctions';

interface InputProps {
    onChange:(inputTarget:any)=>null;
    id:string,
    autoComplete:string,
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
        item.target.value = StringFunctions.correctInputString(item.target.value);
        if(this.props.pattern!=="")
        {
            item.target.value = String(item.target.value).match(this.props.pattern);
        }
        this.state.onChange(item);
    }


  render() {
      let currentType = this.state.type ;
      if(currentType==='number')
      {
            currentType = 'text';
      }
    return (
        <input step="any" 
            onChange={this.onChange.bind(this)} 
            name={this.state.name} 
            autoComplete={this.state.autoComplete} 
            auto
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
