(this.webpackJsonphiifx_management=this.webpackJsonphiifx_management||[]).push([[0],{17:function(t,e,a){t.exports=a(37)},22:function(t,e,a){},30:function(t,e,a){},31:function(t,e,a){},34:function(t,e,a){},35:function(t,e,a){},36:function(t,e,a){},37:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),o=a(12),i=a.n(o),l=(a(22),a(15)),c=a(9),s=a(5),d=a(6),u=a(8),m=a(7),g=a(0),p=a(13),f=a.n(p),_=(a(11),a(24),a(25),a(26),a(27),a(28),a(29),a(30),function(t){var e=[],a=[];return function t(n){g.gantt.getChildren(n).forEach((function(n){var r=g.gantt.getTask(n);e.push(r.holder),a.push(r.amount),t(n)}))}(t),{teamMember:e.length,teamAmount:a.reduce((function(t,e){return t+Number(e)}),0)}}),h=function(t){var e=g.gantt.getChildren(t),a=0;return e.forEach((function(t){var e,n=g.gantt.getTask(t);a+=Number(null!==(e=n.amount)&&void 0!==e?e:0)})),a},b=function(t){return function(t){var e=t.amount,a=t.directMember,n=t.directMemberAmount,r=t.teamAmount;return Number(e)>=1500&&Number(a)>=4&&Number(n)>=9e3&&Number(r)>=15e3}(g.gantt.getTask(t))?"ib":"trader"},v=function(t){var e=((new Date).getTime()-new Date(t).getTime())/864e5,a=Math.floor(e/35*100)/100;return a<=0?0:a>=100?100:Math.floor(e/35*100)/100},k={type:"text",map_to:"holder"},y={type:"text",map_to:"amount"},w={type:"date",map_to:"start_date",min:new Date(2018,0,1),max:new Date},x=g.gantt.date.date_to_str(g.gantt.config.task_date),M={data:[{id:1,holder:"\u81ea\u5df1",start_date:"2020-07-16 00:00",amount:1500,duration:35,directMember:5,directMemberAmount:23600,teamMember:6,teamAmount:23600,progress:.51,parent:0,level:"ib",end_date:"2020-08-20 00:00",$open:!0},{id:2,holder:"\u6295\u8cc7\u4eba #1",start_date:"2020-07-20 00:00",parent:1,amount:1500,duration:35,directMember:1,directMemberAmount:0,teamMember:1,teamAmount:0,progress:.39,level:"trader",end_date:"2020-08-24 00:00",$open:!0},{duration:35,id:1596379445693,start_date:"2020-07-24 00:00",text:"\u65b0\u4efb\u52d9",parent:"2",progress:.28,holder:"\u6295\u8cc7\u4eba #6",amount:"0",profit_date:null,directMember:0,directMemberAmount:0,teamMember:0,teamAmount:0,level:"trader",end_date:"2020-08-28 00:00",$open:!0},{duration:35,id:1596379445681,start_date:"2020-07-16 00:00",text:"\u65b0\u4efb\u52d9",parent:"1",progress:.51,holder:"\u6295\u8cc7\u4eba #2",amount:"1500",profit_date:null,directMember:0,directMemberAmount:0,teamMember:0,teamAmount:0,level:"trader",end_date:"2020-08-20 00:00",$open:!0},{duration:35,id:1596379445695,start_date:"2020-07-16 00:00",text:"\u65b0\u4efb\u52d9",parent:"1",progress:.51,holder:"\u6295\u8cc7\u4eba #3",amount:"9000",profit_date:null,directMember:0,directMemberAmount:0,teamMember:0,teamAmount:0,level:"trader",end_date:"2020-08-20 00:00",$open:!0},{duration:35,id:1596379445697,start_date:"2020-07-18 00:00",text:"\u65b0\u4efb\u52d9",parent:"1",progress:.45,holder:"\u6295\u8cc7\u4eba #4",amount:"1600",profit_date:null,directMember:0,directMemberAmount:0,teamMember:0,teamAmount:0,level:"trader",end_date:"2020-08-22 00:00",$open:!0},{duration:35,id:1596379445699,start_date:"2020-07-12 00:00",text:"\u65b0\u4efb\u52d9",parent:"1",progress:.62,holder:"\u6295\u8cc7\u4eba #1",amount:"10000",profit_date:null,directMember:0,directMemberAmount:0,teamMember:0,teamAmount:0,level:"trader",end_date:"2020-08-16 00:00",$open:!0}],links:[{id:1,source:1,target:2,type:"1"},{source:"1",target:"1596379445681",type:"1",id:1596379445692},{source:"2",target:"1596379445693",type:"1",id:1596379445694},{source:"1",target:"1596379445695",type:"1",id:1596379445696},{source:"1",target:"1596379445697",type:"1",id:1596379445698},{source:"1",target:"1596379445699",type:"1",id:1596379445700}]},E={levels:[{name:"\u65e5",scale_height:27,min_column_width:80,scales:[{unit:"day",step:1,format:"%d %M"}]},{name:"\u9031",scale_height:50,min_column_width:50,scales:[{unit:"week",step:1,format:function(t){var e=g.gantt.date.date_to_str("%d %M"),a=g.gantt.date.add(t,-6,"day");return"#"+g.gantt.date.date_to_str("%W")(t)+", "+e(t)+" - "+e(a)}},{unit:"day",step:1,format:"%j %D"}]},{name:"\u6708",scale_height:50,min_column_width:120,scales:[{unit:"month",format:"%F, %Y"},{unit:"week",format:"Week #%W"}]},{name:"\u5b63",height:50,min_column_width:90,scales:[{unit:"month",step:1,format:"%M"},{unit:"quarter",step:1,format:function(t){var e=g.gantt.date.date_to_str("%M"),a=g.gantt.date.add(g.gantt.date.add(t,3,"month"),-1,"day");return e(t)+" - "+e(a)}}]},{name:"\u5e74",scale_height:50,min_column_width:30,scales:[{unit:"year",step:1,format:"%Y"}]}]},A=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).dataProcessor=null,n.initZoom(),n}return Object(d.a)(a,[{key:"initZoom",value:function(){g.gantt.ext.zoom.init(E)}},{key:"setZoom",value:function(t){g.gantt.ext.zoom.setLevel(t)}},{key:"initGanttDataProcessor",value:function(){var t=this.props.onDataUpdated;this.dataProcessor=g.gantt.createDataProcessor((function(e,a,n,r){return new Promise((function(o,i){return t&&t(e,a,n,r),o()}))}))}},{key:"shouldComponentUpdate",value:function(t){return this.props.zoom!==t.zoom}},{key:"componentDidMount",value:function(){g.gantt.addMarker({start_date:new Date,css:"today",text:"\u4eca\u5929",title:x(new Date)}),g.gantt.config.keyboard_navigation_cells=!0,g.gantt.config.multiselect=!0,g.gantt.config.quickinfo_buttons=["icon_edit","icon_delete"],g.gantt.config.reorder_grid_columns=!0,g.gantt.config.order_branch=!0,g.gantt.config.keep_grid_width=!0,g.gantt.config.xml_date="%Y-%m-%d %H:%i",g.gantt.config.columns=[{name:"wbs",label:"\u7de8\u865f",align:"center",max_width:64,resize:!0,template:g.gantt.getWBSCode},{name:"holder",label:"\u6295\u8cc7\u4eba",min_width:128,max_width:200,tree:!0,resize:!0,editor:k},{name:"amount",label:"\u6295\u8cc7\u984d",align:"center",min_width:64,max_width:80,resize:!0,editor:y},{name:"start_date",label:"\u521d\u59cb\u8a17\u7ba1\u65e5",align:"center",min_width:80,max_width:96,resize:!0,editor:w},{name:"add_buttons",label:'<div class="gantt_grid_head_cell gantt_grid_head_add" onclick="gantt.createTask({duration: 35})"><i class="fa fa-plus"></i></div>',align:"center",max_width:40,template:function(t){return'<i class="fa gantt_button_grid gantt_grid_add fa-plus" onclick="gantt.createTask({duration: 35}, '.concat(t.id,');"></i>')}}],g.gantt.config.lightbox.sections=[{name:"holder",height:30,map_to:"holder",type:"textarea"},{name:"amount",height:30,default_value:"0",map_to:"amount",type:"textarea"},{name:"parent",type:"parent",allow_root:"true",root_label:"\u7121\u63a8\u85a6\u7d93\u7d00\u4eba",template:function(t,e,a){return 0===a.id?"\u7121\u63a8\u85a6\u7d93\u7d00\u4eba":a.holder}},{name:"time",map_to:"auto",type:"duration"},{name:"profit",map_to:{start_date:"profit_date"},type:"duration_optional",button:!0,single_date:!0}],g.gantt.locale.labels.section_holder="\u6295\u8cc7\u4eba",g.gantt.locale.labels.section_amount="\u6295\u8cc7\u984d",g.gantt.locale.labels.section_parent="\u63a8\u85a6\u7d93\u7d00\u4eba",g.gantt.locale.labels.section_time="\u8a17\u7ba1\u6642\u9593",g.gantt.locale.labels.icon_delete="\u522a\u9664\u7d00\u9304",g.gantt.locale.labels.icon_edit="\u7de8\u8f2f\u7d00\u9304",g.gantt.locale.labels.confirm_deleting="\u662f\u5426\u522a\u9664\u7d00\u9304\uff1f",g.gantt.locale.labels.link="\u9023\u7d50",g.gantt.locale.labels.confirm_link_deleting="\u5c07\u88ab\u522a\u9664",g.gantt.locale.labels.message_cancel="\u95dc\u9589",g.gantt.locale.labels.icon_save="\u5132\u8cc7\u91d1\u7d00\u9304",g.gantt.locale.labels.icon_cancel="\u53d6\u6d88",g.gantt.locale.labels.section_profit="\u6700\u8fd1\u4e00\u6b21\u7372\u5229\u7d00\u9304",g.gantt.locale.labels.profit_enable_button="\u52a0\u5165\u7372\u5229\u7d00\u9304",g.gantt.locale.labels.profit_disable_button="\u79fb\u9664\u7372\u5229\u7d00\u9304",g.gantt.attachEvent("onLightboxSave",(function(t,e){return e.holder?!e.amount||isNaN(e.amount)?(g.gantt.message({type:"error",text:"\u8acb\u8f38\u5165\u6b63\u78ba\u7684\u6295\u8cc7\u984d"}),!1):(e.progress=.5,e.directMember=0,e.directMemberAmount=0,e.teamMember=0,e.teamAmount=0,!0):(g.gantt.message({type:"error",text:"\u8acb\u8f38\u5165\u6295\u8cc7\u4eba"}),!1)})),g.gantt.attachEvent("onBeforeLinkAdd",(function(t,e){if("1"!==e.type)return g.gantt.message({type:"error",text:"\u8acb\u5f9e\u8a17\u7ba1\u958b\u59cb\u65e5\u958b\u59cb\u9023\u63a5"}),!1})),g.gantt.templates.task_class=function(t,e,a){return{0:"top-layer",1:"first-layer",2:"second-layer",3:"third-layer"}[(g.gantt.getWBSCode(a).match(/\./g)||[]).length]},g.gantt.templates.quick_info_title=function(t,e,a){return"".concat(a.holder," \u7d81\u5b9a ").concat(a.amount," \u7f8e\u91d1")},g.gantt.templates.quick_info_content=function(t,e,a){return"\u8eab\u4efd\uff1a ".concat(function(t){switch(t){case"ib":return"IB \u7d93\u7406\u4eba";case"mib":return"MIB \u7d93\u7406\u4eba";case"pib":return"PIB \u7d93\u7406\u4eba";default:return"\u6295\u8cc7\u4eba"}}(a.level)," </br>\n      \u81ea\u8eab\u7d81\u5b9a\uff1a ").concat(a.amount," </br>\n      \u6709\u6548\u76f4\u63a8\uff1a").concat(a.directMember," </br>\n      \u76f4\u63a8\u7d81\u5b9a\uff1a ").concat(a.directMemberAmount," </br>\n      \u5718\u968a\u4eba\u6578\uff1a ").concat(a.teamMember," </br>\n      \u5718\u968a\u7d81\u5b9a\uff1a ").concat(a.teamAmount," </br>\n      ")},g.gantt.templates.scale_cell_class=function(t){if(0===t.getDay()||6===t.getDay())return"weekend"},g.gantt.templates.timeline_cell_class=function(t,e){if(0===e.getDay()||6===e.getDay())return"weekend"},g.gantt.templates.task_text=function(t,e,a){return a.holder&&a.amount?"<b>".concat(a.holder,"</b> &nbsp; \u7d81\u5b9a &nbsp; <b>").concat(a.amount,"</b> &nbsp; \u7f8e\u91d1"):""},g.gantt.templates.rightside_text=function(t,e,a){var n=((new Date).getTime()-new Date(t).getTime())/864e5;return n>0?"<b>\u8a17\u7ba1 </b>"+Math.floor(n)+"\u5929":"<b>\u5c1a\u672a\u958b\u59cb\u8a17\u7ba1</b>"},g.gantt.templates.progress_text=function(t,e,a){return"<span class='progress_text'>"+g.gantt.getChildren(a.id).length+" \u76f4\u63a8 </span>"},g.gantt.templates.link_class=function(t){var e;return null!==(e={1:"first-link",2:"second-link",3:"third-link"}[t.source])&&void 0!==e?e:""},g.gantt.templates.grid_folder=function(t){return"<div class='gantt_tree_icon gantt_folder_".concat(t.$open?"open":"closed"," ").concat(t.level,"'></div>")},g.gantt.templates.grid_file=function(t){return"<div class='gantt_tree_icon gantt_file ".concat(t.level,"'></div>")},g.gantt.templates.drag_link=function(t,e,a,n){t=g.gantt.getTask(t);var r="\u63a8\u85a6\u4eba > <b>".concat(t.holder,"</b> ").concat(e?"":"\u7d50\u675f","<br/>");return a&&(a=g.gantt.getTask(a),r+="\u6295\u8cc7\u4eba > <b>".concat(a.holder,"</b> ").concat(n?"":"\u7d50\u675f"," <br/>")),r},g.gantt.templates.link_description=function(t){var e=g.gantt.getTask(t.source),a=g.gantt.getTask(t.target),n=g.gantt.config.links,r=t.type===n.start_to_start,o=t.type===n.finish_to_start||t.type===n.start_to_start,i="\u63a8\u85a6\u4eba <b>".concat(e.holder,"</b> ").concat(r?"":"\u7d50\u675f"," <br/>");return i+="\u8207 \u6295\u8cc7\u4eba <b>".concat(a.holder,"</b> ").concat(o?"":"\u7d50\u675f"," <br/>")},g.gantt.addTaskLayer({renderer:{render:function(t){if(t.profit_date){var e=document.createElement("div");e.className="profit";var a=g.gantt.getTaskPosition(t,t.profit_date);return e.style.left=a.left+"px",e.style.top=a.top+"px",e.setAttribute("title",g.gantt.templates.task_date(t.profit_date)),e}return!1},getRectangle:function(t,e){return t.profit_date?g.gantt.getTaskPosition(t,t.profit_date):null}}}),g.gantt.attachEvent("onTaskLoading",(function(t){return t.profit_date&&(t.profit_date=g.gantt.date.parseDate(t.profit_date,"xml_date")),!0}));var t=this.props.tasks;g.gantt.init(this.ganttContainer),this.initGanttDataProcessor(),g.gantt.parse(t)}},{key:"componentWillUnmount",value:function(){this.dataProcessor&&(this.dataProcessor.destructor(),this.dataProcessor=null)}},{key:"render",value:function(){var t=this,e=this.props.zoom;return this.setZoom(e),r.a.createElement("div",{ref:function(e){t.ganttContainer=e},style:{width:"100%",height:"100%"}})}}]),a}(n.Component),N=(a(31),A),O=a(16),S=a(39),D=a(40),C=a(41),j=a(42),T=a(43),z=a(44),I=a(45),P=a(46),J=a(14),L=a.n(J),U=function(t){var e=t.handleImportData,a=Object(n.useState)(!0),o=Object(O.a)(a,2),i=o[0],l=o[1];return Object(n.useEffect)((function(){g.gantt.importFromJSON=function(t){if(t.files.length>0){var a=new FileReader;a.addEventListener("load",(function(){try{var t=JSON.parse(a.result),n={data:null===(r=t)||void 0===r?void 0:r.data.map((function(t){return{id:null===t||void 0===t?void 0:t.id,holder:null===t||void 0===t?void 0:t.holder,amount:null===t||void 0===t?void 0:t.amount,directMember:null===t||void 0===t?void 0:t.directMember,directMemberAmount:null===t||void 0===t?void 0:t.directMemberAmount,teamMember:null===t||void 0===t?void 0:t.teamMember,teamAmount:null===t||void 0===t?void 0:t.teamAmount,level:null===t||void 0===t?void 0:t.level,start_date:null===t||void 0===t?void 0:t.start_date,duration:null===t||void 0===t?void 0:t.duration,end_date:null===t||void 0===t?void 0:t.end_date,parent:null===t||void 0===t?void 0:t.parent,progress:null===t||void 0===t?void 0:t.progress,$open:!0}})),links:null===r||void 0===r?void 0:r.links.map((function(t){return{id:t.id,source:t.source,target:t.target,type:t.type}}))};localStorage.setItem("hiifx_data",JSON.stringify(n)),g.gantt.message({type:"info",text:"\u532f\u5165\u6210\u529f~~\ud83c\udf89\ud83c\udf89"}),e()}catch(o){g.gantt.message({type:"error",text:"\u532f\u5165\u8cc7\u6599\u683c\u5f0f\u932f\u8aa4 \ud83d\ude31\ud83d\ude31"})}var r})),a.addEventListener("error",(function(){g.gantt.message({type:"error",text:"\u532f\u5165\u8cc7\u6599\u6642\u767c\u751f\u932f\u8aa4 \ud83d\ude31\ud83d\ude31"})})),a.readAsText(t.files[0])}}}),[e]),r.a.createElement("div",{className:"tool-bar"},r.a.createElement("div",{className:"logo-wrapper noselect",onClick:function(){l(!i),i?(g.gantt.getGridColumn("wbs").hide=!0,g.gantt.getGridColumn("start_date").hide=!0,g.gantt.config.grid_width=150):(g.gantt.getGridColumn("wbs").hide=!1,g.gantt.getGridColumn("start_date").hide=!1,g.gantt.config.grid_width=300),g.gantt.render()}},i?r.a.createElement(S.a,null):r.a.createElement(D.a,null),r.a.createElement("b",{className:"short-LOGO"},"\u6d77\u532f"),r.a.createElement("b",{className:"full-LOGO"},"\u6d77\u532f\u5718\u968a\u8cc7\u91d1\u7ba1\u7406\u5de5\u5177")),r.a.createElement("div",{className:"tool-wrapper"},r.a.createElement("div",{className:"action-icon-wrapper"},r.a.createElement(C.a,{onClick:function(){return g.gantt.undo()}}),r.a.createElement(j.a,{onClick:function(){return g.gantt.redo()}})),r.a.createElement("div",{className:"zoom-icon-wrapper"},r.a.createElement(T.a,{onClick:function(){return g.gantt.ext.zoom.zoomIn()}}),r.a.createElement(z.a,{onClick:function(){return g.gantt.ext.zoom.zoomOut()}})),r.a.createElement("div",{className:"fullscreen-icon-wrapper",onClick:function(){g.gantt.ext.fullscreen.expand()}},r.a.createElement(I.a,null)),r.a.createElement("div",{className:"export-icon-wrapper",onClick:function(){window.importBox=g.gantt.modalbox({title:"\u8a2d\u5b9a",text:'\n            <label for="data-import" class="data-import-label">\n              \u532f\u5165\u7d00\u9304\n            </label>\n            <input id="data-import" type="file" onchange="gantt.importFromJSON(this)" accept="application/json" />\n            ',width:"500px",buttons:[{label:"\u532f\u51fa\u7d00\u9304",css:"data_export_btn",value:"export"},{label:"\u91cd\u8a2d\u7d00\u9304",css:"data_export_restore",value:"restore"},{label:"\u53d6\u6d88",css:"data_cancel_btn",value:"cancel"}],callback:function(t){"restore"===t&&(localStorage.setItem("hiifx_data",JSON.stringify(M)),window.location.reload()),"export"===t&&function(){var t=g.gantt.serialize();L()(JSON.stringify(t),"".concat((new Date).toISOString().substring(0,10).split("-").join(""),"_\u6d77\u532f\u5718\u968a.json"))}()}})}},r.a.createElement(P.a,null))))},W=(a(34),U),$=function(t){var e=t.messages.map((function(t){var e=t.message;return r.a.createElement("li",{key:Math.random()},e)}));return r.a.createElement("div",{className:"message-area"},r.a.createElement("h3",null,"\u64cd\u4f5c\u7d00\u9304\uff1a"),r.a.createElement("ul",null,e))};$.defaultProps={messages:[]};var B=$,R=(a(35),B),G=(a(36),function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={isReady:!1,isUpdating:!1,tasks:null,currentZoom:"\u6708",messages:[]},t.logDataUpdate=function(e,a,n,r){if(!1===t.state.isUpdating){t.setState({isUpdating:!0});var o=n&&n.holder?" (".concat(n.holder,")"):"",i="".concat(e," ").concat(a,": ").concat(r," ").concat(o);"link"===e&&"delete"!==a&&(i+=" ( source: ".concat(n.source,", target: ").concat(n.target," )")),t.addMessage(i);var l=g.gantt.serialize(),s=l.data,d=l.links,u={data:s.map((function(t){var e,a,n;return Object(c.a)(Object(c.a)({},t),{},{end_date:void 0,directMember:null!==(e=g.gantt.getChildren(t.id).length)&&void 0!==e?e:0,directMemberAmount:null!==(a=h(t.id))&&void 0!==a?a:0,teamMember:_(t.id).teamMember,teamAmount:_(t.id).teamAmount,level:b(t.id),duration:35,progress:null!==(n=v(t.start_date))&&void 0!==n?n:.6,$open:!0})})),links:d};localStorage.setItem("hiifx_data",JSON.stringify(u)),t.setState({isUpdating:!1})}},t.updateImportData=function(){t.setState({isReady:!1});var e=localStorage.getItem("hiifx_data");t.setState({tasks:JSON.parse(e),isReady:!0}),g.gantt.modalbox.hide(window.importBox)},t}return Object(d.a)(a,[{key:"addMessage",value:function(t){var e=[{message:t}].concat(Object(l.a)(this.state.messages));e.length>5&&(e.length=5),this.setState({messages:e})}},{key:"componentDidMount",value:function(){var t=localStorage.getItem("hiifx_data");t?this.setState({tasks:JSON.parse(t),isReady:!0}):(localStorage.setItem("hiifx_data",JSON.stringify(M)),this.setState({tasks:M,isReady:!0}))}},{key:"render",value:function(){var t=this.state,e=t.isReady,a=t.tasks,n=t.currentZoom,o=t.messages;return r.a.createElement("div",null,r.a.createElement("div",{className:"tool-bar-container"},r.a.createElement(W,{handleImportData:this.updateImportData})),r.a.createElement("div",{id:"rotate-hint"},r.a.createElement("div",{id:"rotate-icon-wrapper"}),r.a.createElement("div",{id:"rotate-hint-wrapper"},"\u8acb\u7ffb\u8f49\u624b\u6a5f")),r.a.createElement("div",{className:"gantt-container"},e&&r.a.createElement(N,{tasks:a,zoom:n,onDataUpdated:this.logDataUpdate})),r.a.createElement(R,{messages:o}),r.a.createElement(f.a,null))}}]),a}(n.Component)),Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(t){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var e=t.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(t){console.error("Error during service worker registration:",t)}))}i.a.render(r.a.createElement(G,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/hiifx_management",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/hiifx_management","/hiifx-sw.js");Z?(!function(t){fetch(t).then((function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):q(t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):q(t)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.01373860.chunk.js.map