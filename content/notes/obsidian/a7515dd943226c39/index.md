---
title: P08 高斯定理与对称性判断
date: '2026-10-16T17:07:06.935796+00:00'
lastmod: '2026-10-16T17:07:06.935796+00:00'
draft: false
description: ''
tags:
- 大物
- 知识点
note_links:
- notes/obsidian/3dfa67a5b7eeec93/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/57de3eff4a09bd6f/index.md
- notes/obsidian/58d990316008085d/index.md
- notes/obsidian/61c5fb0adfb7b15d/index.md
- notes/obsidian/63721ac0914763f7/index.md
- notes/obsidian/683030f693ffcfdc/index.md
- notes/obsidian/95fd4a5603d6b827/index.md
- notes/obsidian/9ce6a3433eb1249c/index.md
- notes/obsidian/a7b196bda29841f1/index.md
- notes/obsidian/be46d9ab8747aa2d/index.md
- notes/obsidian/bf68bff3575ef0c4/index.md
- notes/obsidian/d189b87b4f0e48eb/index.md
- notes/obsidian/d683ec540ee491cb/index.md
- notes/obsidian/dc29171c37873863/index.md
- notes/obsidian/e808e3a51757b08c/index.md
- notes/obsidian/f8d9b9949f706896/index.md
obsidian: true
note_course: 大学物理
---

# 高斯定理与对称性判断

> [!tip] 做题入口
> 先证明能把E提出积分，再写ES。

## 详细讲解：从理解到列式

### 图解：球对称高斯面

![球对称高斯面](/my-web/notes-media/asset-8a2fd65c95c2506a.svg)

虚线是人为选择的高斯面，Q内依赖其半径。 图为本库补充示意，不替代原题中的几何与方向。

### 定理总成立，直接解场却需要对称性

真空中 $\oint_S\mathbf E\cdot d\mathbf S=Q_{enc}/\varepsilon_0$。等式左边是整个面的一个积分数值；只有知道面上哪些点的场等大、方向如何，才能把它改成 $E\times\text{面积}$。闭面内没电荷只给净通量为零，并不给每点 $E=0$。

### 如何选择高斯面

先看整个源分布，而非随手画的面是否对称。球对称选同心球，柱对称选同轴圆柱，平面对称选跨面的薄柱。球面上径向场等大，通量为 $4\pi r^2E$；无限长线的柱侧面为 $2\pi rLE$，端面因场切向而不贡献。

### 包围电荷必须按分布算

体密度变化时 $Q_{enc}=\int\rho dV$，不能使用观察点密度乘体积。外部电荷对闭面各点的场通常不为零，只是净通量贡献为零。有限棒、有限盘一般不具备无限柱/平面对称，不能因画了柱面就套无限源公式。做题顺序：判对称 → 选面 → 化通量 → 积分电荷 → 分区解场。

### 学习顺序

先读：[电通量](/my-web/notes/obsidian/be46d9ab8747aa2d/)。

再用到：[球对称电荷的分区电场与电势](/my-web/notes/obsidian/61c5fb0adfb7b15d/)、[无限长线与圆柱对称场](/my-web/notes/obsidian/bf68bff3575ef0c4/)、[无限大平面与多平面叠加](/my-web/notes/obsidian/e808e3a51757b08c/)、[导体静电平衡](/my-web/notes/obsidian/58d990316008085d/)、[电位移D与介质高斯定理](/my-web/notes/obsidian/a7b196bda29841f1/)。

