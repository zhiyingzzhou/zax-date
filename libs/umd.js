!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.zaxDate=t()}(this,function(){"use strict";return{compare:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;return(e=new Date(e))>(t=new Date(t))?1:e==t?0:-1},offset:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Date",n=arguments.length>2?arguments[2]:void 0;return e=new Date(e),t=t.charAt(0).toUpperCase()+t.slice(1).toLowerCase(),new Date(e["set"+t](e["get"+t]()+n))},_pad:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;for(e=String(e);e.length<t;)e="0"+e;return e},ago:function(e){var t=new Date-new Date(e);return t<6e4?Math.round(t/1e3)+"秒前":t<36e5?Math.round(t/6e4)+"分钟前":t<864e5?Math.round(t/36e5)+"小时前":t<2592e6?Math.round(t/864e5)+"天前":t<31536e6?Math.round(t/2592e6)+"月前":Math.round(t/31536e6)+"年前"},format:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-mm-dd HH:MM:SS",n=new Date(e),o=this._pad,a=n.getFullYear(),r=n.getMonth(),i=n.getDate(),u=n.getHours(),d=n.getMinutes(),h=n.getSeconds(),g=n.getMilliseconds(),f={yy:String(a).slice(2),yyyy:a,m:r+1,mm:o(r+1),d:i,dd:o(i,2),h:u%12||12,hh:o(u%12||12),H:u,HH:o(u,2),M:d,MM:o(d,2),S:h,SS:o(h,2),l:o(g,3),L:o(Math.round(g/10))};return t.replace(/([a-z]+)/gi,function(e){return f[e]||e})},diff:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,n=new Date(e),o=new Date(t).getTime()-n.getTime(),a=o%864e5,r=a%36e5,i=r%6e4;return{days:Math.floor(o/864e5),hours:Math.floor(a/36e5),minutes:Math.floor(r/6e4),seconds:Math.round(i/1e3)}},age:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=new Date(this.format(e,"yyyy-mm-dd")),o=new Date,a=o.getMonth()<n.getMonth()||o.getMonth()===n.getMonth()&&o.getDate()<n.getDate()?1:0;t||(a=0);var r=o.getFullYear()-n.getFullYear()-a;return parseInt(r)},isLeapYear:function(e){return e%4==0&&e%100!=0}}});
