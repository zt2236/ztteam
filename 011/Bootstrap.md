### Bootstrap

* 是一套基于HTML、CSS、JS技术的前段开元框架。
* bootstrap擅长响应式网页的开发，我们使用Bootstrap可以很简单的构造适用于移动端以及PC端的响应式网页

### 使用步骤

1. 下载bootstrap框架文件

2. 解压文件，得到三个文件夹，讲文件夹复制到项目的webContent中

3. 编写HTML0....

4. 先引入Jquery

   ><script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
5. 引入bootstrap.css

<script type="text/javascript" src="js/bootstrap.min.js"></script>

6. 引入css文件
 <link rel="stylesheet" type="text/css" href="css/bootstrap.css">

### 文本对其方式

class:

			* text-left		:内容居左
			* text-center   :内容居中
			* text-right      :内容居右

### 列表样式

```
class:


​		list-unstyled  :   取消前置的文字或图标，并取消左内边距

​		list-inline 		:	取消前置的文字或图标，并取消左内边距,且所有li设置为行内元素，横向排列
```



### 代码块样式

原样显示代码块		：	使用<pre>标签

bootstrap代码块		：	div制定class="well"

### 前景后景色

```
前景色（文字颜色）
class		:
					text-muted				 :			 柔和灰
					text-info					  :			  信息蓝
					text-primary			:			主要蓝
					text-success			 :			 成功绿
					text-warning			:			警告黄
					text-danger				 ：		  危险红
					
					
后景色（背景颜色）
		有些特殊的后景色，因为颜色较深，bootstrap为了让文字能正常显示，文字的颜色也会被修改
class	:
				bg-info			         :		   信息蓝
				bg-primary         :		  主要蓝
				bg-success			:		  成功绿
				bg-warning		   :		警告黄
				bg-danger			:		  危险红
```

### 表格样式

```
基本表格样式  class		:		table
条纹表格样式	class		:		table table-striped
边框表格样式 class		:		table table-bordered
鼠标移入激活表格样式	：	table table-hover
```

```
单独指定tr样式
		给tr添加class:
					active				:				激活样式，半透明灰色
					success			 ：				成功绿
					info				  :				
					warning			:				
					danger			 :				
					sr-only			  :				
```





​		