---
title: ER05 红灯等待：有跳跃的混合分布
date: '2026-10-16T11:46:17.184635+00:00'
lastmod: '2026-10-16T11:46:17.184635+00:00'
draft: false
description: ''
tags:
- 原题精解
- 概率论
note_links:
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/2587cd6473932f70/index.md
- notes/obsidian/35c0448e7aeb3994/index.md
- notes/obsidian/749b0e191a8c3ec0/index.md
- notes/obsidian/89bcb92b5fa2ff2b/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/d547d77dd097f5bb/index.md
obsidian: true
note_course: 概率论
---

# 红灯等待：有跳跃的混合分布

## 原题与配图

![ER05-1](/my-web/notes-media/asset-9d54b9dbd1f2fb66.webp)

**教材第二章习题31，印刷第59页 · 综合**

某人上班经过信号灯，80% 时间亮红灯，遇红灯时等待时间在 $[0,30]$ 秒上服从均匀分布。$X$ 为等待时间。求 $F(x)$ 并画图，判断 $X$ 是否连续型、是否离散型，并说明理由。

## 解题思路

先分“绿灯立即通过”和“红灯均匀等待”。绿灯使 0 点拥有正概率，红灯又让正区间上的等待连续分布，所以不能只用一个均匀密度概括。

## 逐步解答

### 1. 按信号状态使用全概率

设 $G$ 为绿灯，$R$ 为红灯。$P(G)=0.2,P(R)=0.8$。给定绿灯时 $X=0$，给定红灯时 $X\sim U(0,30)$。

### 2. 分区间写出分布函数

$$
\boxed{F(x)=\begin{cases}0,&x<0,\\0.2+0.8x/30,&0\le x<30,\\1,&x\ge30.\end{cases}}
$$

当 $0\le x<30$ 时，$\{X\le x\}$ 包括所有遇绿灯的情况，以及遇红灯但等待不超过 $x$ 的情况。

### 3. 图像的关键位置

从 $x<0$ 的高度 0，到 $x=0$ 跳到 0.2；随后沿直线升至 $(30,1)$，之后保持为 1。下方示意中，空心点不取、实心点取：

![ER05-CDF](/my-web/notes-media/asset-669fab092eeb0afc.svg)

严格形状以公式为准：$0<x<30$ 的斜率恒为 $0.8/30$。

### 4. 判断类型

$$
P(X=0)=F(0)-F(0^-)=0.2.
$$

连续型随机变量任意单点概率为 0，所以它不是连续型；$0<X<30$ 这段有总概率 0.8，不能集中在可数个点上，因此也不是离散型。这是混合型分布。

若只对 $F$ 分段求导，会得到正区间密度 $0.8/30$，积分仅为 0.8，漏掉 0 点的质量 0.2；因此整个分布不存在普通意义下的概率密度函数。

## 结果自检

$F$ 单调不减、右连续，$F(-\infty)=0,F(+\infty)=1$。跳跃质量 0.2 加上连续部分质量 0.8 正好为 1。

## 易错点

$P(X=0)$ 不等于遇红灯后“恰好等 0 秒”的概率；它主要来自绿灯。分布函数几乎处处可导，不代表导数就能表达全部概率。

## 对应知识点

[全概率公式](/my-web/notes/obsidian/2587cd6473932f70/) · [随机变量是样本空间上的函数](/my-web/notes/obsidian/749b0e191a8c3ec0/) · [分布函数及右连续性](/my-web/notes/obsidian/89bcb92b5fa2ff2b/) · [概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/) · [连续均匀分布](/my-web/notes/obsidian/d547d77dd097f5bb/)

## 原始出处

《概率论与数理统计》第五版 PDF第74页

原图从项目资料逐页截取；解题过程为本库重新推导。图片默认展开，点击图片可放大。

[返回原题题库](/my-web/notes/obsidian/0ccc1ba647a82d72/) · [课程入口](/my-web/notes/obsidian/cd3e85505394c498/)
