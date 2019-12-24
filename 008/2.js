function  Tx(){
    if(type== 1){
        if(hollow == 1){
            process.stdout.write("实心正方形\n")
                for(var a=1;a<=lengtha;a++){
                    for(var b=1;b<=lengthb;b++){
                        process.stdout.write(aa);
                    }
                    console.log();
                }
        }
        if(hollow== 0){
            process.stdout.write("空心正方形\n")
                for(var a=1;a<=lengtha;a++){
                    for(var b=1;b<=lengthb;b++){
                        if (a ==1 ||b ==1){
                            process.stdout.write(aa);
                        }else if( a==lengtha ||b  ==lengthb){
                            process.stdout.write(aa);
                        }else{
                            process.stdout.write("  ");
                        }
                    }
                    console.log();
                }
        }
    }
    if(type==2){
        if(hollow==1){
            process.stdout.write("实心梯形\n")
            for(var a=lengtha-5;a<=lengtha;a++){
                for(var b=1;b<=a;b++){
                    process.stdout.write(aa);
                }
                console.log();
            }
        }
        if(hollow ==0){
            process.stdout.write("空心梯形\n")
            for(var a=lengtha-5;a<=lengtha;a++){
                for(var b=1;b<=a;b++){
                    if (a == lengtha-5||b ==1){
                            process.stdout.write(aa);
                        }else if (a==lengtha || b== lengthb){
                            process.stdout.write( aa);
                        }else if (a==lengtha-4 &&  b==lengthb-4){
                            process.stdout.write(aa);
                        }else if(a==lengtha-3 && b==lengthb-3){
                            process.stdout.write(aa);
                        }else if(a==lengtha-2&& b==lengthb-2){
                            process.stdout.write(aa);
                        }else if(a==lengtha-1&& b==lengthb-1){
                            process.stdout.write(aa);
                        }else{
                            process.stdout.write("  ");
                        }
                }
                console.log();
            }
        }
    }
    if(type==3){
        if(hollow==1){
              process.stdout.write("实心等腰三角形\n")
            for(var a=0;a<=lengtha;a++){
                for(var n=0;n<=lengtha-a;n++){
                    process.stdout.write(" ");
                }
                for(var b=0;b<a;b++){
                    process.stdout.write(aa);
                    
                }
                console.log();
            }
        }
        if(hollow==0){
            process.stdout.write("空心等腰三角形\n")
            for(var a=1;a<=lengtha;a++){
                for(var n=1;n<=lengtha-a;n++){
                    process.stdout.write(" ");
                }
                for(var b=1;b<=(2*a-1);b++){
                    if(b==1|| b==(2*a-1)  ){
                        if(a==lengtha && b==(2*a-1)){
                            process.stdout.write(aa);
                            break;
                        }
                        process.stdout.write(a1);
                    }else if(a==lengtha && b<=lengtha-1){
                        process.stdout.write(aa);
                    }else if(a!=lengtha) {
                        process.stdout.write(" ");
                    }
                }
                console.log();
            }

        }
    }
    if(type==4){
        if(hollow==1){
            process.stdout.write("实心菱形\n")
            for(var a=0;a<=lengtha;a++){
                    for(var n=0;n<=lengtha-a;n++){
                        process.stdout.write(" ");
                    }
                    for(var b=0;b<a;b++){
                        process.stdout.write(aa);
                    }
                    console.log();
                }
                for(var a=0;a<=lengtha -1;a++){
                    for(var n=lengtha;n>=lengtha-1-a;n--){
                        process.stdout.write(" ");
                    }
                    for(var b=lengtha-1;b>a;b--){
                        process.stdout.write(aa);
                    }
                    console.log();
                }
        }
        if(hollow==0){
            process.stdout.write("空心菱形\n")
            for(var a=1;a<=lengtha;a++){
                for(var n=1;n<=lengtha-a;n++){
                    process.stdout.write(" ");
                }
                for(var b=1;b<=(2*a-1);b++){
                    if(b==1|| b==(2*a-1)  ){
                        process.stdout.write(a1);
                    }else if(a==lengtha|| a!=lengtha) {
                        process.stdout.write(" ");
                    }
                }
                console.log();
            }
            for(var a=2;a<=lengtha;a++){
                for(var n=lengtha-1;n>=lengtha+1-a;n--){
                    process.stdout.write(" ");
                }
                for(var b=2*lengtha-1;b>=(2*a-1);b--){
                    if(b==2*lengtha-1|| b==(2*a-1)  ){
                        process.stdout.write(a1);
                    }else if(a==lengtha-1 || a!=lengtha-1) {
                        process.stdout.write(" ");
                    }
                }
                console.log();
            }

        }
    }
    if(type==5){
        process.stdout.write("回字形\n")
        for(var a=1;a<=9;a++){
            for(var b=1;b<=9;b++){
                if (a ==1 ||b ==1){
                    process.stdout.write(aa);
                }else if( a==9 ||b  ==9){
                    process.stdout.write(aa);
                }else if((a==3 && (b!=2 && b!=8)) || ((a!=2 && a !=8) && b==3)){
                    process.stdout.write(aa);
                }else if((a==7 && (b!=2 && b!=8)) ||  ((a!=2 && a !=8) && b==7)){
                    process.stdout.write(aa);
                }else{
                process.stdout.write("  ");
                }
            }
                console.log();
        }
    }
}


var  type =4;
var hollow=0;
lengtha=15;
lengthb=12;
var aa=" *";
var a1="*";
Tx(type,hollow ,aa,a1);