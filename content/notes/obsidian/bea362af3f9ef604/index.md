---
title: R28 正态分布的参数与形状
date: '2026-10-16T17:07:07.066386+00:00'
lastmod: '2026-10-16T17:07:07.066386+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/16327b65ee8a93ba/index.md
- notes/obsidian/35c0448e7aeb3994/index.md
- notes/obsidian/51b2f723cc621afb/index.md
- notes/obsidian/51e9e4eba3515a19/index.md
- notes/obsidian/57bef1228797c3a5/index.md
- notes/obsidian/b8e8f4ae985ae6d4/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/d3cc4d4401e98773/index.md
obsidian: true
note_course: 概率论
---

# 正态分布的参数与形状

> [!tip] 做题入口
> μ决定中心，σ决定尺度；N(μ,σ²)第二参数是方差。

## 详细讲解：从理解到列式

### 图解：正态区间

![正态区间](/my-web/notes-media/asset-e843db65dafa97c0.svg)

所有阈值先减均值除标准差，再在标准正态横轴定位。 图为本库补充示意，不替代原题中的几何与方向。

### 两个参数负责不同变化

$X\sim N(\mu,\sigma^2)$，$\sigma>0$。均值μ使整条曲线平移；σ控制横向分散程度，同时通过 $1/\sigma$ 调整高度以保持总面积1。密度为 $f(x)=e^{-(x-\mu)^2/(2\sigma^2)}/(\sigma\sqrt{2\pi})$，第二个参数通常写方差，而非标准差。

### 对称性怎样用于计算

关于μ对称，故 $P(X<\mu)=1/2$，$P(\mu-a<X<\mu+a)$ 可转成标准化后的对称区间。单点概率为零，因此连续正态在区间端点用 < 或 ≤ 不改变概率；这个方便不能移植到离散分布。

不是任何钟形数据都可不加检验称正态。若题设明确给正态，就按标准化计算；若在建模中自己选择，需要说明数据或机制依据。正态取值覆盖整条实轴，表示非负长度时只是近似模型，负值概率若不可忽略则需考虑模型是否合适。

### 学习顺序

先读：[概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/)。

再用到：[正态标准化与分位数](/my-web/notes/obsidian/51e9e4eba3515a19/)、[正态密度归一化常数的推导](/my-web/notes/obsidian/57bef1228797c3a5/)。

[在学习地图中定位本节](/my-web/notes/?map=R28#notes-graph-heading)

## 前提与后续关系

**先确认：** [概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/)

**继续用于：** [正态标准化与分位数](/my-web/notes/obsidian/51e9e4eba3515a19/)

## 定义与前提

$X\sim N(\mu,\sigma^2)$，$\sigma>0$，

$$
f_X(x)=\frac1{\sigma\sqrt{2\pi}}\exp\left[-\frac{(x-\mu)^2}{2\sigma^2}\right],\quad x\in\mathbb R.
$$

本节点解释参数和结构；归一化常数的积分推导在“正态密度归一化”节点，概率计算在“标准化”节点。

## 逐步推导与几何

令 $z=(x-\mu)/\sigma$，则指数变成 $-z^2/2$。平移 $\mu$ 不改变曲线形状；放大 $\sigma$ 使横向更宽，为保持面积1，高度乘 $1/\sigma$。密度关于 $\mu$ 对称，峰值 $1/(\sigma\sqrt{2\pi})$。

## 补充例题｜读懂参数

**题目：** $X\sim N(10,4)$。

1. $\mu=10$，$\sigma^2=4$，所以标准差 $\sigma=2$。
2. $x=14$ 对应中心右侧2个标准差，而不是1个。
3. 对称性给 $P(X\le8)=P(X\ge12)$。
4. 密度峰值约0.19947，与 $N(10,1)$ 相比更低更宽。

## 易错与边界

“许多随机误差近似正态”是有条件的建模判断，不是所有单峰数据都正态。指数函数是整条实轴有正密度，不存在有限的最大可能偏离值。

## 回想任务

$N(0,9)$ 的标准化分母应该是3还是9？为什么？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第31页至第37页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图15 · IMG20261015233251](/my-web/notes-media/asset-f7562be5f02cb933.webp)。
- [课堂笔记图16 · IMG20261015233259](/my-web/notes-media/asset-c4e79abe418d8471.webp)。
- [课堂笔记图17 · IMG20261015233302](/my-web/notes-media/asset-c23c3f496c6f1416.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233251](/my-web/notes-media/asset-f7562be5f02cb933.webp)

## 关联与返回

[概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/)、[正态标准化与分位数](/my-web/notes/obsidian/51e9e4eba3515a19/)、[二项分布的正态近似与连续性修正](/my-web/notes/obsidian/16327b65ee8a93ba/)、[正态密度归一化常数的推导](/my-web/notes/obsidian/57bef1228797c3a5/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [连续尺寸映射为离散利润](/my-web/notes/obsidian/d3cc4d4401e98773/) · 进阶

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [2-4review、 · 正态区间、对称尾部与标准化](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B07-%E6%AD%A3%E6%80%81%E5%8C%BA%E9%97%B4%E5%AF%B9%E7%A7%B0%E5%B0%BE%E9%83%A8%E4%B8%8E%E6%A0%87%E5%87%86%E5%8C%96)
- [2-4review、 · 三倍标准差与二项正态近似](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B10-%E4%B8%89%E5%80%8D%E6%A0%87%E5%87%86%E5%B7%AE%E4%B8%8E%E4%BA%8C%E9%A1%B9%E6%AD%A3%E6%80%81%E8%BF%91%E4%BC%BC)
- [2-5随机变量的函数的分布review · 正态变量仿射变换仍正态](/my-web/notes/obsidian/b8e8f4ae985ae6d4/#%E9%A2%98%E5%9E%8B07-%E6%AD%A3%E6%80%81%E5%8F%98%E9%87%8F%E4%BB%BF%E5%B0%84%E5%8F%98%E6%8D%A2%E4%BB%8D%E6%AD%A3%E6%80%81)
