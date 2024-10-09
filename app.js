let section=document.getElementById("container")
console.log(section)
let data=fetch("https://dummyjson.com/products")
data.then((response)=>{
    console.log(response)
    let finaldata=response.json()
    finaldata.then((result)=>{
        console.log(result)
        array=(result.products)
        array.map((m)=>{
            console.log(m)
            section.innerHTML+=`
            <div>
            <div2><img src=${m.images[0]}><div2>
            <h1>${m.id}</h1>
            <h6>${m.price}</h6>
             <h6>${m.rating}</h6>
              <h6>${m.description}</h6>


            </div>
            `

        })
       
    })

})