<p align="center"><img alt="Saffron React" src="https://github.com/SaffronCode/SaffronCode-React/blob/master/doc/152.png?raw=true"/></p>

<p align="center">Package of graphical and non graphical libraries for React developers such as Canvas preloader and Regex functions.</p>

`npm install saffroncodejs`

## ui
`import {ui} from 'saffroncodejs'`

### Preloader

1- Set the Preloader color,size and animation speed once in index.js ui.Preloader.setUp("#777777ff",200,200,0.2) 
2- and then use it every where like below: <ui.Preloader/> ☺

### Input

This is just like html input tag but it has better control on patterns and it will correct the user's mismatches character

## libs
Pure JS functions and classes
`import {libs} from 'saffroncodejs'`

### StringFunctions

Full list of libs.StringFunctions functions:

function isNullOrEmpty(value:string):boolean<br>
function isArabic(str:string=""):boolean<br>
function isPersian(str:string="",stringLength:number=NaN):boolean<br>
function search(str:string="",searchedWord:string="",fineAll:boolean = true,arabic:boolean=false, arabic2:boolean=false)<br>
function generateLinks(str:string="",linkColors:number=-1):string<br>
function clearDoubleQuartmarksOnJSON(str:string=""):string<br>
function clearSpacesAndTabs(str:string=""):string<br>
function clearSpacesAndTabsAndArrows(str:string="")<br>
function utfToUnicode(utfString:string=""):string<br>
function correctUTF(utfWord:string=""):string<br>
function short(str:string="",len:number=10,removeEntersWith:string='')<br>
function timeInString(seconds:number=0):string<br>
function numToString(num:number,numberLenght:number=2):string<br>
function clearHTMLTags(ReferText:string=""):string<br>
function removeHTML(ReferText:string=""):string<br>
function compairFarsiString(str1:string="",str2:string=""):number<br>
function htmlCharacterEncoder(str:string=""):string<br>
function KaafYe(str:string=""):string<br>
function jsonCorrector(oldJson:string=""):string<br>
function removeNumberFromBegining(str:string=""):string<br>
function isEmail(email:string=""):boolean<br>
function makeHTMLWithSize(pureHML:string="", defaultFontSize:number=0):string<br>
function findMainDomain(url:string="",removeHTTPPart:boolean=true):string<br>
function findPortOfURL(url:string=""):number<br>
function correctInputString(str:string=""):string<br>
function numCorrection(str:string=""):string<br>
function isURL(str:string=""):boolean<br>
function isLocation(str:string=""):boolean<br>
function currancyPrint(inputcurencynumber:string):string<br>
function returnLasNumberPartInInteger(str:string=""):number<br>
function stringToColor(str:string=""):number<br>
function removeSpacesFromTwoSides(str:string=""):string<br>
function fileSizeInString(fileSizeInByte:number=0):string<br>

	
# framework
`import {framework} from 'saffroncodejs'`

