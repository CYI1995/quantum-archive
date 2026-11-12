---
layout: "event"
title: "05｜普朗克的理论：从能量元到辐射定律"
year: "1900"
person: "马克斯·普朗克、路德维希·玻尔兹曼"
summary: "把谐振子的能量分成有限份额，如何一步一步得到普朗克黑体公式？"
keyword: "普朗克公式、配分函数、熵、微观态计数"
stage: 1
order: 1900
record: "1.5"
slug: "planck-1900-theory"
permalink: "/events/planck-1900/05-planck-theory.html"
---

[上一篇：经典理论]({{ '/events/planck-1900/04-classical-crisis.html' | relative_url }}) · [专题目录]({{ '/events/planck-1900.html' | relative_url }}) · [下一篇：常数测定]({{ '/events/planck-1900/06-planck-constant.html' | relative_url }})

> **推导目标**：寻找一个温度依赖的单模态平均能量 $\overline E(\nu,T)$，使得黑体在高频区指数衰减、低频区恢复经典均分，并且总辐射能量有限。

## 一、第一步：将辐射看作空腔模态的集合

在体积为 $V$ 的大空腔中，频率落在 $[\nu,\nu+d\nu]$ 区间的独立电磁模态数为

$$
g(\nu)d\nu=\frac{8\pi V\nu^2}{c^3}\,d\nu.
$$

这是由麦克斯韦理论、空腔边界条件和两种光偏振得到的**模态计数结果**，本身并不需要量子假设。单位体积的能量密度只要再乘以每个模态的平均能量，就可以写成

$$
u_\nu(T)=\frac{8\pi\nu^2}{c^3}\,\overline E(\nu,T).
$$

因此关键转移为一个微观问题：处于温度 $T$ 热平衡的振动模态，平均可以携带多少能量？

## 二、第二步：引入大小为 $h\nu$ 的能量元

普朗克在 1900 年 12 月的统计论证中，让频率为 $\nu$ 的谐振子能量由大小为 $\varepsilon$ 的能量元构成：

$$
\boxed{\varepsilon=h\nu.}
$$

这里 $h$ 是普朗克为了匹配热辐射定律而引入的普适常数。以现代量子统计语言，一个模态可占据的激发能写作

$$
E_n=n h\nu,\qquad n=0,1,2,\ldots.
$$

这并不意味着普朗克本人在 1900 年已经提出了“自由光在空间中由独立光子组成”的完整观点。上述 $E_n$ 形式是与普朗克计数相容的现代重述；谐振子的零点能以及辐射场的量子化是在后续量子理论中得到系统处理的。

为什么能量元要与 $\nu$ 成正比？因为黑体辐射的热力学位移规律要求谱形随 $\nu/T$ 缩放；$h\nu/(k_{\mathrm B}T)$ 正好提供了控制每个模态热激发的无量纲组合。**$\varepsilon=h\nu$ 是新的物理假设，不是由经典麦克斯韦方程自动推出的。**

## 三、第三步：用配分函数计算平均能量（现代最短推导）

令 $\beta=(k_{\mathrm B}T)^{-1}$。能量为 $E_n=nh\nu$ 的热平衡状态具有玻尔兹曼权重 $e^{-\beta n h\nu}$。单个模态的正则配分函数是几何级数：

$$
\begin{aligned}
Z(\nu,T)
&=\sum_{n=0}^{\infty}e^{-\beta nh\nu}\\
&=\frac{1}{1-e^{-\beta h\nu}}.
\end{aligned}
$$

由热力学恒等式 $\overline E=-\partial_\beta\ln Z$ 得到

$$
\begin{aligned}
\overline E(\nu,T)
&=-\frac{\partial}{\partial\beta}
  \left[-\ln(1-e^{-\beta h\nu})\right]\\
&=\frac{h\nu}{e^{\beta h\nu}-1}.
\end{aligned}
$$

于是

$$
\boxed{\overline E(\nu,T)=\frac{h\nu}{\exp\!\left(\frac{h\nu}{k_{\mathrm B}T}\right)-1}.}
$$

物理意义非常清楚：当 $h\nu\ll k_{\mathrm B}T$ 时，多次吸收能量元并不昂贵；当 $h\nu\gg k_{\mathrm B}T$ 时，获得哪怕一份能量元都受到指数因子强烈抑制。

## 四、第四步：代回电磁场态密度

将每模态平均能量乘以单位体积的模态数：

$$
\begin{aligned}
u_\nu(T)
&=\frac{8\pi\nu^2}{c^3}\overline E(\nu,T)\\
&=\boxed{\frac{8\pi h\nu^3}{c^3}
\frac{1}{\exp\!\left(\frac{h\nu}{k_{\mathrm B}T}\right)-1}}.
\end{aligned}
$$

