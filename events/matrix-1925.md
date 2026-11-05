---
layout: "event"
title: "矩阵力学：从海森堡到 Pauli 的氢原子能级推导"
year: "1925"
person: "维尔纳·海森堡、马克斯·玻恩、帕斯库尔·约当；沃尔夫冈·泡利（1926 年应用）"
summary: "从跃迁矩阵和正则对易关系出发，利用 Pauli 的 Runge–Lenz 矢量代数方法完整推导氢原子的束缚态能级与 n² 重简并。"
keyword: "矩阵力学、Runge–Lenz 矢量、SO(4) 对称性、氢原子光谱"
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

## 一、它试图回答什么问题？

> 能否只用可观测量及其代数关系求出原子的能级，而不预先假定电子沿经典轨道运动，也不求解波动方程？

1925 年，海森堡以谱线频率与跃迁振幅为起点提出新的量子运动学；玻恩与约当认出其中的矩阵运算结构，并发展正则对易关系。**1926 年，沃尔夫冈·Pauli 利用这一新力学的方法求出了氢原子的束缚态能级。** 这是矩阵力学早期最有代表性的非平凡应用之一。

**历史提醒：** 本页的主节点仍是 **1925 年矩阵力学的建立**；以下氢原子推导对应 **Pauli 1926 年的工作**，不能把两者记成同一年。这里所说的“Pauli 方法”是守恒量的算符代数方法，**并非使用后来常见的三种 Pauli 自旋矩阵来求氢能级**。

## 二、从经典轨道到跃迁矩阵

旧量子论能够解释部分氢原子谱线，却不能建立对一般原子系统都适用的统一动力学。海森堡注意到，实验直接给出的是能级之间的**跃迁频率**与**谱线强度**，并非电子的轨道坐标随时间变化的轨迹。

将物理量的跃迁振幅写为矩阵元

$$
X_{mn}(t)=X_{mn}(0)e^{i\omega_{mn}t},\qquad
\omega_{mn}=\frac{E_m-E_n}{\hbar}.
$$

当两个物理量相乘时，中间跃迁态必须求和：

$$
(XY)_{mn}=\sum_k X_{mk}Y_{kn}.
$$

这正是**矩阵乘法**。一般来说，两个可观测量的矩阵乘积不可交换，即

$$
XY\ne YX.
$$

矩阵力学用正则对易关系

$$
[X_i,P_j]=i\hbar\delta_{ij}I,\qquad
[X_i,X_j]=[P_i,P_j]=0
$$

以及海森堡运动方程

$$
\frac{dO}{dt}=\frac{i}{\hbar}[H,O]
$$

（这里假设算符没有显含时间）描述量子动力学。因此，若一个算符满足 **[H,O]=0**，它就是守恒量；在能量本征空间上，守恒量可以作为进一步分类、甚至决定能谱的代数工具。

## 三、Pauli 的策略：把谱线问题化为守恒量问题

### 3.1 氢原子的库仑哈密顿量

考虑忽略自旋、相对论修正、精细结构和辐射修正的非相对论氢样原子。将质心运动分离后，电子与原子核的相对运动满足

$$
H=\frac{\mathbf p^2}{2\mu}-\frac{\kappa}{r},
\qquad
r=|\mathbf r|,\qquad
\kappa=\frac{Ze^2}{4\pi\varepsilon_0}>0,
$$

其中 $\mu=m_eM/(m_e+M)$ 是约化质量；普通氢原子取 $Z=1$。基本正则对易关系为

$$
[r_i,p_j]=i\hbar\delta_{ij},\qquad
[r_i,r_j]=[p_i,p_j]=0.
$$

以下推导先求出 **负能量束缚态** $E<0$ 的能谱。由于氢原子的势能为球对称，轨道角动量

$$
\mathbf L=\mathbf r\times\mathbf p
$$

满足

$$
[H,L_i]=0,\qquad
[L_i,L_j]=i\hbar\epsilon_{ijk}L_k.
$$

