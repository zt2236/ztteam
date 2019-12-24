//截取字符串
function slices(str,start,end){
    var str1="";
        for(var i=0;i<str.length;i++){
            if(start>=0){
                if(i >= start){
                    str1+=str[i];
                }
                if(i == end-1){
                    break;
                }
            }
            if(start<0){
                if((i>=start+str.length)){
                    str1+=str[i];
                }
                if(i==end-1){
                    break;
                }
            }
        }
    return str1;
}


var start=-12;
var end=10;
var str ="我们是好人，坏人，有钱人";
// var str="截取字符串，start开始下标，end结束下标，不包含end，如果end为空，则截取到最后，如果为负数，倒数"
console.log(slices(str,start, end));