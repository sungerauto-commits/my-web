---
title: R18 超几何分布与不放回抽样
date: '2026-10-16T17:07:07.033731+00:00'
lastmod: '2026-10-16T17:07:07.033731+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/1908780ea766a34a/index.md
- notes/obsidian/434279b5a684ce01/index.md
- notes/obsidian/5742a76210edd3ab/index.md
- notes/obsidian/acd5040bd40d76c5/index.md
- notes/obsidian/b2eae495d224c2fb/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/cf5d3585e7466d15/index.md
- notes/obsidian/de722626a523925c/index.md
- notes/obsidian/e753433a0de5fba5/index.md
- notes/obsidian/f90f2e4ddd7a9d01/index.md
obsidian: true
note_course: 概率论
---

# 超几何分布与不放回抽样

> [!tip] 做题入口
> 总体有限且不放回，成功率随抽取历史改变。

## 详细讲解：从理解到列式

### 图解：模型选择

![模型选择](/my-web/notes-media/asset-1568cd435133f722.svg)

在套公式前检查试验次数、独立性、放回条件及所记录的变量。 图为本库补充示意，不替代原题中的几何与方向。

### 固定总数的不放回抽样用组合计数

N件中有M件目标品，均匀无放回抽 n 件，X为目标件数。全部样本共 $\binom Nn$ 个；恰 k 个目标，需要从M件选k、从非目标中选 $n-k$，因此

$$
P(X=k)=\frac{\binom Mk\binom{N-M}{n-k}}{\binom Nn}.
$$

k必须同时满足 $0\le k\le M$ 与 $0\le n-k\le N-M$，即 $\max(0,n-N+M)\le k\le\min(n,M)$。

### 为什么不是二项分布

抽走一件目标品后，总目标数与总件数都变了，下一次成功率依赖前面结果。虽然可以用有序路径乘法求某个顺序，最终仍需把所有合法顺序合并；组合公式一次处理了这种不放回约束。

检查极端：若抽尽全部 $n=N$，X必为M；若 $n=1$，成功概率为M/N。有限总体不能出现“抽出的目标件数大于总体目标数”；二项近似若给这种结果非零概率，只能当在抽样比例足够小时的近似而非精确模型。

### 学习顺序

先读：[古典概型与组合计数](/my-web/notes/obsidian/cf5d3585e7466d15/)、[离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/)。

用于练习：[ER01 选箱后不放回抽取：贝叶斯更新](/my-web/notes/obsidian/b2eae495d224c2fb/)、[ER06 两阶段抽检：条件概率与联合概率](/my-web/notes/obsidian/de722626a523925c/)。

[在学习地图中定位本节](/my-web/notes/?map=R18#notes-graph-heading)

## 前提与后续关系

**先确认：** [古典概型与组合计数](/my-web/notes/obsidian/cf5d3585e7466d15/)、[乘法公式与概率树](/my-web/notes/obsidian/e753433a0de5fba5/)、[离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/)

**继续用于：** 结合下方关联节点做题与复查。

## 模型与前提

总体 $N$ 件，其中 $M$ 件目标类，不放回随机抽 $n$ 件，$X$ 为目标类件数：

$$
P(X=k)=\frac{\binom Mk\binom{N-M}{n-k}}{\binom Nn},\quad\max(0,n-N+M)\le k\le\min(n,M).
$$

该节点是对课件不放回抽样题型的补充归纳，不把“超几何”名称冒充课件原有章节标题。

## 逐步推导

分母统计所有等可能 $n$ 件子集；分子先从 $M$ 件中挑 $k$ 件，再从其余 $N-M$ 件中挑 $n-k$ 件。支持集来自两个挑选动作都必须可行。归一性由按目标类个数分类计数得到。

## 补充例题

**题目：** 10件产品3件次品，不放回取4件，恰好1件次品。

1. $N=10,M=3,n=4,k=1$。
2. $P(X=1)=\binom31\binom73/\binom{10}4=105/210=1/2$。
3. 若直接写 $\binom41(0.3)(0.7)^3$，错误地假定了独立同概率。
4. 总体很大而抽样比例很小时，二项可以作近似；本题直接求精确值更合适。

## 易错与边界

支持集下限不一定是0，例如正品太少时必须抽到一定量次品。不要把“随机抽取”自动理解成“有放回独立”。

## 回想任务

从10件中有放回抽4次与不放回抽4件，哪一个能用固定 $p=0.3$ 的二项分布？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第38页至第41页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图05 · IMG20261015233139](/my-web/notes-media/asset-91c6014f94fbd720.webp)。
- [课堂笔记图09 · IMG20261015233209](/my-web/notes-media/asset-d4ce49193720f5d6.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233139](/my-web/notes-media/asset-91c6014f94fbd720.webp)

## 关联与返回

[古典概型与组合计数](/my-web/notes/obsidian/cf5d3585e7466d15/)、[乘法公式与概率树](/my-web/notes/obsidian/e753433a0de5fba5/)、[二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [选箱后不放回抽取：贝叶斯更新](/my-web/notes/obsidian/b2eae495d224c2fb/) · 进阶
- [两阶段抽检：条件概率与联合概率](/my-web/notes/obsidian/de722626a523925c/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-4review · 有放回与不放回摸球](/my-web/notes/obsidian/5742a76210edd3ab/#%E9%A2%98%E5%9E%8B01-%E6%9C%89%E6%94%BE%E5%9B%9E%E4%B8%8E%E4%B8%8D%E6%94%BE%E5%9B%9E%E6%91%B8%E7%90%83)
- [1-4review · 一般次品件数与超几何模型](/my-web/notes/obsidian/5742a76210edd3ab/#%E9%A2%98%E5%9E%8B03-%E4%B8%80%E8%88%AC%E6%AC%A1%E5%93%81%E4%BB%B6%E6%95%B0%E4%B8%8E%E8%B6%85%E5%87%A0%E4%BD%95%E6%A8%A1%E5%9E%8B)
- [1-5review · 抽样方式与条件乘法](/my-web/notes/obsidian/acd5040bd40d76c5/#%E9%A2%98%E5%9E%8B02-%E6%8A%BD%E6%A0%B7%E6%96%B9%E5%BC%8F%E4%B8%8E%E6%9D%A1%E4%BB%B6%E4%B9%98%E6%B3%95)
- [1-6review · 不放回抽样叠加漏检误检](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B05-%E4%B8%8D%E6%94%BE%E5%9B%9E%E6%8A%BD%E6%A0%B7%E5%8F%A0%E5%8A%A0%E6%BC%8F%E6%A3%80%E8%AF%AF%E6%A3%80)
- [1-6review · 选箱且不放回、已知第一次一等品](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B08-%E9%80%89%E7%AE%B1%E4%B8%94%E4%B8%8D%E6%94%BE%E5%9B%9E%E5%B7%B2%E7%9F%A5%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%80%E7%AD%89%E5%93%81)
