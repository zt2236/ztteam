钉钉网页版:https://im.dingtalk.com

#  day1

安装操作系统训练

> untu 系统下载：https://cn.ubuntu.com/download
>
> untu 系统下载：https://cn.ubuntu.com/download

 制作U盘启动盘：https//jingyan.baidu.com/article/5225f26bobb45fe6fa0908bc.html

 如何安装Ubuntu最新LTS桌面和服务器 https://baijiahao.baidu.com/s?id=1616490790245132419&wfr=s      pider&for=pc



untu 系统下载：https://cn.ubuntu.com/download

 制作U盘启动盘：https//jingyan.baidu.com/article/5225f26bobb45fe6fa0908bc.html

 如何安装Ubuntu最新LTS桌面和服务器https://baijiahao.baidu.com/s?id=1616490790245132419&wfr=s   pider&for=pc

2.typora

​          安装文档：               https://www.typora.jo/#linux

​          Markdown 语法文档：http://www.markdown.cn/

* ```html
  特殊字符自动转换
  &copy; © 
  &lt;         <
  ```

*  区块元素（任何数量的 = 和 - 都可以有效果。）

   ---     ===     

*  首行1-6个#代表对应的标题1-6阶

​                  区块引用可以嵌套（例如：引用内的引用），只要根据层次加上不同数量的 > ：

* 列表：

​                 无序列表使用星号、加号或是减号作为列表标记

​                  **请注意：**有一个已知的问题是 Markdown.pl 1.0.1 会忽略单引号包起来的链接 title。

* 图片

```md
              [Alt text](/path/to/img.jpg)

             ![Alt text](/path/to/img.jpg "Optional title")
             详细叙述如下：

              一个惊叹号 !
                    接着一个方括号，里面放上图片的替代文字
                    接着一个普通括号，里面放上图片的网址，最后还可以用引号包住并加上 选择性的 'title' 文字。
```

  

==================================================================================

# 003

Vim安装文档:https://blog.csdn.net/lixinghua666/article/details/82289809

​          Vim编辑器使用

  Linux常用命令
  1.查看目录结构命令
              ls(list)功能：列出目录内容

​              格式：ls[参数][文件或目录]

​             -a或--all    所有文件和目录。注意隐藏文件、特殊目录、以“.”开头的和以“..”开头的

​              -l    使用详细格式列表

​              -t    用文件和目录的更改时间排序

​              -r   反向排序

​              --help   在线帮助

常用：

​            ls   -l             列出当前目录下的文件信息（此命令很常用，简化的格式为 ll）

​            ls   -al           列出当前目录下的文件信息（包括隐藏文件，特殊目录）

​            ll    /home/     显示根目录下home目录下的内容

2.切换目录命令
           cd(change directory)功能：切换目录

​           语法：cd[目录]

常用：

​          cd   ~       当前用户主目录

​          cd   /        根目录

​          cd   -        上一次访问的目录

​          cd   ..       上一级目录

​          cd            当前用户主目录

 

​          touch   1.txt    在当前目录创建一个文件1.txt

clear：清除屏幕

 

 3.创建目录命令
       pwd:显示当前工作目录

​       mkdir: 创建目录

​       mkdir   a :当前目录下创建文件夹a

​       mkdir  /root/b  :在根目录下的root下创建目录b

​       mkdir  -pv  /root/c/e/d :在根目录下的root下创建目录结构c/e/d（一下创建多级目录）

​       -p：父目录不存在情况下先生成父目录

​        -v：显示命令执行过程中的详细信息

[注]：如果是文件开头是-，如果是文件夹开头是d且文件夹名为黑体(如下图所示)



 

4.文件浏览
[注]：按tab键可以自动补齐文件名

​       cat   文件名：显示指定文件的所有内容（用于文件内容少的情况）

​       more  文件名：分页显示文件内容，还支持直接跳转行等功能（用于文件内容多的情况）

​      Enter ：向下n行，需要定义。默认为1行

​      空格键：向下滚动一屏  或 Ctrl+F

​       B    返回上一屏  或Ctrl+B

​       q   退出more

​       less [参数]  文件名 ：分页显示文件内容，操作更详细

​      参数：-m 显示类似more命令的百分比        -N   显示每行的行号     两个参数可以结合用  -mN

​      空格键：前进一页 或 page down

