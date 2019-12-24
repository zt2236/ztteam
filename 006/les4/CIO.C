#include <stdio.h>
/*
stdin
stdout
stderr
 */
int main()
{
  // printf("plesse input the value a :\n")	
  fprintf(stdout,"plesse input the value a :\n");
  int a;
  //scanf("%d,&a");
  fscanf(stdin,"%d",&a);
  if(a<0){
    fprintf(stderr,"the value must >0 :\n");
    return 1;
  }else
	  
    return 0;
}

