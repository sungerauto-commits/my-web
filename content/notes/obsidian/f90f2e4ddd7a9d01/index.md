---
title: R15 离散分布律与归一化
date: '2026-10-16T17:07:07.023217+00:00'
lastmod: '2026-10-16T17:07:07.023217+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/14237494eef12363/index.md
- notes/obsidian/1908780ea766a34a/index.md
- notes/obsidian/221d8beefa5c1b9f/index.md
- notes/obsidian/31e82cf4de0ca98b/index.md
- notes/obsidian/398e913b88e52dfe/index.md
- notes/obsidian/51b2f723cc621afb/index.md
- notes/obsidian/5742a76210edd3ab/index.md
- notes/obsidian/749b0e191a8c3ec0/index.md
- notes/obsidian/89bcb92b5fa2ff2b/index.md
- notes/obsidian/911d7fab9131419c/index.md
- notes/obsidian/9fa6b6113ecaf1aa/index.md
- notes/obsidian/aecbddcbdc38f474/index.md
- notes/obsidian/b6cadfdd889e25b0/index.md
- notes/obsidian/b7c7668670cc1cc4/index.md
- notes/obsidian/b8e8f4ae985ae6d4/index.md
- notes/obsidian/c166658f0594b5a0/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/d3cc4d4401e98773/index.md
obsidian: true
note_course: 概率论
---

# 离散分布律与归一化

> [!tip] 做题入口
> 先列所有可能值，再确保概率非负且总和为1。

## 详细讲解：从理解到列式

### 图解：离散CDF

![离散CDF](/my-web/notes-media/asset-f33eea1d4dfc7277.svg)

点质量、跳跃高度和端点取值逐个对应。 图为本库补充示意，不替代原题中的几何与方向。

### 分布律要包含取值和对应概率两部分

离散变量的所有可能取值至多可数。设为 $x_k$，分布律是 $P(X=x_k)=p_k$，其中 $p_k\ge0$，$\sum p_k=1$。只给一列概率、不说明对应哪个值，或列出若干值却漏掉剩余概率，都不是完整分布。

### 未知参数怎样求

若概率形如 $p_k=c a_k$，先归一化得 $c=1/\sum a_k$，再逐项核验非负。归一化是必要条件，不能替代对事件模型的推导。例如所有项相加为1，也可能把对应取值对错。

任意事件概率由相关质量求和：$P(a<X\le b)=\sum_{a<x_k\le b}p_k$。注意离散变量在端点可有正概率，$P(X<a)$ 与 $P(X\le a)$ 可能不同。画图用每个取值上的概率柱或点质量；柱高本身是概率，不要当成连续密度再乘柱宽。

### 学习顺序

先读：[随机变量是样本空间上的函数](/my-web/notes/obsidian/749b0e191a8c3ec0/)。

再用到：[0—1分布与指示变量](/my-web/notes/obsidian/31e82cf4de0ca98b/)、[超几何分布与不放回抽样](/my-web/notes/obsidian/c166658f0594b5a0/)、[几何分布与首次成功](/my-web/notes/obsidian/b6cadfdd889e25b0/)、[泊松分布与计数参数](/my-web/notes/obsidian/9fa6b6113ecaf1aa/)、[离散随机变量函数的分布](/my-web/notes/obsidian/aecbddcbdc38f474/)。

[在学习地图中定位本节](/my-web/notes/?map=R15#notes-graph-heading)

## 前提与后续关系

**先确认：** [概率公理与基本性质](/my-web/notes/obsidian/b7c7668670cc1cc4/)、[随机变量是样本空间上的函数](/my-web/notes/obsidian/749b0e191a8c3ec0/)

**继续用于：** [0—1分布与指示变量](/my-web/notes/obsidian/31e82cf4de0ca98b/)、[二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/)、[超几何分布与不放回抽样](/my-web/notes/obsidian/c166658f0594b5a0/)、[几何分布与首次成功](/my-web/notes/obsidian/b6cadfdd889e25b0/)、[泊松分布与计数参数](/my-web/notes/obsidian/9fa6b6113ecaf1aa/)、[离散随机变量函数的分布](/my-web/notes/obsidian/aecbddcbdc38f474/)

## 定义与前提

若 $X$ 只取有限或可数个值 $x_k$，分布律为 $p_k=P(X=x_k)$，满足 $p_k\ge0$、$\sum_kp_k=1$。任意事件 $X\in B$ 的概率为 $\sum_{x_k\in B}p_k$。

## 逐步推导

各事件 $\{X=x_k\}$ 两两互斥，且并为所有可能结果，由可列可加立即得到归一性。若用未知常数表示概率，非负条件和归一条件必须一起检查。

## 补充例题｜由级数确定参数

**题目：** $P(X=k)=c\,2^{-k}$，$k=1,2,\ldots$。

1. 非负要求 $c\ge0$。
2. $\sum_{k=1}^\infty2^{-k}=1$，所以 $c=1$。
3. $P(X\ge3)=\sum_{k=3}^\infty2^{-k}=1/4$。
4. 也可算补集 $1-P(X=1)-P(X=2)=1-1/2-1/4=1/4$。

## 解题步骤

列支持集→用总和为1解常数→检查每项非负→按题目指定值域求和→必要时取补事件。

## 易错与边界

支持集从0还是1开始会改变归一化和分布参数意义。概率质量函数不能大于1，连续密度则没有这个上界限制。

## 回想任务

若上题支持集改成 $k=0,1,\ldots$，归一常数会变成多少？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第1页至第6页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图09 · IMG20261015233209](/my-web/notes-media/asset-d4ce49193720f5d6.webp)。
- [课堂笔记图10 · IMG20261015233220](/my-web/notes-media/asset-360193899957a556.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233209](/my-web/notes-media/asset-d4ce49193720f5d6.webp)

