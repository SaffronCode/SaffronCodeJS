/**@description You can save and load any object by calling this class instead of LocalStorage */

interface GlobalStorageModel {
    load:(id:string)=>any,
    save:(id:string,value:any)=>string
}


const GlobalStorage:GlobalStorageModel = {
    load:load,
    save:save
}

/**@description It will return a save status as a string throw the result of the function */
function save(id:string,value:any):string 
{
    try
    {
        localStorage.setItem(id,JSON.stringify(value));
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
    var loadedVal:string|null = localStorage.getItem(id) ;
    if(loadedVal===null)
    {
        return null ;
    }
    else
    {
        return JSON.parse(loadedVal);
    }
}

export default GlobalStorage ;