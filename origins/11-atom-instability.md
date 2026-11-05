---
layout: origin
title: "经典电子为何会落向原子核？"
summary: "经典圆轨道与拉莫尔辐射结合后预测极短的原子塌缩时间。"
year: "1911—1913"
person: "卢瑟福、玻尔等"
question: "既然电子绕核需要加速度，它为什么不会持续辐射到坠入原子核？"
chapter: 11
chapter_count: 15
permalink: /origins/11-atom-instability.html
previous: /origins/10-rutherford.html
previous_title: "为什么原子必须有一个小而重的核？"
next: /origins/12-classical-frequency.html
next_title: "经典轨道为什么解释不了巴耳末谱线？"
---

## 假设核外电子作经典圆周运动

设氢核固定，电子质量 $m_e$、电量 $-e$，圆轨道半径为 $r$。库仑力提供向心力：

$$
\frac{m_ev^2}{r}=\frac{ke^2}{r^2},
\qquad k=\frac1{4\pi\varepsilon_0}.
$$

因此电子的动能、势能及总能量分别为

$$
T=\frac{ke^2}{2r},\quad V=-\frac{ke^2}{r},\quad
E=-\frac{ke^2}{2r}.
$$

## 加速电荷按经典电磁学辐射

圆周运动加速度为 $a=v^2/r=ke^2/(m_er^2)$。拉莫尔公式给出辐射功率

$$
P=\frac{e^2a^2}{6\pi\varepsilon_0c^3}
=\frac{2k^3e^6}{3m_e^2c^3r^4}.
$$

由 $dE/dt=-P$，又有 $dE/dr=ke^2/(2r^2)$，故

$$
\frac{dr}{dt}=-\frac{4k^2e^4}{3m_e^2c^3r^2}.
$$

积分到 $r=0$，得出理想化塌缩时间：

$$
\boxed{t_{\mathrm{coll}}=\frac{m_e^2c^3r_0^3}{4k^2e^4}.}
$$

## 数值有多惊人？

借用现代已知的原子尺度 $r_0=5.29\times10^{-11}\,\mathrm m$：

$$
t_{\mathrm{coll}}\simeq1.6\times10^{-11}\,\mathrm s.
$$

这一数量级远小于稳定原子的存在时间。计算采用非相对论、逐渐收缩的近圆轨道近似；随着半径逼近零近似会失效，结果应理解为**揭示严重不稳定性的数量级估算**，而非真实原子的寿命预测。选用玻尔半径作为初值也是现代回顾性的选择。

## 核心冲突

经典电动力学在无外力补偿的圆轨道中要求电子失去能量，实验却表明物质可长期稳定存在。玻尔后来不是改变库仑定律，而是改变对**允许的原子运动状态**和**辐射条件**的判断。

### 史料与延伸阅读

- [Niels Bohr Institute：1913年核式原子的稳定性问题](https://nbi.ku.dk/english/www/niels/bohr/bohratomet/)
