---
title: P11 无限大平面与多平面叠加
date: '2026-10-16T17:07:06.947879+00:00'
lastmod: '2026-10-16T17:07:06.947879+00:00'
draft: false
description: ''
tags:
- 大物
- 知识点
note_links:
- notes/obsidian/148759da30c3ab16/index.md
- notes/obsidian/3dfa67a5b7eeec93/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/58d990316008085d/index.md
- notes/obsidian/95fd4a5603d6b827/index.md
- notes/obsidian/a7515dd943226c39/index.md
- notes/obsidian/d189b87b4f0e48eb/index.md
- notes/obsidian/fb9f374dfa570d82/index.md
obsidian: true
note_course: 大学物理
---

# 无限大平面与多平面叠加

> [!tip] 做题入口
> 先区分非导体薄电荷面和导体表面，避免差一个2。

## 详细讲解：从理解到列式

### 薄平板两侧的二分之一从哪来

无限均匀非导体薄面电荷 $\sigma$，两侧对称且场垂直平面。薄柱高斯面两端面积均为 $S$，总通量 $2ES$，包围电荷 $\sigma S$，所以 $E=\sigma/(2\varepsilon_0)$。这指一张给定面电荷的薄片在每侧造成的场。

### 与导体表面公式为何不同

静电导体内部场为零，跨表面的小柱只有外端有通量，因此外侧 $E_n=\sigma_{surface}/\varepsilon_0$。此处 $\sigma_{surface}$ 是该导体这一面的实际电荷密度，不能和薄片模型的总面电荷直接混为同一个量。

### 多平面要逐区间加矢量

画一条横穿各面的轴，每张正带电面场从面向两侧发出，负面则指向该面。在每个区间，按统一坐标分别写各片贡献 $\pm\sigma_i/(2\varepsilon_0)$ 再相加。两无限平面带等量异号电荷时，外侧抵消、内侧相加；同号面则恰相反。先靠方向判断，比直接背“板间翻倍”更可靠。

### 学习顺序

先读：[高斯定理与对称性判断](/my-web/notes/obsidian/a7515dd943226c39/)。

用于练习：[EP02 无限带电平面挖圆孔：补偿法与轴线积分](/my-web/notes/obsidian/d189b87b4f0e48eb/)。

[在学习地图中定位本节](/my-web/notes/?map=P11#notes-graph-heading)

## 概念与适用条件

真空中孤立无限大非导体薄平面、均匀面密度 $\sigma$，两侧场大小 $|\sigma|/(2\varepsilon_0)$。静电平衡导体表面外侧则满足 $E_n=\sigma/\varepsilon_0$，因为导体材料内场为零。两种 $\sigma$ 含义和边界条件不同。

## 推导

非导体薄面用跨面的柱形高斯盒，两个底面都有 $EA$ 通量，故 $2EA=\sigma A/\varepsilon_0$。导体表面高斯盒仅外侧有通量，故 $EA=\sigma A/\varepsilon_0$。

## 解题步骤

1. 给每个带电面单独画两侧场方向。
2. 按区域列出场的带符号分量。
3. 叠加各面贡献；若是导体板，还须满足板材料内部场为零。

## 补充示例｜两块相反带电薄平面

**题目：** 左面 $+\sigma$、右面 $-\sigma$，真空，忽略边缘。

1. 左侧两面贡献方向相反，各为 $\sigma/(2\varepsilon_0)$，总场为零。
2. 两面之间，正面向右、负面也向右，总场为 $\sigma/\varepsilon_0$。
3. 右侧同样抵消，场为零。
4. 间距 $d$ 时左对右电势差 $U=Ed=\sigma d/\varepsilon_0$。

## 易错与自检

不能把导体板总电荷面密度自动当作某一个表面的面密度。孤立带电无限薄导体板的两个表面通常分摊总电荷。

## 闭卷回想

为什么单个非导体带电薄平面是一侧 $\sigma/(2\varepsilon_0)$，而平行板电容器板间是 $\sigma/\varepsilon_0$？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- [课堂笔记图02 · IMG20261015232204](/my-web/notes-media/asset-337e83723a4dee33.webp)。
- [课堂笔记图09 · IMG20261015232939](/my-web/notes-media/asset-e14f48ea8c5b40ff.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232204](/my-web/notes-media/asset-337e83723a4dee33.webp)

## 关联与返回

[带电圆盘与圆环分割](/my-web/notes/obsidian/148759da30c3ab16/)、[高斯定理与对称性判断](/my-web/notes/obsidian/a7515dd943226c39/)、[导体静电平衡](/my-web/notes/obsidian/58d990316008085d/)、[电容定义与平行板电容](/my-web/notes/obsidian/fb9f374dfa570d82/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [无限带电平面挖圆孔：补偿法与轴线积分](/my-web/notes/obsidian/d189b87b4f0e48eb/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [5-2-高斯定理(简)1 · 无限大平面的场](/my-web/notes/obsidian/95fd4a5603d6b827/#%E9%A2%98%E5%9E%8B05-%E6%97%A0%E9%99%90%E5%A4%A7%E5%B9%B3%E9%9D%A2%E7%9A%84%E5%9C%BA)
- [6-1-静电场中的导体和电介质(简) 1 · 两导体板四个表面的感应分布](/my-web/notes/obsidian/3dfa67a5b7eeec93/#%E9%A2%98%E5%9E%8B02-%E4%B8%A4%E5%AF%BC%E4%BD%93%E6%9D%BF%E5%9B%9B%E4%B8%AA%E8%A1%A8%E9%9D%A2%E7%9A%84%E6%84%9F%E5%BA%94%E5%88%86%E5%B8%83)
