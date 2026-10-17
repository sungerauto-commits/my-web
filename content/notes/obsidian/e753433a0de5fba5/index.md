---
title: R08 乘法公式与概率树
date: '2026-10-16T17:07:07.003165+00:00'
lastmod: '2026-10-16T17:07:07.003165+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/0f5dc8ebf244204a/index.md
- notes/obsidian/14237494eef12363/index.md
- notes/obsidian/2587cd6473932f70/index.md
- notes/obsidian/434279b5a684ce01/index.md
- notes/obsidian/5742a76210edd3ab/index.md
- notes/obsidian/6f86eb85a87811f3/index.md
- notes/obsidian/72752b2f2f01ad82/index.md
- notes/obsidian/7f9d2b002c3455e4/index.md
- notes/obsidian/911d7fab9131419c/index.md
- notes/obsidian/a5655733731507cc/index.md
- notes/obsidian/acd5040bd40d76c5/index.md
- notes/obsidian/b2eae495d224c2fb/index.md
- notes/obsidian/b6cadfdd889e25b0/index.md
- notes/obsidian/c166658f0594b5a0/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/cf5d3585e7466d15/index.md
- notes/obsidian/de722626a523925c/index.md
obsidian: true
note_course: 概率论
---

# 乘法公式与概率树

> [!tip] 做题入口
> 多步骤同时成功，把每一步在此前历史下的概率相乘。

## 详细讲解：从理解到列式

### 图解：贝叶斯概率树

![贝叶斯概率树](/my-web/notes-media/asset-3f65eb17323b730b.svg)

一条路径相乘，多条互斥路径相加，观察结果后再归一化。 图为本库补充示意，不替代原题中的几何与方向。

### 乘法公式只是条件概率的移项

由条件概率定义得到 $P(A\cap B)=P(A)P(B\mid A)$。三个事件继续拆：

$$
P(ABC)=P(A)P(B\mid A)P(C\mid AB).
$$

每一步的条件都包含“之前这条路径已发生的全部信息”。只有独立时，才可把条件概率替换成对应边缘概率。

### 概率树的读法

从根走到叶的一条路径要乘；若目标事件由多条互斥叶路径构成，再把路径概率相加。每个分叉节点的所有分支概率应和为1，但同一层不同节点的分支概率未必相同。例如不放回抽样，在第一件是次品与第一件是正品的节点，第二件次品概率不同。

停时或抽检问题先画流程，明确何时终止，再写路径乘积。不要把题目中尚未实际执行的第二次检验，当作每件产品都一定经历；它只出现在需要复检的分支。ER06 展示了“进入复检且复检通过”的乘法结构。

### 学习顺序

先读：[条件概率](/my-web/notes/obsidian/a5655733731507cc/)。

再用到：[全概率公式](/my-web/notes/obsidian/2587cd6473932f70/)、[事件独立与互斥的区别](/my-web/notes/obsidian/0f5dc8ebf244204a/)。

[在学习地图中定位本节](/my-web/notes/?map=R08#notes-graph-heading)

## 前提与后续关系

**先确认：** [条件概率](/my-web/notes/obsidian/a5655733731507cc/)

**继续用于：** [全概率公式](/my-web/notes/obsidian/2587cd6473932f70/)、[贝叶斯公式与先验更新](/my-web/notes/obsidian/7f9d2b002c3455e4/)、[事件独立与互斥的区别](/my-web/notes/obsidian/0f5dc8ebf244204a/)、[独立重复试验与至少一次](/my-web/notes/obsidian/6f86eb85a87811f3/)、[超几何分布与不放回抽样](/my-web/notes/obsidian/c166658f0594b5a0/)、[几何分布与首次成功](/my-web/notes/obsidian/b6cadfdd889e25b0/)

## 定理与前提

$P(AB)=P(A)P(B\mid A)$，其中 $P(A)>0$。多个事件的链式乘法为

$$
P(A_1\cdots A_n)=P(A_1)\prod_{j=2}^nP(A_j\mid A_1\cdots A_{j-1}),
$$

条件事件概率需为正。若某个前缀已经不可能，整条路径概率为零，可直接终止，不再强行定义后续条件比值。

## 逐步推导

从条件定义 $P(B\mid A)=P(AB)/P(A)$ 变形得两事件乘法。再把 $A_1A_2$ 当一个事件，对 $A_3$ 应用同式，逐次展开。

## 补充例题｜不放回连续抽取

**题目：** 盒中3红2白，连续不放回抽2球，求先红后白。

1. 首次红的概率 $3/5$。
2. 已经抽出红后剩2红2白，第二次白的条件概率 $2/4$。
3. 路径概率 $(3/5)(2/4)=3/10$。
4. 若求“一红一白而不计顺序”，再加白→红路径 $(2/5)(3/4)=3/10$，总计3/5。

## 易错与边界

乘法公式不要求独立；独立只是在条件概率可替换为原概率时提供简化。树的同一条路径上相乘，互斥终点路径之间相加。

## 回想任务

不放回抽球为什么不能直接把两次各自首次抽取的概率相乘？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第4页至第12页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图06 · IMG20261015233149](/my-web/notes-media/asset-6d8cf316a5777d20.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233149](/my-web/notes-media/asset-6d8cf316a5777d20.webp)

