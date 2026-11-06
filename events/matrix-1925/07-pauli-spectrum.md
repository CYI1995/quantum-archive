---
layout: event
title: "泡利计算（二）：用 SO(4) 代数求能级与简并"
year: "1926（现代群论重述）"
person: "沃尔夫冈·泡利；现代代数方法"
summary: "原稿所载氢能级完整代数计算之二：束缚态 SO(4)、两组 SU(2)、能级与 n² 重简并。"
keyword: "SO(4)、Casimir、氢原子能谱"
stage: 2
record: "8.7"
lab: ""
permalink: "/events/matrix-1925/07-pauli-spectrum.html"
---

> **矩阵力学形成史 · 7/8**　|　[返回专题目录]({{ '/events/matrix-1925.html' | relative_url }})

**承接上一页：** 已证明 Runge–Lenz 矢量守恒，且 $\mathbf A^2=\mu^2\kappa^2+2\mu H(\mathbf L^2+\hbar^2)$。这一页使用现代群论语言，将上述关系化为两组角动量，从而求出能谱。

**历史边界：** 以下 $\mathfrak{so}(4)$、$\mathfrak{su}(2)\oplus\mathfrak{su}(2)$ 的分解属于现代重述，并非声称泡利在1926年采用了今天的全部李群表示论体系。

## 一、第四步：在束缚态空间中识别 \(\mathrm{SO}(4)\) 对称性

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

### 1.1 将六个生成元分解为两组角动量

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

### 1.2 两组角动量的 Casimir 必须相同

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

## 二、第五步：由 Casimir 恒等式求出氢原子能级

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

## 三、第六步：解释为什么同一能级具有 \(n^2\) 重简并

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

## 四、将代数能级与氢原子光谱联系起来

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

## 五、结论以及适用范围

由守恒量的代数结构得到的能级 $E_n$ 对应**非相对论、无自旋、纯库仑势**的束缚态；$n^2$ 不含自旋简并。高阶修正、辐射跃迁强度、选择定则、散射态和严格的库仑算符域仍需更多理论工具。

**原始论文：** [Pauli (1926)](https://doi.org/10.1007/BF01450175)。现代教材可参见 [David Tong, *Lectures on Quantum Mechanics*](https://www.damtp.cam.ac.uk/user/dbs26/PQM/chap6.pdf)；这里仅作延伸阅读链接，正文公式来自你提供的稿件。
---

**专题导航：** [← 泡利计算（一）：Runge–Lenz 矢量与对易代数]({{ '/events/matrix-1925/06-pauli-algebra.html' | relative_url }}) · [全部章节]({{ '/events/matrix-1925.html' | relative_url }}) · [从矩阵力学到现代量子理论：谁补完了什么？ →]({{ '/events/matrix-1925/08-afterward.html' | relative_url }})
