---
layout: "event"
title: "黑体辐射与普朗克量子假说"
year: "1900"
person: "马克斯·普朗克、威廉·维恩、海因里希·鲁本斯等"
summary: "一条关于热辐射的普适规律，为什么最终迫使物理学家引入能量量子？"
keyword: "黑体辐射、普朗克公式、能量量子、普朗克常数"
stage: 1
order: 1900
record: "1"
slug: "planck-1900"
lab: "/assets/labs/planck-blackbody.html"
permalink: "/events/planck-1900.html"
next_slug: "bohr-1913"
next_title: "定态与能级跃迁"
---

> **专题问题**：为什么烧热的物体会发光？为什么温度越高，光的颜色越偏向短波？如果电磁波服从麦克斯韦方程，而热平衡服从统计力学，为何两者竟无法共同解释完整的热辐射光谱？

1900 年，马克斯·普朗克（Max Planck，1858—1947）为解释黑体辐射引入新的常数 $h$，并在统计计数中使用大小与振动频率成正比的**能量元** $\varepsilon=h\nu$。这一构造最初是对精密实验和热力学问题的回应，后来却成为整个量子理论的起点。

<div class="record-note" markdown="1">
**阅读路线**：本专题分为七篇连贯档案，从**历史—人物—仪器—经典理论的困难—普朗克推导—常数测定—历史影响**展开。公式中 $\nu$ 表示频率，$\lambda$ 表示波长，$T$ 表示绝对温度；凡标注“示意”的图像均非历史实测原始数据。
</div>

## 一、历史现场：1900 年究竟解决了什么？

19 世纪后半叶，物理学家知道热辐射与电磁波有关，也认识到理想黑体的辐射谱只由温度决定，却始终找不到同时适用于所有频率的辐射分布公式。维恩（Wien）的经验规律成功描述了高频区，而德国帝国物理技术研究所的精密测量在长波段暴露出系统偏差。

普朗克先于 **1900 年 10 月 19 日**报告新的谱公式，随后于 **12 月 14 日**给出诉诸玻尔兹曼统计计数、引入 $h\nu$ 能量元的解释。值得注意：**1900 年的普朗克并未提出后来爱因斯坦式的自由光量子概念**；光场和谐振子究竟该如何量子化，是此后逐步澄清的问题。

| 年份 | 进展 | 为什么重要 |
|:--|:--|:--|
| 1859—1860 | 基尔霍夫提出热辐射的普适性问题 | 把不同材料的发光转化为共同的黑体问题 |
| 1879、1884 | 斯特藩提出 $T^4$ 规律，玻尔兹曼加以理论解释 | 认识到总辐射功率随温度快速增长 |
| 1893、1896 | 维恩提出位移规律与谱分布公式 | 获得约束辐射光谱的关键规律 |
| 1890 年代后期—1900 | 卢默、普林斯海姆、鲁本斯、库尔鲍姆等改进实验 | 长波数据否定维恩公式的普适性 |
| 1900 年 10 月 19 日 | 普朗克公布新辐射公式 | 成功描述完整频谱 |
| 1900 年 12 月 14 日 | 普朗克给出统计解释及能量元 $h\nu$ | 量子理论的重要开端 |

## 二、专题目录

1. **[01｜历史背景：为何热辐射成为难题]({{ '/events/planck-1900/01-history.html' | relative_url }})**：从炉火、光谱和热力学到精密测量；区分真实历史顺序与教科书的倒叙。
2. **[02｜人物档案：谁推动了黑体问题]({{ '/events/planck-1900/02-people.html' | relative_url }})**：基尔霍夫、斯特藩、玻尔兹曼、维恩、普朗克与实验团队。
3. **[03｜实验仪器：怎样测量一个理想黑体]({{ '/events/planck-1900/03-experiment.html' | relative_url }})**：加热空腔、小孔、分光仪、红外探测与数据处理。
4. **[04｜经典理论为何失效]({{ '/events/planck-1900/04-classical-crisis.html' | relative_url }})**：电磁场模态计数、能量均分、维恩近似和紫外灾难。
5. **[05｜普朗克理论的逐步推导]({{ '/events/planck-1900/05-planck-theory.html' | relative_url }})**：能量元、微观态计数、熵、平均能量与完整辐射定律。
6. **[06｜普朗克常数如何确定]({{ '/events/planck-1900/06-planck-constant.html' | relative_url }})**：用维恩位移常数与斯特藩–玻尔兹曼常数求得 $h$；给出数值计算和限制。
7. **[07｜从量子假说到量子力学]({{ '/events/planck-1900/07-legacy.html' | relative_url }})**：1905 年爱因斯坦、1913 年玻尔与后来场的量子化。