## 关联与返回

[概率公理与基本性质](/my-web/notes/obsidian/b7c7668670cc1cc4/)、[随机变量是样本空间上的函数](/my-web/notes/obsidian/749b0e191a8c3ec0/)、[0—1分布与指示变量](/my-web/notes/obsidian/31e82cf4de0ca98b/)、[二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/)、[泊松分布与计数参数](/my-web/notes/obsidian/9fa6b6113ecaf1aa/)、[分布函数及右连续性](/my-web/notes/obsidian/89bcb92b5fa2ff2b/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [黑球返还再添球：停止时间不是几何分布](/my-web/notes/obsidian/911d7fab9131419c/) · 综合
- [连续尺寸映射为离散利润](/my-web/notes/obsidian/d3cc4d4401e98773/) · 进阶

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-4review · 样本最大值或最小值指定](/my-web/notes/obsidian/5742a76210edd3ab/#%E9%A2%98%E5%9E%8B06-%E6%A0%B7%E6%9C%AC%E6%9C%80%E5%A4%A7%E5%80%BC%E6%88%96%E6%9C%80%E5%B0%8F%E5%80%BC%E6%8C%87%E5%AE%9A)
- [2-1review · 把基本结果映成计数变量](/my-web/notes/obsidian/398e913b88e52dfe/#%E9%A2%98%E5%9E%8B01-%E6%8A%8A%E5%9F%BA%E6%9C%AC%E7%BB%93%E6%9E%9C%E6%98%A0%E6%88%90%E8%AE%A1%E6%95%B0%E5%8F%98%E9%87%8F)
- [2-2离散型随机变量review · 分布律合法性与归一化参数](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B01-%E5%88%86%E5%B8%83%E5%BE%8B%E5%90%88%E6%B3%95%E6%80%A7%E4%B8%8E%E5%BD%92%E4%B8%80%E5%8C%96%E5%8F%82%E6%95%B0)
- [2-2离散型随机变量review · 无放回样本最大号码分布](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B02-%E6%97%A0%E6%94%BE%E5%9B%9E%E6%A0%B7%E6%9C%AC%E6%9C%80%E5%A4%A7%E5%8F%B7%E7%A0%81%E5%88%86%E5%B8%83)
- [2-3随机变量的分布函数review · 由0—1及三次投币分布律求阶梯CDF](/my-web/notes/obsidian/221d8beefa5c1b9f/#%E9%A2%98%E5%9E%8B01-%E7%94%B101%E5%8F%8A%E4%B8%89%E6%AC%A1%E6%8A%95%E5%B8%81%E5%88%86%E5%B8%83%E5%BE%8B%E6%B1%82%E9%98%B6%E6%A2%AFcdf)
- [2-3随机变量的分布函数review · 跳跃CDF反求离散质量](/my-web/notes/obsidian/221d8beefa5c1b9f/#%E9%A2%98%E5%9E%8B04-%E8%B7%B3%E8%B7%83cdf%E5%8F%8D%E6%B1%82%E7%A6%BB%E6%95%A3%E8%B4%A8%E9%87%8F)
- [2-4review、 · 离散条件概率与CDF跳跃复习](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B11-%E7%A6%BB%E6%95%A3%E6%9D%A1%E4%BB%B6%E6%A6%82%E7%8E%87%E4%B8%8Ecdf%E8%B7%B3%E8%B7%83%E5%A4%8D%E4%B9%A0)
- [2-5随机变量的函数的分布review · 无限离散分布的奇偶、倍数和尾事件](/my-web/notes/obsidian/b8e8f4ae985ae6d4/#%E9%A2%98%E5%9E%8B06-%E6%97%A0%E9%99%90%E7%A6%BB%E6%95%A3%E5%88%86%E5%B8%83%E7%9A%84%E5%A5%87%E5%81%B6%E5%80%8D%E6%95%B0%E5%92%8C%E5%B0%BE%E4%BA%8B%E4%BB%B6)
