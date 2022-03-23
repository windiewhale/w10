
/* const showMessageLater = (msg) => {
    setTimeout( () => {
        return msg
    }, 3000)

} */
/* console.log(showMessageLater("Hello"));  //undefined, mert console.log nem várja meg a setTimeout ot , promise kiírja */

const showMessageLater = (msg) => {
    return new Promise((resolve, reject) => {
        setTimeout( ()=> {
            if (msg === "Hello") {
                return reject("something happened")
            }
            return resolve(msg)
        }, 1000)
    })

}

showMessageLater("Hello2").then( (result) => {
    console.log(result)
    showMessageLater("Hello3").then( (result) => {
        console.log(result);
        showMessageLater("Hello4").then( (result) => {
            console.log(result) })
    })  
}).catch( (err) => {
    console.log(err);
});  


  