## 关联与返回

[古典概型与组合计数](/my-web/notes/obsidian/cf5d3585e7466d15/)、[条件概率](/my-web/notes/obsidian/a5655733731507cc/)、[全概率公式](/my-web/notes/obsidian/2587cd6473932f70/)、[独立重复试验与至少一次](/my-web/notes/obsidian/6f86eb85a87811f3/)、[超几何分布与不放回抽样](/my-web/notes/obsidian/c166658f0594b5a0/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [选箱后不放回抽取：贝叶斯更新](/my-web/notes/obsidian/b2eae495d224c2fb/) · 进阶
- [桥式系统可靠性：对桥臂分情况](/my-web/notes/obsidian/72752b2f2f01ad82/) · 综合
- [两阶段抽检：条件概率与联合概率](/my-web/notes/obsidian/de722626a523925c/) · 综合
- [黑球返还再添球：停止时间不是几何分布](/my-web/notes/obsidian/911d7fab9131419c/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-4review · 有放回与不放回摸球](/my-web/notes/obsidian/5742a76210edd3ab/#%E9%A2%98%E5%9E%8B01-%E6%9C%89%E6%94%BE%E5%9B%9E%E4%B8%8E%E4%B8%8D%E6%94%BE%E5%9B%9E%E6%91%B8%E7%90%83)
- [1-5review · 抽样方式与条件乘法](/my-web/notes/obsidian/acd5040bd40d76c5/#%E9%A2%98%E5%9E%8B02-%E6%8A%BD%E6%A0%B7%E6%96%B9%E5%BC%8F%E4%B8%8E%E6%9D%A1%E4%BB%B6%E4%B9%98%E6%B3%95)
- [1-5review · 转箱后再抽球的全概率](/my-web/notes/obsidian/acd5040bd40d76c5/#%E9%A2%98%E5%9E%8B03-%E8%BD%AC%E7%AE%B1%E5%90%8E%E5%86%8D%E6%8A%BD%E7%90%83%E7%9A%84%E5%85%A8%E6%A6%82%E7%8E%87)
- [1-5review · 添球与逐次损坏的历史依赖](/my-web/notes/obsidian/acd5040bd40d76c5/#%E9%A2%98%E5%9E%8B04-%E6%B7%BB%E7%90%83%E4%B8%8E%E9%80%90%E6%AC%A1%E6%8D%9F%E5%9D%8F%E7%9A%84%E5%8E%86%E5%8F%B2%E4%BE%9D%E8%B5%96)
- [1-6review · 命中人数影响击落概率的两层模型](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B03-%E5%91%BD%E4%B8%AD%E4%BA%BA%E6%95%B0%E5%BD%B1%E5%93%8D%E5%87%BB%E8%90%BD%E6%A6%82%E7%8E%87%E7%9A%84%E4%B8%A4%E5%B1%82%E6%A8%A1%E5%9E%8B)
- [2-2离散型随机变量review · 首次正品：三种放回机制](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B09-%E9%A6%96%E6%AC%A1%E6%AD%A3%E5%93%81%E4%B8%89%E7%A7%8D%E6%94%BE%E5%9B%9E%E6%9C%BA%E5%88%B6)
