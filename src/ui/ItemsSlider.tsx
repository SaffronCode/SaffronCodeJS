import React, { Component } from 'react'

import './ItemsSlider.css';

interface ItemSliderProps {
  children: React.ReactNode,
  id: string,
  rtl: boolean
}

export default class ItemsSlider extends Component<ItemSliderProps> {

  state = {
    beforeDisable: false,
    nextDisable: false
  }

  // check if the next and before buttons should be disabled
  // only works for rtl
  checkForDisabled = (divToScroll:any) => {
  
    if(divToScroll.scrollLeft >= 0) {
      this.setState({ beforeDisable: true, nextDisable: false });
    }

    if(divToScroll.scrollLeft < 0){
      this.setState({ beforeDisable: false, nextDisable: false });
    } 

    if(( Math.abs(divToScroll.scrollLeft) + divToScroll.clientWidth + 20 ) >= divToScroll.scrollWidth ) {
      this.setState({ nextDisable: true });
    }
  }

  // set interval for scroll (to add animation)
  scrollWithAnimation = (scrollToNum:number, divToScroll:any) => {

    let count:number = 0;
    let scrollInterval = setInterval(() => {
      divToScroll.scrollLeft -= scrollToNum;
      count += 1;

      if( count === 50 ) {
        clearInterval(scrollInterval);
        if( this.props.rtl ) this.checkForDisabled(divToScroll);
      }
    }, 10)

  }

  scrollTo = (e:any, direction:string) => {

    let divToScroll = document.querySelector(`#${this.props.id}`);  

    let navDirections = (this.props.rtl) ? [5, -5] : [-5, 5];

    switch(direction) {
      case 'next':
        this.scrollWithAnimation(navDirections[0], divToScroll);
        e.preventDefault();
        break;

      case 'before':  
        this.scrollWithAnimation(navDirections[1], divToScroll);
        e.preventDefault();
        break;

      default:
        // do nothing  
    }

  }

  render() {

    const sliderContainer:object = {
      position: "relative"
    }

    const navButtonsStyle:object = {
      position: "absolute",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      top: "39%",
      left: "0"
    }

    return (
      <div>
        <div style={sliderContainer}>
          <div className="saffronJsSlider-13" id={this.props.id}>
            {this.props.children}
            <div style={navButtonsStyle}>
              <button
                disabled={this.state.beforeDisable}
                onClick={(e) => this.scrollTo(e, "before")}
              >
                before
              </button>
              <button
                disabled={this.state.nextDisable}
                onClick={(e) => this.scrollTo(e, "next")}>
                next
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
