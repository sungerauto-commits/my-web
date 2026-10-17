---
title: P04 半圆环的场强与电势
date: '2026-10-16T17:07:06.915363+00:00'
lastmod: '2026-10-16T17:07:06.915363+00:00'
draft: false
description: ''
tags:
- 大物
- 知识点
note_links:
- notes/obsidian/09dc45185b27d0e3/index.md
- notes/obsidian/1831dd60eeae54c2/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/581bfd027b33ab9b/index.md
- notes/obsidian/9ce6a3433eb1249c/index.md
- notes/obsidian/9ed1c7c2e782ef18/index.md
- notes/obsidian/f8d9b9949f706896/index.md
obsidian: true
note_course: 大学物理
---

# 半圆环的场强与电势

> [!tip] 做题入口
> 半圆环缺少另一半的抵消，圆心场强通常非零。

## 详细讲解：从理解到列式

### 半环与整环的对称性不同

以均匀上半圆环为例，半径 $R$、线密度 $\lambda$，求圆心的场。取源元角度 $0\le\theta\le\pi$，$dq=\lambda R\,d\theta$。正电荷产生的场指向从源元到圆心的方向：

$$
dE_x=-\frac{k_e\lambda}{R}\cos\theta,d\theta,\quad dE_y=-\frac{k_e\lambda}{R}\sin\theta,d\theta.
$$

积分得 $E_x=0,E_y=-2k_e\lambda/R$。横向成对抵消，竖向同向相加，不能把整环场为零的结论照搬到半环。

### 电势反而只需要总电荷

圆心到全部源元距离都为 $R$，故 $V_O=k_eQ/R=k_e\pi\lambda$。若改变半环朝向，圆心电势不变，而场方向会转动。对不均匀线密度则保留 $\lambda(\theta)$ 在积分中，不能再使用上面的均匀半环结果。

这类题最有效的第一步是画两对称元的场方向，决定抵消分量；若求电势，则先问各源元到观察点距离是否相同，避免做不必要的矢量积分。

### 学习顺序

先读：[电场叠加与连续电荷积分](/my-web/notes/obsidian/f8d9b9949f706896/)、[电势与电势叠加](/my-web/notes/obsidian/09dc45185b27d0e3/)。

用于练习：[对应课件的题型练习](/my-web/notes/obsidian/9ed1c7c2e782ef18/)。

[在学习地图中定位本节](/my-web/notes/?map=P04#notes-graph-heading)

## 概念与适用条件

半径 $R$ 的上半圆环，电荷 $Q>0$ 均匀分布，$\lambda=Q/(\pi R)$。以圆心为原点，极角 $\theta\in[0,\pi]$，圆心电场向下。

## 推导

$dq=\lambda R\,d\theta$，圆心处 $d\mathbf E$ 与源点径向相反。$x$ 分量抵消，

$$
E_y=-\frac{k\lambda}{R}\int_0^\pi\sin\theta\,d\theta=-\frac{2kQ}{\pi R^2}.
$$

所有电荷元距圆心相同，故 $V_O=kQ/R$。

## 解题步骤

1. 明确半圆在哪一侧及电荷正负。
2. 写 $dq=\lambda R\,d\theta$，不能漏弧长中的 $R$。
3. 按方向写分量，积分角度覆盖真实弧段。
4. 电势直接标量叠加。

## 课件原题｜习题课例1B

1. 上半圆均匀带 $Q$，由上式 $\mathbf E_O=-2kQ/(\pi R^2)\hat{\mathbf y}$。
2. 场强大小 $2kQ/(\pi R^2)=Q/(2\pi^2\varepsilon_0R^2)$。
3. $V_O=Q/(4\pi\varepsilon_0R)$。
4. 若整段电荷反号，场方向和电势符号同时反转；若只是旋转半圆，场方向随之转动，电势不变。

## 易错与自检

环心电场不能用点电荷 $kQ/R^2$ 直接代替，因为各元方向不同；电势 $kQ/R$ 却可以直接写，是因为距离相同且是标量。

## 闭卷回想

两段相反电荷各占半圆的一部分时，为什么电势可以相消而电场仍可能不为零？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第16页至第17页。页码是阅读器页码。
- [课堂笔记图06 · IMG20261015232239](/my-web/notes-media/asset-5f250e200ebc1698.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232239](/my-web/notes-media/asset-5f250e200ebc1698.webp)

> [!example]- 展开查看原题所在课件页
> 第五章习题课（第7版）1

## 关联与返回

[电场叠加与连续电荷积分](/my-web/notes/obsidian/f8d9b9949f706896/)、[均匀带电圆环轴线场强](/my-web/notes/obsidian/581bfd027b33ab9b/)、[电势与电势叠加](/my-web/notes/obsidian/09dc45185b27d0e3/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [5-1-电场强度(简)1 · 半圆环的非抵消分量](/my-web/notes/obsidian/1831dd60eeae54c2/#%E9%A2%98%E5%9E%8B04-%E5%8D%8A%E5%9C%86%E7%8E%AF%E7%9A%84%E9%9D%9E%E6%8A%B5%E6%B6%88%E5%88%86%E9%87%8F)
- [第五章习题课（第7版）1 · 圆环、同号与异号半环的场和势](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B02-%E5%9C%86%E7%8E%AF%E5%90%8C%E5%8F%B7%E4%B8%8E%E5%BC%82%E5%8F%B7%E5%8D%8A%E7%8E%AF%E7%9A%84%E5%9C%BA%E5%92%8C%E5%8A%BF)
