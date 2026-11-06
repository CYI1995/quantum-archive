---
layout: event
title: "泡利计算（一）：Runge–Lenz 矢量与对易代数"
year: "1926"
person: "沃尔夫冈·泡利"
summary: "原稿所载 Runge–Lenz 算符完整推导之一：厄米排序、守恒性、对易代数与平方不变量。"
keyword: "算符排序、守恒量、对易子"
stage: 2
record: "8.6"
lab: ""
permalink: "/events/matrix-1925/06-pauli-algebra.html"
---

> **矩阵力学形成史 · 6/8**　|　[返回专题目录]({{ '/events/matrix-1925.html' | relative_url }})

**原稿保留说明：** 以下是你提供的长篇氢原子推导的主体，按网页阅读长度拆分。我们保留了中间的算符顺序、对易子计算以及 $\hbar^2$ 修正项。用到的 $SO(4)$ 现代框架会在下一页出现。

## 一、Pauli 的策略：把谱线问题化为守恒量问题

### 1.1 氢原子的库仑哈密顿量

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

### 1.2 引入额外守恒量：Runge–Lenz 矢量

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

## 二、第一步：证明 Runge–Lenz 矢量守恒

我们要逐分量验证

$$
\boxed{[H,A_i]=0.}
$$

### 2.1 两个通用对易恒等式

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

### 2.2 计算势能与 \(B_i\) 的对易子

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

### 2.3 两项恰好相消

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

## 三、第二步：计算六个守恒量的对易代数

角动量 \(L_i\) 有三个分量，Runge–Lenz 矢量 \(A_i\) 也有三个分量。接下来确定六个分量如何彼此对易。

### 3.1 角动量与角动量

已知

$$
[L_i,L_j]=i\hbar\epsilon_{ijk}L_k.
$$

### 3.2 角动量与 Runge–Lenz 矢量

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

### 3.3 Runge–Lenz 矢量分量之间的对易子

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

## 四、第三步：推导平方不变量 \(\mathbf A^2\)

这是由守恒量的代数求出 **能量本征值** 所必需的步骤。仅有前面的对易关系还不足以给出 \(E_n\)。

### 4.1 先计算 \(\mathbf B^2\)

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

### 4.2 计算交叉项

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

### 4.3 得到决定能级的算符恒等式

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

**到这里得到的两项关键成果：**

$$
[H,\mathbf A]=0,\qquad
\mathbf A^2=\mu^2\kappa^2+2\mu H(\mathbf L^2+\hbar^2).
$$

下一页将把这些代数恒等式转换为能级和简并度。
---

**专题导航：** [← 泡利：为什么不求轨道也能求出氢能级？]({{ '/events/matrix-1925/05-pauli.html' | relative_url }}) · [全部章节]({{ '/events/matrix-1925.html' | relative_url }}) · [泡利计算（二）：用 SO(4) 代数求能级与简并 →]({{ '/events/matrix-1925/07-pauli-spectrum.html' | relative_url }})
