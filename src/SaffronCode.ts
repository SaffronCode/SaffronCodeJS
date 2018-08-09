import {Preloader,PreloaderModul} from './ui/PreLoader';
import Input from './ui/Input';
//import StringFunctions from './libs/StringFunctions';
import * as React from 'react';
import EventDispatcher from './framework/EventDispatcher';
import PageManager from './framework/pageManager/PageManager';



interface uiModel{
    Preloader:PreloaderModul,
    Input:typeof Input
}

var ui:uiModel = {
    Preloader:Preloader,
    Input:Input
};



interface frameworkModel{
    EventDispatcher:typeof EventDispatcher,
    PageManager:typeof PageManager
}

var framework:frameworkModel = {
    EventDispatcher:EventDispatcher,
    PageManager:PageManager
}



export {ui,framework} ;