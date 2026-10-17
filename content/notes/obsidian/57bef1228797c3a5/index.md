---
title: R35 正态密度归一化常数的推导
date: '2026-10-16T17:06:37.030370+00:00'
lastmod: '2026-10-16T17:06:37.030370+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/35c0448e7aeb3994/index.md
- notes/obsidian/51e9e4eba3515a19/index.md
- notes/obsidian/9ed1c7c2e782ef18/index.md
- notes/obsidian/bea362af3f9ef604/index.md
- notes/obsidian/cd3e85505394c498/index.md
obsidian: true
note_course: 概率论
---

# 正态密度归一化常数的推导

> [!tip] 做题入口
> √(2π)来自高斯积分，不是随意选的系数。

## 详细讲解：从理解到列式

### 归一化常数来自一个二维积分

设 $I=\int_{-\infty}^{\infty}e^{-x^2/2}dx$。一元积分没有初等原函数，但平方后可化为平面上的乘积积分：

$$
I^2=\iint_{\mathbb R^2}e^{-(x^2+y^2)/2}dxdy.
$$

被积函数非负，允许这样交换并组合积分。改用极坐标 $x=r\cos\theta,y=r\sin\theta$，面积元 $dxdy=r,drd\theta$：

$$
I^2=\int_0^{2\pi}\int_0^\infty e^{-r^2/2}r,drd\theta=2\pi.
$$

因I为正，$I=\sqrt{2\pi}$，所以标准正态密度的系数为 $1/\sqrt{2\pi}$。

### 一般正态中的σ又从哪来

令 $z=(x-\mu)/\sigma$，则 $dx=\sigma dz$。为使积分仍为1，密度系数需再乘 $1/\sigma$。极坐标中的r和变量变换中的σ都来自长度/面积元素的变化，漏掉它们就无法归一。归一化的证明不提供Φ的初等表达式，实际区间概率仍使用数值表或数值函数。

### 学习顺序

先读：[正态分布的参数与形状](/my-web/notes/obsidian/bea362af3f9ef604/)。

用于练习：[对应课件的题型练习](/my-web/notes/obsidian/9ed1c7c2e782ef18/)。

[在学习地图中定位本节](/my-web/notes/?map=R35#notes-graph-heading)

## 前提与后续关系

**先确认：** [概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/)

**继续用于：** 结合下方关联节点做题与复查。

## 问题与前提

要使标准正态形状 $ce^{-x^2/2}$ 的总面积为1，需要求 $I=\int_{-\infty}^\infty e^{-x^2/2}dx$。本节是帮助理解课件正态公式的补充微积分推导，不冒充原PPT逐字证明。

## 逐步推导

1. 被积函数非负，二重积分可以按乘积及极坐标变换计算：
   $$
   I^2=\int_{\mathbb R^2}e^{-(x^2+y^2)/2}\,dx\,dy.
   $$


2. 令 $x=r\cos\theta,y=r\sin\theta$，面积元 $dx\,dy=r\,dr\,d\theta$：
   $$
   I^2=\int_0^{2\pi}\int_0^\infty e^{-r^2/2}r\,dr\,d\theta.
   $$


3. $u=r^2/2$，$du=rdr$，径向积分为 $\int_0^\infty e^{-u}du=1$。
4. 因此 $I^2=2\pi$，$I>0$，故 $I=\sqrt{2\pi}$、$c=1/\sqrt{2\pi}$。
5. 一般形状 $e^{-(x-\mu)^2/(2\sigma^2)}$ 再令 $z=(x-\mu)/\sigma$，积分为 $\sigma\sqrt{2\pi}$，系数为 $1/(\sigma\sqrt{2\pi})$。

## 补充例题｜辨认指数系数

**题目：** $f(x)=ce^{-x^2}$，整条实轴，求 $c$ 及对应正态参数。

1. $2\sigma^2=1$，故 $\sigma^2=1/2,\mu=0$。
2. $c=1/(\sigma\sqrt{2\pi})=1/\sqrt\pi$。
3. 不能看见 $e^{-x^2}$ 就直接当作方差1的标准正态。

## 易错与边界

极坐标面积元必须有 $r$。这里证明全轴定积分，仍没有给出 $\Phi(x)$ 的初等原函数；查表或数值计算的需求依然存在。

## 回想任务

为什么平方成二维积分反而更容易求这个一维定积分？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- [课堂笔记图16 · IMG20261015233259](/my-web/notes-media/asset-c4e79abe418d8471.webp)。
- [课堂笔记图17 · IMG20261015233302](/my-web/notes-media/asset-c23c3f496c6f1416.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233259](/my-web/notes-media/asset-c4e79abe418d8471.webp)

## 关联与返回

[概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/)、[正态分布的参数与形状](/my-web/notes/obsidian/bea362af3f9ef604/)、[正态标准化与分位数](/my-web/notes/obsidian/51e9e4eba3515a19/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)
