"bundle";System.register("FORCEDIRECTED.js",["THREE"],function(a,b){"use strict";function c(a,b){b=b||{},this.layout=b.layout||"2d",this.attraction_multiplier=b.attraction||5,this.repulsion_multiplier=b.repulsion||.75,this.max_iterations=b.iterations||1e3,this.graph=a,this.width=b.width||200,this.height=b.height||200,this.finished=!1;var c,d,e,f,i,j=b.positionUpdated,k=1e-6,l=0,m=0,n=0;this.init=function(){this.finished=!1,m=this.width/10,f=this.graph.nodes.length,i=this.graph.edges.length,e=Math.sqrt(this.height*this.width/f),c=this.attraction_multiplier*e,d=this.repulsion_multiplier*e},this.generate=function(){if(!(l<this.max_iterations&&m>1e-6))return this.finished||console.log("Average time: "+n/l+" ms"),this.finished=!0,!1;var b,e,o,p,q,r,s=(new Date).getTime();for(b=0;b<f;b++){var t=a.nodes[b];for(t.layout=t.layout||{},0===b&&(t.layout.offset=new h.Vector3),t.layout.force=0,t.layout.tmp_pos=t.layout.tmp_pos||(new h.Vector3).copy(t.position),e=b+1;e<f;e++){var u=a.nodes[e];b!=e&&(u.layout=u.layout||{},u.layout.tmp_pos=u.layout.tmp_pos||(new h.Vector3).copy(u.position),o=t.layout.tmp_pos.clone().sub(u.layout.tmp_pos),p=Math.max(k,Math.sqrt(g(o.clone().multiply(o)))),q=d*d/p,t.layout.force+=q,u.layout.force+=q,0===b&&(u.layout.offset=new h.Vector3),r=o.clone().multiply((new h.Vector3).setScalar(q/p)),t.layout.offset.add(r),u.layout.offset.sub(r))}}for(b=0;b<i;b++){var v=a.edges[b];o=v.source.layout.tmp_pos.clone().sub(v.target.layout.tmp_pos),p=Math.max(k,Math.sqrt(g(o.clone().multiply(o)))),q=p*p/c,v.source.layout.force-=q,v.target.layout.force+=q,r=o.clone().multiply((new h.Vector3).setScalar(q/p)),v.target.layout.offset.add(r),v.source.layout.offset.sub(r)}for(b=0;b<f;b++){var w=a.nodes[b];p=Math.max(k,Math.sqrt(g(w.layout.offset.clone().multiply(w.layout.offset)))),w.layout.tmp_pos.add(w.layout.offset.clone().multiply((new h.Vector3).setScalar(Math.min(p,m)/p)));var x=!0,y=new h.Vector3(w.position.x,w.position.y,w.position.z);y.sub(w.layout.tmp_pos).divide((new h.Vector3).setScalar(10)),w.position.x-=y.x,w.position.y-=y.y,"3d"===this.layout&&(w.position.z-=y.z),x&&"function"==typeof j&&j(w)}m*=1-l/this.max_iterations,l++;var z=(new Date).getTime();return n+=z-s,!0},this.stop_calculating=function(){l=this.max_iterations}}function d(a){this.options=a||{},this.nodeSet={},this.nodes=[],this.edges=[],this.layout=void 0}function e(a){this.id=a,this.nodesTo=[],this.nodesFrom=[],this.position={},this.data={}}function f(a,b){this.source=a,this.target=b,this.data={}}function g(a){return a.x+a.y+a.z}var h;return{setters:[function(a){h=a}],execute:function(){a("Layout",c),a("Graph",d),a("Node",e),a("Edge",f),d.prototype.addNode=function(a){return void 0===this.nodeSet[a.id]&&!this.reached_limit()&&(this.nodeSet[a.id]=a,this.nodes.push(a),!0)},d.prototype.getNode=function(a){return this.nodeSet[a]},d.prototype.addEdge=function(a,b){if(a.addConnectedTo(b)===!0){var c=new f(a,b);return this.edges.push(c),!0}return!1},d.prototype.addEdgeCustom=function(a,b,c){if(a.addConnectedTo(b)===!0){var d=new f(a,b);return d.data=c||{},this.edges.push(d),!0}return!1},d.prototype.reached_limit=function(){return void 0!==this.options.limit&&this.options.limit<=this.nodes.length},e.prototype.addConnectedTo=function(a){return this.connectedTo(a)===!1&&(this.nodesTo.push(a),!0)},e.prototype.connectedTo=function(a){for(var b=0;b<this.nodesTo.length;b++){var c=this.nodesTo[b];if(c.id==a.id)return!0}return!1}}}}),function(){var a=System.amdDefine;a("app.html!github:systemjs/plugin-text@0.0.8.js",[],function(){return"<template><router-view></router-view></template>"})}(),System.register("app.js",[],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d;return{setters:[],execute:function(){a("App",d=function(){function a(){c(this,a)}return a.prototype.configureRouter=function(a,b){a.title="Aurelia",a.map([{route:["","view_05"],name:"view_05",moduleId:"view_05",nav:!0,title:""}]),this.router=b},a}()),a("App",d)}}}),System.register("main.js",["bootstrap","bootstrap/dist/css/bootstrap.min.css!"],function(a,b){"use strict";function c(a){a.use.standardConfiguration().developmentLogging(),a.start().then(function(){return a.setRoot("app")})}return a("configure",c),{setters:[function(a){},function(a){}],execute:function(){}}}),function(){var a=System.amdDefine;a("view_05.html!github:systemjs/plugin-text@0.0.8.js",[],function(){return'<template><div class="container-fluid" style="position: absolute; top:0; bottom: 0;"><div class="row mt-3 mb-3"><div class="col-12 text-center"><div class="btn-group btn-group-lg" role="group" aria-label="Basic example"><button type="button" class="btn btn-secondary" click.delegate="start()">Start</button> <button type="button" class="btn btn-secondary" click.delegate="stop()">Stop</button> <button type="button" class="btn btn-secondary" click.delegate="reset()">Reset</button></div></div></div><div class="row h-100"><div class="col-12 h-100 pl-0 pr-0"><div id="vis_001" class="h-100 w-100"></div></div></div></div></template>'})}(),System.register("data_manager.js",["../data/01_people_cant.csv!text","../data/02_marriges_cant.csv!text","../data/03_children_cant.csv!text","../data/04_cant.csv!text","d3"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i,j;return{setters:[function(a){d=a.default},function(a){e=a.default},function(a){f=a.default},function(a){g=a.default},function(a){h=a}],execute:function(){i=!1,a("default",j=function(){function a(){c(this,a),this.people_list=[],this.filtered_people_list=[],this.people_map_uuid={},this.people_map_id={},this.marriges_map={},this.filter_list={}}return a.prototype.parse=function(){return this.parse_file_01(d),this.parse_file_02(e),this.parse_file_03(f),this.parse_file_04(g),this.link_by_parent(this.people_list),this.filter_people_list()},a.prototype.filter_people_list=function(){for(var a=this.people_list.filter(function(a){return a.data_4===!0}),b=this.people_list.filter(function(a){return!a.data_4}),c=b,d=Array.isArray(c),e=0,c=d?c:c[Symbol.iterator]();;){var f;if(d){if(e>=c.length)break;f=c[e++]}else{if(e=c.next(),e.done)break;f=e.value}var g=f;this.filter_list[g.id]=!0}return i&&(console.log("----"),console.log("From "+this.people_list.length+" to "+a.length),console.log("----")),this.filtered_people_list=a,a},a.prototype.raw_people_list=function(){return this.people_list},a.prototype.parse_file_01=function(a,b){var c=h.csvParseRows(a);c.shift();for(var d=c,e=Array.isArray(d),f=0,d=e?d:d[Symbol.iterator]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{if(f=d.next(),f.done)break;g=f.value}var i=g,j=i[0],k=i[1].replace("\\","/"),l=i[2]+k,m=i[2],n=i[7],o={id:j,code:k,name:m,uuid:l,gender:n,marriges:[],children:[],parents:[]};this.people_list.push(o),this.people_map_uuid[l]=o,this.people_map_id[j]=o}},a.prototype.parse_file_02=function(a,b){var c=h.csvParseRows(a);c.shift();for(var d=c,e=Array.isArray(d),f=0,d=e?d:d[Symbol.iterator]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{if(f=d.next(),f.done)break;g=f.value}var i=g,j=i[0],k=i[1],l=i[2];k&&l?(this.people_map_id[k].marriges.push({m_id:j,s_id:l}),this.people_map_id[l].marriges.push({m_id:j,s_id:k}),this.marriges_map[j]=[k,l]):!k&&l?(this.people_map_id[l].marriges.push({m_id:j,s_id:null}),this.marriges_map[j]=[l]):!l&&k&&(this.people_map_id[k].marriges.push({m_id:j,s_id:null}),this.marriges_map[j]=[k])}},a.prototype.parse_file_03=function(a,b){var c=h.csvParseRows(a);c.shift();for(var d=c,e=Array.isArray(d),f=0,d=e?d:d[Symbol.iterator]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{if(f=d.next(),f.done)break;g=f.value}var i=g,j=i[0],k=i[1];if(this.marriges_map[j])for(var l=this.marriges_map[j],m=Array.isArray(l),n=0,l=m?l:l[Symbol.iterator]();;){var o;if(m){if(n>=l.length)break;o=l[n++]}else{if(n=l.next(),n.done)break;o=n.value}var p=o;this.people_map_id[p].children.push(k)}else b&&console.log("marrage not found "+j+" child: "+k)}},a.prototype.parse_file_04=function(a,b){for(var c=h.csvParseRows(a),d=c,e=Array.isArray(d),f=0,d=e?d:d[Symbol.iterator]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{if(f=d.next(),f.done)break;g=f.value}var i=g;if("*"===i[11]||""===i[11]){var j=i[0],k=i[1],l=i[2],m=i[3],n=i[4],o=i[5],p=i[6],q=i[7],r=i[8],s=i[9],t=[j,k,l,m,n,o,p,q,r,s].join("");if(this.people_map_uuid[t]){var u=this.people_map_uuid[t];u.lang_group=l,u.id_nr=m,u.m_info={union_type:n,spouse_surname:o,blood_rel_to_spouse:q,affinal_rel_to_spouse:r},u.surname=k,u.generation=s,u.data_4=!0}else b&&console.log("could not find person in people list: "+t)}else b&&console.log("Person had more than 1 marrige: ")}},a.prototype.find_person_by_id=function(a){var b=this.people_map_id[a];return b},a.prototype.order_by_generation=function(a,b){return b?a.sort(function(a,b){return a.generation<b.generation?-1:a.generation>b.generation?1:0}):a.sort(function(a,b){return a.generation<b.generation?1:a.generation>b.generation?-1:0}),a},a.prototype.link_by_parent=function(a){for(var b=this,c=function a(c){for(var d=c.children,e=Array.isArray(d),f=0,d=e?d:d[Symbol.iterator]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{if(f=d.next(),f.done)break;g=f.value}var h=g,i=b.people_map_id[h];i.parents.findIndex(function(a){return a===c.id})===-1&&i.parents.push(c.id),a(i)}},d=a,e=Array.isArray(d),f=0,d=e?d:d[Symbol.iterator]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{if(f=d.next(),f.done)break;g=f.value}var h=g;c(h)}},a}()),a("default",j)}}}),System.register("helpers.js",[],function(a,b){"use strict";var c,d;return{setters:[],execute:function(){a("COLORS",c={0:"black",1:"green",2:"brown",3:"#c8a2c8",4:"pink",5:"blue",6:"#986c81",7:"turquoise",8:"red",9:"orange",10:"#0e7454",11:"tan",12:"lime",13:"#f0557d",14:"#f19d2a",15:"#0048a8",16:"aqua",17:"#8b3e36",18:"#ff986c",19:"yellow",20:"purple",21:"olive",22:"#e4fe3c",23:"navy",24:"#788998",25:"#ffca9d",26:"#788998",27:"#004423",28:"#009976",29:"sienna",30:"#ffca9d",31:"purple",32:"#0e7454",33:"#004423",34:"#fae44f",35:"#57001a",36:"#fdc58fx",37:"#000315",38:"aqua",39:"#8b3e36",40:"ash",41:"bottle",42:"ruby",43:"aherne",44:"orchid",45:"#f0557d",46:"cherry",47:"sky",48:"maize",49:"lime",50:"sepia",51:"green",52:"red",53:"pine",54:"violet",55:"brown"}),a("ICON_UNICODE",d={male:"",female:"",unknown:""}),a("COLORS",c),a("ICON_UNICODE",d)}}}),System.register("view_05.js",["d3","./data_manager.js","./helpers.js"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h;return{setters:[function(a){d=a},function(a){e=a.default},function(a){f=a.COLORS,g=a.ICON_UNICODE}],execute:function(){a("View_05",h=function(){function a(){c(this,a),this.current_index=-1,this.info={n_w:30,n_h:30,h_sep:5,v_sep:20},this.output={},this.person_index=-1}return a.prototype.activate=function(){var a=this,b=new Promise(function(b,c){a.DM=new e,a.data=a.DM.parse(),a.data=a.DM.order_by_generation(a.data,!1),b()});return b},a.prototype.attached=function(){this.info.w_1=document.getElementById("vis_001").clientWidth,this.info.h_1=document.getElementById("vis_001").clientHeight,this.svg_1=d.select("#vis_001").append("svg").style("background-color","#E6EBE0").attr("width",this.info.w_1).attr("height",this.info.h_1),this.update_01()},a.prototype.update_01=function(){function a(){E.attr("x1",function(a){return a.source.x}).attr("y1",function(a){return a.source.y}).attr("x2",function(a){return a.target.x}).attr("y2",function(a){return a.target.y}),F.attr("cx",function(a){return a.x}).attr("cy",function(a){return a.y})}function b(a){d.event.active||G.alphaTarget(.3).restart(),a.fx=a.x,a.fy=a.y}function c(a){a.fx=d.event.x,a.fy=d.event.y}function e(a){d.event.active||G.alphaTarget(0),a.fx=null,a.fy=null}this.svg_1.selectAll("*").remove();for(var f=[],g=[],h=0,i=this.DM.filter_list,j=this.data,k=Array.isArray(j),l=0,j=k?j:j[Symbol.iterator]();;){var m;if(k){if(l>=j.length)break;m=j[l++]}else{if(l=j.next(),l.done)break;m=l.value}var n=m;f.push({id:n.id});for(var o=n.children,p=Array.isArray(o),q=0,o=p?o:o[Symbol.iterator]();;){var r;if(p){if(q>=o.length)break;r=o[q++]}else{if(q=o.next(),q.done)break;r=q.value}var s=r;i[s]!==!0&&g.push({type:"child_link",source:n.id,target:s})}for(var t=n.marriges,u=Array.isArray(t),v=0,t=u?t:t[Symbol.iterator]();;){var w;if(u){if(v>=t.length)break;w=t[v++]}else{if(v=t.next(),v.done)break;w=v.value}var x=w;if(x.s_id){if(i[x.s_id]===!0)continue;g.push({type:"marrage_link",source:n.id,target:x.s_id})}else if(n.m_info){f.push({id:"unknown-"+h}),g.push({type:"marrage_link",source:n.id,target:"unknown-"+h});for(var y=n.children,z=Array.isArray(y),A=0,y=z?y:y[Symbol.iterator]();;){var B;if(z){if(A>=y.length)break;B=y[A++]}else{if(A=y.next(),A.done)break;B=A.value}var C=B;i[C]!==!0&&g.push({type:"child_link",source:"unknown-"+h,target:C})}h++}}}var D=5;this.simulation=d.forceSimulation(f).velocityDecay(.7).force("x",d.forceX()).force("y",d.forceY()).force("link",d.forceLink(g).id(function(a){return a.id}).iterations(2)).force("charge",d.forceManyBody()).on("tick",a);var E=this.svg_1.append("g").attr("transform","translate("+this.info.w_1/2+","+this.info.h_1/2+")").attr("class","links").selectAll("line").data(g).enter().append("line").attr("stroke",function(a){return"child_link"===a.type?"black":"green"}),F=this.svg_1.append("g").attr("class","nodes").attr("transform","translate("+this.info.w_1/2+","+this.info.h_1/2+")").selectAll("circle").data(f).enter().append("circle").attr("r",D).call(d.drag().on("start",b).on("drag",c).on("end",e)),G=this.simulation,G=(this.info,this.simulation);a(),this.simulation.stop()},a.prototype.start=function(){this.simulation.stop(),this.simulation.restart()},a.prototype.stop=function(){this.simulation.stop()},a.prototype.reset=function(){this.update_01()},a}()),a("View_05",h)}}});