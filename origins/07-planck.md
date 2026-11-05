---
layout: origin
title: "普朗克为何引入能量元？"
summary: "普朗克通过能量分配与统计计数得到正确的黑体谱。"
year: "1900"
person: "马克斯·普朗克"
question: "是什么数学选择使普朗克得到一个此前无人发现的常数 $h$？"
chapter: 7
chapter_count: 15
permalink: /origins/07-planck.html
previous: /origins/06-electron.html
previous_title: "电子如何改变原子的概念？"
next: /origins/08-einstein.html
next_title: "爱因斯坦为什么提出光量子？"
---

## 1900年发生了两件不同的事

1900年10月，普朗克提出能够符合实验的辐射谱公式；12月，他借助统计计数给出一条推导思路。普朗克最初希望找到与热力学和电动力学相容的解释，并未立刻宣布经典力学整体失效。

## 把能量划分成可计数的份额

设有 $N$ 个振子共享总能量 $U$，将能量按单位 $\epsilon=h\nu$ 划分成 $P=U/\epsilon$ 份，组合数为

$$
W=\frac{(N+P-1)!}{P!\,(N-1)!}.
$$

取热力学熵 $S=k_B\ln W$ 并在大数极限使用斯特林公式，可以得到平均能量与温度的关系：

$$
\bar E(\nu,T)=\frac{h\nu}{e^{h\nu/(k_BT)}-1}.
$$

进一步乘上腔体电磁模密度：

$$
\boxed{u(\nu,T)=\frac{8\pi h\nu^3}{c^3}
\frac{1}{e^{h\nu/(k_BT)}-1}.}
$$

这里 $u$ 是单位体积单位频率的能量密度。

## 经典极限为什么仍然成立？

若 $x=h\nu/(k_BT)\ll1$，由于 $e^x-1\simeq x$，

$$
\bar E\simeq k_BT,
\qquad u\simeq\frac{8\pi\nu^2k_BT}{c^3}.
$$

高温或低频极限恢复经典均分的结果，但高频处能量受抑制。

## 需要避免的历史倒置

普朗克的能量元不等于他已接受“空间中传播的光由离散粒子组成”。**从振子计数到光量子，是下一步更激进的思想变化。**

### 原始史料与延伸阅读

- [普朗克的1920年诺贝尔演讲](https://www.nobelprize.org/prizes/physics/1918/planck/lecture/)
- [APS：1900年黑体问题的历史](https://www.aps.org/apsnews/2002/10/this-month-in-physics-history)
