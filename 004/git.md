## git训练

#### 一、Git常见的操作和命令

1. git init          在目录中创建新的Git仓库
2. git clone       使用 git clone 拷贝一个 Git 仓库到本地   格式：git clone +仓库

### 基本快照

* git add        命令可将文件添加到缓存   （git add + 文件）或者（git add .）（常用）

* git status    查看你在上次提交之后是否有修改   （常用）

* git diff          用来查看执行git status 的结果的详细信息

  ​				尚未缓存的改动：**git diff**

  ​				查看已缓存的改动： **git diff --cached**

  ​				查看已缓存的与未缓存的所有改动：**git diff HEAD**

  ​				显示摘要而非整个 diff：**git diff --stat**

* git commit      将缓存区内容添加到仓库中  (git commit -m "提交注释")  （常用）

* git reset HEAD   命令用于取消已经缓存的内容

* git rm     如果只是简单地从工作目录中手工删除文件，运行 **git status** 时就会在 **Changes not         staged for commit** 的提示

* git mv    命令用于移动或重命名一个文件、目录、软连接

  #### 分支管理命令
  
  ​	1.git branch     创建分支命令
  
  ​	2.git checkout    切换分支命令
  
  ​	3.git merge        合并分支命令
  
  #### 列出分支
  
  git branch   列出分支
  
  git branch   删除分支
  
  git merge    分支可并
  
  
  
  ### 合并冲突 ？
  
  
  
  
  
  
  
  ### Git工作区、暂存区和版本库
  
  #### 基本概念
  
  - **工作区：**就是你在电脑里能看到的目录。
  - **暂存区：**英文叫stage, 或index。一般存放在 ".git目录下" 下的index文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。
  - **版本库：**工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库。
  
  ![img](https://www.runoob.com/wp-content/uploads/2015/02/1352126739_7909.jpg)

### 三、理解和使用私钥和公钥

> http://dy.com/v2/article/detail/E4MO5M5P0511l2E2.html



### 四、远程仓库

```
1.git remote add 
```