​       b：后退一页   或 page up

​       d：前进半页

u：后退半页

​       Enter：前进一行 或 方向键向下

​        y：        后退一行  或 方向键向上

/字符串：向下搜索

​         ？        字符串：向上搜索

​       v：进入vim编辑器

​        tall命令：用来显示指定文件末尾内容，不指定文件时，作为输入信息进行处理。常用查看日志文件。

tail[必要参数][选择参数][文件]

​       -n<行数> 显示行数

-f 循环读取

5.文件操作
1.复制命令：cp

cp(copy)功能：复制文件或目录

语法：cp[参数]   [源文件或目录]    [目标文件或目录]

-r或--recursive   递归处理，将指定目录下的文件与子目录一并处理

 -b  覆盖文件时，可以将源文件做一个备份

例如：

复制文件：

cp   1.txt   2.txt

cp -b  1.txt  2.txt  ：如果覆盖文件时,可以将源文件做一个备份

cp  ./1.txt   ../   ：将当前目录下的1.txt复制到父级目录

cp  /root/1.txt   /bin/2.txt   ：将/root下的1.txt文件复制到根目录下的bin目录下的2.txt中

复制目录：(无论是单层目录还是多层目录都可以复制):

cp  -r  ./a  ./b

cp  -r  /root/a  /root/z

2.移动命令：mv

mv（move）功能：移动或更名现有的文件或目录

语法：mv [源文件或目录][目标文件或目录]

-f  或 --force   若目标文件或目录与现有的文件目录重复，则直接覆盖现有的文件或目录

剪切文件：mv    ./1.txt    /root    将当前目录下的1.txt文件 剪切到root目录下

重命名文件：mv  ./1.txt   ./2.txt      将当前目录下的1.txt文件重命名为2.txt

3.删除命令：rm

rm功能：删除文件或目录

语法：rm [-dfirv][--help][--version][文件或目录...]

-f 或 --force   强制删除文件或目录

-r 或 -R 或 --recursive   递归处理，将指定目录下的所有文件及子目录一并处理

强制删除文件：rm   -f   ./1.txt      

强制删除目录：rm   -rf   ./a      

 

4.查找命令：find

find功能：查找文件或目录

语法：find[目录...][参数]

-name  指定字符串作为寻找文件或目录的范本样式

例如：find  /root/  -name  'test*'   查找root目录下的文件开头是test的文件和文件夹，*是通配符 。注意字符串要用单引号引起来。

6.文档编辑
vi或vim命令

基本操作

1.vim  文件名   ：进入一般模式（不能输入）

2.按下 i 从一般模式，进入到插入模式

3.按下esc从插入模式，退出到一般模式

4.在一般模式下，输入:wq,退出编辑。

 

vi基本概念

取消操作：u       取消已经执行的操作

7.管道
linux提供管道符号 “|”  作用是“命令1”的输出内容，将作为“命令2”的输入内容。一般与grep命令一起使用

格式：命令1 | 命令2

1.grep命令

功能：用于过滤/搜索特定字符。可使用正则表达式 能多种命令配合使用。

格式：grep [option] pattern [file]       grep   参数  过滤条件   文件        （-i 或 --ignore-case        忽略字符大小写的差别）

例如：grep   -i   one  /root/1.txt      显示root目录下的1.txt文件中含有one字符的一行数据（忽略大小写）   

格式：其他命令 | grep  参数  过滤条件

例如：cat   /root/1.txt  |  grep  -i  one     在cat命令输出结果基础上，进行过滤

 

8.系统命令
1.ps命令

任务管理器：ps  -ef        查看当前所有进程（包括执行ps命令的那个时刻进程信息）

格式：ps [参数]

-e  此参数的效果和指定“A”参数相同，显示所有程序

-f  显示UID,PPIP,C与STIME栏位

例如：ps -ef  |  grep -i mysql     过滤出mysql这个进程

2.kill命令

kill功能：删除执行中的程序或工作

语法：kill[参数][程序]

-l<信息编号>       若不加<信息编号>选项，则-l参数会列出全部的信息名称。

kill  -9  ：表示强制终止

格式：kill    -9    pid

可先通过ps -ef 查找出所要删除的进程pid，再通过kill -9 pid 终止进程

3.ifconfig命令

功能：显示网络设备

