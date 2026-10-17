---
title: ER02 维修人员分组与合用：二项模型比较
date: '2026-10-16T11:46:17.182117+00:00'
lastmod: '2026-10-16T11:46:17.182117+00:00'
draft: false
description: ''
tags:
- 原题精解
- 概率论
note_links:
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/0f5dc8ebf244204a/index.md
- notes/obsidian/1908780ea766a34a/index.md
- notes/obsidian/6f86eb85a87811f3/index.md
- notes/obsidian/9fa6b6113ecaf1aa/index.md
- notes/obsidian/c45a43c99adf4894/index.md
- notes/obsidian/cd3e85505394c498/index.md
obsidian: true
note_course: 概率论
---

# 维修人员分组与合用：二项模型比较

## 原题与配图

![ER02-1](/my-web/notes-media/asset-8a3506aec089fe48.webp)

**PPT 2-2 第33页，例4 · 综合**

80 台同类型设备相互独立，每台发生故障的概率为 $0.01$，一台故障能由一人处理。方案一：4 人，每人负责 20 台；方案二：3 人共同维护 80 台。比较故障不能及时维修的概率。

## 解题思路

先把“忙不过来”翻译为事件。分组方案是任一组同时坏至少 2 台；合用方案是全体同时坏至少 4 台。两种方案阈值不同，不能只比较人数。

## 逐步解答

### 1. 分组维护：先求每组能应付的概率

令 $X_i\sim B(20,0.01)$。设备独立且分组不交，四个计数也独立。

$$
a=P(X_i\le1)=0.99^{20}+\binom{20}{1}0.01\,0.99^{19}.
$$

全系统能及时维修要求四组都不超过一台故障，因此

$$
\boxed{P_1=1-a^4\approx0.06575.}
$$

### 2. 合用维护：以总故障数建模

令 $X\sim B(80,0.01)$，3 人能应付 $X\le3$。

$$
\boxed{P_2=1-\sum_{k=0}^{3}\binom{80}{k}0.01^k0.99^{80-k}\approx0.00866.}
$$

### 3. 解释差别

分组方案中，即使总共只坏 2 台，只要都在同一组也会来不及；合用方案可以调配人员。按题设的同一时刻故障模型，3 人合用的不足概率更小。

### 4. 泊松近似（对照，不替代精确值）

每组参数 $20\times0.01=0.2$，总参数 $80\times0.01=0.8$。

$$
P_1\approx1-[e^{-0.2}(1+0.2)]^4\approx0.06827,
$$

$$
P_2\approx1-e^{-0.8}\left(1+0.8+\frac{0.8^2}{2}+\frac{0.8^3}{6}\right)\approx0.00908.
$$

近似保持比较结论，但精确计算保留二项分布。

## 结果自检

直接枚举二项概率项，和均在 $[0,1]$。四组“来不及”的概率不能直接相加，因为它们可以同时发生；$1-a^4$ 已正确计入重叠。

## 易错点

这里比较的是题设的同时故障事件，不是含维修时间与排队过程的长期服务模型。不能把第一种也简单写成 $P(B(80,0.01)>4)$。

## 对应知识点

[事件独立与互斥的区别](/my-web/notes/obsidian/0f5dc8ebf244204a/) · [独立重复试验与至少一次](/my-web/notes/obsidian/6f86eb85a87811f3/) · [二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/) · [泊松分布与计数参数](/my-web/notes/obsidian/9fa6b6113ecaf1aa/) · [二项到泊松的极限推导](/my-web/notes/obsidian/c45a43c99adf4894/)

## 原始出处

概率论 PPT 2-2 PDF第33页

原图从项目资料逐页截取；解题过程为本库重新推导。图片默认展开，点击图片可放大。

[返回原题题库](/my-web/notes/obsidian/0ccc1ba647a82d72/) · [课程入口](/my-web/notes/obsidian/cd3e85505394c498/)
