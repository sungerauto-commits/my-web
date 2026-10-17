---
title: ER09 余弦变换：两个反函数分支都要计入
date: '2026-10-16T11:40:45.380402+00:00'
lastmod: '2026-10-16T11:40:45.380402+00:00'
draft: false
description: ''
tags:
- 原题精解
- 概率论
note_links:
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/1a2adbe54fd640b8/index.md
- notes/obsidian/29f9bf39693ad5be/index.md
- notes/obsidian/35c0448e7aeb3994/index.md
- notes/obsidian/89bcb92b5fa2ff2b/index.md
- notes/obsidian/8bf43a3c44d5d61d/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/d547d77dd097f5bb/index.md
obsidian: true
note_course: 概率论
---

# 余弦变换：两个反函数分支都要计入

## 原题与配图

![ER09-1](/my-web/notes-media/asset-5d7ff922d564810d.png)

![ER09-2](/my-web/notes-media/asset-5cb05418c38a14d8.webp)

**习题解答 §2.6 第5题，印刷第101页（附原书图2.18） · 综合**

$X$ 在 $(-\pi/2,\pi/2)$ 上服从均匀分布，求 $Y=\cos X$ 的密度函数。第二张图保留原书解答中的图2.18，供识别事件原像。

## 解题思路

余弦在整段上不单调。先求 $\{\cos X\le y\}$ 对应的两个区间，再算长度；不能只取 $X=\arccos y$ 这一支。

## 逐步解答

### 1. 先找值域和原密度

$f_X(x)=1/\pi$（$-\pi/2<x<\pi/2$），$Y$ 的取值在 $(0,1]$ 内，端点是否取到不影响连续型分布的密度。

### 2. 求分布函数的原像

对 $0<y<1$，

$$
\{\cos X\le y\}=\{-\pi/2<X\le-\arccos y\}\cup\{\arccos y\le X<\pi/2\}.
$$

两区间互斥，故

$$
F_Y(y)=\frac{2(\pi/2-\arccos y)}\pi=1-\frac2\pi\arccos y.
$$

完整形式：

$$
F_Y(y)=\begin{cases}0,&y\le0,\\1-\frac2\pi\arccos y,&0<y<1,\\1,&y\ge1.\end{cases}
$$

### 3. 求导得到密度

$$
\boxed{f_Y(y)=\begin{cases}\dfrac2{\pi\sqrt{1-y^2}},&0<y<1,\\0,&\text{其他}.\end{cases}}
$$

### 4. 用多分支公式复核

反函数有 $x_1=\arccos y,x_2=-\arccos y$；两者导数绝对值都为 $1/\sqrt{1-y^2}$。每支贡献 $1/[\pi\sqrt{1-y^2}]$，相加正好得到上式。

## 结果自检

$\int_0^1 2/[\pi\sqrt{1-y^2}]\,dy=(2/\pi)[\arcsin y]_0^1=1$。$y\to1^-$ 密度无界，但该奇点可积，而且 $P(Y=1)=P(X=0)=0$，没有点质量。

## 易错点

漏一支会使密度积分只有 $1/2$。密度大于 1 或趋于无穷并不等于概率大于 1。

## 对应知识点

[分布函数及右连续性](/my-web/notes/obsidian/89bcb92b5fa2ff2b/) · [概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/) · [连续均匀分布](/my-web/notes/obsidian/d547d77dd097f5bb/) · [函数分布的分布函数法](/my-web/notes/obsidian/1a2adbe54fd640b8/) · [单调变换密度与绝对值因子](/my-web/notes/obsidian/8bf43a3c44d5d61d/) · [非单调变换与多分支求和](/my-web/notes/obsidian/29f9bf39693ad5be/)

## 原始出处

《概率论与数理统计教程》第三版习题与解答 PDF第106页

原图从项目资料逐页截取；解题过程为本库重新推导。图片默认展开，点击图片可放大。

[返回原题题库](/my-web/notes/obsidian/0ccc1ba647a82d72/) · [课程入口](/my-web/notes/obsidian/cd3e85505394c498/)
