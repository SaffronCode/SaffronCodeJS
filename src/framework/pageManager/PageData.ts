
export default class PageData{
    url:string;
    pageName:string;
    component?:React.ComponentClass;
    pageData:any;
    pageParams?:string[]

    constructor(URL:string='',PageName:string='', Component?:React.ComponentClass, PageParams?: string[])
    {
        this.url = URL ;
        this.pageName = PageName ;
        this.component = Component ;
        this.pageData = {} ;
        this.pageParams = PageParams;
    }
}