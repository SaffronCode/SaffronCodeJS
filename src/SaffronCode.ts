import {Preloader,PreloaderModul} from './ui/PreLoader';
import Input from './ui/Input';
//import StringFunctions from './libs/StringFunctions';
import * as React from 'react';



interface uiModul{
    Preloader:PreloaderModul,
    Input:typeof Input
}

var ui:uiModul = {
    Preloader:Preloader,
    Input:Input
};

export {ui} ;