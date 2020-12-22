import React, { Component } from 'react'


interface TagForInputProps {
  children: React.ReactNode,
  rtl: boolean,
  tagName: string,
  tagBackGround: string,
  tagColor: string
}


export default class TagForInput extends Component<TagForInputProps> {

  render() {

    const divisionStyle:object = {
      display: 'inline-block',
      position: 'relative'
    };

    const direction:string = (this.props.rtl) ? 'right' : 'left';

    const tagBackGround:string = (this.props.tagBackGround) ? (this.props.tagBackGround) : '#ffffff';

    const tagColor:string = (this.props.tagColor) ? (this.props.tagColor) : '#000000';

    const tagStyle:object = {
      position: "absolute",
      top: "-12px",
      [direction]: "12px",
      backgroundColor: tagBackGround,
      zIndex: "100",
      height: "13px",
      color: tagColor
    }

    return (
      <div style={divisionStyle}>
        {this.props.children}
        <span style={tagStyle}>
          {this.props.tagName}
        </span>
      </div>
    )
  }
}
