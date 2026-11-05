---
layout: event
title: "为什么氢谱最终引向矩阵力学？"
year: "1925—1926"
person: "尼尔斯·玻尔及其时代"
summary: "从里兹组合原理到海森堡和泡利"
keyword: "矩阵力学"
stage: 1
record: "4.10"
permalink: "/events/bohr-1913/10-matrix-mechanics.html"
---
> **1913年玻尔专题 · 10/10**　|　[返回专题目录]({{ '/events/bohr-1913.html' | relative_url }})

**上一篇：** [玻尔模型为什么仍不完整？]({{ '/events/bohr-1913/09-limitations.html' | relative_url }})

> **史学提示**：这里将1925—1926年的理论发展作为氢光谱专题的延伸；矩阵力学的诞生还有色散、跃迁强度、对应原理等更广泛的历史背景。

## 七、为什么这段历史是学习矩阵力学的最佳入口？

玻尔的突破在于把**谱线频率**解释为**能量差**；但到1920年代，物理学家还需要解释每条谱线的**强度和选择定则**。这促使海森堡转向实验上能直接讨论的量——不同状态之间的跃迁频率与跃迁振幅，而不再把不可直接观测的电子轨道当作理论起点。

1908年提出的**里兹组合原理**提示谱线频率具有差值结构。例如对于三个能级，

$$
\nu_{ik}+\nu_{kj}=\nu_{ij},
\qquad \nu_{ij}=\frac{E_i-E_j}{h}
$$

（在统一采用有符号频率差的约定下）。这正是把物理量组织成带有**两个状态指标**的数组的重要线索。

- **1925年**：海森堡建立以可观测跃迁量为中心的新力学；玻恩和约尔当认识到其乘法结构与矩阵代数相联系。
- **1926年**：泡利（Wolfgang Pauli）在矩阵力学框架内，利用角动量与后来称为 Laplace–Runge–Lenz 向量的守恒量，以代数方法推得氢原子的离散能级。这证明**无需假设电子沿一条真实的玻尔圆轨道运行，也能得到正确的氢能级公式**。
- **现代量子力学**：能级由哈密顿算符的本征值给出；谱线强度还与跃迁矩阵元（例如电偶极近似中的 $|\langle f|\mathbf r|i\rangle|^2$）及实验条件有关。

因此，从氢谱到矩阵力学的发展可以概括为：

> **测量波长 → 发现整数规律 → 提出量子化能级 → 放弃经典轨道、建立算符与矩阵描述。**

**与后续“泡利代数推导氢能级”章节的衔接问题：**玻尔凭借额外的量子条件得到了正确的 $E_n$；泡利则要回答：能否仅从新量子力学的运动方程、对易关系与守恒量出发，严格导出同一能谱？

## 八、教学讨论：让学生区分“实验事实”和“后来解释”

1. **1885年的巴耳末能否在实验报告中写“电子从 $n=3$ 跃迁到 $n=2$”？** 不能。谱线、波长和经验公式可以测得；电子、定态及跃迁解释尚未建立。
2. **如果在1913年说“氢的红光对应一个光子”，哪里存在时代错置？** 能量与频率的量子关系已经进入理论讨论，但“photon”一词尚未出现，现代光子理论也没有成熟。
3. **为什么光谱实验能够推动矩阵力学诞生？** 它直接给出跃迁频率与相对强度，促使新理论改为描述不同状态之间的可测联系。

## 参考资料与原始史料

1. J. J. Balmer, *Note on the Spectral Lines of Hydrogen* (1885)，含原文英译及其利用埃格斯特伦测量值的说明：[York University 文献页](https://www.yorku.ca/menary/courses/2040/misc/balmer.html)。
2. J. Tatum, *The Hydrogen Spectrum*，巴耳末谱线的标准空气波长：[Physics LibreTexts](https://phys.libretexts.org/Bookshelves/Astronomy__Cosmology/Stellar_Atmospheres_%28Tatum%29/07%3A_Atomic_Spectroscopy/7.03%3A_The_Hydrogen_Spectrum)。
3. V. Thomsen, *The Spectral Lines of Hydrogen* (2008)，19世纪光谱学与巴耳末—里德伯公式的历史综述：[Spectroscopy](https://www.spectroscopyonline.com/view/spectral-lines-hydrogen)。
4. American Physical Society, *October 1897: The Discovery of the Electron*：[APS News](https://www.aps.org/apsnews/2000/10/discovery-of-the-electron)。
5. Niels Bohr Institute, University of Copenhagen, *Bohr's atomic model*，包括玻尔接触巴耳末公式及1913年论文的历史：[哥本哈根大学](https://nbi.ku.dk/english/www/niels/bohr/bohratomet/)。
6. N. Bohr, *On the Constitution of Atoms and Molecules*, *Philosophical Magazine* (1913)，原始论文全文：[Project Gutenberg](https://www.gutenberg.org/cache/epub/72787/pg72787-images.html)。
7. NobelPrize.org, *Niels Bohr — Facts*：1922年诺贝尔物理学奖及玻尔模型概述：[诺贝尔奖官网](https://www.nobelprize.org/prizes/physics/1922/bohr/facts/)。
8. American Physical Society, *December 18, 1926: Gilbert Lewis Coins “Photon” in Letter to Nature*：[APS News](https://www.aps.org/apsnews/2012/12/gilbert-lewis-coins-photon-letter)。
9. American Institute of Physics, *Heisenberg's Breakthrough*：从可测谱线到1925年新力学：[AIP 物理史展览](https://history.aip.org/exhibits/heisenberg/breakthrough.html)。
10. *Quantum mechanics, radiation, and the equivalence proof*, *Archive for History of Exact Sciences* (2024)：泡利利用守恒量求解氢能级，以及早期矩阵力学仍未解决谱线强度的历史讨论：[Springer](https://link.springer.com/article/10.1007/s00407-024-00334-4)。

---

*备注：本材料用现代符号重述历史理论，特别是约化质量、跃迁量子数与“光子”的说法，均已尽量注明与当时原始理解的区别。*

---

**本专题导航：** [专题目录]({{ '/events/bohr-1913.html' | relative_url }})　·　[← 上一页]({{ '/events/bohr-1913/09-limitations.html' | relative_url }})　·　阅读完毕
