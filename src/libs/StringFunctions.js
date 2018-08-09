var StringFunctions = {} ;




var EnglishEstesna = ['’'];

var	arabicChars = 'ًٌٍَُِّْٰٜٕٖۣٞٝٓٔٗ٘ٙٚٛؕؔؓؐؑؒۖۘۗۙۚۛۜۢ‌ـ?',
	arabicSames = ['ؤو','11','22','33','44','55','66','77','88','99','00',
							'0٠۰','1١۱','9٩۹','8٨۸','7٧۷','6٦۶','5٥۵','4٤۴','3٣۳','2٢۲'
							,'ييیىئ','اإأآ?','کك'],
	arabicWord = 'والي';
		
		
		/**@desc returns true if there was to many arabic signes there<br>
		 * if the number of arabic sign was less than 1/4 , this function detect that the str is not arabic*/
StringFunctions.isArabic = function(str="")
{
	var reg = new RegExp('['+arabicChars+']','g');
	var founced = 0 ;
	var L = Math.min(50,str.length) ;
	
	var searchResult = reg.exec(str);
	while(searchResult!==null && reg.lastIndex<L)
	{
		founced++ ;
		searchResult = reg.exec(str);
	}
	if(founced>L/4)
	{
		return true ;
	}
	else
	{
		return false ;
	}
}


/**@desc Returns true if currenct string has at least one persian script.
 * @returns {Boolean}
*/
StringFunctions.isPersian = function(str="",stringLength=NaN)
{
	var max = 0;
	if(isNaN(stringLength))
	{
		max = Math.min(str.length , 200);
	}
	else
	{
		max = Math.min(str.length , stringLength) ;
	}
	for(var i = 0 ; i<max ; i++)
	{
		if(str.charCodeAt(i)>1000 && EnglishEstesna.indexOf(str.charAt(i))===-1)
		{
			//console.log('This is arabic : '+str.charAt(i)+' at '+i+' the char code is : '+str.charCodeAt(i));
			return true ;
		}
	}
	return false;
}

/**@desc it will returns list of points that shows index and ofsset of each word founded > [{x:0,y:0}]*/
StringFunctions.search = function(str="",searchedWord="",fineAll = true,arabic=false, arabic2=false)
{
	var founded = [{x:0,y:0}];
	founded = [] ;
	if(str === '' || str === ' ')
	{
		return founded ;
	}
	if(arabic)
	{
		//arabic search has problems
		var regularEx = '' ;
		var L = searchedWord.length ;
		var arabChars = arabicChars ;
		if(arabic2)
		{
			arabChars+= arabicWord ;
		}
		for(var i = 0 ; i<L ; i++)
		{
			var char = searchedWord.charAt(i); 
			for(var j = 0 ; j<arabicSames.length ; j++)
			{
				if(arabicSames[j].indexOf(char)!==-1)
				{
					char = '['+arabicSames[j]+']' ;
					break ;
				}
			}
			regularEx += char;
			if(i<L-1)
			{
				regularEx+='['+arabChars+']*';
			}
		}
		var reg = new RegExp(regularEx,'g');
		var searchResult = reg.exec(str);
		while(searchResult!==null)
		{
			founded.push({x:searchResult.index,y:reg.lastIndex});
			searchResult = reg.exec(str);
			if(!fineAll)
			{
				break ;
			}
		}
	}
	else
	{
		var f=-1 ;
		while((f=str.indexOf(searchedWord,f+1))!==-1)
		{
			founded.push({x:f,y:f+searchedWord.length});
			if(!fineAll)
			{
				break ;
			}
		}
	}
	
	return founded ;
}


//////////////////////////////////////////////////link generators↓

