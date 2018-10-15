/**@description You can save and load any object by calling this class instead of LocalStorage */

import Encode from './Encode';

interface GlobalStorageModel {
    load:(id:string)=>any,
    save:(id:string,value:any)=>string
}

const deviceKey:string = ((new Date()).getTimezoneOffset()/60).toString();
//alert("browserLanguage:");
//alert("browserPlatform:");

//alert("sizeScreenW:");
//alert("sizeScreenH:");
//alert("scrColorDepth:");
//alert("scrPixelDepth:");

const GlobalStorage:GlobalStorageModel = {
    load:load,
    save:save
}


/**@description It will return a save status as a string throw the result of the function */
function save(id:string,value:any):string 
{
    id = window.location.host+id ;
    try
    {
        localStorage.setItem(Encode.encrypt(id,deviceKey,true),Encode.encrypt(JSON.stringify(value),deviceKey));
        return '' ;
    }
    catch(e)
    {
        return e.toString() ;
    }
}

/**@description Load the saved object as an parsed object */
function load(id:string)
{
    id = window.location.host+id ;
    var loadedVal:string|null = localStorage.getItem(Encode.encrypt(id,deviceKey,true)) ;
    if(loadedVal===null)
    {
        return null ;
    }
    else
    {
        return JSON.parse(Encode.decrypt(loadedVal,deviceKey));
    }
}

export default GlobalStorage ;