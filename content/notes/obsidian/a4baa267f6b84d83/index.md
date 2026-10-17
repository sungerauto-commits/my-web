---
title: R06 几何概型
date: '2026-10-16T17:07:07.000166+00:00'
lastmod: '2026-10-16T17:07:07.000166+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/221d8beefa5c1b9f/index.md
- notes/obsidian/35c0448e7aeb3994/index.md
- notes/obsidian/51b2f723cc621afb/index.md
- notes/obsidian/52522b56538c6fc4/index.md
- notes/obsidian/5742a76210edd3ab/index.md
- notes/obsidian/89bcb92b5fa2ff2b/index.md
- notes/obsidian/9ed1c7c2e782ef18/index.md
- notes/obsidian/b7c7668670cc1cc4/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/d547d77dd097f5bb/index.md
obsidian: true
note_course: 概率论
---

# 几何概型

> [!tip] 做题入口
> 等可能指相同几何量，不是坐标数字看起来平均。

## 详细讲解：从理解到列式

### 几何比值来自均匀抽样假设

在区域 $\Omega$ 中均匀选点，事件对应子区域 A，才有 $P(A)=\mu(A)/\mu(\Omega)$，其中 $\mu$ 可为长度、面积或体积。题目说“随机”不必然说明在哪一个坐标参数上均匀；不同抽样机制可能给不同概率。

### 二维题先把事件画成区域

例如两人到达时间 $X,Y$ 独立且均匀于 $[0,T]$，样本点落在边长 T 的正方形。能等待 a 时间而相遇等价于 $|X-Y|\le a$。失败区域是两个直角三角形，总面积 $(T-a)^2$，所以 $P(\text{相遇})=1-(T-a)^2/T^2$，适用 $0\le a\le T$。

独立性确保联合密度为常量 $1/T^2$；如果两人的到达时间相关，就不能仅用面积比。连续模型中的边界线面积为零，严格与非严格不等号通常不改变概率，但写事件时仍应按题意标出边界。

### 学习顺序

先读：[概率公理与基本性质](/my-web/notes/obsidian/b7c7668670cc1cc4/)。

用于练习：[对应课件的题型练习](/my-web/notes/obsidian/9ed1c7c2e782ef18/)。

[在学习地图中定位本节](/my-web/notes/?map=R06#notes-graph-heading)

## 前提与后续关系

**先确认：** [样本空间与事件](/my-web/notes/obsidian/52522b56538c6fc4/)、[概率公理与基本性质](/my-web/notes/obsidian/b7c7668670cc1cc4/)

**继续用于：** 结合下方关联节点做题与复查。

## 定义与前提

在有限长度、面积或体积区域 $\Omega$ 内均匀选点，$P(A)=m(A)/m(\Omega)$，其中 $m$ 是对应几何度量。必须明确“均匀”针对什么对象；随机半径和随机圆盘点不是同一个模型。

## 推导与课件例题

**题目：** 半径2m圆盘上面积均匀落点，$R$ 表示离圆心距离（分布函数课件第23—24页）。

1. $R\le r$ 对应半径 $r$ 的同心圆盘。
2. $0\le r\le2$ 时 $P(R\le r)=\pi r^2/(4\pi)=r^2/4$。
3. 因此 $F_R(r)=0$（$r<0$）、$r^2/4$（$0\le r\le2$）、1（$r>2$）。
4. $f_R(r)=r/2$（$0<r<2$），不是均匀半径密度 $1/2$。
5. $P(R\le1)=1/4$，外半径带覆盖面积更大，所以半径取值偏向外部。

## 解题步骤

先画样本区域，再把事件翻译成子区域；最后确认长度/面积/体积口径一致。

## 易错与边界

无穷区域不能直接用“均匀概率=面积比”的同一有限模型。连续随机点落到某个给定单点的概率为零，不代表该点不在样本空间。

## 回想任务

圆盘内均匀选点时，落在 $1<R\le2$ 的概率为什么是3/4，而不是1/2？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第23页至第24页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图06 · IMG20261015233149](/my-web/notes-media/asset-6d8cf316a5777d20.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233149](/my-web/notes-media/asset-6d8cf316a5777d20.webp)

## 关联与返回

[样本空间与事件](/my-web/notes/obsidian/52522b56538c6fc4/)、[分布函数及右连续性](/my-web/notes/obsidian/89bcb92b5fa2ff2b/)、[概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/)、[连续均匀分布](/my-web/notes/obsidian/d547d77dd097f5bb/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-4review · 两人会面与同乘公共汽车](/my-web/notes/obsidian/5742a76210edd3ab/#%E9%A2%98%E5%9E%8B08-%E4%B8%A4%E4%BA%BA%E4%BC%9A%E9%9D%A2%E4%B8%8E%E5%90%8C%E4%B9%98%E5%85%AC%E5%85%B1%E6%B1%BD%E8%BD%A6)
- [1-4review · 三角形区域内均匀落点](/my-web/notes/obsidian/5742a76210edd3ab/#%E9%A2%98%E5%9E%8B09-%E4%B8%89%E8%A7%92%E5%BD%A2%E5%8C%BA%E5%9F%9F%E5%86%85%E5%9D%87%E5%8C%80%E8%90%BD%E7%82%B9)
- [2-3随机变量的分布函数review · 均匀圆盘落点的半径分布](/my-web/notes/obsidian/221d8beefa5c1b9f/#%E9%A2%98%E5%9E%8B05-%E5%9D%87%E5%8C%80%E5%9C%86%E7%9B%98%E8%90%BD%E7%82%B9%E7%9A%84%E5%8D%8A%E5%BE%84%E5%88%86%E5%B8%83)
- [2-4review、 · 均匀变量的区间概率与方程实根](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B04-%E5%9D%87%E5%8C%80%E5%8F%98%E9%87%8F%E7%9A%84%E5%8C%BA%E9%97%B4%E6%A6%82%E7%8E%87%E4%B8%8E%E6%96%B9%E7%A8%8B%E5%AE%9E%E6%A0%B9)
