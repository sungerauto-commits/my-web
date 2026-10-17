---
title: R17 二项分布的组合推导
date: '2026-10-16T17:07:07.025730+00:00'
lastmod: '2026-10-16T17:07:07.025730+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/14237494eef12363/index.md
- notes/obsidian/16327b65ee8a93ba/index.md
- notes/obsidian/31e82cf4de0ca98b/index.md
- notes/obsidian/398e913b88e52dfe/index.md
- notes/obsidian/51b2f723cc621afb/index.md
- notes/obsidian/53b46e5bee6faeba/index.md
- notes/obsidian/568d3edc42a57ff7/index.md
- notes/obsidian/5742a76210edd3ab/index.md
- notes/obsidian/6f86eb85a87811f3/index.md
- notes/obsidian/c166658f0594b5a0/index.md
- notes/obsidian/c45a43c99adf4894/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/cf5d3585e7466d15/index.md
- notes/obsidian/de722626a523925c/index.md
- notes/obsidian/e1c777437b6403c4/index.md
- notes/obsidian/f90f2e4ddd7a9d01/index.md
obsidian: true
note_course: 概率论
---

# 二项分布的组合推导

> [!tip] 做题入口
> 固定n次独立同概率试验，统计成功次数。

## 详细讲解：从理解到列式

### 图解：模型选择

![模型选择](/my-web/notes-media/asset-1568cd435133f722.svg)

在套公式前检查试验次数、独立性、放回条件及所记录的变量。 图为本库补充示意，不替代原题中的几何与方向。

### 二项分布同时需要固定次数、独立和相同概率

进行 n 次0—1试验，X记录成功次数。某个指定顺序恰有 k 次成功，其概率由独立性得到 $p^k(1-p)^{n-k}$。成功位置可在 n 个位置中选 k 个，共 $\binom nk$ 个互斥顺序，故

$$
P(X=k)=\binom nkp^k(1-p)^{n-k},\quad k=0,\ldots,n.
$$

组合系数来自不同成功位置，不能因为各次独立就省略。

### 读题时先用一句话定义成功

“不及时维修”可能是“至少四台同时故障”，不等于单次成功；先用二项变量记录故障台数，再对它取尾事件。至少 k 为 $1-\sum_{j=0}^{k-1}P(X=j)$；至多 k 为 $\sum_{j=0}^kP(X=j)$。截点差1经常是错误来源。

不放回且有限总体的样本相关，不能直接套二项；总体很大、抽样比例很小时可作近似，但应说明。每次成功率不同则是另一分布，不能仅用平均成功率就声称精确二项。

### 学习顺序

先读：[古典概型与组合计数](/my-web/notes/obsidian/cf5d3585e7466d15/)、[独立重复试验与至少一次](/my-web/notes/obsidian/6f86eb85a87811f3/)、[0—1分布与指示变量](/my-web/notes/obsidian/31e82cf4de0ca98b/)。

再用到：[二项到泊松的极限推导](/my-web/notes/obsidian/c45a43c99adf4894/)、[泊松计数的独立筛选](/my-web/notes/obsidian/53b46e5bee6faeba/)、[二项分布的正态近似与连续性修正](/my-web/notes/obsidian/16327b65ee8a93ba/)。

[在学习地图中定位本节](/my-web/notes/?map=R17#notes-graph-heading)

## 前提与后续关系

**先确认：** [古典概型与组合计数](/my-web/notes/obsidian/cf5d3585e7466d15/)、[独立重复试验与至少一次](/my-web/notes/obsidian/6f86eb85a87811f3/)、[离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/)

**继续用于：** [二项到泊松的极限推导](/my-web/notes/obsidian/c45a43c99adf4894/)、[泊松计数的独立筛选](/my-web/notes/obsidian/53b46e5bee6faeba/)、[二项分布的正态近似与连续性修正](/my-web/notes/obsidian/16327b65ee8a93ba/)

## 模型与前提

$X\sim\operatorname{Bin}(n,p)$：固定试验次数 $n$，各次相互独立，成功率相同，$X$ 统计成功次数。支持集 $k=0,\ldots,n$。

## 逐步推导

1. 某个固定的成功位置组合，例如前 $k$ 次成功、其余失败，其概率为 $p^k(1-p)^{n-k}$。
2. 成功的 $k$ 个位置共有 $\binom nk$ 种。
3. 不同位置组合对应互斥的完整序列，所以相加：
   $$
   P(X=k)=\binom nkp^k(1-p)^{n-k}.
   $$


4. 用二项式定理 $\sum_{k=0}^n\binom nkp^k(1-p)^{n-k}=[p+(1-p)]^n=1$ 核验归一性。

## 课件原题｜10人服药至少8人有效

**题目：** 单人有效率0.75，10人服药，假定反应相互独立且同概率，求至少8人有效（第18页）。

1. $X\sim\operatorname{Bin}(10,0.75)$。
2. 所求 $\sum_{k=8}^{10}\binom{10}{k}0.75^k0.25^{10-k}$。
3. 三项分别对应8、9、10人，求得约 $0.52559$。
4. 这里独立假设必须写明，实际医疗资料不能仅凭总体有效率就保证独立。

## 易错与边界

不放回有限总体抽样用超几何；“直到首次成功才停”用几何。二项公式中的组合数负责位置选择，不能漏掉。

## 回想任务

为什么“恰好两次成功”和“前两次成功、后面都失败”相差一个组合数？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第12页至第18页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图09 · IMG20261015233209](/my-web/notes-media/asset-d4ce49193720f5d6.webp)。
- [课堂笔记图10 · IMG20261015233220](/my-web/notes-media/asset-360193899957a556.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233209](/my-web/notes-media/asset-d4ce49193720f5d6.webp)

