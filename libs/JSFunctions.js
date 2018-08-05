var JSFunctions = {} ;

/**@description This function can convert your objecs to URIVariables string */
JSFunctions.objectToURIVars(obj={})
{
    //https://stackoverflow.com/questions/6566456/how-to-serialize-an-object-into-a-list-of-url-query-parameters
    var str = "";
    for (var key in obj) {
        if (str != "") {
            str += "&";
        }
        str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str ;
}

export default JSFunctions ;