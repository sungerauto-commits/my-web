---
title: R24 概率密度与分布函数的关系
date: '2026-10-16T17:07:07.051753+00:00'
lastmod: '2026-10-16T17:07:07.051753+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/29f9bf39693ad5be/index.md
- notes/obsidian/4ca1b2d1cb4584b3/index.md
- notes/obsidian/51b2f723cc621afb/index.md
- notes/obsidian/57bef1228797c3a5/index.md
- notes/obsidian/89bcb92b5fa2ff2b/index.md
- notes/obsidian/8bf43a3c44d5d61d/index.md
- notes/obsidian/937033040958dfa7/index.md
- notes/obsidian/a4baa267f6b84d83/index.md
- notes/obsidian/bea362af3f9ef604/index.md
- notes/obsidian/c2b3c878d1831b06/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/d547d77dd097f5bb/index.md
- notes/obsidian/f90f2e4ddd7a9d01/index.md
obsidian: true
note_course: 概率论
---

# 概率密度与分布函数的关系

> [!tip] 做题入口
> 概率是面积，密度是每单位长度的概率浓度。

## 详细讲解：从理解到列式

### 图解：密度与CDF

![密度与CDF](/my-web/notes-media/asset-87a33aaea47a5cbf.svg)

密度图下面积等于CDF的增量，密度高度本身不等于概率。 图为本库补充示意，不替代原题中的几何与方向。

### 密度的高度不是单点概率

有普通密度f时，$P(a<X\le b)=\int_a^b f(t)dt$，$F(x)=\int_{-\infty}^xf(t)dt$。f非负且总积分为1。短区间宽度 $\Delta x$ 足够小时，概率约为 $f(x)\Delta x$；点宽为零，所以 $P(X=x)=0$，即使 $f(x)>1$。

### 什么时候可以由F求f

若F绝对连续，可用几乎处处的导数 $f=F'$ 表达全分布。若F有跳跃，只把各段求导会漏掉点质量；甚至“F连续”本身也不保证存在普通密度。因此本课程遇到分段CDF，先检查跳跃，再确定能否用密度。

给定参数密度，先积分求归一化常量，再检查非负区间；求事件概率时积分范围应与f的支撑集相交。若密度仅在 $(0,1)$ 非零，问 $P(X<2)$ 应得1，不能把代数表达式延伸到2继续积分。端点密度取什么值通常不影响积分，但CDF的端点值必须满足右连续。

### 学习顺序

先读：[分布函数及右连续性](/my-web/notes/obsidian/89bcb92b5fa2ff2b/)。

再用到：[连续均匀分布](/my-web/notes/obsidian/d547d77dd097f5bb/)、[指数分布与等待时间](/my-web/notes/obsidian/c2b3c878d1831b06/)、[正态分布的参数与形状](/my-web/notes/obsidian/bea362af3f9ef604/)、[单调变换密度与绝对值因子](/my-web/notes/obsidian/8bf43a3c44d5d61d/)。

