---
title: ED07 从复电压反求两个串联元件
date: '2026-10-16T11:41:09.346180+00:00'
lastmod: '2026-10-16T11:41:09.346180+00:00'
draft: false
description: ''
tags:
- 原题精解
- 电路
note_links:
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/1522323228def87d/index.md
- notes/obsidian/28e997c5a15ba291/index.md
- notes/obsidian/3ab140eab2134944/index.md
- notes/obsidian/53a8e7a42b0b67fa/index.md
obsidian: true
note_course: 电路
---

# 从复电压反求两个串联元件

## 原题与配图

![ED07-1](/my-web/notes-media/asset-0ca024d5c50c87f2.webp)

![ED07-2](/my-web/notes-media/asset-ce34196e4279ae22.webp)

**习题解答3-10，印刷第63—64页，图3-25 · 进阶**

串联 $C_1,R_2,C_2$ 电路中，$\dot I=5\angle0^\circ\rm A$，$\dot U=(55-j75)\rm V$，电容 $C_1$ 的电压有效值 $U_1=50\rm V$。求容抗大小 $X_{C2}$ 和 $R_2$。

## 解题思路

电流已经选作零相位，电阻电压在实轴，电容电压在负虚轴。先把 $U_1$ 这个幅值恢复为相量，再从总相量中减去，最后除以电流。

## 逐步解答

### 1. 从幅值恢复电容电压相位

电容电压落后电流 $90^\circ$，所以

$$
\dot U_1=50\angle(-90^\circ)=-j50\rm V.
$$

### 2. 用 KVL 求其余两元件电压和

$$
\dot U_{R2}+\dot U_{C2}=\dot U-\dot U_1=(55-j75)-(-j50)=55-j25\rm V.
$$

### 3. 除以电流识别实部与虚部

$$
R_2-jX_{C2}=\frac{55-j25}{5}=11-j5\Omega.
$$

$$
\boxed{R_2=11\Omega,\qquad X_{C2}=5\Omega.}
$$

相量图解释：两个电容电压在同一负虚轴，总容性压降为 75 V；$C_1$ 占 50 V，$C_2$ 占 25 V，而电阻压降是 55 V。

没有给频率，所以本题只能确定容抗，不能单独确定电容量。若另给 $\omega$，才可用 $C_2=1/(\omega X_{C2})$。

## 结果自检

反代：$5[11-j(10+5)]=55-j75\rm V$。$C_1$ 的容抗为 $50/5=10\Omega$，两个电容压降均符合落后 $90^\circ$。

## 易错点

$50\rm V$ 是有效值，不是 $+50$ 的实相量。求 $X_C$ 时通常报告正的大小，容性符号由阻抗 $-jX_C$ 表达。

## 对应知识点

[正弦量与有效值](/my-web/notes/obsidian/53a8e7a42b0b67fa/) · [相量与复数运算](/my-web/notes/obsidian/1522323228def87d/) · [RLC元件复阻抗](/my-web/notes/obsidian/3ab140eab2134944/) · [RLC串联与相量图](/my-web/notes/obsidian/28e997c5a15ba291/)

## 原始出处

《电路与电子学学习指导与习题解答》 PDF第69页 · 《电路与电子学学习指导与习题解答》 PDF第70页

原图从项目资料逐页截取；解题过程为本库重新推导。图片默认展开，点击图片可放大。

[返回原题题库](/my-web/notes/obsidian/0ccc1ba647a82d72/) · [课程入口](/my-web/notes/obsidian/115436d99c2c2ddd/)
