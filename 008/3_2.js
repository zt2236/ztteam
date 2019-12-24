//用指定字符分割字符串成数组
function splits(str,seq){
    var arr = [];
    var x=0;
    var sstr="";
    for(var i=0;i<str.length;i++){
        if(str[i]== seq){
            arr[x]=sstr;
            x++;
            sstr="";
        }else{
            sstr+=str[i];

            if(str[i+1]== undefined){
                str[i+1]=str[i];
                arr[x]=sstr;
            }
        }
    }
    return arr;
}
var str = "联想-华为-苹果-华硕";
var seq = "-"
console.log(splits(str,seq));