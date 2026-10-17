---
title: R22 泊松计数的独立筛选
date: '2026-10-16T17:06:37.020800+00:00'
lastmod: '2026-10-16T17:06:37.020800+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/1908780ea766a34a/index.md
- notes/obsidian/2587cd6473932f70/index.md
- notes/obsidian/9ed1c7c2e782ef18/index.md
- notes/obsidian/9fa6b6113ecaf1aa/index.md
- notes/obsidian/c45a43c99adf4894/index.md
- notes/obsidian/cd3e85505394c498/index.md
obsidian: true
note_course: 概率论
---

# 泊松计数的独立筛选

> [!tip] 做题入口
> 总数泊松，每个独立保留概率p，保留数仍是泊松。

## 详细讲解：从理解到列式

### 把随机总数与条件筛选分两层

若总数 $N\sim\operatorname{Pois}(\lambda)$，每个对象独立以概率p保留，且筛选与N独立，则给定 $N=n$ 时保留数 $X\mid N=n\sim B(n,p)$。不能跳过这层条件模型直接凭印象改参数。

### 全概率求和推出新分布

对 $k\ge0$，

$$
P(X=k)=\sum_{n=k}^{\infty}\binom nkp^k(1-p)^{n-k}e^{-\lambda}\frac{\lambda^n}{n!}.
$$

令 $m=n-k$，提取与m无关的因子，余和为 $\sum_{m\ge0}[\lambda(1-p)]^m/m!=e^{\lambda(1-p)}$，故 $P(X=k)=e^{-\lambda p}(\lambda p)^k/k!$。

因此保留数仍为泊松，参数变为平均保留次数 $\lambda p$。若多个对象是否保留互相影响，或者保留概率依赖总数，条件二项结构失效，结论就不能原样沿用。先说明随机总数、再说明每个对象怎么筛选，是这类题最清楚的建模顺序。

### 学习顺序

先读：[二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/)、[泊松分布与计数参数](/my-web/notes/obsidian/9fa6b6113ecaf1aa/)。

用于练习：[对应课件的题型练习](/my-web/notes/obsidian/9ed1c7c2e782ef18/)。

[在学习地图中定位本节](/my-web/notes/?map=R22#notes-graph-heading)

## 前提与后续关系

**先确认：** [全概率公式](/my-web/notes/obsidian/2587cd6473932f70/)、[二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/)、[泊松分布与计数参数](/my-web/notes/obsidian/9fa6b6113ecaf1aa/)

**继续用于：** 结合下方关联节点做题与复查。

## 定理与前提

$N\sim\operatorname{Pois}(\lambda)$，给定 $N=n$ 后每一项独立以同概率 $p$ 被保留，故 $K\mid N=n\sim\operatorname{Bin}(n,p)$。则 $K\sim\operatorname{Pois}(\lambda p)$。这是对手写笔记中两分布组合推导的整理。

## 逐步推导

对 $k\ge0$，按总数 $N$ 分类：
$$
\begin{aligned}
P(K=k)&=\sum_{n=k}^\infty P(K=k\mid N=n)P(N=n)\\
&=\sum_{n=k}^\infty\binom nk p^k(1-p)^{n-k}e^{-\lambda}\frac{\lambda^n}{n!}\\
&=e^{-\lambda}\frac{(\lambda p)^k}{k!}\sum_{m=0}^\infty\frac{[\lambda(1-p)]^m}{m!}\\
&=e^{-\lambda}\frac{(\lambda p)^k}{k!}e^{\lambda(1-p)}
=e^{-\lambda p}\frac{(\lambda p)^k}{k!}.
\end{aligned}
$$


第三行令 $m=n-k$ 并约去 $n!$，第四行使用指数级数。

## 补充例题

电话总呼入数 $N\sim\operatorname{Pois}(10)$，每通独立以0.2概率属于某类，分类数 $K\sim\operatorname{Pois}(2)$。零通该类电话概率 $e^{-2}$。

## 易错与边界

若不同电话的分类互相依赖、保留概率随总数变化，不能直接用 $\lambda p$。这里用的是精确分布推导，不是大 $n$ 近似。

## 回想任务

推导的求和下限为什么从 $n=k$ 开始，而不是0？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- [课堂笔记图12 · IMG20261015233235](/my-web/notes-media/asset-24eaaaf9eafd8f22.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233235](/my-web/notes-media/asset-24eaaaf9eafd8f22.webp)

## 关联与返回

[全概率公式](/my-web/notes/obsidian/2587cd6473932f70/)、[二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/)、[泊松分布与计数参数](/my-web/notes/obsidian/9fa6b6113ecaf1aa/)、[二项到泊松的极限推导](/my-web/notes/obsidian/c45a43c99adf4894/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)