/**@desc generate link on the current string and it will returns html text*/
StringFunctions.generateLinks = function(str="",linkColors=-1)
{
	var colorTagStart = '';
	var colorTagEnd = '';
	if(linkColors!==-1)
	{
		colorTagStart = '<font color="#'+linkColors.toString(16)+'">';
		colorTagEnd = '</font>';
	}
	//debug telephone

	//console.log('phone enabled');
	var regNumberDetection = /([\n\r\s\t,^])([\d-+]{7,})/gi;//([\n\r\s\t,])([\d-]{8,})([\t\n\r\s,])
	console.log("Find the phone : "+str);
	str = str.replace(regNumberDetection,'$1'+colorTagStart+'<a href="tel:$2">$2</a>'+colorTagEnd);//

	var regURLDetect = /(www|http:\/\/)[^ \n\r]*/gi ;///(www\. | http)\S*\s/gi;//TODO it has problem! if you pass an html with href= tag on it, it will break up the complete html
	str = str.replace(regURLDetect,colorTagStart+'<a href="http://$&">$&</a>'+colorTagEnd);
	//var regURLDetect2:RegExp = /http\S*\s/gi; 
	//str = str.replace(regURLDetect2,'<font color="'+linkColors+'"><a href="$&">$&</a></font>');
	var regDetectEmail = /[a-z.\-1234567890_]*@[a-z.\-_]*/gi ;
	str = str.replace(regDetectEmail,colorTagStart+'<a href="mailto:$&">$&</a>'+colorTagEnd);
	
	var doubleHTTP = /http:\/\/[ ]*http:\/\//gi;
	str = str.replace(doubleHTTP,'http://');
	
	return str ;
}

/**@desc *Clear in line "s in the json values:<br>
 * {"data":"my name is "ali"."}<br>
 * {"data":"my name is \"ali\"."}*/
