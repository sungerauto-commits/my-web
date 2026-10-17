---
title: R04 加法公式与容斥
date: '2026-10-16T17:07:06.998169+00:00'
lastmod: '2026-10-16T17:07:06.998169+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/434279b5a684ce01/index.md
- notes/obsidian/5742a76210edd3ab/index.md
- notes/obsidian/6f86eb85a87811f3/index.md
- notes/obsidian/72752b2f2f01ad82/index.md
- notes/obsidian/87e6d6e74caa8b2b/index.md
- notes/obsidian/acd5040bd40d76c5/index.md
- notes/obsidian/b7c7668670cc1cc4/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/de722626a523925c/index.md
- notes/obsidian/f3732cf365957480/index.md
obsidian: true
note_course: 概率论
---

# 加法公式与容斥

> [!tip] 做题入口
> 重叠部分多算一次，就减一次；三集合要再补回来。

## 详细讲解：从理解到列式

### 图解：事件集合

![事件集合](/my-web/notes-media/asset-7fe7d7ba512fdb4b.svg)

看重叠理解计数；能否独立还要检验概率关系。 图为本库补充示意，不替代原题中的几何与方向。

### 重叠部分为什么减一次

把 $A\cup B$ 拆成互斥的 $A\setminus B$、$A\cap B$、$B\setminus A$。$P(A)+P(B)$ 将中间交集算了两次，故

$$
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$

只有互斥时交集概率为零，才可直接相加；独立不意味着交集为零，反而常有 $P(A\cap B)=P(A)P(B)>0$。

### 三个事件的容斥

先减掉三个两两交集，三者共同交集原先被加三次、又减三次，变成零次，需再加回来：$P(A\cup B\cup C)=\sum P(A)-\sum P(A\cap B)+P(A\cap B\cap C)$。用“某个结果最终被数几次”理解正负号，比机械背长式可靠。

若直接算“至少一种故障”涉及很多交集，可试 $1-P(\text{全部正常})$。但对立事件只是简化事件表达，计算“全部正常”时仍需用题设的联合关系。

### 学习顺序

先读：[事件运算与德摩根律](/my-web/notes/obsidian/f3732cf365957480/)、[概率公理与基本性质](/my-web/notes/obsidian/b7c7668670cc1cc4/)。

用于练习：[ER03 桥式系统可靠性：对桥臂分情况](/my-web/notes/obsidian/72752b2f2f01ad82/)、[ER06 两阶段抽检：条件概率与联合概率](/my-web/notes/obsidian/de722626a523925c/)。

[在学习地图中定位本节](/my-web/notes/?map=R04#notes-graph-heading)

## 前提与后续关系

**先确认：** [事件运算与德摩根律](/my-web/notes/obsidian/f3732cf365957480/)、[概率公理与基本性质](/my-web/notes/obsidian/b7c7668670cc1cc4/)

**继续用于：** 结合下方关联节点做题与复查。

## 定理与前提

任意两事件 $P(A\cup B)=P(A)+P(B)-P(A\cap B)$；互斥时交集概率为零，才变成直接相加。

## 逐步推导

$A\cup B=A\cup(B\setminus A)$ 是互斥并；而 $B=(B\setminus A)\cup(A\cap B)$，故

$$
P(A\cup B)=P(A)+P(B\setminus A)=P(A)+P(B)-P(A\cap B).
$$

三事件展开为

$$
P(A\cup B\cup C)=P(A)+P(B)+P(C)-P(AB)-P(AC)-P(BC)+P(ABC).
$$

位于三者交集的样本点被加3次、减3次，最后需加1次，计数才正确。

## 补充例题｜至少一件发生

**题目：** $P(A)=0.6,P(B)=0.5,P(AB)=0.3$。

1. 至少一件发生：$P(A\cup B)=0.6+0.5-0.3=0.8$。
2. 恰好一件：$P(A\setminus B)+P(B\setminus A)=0.3+0.2=0.5$。
3. 都不发生：$1-0.8=0.2$。
4. 检查四个互斥区块 $AB,A B^c,A^c B,A^cB^c$ 的概率总和为1。

## 易错与边界

布尔事件的“或”通常包括同时发生。“恰好一件”与“至少一件”差一个交集。

## 回想任务

为何“恰好一件”概率是 $P(A)+P(B)-2P(AB)$？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第10页至第15页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图04 · IMG20261015233122](/my-web/notes-media/asset-c30416d27b4505ca.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233122](/my-web/notes-media/asset-c30416d27b4505ca.webp)

## 关联与返回

[事件运算与德摩根律](/my-web/notes/obsidian/f3732cf365957480/)、[概率公理与基本性质](/my-web/notes/obsidian/b7c7668670cc1cc4/)、[独立重复试验与至少一次](/my-web/notes/obsidian/6f86eb85a87811f3/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [桥式系统可靠性：对桥臂分情况](/my-web/notes/obsidian/72752b2f2f01ad82/) · 综合
- [两阶段抽检：条件概率与联合概率](/my-web/notes/obsidian/de722626a523925c/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-3review · 互斥、包含和交事件概率计算](/my-web/notes/obsidian/87e6d6e74caa8b2b/#%E9%A2%98%E5%9E%8B02-%E4%BA%92%E6%96%A5%E5%8C%85%E5%90%AB%E5%92%8C%E4%BA%A4%E4%BA%8B%E4%BB%B6%E6%A6%82%E7%8E%87%E8%AE%A1%E7%AE%97)
- [1-4review · 整除限制与容斥](/my-web/notes/obsidian/5742a76210edd3ab/#%E9%A2%98%E5%9E%8B04-%E6%95%B4%E9%99%A4%E9%99%90%E5%88%B6%E4%B8%8E%E5%AE%B9%E6%96%A5)
- [1-4review · 抽鞋至少有一对](/my-web/notes/obsidian/5742a76210edd3ab/#%E9%A2%98%E5%9E%8B10-%E6%8A%BD%E9%9E%8B%E8%87%B3%E5%B0%91%E6%9C%89%E4%B8%80%E5%AF%B9)
- [1-5review · 事件代数后计算条件概率](/my-web/notes/obsidian/acd5040bd40d76c5/#%E9%A2%98%E5%9E%8B05-%E4%BA%8B%E4%BB%B6%E4%BB%A3%E6%95%B0%E5%90%8E%E8%AE%A1%E7%AE%97%E6%9D%A1%E4%BB%B6%E6%A6%82%E7%8E%87)
- [1-6review · 多射手至少命中及种子恰一出苗](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B02-%E5%A4%9A%E5%B0%84%E6%89%8B%E8%87%B3%E5%B0%91%E5%91%BD%E4%B8%AD%E5%8F%8A%E7%A7%8D%E5%AD%90%E6%81%B0%E4%B8%80%E5%87%BA%E8%8B%97)
