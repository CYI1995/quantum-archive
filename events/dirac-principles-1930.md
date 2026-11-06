---
layout: event
title: "狄拉克《量子力学原理》：量子理论的统一语言"
year: "1930"
person: "保罗·狄拉克"
summary: "从叠加原理、态矢量和变换理论出发，解释狄拉克如何将矩阵力学、波动力学与量子测量统一为抽象的数学体系。"
keyword: "叠加原理、态矢量、表象变换、量子测量"
stage: 2
record: "8.9"
lab: ""
permalink: "/events/dirac-principles-1930.html"
---

> **量子力学形式体系 · 理论总结（1930）**　｜　[上一篇：矩阵力学、波动力学与变换理论]({{ '/events/matrix-1925/08-afterward.html' | relative_url }})　｜　[返回档案总览]({{ '/' | relative_url }})

## 一、历史问题：为什么已经有矩阵力学和波动力学，还需要一本《原理》？

1925 年，海森堡、玻恩和约当建立矩阵力学；1926 年，薛定谔发展波动力学，玻恩提出波函数的概率解释；1926—1927 年，狄拉克和约当各自发展变换理论。这些成果在可计算的物理预言上逐步汇合，却留下一个表述上的根本问题：**量子态究竟是一个波函数、一列矩阵元，还是某个不依赖表示的数学对象？**

1930 年，保罗·狄拉克（P. A. M. Dirac）出版 *The Principles of Quantum Mechanics*（《量子力学原理》）。他在第一版序言中明确区分了两条路径：直接操作与表象无关的抽象对象的「符号方法」（symbolic method），以及先选定坐标、再用矩阵或函数计算的「表象方法」（method of representations）。狄拉克将前者置于理论的逻辑起点。

全书因此并不以求解一个具体原子的薛定谔方程开始，而从**叠加原理与光子偏振**出发，进而讨论态、可观测量、变换函数、量子条件与运动方程。

**历史与记号说明。** 本文采用今天通行的希尔伯特空间、bra–ket、谱测度和自伴算符记号，*重建*这本书的核心数学思想；这些公式不是逐字转录 1930 年第一版。尤其不能把后来的现代谱定理表述、密度算符语言及通行的完整 bra–ket 记号全部归功于 1930 年第一版。狄拉克的符号方法在 1930 年已经形成，熟悉的 bra–ket 记号则在此后的版本中得到进一步整理和普及；冯·诺伊曼等人又对无限维理论作了数学严格化。

## 二、第一原则：叠加原理要求怎样的状态空间？

### 2.1 复希尔伯特空间与物理纯态

用现代数学语言，一个封闭量子系统的纯态由复希尔伯特空间 $\mathcal H$ 中的非零向量表示。设内积对第二个变量线性，对第一个变量共轭线性，则

$$
\langle\phi|\alpha\psi+\beta\chi\rangle
=\alpha\langle\phi|\psi\rangle
+\beta\langle\phi|\chi\rangle,
\qquad
\langle\psi|\phi\rangle
=\langle\phi|\psi\rangle^*.
$$

叠加原理的数学内容是：如果 $|\psi_1\rangle,|\psi_2\rangle\in\mathcal H$，那么任意复线性组合

$$
|\widetilde\psi\rangle
=\alpha|\psi_1\rangle+\beta|\psi_2\rangle
$$

仍属于同一向量空间；只要 $|\widetilde\psi\rangle\ne0$，便可归一化为

$$
|\psi\rangle
=\frac{|\widetilde\psi\rangle}
{\sqrt{\langle\widetilde\psi|\widetilde\psi\rangle}}.
$$

要注意：若 $|\psi_1\rangle$ 与 $|\psi_2\rangle$ 不正交，则一般**不能**直接要求 $|\alpha|^2+|\beta|^2=1$，因为交叉项会影响范数：

$$
\begin{aligned}
\|\alpha\psi_1+\beta\psi_2\|^2
={}&|\alpha|^2\|\psi_1\|^2
+|\beta|^2\|\psi_2\|^2\\
&+2\operatorname{Re}\!\left(
\alpha^*\beta\langle\psi_1|\psi_2\rangle
\right).
\end{aligned}
$$

