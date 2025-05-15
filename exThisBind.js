//** This 바인드 테스트 */
function main(){
    console.log(this);
}

const mainBind = main.bind({name: '객체'});
mainBind();

const object = {
    mainBind,
};

object.mainBind();

//** 이벤트 처리 This */
const button = document.getElementById('btn');

button.addEventListener('click', function(event){
    console.log(event.target === this);
})
