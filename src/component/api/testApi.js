import axiosClient from "./axiosClient";

class TestApi{
    getAll = (params) =>{
        const url = "/user/listUser";
        console.log(url);
        return axiosClient.get(url);
    }
  
}
const testApi = new TestApi();
export default testApi;