仅有三维角动量对称性还不足以确定氢原子的所有能级，因为能量最终与主量子数 \(n\) 有关，而不只与轨道角动量量子数 \(\ell\) 有关。

### 3.2 引入额外守恒量：Runge–Lenz 矢量

经典库仑问题还有一个与椭圆轨道长轴相关的守恒矢量

$$
\mathbf A_{\mathrm{cl}}
=\mathbf p\times\mathbf L-\mu\kappa\frac{\mathbf r}{r}.
$$

在量子力学中，\(\mathbf p\) 与 \(\mathbf L\) 不交换，必须注意算符排序。一个厄米的量子版本是

$$
\boxed{
\mathbf A
=\frac12(\mathbf p\times\mathbf L-\mathbf L\times\mathbf p)
-\mu\kappa\frac{\mathbf r}{r}.
}
$$

利用

$$
\mathbf L\times\mathbf p
=-\mathbf p\times\mathbf L+2i\hbar\mathbf p,
$$

也可以写成

$$
\mathbf A
=\underbrace{(\mathbf p\times\mathbf L-i\hbar\mathbf p)}_{\mathbf B}
-\mu\kappa\widehat{\mathbf r},
\qquad \widehat{\mathbf r}=\frac{\mathbf r}{r}.
$$

为了使后面的长计算清楚，定义

$$
P=\mathbf p^2,\qquad D=\mathbf r\cdot\mathbf p,\qquad
B_i=r_iP-p_iD.
$$

最后一个式子可以直接由 \(\epsilon_{ijk}\epsilon_{klm}=\delta_{il}\delta_{jm}-\delta_{im}\delta_{jl}\) 与正则对易关系展开得到。注意 \(D\) 本身无需厄米；整体 \(\mathbf B\) 以及 \(\mathbf A\) 均为厄米算符。

## 四、第一步：证明 Runge–Lenz 矢量守恒

我们要逐分量验证

$$
\boxed{[H,A_i]=0.}
$$

### 4.1 两个通用对易恒等式

对于仅依赖位置的光滑函数 \(f(\mathbf r)\)，在 \(r\neq0\) 的区域内，有

$$
[p_i,f]=-i\hbar\,\partial_i f,
$$

以及

$$
[P,f]
=-2i\hbar\sum_j(\partial_j f)p_j-\hbar^2\nabla^2f.
$$

对单位径向矢量的第 \(i\) 个分量 \(n_i=r_i/r\)，计算得到

$$
\partial_j n_i
=\frac{\delta_{ij}}r-\frac{r_ir_j}{r^3},
\qquad
\nabla^2 n_i=-\frac{2r_i}{r^3}.
$$

记

$$
F_i=\frac1r p_i-\frac{r_i}{r^3}D,
$$

则

$$
\boxed{
[P,n_i]=-2i\hbar F_i+2\hbar^2\frac{r_i}{r^3}.
}
$$

### 4.2 计算势能与 \(B_i\) 的对易子

先观察到

$$
\left[\frac1r,P\right]
=-2i\hbar\frac{D}{r^3},
\qquad
\left[\frac1r,D\right]=-\frac{i\hbar}{r},
$$

这里的 \(D/r^3\) 记号应理解为 \((1/r^3)D\)，即位置函数位于左侧。由 \(B_i=r_iP-p_iD\) 出发，

$$
\begin{aligned}
\left[\frac1r,B_i\right]
&=r_i\left[\frac1r,P\right]
-\left[\frac1r,p_i\right]D
-p_i\left[\frac1r,D\right]\\
&=-2i\hbar\frac{r_i}{r^3}D
+i\hbar\frac{r_i}{r^3}D
+i\hbar p_i\frac1r.
\end{aligned}
$$

用 \(p_i/r=(1/r)p_i+i\hbar r_i/r^3\) 整理算符顺序，得到

$$
\boxed{
\left[\frac1r,B_i\right]
=i\hbar F_i-\hbar^2\frac{r_i}{r^3}.
}
$$

### 4.3 两项恰好相消

