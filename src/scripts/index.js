import "../estilos/main.scss";
import {getFullName} from "./utils";

const moment = require("moment");

const firstName = getFullName("JStestOK");
console.log(firstName)


const now = moment().format("YYYY-MM-DD, h:mm:ss a")

console.log(now)