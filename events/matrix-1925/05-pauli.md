---
layout: event
title: "泡利：为什么不求轨道也能求出氢能级？"
year: "1925—1926"
person: "沃尔夫冈·泡利"
summary: "从1925年不相容原理到1926年氢原子计算，认识泡利将原子谱问题转化为算符代数问题。"
keyword: "氢原子、守恒量、Runge–Lenz 矢量"
stage: 2
record: "8.5"
lab: ""
permalink: "/events/matrix-1925/05-pauli.html"
---

> **矩阵力学形成史 · 5/8**　|　[返回专题目录]({{ '/events/matrix-1925.html' | relative_url }})

## 1. 泡利有哪些不同层次的贡献？

沃尔夫冈·泡利（Wolfgang Pauli，1900—1958）在这一时期至少有两项必须区分的成果。

- **1925年不相容原理：** 为多电子原子中相同电子的状态占据和元素周期性的解释提供原则性约束。它是在旧量子论危机之中提出的，并不等同于1926年的氢原子计算。
- **1925年末完成、1926年发表的氢原子谱计算：** 运用新矩阵力学的代数方法，不求解电子的经典轨道，也不需要先求出氢的波函数，便能得到完整的非相对论库仑束缚能级。

因此不能把本专题的“泡利方法”误解成使用三种自旋 Pauli 矩阵 $\sigma_x,\sigma_y,\sigma_z$。氢谱计算的核心是**轨道角动量与另一个守恒矢量的代数**。

## 2. 为什么氢原子是关键检验？

1913年玻尔已经得到

$$
E_n\propto-\frac{1}{n^2}.
$$

但新的量子理论若不能独立算出这条规律，就难以证明它的普适价值。泡利以两体库仑哈密顿量为对象：

$$
H=\frac{\mathbf p^2}{2\mu}-\frac{\kappa}{r},
\quad \kappa=\frac{Ze^2}{4\pi\varepsilon_0},
\quad \mu=\frac{m_eM}{m_e+M}.
$$

在忽略自旋、相对论、辐射与外场修正时，旋转对称性带来守恒角动量

$$
\mathbf L=\mathbf r\times\mathbf p,
\qquad [H,L_i]=0.
$$

但 $\mathbf L$ 只能解释同一轨道角动量 $\ell$ 下的磁量子数简并，无法独自解释全部 $n^2$ 个状态。

## 3. 库仑势隐藏着更多信息

经典开普勒问题还有一个守恒的 Runge–Lenz 矢量，与轨道椭圆的指向有关。在量子情形，必须把它写成厄米算符：

$$
\boxed{
\mathbf A=\frac12(\mathbf p\times\mathbf L
-\mathbf L\times\mathbf p)
-\mu\kappa\frac{\mathbf r}{r}.}
$$

关键不是仅写出一个漂亮的矢量，而是证明以下关系：

$$
[H,A_i]=0,
$$

$$
[L_i,L_j]=i\hbar\epsilon_{ijk}L_k,
\quad
[L_i,A_j]=i\hbar\epsilon_{ijk}A_k,
$$

$$
\boxed{[A_i,A_j]=-2i\hbar\mu H\epsilon_{ijk}L_k.}
$$

由这些关系，再结合平方不变量，才有希望只用代数确定能级。

## 4. 泡利方法为何与后来所谓的 SO(4) 对称性有关？

在固定负能量 $E<0$ 的子空间中，令

$$
\mathbf M=\frac{\mathbf A}{\sqrt{-2\mu E}}.
$$

则 $\mathbf L$ 与 $\mathbf M$ 生成封闭的 $\mathfrak{so}(4)$ 代数。借用现代李代数语言，有

$$
\mathfrak{so}(4)\cong\mathfrak{su}(2)\oplus\mathfrak{su}(2).
$$

这能帮助解释氢原子的 $n^2$ 重简并。

**重要史实提醒：** 1926年泡利的原始工作是守恒量的算符代数解法；本专题后面使用的明确 $SO(4)$、两个 $SU(2)$、Casimir 表示论的完整流程，是对其思想的**现代教学性重建**，不是泡利论文的逐句翻译。

## 5. 为什么说这是矩阵力学的重大胜利？

玻尔1913年的成功在于提出能级规则；泡利1926年的成功在于展示**同一条能级规律可以从新力学的非对易代数推导出来**。原子光谱不再依赖另加的经典轨道量子条件。

下一页给出完整算符推导第一部分：Runge–Lenz 矢量为什么守恒，它的分量为何具有特定的对易关系。

**原始文献：** [Pauli (1926), *Über das Wasserstoffspektrum vom Standpunkt der neuen Quantenmechanik*](https://doi.org/10.1007/BF01450175)。
---

**专题导航：** [← 三人论文：矩阵力学如何成为动力学？]({{ '/events/matrix-1925/04-three-man.html' | relative_url }}) · [全部章节]({{ '/events/matrix-1925.html' | relative_url }}) · [泡利计算（一）：Runge–Lenz 矢量与对易代数 →]({{ '/events/matrix-1925/06-pauli-algebra.html' | relative_url }})
