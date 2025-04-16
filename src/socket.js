import {io} from "socket.io-client";
import {backendURL} from "./config.js";

const socket = io(backendURL,{
    withCredentials:true
});

export default socket;