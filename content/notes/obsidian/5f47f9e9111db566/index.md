---
title: D24 串联谐振
date: '2026-10-16T17:06:36.991863+00:00'
lastmod: '2026-10-16T17:06:36.991863+00:00'
draft: false
description: ''
tags:
- 电路
- 知识点
note_links:
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/1522323228def87d/index.md
- notes/obsidian/28e997c5a15ba291/index.md
- notes/obsidian/3ab140eab2134944/index.md
- notes/obsidian/9ed1c7c2e782ef18/index.md
- notes/obsidian/f022f03e0999976d/index.md
obsidian: true
note_course: 电路
---

# 串联谐振

> [!tip] 做题入口
> 感抗与容抗抵消时，总阻抗只剩电阻。

## 详细讲解：从理解到列式

### 图解：相量三角形

![相量三角形](/my-web/notes-media/asset-8f8cc99feca3d765.svg)

先把有效值放到相量方向上，再用复数加法或直角三角形。 图为本库补充示意，不替代原题中的几何与方向。

### 谐振不是电感、电容都不起作用

理想串联 RLC 的净电抗为 $X(\omega)=\omega L-1/(\omega C)$。令虚部为零：$\omega^2LC=1$，得到 $\omega_0=1/\sqrt{LC}$。此时总阻抗为 $R$，电流 $I_0=U/R$ 最大，电压与总电流同相，但电感和电容仍各自存在大电压。

### 为什么会出现电压放大

在谐振点 $X_L=X_C=\omega_0L$，于是

$$
U_L=U_C=I_0\omega_0L=\frac{\omega_0L}{R}U=QU.
$$

$Q=\omega_0L/R=1/(\omega_0CR)$ 是品质因数。$Q>1$ 时两个元件电压分别超过电源，仍因相位相反而抵消。此处的 $Q$ 与无功功率常用的字母 Q 含义不同，需看单位：品质因数无量纲，无功功率单位 var。

### 频率偏离后怎样判断

低于 $\omega_0$ 时容抗较大，整体容性；高于 $\omega_0$ 时感抗较大，整体感性。在理想串联模型下半功率点满足 $|X_L-X_C|=R$，因为此时 $|Z|=\sqrt2R$、电流为峰值的 $1/\sqrt2$。并联网络的谐振判据应看总导纳虚部，不能直接照搬“电流最大”。

### 学习顺序

先读：[RLC串联与相量图](/my-web/notes/obsidian/28e997c5a15ba291/)、[交流功率与功率因数](/my-web/notes/obsidian/f022f03e0999976d/)。

用于练习：[对应课件的题型练习](/my-web/notes/obsidian/9ed1c7c2e782ef18/)。

[在学习地图中定位本节](/my-web/notes/?map=D24#notes-graph-heading)

## 概念与适用条件

理想串联 RLC 在正弦稳态下，$X_L=X_C$ 时谐振：

$$
\omega_0=\frac1{\sqrt{LC}},\qquad f_0=\frac1{2\pi\sqrt{LC}}.
$$

此时 $Z=R$，电压电流同相。这里讨论串联谐振；不能把“谐振电流最大”无条件套到所有并联网络。

## 推导

由 $\omega L=1/(\omega C)$ 解得频率。在固定电源有效值、固定串联 $R$ 的模型下，$|Z|=\sqrt{R^2+(\omega L-1/(\omega C))^2}$ 在谐振时最小，因此电流最大。品质因数 $Q_0=\omega_0L/R$，不要与无功功率符号 $Q$ 混淆。

## 解题步骤

1. 确定确实为串联 RLC，写 $Z(\omega)$。
2. 令虚部为零求频率。
3. 用 $I=U/R$ 求电流，再算各元件电压。

## 补充示例｜电感电压高于电源

**题目：** $L=0.1\mathrm H,C=100\mu\mathrm F,R=10\Omega,U=10\mathrm V$。

1. $\omega_0=1/\sqrt{10^{-5}}\approx316.23\mathrm{rad/s}$，$f_0\approx50.33\mathrm{Hz}$。
2. $I=10/10=1\mathrm A$。
3. $U_L=I\omega_0L=31.62\mathrm V$，$U_C=31.62\mathrm V$，两者相量相反。
4. 总电压仍为 $U_R=10\mathrm V$，并未违反 KVL。

## 易错与自检

谐振时电感电容电压不是各自为零；只是它们的相量和为零。若 $R=0$ 且有理想正弦谐振激励，不能再假定存在有限的常规稳态电流。

## 闭卷回想

谐振时储能元件仍交换能量，为什么电源的平均有功只供给电阻？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- [课堂笔记图13 · IMG20261015232055](/my-web/notes-media/asset-b6de1ece95449993.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232055](/my-web/notes-media/asset-b6de1ece95449993.webp)

## 关联与返回

[相量与复数运算](/my-web/notes/obsidian/1522323228def87d/)、[RLC元件复阻抗](/my-web/notes/obsidian/3ab140eab2134944/)、[RLC串联与相量图](/my-web/notes/obsidian/28e997c5a15ba291/)、[交流功率与功率因数](/my-web/notes/obsidian/f022f03e0999976d/)

[返回电路入口](/my-web/notes/obsidian/115436d99c2c2ddd/) · [复习首页](/my-web/notes/#notes-graph-heading)
