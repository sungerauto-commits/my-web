---
title: R26 指数分布与等待时间
date: '2026-10-16T17:07:07.058877+00:00'
lastmod: '2026-10-16T17:07:07.058877+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/1a2adbe54fd640b8/index.md
- notes/obsidian/35c0448e7aeb3994/index.md
- notes/obsidian/51b2f723cc621afb/index.md
- notes/obsidian/568d3edc42a57ff7/index.md
- notes/obsidian/9fa6b6113ecaf1aa/index.md
- notes/obsidian/a45bf361a307c0fc/index.md
- notes/obsidian/cd3e85505394c498/index.md
obsidian: true
note_course: 概率论
---

# 指数分布与等待时间

> [!tip] 做题入口
> 指数参数先定为速率λ，避免与均值参数混用。

## 详细讲解：从理解到列式

### 图解：次数与等待

![次数与等待](/my-web/notes-media/asset-b177ce0d24f729ee.svg)

固定时窗数次数，与固定事件数等时间，是两种不同变量。 图为本库补充示意，不替代原题中的几何与方向。

### 用尾概率理解等待时间

率参数 $\lambda>0$ 的指数密度为 $f(t)=\lambda e^{-\lambda t}$，$t>0$。积分得 $F(t)=1-e^{-\lambda t}$，故 $P(T>t)=e^{-\lambda t}$。参数单位应为时间的倒数；若平均等待为5 min，率为 $1/5\rm\ min^{-1}$，不是5。

### 与计数模型的联系需要额外过程假设

在恒定率、独立增量的泊松过程里，“首次事件等超过t”相当于“前t内计数为0”，概率 $e^{-\lambda t}$，因而首个等待服从指数分布。但一个单独的泊松边缘计数分布并不自动给出全部等待过程性质。

等待超过a就离开的题，先求单次离开率 $p=e^{-\lambda a}$，再依据多次访问是否独立决定次数模型。若独立访问n次，则离开次数服从 $B(n,p)$；只给单次等待分布而未给访问间关系时，必须说明所用独立假设。ER04 完整展示了从连续等待到离散次数的两层模型。

### 学习顺序

先读：[概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/)。

再用到：[指数无记忆性的推导](/my-web/notes/obsidian/a45bf361a307c0fc/)。

[在学习地图中定位本节](/my-web/notes/?map=R26#notes-graph-heading)

## 前提与后续关系

**先确认：** [泊松分布与计数参数](/my-web/notes/obsidian/9fa6b6113ecaf1aa/)、[概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/)

**继续用于：** [指数无记忆性的推导](/my-web/notes/obsidian/a45bf361a307c0fc/)

## 定义与前提

本库用速率参数 $\lambda>0$：$f(t)=\lambda e^{-\lambda t}$（$t\ge0$），$F(t)=1-e^{-\lambda t}$（$t\ge0$），$t<0$ 时两者为0。生存函数 $P(T>t)=e^{-\lambda t}$。部分教材用尺度 $\theta=1/\lambda$，写成 $e^{-t/\theta}/\theta$，需核对约定。

## 逐步推导

积分 $\int_0^t\lambda e^{-\lambda s}ds=1-e^{-\lambda t}$，总积分为1。在理想泊松到达过程中，$T>t$ 等价于长度 $t$ 区间没有到达；若计数参数 $rt$，则 $P(T>t)=P(N(t)=0)=e^{-rt}$，于是首次等待时间是速率 $r$ 的指数分布。

## 补充例题｜等待超过10分钟

**题目：** 等待时间指数速率每分钟0.2。

1. $P(T>10)=e^{-0.2\times10}=e^{-2}\approx0.13534$。
2. $P(5<T\le10)=e^{-1}-e^{-2}\approx0.23254$。
3. 时间单位若改为小时，速率也要变为12/小时，不能只改时间数字。

## 易错与边界

“寿命”不自动服从指数分布；老化现象通常会破坏无记忆性。指数分布是模型假设，课件列举应用不能当作所有真实设备的定律。

## 回想任务

为何概率 $P(T>t)$ 中的乘积 $\lambda t$ 必须无量纲？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第26页至第30页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图15 · IMG20261015233251](/my-web/notes-media/asset-f7562be5f02cb933.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233251](/my-web/notes-media/asset-f7562be5f02cb933.webp)

## 关联与返回

[泊松分布与计数参数](/my-web/notes/obsidian/9fa6b6113ecaf1aa/)、[概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/)、[指数无记忆性的推导](/my-web/notes/obsidian/a45bf361a307c0fc/)、[函数分布的分布函数法](/my-web/notes/obsidian/1a2adbe54fd640b8/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [指数等待转为二项离开次数](/my-web/notes/obsidian/568d3edc42a57ff7/) · 进阶

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [2-4review、 · 指数型和根式密度的归一化](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B02-%E6%8C%87%E6%95%B0%E5%9E%8B%E5%92%8C%E6%A0%B9%E5%BC%8F%E5%AF%86%E5%BA%A6%E7%9A%84%E5%BD%92%E4%B8%80%E5%8C%96)
- [2-4review、 · 指数寿命条件存活与银行等待](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B06-%E6%8C%87%E6%95%B0%E5%AF%BF%E5%91%BD%E6%9D%A1%E4%BB%B6%E5%AD%98%E6%B4%BB%E4%B8%8E%E9%93%B6%E8%A1%8C%E7%AD%89%E5%BE%85)
