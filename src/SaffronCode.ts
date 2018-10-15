import EventDispatcher from './framework/EventDispatcher';
import PageManager from './framework/pageManager/PageManager';
import JSFunctions from './libs/JSFunctions';
import StringFunctions from './libs/StringFunctions';
import PageData from './framework/pageManager/PageData';
import GlobalStorage from './libs/GlobalStorage';
import Encode from './libs/Encode';


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


export {framework,libs} ;