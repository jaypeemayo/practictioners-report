import axios from "axios";
export abstract class AxiosHelper {
    static instance = axios.create({
        baseURL: 'http://localhost:2553/api/'
        //baseURL:'https://corepluswebapi20180803083400.azurewebsites.net'
      });
}