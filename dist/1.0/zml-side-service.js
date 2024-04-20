import{M as e,w as t}from"./message-wrapper-C2vsczgN.js";import{n as s}from"./utils-BniZYMK7.js";import"./event-41D0pP7K.js";import"./data.js";const n={onChange(e){return e?(settings.settingsStorage.addListener("change",e),this):this},offChange(){return settings.settingsStorage.removeListener("change"),this},getItem:e=>settings.settingsStorage.getItem(e),setItem:(e,t)=>settings.settingsStorage.setItem(e,t),clear:()=>settings.settingsStorage.clear(),removeItem(e){settings.settingsStorage.removeItem(e)},getAll:()=>settings.settingsStorage.toObject()};const i=t(new e({logger:Logger.getLogger("side-message")}),Logger.getLogger("message-builder-device"));const o={convert:e=>s("Image Convert")};const r=[function loggerPlugin(){return{onInit(){this.logger=Logger.getLogger(sideService.appInfo.app.appName),this.logger.scope=sideService.appInfo.app.appName,this.logger.name="side-service",this.log=(...e)=>{this.logger.log(...e)},this.error=(...e)=>{e[0]instanceof Error?this.logger.error(...e):this.logger.error({},...e)},this.debug=(...e)=>{this.logger.debug(...e)}}}}(),function settingsPlugin(){return{onInit(){this.settings=n,this._onSettingsChange=this.onSettingsChange?.bind(this),n.onChange(this._onSettingsChange),"undefined"!=typeof sideService&&sideService.launchReasons.settingsChanged&&this._onSettingsChange(sideService.launchArgs)},onDestroy(){this._onSettingsChange&&n.offChange(this._onSettingsChange)}}}(),function messagingPlugin(){return{onInit(){this.messaging=i,this._onCall=this.onCall?.bind(this),this._onRequest=this.onRequest?.bind(this),this.messaging.onCall(this._onCall).onRequest(this.__onRequest.bind(this)),this.messaging.start()},onDestroy(){this._onCall&&this.messaging.offOnCall(this._onCall),this._onRequest&&this.messaging.offOnRequest(this._onRequest),this.messaging.stop()},request(e,t={}){return this.messaging.request(e,t)},call(e){return this.messaging.call(e)},__onRequest(e,t){return"http.request"===e.method?this.httpRequestHandler(e,t):this._onRequest(e,t)},fetch:e=>fetch(function addBaseURL(e){const t={timeout:1e4,...e};return t.baseURL&&(t.url=new URL(t.url,t.baseURL).toString()),t}(e)),httpRequestHandler(e,t){return this.fetch(e.params).then((e=>{t(null,{status:e.status,statusText:e.statusText,headers:e.headers,body:e.body})})).catch((e=>t({code:1,message:e.message})))}}}(),function fileTransferPlugin(){return{sendFile:(e,t)=>s("File Transfer")}}()],g=[function downloadPlugin(e){e.download=(e,t)=>notSupported("File Transfer")},function convertPlugin(e){e.convert=function(e){return o.convert(e)}}];function BaseSideService(e){const t={};return g.forEach((e=>e(t))),r.forEach((e=>Object.assign(t,e))),{...e,...t,onInit(t){r.forEach((e=>e.onInit?.apply(this,t))),e.onInit?.apply(this,t)},onRun(t){r.forEach((e=>e.onRun?.apply(this,t))),e.onRun?.apply(this,t)},onDestroy(t){e.onDestroy?.apply(this,t),r.reverse().forEach((e=>e.onDestroy?.apply(this,t)))}}}export{BaseSideService,o as convertLib,n as settingsLib};
