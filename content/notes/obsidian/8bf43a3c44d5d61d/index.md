---
title: R32 单调变换密度与绝对值因子
date: '2026-10-16T17:07:07.077408+00:00'
lastmod: '2026-10-16T17:07:07.077408+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/1a2adbe54fd640b8/index.md
- notes/obsidian/29f9bf39693ad5be/index.md
- notes/obsidian/35c0448e7aeb3994/index.md
- notes/obsidian/4ca1b2d1cb4584b3/index.md
- notes/obsidian/51e9e4eba3515a19/index.md
- notes/obsidian/b8e8f4ae985ae6d4/index.md
- notes/obsidian/cd3e85505394c498/index.md
obsidian: true
note_course: 概率论
---

# 单调变换密度与绝对值因子

> [!tip] 做题入口
> 反函数导数负责长度缩放，绝对值保证概率非负。

## 详细讲解：从理解到列式

### 图解：非单调变换

![非单调变换](/my-web/notes-media/asset-cfc243822a5a653d.svg)

水平线与函数图交几次，提示有几条合法原像分支。 图为本库补充示意，不替代原题中的几何与方向。

### 雅可比因子是区间长度变换

若 $g$ 在X支撑集上严格单调且反函数 $h=g^{-1}$ 可微，微小输出区间 $dy$ 对应输入长度 $|h'(y)|dy$。保持概率，得

$$
f_Y(y)=f_X(h(y))|h'(y)|.
$$

绝对值确保密度非负，尤其单调递减时不能漏掉。公式只在反函数落在原支撑集内时成立，其他地方密度为零。

### 先变范围，再变函数

若 $X\sim U(0,1)$、$Y=e^X$，范围为 $1<Y<e$，反函数为 $\ln y$，导数1/y，所以 $f_Y(y)=1/y$（1到e内）。若漏掉范围，把1/y写到所有正数上，积分就不再为1。

单调递减还可用CDF推导：$P(g(X)\le y)=P(X\ge h(y))=1-F_X(h(y))$（连续X），求导时出现负号，与 $h'<0$ 结合产生绝对值。遇到导数为零的孤立点，应分区间处理，密度可有可积奇点；若整段映成常数，则需单独处理点质量。

### 学习顺序

先读：[概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/)、[函数分布的分布函数法](/my-web/notes/obsidian/1a2adbe54fd640b8/)。

再用到：[非单调变换与多分支求和](/my-web/notes/obsidian/29f9bf39693ad5be/)。

[在学习地图中定位本节](/my-web/notes/?map=R32#notes-graph-heading)

## 前提与后续关系

**先确认：** [概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/)、[函数分布的分布函数法](/my-web/notes/obsidian/1a2adbe54fd640b8/)

**继续用于：** [非单调变换与多分支求和](/my-web/notes/obsidian/29f9bf39693ad5be/)

## 定理与前提

$X$ 有密度，$g$ 在相关支持区间严格单调，其反函数 $h$ 在像区间可微并满足相应变换条件，则

$$
f_Y(y)=f_X(h(y))\,|h'(y)|.
$$

只在像区间应用，外部为零。临界点或端点可单独处理，单点密度值不影响分布。

## 逐步推导

递增时 $F_Y(y)=F_X(h(y))$，求导得 $f_X(h(y))h'(y)$。递减时 $F_Y(y)=P(X\ge h(y))=1-F_X(h(y))$（$X$ 有密度无单点质量），求导得 $-f_X(h(y))h'(y)$。两种合并为绝对值。

## 补充例题｜负斜率线性变换

**题目：** $X\sim U(0,2)$，$Y=3-2X$。

1. $X=0\to Y=3$，$X=2\to Y=-1$，支持集为 $(-1,3)$。
2. $h(y)=(3-y)/2$，$|h'|=1/2$。
3. $f_Y(y)=(1/2)(1/2)=1/4$，$-1<y<3$，外部0。
4. 面积 $4\times1/4=1$，即 $Y\sim U(-1,3)$。
5. 一般 $Y=aX+b$、$a\ne0$，$f_Y(y)=|a|^{-1}f_X((y-b)/a)$。

## 易错与边界

漏掉导数因子通常会让总面积不为1。正态标准化中的 $1/\sigma$ 同样来自这一长度缩放，公式之间有共同来源。

## 回想任务

为什么递减变换的密度不能保留负的反函数导数？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第16页至第20页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图19 · IMG20261015233312](/my-web/notes-media/asset-ec4d786e47d1defe.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233312](/my-web/notes-media/asset-ec4d786e47d1defe.webp)

## 关联与返回

[概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/)、[正态标准化与分位数](/my-web/notes/obsidian/51e9e4eba3515a19/)、[函数分布的分布函数法](/my-web/notes/obsidian/1a2adbe54fd640b8/)、[非单调变换与多分支求和](/my-web/notes/obsidian/29f9bf39693ad5be/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [余弦变换：两个反函数分支都要计入](/my-web/notes/obsidian/4ca1b2d1cb4584b3/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [2-5随机变量的函数的分布review · 指数和线性单调变换密度](/my-web/notes/obsidian/b8e8f4ae985ae6d4/#%E9%A2%98%E5%9E%8B02-%E6%8C%87%E6%95%B0%E5%92%8C%E7%BA%BF%E6%80%A7%E5%8D%95%E8%B0%83%E5%8F%98%E6%8D%A2%E5%AF%86%E5%BA%A6)
- [2-5随机变量的函数的分布review · 支撑只在负半轴的平方与线性变换](/my-web/notes/obsidian/b8e8f4ae985ae6d4/#%E9%A2%98%E5%9E%8B05-%E6%94%AF%E6%92%91%E5%8F%AA%E5%9C%A8%E8%B4%9F%E5%8D%8A%E8%BD%B4%E7%9A%84%E5%B9%B3%E6%96%B9%E4%B8%8E%E7%BA%BF%E6%80%A7%E5%8F%98%E6%8D%A2)
- [2-5随机变量的函数的分布review · 正态变量仿射变换仍正态](/my-web/notes/obsidian/b8e8f4ae985ae6d4/#%E9%A2%98%E5%9E%8B07-%E6%AD%A3%E6%80%81%E5%8F%98%E9%87%8F%E4%BB%BF%E5%B0%84%E5%8F%98%E6%8D%A2%E4%BB%8D%E6%AD%A3%E6%80%81)
