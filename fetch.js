// fetch using asynchronous funtion using await and async

let data=fetch('https://github.com/users')
data.then((respose)=>{
  finaldata=response.json()
  finaldata.then((result)=>{
    console.log(result)
  })
})