[在学习地图中定位本节](/my-web/notes/?map=P08#notes-graph-heading)

## 概念与适用条件

真空静电场满足 $\oint_S\mathbf E\cdot d\mathbf S=Q_{\mathrm{内}}/\varepsilon_0$。定理对任意闭合面成立；直接由它求场强，需要足够的电荷分布对称性。常用球对称、无限长柱对称、无限大平面对称。

## 推导

点电荷场的球面通量为 $kQ/r^2\times4\pi r^2=Q/\varepsilon_0$；由叠加推广。对称性进一步保证选定面上场的方向与大小满足简化积分的条件。包围电荷只是右端信息，左端场包含所有内外电荷的贡献。

## 解题步骤

1. 看完整电荷分布是否具有球、柱、平面对称。
2. 选闭合高斯面，使有贡献部分上 $E$ 恒定且法向夹角已知。
3. 按场点所在区域求真正包围的电荷，必要时先积分密度。
4. 列通量等式，解出 $E$ 并补方向。

## 课件原题｜概念辨析（习题5-2）

**问题：** 闭合曲面上各点场强都为零，能否判断曲面内完全没有电荷？

1. $E=0$ 使总通量为0。
2. 由高斯定理只能推出 $Q_{\mathrm{内}}=0$。
3. 这表示代数和为零，不能推出每一项电荷都为零。
4. 反过来，$Q_{\mathrm{内}}=0$ 更不能推出面上每一点 $E=0$。题目四项中对应“电荷代数和必定为零”的说法正确。

## 易错与自检

有限圆环、有限细棒一般不能用 $E\times S=Q/\varepsilon_0$ 求任意场点。高斯面不是物理导体表面，不会改变电场。

## 闭卷回想

“定理可用”和“定理能直接解出局部场强”之间还差哪个条件？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第12页至第13页。页码是阅读器页码。
- [课堂笔记图02 · IMG20261015232204](/my-web/notes-media/asset-337e83723a4dee33.webp)。
- [课堂笔记图04 · IMG20261015232226](/my-web/notes-media/asset-d3deb563aba9e6f5.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232204](/my-web/notes-media/asset-337e83723a4dee33.webp)

> [!example]- 展开查看原题所在课件页
> 第五章习题课（第7版）1

## 关联与返回

[电场叠加与连续电荷积分](/my-web/notes/obsidian/f8d9b9949f706896/)、[电通量](/my-web/notes/obsidian/be46d9ab8747aa2d/)、[球对称电荷的分区电场与电势](/my-web/notes/obsidian/61c5fb0adfb7b15d/)、[无限长线与圆柱对称场](/my-web/notes/obsidian/bf68bff3575ef0c4/)、[无限大平面与多平面叠加](/my-web/notes/obsidian/e808e3a51757b08c/)、[电位移D与介质高斯定理](/my-web/notes/obsidian/a7b196bda29841f1/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [非均匀带电球：高斯法与球壳叠加](/my-web/notes/obsidian/683030f693ffcfdc/) · 综合
- [无限带电平面挖圆孔：补偿法与轴线积分](/my-web/notes/obsidian/d189b87b4f0e48eb/) · 综合
- [半球面电势差：镜像补成完整球壳](/my-web/notes/obsidian/57de3eff4a09bd6f/) · 综合
- [先接地外壳再接地内球：逐阶段守恒](/my-web/notes/obsidian/63721ac0914763f7/) · 挑战
- [偏心球形空腔：分区对称与系统能量](/my-web/notes/obsidian/d683ec540ee491cb/) · 挑战
- [带介质球壳：位移场、电势与束缚电荷](/my-web/notes/obsidian/dc29171c37873863/) · 挑战

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [5-2-高斯定理(简)1 · 零通量与内外电荷的概念判断](/my-web/notes/obsidian/95fd4a5603d6b827/#%E9%A2%98%E5%9E%8B02-%E9%9B%B6%E9%80%9A%E9%87%8F%E4%B8%8E%E5%86%85%E5%A4%96%E7%94%B5%E8%8D%B7%E7%9A%84%E6%A6%82%E5%BF%B5%E5%88%A4%E6%96%AD)
- [5-2-高斯定理(简)1 · 球壳和均匀实体球的分区场](/my-web/notes/obsidian/95fd4a5603d6b827/#%E9%A2%98%E5%9E%8B03-%E7%90%83%E5%A3%B3%E5%92%8C%E5%9D%87%E5%8C%80%E5%AE%9E%E4%BD%93%E7%90%83%E7%9A%84%E5%88%86%E5%8C%BA%E5%9C%BA)
- [5-2-高斯定理(简)1 · 无限长线、圆柱面和实体柱](/my-web/notes/obsidian/95fd4a5603d6b827/#%E9%A2%98%E5%9E%8B04-%E6%97%A0%E9%99%90%E9%95%BF%E7%BA%BF%E5%9C%86%E6%9F%B1%E9%9D%A2%E5%92%8C%E5%AE%9E%E4%BD%93%E6%9F%B1)
- [5-2-高斯定理(简)1 · 无限大平面的场](/my-web/notes/obsidian/95fd4a5603d6b827/#%E9%A2%98%E5%9E%8B05-%E6%97%A0%E9%99%90%E5%A4%A7%E5%B9%B3%E9%9D%A2%E7%9A%84%E5%9C%BA)
- [5-2-高斯定理(简)1 · 判断高斯法能否直接解出场强](/my-web/notes/obsidian/95fd4a5603d6b827/#%E9%A2%98%E5%9E%8B06-%E5%88%A4%E6%96%AD%E9%AB%98%E6%96%AF%E6%B3%95%E8%83%BD%E5%90%A6%E7%9B%B4%E6%8E%A5%E8%A7%A3%E5%87%BA%E5%9C%BA%E5%BC%BA)
- [6-1-静电场中的导体和电介质(简) 1 · 导体表面场与通量判断](/my-web/notes/obsidian/3dfa67a5b7eeec93/#%E9%A2%98%E5%9E%8B01-%E5%AF%BC%E4%BD%93%E8%A1%A8%E9%9D%A2%E5%9C%BA%E4%B8%8E%E9%80%9A%E9%87%8F%E5%88%A4%E6%96%AD)
- [第五章习题课（第7版）1 · 高斯定理真假命题与反例](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B01-%E9%AB%98%E6%96%AF%E5%AE%9A%E7%90%86%E7%9C%9F%E5%81%87%E5%91%BD%E9%A2%98%E4%B8%8E%E5%8F%8D%E4%BE%8B)
- [第五章习题课（第7版）1 · 球壳、均匀球与径向变密度球](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B04-%E7%90%83%E5%A3%B3%E5%9D%87%E5%8C%80%E7%90%83%E4%B8%8E%E5%BE%84%E5%90%91%E5%8F%98%E5%AF%86%E5%BA%A6%E7%90%83)
- [第五章习题课（第7版）1 · 均匀与变密度无限长圆柱](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B05-%E5%9D%87%E5%8C%80%E4%B8%8E%E5%8F%98%E5%AF%86%E5%BA%A6%E6%97%A0%E9%99%90%E9%95%BF%E5%9C%86%E6%9F%B1)
- [第五章习题课（第7版）1 · 补成立方体或闭面的电通量](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B09-%E8%A1%A5%E6%88%90%E7%AB%8B%E6%96%B9%E4%BD%93%E6%88%96%E9%97%AD%E9%9D%A2%E7%9A%84%E7%94%B5%E9%80%9A%E9%87%8F)