只有当两态正交且均已归一化时，上式才化为 $|\alpha|^2+|\beta|^2$。

进一步，$|\psi\rangle$ 与 $e^{i\theta}|\psi\rangle$ 给出相同的所有概率预测。因此，严格说来，一个**物理纯态**对应一条一维复子空间（射线），即

$$
[\psi]=\{c|\psi\rangle:c\in\mathbb C,\ c\ne0\},
$$

或者等价地，对应秩一正交投影

$$
\rho_\psi=|\psi\rangle\langle\psi|,
\qquad \langle\psi|\psi\rangle=1.
$$

对于有限维 $\mathcal H\cong\mathbb C^d$，归一化纯态的空间在除去整体相位后是复射影空间 $\mathbb{CP}^{d-1}$。这是现代的几何语言，并非声称狄拉克在 1930 年使用了这一术语。

### 2.2 以内积表示概率幅

若 $\{|e_j\rangle\}_{j=1}^d$ 是一组标准正交基，完备性给出

$$
I=\sum_{j=1}^d|e_j\rangle\langle e_j|,
\qquad
|\psi\rangle=\sum_{j=1}^d c_j|e_j\rangle,
\qquad
c_j=\langle e_j|\psi\rangle.
$$

系数 $c_j$ 称为概率幅，而在该正交基对应的理想测量中，结果 $j$ 的概率是

$$
\Pr(j)=|c_j|^2,
\qquad
\sum_{j=1}^d|c_j|^2=1.
$$

这里的复数 $c_j$ 携带相位信息。一般不能只保留概率 $|c_j|^2$，因为不同表象中的干涉现象依赖于相对相位。

## 三、从光子偏振出发：叠加为何不同于经典混合？

狄拉克选择光子偏振作为第一章的物理起点。一个理想化的单光子线偏振自由度可用 $\mathcal H=\mathbb C^2$ 表示。取水平、竖直偏振态为正交基：

$$
|H\rangle=\begin{pmatrix}1\\0\end{pmatrix},
\qquad
|V\rangle=\begin{pmatrix}0\\1\end{pmatrix}.
$$

与水平成 $45^\circ$ 的对角偏振态为

$$
|D\rangle=\frac{|H\rangle+|V\rangle}{\sqrt2},
\qquad
|A\rangle=\frac{|H\rangle-|V\rangle}{\sqrt2}.
$$

两态满足 $\langle D|A\rangle=0$。如果对 $|D\rangle$ 进行水平／竖直偏振测量，则

$$
\Pr(H|D)=|\langle H|D\rangle|^2=\frac12,
\qquad
\Pr(V|D)=\frac12.
$$

但是，**纯态叠加不等于统计混合**。这一点可在密度算符层面精确验证。对角偏振纯态对应

$$
\rho_D=|D\rangle\langle D|
=\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix};
$$

各占一半的水平、竖直偏振混合态对应

$$
\rho_{\mathrm{mix}}
=\frac12|H\rangle\langle H|
+\frac12|V\rangle\langle V|
=\frac12\begin{pmatrix}1&0\\0&1\end{pmatrix}.
$$

虽然在 $H/V$ 基下，两者的测量分布相同，但使用 $D/A$ 基测量时，

$$
\operatorname{Tr}(\rho_D|D\rangle\langle D|)=1,
\qquad
\operatorname{Tr}(\rho_{\mathrm{mix}}|D\rangle\langle D|)=\frac12.
$$

差别来自 $\rho_D$ 的非对角元；它们记录了 $H$ 与 $V$ 两个振幅之间的相干性。

一个直观的推论是三偏振片实验。设入射光已处于 $|V\rangle$，依次经过竖直、$45^\circ$、水平三片理想偏振片。相对于初始入射强度，依次透射的概率相乘得到

$$
\Pr(\text{最终透射})
=1\times|\langle D|V\rangle|^2
\times|\langle H|D\rangle|^2
=\frac14.
$$

如果只保留首尾相互正交的两片，透射概率则是 $|\langle H|V\rangle|^2=0$。中间偏振片的加入改变了后续状态与最终测量概率。

