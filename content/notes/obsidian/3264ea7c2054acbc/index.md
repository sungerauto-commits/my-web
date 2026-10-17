---
title: P12 补偿法与挖孔电荷分布
date: '2026-10-16T17:07:06.953872+00:00'
lastmod: '2026-10-16T17:07:06.953872+00:00'
draft: false
description: ''
tags:
- 大物
- 知识点
note_links:
- notes/obsidian/148759da30c3ab16/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/58d990316008085d/index.md
- notes/obsidian/61c5fb0adfb7b15d/index.md
- notes/obsidian/9ce6a3433eb1249c/index.md
- notes/obsidian/d189b87b4f0e48eb/index.md
- notes/obsidian/f8d9b9949f706896/index.md
obsidian: true
note_course: 大学物理
---

# 补偿法与挖孔电荷分布

> [!tip] 做题入口
> 缺一块的均匀分布，写成完整分布加反号的一块。

## 详细讲解：从理解到列式

### 图解：补偿球腔

![补偿球腔](/my-web/notes-media/asset-87745607744b54f7.svg)

用两中心的矢量差把位置变量消去，才证明腔内是匀强场。 图为本库补充示意，不替代原题中的几何与方向。

### 挖去一块等于加上相反密度

对于给定、不会因挖孔而重新分布的绝缘体电荷，可写“实际分布＝完整分布＋被挖区域的负密度分布”。由于电场线性叠加，这个拆分也适用于场和势。导体表面电荷会随几何改变重排，不能不加说明地照用固定密度的补偿模型。

### 球形空腔里为什么常是匀强场

均匀体密度 $\rho$ 的大球，内部场为 $\rho\mathbf r/(3\varepsilon_0)$。挖球形空腔，空腔中心相对大球心位移为 $\mathbf a$。腔内点相对两中心的矢量满足 $\mathbf r'=\mathbf r-\mathbf a$，因此

$$
\mathbf E=\frac\rho{3\varepsilon_0}\mathbf r-\frac\rho{3\varepsilon_0}\mathbf r'=\frac\rho{3\varepsilon_0}\mathbf a.
$$

位置变量抵消，才得到处处相同的场。$\mathbf a$ 必须定义为“大球心指向腔心”，反过来定义就要变号。

对平面挖圆孔则用平面场减圆盘场；对带电棒缺一段，用完整棒减缺段。先确认被减对象的密度和原物体相同，再确认观察点落在哪一对象的内区或外区。

### 学习顺序

先读：[电场叠加与连续电荷积分](/my-web/notes/obsidian/f8d9b9949f706896/)、[球对称电荷的分区电场与电势](/my-web/notes/obsidian/61c5fb0adfb7b15d/)。

用于练习：[EP02 无限带电平面挖圆孔：补偿法与轴线积分](/my-web/notes/obsidian/d189b87b4f0e48eb/)。

[在学习地图中定位本节](/my-web/notes/?map=P12#notes-graph-heading)

## 概念与适用条件

静态给定的绝缘体电荷分布可按线性叠加拆成“大完整分布−被挖掉的分布”。反号区域是数学构造。对会重新分布电荷的导体，不能直接把挖孔前后的均匀电荷当作不变。

## 推导

若目标密度 $\rho=\rho_{\mathrm{大}}+\rho_{\mathrm{补}}$，其中挖去区域内 $\rho_{\mathrm{补}}=-\rho_{\mathrm{大}}$，则该区域电荷相消，目标场是两者场的矢量和。

## 解题步骤

1. 找到一个已知场的完整几何体。
2. 给缺失部分加反号电荷，保证密度逐点还原原题。
3. 在同一坐标中写两个场，最后再相减。

## 课件原题｜偏心球形空腔（习题课例4一类）

**题目：** 均匀体密度 $\rho$ 的绝缘实心球内挖去球形空腔，空腔完全位于大球内；大球中心 $O$，空腔中心 $O'$，$\mathbf d=\overrightarrow{OO'}$。

1. 大球原有内部场 $\mathbf E_1=\rho\mathbf r/(3\varepsilon_0)$。
2. 在空腔位置补密度 $-\rho$ 的小球，内部场 $\mathbf E_2=-\rho\mathbf r'/(3\varepsilon_0)$。
3. 几何关系 $\mathbf r=\mathbf d+\mathbf r'$。
4. 空腔内 $\mathbf E=\rho(\mathbf r-\mathbf r')/(3\varepsilon_0)=\rho\mathbf d/(3\varepsilon_0)$，与场点无关，是匀强场。
5. $\mathbf d=0$ 时场为零，可作对称性检查。

## 易错与自检

必须用矢量相减，不能把两个离不同球心的距离直接作标量相减。空腔中的场并不因“那里没有电荷”就必定为零。

## 闭卷回想

“没有电荷的空腔”与“静电平衡导体材料内部”，哪一种能直接推出 $E=0$？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第34页至第36页。页码是阅读器页码。
- [课堂笔记图04 · IMG20261015232226](/my-web/notes-media/asset-d3deb563aba9e6f5.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232226](/my-web/notes-media/asset-d3deb563aba9e6f5.webp)

> [!example]- 展开查看原题所在课件页
> 第五章习题课（第7版）1

## 关联与返回

[电场叠加与连续电荷积分](/my-web/notes/obsidian/f8d9b9949f706896/)、[带电圆盘与圆环分割](/my-web/notes/obsidian/148759da30c3ab16/)、[球对称电荷的分区电场与电势](/my-web/notes/obsidian/61c5fb0adfb7b15d/)、[导体静电平衡](/my-web/notes/obsidian/58d990316008085d/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [无限带电平面挖圆孔：补偿法与轴线积分](/my-web/notes/obsidian/d189b87b4f0e48eb/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [第五章习题课（第7版）1 · 平面圆孔、偏心球腔和球面小缺口](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B06-%E5%B9%B3%E9%9D%A2%E5%9C%86%E5%AD%94%E5%81%8F%E5%BF%83%E7%90%83%E8%85%94%E5%92%8C%E7%90%83%E9%9D%A2%E5%B0%8F%E7%BC%BA%E5%8F%A3)
