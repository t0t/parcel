var width=450,height=450,svg=d3.select("#animcover").append("svg").attr("width",width).attr("height",height),data=[{name:"Uno",group:1},{name:"Dos",group:2},{name:"Tres",group:3},{name:"Cuatro",group:4},{name:"F",group:5},{name:"E",group:5},{name:"G",group:5},{name:"H",group:5},{name:"I",group:5},{name:"J",group:5}],x=d3.scaleOrdinal().domain([1,2,3,4,5]).range([50,50,50,50,50]),color=d3.scaleOrdinal().domain([1,2,3,4,5]).range(["#FF6874","#2BC4A9","#9F9FFF","#FFFF9F","#000"]);function randomNumber(r,t){return Math.random()*(t-r)+r}var radio=48,node=svg.append("g").selectAll("circle").data(data).join("circle").attr("r",radio).attr("cx",width/2).attr("cy",height/2).style("fill",(function(r){return color(r.group)})).attr("stroke-width","4").call(d3.drag().on("start",dragstarted).on("drag",dragged).on("end",dragended)),simulation=d3.forceSimulation().force("x",d3.forceX().strength(.3).x((function(r){return x(r.group)}))).force("y",d3.forceY().strength(.1).y(height/2)).force("center",d3.forceCenter().x(width/2).y(height/2)).force("charge",d3.forceManyBody().strength(.1)).force("collide",d3.forceCollide().strength(8).radius(radio).iterations(3));function dragstarted(r,t){r.active||simulation.alphaTarget(.03).restart(),t.fx=t.x,t.fy=t.y}function dragged(r,t){t.fx=r.x,t.fy=r.y}function dragended(r,t){r.active||simulation.alphaTarget(.03),t.fx=null,t.fy=null}simulation.nodes(data).on("tick",(function(r){node.attr("cx",(function(r){return r.x})).attr("cy",(function(r){return r.y}))}));
//# sourceMappingURL=index.c52148f0.js.map