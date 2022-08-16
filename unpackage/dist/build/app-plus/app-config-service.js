
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/index","pages/index/index","pages/login/registry","pages/atividate/index","pages/fazer/index","pages/tarefa/index","pages/minha/index","pages/promotion/index","pages/promotion/invite","pages/recharge/index","pages/index/problema","pages/index/sobre","pages/index/about","pages/retirar/index","pages/minha/bank","pages/minha/safety","pages/tarefa/orderdetail","pages/recharge/from","pages/recharge/record","pages/promotion/record","pages/minha/service","pages/minha/langchange","pages/minha/appdownload"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"Super Ganho","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","navigationStyle":"custom","animationType":"pop-in"},"tabBar":{"color":"#419FD9","selectedColor":"#419FD9","borderStyle":"none","fontSize":"8px","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/tarbar/home.png","selectedIconPath":"static/tarbar/home-active.png","text":"Home","width":"100px"},{"pagePath":"pages/recharge/index","iconPath":"static/tarbar/actividade.png","selectedIconPath":"static/tarbar/actividade-active.png","text":"recharge"},{"pagePath":"pages/fazer/index","iconPath":"static/tarbar/tarefas.png","selectedIconPath":"static/tarbar/tarefas-active.png","text":"shopping"},{"pagePath":"pages/tarefa/index","iconPath":"static/tarbar/comunidade.png","selectedIconPath":"static/tarbar/comunidade-active.png","text":"task"},{"pagePath":"pages/minha/index","iconPath":"static/tarbar/meu.png","selectedIconPath":"static/tarbar/meu-active.png","text":"my"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"Super Ganho","compilerVersion":"3.5.3","entryPagePath":"pages/login/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/index","meta":{"isQuit":true},"window":{"navigationBarTitleText":"Home","animationType":"pop-in","animationDuration":300}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"Pagina incial","enablePullDownRefresh":false,"animationDuration":300}},{"path":"/pages/login/registry","meta":{},"window":{"navigationBarTitleText":"registry","enablePullDownRefresh":false,"animationDuration":300}},{"path":"/pages/atividate/index","meta":{},"window":{"navigationBarTitleText":"List de Eventos","enablePullDownRefresh":false}},{"path":"/pages/fazer/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"fazer dinheriro","enablePullDownRefresh":false}},{"path":"/pages/tarefa/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"lista de tarefas","enablePullDownRefresh":false}},{"path":"/pages/minha/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"minha","enablePullDownRefresh":false}},{"path":"/pages/promotion/index","meta":{},"window":{"navigationBarTitleText":"convide amigos","enablePullDownRefresh":false}},{"path":"/pages/promotion/invite","meta":{},"window":{"navigationBarTitleText":"convide amigos","enablePullDownRefresh":false}},{"path":"/pages/recharge/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"recharge","enablePullDownRefresh":false}},{"path":"/pages/index/problema","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/sobre","meta":{},"window":{"navigationBarTitleText":"sobre nós","enablePullDownRefresh":false}},{"path":"/pages/index/about","meta":{},"window":{"navigationBarTitleText":"Detalhes","enablePullDownRefresh":false}},{"path":"/pages/retirar/index","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/minha/bank","meta":{},"window":{"navigationBarTitleText":"bank","enablePullDownRefresh":false}},{"path":"/pages/minha/safety","meta":{},"window":{"navigationBarTitleText":"safety","enablePullDownRefresh":false}},{"path":"/pages/tarefa/orderdetail","meta":{},"window":{"navigationBarTitleText":"Lista de Pedidos","enablePullDownRefresh":false}},{"path":"/pages/recharge/from","meta":{},"window":{"navigationBarTitleText":"from","enablePullDownRefresh":false}},{"path":"/pages/recharge/record","meta":{},"window":{"navigationBarTitleText":"record","enablePullDownRefresh":false}},{"path":"/pages/promotion/record","meta":{},"window":{"navigationBarTitleText":"record","enablePullDownRefresh":false}},{"path":"/pages/minha/service","meta":{},"window":{"navigationBarTitleText":"service","enablePullDownRefresh":false}},{"path":"/pages/minha/langchange","meta":{},"window":{"navigationBarTitleText":"langchange","enablePullDownRefresh":false}},{"path":"/pages/minha/appdownload","meta":{},"window":{"navigationBarTitleText":"App","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