[在学习地图中定位本节](/my-web/notes/?map=R24#notes-graph-heading)

## 前提与后续关系

**先确认：** [分布函数及右连续性](/my-web/notes/obsidian/89bcb92b5fa2ff2b/)

**继续用于：** [连续均匀分布](/my-web/notes/obsidian/d547d77dd097f5bb/)、[指数分布与等待时间](/my-web/notes/obsidian/c2b3c878d1831b06/)、[正态分布的参数与形状](/my-web/notes/obsidian/bea362af3f9ef604/)、[单调变换密度与绝对值因子](/my-web/notes/obsidian/8bf43a3c44d5d61d/)、[非单调变换与多分支求和](/my-web/notes/obsidian/29f9bf39693ad5be/)、[正态密度归一化常数的推导](/my-web/notes/obsidian/57bef1228797c3a5/)

## 定义与前提

若存在非负可积函数 $f$，使 $F(x)=\int_{-\infty}^xf(t)dt$，称 $X$ 为有密度的连续型随机变量，$\int f=1$。在 $F$ 可微并满足相应条件处 $f=F'$；密度在单点处的改值不改变分布。

## 逐步推导

$$
P(a<X\le b)=F(b)-F(a)=\int_a^bf(t)dt.
$$

对任意单点 $a$，积分区间长度为零，所以 $P(X=a)=0$。在密度连续点，$P(x<X\le x+h)\approx f(x)h$，故 $f$ 的量纲是变量单位的倒数，密度可大于1。

## 补充例题｜密度大于1仍合法

**题目：** $f(x)=2$（$0<x<1/2$），其他处0。

1. 非负且面积 $2\times1/2=1$，合法。
2. $F(x)=0$（$x\le0$）、$2x$（$0<x<1/2$）、1（$x\ge1/2$）。
3. $P(0.1<X<0.2)=2\times0.1=0.2$。
4. $P(X=0.15)=0$，不是 $f(0.15)=2$。

## 易错与边界

有连续的 $F$ 不自动保证有密度；本章主要使用可用积分表示的连续型分布。只在“有密度”的前提下，区间端点开闭才不影响概率。阶梯分布函数不能靠对每段求导恢复跳点质量。

## 回想任务

如果 $X$ 单位是秒，密度的单位是什么？$f(x)=3$ 为什么不等于概率3？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第1页至第6页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图13 · IMG20261015233239](/my-web/notes-media/asset-7c69682260d31a50.webp)。
- [课堂笔记图14 · IMG20261015233247](/my-web/notes-media/asset-db78a7671c65eeaf.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233239](/my-web/notes-media/asset-7c69682260d31a50.webp)

## 关联与返回

[几何概型](/my-web/notes/obsidian/a4baa267f6b84d83/)、[离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/)、[分布函数及右连续性](/my-web/notes/obsidian/89bcb92b5fa2ff2b/)、[连续均匀分布](/my-web/notes/obsidian/d547d77dd097f5bb/)、[指数分布与等待时间](/my-web/notes/obsidian/c2b3c878d1831b06/)、[正态分布的参数与形状](/my-web/notes/obsidian/bea362af3f9ef604/)、[单调变换密度与绝对值因子](/my-web/notes/obsidian/8bf43a3c44d5d61d/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [红灯等待：有跳跃的混合分布](/my-web/notes/obsidian/937033040958dfa7/) · 综合
- [余弦变换：两个反函数分支都要计入](/my-web/notes/obsidian/4ca1b2d1cb4584b3/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [2-4review、 · 含反三角函数的连续CDF参数](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B01-%E5%90%AB%E5%8F%8D%E4%B8%89%E8%A7%92%E5%87%BD%E6%95%B0%E7%9A%84%E8%BF%9E%E7%BB%ADcdf%E5%8F%82%E6%95%B0)
- [2-4review、 · 指数型和根式密度的归一化](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B02-%E6%8C%87%E6%95%B0%E5%9E%8B%E5%92%8C%E6%A0%B9%E5%BC%8F%E5%AF%86%E5%BA%A6%E7%9A%84%E5%BD%92%E4%B8%80%E5%8C%96)
- [2-4review、 · 双侧指数密度与平方变换](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B03-%E5%8F%8C%E4%BE%A7%E6%8C%87%E6%95%B0%E5%AF%86%E5%BA%A6%E4%B8%8E%E5%B9%B3%E6%96%B9%E5%8F%98%E6%8D%A2)
- [2-4review、 · 先抽球再在不相邻区间均匀取数](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B12-%E5%85%88%E6%8A%BD%E7%90%83%E5%86%8D%E5%9C%A8%E4%B8%8D%E7%9B%B8%E9%82%BB%E5%8C%BA%E9%97%B4%E5%9D%87%E5%8C%80%E5%8F%96%E6%95%B0)
