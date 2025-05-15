/** This 바인드 테스트 */
function main(){
    console.log(this);
}

const mainBind = main.bind({name: '객체'});
mainBind();

const object = {
    mainBind,
};

object.mainBind();
