---
layout: event
title: "海森堡：为什么要重新解释可观测量？"
year: "1925"
person: "维尔纳·海森堡"
summary: "以光谱频率和跃迁振幅取代经典轨道，重建相乘规则：为什么新物理需要矩阵？"
keyword: "跃迁频率、谱线强度、非对易乘法"
stage: 2
record: "8.1"
lab: ""
permalink: "/events/matrix-1925/01-heisenberg.html"
---

> **矩阵力学形成史 · 1/8**　|　[返回专题目录]({{ '/events/matrix-1925.html' | relative_url }})

## 1. 海森堡面对的困难：谱线可以测量，轨道却难以确定

从玻尔到索末菲的旧量子论允许使用量子条件筛选经典轨道，对氢原子能级取得了惊人成功。但对多电子原子、反常塞曼效应、谱线强度和复杂运动，规则越来越依赖问题本身。它能够给出一些能量差，却很难提供一个普遍可靠的算法来计算辐射强度。

实验测量到的基本量是两能级间的谱线频率和跃迁强度：

$$
\omega_{nm}=\frac{E_n-E_m}{\hbar},\qquad
I_{n\to m}\ \text{与跃迁振幅有关}.
$$

电磁波的频率可以从光谱仪读出；对于某条谱线，强弱也可实验比较。但是旧量子论中沿椭圆轨道变化的 $x(t)$，并不是可直接逐时测定的原子内部运动。**1925年的突破不是宣称轨道不存在，而是决定暂时不把不可核验的轨道细节作为理论的基本输入。**

## 2. 经典傅里叶展开为什么是出发点？

周期运动可以写成

$$
x(t)=\sum_{\alpha\in\mathbb Z}x_\alpha(n)e^{i\alpha\omega(n)t}.
$$

这里的 $n$ 表示旧量子论中的轨道标签，$\alpha$ 是谐波指标。玻尔对应原理暗示：在量子数很大时，跃迁 $n\to n-\alpha$ 的辐射频率应当趋近于经典运动的第 $\alpha$ 个谐波。因此海森堡尝试对应

$$
\alpha\omega(n)\quad\longleftrightarrow\quad
\omega_{n,n-\alpha},
$$

$$
x_\alpha(n)\quad\longleftrightarrow\quad
X_{n,n-\alpha}.
$$

对单一原子而言，$X_{nm}$ 可以理解为与两个定态间辐射相关的复振幅。跃迁频率满足**里兹组合原理**：

$$
\omega_{nk}+\omega_{km}=\omega_{nm}.
$$

这个相加关系为“哪些项可以在乘法中合并”提供了准则。

## 3. 从傅里叶卷积到矩阵乘法

经典物理中，平方 $x^2(t)$ 的傅里叶系数是卷积：

$$
(x^2)_\beta(n)=\sum_\alpha x_\alpha(n)x_{\beta-\alpha}(n).
$$

在新的跃迁描述里，必须寻找具有**相同总频率** $\omega_{nm}$ 的两步跃迁 $n\to k\to m$。因为

$$
 e^{i\omega_{nk}t}e^{i\omega_{km}t}=e^{i\omega_{nm}t},
$$

得到

$$
\boxed{(X^2)_{nm}=\sum_kX_{nk}X_{km}.}
$$

一般两个物理量的乘法自然推广为

$$
\boxed{(XY)_{nm}=\sum_kX_{nk}Y_{km}.}
$$

这就是今天称为矩阵乘法的规则。请注意：**海森堡最先发现的是跃迁振幅的运算法则，而不是从现成的抽象矩阵理论出发写下全部量子公设。** 将其识别为矩阵，主要是玻恩随后提出的。

## 4. 新乘法为什么不可交换？

例如取两个 $2\times2$ 矩阵：

$$
X=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad
Y=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
$$

逐项计算得到

$$
XY=\begin{pmatrix}0&-1\\1&0\end{pmatrix},\qquad
YX=\begin{pmatrix}0&1\\-1&0\end{pmatrix},
$$

因此

$$
XY=-YX,\qquad [X,Y]=XY-YX\ne0.
$$

这里的 $2\times2$ 只是演示矩阵乘法，并非声称有限维矩阵可直接实现粒子完整的 $[x,p]=i\hbar I$。真正的正则位置与动量不能在有限维空间中满足该等式，因为对易子的迹总为零。

## 5. 海森堡在1925年的实际工作

海森堡在哥本哈根、哥廷根的研究背景中长期关注光谱强度和对应原理；1925年初夏，他重点处理非谐振子，夏季在黑尔戈兰岛继续计算，并于7月完成著名的“重新解释”（*Umdeutung*）论文。论文并不是只讲抽象代数，而是检验新乘法规则能否与运动方程、量子条件一起用来求非谐振子的量子频率与振幅。

一个教学用非谐振子模型是

$$
 m\ddot x+m\omega_0^2x+\lambda x^2=0.
$$

重新解释后，需用跃迁矩阵的乘积替代经典平方项：

$$
 m\ddot X+m\omega_0^2X+\lambda X^2=0,
\qquad (X^2)_{nm}=\sum_kX_{nk}X_{km}.
$$

这在现代看来只是“把数换成矩阵”，但历史上的关键问题是：**新型代数能否真的算出正确的谱线？**

## 6. 海森堡做了什么，还没有做什么？

海森堡提供了新物理量的组织方式、乘法规则和可行性的算例，却尚未给出今天教科书中那样规范的矩阵语言和完整正则算符理论。下一阶段，玻恩与约当把他的猜测转化为更系统的数学框架。

**推荐原文：** [Heisenberg, *Umdeutung* (1925)](https://doi.org/10.1007/BF01328377)；史学背景参见 [Heisenberg-Gesellschaft 的研究时间线](https://www.heisenberg-gesellschaft.de/3-the-development-of-quantum-mechanics-1925-ndash-1927.html)。
---

**专题导航：** [← 专题入口]({{ '/events/matrix-1925.html' | relative_url }}) · [全部章节]({{ '/events/matrix-1925.html' | relative_url }}) · [玻恩：如何识别矩阵与正则对易关系？ →]({{ '/events/matrix-1925/02-born.html' | relative_url }})
