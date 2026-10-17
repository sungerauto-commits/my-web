---
title: P21 电位移D与介质高斯定理
date: '2026-10-16T17:07:06.978148+00:00'
lastmod: '2026-10-16T17:07:06.978148+00:00'
draft: false
description: ''
tags:
- 大物
- 知识点
note_links:
- notes/obsidian/3dfa67a5b7eeec93/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/5bd546b0c5a7dedc/index.md
- notes/obsidian/663edd45ab10d844/index.md
- notes/obsidian/7dd1c65aed21f95d/index.md
- notes/obsidian/9038a67e0032fe4c/index.md
- notes/obsidian/a7515dd943226c39/index.md
- notes/obsidian/af37467a4edc5504/index.md
- notes/obsidian/be46d9ab8747aa2d/index.md
- notes/obsidian/dc29171c37873863/index.md
- notes/obsidian/ea2bc1f82c5e399a/index.md
- notes/obsidian/fb9f374dfa570d82/index.md
obsidian: true
note_course: 大学物理
---

# 电位移D与介质高斯定理

> [!tip] 做题入口
> D的闭面通量只数自由电荷，E仍由全部电荷决定。

## 详细讲解：从理解到列式

### 图解：介质界面

![介质界面](/my-web/notes-media/asset-9c298988fa8b4cb6.svg)

法线相对于介质材料定义，内表面的外法线可能朝向球心。 图为本库补充示意，不替代原题中的几何与方向。

### D 的目的是把自由电荷单独拿出来

总电荷产生 E，真空高斯式仍是 $\nabla\cdot\mathbf E=(\rho_f+\rho_b)/\varepsilon_0$。用 $\rho_b=-\nabla\cdot\mathbf P$ 移项：

$$
\nabla\cdot(\varepsilon_0\mathbf E+\mathbf P)=\rho_f.
$$

因此定义 $\mathbf D=\varepsilon_0\mathbf E+\mathbf P$，有 $\oint\mathbf D\cdot d\mathbf S=Q_{free,enc}$。在线性各向同性介质中才进一步得到 $\mathbf D=\varepsilon_0\varepsilon_r\mathbf E$。

### 界面上先判断有没有自由面电荷

跨界面的小高斯柱给 $D_{2n}-D_{1n}=\sigma_f$。若没有自由面电荷，D 的法向分量连续；E 的法向分量通常因介电常数不同而改变。静电场又给 E 的切向分量连续。这两种连续条件不能互换。

常见分层平板：先用自由极板电荷算 $D=Q/S$，分别除各层介电常数求 E，再将各层电势降相加。球层则先用 $D_r=Q_f/(4\pi r^2)$，再逐层求 E 和势。D 的高斯面也需要足够对称性才能直接解局部场，不能因右边只剩自由电荷就跳过几何判断。

### 学习顺序

先读：[高斯定理与对称性判断](/my-web/notes/obsidian/a7515dd943226c39/)、[电介质极化与极化强度](/my-web/notes/obsidian/9038a67e0032fe4c/)。

再用到：[电容串并联与混合介质](/my-web/notes/obsidian/ea2bc1f82c5e399a/)。

