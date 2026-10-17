---
title: R20 泊松分布与计数参数
date: '2026-10-16T17:07:07.041246+00:00'
lastmod: '2026-10-16T17:07:07.041246+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/14237494eef12363/index.md
- notes/obsidian/53b46e5bee6faeba/index.md
- notes/obsidian/c2b3c878d1831b06/index.md
- notes/obsidian/c45a43c99adf4894/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/e1c777437b6403c4/index.md
- notes/obsidian/f90f2e4ddd7a9d01/index.md
obsidian: true
note_course: 概率论
---

# 泊松分布与计数参数

> [!tip] 做题入口
> λ表示该观察范围的平均计数尺度，先匹配时间或空间长度。

## 详细讲解：从理解到列式

### 图解：次数与等待

![次数与等待](/my-web/notes-media/asset-b177ce0d24f729ee.svg)

固定时窗数次数，与固定事件数等时间，是两种不同变量。 图为本库补充示意，不替代原题中的几何与方向。

### 泊松变量记录一个范围内发生的次数

分布律为 $P(X=k)=e^{-\lambda}\lambda^k/k!$，$k=0,1,\ldots$。参数 $\lambda$ 是当前时间段或空间区域的平均次数，不是单个事件的发生概率。若给的是每小时平均率 r，考察 t 小时，才取 $\lambda=rt$。

### 次数题怎样翻译

没有发生：$P(X=0)=e^{-\lambda}$；恰两次：$e^{-\lambda}\lambda^2/2$；至少两次：$1-e^{-\lambda}(1+\lambda)$。时间缩成一半，在恒定率模型下参数也减半，不是将每个概率直接减半。

分布本身描述一次计数；要说“不同时段计数独立”，需要额外的泊松过程或独立增量假设，不能只因某个时段的计数服从泊松，就推出所有时段的联合结构。用泊松近似二项时，参数取 $np$，而准确性受 n、p及所问尾事件影响，不能只凭“数字很大”下结论。

### 学习顺序

先读：[离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/)。

再用到：[二项到泊松的极限推导](/my-web/notes/obsidian/c45a43c99adf4894/)、[泊松计数的独立筛选](/my-web/notes/obsidian/53b46e5bee6faeba/)。

[在学习地图中定位本节](/my-web/notes/?map=R20#notes-graph-heading)

## 前提与后续关系

**先确认：** [离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/)

**继续用于：** [二项到泊松的极限推导](/my-web/notes/obsidian/c45a43c99adf4894/)、[泊松计数的独立筛选](/my-web/notes/obsidian/53b46e5bee6faeba/)、[指数分布与等待时间](/my-web/notes/obsidian/c2b3c878d1831b06/)

## 定义与前提

$X\sim\operatorname{Pois}(\lambda)$，$\lambda>0$，分布律 $P(X=k)=e^{-\lambda}\lambda^k/k!$，$k=0,1,\ldots$。在均匀到达计数模型中，长度为 $t$ 的时间段参数常写 $\lambda=rt$；需要相应的到达机制假设，不能把所有计数都当泊松。

## 逐步推导｜归一化

指数级数 $e^\lambda=\sum_{k=0}^\infty\lambda^k/k!$，因此 $\sum_kP(X=k)=e^{-\lambda}e^\lambda=1$。从二项稀有事件极限导出该分布的完整过程见相邻的极限定理节点。

## 补充例题｜至少两次到达

**题目：** 某理想到达模型每小时参数2，半小时内到达次数服从泊松分布，求至少2次。

1. 半小时参数 $\lambda=2\times0.5=1$。
2. 用补事件 $P(X\ge2)=1-P(X=0)-P(X=1)$。
3. 结果 $1-e^{-1}-e^{-1}=1-2/e\approx0.26424$。
4. 把每小时参数2直接用于半小时会改变模型尺度。

## 易错与边界

$\lambda$ 不是单次成功概率，可以大于1。泊松近似与泊松模型本身要区分：前者有误差，后者是题目给定的分布假设。

## 回想任务

若两小时到达次数参数为6，半小时对应的参数是多少？需要哪些平稳模型假设？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第21页至第30页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图10 · IMG20261015233220](/my-web/notes-media/asset-360193899957a556.webp)。
- [课堂笔记图11 · IMG20261015233225](/my-web/notes-media/asset-31d3c3efa599b49a.webp)。
- [课堂笔记图12 · IMG20261015233235](/my-web/notes-media/asset-24eaaaf9eafd8f22.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233220](/my-web/notes-media/asset-360193899957a556.webp)

## 关联与返回

[离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/)、[二项到泊松的极限推导](/my-web/notes/obsidian/c45a43c99adf4894/)、[泊松计数的独立筛选](/my-web/notes/obsidian/53b46e5bee6faeba/)、[指数分布与等待时间](/my-web/notes/obsidian/c2b3c878d1831b06/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [维修人员分组与合用：二项模型比较](/my-web/notes/obsidian/e1c777437b6403c4/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [2-2离散型随机变量review · 稀少事故的泊松近似](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B06-%E7%A8%80%E5%B0%91%E4%BA%8B%E6%95%85%E7%9A%84%E6%B3%8A%E6%9D%BE%E8%BF%91%E4%BC%BC)
- [2-2离散型随机变量review · 维修人员最少配置与合用比较](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B07-%E7%BB%B4%E4%BF%AE%E4%BA%BA%E5%91%98%E6%9C%80%E5%B0%91%E9%85%8D%E7%BD%AE%E4%B8%8E%E5%90%88%E7%94%A8%E6%AF%94%E8%BE%83)
- [2-2离散型随机变量review · 由泊松点概率关系反求参数](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B08-%E7%94%B1%E6%B3%8A%E6%9D%BE%E7%82%B9%E6%A6%82%E7%8E%87%E5%85%B3%E7%B3%BB%E5%8F%8D%E6%B1%82%E5%8F%82%E6%95%B0)
