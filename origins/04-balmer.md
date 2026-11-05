---
layout: origin
title: "为什么氢谱线服从整数公式？"
summary: "先有准确的实验波长，才有用整数描述谱线的经验规律。"
year: "1885—1890"
person: "巴耳末、里德伯"
question: "仅凭几条波长，能不能预测尚未测到的谱线？"
chapter: 4
chapter_count: 15
permalink: /origins/04-balmer.html
previous: /origins/03-spectrometer.html
previous_title: "19世纪怎样精确测出氢的波长？"
next: /origins/05-blackbody.html
next_title: "黑体辐射为何挑战经典理论？"
---

## 1885年的惊喜

巴耳末分析已有的氢谱测量结果，发现可见谱线满足

$$
\lambda_n=B\frac{n^2}{n^2-4},\qquad n=3,4,5,\ldots
$$

当时使用的经验常数约为 $B=364.56\,\mathrm{nm}$（与历史数据的空气波长约定相关）。现代采用真空波长时，对应的极限波长略有不同。

## 用公式预测谱线

| 整数 $n$ | 巴耳末公式近似值 | 光谱区域 |
|:---:|---:|---|
| 3 | $656.2\,\mathrm{nm}$ | 红 |
| 4 | $486.1\,\mathrm{nm}$ | 蓝绿 |
| 5 | $434.0\,\mathrm{nm}$ | 蓝紫 |
| 6 | $410.1\,\mathrm{nm}$ | 紫 |

> 表中数值按 $B=364.56\,\mathrm{nm}$ 四舍五入；历史公式与现代高精度真空谱线存在小的约定和修正差异。

## 从波长形式转为波数形式

对公式取倒数，得到

$$
\frac1\lambda=\frac1B\left(1-\frac4{n^2}\right)
=\frac4B\left(\frac14-\frac1{n^2}\right).
$$

因此定义 $R\approx 4/B$，便得到

$$
\frac1\lambda=R\left(\frac1{2^2}-\frac1{n^2}\right).
$$

后来的里德伯—里兹规律把这种“两个整数项之差”的结构推广到其他谱系。

## 当时真正令人困惑的是什么？

巴耳末不可能知道整数 $n$ 是电子的主量子数：电子要到1897年才获得明确实验身份。1885年，$n$ 首先是一个**数据组织指标**；把它解释为原子定态编号，是1913年以后才成立的事情。

### 史料与延伸阅读

- [Niels Bohr Institute：玻尔与巴耳末公式](https://nbi.ku.dk/english/www/niels/bohr/bohratomet/)
