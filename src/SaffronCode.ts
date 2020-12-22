import {Preloader,PreloaderModul} from './ui/PreLoader';
import Input from './ui/Input';
import TagForInput from './ui/TagForInput';
//import StringFunctions from './libs/StringFunctions';
import * as React from 'react';
import EventDispatcher from './framework/EventDispatcher';
import PageManager from './framework/pageManager/PageManager';
import JSFunctions from './libs/JSFunctions';
import StringFunctions from './libs/StringFunctions';
import PageData from './framework/pageManager/PageData';
import GlobalStorage from './libs/GlobalStorage';
import Encode from './libs/Encode';



interface uiModel{
    Preloader:PreloaderModul,
    Input:typeof Input,
    TagForInput: typeof TagForInput
}

var ui:uiModel = {
    Preloader:Preloader,
    Input:Input,
    TagForInput: TagForInput
};



interface frameworkModel{
    EventDispatcher:typeof EventDispatcher,
    PageManager:typeof PageManager,
    PageData:typeof PageData
}

var framework:frameworkModel = {
    EventDispatcher:EventDispatcher,
    PageManager:PageManager,
    PageData:PageData,
}




interface libsModel{
    JSFunctions:typeof JSFunctions,
    StringFunctions:typeof StringFunctions,
    GlobalStorage:typeof GlobalStorage,
    Encode:typeof Encode,
}

var libs:libsModel = {
    JSFunctions:JSFunctions,
    StringFunctions:StringFunctions,
    GlobalStorage:GlobalStorage,
    Encode:Encode,
}


export {ui,framework,libs} ;