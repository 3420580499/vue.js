import axios from "axios"
export function request(config){
  /*const instance1=axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:5000
  })
  instance1(config)
    .then(res =>{
      success(res)
    })
    .catch((error) =>{
      failure(error)
    })*/

  /*return new Promise((resolve,reject) =>{
    const instance1=axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:5000
    })
    instance1(config)
      .then(res =>{
        resolve(res)
      })
      .catch((error) =>{
        reject(error)
      })
  })*/


    const instance1=axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:5000
    })
    /*这本身就是一个promise*/
    return instance1(config)


}
