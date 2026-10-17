---
title: R11 事件独立与互斥的区别
date: '2026-10-16T17:07:07.012675+00:00'
lastmod: '2026-10-16T17:07:07.012675+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/14237494eef12363/index.md
- notes/obsidian/434279b5a684ce01/index.md
- notes/obsidian/6f86eb85a87811f3/index.md
- notes/obsidian/72752b2f2f01ad82/index.md
- notes/obsidian/a5655733731507cc/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/e1c777437b6403c4/index.md
- notes/obsidian/e753433a0de5fba5/index.md
- notes/obsidian/f3732cf365957480/index.md
- notes/obsidian/feed334eee9899c6/index.md
obsidian: true
note_course: 概率论
---

# 事件独立与互斥的区别

> [!tip] 做题入口
> 互斥说不能同时发生，独立说知道一个不改变另一个概率。

## 详细讲解：从理解到列式

### 图解：事件集合

![事件集合](/my-web/notes-media/asset-7fe7d7ba512fdb4b.svg)

看重叠理解计数；能否独立还要检验概率关系。 图为本库补充示意，不替代原题中的几何与方向。

### 互斥与独立回答不同问题

互斥：A、B 能否同时发生，条件为 $A\cap B=\varnothing$。独立：知道 B 是否改变 A 的概率，定义为 $P(AB)=P(A)P(B)$。若两者概率都正且互斥，$P(A\mid B)=0\ne P(A)$，所以不独立。

### 通过乘法或条件概率检验

在 $P(B)>0$ 时，独立等价于 $P(A\mid B)=P(A)$；概率为零时条件比值未定义，但乘法定义仍适用。由 $P(A\overline B)=P(A)-P(AB)$ 可推出独立时 $P(A\overline B)=P(A)P(\overline B)$，因此对立事件也保持独立。

“设备相互独立”指基础元件状态；共享同一元件的两条成功路径却不独立。不要把独立性从基础变量自动搬到所有组合事件。判断是否能相乘，先看两个事件是否依赖重叠的信息；无重叠也要有题设独立假设作为依据。

### 学习顺序

先读：[条件概率](/my-web/notes/obsidian/a5655733731507cc/)、[乘法公式与概率树](/my-web/notes/obsidian/e753433a0de5fba5/)。

再用到：[两两独立与相互独立](/my-web/notes/obsidian/feed334eee9899c6/)、[独立重复试验与至少一次](/my-web/notes/obsidian/6f86eb85a87811f3/)。

[在学习地图中定位本节](/my-web/notes/?map=R11#notes-graph-heading)

## 前提与后续关系

**先确认：** [条件概率](/my-web/notes/obsidian/a5655733731507cc/)、[乘法公式与概率树](/my-web/notes/obsidian/e753433a0de5fba5/)

**继续用于：** [两两独立与相互独立](/my-web/notes/obsidian/feed334eee9899c6/)

## 定义与前提

独立定义 $P(AB)=P(A)P(B)$。该乘积定义对零概率事件也有意义；若 $P(B)>0$，才可等价写 $P(A\mid B)=P(A)$。

## 逐步推导与反例

若互斥，则 $P(AB)=0$。当 $P(A),P(B)>0$，乘积大于0，所以互斥的正概率事件不独立。反过来，独立的事件可以同时发生。

独立还可推出补事件独立：

$$
P(AB^c)=P(A)-P(AB)=P(A)[1-P(B)]=P(A)P(B^c).
$$

## 补充例题｜同一次掷骰子

**题目：** $A$=点数为偶数，$B$=点数不超过3，公平骰子。

1. $P(A)=1/2,P(B)=1/2$。
2. $AB=\{2\}$，$P(AB)=1/6\ne1/4$，不独立。
3. 若改 $C=\{1,2\}$，$P(C)=1/3$、$P(AC)=1/6=P(A)P(C)$，则 $A,C$ 独立。
4. 同一个试验中也可能出现独立事件，不能凭“来自同一试验”否定独立。

## 易错与边界

条件独立与无条件独立不是同一个概念。实际题目的独立性是模型假设或已知结构，需要说明依据，不能只因计算方便而假定。

## 回想任务

为什么两个正概率的互斥事件，只要知道其中一个发生，另一个就必然受影响？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第1页至第13页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图07 · IMG20261015233153](/my-web/notes-media/asset-dc2a791caa17adab.webp)。
- [课堂笔记图08 · IMG20261015233204](/my-web/notes-media/asset-d82946fb9a090533.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233153](/my-web/notes-media/asset-dc2a791caa17adab.webp)

## 关联与返回

[事件运算与德摩根律](/my-web/notes/obsidian/f3732cf365957480/)、[条件概率](/my-web/notes/obsidian/a5655733731507cc/)、[两两独立与相互独立](/my-web/notes/obsidian/feed334eee9899c6/)、[独立重复试验与至少一次](/my-web/notes/obsidian/6f86eb85a87811f3/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [维修人员分组与合用：二项模型比较](/my-web/notes/obsidian/e1c777437b6403c4/) · 综合
- [桥式系统可靠性：对桥臂分情况](/my-web/notes/obsidian/72752b2f2f01ad82/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-6review · 两两独立与相互独立反例](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B01-%E4%B8%A4%E4%B8%A4%E7%8B%AC%E7%AB%8B%E4%B8%8E%E7%9B%B8%E4%BA%92%E7%8B%AC%E7%AB%8B%E5%8F%8D%E4%BE%8B)
- [1-6review · 多射手至少命中及种子恰一出苗](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B02-%E5%A4%9A%E5%B0%84%E6%89%8B%E8%87%B3%E5%B0%91%E5%91%BD%E4%B8%AD%E5%8F%8A%E7%A7%8D%E5%AD%90%E6%81%B0%E4%B8%80%E5%87%BA%E8%8B%97)
- [1-6review · 两次试验各出现不同指定和](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B04-%E4%B8%A4%E6%AC%A1%E8%AF%95%E9%AA%8C%E5%90%84%E5%87%BA%E7%8E%B0%E4%B8%8D%E5%90%8C%E6%8C%87%E5%AE%9A%E5%92%8C)
- [1-6review · 考研思考题：独立条件与条件概率联立](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B06-%E8%80%83%E7%A0%94%E6%80%9D%E8%80%83%E9%A2%98%E7%8B%AC%E7%AB%8B%E6%9D%A1%E4%BB%B6%E4%B8%8E%E6%9D%A1%E4%BB%B6%E6%A6%82%E7%8E%87%E8%81%94%E7%AB%8B)
- [1-6review · 串并联与桥式可靠性](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B11-%E4%B8%B2%E5%B9%B6%E8%81%94%E4%B8%8E%E6%A1%A5%E5%BC%8F%E5%8F%AF%E9%9D%A0%E6%80%A7)
- [2-2离散型随机变量review · 两个人命中次数的比较](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B04-%E4%B8%A4%E4%B8%AA%E4%BA%BA%E5%91%BD%E4%B8%AD%E6%AC%A1%E6%95%B0%E7%9A%84%E6%AF%94%E8%BE%83)
