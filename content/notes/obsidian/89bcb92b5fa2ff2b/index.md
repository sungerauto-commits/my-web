---
title: R23 分布函数及右连续性
date: '2026-10-16T17:07:07.049753+00:00'
lastmod: '2026-10-16T17:07:07.049753+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/1a2adbe54fd640b8/index.md
- notes/obsidian/221d8beefa5c1b9f/index.md
- notes/obsidian/35c0448e7aeb3994/index.md
- notes/obsidian/4ca1b2d1cb4584b3/index.md
- notes/obsidian/51b2f723cc621afb/index.md
- notes/obsidian/51e9e4eba3515a19/index.md
- notes/obsidian/749b0e191a8c3ec0/index.md
- notes/obsidian/937033040958dfa7/index.md
- notes/obsidian/b7c7668670cc1cc4/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/f90f2e4ddd7a9d01/index.md
obsidian: true
note_course: 概率论
---

# 分布函数及右连续性

> [!tip] 做题入口
> F(x)累积的是X≤x，跳跃高度就是该点概率。

## 详细讲解：从理解到列式

### 图解：离散CDF

![离散CDF](/my-web/notes-media/asset-f33eea1d4dfc7277.svg)

点质量、跳跃高度和端点取值逐个对应。 图为本库补充示意，不替代原题中的几何与方向。

### F(x) 把所有类型的分布统一起来

定义 $F(x)=P(X\le x)$。随着 x 增大，事件集合只会增加，故F单调不减；两端极限分别为0和1。右连续来自概率对递减事件的连续性：当 $x_n\downarrow x$，$\{X\le x_n\}$ 递减到 $\{X\le x\}$。

### 端点和跳跃怎样求概率

$$
P(a<X\le b)=F(b)-F(a),\quad P(X=x)=F(x)-F(x^-).
$$

注意减的是左端 F(a)，因为 $X=a$ 被排除；若求 $a\le X\le b$，应减 $F(a^-)$。对离散分布，F在每个点质量处向上跳，跳跃高度就是该点概率，且该点的函数值取跳跃后的高度。

给一个分段函数要求它是不是CDF，必须同时核对单调、右连续与两端极限；不是只检查函数值在0到1之间。混合分布可有跳跃又有斜线，F仍是统一工具。ER05 的绿灯零等待加红灯均匀等待就是这样的例子。

### 学习顺序

先读：[随机变量是样本空间上的函数](/my-web/notes/obsidian/749b0e191a8c3ec0/)。

再用到：[概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/)、[函数分布的分布函数法](/my-web/notes/obsidian/1a2adbe54fd640b8/)。

[在学习地图中定位本节](/my-web/notes/?map=R23#notes-graph-heading)

## 前提与后续关系

**先确认：** [概率公理与基本性质](/my-web/notes/obsidian/b7c7668670cc1cc4/)、[随机变量是样本空间上的函数](/my-web/notes/obsidian/749b0e191a8c3ec0/)

**继续用于：** [概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/)、[正态标准化与分位数](/my-web/notes/obsidian/51e9e4eba3515a19/)、[函数分布的分布函数法](/my-web/notes/obsidian/1a2adbe54fd640b8/)

## 定义与前提

任意随机变量都有 $F(x)=P(X\le x)$。$F$ 单调不减，$F(-\infty)=0$、$F(+\infty)=1$，处处右连续。不是只有连续型随机变量才有分布函数。

## 逐步推导

1. $x_1<x_2$ 时 $\{X\le x_1\}\subseteq\{X\le x_2\}$，由概率单调性得 $F(x_1)\le F(x_2)$。
2. 事件 $\{X\le x+1/n\}$ 递减到 $\{X\le x\}$，由概率连续性得 $F(x+1/n)\to F(x)$，推出右连续。
3. 左极限 $F(x^-)=P(X<x)$，因此 $P(X=x)=F(x)-F(x^-)$。
4. $P(a<X\le b)=F(b)-F(a)$；$P(a\le X\le b)=F(b)-F(a^-)$。

## 补充例题｜阶梯分布

$X=0,1,2$ 的概率分别为1/4、1/2、1/4。

1. $F(x)=0$（$x<0$）、1/4（$0\le x<1$）、3/4（$1\le x<2$）、1（$x\ge2$）。
2. $P(X=1)=F(1)-F(1^-)=3/4-1/4=1/2$。
3. $P(0<X\le1)=F(1)-F(0)=1/2$。
4. $P(0\le X\le1)=F(1)-F(0^-)=3/4$，端点改变了结果。

## 易错与边界

课件第2-3节第16页分段公式的第一段写作 $x<1$，与中间的 $0\le x\le1$ 重叠；结合题目和后续计算，应改为 $x<0$。这属于原幻灯片笔误。离散型的阶梯图在跳点取右边值，本文始终按 $F(x)=P(X\le x)$ 定义。

## 回想任务

为何分布函数必须右连续，却允许出现左侧跳跃？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第1页至第15页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图13 · IMG20261015233239](/my-web/notes-media/asset-7c69682260d31a50.webp)。
- [课堂笔记图14 · IMG20261015233247](/my-web/notes-media/asset-db78a7671c65eeaf.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233239](/my-web/notes-media/asset-7c69682260d31a50.webp)

