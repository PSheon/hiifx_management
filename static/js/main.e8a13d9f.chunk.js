(this.webpackJsonphiifx_management=this.webpackJsonphiifx_management||[]).push([[0],{182:function(t,e,a){t.exports=a(418)},187:function(t,e,a){},196:function(t,e,a){},231:function(t,e){},245:function(t,e){},247:function(t,e){},410:function(t,e,a){},413:function(t,e,a){},416:function(t,e,a){},417:function(t,e,a){},418:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(173),i=a.n(o),c=(a(187),a(181)),l=a(97),s=a(57),d=a(58),u=a(60),m=a(59),g=a(21),f=a(1),p=a(174),h=a.n(p),b=(a(188),a(189),a(190),a(191),a(192),a(193),a(194),a(195),a(196),a(175)),v=a.n(b),_=a(176),y=a.n(_),w=function(){var t=JSON.parse(localStorage.getItem("hiifx_history_price"));if(function(t){if(!t)return!1;var e=t[0].date,a=(new Date).getDay(),n=Math.ceil(Math.abs(new Date(e)-new Date)/864e5)-1;return!(n>0)&&(!(6===a&&n>1)&&!(0===a&&n>2))}(t))return t;f.gantt.message({type:"info",text:"\u66f4\u65b0\u532f\u7387\u4e2d~~"}),console.log("Fetch price history");var e=[];return new Promise((function(t,a){v()({method:"GET",url:"".concat("https://cors-anywhere.herokuapp.com","/").concat("https://rate.bot.com.tw/xrt/quote/l6m/USD-TWD")}).then((function(a){if(200===a.status){var n=y.a.load(a.data);n("tbody > tr").each((function(){var t={date:void 0,buyPrice:void 0,sellPrice:void 0};n(this).find("td").each((function(e){0===e&&(t.date=n(this).text()),2===e&&(t.buyPrice=n(this).text()),3===e&&(t.sellPrice=n(this).text())})),t.date&&t.buyPrice&&t.sellPrice&&e.push(t)})),localStorage.setItem("hiifx_history_price",JSON.stringify(e)),f.gantt.message({type:"info",text:"\u532f\u7387\u5df2\u66f4\u65b0~~\ud83c\udf89\ud83c\udf89"}),t(e)}})).catch((function(t){f.gantt.message({type:"error",text:"\u532f\u7387\u672a\u66f4\u65b0~~\ud83c\udf89\ud83c\udf89"}),a(t)}))}))},k=function(t){var e=t.reverse();return{lastDate:e[e.length-1].date,lastSellPrice:e[e.length-1].sellPrice,dateHistory:e.map((function(t){return t.date})),buyPriceHistory:e.map((function(t){return t.buyPrice})),sellPriceHistory:e.map((function(t){return t.sellPrice}))}},x={data:[{id:1,holder:"\u81ea\u5df1",start_date:"2020-07-16 00:00",amount:1500,duration:35,directMember:5,directMemberAmount:23600,teamMember:6,teamAmount:23600,progress:.51,parent:0,level:"ib",end_date:"2020-08-20 00:00",$open:!0},{id:2,holder:"\u6295\u8cc7\u4eba #1",start_date:"2020-07-20 00:00",parent:1,amount:1500,duration:35,directMember:1,directMemberAmount:0,teamMember:1,teamAmount:0,progress:.39,level:"trader",end_date:"2020-08-24 00:00",$open:!0},{duration:35,id:1596379445693,start_date:"2020-07-24 00:00",parent:"2",progress:.28,holder:"\u6295\u8cc7\u4eba #6",amount:"0",profit_date:null,directMember:0,directMemberAmount:0,teamMember:0,teamAmount:0,level:"trader",end_date:"2020-08-28 00:00",$open:!0},{duration:35,id:1596379445681,start_date:"2020-07-16 00:00",parent:"1",progress:.51,holder:"\u6295\u8cc7\u4eba #2",amount:"1500",profit_date:null,directMember:0,directMemberAmount:0,teamMember:0,teamAmount:0,level:"trader",end_date:"2020-08-20 00:00",$open:!0},{duration:35,id:1596379445695,start_date:"2020-07-16 00:00",parent:"1",progress:.51,holder:"\u6295\u8cc7\u4eba #3",amount:"9000",profit_date:null,directMember:0,directMemberAmount:0,teamMember:0,teamAmount:0,level:"trader",end_date:"2020-08-20 00:00",$open:!0},{duration:35,id:1596379445697,start_date:"2020-07-18 00:00",parent:"1",progress:.45,holder:"\u6295\u8cc7\u4eba #4",amount:"1600",profit_date:null,directMember:0,directMemberAmount:0,teamMember:0,teamAmount:0,level:"trader",end_date:"2020-08-22 00:00",$open:!0},{duration:35,id:1596379445699,start_date:"2020-07-12 00:00",parent:"1",progress:.62,holder:"\u6295\u8cc7\u4eba #5",amount:"10000",profit_date:null,directMember:0,directMemberAmount:0,teamMember:0,teamAmount:0,level:"trader",end_date:"2020-08-16 00:00",$open:!0}],links:[{id:1,source:1,target:2,type:"1"},{source:"1",target:"1596379445681",type:"1",id:1596379445692},{source:"2",target:"1596379445693",type:"1",id:1596379445694},{source:"1",target:"1596379445695",type:"1",id:1596379445696},{source:"1",target:"1596379445697",type:"1",id:1596379445698},{source:"1",target:"1596379445699",type:"1",id:1596379445700}]},E={levels:[{name:"\u65e5",scale_height:27,min_column_width:80,scales:[{unit:"day",step:1,format:"%d %M"}]},{name:"\u9031",scale_height:50,min_column_width:50,scales:[{unit:"week",step:1,format:function(t){var e=f.gantt.date.date_to_str("%d %M"),a=f.gantt.date.add(t,-6,"day");return"#"+f.gantt.date.date_to_str("%W")(t)+", "+e(t)+" - "+e(a)}},{unit:"day",step:1,format:"%j %D"}]},{name:"\u6708",scale_height:50,min_column_width:120,scales:[{unit:"month",format:"%F, %Y"},{unit:"week",format:"Week #%W"}]},{name:"\u5b63",height:50,min_column_width:90,scales:[{unit:"month",step:1,format:"%M"},{unit:"quarter",step:1,format:function(t){var e=f.gantt.date.date_to_str("%M"),a=f.gantt.date.add(f.gantt.date.add(t,3,"month"),-1,"day");return e(t)+" - "+e(a)}}]},{name:"\u5e74",scale_height:50,min_column_width:30,scales:[{unit:"year",step:1,format:"%Y"}]}]},M=function(t){var e=[],a=[];return function t(n){f.gantt.getChildren(n).forEach((function(n){var r=f.gantt.getTask(n);e.push(r.holder),a.push(r.amount),t(n)}))}(t),{teamMember:e.length,teamAmount:a.reduce((function(t,e){return t+Number(e)}),0)}},O=function(t){var e=f.gantt.getChildren(t),a=0;return e.forEach((function(t){var e,n=f.gantt.getTask(t);a+=Number(null!==(e=n.amount)&&void 0!==e?e:0)})),a},S=function(t){return function(t){var e=t.amount,a=t.directMember,n=t.directMemberAmount,r=t.teamAmount;return Number(e)>=1500&&Number(a)>=4&&Number(n)>=9e3&&Number(r)>=15e3}(f.gantt.getTask(t))?"ib":"trader"},D=function(t){var e=((new Date).getTime()-new Date(t).getTime())/864e5,a=Math.floor(e/35*100)/100;return a<=0?0:a>=100?100:Math.floor(e/35*100)/100},N={type:"text",map_to:"holder"},j={type:"text",map_to:"amount"},A={type:"date",map_to:"start_date",min:new Date(2018,0,1),max:new Date},C=f.gantt.date.date_to_str(f.gantt.config.task_date),P=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).dataProcessor=null,n.initZoom(),n}return Object(d.a)(a,[{key:"initZoom",value:function(){f.gantt.ext.zoom.init(E)}},{key:"setZoom",value:function(t){f.gantt.ext.zoom.setLevel(t)}},{key:"initGanttDataProcessor",value:function(){var t=this.props.onDataUpdated;this.dataProcessor=f.gantt.createDataProcessor((function(e,a,n,r){return new Promise((function(o,i){return t&&t(e,a,n,r),o()}))}))}},{key:"shouldComponentUpdate",value:function(t){return this.props.zoom!==t.zoom}},{key:"componentDidMount",value:function(){f.gantt.addMarker({start_date:new Date,css:"today",text:"\u4eca\u5929",title:C(new Date)}),f.gantt.config.autofit=!0,f.gantt.config.grid_width=500,f.gantt.config.open_tree_initially=!0,f.gantt.config.keyboard_navigation_cells=!0,f.gantt.config.multiselect=!0,f.gantt.config.quickinfo_buttons=["icon_edit","icon_delete"],f.gantt.config.reorder_grid_columns=!0,f.gantt.config.order_branch=!0,f.gantt.config.xml_date="%Y-%m-%d %H:%i",f.gantt.config.columns=[{name:"wbs",label:"\u7de8\u865f",align:"center",width:"*",min_width:40,max_width:64,resize:!0,template:f.gantt.getWBSCode},{name:"holder",label:"\u6295\u8cc7\u4eba",width:"*",min_width:160,max_width:220,tree:!0,resize:!0,editor:N},{name:"amount",label:"\u6295\u8cc7\u984d",align:"center",width:"*",min_width:64,max_width:80,resize:!0,editor:j},{name:"start_date",label:"\u521d\u59cb\u8a17\u7ba1\u65e5",align:"center",width:"*",min_width:96,max_width:128,resize:!0,editor:A},{name:"add_buttons",label:'<div class="gantt_grid_head_cell gantt_grid_head_add" onclick="gantt.createTask({duration: 35, parent: \'0\'})"><i class="fa fa-plus"></i></div>',align:"center",max_width:40,template:function(t){return'<i class="fa gantt_button_grid gantt_grid_add fa-plus" onclick="gantt.createTask({duration: 35}, '.concat(t.id,');"></i>')}}],f.gantt.config.lightbox.sections=[{name:"holder",height:30,map_to:"holder",type:"textarea"},{name:"amount",height:30,default_value:"0",map_to:"amount",type:"textarea"},{name:"parent",type:"parent",allow_root:"true",root_label:"\u7121\u63a8\u85a6\u7d93\u7d00\u4eba",template:function(t,e,a){return 0===a.id?"\u7121\u63a8\u85a6\u7d93\u7d00\u4eba":a.holder}},{name:"time",map_to:"auto",type:"duration"},{name:"profit",map_to:{start_date:"profit_date"},type:"duration_optional",button:!0,single_date:!0}],f.gantt.locale.labels.section_holder="\u6295\u8cc7\u4eba",f.gantt.locale.labels.section_amount="\u6295\u8cc7\u984d",f.gantt.locale.labels.section_parent="\u63a8\u85a6\u7d93\u7d00\u4eba",f.gantt.locale.labels.section_time="\u8a17\u7ba1\u6642\u9593",f.gantt.locale.labels.icon_delete="\u522a\u9664\u7d00\u9304",f.gantt.locale.labels.icon_edit="\u7de8\u8f2f\u7d00\u9304",f.gantt.locale.labels.confirm_deleting="\u662f\u5426\u522a\u9664\u7d00\u9304\uff1f",f.gantt.locale.labels.link="\u9023\u7d50",f.gantt.locale.labels.confirm_link_deleting="\u5c07\u88ab\u522a\u9664",f.gantt.locale.labels.message_cancel="\u95dc\u9589",f.gantt.locale.labels.icon_save="\u5132\u8cc7\u91d1\u7d00\u9304",f.gantt.locale.labels.icon_cancel="\u53d6\u6d88",f.gantt.locale.labels.section_profit="\u6700\u8fd1\u4e00\u6b21\u7372\u5229\u7d00\u9304",f.gantt.locale.labels.profit_enable_button="\u52a0\u5165\u7372\u5229\u7d00\u9304",f.gantt.locale.labels.profit_disable_button="\u79fb\u9664\u7372\u5229\u7d00\u9304",f.gantt.attachEvent("onLightboxSave",(function(t,e){return e.holder?!e.amount||isNaN(e.amount)?(f.gantt.message({type:"error",text:"\u8acb\u8f38\u5165\u6b63\u78ba\u7684\u6295\u8cc7\u984d"}),!1):e.parent?(e.progress=.5,e.directMember=0,e.directMemberAmount=0,e.teamMember=0,e.teamAmount=0,!0):(f.gantt.message({type:"error",text:"\u8acb\u8f38\u5165\u63a8\u85a6\u4eba"}),!1):(f.gantt.message({type:"error",text:"\u8acb\u8f38\u5165\u6295\u8cc7\u4eba"}),!1)})),f.gantt.attachEvent("onBeforeLinkAdd",(function(t,e){if("1"!==e.type)return f.gantt.message({type:"error",text:"\u8acb\u5f9e\u8a17\u7ba1\u958b\u59cb\u65e5\u958b\u59cb\u9023\u63a5"}),!1})),f.gantt.attachEvent("onGanttReady",(function(){var t=f.gantt.ext.tooltips;f.gantt.templates.tooltip_text=function(){return null},t.tooltipFor({selector:".profit.profit-marker",html:function(t,e){var a=e.getAttribute("data-taskId"),n=f.gantt.getTask(a);return"\u7372\u5229\u65e5\u671f ".concat(f.gantt.templates.tooltip_date_format(n.profit_date)," </br>")}})})),f.gantt.templates.task_class=function(t,e,a){return{0:"top-layer",1:"first-layer",2:"second-layer",3:"third-layer"}[(f.gantt.getWBSCode(a).match(/\./g)||[]).length]},f.gantt.templates.quick_info_title=function(t,e,a){return"".concat(a.holder," \u7d81\u5b9a ").concat(a.amount," \u7f8e\u91d1")},f.gantt.templates.quick_info_content=function(t,e,a){return"\u8eab\u4efd\uff1a ".concat(function(t){switch(t){case"ib":return"IB \u7d93\u7406\u4eba";case"mib":return"MIB \u7d93\u7406\u4eba";case"pib":return"PIB \u7d93\u7406\u4eba";default:return"\u6295\u8cc7\u4eba"}}(a.level)," </br>\n      \u81ea\u8eab\u7d81\u5b9a\uff1a ").concat(a.amount," </br>\n      \u6709\u6548\u76f4\u63a8\uff1a").concat(a.directMember," </br>\n      \u76f4\u63a8\u7d81\u5b9a\uff1a ").concat(a.directMemberAmount," </br>\n      \u5718\u968a\u4eba\u6578\uff1a ").concat(a.teamMember," </br>\n      \u5718\u968a\u7d81\u5b9a\uff1a ").concat(a.teamAmount," </br>\n      ")},f.gantt.templates.scale_cell_class=function(t){if(0===t.getDay()||6===t.getDay())return"weekend"},f.gantt.templates.timeline_cell_class=function(t,e){if(0===e.getDay()||6===e.getDay())return"weekend"},f.gantt.templates.task_text=function(t,e,a){return a.holder&&a.amount?"<b>".concat(a.holder,"</b> &nbsp; \u7d81\u5b9a &nbsp; <b>").concat(a.amount,"</b> &nbsp; \u7f8e\u91d1"):""},f.gantt.templates.rightside_text=function(t,e,a){var n=((new Date).getTime()-new Date(t).getTime())/864e5;return n>0?"<b>\u8a17\u7ba1 </b>"+Math.floor(n)+"\u5929":"<b>\u5c1a\u672a\u958b\u59cb\u8a17\u7ba1</b>"},f.gantt.templates.progress_text=function(t,e,a){return"<span class='progress_text'>"+f.gantt.getChildren(a.id).length+" \u76f4\u63a8 </span>"},f.gantt.templates.link_class=function(t){var e;return null!==(e={1:"first-link",2:"second-link",3:"third-link"}[t.source])&&void 0!==e?e:""},f.gantt.templates.grid_folder=function(t){return"<div class='gantt_tree_icon gantt_folder_".concat(t.$open?"open":"closed"," ").concat(t.level,"'></div>")},f.gantt.templates.grid_file=function(t){return"<div class='gantt_tree_icon gantt_file ".concat(t.level,"'></div>")},f.gantt.templates.drag_link=function(t,e,a,n){t=f.gantt.getTask(t);var r="\u63a8\u85a6\u4eba > <b>".concat(t.holder,"</b> ").concat(e?"":"\u7d50\u675f","<br/>");return a&&(a=f.gantt.getTask(a),r+="\u6295\u8cc7\u4eba > <b>".concat(a.holder,"</b> ").concat(n?"":"\u7d50\u675f"," <br/>")),r},f.gantt.templates.link_description=function(t){var e=f.gantt.getTask(t.source),a=f.gantt.getTask(t.target),n=f.gantt.config.links,r=t.type===n.start_to_start,o=t.type===n.finish_to_start||t.type===n.start_to_start,i="\u63a8\u85a6\u4eba <b>".concat(e.holder,"</b> ").concat(r?"":"\u7d50\u675f"," <br/>");return i+="\u8207 \u6295\u8cc7\u4eba <b>".concat(a.holder,"</b> ").concat(o?"":"\u7d50\u675f"," <br/>")},f.gantt.addTaskLayer({renderer:{render:function(t){if(t.profit_date){var e=document.createElement("div");e.className="profit profit-marker";var a=f.gantt.getTaskPosition(t,t.profit_date);return e.style.left=a.left+"px",e.style.top=a.top+"px",e.setAttribute("data-taskId",t.id),e}return!1},getRectangle:function(t,e){return t.profit_date?f.gantt.getTaskPosition(t,t.profit_date):null}}}),f.gantt.attachEvent("onTaskLoading",(function(t){return t.profit_date&&(t.profit_date=f.gantt.date.parseDate(t.profit_date,"xml_date")),!0}));var t=this.props.tasks;f.gantt.init(this.ganttContainer),this.initGanttDataProcessor(),f.gantt.parse(t)}},{key:"componentWillUnmount",value:function(){this.dataProcessor&&(this.dataProcessor.destructor(),this.dataProcessor=null)}},{key:"render",value:function(){var t=this,e=this.props.zoom;return this.setZoom(e),r.a.createElement("div",{ref:function(e){t.ganttContainer=e},style:{width:"100%",height:"100%"}})}}]),a}(n.Component),T=(a(410),P),I=a(5),U=a(420),z=a(421),W=a(422),J=a(423),G=a(424),L=a(425),R=a(426),$=a(427),B=a(177),H=a.n(B),q=function(){return window.screen.orientation.type},F=function(){var t=Object(n.useState)(q()),e=Object(I.a)(t,2),a=e[0],r=e[1],o=function(t){r(q())};return Object(n.useEffect)((function(){return window.addEventListener("orientationchange",o),function(){window.removeEventListener("orientationchange",o)}}),[]),a},Z=function(t){var e=t.handleImportData,a=F(),o=Object(n.useState)(!0),i=Object(I.a)(o,2),c=i[0],l=i[1],s=function(){f.gantt.getGridColumn("wbs").hide=!0,f.gantt.getGridColumn("start_date").hide=!0,f.gantt.getGridColumn("amount").hide=!0,f.gantt.config.grid_width=150},d=function(){f.gantt.getGridColumn("wbs").hide=!1,f.gantt.getGridColumn("start_date").hide=!1,f.gantt.getGridColumn("amount").hide=!1,f.gantt.config.grid_width=500};return Object(n.useEffect)((function(){f.gantt.importFromJSON=function(t){if(t.files.length>0){var a=new FileReader;a.addEventListener("load",(function(){try{var t=JSON.parse(a.result),n={data:null===(r=t)||void 0===r?void 0:r.data.map((function(t){return{id:null===t||void 0===t?void 0:t.id,holder:null===t||void 0===t?void 0:t.holder,amount:null===t||void 0===t?void 0:t.amount,directMember:null===t||void 0===t?void 0:t.directMember,directMemberAmount:null===t||void 0===t?void 0:t.directMemberAmount,teamMember:null===t||void 0===t?void 0:t.teamMember,teamAmount:null===t||void 0===t?void 0:t.teamAmount,level:null===t||void 0===t?void 0:t.level,start_date:null===t||void 0===t?void 0:t.start_date,duration:null===t||void 0===t?void 0:t.duration,end_date:null===t||void 0===t?void 0:t.end_date,parent:null===t||void 0===t?void 0:t.parent,progress:null===t||void 0===t?void 0:t.progress,$open:!0}})),links:null===r||void 0===r?void 0:r.links.map((function(t){return{id:t.id,source:t.source,target:t.target,type:t.type}}))};localStorage.setItem("hiifx_data",JSON.stringify(n)),f.gantt.message({type:"info",text:"\u532f\u5165\u6210\u529f~~\ud83c\udf89\ud83c\udf89"}),e()}catch(o){f.gantt.message({type:"error",text:"\u532f\u5165\u8cc7\u6599\u683c\u5f0f\u932f\u8aa4 \ud83d\ude31\ud83d\ude31"})}var r})),a.addEventListener("error",(function(){f.gantt.message({type:"error",text:"\u532f\u5165\u8cc7\u6599\u6642\u767c\u751f\u932f\u8aa4 \ud83d\ude31\ud83d\ude31"})})),a.readAsText(t.files[0])}}}),[e]),Object(n.useEffect)((function(){f.gantt.attachEvent("onGanttReady",(function(){"portrait-primary"!==a&&window.innerWidth<=800?(l(!1),s()):(l(!0),d()),f.gantt.render()}))}),[]),r.a.createElement("div",{className:"tool-bar"},r.a.createElement("div",{className:"logo-wrapper noselect",onClick:function(){l(!c),c?s():d(),f.gantt.render()}},c?r.a.createElement(U.a,null):r.a.createElement(z.a,null),r.a.createElement("b",{className:"short-LOGO"},"\u6d77\u532f"),r.a.createElement("b",{className:"full-LOGO"},"\u6d77\u532f\u5718\u968a\u8cc7\u91d1\u7ba1\u7406\u5de5\u5177")),r.a.createElement("div",{className:"tool-wrapper"},r.a.createElement("div",{className:"action-icon-wrapper"},r.a.createElement(W.a,{onClick:function(){return f.gantt.undo()}}),r.a.createElement(J.a,{onClick:function(){return f.gantt.redo()}})),r.a.createElement("div",{className:"zoom-icon-wrapper"},r.a.createElement(G.a,{onClick:function(){return f.gantt.ext.zoom.zoomIn()}}),r.a.createElement(L.a,{onClick:function(){return f.gantt.ext.zoom.zoomOut()}})),r.a.createElement("div",{className:"fullscreen-icon-wrapper",onClick:function(){f.gantt.ext.fullscreen.expand()}},r.a.createElement(R.a,null)),r.a.createElement("div",{className:"export-icon-wrapper",onClick:function(){window.importBox=f.gantt.modalbox({title:"\u8a2d\u5b9a",text:'\n            <label for="data-import" class="data-import-label">\n              \u532f\u5165\u7d00\u9304\n            </label>\n            <input id="data-import" type="file" onchange="gantt.importFromJSON(this)" accept="application/json" />\n            ',width:"500px",buttons:[{label:"\u532f\u51fa\u7d00\u9304",css:"data_export_btn",value:"export"},{label:"\u91cd\u8a2d\u7d00\u9304",css:"data_export_restore",value:"restore"},{label:"\u53d6\u6d88",css:"data_cancel_btn",value:"cancel"}],callback:function(t){"restore"===t&&(localStorage.setItem("hiifx_data",JSON.stringify(x)),window.location.reload()),"export"===t&&function(){var t=f.gantt.serialize();H()(JSON.stringify(t),"".concat((new Date).toISOString().substring(0,10).split("-").join(""),"_\u6d77\u532f\u5718\u968a.json"))}()}})}},r.a.createElement($.a,null))))},Y=(a(413),Z),Q=a(96),K=a.n(Q),V=a(178),X=a(179),tt=a.n(X),et=a(180),at=a.n(et),nt=function(t){var e=t.lastDate,a=t.lastSellPrice,o=Object(n.useState)(!1),i=Object(I.a)(o,2),c=i[0],l=i[1],s=Object(n.useState)("USD"),d=Object(I.a)(s,2),u=d[0],m=d[1],g=Object(n.useState)(1500),f=Object(I.a)(g,2),p=f[0],h=f[1];return Object(n.useEffect)((function(){a&&l(!0)}),[e,a]),r.a.createElement("div",{className:"converter-section"},r.a.createElement("div",{className:"info-section"},r.a.createElement("p",null,r.a.createElement("a",{href:"https://rate.bot.com.tw/xrt/quote/l6m/USD-TWD",className:"bank-link"},"\u81fa\u7063\u9280\u884c"),"\u7f8e\u5143\u5c0d\u65b0\u53f0\u5e63\u532f\u7387"),c?r.a.createElement("p",null,r.a.createElement("b",null,"".concat(e," ").concat(a))):r.a.createElement("p",null,"\u532f\u7387\u8f09\u5165\u4e2d")),r.a.createElement("div",{className:"amount-wrapper"},r.a.createElement("input",{className:"amount-input",type:"number",placeholder:"\u91d1\u984d",value:p,onChange:function(t){t.preventDefault(),h(t.target.value)}}),r.a.createElement(at.a,{code:"USD"===u?840:158,onClick:function(){m("USD"===u?"TWD":"USD")},className:"flag-button"})),r.a.createElement("div",{className:"friendly-info-section"},r.a.createElement("p",{className:"convert-hint"},p," ",u," ",r.a.createElement("b",null,"=")),r.a.createElement("span",{className:"converted-result"},"USD"===u?"".concat(Math.round(p*a*100)/100," TWD"):"".concat(Math.round(p/a*100)/100," USD"))))},rt=function(t){var e=t.mode,a=Object(n.useState)(""),o=Object(I.a)(a,2),i=o[0],c=o[1],l=Object(n.useState)(0),s=Object(I.a)(l,2),d=s[0],u=s[1],m=Object(n.useState)([]),f=Object(I.a)(m,2),p=f[0],h=f[1],b=Object(n.useState)([]),v=Object(I.a)(b,2),_=v[0],y=v[1],x=Object(n.useState)([]),E=Object(I.a)(x,2),M=E[0],O=E[1];return Object(n.useEffect)((function(){(function(){var t=Object(V.a)(K.a.mark((function t(){var e,a,n,r,o,i,l;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:e=t.sent,a=k(e),n=a.lastDate,r=a.lastSellPrice,o=a.dateHistory,i=a.buyPriceHistory,l=a.sellPriceHistory,c(n),u(r),h(o),y(i),O(l);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:Object(g.a)("converter"===e&&"showConverter","currency-price-area")},r.a.createElement("h3",null,"\u5373\u6642\u532f\u7387 - \u81fa\u7063\u9280\u884c"),r.a.createElement("div",{className:"content-wrapper"},r.a.createElement(nt,{lastDate:i,lastSellPrice:d}),r.a.createElement("div",{className:"chart-section"},r.a.createElement(tt.a,{options:{xaxis:{categories:p}},series:[{name:"\u81fa\u7063\u9280\u884c\u8cb7\u5165\u50f9\u683c",data:_},{name:"\u81fa\u7063\u9280\u884c\u8ce3\u51fa\u50f9\u683c",data:M}],type:"line",width:"100%",height:250}))))},ot=(a(416),rt),it=(a(417),function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={isReady:!1,isUpdating:!1,tasks:null,currentZoom:"\u6708",currentMode:"chart",messages:[]},t.logDataUpdate=function(e,a,n,r){if(!1===t.state.isUpdating){t.setState({isUpdating:!0});var o=n&&n.holder?" (".concat(n.holder,")"):"",i="".concat(e," ").concat(a,": ").concat(r," ").concat(o);"link"===e&&"delete"!==a&&(i+=" ( source: ".concat(n.source,", target: ").concat(n.target," )")),t.addMessage(i);var c=f.gantt.serialize(),s=c.data,d=c.links,u={data:s.map((function(t){var e,a,n;return Object(l.a)(Object(l.a)({},t),{},{end_date:void 0,directMember:null!==(e=f.gantt.getChildren(t.id).length)&&void 0!==e?e:0,directMemberAmount:null!==(a=O(t.id))&&void 0!==a?a:0,teamMember:M(t.id).teamMember,teamAmount:M(t.id).teamAmount,level:S(t.id),duration:35,progress:null!==(n=D(t.start_date))&&void 0!==n?n:.6,$open:!0})})),links:d};localStorage.setItem("hiifx_data",JSON.stringify(u)),t.setState({isUpdating:!1})}},t.updateImportData=function(){t.setState({isReady:!1});var e=localStorage.getItem("hiifx_data");t.setState({tasks:JSON.parse(e),isReady:!0}),f.gantt.modalbox.hide(window.importBox)},t.handleToggleMode=function(){"chart"===t.state.currentMode?t.setState({currentMode:"converter"}):t.setState({currentMode:"chart"})},t}return Object(d.a)(a,[{key:"addMessage",value:function(t){var e=[{message:t}].concat(Object(c.a)(this.state.messages));e.length>5&&(e.length=5),this.setState({messages:e})}},{key:"componentDidMount",value:function(){var t=localStorage.getItem("hiifx_data");t?this.setState({tasks:JSON.parse(t),isReady:!0}):(localStorage.setItem("hiifx_data",JSON.stringify(x)),this.setState({tasks:x,isReady:!0}))}},{key:"render",value:function(){var t=this.state,e=t.isReady,a=t.tasks,n=t.currentZoom,o=t.currentMode;return r.a.createElement("div",null,r.a.createElement("div",{className:"tool-bar-container"},r.a.createElement(Y,{handleImportData:this.updateImportData})),r.a.createElement("div",{id:"rotate-hint"},r.a.createElement("div",{id:"rotate-icon-wrapper"}),r.a.createElement("div",{id:"rotate-hint-wrapper"},"\u8acb\u7ffb\u8f49\u624b\u6a5f")),r.a.createElement("div",{className:Object(g.a)("converter"===o&&"showConverter","gantt-container")},e&&r.a.createElement(T,{tasks:a,zoom:n,onDataUpdated:this.logDataUpdate}),r.a.createElement("i",{className:Object(g.a)("chart"===o?"fa-university":"fa-home","fa gantt-converter"),onClick:this.handleToggleMode})),r.a.createElement("div",{className:Object(g.a)("converter"===o&&"showConverter","tool-section")},r.a.createElement(ot,{mode:o})),r.a.createElement(h.a,null))}}]),a}(n.Component)),ct=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function lt(t){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var e=t.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(t){console.error("Error during service worker registration:",t)}))}i.a.render(r.a.createElement(it,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/hiifx_management",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/hiifx_management","/hiifx-sw.js");ct?(!function(t){fetch(t).then((function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):lt(t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):lt(t)}))}}()}},[[182,1,2]]]);
//# sourceMappingURL=main.e8a13d9f.chunk.js.map