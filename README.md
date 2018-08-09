<p align="center"><img alt="Saffron React" src="https://github.com/SaffronCode/SaffronCode-React/blob/master/doc/152.png?raw=true"/></p>

<p align="center">Package of graphical and non graphical libraries for React developers such as Canvas preloader and Regex functions.</p>

`npm install saffroncodejs`

# ui
`import {ui} from 'saffroncodejs'`

## Preloader

1- Set the Preloader color,size and animation speed once in index.js ui.Preloader.setUp("#777777ff",200,200,0.2) 
2- and then use it every where like below: <ui.Preloader/> ☺

## Input

This is just like html input tag but it has better control on patterns and it will correct the user's mismatches character

# libs
Pure JS functions and classes
`import {libs} from 'saffroncodejs'`

## StringFunctions

function isNullOrEmpty(value:string):boolean
function isArabic(str:string=""):boolean
function isPersian(str:string="",stringLength:number=NaN):boolean
function search(str:string="",searchedWord:string="",fineAll:boolean = true,arabic:boolean=false, arabic2:boolean=false)
function generateLinks(str:string="",linkColors:number=-1):string
function clearDoubleQuartmarksOnJSON(str:string=""):string
function clearSpacesAndTabs(str:string=""):string
function clearSpacesAndTabsAndArrows(str:string="")
function utfToUnicode(utfString:string=""):string
function correctUTF(utfWord:string=""):string
function short(str:string="",len:number=10,removeEntersWith:string='')
function timeInString(seconds:number=0):string
function numToString(num:number,numberLenght:number=2):string
function clearHTMLTags(ReferText:string=""):string
function removeHTML(ReferText:string=""):string
function compairFarsiString(str1:string="",str2:string=""):number
function htmlCharacterEncoder(str:string=""):string
function KaafYe(str:string=""):string
function jsonCorrector(oldJson:string=""):string
function removeNumberFromBegining(str:string=""):string
function isEmail(email:string=""):boolean
function makeHTMLWithSize(pureHML:string="", defaultFontSize:number=0):string
function findMainDomain(url:string="",removeHTTPPart:boolean=true):string
function findPortOfURL(url:string=""):number
function correctInputString(str:string=""):string
function numCorrection(str:string=""):string
function isURL(str:string=""):boolean
function isLocation(str:string=""):boolean
function currancyPrint(inputcurencynumber:string):string
function returnLasNumberPartInInteger(str:string=""):number
function stringToColor(str:string=""):number
function removeSpacesFromTwoSides(str:string=""):string
function fileSizeInString(fileSizeInByte:number=0):string

	
# framework
`import {framework} from 'saffroncodejs'`

