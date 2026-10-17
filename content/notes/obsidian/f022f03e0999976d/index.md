---
title: D23 交流功率与功率因数
date: '2026-10-16T16:50:33.999038+00:00'
lastmod: '2026-10-16T16:50:33.999038+00:00'
draft: false
description: ''
tags:
- 电路
- 知识点
note_links:
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/1522323228def87d/index.md
- notes/obsidian/1b7851796d5b3152/index.md
- notes/obsidian/28e997c5a15ba291/index.md
- notes/obsidian/48f4acf6a44a144b/index.md
- notes/obsidian/4e19b59e90ddbc69/index.md
- notes/obsidian/53a8e7a42b0b67fa/index.md
- notes/obsidian/5f47f9e9111db566/index.md
- notes/obsidian/cfd166f4fe2772af/index.md
obsidian: true
note_course: 电路
---

# 交流功率与功率因数

> [!tip] 做题入口
> 有效值相乘得到视在功率，有功还要乘相位差的余弦。

## 详细讲解：从理解到列式

### 图解：相量三角形

![相量三角形](/my-web/notes-media/asset-8f8cc99feca3d765.svg)

先把有效值放到相量方向上，再用复数加法或直角三角形。 图为本库补充示意，不替代原题中的几何与方向。

### 三种功率为什么同时出现

正弦电压、电流相差 $\varphi$。利用积化和差，瞬时功率包含平均项 $UI\cos\varphi$ 和两倍频振荡项，所以有功 $P=UI\cos\varphi$。复功率定义为

$$
\mathcal S=\dot U\dot I^*=P+jQ,\quad Q=UI\sin\varphi,\quad S=|\mathcal S|=UI.
$$

其中共轭把相角变成“电压相角减电流相角”。W、var、VA 分别对应有功、无功、视在功率，不能把它们当成三项互相相加的能量。

### 功率三角形的使用条件

同频正弦稳态下 $S^2=P^2+Q^2$。感性负载 $Q>0$，容性 $Q<0$。多支路可直接相加 $P$ 和带符号的 $Q$，再求新的 $S$；不能把各支路 $S$ 的大小相加当作总视在功率。

### 并联电容怎样补偿

固定电压下理想电容不消耗平均有功，提供 $Q_C=-\omega CU^2$。原有功 $P$ 保持，若目标为感性 $\cos\varphi_2$，剩余无功为 $P\tan\varphi_2$，故 $C=(Q_1-P\tan\varphi_2)/(\omega U^2)$。补偿降低的是电源总电流，原负载支路在电压不变时电流不随之减小。

### 学习顺序

先读：[功率与功率平衡](/my-web/notes/obsidian/48f4acf6a44a144b/)、[相量与复数运算](/my-web/notes/obsidian/1522323228def87d/)。

再用到：[串联谐振](/my-web/notes/obsidian/5f47f9e9111db566/)。

[在学习地图中定位本节](/my-web/notes/?map=D23#notes-graph-heading)

## 概念与适用条件

正弦稳态、有效值相量、关联参考下，复功率

$$
\mathcal S=\underline U\underline I^*=P+jQ,\quad P=UI\cos\varphi,\quad Q=UI\sin\varphi,\quad S=UI.
$$

$\varphi=\arg\underline U-\arg\underline I$，$S$ 是复功率的模。感性 $Q>0$，容性 $Q<0$。$P$ 单位 W，$Q$ 单位 var，$S$ 单位 VA。

## 推导

$u=\sqrt2U\cos(\omega t+\varphi_u)$、$i=\sqrt2I\cos(\omega t+\varphi_i)$，用积化和差可得 $p(t)=UI[\cos\varphi+\cos(2\omega t+\varphi_u+\varphi_i)]$。第二项周期平均为零，留下 $P=UI\cos\varphi$。

## 解题步骤

1. 确认幅值已转有效值，电压电流参考关联。
2. 求相位差，不能只用电压的初相。
3. 求 $P,Q,S$ 并检查 $S^2=P^2+Q^2$。

## 补充示例｜串联电路功率

**题目：** $U=100\mathrm V$、$I=10\mathrm A$、$Z=6-j8\Omega$。

1. $\cos\varphi=6/10=0.6$，$\sin\varphi=-8/10=-0.8$。
2. $P=100\times10\times0.6=600\mathrm W$。
3. $Q=-800\mathrm{var}$，$S=1000\mathrm{VA}$。
4. 复核 $I^2R=600\mathrm W$，$600^2+800^2=1000^2$。

## 易错与自检

纯电感/电容理想情况下平均有功为零，但瞬时功率并不始终为零。无功不等于“完全没有电流”。谐波情况下功率因数不一定只等于 $\cos\varphi$，本节点限定正弦稳态。

## 闭卷回想

同样输送600W，电压固定，功率因数下降为什么会使线路电流和损耗增加？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- [课堂笔记图12 · IMG20261015232043](/my-web/notes-media/asset-d601fa22fe06aaa2.webp)。
- [课堂笔记图13 · IMG20261015232055](/my-web/notes-media/asset-b6de1ece95449993.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232043](/my-web/notes-media/asset-d601fa22fe06aaa2.webp)

## 关联与返回

[功率与功率平衡](/my-web/notes/obsidian/48f4acf6a44a144b/)、[正弦量与有效值](/my-web/notes/obsidian/53a8e7a42b0b67fa/)、[RLC串联与相量图](/my-web/notes/obsidian/28e997c5a15ba291/)、[交流并联与导纳](/my-web/notes/obsidian/cfd166f4fe2772af/)、[串联谐振](/my-web/notes/obsidian/5f47f9e9111db566/)

[返回电路入口](/my-web/notes/obsidian/115436d99c2c2ddd/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [日光灯镇流器反求与功率因数补偿](/my-web/notes/obsidian/4e19b59e90ddbc69/) · 综合
- [从功率变化反求并联阻抗](/my-web/notes/obsidian/1b7851796d5b3152/) · 综合
