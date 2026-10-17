---
title: P24 同轴圆柱电容器
date: '2026-10-16T17:07:06.987655+00:00'
lastmod: '2026-10-16T17:07:06.987655+00:00'
draft: false
description: ''
tags:
- 大物
- 知识点
note_links:
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/653e59c64053d33c/index.md
- notes/obsidian/663edd45ab10d844/index.md
- notes/obsidian/7ae1f1f4ff41bd7b/index.md
- notes/obsidian/9ce6a3433eb1249c/index.md
- notes/obsidian/9ed1c7c2e782ef18/index.md
- notes/obsidian/a7b196bda29841f1/index.md
- notes/obsidian/bf68bff3575ef0c4/index.md
- notes/obsidian/fb9f374dfa570d82/index.md
obsidian: true
note_course: 大学物理
---

# 同轴圆柱电容器

> [!tip] 做题入口
> 长圆柱忽略端部，用柱对称场积分得到对数。

## 详细讲解：从理解到列式

### 先算单位长度电荷，再积分电势差

同轴圆柱内外半径 a、b，有效长度 L，忽略端部效应。设内导体线密度 $\lambda=Q/L$，柱形高斯面给 $E_r=\lambda/(2\pi\varepsilon r)$，所以

$$
U=\frac\lambda{2\pi\varepsilon}\int_a^b\frac{dr}{r}=\frac\lambda{2\pi\varepsilon}\ln\frac ba.
$$

代入 $Q=\lambda L$，得 $C=2\pi\varepsilon L/\ln(b/a)$；单位长度电容为 $C'=C/L$，单位 F/m，不要与总电容混淆。

### 参考电势与边界条件

只需内外导体电势差，不需要给理想无限长线指定无穷远零势。若圆柱间有分层介质，D 仍由自由线电荷决定，各径向层的电势降分别是对数积分，再相加。把不同径向层直接当成并联会出错，因为电场依次穿过它们，几何上对应串联。

$b-a\ll a$ 时 $\ln(b/a)\approx(b-a)/a$，故 $C\approx\varepsilon(2\pi aL)/(b-a)$，与薄间隙平行板公式一致。若 L 不比横向尺寸大得多，端部场会使理想公式产生偏差。

### 学习顺序

先读：[无限长线与圆柱对称场](/my-web/notes/obsidian/bf68bff3575ef0c4/)、[电容定义与平行板电容](/my-web/notes/obsidian/fb9f374dfa570d82/)。

用于练习：[对应课件的题型练习](/my-web/notes/obsidian/9ed1c7c2e782ef18/)。

[在学习地图中定位本节](/my-web/notes/?map=P24#notes-graph-heading)

## 概念与适用条件

同轴长圆柱电容器内外半径 $a<b$，有效长度 $l$，间隙均匀介质 $\varepsilon$，忽略端部效应：

$$
C=\frac{2\pi\varepsilon l}{\ln(b/a)},\qquad C'=C/l.
$$

这里 $C'$ 单位 F/m。适用条件通常要求长度足够大，不能直接用于短而宽的同轴结构。

## 推导

设线电荷 $\lambda=Q/l$，$D_r=\lambda/(2\pi r)$，$E_r=\lambda/(2\pi\varepsilon r)$。

$$
U=\int_a^b E_rdr=\frac{\lambda}{2\pi\varepsilon}\ln\frac ba.
$$

用 $Q=\lambda l$ 除以 $U$ 得电容。

## 解题步骤

1. 确认长度和半径单位一致，$b>a$。
2. 求场，用 $a\to b$ 的径向积分求正电势差。
3. 区分总电容与单位长度电容。

## 补充数值例｜真空同轴电容

**题目：** $a=1\mathrm{mm},b=2\mathrm{mm},l=1\mathrm m$。

1. $\ln(b/a)=\ln2$，对数中的比值必须无量纲。
2. $C=2\pi\varepsilon_0/\ln2\approx80.26\mathrm{pF}$。
3. $C'\approx80.26\mathrm{pF/m}$；长度加倍而端部仍可忽略时，总电容加倍。

## 易错与自检

不是 $\ln(b-a)$，也不是常用对数 $\log_{10}(b/a)$。无限长线的绝对电势发散，但这两个有限半径间势差有限，正好可以求电容。

## 闭卷回想

如果只增加电容器长度，场的径向分布与单位长度电容会不会变？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第11页。页码是阅读器页码。
- [课堂笔记图13 · IMG20261015233008](/my-web/notes-media/asset-6db6903affbc8b46.webp)。
- [课堂笔记图14 · IMG20261015233019](/my-web/notes-media/asset-6ce210b9f906e2d1.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233008](/my-web/notes-media/asset-6db6903affbc8b46.webp)

## 关联与返回

[无限长线与圆柱对称场](/my-web/notes/obsidian/bf68bff3575ef0c4/)、[电位移D与介质高斯定理](/my-web/notes/obsidian/a7b196bda29841f1/)、[电容定义与平行板电容](/my-web/notes/obsidian/fb9f374dfa570d82/)、[静电能量与能量密度](/my-web/notes/obsidian/7ae1f1f4ff41bd7b/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [5-3-电势(简)1 · 无限长线与同轴圆筒的电势差](/my-web/notes/obsidian/653e59c64053d33c/#%E9%A2%98%E5%9E%8B04-%E6%97%A0%E9%99%90%E9%95%BF%E7%BA%BF%E4%B8%8E%E5%90%8C%E8%BD%B4%E5%9C%86%E7%AD%92%E7%9A%84%E7%94%B5%E5%8A%BF%E5%B7%AE)
- [6-2-电容和静电能量（简）1 · 平板、球形、同轴柱形电容](/my-web/notes/obsidian/663edd45ab10d844/#%E9%A2%98%E5%9E%8B01-%E5%B9%B3%E6%9D%BF%E7%90%83%E5%BD%A2%E5%90%8C%E8%BD%B4%E6%9F%B1%E5%BD%A2%E7%94%B5%E5%AE%B9)
- [6-2-电容和静电能量（简）1 · 球形、柱形和平板中的场能积分](/my-web/notes/obsidian/663edd45ab10d844/#%E9%A2%98%E5%9E%8B06-%E7%90%83%E5%BD%A2%E6%9F%B1%E5%BD%A2%E5%92%8C%E5%B9%B3%E6%9D%BF%E4%B8%AD%E7%9A%84%E5%9C%BA%E8%83%BD%E7%A7%AF%E5%88%86)
- [第五章习题课（第7版）1 · 三种电容器极板间的电势差](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B16-%E4%B8%89%E7%A7%8D%E7%94%B5%E5%AE%B9%E5%99%A8%E6%9E%81%E6%9D%BF%E9%97%B4%E7%9A%84%E7%94%B5%E5%8A%BF%E5%B7%AE)
