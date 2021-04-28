interface AnalyticsModel {
  run: typeof run
}

var Analytics:AnalyticsModel = {
  run: run
};

function run():any {
  let hostName:string = window.location.hostname;
  let interval:number;
  let frequency:number = 200;

  // set up interval and send api call on initialization
  setAnalyticInterval();
  sendApiRequest();

  document.addEventListener("visibilitychange", onVisibleChange);

  function setAnalyticInterval():any {
    let prevLocation:string = window.location.href;
    let presentLocation:string = window.location.href;
    interval = setInterval(() => {
      presentLocation = window.location.href;
  
      if( prevLocation === presentLocation ) {
        return;
      }
  
      // call api and set prevLocation to presentLocation
      sendApiRequest();
      prevLocation = presentLocation;
    }, frequency)
  }

  function sendApiRequest():any {

    let body = {
      AppId: hostName,
      PageName: '',
      Enter: false
    };

    let pathName: string = window.location.pathname;
    let pathArray: string[] = pathName.split('/');
    let pageName: string = pathArray[1];
    if(pageName && (pageName.length > 0)) {
      body = {
        AppId: hostName,
        PageName: pageName,
        Enter: true
      };
    }

    fetch('https://saffroncodesdk.com/api/Projects/versioncontrol', {
      method: 'POST',
      body: JSON.stringify(body),
    })
    .then(response => response.json())
    .then(data => console.log(data));
  }

  function onVisibleChange () {
    // if page is hidden to user (minimize or on another tab)
    // clear interval and set interval again if page is visible
    // to user and also send api request

    let isHidden:boolean = document.hidden;
    if(isHidden) {
      clearInterval(interval);
      return;
    }
    clearInterval(interval);
    setAnalyticInterval();
    sendApiRequest();

    // console.log(document.hidden, 'isHidden', document.visibilityState, 'state');
  }
}

export default Analytics;