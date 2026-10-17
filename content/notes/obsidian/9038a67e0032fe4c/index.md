---
title: P20 电介质极化与极化强度
date: '2026-10-16T17:07:06.977147+00:00'
lastmod: '2026-10-16T17:07:06.977147+00:00'
draft: false
description: ''
tags:
- 大物
- 知识点
note_links:
- notes/obsidian/24e59c001e2459b3/index.md
- notes/obsidian/3dfa67a5b7eeec93/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/64eecd8aa05cc58a/index.md
- notes/obsidian/7dd1c65aed21f95d/index.md
- notes/obsidian/a7b196bda29841f1/index.md
- notes/obsidian/dc29171c37873863/index.md
- notes/obsidian/ea2bc1f82c5e399a/index.md
obsidian: true
note_course: 大学物理
---

# 电介质极化与极化强度

> [!tip] 做题入口
> 介质内部束缚电荷微小位移，形成极化。

## 详细讲解：从理解到列式

### 图解：介质界面

![介质界面](/my-web/notes-media/asset-9c298988fa8b4cb6.svg)

法线相对于介质材料定义，内表面的外法线可能朝向球心。 图为本库补充示意，不替代原题中的几何与方向。

### 极化不等于自由电荷流过介质

电介质中的正负束缚电荷中心在外场作用下略分离，或者永久偶极取向发生变化，宏观上形成极化。极化强度 $\mathbf P$ 是单位体积的偶极矩，单位 C/m²。线性、均匀、各向同性介质中 $\mathbf P=\varepsilon_0\chi_e\mathbf E$，$\varepsilon_r=1+\chi_e$。

### 从极化强度得到束缚电荷

体内 $\rho_b=-\nabla\cdot\mathbf P$，表面 $\sigma_b=\mathbf P\cdot\hat{\mathbf n}$，法线取“从介质材料向外”。例如径向外指的球壳极化，在内表面，材料外法线反而朝球心，因此内表面束缚电荷为负，外表面为正。

均匀极化介质内部 $\nabla\cdot\mathbf P=0$，体束缚电荷为零，但表面仍可带束缚电荷。中性材料的极化不凭空创造净电荷，内外表面的总量可互相抵消。只有本构假设成立时才可使用常数 $\varepsilon_r$；强场、各向异性或非线性材料需要另一个关系，不能机械套比例式。

### 学习顺序

先读：[电偶极子与均匀场中的力矩](/my-web/notes/obsidian/64eecd8aa05cc58a/)。

再用到：[电位移D与介质高斯定理](/my-web/notes/obsidian/a7b196bda29841f1/)。

[在学习地图中定位本节](/my-web/notes/?map=P20#notes-graph-heading)

## 概念与适用条件

极化强度 $\mathbf P$ 是单位体积电偶极矩，单位 $\mathrm{C/m^2}$。线性各向同性介质满足 $\mathbf P=\varepsilon_0\chi_e\mathbf E$，$\varepsilon_r=1+\chi_e$。束缚电荷面密度 $\sigma_b=\mathbf P\cdot\hat{\mathbf n}$，$\hat{\mathbf n}$ 指介质向外。

## 推导

偶极子在介质内部成对相邻时，正负端大多抵消；在边界处留下不抵消的束缚电荷。更一般的体束缚电荷为 $\rho_b=-\nabla\cdot\mathbf P$；均匀 $\mathbf P$ 的内部体密度为零，仍可有表面电荷。

## 解题步骤

1. 判断自由电荷、束缚电荷各在哪里。
2. 先求介质中的实际总场，再用本构关系求 $\mathbf P$。
3. 对不同表面分别写外法向，计算 $\sigma_b$ 的正负。

## 补充示例｜平板介质中的极化

**题目：** 各向同性介质 $\varepsilon_r=4$，内部匀强场 $\mathbf E=E\hat{\mathbf x}$。

1. $\chi_e=3$，$\mathbf P=3\varepsilon_0E\hat{\mathbf x}$。
2. 左表面外法向 $-\hat{\mathbf x}$，$\sigma_{b,L}=-3\varepsilon_0E$。
3. 右表面 $\sigma_{b,R}=+3\varepsilon_0E$。
4. 两面束缚电荷互为相反数，介质总电荷仍为零。

## 易错与自检

不能把 $\mathbf P$ 与自由电荷面密度混为一谈。“介质中 $E=E_0/\varepsilon_r$”需要对应的边界和固定自由电荷条件，不是任意插入介质后的万能结论。

## 闭卷回想

一块整体不带净电荷的介质，为什么两侧表面仍可能带束缚电荷？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- [课堂笔记图11 · IMG20261015232954](/my-web/notes-media/asset-3498efa73b0657ce.webp)。
- [课堂笔记图12 · IMG20261015233003](/my-web/notes-media/asset-cb2afb5e4adcc6ac.webp)。
- [课堂笔记图13 · IMG20261015233008](/my-web/notes-media/asset-6db6903affbc8b46.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232954](/my-web/notes-media/asset-3498efa73b0657ce.webp)

## 关联与返回

[电偶极子与均匀场中的力矩](/my-web/notes/obsidian/64eecd8aa05cc58a/)、[电位移D与介质高斯定理](/my-web/notes/obsidian/a7b196bda29841f1/)、[电容串并联与混合介质](/my-web/notes/obsidian/ea2bc1f82c5e399a/)、[插入介质时固定Q还是固定U](/my-web/notes/obsidian/24e59c001e2459b3/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [固定电压插入介质板与导体板](/my-web/notes/obsidian/7dd1c65aed21f95d/) · 综合
- [带介质球壳：位移场、电势与束缚电荷](/my-web/notes/obsidian/dc29171c37873863/) · 挑战

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [6-1-静电场中的导体和电介质(简) 1 · 固定自由电荷插入均匀电介质](/my-web/notes/obsidian/3dfa67a5b7eeec93/#%E9%A2%98%E5%9E%8B04-%E5%9B%BA%E5%AE%9A%E8%87%AA%E7%94%B1%E7%94%B5%E8%8D%B7%E6%8F%92%E5%85%A5%E5%9D%87%E5%8C%80%E7%94%B5%E4%BB%8B%E8%B4%A8)
- [6-1-静电场中的导体和电介质(简) 1 · 同轴介质的位移场与极化电荷](/my-web/notes/obsidian/3dfa67a5b7eeec93/#%E9%A2%98%E5%9E%8B05-%E5%90%8C%E8%BD%B4%E4%BB%8B%E8%B4%A8%E7%9A%84%E4%BD%8D%E7%A7%BB%E5%9C%BA%E4%B8%8E%E6%9E%81%E5%8C%96%E7%94%B5%E8%8D%B7)
