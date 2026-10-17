---
title: D22 交流并联与导纳
date: '2026-10-16T17:06:36.990343+00:00'
lastmod: '2026-10-16T17:06:36.990343+00:00'
draft: false
description: ''
tags:
- 电路
- 知识点
note_links:
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/1522323228def87d/index.md
- notes/obsidian/1b7851796d5b3152/index.md
- notes/obsidian/3ab140eab2134944/index.md
- notes/obsidian/4e19b59e90ddbc69/index.md
- notes/obsidian/87f1dce4c5d02a59/index.md
- notes/obsidian/f022f03e0999976d/index.md
obsidian: true
note_course: 电路
---

# 交流并联与导纳

> [!tip] 做题入口
> 并联同电压，支路电流相量相加。

## 详细讲解：从理解到列式

### 并联时共同的是电压

选电压为实轴参考，各支路电流为 $\dot I_k=Y_k\dot U$，总电流由 KCL 得

$$
\dot I=\dot U\sum_kY_k,\qquad Y=G+jB.
$$

电阻贡献正实部 $G$；电容贡献 $+j\omega C$；电感贡献 $-j/(\omega L)$。$B>0$ 表示总电流超前电压，为容性；不要把阻抗虚部与导纳虚部的判号规则混在一起。

### 分支电流能大于总电流吗

可以。电感支路电流滞后，电容支路电流超前，二者在虚轴上部分抵消。例如一支路为 $3-j4$ A，另一支为 $j4$ A，总电流只有 3 A。这不违反 KCL，因为 KCL 对相量的实部、虚部分别成立。

串联 RL 支路的导纳要对整个 $R+jX_L$ 取倒数：$Y=(R-jX_L)/(R^2+X_L^2)$，不能写成 $1/R+1/(jX_L)$，后者等于把串联误当并联。求总有效电流用 $I=U\sqrt{G^2+B^2}$，再由相角判超前还是滞后。

### 学习顺序

先读：[基尔霍夫电流定律KCL](/my-web/notes/obsidian/87f1dce4c5d02a59/)、[RLC元件复阻抗](/my-web/notes/obsidian/3ab140eab2134944/)。

用于练习：[ED03 日光灯镇流器反求与功率因数补偿](/my-web/notes/obsidian/4e19b59e90ddbc69/)、[ED04 从功率变化反求并联阻抗](/my-web/notes/obsidian/1b7851796d5b3152/)。

[在学习地图中定位本节](/my-web/notes/?map=D22#notes-graph-heading)

## 概念与适用条件

并联支路共用电压，$\underline I_k=\underline U/Z_k$，$\underline I=\sum\underline I_k$。导纳 $Y=1/Z$，并联时 $Y_{\mathrm{eq}}=\sum Y_k$。两支路也可用 $Z_{\mathrm{eq}}=Z_1Z_2/(Z_1+Z_2)$。

## 推导

将 KCL 中每个支路电流写成 $Y_k\underline U$，得 $\underline I=\underline U\sum Y_k$。导纳的单位是 S（西门子）。电阻分流公式可以推广为复阻抗分流，但必须保留复数运算。

## 解题步骤

1. 标共同电压相量。
2. 每支路复数相除求电流，或先求导纳总和。
3. 电流转直角坐标相加，再转极坐标。
4. 检查电压相同、KCL满足。

## 补充示例｜阻性和感性支路并联

**题目：** $\underline U=20\angle0^\circ$ V，$Z_1=5\Omega$、$Z_2=j5\Omega$。

1. $\underline I_1=4$ A，$\underline I_2=-j4$ A。
2. $\underline I=4-j4=4\sqrt2\angle(-45^\circ)$ A。
3. $Y=0.2-j0.2$ S，$Z_{\mathrm{eq}}=2.5+j2.5\Omega$。
4. $Z_{\mathrm{eq}}\underline I=20$ V，闭合验证。

## 易错与自检

并联两个感抗、容抗时，也不能先相加模。纯 LC 并联在特殊频率可出现总导纳为零；除法时先看分母是否接近零。

## 闭卷回想

两支路电流分别是3A同相电流与4A滞后90°电流，总有效值是多少？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- [课堂笔记图15 · IMG20261015232109](/my-web/notes-media/asset-3a9fddc86bc7418b.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232109](/my-web/notes-media/asset-3a9fddc86bc7418b.webp)

## 关联与返回

[基尔霍夫电流定律KCL](/my-web/notes/obsidian/87f1dce4c5d02a59/)、[相量与复数运算](/my-web/notes/obsidian/1522323228def87d/)、[RLC元件复阻抗](/my-web/notes/obsidian/3ab140eab2134944/)、[交流功率与功率因数](/my-web/notes/obsidian/f022f03e0999976d/)

[返回电路入口](/my-web/notes/obsidian/115436d99c2c2ddd/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [日光灯镇流器反求与功率因数补偿](/my-web/notes/obsidian/4e19b59e90ddbc69/) · 综合
- [从功率变化反求并联阻抗](/my-web/notes/obsidian/1b7851796d5b3152/) · 综合
