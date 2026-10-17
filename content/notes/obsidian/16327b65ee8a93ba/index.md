---
title: R34 二项分布的正态近似与连续性修正
date: '2026-10-16T17:07:07.079408+00:00'
lastmod: '2026-10-16T17:07:07.079408+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/1908780ea766a34a/index.md
- notes/obsidian/51b2f723cc621afb/index.md
- notes/obsidian/51e9e4eba3515a19/index.md
- notes/obsidian/9ed1c7c2e782ef18/index.md
- notes/obsidian/bea362af3f9ef604/index.md
- notes/obsidian/c45a43c99adf4894/index.md
- notes/obsidian/cd3e85505394c498/index.md
obsidian: true
note_course: 概率论
---

# 二项分布的正态近似与连续性修正

> [!tip] 做题入口
> 先区分稀有事件泊松近似与中部计数的正态近似。

## 详细讲解：从理解到列式

### 图解：正态区间

![正态区间](/my-web/notes-media/asset-e843db65dafa97c0.svg)

所有阈值先减均值除标准差，再在标准正态横轴定位。 图为本库补充示意，不替代原题中的几何与方向。

### 从二项的中心和波动尺度开始

$X\sim B(n,p)$，均值 $np$，方差 $np(1-p)$。n充分大且 p不极端时，可用 $Y\sim N(np,np(1-p))$ 近似。n大并不足够，若 $np$ 很小，泊松近似通常更符合稀少事件结构。

### 连续性修正在补哪一段面积

二项变量的整数k占据一个点，正态面积却需要区间。将整数k对应到 $[k-0.5,k+0.5]$，于是 $P(a\le X\le b)$ 近似 $P(a-0.5<Y<b+0.5)$。$P(X\ge k)$ 用下界 $k-0.5$；$P(X>k)=P(X\ge k+1)$，下界应为 $k+0.5$。

再标准化时分母是 $\sqrt{np(1-p)}$，不是方差本身。先把离散不等式端点调整好，再标准化，能减少一边修正、一边漏修正。特别小的尾概率对近似误差敏感，若可计算精确二项，应保留精确结果作对照，不把近似小数冒充精确值。

### 学习顺序

先读：[二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/)、[正态标准化与分位数](/my-web/notes/obsidian/51e9e4eba3515a19/)。

用于练习：[对应课件的题型练习](/my-web/notes/obsidian/9ed1c7c2e782ef18/)。

[在学习地图中定位本节](/my-web/notes/?map=R34#notes-graph-heading)

## 前提与后续关系

**先确认：** [二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/)、[正态标准化与分位数](/my-web/notes/obsidian/51e9e4eba3515a19/)

**继续用于：** 结合下方关联节点做题与复查。

## 定理与前提

固定 $0<p<1$ 的二项计数，在 $n$ 增大时，标准化 $(X-np)/\sqrt{np(1-p)}$ 的分布趋向标准正态。有限样本应用需两个计数尺度 $np,n(1-p)$ 足够大，尾部精度另需检查；这不是一个对所有参数都精确的规则。课件第53页起介绍该近似，完整极限定理证明超出本次前两章整理范围。

## 推导说明｜连续性修正的来源

离散整数 $k$ 代表的直方条可覆盖 $[k-0.5,k+0.5]$。用连续面积近似整数概率时，$P(a\le X\le b)$ 相应近似为正态变量落在 $(a-0.5,b+0.5)$ 的概率。这是几何匹配的近似，不是概率恒等式。

## 补充例题

**题目：** $X\sim\operatorname{Bin}(100,0.5)$，近似求 $P(45\le X\le55)$。

1. 中心 $np=50$，尺度 $\sqrt{np(1-p)}=5$。
2. 连续性修正后区间44.5到55.5。
3. 标准化为 $-1.1<Z<1.1$。
4. 近似值 $2\Phi(1.1)-1\approx0.72867$；精确二项和约0.72875。
5. 若问题改为 $n=1000,p=0.0001$，则 $np=0.1$，正态形状不合适，应回到精确二项或泊松近似。

## 易错与边界

$P(X\ge k)$ 对应连续边界 $k-0.5$；$P(X>k)$ 即 $P(X\ge k+1)$，对应 $k+0.5$。本文给的是应用及修正来源，不把该说明标成完整中心极限定理证明。

## 回想任务

为什么一个固定样本量很大的二项分布仍可能不适合正态近似？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第53页至第55页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图10 · IMG20261015233220](/my-web/notes-media/asset-360193899957a556.webp)。
- [课堂笔记图17 · IMG20261015233302](/my-web/notes-media/asset-c23c3f496c6f1416.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233220](/my-web/notes-media/asset-360193899957a556.webp)

## 关联与返回

[二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/)、[二项到泊松的极限推导](/my-web/notes/obsidian/c45a43c99adf4894/)、[正态分布的参数与形状](/my-web/notes/obsidian/bea362af3f9ef604/)、[正态标准化与分位数](/my-web/notes/obsidian/51e9e4eba3515a19/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [2-4review、 · 三倍标准差与二项正态近似](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B10-%E4%B8%89%E5%80%8D%E6%A0%87%E5%87%86%E5%B7%AE%E4%B8%8E%E4%BA%8C%E9%A1%B9%E6%AD%A3%E6%80%81%E8%BF%91%E4%BC%BC)
