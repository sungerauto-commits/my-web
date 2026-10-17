---
title: D20 RLC元件复阻抗
date: '2026-10-16T16:50:33.998036+00:00'
lastmod: '2026-10-16T16:50:33.998036+00:00'
draft: false
description: ''
tags:
- 电路
- 知识点
note_links:
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/1522323228def87d/index.md
- notes/obsidian/19b122467f6cebf2/index.md
- notes/obsidian/1b7851796d5b3152/index.md
- notes/obsidian/28e997c5a15ba291/index.md
- notes/obsidian/2ddfbd4ee7f83581/index.md
- notes/obsidian/4deccae1762f21a1/index.md
- notes/obsidian/4e19b59e90ddbc69/index.md
- notes/obsidian/cfd166f4fe2772af/index.md
obsidian: true
note_course: 电路
---

# RLC元件复阻抗

> [!tip] 做题入口
> R同相，L电压超前电流90°，C电压滞后电流90°。

## 详细讲解：从理解到列式

### 图解：相量三角形

![相量三角形](/my-web/notes-media/asset-8f8cc99feca3d765.svg)

先把有效值放到相量方向上，再用复数加法或直角三角形。 图为本库补充示意，不替代原题中的几何与方向。

### 三个阻抗来自同一个求导规则

在 $e^{j\omega t}$ 的余弦约定下，求导对应乘 $j\omega$。电阻 $u=Ri$ 给 $Z_R=R$；电感 $u=Ldi/dt$ 给 $Z_L=j\omega L$；电容 $i=Cdu/dt$ 给 $Z_C=1/(j\omega C)=-j/(\omega C)$。

因此电感电压超前电流 $90^\circ$，电容电压落后电流 $90^\circ$。$X_L=\omega L$、$X_C=1/(\omega C)$ 通常表示正的大小，容性负号放在 $-jX_C$ 里，避免一边称 $X_C<0$ 一边又写 $-jX_C$ 而重复变号。

### 串联与并联如何统一

阻抗定义为 $Z=\dot U/\dot I$，导纳 $Y=1/Z=\dot I/\dot U$。串联同电流，所以阻抗相加；并联同电压，所以导纳相加。电容导纳 $j\omega C$ 随频率增加，电感导纳 $1/(j\omega L)$ 随频率减小。

稳态频率趋零时，理想电容阻抗趋无穷、电感阻抗趋零，与直流稳态开路/短路一致。这是频率域极限，不说明刚换路时电容可以忽略初始电压、电感可以忽略初始电流。

### 学习顺序

先读：[电容的伏安关系与储能](/my-web/notes/obsidian/4deccae1762f21a1/)、[电感的伏安关系与储能](/my-web/notes/obsidian/19b122467f6cebf2/)、[相量与复数运算](/my-web/notes/obsidian/1522323228def87d/)。

再用到：[RLC串联与相量图](/my-web/notes/obsidian/28e997c5a15ba291/)、[交流并联与导纳](/my-web/notes/obsidian/cfd166f4fe2772af/)。

[在学习地图中定位本节](/my-web/notes/?map=D20#notes-graph-heading)

## 概念与适用条件

同频正弦稳态、关联参考下：

$$
Z_R=R,\quad Z_L=j\omega L=jX_L,\quad Z_C=\frac1{j\omega C}=-jX_C,\quad X_C=\frac1{\omega C}.
$$

统一使用 $X_L,X_C>0$ 表示电抗大小，容性负号写在阻抗前。相量欧姆定律 $\underline U=Z\underline I$。

## 推导

电感 $u=Ldi/dt\Rightarrow\underline U=j\omega L\underline I$。电容 $i=Cdu/dt\Rightarrow\underline I=j\omega C\underline U$。乘 $j$ 相当于相位加90°。

## 解题步骤

1. 从频率算 $\omega=2\pi f$。
2. 用 SI 单位算 $X_L,X_C$。
3. 代入阻抗关系，最后分别解释模和相角。

## 补充示例｜同一电流流过电感和电容

**题目：** $f=50\mathrm{Hz}$、$L=0.1\mathrm H$、$C=100\mu\mathrm F$、$\underline I=2\angle0^\circ\mathrm A$。

1. $X_L=100\pi\times0.1\approx31.416\Omega$，$X_C=1/(100\pi\times10^{-4})\approx31.831\Omega$。
2. $\underline U_L=j62.832\mathrm V$，$\underline U_C=-j63.662\mathrm V$。
3. 二者几乎反相抵消，总反应电压约 $-j0.830\mathrm V$，不能相加幅值。

## 易错与自检

$1/j=-j$。电感电容阻抗随频率改变，求零频极限可检查趋势：电感趋短路、电容趋开路。

## 闭卷回想

频率加倍，理想电感和电容的阻抗模分别怎样变化？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- [课堂笔记图12 · IMG20261015232043](/my-web/notes-media/asset-d601fa22fe06aaa2.webp)。
- [课堂笔记图13 · IMG20261015232055](/my-web/notes-media/asset-b6de1ece95449993.webp)。
- [课堂笔记图15 · IMG20261015232109](/my-web/notes-media/asset-3a9fddc86bc7418b.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232043](/my-web/notes-media/asset-d601fa22fe06aaa2.webp)

## 关联与返回

[电容的伏安关系与储能](/my-web/notes/obsidian/4deccae1762f21a1/)、[电感的伏安关系与储能](/my-web/notes/obsidian/19b122467f6cebf2/)、[相量与复数运算](/my-web/notes/obsidian/1522323228def87d/)、[RLC串联与相量图](/my-web/notes/obsidian/28e997c5a15ba291/)、[交流并联与导纳](/my-web/notes/obsidian/cfd166f4fe2772af/)

[返回电路入口](/my-web/notes/obsidian/115436d99c2c2ddd/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [日光灯镇流器反求与功率因数补偿](/my-web/notes/obsidian/4e19b59e90ddbc69/) · 综合
- [从功率变化反求并联阻抗](/my-web/notes/obsidian/1b7851796d5b3152/) · 综合
- [从复电压反求两个串联元件](/my-web/notes/obsidian/2ddfbd4ee7f83581/) · 进阶
