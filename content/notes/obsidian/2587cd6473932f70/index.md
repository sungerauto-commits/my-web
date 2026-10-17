---
title: R09 全概率公式
date: '2026-10-16T17:07:07.004168+00:00'
lastmod: '2026-10-16T17:07:07.004168+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/434279b5a684ce01/index.md
- notes/obsidian/51b2f723cc621afb/index.md
- notes/obsidian/53b46e5bee6faeba/index.md
- notes/obsidian/72752b2f2f01ad82/index.md
- notes/obsidian/7f9d2b002c3455e4/index.md
- notes/obsidian/937033040958dfa7/index.md
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

# 全概率公式

> [!tip] 做题入口
> 按互斥且穷尽的原因分类，先条件计算再加权。

## 详细讲解：从理解到列式

### 图解：贝叶斯概率树

![贝叶斯概率树](/my-web/notes-media/asset-3f65eb17323b730b.svg)

一条路径相乘，多条互斥路径相加，观察结果后再归一化。 图为本库补充示意，不替代原题中的几何与方向。

### 全概率是在枚举互斥且完备的原因

若 $B_1,\ldots,B_n$ 两两互斥且并为 $\Omega$，则 A 被分成互斥片段 $A\cap B_i$。先由可加性求和，再对每片使用乘法公式：

$$
P(A)=\sum_iP(A\cap B_i)=\sum_iP(B_i)P(A\mid B_i).
$$

这两个步骤分别依赖划分与条件概率，不要求 $B_i$ 之间“独立”；非零互斥事件反而不能独立。

### 怎样选择一组好原因

工厂问题按机器来源划分，选箱问题按所选箱子划分，可靠性桥式网络可按关键桥臂正常/失效划分。好的划分应使条件下的题目明显更简单。检查两件事：是否可能同时落入两类？是否存在不属于任何一类的结果？

权重是各原因的概率 $P(B_i)$，不是每类内部目标发生率。若甲机器产60%、乙产40%，次品率1%、3%，总次品率为 $0.6\cdot0.01+0.4\cdot0.03$，不能直接平均成2%，除非产量权重恰好相等。

### 学习顺序

先读：[事件运算与德摩根律](/my-web/notes/obsidian/f3732cf365957480/)、[乘法公式与概率树](/my-web/notes/obsidian/e753433a0de5fba5/)。

再用到：[贝叶斯公式与先验更新](/my-web/notes/obsidian/7f9d2b002c3455e4/)。

[在学习地图中定位本节](/my-web/notes/?map=R09#notes-graph-heading)

## 前提与后续关系

**先确认：** [概率公理与基本性质](/my-web/notes/obsidian/b7c7668670cc1cc4/)、[乘法公式与概率树](/my-web/notes/obsidian/e753433a0de5fba5/)

**继续用于：** [贝叶斯公式与先验更新](/my-web/notes/obsidian/7f9d2b002c3455e4/)、[泊松计数的独立筛选](/my-web/notes/obsidian/53b46e5bee6faeba/)

## 定理与前提

$B_1,B_2,\ldots$ 两两互斥、并集为 $\Omega$，且所用的 $P(B_i)>0$，则

$$
P(A)=\sum_iP(B_i)P(A\mid B_i).
$$

零概率类别对总概率贡献为零，可从求和中略去，不需要强行定义 $P(A\mid B_i)$。

## 逐步推导

因为 $A=\bigcup_i(A\cap B_i)$，且这些交集互斥，可列可加给出 $P(A)=\sum_iP(A\cap B_i)$。每一项用乘法公式替换，即得全概率。

## 补充例题｜两台机器的混合产品

**题目：** 甲产60%、乙产40%，次品率分别1%、3%，随机取一件，求次品概率。

1. $B_1$=甲产、$B_2$=乙产，构成划分；$A$=次品。
2. $P(A)=0.6\times0.01+0.4\times0.03=0.018$。
3. 两条次品路径概率分别0.006和0.012，合计1.8%。
4. 直接平均 $(1\%+3\%)/2$ 忽略了产量权重，结果不对。

## 易错与边界

分类必须不重叠也不遗漏。全概率是在未知来源时汇总结果概率；贝叶斯则在结果已知后反推来源。

## 回想任务

如何检查自己选的“分类事件”是否真是一组划分？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第13页至第19页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图04 · IMG20261015233122](/my-web/notes-media/asset-c30416d27b4505ca.webp)。
- [课堂笔记图07 · IMG20261015233153](/my-web/notes-media/asset-dc2a791caa17adab.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233122](/my-web/notes-media/asset-c30416d27b4505ca.webp)

## 关联与返回

