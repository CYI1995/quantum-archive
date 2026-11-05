---
layout: origin
title: "玻尔怎样解释氢的线状光谱？"
summary: "把允许的原子定态和辐射跃迁结合，推出氢样原子的 $1/n^2$ 能级。"
year: "1913"
person: "尼尔斯·玻尔"
question: "巴耳末公式里的整数，如何获得明确的物理意义？"
chapter: 14
chapter_count: 15
permalink: /origins/14-bohr-spectrum.html
previous: /origins/13-bohr-path.html
previous_title: "玻尔如何从原子结构转向光谱？"
next: /origins/15-tests.html
next_title: "新原子理论怎样接受实验检验？"
---

## 两条新原则

玻尔提出：原子可以处于某些不按经典电磁学连续辐射的定态；只有定态之间发生跃迁时，辐射频率满足

$$
\boxed{h\nu=E_i-E_f.}
$$

这是对经典力学—电磁学共同框架的实质性改变。在当时，解释这种跃迁如何发生仍然困难。

## 现代教科书式圆轨道推导

在库仑力下，

$$
m_ev^2/r=\frac{Ze^2}{4\pi\varepsilon_0r^2}.
$$

再施加简化量子条件 $m_evr=n\hbar$，得到

$$
r_n=\frac{4\pi\varepsilon_0\hbar^2}{m_eZe^2}n^2
=\frac{a_0n^2}{Z},
$$

$$
\boxed{E_n=-\frac{m_eZ^2e^4}{2(4\pi\varepsilon_0)^2\hbar^2}\frac1{n^2}.}
$$

对于氢 ($Z=1$) 且忽略核质量修正：$E_n\simeq-13.6/n^2\,\mathrm{eV}$。

## 预测红色氢线

从 $n=3$ 到 $n=2$，能量差为

$$
\Delta E=13.6\left(\frac1{2^2}-\frac1{3^2}\right)\,\mathrm{eV}
\simeq1.889\,\mathrm{eV}.
$$

于是

$$
\lambda=\frac{hc}{\Delta E}
\simeq\frac{1240\,\mathrm{eV\,nm}}{1.889\,\mathrm{eV}}
\simeq656.4\,\mathrm{nm},
$$

与巴耳末红线非常接近。加入约化质量及更精细修正可进一步提高精度。

## 历史上的限制

这是对玻尔模型的**现代简洁重构**，不等于逐字复现1913年三篇原始论文的推理顺序。模型成功解释了氢样单电子体系的谱线位置，但对多电子原子、谱线相对强度和量子跃迁机制仍缺乏一般处理办法。

### 史料与延伸阅读

- [Niels Bohr Institute：玻尔1913年三篇论文与后续影响](https://nbi.ku.dk/english/www/niels/bohr/bohratomet/)
- [网站现有的1913年历史节点]({{ '/events/bohr-1913.html' | relative_url }})
