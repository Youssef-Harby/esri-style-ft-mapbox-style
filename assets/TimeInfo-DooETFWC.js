import{gk as c,b4 as u,gl as w,d as i,c9 as I,y as l,f as m,aU as d,b2 as p,aZ as r,aR as a,dR as x}from"./index-BjUNJPVf.js";const U=c()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0});let s=class extends u(d){constructor(t){super(t),this.unit="milliseconds",this.value=0}toMilliseconds(){return w(this.value,this.unit,"milliseconds")}};i([I(U,{nonNullable:!0})],s.prototype,"unit",void 0),i([l({type:Number,json:{write:!0},nonNullable:!0})],s.prototype,"value",void 0),s=i([m("esri.TimeInterval")],s);const v=s;function o(t,e){return v.fromJSON({value:t,unit:e})}let n=class extends u(d){constructor(t){super(t),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeZone=null,this.trackIdField=null,this.useTime=!0}readFullTimeExtent(t,e){if(!e.timeExtent||!Array.isArray(e.timeExtent)||e.timeExtent.length!==2)return null;const T=new Date(e.timeExtent[0]),y=new Date(e.timeExtent[1]);return new p({start:T,end:y})}writeFullTimeExtent(t,e){(t==null?void 0:t.start)!=null&&t.end!=null?e.timeExtent=[t.start.getTime(),t.end.getTime()]:e.timeExtent=null}readInterval(t,e){return e.timeInterval&&e.timeIntervalUnits?o(e.timeInterval,e.timeIntervalUnits):e.defaultTimeInterval&&e.defaultTimeIntervalUnits?o(e.defaultTimeInterval,e.defaultTimeIntervalUnits):null}writeInterval(t,e){e.timeInterval=(t==null?void 0:t.toJSON().value)??null,e.timeIntervalUnits=(t==null?void 0:t.toJSON().unit)??null}};i([l({type:Boolean,json:{name:"exportOptions.timeDataCumulative",write:!0}})],n.prototype,"cumulative",void 0),i([l({type:String,json:{name:"endTimeField",write:{enabled:!0,allowNull:!0}}})],n.prototype,"endField",void 0),i([l({type:p,json:{write:{enabled:!0,allowNull:!0}}})],n.prototype,"fullTimeExtent",void 0),i([r("fullTimeExtent",["timeExtent"])],n.prototype,"readFullTimeExtent",null),i([a("fullTimeExtent")],n.prototype,"writeFullTimeExtent",null),i([l({type:Boolean,json:{write:!0}})],n.prototype,"hasLiveData",void 0),i([l({type:v,json:{write:{enabled:!0,allowNull:!0}}})],n.prototype,"interval",void 0),i([r("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],n.prototype,"readInterval",null),i([a("interval")],n.prototype,"writeInterval",null),i([l({type:String,json:{name:"startTimeField",write:{enabled:!0,allowNull:!0}}})],n.prototype,"startField",void 0),i([l(x("timeReference",!0))],n.prototype,"timeZone",void 0),i([l({type:String,json:{write:{enabled:!0,allowNull:!0}}})],n.prototype,"trackIdField",void 0),i([l({type:Boolean,json:{name:"exportOptions.useTime",write:!0}})],n.prototype,"useTime",void 0),n=i([m("esri.layers.support.TimeInfo")],n);const f=n;export{f as d,U as e,v as l};