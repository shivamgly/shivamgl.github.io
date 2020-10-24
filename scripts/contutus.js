const serverURI = 'https://contutus.herokuapp.com/watch'
const contutusId = localStorage.getItem('contutusId');

const reqData = {
  contutusId,
  host: window.location.host || 'unknown',
  path: window.location.pathname || 'unknown',
  appCodeName: navigator.appCodeName || 'unknown',
  appName: navigator.appName || 'unknown',
  appVersion: navigator.appVersion || 'unknown',
  platform: navigator.platform,
  userAgent: navigator.userAgent || 'unknown',
  screenWidth: window.screen.width || 'unknown',
  screenHeight: window.screen.height || 'unknown',
  metaData: null
}
const extraData = {
  buildId: navigator.buildID || 'unknown',
  oscpu: navigator.oscpu || 'unknown',
  product: navigator.product || 'unknown',
  productSub: navigator.productSub || 'unknown'
}

const contutus = (metaData = null) => {
  if (metaData) {
    reqData.metaData = {
      ...metaData,
      ...extraData
    };
  } else {
    reqData.metaData = {
      ...extraData
    };
  }
  if (window.location.hostname !== '127.0.0.1' && window.location.hostname !== 'localhost' && contutusId !== "dont") {
    const req = new XMLHttpRequest();
    req.open("POST", serverURI, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        const { contutusId } = JSON.parse(this.response);
        localStorage.setItem('contutusId', contutusId);
        console.log('Loaded!');
      }
    }
    req.send(JSON.stringify(reqData));
  }
};
