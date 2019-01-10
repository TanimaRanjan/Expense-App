

const promise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        // resolve({
        //     name: 'Tanima',
        //     age: 36
        // })
         reject('Something wet wrong')
    }, 5000)
})
console.log('before')
promise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log('error: ', error);
})

console.log('after')