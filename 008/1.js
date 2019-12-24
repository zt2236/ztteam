// for( var a=1; a<=9; a++){
//     for ( var b=1; b<=a; b++){
//         // console.log(b+"*"+a+"="+a*b);
//         process.stdout.write("*");

//     }

    
//     console.log();//换行的意思
// }
// 直角三角形
// process.stdout.write("实心直角三角形\n")
// for(var a=1;a<=9;a++){
//     for(var b=1;b<=a;b++){
//         process.stdout.write(" *");
//     }
//     console.log();
// }
// console.log('*****************************************');
// //长方形
// process.stdout.write("实心长方形\n")
// for(var a=1;a<=8;a++){
//     for(var b=1;b<=9;b++){
//         process.stdout.write(" *");
//     }
//     console.log();
// }
// console.log('*****************************************');
// //正方形
// process.stdout.write("实心正方形\n")
// for(var a=1;a<=9;a++){
//     for(var b=1;b<=9;b++){
//         process.stdout.write(" *");
//     }
//    console.log();
// }
// console.log('*****************************************');
// //空心正方形
// process.stdout.write("空心正方形\n")
// for(var a=1;a<=9;a++){
//     for(var b=1;b<=9;b++){
//         if (a ==1 ||b ==1){
//             process.stdout.write(" *");
//         }else if( a==9 ||b  ==9){
//             process.stdout.write(" *");
//             }else{
//         process.stdout.write("  ");
//             }
//     }
//    console.log();
// }
// console.log('*****************************************');

// //回型
// process.stdout.write("回字形\n")
// for(var a=1;a<=9;a++){
//     for(var b=1;b<=9;b++){
//         if (a ==1 ||b ==1){
//             process.stdout.write(" *");
//         }else if( a==9 ||b  ==9){
//             process.stdout.write(" *");
//         }else if((a==3 && (b!=2 && b!=8)) || ((a!=2 && a !=8) && b==3)){
//             process.stdout.write(" *");
//         }else if((a==7 && (b!=2 && b!=8)) ||  ((a!=2 && a !=8) && b==7)){
//             process.stdout.write(" *");
//         }else{
//         process.stdout.write("  ");
//         }
//     }
//    console.log();
// }
// console.log('*****************************************');
//实心梯形
// process.stdout.write("实心梯形\n")
// for(var a=4;a<=9;a++){
//     for(var b=1;b<=a;b++){
//          process.stdout.write(" *");
//     }
//    console.log();
// }
// console.log('*****************************************');
//空心梯形
// process.stdout.write("空心梯形\n")
// for(var a=4;a<=9;a++){
//     for(var b=1;b<=a;b++){
//         if (a == 4||b ==1){
//                 process.stdout.write(" *");
//             }else if (a==9 || b== 9){
//                 process.stdout.write( " *");
//             }else if (a==5 &&  b==5){
//                 process.stdout.write(" *");
//             }else if(a==6 && b==6){
//                 process.stdout.write(" *");
//             }else if(a==7 && b==7){
//                 process.stdout.write(" *");
//             }else if(a==8 && b==8){
//                 process.stdout.write(" *");
//             }else{
//                 process.stdout.write("  ");
//             }
//     }
//     console.log();
// }
   
// console.log('*****************************************');
//三角形

	// var num =9;
	// 	for(var i=0;i<num;i++){
    //         process.stdout.write("*")
	// 		    for (var k=0;k<=num-i;k++) {
    //                 process.stdout.write(" ")

	// 			    for (var x=1;x<=2*i+1;x++) {
	// 				    process.stdout.write("*");
	// 			    }
    //             } 
    //             console.log();
	// 	}
    
    // for(var i=0;i<=5;i++){
    //     for(var j=0;j<=5-i;j++){
    //         process.stdout.write(" ");
    //     }
    //     for(var k=0;k<i;k++){
    //         process.stdout.write(' *');
    //     }
    //         console.log();
    // }


    // process.stdout.write("实心等腰三角形\n")
    // for(var a=0;a<=9;a++){
    //     for(var n=0;n<=9-a;n++){
    //         process.stdout.write(" ");
    //     }
    //     for(var b=0;b<a;b++){
    //         process.stdout.write(" *");
            
    //     }
    //     console.log();
    // }


    // console.log('*****************************************');

process.stdout.write("空心等腰三角形\n")
for(var a=1;a<=9;a++){
    for(var n=1;n<=9-a;n++){
        process.stdout.write(" ");
    }
    for(var b=1;b<=(2*a-1);b++){
        if(b==1|| b==(2*a-1)  ){
            if(a==9 && b==(2*a-1)){
                process.stdout.write(" *");
                break;
            }
            process.stdout.write("*");
        }else if(a==9 && b<=8){
            process.stdout.write(" *");
        }else if(a!=9) {
            process.stdout.write(" ");
        }
    }
    console.log();
}


process.stdout.write("实心菱形\n")
for(var a=0;a<=9;a++){
        for(var n=0;n<=9-a;n++){
            process.stdout.write(" ");
        }
        for(var b=0;b<a;b++){
            process.stdout.write(" *");
        }
        console.log();
    }
    for(var a=0;a<=8;a++){
        for(var n=9;n>=8-a;n--){
            process.stdout.write(" ");
        }
        for(var b=8;b>a;b--){
            process.stdout.write(" *");
        }
        console.log();
    }

    process.stdout.write("空心菱形\n")
    for(var a=1;a<=9;a++){
        for(var n=1;n<=9-a;n++){
            process.stdout.write(" ");
        }
        for(var b=1;b<=(2*a-1);b++){
            if(b==1|| b==(2*a-1)  ){
                process.stdout.write("*");
            }else if(a==9 || a!=9) {
                process.stdout.write("1");
            }
        }
        console.log();
    }
    for(var a=2;a<=9;a++){
        for(var n=8;n>=10-a;n--){
            process.stdout.write(" ");
        }
        for(var b=17;b>=(2*a-1);b--){
            if(b==17|| b==(2*a-1)  ){
                process.stdout.write("*");
            }else if(a==8 || a!=8) {
                process.stdout.write("1");
            }
        }
        console.log();
    }
