import {Preloader,PreloaderModul} from './ui/PreLoader';
import Input from './ui/Input';
//import StringFunctions from './libs/StringFunctions';
import * as React from 'react';
import EventDispatcher from './framework/EventDispatcher';



interface uiModel{
    Preloader:PreloaderModul,
    Input:typeof Input
}

var ui:uiModel = {
    Preloader:Preloader,
    Input:Input
};



interface frameworkModel{
    EventDispatcher:typeof EventDispatcher
}

var framework:frameworkModel = {
    EventDispatcher:EventDispatcher
}
var disp=new framework.EventDispatcher();

export {ui,framework} ;