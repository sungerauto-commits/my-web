---
title: ER08 黑球返还再添球：停止时间不是几何分布
date: '2026-10-16T11:40:44.663138+00:00'
lastmod: '2026-10-16T11:40:44.663138+00:00'
draft: false
description: ''
tags:
- 原题精解
- 概率论
note_links:
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/a5655733731507cc/index.md
- notes/obsidian/b6cadfdd889e25b0/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/e753433a0de5fba5/index.md
- notes/obsidian/f90f2e4ddd7a9d01/index.md
obsidian: true
note_course: 概率论
---

# 黑球返还再添球：停止时间不是几何分布

## 原题与配图

![ER08-1](/my-web/notes-media/asset-728e8d292226b197.webp)

**习题解答 §1.4 第11题，印刷第34页 · 综合**

袋中有白球、黑球各一个。每次任取一球，取到白球停止；取到黑球则放回并再加入一个黑球，继续直到取到白球。求：（1）取到第 $n$ 次试验还没结束；（2）试验恰在第 $n$ 次结束的概率。

## 解题思路

前面取黑球会改变后面袋子组成，因此每次成功概率不固定。用条件乘法建立“前若干次都黑”的路径概率，再用相邻生存概率之差得到停止分布。

## 逐步解答

### 1. 写出第 $i$ 次的条件概率

若前 $i-1$ 次都黑，则此时有黑球 $i$ 个、白球 1 个。因此

$$
P(\text{第}i\text{次黑}\mid\text{此前都黑})=\frac{i}{i+1}.
$$

### 2. 还没结束等价于前 $n$ 次都黑

令 $N$ 为停止次数。用乘法公式而不是独立性：

$$
\boxed{P(N>n)=\prod_{i=1}^n\frac{i}{i+1}=\frac1{n+1}.}
$$

### 3. 恰在第 $n$ 次停止

先有 $n-1$ 次黑，再取白：

$$
\boxed{P(N=n)=\left(\prod_{i=1}^{n-1}\frac{i}{i+1}\right)\frac1{n+1}=\frac1{n(n+1)},\quad n\ge1.}
$$

也可由 $P(N>n-1)-P(N>n)=1/n-1/(n+1)$ 得到。

### 4. 理解“会不会永不停止”

$$
P(N=\infty)=\lim_{n\to\infty}P(N>n)=0.
$$

几乎必然会停止，但作为延伸，平均次数却发散：$E(N)=\sum_{n=0}^{\infty}P(N>n)=\sum_{n=0}^{\infty}1/(n+1)=\infty$。这不是原题要求，只用于区分“最终会停止”和“平均等待有限”。

## 结果自检

$n=1$ 停止概率为 $1/2$。$\sum_{n=1}^{m}1/[n(n+1)]=1-1/(m+1)\to1$，分布归一。

## 易错点

不能写成 $(1/2)^n$，因为放回之外还增加了一个黑球。乘法公式适用于相关事件；只有把条件概率改成边缘概率的那一步才需要独立性。

## 对应知识点

[条件概率](/my-web/notes/obsidian/a5655733731507cc/) · [乘法公式与概率树](/my-web/notes/obsidian/e753433a0de5fba5/) · [离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/) · [几何分布与首次成功](/my-web/notes/obsidian/b6cadfdd889e25b0/)

## 原始出处

《概率论与数理统计教程》第三版习题与解答 PDF第39页

原图从项目资料逐页截取；解题过程为本库重新推导。图片默认展开，点击图片可放大。

[返回原题题库](/my-web/notes/obsidian/0ccc1ba647a82d72/) · [课程入口](/my-web/notes/obsidian/cd3e85505394c498/)
