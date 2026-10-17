---
title: R03 概率公理与基本性质
date: '2026-10-16T17:07:06.996182+00:00'
lastmod: '2026-10-16T17:07:06.996182+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/221d8beefa5c1b9f/index.md
- notes/obsidian/2587cd6473932f70/index.md
- notes/obsidian/52522b56538c6fc4/index.md
- notes/obsidian/6aadc038130fe19b/index.md
- notes/obsidian/749b0e191a8c3ec0/index.md
- notes/obsidian/87e6d6e74caa8b2b/index.md
- notes/obsidian/89bcb92b5fa2ff2b/index.md
- notes/obsidian/a4baa267f6b84d83/index.md
- notes/obsidian/a5655733731507cc/index.md
- notes/obsidian/a621a6267a419841/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/cf5d3585e7466d15/index.md
- notes/obsidian/f3732cf365957480/index.md
- notes/obsidian/f90f2e4ddd7a9d01/index.md
obsidian: true
note_course: 概率论
---

# 概率公理与基本性质

> [!tip] 做题入口
> 后面的公式都应回到非负、归一、可列可加三条。

## 详细讲解：从理解到列式

### 图解：事件集合

![事件集合](/my-web/notes-media/asset-7fe7d7ba512fdb4b.svg)

看重叠理解计数；能否独立还要检验概率关系。 图为本库补充示意，不替代原题中的几何与方向。

### 三条公理约束的是概率这个集合函数

概率非负，$P(\Omega)=1$，可数个两两互斥事件的并概率等于各自概率之和。由 $\Omega=A\cup\overline A$ 且二者互斥，推出 $P(\overline A)=1-P(A)$，不是另加一个独立假设。

若 $A\subseteq B$，则 $B=A\cup(B\setminus A)$ 且互斥，所以 $P(B)=P(A)+P(B\setminus A)\ge P(A)$。又由事件均包含于 $\Omega$，得到 $0\le P(A)\le1$。这些基本性质适合检查最后的数值，但不能单凭一个数落在0到1之间就证明计算正确。

### 零概率不等于逻辑不可能

连续均匀选择 $[0,1]$ 内一点时，任意指定单点的概率为零，但该点仍在样本空间内。反过来概率为1的事件也可能存在概率为零的例外。不要把有限等可能模型中的直观，未经判断地推广到连续空间。

### 学习顺序

先读：[样本空间与事件](/my-web/notes/obsidian/52522b56538c6fc4/)。

再用到：[加法公式与容斥](/my-web/notes/obsidian/a621a6267a419841/)、[古典概型与组合计数](/my-web/notes/obsidian/cf5d3585e7466d15/)、[几何概型](/my-web/notes/obsidian/a4baa267f6b84d83/)、[条件概率](/my-web/notes/obsidian/a5655733731507cc/)、[频率与概率的区别](/my-web/notes/obsidian/6aadc038130fe19b/)。

[在学习地图中定位本节](/my-web/notes/?map=R03#notes-graph-heading)

## 前提与后续关系

**先确认：** [样本空间与事件](/my-web/notes/obsidian/52522b56538c6fc4/)、[事件运算与德摩根律](/my-web/notes/obsidian/f3732cf365957480/)

**继续用于：** [加法公式与容斥](/my-web/notes/obsidian/a621a6267a419841/)、[古典概型与组合计数](/my-web/notes/obsidian/cf5d3585e7466d15/)、[几何概型](/my-web/notes/obsidian/a4baa267f6b84d83/)、[条件概率](/my-web/notes/obsidian/a5655733731507cc/)、[全概率公式](/my-web/notes/obsidian/2587cd6473932f70/)、[随机变量是样本空间上的函数](/my-web/notes/obsidian/749b0e191a8c3ec0/)、[离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/)、[分布函数及右连续性](/my-web/notes/obsidian/89bcb92b5fa2ff2b/)

## 定义与前提

概率满足：$P(A)\ge0$；$P(\Omega)=1$；若 $A_1,A_2,\ldots$ 两两互斥，则 $P(\bigcup_i A_i)=\sum_iP(A_i)$。可列可加只对互斥事件直接成立。

## 逐步推导

1. $\Omega=\Omega\cup\varnothing\cup\varnothing\cdots$，由可列可加与有限总概率，得 $P(\varnothing)=0$。
2. $\Omega=A\cup A^c$，两项互斥，故 $P(A^c)=1-P(A)$。
3. 若 $A\subseteq B$，$B=A\cup(B\setminus A)$ 为互斥分解，故 $P(B)-P(A)=P(B\setminus A)\ge0$，得到单调性。
4. 取 $B=\Omega$ 得 $0\le P(A)\le1$。
5. 若 $A_n\uparrow A$，把 $A$ 拆为 $A_1,A_2\setminus A_1,\ldots$ 的互斥并，得 $P(A_n)\to P(A)$；对补集可得 $A_n\downarrow A$ 时也有此连续性。

## 补充例题｜包含关系

**题目：** $A\subseteq B$，$P(A)=0.3,P(B)=0.7$，求 $P(B\setminus A)$。

1. 由互斥分解，$P(B)=P(A)+P(B\setminus A)$。
2. 结果0.4。若给定数据反成 $P(A)=0.7,P(B)=0.3$，则与单调性矛盾，模型数据不成立。

## 易错与边界

$P(A)=0$ 不能反推出 $A=\varnothing$。$P(A)=1$ 也不必表示集合上等于整个样本空间。概率连续性是分布函数右连续证明的前提。

## 回想任务

不用记忆公式，怎样从 $\Omega=A\cup A^c$ 推出补事件概率？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第8页至第15页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图03 · IMG20261015233111](/my-web/notes-media/asset-20d2b31209b05822.webp)。
- [课堂笔记图04 · IMG20261015233122](/my-web/notes-media/asset-c30416d27b4505ca.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233111](/my-web/notes-media/asset-20d2b31209b05822.webp)

## 关联与返回

[样本空间与事件](/my-web/notes/obsidian/52522b56538c6fc4/)、[事件运算与德摩根律](/my-web/notes/obsidian/f3732cf365957480/)、[加法公式与容斥](/my-web/notes/obsidian/a621a6267a419841/)、[分布函数及右连续性](/my-web/notes/obsidian/89bcb92b5fa2ff2b/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-3review · 频率、概率及大样本解释](/my-web/notes/obsidian/87e6d6e74caa8b2b/#%E9%A2%98%E5%9E%8B01-%E9%A2%91%E7%8E%87%E6%A6%82%E7%8E%87%E5%8F%8A%E5%A4%A7%E6%A0%B7%E6%9C%AC%E8%A7%A3%E9%87%8A)
- [1-3review · 互斥、包含和交事件概率计算](/my-web/notes/obsidian/87e6d6e74caa8b2b/#%E9%A2%98%E5%9E%8B02-%E4%BA%92%E6%96%A5%E5%8C%85%E5%90%AB%E5%92%8C%E4%BA%A4%E4%BA%8B%E4%BB%B6%E6%A6%82%E7%8E%87%E8%AE%A1%E7%AE%97)
- [2-3随机变量的分布函数review · CDF的凸组合仍为CDF的证明](/my-web/notes/obsidian/221d8beefa5c1b9f/#%E9%A2%98%E5%9E%8B03-cdf%E7%9A%84%E5%87%B8%E7%BB%84%E5%90%88%E4%BB%8D%E4%B8%BAcdf%E7%9A%84%E8%AF%81%E6%98%8E)
