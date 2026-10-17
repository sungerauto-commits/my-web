---
title: R05 古典概型与组合计数
date: '2026-10-16T17:07:06.999165+00:00'
lastmod: '2026-10-16T17:07:06.999165+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/14237494eef12363/index.md
- notes/obsidian/1908780ea766a34a/index.md
- notes/obsidian/434279b5a684ce01/index.md
- notes/obsidian/4ce10c1d3948db07/index.md
- notes/obsidian/52522b56538c6fc4/index.md
- notes/obsidian/5742a76210edd3ab/index.md
- notes/obsidian/b7c7668670cc1cc4/index.md
- notes/obsidian/c166658f0594b5a0/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/f90f2e4ddd7a9d01/index.md
obsidian: true
note_course: 概率论
---

# 古典概型与组合计数

> [!tip] 做题入口
> 有限等可能才是“有利结果数除以总数”。

## 详细讲解：从理解到列式

### 图解：排列插空

![排列插空](/my-web/notes-media/asset-fc14216cb4fe7c7f.svg)

端点空隙同样可放1，漏掉两端会少算。 图为本库补充示意，不替代原题中的几何与方向。

### 古典概率的分母必须等可能

若有限基本结果有 n 个且等可能，事件 A 包含 m 个，则 $P(A)=m/n$。先确认抽取是否有顺序、是否放回、同类物件是否临时编号，再选计数方式。只要分子分母采用一致的样本空间，使用有序或无序通常都能得到同一概率。

### 组合系数从排列消重得到

从 n 个不同物体有序取 k 个，数目 $n(n-1)\cdots(n-k+1)=n!/(n-k)!$。若顺序不重要，每个 k 元集合被数了 $k!$ 次，除掉得 $\binom nk=n!/[k!(n-k)!]$。不能在分子用组合、分母却用排列，除非明确补上相应顺序因子。

### 限制排列的第一步

相邻可用捆绑法，不相邻常用插空法；分类计数应互斥且穷尽，分步计数则每一步的选择数可能依赖前一步。原题 ER07 的零一排列先选全部1的位置作分母，再把不相邻要求变成不同空隙的选择，展示了“一一对应”如何保证没有漏算或重复。

### 学习顺序

先读：[样本空间与事件](/my-web/notes/obsidian/52522b56538c6fc4/)、[概率公理与基本性质](/my-web/notes/obsidian/b7c7668670cc1cc4/)。

再用到：[二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/)、[超几何分布与不放回抽样](/my-web/notes/obsidian/c166658f0594b5a0/)。

[在学习地图中定位本节](/my-web/notes/?map=R05#notes-graph-heading)

## 前提与后续关系

**先确认：** [样本空间与事件](/my-web/notes/obsidian/52522b56538c6fc4/)、[概率公理与基本性质](/my-web/notes/obsidian/b7c7668670cc1cc4/)

**继续用于：** [二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/)、[超几何分布与不放回抽样](/my-web/notes/obsidian/c166658f0594b5a0/)

## 定义与前提

古典概型要求样本空间有限，且基本结果等可能。$P(A)=|A|/|\Omega|$。有序抽取与无序抽取都可建模，但分子分母必须同一计数口径。

## 推导｜为什么有组合数

不放回从 $N$ 个不同物体中有序取 $n$ 个，序列数 $N(N-1)\cdots(N-n+1)$。每个无序子集对应 $n!$ 个排列，故

$$
\binom Nn=\frac{N!}{n!(N-n)!}.
$$

若每个有序样本等可能，则每个无序子集也等可能，因为对应序列数相同。

## 补充例题｜最大号码的分布（课件同题）

**题目：** 编号1到5的球中随机不放回取3个，$X$ 为最大号码。对应离散变量课件第6页。

1. 总子集 $\binom53=10$，可能最大值 $k=3,4,5$。
2. $X=k$ 要求选中 $k$，另外两个从 $1,\ldots,k-1$ 中取，计数 $\binom{k-1}{2}$。
3. $P(X=k)=\binom{k-1}{2}/\binom53$，依次为 $1/10,3/10,6/10$。
4. 相加为1。此题最大值3、4、5并不等可能。

## 易错与边界

抽取后的数值等可能与原始样本等可能是两件事。放回/不放回、是否记录顺序，都会改变样本空间。

## 回想任务

如果改成有放回取3次，最大值为 $k$ 应怎样通过 $P(X\le k)$ 求？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第6页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图05 · IMG20261015233139](/my-web/notes-media/asset-91c6014f94fbd720.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233139](/my-web/notes-media/asset-91c6014f94fbd720.webp)

