---
title: R14 随机变量是样本空间上的函数
date: '2026-10-16T17:07:07.022217+00:00'
lastmod: '2026-10-16T17:07:07.022217+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/1077b445258d9a76/index.md
- notes/obsidian/14237494eef12363/index.md
- notes/obsidian/1a2adbe54fd640b8/index.md
- notes/obsidian/31e82cf4de0ca98b/index.md
- notes/obsidian/398e913b88e52dfe/index.md
- notes/obsidian/52522b56538c6fc4/index.md
- notes/obsidian/89bcb92b5fa2ff2b/index.md
- notes/obsidian/937033040958dfa7/index.md
- notes/obsidian/aecbddcbdc38f474/index.md
- notes/obsidian/b7c7668670cc1cc4/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/d3cc4d4401e98773/index.md
- notes/obsidian/f90f2e4ddd7a9d01/index.md
obsidian: true
note_course: 概率论
---

# 随机变量是样本空间上的函数

> [!tip] 做题入口
> X不是某个未知常数，而是给每个试验结果赋数值的规则。

## 详细讲解：从理解到列式

### 随机变量是对结果作数值记录的规则

随机变量 X 是从样本空间到实数的函数。例如两次投币，基本结果 HH、HT、TH、TT，定义 X 为正面次数，则 X 分别为2、1、1、0。多个基本结果会映到同一个值，求 $P(X=1)$ 要把 HT 和 TH 的概率相加。

### 变量与实现值不要混淆

大写 X 表示整条映射规则，小写 x 是某个取值。$\{X\le x\}$ 是一组基本结果，因此可以求概率。分布研究的是各取值或区间获得多少概率，不必始终列出原始结果，但所有计算仍隐含了“取值的原像”。

这条思路直接通往函数变换：$Y=g(X)$ 的概率来自使 $g(X)$ 落入目标集合的全部 X 值。连续 X 经常函数映射可成为单点退化分布，说明输出类型由映射怎样压缩概率决定，不能只凭输入类型下结论。

### 学习顺序

先读：[样本空间与事件](/my-web/notes/obsidian/52522b56538c6fc4/)。

再用到：[离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/)、[分布函数及右连续性](/my-web/notes/obsidian/89bcb92b5fa2ff2b/)。

[在学习地图中定位本节](/my-web/notes/?map=R14#notes-graph-heading)

## 前提与后续关系

**先确认：** [样本空间与事件](/my-web/notes/obsidian/52522b56538c6fc4/)、[概率公理与基本性质](/my-web/notes/obsidian/b7c7668670cc1cc4/)

**继续用于：** [离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/)、[0—1分布与指示变量](/my-web/notes/obsidian/31e82cf4de0ca98b/)、[分布函数及右连续性](/my-web/notes/obsidian/89bcb92b5fa2ff2b/)、[离散随机变量函数的分布](/my-web/notes/obsidian/aecbddcbdc38f474/)、[函数分布的分布函数法](/my-web/notes/obsidian/1a2adbe54fd640b8/)

## 定义与逻辑位置

随机变量 $X:\Omega\to\mathbb R$。$\{X\le x\}$ 是事件，实际表示 $\{\omega:X(\omega)\le x\}$。从事件概率走向变量分布，就是把样本点通过 $X$ 映射到数轴，再把落在同一数值/区间的概率合并。

## 推导与课件例题

**题目：** 两个孩子的性别按独立等概率模型记录，$X$ 为女孩数（随机变量课件第9页）。

1. $\Omega=\{男男,男女,女男,女女\}$。
2. 映射为 $X(男男)=0$，$X(男女)=X(女男)=1$，$X(女女)=2$。
3. 合并原像概率：$P(X=0)=1/4$，$P(X=1)=1/2$，$P(X=2)=1/4$。
4. 四个样本点等概率，不代表三个变量值等概率。

## 解题步骤

先用一句话定义 $X$ 统计的对象与单位，再列支持集，再确定各值对应的原始事件。涉及实际家庭数据时，独立等概率仅是本题假设，不能自动当现实事实。

## 易错与边界

两个不同函数也可能产生相同分布；“随机变量相同”与“分布相同”不是同一句话。本章主要处理离散型和有密度的连续型，并非已穷尽所有可能分布。

## 回想任务

为什么 $X=1$ 在这个模型中是两个样本点组成的事件？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第1页至第14页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图09 · IMG20261015233209](/my-web/notes-media/asset-d4ce49193720f5d6.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233209](/my-web/notes-media/asset-d4ce49193720f5d6.webp)

## 关联与返回

[样本空间与事件](/my-web/notes/obsidian/52522b56538c6fc4/)、[离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/)、[分布函数及右连续性](/my-web/notes/obsidian/89bcb92b5fa2ff2b/)、[离散随机变量函数的分布](/my-web/notes/obsidian/aecbddcbdc38f474/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [红灯等待：有跳跃的混合分布](/my-web/notes/obsidian/937033040958dfa7/) · 综合
- [连续尺寸映射为离散利润](/my-web/notes/obsidian/d3cc4d4401e98773/) · 进阶

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-2review · 列样本空间与辨认取值类型](/my-web/notes/obsidian/1077b445258d9a76/#%E9%A2%98%E5%9E%8B01-%E5%88%97%E6%A0%B7%E6%9C%AC%E7%A9%BA%E9%97%B4%E4%B8%8E%E8%BE%A8%E8%AE%A4%E5%8F%96%E5%80%BC%E7%B1%BB%E5%9E%8B)
- [2-1review · 把基本结果映成计数变量](/my-web/notes/obsidian/398e913b88e52dfe/#%E9%A2%98%E5%9E%8B01-%E6%8A%8A%E5%9F%BA%E6%9C%AC%E7%BB%93%E6%9E%9C%E6%98%A0%E6%88%90%E8%AE%A1%E6%95%B0%E5%8F%98%E9%87%8F)
- [2-1review · 等车时间连续取值](/my-web/notes/obsidian/398e913b88e52dfe/#%E9%A2%98%E5%9E%8B03-%E7%AD%89%E8%BD%A6%E6%97%B6%E9%97%B4%E8%BF%9E%E7%BB%AD%E5%8F%96%E5%80%BC)
- [2-2离散型随机变量review · 单次抽检构造0—1分布](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B10-%E5%8D%95%E6%AC%A1%E6%8A%BD%E6%A3%80%E6%9E%84%E9%80%A001%E5%88%86%E5%B8%83)
