const colorChange= (fcolor,delay) =>{
    return new Promise((resolve,reject) => { 
    setTimeout(() => {
        document.body.style.backgroundColor=fcolor
        resolve()
    },delay)
})
}
async function rainbow(){
    await colorChange('red', 1000)
    await colorChange('green', 1000)
    await colorChange('yelow', 1000)
    await colorChange('blue', 1000)
    await colorChange('pink', 1000)
    await colorChange('voilet', 1000)
    await colorChange('orange', 1000)
    return "Alldone"
}
rainbow()
    .then((msg)=>{
        console.log("end of rainbow")
        console.log(msg)
    })
    