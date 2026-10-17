---
title: D19 相量与复数运算
date: '2026-10-16T16:50:33.997037+00:00'
lastmod: '2026-10-16T16:50:33.997037+00:00'
draft: false
description: ''
tags:
- 电路
- 知识点
note_links:
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/1b7851796d5b3152/index.md
- notes/obsidian/28e997c5a15ba291/index.md
- notes/obsidian/2ddfbd4ee7f83581/index.md
- notes/obsidian/3ab140eab2134944/index.md
- notes/obsidian/4e19b59e90ddbc69/index.md
- notes/obsidian/53a8e7a42b0b67fa/index.md
- notes/obsidian/cfd166f4fe2772af/index.md
- notes/obsidian/f022f03e0999976d/index.md
obsidian: true
note_course: 电路
---

# 相量与复数运算

> [!tip] 做题入口
> 同频正弦稳态，把微分方程转成复数代数。

## 详细讲解：从理解到列式

### 图解：相量三角形

![相量三角形](/my-web/notes-media/asset-8f8cc99feca3d765.svg)

先把有效值放到相量方向上，再用复数加法或直角三角形。 图为本库补充示意，不替代原题中的几何与方向。

### 相量为什么能代替三角运算

用同一余弦基准表示 $u(t)=\sqrt2\operatorname{Re}(\dot Ue^{j\omega t})$，其中 $\dot U=Ue^{j\varphi}$，幅值取有效值。所有量共有 $e^{j\omega t}$，在线性方程中可约去这个时间因子，所以时域同频正弦的相加变成复数相加。

### 两种复数形式各在哪一步用

直角形式 $a+jb$ 适合加减；极坐标 $M\angle\theta$ 适合乘除。转换用 $M=\sqrt{a^2+b^2}$、$\theta=\operatorname{atan2}(b,a)$，后者能分辨象限。$(-1)+j$ 的相角是 $135^\circ$，不能仅用 $\arctan(-1)$ 得 $-45^\circ$。

$$
\frac{M_1\angle\theta_1}{M_2\angle\theta_2}=\frac{M_1}{M_2}\angle(\theta_1-\theta_2).
$$

相量等式给出的是有效值和相位；返回时域还需补 $\sqrt2$ 和共同的 $\omega t$。如 $\dot I=2\angle(-30^\circ)$ A，对应 $i(t)=2\sqrt2\cos(\omega t-30^\circ)$ A。相量本身不是一条真实电流随时间旋转的物理轨迹，而是表示幅相的数学工具。

### 学习顺序

先读：[正弦量与有效值](/my-web/notes/obsidian/53a8e7a42b0b67fa/)。

再用到：[RLC元件复阻抗](/my-web/notes/obsidian/3ab140eab2134944/)、[交流功率与功率因数](/my-web/notes/obsidian/f022f03e0999976d/)。

[在学习地图中定位本节](/my-web/notes/?map=D19#notes-graph-heading)

## 概念与适用条件

本库统一使用**余弦、有效值相量**：$u(t)=\sqrt2 U\cos(\omega t+\varphi)\leftrightarrow\underline U=U\angle\varphi$。相量不是瞬时值，也不把 $\omega t$ 写进相量。只适用于同频正弦稳态；换路暂态另算。

## 推导

$u(t)=\Re\{\sqrt2\underline Ue^{j\omega t}\}$。求导相当于乘 $j\omega$，因此电感、电容的微分关系可转为阻抗关系。复数 $a+jb=r\angle\theta$，$r=\sqrt{a^2+b^2}$、$\theta=\operatorname{atan2}(b,a)$。

## 解题步骤

1. 时域统一成余弦，再写有效值相量。
2. 加减用直角坐标，乘除用极坐标。
3. 解得相量后，写回时域要乘 $\sqrt2$，并带上原频率。

## 补充示例｜相量相加

**题目：** $\underline U_1=3\angle0^\circ$ V、$\underline U_2=4\angle90^\circ$ V。

1. 转直角式 $\underline U_1=3$、$\underline U_2=j4$。
2. 总相量 $\underline U=3+j4=5\angle53.13^\circ$ V。
3. 对应 $u(t)=5\sqrt2\cos(\omega t+53.13^\circ)\mathrm V$。
4. 有效值是5V，不能把3+4当成7V。

## 易错与自检

求角度不要只用 $\arctan(b/a)$ 而忘了象限。不同频率的相量不能直接相加；应分别求响应后回到时域相加。

## 闭卷回想

为什么 $3\angle0^\circ+4\angle90^\circ$ 的模不是7？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- [课堂笔记图12 · IMG20261015232043](/my-web/notes-media/asset-d601fa22fe06aaa2.webp)。
- [课堂笔记图13 · IMG20261015232055](/my-web/notes-media/asset-b6de1ece95449993.webp)。
- [课堂笔记图14 · IMG20261015232059](/my-web/notes-media/asset-8a3cd9afd34161ec.webp)。
- [课堂笔记图15 · IMG20261015232109](/my-web/notes-media/asset-3a9fddc86bc7418b.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232043](/my-web/notes-media/asset-d601fa22fe06aaa2.webp)

## 关联与返回

[正弦量与有效值](/my-web/notes/obsidian/53a8e7a42b0b67fa/)、[RLC元件复阻抗](/my-web/notes/obsidian/3ab140eab2134944/)、[RLC串联与相量图](/my-web/notes/obsidian/28e997c5a15ba291/)、[交流并联与导纳](/my-web/notes/obsidian/cfd166f4fe2772af/)

[返回电路入口](/my-web/notes/obsidian/115436d99c2c2ddd/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [日光灯镇流器反求与功率因数补偿](/my-web/notes/obsidian/4e19b59e90ddbc69/) · 综合
- [从功率变化反求并联阻抗](/my-web/notes/obsidian/1b7851796d5b3152/) · 综合
- [从复电压反求两个串联元件](/my-web/notes/obsidian/2ddfbd4ee7f83581/) · 进阶
