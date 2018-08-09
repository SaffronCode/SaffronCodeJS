
class EventDispatcher{
    listners:any = {};
    constructor()
    {
        this.listners = {} ;
    }

    /**@description Add a listner to this type 
     * @param {string} type
     * @param {function} trigger
     * @return {void}
    */
    addEventListner(type:string,trigger:(eventType?:string,param?:any)=>any):void
    {
        if(trigger===undefined)
        {
            return ;
        }
        console.log(trigger+" added for "+type)
        if(this.listners[type] === undefined)
        {
            this.listners[type] = [] ;
        }
        this.removeEventListner(type,trigger);
        this.listners[type].push(trigger);
    }
    
    /**@description Remove this function from the current listnere type */
    removeEventListner(type:string,trigger:(eventType?:string,param?:any)=>any):void
    {
        if(trigger===undefined)
        {
            return ;
        }
        if(this.listners[type]!==undefined)
        {
            let index = this.listners[type].indexOf(trigger);
            if(index>=0)
            {
                this.listners[type].splice(index,1);
            }
        }
    }
    
    /**@description Dispatch all triggers for this type of event
     * @param {string} type
     * @param {any}
     */
    dispatchEvent(type:string,param:any=null):void
    {
        console.log("* dispatched : "+type);
        if(this.listners[type]!==undefined)
        {
            this.listners[type].forEach((item:(eventType?:string,param?:any)=>any)=>{item(type,param)})
        }
    }
}



export default EventDispatcher ;
