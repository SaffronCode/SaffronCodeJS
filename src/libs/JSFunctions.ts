interface JSFunctionsModel {
    objectToURIVars:typeof objectToURIVars,
    correctDates:typeof correctDates,
}

var JSFunctions:JSFunctionsModel = {
    objectToURIVars:objectToURIVars,
    correctDates:correctDates,
} ;

/**@description This function can convert your objecs to URIVariables string */
function objectToURIVars(obj:any={})
{
    //https://stackoverflow.com/questions/6566456/how-to-serialize-an-object-into-a-list-of-url-query-parameters
    var str:string = "";
    for (var key in obj) {
        if (str != "") {
            str += "&";
        }
        str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str ;
}

/**@description Pass any objects here and it will update all Date variables corrected with timeZoneOffsets. use full to correct api variables and sql variables. */
function correctDates(obj:any):any
{
    for(var i in obj)
    {
        if(obj[i]!=null && typeof(obj[i]) === 'object')
        {
            if(obj[i].getTimezoneOffset !=undefined && obj[i].setMinutes != undefined && obj[i].getMinutes !=undefined)
            {
                //It  is date
                obj[i].setMinutes(obj[i].getMinutes()-obj[i].getTimezoneOffset());
            }
            else
            {
                correctDates(obj[i]);
            }
        }
        else if(obj[i]!=null && typeof(obj[i]) === 'string')
        {
            if(String(obj[i]).match(/[\d]{4}-[\d]{2}-[\d]{2}T[\d]{2}:[\d]{2}:[\d]{2}\.[\d]{3}[Z]?/)) 
            {
                obj[i] = new Date(obj[i]);
                obj[i].setMinutes(obj[i].getMinutes()-obj[i].getTimezoneOffset());
            }
        }
    }
    return obj ;
}

export default JSFunctions ;