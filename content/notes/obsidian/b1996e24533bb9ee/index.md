---
title: ED05 已知两支路电流反求电桥参数
date: '2026-10-16T11:41:06.466559+00:00'
lastmod: '2026-10-16T11:41:06.466559+00:00'
draft: false
description: ''
tags:
- 原题精解
- 电路
note_links:
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/44b18b6111927f4a/index.md
- notes/obsidian/48f4acf6a44a144b/index.md
- notes/obsidian/7de8d96e94f22918/index.md
- notes/obsidian/87f1dce4c5d02a59/index.md
- notes/obsidian/e8ca477daa3b2118/index.md
obsidian: true
note_course: 电路
---

# 已知两支路电流反求电桥参数

## 原题与配图

![ED05-1](/my-web/notes-media/asset-0af8d4f859cc9c42.webp)

![ED05-2](/my-web/notes-media/asset-cd22bdbf5c56a3f8.webp)

**习题解答1-8，印刷第17—18页，图1-33 · 进阶**

求原图桥支路电流 $I$、右下电阻 $R$ 和电源电压 $U_S$。左上 5 Ω 中电流向下 3 A，右上 10 Ω 中电流向下 2 A，左下为 6 Ω，桥支路为 10 Ω；原图桥电流 $I$ 的参考方向从右到左。

## 解题思路

共同上节点到两个中节点的压降已知，先相减得到桥电压；再用 KCL 求两个下支路电流。这里不必建立完整联立方程。

## 逐步解答

### 1. 比较中节点电位

设上节点为 $V_T$，左、右中节点分别 $V_L,V_R$。

$$
V_L=V_T-3\times5=V_T-15,
$$

$$
V_R=V_T-2\times10=V_T-20.
$$

按原图右向左的桥电流：

$$
\boxed{I=\frac{V_R-V_L}{10}=\frac{-5}{10}=-0.5\rm A.}
$$

即实际有 0.5 A 从左流向右。

### 2. 左中节点 KCL 求电源

左下电流 $I_3=3+I=2.5\rm A$，因此左中节点对底部电压 $V_L=6\times2.5=15\rm V$。

$$
\boxed{U_S=V_T=15+15=30\rm V.}
$$

### 3. 右中节点 KCL 反求电阻

$$
I_R=2-I=2.5\rm A,\qquad V_R=30-20=10\rm V,
$$

$$
\boxed{R=V_R/I_R=4\Omega.}
$$

## 结果自检

上端总电流 $3+2=5\rm A$，下端总电流 $2.5+2.5=5\rm A$。各电阻功率 $45+40+37.5+25+2.5=150\rm W$，等于电源输出 $30\times5$。

## 易错点

一定看清原图桥电流向左，因此答案是 $-0.5\rm A$。右下电流是 $2-I$；直接写 $2+I$ 会把跨节点流向弄反。

## 对应知识点

[参考方向与关联参考方向](/my-web/notes/obsidian/44b18b6111927f4a/) · [功率与功率平衡](/my-web/notes/obsidian/48f4acf6a44a144b/) · [基尔霍夫电流定律KCL](/my-web/notes/obsidian/87f1dce4c5d02a59/) · [基尔霍夫电压定律KVL](/my-web/notes/obsidian/e8ca477daa3b2118/) · [支路电流法与节点电压法](/my-web/notes/obsidian/7de8d96e94f22918/)

## 原始出处

《电路与电子学学习指导与习题解答》 PDF第23页 · 《电路与电子学学习指导与习题解答》 PDF第24页

原图从项目资料逐页截取；解题过程为本库重新推导。图片默认展开，点击图片可放大。

[返回原题题库](/my-web/notes/obsidian/0ccc1ba647a82d72/) · [课程入口](/my-web/notes/obsidian/115436d99c2c2ddd/)
