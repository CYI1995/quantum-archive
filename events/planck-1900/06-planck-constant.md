---
layout: "event"
title: "06｜普朗克常数如何从黑体辐射中确定？"
year: "1900—今天"
person: "马克斯·普朗克、维恩、斯特藩、玻尔兹曼"
summary: "从普朗克谱推导位移定律和总辐射功率，并反向求出基本常数 h。"
keyword: "普朗克常数、维恩位移常数、斯特藩–玻尔兹曼常数、实验测定"
stage: 1
order: 1900
record: "1.6"
slug: "planck-1900-constant"
permalink: "/events/planck-1900/06-planck-constant.html"
---

[上一篇：普朗克理论]({{ '/events/planck-1900/05-planck-theory.html' | relative_url }}) · [专题目录]({{ '/events/planck-1900.html' | relative_url }}) · [下一篇：历史影响]({{ '/events/planck-1900/07-legacy.html' | relative_url }})

> **明确概念**：$h$ 的存在与数值不能由纯经典的麦克斯韦方程“推导”出来。能推导的是：在假设 $\varepsilon=h\nu$ 和热平衡统计成立时，黑体辐射的各种可测量量如何依赖 $h$。再把实验测得的量代入这些关系，就能**确定 $h$ 的数值**。

## 一、第一步：从普朗克谱开始

波长形式的谱辐亮度为

$$
B_\lambda(T)=\frac{2hc^2}{\lambda^5}
\frac{1}{e^{hc/(\lambda k_{\mathrm B}T)}-1}.
$$

其中 $c$ 为真空光速、$k_{\mathrm B}$ 为玻尔兹曼常数、$T$ 为绝对温度。实验中可测定：各温度下光谱的峰值位置，以及辐射在所有波长上的总功率。

## 二、第二步：求光谱峰值，推出维恩位移常数

固定温度 $T$，求 $B_\lambda$ 关于 $\lambda$ 的最大值。定义

$$
x=\frac{hc}{\lambda k_{\mathrm B}T}.
$$

于是 $B_\lambda$ 关于 $\lambda$ 的依赖等价于 $x^5/(e^x-1)$，因此峰值满足

$$
\frac{d}{dx}\left(\frac{x^5}{e^x-1}\right)=0.
$$

对分式求导：

$$
\frac{5x^4(e^x-1)-x^5 e^x}{(e^x-1)^2}=0.
$$

取非零、有限的峰值解，得到

$$
5(e^x-1)-xe^x=0,
\qquad
\boxed{5(1-e^{-x})=x.}
$$

数值求解得

$$
x_\lambda\simeq4.9651142317.
$$

因此，峰值波长 $\lambda_{\max}$ 满足

$$
\lambda_{\max}T=\frac{hc}{x_\lambda k_{\mathrm B}}\equiv b,
$$

即

$$
\boxed{b=\frac{hc}{x_\lambda k_{\mathrm B}}.}
$$

这就是对**按单位波长定义的光谱**的维恩位移规律。对应的实测常数约为

$$
b\simeq2.897771955\times10^{-3}\,\mathrm{m\,K}.
$$

如果 $k_{\mathrm B}$ 已由独立测量获得，就可立即反解：

$$
\boxed{h=\frac{x_\lambda b k_{\mathrm B}}{c}.}
$$

**特别注意**：如果你用的是单位频率谱 $B_\nu$，峰值条件的无量纲根是约 $2.821439$，而不是 $4.965114$。不能把频率谱峰值简单转换成波长谱峰值。

## 三、第三步：积分全光谱，得到总辐射功率

对于处于热平衡的朗伯型黑体表面，谱辐亮度 $B_\lambda$ 对出射半球角度积分，给出单位面积的总出射度：

$$
M(T)=\pi\int_0^\infty B_\lambda(T)\,d\lambda.
$$

也可以在频率空间积分，代入普朗克公式：

$$
M(T)=\frac{2\pi h}{c^2}
\int_0^\infty\frac{\nu^3}{e^{h\nu/(k_{\mathrm B}T)}-1}\,d\nu.
$$

令 $x=h\nu/(k_{\mathrm B}T)$，并使用标准积分