## 四、可观测量、谱分解和测量：究竟测到了什么？

### 4.1 有限维情形：厄米矩阵的谱定理

对于有限维系统，可观测量由厄米矩阵 $A=A^\dagger$ 表示。有限维谱定理保证存在互不相同的实数本征值 $a$ 及其对应的正交投影 $P_a$，满足

$$
A=\sum_{a\in\operatorname{spec}(A)}aP_a,
\qquad
P_aP_b=\delta_{ab}P_a,
\qquad
\sum_aP_a=I.
$$

$P_a$ 的秩可以大于 $1$，因此这里不假定非简并谱。

测量处于归一化纯态 $|\psi\rangle$ 的系统时，取得本征值 $a$ 的概率为

$$
\boxed{\Pr(A=a)=\langle\psi|P_a|\psi\rangle
=\|P_a|\psi\rangle\|^2.}
$$

若是一般密度算符 $\rho\ge0$、$\operatorname{Tr}\rho=1$，同一个规则写成

$$
\Pr(A=a)=\operatorname{Tr}(\rho P_a).
$$

由谱分解，期望值和方差满足

$$
\langle A\rangle_\rho=\operatorname{Tr}(\rho A)
=\sum_a a\,\operatorname{Tr}(\rho P_a),
$$

$$
(\Delta_\rho A)^2
=\operatorname{Tr}(\rho A^2)
-\big[\operatorname{Tr}(\rho A)\big]^2.
$$

**测量后的状态需要附加说明。** 若采用理想的、重复测量结果不变的 Lüders 投影测量，并且已选出结果 $a$，则在概率非零时

$$
\rho\longmapsto\rho_a
=\frac{P_a\rho P_a}{\operatorname{Tr}(\rho P_a)}.
$$

对于非简并纯态测量，这变为相应本征态。对于简并本征值，**仅有概率公式不能唯一决定测量仪器如何更新状态**；上述公式是一种明确的理想测量模型，不能当作所有测量过程的普适定律。

### 4.2 无限维情形：必须区分「对称」与「自伴」

无限维希尔伯特空间中的位置、动量与哈密顿算符往往无界。无界算符不可能在整个希尔伯特空间上处处定义并同时保持通常所需的良好性质，所以必须指定其**稠密定义域** $D(A)\subset\mathcal H$。

对称性（Hermitian/symmetric）要求

$$
\langle\phi|A\psi\rangle
=\langle A\phi|\psi\rangle,
\qquad \phi,\psi\in D(A).
$$

严格的**自伴性**还要求 $A=A^*$，包括 $D(A)=D(A^*)$；对无界算符而言，仅有上述对称性不足以保证谱定理的完整适用和幺正时间演化。

现代谱定理指出，对自伴算符 $A$，存在定义在实数 Borel 集上的投影值测度 $P_A(\Delta)$，使得

$$
A=\int_{\mathbb R}\lambda\,dP_A(\lambda).
$$

这一积分按谱定理的意义理解，等式作用于 $A$ 的定义域。测量值落在可测集合 $\Delta\subset\mathbb R$ 中的概率是

$$
\boxed{\Pr(A\in\Delta)=\langle\psi|P_A(\Delta)|\psi\rangle.}
$$

对于连续位置测量，单个点通常具有零概率，而区间概率才是有意义的量。若 $\psi(x)$ 是归一化位置波函数，则

$$
\Pr(x\in[a,b])=\int_a^b|\psi(x)|^2\,dx.
$$

有限维的 $\sum_a aP_a$ 是以上谱积分在离散有限谱时的特例。

## 五、表象变换：为什么波函数和矩阵描述的是同一个系统？

### 5.1 两组正交基之间的幺正变换

设 $\mathcal H\cong\mathbb C^d$，有两组标准正交基 $\{|e_j\rangle\}$ 与 $\{|f_\alpha\rangle\}$。定义变换矩阵

$$
U_{j\alpha}=\langle e_j|f_\alpha\rangle.
$$

利用两组基的完备性，可以逐项计算

