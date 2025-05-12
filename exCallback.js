//** 1. 로그인 */
function login(username){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(username){
                resolve(username);
            }else{
                reject(new Error('아이디를 입력해주세여'))
            }
        },1000)    

    })
}

//** 2. 장바구니 */ 
function addCart(product){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(product){
                resolve(product)
            }else{
                reject(new Error('장바구니에 넣을 상품이 없어요'))
            }
        },2000)
    })
}

//** 3. 결제하기 */
function payment(cardNum, product){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(cardNum.length !== 16){
                reject( new Error('카드정보가 올바르지 않습니다'))
                return;
            }
            
            if(!product){
                reject('상품이 존재하지 않습니다.')
                return;
            }

            resolve(product);
            
        },2000)
    })
}

//** Promise */
const cardNumber = '1234567890123456';

login('홍길동')
  .then((username) => {
    console.log(`${username}님 환영합니다`);
    return addCart('감자');
  })
  .then((product) => {
    console.log(`${product}를 장바구니에 담았습니다.`);
    return payment(cardNumber, product).then(() => ({ cardNumber, product }));
  })
  .then(({ cardNumber, product }) => {
    console.log(`${cardNumber.slice(0,6)}****으로 ${product}를 구매하였습니다.`);
  })
  .catch((err) => {
    console.error('에러:', err.message || err);
  });



//** 콜백지옥 */
// login('홍길동', (username) =>{
//     console.log(`${username}님 환영합니다`)
//     addCart('컴퓨터' , (product) => {
//         console.log(`${product}를 장바구니에 추가하였습니다`)
//         payment('12345678' , product, (cardNum, item) => {
//             console.log(`${cardNum.slice(0,6)}로 ${product}를 구매하였습니다`)
//         })
//     })
// })