class EventDispatcher{
    constructor()
    {
        this.listners = {} ;
    }

    /**@description Add a listner to this type 
     * @param {string} type
     * @param {function} trigger
     * @return {void}
    */
    addEventListner(type,trigger)
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
    removeEventListner(type,trigger)
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
    dispatchEvent(type,param=null)
    {
        console.log("* dispatched : "+type);
        if(this.listners[type]!==undefined)
        {
            this.listners[type].forEach(function(item){item(type,param)})
        }
    }
}



export default EventDispatcher ;
