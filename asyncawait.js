const showMessageLater = (msg) => {
    return new Promise((resolve, reject) => {
        setTimeout( ()=> {
            if (msg === "Hello") {
                return reject("something happened")
            }
            return resolve(msg)
        }, 1000)
    })
};

// letisztutabb eredmény mint a thenes verzió

const myFunc = async () => {  
    try {
        let result = "";
        result = await showMessageLater("Hello5");
        console.log(result);
        result = await showMessageLater("Hello6")
        console.log(result);
        result = await showMessageLater("Hello7")
        console.log(result);
        result = await showMessageLater("Hello")
        console.log(result);

    } catch (err) {
        console.log(err);
    }
}

myFunc()