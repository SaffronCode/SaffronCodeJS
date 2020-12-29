import React, { Component } from 'react'
import './ItemsSlider.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
interface ItemSliderProps {
  children: React.ReactNode,
  id: string,
  rtl: boolean,
  top: string,
  fontSize: string,
  color: string,
  noNavButtons: boolean
}

export default class ItemsSlider extends Component<ItemSliderProps> {

  state = {
    beforeDisable: false,
    nextDisable: false
  }

  componentDidMount() {
    let divToScroll:any = document.querySelector(`#${this.props.id}`);
    let isDown:boolean = false;
    let start:number;
    let scrollLeft:number;

    // add code to add event listeners to div only when we have id
    // and only add them once
    if(divToScroll) {
      this.checkForDisabled(divToScroll);
      
      const setIsDownFalse = () => {
        isDown = false;
      }
  
      const mouseDownHandler = (e:MouseEvent) => {
        isDown = true;
        start = e.pageX;
        scrollLeft = divToScroll.scrollLeft;
      } 
  
      const mouseMoveHandler = (e:MouseEvent) => {
        if(isDown) {
          e.preventDefault();
          const x = e.pageX;
          const walk = x - start;
          divToScroll.scrollLeft = scrollLeft - walk; 
        }
      }
        
      divToScroll.addEventListener('mousedown', mouseDownHandler);

      divToScroll.addEventListener('mouseup', setIsDownFalse);

      divToScroll.addEventListener('mouseleave', setIsDownFalse);

      divToScroll.addEventListener('mousemove', mouseMoveHandler);
    }

  }

  // check if the next and before buttons should be disabled
  // only works for rtl
  checkForDisabled = (divToScroll:any) => {

    if( this.props.rtl ) {

      if(divToScroll.scrollLeft >= 0) {
        this.setState({ beforeDisable: true, nextDisable: false });
      }
  
      if(divToScroll.scrollLeft < 0){
        this.setState({ beforeDisable: false, nextDisable: false });
      } 
  
      if(( Math.abs(divToScroll.scrollLeft) + divToScroll.clientWidth + 20 ) >= divToScroll.scrollWidth ) {
        this.setState({ nextDisable: true });
      }
      
      return;
    }

    if(divToScroll.scrollLeft >= 0) {
      this.setState({ beforeDisable: true, nextDisable: false });
    }

    if(divToScroll.scrollLeft > 0){
      this.setState({ beforeDisable: false, nextDisable: false });
    } 

    if(( Math.abs(divToScroll.scrollLeft) + divToScroll.clientWidth ) >= divToScroll.scrollWidth ) {
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
        this.checkForDisabled(divToScroll);
      }
    }, 10)

  }

  scrollTo = (e:any, direction:string) => {

    let divToScroll = document.querySelector(`#${this.props.id}`);  
    let navDirections = (this.props.rtl) ? [5, -5] : [-5, 5];

    if(!divToScroll) {
      return;
    }

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

    const top = (this.props.top) ? { top: this.props.top } :
      { top: "50%", transform: "translate(0%,-50%)" };

    const navButtonsStyle:object = {
      position: "absolute",
      width: "100%",
      display: (!this.props.noNavButtons) ? "flex" : "none",
      justifyContent: "space-between",
      ...top,
      left: "0",
    }

    const fontSize = (this.props.fontSize) ? this.props.fontSize : '20px';

    const iconsFontSize:object = {
      fontSize,
      cursor: 'pointer' 
    }

    return (
      <div>
        <div style={sliderContainer}>
          <div className="saffronJsSlider-13" id={this.props.id}>
            
            {this.props.children}
            
            <div style={navButtonsStyle}>
              <FontAwesomeIcon color={(this.state.beforeDisable) ? '#777777' : this.props.color} style={iconsFontSize} icon={(this.props.rtl) ? faChevronRight : faChevronLeft} onClick={(e) => this.scrollTo(e, "before")} />
              <FontAwesomeIcon color={(this.state.nextDisable) ? '#777777' : this.props.color} style={iconsFontSize} icon={(this.props.rtl) ? faChevronLeft : faChevronRight} onClick={(e) => this.scrollTo(e, "next")} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
