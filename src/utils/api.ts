import { User } from "./types";
import axios from "axios";
import {AxiosResponse} from "axios";

export const getUsers = async () =>{
    let res : AxiosResponse<User[]>=await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );
    return res.data;
}
