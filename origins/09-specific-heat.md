---
layout: origin
title: "为什么固体比热也需要量子假设？"
summary: "量子思想开始从辐射问题延伸至物质内部的热运动。"
year: "1907"
person: "爱因斯坦"
question: "如果每个原子都像经典振子那样吸收热量，为什么低温固体比热会下降？"
chapter: 9
chapter_count: 15
permalink: /origins/09-specific-heat.html
previous: /origins/08-einstein.html
previous_title: "爱因斯坦为什么提出光量子？"
next: /origins/10-rutherford.html
next_title: "为什么原子必须有一个小而重的核？"
---

## 经典固体比热的预测

在简化的经典三维晶格模型中，每个原子沿三个方向振动，每个谐振动方向平均具有 $k_BT$ 的总能量。因此对 $N$ 个原子：

$$
U\simeq3Nk_BT,
\qquad C_V=\left(\frac{\partial U}{\partial T}\right)_V\simeq3Nk_B.
$$

这与许多固体在较高温度下的杜隆—珀替规律相符，却不能解释低温时比热下降的事实。

## 1907年的爱因斯坦模型

爱因斯坦把固体原子振动近似为频率相同的量子振子。若忽略不影响比热的零点能常数，平均能量为

$$
U(T)=3N\frac{\hbar\omega_E}{e^{\hbar\omega_E/(k_BT)}-1}.
$$

定义爱因斯坦温度 $\Theta_E=\hbar\omega_E/k_B$，求导可得

$$
\boxed{C_V=3Nk_B\left(\frac{\Theta_E}{T}\right)^2
\frac{e^{\Theta_E/T}}{\left(e^{\Theta_E/T}-1\right)^2}.}
$$

- 高温 $T\gg\Theta_E$：$C_V\to3Nk_B$，恢复经典结果。
- 低温 $T\ll\Theta_E$：$C_V$ 显著下降。

真实固体在极低温下的比热行为还需要考虑声子频率分布等因素，后来德拜模型给出更好的描述。

## 历史意义

量子思想不再只是用来修补一个辐射谱公式，它开始解释物质的热性质。与此同时，**以经典理论为近似极限**的要求变得越来越重要。

### 史料与延伸阅读

- [马克斯·普朗克科学史研究所：爱因斯坦与低温物理](https://einstein-virtuell.mpiwg-berlin.mpg.de/VEA/SC-344097251_MOD1411567809_SEQ198760658_SL1470275376_en.html)