对于各向同性空腔辐射，谱能量密度 $u_\nu$ 与谱辐亮度 $B_\nu$ 的关系为 $u_\nu=4\pi B_\nu/c$，所以

$$
\boxed{B_\nu(T)=\frac{2h\nu^3}{c^2}
\frac{1}{\exp\!\left(\frac{h\nu}{k_{\mathrm B}T}\right)-1}.}
$$

改变变量 $\nu=c/\lambda$ 时，必须使用 $\left\lvert d\nu/d\lambda\right\rvert=c/\lambda^2$，故得到波长形式：

$$
\boxed{B_\lambda(T)=\frac{2hc^2}{\lambda^5}
\frac{1}{\exp\!\left(\frac{hc}{\lambda k_{\mathrm B}T}\right)-1}.}
$$

这就是**普朗克黑体辐射定律**。两种谱的物理信息相同，但单位及峰值坐标的定义不同。

## 五、第五步：1900 年式的熵与微观态计数（更接近历史论证）

前面使用配分函数是现代教科书最直接的推导。若希望理解普朗克在 1900 年实际采取的思想，需要回到**有限能量元的分配方式**。

设有 $N$ 个相同频率的谐振子，总能量 $E=P\varepsilon$，其中 $P$ 是非负整数个能量元。把 $P$ 个不加区分的能量元分配给 $N$ 个可区分的谐振子，每个谐振子可获得 $0,1,2,\ldots$ 个能量元，分配数为

$$
\boxed{W(N,P)=\binom{P+N-1}{P}=\frac{(P+N-1)!}{P!(N-1)!}.}
$$

这是把整数 $P$ 分拆为 $N$ 个非负整数的“隔板法”计数：一共有 $P$ 个量子单元和 $N-1$ 个隔板。

使用玻尔兹曼关系 $S=k_{\mathrm B}\ln W$，对 $N,P\gg1$ 用斯特林近似，可得

$$
S\simeq k_{\mathrm B}\left[(P+N)\ln(P+N)-P\ln P-N\ln N\right].
$$

定义每振子的平均能量 $U=E/N=P\varepsilon/N$，则单振子的熵 $s=S/N$ 为

$$
\boxed{s(U)=k_{\mathrm B}\left[
\left(1+\frac{U}{\varepsilon}\right)\ln\left(1+\frac{U}{\varepsilon}\right)
-\frac{U}{\varepsilon}\ln\frac{U}{\varepsilon}
\right].}
$$

热力学给出 $\partial s/\partial U=1/T$，计算导数：

$$
\frac{1}{T}=\frac{k_{\mathrm B}}{\varepsilon}
\ln\left(1+\frac{\varepsilon}{U}\right).
$$

解出 $U$：

$$
\exp\!\left(\frac{\varepsilon}{k_{\mathrm B}T}\right)=1+\frac{\varepsilon}{U},
\qquad
\boxed{U=\frac{\varepsilon}{e^{\varepsilon/(k_{\mathrm B}T)}-1}}.
$$

令 $\varepsilon=h\nu$，就得到了与现代配分函数法完全一致的平均能量公式。

**历史解释边界**：上述“$P$ 个无区别能量元的隔板计数”是对普朗克方法的标准重构，不能直接等同于他已经提出了现代玻色子的完整理论；玻色统计和量子电磁场是在更晚时期形成的。

## 六、第六步：恢复两条经典极限

引入 $x=h\nu/(k_{\mathrm B}T)$。当 $x\ll1$ 时，$e^x-1=x+O(x^2)$，于是

$$
\overline E=\frac{h\nu}{x+O(x^2)}\simeq k_{\mathrm B}T.
$$

这正是经典能量均分：经典理论没有完全错，它是**量子能量元远小于热能**时的正确极限。

当 $x\gg1$ 时，$e^x-1\simeq e^x$，故

$$
\overline E\simeq h\nu e^{-h\nu/(k_{\mathrm B}T)}.
$$

高频模式被指数抑制，因此总辐射能量不再发散。

## 七、为什么这一步改变了物理学？

经典物理允许振动模态的能量取任意正实数，而普朗克的统计解释引入频率决定的基本能量元。一条原本寻求热辐射拟合的公式，迫使人们重新审视平衡态中的自由度、熵的统计含义和能量交换过程。

但需要牢记：**现代配分函数推导给出的是在量子能级假设下的结果；它并没有从更基本的纯经典定律推出 $h$ 的存在和数值。** 后者需要实验以及更一般的量子理论来理解。

**参考**：[普朗克 1918 年诺贝尔演讲](https://www.nobelprize.org/prizes/physics/1918/planck/lecture/)；[普朗克学会历史说明](https://www.mpg.de/19252749/what-did-max-planck-discover)。