$$
\begin{aligned}
(U^\dagger U)_{\alpha\beta}
&=\sum_j\langle f_\alpha|e_j\rangle
\langle e_j|f_\beta\rangle\\
&=\langle f_\alpha|f_\beta\rangle
=\delta_{\alpha\beta}.
\end{aligned}
$$

故 $U$ 为幺正矩阵：$U^\dagger U=UU^\dagger=I$。

同一抽象态在两组基下的坐标分别记作 $c^{(e)}$、$c^{(f)}$，则

$$
c^{(e)}_j=\langle e_j|\psi\rangle,
\qquad
c^{(f)}_\alpha=\langle f_\alpha|\psi\rangle,
\qquad
\boxed{c^{(f)}=U^\dagger c^{(e)}.}
$$

同一个可观测量 $A$ 的两种矩阵表示为

$$
A^{(e)}_{jk}=\langle e_j|A|e_k\rangle,
\qquad
A^{(f)}_{\alpha\beta}
=\langle f_\alpha|A|f_\beta\rangle.
$$

在两次插入恒等算符之后，得到

$$
\boxed{A^{(f)}=U^\dagger A^{(e)}U.}
$$

这就是表象变换的核心公式。在不同坐标下，矩阵元发生变化，但期望值保持不变：

$$
(c^{(f)})^\dagger A^{(f)}c^{(f)}
=(c^{(e)})^\dagger A^{(e)}c^{(e)}.
$$

注意这里的 $U$ 是**被动换基**矩阵。若真的对物理态施加一个主动幺正操作 $V$，则态变为 $V|\psi\rangle$；如同时对可观测量作 $A\mapsto VAV^\dagger$，同样保持期望值不变。两种操作不能在符号上混淆。

### 5.2 用能量本征态连接两种形式

设 $H$ 在所考虑的离散谱子空间中有标准正交本征基 $\{|n\rangle\}$，满足

$$
H|n\rangle=E_n|n\rangle,
\qquad \langle m|n\rangle=\delta_{mn}.
$$

在此能量表象中，

$$
H_{mn}=\langle m|H|n\rangle=E_n\delta_{mn}.
$$

任意态及算符的展开式为

$$
|\psi\rangle=\sum_n c_n|n\rangle,
\qquad
c_n=\langle n|\psi\rangle,
\qquad
A_{mn}=\langle m|A|n\rangle.
$$

若哈密顿量与时间无关，则

$$
c_n(t)=e^{-iE_nt/\hbar}c_n(0).
$$

另一方面，海森堡绘景中一个不显含时间的算符的矩阵元为

$$
(A_H(t))_{mn}
=e^{i(E_m-E_n)t/\hbar}A_{mn}(0).
$$

于是矩阵力学中出现的跃迁频率

$$
\omega_{mn}=\frac{E_m-E_n}{\hbar}
$$

自然表现为矩阵元的时间振荡。这解释了为何矩阵力学与波动力学虽然选用不同的计算对象，却来自同一算符动力学。上述离散求和在存在连续谱时须改用谱积分，不能直接把广义本征态当作可数的正规化基。

## 六、位置和动量表象：薛定谔方程怎样从抽象动力学出现？

### 6.1 位置波函数与广义本征矢

以一维无自旋粒子为例，取

$$
\mathcal H=L^2(\mathbb R,dx),
\qquad
\int_{\mathbb R}|\psi(x)|^2\,dx=1.
$$

在现代 Dirac 记号中，形式上写作

$$
\psi(x)=\langle x|\psi\rangle,
\qquad
\langle x|x'\rangle=\delta(x-x'),
\qquad
I=\int_{\mathbb R}|x\rangle\langle x|\,dx.
$$

