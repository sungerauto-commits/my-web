---
title: P07 电通量
date: '2026-10-16T17:07:06.933943+00:00'
lastmod: '2026-10-16T17:07:06.933943+00:00'
draft: false
description: ''
tags:
- 大物
- 知识点
note_links:
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/5db3f92103115401/index.md
- notes/obsidian/95fd4a5603d6b827/index.md
- notes/obsidian/9ce6a3433eb1249c/index.md
- notes/obsidian/a7515dd943226c39/index.md
- notes/obsidian/a7b196bda29841f1/index.md
obsidian: true
note_course: 大学物理
---

# 电通量

> [!tip] 做题入口
> 通量数的是穿过曲面的有向场，不是曲面上的场强总量。

## 详细讲解：从理解到列式

### 电通量测的是穿过面的法向分量

面积元 $d\mathbf S=\hat{\mathbf n}dS$ 有大小也有方向，定义 $d\Phi_E=\mathbf E\cdot d\mathbf S=E\cos\theta,dS$。$\theta$ 是场与法线的夹角，不是与平面的夹角。场沿面切向时通量为零，场本身仍可很强。

### 开曲面与闭曲面分开处理

开曲面需先选法线；闭曲面按外法线。穿出取正、穿入取负，因此闭面净通量是代数和，不能把所有面的通量大小全加正号。只有场在平面上均匀、方向恒定时，才能简写成 $ES\cos\theta$。

对均匀场中的长方体，沿场正向的面通量 $+ES$，反向面 $-ES$，其余为零，总和为零。这并不说明箱内无电场，只说明箱内没有净源电荷。对弯曲面应积分或巧用补面；若补成闭曲面，记住“原面通量＝闭面总通量－补面通量”，补面的法线要与所选闭面一致。

### 学习顺序

先读：[库仑定律与电场强度](/my-web/notes/obsidian/5db3f92103115401/)。

再用到：[高斯定理与对称性判断](/my-web/notes/obsidian/a7515dd943226c39/)。

[在学习地图中定位本节](/my-web/notes/?map=P07#notes-graph-heading)

## 概念与适用条件

$d\Phi_E=\mathbf E\cdot d\mathbf S=E\cos\theta\,dS$，$\Phi_E=\int_S\mathbf E\cdot d\mathbf S$。闭合面规定外法向。通量可为正、负或零，单位 $\mathrm{N\,m^2/C}$。

## 推导

只有垂直穿过面积元的场分量计入通量。匀强场穿过平面时 $\Phi=ES\cos\theta$；弯曲曲面或非均匀场通常要积分。闭合面通量为零不代表面上每一点场强为零。

## 解题步骤

1. 判断曲面是否闭合，并确定法向。
2. 若是开曲面，不能直接套包围电荷的高斯结论。
3. 有对称性可补成闭合面，或借助立方体/球面分配通量。

## 课件原题｜习题课例7

**题目：** 点电荷 $Q$ 位于边长 $a$ 的正方形中心法线上，距离正方形 $a/2$，求穿过该正方形的通量。

1. 以正方形为一个面补成立方体，则电荷恰在立方体中心。
2. 整个立方体通量为 $Q/\varepsilon_0$。
3. 六个面因对称性等分，取立方体外法向 $\Phi=Q/(6\varepsilon_0)$。
4. 若原题指定相反法向，结果再变号。不能用中心处场强乘面积代替真实积分。

## 易错与自检

闭合面外的电荷能改变面上场强，但对该闭合面的净通量贡献为零；进入的通量与离开的通量相消。

## 闭卷回想

匀强电场穿过一个不含电荷的球面，为什么球面上 $E\ne0$ 而总通量是零？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第46页。页码是阅读器页码。
- [课堂笔记图04 · IMG20261015232226](/my-web/notes-media/asset-d3deb563aba9e6f5.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232226](/my-web/notes-media/asset-d3deb563aba9e6f5.webp)

> [!example]- 展开查看原题所在课件页
> 第五章习题课（第7版）1

## 关联与返回

[库仑定律与电场强度](/my-web/notes/obsidian/5db3f92103115401/)、[高斯定理与对称性判断](/my-web/notes/obsidian/a7515dd943226c39/)、[电位移D与介质高斯定理](/my-web/notes/obsidian/a7b196bda29841f1/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [5-2-高斯定理(简)1 · 匀强场穿多面体的通量](/my-web/notes/obsidian/95fd4a5603d6b827/#%E9%A2%98%E5%9E%8B01-%E5%8C%80%E5%BC%BA%E5%9C%BA%E7%A9%BF%E5%A4%9A%E9%9D%A2%E4%BD%93%E7%9A%84%E9%80%9A%E9%87%8F)
- [5-2-高斯定理(简)1 · 零通量与内外电荷的概念判断](/my-web/notes/obsidian/95fd4a5603d6b827/#%E9%A2%98%E5%9E%8B02-%E9%9B%B6%E9%80%9A%E9%87%8F%E4%B8%8E%E5%86%85%E5%A4%96%E7%94%B5%E8%8D%B7%E7%9A%84%E6%A6%82%E5%BF%B5%E5%88%A4%E6%96%AD)
- [第五章习题课（第7版）1 · 高斯定理真假命题与反例](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B01-%E9%AB%98%E6%96%AF%E5%AE%9A%E7%90%86%E7%9C%9F%E5%81%87%E5%91%BD%E9%A2%98%E4%B8%8E%E5%8F%8D%E4%BE%8B)
- [第五章习题课（第7版）1 · 补成立方体或闭面的电通量](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B09-%E8%A1%A5%E6%88%90%E7%AB%8B%E6%96%B9%E4%BD%93%E6%88%96%E9%97%AD%E9%9D%A2%E7%9A%84%E7%94%B5%E9%80%9A%E9%87%8F)
