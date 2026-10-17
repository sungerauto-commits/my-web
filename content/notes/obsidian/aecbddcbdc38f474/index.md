---
title: R30 离散随机变量函数的分布
date: '2026-10-16T17:07:07.074896+00:00'
lastmod: '2026-10-16T17:07:07.074896+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/1a2adbe54fd640b8/index.md
- notes/obsidian/29f9bf39693ad5be/index.md
- notes/obsidian/749b0e191a8c3ec0/index.md
- notes/obsidian/b8e8f4ae985ae6d4/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/d3cc4d4401e98773/index.md
- notes/obsidian/f90f2e4ddd7a9d01/index.md
obsidian: true
note_course: 概率论
---

# 离散随机变量函数的分布

> [!tip] 做题入口
> 先映射取值，再把相同结果的概率合并。

## 详细讲解：从理解到列式

### 对每个新取值收集全部来源

若X离散、$Y=g(X)$，先列出所有不同的 $y_j$，然后

$$
P(Y=y_j)=\sum_{x_k:g(x_k)=y_j}P(X=x_k).
$$

同一个Y值可能由多个X值产生，例如平方将正负x合并。分布律的列数可能减少，不能把原概率表仅换一个表头而不合并同值项。

### 变换还可能把连续输入变成离散输出

按区间计价、按合格与否给利润时，一个整段X可能映到同一个金额，输出得到点质量。ER10 的正态尺寸按三区间映成 $-5,-1,20$，应求三个原像区间概率，不能套密度变换公式。

结果检查：新取值应互不重复；各项概率非负且和为1；若变换有对称性，合并后的对应概率应反映它。输入离散时，任何函数的像仍至多可数，函数是否连续不影响“仍离散”的结论。

### 学习顺序

先读：[离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/)。

用于练习：[ER10 连续尺寸映射为离散利润](/my-web/notes/obsidian/d3cc4d4401e98773/)。

[在学习地图中定位本节](/my-web/notes/?map=R30#notes-graph-heading)

## 前提与后续关系

**先确认：** [随机变量是样本空间上的函数](/my-web/notes/obsidian/749b0e191a8c3ec0/)、[离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/)

**继续用于：** 结合下方关联节点做题与复查。

## 定理与前提

已知离散 $X$，$Y=g(X)$，则 $P(Y=y)=\sum_{x:g(x)=y}P(X=x)$。$g$ 不必一一对应。求和是在不相交的原像事件之间进行，来源是概率可加性。

## 逐步推导与课件原题

函数分布课件第5—7页：$X=-1,0,1,2$，对应概率0.2、0.3、0.1、0.4，求 $Y=(X-1)^2$。

1. 映射表：$-1\to4$，$0\to1$，$1\to0$，$2\to1$。
2. $Y$ 支持集是 $\{0,1,4\}$。
3. $P(Y=0)=P(X=1)=0.1$。
4. $P(Y=1)=P(X=0)+P(X=2)=0.7$。
5. $P(Y=4)=P(X=-1)=0.2$；总和1。
6. 若改为 $Y=3X+2$，四个像互不相同，则对应概率保留而不合并。

## 解题步骤

写原取值、映射值、原概率三行→去重得到新支持集→合并概率→检查总和为1。

## 易错与边界

不能对概率值直接做函数变换，如 $P(Y=y)$ 不是 $g(P(X=x))$。连续随机变量通过阈值函数也可变成离散变量，不应一律求“新密度”。

## 回想任务

若 $X$ 取 $-2,-1,1,2$，$Y=X^2$ 的支持集有几个值？应怎样合并概率？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第5页至第9页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图18 · IMG20261015233308](/my-web/notes-media/asset-52ed9c290f3a5717.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233308](/my-web/notes-media/asset-52ed9c290f3a5717.webp)

> [!example]- 展开查看原题所在课件页
> 2-5随机变量的函数的分布review

## 关联与返回

[随机变量是样本空间上的函数](/my-web/notes/obsidian/749b0e191a8c3ec0/)、[离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/)、[函数分布的分布函数法](/my-web/notes/obsidian/1a2adbe54fd640b8/)、[非单调变换与多分支求和](/my-web/notes/obsidian/29f9bf39693ad5be/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [连续尺寸映射为离散利润](/my-web/notes/obsidian/d3cc4d4401e98773/) · 进阶

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [2-5随机变量的函数的分布review · 离散线性与平方变换合并同值](/my-web/notes/obsidian/b8e8f4ae985ae6d4/#%E9%A2%98%E5%9E%8B01-%E7%A6%BB%E6%95%A3%E7%BA%BF%E6%80%A7%E4%B8%8E%E5%B9%B3%E6%96%B9%E5%8F%98%E6%8D%A2%E5%90%88%E5%B9%B6%E5%90%8C%E5%80%BC)
- [2-5随机变量的函数的分布review · 正态尺寸映射为离散利润](/my-web/notes/obsidian/b8e8f4ae985ae6d4/#%E9%A2%98%E5%9E%8B04-%E6%AD%A3%E6%80%81%E5%B0%BA%E5%AF%B8%E6%98%A0%E5%B0%84%E4%B8%BA%E7%A6%BB%E6%95%A3%E5%88%A9%E6%B6%A6)
- [2-5随机变量的函数的分布review · 无限离散分布的奇偶、倍数和尾事件](/my-web/notes/obsidian/b8e8f4ae985ae6d4/#%E9%A2%98%E5%9E%8B06-%E6%97%A0%E9%99%90%E7%A6%BB%E6%95%A3%E5%88%86%E5%B8%83%E7%9A%84%E5%A5%87%E5%81%B6%E5%80%8D%E6%95%B0%E5%92%8C%E5%B0%BE%E4%BA%8B%E4%BB%B6)
