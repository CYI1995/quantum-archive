---
layout: event
title: "玻恩：如何识别矩阵与正则对易关系？"
year: "1925—1926"
person: "马克斯·玻恩"
summary: "玻恩如何认出矩阵、与约当建立正则对易关系，以及后来如何提出波函数的概率解释。"
keyword: "矩阵代数、量子条件、概率解释"
stage: 2
record: "8.2"
lab: ""
permalink: "/events/matrix-1925/02-born.html"
---

> **矩阵力学形成史 · 2/8**　|　[返回专题目录]({{ '/events/matrix-1925.html' | relative_url }})

## 1. 玻恩的第一步：认出海森堡的规则就是矩阵乘法

海森堡1925年论文中的 $X_{nm}$ 和卷积式相乘法，对数学基础扎实的玻恩来说具有熟悉的形式：这是矩阵运算。**这一辨认并非只是改写符号**。它使得新物理量可以通过线性代数、厄米矩阵、相似变换及谱理论的思路组织起来。

如果 $X$ 是表示位置的厄米算符，则

$$
X_{mn}=X_{nm}^{*}.
$$

若取能量本征态基底，哈密顿量是对角的：

$$
H_{nm}=E_n\delta_{nm}.
$$

进而

$$
[H,X]_{nm}=(E_n-E_m)X_{nm}.
$$

于是谱线频率与算符演化在同一个代数式中相遇：

$$
\frac{dX}{dt}=\frac{i}{\hbar}[H,X]
\quad\Rightarrow\quad
X_{nm}(t)=X_{nm}(0)e^{i(E_n-E_m)t/\hbar}.
$$

这是**现代海森堡绘景的教学性整理**，并非玻恩1925年的逐字定义。

## 2. 1925年9月：与约当建立正则对易关系

玻恩与约当的《论量子力学》（1925年9月提交）把位置 $Q$ 与动量 $P$ 都看成矩阵，并以新量子条件的等价形式建立

$$
\boxed{QP-PQ=i\hbar I.}
$$

原始论文常写成 $PQ-QP=h/(2\pi i)\,I$，与上式等价。两者一般不交换，这正是经典正则变量和量子正则变量的根本不同。

**为何这个关系极为重要？** 因为它不仅给出一条选择矩阵的约束，还让运动方程具有可计算的形式：

$$
\dot Q=\frac{i}{\hbar}[H,Q],\qquad
\dot P=\frac{i}{\hbar}[H,P].
$$

以标准势 $H=P^2/(2m)+V(Q)$ 为例：

$$
[H,Q]=\frac{1}{2m}[P^2,Q]
=-\frac{i\hbar}{m}P,
$$

因此

$$
\boxed{\dot Q=\frac{P}{m}.}
$$

对于 $\dot P$，若 $V(Q)$ 可以通过多项式或适当的函数演算定义，则

$$
[H,P]=[V(Q),P]=i\hbar V'(Q),
$$

所以

$$
\boxed{\dot P=-V'(Q).}
$$

这些是熟悉的哈密顿运动方程在量子体系中的对应。

## 3. 正则量子条件与光谱的定量联系

为使上述量子条件不只是形式公设，考虑一维哈密顿量

$$
H=\frac{P^2}{2m}+V(X),\qquad [X,P]=i\hbar I.
$$

先算

$$
[H,X]=-\frac{i\hbar}{m}P,
\qquad [X,[H,X]]=\frac{\hbar^2}{m}I.
$$

取能量本征态 $|n\rangle$，在中间插入完备关系 $\sum_k|k\rangle\langle k|=I$：

$$
\begin{aligned}
\langle n|[X,[H,X]]|n\rangle
&=2\sum_k(E_k-E_n)|X_{nk}|^2\\
&=\frac{\hbar^2}{m}.
\end{aligned}
$$

因此得到振子强度求和关系

$$
\boxed{\sum_k(E_k-E_n)|X_{nk}|^2
=\frac{\hbar^2}{2m}.}
$$

其历史背景与 Thomas–Reiche–Kuhn 求和规则有关。这里给出的是在现代标准正则关系下的简洁推导，不应当当作1925年论文的原样排版。

## 4. 一个重要数学限制：为什么矩阵必须是无限维的？

如果 $X,P$ 是有限 $N\times N$ 矩阵，则矩阵迹满足

$$
\operatorname{Tr}[X,P]=\operatorname{Tr}(XP)-\operatorname{Tr}(PX)=0.
$$

但若 $[X,P]=i\hbar I_N$，就有

$$
\operatorname{Tr}[X,P]=i\hbar N\ne0.
$$

矛盾。因此**严格的正则对易关系没有有限维矩阵表示**。这点提醒学生：书本上两能级的 Pauli 矩阵并不是一般粒子位置—动量对易关系的完整实现。

## 5. 玻恩在1926年进一步提出了什么？

1926年，在研究量子散射时，玻恩提出波函数振幅的统计解释，其现代形式是

$$
\rho(x)=|\psi(x)|^2,
$$

以及在归一化态中对投影测量的概率关系

$$
\Pr(a)=|\langle a|\psi\rangle|^2.
$$

这里第二个式子是后来的统一写法；玻恩1926年的历史论证首先置于碰撞、散射过程的研究中。**玻恩有两项不同但相互关联的重大贡献：1925年矩阵力学的构造，以及1926年概率解释。**1954年诺贝尔物理学奖尤其表彰后一项。

**原始文献：** [Born & Jordan (1925)](https://doi.org/10.1007/BF01328531)；[Born 1926年散射论文](https://doi.org/10.1007/BF01397477)；[诺贝尔奖官网](https://www.nobelprize.org/prizes/physics/1954/born/facts/)。
---

**专题导航：** [← 海森堡：为什么要重新解释可观测量？]({{ '/events/matrix-1925/01-heisenberg.html' | relative_url }}) · [全部章节]({{ '/events/matrix-1925.html' | relative_url }}) · [约当：如何把新思想变为完整理论？ →]({{ '/events/matrix-1925/03-jordan.html' | relative_url }})
