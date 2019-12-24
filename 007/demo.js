function check(){
    var array =username.value.split("@");
    console.log(array);
    if(array.length <2 || array.length >2){
        alert("请输入正确的格式");
        return;
    }
    id.innerHTML =array[0];
    console.log(id.innerHTML)
}