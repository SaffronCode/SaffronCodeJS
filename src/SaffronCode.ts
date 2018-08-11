import {Preloader,PreloaderModul} from './ui/PreLoader';
import Input from './ui/Input';
//import StringFunctions from './libs/StringFunctions';
import * as React from 'react';
import EventDispatcher from './framework/EventDispatcher';
import PageManager from './framework/pageManager/PageManager';
import JSFunctions from './libs/JSFunctions';
import StringFunctions from './libs/StringFunctions';
import PageData from './framework/pageManager/PageData';



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
    PageManager:typeof PageManager,
    PageData:typeof PageData
}

var framework:frameworkModel = {
    EventDispatcher:EventDispatcher,
    PageManager:PageManager,
    PageData:PageData
}





interface libsModel{
    JSFunctions:typeof JSFunctions,
    StringFunctions:typeof StringFunctions
}

var libs:libsModel = {
    JSFunctions:JSFunctions,
    StringFunctions:StringFunctions,
}


export {ui,framework,libs} ;