## 三、看见问题：黑体光谱并不任意

<figure>
  <img src="{{ '/assets/images/planck-cavity.svg' | relative_url }}" alt="黑体空腔实验示意：加热腔体的小孔辐射经过分光器进入探测器" loading="lazy" style="width:100%;height:auto;" />
  <figcaption>图 1｜空腔黑体与光谱测量的现代示意；不是 1900 年实验室仪器的等比例复原。</figcaption>
</figure>

<figure>
  <img src="{{ '/assets/images/planck-spectrum.svg' | relative_url }}" alt="不同温度下的普朗克波长谱与一个温度下的经典瑞利–金斯曲线比较" loading="lazy" style="width:100%;height:auto;" />
  <figcaption>图 2｜根据理论公式计算的谱线，而非历史测量数据。随着温度增加，光谱峰值向较短波长移动；高频区的经典预测出现严重偏差。</figcaption>
</figure>

## 四、三条公式串起整个专题

**波长形式的普朗克谱辐亮度**（单位为 $\mathrm{W\,m^{-3}\,sr^{-1}}$）：

$$
\boxed{B_\lambda(T)=\frac{2hc^2}{\lambda^5}\,\frac{1}{\exp\!\left(\frac{hc}{\lambda k_{\mathrm B}T}\right)-1}.}
$$

**维恩位移规律**（这里的峰值按单位波长定义）：

$$
\lambda_{\max}T=b\simeq 2.89777\times10^{-3}\,\mathrm{m\,K}.
$$

**普朗克常数**（现行 SI 的准确规定值）：

$$
\boxed{h=6.62607015\times10^{-34}\,\mathrm{J\,s}.}
$$

物理上的关键不是“已经知道 $h$，将它代入公式”，而是：**对黑体光谱的测量最初反过来帮助人们发现并测定这个新的自然常数**。今天的 SI 将其数值固定为定义值，两种语境应予以区分。

## 五、交互演示：改变温度，查看光谱

<iframe src="{{ '/assets/labs/planck-blackbody.html' | relative_url }}" title="黑体辐射与普朗克定律交互演示" loading="lazy" style="display:block;width:100%;height:690px;border:1px solid #d8e1e8;border-radius:12px;background:#f7f9fc;"></iframe>

<p><a href="{{ '/assets/labs/planck-blackbody.html' | relative_url }}" target="_blank" rel="noopener noreferrer">在新窗口打开实验演示</a>。调节温度并观察峰值波长与辐射总功率；对比瑞利–金斯经典预测在短波区域的偏离。</p>

## 六、继续阅读

建议先阅读[历史背景]({{ '/events/planck-1900/01-history.html' | relative_url }})和[仪器原理]({{ '/events/planck-1900/03-experiment.html' | relative_url }})，再进入[逐步理论推导]({{ '/events/planck-1900/05-planck-theory.html' | relative_url }})与[普朗克常数测定]({{ '/events/planck-1900/06-planck-constant.html' | relative_url }})。不熟悉统计物理的读者可先看第四篇中的频率模态与能量均分，再回到第五篇。

**资料来源与进一步阅读**：

- [马克斯·普朗克学会：普朗克发现了什么？](https://www.mpg.de/19252749/what-did-max-planck-discover)
- [美国物理学会：1900 年 10 月的普朗克辐射公式](https://www.aps.org/apsnews/2002/10/this-month-in-physics-history)
- [普朗克诺贝尔演讲](https://www.nobelprize.org/prizes/physics/1918/planck/lecture/)
- [国际计量局：国际单位制与定义常数](https://www.bipm.org/en/measurement-units/)
