### vim

1.含义：Vim是从vi发展出来的一个文本编辑器【代码补完、编译以及错误跳转】

2.安装vim

  - linux 默认自带vi，一般使用升级版vim

  - 第一次使用需要安装vim

    	  > 1 .sudo apt install vim.
        	  >
        	  > 2.vim a.txt

    出现下面界面则安装成功

![img](https://img-blog.csdn.net/20180901175206674?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGluZ2h1YTY2Ng==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

## vim的三种模式

	## 1.命令模式



​		作用：只能识别命令，不能操作字符

​		 常用命令：

*  i切换到输入模式，以输入字符

  | i, I | 进入输入模式(Insert mode)： i 为『从目前光标所在处输入』， I 为『在目前所在行的第一个非空格符处开始输入』。 (常用) |
  | ---- | ------------------------------------------------------------ |
  | a, A | 进入输入模式(Insert mode)： a 为『从目前光标所在的下一个字符处开始输入』， A 为『从光标所在行的最后一个字符处开始输入』。(常用) |
  | o, O | 进入输入模式(Insert mode)： 这是英文字母 o 的大小写。o 为『在目前光标所在的下一行处输入新的一行』； O 为在目前光标所在处的上一行输入新的一行！(常用) |
  | r, R | 进入取代模式(Replace mode)： r 只会取代光标所在的那一个字符一次；R会一直取代光标所在的文字，直到按下 ESC 为止；(常用) |

  ​    

* ：切换到底线命令模式，以在最低一行输入命令

## 常用命令

#### 移动光标的方法

1. cltrl +f   向下移动一页            cltrl  +  b        向上移动一页

​	2.   0  或者 home    移动到这一行最前面的字符处

	3.   H  屏幕最上方的那一行的第一个字符
 	4.   M  屏幕中央的那一行的第一个字符
 	5.   L   屏幕最下方的那一行的第一个字符
 	6.   G   移动到这个档案的最后一行
 	7.   gg   移动到这个档案的第一行
 	8.   n+Enter      n为数字，光标向下移动n行

#### 搜索替换

​	1./word       向光标之下寻找一个名称为 word 的字符串。例如要在档案内搜寻 vbird 这个字符串，就输入 /vbird 即可！ (常用)

​	2.:n1,n2s/word1/word2/g    n1和n2为数字，寻找n1 与n2 行之间寻找word1字符串，将被word2替换 

​	3.:1,$s/word1/word2/g    或     :%s/word1/word2/g   第一行到最后一行寻找word1被word2替代

​    4. :1,$s/word1/word2/gc    或     :%s/word1/word2/gc    第一行到最后一行寻找word1被word2替代,并且提示给用户确认（confirm）是否需要取代！

#### 删除、复制、粘贴

​	1.x（del）删除光标后一个字符   X （backspace）删除光标前一个字符

​	2.dd     删除游标所在的那一整行(常用)

​	3.ndd     n 为数字。删除光标所在的向下 n 行，例如 20dd 则是删除 20 行 (常用)

​	4.yy         复制游标所在的那一行(常用)

​	5.nyy       n 为数字。复制光标所在的向下 n 行，例如 20yy 则是复制 20 行(常用)

​	6.P,p         P粘贴在光标的上一行开始              p粘贴的内容在光标的下一行开始粘贴

​	7.u            复原前一个动作

 	8.Ctrl+r       重做上一个动作

​	9.        .            重复前一个动作  

	## 2.输入模式（插入模式）i    输入模式 



 常用按键：

   * shift+字符      	输入字符 

   * Enter 换行

   * back space 删除光标前一个字符

   * del  删除光标后一个字符

   * 方向键  文本中移动光标

   * **Insert**，切换光标为输入/替换模式，光标将变成竖线/下划线

   * **ESC**，退出输入模式，切换到命令模式

     

     ## 3.底线命令模式   在命令模式下按下:（英文冒号）就进入了底线命令模式

* q 退出程序

* w 保存文件

  #### 指令行的储存、离开
  
  :w  将编辑的数据写入硬盘档案中(常用)
  
  :q 离开 vi (常用)
  
  :wq    储存后离开
  
  # 对比参考
  
  
  
  ![img](https://img-blog.csdnimg.cn/20190528110143779.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDcwNjUxMg==,size_16,color_FFFFFF,t_70)

![img](https://www.runoob.com/wp-content/uploads/2014/07/vim-vi-workmodel.png)