$$
\int_0^\infty\frac{x^3}{e^x-1}\,dx=\frac{\pi^4}{15},
$$

得到

$$
\begin{aligned}
M(T)
&=\frac{2\pi k_{\mathrm B}^4T^4}{h^3c^2}
\int_0^\infty\frac{x^3}{e^x-1}\,dx\\
&=\frac{2\pi^5k_{\mathrm B}^4}{15h^3c^2}T^4.
\end{aligned}
$$

比较斯特藩–玻尔兹曼定律 $M=\sigma T^4$，可识别

$$
\boxed{\sigma=\frac{2\pi^5k_{\mathrm B}^4}{15h^3c^2}.}
$$

当时人们已经知道总辐射功率大致按 $T^4$ 增长；普朗克公式不仅与之相容，还给出系数 $\sigma$ 对 $h,k_{\mathrm B}$ 的具体依赖。

## 四、第四步：用两个宏观实验常数同时求得 h 与 k_B

如果不预先知道 $k_{\mathrm B}$，仅凭一条位移关系无法同时确定 $h$ 与 $k_{\mathrm B}$。但结合两项独立测量便可以做到：

$$
b=\frac{hc}{x_\lambda k_{\mathrm B}},
\qquad
\sigma=\frac{2\pi^5k_{\mathrm B}^4}{15h^3c^2}.
$$

由第一式解出

$$
k_{\mathrm B}=\frac{hc}{x_\lambda b}.
$$

代入第二式：

$$
\begin{aligned}
\sigma
&=\frac{2\pi^5}{15h^3c^2}
\left(\frac{hc}{x_\lambda b}\right)^4\\
&=\frac{2\pi^5 h c^2}{15x_\lambda^4 b^4}.
\end{aligned}
$$

因此

$$
\boxed{h=\frac{15\,\sigma\,x_\lambda^4\,b^4}{2\pi^5 c^2},
\qquad k_{\mathrm B}=\frac{hc}{x_\lambda b}.}
$$

**这是一个从黑体可测量量反推出普朗克常数的完整例子**。它没有通过经典物理预测 $h$ 的数值，而是将理论关系与实验常数结合，提取新的基本常数。

## 五、数值代入：恢复普朗克常数

为了展示计算，使用以下现代参考数值（取显示的有效位数）：

$$
\begin{aligned}
x_\lambda&=4.9651142317,\\
b&\simeq2.897771955\times10^{-3}\ \mathrm{m\,K},\\
\sigma&\simeq5.670374419\times10^{-8}\ \mathrm{W\,m^{-2}\,K^{-4}},\\
c&=299792458\ \mathrm{m\,s^{-1}}.
\end{aligned}
$$

代入上式得

$$
\begin{aligned}
h&\simeq 6.62607015\times10^{-34}\ \mathrm{J\,s},\\
k_{\mathrm B}&\simeq1.380649\times10^{-23}\ \mathrm{J\,K^{-1}}.
\end{aligned}
$$

量纲检查也很重要：$[\sigma b^4/c^2]=\mathrm{J\,s}$，恰为作用量的量纲，说明 $h$ 并非能量，它是将**频率**转换为**能量**的比例常数。

**关于历史与现代单位的区别**：1900 年的普朗克是由实验数据估计 $h$。而自 2019 年 5 月 20 日起，国际单位制将

$$
\boxed{h=6.62607015\times10^{-34}\ \mathrm{J\,s}}
$$

规定为**精确的定义值**，而非每次实验都需重新测出的未知值。上面的数值演示使用现代参考常数，因此主要是说明“从黑体规律识别并反算 $h$”的数学机制，并不是重现 1900 年的原始测量精度。

## 六、历史复算：用 1900 年前后的实验数据得到 h

上面的公式并非现代人为普朗克“补写”的一种事后巧合。普朗克在 **1901 年发表的原始论文第 11—12 节**，确实联合使用了库尔鲍姆的总辐射测量，以及卢默、普林斯海姆测得的谱峰位移数据，来求出两个常数 $h$ 和 $k$。

首先，库尔鲍姆报告黑体在 $100^\circ\mathrm C$ 与 $0^\circ\mathrm C$ 下的辐射出射度差为

