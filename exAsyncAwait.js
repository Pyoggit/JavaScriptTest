function networkRequest() {
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log('데이터를 받아왔습니다.');
            resolve('서버');
        },2000);
    });
}

async function getUser() {
    await networkRequest();
    return '데이터';
}

const user = getUser();
user.then((name) => console.log(name));