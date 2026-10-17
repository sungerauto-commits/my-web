---
title: D18 正弦量与有效值
date: '2026-10-16T16:47:35.056687+00:00'
lastmod: '2026-10-16T16:47:35.056687+00:00'
draft: false
description: ''
tags:
- 电路
- 知识点
note_links:
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/1522323228def87d/index.md
- notes/obsidian/2ddfbd4ee7f83581/index.md
- notes/obsidian/44b18b6111927f4a/index.md
- notes/obsidian/4e19b59e90ddbc69/index.md
- notes/obsidian/f022f03e0999976d/index.md
obsidian: true
note_course: 电路
---

# 正弦量与有效值

> [!tip] 做题入口
> 幅值、有效值、频率和初相要分清。

## 详细讲解：从理解到列式

### 三个参数分别描述什么

写 $u(t)=U_m\cos(\omega t+\varphi)$：$U_m$ 是峰值，$\omega$ 是角频率，$\varphi$ 是该时间原点下的初相。$T=2\pi/\omega$、$f=1/T$。若改用正弦，$\cos\theta=\sin(\theta+\pi/2)$，相位必须一起改，不能只换 sin/cos 符号。

### 有效值来自等效发热

同一电阻中，交流一个周期的平均功率为 $\overline P=\frac1T\int_0^T u^2(t)/R\,dt$。令产生相同功率的直流电压为 $U$：

$$
U=\sqrt{\frac1T\int_0^T u^2dt}=\frac{U_m}{\sqrt2}.
$$

最后一步用了正弦平方的周期平均为 $1/2$。有效值不是电压的算术平均，纯正弦的算术平均恰为零。

只有同频正弦量才可用一个固定相位差比较超前/滞后，也才可直接用本章相量法。含直流分量或多次谐波时，不能把总波形峰值一律除以 $\sqrt2$；应按定义计算，正交分量的均方值才可以相加。

### 学习顺序

先读：[参考方向与关联参考方向](/my-web/notes/obsidian/44b18b6111927f4a/)。

再用到：[相量与复数运算](/my-web/notes/obsidian/1522323228def87d/)。

[在学习地图中定位本节](/my-web/notes/?map=D18#notes-graph-heading)

## 概念与适用条件

用余弦统一表示 $u(t)=U_m\cos(\omega t+\varphi)$。周期 $T=2\pi/\omega$、频率 $f=1/T$，$\omega=2\pi f$。相位差只对同频正弦量有固定意义。

## 推导

有效值由同电阻上相同平均热功率定义：

$$
U=\sqrt{\frac1T\int_0^T u^2(t)dt}=U_m/\sqrt2.
$$

因为一周期内 $\cos^2$ 的平均值是 $1/2$。正弦电流同理 $I=I_m/\sqrt2$。

## 解题步骤

1. 将正弦改成统一余弦，例如 $\sin\theta=\cos(\theta-90^\circ)$。
2. 把幅值转为有效值，频率和角频率换算。
3. 在同一余弦约定下比较初相，判断超前/滞后。

## 补充示例｜从时域读参数

**题目：** $u(t)=311\sin(100\pi t+30^\circ)\mathrm V$。

1. 改成余弦 $311\cos(100\pi t-60^\circ)\mathrm V$。
2. $U=311/\sqrt2\approx219.91\mathrm V$，$f=100\pi/(2\pi)=50\mathrm{Hz}$。
3. $T=0.02\mathrm s$，余弦初相 $-60^\circ$。

## 易错与自检

不能把311V幅值直接当220V有效值代入平均功率公式。相位角采用度数时，$\omega t$ 数学上以弧度表示；计算器要正确设置角度模式。

## 闭卷回想

两个同频量的余弦初相分别为30°和−20°，谁超前，超前多少？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- [课堂笔记图12 · IMG20261015232043](/my-web/notes-media/asset-d601fa22fe06aaa2.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232043](/my-web/notes-media/asset-d601fa22fe06aaa2.webp)

## 关联与返回

[相量与复数运算](/my-web/notes/obsidian/1522323228def87d/)、[交流功率与功率因数](/my-web/notes/obsidian/f022f03e0999976d/)

[返回电路入口](/my-web/notes/obsidian/115436d99c2c2ddd/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [日光灯镇流器反求与功率因数补偿](/my-web/notes/obsidian/4e19b59e90ddbc69/) · 综合
- [从复电压反求两个串联元件](/my-web/notes/obsidian/2ddfbd4ee7f83581/) · 进阶
