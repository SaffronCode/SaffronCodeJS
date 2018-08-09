
export default class PageData{
    url:string;
    pageName:string;
    component?:React.ComponentClass;
    pageData:any;

    constructor(URL:string='',PageName:string='',Component?:React.ComponentClass)
    {
        this.url = URL ;
        this.pageName = PageName ;
        this.component = Component ;
        this.pageData = {} ;
    }
}