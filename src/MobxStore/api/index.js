import { post, get, put, del } from "./baseAPI";
import UserStore from "../UserStore";
const BASE_API_DEV = "http://localhost:3000/";

const BaseURL = BASE_API_DEV;

export default class ServerApi {
    //POST API
    static login = body => {
        const url = BaseURL + "login";
        const header = {
        "Content-Type": "application/json"
        };
        return post(url, body, header);
    };
}