[在学习地图中定位本节](/my-web/notes/?map=P21#notes-graph-heading)

## 概念与适用条件

定义 $\mathbf D=\varepsilon_0\mathbf E+\mathbf P$，介质中 $\oint\mathbf D\cdot d\mathbf S=Q_{\mathrm{自由,内}}$。线性各向同性介质才可写 $\mathbf D=\varepsilon\mathbf E$，$\varepsilon=\varepsilon_0\varepsilon_r$。不能把这一关系无条件用于非线性或各向异性介质。

## 推导

真空形式高斯定理中右边包括自由电荷和束缚电荷。束缚体电荷满足 $\rho_b=-\nabla\cdot\mathbf P$，移项得到 $\nabla\cdot\mathbf D=\rho_f$，闭面积分即上述定理。$D$ 单位 $\mathrm{C/m^2}$。

## 解题步骤

1. 用对称性求 $D$；不能仅因定理存在就把 $D$ 提出积分。
2. 右端只放自由电荷。
3. 按场点所在介质用 $E=D/\varepsilon$。
4. 需要极化电荷时，再由 $P=(\varepsilon-\varepsilon_0)E$ 求。

## 课件中的模型｜球形多层介质

**题目：** 半径 $R_1$ 导体球带自由电荷 $Q$，外部 $R_1<r<R_2$ 为 $\varepsilon_1$，$r>R_2$ 为 $\varepsilon_2$，均为线性均匀各向同性介质。

1. $r>R_1$，同心高斯球包围自由电荷 $Q$，$D_r=Q/(4\pi r^2)$。
2. 内介质区 $E_r=Q/(4\pi\varepsilon_1r^2)$。
3. 外介质区 $E_r=Q/(4\pi\varepsilon_2r^2)$。
4. 界面无自由面电荷时 $D_n$ 连续；若 $\varepsilon_1\ne\varepsilon_2$，$E_n$ 一般不连续。

## 易错与自检

不要把束缚电荷再加进 $\oint\mathbf D\cdot d\mathbf S$ 的右端，否则重复计算。区分 $\varepsilon_r$（无量纲）与 $\varepsilon$（F/m）。

## 闭卷回想

同一球对称自由电荷跨过无自由电荷的介质界面，哪一个法向量连续：E还是D？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第58页至第59页。页码是阅读器页码。
- [课堂笔记图12 · IMG20261015233003](/my-web/notes-media/asset-cb2afb5e4adcc6ac.webp)。
- [课堂笔记图13 · IMG20261015233008](/my-web/notes-media/asset-6db6903affbc8b46.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233003](/my-web/notes-media/asset-cb2afb5e4adcc6ac.webp)

## 关联与返回

[电通量](/my-web/notes/obsidian/be46d9ab8747aa2d/)、[高斯定理与对称性判断](/my-web/notes/obsidian/a7515dd943226c39/)、[电介质极化与极化强度](/my-web/notes/obsidian/9038a67e0032fe4c/)、[电容定义与平行板电容](/my-web/notes/obsidian/fb9f374dfa570d82/)、[球形电容器与孤立导体球电容](/my-web/notes/obsidian/af37467a4edc5504/)、[同轴圆柱电容器](/my-web/notes/obsidian/5bd546b0c5a7dedc/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [固定电压插入介质板与导体板](/my-web/notes/obsidian/7dd1c65aed21f95d/) · 综合
- [带介质球壳：位移场、电势与束缚电荷](/my-web/notes/obsidian/dc29171c37873863/) · 挑战

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [6-1-静电场中的导体和电介质(简) 1 · 固定自由电荷插入均匀电介质](/my-web/notes/obsidian/3dfa67a5b7eeec93/#%E9%A2%98%E5%9E%8B04-%E5%9B%BA%E5%AE%9A%E8%87%AA%E7%94%B1%E7%94%B5%E8%8D%B7%E6%8F%92%E5%85%A5%E5%9D%87%E5%8C%80%E7%94%B5%E4%BB%8B%E8%B4%A8)
- [6-1-静电场中的导体和电介质(简) 1 · 同轴介质的位移场与极化电荷](/my-web/notes/obsidian/3dfa67a5b7eeec93/#%E9%A2%98%E5%9E%8B05-%E5%90%8C%E8%BD%B4%E4%BB%8B%E8%B4%A8%E7%9A%84%E4%BD%8D%E7%A7%BB%E5%9C%BA%E4%B8%8E%E6%9E%81%E5%8C%96%E7%94%B5%E8%8D%B7)
- [6-1-静电场中的导体和电介质(简) 1 · 带电球外多层介质分区场](/my-web/notes/obsidian/3dfa67a5b7eeec93/#%E9%A2%98%E5%9E%8B06-%E5%B8%A6%E7%94%B5%E7%90%83%E5%A4%96%E5%A4%9A%E5%B1%82%E4%BB%8B%E8%B4%A8%E5%88%86%E5%8C%BA%E5%9C%BA)
- [6-2-电容和静电能量（简）1 · 介质按面积分区的并联模型](/my-web/notes/obsidian/663edd45ab10d844/#%E9%A2%98%E5%9E%8B03-%E4%BB%8B%E8%B4%A8%E6%8C%89%E9%9D%A2%E7%A7%AF%E5%88%86%E5%8C%BA%E7%9A%84%E5%B9%B6%E8%81%94%E6%A8%A1%E5%9E%8B)
