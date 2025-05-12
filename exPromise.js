function getData(){
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const data = { name: '철수'}
            if(data){
                console.log('네트워크 요청 성공')
                resolve(data);
            }else{
                reject(new Error('네트워크 에러!!'))
            }
        },1000);
    })
    return promise;
}

// then(), catch(), finally()
// getData().
//     then((data)=>{
//         const name = data.name
//         console.log(`${name}님 안녕하세요!`)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
//     .finally(()=>{
//         console.log('마무리')
//     })

// Promise chaining
const promise = getData();
promise
    .then((data) => getData())
    .then((data) => getData())
    .then((data) => getData())
    .then(console.log)
