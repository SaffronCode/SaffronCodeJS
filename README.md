<p align="center"><img alt="Saffron React" src="https://github.com/SaffronCode/SaffronCode-React/blob/master/doc/152.png?raw=true"/></p>

<p align="center">Package of graphical and non graphical libraries for React developers such as Canvas preloader and Regex functions.</p>
<p align="center"><a href="https://github.com/SaffronCode/SaffronCodeJS/stargazers">(<bold>Support us with your stars on <bold><img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Logo.png" width="50px"/>)</a></p>

`npm install saffroncodejs`

## ui
`import {ui} from 'saffroncodejs'`

### Preloader

1- Set the Preloader color,size and animation speed once in index.js ui.Preloader.setUp("#777777ff",200,200,0.2) <br/>
2- and then use it every where like below: <ui.Preloader/> ☺

### Input

This is just like html input tag but it has better control on patterns and it will correct the user's mismatches character

## libs
Pure JS functions and classes<br/>
`import {libs} from 'saffroncodejs'`

### StringFunctions

Full list of libs.StringFunctions functions:

clearDoubleQuartmarksOnJSON(str:string=""):string<br>
clearHTMLTags(ReferText:string=""):string<br>
clearSpacesAndTabs(str:string=""):string<br>
clearSpacesAndTabsAndArrows(str:string="")<br>
compairFarsiString(str1:string="",str2:string=""):number<br>
correctInputString(str:string=""):string<br>
correctUTF(utfWord:string=""):string<br>
currancyPrint(inputcurencynumber:string):string<br>
fileSizeInString(fileSizeInByte:number=0):string<br>
findMainDomain(url:string="",removeHTTPPart:boolean=true):string<br>
findPortOfURL(url:string=""):number<br>
generateLinks(str:string="",linkColors:number=-1):string<br>
htmlCharacterEncoder(str:string=""):string<br>
isArabic(str:string=""):boolean<br>
isEmail(email:string=""):boolean<br>
isLocation(str:string=""):boolean<br>
isNullOrEmpty(value:string):boolean<br>
isPersian(str:string="",stringLength:number=NaN):boolean<br>
isURL(str:string=""):boolean<br>
jsonCorrector(oldJson:string=""):string<br>
KaafYe(str:string=""):string<br>
makeHTMLWithSize(pureHML:string="", defaultFontSize:number=0):string<br>
numCorrection(str:string=""):string<br>
numToString(num:number,numberLenght:number=2):string<br>
removeHTML(ReferText:string=""):string<br>
removeNumberFromBegining(str:string=""):string<br>
removeSpacesFromTwoSides(str:string=""):string<br>
returnLasNumberPartInInteger(str:string=""):number<br>
search(str:string="",searchedWord:string="",fineAll:boolean = true,arabic:boolean=false, arabic2:boolean=false)<br>
short(str:string="",len:number=10,removeEntersWith:string='')<br>
stringToColor(str:string=""):number<br>
timeInString(seconds:number=0):string<br>
utfToUnicode(utfString:string=""):string<br>

	
# framework
`import {framework} from 'saffroncodejs'`

## EventDispatcher

	var dispatcher = new EventDispatcher();

	//How to add and remove an EventListner on an dispatcher

	dispatcher.addEventListner(type:string,trigger:(eventType?:string,param?:any)=>any):void;

	//sample : dispatcher.addEventListner("LOGGED_IN",this.userIsLoggedIn)

	dispatcher.removeEventListner(type:string,trigger:(eventType?:string,param?:any)=>any):void;

	//sample : dispatcher.removeEventListner("LOGGED_IN",this.userIsLoggedIn)

	//How to dispatch an event on your dispatcher

	dispatcher.dispatchEvent(type:string,param:any=null):void;

	//sample : dispatcher.dispatchEvent("LOGGED_IN",userTocken)


## PageManager(ReactRouter's Assist)

    dispatcher:new EventDispatcher()
    
    PAGE_CHANGED : "PAGE_CHANGED"
    
    routerParamList:''
    
    changePage:changePage
    
    decodePageParams:decodePageParams
    
    getCurrentPage:getCurrentPage
    
    registerPage:registerPage

### PageData
    url:string;

    pageName:string;
    
    component?:React.ComponentClass;
    
    pageData:any;