> [!example]- 展开查看原题所在课件页
> 2-2离散型随机变量review

## 关联与返回

[古典概型与组合计数](/my-web/notes/obsidian/cf5d3585e7466d15/)、[独立重复试验与至少一次](/my-web/notes/obsidian/6f86eb85a87811f3/)、[离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/)、[0—1分布与指示变量](/my-web/notes/obsidian/31e82cf4de0ca98b/)、[超几何分布与不放回抽样](/my-web/notes/obsidian/c166658f0594b5a0/)、[二项到泊松的极限推导](/my-web/notes/obsidian/c45a43c99adf4894/)、[二项分布的正态近似与连续性修正](/my-web/notes/obsidian/16327b65ee8a93ba/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [维修人员分组与合用：二项模型比较](/my-web/notes/obsidian/e1c777437b6403c4/) · 综合
- [指数等待转为二项离开次数](/my-web/notes/obsidian/568d3edc42a57ff7/) · 进阶
- [两阶段抽检：条件概率与联合概率](/my-web/notes/obsidian/de722626a523925c/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-4review · 指定数字出现次数与骰子点数和](/my-web/notes/obsidian/5742a76210edd3ab/#%E9%A2%98%E5%9E%8B11-%E6%8C%87%E5%AE%9A%E6%95%B0%E5%AD%97%E5%87%BA%E7%8E%B0%E6%AC%A1%E6%95%B0%E4%B8%8E%E9%AA%B0%E5%AD%90%E7%82%B9%E6%95%B0%E5%92%8C)
- [2-1review · 固定射击次数与首次命中次数](/my-web/notes/obsidian/398e913b88e52dfe/#%E9%A2%98%E5%9E%8B02-%E5%9B%BA%E5%AE%9A%E5%B0%84%E5%87%BB%E6%AC%A1%E6%95%B0%E4%B8%8E%E9%A6%96%E6%AC%A1%E5%91%BD%E4%B8%AD%E6%AC%A1%E6%95%B0)
- [2-2离散型随机变量review · 二项恰好次数与尾概率](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B03-%E4%BA%8C%E9%A1%B9%E6%81%B0%E5%A5%BD%E6%AC%A1%E6%95%B0%E4%B8%8E%E5%B0%BE%E6%A6%82%E7%8E%87)
- [2-2离散型随机变量review · 两个人命中次数的比较](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B04-%E4%B8%A4%E4%B8%AA%E4%BA%BA%E5%91%BD%E4%B8%AD%E6%AC%A1%E6%95%B0%E7%9A%84%E6%AF%94%E8%BE%83)
- [2-2离散型随机变量review · 二项尾事件与最可能次数](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B05-%E4%BA%8C%E9%A1%B9%E5%B0%BE%E4%BA%8B%E4%BB%B6%E4%B8%8E%E6%9C%80%E5%8F%AF%E8%83%BD%E6%AC%A1%E6%95%B0)
- [2-2离散型随机变量review · 维修人员最少配置与合用比较](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B07-%E7%BB%B4%E4%BF%AE%E4%BA%BA%E5%91%98%E6%9C%80%E5%B0%91%E9%85%8D%E7%BD%AE%E4%B8%8E%E5%90%88%E7%94%A8%E6%AF%94%E8%BE%83)
- [2-4review、 · 均匀观测转为二项次数](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B05-%E5%9D%87%E5%8C%80%E8%A7%82%E6%B5%8B%E8%BD%AC%E4%B8%BA%E4%BA%8C%E9%A1%B9%E6%AC%A1%E6%95%B0)
- [2-4review、 · 正态单人概率到二项与泊松人数](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B09-%E6%AD%A3%E6%80%81%E5%8D%95%E4%BA%BA%E6%A6%82%E7%8E%87%E5%88%B0%E4%BA%8C%E9%A1%B9%E4%B8%8E%E6%B3%8A%E6%9D%BE%E4%BA%BA%E6%95%B0)
