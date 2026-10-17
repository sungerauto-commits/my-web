---
title: P23 球形电容器与孤立导体球电容
date: '2026-10-16T17:07:06.986655+00:00'
lastmod: '2026-10-16T17:07:06.986655+00:00'
draft: false
description: ''
tags:
- 大物
- 知识点
note_links:
- notes/obsidian/10da961e673c07ae/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/61c5fb0adfb7b15d/index.md
- notes/obsidian/63721ac0914763f7/index.md
- notes/obsidian/663edd45ab10d844/index.md
- notes/obsidian/7ae1f1f4ff41bd7b/index.md
- notes/obsidian/9ce6a3433eb1249c/index.md
- notes/obsidian/a7b196bda29841f1/index.md
- notes/obsidian/d683ec540ee491cb/index.md
- notes/obsidian/fb9f374dfa570d82/index.md
obsidian: true
note_course: 大学物理
---

# 球形电容器与孤立导体球电容

> [!tip] 做题入口
> 先求两球间场和电势差，再消去假设电荷。

## 详细讲解：从理解到列式

### 球形电容器不能简单套板间均匀场

内球半径 a，外球壳内半径 b，均匀介质介电常数 $\varepsilon$，等量异号带电 $\pm Q$。在 $a<r<b$，高斯法给 $E=Q/(4\pi\varepsilon r^2)$，因此

$$
U=\int_a^b Edr=\frac{Q}{4\pi\varepsilon}\left(\frac1a-\frac1b\right),\quad C=4\pi\varepsilon\frac{ab}{b-a}.
$$

球间场随 r 改变，不能用某一端的场乘 $b-a$ 代替积分。

### 孤立球是外电极退到无穷远的极限

令 $b\to\infty$，得到 $C_{isolated}=4\pi\varepsilon a$。这并不表示现实里必须有一张可见外球壳，而是以无穷远为零势计算该球 Q/V。若有外部导体或其他电荷，它们会改变电势关系，不能仍无条件使用孤立球公式。

当间隙 $b-a\ll a$，$ab\approx a^2$，有 $C\approx\varepsilon4\pi a^2/(b-a)$，恢复面积为内球表面积的薄间隙平行板近似。这个极限可以检查系数是否漏了 $4\pi$。

### 学习顺序

先读：[球对称电荷的分区电场与电势](/my-web/notes/obsidian/61c5fb0adfb7b15d/)、[电容定义与平行板电容](/my-web/notes/obsidian/fb9f374dfa570d82/)。

用于练习：[EP05 先接地外壳再接地内球：逐阶段守恒](/my-web/notes/obsidian/63721ac0914763f7/)、[EP07 偏心球形空腔：分区对称与系统能量](/my-web/notes/obsidian/d683ec540ee491cb/)。

[在学习地图中定位本节](/my-web/notes/?map=P23#notes-graph-heading)

## 概念与适用条件

同心球形电容器内外半径 $a<b$，带 $\pm Q$，间隙填满均匀线性介质 $\varepsilon$，则 $C=4\pi\varepsilon ab/(b-a)$。外极板带等量反号电荷且无外部额外场时，场仅在两球之间。

## 推导

球对称 $D_r=Q/(4\pi r^2)$，$E_r=Q/(4\pi\varepsilon r^2)$。

$$
U=\int_a^bE_rdr=\frac{Q}{4\pi\varepsilon}\left(\frac1a-\frac1b\right),\qquad C=Q/U.
$$

令 $b\to\infty$ 得处于无限均匀介质中的孤立导体球 $C=4\pi\varepsilon a$。

## 解题步骤

1. 把半径写清，不能用外壳外半径代替实际相对表面半径。
2. 场在 $a<r<b$ 积分，势差顺序取内球减外球。
3. 看最终式中假设的 $Q$ 是否消去。

## 补充数值例｜同心球电容

**题目：** 真空中 $a=1\mathrm{cm},b=2\mathrm{cm}$。

1. $ab/(b-a)=0.01\times0.02/0.01=0.02\mathrm m$。
2. $C=4\pi\varepsilon_0\times0.02\approx2.225\mathrm{pF}$。
3. 同样内球单独孤立时约1.113pF；邻近外壳使电容增大。
4. $b\to a^+$ 时理想几何电容增大，实际还需考虑击穿和有限尺寸。

## 易错与自检

孤立球电容相对无穷远，球形电容器是两球间电势差。它们的参考和边界条件不同。

## 闭卷回想

外球半径趋于无穷大时，球形电容表达式应退化成什么？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第9页至第10页。页码是阅读器页码。
- [课堂笔记图14 · IMG20261015233019](/my-web/notes-media/asset-6ce210b9f906e2d1.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233019](/my-web/notes-media/asset-6ce210b9f906e2d1.webp)

## 关联与返回

[球对称电荷的分区电场与电势](/my-web/notes/obsidian/61c5fb0adfb7b15d/)、[接地条件与导体电势](/my-web/notes/obsidian/10da961e673c07ae/)、[电位移D与介质高斯定理](/my-web/notes/obsidian/a7b196bda29841f1/)、[电容定义与平行板电容](/my-web/notes/obsidian/fb9f374dfa570d82/)、[静电能量与能量密度](/my-web/notes/obsidian/7ae1f1f4ff41bd7b/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [先接地外壳再接地内球：逐阶段守恒](/my-web/notes/obsidian/63721ac0914763f7/) · 挑战
- [偏心球形空腔：分区对称与系统能量](/my-web/notes/obsidian/d683ec540ee491cb/) · 挑战

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [6-2-电容和静电能量（简）1 · 平板、球形、同轴柱形电容](/my-web/notes/obsidian/663edd45ab10d844/#%E9%A2%98%E5%9E%8B01-%E5%B9%B3%E6%9D%BF%E7%90%83%E5%BD%A2%E5%90%8C%E8%BD%B4%E6%9F%B1%E5%BD%A2%E7%94%B5%E5%AE%B9)
- [6-2-电容和静电能量（简）1 · 球形、柱形和平板中的场能积分](/my-web/notes/obsidian/663edd45ab10d844/#%E9%A2%98%E5%9E%8B06-%E7%90%83%E5%BD%A2%E6%9F%B1%E5%BD%A2%E5%92%8C%E5%B9%B3%E6%9D%BF%E4%B8%AD%E7%9A%84%E5%9C%BA%E8%83%BD%E7%A7%AF%E5%88%86)
- [第五章习题课（第7版）1 · 三种电容器极板间的电势差](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B16-%E4%B8%89%E7%A7%8D%E7%94%B5%E5%AE%B9%E5%99%A8%E6%9E%81%E6%9D%BF%E9%97%B4%E7%9A%84%E7%94%B5%E5%8A%BF%E5%B7%AE)
