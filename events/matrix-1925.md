---
layout: event
title: "矩阵力学的建立：海森堡、玻恩、约当与泡利"
year: "1925—1927"
person: "维尔纳·海森堡、马克斯·玻恩、帕斯库尔·约当、沃尔夫冈·泡利"
summary: "从实验谱线到非对易代数，再到氢原子能级：四位物理学家如何共同构建矩阵力学。"
keyword: "矩阵力学、跃迁振幅、对易关系、SO(4)、科学史"
stage: 2
order: 1925.1
record: 8
slug: "matrix-1925"
visual: "matrix"
lab: ""
permalink: "/events/matrix-1925.html"
prev_slug: "debroglie-1924"
prev_title: "物质波假说"
next_slug: "pauli-1925"
next_title: "泡利不相容原理"
---

## 为什么矩阵力学是四个人共同完成的？

> **核心问题：** 经典电子轨道无法系统地解释原子的跃迁频率和跃迁强度。如果不再以轨道为基本对象，物理学还可以怎样描述原子？

矩阵力学不是某位物理学家在同一天写出的成套公理。1925年夏，海森堡提出新型的**跃迁量及乘法规则**；秋季，玻恩辨认出其矩阵形式，与约当建立**正则对易关系**及系统动力学；三人随后合作完成著名的**三人论文**（1925年投稿、1926年出版）。泡利在1925年末将这一框架用于氢原子，并于1926年发表代数能谱计算，展示了它解决真实原子问题的能力。

**历史时间不能混淆：** 1925年的“泡利不相容原理”和1926年发表的“泡利氢原子能谱计算”是不同成果；基于现代 $\mathfrak{so}(4)\cong\mathfrak{su}(2)\oplus\mathfrak{su}(2)$ 的表述是教学性重建，不应当说泡利1926年已使用今天完整的表示论语言。

## 核心历史时间线

| 时间 | 研究者 | 关键事件 | 主要新认识 |
|---|---|---|---|
| 1925年7月 | 海森堡 | 完成“重新解释”论文 | 用两个态之间的跃迁量取代经典单轨道变量 |
| 1925年9月 | 玻恩、约当 | 提交《论量子力学》 | 识别矩阵、建立位置与动量对易关系 |
| 1925年11月 | 玻恩、海森堡、约当 | 提交“三人论文” | 建立推广后的量子动力学结构 |
| 1925年末—1926年 | 泡利 | 氢原子能级计算 | 利用库仑问题的额外守恒量求谱 |
| 1926年 | 玻恩 | 波函数的概率解释 | 振幅平方连接实验统计结果 |
| 1926年末—1927年 | 约当与狄拉克 | 变换理论 | 连接不同量子表象与概率振幅 |

## 八篇独立阅读页面

1. **[海森堡：为什么要重新解释可观测量？]({{ '/events/matrix-1925/01-heisenberg.html' | relative_url }})**——以光谱频率和跃迁振幅取代经典轨道，重建相乘规则：为什么新物理需要矩阵？
2. **[玻恩：如何识别矩阵与正则对易关系？]({{ '/events/matrix-1925/02-born.html' | relative_url }})**——玻恩如何认出矩阵、与约当建立正则对易关系，以及后来如何提出波函数的概率解释。
3. **[约当：如何把新思想变为完整理论？]({{ '/events/matrix-1925/03-jordan.html' | relative_url }})**——约当在1925年矩阵力学严格化、三人论文和1927年变换理论中的独立贡献。
4. **[三人论文：矩阵力学如何成为动力学？]({{ '/events/matrix-1925/04-three-man.html' | relative_url }})**——通过正则对易关系、运动方程及谐振子，理解三人论文如何建立可计算的量子动力学。
5. **[泡利：为什么不求轨道也能求出氢能级？]({{ '/events/matrix-1925/05-pauli.html' | relative_url }})**——从1925年不相容原理到1926年氢原子计算，认识泡利将原子谱问题转化为算符代数问题。
6. **[泡利计算（一）：Runge–Lenz 矢量与对易代数]({{ '/events/matrix-1925/06-pauli-algebra.html' | relative_url }})**——原稿所载 Runge–Lenz 算符完整推导之一：厄米排序、守恒性、对易代数与平方不变量。
7. **[泡利计算（二）：用 SO(4) 代数求能级与简并]({{ '/events/matrix-1925/07-pauli-spectrum.html' | relative_url }})**——原稿所载氢能级完整代数计算之二：束缚态 SO(4)、两组 SU(2)、能级与 n² 重简并。
8. **[从矩阵力学到现代量子理论：谁补完了什么？]({{ '/events/matrix-1925/08-afterward.html' | relative_url }})**——比较矩阵力学、波动力学、概率解释及变换理论，梳理1926至1927年的新理论统一。

## 阅读时要追问的四个问题

1. **海森堡：** 为什么仅凭谱线的频率与强度，就能猜测物理量的乘法规律？
2. **玻恩：** 为什么一个看似形式上的矩阵识别，会改变运动定律的数学基础？
3. **约当：** 从猜测新规则到系统的量子动力学，哪些证明与推广不可或缺？
4. **泡利：** 为什么氢原子的能谱可以来自守恒量的代数，而无须假设经典轨道？

### 数学总览

旧量子论的能级差条件：

$$
\omega_{nm}=\frac{E_n-E_m}{\hbar}.
$$

海森堡重新解释的乘法法则：

$$
(XY)_{nm}=\sum_k X_{nk}Y_{km}.
$$

玻恩—约当建立的正则对易关系：

$$
[X,P]=i\hbar I.
$$

泡利氢原子计算的现代结果：

$$
E_n=-\frac{\mu Z^2e^4}{2(4\pi\varepsilon_0)^2\hbar^2 n^2},
\qquad \dim\mathcal H_n=n^2.
$$

## 原始论文与科学史研究

- [Heisenberg, *Über quantentheoretische Umdeutung kinematischer und mechanischer Beziehungen* (1925)](https://doi.org/10.1007/BF01328377)
- [Born & Jordan, *Zur Quantenmechanik* (1925)](https://doi.org/10.1007/BF01328531)
- [Born, Heisenberg & Jordan, *Zur Quantenmechanik II* (1926；1925年提交)](https://doi.org/10.1007/BF01379806)
- [Pauli, *Über das Wasserstoffspektrum vom Standpunkt der neuen Quantenmechanik* (1926)](https://doi.org/10.1007/BF01450175)
- [Duncan & Janssen, *Constructing Quantum Mechanics*, Vol. 2 (2023)](https://doi.org/10.1093/oso/9780198883906.001.0001)
- [Physics Today, “Demythologizing quantum history” (2025)](https://physicstoday.aip.org/features/demythologizing-quantum-history)

**史料说明：** 全文用现代符号重述1925—1927年的发现，明确区分当事人的原始工作、共同论文和后世教科书常用的代数整理。原有氢原子推导分拆保留在第6、7页。
