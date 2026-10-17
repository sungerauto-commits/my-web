---
title: EP05 先接地外壳再接地内球：逐阶段守恒
date: '2026-10-16T11:41:13.780355+00:00'
lastmod: '2026-10-16T11:41:13.780355+00:00'
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
- notes/obsidian/61c5fb0adfb7b15d/index.md
- notes/obsidian/7ef2a5f9ba7e6f23/index.md
- notes/obsidian/a7515dd943226c39/index.md
- notes/obsidian/af37467a4edc5504/index.md
obsidian: true
note_course: 大学物理
---

# 先接地外壳再接地内球：逐阶段守恒

## 原题与配图

![EP05-1](/my-web/notes-media/asset-1199630396006976.png)

![EP05-2](/my-web/notes-media/asset-7ddd85bf92121f75.png)

**教材习题6-10，印刷第246页，附原图 · 挑战**

金属球 A 半径 $a=6.0\rm cm$，带电 $q=3.0\times10^{-8}\rm C$；同心金属球壳 B 内外半径 $b=8.0\rm cm,c=10.0\rm cm$，总电荷 $Q_B=2.0\times10^{-8}\rm C$。（1）求 B 内外表面电荷及 A、B 电势；（2）将 B 接地后断开，再把 A 接地，求最后各表面电荷及 A、B 电势。

## 解题思路

按“导体内场为零 → 内壁感应电荷 → 外壁由总电荷决定 → 电势叠加”推进。接地导体可与地交换电荷，但断开后其总电荷固定。两个接地动作有先后，最终不是两者都为零电势。取无穷远为零，数值用 $k_e\approx9.0\times10^9$。

## 逐步解答

### 1. 写出通用的电荷与电势关系

设 A 此时带 $x$、B 总电荷为 $y$。B 金属内高斯面要求包围电荷为零，所以内壁 $q_b=-x$，外壁 $q_c=x+y$。

$$
V_A=k_e\left[x\left(\frac1a-\frac1b\right)+\frac{x+y}{c}\right],\qquad V_B=k_e\frac{x+y}{c}.
$$

内球及内壁对 B 的总势互相抵消。这两条式子贯穿所有阶段。

### 2. 初始状态：两者均孤立

$x=3.0\times10^{-8},y=2.0\times10^{-8}\rm C$。

$$
\boxed{q_b=-3.0\times10^{-8}\rm C,\quad q_c=5.0\times10^{-8}\rm C.}
$$

$$
\boxed{V_B=4500\rm V,\quad V_A=5625\rm V.}
$$

因此 $U_{AB}=1125\rm V$。

### 3. 外壳 B 接地、A 仍孤立

A 保持 $x=q$；$V_B=0$ 给出 $q_c=0$，故 $q_b=-q$，B 总电荷变成 $y=-q$。

此时 $V_A=k_eq(1/a-1/b)=1125\rm V$。断开 B 的地线后，B 的总电荷 $-q$ 被保留下来。

### 4. 保持 B 孤立，再将 A 接地

令 A 最终电荷为 $x$，此时 $y=-q$ 固定，而 $V_A=0$：

$$
x\left(\frac1a-\frac1b\right)+\frac{x-q}{c}=0,
$$

$$
\boxed{x=\frac{q}{1+c/a-c/b}=\frac{12q}{17}\approx2.11765\times10^{-8}\rm C.}
$$

所以

$$
\boxed{q_b=-\frac{12q}{17},\qquad q_c=-\frac{5q}{17}\approx-8.82353\times10^{-9}\rm C,}
$$

$$
\boxed{V_A=0,\quad V_B=k_e\frac{-5q}{17c}\approx-794.12\rm V.}
$$

最终 $U_{AB}=+794.12\rm V$。外壳此时没有接地，因此允许出现负电势。

## 结果自检

最终外壳总电荷 $-12q/17-5q/17=-q$，确实守恒；A 与 B 内壁包围电荷之和为 0；代入通用式 $V_A=0$。

## 易错点

不能同时要求最终 $V_A=V_B=0$；B 已经断开地线。每阶段只有孤立导体的总电荷守恒，接地导体电荷一般不守恒。

## 对应知识点

[高斯定理与对称性判断](/my-web/notes/obsidian/a7515dd943226c39/) · [球对称电荷的分区电场与电势](/my-web/notes/obsidian/61c5fb0adfb7b15d/) · [电势与电势叠加](/my-web/notes/obsidian/09dc45185b27d0e3/) · [导体静电平衡](/my-web/notes/obsidian/58d990316008085d/) · [导体空腔与感应电荷](/my-web/notes/obsidian/7ef2a5f9ba7e6f23/) · [接地条件与导体电势](/my-web/notes/obsidian/10da961e673c07ae/) · [球形电容器与孤立导体球电容](/my-web/notes/obsidian/af37467a4edc5504/)

## 原始出处

《物理学》第七版上册 PDF第267页

原图从项目资料逐页截取；解题过程为本库重新推导。图片默认展开，点击图片可放大。

[返回原题题库](/my-web/notes/obsidian/0ccc1ba647a82d72/) · [课程入口](/my-web/notes/obsidian/43f6cacf0a44b408/)
