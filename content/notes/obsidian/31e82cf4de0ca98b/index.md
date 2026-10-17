---
title: R16 0—1分布与指示变量
date: '2026-10-16T17:07:07.024220+00:00'
lastmod: '2026-10-16T17:07:07.024220+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/0f5dc8ebf244204a/index.md
- notes/obsidian/1077b445258d9a76/index.md
- notes/obsidian/14237494eef12363/index.md
- notes/obsidian/1908780ea766a34a/index.md
- notes/obsidian/568d3edc42a57ff7/index.md
- notes/obsidian/6f86eb85a87811f3/index.md
- notes/obsidian/749b0e191a8c3ec0/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/f90f2e4ddd7a9d01/index.md
obsidian: true
note_course: 概率论
---

# 0—1分布与指示变量

> [!tip] 做题入口
> 把某事件是否发生编码成0或1。

## 详细讲解：从理解到列式

### 图解：模型选择

![模型选择](/my-web/notes-media/asset-1568cd435133f722.svg)

在套公式前检查试验次数、独立性、放回条件及所记录的变量。 图为本库补充示意，不替代原题中的几何与方向。

### 指示变量把事件转成能运算的数

定义 $I_A=1$（A发生）、0（A不发生），则 $P(I_A=1)=p=P(A)$、$P(I_A=0)=1-p$，这就是0—1分布。定义变量时必须说明哪个结果记为1，不能默认“1一定表示合格”。

### 多个指示变量的和表示次数

若 $I_i$ 表示第 i 件次品，则 $X=\sum I_i$ 是次品件数。若这些指示变量独立且成功概率相同，X才服从二项分布；不放回抽样的指示变量相关，其和通常为超几何分布。用指示变量表示次数，不等于已经证明二项模型成立。

指示变量还把集合运算变成代数：$I_{A\cap B}=I_AI_B$，$I_{\overline A}=1-I_A$，$I_{A\cup B}=I_A+I_B-I_AI_B$。这能帮助理解容斥和次数统计。后续期望满足 $E(I_A)=p$，是把事件概率与随机变量计算连接起来的基本桥梁。

### 学习顺序

先读：[离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/)。

再用到：[二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/)。

[在学习地图中定位本节](/my-web/notes/?map=R16#notes-graph-heading)

## 前提与后续关系

**先确认：** [随机变量是样本空间上的函数](/my-web/notes/obsidian/749b0e191a8c3ec0/)、[离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/)

**继续用于：** 结合下方关联节点做题与复查。

## 定义与前提

对事件 $A$ 定义 $I_A=1$（发生）、0（未发生）。若 $P(A)=p$，则 $P(I_A=1)=p$、$P(I_A=0)=1-p$，写成 $P(I_A=k)=p^k(1-p)^{1-k}$，$k=0,1$，端点参数用直接概率定义理解。

## 推导与补充例题

**题目：** 一批200件产品有10件次品，随机抽一件，令 $X=1$ 表示次品（课件第9页的编码须与题意核对）。

1. $p=10/200=0.05$。
2. $P(X=1)=0.05$，$P(X=0)=0.95$。
3. 若改成 $Y=1$ 表示正品，则成功参数改为0.95；不是分布公式变了，而是“1”的含义变了。
4. 独立重复观察的成功总数 $\sum I_i$ 才引向二项分布，单个指示变量只是其 $n=1$ 特例。

## 易错与边界

“成功”可以是次品、故障、失败等任何你定义的目标事件，不一定是好事。必须先定义1代表什么。

## 回想任务

把同一事件指示变量改成 $1-I_A$，参数怎样变？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第8页至第10页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图09 · IMG20261015233209](/my-web/notes-media/asset-d4ce49193720f5d6.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233209](/my-web/notes-media/asset-d4ce49193720f5d6.webp)

## 关联与返回

[事件独立与互斥的区别](/my-web/notes/obsidian/0f5dc8ebf244204a/)、[独立重复试验与至少一次](/my-web/notes/obsidian/6f86eb85a87811f3/)、[离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/)、[二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [指数等待转为二项离开次数](/my-web/notes/obsidian/568d3edc42a57ff7/) · 进阶

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-2review · 四零件合格次数的事件表达](/my-web/notes/obsidian/1077b445258d9a76/#%E9%A2%98%E5%9E%8B03-%E5%9B%9B%E9%9B%B6%E4%BB%B6%E5%90%88%E6%A0%BC%E6%AC%A1%E6%95%B0%E7%9A%84%E4%BA%8B%E4%BB%B6%E8%A1%A8%E8%BE%BE)
- [2-2离散型随机变量review · 二项恰好次数与尾概率](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B03-%E4%BA%8C%E9%A1%B9%E6%81%B0%E5%A5%BD%E6%AC%A1%E6%95%B0%E4%B8%8E%E5%B0%BE%E6%A6%82%E7%8E%87)
- [2-2离散型随机变量review · 单次抽检构造0—1分布](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B10-%E5%8D%95%E6%AC%A1%E6%8A%BD%E6%A3%80%E6%9E%84%E9%80%A001%E5%88%86%E5%B8%83)
