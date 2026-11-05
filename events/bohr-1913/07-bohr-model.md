---
layout: event
title: "玻尔怎样得到离散能级？"
year: "1913"
person: "尼尔斯·玻尔及其时代"
summary: "定态假设、跃迁频率和角动量量子条件"
keyword: "玻尔模型"
stage: 1
record: "4.7"
permalink: "/events/bohr-1913/07-bohr-model.html"
---
> **1913年玻尔专题 · 7/10**　|　[返回专题目录]({{ '/events/bohr-1913.html' | relative_url }})

**上一篇：** [经典轨道为何解释不了离散谱线？]({{ '/events/bohr-1913/06-spectral-crisis.html' | relative_url }})

## 六、玻尔究竟做了什么？

### 6.1 将卢瑟福核式原子与量子假设结合

尼尔斯·玻尔（Niels Bohr）在1912年曾在卢瑟福的曼彻斯特实验室工作，并于**1913年发表《论原子和分子的构造》三篇论文**。他保留电子受库仑力约束的图像，同时提出在经典物理中没有依据的新规则：

1. **只允许某些稳定状态**：电子可以处于特定的定态，而在定态中不按经典加速电荷辐射能量。
2. **允许状态之间的不连续跃迁**：原子从高能定态跃迁至低能定态时，其发出的辐射满足

   $$
   \boxed{h\nu=E_{n_i}-E_{n_f}.}
   $$

3. **通过量子条件选出允许状态**：在通常的简化圆轨道表述中，轨道角动量满足

   $$
   \boxed{L=\mu vr=n\hbar,\qquad n=1,2,3,\ldots}
   $$

   这里 $\mu$ 是电子—原子核的约化质量，$\hbar=h/(2\pi)$。对固定原子核的初级近似，可取 $\mu\approx m_e$。

第三条常用于教科书中的玻尔模型推导。需要认识到：**这属于旧量子论的量子条件，不是现代意义上的电子真实经典轨道。**

### 6.2 从量子条件得到离散能级

将库仑力与圆周运动的向心力相等条件相结合：

$$
\frac{\mu v^2}{r}=\frac{e^2}{4\pi\varepsilon_0r^2},
\qquad \mu vr=n\hbar,
$$

得到允许的轨道尺度和能量（非相对论近似）：

$$
 r_n=\frac{4\pi\varepsilon_0\hbar^2}{\mu e^2}n^2,
$$

$$
\boxed{E_n=-\frac{\mu e^4}{2(4\pi\varepsilon_0)^2\hbar^2}\frac{1}{n^2}
\approx -\frac{13.6\,\mathrm{eV}}{n^2}.}
$$

能量差决定发射光的频率：

$$
\frac{hc}{\lambda}=E_{n_i}-E_{n_f}
=13.6\,\mathrm{eV}\left(\frac{1}{n_f^2}-\frac{1}{n_i^2}\right)
$$

（数值式采用氢原子的常见近似；精确计算需使用约化质量及更高阶修正。）整理后恰好得到里德伯形式

$$
\frac{1}{\lambda}=R_{\mathrm H}\left(\frac{1}{n_f^2}-\frac{1}{n_i^2}\right).
$$

**历史意义**：巴耳末和里德伯公式中的整数，第一次获得了统一的原子能级解释；谱线不再只是需要拟合的数据，而成为测定原子内部能级差的实验窗口。

---

**本专题导航：** [专题目录]({{ '/events/bohr-1913.html' | relative_url }})　·　[← 上一页]({{ '/events/bohr-1913/06-spectral-crisis.html' | relative_url }})　·　[下一页 →]({{ '/events/bohr-1913/08-h-alpha.html' | relative_url }})
