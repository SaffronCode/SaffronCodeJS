interface JSFunctionsModel {
    objectToURIVars:typeof objectToURIVars
}

var JSFunctions:JSFunctionsModel = {
    objectToURIVars:objectToURIVars
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

export default JSFunctions ;