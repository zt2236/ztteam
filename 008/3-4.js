// 字符串搜索
// function indexOfs(str,seq){
//     var ss=[];
//     var k=0;
//     if (seq.length == 1){
//         var x;
//         for(var i=0;i<str.length;i++){
//             if(str[i] == seq){
//                 x=i;
//                 return  x;
//             }else{
//                 x=-1;
//             }
//         }
//         return x;
//     }
//     if (seq.length != 1 ){
//         // j="";
//         for(var j=0;j<str.length;j++){
//            for(var a=0;a<seq.length;a++){
//                if(seq[a]==str[j]){
//                     ss[k]=j;
//                     k++
                    
//                     if(ss[a] != str[j-1]){
                          
//                         return console.log("false");
//                     }
                    
//                 }
//            }
//         }
      
//     }  console.log(ss)
// }
// var str = "1234589";
// var seq ="23";
// indexOfs(str,seq);

function indexOfs(str,seq){
   
    for(var i=0;i<str.length;i++){
        str1="";
        var k=i;
        for(var j=0;j<seq.length;j++){
            if(str[k]==seq[j]){
                str1+=str[k]
                k++;
                if(str1==seq){
                    console.log(i)
                }
            }
        }
    }
    return str1;
}

var str = "112233225566789"
var seq ='22';
console.log(indexOfs(str,seq));
