---
title: EP06 固定电压插入介质板与导体板
date: '2026-10-16T11:41:15.074018+00:00'
lastmod: '2026-10-16T11:41:15.074018+00:00'
draft: false
description: ''
tags:
- 原题精解
- 大物
note_links:
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/24e59c001e2459b3/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/58d990316008085d/index.md
- notes/obsidian/9038a67e0032fe4c/index.md
- notes/obsidian/a7b196bda29841f1/index.md
- notes/obsidian/ea2bc1f82c5e399a/index.md
- notes/obsidian/fb9f374dfa570d82/index.md
obsidian: true
note_course: 大学物理
---

# 固定电压插入介质板与导体板

## 原题与配图

![EP06-1](/my-web/notes-media/asset-546ac7611df889da.png)

![EP06-2](/my-web/notes-media/asset-7405408d2d1f6794.png)

**教材习题6-29，印刷第249页，附原图 · 综合**

空气平板电容器极板面积 $S$、间距 $d$，接电压 $U$ 的电源充电。（1）充足电后；（2）平行插入面积相同、厚 $\delta<d$、相对介电常数 $\varepsilon_r$ 的电介质板；（3）将该板换成同样大小的导体板。分别求极板电荷 $Q$、板间场强 $E$、电容 $C$。按图电源始终连接，忽略边缘效应，插入板不接触极板。

## 解题思路

沿场方向分层，法向电位移由自由电荷决定，各层电势降相加。导体内部电场为零，等效于把产生电势降的总空气厚度从 $d$ 变为 $d-\delta$。题目始终接电源，应固定 $U$ 而非固定 $Q$。

## 逐步解答

### 1. 未插入时

$$
\boxed{C_0=\frac{\varepsilon_0S}{d},\quad Q_0=C_0U,\quad E_0=\frac Ud.}
$$

### 2. 插入介质：从边界条件推导

介质界面无自由面电荷，故空气与介质中 $D=Q/S$ 相同：

$$
E_a=\frac Q{\varepsilon_0S},\qquad E_m=\frac Q{\varepsilon_0\varepsilon_rS}=\frac{E_a}{\varepsilon_r}.
$$

两段空气总厚度是 $d-\delta$，因此

$$
U=E_a(d-\delta)+E_m\delta=E_a\left(d-\delta+\frac\delta{\varepsilon_r}\right).
$$

记 $h=d-\delta+\delta/\varepsilon_r$，得到

$$
\boxed{C_m=\frac{\varepsilon_0S}{h},\quad Q_m=\frac{\varepsilon_0SU}{h},\quad E_a=\frac Uh,\quad E_m=\frac U{\varepsilon_rh}.}
$$

### 3. 换成中性悬浮导体板

静电平衡使板内 $E_c=0$，两空气隙的电场大小相同。导体两面分别感应等量异号电荷，内部不产生电势降：

$$
U=E_a(d-\delta).
$$

$$
\boxed{C_c=\frac{\varepsilon_0S}{d-\delta},\quad Q_c=\frac{\varepsilon_0SU}{d-\delta},\quad E_a=\frac U{d-\delta},\quad E_c=0.}
$$

导体板位于间隙中何处不改变理想电容，因为两个空气隙厚度之和不变。

## 结果自检

$\varepsilon_r=1$ 恢复空气电容；$\varepsilon_r\to\infty$ 的介质结果趋近导体板结果。$\delta\to0$ 两种插入情形均恢复原电容。普通介质 $\varepsilon_r>1$ 时 $C_0<C_m<C_c$，与固定电压下电源补充电荷的行为一致。

## 易错点

电介质内一般 $E\ne0$，金属导体内才为 0。由于分层，不能只报告一个“板间场强”；必须区分空气区和材料区。

## 对应知识点

[导体静电平衡](/my-web/notes/obsidian/58d990316008085d/) · [电介质极化与极化强度](/my-web/notes/obsidian/9038a67e0032fe4c/) · [电位移D与介质高斯定理](/my-web/notes/obsidian/a7b196bda29841f1/) · [电容定义与平行板电容](/my-web/notes/obsidian/fb9f374dfa570d82/) · [电容串并联与混合介质](/my-web/notes/obsidian/ea2bc1f82c5e399a/) · [插入介质时固定Q还是固定U](/my-web/notes/obsidian/24e59c001e2459b3/)

## 原始出处

《物理学》第七版上册 PDF第270页

原图从项目资料逐页截取；解题过程为本库重新推导。图片默认展开，点击图片可放大。

[返回原题题库](/my-web/notes/obsidian/0ccc1ba647a82d72/) · [课程入口](/my-web/notes/obsidian/43f6cacf0a44b408/)
