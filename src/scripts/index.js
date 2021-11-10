const moment = require("moment");
const d3 = require("d3");


import "../estilos/main.scss";
import {getFullName} from "./utils/utils";


const firstName = getFullName("JStestOK");
console.log(firstName)


const now = moment().format("YYYY-MM-DD, h:mm:ss a")

console.log(now)
console.log(d3)
