
interface EncodeModel{
    encrypt:typeof encrypt ;
    decrypt:typeof decrypt;
}


var encrypt = function(text:string,key:string,revert:Boolean=false):string
{
	if(text===null)
		return '' ;
	var newText:string = '' ;
	for(var i:number = 0 ; i<text.length ; i++)
	{
		newText += String.fromCharCode(text.charCodeAt(i)+(revert?key.charCodeAt(Math.abs(key.length-i)%key.length):key.charCodeAt(i%key.length)));
	}
	return newText ;
}

var decrypt = function(text:string,key:string,revert:Boolean=false):string
{
	if(text==null)
		return '' ;
	var newText:string = '' ;
	for(var i:number = 0 ; i<text.length ; i++)
	{
		newText += String.fromCharCode(text.charCodeAt(i)-(revert?key.charCodeAt(Math.abs(key.length-i)%key.length):key.charCodeAt(i%key.length)));
	}
	return newText ;
}

const Encode:EncodeModel = {
    encrypt:encrypt,
    decrypt:decrypt,
}

export default Encode;