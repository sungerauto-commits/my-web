---
title: P18 导体空腔与感应电荷
date: '2026-10-16T17:07:06.969005+00:00'
lastmod: '2026-10-16T17:07:06.969005+00:00'
draft: false
description: ''
tags:
- 大物
- 知识点
note_links:
- notes/obsidian/09dc45185b27d0e3/index.md
- notes/obsidian/10da961e673c07ae/index.md
- notes/obsidian/3dfa67a5b7eeec93/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/58d990316008085d/index.md
- notes/obsidian/61c5fb0adfb7b15d/index.md
- notes/obsidian/63721ac0914763f7/index.md
- notes/obsidian/9ce6a3433eb1249c/index.md
- notes/obsidian/a7515dd943226c39/index.md
- notes/obsidian/d683ec540ee491cb/index.md
obsidian: true
note_course: 大学物理
---

# 导体空腔与感应电荷

> [!tip] 做题入口
> 先用材料内高斯面定内表面总电荷，再用守恒定外表面。

## 详细讲解：从理解到列式

### 图解：导体空腔

![导体空腔](/my-web/notes-media/asset-84ceb6a68b6b7b93.svg)

内壁、外壁的总电荷先由金属内零场及总量守恒决定。 图为本库补充示意，不替代原题中的几何与方向。

### 先求内壁总电荷，再求外壁总电荷

空腔内放入电荷总量 $q$，在包住空腔、但完全位于金属内的闭面上 $E=0$，所以 $q+Q_{inner}=0$。若整个导体总电荷是 $Q_0$，则

$$
Q_{inner}=-q,\qquad Q_{outer}=Q_0+q.
$$

这两个总量不要求腔体同心；但要据此直接算各处场或面密度，通常还需要对称性或唯一性。

### 空腔里有没有场取决于什么

没有腔内电荷、腔壁为等势边界时，空腔内势可为常数，场为零。腔内有电荷时，导体金属内仍为零场，但腔内一般不为零。导体不带净电荷也不代表内外表面都不带电，它们可以分别为 $-q,+q$。

### 偏心问题不要假造整体对称性

偏心球腔与外球面不是同一球心。腔内以腔心建立坐标，外部以外球心建立坐标，金属区用同一电势连接两部分。内部小球与球腔同心时可以分区使用球对称；若小球也偏心，则内壁面电荷一般不均匀，简单同心球公式失效。

### 学习顺序

先读：[导体静电平衡](/my-web/notes/obsidian/58d990316008085d/)。

再用到：[接地条件与导体电势](/my-web/notes/obsidian/10da961e673c07ae/)。

[在学习地图中定位本节](/my-web/notes/?map=P18#notes-graph-heading)

## 概念与适用条件

导体空腔内有总电荷 $q$，静电平衡时内壁总感应电荷为 $-q$。若孤立导体本身总电荷为 $Q$，外表面总电荷为 $Q+q$。内壁局部分布是否均匀要看几何与腔内源的位置。

## 推导

在导体材料内作包住空腔的闭合高斯面，因 $E=0$，包围净电荷为零，得到 $q+Q_{\mathrm{内壁}}=0$。孤立导体电荷守恒 $Q_{\mathrm{内壁}}+Q_{\mathrm{外壁}}=Q$，于是外壁为 $Q+q$。

## 解题步骤

1. 判断导体孤立还是接地；接地不再固定导体原总电荷。
2. 用材料内高斯面求内壁总量。
3. 用守恒或接地电势条件求外壁总量。
4. 有足够球对称时再算电场与电势。

## 补充示例｜球心点电荷与中性同心球壳

**题目：** 真空中，导体球壳内外半径 $a,b$，总电荷0，球心固定点电荷 $q$，无其他源。

1. 内壁 $-q$，外壁 $+q$，且均匀。
2. 腔内 $r<a$：$E_r=kq/r^2$；材料内 $a<r<b$：$E=0$；外部 $r>b$：$E_r=kq/r^2$。
3. 导体电势为 $V=kq/b$。
4. 腔内 $V(r)=kq/r-kq/a+kq/b$，在 $r=a$ 连续。
5. 点电荷偏心后内壁分布不均匀，但内壁总量仍为 $-q$，不能再套腔内球对称场。

## 易错与自检

“屏蔽”不等于一切内外电势都为零。外部场对封闭空腔内部的影响和腔内电荷对外部的影响，要结合接地/孤立条件分别判断。

## 闭卷回想

腔内点电荷偏心后，哪项不变：内壁总电荷、内壁均匀性，还是腔内场的球对称性？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- [课堂笔记图09 · IMG20261015232939](/my-web/notes-media/asset-e14f48ea8c5b40ff.webp)。
- [课堂笔记图10 · IMG20261015232950](/my-web/notes-media/asset-a5963e7643bba9f6.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232939](/my-web/notes-media/asset-e14f48ea8c5b40ff.webp)

## 关联与返回

[高斯定理与对称性判断](/my-web/notes/obsidian/a7515dd943226c39/)、[球对称电荷的分区电场与电势](/my-web/notes/obsidian/61c5fb0adfb7b15d/)、[电势与电势叠加](/my-web/notes/obsidian/09dc45185b27d0e3/)、[导体静电平衡](/my-web/notes/obsidian/58d990316008085d/)、[接地条件与导体电势](/my-web/notes/obsidian/10da961e673c07ae/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [先接地外壳再接地内球：逐阶段守恒](/my-web/notes/obsidian/63721ac0914763f7/) · 挑战
- [偏心球形空腔：分区对称与系统能量](/my-web/notes/obsidian/d683ec540ee491cb/) · 挑战

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [6-1-静电场中的导体和电介质(简) 1 · 两导体板四个表面的感应分布](/my-web/notes/obsidian/3dfa67a5b7eeec93/#%E9%A2%98%E5%9E%8B02-%E4%B8%A4%E5%AF%BC%E4%BD%93%E6%9D%BF%E5%9B%9B%E4%B8%AA%E8%A1%A8%E9%9D%A2%E7%9A%84%E6%84%9F%E5%BA%94%E5%88%86%E5%B8%83)
- [6-1-静电场中的导体和电介质(简) 1 · 同心内球与厚球壳的电荷场势及接地](/my-web/notes/obsidian/3dfa67a5b7eeec93/#%E9%A2%98%E5%9E%8B03-%E5%90%8C%E5%BF%83%E5%86%85%E7%90%83%E4%B8%8E%E5%8E%9A%E7%90%83%E5%A3%B3%E7%9A%84%E7%94%B5%E8%8D%B7%E5%9C%BA%E5%8A%BF%E5%8F%8A%E6%8E%A5%E5%9C%B0)
- [第五章习题课（第7版）1 · 同心接地壳与偏心空腔能量](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B12-%E5%90%8C%E5%BF%83%E6%8E%A5%E5%9C%B0%E5%A3%B3%E4%B8%8E%E5%81%8F%E5%BF%83%E7%A9%BA%E8%85%94%E8%83%BD%E9%87%8F)
