---
title: R13 独立重复试验与至少一次
date: '2026-10-16T17:07:07.021217+00:00'
lastmod: '2026-10-16T17:07:07.021217+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/0f5dc8ebf244204a/index.md
- notes/obsidian/1908780ea766a34a/index.md
- notes/obsidian/434279b5a684ce01/index.md
- notes/obsidian/51b2f723cc621afb/index.md
- notes/obsidian/568d3edc42a57ff7/index.md
- notes/obsidian/5742a76210edd3ab/index.md
- notes/obsidian/6aadc038130fe19b/index.md
- notes/obsidian/b6cadfdd889e25b0/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/e1c777437b6403c4/index.md
- notes/obsidian/e753433a0de5fba5/index.md
- notes/obsidian/f3732cf365957480/index.md
- notes/obsidian/feed334eee9899c6/index.md
obsidian: true
note_course: 概率论
---

# 独立重复试验与至少一次

> [!tip] 做题入口
> 先检查独立、同概率，再把“至少一次”转成补事件。

## 详细讲解：从理解到列式

### 图解：模型选择

![模型选择](/my-web/notes-media/asset-1568cd435133f722.svg)

在套公式前检查试验次数、独立性、放回条件及所记录的变量。 图为本库补充示意，不替代原题中的几何与方向。

### 两个假设要分别检查

独立重复试验要求每次结果独立，而且目标事件每次发生概率相同为 p。“重复做同一件事”在现实中不自动满足独立；不放回抽样、学习效应和设备状态变化都可能破坏条件。

### 至少一次为什么常用对立事件

n次中“至少一次发生”的对立事件是“n次均不发生”。单次不发生概率 $1-p$，独立性让它们相乘：

$$
P(\text{至少一次})=1-(1-p)^n.
$$

恰一次则要选发生的位置，$\binom n1p(1-p)^{n-1}$。n p 只在 p 小且 n p 也不大时可近似至少一次概率，精确值仍应优先计算。

若各次独立但概率为 $p_i$，公式改为 $1-\prod(1-p_i)$；若不独立，则连这个乘积也不能直接写。解题先写“不发生”的事件，再说明为何各项能乘，这能把事件翻译错误与独立性错误分开定位。

### 学习顺序

先读：[事件独立与互斥的区别](/my-web/notes/obsidian/0f5dc8ebf244204a/)。

再用到：[二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/)、[几何分布与首次成功](/my-web/notes/obsidian/b6cadfdd889e25b0/)、[频率与概率的区别](/my-web/notes/obsidian/6aadc038130fe19b/)。

[在学习地图中定位本节](/my-web/notes/?map=R13#notes-graph-heading)

## 前提与后续关系

**先确认：** [事件运算与德摩根律](/my-web/notes/obsidian/f3732cf365957480/)、[乘法公式与概率树](/my-web/notes/obsidian/e753433a0de5fba5/)、[两两独立与相互独立](/my-web/notes/obsidian/feed334eee9899c6/)

**继续用于：** [二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/)、[几何分布与首次成功](/my-web/notes/obsidian/b6cadfdd889e25b0/)

## 定义与前提

$n$ 次伯努利试验，每次只有成功/失败两类，成功概率恒为 $p$，各次相互独立。独立意味着任意固定成功失败序列的概率可按单次概率相乘；同概率是额外条件。

## 推导

全部失败的概率 $P(0\text{次成功})=(1-p)^n$，因此

$$
P(\text{至少一次成功})=1-(1-p)^n.
$$

若仅各次独立而成功率为 $p_i$，则改成 $1-\prod_i(1-p_i)$；若不独立，乘积一般不能用。

## 补充例题｜需要试多少次

**题目：** 每次独立成功率0.2，要使至少一次成功概率不低于0.95，最少试多少次？

1. $1-0.8^n\ge0.95$，即 $0.8^n\le0.05$。
2. $n\ln0.8\le\ln0.05$。因 $\ln0.8<0$，除法时不等号反向。
3. $n\ge\ln0.05/\ln0.8\approx13.425$，所以最小整数为14。
4. 回代 $n=13$ 不够，$n=14$ 达标，检查取整方向。

## 易错与边界

不放回抽样通常使成功概率随历史变化，也破坏独立，不能套固定 $p$。极端 $p=0,1$ 应直接判断，不强行取对数。

## 回想任务

只说每次成功率都等于 $p$，足够推出 $(1-p)^n$ 吗？还缺什么？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第12页至第15页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图07 · IMG20261015233153](/my-web/notes-media/asset-dc2a791caa17adab.webp)。
- [课堂笔记图09 · IMG20261015233209](/my-web/notes-media/asset-d4ce49193720f5d6.webp)。
- [课堂笔记图10 · IMG20261015233220](/my-web/notes-media/asset-360193899957a556.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233153](/my-web/notes-media/asset-dc2a791caa17adab.webp)

## 关联与返回

[事件运算与德摩根律](/my-web/notes/obsidian/f3732cf365957480/)、[事件独立与互斥的区别](/my-web/notes/obsidian/0f5dc8ebf244204a/)、[两两独立与相互独立](/my-web/notes/obsidian/feed334eee9899c6/)、[二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/)、[几何分布与首次成功](/my-web/notes/obsidian/b6cadfdd889e25b0/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [维修人员分组与合用：二项模型比较](/my-web/notes/obsidian/e1c777437b6403c4/) · 综合
- [指数等待转为二项离开次数](/my-web/notes/obsidian/568d3edc42a57ff7/) · 进阶

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-4review · 投币恰好一次与至少一次](/my-web/notes/obsidian/5742a76210edd3ab/#%E9%A2%98%E5%9E%8B05-%E6%8A%95%E5%B8%81%E6%81%B0%E5%A5%BD%E4%B8%80%E6%AC%A1%E4%B8%8E%E8%87%B3%E5%B0%91%E4%B8%80%E6%AC%A1)
- [1-4review · 生日问题与两天接待的小概率判断](/my-web/notes/obsidian/5742a76210edd3ab/#%E9%A2%98%E5%9E%8B07-%E7%94%9F%E6%97%A5%E9%97%AE%E9%A2%98%E4%B8%8E%E4%B8%A4%E5%A4%A9%E6%8E%A5%E5%BE%85%E7%9A%84%E5%B0%8F%E6%A6%82%E7%8E%87%E5%88%A4%E6%96%AD)
- [1-6review · 多射手至少命中及种子恰一出苗](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B02-%E5%A4%9A%E5%B0%84%E6%89%8B%E8%87%B3%E5%B0%91%E5%91%BD%E4%B8%AD%E5%8F%8A%E7%A7%8D%E5%AD%90%E6%81%B0%E4%B8%80%E5%87%BA%E8%8B%97)
- [1-6review · 给定目标进入射程后的重复射击](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B09-%E7%BB%99%E5%AE%9A%E7%9B%AE%E6%A0%87%E8%BF%9B%E5%85%A5%E5%B0%84%E7%A8%8B%E5%90%8E%E7%9A%84%E9%87%8D%E5%A4%8D%E5%B0%84%E5%87%BB)
- [2-4review、 · 指数寿命条件存活与银行等待](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B06-%E6%8C%87%E6%95%B0%E5%AF%BF%E5%91%BD%E6%9D%A1%E4%BB%B6%E5%AD%98%E6%B4%BB%E4%B8%8E%E9%93%B6%E8%A1%8C%E7%AD%89%E5%BE%85)
