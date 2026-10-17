---
title: R29 正态标准化与分位数
date: '2026-10-16T17:07:07.067890+00:00'
lastmod: '2026-10-16T17:07:07.067890+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/16327b65ee8a93ba/index.md
- notes/obsidian/35c0448e7aeb3994/index.md
- notes/obsidian/51b2f723cc621afb/index.md
- notes/obsidian/89bcb92b5fa2ff2b/index.md
- notes/obsidian/8bf43a3c44d5d61d/index.md
- notes/obsidian/b8e8f4ae985ae6d4/index.md
- notes/obsidian/bea362af3f9ef604/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/d3cc4d4401e98773/index.md
obsidian: true
note_course: 概率论
---

# 正态标准化与分位数

> [!tip] 做题入口
> 先把区间变成标准差单位，再查同一张Φ表。

## 详细讲解：从理解到列式

### 图解：正态区间

![正态区间](/my-web/notes-media/asset-e843db65dafa97c0.svg)

所有阈值先减均值除标准差，再在标准正态横轴定位。 图为本库补充示意，不替代原题中的几何与方向。

### 标准化是一个保持概率的事件转换

令 $Z=(X-\mu)/\sigma$，因 $\sigma>0$，不等号方向保持：

$$
P(a<X\le b)=\Phi\left(\frac{b-\mu}{\sigma}\right)-\Phi\left(\frac{a-\mu}{\sigma}\right).
$$

减均值负责平移，除标准差负责缩放，不能除方差。$\Phi$ 表示标准正态CDF，不是密度；$\Phi(-z)=1-\Phi(z)$ 来自对称性。

### 反求阈值时先改写成CDF

若求c使 $P(X>c)=\alpha$，则 $\Phi((c-\mu)/\sigma)=1-\alpha$，因此 $c=\mu+\sigma\Phi^{-1}(1-\alpha)$。上侧小尾概率对应大于均值的阈值，若得到远小于均值的结果，应检查是否把α与 $1-\alpha$ 用反。

对称容差 $P(|X-\mu|\le a)=1-\alpha$ 时，每侧尾部为 $\alpha/2$，得到 $a=\sigma\Phi^{-1}(1-\alpha/2)$。求满足概率下界的“最大标准差”时，先保留不等式，再利用Φ单调性解，不要不经解释就把所有条件改成等号。

### 学习顺序

先读：[正态分布的参数与形状](/my-web/notes/obsidian/bea362af3f9ef604/)。

再用到：[二项分布的正态近似与连续性修正](/my-web/notes/obsidian/16327b65ee8a93ba/)。

[在学习地图中定位本节](/my-web/notes/?map=R29#notes-graph-heading)

## 前提与后续关系

**先确认：** [分布函数及右连续性](/my-web/notes/obsidian/89bcb92b5fa2ff2b/)、[正态分布的参数与形状](/my-web/notes/obsidian/bea362af3f9ef604/)

**继续用于：** [二项分布的正态近似与连续性修正](/my-web/notes/obsidian/16327b65ee8a93ba/)

## 定理与前提

若 $X\sim N(\mu,\sigma^2)$，则 $Z=(X-\mu)/\sigma\sim N(0,1)$。设 $\Phi(z)=P(Z\le z)$，则 $P(a<X\le b)=\Phi((b-\mu)/\sigma)-\Phi((a-\mu)/\sigma)$。

## 逐步推导

$\sigma>0$ 保持不等号方向。以密度变换 $x=\mu+\sigma z$、$dx=\sigma dz$，积分中的 $1/\sigma$ 与 $dx$ 相消，得到标准正态积分。对称性 $\Phi(-z)=1-\Phi(z)$。若 $P(X\le c)=q$，则 $c=\mu+\sigma\Phi^{-1}(q)$。

## 补充例题与步骤

**题目：** $X\sim N(10,4)$，求 $P(8<X<14)$。

1. 标准化下限 $(8-10)/2=-1$，上限 $(14-10)/2=2$。
2. 所求 $\Phi(2)-\Phi(-1)$。
3. 约 $0.9772499-0.1586553=0.8185946$。
4. 右尾95%分位数 $c=10+2\times1.644854\approx13.2897$；双侧中间95%用1.959964，两者不能混。

## 易错与边界

先确认表格给的是左尾 $\Phi(z)$，还是从0到 $z$ 的面积。$P(X>c)=0.01$ 对应 $\Phi((c-\mu)/\sigma)=0.99$，不是0.01。

## 回想任务

为什么“中间95%”和“左侧95%”使用不同的标准正态分位数？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第37页至第52页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图16 · IMG20261015233259](/my-web/notes-media/asset-c4e79abe418d8471.webp)。
- [课堂笔记图17 · IMG20261015233302](/my-web/notes-media/asset-c23c3f496c6f1416.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233259](/my-web/notes-media/asset-c4e79abe418d8471.webp)

## 关联与返回

[分布函数及右连续性](/my-web/notes/obsidian/89bcb92b5fa2ff2b/)、[概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/)、[正态分布的参数与形状](/my-web/notes/obsidian/bea362af3f9ef604/)、[单调变换密度与绝对值因子](/my-web/notes/obsidian/8bf43a3c44d5d61d/)、[二项分布的正态近似与连续性修正](/my-web/notes/obsidian/16327b65ee8a93ba/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [连续尺寸映射为离散利润](/my-web/notes/obsidian/d3cc4d4401e98773/) · 进阶

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [2-4review、 · 正态区间、对称尾部与标准化](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B07-%E6%AD%A3%E6%80%81%E5%8C%BA%E9%97%B4%E5%AF%B9%E7%A7%B0%E5%B0%BE%E9%83%A8%E4%B8%8E%E6%A0%87%E5%87%86%E5%8C%96)
- [2-4review、 · 温控或车门高度的分位数设计](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B08-%E6%B8%A9%E6%8E%A7%E6%88%96%E8%BD%A6%E9%97%A8%E9%AB%98%E5%BA%A6%E7%9A%84%E5%88%86%E4%BD%8D%E6%95%B0%E8%AE%BE%E8%AE%A1)
- [2-4review、 · 正态单人概率到二项与泊松人数](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B09-%E6%AD%A3%E6%80%81%E5%8D%95%E4%BA%BA%E6%A6%82%E7%8E%87%E5%88%B0%E4%BA%8C%E9%A1%B9%E4%B8%8E%E6%B3%8A%E6%9D%BE%E4%BA%BA%E6%95%B0)
- [2-5随机变量的函数的分布review · 正态尺寸映射为离散利润](/my-web/notes/obsidian/b8e8f4ae985ae6d4/#%E9%A2%98%E5%9E%8B04-%E6%AD%A3%E6%80%81%E5%B0%BA%E5%AF%B8%E6%98%A0%E5%B0%84%E4%B8%BA%E7%A6%BB%E6%95%A3%E5%88%A9%E6%B6%A6)
