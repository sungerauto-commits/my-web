---
title: R27 指数无记忆性的推导
date: '2026-10-16T17:07:07.065380+00:00'
lastmod: '2026-10-16T17:07:07.065380+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/51b2f723cc621afb/index.md
- notes/obsidian/9ed1c7c2e782ef18/index.md
- notes/obsidian/a5655733731507cc/index.md
- notes/obsidian/b6cadfdd889e25b0/index.md
- notes/obsidian/c2b3c878d1831b06/index.md
- notes/obsidian/cd3e85505394c498/index.md
obsidian: true
note_course: 概率论
---

# 指数无记忆性的推导

> [!tip] 做题入口
> 已等s以后，剩余等待的条件分布与初始相同。

## 详细讲解：从理解到列式

### 图解：次数与等待

![次数与等待](/my-web/notes-media/asset-b177ce0d24f729ee.svg)

固定时窗数次数，与固定事件数等时间，是两种不同变量。 图为本库补充示意，不替代原题中的几何与方向。

### 先把条件事件交集化简

若T为非负等待时间，给定已等s仍未发生，继续至少t的概率是

$$
P(T>s+t\mid T>s)=\frac{P(T>s+t)}{P(T>s)}.
$$

因为 $\{T>s+t\}\subseteq\{T>s\}$，分子交集等于较小事件。对指数尾函数代入，得 $e^{-\lambda(s+t)}/e^{-\lambda s}=e^{-\lambda t}$，与s无关。

### 无记忆的变量是剩余等待，不是总等待

给定 $T>s$ 后，剩余 $T-s$ 与原T同分布；总T显然不再与原T同分布，因为它至少为s。条件期望若学习到这一步，可写 $E(T\mid T>s)=s+1/\lambda$，并非仍为 $1/\lambda$。

一般寿命不具有该性质。均匀寿命 $T\sim U(0,10)$，已活9后再活2的概率为0，刚开始再活2却为0.8。不要因为题目谈“寿命”就套指数无记忆；应先检查分布或明确给出的过程假设。

### 学习顺序

先读：[条件概率](/my-web/notes/obsidian/a5655733731507cc/)、[指数分布与等待时间](/my-web/notes/obsidian/c2b3c878d1831b06/)。

用于练习：[对应课件的题型练习](/my-web/notes/obsidian/9ed1c7c2e782ef18/)。

[在学习地图中定位本节](/my-web/notes/?map=R27#notes-graph-heading)

## 前提与后续关系

**先确认：** [条件概率](/my-web/notes/obsidian/a5655733731507cc/)、[指数分布与等待时间](/my-web/notes/obsidian/c2b3c878d1831b06/)

**继续用于：** 结合下方关联节点做题与复查。

## 定理与前提

若 $T\sim\operatorname{Exp}(\lambda)$，对 $s,t\ge0$：$P(T>s+t\mid T>s)=P(T>t)$。这说的是剩余等待条件分布，不是总寿命被重置，也不是实际时间倒退。

## 逐步推导

由于 $\{T>s+t\}\subseteq\{T>s\}$，

$$
P(T>s+t\mid T>s)=\frac{P(T>s+t)}{P(T>s)}=\frac{e^{-\lambda(s+t)}}{e^{-\lambda s}}=e^{-\lambda t}.
$$

反向理解：若生存函数 $S$ 满足 $S(s+t)=S(s)S(t)$，在适当连续性和非退化条件下，令 $g=-\ln S$ 得可加函数，进而 $g(t)=\lambda t$，因此 $S=e^{-\lambda t}$。条件缺失时不能只凭功能方程随意断言。

## 补充例题

速率0.2/分钟，已等3分钟，继续至少等2分钟的概率为 $e^{-0.4}\approx0.67032$，并非无条件等5分钟的 $e^{-1}$。

## 反例｜均匀等待不无记忆

若 $T\sim U(0,10)$，$P(T>8\mid T>6)=2/4=1/2$，而 $P(T>2)=8/10$，不相等。

## 易错与边界

已知“寿命恰好等于s”是零概率条件事件，不能直接套本章比值；这里条件是 $T>s$。几何分布有对应离散无记忆性，但支持集和不等号要统一。

## 回想任务

用生存函数相除的方式，不背公式推导一次无记忆性。

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第29页至第30页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图15 · IMG20261015233251](/my-web/notes-media/asset-f7562be5f02cb933.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233251](/my-web/notes-media/asset-f7562be5f02cb933.webp)

## 关联与返回

[条件概率](/my-web/notes/obsidian/a5655733731507cc/)、[几何分布与首次成功](/my-web/notes/obsidian/b6cadfdd889e25b0/)、[指数分布与等待时间](/my-web/notes/obsidian/c2b3c878d1831b06/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [2-4review、 · 指数寿命条件存活与银行等待](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B06-%E6%8C%87%E6%95%B0%E5%AF%BF%E5%91%BD%E6%9D%A1%E4%BB%B6%E5%AD%98%E6%B4%BB%E4%B8%8E%E9%93%B6%E8%A1%8C%E7%AD%89%E5%BE%85)