格式：ping  主机名或ip地址    （按ctrl+c停止ping）

9.备份压缩：tar命令
tar功能：文件备份压缩

格式：tar      参数       压缩后的文件名      被压缩的文件名

           tar      参数       被解压的文件名      -C  指定目录            （如果省略 -C 指定目录，则解压到当前文件夹）

-c 建立一个压缩文件的参数指令（create）--压缩

-x 解开一个压缩文件的参数指令（extract）--解压

-z 是否需要用gzip压缩

-v 压缩的过程中显示文件（verbose）

-f 使用档名，在f之后要立即接档名（file）

常用解压参数组合：zxvf

常用压缩参数组合：zcvf

例如：

  tar  -zcvf  /root/1.tar   /root/a     将root目录下的a文件夹压缩成1.tar,放在root目录下。

  tar  -zxvf  ./1.tar        将当前目录下的1.tar文件解压缩

[注]：如果后缀名为.tar.gz的压缩包用-zxvf   如果后缀名为.tar的压缩包用-xvf

10.关机  重启
Linux centos 重启命令：reboot

Linux centos 关机命令：halt

 

11.文件权限：chmod命令
chmod功能：变更文件或目录的权限

语法：chmod [参数][<权限范围><符号><权限代号>]

-R  或 --recursive   递归处理，将指定目录下的所有文件及子目录一并处理

--权限范围的表示法如下：

u：User  即文件或目录的拥有者

g：Group 即文件或目录的所属群组

o：Other  除了文件或目录拥有者或所属群组之外，其他用户皆属于这个范围

a：All        即全部的用户，包含拥有者，所属群组及其他用户。

--符号

+ 添加权限

- 取消权限

-- 有关权限代号的部分

r：读取权限，数字代号为“4”

w：写入权限，数字代号为“2”

x：执行或切换权限，数字代号为“1”

- ：不具任何权限，数字代号为“0”

777 ：所有权限

[注]：3=1+2（wx）   5=4+1(rx)

 

mkdir xxx  创建xxx目录

例如：

chmod    u-rwx   xxx    取消xxx目录的用户“读写执行”权限

chmod    g-rwx   xxx    取消xxx目录的组“读写执行”权限

chmod    777      xxx    给xxx目录添加所有权限       

 

Linux 权限格式：<类型><用户><组><其他用户>



###  day04

>git创建库提交步骤：
>
>git 教程：               https://www.runoob.com/git/git-tutorial.html
>
>公钥和私钥理解：http://dy.163.com/v2/article/detail/E4MO5M5P0511L2E2.html
>
>​                                   https://blog.csdn.net/baudu_36327010/article/details/78659665
>
>jekyll 文档：          http://jekyllcn.com/
>
>jekyll模板 ：           http://jekyllthemes.org/

Git 创建仓库

>​         git init:                                              使用当前目录作为Git仓库  并初始化.
>
>​		 git add:  添加
>
>​		 git     status                                      命令用于查看项目的当前状态。
>
>​		git     commit -m "备注信息"			
>
>​		git      remote add origin  http://远程仓库连接地址
>
>​		git      push -u  origin   master      推送到远程服务器master分支下
>
>​		 git    clone:                                         克隆命令   
>
>#####                     git   diff  :                                           执行来查看执行git status的结果的详细信息。
>
> 		git    push  origin  test : test          远程库创建test 分支
>
>​		 git      merge    origin /分支文件     提取所有分支文件
>
>​		git      fetch   -a                                      获取所有远程分
>
>​		 git reset HEAD                                      命令用于取消已缓存的内容。

​    git   rm-缓存<文件>       删除文件	

> ​          要从Git中移除某个文件，就必须要从已跟踪文件清单中移除，然后提交。可以使用以下命令完成这项工作

​     可以递归归删除，即如果后面跟的是一个目录做为参数，逐步递归归删除整个目录中的所有子目录和文件：

```   git rm –r * 
 git rm –r * 
```

### git mv

>  git mv命令用于移动或重命名一个文件，
>
> ```
> git mv自述文件README.md
> ```

​	创建分支命令：

```
git branch
```

​	切换分支命令:	

```
git checkout 
```

​	合并分支命令:		     

```
git merge
```

列出分支基本命令：git branch

删除分支命令：git branch -d 

### 分支合并:git merge





​     