**严格性说明：** $|x\rangle$ 不是 $L^2(\mathbb R)$ 中的可归一化向量，$\delta(x-x')$ 是分布。上述三个式子可以作为广义本征矢的简写；其严谨意义由位置算符的谱测度给出，也可在 Schwartz 空间的 Gelfand 三重态

$$
\mathcal S(\mathbb R)\subset L^2(\mathbb R)
\subset\mathcal S'(\mathbb R)
$$

中解释。

在合适的共同稠密定义域（例如 $\mathcal S(\mathbb R)$）上，位置与动量算符分别作用为

$$
(\hat x\psi)(x)=x\psi(x),
\qquad
(\hat p\psi)(x)=-i\hbar\frac{d\psi}{dx}(x).
$$

因此，对哈密顿算符

$$
H=\frac{\hat p^2}{2m}+V(\hat x)
$$

而言，只要 $V$ 的条件与所选定义域保证 $H$ 存在恰当的自伴实现，抽象薛定谔方程

$$
i\hbar\frac{d}{dt}|\psi(t)\rangle
=H|\psi(t)\rangle
$$

在位置表象中便成为

$$
\boxed{
 i\hbar\frac{\partial\psi(x,t)}{\partial t}
 =-\frac{\hbar^2}{2m}\frac{\partial^2\psi(x,t)}{\partial x^2}
 +V(x)\psi(x,t).
}
$$

可见波函数是抽象态在位置表象中的坐标，而微分算符是哈密顿量在该表象中的具体表示。

### 6.2 动量波函数与傅里叶变换

采用 $\langle x|p\rangle=(2\pi\hbar)^{-1/2}e^{ipx/\hbar}$ 的约定，有

$$
\widetilde\psi(p)=\langle p|\psi\rangle
=\frac{1}{\sqrt{2\pi\hbar}}
\int_{\mathbb R}e^{-ipx/\hbar}\psi(x)\,dx,
$$

$$
\psi(x)=\frac{1}{\sqrt{2\pi\hbar}}
\int_{\mathbb R}e^{ipx/\hbar}\widetilde\psi(p)\,dp.
$$

对于 Schwartz 函数，公式可按普通积分理解；对于任意 $L^2$ 波函数，则按 Plancherel 定理将傅里叶变换延拓为幺正算符。特别地，

$$
\int_{\mathbb R}|\psi(x)|^2dx
=\int_{\mathbb R}|\widetilde\psi(p)|^2dp.
$$

这里的正交归一和完备关系同样以分布或谱理论意义成立：

$$
\langle p|p'\rangle=\delta(p-p'),
\qquad
I=\int_{\mathbb R}|p\rangle\langle p|\,dp.
$$

所以**位置波函数和动量波函数是同一个态的两种表象**；它们的联系本质上也是变换理论。

## 七、对易关系：从经典泊松括号到量子不确定性

### 7.1 基本正则对易关系及其适用范围

在 $\mathcal S(\mathbb R)$ 上直接计算可得