> [!example]- 展开查看原题所在课件页
> 2-2离散型随机变量review

## 关联与返回

[样本空间与事件](/my-web/notes/obsidian/52522b56538c6fc4/)、[离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/)、[二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/)、[超几何分布与不放回抽样](/my-web/notes/obsidian/c166658f0594b5a0/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [零一排列无相邻：等可能与插空法](/my-web/notes/obsidian/4ce10c1d3948db07/) · 进阶

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-4review · 有放回与不放回摸球](/my-web/notes/obsidian/5742a76210edd3ab/#%E9%A2%98%E5%9E%8B01-%E6%9C%89%E6%94%BE%E5%9B%9E%E4%B8%8E%E4%B8%8D%E6%94%BE%E5%9B%9E%E6%91%B8%E7%90%83)
- [1-4review · 投球入杯、分房和至多一球](/my-web/notes/obsidian/5742a76210edd3ab/#%E9%A2%98%E5%9E%8B02-%E6%8A%95%E7%90%83%E5%85%A5%E6%9D%AF%E5%88%86%E6%88%BF%E5%92%8C%E8%87%B3%E5%A4%9A%E4%B8%80%E7%90%83)
- [1-4review · 整除限制与容斥](/my-web/notes/obsidian/5742a76210edd3ab/#%E9%A2%98%E5%9E%8B04-%E6%95%B4%E9%99%A4%E9%99%90%E5%88%B6%E4%B8%8E%E5%AE%B9%E6%96%A5)
- [1-4review · 投币恰好一次与至少一次](/my-web/notes/obsidian/5742a76210edd3ab/#%E9%A2%98%E5%9E%8B05-%E6%8A%95%E5%B8%81%E6%81%B0%E5%A5%BD%E4%B8%80%E6%AC%A1%E4%B8%8E%E8%87%B3%E5%B0%91%E4%B8%80%E6%AC%A1)
- [1-4review · 样本最大值或最小值指定](/my-web/notes/obsidian/5742a76210edd3ab/#%E9%A2%98%E5%9E%8B06-%E6%A0%B7%E6%9C%AC%E6%9C%80%E5%A4%A7%E5%80%BC%E6%88%96%E6%9C%80%E5%B0%8F%E5%80%BC%E6%8C%87%E5%AE%9A)
- [1-4review · 生日问题与两天接待的小概率判断](/my-web/notes/obsidian/5742a76210edd3ab/#%E9%A2%98%E5%9E%8B07-%E7%94%9F%E6%97%A5%E9%97%AE%E9%A2%98%E4%B8%8E%E4%B8%A4%E5%A4%A9%E6%8E%A5%E5%BE%85%E7%9A%84%E5%B0%8F%E6%A6%82%E7%8E%87%E5%88%A4%E6%96%AD)
- [1-4review · 抽鞋至少有一对](/my-web/notes/obsidian/5742a76210edd3ab/#%E9%A2%98%E5%9E%8B10-%E6%8A%BD%E9%9E%8B%E8%87%B3%E5%B0%91%E6%9C%89%E4%B8%80%E5%AF%B9)
- [1-4review · 指定数字出现次数与骰子点数和](/my-web/notes/obsidian/5742a76210edd3ab/#%E9%A2%98%E5%9E%8B11-%E6%8C%87%E5%AE%9A%E6%95%B0%E5%AD%97%E5%87%BA%E7%8E%B0%E6%AC%A1%E6%95%B0%E4%B8%8E%E9%AA%B0%E5%AD%90%E7%82%B9%E6%95%B0%E5%92%8C)
- [1-6review · 两次试验各出现不同指定和](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B04-%E4%B8%A4%E6%AC%A1%E8%AF%95%E9%AA%8C%E5%90%84%E5%87%BA%E7%8E%B0%E4%B8%8D%E5%90%8C%E6%8C%87%E5%AE%9A%E5%92%8C)
- [2-2离散型随机变量review · 无放回样本最大号码分布](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B02-%E6%97%A0%E6%94%BE%E5%9B%9E%E6%A0%B7%E6%9C%AC%E6%9C%80%E5%A4%A7%E5%8F%B7%E7%A0%81%E5%88%86%E5%B8%83)
