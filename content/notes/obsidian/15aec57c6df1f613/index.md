---
title: ED02 开关闭合后节点变负：跨接电容的全响应
date: '2026-10-16T11:41:03.742036+00:00'
lastmod: '2026-10-16T11:41:03.742036+00:00'
draft: false
description: ''
tags:
- 原题精解
- 电路
note_links:
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/4deccae1762f21a1/index.md
- notes/obsidian/50aed8ea4d5c45b2/index.md
- notes/obsidian/90cba90d8e907b67/index.md
- notes/obsidian/e36be8778d58d649/index.md
obsidian: true
note_course: 电路
---

# 开关闭合后节点变负：跨接电容的全响应

## 原题与配图

![ED02-1](/my-web/notes-media/asset-78beac65685e835d.webp)

![ED02-2](/my-web/notes-media/asset-be1d1ecad0a664a6.webp)

**教材练习2.6.3，印刷第50页，图2.10 · 综合**

电路换路前已稳态，$U_S=40\rm V,R_1=2k\Omega,R_2=6k\Omega,R_3=12k\Omega,C=50\mu F$。在 $t=0$ 合上开关，求 $u_C,u_R$。原图电容电压左正右负，$u_R$ 上正下负。

## 解题思路

换路定律约束的是电容两端的电压差，并非某个节点对地电位。闭合开关后电容左端被接地，右端可能瞬间变成负电位。三要素应以换路后的电路求时间常数。

## 逐步解答

### 1. 换路前：电容开路，三电阻串联

$$
I(0^-)=\frac{40}{(2+6+12)\times10^3}=2\rm mA.
$$

电容左、右节点对地电位为 $V_a=40-2\times2=36\rm V$、$V_b=2\times12=24\rm V$，因此

$$
u_C(0^-)=V_a-V_b=12\rm V.
$$

### 2. 换路瞬间：左端接地，保持电容电压

$$
u_C(0^+)=12\rm V,\quad V_a(0^+)=0,\quad V_b(0^+)=-12\rm V.
$$

所以 $u_R(0^+)=-12\rm V$；$u_R$ 可以跳变，它不是电容电压。

### 3. 求终值和时间常数

换路后电容左右之间只有 $R_2,R_3$ 并联构成放电路径，终值 $u_C(\infty)=0$。

$$
R_{eq}=6k\parallel12k=4k\Omega,\qquad\tau=R_{eq}C=0.2\rm s.
$$

$R_1$ 留在电源到开关的支路中，不能串入电容看到的等效电阻。

### 4. 写出响应

$$
\boxed{u_C(t)=12e^{-5t}\rm V,\qquad u_R(t)=-12e^{-5t}\rm V,\quad t\ge0.}
$$

用右节点 KCL 可得 $C\,dV_b/dt+V_b(1/R_2+1/R_3)=0$，也得到衰减率 $5\rm s^{-1}$。

## 结果自检

$u_C$ 在零时刻连续；$u_C+u_R=0$，符合换路后电容左端为地。右节点由负值趋于 0，正好符合放电。电容初始能量为 $\tfrac12C12^2=3.6\rm mJ$。

## 易错点

不要把 $u_R(0^-)=24\rm V$ 直接延续到 $0^+$。换路时两个节点电位都可能改变，只要电容电压差不突变即可。

## 对应知识点

[电容的伏安关系与储能](/my-web/notes/obsidian/4deccae1762f21a1/) · [换路定律与初始值](/my-web/notes/obsidian/50aed8ea4d5c45b2/) · [一阶电路三要素法](/my-web/notes/obsidian/90cba90d8e907b67/) · [RC充放电与全响应](/my-web/notes/obsidian/e36be8778d58d649/)

## 原始出处

《电工学（少学时）》第五版 PDF第63页

原图从项目资料逐页截取；解题过程为本库重新推导。图片默认展开，点击图片可放大。

[返回原题题库](/my-web/notes/obsidian/0ccc1ba647a82d72/) · [课程入口](/my-web/notes/obsidian/115436d99c2c2ddd/)
