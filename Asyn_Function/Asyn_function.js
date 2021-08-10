const login=async (user,pass) =>{
    if(!user,!pass){
        throw new Error('Invalid Credential')
    }
    if(pass==="Neeraj"){
        return "welcome"
    }else{
        throw new Error('Wrong Password')
    }
} 
login('Kaushik','Neeraaj')
    .then(msg => {
        console.log('Logged In')
        console.log(msg)
    })
    .catch(e =>{
        console.log("error",e)
    })