## 关联与返回

[概率公理与基本性质](/my-web/notes/obsidian/b7c7668670cc1cc4/)、[随机变量是样本空间上的函数](/my-web/notes/obsidian/749b0e191a8c3ec0/)、[离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/)、[概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/)、[函数分布的分布函数法](/my-web/notes/obsidian/1a2adbe54fd640b8/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [红灯等待：有跳跃的混合分布](/my-web/notes/obsidian/937033040958dfa7/) · 综合
- [余弦变换：两个反函数分支都要计入](/my-web/notes/obsidian/4ca1b2d1cb4584b3/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [2-3随机变量的分布函数review · 由0—1及三次投币分布律求阶梯CDF](/my-web/notes/obsidian/221d8beefa5c1b9f/#%E9%A2%98%E5%9E%8B01-%E7%94%B101%E5%8F%8A%E4%B8%89%E6%AC%A1%E6%8A%95%E5%B8%81%E5%88%86%E5%B8%83%E5%BE%8B%E6%B1%82%E9%98%B6%E6%A2%AFcdf)
- [2-3随机变量的分布函数review · 分段CDF待定参数与区间概率](/my-web/notes/obsidian/221d8beefa5c1b9f/#%E9%A2%98%E5%9E%8B02-%E5%88%86%E6%AE%B5cdf%E5%BE%85%E5%AE%9A%E5%8F%82%E6%95%B0%E4%B8%8E%E5%8C%BA%E9%97%B4%E6%A6%82%E7%8E%87)
- [2-3随机变量的分布函数review · CDF的凸组合仍为CDF的证明](/my-web/notes/obsidian/221d8beefa5c1b9f/#%E9%A2%98%E5%9E%8B03-cdf%E7%9A%84%E5%87%B8%E7%BB%84%E5%90%88%E4%BB%8D%E4%B8%BAcdf%E7%9A%84%E8%AF%81%E6%98%8E)
- [2-3随机变量的分布函数review · 跳跃CDF反求离散质量](/my-web/notes/obsidian/221d8beefa5c1b9f/#%E9%A2%98%E5%9E%8B04-%E8%B7%B3%E8%B7%83cdf%E5%8F%8D%E6%B1%82%E7%A6%BB%E6%95%A3%E8%B4%A8%E9%87%8F)
- [2-3随机变量的分布函数review · 均匀圆盘落点的半径分布](/my-web/notes/obsidian/221d8beefa5c1b9f/#%E9%A2%98%E5%9E%8B05-%E5%9D%87%E5%8C%80%E5%9C%86%E7%9B%98%E8%90%BD%E7%82%B9%E7%9A%84%E5%8D%8A%E5%BE%84%E5%88%86%E5%B8%83)
- [2-4review、 · 含反三角函数的连续CDF参数](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B01-%E5%90%AB%E5%8F%8D%E4%B8%89%E8%A7%92%E5%87%BD%E6%95%B0%E7%9A%84%E8%BF%9E%E7%BB%ADcdf%E5%8F%82%E6%95%B0)
- [2-4review、 · 离散条件概率与CDF跳跃复习](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B11-%E7%A6%BB%E6%95%A3%E6%9D%A1%E4%BB%B6%E6%A6%82%E7%8E%87%E4%B8%8Ecdf%E8%B7%B3%E8%B7%83%E5%A4%8D%E4%B9%A0)
- [2-4review、 · 先抽球再在不相邻区间均匀取数](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B12-%E5%85%88%E6%8A%BD%E7%90%83%E5%86%8D%E5%9C%A8%E4%B8%8D%E7%9B%B8%E9%82%BB%E5%8C%BA%E9%97%B4%E5%9D%87%E5%8C%80%E5%8F%96%E6%95%B0)
