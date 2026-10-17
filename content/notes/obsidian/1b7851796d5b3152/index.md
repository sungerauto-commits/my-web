---
title: ED04 从功率变化反求并联阻抗
date: '2026-10-16T11:46:17.188632+00:00'
lastmod: '2026-10-16T11:46:17.188632+00:00'
draft: false
description: ''
tags:
- 原题精解
- 电路
note_links:
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/1522323228def87d/index.md
- notes/obsidian/3ab140eab2134944/index.md
- notes/obsidian/cfd166f4fe2772af/index.md
- notes/obsidian/f022f03e0999976d/index.md
obsidian: true
note_course: 电路
---

# 从功率变化反求并联阻抗

## 原题与配图

![ED04-1](/my-web/notes-media/asset-8f19c65ebb21d0ca.webp)

![ED04-2](/my-web/notes-media/asset-a929e25b3bbc0674.webp)

**教材练习3.7.3，印刷第89页，图3.10 · 综合**

$U=220\rm V$，原串联 RL 支路有功 $P_1=726\rm W$、功率因数 $\lambda_1=0.6$。闭合开关接入并联 $Z_2$ 后，总有功增加 74 W，无功减少 168 var。求总电流 $I$ 以及 $Z_2$ 的大小与性质。

## 解题思路

并联电压不变，各支路复功率可以直接相加。先把增减量写成带符号的 $S_2=P_2+jQ_2$，再由 $S=U I^*=U^2/Z^*$ 反求阻抗。

## 逐步解答

### 1. 还原原支路无功

原支路感性，$\sin\varphi_1=0.8$，所以

$$
Q_1=P_1\tan\varphi_1=726\frac{0.8}{0.6}=968\rm var.
$$

### 2. 写出新增支路和总复功率

$$
S_2=74-j168\rm VA,
$$

$$
S_{all}=(726+74)+j(968-168)=800+j800\rm VA.
$$

### 3. 求总电流

以电压为参考相量 $\dot U=220\angle0^\circ$，则

$$
\dot I=\frac{S_{all}^*}{U}=\frac{800-j800}{220}=3.6364-j3.6364\rm A.
$$

$$
\boxed{I=\frac{800\sqrt2}{220}\approx5.143\rm A,\quad\angle\dot I=-45^\circ.}
$$

### 4. 反求新增阻抗

$$
\boxed{Z_2=\frac{U^2}{S_2^*}=\frac{48400}{74+j168}\approx106.28-j241.28\Omega.}
$$

$$
|Z_2|\approx263.65\Omega,\qquad\arg Z_2\approx-66.23^\circ.
$$

实部为正、虚部为负，故是耗有功的容性阻抗，可等效为电阻与电容串联，不能称为纯电容。

## 结果自检

新增支路电流为 $(74+j168)/220\rm A$，超前电压；与原支路 $(726-j968)/220$ 相加，得到总电流 $(800-j800)/220$。

## 易错点

由 $S$ 求 $Z$ 时必须取共轭；漏共轭会把容性算成感性。并联阻抗不能直接相加，复功率才可相加。

## 对应知识点

[相量与复数运算](/my-web/notes/obsidian/1522323228def87d/) · [RLC元件复阻抗](/my-web/notes/obsidian/3ab140eab2134944/) · [交流并联与导纳](/my-web/notes/obsidian/cfd166f4fe2772af/) · [交流功率与功率因数](/my-web/notes/obsidian/f022f03e0999976d/)

## 原始出处

《电工学（少学时）》第五版 PDF第102页

原图从项目资料逐页截取；解题过程为本库重新推导。图片默认展开，点击图片可放大。

[返回原题题库](/my-web/notes/obsidian/0ccc1ba647a82d72/) · [课程入口](/my-web/notes/obsidian/115436d99c2c2ddd/)
