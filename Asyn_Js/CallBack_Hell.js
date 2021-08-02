// Here we are going to apply and check the callback property of js.
const colorChange=(fColor,delay,nColor) => {
    setTimeout(() =>{
        document.body.style.backgroundColor=fColor
        nColor && nColor()
    },delay)
}
const value=colorChange('red',1000,()=> {
    colorChange('yellow',1000, ()=>{
        colorChange('orange',1000,() =>{
            colorChange('green',1000,() =>{
                colorChange('blue',1000,() =>{
                    value
                })
            })
        })
    })
})