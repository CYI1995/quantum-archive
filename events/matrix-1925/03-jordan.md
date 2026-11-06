---
layout: event
title: "约当：如何把新思想变为完整理论？"
year: "1925—1927"
person: "帕斯库尔·约当"
summary: "约当在1925年矩阵力学严格化、三人论文和1927年变换理论中的独立贡献。"
keyword: "矩阵力学、变分原理、变换理论"
stage: 2
record: "8.3"
lab: ""
permalink: "/events/matrix-1925/03-jordan.html"
---

> **矩阵力学形成史 · 3/8**　|　[返回专题目录]({{ '/events/matrix-1925.html' | relative_url }})

## 1. 为什么约当不能只是三人名单上的第三位？

帕斯库尔·约当（Pascual Jordan，1902—1980）年轻时已熟悉矩阵与数学物理工具。他在哥廷根与玻恩合作，把海森堡的新乘法思路推进为可推导、可推广的量子理论。历史研究表明，**1925年玻恩—约当论文的数学展开中约当具有非常实质性的工作贡献**，不宜将他仅写成“帮助玻恩计算的人”。

在1925年，问题不只是如何找到一条数学规则；还必须回答：位置和动量是否都能成为量子变量？怎样保证运动方程与能量守恒？不同的量子表述如何相互转换？

## 2. 约当与玻恩：从量子条件到矩阵动力学

在标准量子记号下，最关键的两条关系是

$$
[Q,P]=i\hbar I,
\qquad \frac{dA}{dt}=\frac{i}{\hbar}[H,A]
$$

（这里暂不考虑显含时间项）。它们为量子理论提供了统一语言：不必先写具体的轨道，也能通过代数形式控制时间演化。

约当与玻恩研究的内容，还包括哈密顿正则变量的矩阵形式、与经典变分方法的联系、能量守恒及跃迁频率关系等。需注意，现代数学上对于一般 $H(Q,P)$ 的“对 $Q,P$ 求导”存在**算符排序**问题，不可不加条件地照搬经典形式。

## 3. 为什么矩阵形式需要变换理论？

设 $A$ 是可观测量，在一个正交归一基底中由矩阵 $A$ 表示；换到另一组基底，矩阵变成

$$
\boxed{A'=U^\dagger A U},\qquad U^\dagger U=I.
$$

但测得的本征值不会改变：

$$
\operatorname{spec}(A')=\operatorname{spec}(A).
$$

如果量子态 $|\psi\rangle$ 同时写成 $|\psi'\rangle=U^\dagger|\psi\rangle$，则期望值不变：

$$
\langle\psi'|A'|\psi'\rangle
=\langle\psi|A|\psi\rangle.
$$

这是我们现在理解“表象等价”的基本方法。1926年末至1927年，约当与狄拉克**分别**发展出变换理论，把矩阵表述、波函数表述和统计解释联系起来；上述 $U^\dagger A U$ 是现代重述，历史上的数学记号并非完全如此。

## 4. 约当的概率振幅与干涉

设 $\{|b\rangle\}$ 是一组完整正交态，则

$$
I=\sum_b|b\rangle\langle b|.
$$

两个不同观测量的本征态之间，变换振幅满足

$$
\boxed{\langle a|c\rangle
=\sum_b\langle a|b\rangle\langle b|c\rangle.}
$$

测得 $a$ 的概率却是**先相加振幅再取模平方**：

$$
\Pr(a|c)=\left|\sum_b
\langle a|b\rangle\langle b|c\rangle\right|^2.
$$

以两条中间路径为例，令 $z_1,z_2$ 表示两条路径的振幅，则

$$
|z_1+z_2|^2=|z_1|^2+|z_2|^2
+2\operatorname{Re}(z_1z_2^*).
$$

交叉项解释了为什么量子概率不能简单地把各条路径的经典概率相加。**这与约当在1927年关注的量子概率和变换理论高度相关**，但这里用的是当代量子信息课程熟悉的符号。

## 5. 从单粒子到场

约当在1920年代后期还参与了辐射场的量子化探索，为场算符和量子场论的发展提供了先驱性工作。一个现代的单模示例是

$$
H_{\rm field}=\hbar\omega\left(a^\dagger a+\frac12\right),
\qquad [a,a^\dagger]=1.
$$

它说明，**同一种非对易代数既可以描述粒子运动，也能描述电磁场的量子模式**。但不能把成熟的量子场论全部回溯性地归属于约当一人。

**进一步阅读：** [MacTutor 约当传记](https://mathshistory.st-andrews.ac.uk/Biographies/Jordan_Pascual/)；[Duncan & Janssen，约当变换理论的历史研究](https://doi.org/10.1016/j.shpsb.2009.07.001)；[2024年关于约当概率思想的研究](https://doi.org/10.1140/epjh/s13129-024-00073-8)。
---

**专题导航：** [← 玻恩：如何识别矩阵与正则对易关系？]({{ '/events/matrix-1925/02-born.html' | relative_url }}) · [全部章节]({{ '/events/matrix-1925.html' | relative_url }}) · [三人论文：矩阵力学如何成为动力学？ →]({{ '/events/matrix-1925/04-three-man.html' | relative_url }})