因为 \([P,B_i]=0\) 且 \([r^{-1},n_i]=0\)，所以

$$
\begin{aligned}
[H,A_i]
&=\left[-\frac\kappa r,B_i\right]
-\mu\kappa\left[\frac{P}{2\mu},n_i\right]\\
&=\left(-i\hbar\kappa F_i
+\kappa\hbar^2\frac{r_i}{r^3}\right)
+\left(i\hbar\kappa F_i
-\kappa\hbar^2\frac{r_i}{r^3}\right)\\
&=0.
\end{aligned}
$$

因此

$$
\boxed{[H,\mathbf A]=0.}
$$

这正是库仑势的特殊之处：径向势能项与动能项产生的对易子完全抵消。以上算符计算可在避开 \(r=0\) 的光滑函数上进行，再按氢原子哈密顿量的适当算符定义扩展；这里聚焦物理上的代数推导。

## 五、第二步：计算六个守恒量的对易代数

角动量 \(L_i\) 有三个分量，Runge–Lenz 矢量 \(A_i\) 也有三个分量。接下来确定六个分量如何彼此对易。

### 5.1 角动量与角动量

已知

$$
[L_i,L_j]=i\hbar\epsilon_{ijk}L_k.
$$

### 5.2 角动量与 Runge–Lenz 矢量

由

$$
[L_i,r_j]=i\hbar\epsilon_{ijk}r_k,
\qquad
[L_i,p_j]=i\hbar\epsilon_{ijk}p_k
$$

可知 \(\mathbf r\)、\(\mathbf p\)、\(\mathbf L\) 都按空间矢量的规则旋转；由它们构成的 \(\mathbf A\) 因而也满足

$$
\boxed{[L_i,A_j]=i\hbar\epsilon_{ijk}A_k.}
$$

这意味着 \(\mathbf A\) 本身是一个矢量算符。

### 5.3 Runge–Lenz 矢量分量之间的对易子

这一步最能体现矩阵力学的非对易性。为了不跳过关键计算，先写

$$
B_i=r_iP-p_iD,
$$

并使用

$$
[D,r_i]=-i\hbar r_i,\qquad
[D,p_i]=i\hbar p_i,\qquad
[P,D]=-2i\hbar P.
$$

将 \([B_i,B_j]\) 分为三类，得到

$$
\begin{aligned}
[r_iP,r_jP]&=-2i\hbar\epsilon_{ijk}L_kP,\\
[r_jP,p_iD]-[r_iP,p_jD]
&=+i\hbar\epsilon_{ijk}L_kP,\\
[p_iD,p_jD]&=0.
\end{aligned}
$$

例如，第二行由

$$
[r_iP,p_jD]
=-i\hbar r_ip_jP+i\hbar\delta_{ij}DP
+\hbar^2\delta_{ij}P
$$

及交换 \(i,j\) 后相减直接得到。故

$$
\boxed{[B_i,B_j]=-i\hbar P\epsilon_{ijk}L_k.}
$$

另一方面，利用第四节中的 \([P,n_i]\)，可推出

$$
\begin{aligned}
[B_i,n_j]
={}&-2i\hbar\frac{r_i}{r}p_j
+i\hbar\frac{r_ir_j}{r^3}D\\
&+i\hbar\frac{\delta_{ij}}rD
+2\hbar^2\frac{r_ir_j}{r^3}.
\end{aligned}
$$

除第一项外，其余项对 \(i,j\) 都对称。因此

$$
\boxed{
[B_i,n_j]-[B_j,n_i]
=-\frac{2i\hbar}{r}\epsilon_{ijk}L_k.
}
$$

最后代入 \(A_i=B_i-\mu\kappa n_i\)，得到

$$
\begin{aligned}
[A_i,A_j]
&=[B_i,B_j]
-\mu\kappa\bigl([B_i,n_j]-[B_j,n_i]\bigr)\\
&=-i\hbar\left(P-\frac{2\mu\kappa}{r}\right)
\epsilon_{ijk}L_k\\
&=-2i\hbar\mu H\epsilon_{ijk}L_k.
\end{aligned}
$$

