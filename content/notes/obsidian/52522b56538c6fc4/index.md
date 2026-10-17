---
title: R01 样本空间与事件
date: '2026-10-16T17:07:06.992671+00:00'
lastmod: '2026-10-16T17:07:06.992671+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/1077b445258d9a76/index.md
- notes/obsidian/4ce10c1d3948db07/index.md
- notes/obsidian/6aadc038130fe19b/index.md
- notes/obsidian/749b0e191a8c3ec0/index.md
- notes/obsidian/7c675aafd972565a/index.md
- notes/obsidian/a4baa267f6b84d83/index.md
- notes/obsidian/acd5040bd40d76c5/index.md
- notes/obsidian/b7c7668670cc1cc4/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/cf5d3585e7466d15/index.md
- notes/obsidian/f3732cf365957480/index.md
obsidian: true
note_course: 概率论
---

# 样本空间与事件

> [!tip] 做题入口
> 先说清一次试验记录什么，再谈概率。

## 详细讲解：从理解到列式

### 图解：事件集合

![事件集合](/my-web/notes-media/asset-7fe7d7ba512fdb4b.svg)

看重叠理解计数；能否独立还要检验概率关系。 图为本库补充示意，不替代原题中的几何与方向。

### 先规定一次试验到底记录什么

样本空间 $\Omega$ 是所有基本结果的集合，事件是其中的子集。基本结果必须细到能决定题目所问事件是否发生。例如掷两枚骰子，若记录有序点数 $(i,j)$，有36个等可能结果；若只记录点数和，只有11种数值，但它们不等可能。改变记录方式可以，但不能保留原来的等可能假设不变。

### 事件怎样变成集合

“至少一枚为6”对应 $(i=6)\lor(j=6)$；“恰有一枚为6”还要排除 $(6,6)$。事件不是一句模糊印象，要能逐个结果判定它是否属于这个集合。样本空间可数时可列举，不可数时也可用区间或区域表示。

### 建模检查

问自己：结果有没有漏？基本结果会不会重复？抽样机制是否使它们等可能？随机选一箱再抽产品，与把两箱混合后抽一件，样本机制不同，分母也不同。先写清楚试验流程，往往比立刻找一个概率公式更重要。

### 学习顺序

先读：本节可作为起点。

再用到：[事件运算与德摩根律](/my-web/notes/obsidian/f3732cf365957480/)、[概率公理与基本性质](/my-web/notes/obsidian/b7c7668670cc1cc4/)、[古典概型与组合计数](/my-web/notes/obsidian/cf5d3585e7466d15/)、[随机变量是样本空间上的函数](/my-web/notes/obsidian/749b0e191a8c3ec0/)。

[在学习地图中定位本节](/my-web/notes/?map=R01#notes-graph-heading)

## 前提与后续关系

**先确认：** 从随机试验、样本点的定义开始。

**继续用于：** [事件运算与德摩根律](/my-web/notes/obsidian/f3732cf365957480/)、[概率公理与基本性质](/my-web/notes/obsidian/b7c7668670cc1cc4/)、[古典概型与组合计数](/my-web/notes/obsidian/cf5d3585e7466d15/)、[几何概型](/my-web/notes/obsidian/a4baa267f6b84d83/)、[随机变量是样本空间上的函数](/my-web/notes/obsidian/749b0e191a8c3ec0/)、[频率与概率的区别](/my-web/notes/obsidian/6aadc038130fe19b/)

## 定义与逻辑位置

随机试验可能结果的全体是样本空间 $\Omega$；单个结果是样本点 $\omega$；事件 $A$ 是可判定是否发生的结果集合。$\Omega$ 是必然事件，$\varnothing$ 是不可能事件。事件发生表示实际结果 $\omega\in A$。

## 从定义到表达

试验不是“掷骰子”这几个字，而是“掷一次记录点数”或“掷两次记录有序点数对”。记录方式不同，样本空间不同。概率相加前必须保证各结果在同一个模型中。

## 解题步骤与补充例题

**题目：** 掷两枚可区分的公平骰子，设 $A$ 为点数和等于7。

1. $\Omega=\{(i,j):i,j\in\{1,\ldots,6\}\}$，共有36个等可能结果。
2. $A=\{(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)\}$。
3. $P(A)=6/36=1/6$。
4. 若只把“和为2到12”当成11个等可能结果，就错了：和为2只有一种，和为7有六种。

## 易错、反例与边界

连续模型中，某个单点可能发生，但其概率可以为零；不能把零概率事件与空集画等号。事件的可列并、交等运算应仍是模型中的合法事件。

## 回想任务

掷两枚骰子，“至少一枚为6”和“恰好一枚为6”分别对应哪些样本点？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第2页至第10页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图01 · IMG20261015233055](/my-web/notes-media/asset-5e199ed86682cdb2.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233055](/my-web/notes-media/asset-5e199ed86682cdb2.webp)

## 关联与返回

[事件运算与德摩根律](/my-web/notes/obsidian/f3732cf365957480/)、[概率公理与基本性质](/my-web/notes/obsidian/b7c7668670cc1cc4/)、[古典概型与组合计数](/my-web/notes/obsidian/cf5d3585e7466d15/)、[随机变量是样本空间上的函数](/my-web/notes/obsidian/749b0e191a8c3ec0/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [零一排列无相邻：等可能与插空法](/my-web/notes/obsidian/4ce10c1d3948db07/) · 进阶

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-1review · 确定性现象与随机现象的辨析](/my-web/notes/obsidian/7c675aafd972565a/#%E9%A2%98%E5%9E%8B01-%E7%A1%AE%E5%AE%9A%E6%80%A7%E7%8E%B0%E8%B1%A1%E4%B8%8E%E9%9A%8F%E6%9C%BA%E7%8E%B0%E8%B1%A1%E7%9A%84%E8%BE%A8%E6%9E%90)
- [1-2review · 列样本空间与辨认取值类型](/my-web/notes/obsidian/1077b445258d9a76/#%E9%A2%98%E5%9E%8B01-%E5%88%97%E6%A0%B7%E6%9C%AC%E7%A9%BA%E9%97%B4%E4%B8%8E%E8%BE%A8%E8%AE%A4%E5%8F%96%E5%80%BC%E7%B1%BB%E5%9E%8B)
- [1-5review · 缩小样本空间计算条件概率](/my-web/notes/obsidian/acd5040bd40d76c5/#%E9%A2%98%E5%9E%8B08-%E7%BC%A9%E5%B0%8F%E6%A0%B7%E6%9C%AC%E7%A9%BA%E9%97%B4%E8%AE%A1%E7%AE%97%E6%9D%A1%E4%BB%B6%E6%A6%82%E7%8E%87)
