import EventDispatcher from "./EventDispatcher";
import SimplePage from "./SimplePage";

import JSFunctions from "../libs/JSFunctions" ;



var PageManager = {};
PageManager.dispatcher = new EventDispatcher();
PageManager.PAGE_CHANGED = "PAGE_CHANGED" ;

///Page list ↓
PageManager.allPages = [] ;
PageManager.menuPages = [] ;


var lastPage = new SimplePage();

PageManager.changePage = function(targetPage,pageData={})
{
    if(targetPage!==null)
    {
        lastPage = JSON.parse(JSON.stringify(targetPage)) ;
        //lastPage.url += '/'+JSFunctions.
        PageManager.dispatcher.dispatchEvent(PageManager.PAGE_CHANGED,targetPage);
    }
}

/**@return {SimplePage} */
PageManager.getCurrentPage = function()
{
    /**@type {string} */
    let currentLocation = window.location.href.toLowerCase();
    for(var i = 0 ; i<PageManager.allPages.length ; i++)
    {
        /**@type {string} */
        let testLoc = PageManager.allPages[i].url ;
        if(currentLocation.indexOf(testLoc)!==-1)
        {
            return PageManager.allPages[i] ;
        }
    }
    return null;
}



export default PageManager ;