于是全部对易关系为

$$
\boxed{\begin{aligned}
[L_i,L_j]&=i\hbar\epsilon_{ijk}L_k,\\
[L_i,A_j]&=i\hbar\epsilon_{ijk}A_k,\\
[A_i,A_j]&=-2i\hbar\mu H\epsilon_{ijk}L_k.
\end{aligned}}
$$

注意，最后一行的系数含有 \(H\)。只有先限制到固定能量子空间并对 \(\mathbf A\) 适当缩放，才能把它化为标准李代数。

## 六、第三步：推导平方不变量 \(\mathbf A^2\)

这是由守恒量的代数求出 **能量本征值** 所必需的步骤。仅有前面的对易关系还不足以给出 \(E_n\)。

### 6.1 先计算 \(\mathbf B^2\)

设 \(\mathbf C=\mathbf p\times\mathbf L\)，则

$$
\mathbf B=\mathbf C-i\hbar\mathbf p.
$$

由 \(\mathbf p\cdot\mathbf L=\mathbf L\cdot\mathbf p=0\) 以及角动量与动量的对易关系，可得

$$
\begin{aligned}
\mathbf C^2&=P\mathbf L^2,\\
\mathbf p\cdot\mathbf C&=0,\\
\mathbf C\cdot\mathbf p&=2i\hbar P.
\end{aligned}
$$

于是

$$
\begin{aligned}
\mathbf B^2
&=(\mathbf C-i\hbar\mathbf p)^2\\
&=P\mathbf L^2-i\hbar
(\mathbf C\cdot\mathbf p+\mathbf p\cdot\mathbf C)
-\hbar^2 P\\
&=P(\mathbf L^2+\hbar^2).
\end{aligned}
$$

因此

$$
\boxed{\mathbf B^2=P(\mathbf L^2+\hbar^2).}
$$

### 6.2 计算交叉项

从 \(B_i=r_iP-p_iD\) 可直接验证

$$
\mathbf r\cdot\mathbf B=\mathbf L^2-i\hbar D,
$$

以及

$$
\mathbf B\cdot\mathbf r
=\mathbf L^2+i\hbar D+3\hbar^2.
$$

这里由于位置和动量不交换，**两个点积并不相同**。再用

$$
[D,1/r]=i\hbar/r,
\qquad [\mathbf L^2,1/r]=0,
$$

可得

$$
\begin{aligned}
\widehat{\mathbf r}\cdot\mathbf B
&=\frac1r(\mathbf L^2-i\hbar D),\\
\mathbf B\cdot\widehat{\mathbf r}
&=\frac1r(\mathbf L^2+i\hbar D+2\hbar^2).
\end{aligned}
$$

将两式相加，\(D\) 项抵消：

$$
\boxed{
\mathbf B\cdot\widehat{\mathbf r}
+\widehat{\mathbf r}\cdot\mathbf B
=\frac{2}{r}(\mathbf L^2+\hbar^2).
}
$$

### 6.3 得到决定能级的算符恒等式

因为 \(\widehat{\mathbf r}^{\,2}=1\)，所以

$$
\begin{aligned}
\mathbf A^2
&=(\mathbf B-\mu\kappa\widehat{\mathbf r})^2\\
&=\mathbf B^2
-\mu\kappa(\mathbf B\cdot\widehat{\mathbf r}
+\widehat{\mathbf r}\cdot\mathbf B)
+\mu^2\kappa^2\\
&=\left(P-\frac{2\mu\kappa}{r}\right)
(\mathbf L^2+\hbar^2)+\mu^2\kappa^2\\
&=2\mu H(\mathbf L^2+\hbar^2)+\mu^2\kappa^2.
\end{aligned}
$$

最终得到

$$
\boxed{
\mathbf A^2
=\mu^2\kappa^2+2\mu H(\mathbf L^2+\hbar^2).
}
$$

