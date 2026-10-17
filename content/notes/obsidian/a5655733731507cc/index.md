---
title: R07 条件概率
date: '2026-10-16T17:07:07.002165+00:00'
lastmod: '2026-10-16T17:07:07.002165+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/0f5dc8ebf244204a/index.md
- notes/obsidian/2587cd6473932f70/index.md
- notes/obsidian/434279b5a684ce01/index.md
- notes/obsidian/51b2f723cc621afb/index.md
- notes/obsidian/7f9d2b002c3455e4/index.md
- notes/obsidian/911d7fab9131419c/index.md
- notes/obsidian/a45bf361a307c0fc/index.md
- notes/obsidian/acd5040bd40d76c5/index.md
- notes/obsidian/b2eae495d224c2fb/index.md
- notes/obsidian/b7c7668670cc1cc4/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/de722626a523925c/index.md
- notes/obsidian/e753433a0de5fba5/index.md
- notes/obsidian/f3732cf365957480/index.md
obsidian: true
note_course: 概率论
---

# 条件概率

> [!tip] 做题入口
> 已知B发生，就在B内部重新归一化。

## 详细讲解：从理解到列式

### 图解：贝叶斯概率树

![贝叶斯概率树](/my-web/notes-media/asset-3f65eb17323b730b.svg)

一条路径相乘，多条互斥路径相加，观察结果后再归一化。 图为本库补充示意，不替代原题中的几何与方向。

### 给定条件改变的是参照总体

观察到 B 后，不再考虑 $\Omega\setminus B$。A 在剩余总体中占的比例为

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)},\quad P(B)>0.
$$

分子不是 $P(A)$，因为原先 A 中位于 B 外的结果已被条件排除；分母是将 B 内总概率重新归一成1。

### 用具体集合检查“谁给定谁”

在1到10中均匀选整数，A为偶数，B为大于6。交集为8、10，故 $P(A\mid B)=2/4=1/2$；反过来 $P(B\mid A)=2/5$。虽然交集相同，归一化总体不同，两个条件概率一般不同。

若给定 B 后，A 的概率仍为 $P(A)$，才称在该意义下没有更新；这与独立性联系。对于概率为零的连续单点条件，不能直接使用分母为零的比值定义，需要联合密度或条件分布等进一步工具，本阶段不要把 $P(X=x)=0$ 直接带入这个式子相除。

### 学习顺序

先读：[概率公理与基本性质](/my-web/notes/obsidian/b7c7668670cc1cc4/)。

再用到：[乘法公式与概率树](/my-web/notes/obsidian/e753433a0de5fba5/)、[贝叶斯公式与先验更新](/my-web/notes/obsidian/7f9d2b002c3455e4/)、[事件独立与互斥的区别](/my-web/notes/obsidian/0f5dc8ebf244204a/)、[指数无记忆性的推导](/my-web/notes/obsidian/a45bf361a307c0fc/)。

[在学习地图中定位本节](/my-web/notes/?map=R07#notes-graph-heading)

## 前提与后续关系

**先确认：** [事件运算与德摩根律](/my-web/notes/obsidian/f3732cf365957480/)、[概率公理与基本性质](/my-web/notes/obsidian/b7c7668670cc1cc4/)

**继续用于：** [乘法公式与概率树](/my-web/notes/obsidian/e753433a0de5fba5/)、[贝叶斯公式与先验更新](/my-web/notes/obsidian/7f9d2b002c3455e4/)、[事件独立与互斥的区别](/my-web/notes/obsidian/0f5dc8ebf244204a/)、[指数无记忆性的推导](/my-web/notes/obsidian/a45bf361a307c0fc/)

## 定义与前提

$P(A\mid B)=P(A\cap B)/P(B)$，前提 $P(B)>0$。分母表示“已知条件留下的世界”，分子表示在该世界中仍满足 $A$ 的部分。

## 逐步推导

古典模型中，条件 $B$ 把候选结果缩为 $|B|$ 个，其中满足 $A$ 的有 $|A\cap B|$ 个。

$$
\frac{|A\cap B|}{|B|}=\frac{|A\cap B|/|\Omega|}{|B|/|\Omega|}=\frac{P(AB)}{P(B)}.
$$

一般模型用同一归一化定义，对固定 $B$，$P(\cdot\mid B)$ 仍满足概率公理。

## 补充例题｜至少一枚正面

**题目：** 独立公平硬币掷两次，已知至少一次正面，求两次都正面的概率。

1. 原样本为 HH、HT、TH、TT，各1/4。
2. $B=\{HH,HT,TH\}$，$A=\{HH\}$。
3. $P(A\mid B)=(1/4)/(3/4)=1/3$。
4. 若条件改为“第一次是正面”，候选只有 HH、HT，答案变1/2；条件改变就不是同一道题。

## 易错与边界

$P(A\mid B)$ 与 $P(B\mid A)$ 一般不同。$P(B)=0$ 时该初等比值未定义，不能用 $0/0$ 随便给结果；更高级的条件分布需额外定义。

## 回想任务

遇到“已知、在……条件下”，怎样写出分母事件，避免把条件放反？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第2页至第3页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图06 · IMG20261015233149](/my-web/notes-media/asset-6d8cf316a5777d20.webp)。
- [课堂笔记图07 · IMG20261015233153](/my-web/notes-media/asset-dc2a791caa17adab.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233149](/my-web/notes-media/asset-6d8cf316a5777d20.webp)

