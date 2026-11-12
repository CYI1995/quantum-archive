---
layout: "event"
title: "04｜经典理论为何失效？从模态计数到紫外灾难"
year: "1896—1905"
person: "维恩、瑞利、金斯、普朗克"
summary: "电磁场的经典模态与能量均分为什么预测出发散的高频辐射？"
keyword: "能量均分、瑞利–金斯公式、维恩定律、紫外灾难"
stage: 1
order: 1900
record: "1.4"
slug: "planck-1900-classical"
permalink: "/events/planck-1900/04-classical-crisis.html"
---

[上一篇：实验仪器]({{ '/events/planck-1900/03-experiment.html' | relative_url }}) · [专题目录]({{ '/events/planck-1900.html' | relative_url }}) · [下一篇：普朗克理论]({{ '/events/planck-1900/05-planck-theory.html' | relative_url }})

> **两个不同层次的问题**：电磁学告诉我们有哪些振动模态；统计力学还必须回答每个模态在热平衡时平均获得多少能量。经典理论的危机出现在这两者的组合上。

## 一、空腔中为什么有离散的电磁场模态？

想象一个边长 $L$ 的立方空腔，体积 $V=L^3$。在适当边界条件下，电磁场可分解为一系列驻波。波矢空间中模态近似构成网格；考虑两种横向偏振态，在大体积极限下，频率位于 $\nu$ 与 $\nu+d\nu$ 之间的模态数为

$$
\boxed{g(\nu)\,d\nu=\frac{8\pi V\nu^2}{c^3}\,d\nu.}
$$

一种快速记忆方式是：波矢空间球壳体积与 $k^2dk$ 成正比，频率与波矢模长线性相关，而两种光偏振提供一个因子 2。

将模态数除以空腔体积，得到单位体积的频率态密度：

$$
D(\nu)=\frac{g(\nu)}{V}=\frac{8\pi\nu^2}{c^3}.
$$

**注意**：空腔模态的“离散”来源于边界条件，并不意味着每个模态的能量已经量子化。在经典电磁学中，单个模态振荡的振幅仍可连续变化，因而其能量也连续。

## 二、经典能量均分推出什么？

在经典热平衡理论中，一个谐振子具有两个二次型自由度：一个类似坐标平方，一个类似动量平方。能量均分定理令每项平均能量为 $k_{\mathrm B}T/2$，所以每个电磁模态平均具有

$$
\langle E\rangle_{\mathrm{cl}}=k_{\mathrm B}T.
$$

把它与模态密度相乘，得到每单位体积、每单位频率的辐射能量密度：

以下用 $u_\nu$ 表示单位体积、单位频率的谱能量密度。

$$
\boxed{u_\nu^{\mathrm{RJ}}(T)=\frac{8\pi\nu^2}{c^3}k_{\mathrm B}T.}
$$

进一步由各向同性辐射场的关系 $u_\nu=4\pi B_\nu/c$，得

$$
B_\nu^{\mathrm{RJ}}(T)=\frac{2\nu^2k_{\mathrm B}T}{c^2},
\qquad
B_\lambda^{\mathrm{RJ}}(T)=\frac{2ck_{\mathrm B}T}{\lambda^4}.
$$

这就是现代所称的**瑞利–金斯公式**（Rayleigh–Jeans law）。历史上，瑞利于 1900 年提出相关估计；金斯的相关修正来自 1905 年。因而它适合作为“经典理论极限”的现代推导，不应被误写成普朗克提出新公式之前便已完整确立的历史共识。

## 三、紫外灾难究竟是什么？

高频极限 $\nu\to\infty$ 时，$u_\nu^{\mathrm{RJ}}\propto\nu^2$，单个模态的平均能量不随频率减少，但单位频率范围内的模态数却迅速增多。

于是总能量密度发散：

$$
\int_0^\infty u_\nu^{\mathrm{RJ}}(T)\,d\nu
=\frac{8\pi k_{\mathrm B}T}{c^3}\int_0^\infty\nu^2\,d\nu
=\infty.
$$

同样，按波长表述时，$B_\lambda^{\mathrm{RJ}}\propto\lambda^{-4}$ 在 $\lambda\to0$ 的短波区发散。

这不是说**真实物体会发出无限大功率**；这是说“所有模态都遵循经典能量均分”的理论假设与实际光谱不相容。历史上“紫外灾难”的叙事是在这一理论冲突被明确认识后逐渐建立的。

## 四、为什么维恩公式又不够？

维恩在 1896 年提出的谱分布，在现代常数记号下可以写作

$$
B_\lambda^{\mathrm{Wien}}(T)
=\frac{2hc^2}{\lambda^5}
\exp\!\left(-\frac{hc}{\lambda k_{\mathrm B}T}\right).
$$

这个表达式是**普朗克定律在短波极限下的形式**。把它写成含有 $h$ 与 $k_{\mathrm B}$ 的形式是现代回顾性记法，不意味着维恩在 1896 年已经提出了量子常数 $h$。

维恩分布在 $hc/(\lambda k_{\mathrm B}T)\gg1$ 时相当准确，却在长波、低频区域逐渐偏离实验。

在两个极限上，困难方向刚好相反：

| 区域 | 维恩公式 | 瑞利–金斯公式 | 实际结果 |
|:--|:--|:--|:--|
| 高频、短波 | 正确的渐近行为 | 预测过量，最终发散 | 有限且指数衰减 |
| 低频、长波 | 低估辐射 | 正确的渐近行为 | 近似随温度线性变化 |

## 五、一个统一表达式可以连接两个极限吗？

普朗克提出的函数是

$$
B_\nu(T)=\frac{2h\nu^3}{c^2}
\frac{1}{e^{h\nu/(k_{\mathrm B}T)}-1}.
$$

定义无量纲变量 $x=h\nu/(k_{\mathrm B}T)$：

- 高频 $x\gg1$ 时，$e^x-1\simeq e^x$，得到维恩型指数衰减。
- 低频 $x\ll1$ 时，$e^x-1\simeq x$，得到 $B_\nu\simeq2\nu^2 k_{\mathrm B}T/c^2$，即瑞利–金斯极限。

它以一个新的频率相关能量尺度 $h\nu$，使两个原先不相容的经典近似各自在其有效范围内保留下来。

<figure>
<img src="{{ '/assets/images/planck-spectrum.svg' | relative_url }}" alt="普朗克光谱和瑞利–金斯极限比较" loading="lazy" style="width:100%;height:auto;" />
<figcaption>按理论方程计算的示意曲线；虚线的经典预测在短波端偏离普朗克结果。</figcaption>
</figure>

**关键思考**：如果某个模态每多吸收一份能量都必须付出 $h\nu$，那么高频模态在给定温度下被激发的概率会怎样变化？[下一篇]({{ '/events/planck-1900/05-planck-theory.html' | relative_url }})从统计计数回答这个问题。