同时由角动量的定义和 \(\mathbf p\cdot\mathbf L=\mathbf r\cdot\mathbf L=0\)，可以验证

$$
\boxed{
\mathbf L\cdot\mathbf A
=\mathbf A\cdot\mathbf L=0.
}
$$

**最容易遗漏的是 \(\hbar^2\) 项。** 这项来自量子算符的非对易性；如果把量子算符当成普通经典矢量计算，最后的能级量子化条件就会出错。

## 七、第四步：在束缚态空间中识别 \(\mathrm{SO}(4)\) 对称性

对某个固定负能量 \(E<0\) 的子空间，令

$$
\mathbf M
=\frac{\mathbf A}{\sqrt{-2\mu E}}.
$$

严格地说，由于 \([H,A_i]=0\)，也可在整个负能量谱子空间上利用 \((-2\mu H)^{-1/2}\) 的谱函数定义该算符；固定能量时它退化为上面的数值缩放。

前面得到的关系立刻化为

$$
\begin{aligned}
[L_i,L_j]&=i\hbar\epsilon_{ijk}L_k,\\
[L_i,M_j]&=i\hbar\epsilon_{ijk}M_k,\\
[M_i,M_j]&=i\hbar\epsilon_{ijk}L_k.
\end{aligned}
$$

这六个生成元构成 \(\mathfrak{so}(4)\) 李代数。这里的 \(\mathrm{SO}(4)\) 是氢原子库仑势的**动力学隐藏对称性**，比普通空间旋转的 \(\mathrm{SO}(3)\) 对称性更大。

### 7.1 将六个生成元分解为两组角动量

定义

$$
\boxed{
\mathbf J_+=\frac{\mathbf L+\mathbf M}{2},\qquad
\mathbf J_-=\frac{\mathbf L-\mathbf M}{2}.
}
$$

直接代入上述三个对易关系，例如

$$
\begin{aligned}
[J_{+i},J_{+j}]
&=\frac14([L_i,L_j]+[L_i,M_j]
+[M_i,L_j]+[M_i,M_j])\\
&=i\hbar\epsilon_{ijk}\frac{L_k+M_k}{2}\\
&=i\hbar\epsilon_{ijk}J_{+k}.
\end{aligned}
$$

完全类似地，

$$
\boxed{\begin{aligned}
[J_{+i},J_{+j}]&=i\hbar\epsilon_{ijk}J_{+k},\\
[J_{-i},J_{-j}]&=i\hbar\epsilon_{ijk}J_{-k},\\
[J_{+i},J_{-j}]&=0.
\end{aligned}}
$$

由此得到李代数同构

$$
\boxed{
\mathfrak{so}(4)\cong
\mathfrak{su}(2)_+\oplus\mathfrak{su}(2)_-.
}
$$

这意味着我们可以用**两组彼此对易的角动量量子数**标记同一氢原子能量空间。

### 7.2 两组角动量的 Casimir 必须相同

由第六节的正交关系

$$
\mathbf L\cdot\mathbf M
=\mathbf M\cdot\mathbf L=0
$$

得

$$
\begin{aligned}
\mathbf J_+^2-\mathbf J_-^2
&=\frac12(\mathbf L\cdot\mathbf M
+\mathbf M\cdot\mathbf L)\\
&=0.
\end{aligned}
$$

所以两组不可约角动量表示的量子数相等：

$$
\mathbf J_+^2=\hbar^2j_+(j_++1),
\qquad
\mathbf J_-^2=\hbar^2j_-(j_-+1),
$$

$$
\boxed{j_+=j_-=j,\qquad
j=0,\tfrac12,1,\tfrac32,\ldots.}
$$

这里允许半整数 \(j\)，因为 \(\mathbf J_\pm\) 是两个抽象角动量代数的生成元；这**不表示忽略自旋的电子获得了半整数轨道角动量**。

## 八、第五步：由 Casimir 恒等式求出氢原子能级

这是 Pauli 方法的最后一步，也是整篇推导的核心结论。

由第六节

