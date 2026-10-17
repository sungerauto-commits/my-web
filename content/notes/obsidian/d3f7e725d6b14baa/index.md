---
title: ED01 双电源供电：支路电流与电源吸收功率
date: '2026-10-16T11:41:03.076688+00:00'
lastmod: '2026-10-16T11:41:03.076688+00:00'
draft: false
description: ''
tags:
- 原题精解
- 电路
note_links:
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/29d0477b8a7ab3b3/index.md
- notes/obsidian/44b18b6111927f4a/index.md
- notes/obsidian/48f4acf6a44a144b/index.md
- notes/obsidian/7de8d96e94f22918/index.md
- notes/obsidian/87f1dce4c5d02a59/index.md
- notes/obsidian/e8ca477daa3b2118/index.md
obsidian: true
note_course: 电路
---

# 双电源供电：支路电流与电源吸收功率

## 原题与配图

![ED01-1](/my-web/notes-media/asset-f44f903c66140e66.webp)

![ED01-2](/my-web/notes-media/asset-edd2e20eb1a83f32.webp)

**教材练习1.6.6（兼练习1.8.1），印刷第29—30页 · 综合**

按原图方向，求各支路电流并判断 $U_{S1},U_{S2}$ 起电源作用还是负载作用。已知 $U_{S1}=12\rm V,U_{S2}=15\rm V,R_1=3\Omega,R_2=1.5\Omega,R_3=9\Omega$。$I_1,I_2$ 向上，$I_3$ 向下，两电源正端都在上。

## 解题思路

先保留原图参考方向，再写 KCL、KVL。算出负电流不需要改图，只需解释实际方向。电源是供能还是吸能，取决于电流是否进入正端，不能凭器件名称判断。

## 逐步解答

### 1. 按支路电流法列三个方程

$$
I_1+I_2=I_3,
$$

$$
3I_1+9I_3=12,\qquad1.5I_2+9I_3=15.
$$

后两式分别沿电源支路向上、负载支路向下绕回路，电源电压等于两电阻压降之和。

### 2. 解方程并解释符号

设上下节点电压为 $V=9I_3$，则

$$
\frac{12-V}{3}+\frac{15-V}{1.5}=\frac V9,
$$

$$
\boxed{V=12.6\rm V,\quad I_1=-0.2\rm A,\quad I_2=1.6\rm A,\quad I_3=1.4\rm A.}
$$

$I_1$ 实际向下，进入 12 V 电源正端，因此该电源吸收能量；$I_2$ 向上，流出 15 V 电源正端，输出能量。

### 3. 统一用“吸收功率”检查

$$
P_{S1}=-12I_1=+2.4\rm W,\qquad P_{S2}=-15I_2=-24\rm W.
$$

三只电阻耗散功率分别为 $0.12,3.84,17.64\rm W$，总计 $21.6\rm W$。

### 4. 戴维宁交叉核对（对应1.8.1）

断开 $R_3$，开路电压由 $(12-V_{oc})/3+(15-V_{oc})/1.5=0$ 得 $V_{oc}=14\rm V$。两独立电压源短路后，$R_{th}=3\parallel1.5=1\Omega$。

$$
I_3=\frac{14}{1+9}=1.4\rm A.
$$

戴维宁法只求负载电流时更省事；原题要求所有支路电流，仍需回代原电路。

## 结果自检

KCL：$-0.2+1.6=1.4$。功率平衡：$2.4-24+21.6=0$。12 V 电源正端电位低于公共上节点 12.6 V，确实被反向充电。

## 易错点

“电压源”不等于必然向外供能。不要把负电流取绝对值后继续用原功率符号。

## 对应知识点

[参考方向与关联参考方向](/my-web/notes/obsidian/44b18b6111927f4a/) · [功率与功率平衡](/my-web/notes/obsidian/48f4acf6a44a144b/) · [基尔霍夫电流定律KCL](/my-web/notes/obsidian/87f1dce4c5d02a59/) · [基尔霍夫电压定律KVL](/my-web/notes/obsidian/e8ca477daa3b2118/) · [支路电流法与节点电压法](/my-web/notes/obsidian/7de8d96e94f22918/) · [戴维宁定理](/my-web/notes/obsidian/29d0477b8a7ab3b3/)

## 原始出处

《电工学（少学时）》第五版 PDF第42页 · 《电工学（少学时）》第五版 PDF第43页

原图从项目资料逐页截取；解题过程为本库重新推导。图片默认展开，点击图片可放大。

[返回原题题库](/my-web/notes/obsidian/0ccc1ba647a82d72/) · [课程入口](/my-web/notes/obsidian/115436d99c2c2ddd/)
