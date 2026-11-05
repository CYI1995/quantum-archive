---
layout: event
title: "电子为什么会落向原子核？"
year: "1911—1913"
person: "尼尔斯·玻尔及其时代"
summary: "拉莫尔辐射与经典原子塌缩时间的定量计算"
keyword: "原子稳定性"
stage: 1
record: "4.5"
permalink: "/events/bohr-1913/05-collapse.html"
---
> **1913年玻尔专题 · 5/10**　|　[返回专题目录]({{ '/events/bohr-1913.html' | relative_url }})

**上一篇：** [经典库仑轨道能够预言什么？]({{ '/events/bohr-1913/04-classical-orbits.html' | relative_url }})

### 5.2 更严重的问题：加速电荷必须辐射能量

在经典电磁理论中，带电粒子即使速率的大小不变，只要**速度方向改变**，就具有加速度并产生电磁辐射。圆周运动的向心加速度大小是

$$
a=\frac{v^2}{r}=\frac{k e^2}{m_e r^2}.
$$

在非相对论近似下，拉莫尔公式（Larmor formula）给出点电荷的总辐射功率：

$$
\boxed{P=\frac{e^2a^2}{6\pi\varepsilon_0c^3}.}
$$

其中 $c$ 是真空光速。代入库仑圆轨道的加速度，得到

$$
\begin{aligned}
P(r)
&=\frac{e^2}{6\pi\varepsilon_0c^3}
\left(\frac{k e^2}{m_e r^2}\right)^2\\[3pt]
&=\boxed{\frac{2k^3e^6}{3m_e^2c^3r^4}}.
\end{aligned}
$$

这个结果的含义非常直接：

- 只要电子仍在经典圆轨道上运动，$a\ne0$，因而 $P>0$，它就持续向外辐射能量。
- 辐射能量来自原子的机械能，因此 $dE/dt=-P$。
- 当轨道收缩时，$P\propto r^{-4}$ 急剧增大，辐射和收缩会进一步加快。

**矛盾在于：稳定原子不可能依靠这种不断损失机械能的经典圆轨道长期维持。**

### 5.3 具体计算：经典氢原子会在多长时间内塌缩？

为了估算问题的严重程度，选取氢原子的一个典型长度

$$
r_0=a_0\simeq5.29\times10^{-11}\ \mathrm m,
$$

其中 $a_0$ 是今天称为**玻尔半径**的长度。特别说明：这里仅将它作为现代已知的原子尺度，用来**反过来检验经典理论**；这不意味着1911年已经从经典理论推导出了玻尔半径。

取

$$
\begin{aligned}
m_e&\simeq9.11\times10^{-31}\ \mathrm{kg},\\
e&\simeq1.60\times10^{-19}\ \mathrm C,\\
k&\simeq8.99\times10^9\ \mathrm{N\,m^2/C^2},\\
c&\simeq3.00\times10^8\ \mathrm{m/s}.
\end{aligned}
$$

**第一步：计算轨道速率。**

$$
\begin{aligned}
v_0
&=\sqrt{\frac{k e^2}{m_e r_0}}\\
&\simeq 2.19\times10^6\ \mathrm{m/s}
\simeq0.0073c.
\end{aligned}
$$

因此在初始阶段使用非相对论近似是合理的。

**第二步：计算向心加速度。**

$$
\begin{aligned}
a_0^{\mathrm{(acc)}}
&=\frac{v_0^2}{r_0}\\
&\simeq9.04\times10^{22}\ \mathrm{m/s^2}.
\end{aligned}
$$

这里 $a_0^{\mathrm{(acc)}}$ 表示加速度，避免与玻尔半径 $a_0$ 混淆。

**第三步：计算辐射功率。**

$$
\begin{aligned}
P_0
&=\frac{e^2\bigl(a_0^{\mathrm{(acc)}}\bigr)^2}
{6\pi\varepsilon_0c^3}\\
&\simeq\boxed{4.67\times10^{-8}\ \mathrm W}.
\end{aligned}
$$

原子的初始结合能为

$$
\begin{aligned}
E_0&=-\frac{k e^2}{2r_0}\\
&\simeq-2.18\times10^{-18}\ \mathrm J
\simeq-13.6\ \mathrm{eV}.
\end{aligned}
$$

如果粗略地把辐射功率视为常量，能量损失的特征时间大约是

$$
\frac{|E_0|}{P_0}\simeq4.67\times10^{-11}\ \mathrm s.
$$

但 $P$ 会随着半径缩小而上升，因此这个估算还不是轨道收缩时间。可以进一步求解轨道演化。

由能量守恒，

$$
\frac{dE}{dt}
=\frac{dE}{dr}\frac{dr}{dt}
=-P(r),
$$

且

$$
\frac{dE}{dr}=\frac{k e^2}{2r^2}.
$$

代入辐射功率，可得

$$
\frac{k e^2}{2r^2}\frac{dr}{dt}
=-\frac{2k^3e^6}{3m_e^2c^3r^4},
$$

从而

$$
\boxed{
\frac{dr}{dt}
=-\frac{4k^2e^4}{3m_e^2c^3}\frac1{r^2}.
}
$$

写成积分形式，

$$
\int_{r_0}^{r_f}r^2\,dr
=-\frac{4k^2e^4}{3m_e^2c^3}
\int_0^{t_f}dt.
$$

所以电子从 $r_0$ 缓慢向内旋进至 $r_f$ 所需的时间为

$$
\boxed{
t_f=\frac{m_e^2c^3}{4k^2e^4}
\bigl(r_0^3-r_f^3\bigr).
}
$$

若将经典点电荷模型形式上外推到 $r_f\to0$，得到

$$
\boxed{
t_{\mathrm{collapse}}
=\frac{m_e^2c^3r_0^3}{4k^2e^4}
\simeq1.56\times10^{-11}\ \mathrm s.
}
$$

即不到千亿分之二秒。计算末端接近原子核时，非相对论、点电荷及缓慢收缩等近似会失效；因此这个数值应理解为**经典模型导致极快失稳的数量级估计**，而非真实电子塌缩的精确预言。

**物理结论：** 现实中的普通氢原子可以长期存在，而经典核式原子模型预言电子在极短时间内持续失去能量。这一矛盾不能通过微调库仑力常数或轨道初始条件解决。

---

**本专题导航：** [专题目录]({{ '/events/bohr-1913.html' | relative_url }})　·　[← 上一页]({{ '/events/bohr-1913/04-classical-orbits.html' | relative_url }})　·　[下一页 →]({{ '/events/bohr-1913/06-spectral-crisis.html' | relative_url }})
