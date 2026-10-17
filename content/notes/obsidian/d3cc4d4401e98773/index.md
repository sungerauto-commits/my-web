---
title: ER10 连续尺寸映射为离散利润
date: '2026-10-16T11:41:01.500845+00:00'
lastmod: '2026-10-16T11:41:01.500845+00:00'
draft: false
description: ''
tags:
- 原题精解
- 概率论
note_links:
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/1a2adbe54fd640b8/index.md
- notes/obsidian/51e9e4eba3515a19/index.md
- notes/obsidian/749b0e191a8c3ec0/index.md
- notes/obsidian/aecbddcbdc38f474/index.md
- notes/obsidian/bea362af3f9ef604/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/f90f2e4ddd7a9d01/index.md
obsidian: true
note_course: 概率论
---

# 连续尺寸映射为离散利润

## 原题与配图

![ER10-1](/my-web/notes-media/asset-74e50e3f8959de89.webp)

![ER10-2](/my-web/notes-media/asset-3e2283a2dede0d5d.webp)

**PPT 2-5 第32—33页，思考题后的利润例题 · 进阶**

零件内径 $X$（mm）服从 $N(5,1)$。小于 4 或大于 6 为不合格品，其余合格。销售利润为 $Y=-1$（$X<4$），$Y=20$（$4\le X\le6$），$Y=-5$（$X>6$）。求 $Y$ 的分布律，并思考连续随机变量的函数是否一定连续型。

## 解题思路

函数把整个区间压到同一个利润值上，因此单个 $Y$ 值能获得正概率。按每个利润值找回 $X$ 的原像，然后用正态标准化求原像概率。

## 逐步解答

### 1. 列出可能的利润，先按数值排序

$Y$ 只可能取 $-5,-1,20$。注意两种亏损不要颠倒：内径过大对应 $-5$，过小对应 $-1$。

### 2. 标准化尺寸

$$
Z=\frac{X-5}{1}\sim N(0,1),\qquad t=\Phi(-1)=1-\Phi(1)\approx0.158655.
$$

### 3. 分别求三个原像的概率

$$
P(Y=-5)=P(X>6)=P(Z>1)=t,
$$

$$
P(Y=-1)=P(X<4)=P(Z<-1)=t,
$$

$$
P(Y=20)=P(4\le X\le6)=P(-1\le Z\le1)=1-2t.
$$

因此分布律为：

| $y$ | $-5$ | $-1$ | $20$ |
| --- | --- | --- | --- |
| $P(Y=y)$ | $0.158655$ | $0.158655$ | $0.682689$ |

### 4. 回答类型问题

本例说明连续型 $X$ 的函数未必连续型。对离散型 $X$，无论 $g$ 是否连续，$g(X)$ 的取值仍至多可数，因此仍为离散型。对连续型 $X$，即使 $g$ 连续也不保证 $g(X)$ 连续型，例如常函数 $g(x)=0$ 会得到退化分布。

原课件将本例解释为阶梯函数变换。判断输出类型时，可靠方法是看各原像概率，而不是仅看 $g$ 是否连续。

## 结果自检

三项概率相加为 1。正态分布关于 5 对称，因此两侧亏损的发生概率相等，亏损金额却不同。边界 4 和 6 的单点概率为 0。

## 易错点

不要对阶梯变换套单调变换密度公式。题目给的是 $N(5,1)$，此处方差与标准差均为 1，标准化分母是 1。

## 对应知识点

[随机变量是样本空间上的函数](/my-web/notes/obsidian/749b0e191a8c3ec0/) · [离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/) · [正态分布的参数与形状](/my-web/notes/obsidian/bea362af3f9ef604/) · [正态标准化与分位数](/my-web/notes/obsidian/51e9e4eba3515a19/) · [离散随机变量函数的分布](/my-web/notes/obsidian/aecbddcbdc38f474/) · [函数分布的分布函数法](/my-web/notes/obsidian/1a2adbe54fd640b8/)

## 原始出处

概率论 PPT 2-5 PDF第32页 · 概率论 PPT 2-5 PDF第33页

原图从项目资料逐页截取；解题过程为本库重新推导。图片默认展开，点击图片可放大。

[返回原题题库](/my-web/notes/obsidian/0ccc1ba647a82d72/) · [课程入口](/my-web/notes/obsidian/cd3e85505394c498/)