[事件运算与德摩根律](/my-web/notes/obsidian/f3732cf365957480/)、[概率公理与基本性质](/my-web/notes/obsidian/b7c7668670cc1cc4/)、[乘法公式与概率树](/my-web/notes/obsidian/e753433a0de5fba5/)、[贝叶斯公式与先验更新](/my-web/notes/obsidian/7f9d2b002c3455e4/)、[泊松计数的独立筛选](/my-web/notes/obsidian/53b46e5bee6faeba/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [选箱后不放回抽取：贝叶斯更新](/my-web/notes/obsidian/b2eae495d224c2fb/) · 进阶
- [桥式系统可靠性：对桥臂分情况](/my-web/notes/obsidian/72752b2f2f01ad82/) · 综合
- [红灯等待：有跳跃的混合分布](/my-web/notes/obsidian/937033040958dfa7/) · 综合
- [两阶段抽检：条件概率与联合概率](/my-web/notes/obsidian/de722626a523925c/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-5review · 转箱后再抽球的全概率](/my-web/notes/obsidian/acd5040bd40d76c5/#%E9%A2%98%E5%9E%8B03-%E8%BD%AC%E7%AE%B1%E5%90%8E%E5%86%8D%E6%8A%BD%E7%90%83%E7%9A%84%E5%85%A8%E6%A6%82%E7%8E%87)
- [1-5review · 工厂来源与随机选箱的加权总体率](/my-web/notes/obsidian/acd5040bd40d76c5/#%E9%A2%98%E5%9E%8B06-%E5%B7%A5%E5%8E%82%E6%9D%A5%E6%BA%90%E4%B8%8E%E9%9A%8F%E6%9C%BA%E9%80%89%E7%AE%B1%E7%9A%84%E5%8A%A0%E6%9D%83%E6%80%BB%E4%BD%93%E7%8E%87)
- [1-6review · 命中人数影响击落概率的两层模型](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B03-%E5%91%BD%E4%B8%AD%E4%BA%BA%E6%95%B0%E5%BD%B1%E5%93%8D%E5%87%BB%E8%90%BD%E6%A6%82%E7%8E%87%E7%9A%84%E4%B8%A4%E5%B1%82%E6%A8%A1%E5%9E%8B)
- [1-6review · 不放回抽样叠加漏检误检](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B05-%E4%B8%8D%E6%94%BE%E5%9B%9E%E6%8A%BD%E6%A0%B7%E5%8F%A0%E5%8A%A0%E6%BC%8F%E6%A3%80%E8%AF%AF%E6%A3%80)
- [1-6review · 考研思考题：独立条件与条件概率联立](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B06-%E8%80%83%E7%A0%94%E6%80%9D%E8%80%83%E9%A2%98%E7%8B%AC%E7%AB%8B%E6%9D%A1%E4%BB%B6%E4%B8%8E%E6%9D%A1%E4%BB%B6%E6%A6%82%E7%8E%87%E8%81%94%E7%AB%8B)
- [1-6review · 两次考试相关结果的资格与贝叶斯](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B07-%E4%B8%A4%E6%AC%A1%E8%80%83%E8%AF%95%E7%9B%B8%E5%85%B3%E7%BB%93%E6%9E%9C%E7%9A%84%E8%B5%84%E6%A0%BC%E4%B8%8E%E8%B4%9D%E5%8F%B6%E6%96%AF)
- [1-6review · 给定目标进入射程后的重复射击](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B09-%E7%BB%99%E5%AE%9A%E7%9B%AE%E6%A0%87%E8%BF%9B%E5%85%A5%E5%B0%84%E7%A8%8B%E5%90%8E%E7%9A%84%E9%87%8D%E5%A4%8D%E5%B0%84%E5%87%BB)
- [1-6review · 不同地区报名表的来源划分](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B10-%E4%B8%8D%E5%90%8C%E5%9C%B0%E5%8C%BA%E6%8A%A5%E5%90%8D%E8%A1%A8%E7%9A%84%E6%9D%A5%E6%BA%90%E5%88%92%E5%88%86)
- [1-6review · 串并联与桥式可靠性](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B11-%E4%B8%B2%E5%B9%B6%E8%81%94%E4%B8%8E%E6%A1%A5%E5%BC%8F%E5%8F%AF%E9%9D%A0%E6%80%A7)
- [2-4review、 · 先抽球再在不相邻区间均匀取数](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B12-%E5%85%88%E6%8A%BD%E7%90%83%E5%86%8D%E5%9C%A8%E4%B8%8D%E7%9B%B8%E9%82%BB%E5%8C%BA%E9%97%B4%E5%9D%87%E5%8C%80%E5%8F%96%E6%95%B0)