## 关联与返回

[概率公理与基本性质](/my-web/notes/obsidian/b7c7668670cc1cc4/)、[乘法公式与概率树](/my-web/notes/obsidian/e753433a0de5fba5/)、[全概率公式](/my-web/notes/obsidian/2587cd6473932f70/)、[贝叶斯公式与先验更新](/my-web/notes/obsidian/7f9d2b002c3455e4/)、[事件独立与互斥的区别](/my-web/notes/obsidian/0f5dc8ebf244204a/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [选箱后不放回抽取：贝叶斯更新](/my-web/notes/obsidian/b2eae495d224c2fb/) · 进阶
- [两阶段抽检：条件概率与联合概率](/my-web/notes/obsidian/de722626a523925c/) · 综合
- [黑球返还再添球：停止时间不是几何分布](/my-web/notes/obsidian/911d7fab9131419c/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-5review · 已知存活年龄的条件概率](/my-web/notes/obsidian/acd5040bd40d76c5/#%E9%A2%98%E5%9E%8B01-%E5%B7%B2%E7%9F%A5%E5%AD%98%E6%B4%BB%E5%B9%B4%E9%BE%84%E7%9A%84%E6%9D%A1%E4%BB%B6%E6%A6%82%E7%8E%87)
- [1-5review · 事件代数后计算条件概率](/my-web/notes/obsidian/acd5040bd40d76c5/#%E9%A2%98%E5%9E%8B05-%E4%BA%8B%E4%BB%B6%E4%BB%A3%E6%95%B0%E5%90%8E%E8%AE%A1%E7%AE%97%E6%9D%A1%E4%BB%B6%E6%A6%82%E7%8E%87)
- [1-5review · 缩小样本空间计算条件概率](/my-web/notes/obsidian/acd5040bd40d76c5/#%E9%A2%98%E5%9E%8B08-%E7%BC%A9%E5%B0%8F%E6%A0%B7%E6%9C%AC%E7%A9%BA%E9%97%B4%E8%AE%A1%E7%AE%97%E6%9D%A1%E4%BB%B6%E6%A6%82%E7%8E%87)
- [1-6review · 考研思考题：独立条件与条件概率联立](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B06-%E8%80%83%E7%A0%94%E6%80%9D%E8%80%83%E9%A2%98%E7%8B%AC%E7%AB%8B%E6%9D%A1%E4%BB%B6%E4%B8%8E%E6%9D%A1%E4%BB%B6%E6%A6%82%E7%8E%87%E8%81%94%E7%AB%8B)
- [1-6review · 两次考试相关结果的资格与贝叶斯](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B07-%E4%B8%A4%E6%AC%A1%E8%80%83%E8%AF%95%E7%9B%B8%E5%85%B3%E7%BB%93%E6%9E%9C%E7%9A%84%E8%B5%84%E6%A0%BC%E4%B8%8E%E8%B4%9D%E5%8F%B6%E6%96%AF)
- [1-6review · 选箱且不放回、已知第一次一等品](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B08-%E9%80%89%E7%AE%B1%E4%B8%94%E4%B8%8D%E6%94%BE%E5%9B%9E%E5%B7%B2%E7%9F%A5%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%80%E7%AD%89%E5%93%81)
- [1-6review · 不同地区报名表的来源划分](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B10-%E4%B8%8D%E5%90%8C%E5%9C%B0%E5%8C%BA%E6%8A%A5%E5%90%8D%E8%A1%A8%E7%9A%84%E6%9D%A5%E6%BA%90%E5%88%92%E5%88%86)
- [2-4review、 · 离散条件概率与CDF跳跃复习](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B11-%E7%A6%BB%E6%95%A3%E6%9D%A1%E4%BB%B6%E6%A6%82%E7%8E%87%E4%B8%8Ecdf%E8%B7%B3%E8%B7%83%E5%A4%8D%E4%B9%A0)
