---
title: R31 函数分布的分布函数法
date: '2026-10-16T17:07:07.075407+00:00'
lastmod: '2026-10-16T17:07:07.075407+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/29f9bf39693ad5be/index.md
- notes/obsidian/35c0448e7aeb3994/index.md
- notes/obsidian/4ca1b2d1cb4584b3/index.md
- notes/obsidian/51b2f723cc621afb/index.md
- notes/obsidian/749b0e191a8c3ec0/index.md
- notes/obsidian/89bcb92b5fa2ff2b/index.md
- notes/obsidian/8bf43a3c44d5d61d/index.md
- notes/obsidian/aecbddcbdc38f474/index.md
- notes/obsidian/b8e8f4ae985ae6d4/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/d3cc4d4401e98773/index.md
obsidian: true
note_course: 概率论
---

# 函数分布的分布函数法

> [!tip] 做题入口
> 把g(X)≤y准确解回X的范围，是所有变换公式的起点。

## 详细讲解：从理解到列式

### 图解：非单调变换

![非单调变换](/my-web/notes-media/asset-cfc243822a5a653d.svg)

水平线与函数图交几次，提示有几条合法原像分支。 图为本库补充示意，不替代原题中的几何与方向。

### CDF法不要求变换单调

对 $Y=g(X)$，从定义出发 $F_Y(y)=P(g(X)\le y)$。关键步骤是把这个不等式解成X的集合，而不是一开始就求反函数。先找Y的值域，在值域外补CDF为0或1，再对内部情况解原像。

### 平方变换展示多区间和端点

若 $Y=X^2$，$y<0$ 时CDF为0；$y\ge0$ 时 $\{X^2\le y\}=\{-\sqrt y\le X\le\sqrt y\}$。若X连续，

$$
F_Y(y)=F_X(\sqrt y)-F_X(-\sqrt y).
$$

若X有点质量，左端应写 $F_X(-\sqrt y^-)$，并考虑重合端点，不能照搬连续情形。求导之后也应注明密度适用的y区间。

遇到分段函数、截断、绝对值、余弦等，先画函数图，再用一条水平线判断原像是中间一段还是两侧两段。图能帮助选区间，但最终仍把区间端点和概率写完整。

### 学习顺序

先读：[分布函数及右连续性](/my-web/notes/obsidian/89bcb92b5fa2ff2b/)。

再用到：[单调变换密度与绝对值因子](/my-web/notes/obsidian/8bf43a3c44d5d61d/)、[非单调变换与多分支求和](/my-web/notes/obsidian/29f9bf39693ad5be/)。

[在学习地图中定位本节](/my-web/notes/?map=R31#notes-graph-heading)

## 前提与后续关系

**先确认：** [随机变量是样本空间上的函数](/my-web/notes/obsidian/749b0e191a8c3ec0/)、[分布函数及右连续性](/my-web/notes/obsidian/89bcb92b5fa2ff2b/)

**继续用于：** [单调变换密度与绝对值因子](/my-web/notes/obsidian/8bf43a3c44d5d61d/)、[非单调变换与多分支求和](/my-web/notes/obsidian/29f9bf39693ad5be/)

## 方法与前提

对任意随机变量及合法函数变换，$F_Y(y)=P(g(X)\le y)$。先求支持集，再按 $y$ 分类解不等式。若 $Y$ 确实有密度，再在适当位置求导；不能默认任意变换都产生连续型分布。

## 逐步推导与课件原题

函数分布课件第11—12页：$X\sim N(0,1)$，$Y=e^X$。

1. 支持集 $y>0$。$y\le0$ 时 $F_Y(y)=0$。
2. $y>0$ 时，$e^X\le y\iff X\le\ln y$。
3. $F_Y(y)=\Phi(\ln y)$。
4. 链式求导：$f_Y(y)=\phi(\ln y)/y=\exp[-(\ln y)^2/2]/(y\sqrt{2\pi})$，$y>0$；其他处可取0。
5. 用代换 $z=\ln y$ 验证密度积分为1。这是对数正态模型的特例。

## 解题步骤

支持集→分 $y$ 区间→解原像集合→用已知分布求概率→检查连续性及总概率→若适用再求导。

## 易错与边界

$g$ 递减时不等号翻转；非单调时往往得到多个区间。若 $g$ 在某段恒定且那段有正概率，$Y$ 会出现点质量，不能只靠导数描述全部分布。

## 回想任务

求 $Y=\mathbf1_{\{X>0\}}$ 时，为什么即使 $X$ 连续，也不能为 $Y$ 写一个普通连续密度？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第10页至第15页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图18 · IMG20261015233308](/my-web/notes-media/asset-52ed9c290f3a5717.webp)。
- [课堂笔记图19 · IMG20261015233312](/my-web/notes-media/asset-ec4d786e47d1defe.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233308](/my-web/notes-media/asset-52ed9c290f3a5717.webp)

> [!example]- 展开查看原题所在课件页
> 2-5随机变量的函数的分布review

## 关联与返回

[分布函数及右连续性](/my-web/notes/obsidian/89bcb92b5fa2ff2b/)、[概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/)、[离散随机变量函数的分布](/my-web/notes/obsidian/aecbddcbdc38f474/)、[单调变换密度与绝对值因子](/my-web/notes/obsidian/8bf43a3c44d5d61d/)、[非单调变换与多分支求和](/my-web/notes/obsidian/29f9bf39693ad5be/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [余弦变换：两个反函数分支都要计入](/my-web/notes/obsidian/4ca1b2d1cb4584b3/) · 综合
- [连续尺寸映射为离散利润](/my-web/notes/obsidian/d3cc4d4401e98773/) · 进阶

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [2-4review、 · 双侧指数密度与平方变换](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B03-%E5%8F%8C%E4%BE%A7%E6%8C%87%E6%95%B0%E5%AF%86%E5%BA%A6%E4%B8%8E%E5%B9%B3%E6%96%B9%E5%8F%98%E6%8D%A2)
- [2-5随机变量的函数的分布review · 指数和线性单调变换密度](/my-web/notes/obsidian/b8e8f4ae985ae6d4/#%E9%A2%98%E5%9E%8B02-%E6%8C%87%E6%95%B0%E5%92%8C%E7%BA%BF%E6%80%A7%E5%8D%95%E8%B0%83%E5%8F%98%E6%8D%A2%E5%AF%86%E5%BA%A6)
- [2-5随机变量的函数的分布review · 正态平方与多分支非单调变换](/my-web/notes/obsidian/b8e8f4ae985ae6d4/#%E9%A2%98%E5%9E%8B03-%E6%AD%A3%E6%80%81%E5%B9%B3%E6%96%B9%E4%B8%8E%E5%A4%9A%E5%88%86%E6%94%AF%E9%9D%9E%E5%8D%95%E8%B0%83%E5%8F%98%E6%8D%A2)
- [2-5随机变量的函数的分布review · 支撑只在负半轴的平方与线性变换](/my-web/notes/obsidian/b8e8f4ae985ae6d4/#%E9%A2%98%E5%9E%8B05-%E6%94%AF%E6%92%91%E5%8F%AA%E5%9C%A8%E8%B4%9F%E5%8D%8A%E8%BD%B4%E7%9A%84%E5%B9%B3%E6%96%B9%E4%B8%8E%E7%BA%BF%E6%80%A7%E5%8F%98%E6%8D%A2)