StringFunctions.clearDoubleQuartmarksOnJSON = function(str="")
{
	//var str:String = '[{"IdNews":"585","DateNews":"1394\\/8\\/20 ","SubjectNews":"fdjsakl fjk\\"adsl jfkldsa ","ImageNews":"http:\\/\\/www.melkban24.ir\\/Files\\/News585.jpg"},{"IdNews":"584","DateNews":"1394\\/8\\/20 ","SubjectNews":"fsjdkl klfsad jklfsjadk ljfklds","ImageNews":"http:\\/\\/www.melkban24.ir\\/Files\\/News584.jpg"},{"IdNews":"583","DateNews":"1394\\/8\\/19 ","SubjectNews":"fdjks jkfjd skfkjdkslfj jkfd f","ImageNews":"http:\\/\\/www.melkban24.ir\\/Files\\/News583.jpg"},{"IdNews":"582","DateNews":"1394\\/8\\/19 ","SubjectNews":"fdjfk kfjd lfdk lfkdsjkfkdfkls jkf","ImageNews":"http:\\/\\/www.melkban24.ir\\/Files\\/News582.jpg"},{"IdNews":"581","DateNews":"1394\\/8\\/18 ","SubjectNews":"مjkf jkfdjsk jkfldjkfld kfdjkfdjk","ImageNews":"http:\\/\\/www.melkban24.ir\\/Files\\/News581.jpg"},{"IdNews":"580","DateNews":"1394\\/8\\/18 ","SubjectNews":"fksjdf kfjds klfjkdlfkdsj f sf sfd","ImageNews":"http:\\/\\/www.melkban24.ir\\/Files\\/News580.jpg"},{"IdNews":"579","DateNews":"1394\\/8\\/18 ","SubjectNews":"fdskl jfsdkj kfdsjk jkflfdks","ImageNews":"http:\\/\\/www.melkban24.ir\\/Files\\/News579.jpg"},{"IdNews":"578","DateNews":"1394\\/8\\/18 ","SubjectNews":"fdsa fad" sfdsa"fdfsaf","ImageNews":"http:\\/\\/www.melkban24.ir\\/Files\\/News578.jpg"},{"IdNews":"577","DateNews":"1394\\/8\\/17 ","SubjectNews":"jisfad jkfsdjakj lfasjfdjfsdj kfsdjkl jkf","ImageNews":"http:\\/\\/www.melkban24.ir\\/Files\\/News577.jpg"},{"IdNews":"576","DateNews":"1394\\/8\\/17 ","SubjectNews":"fdf afd fsadfdsaf afs df asfsda fsda ","ImageNews":"http:\\/\\/www.melkban24.ir\\/Files\\/News576.jpg"}]';
	var regexp = /(":"((?!"\},\{)(?!",")(?!"\}\])(?!"\})(.))*[^\\])"((?!\},\{)(?!,")(?!\}\])(?!\}))/gi
	var lastStr = "" ;
	do
	{
		lastStr = str ;
		str = str.replace(regexp,'$1\\"')
	}while(str!==lastStr)
	return str ;
}

/**@desc This function will remove all spaces and tabs and enters from a string*/
StringFunctions.clearSpacesAndTabs = function(str="")
{
	if(str===null)
		return '' ;
	return str.split('\n').join('').split('\r').join('').split('\t').join('').split(' ').join('');
}


/**@desc This function will remove all spaces and tabs and enters from a string*/
StringFunctions.clearSpacesAndTabsAndArrows = function(str="")
{
	if(str===null)
		return '' ;
	return str.split('\n').join('').split('\r').join('').split('\t').join('').split(' ').join('').split('<').join('').split('>').join('');
}





///////////////////New Funciton on String funciont
StringFunctions.utfToUnicode = function(utfString="")
{
	
	var reg = /u[0-9a-f][0-9a-f][0-9a-f][0-9a-f]/gi;
	
	var searchResult = reg.exec(utfString);
	var correctedString = '' ;
	var index = 0 ;
	var lastIndex = Infinity ;
	var currentIndex ;
	while(searchResult!==null)
	{
		lastIndex = reg.lastIndex ;
		currentIndex = searchResult.index;
		
		correctedString += utfString.substring(index,currentIndex)+StringFunctions.correctUTF(utfString.substring(currentIndex,lastIndex));
		index = lastIndex ;
		searchResult = reg.exec(utfString);
	}
	correctedString+=utfString.substring(index);
	
	return correctedString ;
}

StringFunctions.correctUTF = function(utfWord="")
{
	
	var num = utfWord.substring(1) ;
	return String.fromCharCode(parseInt(num,16)) ;
}

/////////////////////////////////////////////////Sumerize texts
/**@desc This function will shorten the senteces by the len vlaue*/
StringFunctions.short = function(str="",len=10,removeEntersWith='')
{
	if(str===null)
	{
		return '' ;
	}
	if(removeEntersWith!=='')
	{
		str = str.split('\r').join('\n').split('\n\n').join('\n').split('\n').join(removeEntersWith);
	}
	var dotString = '...';
	var spaceIndex = str.indexOf(' ',len-dotString.length);
	if(spaceIndex === -1)
	{
		if(str.length>len)
		{
			return str.substring(0,len-dotString.length)+dotString;
		}
		else
		{
			return str ;
		}
	}
	else
	{
		if(spaceIndex>=str.length)
		{
			//remove donts from the end
			dotString='';
		}
		return str.substr(0,spaceIndex)+dotString;
	}
}



////////////////////////////////////////////////

/**@desc This function will make inserted html understandable for UnicodeConvertor
StringFunctions.htmlCorrect = function(htm="",linkColor=-1,replacePwithEnter=false,fontSizeIs=20)
{
	return Unicode.htmlCorrect(htm,linkColor,replacePwithEnter,fontSizeIs)
}*/

///////////////////////////////////////////////////////Time functions
/**@desc return the time from seconds to string 10:54*/
StringFunctions.timeInString = function(seconds=0)
{
	seconds = Math.ceil(seconds);
	var min = Math.floor(seconds/60);
	seconds = seconds%60;
	var hour = Math.floor(min/60);
	min = min%60;
	if(hour>0)
	{
		return StringFunctions.numToString(hour)+':'+StringFunctions.numToString(min)+':'+StringFunctions.numToString(seconds);
	}
	else
	{
		return StringFunctions.numToString(min)+':'+StringFunctions.numToString(seconds);
	}
}

/**@desc 1 > 001*/
StringFunctions.numToString = function(num,numberLenght=2)
{
	num = String(num);
	while(num.length<numberLenght)
	{
		num = '0'+num;
	}
	return num;
}

/**@desc Remove all html tags from the text*/
StringFunctions.clearHTMLTags = function(ReferText="")
{
	return StringFunctions.removeHTML(ReferText);
}

/**@desc Remove all html tags from the text*/
StringFunctions.removeHTML = function(ReferText="")
{
	if(ReferText===null)
	{
		return '' ;
	}
	var htmlDeleter = /<\/?[^>]*>/gi;
	return ReferText.replace(htmlDeleter,'');
}


/**@desc Returns -1 if string1 < str2, 1 if str1>str2*/
StringFunctions.compairFarsiString = function(str1="",str2="")
{
	str1 = str1.toLowerCase();
	str2 = str2.toLowerCase();
	
	if(str1 === null)
	{
		str1 = '';
	}
	if(str2 === null)
	{
		str2 = '' ;
	}
	
	if(str1==='' && str2==='')
	{
		return 0 ;
	}
	
	if(str1==='' || str1 ===null)
	{
		return -1 ;
	}
	if(str2==='' || str2===null)
	{
		return 1 ;
	}
	
	var alephba = "ابپتثجچهخدذرزژسشصضطظعغفقكگلمنوهیي";
	var farsiStr1 = StringFunctions.KaafYe(str1);
	var farsiStr2 = StringFunctions.KaafYe(str2);
	
	var index1 = alephba.indexOf(farsiStr1.charAt(0));
	var index2 = alephba.indexOf(farsiStr2.charAt(0));
	
	if(index1===-1 || index2 ===-1)
	{
		if(str1<str2)
		{
			return -1 ;
		}
		else if(str1>str2)
		{
			return 1 ;
		}
		else
		{
			return 0 ;
		}
	}
	
	if(index1<index2)
	{
		return -1 ;
	}
	else if(index1>index2)
	{
		return 1 ;
	}
	else
	{
		return 0 ;
	}
}
StringFunctions.htmlCharacterEncoder = function(str="")
{
	
	var _htmlCar = [{from:"&laquo;",to:"«"},{from:"&raquo;",to:"»"},{from:"&nbsp;",to:" "},{from:'&lt;',to:"<"},{from:"&gt;",to:">"},{from:"&amp;",to:"&"},{from:"&quot;",to:"\\\""},{from:"&apos;",to:"'"},{from:"&cent;",to:"¢"},{from:"&pound;",to:"£"},{from:"&yen;",to:"¥"},{from:"&euro;",to:"€"},{from:"&copy;",to:"©"},{from:"&reg;",to:"®"},{from:"&zwnj;",to:" "}]
	for(var i=0;i<_htmlCar.length;i++)
	{
		console.log('from :',_htmlCar[i].from,'to :',_htmlCar[i].to)
		str = str.split(_htmlCar[i].from).join(_htmlCar[i].to)
	}
	return str		
}

/**@desc this function will remove all persian ک and ی and will repace them with ي and ك*/
StringFunctions.KaafYe = function(str="")
{
	return str.split('ی').join('ي').split('ک').join('ك').split('ى').join('ي');
}

StringFunctions.jsonCorrector = function(oldJson="")
{
	return oldJson.split('\n').join(' \\n').split('\r').join(' \\r').split('"').join('"').split('\t').join('\\t')
}

/**@desc *0902-hello > hello . it will remove any number befor - sign. if there was a - sign<br>
 * 0000helo > 0000helo<br>
 * abs02-hello > abs02-hello*/

StringFunctions.removeNumberFromBegining = function(str="")
{
	var firstDashIndex = str.indexOf('-');
	if(firstDashIndex!==-1)
	{
		for(var i = 0 ; i<firstDashIndex ; i++)
		{
			if(isNaN(Number(str.charAt(i))))
			{
				console.log("---there is no number befor - sign in : "+str);
				return str ;
			}
		}
		return str.substr(firstDashIndex+1);
	}
	return str ;
}

////////////////////////////String controll

/**@desc Returns true if this was an email*/
StringFunctions.isEmail = function(email="")
{
	var reg = /^[\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
	return reg.test(email);
}

/**@desc Returns sized html text*/
StringFunctions.makeHTMLWithSize = function(pureHML="", defaultFontSize=0)
{
	//<P ALIGN="LEFT"><FONT FACE="B Yekan Bold Bold" SIZE="38" COLOR="#000000" LETTERSPACING="0" KERNING="1">f<FONT SIZE="96">s</FONT>d</FONT></P>
	return '<FONT SIZE="'+defaultFontSize+'">'+pureHML+'</FONT>';
}

////////////////////////////////////////////////////////
/**@desc Returns a domain of an url : www.google.com/translage >> google.com*/
StringFunctions.findMainDomain = function(url="",removeHTTPPart=true)
{
	var founded = url.match(/^((http(s|):\/\/)|)[^/^:^\r^\n]+/);
	if(founded===null || founded.length===0)
	{
		return '';
	}
	var theDomain = String(founded[0]).toLowerCase();
	if(removeHTTPPart)
	{
		theDomain = theDomain.split('https://').join('').split('http://').join('').split('www.').join('')
	}
	return theDomain ;
}

/**@desc Return positive number if port founded*/
StringFunctions.findPortOfURL = function(url="")
{
	var founded = url.match(/:[1234567890]+\//) ;
	var portPart ;
	if(founded===null || founded.length ===0 || (portPart = founded[0]).length<3)
	{
		return -1 ;
	}
	var portPartNumber = Number(portPart.substring(1,portPart.length-1));
	if(isNaN(portPartNumber))
	{
		return -1 ;
	}
	else
	{
		return portPartNumber ;
	}
}

/**@desc It will replace ي with ی and correct numbers. */
StringFunctions.correctInputString = function(str="")
{
	return StringFunctions.KaafYe(StringFunctions.numCorrection(str));
}

StringFunctions.numCorrection = function(str="")
{
	var I = String('۰').charCodeAt(0);
	for(var i=I ; i<I+10 ; i++){
		str = str.split(String.fromCharCode(i)).join(String(i-I));
	}
	I = String('٠').charCodeAt(0);
	for(i=I ; i<I+10 ; i++){
		str = str.split(String.fromCharCode(i)).join(String(i-I));
	}
	return str ;
}

/**@desc Returns true if entered string was URL*/
/**@desc Returns true if entered string was URL*/
StringFunctions.isURL = function(str="")
{
	var reg = /^(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/i;
	return reg.test(str);
}

StringFunctions.isLocation=function(str="")
{
	var reg = /^[\d]+\.[\d]+,[\d]+\.[\d]+$/i;
	return reg.test(str);
}

///////////////////////////////////////////////////////**@desc ********/////////////////////////
/**@desc 2500>>>>>>>2,500  12.5654*/
StringFunctions.currancyPrint = function(inputcurencynumber)
{
	inputcurencynumber=String(inputcurencynumber);
	
	var relPart = '' ;
	var floatPart = '' ;
	
	var splitedNumber = String(inputcurencynumber).split('.') ;
	
	relPart = splitedNumber[0] ;
	
	if(splitedNumber.length>1)
	{
		floatPart = '.'+splitedNumber[1] ;
	}
	else
	{
		floatPart = '' ;
	}
	
	inputcurencynumber = relPart ;
	
	var s2="";
	
	while (inputcurencynumber.length > 3) {
		
		s2 = ',' + inputcurencynumber.substring(inputcurencynumber.length - 3, inputcurencynumber.length) + s2;
		inputcurencynumber = inputcurencynumber.substring(0, inputcurencynumber.length - 3);
	}
	
	return inputcurencynumber+s2+floatPart

}



/**@desc http://www.google.com/342 >>> 342.  but it will returns 0 if no number found at the end of line*/
StringFunctions.returnLasNumberPartInInteger = function(str="")
{
	var matched = str.match(/[\d]+$/) ;
	if(matched === null || matched.length === 0)
	{
		return 0 ;
	}
	return Math.floor(Number(matched[0])) ;
}


//////////////////////////////////STring to color
/**@desc Creats color from a link*/
StringFunctions.stringToColor = function(str="")
{
	var col = 0 ;
	for(var i = 0 ; i<str.length ; i++)
	{
		col+=str.charCodeAt(i)*17.7589894;
	}
	//console.log("col : "+col);
	var lastCol = col%10 ;
	var maxRedColor = (lastCol<=3)?0xac0:10 ;
	var maxGreenColor = (lastCol>3 && lastCol<=6)?0xc0:10 ;
	var maxBlueColor = (lastCol>6)?0xc0:10 ;
	//console.log("maxRedColor : "+maxRedColor)
	//console.log("maxGreenColor : "+maxGreenColor)
	//console.log("maxBlueColor : "+maxBlueColor)
	
	var red = (lastCol*87789.15484848)%maxRedColor+0x40;
	var gre = (lastCol*55.15641498)%maxGreenColor+0x40;
	var blu = (lastCol*99.3894516)%maxBlueColor+0x40;
	//console.log("red : "+red.toString(16));
	//console.log("gre : "+gre.toString(16));
	//console.log("blu : "+blu.toString(16));
	
	return red*0x010000+gre*0x000100+blu ;
}




/**@desc Remove spaces from two side of the inputed string : "   hello world  " > "hello world" */
StringFunctions.removeSpacesFromTwoSides=function(str="")
{
	str = str.replace(/[\s]+$/g,'');
	str = str.replace(/^[\s]+/g,'');
	return str ;
}

/**@desc Returning file size in String with lable*/
StringFunctions.fileSizeInString = function(fileSizeInByte=0)
{
	if(isNaN(fileSizeInByte))
	{
		return '' ;
	}
	if(fileSizeInByte<1000)
	{
		return Math.round(fileSizeInByte)+' B';
	}
	else if(fileSizeInByte<1000*1000)
	{
		return Math.round(fileSizeInByte/1000)+" K";
	}
	else if(fileSizeInByte<1000*1000*1000)
	{
		return Math.round(fileSizeInByte/(1000*1000))+" M";
	}
	else
	{
		return Math.round(fileSizeInByte/(1000*1000*1000))+' G';
	}
}

export default StringFunctions ;
		
		