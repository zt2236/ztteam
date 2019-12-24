//3.通过制定字符串合并数组为字符串
function joins(arr,seq){
    var str="";
    for (var i=0;i<arr.length;i++){
        if(i== arr.length-1){
            str+=arr[i];
        }else{
            str+=arr[i]+seq;
        }
    }
    return str;
}
var array = ['联想','华为','苹果','华硕'];
console.log(joins(array,"-"));
