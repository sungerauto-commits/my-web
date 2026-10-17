---
title: R33 非单调变换与多分支求和
date: '2026-10-16T17:07:07.078412+00:00'
lastmod: '2026-10-16T17:07:07.078412+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/1a2adbe54fd640b8/index.md
- notes/obsidian/35c0448e7aeb3994/index.md
- notes/obsidian/4ca1b2d1cb4584b3/index.md
- notes/obsidian/51b2f723cc621afb/index.md
- notes/obsidian/8bf43a3c44d5d61d/index.md
- notes/obsidian/b8e8f4ae985ae6d4/index.md
- notes/obsidian/bea362af3f9ef604/index.md
- notes/obsidian/cd3e85505394c498/index.md
obsidian: true
note_course: 概率论
---

# 非单调变换与多分支求和

> [!tip] 做题入口
> 一个y可能来自多个x，每条有效原像分支都要算。

## 详细讲解：从理解到列式

### 图解：非单调变换

![非单调变换](/my-web/notes-media/asset-cfc243822a5a653d.svg)

水平线与函数图交几次，提示有几条合法原像分支。 图为本库补充示意，不替代原题中的几何与方向。

### 一个y有几个来源，就有几个概率贡献

非单调g在原支撑集上分成若干单调段，每段反函数为 $h_j(y)$。对连续部分，

$$
f_Y(y)=\sum_j f_X(h_j(y))|h_j'(y)|,
$$

只加那些原像确实落在对应分段、原密度非零的分支。不能仅从方程 $g(x)=y$ 解出所有实根就全部相加，支撑条件同样重要。

例如 $Y=X^2$，y>0时分支为 $\pm\sqrt y$，每支导数绝对值 $1/(2\sqrt y)$。若X只在正半轴非零，负根不贡献；若X关于0对称且两支都合法，两个相等贡献才可合并成两倍。

对 $X\sim U(-\pi/2,\pi/2),Y=\cos X$，两支 $\pm\arccos y$ 同时贡献，密度为 $2/(\pi\sqrt{1-y^2})$。漏一支会使总积分只有1/2。若函数存在常值区间，输出还可能带点质量，单靠多分支密度求和不能覆盖它，应先退回CDF法。

### 学习顺序

先读：[函数分布的分布函数法](/my-web/notes/obsidian/1a2adbe54fd640b8/)、[单调变换密度与绝对值因子](/my-web/notes/obsidian/8bf43a3c44d5d61d/)。

用于练习：[ER09 余弦变换：两个反函数分支都要计入](/my-web/notes/obsidian/4ca1b2d1cb4584b3/)。

[在学习地图中定位本节](/my-web/notes/?map=R33#notes-graph-heading)

## 前提与后续关系

**先确认：** [概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/)、[函数分布的分布函数法](/my-web/notes/obsidian/1a2adbe54fd640b8/)、[单调变换密度与绝对值因子](/my-web/notes/obsidian/8bf43a3c44d5d61d/)

**继续用于：** 结合下方关联节点做题与复查。

## 方法与前提

若 $g$ 在若干不重叠区间分别严格单调，且有效反函数为 $h_i$，在适当正则点

$$
f_Y(y)=\sum_i f_X(h_i(y))|h_i'(y)|.
$$

只保留落在 $X$ 支持集中的原像。一般先用分布函数法推导，比直接背求和公式更稳妥。

## 逐步推导与课件原题

函数分布课件第24—29页：$X\sim N(0,1)$，$Y=X^2$。

1. $y<0$ 时 $F_Y=0$；$y\ge0$ 时 $X^2\le y\iff-\sqrt y\le X\le\sqrt y$。
2. $F_Y(y)=\Phi(\sqrt y)-\Phi(-\sqrt y)=2\Phi(\sqrt y)-1$。
3. 对 $y>0$ 求导，$f_Y(y)=\phi(\sqrt y)/\sqrt y=e^{-y/2}/\sqrt{2\pi y}$。
4. 也可分别取 $h_1=\sqrt y,h_2=-\sqrt y$，两项各为 $\phi(\sqrt y)/(2\sqrt y)$，相加一致。
5. $y=0$ 处密度可无界但可积，且 $P(Y=0)=P(X=0)=0$，没有点质量。

## 易错与边界

只取正根会漏一半概率。但若 $X$ 原支持集仅为正半轴，负根本来就无贡献，不能机械乘2。

## 回想任务

若 $X\sim U(-1,2)$，求 $Y=X^2$ 的密度时，为何在 $0<y<1$ 和 $1<y<4$ 要分别计数原像分支？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第24页至第29页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图18 · IMG20261015233308](/my-web/notes-media/asset-52ed9c290f3a5717.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233308](/my-web/notes-media/asset-52ed9c290f3a5717.webp)

> [!example]- 展开查看原题所在课件页
> 2-5随机变量的函数的分布review

## 关联与返回

[概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/)、[正态分布的参数与形状](/my-web/notes/obsidian/bea362af3f9ef604/)、[函数分布的分布函数法](/my-web/notes/obsidian/1a2adbe54fd640b8/)、[单调变换密度与绝对值因子](/my-web/notes/obsidian/8bf43a3c44d5d61d/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [余弦变换：两个反函数分支都要计入](/my-web/notes/obsidian/4ca1b2d1cb4584b3/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [2-4review、 · 双侧指数密度与平方变换](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B03-%E5%8F%8C%E4%BE%A7%E6%8C%87%E6%95%B0%E5%AF%86%E5%BA%A6%E4%B8%8E%E5%B9%B3%E6%96%B9%E5%8F%98%E6%8D%A2)
- [2-5随机变量的函数的分布review · 正态平方与多分支非单调变换](/my-web/notes/obsidian/b8e8f4ae985ae6d4/#%E9%A2%98%E5%9E%8B03-%E6%AD%A3%E6%80%81%E5%B9%B3%E6%96%B9%E4%B8%8E%E5%A4%9A%E5%88%86%E6%94%AF%E9%9D%9E%E5%8D%95%E8%B0%83%E5%8F%98%E6%8D%A2)
- [2-5随机变量的函数的分布review · 支撑只在负半轴的平方与线性变换](/my-web/notes/obsidian/b8e8f4ae985ae6d4/#%E9%A2%98%E5%9E%8B05-%E6%94%AF%E6%92%91%E5%8F%AA%E5%9C%A8%E8%B4%9F%E5%8D%8A%E8%BD%B4%E7%9A%84%E5%B9%B3%E6%96%B9%E4%B8%8E%E7%BA%BF%E6%80%A7%E5%8F%98%E6%8D%A2)
