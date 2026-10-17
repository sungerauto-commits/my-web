---
title: R21 二项到泊松的极限推导
date: '2026-10-16T17:07:07.048753+00:00'
lastmod: '2026-10-16T17:07:07.048753+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/14237494eef12363/index.md
- notes/obsidian/16327b65ee8a93ba/index.md
- notes/obsidian/1908780ea766a34a/index.md
- notes/obsidian/51b2f723cc621afb/index.md
- notes/obsidian/9fa6b6113ecaf1aa/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/e1c777437b6403c4/index.md
obsidian: true
note_course: 概率论
---

# 二项到泊松的极限推导

> [!tip] 做题入口
> n增大、p缩小而np保留为λ，固定k逐项取极限。

## 详细讲解：从理解到列式

### 图解：模型选择

![模型选择](/my-web/notes-media/asset-1568cd435133f722.svg)

在套公式前检查试验次数、独立性、放回条件及所记录的变量。 图为本库补充示意，不替代原题中的几何与方向。

### 保持平均次数不变，增加稀少机会

设 $X_n\sim B(n,p_n)$，令 $p_n=\lambda/n$，n增大而 $np_n=\lambda$ 固定。对固定k，

$$
P(X_n=k)=\frac{n(n-1)\cdots(n-k+1)}{n^k}\frac{\lambda^k}{k!}(1-\lambda/n)^n(1-\lambda/n)^{-k}.
$$

第一个比值趋1，最后一项趋1，中间 $(1-\lambda/n)^n\to e^{-\lambda}$，于是得到泊松分布律。每个因子的极限各有来源，不是把 n、p直接代成无穷和零。

### 近似题要保留原始模型

独立稀少事件的精确次数若为二项，先写 $B(n,p)$，再说明用 $\operatorname{Pois}(np)$ 近似。若计算至少两次，先写精确式 $1-(1-p)^n-np(1-p)^{n-1}$，再比较泊松式 $1-e^{-np}(1+np)$。

当所求概率很小时，相对误差可能比通常区间大，不能把“平均次数不大”当作误差保证。原题 ER02 同时给出了精确二项和泊松近似的结果，可用来观察差别。

### 学习顺序

先读：[二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/)、[泊松分布与计数参数](/my-web/notes/obsidian/9fa6b6113ecaf1aa/)。

用于练习：[ER02 维修人员分组与合用：二项模型比较](/my-web/notes/obsidian/e1c777437b6403c4/)。

[在学习地图中定位本节](/my-web/notes/?map=R21#notes-graph-heading)

## 前提与后续关系

**先确认：** [二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/)、[泊松分布与计数参数](/my-web/notes/obsidian/9fa6b6113ecaf1aa/)

**继续用于：** 结合下方关联节点做题与复查。

## 定理与前提

$X_n\sim\operatorname{Bin}(n,p_n)$，$n\to\infty$、$p_n\to0$、$np_n\to\lambda>0$。对每个固定非负整数 $k$，$P(X_n=k)\to e^{-\lambda}\lambda^k/k!$。它不是任意参数下的精确相等。

## 逐步推导｜先取 $p_n=\lambda/n$

$$
\begin{aligned}
P(X_n=k)
&=\frac{n(n-1)\cdots(n-k+1)}{k!}\left(\frac\lambda n\right)^k
\left(1-\frac\lambda n\right)^{n-k}\\
&=\frac{\lambda^k}{k!}\left[\prod_{j=0}^{k-1}\left(1-\frac jn\right)\right]
\left(1-\frac\lambda n\right)^n\left(1-\frac\lambda n\right)^{-k}.
\end{aligned}
$$


固定 $k$ 时，方括号乘积趋1，最后一项趋1，中间项由 $n\ln(1-\lambda/n)\to-\lambda$ 趋 $e^{-\lambda}$。相乘得到目标。一般 $np_n\to\lambda$ 时同样拆为 $(np_n)^k$ 和 $(1-p_n)^n$ 等项。

## 课件原题｜1000辆车稀有事故

每辆独立出事故概率0.0001，$X\sim\operatorname{Bin}(1000,0.0001)$，求至少2辆事故。

1. 精确：$1-(1-p)^{1000}-1000p(1-p)^{999}$。
2. 近似参数 $\lambda=np=0.1$。
3. 泊松近似 $1-e^{-0.1}(1+0.1)\approx0.00467884$。
4. 精确值约0.00467477；误差约 $4.07\times10^{-6}$。把近似符号保留在结果中。

## 易错与边界

这里逐项推导固定 $k$，没有证明对随 $n$ 增长的任意 $k$ 都一致有效。$p$ 接近1时，可考虑失败次数的稀有事件近似，不能直接把成功次数当小参数泊松。

## 回想任务

推导中为何必须保留 $np\to\lambda$，而不是仅仅说 $p\to0$？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第21页至第25页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图10 · IMG20261015233220](/my-web/notes-media/asset-360193899957a556.webp)。
- [课堂笔记图11 · IMG20261015233225](/my-web/notes-media/asset-31d3c3efa599b49a.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233220](/my-web/notes-media/asset-360193899957a556.webp)

> [!example]- 展开查看原题所在课件页
> 2-2离散型随机变量review

## 关联与返回

[二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/)、[泊松分布与计数参数](/my-web/notes/obsidian/9fa6b6113ecaf1aa/)、[二项分布的正态近似与连续性修正](/my-web/notes/obsidian/16327b65ee8a93ba/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [维修人员分组与合用：二项模型比较](/my-web/notes/obsidian/e1c777437b6403c4/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [2-2离散型随机变量review · 稀少事故的泊松近似](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B06-%E7%A8%80%E5%B0%91%E4%BA%8B%E6%95%85%E7%9A%84%E6%B3%8A%E6%9D%BE%E8%BF%91%E4%BC%BC)
- [2-2离散型随机变量review · 维修人员最少配置与合用比较](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B07-%E7%BB%B4%E4%BF%AE%E4%BA%BA%E5%91%98%E6%9C%80%E5%B0%91%E9%85%8D%E7%BD%AE%E4%B8%8E%E5%90%88%E7%94%A8%E6%AF%94%E8%BE%83)
- [2-4review、 · 正态单人概率到二项与泊松人数](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B09-%E6%AD%A3%E6%80%81%E5%8D%95%E4%BA%BA%E6%A6%82%E7%8E%87%E5%88%B0%E4%BA%8C%E9%A1%B9%E4%B8%8E%E6%B3%8A%E6%9D%BE%E4%BA%BA%E6%95%B0)
