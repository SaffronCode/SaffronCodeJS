
import PageData from "./PageData";
import EventDispatcher from "../EventDispatcher";

//import JSFunctions from "../libs/JSFunctions" ;

const maximomAcceptableParamsOnURL = 10 ;

var PageManager = {};
PageManager.dispatcher = new EventDispatcher();
PageManager.PAGE_CHANGED = "PAGE_CHANGED" ;

PageManager.routerParamList = '' ;
for(var i = 0 ; i<maximomAcceptableParamsOnURL ; i++)
{
    PageManager.routerParamList+='/:p'+i+'?';
}

///Page list ↓
PageManager.allPages = [] ;
PageManager.menuPages = [] ;


var lastPage = new PageData();

PageManager.changePage = function(targetPage,pageData=[])
{
    if(targetPage!==null)
    {
        lastPage = JSON.parse(JSON.stringify(targetPage)) ;
        for(var i = 0 ; i<pageData.length ; i++)
        {
            lastPage.url += '/'+encodeURIComponent(pageData[i]) ;
        }
        PageManager.dispatcher.dispatchEvent(PageManager.PAGE_CHANGED,lastPage);
    }
}

/**@description pass the constructor's props to the function and retrive parameters list */
PageManager.decodePageParams = function(props={})
{
    if(
        props !== undefined &&
        props.match !== undefined && 
        props.match.params !==null
    )
    {
        var params = [] ;
        for(var i = 0 ; i<maximomAcceptableParamsOnURL ; i++)
        {
            var par = props.match.params['p'+i] ;
            if(par!==undefined)
                params.push(decodeURIComponent(par));
            else
                break ;
        }
        return params ;
    }
}

/**@return {PageData} */
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
