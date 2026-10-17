---
title: R19 几何分布与首次成功
date: '2026-10-16T17:07:07.039247+00:00'
lastmod: '2026-10-16T17:07:07.039247+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/14237494eef12363/index.md
- notes/obsidian/1908780ea766a34a/index.md
- notes/obsidian/398e913b88e52dfe/index.md
- notes/obsidian/6f86eb85a87811f3/index.md
- notes/obsidian/911d7fab9131419c/index.md
- notes/obsidian/a45bf361a307c0fc/index.md
- notes/obsidian/acd5040bd40d76c5/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/e753433a0de5fba5/index.md
- notes/obsidian/f90f2e4ddd7a9d01/index.md
obsidian: true
note_course: 概率论
---

# 几何分布与首次成功

> [!tip] 做题入口
> 固定的是停止规则，试验次数本身是随机的。

## 详细讲解：从理解到列式

### 图解：模型选择

![模型选择](/my-web/notes-media/asset-1568cd435133f722.svg)

在套公式前检查试验次数、独立性、放回条件及所记录的变量。 图为本库补充示意，不替代原题中的几何与方向。

### 首次成功次数是一条“前面全失败”的路径

独立重复试验每次成功概率p，N记录第一次成功所在次数。$\{N=n\}$ 等于前 $n-1$ 次失败且第n次成功，所以

$$
P(N=n)=(1-p)^{n-1}p,\quad n=1,2,\ldots.
$$

这一定义从1开始。另一些资料记录成功前失败次数 K，取值从0开始，$P(K=k)=(1-p)^kp$；二者差1，参数和均值公式要随定义一致。

### 不要只看到“直到成功”为止就套几何

还必须每次成功率相同且独立。ER08 抽黑球后添黑球，成功概率随历史改变，所以停止时间不是几何分布，需逐次条件相乘。

几何分布尾概率 $P(N>n)=(1-p)^n$，并有 $P(N>m+n\mid N>m)=(1-p)^n$。已失败多少次不改变未来再等的分布，是由独立重复假设推出的离散无记忆性；不是所有停止问题天然具有的性质。

### 学习顺序

先读：[独立重复试验与至少一次](/my-web/notes/obsidian/6f86eb85a87811f3/)、[离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/)。

用于练习：[ER08 黑球返还再添球：停止时间不是几何分布](/my-web/notes/obsidian/911d7fab9131419c/)。

[在学习地图中定位本节](/my-web/notes/?map=R19#notes-graph-heading)

## 前提与后续关系

**先确认：** [乘法公式与概率树](/my-web/notes/obsidian/e753433a0de5fba5/)、[独立重复试验与至少一次](/my-web/notes/obsidian/6f86eb85a87811f3/)、[离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/)

**继续用于：** 结合下方关联节点做题与复查。

## 模型与前提

独立同概率伯努利试验，每次成功率 $p\in(0,1]$，$X$ 表示直到首次成功的总试验次数，支持集 $1,2,\ldots$。

## 逐步推导

$X=k$ 等价于前 $k-1$ 次失败、第 $k$ 次成功，所以

$$
P(X=k)=(1-p)^{k-1}p.
$$

归一性由等比级数 $\sum_{k=1}^\infty p(1-p)^{k-1}=1$。尾概率 $P(X>m)=(1-p)^m$，即前 $m$ 次全失败。

## 补充例题与步骤

**题目：** 每次独立命中率0.2，求第4次首次命中的概率。

1. 识别“此前都没中，第四次才中”。
2. $P(X=4)=0.8^3\times0.2=0.1024$。
3. 若已连续失败3次，未来再等2次以上的概率 $P(X>5\mid X>3)=0.8^5/0.8^3=0.8^2$。
4. 这与重新开始要等2次以上相同，是几何分布的离散无记忆性。

## 易错与边界

有些教材用“首次成功前的失败次数” $Y=X-1$，支持集从0开始，公式指数也随之变化。若 $p=0$，首次成功不会出现，不能把上述有限值分布当作总和为1的分布。

## 回想任务

“10次中成功次数”与“第一次成功发生在第几次”分别用什么模型？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第36页至第37页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图12 · IMG20261015233235](/my-web/notes-media/asset-24eaaaf9eafd8f22.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233235](/my-web/notes-media/asset-24eaaaf9eafd8f22.webp)

## 关联与返回

[独立重复试验与至少一次](/my-web/notes/obsidian/6f86eb85a87811f3/)、[离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/)、[二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/)、[指数无记忆性的推导](/my-web/notes/obsidian/a45bf361a307c0fc/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [黑球返还再添球：停止时间不是几何分布](/my-web/notes/obsidian/911d7fab9131419c/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-5review · 添球与逐次损坏的历史依赖](/my-web/notes/obsidian/acd5040bd40d76c5/#%E9%A2%98%E5%9E%8B04-%E6%B7%BB%E7%90%83%E4%B8%8E%E9%80%90%E6%AC%A1%E6%8D%9F%E5%9D%8F%E7%9A%84%E5%8E%86%E5%8F%B2%E4%BE%9D%E8%B5%96)
- [2-1review · 固定射击次数与首次命中次数](/my-web/notes/obsidian/398e913b88e52dfe/#%E9%A2%98%E5%9E%8B02-%E5%9B%BA%E5%AE%9A%E5%B0%84%E5%87%BB%E6%AC%A1%E6%95%B0%E4%B8%8E%E9%A6%96%E6%AC%A1%E5%91%BD%E4%B8%AD%E6%AC%A1%E6%95%B0)
- [2-2离散型随机变量review · 首次正品：三种放回机制](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B09-%E9%A6%96%E6%AC%A1%E6%AD%A3%E5%93%81%E4%B8%89%E7%A7%8D%E6%94%BE%E5%9B%9E%E6%9C%BA%E5%88%B6)
