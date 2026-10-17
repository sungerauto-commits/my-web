---
title: EP07 偏心球形空腔：分区对称与系统能量
date: '2026-10-16T11:41:16.030169+00:00'
lastmod: '2026-10-16T11:41:16.030169+00:00'
draft: false
description: ''
tags:
- 原题精解
- 大物
note_links:
- notes/obsidian/09dc45185b27d0e3/index.md
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/10da961e673c07ae/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/58d990316008085d/index.md
- notes/obsidian/7ae1f1f4ff41bd7b/index.md
- notes/obsidian/7ef2a5f9ba7e6f23/index.md
- notes/obsidian/a7515dd943226c39/index.md
- notes/obsidian/af37467a4edc5504/index.md
obsidian: true
note_course: 大学物理
---

# 偏心球形空腔：分区对称与系统能量

## 原题与配图

![EP07-1](/my-web/notes-media/asset-df5bf3e79b33aee9.webp)

**大物习题课 PPT 第51页，第2题 · 挑战**

本不带电、外半径 $R_3$ 的导体球中，偏心挖半径 $R_2<R_3$ 的球形空腔。腔内有与空腔同心、半径 $R_1<R_2$ 的小导体球，带电 $Q$。静电平衡后求：（1）各球面电势；（2）系统电势能。取无穷远为零，无外加电场。

## 解题思路

整体并不同心，但有两套局部球面对称：空腔和内部小球同心；外部区域的边界是球形等势面。用静电唯一性保证这两部分的球对称解，再把电势沿路径拼接。

## 逐步解答

### 1. 先确定各表面总电荷

在导体金属内取包围空腔的高斯面，场为零，故空腔内壁电荷为 $-Q$。外导体原来总电荷为 0，所以外表面为 $+Q$。

内小球与腔壁同心，在腔内两球面之间，满足边界条件的球对称解为

$$
E_{cavity}(r)=\frac{Q}{4\pi\varepsilon_0r^2},\quad R_1<r<R_2.
$$

### 2. 外表面与腔壁的共同电势

外部区域的外球面为等势面，且无穷远电势为零。由唯一性，外部解等同于球心点电荷 $Q$，即 $E_{out}=Q/(4\pi\varepsilon_0r_o^2)$，这里 $r_o$ 从外球心量起。

$$
\boxed{V_{R_2}=V_{R_3}=\frac{Q}{4\pi\varepsilon_0R_3}.}
$$

它们属于同一块导体，虽然两球心不同，电势仍相等。

### 3. 从腔壁向内积分求小球电势

$$
V_{R_1}-V_{R_2}=\int_{R_1}^{R_2}\frac{Q}{4\pi\varepsilon_0r^2}\,dr=\frac{Q}{4\pi\varepsilon_0}\left(\frac1{R_1}-\frac1{R_2}\right).
$$

$$
\boxed{V_{R_1}=\frac{Q}{4\pi\varepsilon_0}\left(\frac1{R_1}-\frac1{R_2}+\frac1{R_3}\right).}
$$

### 4. 用导体电势求系统能量

以各导体总电荷计，外导体净电荷为 0，所以

$$
W=\frac12\sum_i Q_iV_i=\frac12QV_{R_1}+\frac12(0)V_{outer}.
$$

$$
\boxed{W=\frac{Q^2}{8\pi\varepsilon_0}\left(\frac1{R_1}-\frac1{R_2}+\frac1{R_3}\right).}
$$

也可分成球形电容器间隙能量 $Q^2(1/R_1-1/R_2)/(8\pi\varepsilon_0)$ 和外部场能 $Q^2/(8\pi\varepsilon_0R_3)$，两者相加一致。

## 结果自检

因为 $R_1<R_2$，总能量为正。腔中心偏移量没有出现在结果中，前提是小球与腔同心且外球面完整、无外场。导体内部场能为 0。

## 易错点

不能用一个以外球心为中心的高斯面直接求腔内场。原课件若只列公式，可用本题的分区对称与唯一性补足理由。

## 对应知识点

[高斯定理与对称性判断](/my-web/notes/obsidian/a7515dd943226c39/) · [电势与电势叠加](/my-web/notes/obsidian/09dc45185b27d0e3/) · [导体静电平衡](/my-web/notes/obsidian/58d990316008085d/) · [导体空腔与感应电荷](/my-web/notes/obsidian/7ef2a5f9ba7e6f23/) · [接地条件与导体电势](/my-web/notes/obsidian/10da961e673c07ae/) · [球形电容器与孤立导体球电容](/my-web/notes/obsidian/af37467a4edc5504/) · [静电能量与能量密度](/my-web/notes/obsidian/7ae1f1f4ff41bd7b/)

## 原始出处

大物第五章习题课 PPT PDF第51页

原图从项目资料逐页截取；解题过程为本库重新推导。图片默认展开，点击图片可放大。

[返回原题题库](/my-web/notes/obsidian/0ccc1ba647a82d72/) · [课程入口](/my-web/notes/obsidian/43f6cacf0a44b408/)
