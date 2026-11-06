---
layout: event
title: "三人论文：矩阵力学如何成为动力学？"
year: "1925—1926"
person: "玻恩、海森堡、约当"
summary: "通过正则对易关系、运动方程及谐振子，理解三人论文如何建立可计算的量子动力学。"
keyword: "三人论文、运动方程、谐振子"
stage: 2
record: "8.4"
lab: ""
permalink: "/events/matrix-1925/04-three-man.html"
---

> **矩阵力学形成史 · 4/8**　|　[返回专题目录]({{ '/events/matrix-1925.html' | relative_url }})

## 1. 三人论文解决了海森堡论文还没有解决的问题

海森堡1925年7月的论文提出了跃迁振幅及其新乘法法则，却没有立即形成一套对任意系统都方便使用的理论。玻恩与约当在9月系统化一自由度的问题；接着玻恩、海森堡、约当共同完成《论量子力学 II》，**1925年11月提交、1926年发表**，史称 *Dreimännerarbeit*（三人论文）。

它的贡献是将量子条件、正则变量与动力学方程组织起来，并拓展到更多自由度。新理论从一个大胆的替换方案转变为有一般计算规则的体系。

## 2. 从正则对易到时间演化

在现代表述中，令系统的哈密顿量为 $H$，一个无显含时间的算符 $A$ 满足

$$
\boxed{\dot A=\frac{i}{\hbar}[H,A].}
$$

它与经典力学的泊松括号有形式上的对应

$$
\dot A=\{A,H\}_{\rm PB}
\quad\longrightarrow\quad
\dot A=\frac1{i\hbar}[A,H].
$$

注意不能把这个箭头理解成“任何经典函数均可无歧义量子化”：一般多项式的**算符排序**必须另作处理。在1925年同期，狄拉克也独立提出利用泊松括号理解量子对易的思路。

## 3. 为什么能量本征值能够决定谱线？

取 $H|n\rangle=E_n|n\rangle$，则

$$
[H,A]_{nm}=(E_n-E_m)A_{nm}.
$$

时间演化解为

$$
A_{nm}(t)=A_{nm}(0)e^{i(E_n-E_m)t/\hbar}.
$$

于是理论同时告诉我们：$E_n-E_m$ 决定光谱频率；适当跃迁偶极矩 $\langle m|\mathbf d|n\rangle$ 决定辐射强度的关键因子。现代电偶极近似下的自发辐射率（对自由空间、无简并取向等适当条件）为

$$
\Gamma_{n\to m}=
\frac{\omega_{nm}^{3}}{3\pi\varepsilon_0\hbar c^3}
|\langle m|\mathbf d|n\rangle|^2.
$$

这条自发辐射率表达式是现代量子电磁学结果，**不是1925年三人论文原有的公式**。它用来解释为什么光谱学的“频率与强度”都能变成量子理论中的可计算量。

## 4. 完整例子：不用微分方程求量子谐振子的能级

对一维谐振子，设

$$
H=\frac{P^2}{2m}+\frac12m\omega^2X^2,
\qquad [X,P]=i\hbar I.
$$

定义

$$
a=\sqrt{\frac{m\omega}{2\hbar}}X
+\frac{i}{\sqrt{2m\hbar\omega}}P,
\qquad
 a^\dagger=\sqrt{\frac{m\omega}{2\hbar}}X
-\frac{i}{\sqrt{2m\hbar\omega}}P.
$$

直接展开可得

$$
[a,a^\dagger]=1,
\qquad H=\hbar\omega\left(a^\dagger a+\frac12\right).
$$

令 $N=a^\dagger a$，则

$$
[N,a]=-a,\qquad [N,a^\dagger]=a^\dagger.
$$

因为 $N$ 是非负的，存在最低态 $a|0\rangle=0$；由反复作用 $a^\dagger$ 得到

$$
N|n\rangle=n|n\rangle,
\qquad
\boxed{E_n=\hbar\omega\left(n+\frac12\right)},
\qquad n=0,1,2,\ldots.
$$

跃迁位置矩阵元是

$$
\langle n|X|n+1\rangle
=\sqrt{\frac{\hbar}{2m\omega}}\sqrt{n+1}.
$$

所以谐振子的能级差都等于 $\hbar\omega$，而跃迁强度的振幅系数随 $n$ 改变。

**史学界限：** 以上是借用后来成熟的升降算符语言重建矩阵力学的计算威力；不能据此声称1925年三人论文已经以今天的 $a,a^\dagger$ 记号完成这套推导。

## 5. 这项理论为什么还需要泡利？

谐振子相对简单，氢原子却具有三维库仑势、复杂的角动量结构及简并。泡利对氢谱的成功处理，把新矩阵力学的可信度推进到原子光谱学最经典的问题。

**原始文献：** [Born–Heisenberg–Jordan, *Zur Quantenmechanik II* (1926)](https://doi.org/10.1007/BF01379806)。
---

**专题导航：** [← 约当：如何把新思想变为完整理论？]({{ '/events/matrix-1925/03-jordan.html' | relative_url }}) · [全部章节]({{ '/events/matrix-1925.html' | relative_url }}) · [泡利：为什么不求轨道也能求出氢能级？ →]({{ '/events/matrix-1925/05-pauli.html' | relative_url }})