$$
\begin{aligned}
([\hat x,\hat p]\psi)(x)
&=x(-i\hbar\psi'(x))
+i\hbar\frac{d}{dx}\big(x\psi(x)\big)\\
&=i\hbar\psi(x).
\end{aligned}
$$

故在这一共同稠密定义域上，

$$
\boxed{[\hat x,\hat p]=i\hbar I.}
$$

这一关系不能在有限维矩阵空间中精确实现。假设 $X,P$ 是 $d\times d$ 矩阵且 $[X,P]=i\hbar I_d$，取迹后便得到

$$
0=\operatorname{Tr}(XP-PX)
=i\hbar\operatorname{Tr}(I_d)=i\hbar d,
$$

在 $\hbar\ne0$、$d\ge1$ 时矛盾。故连续位置和动量的精确正则对易关系必然涉及无限维表示以及算符定义域问题。

在经典力学中，正则坐标满足 $\{x,p\}_{\mathrm{PB}}=1$。狄拉克推动的量子化思想是让合适物理量的对易子在经典极限下对应泊松括号：

$$
\frac{1}{i\hbar}[\widehat f,\widehat g]
\longrightarrow\widehat{\{f,g\}_{\mathrm{PB}}}
\qquad(\hbar\to0),
$$

这里的箭头表示在指定量子化方案与合适的渐近意义下成立；**它不是对任意两个经典函数都精确成立的算符恒等式**。对一般函数，算符排序和高阶量子修正不可忽略。

### 7.2 由柯西–施瓦茨不等式推导不确定性关系

设 $A,B$ 为自伴算符，归一化态 $|\psi\rangle$ 属于使以下表达有意义的共同定义域。记

$$
\delta A=A-\langle A\rangle_\psi I,
\qquad
\delta B=B-\langle B\rangle_\psi I,
$$

以及 $|u\rangle=\delta A|\psi\rangle$、$|v\rangle=\delta B|\psi\rangle$。柯西–施瓦茨不等式给出

$$
(\Delta_\psi A)^2(\Delta_\psi B)^2
=\|u\|^2\|v\|^2
\ge|\langle u|v\rangle|^2
\ge|\operatorname{Im}\langle u|v\rangle|^2.
$$

当 $AB$ 和 $BA$ 的期望值均定义良好时，

$$
2i\operatorname{Im}\langle u|v\rangle
=\langle\psi|[A,B]|\psi\rangle.
$$

因此得到 Robertson 不确定性关系

$$
\boxed{
\Delta_\psi A\,\Delta_\psi B
\ge\frac12\left|\langle\psi|[A,B]|\psi\rangle\right|.
}
$$

代入 $[\hat x,\hat p]=i\hbar I$，便有

$$
\boxed{\Delta x\,\Delta p\ge\frac\hbar2.}
$$

这是一条关于同一量子态中两个可观测量的统计标准差的定理；它不应直接等同于任何具体测量设备的「测量扰动等于多少」的经验公式。

## 八、运动方程：薛定谔绘景与海森堡绘景为何等价？

### 8.1 时间演化算符

设 $H$ 是与时间无关的自伴哈密顿算符。Stone 定理保证

$$
U(t)=e^{-itH/\hbar}
$$

形成强连续的单参数幺正群，满足

$$
U(t+s)=U(t)U(s),
\qquad U(t)^\dagger U(t)=I.
$$

对属于 $D(H)$ 的初态，其演化满足强意义下的薛定谔方程。对一般 $L^2$ 初态，仍可用 $U(t)$ 定义幺正演化，但不必处处具有强时间导数。

### 8.2 从薛定谔绘景变到海森堡绘景

在薛定谔绘景中，

$$
|\psi_S(t)\rangle=U(t)|\psi(0)\rangle,
\qquad A_S=A
$$

（此处假设 $A$ 无显含时间依赖）。在海森堡绘景中，将态固定、把时间依赖移到算符：

$$
|\psi_H\rangle=|\psi(0)\rangle,
\qquad
A_H(t)=U(t)^\dagger A_SU(t).
$$

故两种绘景的期望值完全一致：

$$
\begin{aligned}
\langle\psi_S(t)|A_S|\psi_S(t)\rangle
&=\langle\psi(0)|U(t)^\dagger A_SU(t)|\psi(0)\rangle\\
&=\langle\psi_H|A_H(t)|\psi_H\rangle.
\end{aligned}
$$

在 $A_H(t)$ 可按所选拓扑求导、并且下列对易子在相应定义域上有意义的条件下（即使 $A$ 有界，也不能自动保证强可微），求导得

$$
\boxed{
\frac{dA_H}{dt}
=\frac{i}{\hbar}[H_H,A_H]
+U^\dagger\left(\frac{\partial A_S}{\partial t}\right)U.
}
$$

其中 $H_H=U^\dagger HU$。这一恒等式说明，薛定谔绘景中「态演化」和海森堡绘景中「算符演化」只是同一动力学的两种表述。

## 九、相同粒子的对称性：从抽象态空间走向多体量子力学

狄拉克在书中还系统处理了相同粒子。现代语言中，$N$ 个具有单粒子空间 $\mathcal H$ 的系统先形成张量积空间 $\mathcal H^{\otimes N}$。对置换 $\pi\in S_N$，定义置换算符

$$
V_\pi\big(|\psi_1\rangle\otimes\cdots\otimes|\psi_N\rangle\big)
=|\psi_{\pi^{-1}(1)}\rangle\otimes\cdots
\otimes|\psi_{\pi^{-1}(N)}\rangle.
$$

它们满足 $V_\pi V_\sigma=V_{\pi\sigma}$，并且是幺正算符。全对称与全反对称投影分别为

$$
P_+=\frac1{N!}\sum_{\pi\in S_N}V_\pi,
\qquad
P_-=\frac1{N!}\sum_{\pi\in S_N}
\operatorname{sgn}(\pi)V_\pi.
$$

对任意 $\sigma\in S_N$，

$$
V_\sigma P_+=P_+,
\qquad
V_\sigma P_-=\operatorname{sgn}(\sigma)P_-.
$$

因此 $P_+\mathcal H^{\otimes N}$ 是玻色对称子空间，$P_-\mathcal H^{\otimes N}$ 是费米反对称子空间。在现代物理中，基本粒子的自旋与统计之间的联系还需依靠相对论性量子场论的自旋–统计定理，**不能仅从上述投影定义推出**。

这也说明抽象空间与算符方法在单粒子量子力学之外的作用：多体问题可以先由张量积、群作用和不变子空间组织，再选取具体波函数或矩阵表象求解。

## 十、这本书究竟完成了什么，又有哪些现代补充？

现在可以把全书的理论逻辑压缩为以下链条：

1. **叠加原理**赋予状态描述以复线性结构，允许不同概率幅发生干涉。
2. **内积与投影**将态矢量与实验概率联系起来；相位与相干性具有可测后果。
3. **可观测量的谱分解**组织可能的测量结果；现代严格形式要求自伴算符和投影值测度。
4. **变换理论**使不同基底中的矩阵、波函数和概率幅成为同一抽象结构的坐标表示。
5. **正则对易关系与运动方程**统一量子运动学和动力学；矩阵力学与波动力学是可以相互转换的绘景与表象。
6. **张量积与置换对称性**把语言扩展到相同粒子与多体系统。

但必须保留三个历史边界：第一，Born 的概率解释起源于 1926 年，不能说由狄拉克在 1930 年首次提出。第二，约当也是 1926—1927 年变换理论的重要建立者；《原理》的贡献在于将相关思想组织为高度统一的符号体系。第三，1930 年的物理学表达与今天通过自伴算符、谱测度、算符定义域和 Gelfand 三重态建立的数学严格化不能直接画等号。

**这本书最持久的思想是：基本物理对象应当先被定义为与坐标表象无关的态和算符，具体的矩阵、波函数和微分方程则由选择表象而获得。** 对物理理论而言，真正重要的是在表象变化下保持不变的概率预测与可观测关系。

---

## 参考文献与史料

1. P. A. M. Dirac, *The Principles of Quantum Mechanics*, 1st ed., Clarendon Press, Oxford (1930). [第一版书目信息与目录（Google Books）](https://books.google.com/books?id=_0dWAAAAMAAJ)。
2. P. A. M. Dirac, *The Principles of Quantum Mechanics*, 4th ed., Oxford University Press (1958). 后续重印本使用更成熟的记号与章节组织。[书目信息](https://books.google.com/books?id=XehUpGiM6FIC)。
3. P. A. M. Dirac, “Preface to the First Edition,” dated 29 May 1930. [原文转录：MacTutor History of Mathematics](https://mathshistory.st-andrews.ac.uk/Extras/Dirac_quantum_mechanics/)。
4. H. Kragh, “Paul Dirac and *The Principles of Quantum Mechanics*,” in *Research and Pedagogy: A History of Quantum Physics through Its Textbooks*. [Max Planck Research Library](https://mprl-series.mpg.de/studies/2/11/)。
5. T. Ryckman, “Cassirer and Dirac on the Symbolic Method in Quantum Mechanics: A Confluence of Opposites,” *Journal for the History of Analytical Philosophy* **6**(3) (2018). [全文](https://philarchive.org/archive/RYCCAD)。

> **阅读提示：** 前五至八节以现代记号进行可检验的数学推导；其目的在于准确阐明狄拉克的统一思想，不意味着每一个现代严格化细节都出现在 1930 年初版。

**相邻阅读：** [1925—1927 年：从矩阵力学到现代量子理论]({{ '/events/matrix-1925/08-afterward.html' | relative_url }}) · [返回网站首页]({{ '/' | relative_url }})
