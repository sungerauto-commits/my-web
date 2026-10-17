---
title: ED03 日光灯镇流器反求与功率因数补偿
date: '2026-10-16T11:46:17.187633+00:00'
lastmod: '2026-10-16T11:46:17.187633+00:00'
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
- notes/obsidian/cfd166f4fe2772af/index.md
- notes/obsidian/f022f03e0999976d/index.md
obsidian: true
note_course: 电路
---

# 日光灯镇流器反求与功率因数补偿

## 原题与配图

![ED03-1](/my-web/notes-media/asset-97c312e0b0067ba4.webp)

![ED03-2](/my-web/notes-media/asset-d7fdd0e2fbb385b9.webp)

**教材练习3.7.2，印刷第89页，图3.09 · 综合**

日光灯接 220 V、50 Hz 电源，灯管电压 100 V，电流 0.4 A，镇流器有功功率 7 W。（1）求灯管电阻 $R_L$ 和镇流器电阻 $R$、电感 $L$；（2）求灯管有功功率、总有功功率及功率因数；（3）要把功率因数提高到 0.9，需要并联多大电容？

## 解题思路

将灯管视为电阻，镇流器视为串联 RL。先用有功量找电阻，再用电压相量的直角关系找感抗；补偿电容改变总无功，不改变理想模型中的灯管支路电流与有功。

## 逐步解答

### 1. 由同相量求电阻

$$
R_L=\frac{100}{0.4}=250\Omega,\qquad R=\frac7{0.4^2}=43.75\Omega.
$$

总电阻压降 $U_{\parallel}=I(R_L+R)=117.5\rm V$，它与感抗压降正交。

### 2. 用相量勾股关系求电感

$$
U_{\perp}=\sqrt{220^2-117.5^2}\approx185.994\rm V,
$$

$$
X_L=U_{\perp}/0.4\approx464.985\Omega,\qquad\boxed{L=\frac{X_L}{2\pi50}\approx1.480\rm H.}
$$

### 3. 功率与功率因数

$$
P_L=100\times0.4=40\rm W,\quad P=40+7=47\rm W,
$$

$$
S=UI=88\rm VA,\qquad\boxed{\cos\varphi=47/88\approx0.5341.}
$$

$$
Q=\sqrt{S^2-P^2}\approx74.3976\rm var.
$$

### 4. 用无功差确定并联电容

目标为仍略呈感性的 $\cos\varphi'=0.9$，所需剩余无功

$$
Q'=P\tan(\arccos0.9)=47\frac{\sqrt{1-0.9^2}}{0.9}\approx22.7631\rm var.
$$

电容提供的容性无功大小 $Q_C=Q-Q'$，且 $Q_C=\omega CU^2$，故

$$
\boxed{C=\frac{Q-Q'}{2\pi50\times220^2}\approx3.396\mu\rm F.}
$$

若只指定功率因数的绝对值而允许过补偿到容性，还可有另一电容值；通常“提高到 0.9”取上述欠补偿解。

## 结果自检

补偿后电源电流为 $P/(0.9U)\approx0.2374\rm A$，小于原来的 0.4 A；灯管支路电流仍为 0.4 A。$\sqrt{117.5^2+U_{\perp}^2}=220$。

## 易错点

220 V 不能减去 100 V 就当作镇流器的感抗电压；交流压降必须按相位相加。镇流器 7 W 是有功损耗，不是无功功率。

## 对应知识点

[正弦量与有效值](/my-web/notes/obsidian/53a8e7a42b0b67fa/) · [相量与复数运算](/my-web/notes/obsidian/1522323228def87d/) · [RLC元件复阻抗](/my-web/notes/obsidian/3ab140eab2134944/) · [RLC串联与相量图](/my-web/notes/obsidian/28e997c5a15ba291/) · [交流并联与导纳](/my-web/notes/obsidian/cfd166f4fe2772af/) · [交流功率与功率因数](/my-web/notes/obsidian/f022f03e0999976d/)

## 原始出处

《电工学（少学时）》第五版 PDF第102页

原图从项目资料逐页截取；解题过程为本库重新推导。图片默认展开，点击图片可放大。

[返回原题题库](/my-web/notes/obsidian/0ccc1ba647a82d72/) · [课程入口](/my-web/notes/obsidian/115436d99c2c2ddd/)
