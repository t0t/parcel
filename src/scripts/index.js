const moment = require("moment");
const d3 = require("d3");

import "../estilos/main.scss";

import { getFullName } from "./utils/utils";
const firstName = getFullName("JStestOK");
console.log(firstName)

// Sidenav open-close
import { openNav, closeNav } from "./sidenav";
const hambutton = document.getElementById("hambutton");
hambutton.addEventListener("click", openNav)
const closesidenav = document.getElementById("closesidenav");
closesidenav.addEventListener("click", closeNav)






const now = moment().format("YYYY-MM-DD, h:mm:ss a")

console.log(now)
console.log(d3)



// LOADER con fundido
let loader = document.getElementById("wrap-preloader");
let theSite = document.getElementById("theSite");
let noOverflow = document.querySelector("body");

// Cuando carge todo, DOM, recursos, etc
window.addEventListener("load", () =>  {
  fundidoPagina();
  // oculta el loader
  loader.style.display = "none"; //poner en none/grid
  // Muestra la pagina
  theSite.style.display = "inherit";
  noOverflow.style.overflow = "visible";
});

let fundidoPagina = () => {
  document.querySelector("#theSite").classList.add("fade-page-on")
}


// scale
// set the dimensions and margins of the graph
var width = 450
var height = 450

// append the svg object to the body of the page
var svg = d3.select("#animcover")
  .append("svg")
    .attr("width", width)
    .attr("height", height)

// create dummy data -> just one element per circle
const data = [
  { name: 'Uno', group: 1 },
  { name: 'Dos', group: 2 },
  { name: 'Tres', group: 3 },
  { name: 'Cuatro', group: 4 },
  { name: 'F', group: 5 },
  { name: 'E', group: 5 },
  { name: 'G', group: 5 },
  { name: 'H', group: 5 },
  { name: 'I', group: 5 },
  { name: 'J', group: 5 }
]

// A scale that gives a X target position for each group
const x = d3.scaleOrdinal()
  .domain([1, 2, 3, 4, 5])
  .range([50, 50, 50, 50, 50])

// A color scale
const color = d3.scaleOrdinal()
.domain([1, 2, 3, 4, 5])
.range([ "#FF6874", "#2BC4A9", "#9F9FFF", "#FFFF9F", "#000"])

// Randomize size
function randomNumber(min,max) {
  return Math.random() * (max - min) + min;
}
const radio = 48;

// Initialize the circle: all located at the center of the svg area
let node = svg.append("g")
  .selectAll("circle")
  .data(data)
  .join("circle")
    .attr("r", radio)
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .style("fill", d => color(d.group))
    .attr("stroke-width", "4")
    .call(d3.drag() // call specific function when circle is dragged
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended));

// Features of the forces applied to the nodes:
var simulation = d3.forceSimulation()
  .force("x", d3.forceX().strength(0.3).x(d => x(d.group)))
  .force("y", d3.forceY().strength(0.1).y( height / 2 ))
  .force("center", d3.forceCenter().x(width / 2).y(height / 2)) // Attraction to the center of the svg area
  .force("charge", d3.forceManyBody().strength(0.1)) // Nodes are attracted one each other of value is > 0
  .force("collide", d3.forceCollide().strength(8).radius(radio).iterations(3)) // Force that avoids circle overlapping

// Apply these forces to the nodes and update their positions.
// Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
simulation
    .nodes(data)
    .on("tick", d => {
      node
          .attr("cx", d => d.x)
          .attr("cy", d => d.y)
    });


// What happens when a circle is dragged?
function dragstarted(event, d) {
  if (!event.active) simulation.alphaTarget(.03).restart();
   d.fx = d.x;
   d.fy = d.y;
 }
 function dragged(event, d) {
   d.fx = event.x;
   d.fy = event.y;
 }
 function dragended(event, d) {
  if (!event.active) simulation.alphaTarget(.03);
   d.fx = null;
   d.fy = null;
 }



//  HIDE NAV ON SCROLL
 function isMobileDevice() {
    let check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(Browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
  
    return check;
  }
  
  // Safari 3.0+ "[object HTMLElementConstructor]"
  const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
  
  // Muestra efecto navbar si no es mobil NI Safari
  if ( !isSafari && !isMobileDevice()) {
  
    // console.log(`No es SAFARI porque da ${isSafari}`);
    var prevScrollpos = window.pageYOffset;
  
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
  
      if (prevScrollpos > currentScrollPos)  {
        document.getElementById("navbar").style.top = "0px";
      } else {
        document.getElementById("navbar").style.top = "-100px";
      }
  
      prevScrollpos = currentScrollPos;
    };
  };
  