---
title: ER04 指数等待转为二项离开次数
date: '2026-10-16T11:40:40.519978+00:00'
lastmod: '2026-10-16T11:40:40.519978+00:00'
draft: false
description: ''
tags:
- 原题精解
- 概率论
note_links:
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/1908780ea766a34a/index.md
- notes/obsidian/31e82cf4de0ca98b/index.md
- notes/obsidian/6f86eb85a87811f3/index.md
- notes/obsidian/c2b3c878d1831b06/index.md
- notes/obsidian/cd3e85505394c498/index.md
obsidian: true
note_course: 概率论
---

# 指数等待转为二项离开次数

## 原题与配图

![ER04-1](/my-web/notes-media/asset-f2fb9d49517b8d4a.webp)

**教材第二章习题24，印刷第59页 · 进阶**

顾客在银行窗口等待服务的时间 $X$（min）密度为 $f_X(x)=e^{-x/5}/5$（$x>0$），其他为 0。超过 10 min 就离开，一个月去银行 5 次。$Y$ 表示未等到服务而离开的次数，求分布律及 $P(Y\ge1)$。

## 解题思路

先从连续等待时间算出一次“离开”的概率，再把五次是否离开变成 0–1 试验。二项模型需要各次等待相互独立；原题未明说，下面明确采用这项通常假设，仅有单次边缘分布不能推出五次的联合规律。

## 逐步解答

### 1. 先计算一次离开的概率

$$
p=P(X>10)=\int_{10}^{\infty}\frac15e^{-x/5}\,dx=[-e^{-x/5}]_{10}^{\infty}=e^{-2}.
$$

### 2. 从指示变量推导分布律

令 $I_i=1$ 表示第 $i$ 次离开，则 $Y=\sum_{i=1}^5 I_i$。独立且离开概率相同，恰有 $k$ 次离开的某个指定顺序概率为 $p^k(1-p)^{5-k}$，共有 $\binom5k$ 个顺序。

$$
\boxed{P(Y=k)=\binom5k(e^{-2})^k(1-e^{-2})^{5-k},\quad k=0,1,\ldots,5.}
$$

### 3. 用对立事件求至少一次

$$
\boxed{P(Y\ge1)=1-P(Y=0)=1-(1-e^{-2})^5\approx0.5167.}
$$

## 结果自检

分布律的总和由二项式定理等于 1。$P(Y\ge1)$ 大于单次离开概率 $e^{-2}\approx0.1353$，小于并集上界 $5e^{-2}$。

## 易错点

指数分布的参数是率 $1/5$，均值才是 5 min。独立性必须针对不同访问作说明；不能因等待时间服从指数分布就自动断言访问独立。

## 对应知识点

[独立重复试验与至少一次](/my-web/notes/obsidian/6f86eb85a87811f3/) · [0—1分布与指示变量](/my-web/notes/obsidian/31e82cf4de0ca98b/) · [二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/) · [指数分布与等待时间](/my-web/notes/obsidian/c2b3c878d1831b06/)

## 原始出处

《概率论与数理统计》第五版 PDF第74页

原图从项目资料逐页截取；解题过程为本库重新推导。图片默认展开，点击图片可放大。

[返回原题题库](/my-web/notes/obsidian/0ccc1ba647a82d72/) · [课程入口](/my-web/notes/obsidian/cd3e85505394c498/)
