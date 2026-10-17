---
title: P17 导体静电平衡
date: '2026-10-16T17:07:06.968005+00:00'
lastmod: '2026-10-16T17:07:06.968005+00:00'
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
- notes/obsidian/63721ac0914763f7/index.md
- notes/obsidian/663edd45ab10d844/index.md
- notes/obsidian/7dd1c65aed21f95d/index.md
- notes/obsidian/7ef2a5f9ba7e6f23/index.md
- notes/obsidian/9ce6a3433eb1249c/index.md
- notes/obsidian/a7515dd943226c39/index.md
- notes/obsidian/d683ec540ee491cb/index.md
- notes/obsidian/dc29171c37873863/index.md
- notes/obsidian/e808e3a51757b08c/index.md
- notes/obsidian/fb9f374dfa570d82/index.md
obsidian: true
note_course: 大学物理
---

# 导体静电平衡

> [!tip] 做题入口
> 导体材料内E为零，整个连通导体等势；电势未必为零。

## 详细讲解：从理解到列式

### 图解：导体空腔

![导体空腔](/my-web/notes-media/asset-84ceb6a68b6b7b93.svg)

内壁、外壁的总电荷先由金属内零场及总量守恒决定。 图为本库补充示意，不替代原题中的几何与方向。

### 从自由电荷不能持续运动推出结论

若导体金属内部仍有电场，自由电荷会定向运动，不符合静电平衡，因此内部 $\mathbf E=0$。由 $dV=-\mathbf E\cdot d\mathbf l$，连通导体内部和表面为同一电势。若表面有切向场，自由电荷仍会沿面移动，所以表面外侧的静电场只能沿法线。

### 高斯面能求表面总量

在金属内部取闭高斯面，通量为零，包围净电荷为零。无空腔内电荷时，孤立导体多余电荷位于外表面；有腔内电荷时，内壁需出现感应电荷，不能再笼统说“全部在外表面”。表面分布是否均匀还依赖形状和外界，等势并不等于等面密度。

### 静电平衡的使用边界

这些结论描述达到平衡的理想静电状态，不适用于电流通过有电阻导线的内部场。在普通导体电路里，有限电导需要内部电场维持稳恒电流。球形导体在没有外场和其他偏心影响时表面电荷均匀；被外点电荷极化后，即使球仍是等势体，面密度也通常不均匀。

### 学习顺序

先读：[高斯定理与对称性判断](/my-web/notes/obsidian/a7515dd943226c39/)、[电势与电势叠加](/my-web/notes/obsidian/09dc45185b27d0e3/)。

再用到：[导体空腔与感应电荷](/my-web/notes/obsidian/7ef2a5f9ba7e6f23/)、[电容定义与平行板电容](/my-web/notes/obsidian/fb9f374dfa570d82/)。

[在学习地图中定位本节](/my-web/notes/?map=P17#notes-graph-heading)

## 概念与适用条件

导体达到静电平衡后：材料内部 $\mathbf E=0$；同一连通导体是等势体；净自由电荷分布在表面；表面外侧场沿法向。真空表面边界 $E_n=\sigma/\varepsilon_0$。这些结论不自动适用于导体空腔中的空间。

## 推导

若材料内有静电场，自由电荷仍会受力迁移，与静止平衡矛盾。内部场为零，则任意内部两点 $\Delta V=-\int\mathbf E\cdot d\mathbf l=0$。取材料内微小高斯面可知体内无净自由电荷。

## 解题步骤

1. 区分导体材料区、空腔区、外部空间。
2. 对每个独立导体列等势与电荷守恒。
3. 再用高斯定理、叠加和电势条件求表面电荷。

## 补充示例｜孤立带电导体球

**题目：** 半径 $R$ 的孤立球带 $Q$，无其他外源，以无穷远势为零。

1. 球对称且电荷位于表面，$\sigma=Q/(4\pi R^2)$。
2. 内部 $E=0$，外部 $E=kQ/r^2$。
3. 表面电势 $kQ/R$，整个球内部也都是该值。
4. 对正电球，“内部 $E=0$”与“内部正电势”同时成立。

## 易错与自检

外面另放一个点电荷后，表面电荷一般不均匀，球外不再是单纯 $kQ/r^2$。导体球的等势性质仍成立。

## 闭卷回想

外部非均匀电场中的孤立中性导体，总电荷为零，是否表示每处表面电荷也为零？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- [课堂笔记图09 · IMG20261015232939](/my-web/notes-media/asset-e14f48ea8c5b40ff.webp)。
- [课堂笔记图10 · IMG20261015232950](/my-web/notes-media/asset-a5963e7643bba9f6.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232939](/my-web/notes-media/asset-e14f48ea8c5b40ff.webp)

## 关联与返回

[高斯定理与对称性判断](/my-web/notes/obsidian/a7515dd943226c39/)、[无限大平面与多平面叠加](/my-web/notes/obsidian/e808e3a51757b08c/)、[电势与电势叠加](/my-web/notes/obsidian/09dc45185b27d0e3/)、[导体空腔与感应电荷](/my-web/notes/obsidian/7ef2a5f9ba7e6f23/)、[接地条件与导体电势](/my-web/notes/obsidian/10da961e673c07ae/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [先接地外壳再接地内球：逐阶段守恒](/my-web/notes/obsidian/63721ac0914763f7/) · 挑战
- [固定电压插入介质板与导体板](/my-web/notes/obsidian/7dd1c65aed21f95d/) · 综合
- [偏心球形空腔：分区对称与系统能量](/my-web/notes/obsidian/d683ec540ee491cb/) · 挑战
- [带介质球壳：位移场、电势与束缚电荷](/my-web/notes/obsidian/dc29171c37873863/) · 挑战

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [6-1-静电场中的导体和电介质(简) 1 · 导体表面场与通量判断](/my-web/notes/obsidian/3dfa67a5b7eeec93/#%E9%A2%98%E5%9E%8B01-%E5%AF%BC%E4%BD%93%E8%A1%A8%E9%9D%A2%E5%9C%BA%E4%B8%8E%E9%80%9A%E9%87%8F%E5%88%A4%E6%96%AD)
- [6-1-静电场中的导体和电介质(简) 1 · 两导体板四个表面的感应分布](/my-web/notes/obsidian/3dfa67a5b7eeec93/#%E9%A2%98%E5%9E%8B02-%E4%B8%A4%E5%AF%BC%E4%BD%93%E6%9D%BF%E5%9B%9B%E4%B8%AA%E8%A1%A8%E9%9D%A2%E7%9A%84%E6%84%9F%E5%BA%94%E5%88%86%E5%B8%83)
- [6-2-电容和静电能量（简）1 · 沿场分层介质与导体插板](/my-web/notes/obsidian/663edd45ab10d844/#%E9%A2%98%E5%9E%8B04-%E6%B2%BF%E5%9C%BA%E5%88%86%E5%B1%82%E4%BB%8B%E8%B4%A8%E4%B8%8E%E5%AF%BC%E4%BD%93%E6%8F%92%E6%9D%BF)
- [第五章习题课（第7版）1 · 球壳内外点电荷与球心势](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B13-%E7%90%83%E5%A3%B3%E5%86%85%E5%A4%96%E7%82%B9%E7%94%B5%E8%8D%B7%E4%B8%8E%E7%90%83%E5%BF%83%E5%8A%BF)