$$
M(373\,\mathrm K)-M(273\,\mathrm K)
\simeq0.0731\,\mathrm{W\,cm^{-2}}.
$$

换算为国际单位，并用 $M=\sigma T^4$，可从实验反推

$$
\begin{aligned}
\sigma_{\mathrm{hist}}
&=\frac{0.0731\times10^4}{373^4-273^4}\\
&\simeq5.2962\times10^{-8}\,
\mathrm{W\,m^{-2}\,K^{-4}}.
\end{aligned}
$$

其次，卢默、普林斯海姆给出当时的峰值位移乘积

$$
b_{\mathrm{hist}}=\lambda_{\max}T
\simeq0.294\,\mathrm{cm\,K}=2.94\times10^{-3}\,\mathrm{m\,K}.
$$

将两组历史数值代入前面推导的反算式，并采用当时的近似光速 $c\simeq3.0\times10^8\,\mathrm{m\,s^{-1}}$：

$$
\begin{aligned}
h_{\mathrm{hist}}
&=\frac{15\,\sigma_{\mathrm{hist}}\,x_\lambda^4\,b_{\mathrm{hist}}^4}{2\pi^5 c^2}\\
&\simeq6.55\times10^{-34}\,\mathrm{J\,s}\\
&=6.55\times10^{-27}\,\mathrm{erg\,s},
\end{aligned}
$$

$$
k_{\mathrm{B,hist}}=\frac{h_{\mathrm{hist}}c}{x_\lambda b_{\mathrm{hist}}}
\simeq1.346\times10^{-23}\,\mathrm{J\,K^{-1}}.
$$

这与普朗克在其论文中报告的 $h=6.55\times10^{-27}\,\mathrm{erg\,s}$、$k=1.346\times10^{-16}\,\mathrm{erg\,K^{-1}}$ 相符。现代数值与之存在小幅差别，反映了当时实验常数和测温精度的局限，而不是公式本身有问题。

**重要的科学史结论**：普朗克常数的早期数值不是随意设定的。它直接由当时可测的**总辐射强度**和**峰值波长随温度的移动**共同限制。参见 [普朗克1901年《论正常光谱中的能量分布规律》英译本（第 11—12 节）](https://www.lab.twcu.ac.jp/ando_k/planck1901.pdf)。

## 七、能否用一条光谱测出 h？

在完整定标的实验中，可以直接把多个温度下的光谱测量值拟合到 $B_\lambda$ 公式。它包含两个相互关联的常数组合：

$$
C_1=2hc^2,\qquad C_2=\frac{hc}{k_{\mathrm B}}.
$$

其中，$C_2$ 控制谱峰位置及高频衰减的尺度；$C_1$ 控制绝对辐亮度幅度。**只有相对归一化的光谱形状**往往不足以独立决定所有常数；需要绝对辐射标定、已知温度，以及对其他常数的额外信息。

在维恩高频极限，

$$
\ln\left(B_\lambda\lambda^5\right)
\simeq\ln(2hc^2)-\frac{hc}{\lambda k_{\mathrm B}}\frac{1}{T}.
$$

因此固定波长测量不同温度的 $\ln(B_\lambda\lambda^5)$ 对 $1/T$ 的斜率，可以求得 $hc/(\lambda k_{\mathrm B})$。若 $k_{\mathrm B}$ 已知，就能确定 $h$；若未知，则仍需独立信息。

## 八、约化普朗克常数与现代物理

量子力学常用约化普朗克常数

$$
\boxed{\hbar=\frac{h}{2\pi}\simeq1.054571817\times10^{-34}\ \mathrm{J\,s}.}
$$

它出现在 $E=\hbar\omega$（$\omega=2\pi\nu$）、角动量量子化、薛定谔方程和对易关系中。$h$ 与 $\hbar$ 不是两种独立的自然常数，只是对于循环频率与角频率的两种记法。

**数据出处**：[BIPM 国际单位制](https://www.bipm.org/en/measurement-units/)；[NIST 斯特藩–玻尔兹曼常数](https://physics.nist.gov/cgi-bin/cuu/Value?sigma)；[NIST 普朗克常数](https://www.nist.gov/si-redefinition/meet-constants)。