$$
\mathbf A^2
=\mu^2\kappa^2+2\mu E(\mathbf L^2+\hbar^2)
$$

和 \(\mathbf M=\mathbf A/\sqrt{-2\mu E}\) 得

$$
\begin{aligned}
\mathbf M^2
&=\frac{\mathbf A^2}{-2\mu E}\\
&=-\frac{\mu\kappa^2}{2E}
-(\mathbf L^2+\hbar^2).
\end{aligned}
$$

故

$$
\boxed{
\mathbf L^2+\mathbf M^2
=-\frac{\mu\kappa^2}{2E}-\hbar^2.
}
$$

另一方面，由 \(\mathbf J_\pm=(\mathbf L\pm\mathbf M)/2\) 与正交关系，

$$
\begin{aligned}
\mathbf J_+^2=\mathbf J_-^2
&=\frac14(\mathbf L^2+\mathbf M^2)\\
&=-\frac{\mu\kappa^2}{8E}-\frac{\hbar^2}{4}.
\end{aligned}
$$

而角动量的量子化要求

$$
\mathbf J_\pm^2=\hbar^2j(j+1).
$$

两式相等，就得到

$$
\begin{aligned}
\hbar^2j(j+1)
&=-\frac{\mu\kappa^2}{8E}-\frac{\hbar^2}{4},\\
-\frac{\mu\kappa^2}{8E}
&=\hbar^2\left[j(j+1)+\frac14\right]\\
&=\hbar^2\left(j+\frac12\right)^2.
\end{aligned}
$$

解出能量：

$$
E=-\frac{\mu\kappa^2}{2\hbar^2(2j+1)^2}.
$$

由于 \(j=0,1/2,1,\ldots\)，定义正整数

$$
\boxed{n=2j+1=1,2,3,\ldots}
$$

便得到氢样原子的**全部非相对论束缚态能级**：

$$
\boxed{
E_n=-\frac{\mu\kappa^2}{2\hbar^2n^2}
=-\frac{\mu Z^2e^4}{2(4\pi\varepsilon_0)^2\hbar^2}
\frac1{n^2},\qquad n=1,2,3,\ldots.
}
$$

对于普通氢原子，在忽略小修正时常写成

$$
\boxed{E_n\simeq-\frac{13.6\ \mathrm{eV}}{n^2}.}
$$

例如，\(n=1\) 对应基态，\(n=2\) 对应第一组激发束缚态，且

$$
E_1=-\frac{\mu\kappa^2}{2\hbar^2},\qquad
E_2=\frac{E_1}{4},\qquad
E_3=\frac{E_1}{9}.
$$

请注意：整条计算**没有求解径向微分方程，也没有使用氢原子波函数的显式形式**。谱的量子化来自守恒算符的对易代数及其有限维酉表示。

## 九、第六步：解释为什么同一能级具有 \(n^2\) 重简并

固定能量时，两组角动量的量子数都是 \(j=(n-1)/2\)。单个自旋 \(j\) 表示的维数为 \(2j+1\)，因此总空间为

$$
\mathcal H_n\cong\mathcal H_j\otimes\mathcal H_j,
\qquad
\dim\mathcal H_n=(2j+1)^2.
$$

代入 \(2j+1=n\)，得到

$$
\boxed{\dim\mathcal H_n=n^2.}
$$

物理上的轨道角动量满足

$$
\mathbf L=\mathbf J_++\mathbf J_-.
$$

因此，根据两个角动量耦合的 Clebsch–Gordan 规则，

$$
(j)\otimes(j)=\bigoplus_{\ell=0}^{2j}(\ell).
$$

也就是

$$
\boxed{\ell=0,1,\ldots,n-1,\qquad m=-\ell,\ldots,\ell.}
$$

直接求和验证：

$$
\sum_{\ell=0}^{n-1}(2\ell+1)
=n^2.
$$

