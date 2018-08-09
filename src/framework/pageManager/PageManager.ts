
import PageData from "./PageData";
import EventDispatcher from "../EventDispatcher";

//import JSFunctions from "../libs/JSFunctions" ;

const maximomAcceptableParamsOnURL = 10 ;
var allPages:PageData[] = [] ;

interface PageManagerModel {
    dispatcher:EventDispatcher,
    PAGE_CHANGED:string,
    routerParamList:string,
    changePage:typeof changePage,
    decodePageParams:typeof decodePageParams,
    getCurrentPage:typeof getCurrentPage,
    registerPage:typeof registerPage,
}

var PageManager:PageManagerModel = {
    dispatcher:new EventDispatcher(),
    PAGE_CHANGED : "PAGE_CHANGED",
    routerParamList:'',
    changePage:changePage,
    decodePageParams:decodePageParams,
    getCurrentPage:getCurrentPage,
    registerPage:registerPage,
};


for(var i:number = 0 ; i<maximomAcceptableParamsOnURL ; i++)
{
    PageManager.routerParamList+='/:p'+i+'?';
}

///Page list ↓

function registerPage(page:PageData):void
{
    allPages.push(page);
}

var lastPage = new PageData();

function changePage(targetPage:PageData,pageData:any[]=[]):void
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
function decodePageParams(props:any={}):any[]|null
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
    return null ;
}

/**@return {PageData} */
function getCurrentPage():PageData|null
{
    /**@type {string} */
    let currentLocation = window.location.href.toLowerCase();
    for(var i = 0 ; i<allPages.length ; i++)
    {
        /**@type {string} */
        let testLoc = allPages[i].url ;
        if(currentLocation.indexOf(testLoc)!==-1)
        {
            return allPages[i] ;
        }
    }
    return null;
}



export default PageManager ;
