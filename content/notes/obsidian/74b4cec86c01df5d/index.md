---
title: ED06 RL断电续流：电感电压为何变负
date: '2026-10-16T11:41:07.529233+00:00'
lastmod: '2026-10-16T11:41:07.529233+00:00'
draft: false
description: ''
tags:
- 原题精解
- 电路
note_links:
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/19b122467f6cebf2/index.md
- notes/obsidian/50aed8ea4d5c45b2/index.md
- notes/obsidian/90cba90d8e907b67/index.md
- notes/obsidian/abd5e632e172ba01/index.md
obsidian: true
note_course: 电路
---

# RL断电续流：电感电压为何变负

## 原题与配图

![ED06-1](/my-web/notes-media/asset-a7ce564f07c6fdaa.webp)

![ED06-2](/my-web/notes-media/asset-90d5ae934e34ecb7.webp)

**习题解答2-6，印刷第43页，图2-24 · 进阶**

$U_S=10\rm V,R_1=2k\Omega,R_2=R_3=4k\Omega,L=200mH$。开关断开前电路稳态，$t=0$ 断开。求电感电流 $i_L(t)$ 和电感电压 $u_L(t)$。原图 $i_L$ 向下、$u_L$ 上正下负。

## 解题思路

先求换路前短路电感的支路电流，再根据换路后的真实闭合回路求放电电阻。电感电流连续但电压不必连续；它为维持原电流会反转极性。

## 逐步解答

### 1. 换路前的稳态电流

稳态电感短路，$R_2,R_3$ 并联，等效为 2 kΩ，与 $R_1$ 串联。

$$
I_S=\frac{10}{2k+2k}=2.5\rm mA.
$$

由于 $R_2=R_3$，

$$
i_L(0^-)=1.25\rm mA,\qquad i_L(0^+)=1.25\rm mA.
$$

### 2. 换路后识别续流回路

电源与 $R_1$ 被断开；电感电流经过 $R_2$、$R_3$ 构成串联回路。

$$
R_{eq}=R_2+R_3=8k\Omega,\quad \tau=\frac{L}{R_{eq}}=25\mu\rm s.
$$

### 3. 写出电流与电压

终值为 0，故

$$
\boxed{i_L(t)=1.25e^{-40000t}\rm mA,\quad t\ge0.}
$$

电压与电流取关联参考方向，用国际单位求导：

$$
u_L=L\frac{di_L}{dt}=0.2(1.25\times10^{-3})(-40000)e^{-40000t},
$$

$$
\boxed{u_L(t)=-10e^{-40000t}\rm V.}
$$

## 结果自检

$u_L(0^-)=0$，而 $u_L(0^+)=-10\rm V$。$u_L+(R_2+R_3)i_L=0$ 对任意 $t\ge0$ 成立；初始储能 $Li_0^2/2=0.15625\mu\rm J$ 最终全部耗散于电阻。

## 易错点

求时间常数时 $R_2,R_3$ 在放电回路中串联。不能把换路前的并联关系一直沿用，也不能给已断开的 $R_1$ 留一个放电通路。

## 对应知识点

[电感的伏安关系与储能](/my-web/notes/obsidian/19b122467f6cebf2/) · [换路定律与初始值](/my-web/notes/obsidian/50aed8ea4d5c45b2/) · [一阶电路三要素法](/my-web/notes/obsidian/90cba90d8e907b67/) · [RL一阶响应](/my-web/notes/obsidian/abd5e632e172ba01/)

## 原始出处

《电路与电子学学习指导与习题解答》 PDF第49页

原图从项目资料逐页截取；解题过程为本库重新推导。图片默认展开，点击图片可放大。

[返回原题题库](/my-web/notes/obsidian/0ccc1ba647a82d72/) · [课程入口](/my-web/notes/obsidian/115436d99c2c2ddd/)