这就解释了为什么在非相对论纯库仑势中，同一个主量子数 \(n\) 下的不同 \(\ell\) 态有相同能量。这种“额外简并”并非普通空间旋转对称性单独所能解释，而是隐藏的 \(\mathrm{SO}(4)\) 动力学对称性带来的。

此处 **\(n^2\) 不包括电子自旋的二重性**；若纳入自旋而仍忽略自旋相关相互作用，会再出现自旋倍数。精细结构、兰姆位移和超精细相互作用又会改变理想简并。

## 十、将代数能级与氢原子光谱联系起来

氢原子从高能级 \(n_i\) 跃迁到低能级 \(n_f<n_i\) 时，发出光子的频率由能量差决定：

$$
\begin{aligned}
h\nu
&=E_{n_i}-E_{n_f}\\
&=\frac{\mu\kappa^2}{2\hbar^2}
\left(\frac1{n_f^2}-\frac1{n_i^2}\right).
\end{aligned}
$$

也就是氢原子光谱的里德伯规律：

$$
\boxed{
\frac1\lambda
=R_{\mathrm H}\left(\frac1{n_f^2}-\frac1{n_i^2}\right),
\quad
R_{\mathrm H}=\frac{\mu\kappa^2}{2\hbar^2hc}.
}
$$

Pauli 的代数方法给出了这些谱线的能量位置。但**能级差还不等于完整的谱线强度和跃迁选择定则**：后者还需要研究偶极算符在能量本征态之间的矩阵元。

## 十一、总结：为什么这一推导具有历史意义？

从 1925 年矩阵力学到 Pauli 1926 年的氢原子计算，逻辑主线可以概括为：

1. **从轨道转向矩阵**：以可观测跃迁及其非对易乘法构成理论。
2. **建立算符动力学**：利用 \([r_i,p_j]=i\hbar\delta_{ij}\) 和守恒量的对易关系研究系统。
3. **寻找额外守恒量**：库仑问题除 \(\mathbf L\) 外还有厄米 Runge–Lenz 矢量 \(\mathbf A\)。
4. **发现隐藏对称性**：在负能量子空间中，\(\mathbf L\) 与归一化的 \(\mathbf A\) 生成 \(\mathfrak{so}(4)\)。
5. **利用表示论求谱**：两个彼此对易的 \(\mathfrak{su}(2)\) 角动量代数及其 Casimir 给出 \(E_n\propto-1/n^2\)。
6. **解释简并度**：表示 \((j,j)\) 的维数恰为 \((2j+1)^2=n^2\)。

**最终结论：** 氢原子的能级可以由量子算符的代数结构直接决定；矩阵力学不仅是一种表达方式，更提供了一条不依赖求解波动方程的定量计算道路。

## 十二、参考文献与延伸阅读

1. W. Heisenberg, *Über quantentheoretische Umdeutung kinematischer und mechanischer Beziehungen*, **Zeitschrift für Physik 33**, 879–893 (1925). [原始论文 DOI](https://doi.org/10.1007/BF01328377)。
2. M. Born and P. Jordan, *Zur Quantenmechanik*, **Zeitschrift für Physik 34**, 858–888 (1925). [原始论文 DOI](https://doi.org/10.1007/BF01328531)。
3. W. Pauli, *Über das Wasserstoffspektrum vom Standpunkt der neuen Quantenmechanik*, **Zeitschrift für Physik 36**, 336–363 (1926). [原始论文 DOI](https://doi.org/10.1007/BF01450175)。
4. D. Tong, *Lectures on Quantum Mechanics*, 第六章，关于量子 Runge–Lenz 矢量、\(\mathrm{SO}(4)\) 与氢原子能级的代数推导。[公开讲义](https://www.damtp.cam.ac.uk/user/dbs26/PQM/chap6.pdf)。

> **阅读提示：** 这里的推导采用现代算符与表示论记号，对 Pauli 的历史思路作了教学性重述，并非逐行翻译 1926 年原文。有关库仑奇点的严格算符域问题，以及散射态的 \(\mathfrak{so}(3,1)\) 结构，可在更高阶的量子力学课程中继续讨论。
