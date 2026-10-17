---
title: D07 支路电流法与节点电压法
date: '2026-10-16T17:07:06.893293+00:00'
lastmod: '2026-10-16T17:07:06.893293+00:00'
draft: false
description: ''
tags:
- 电路
- 知识点
note_links:
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/29d0477b8a7ab3b3/index.md
- notes/obsidian/85f9dbeeea23a917/index.md
- notes/obsidian/87f1dce4c5d02a59/index.md
- notes/obsidian/98d7b871642b2259/index.md
- notes/obsidian/b1996e24533bb9ee/index.md
- notes/obsidian/d3f7e725d6b14baa/index.md
- notes/obsidian/e8ca477daa3b2118/index.md
- notes/obsidian/f6180e1bff800236/index.md
- notes/obsidian/f832fae005637b62/index.md
obsidian: true
note_course: 电路
---

# 支路电流法与节点电压法

> [!tip] 做题入口
> 不能直接串并联时，用KCL和KVL组织未知量。

## 详细讲解：从理解到列式

### 图解：KCL

![KCL](/my-web/notes-media/asset-fb67c8dfddd63a26.svg)

把每条支路电流按同一流入/流出约定列式。 图为本库补充示意，不替代原题中的几何与方向。

### 先决定未知量，方程数量才可控

支路电流法把每条支路电流当未知量，配合 KCL、KVL 和元件关系；节点法把节点对地电压当未知量，用欧姆定律消去电阻电流。不是两套物理定律，而是消元顺序不同。电压源较多、支路少时支路法直接；并联支路较多时节点法通常更省。

### 推出一个标准节点方程

设节点 $V$ 通过 $R_1,R_2$ 分别接已知电位 $E_1,E_2$，通过 $R_3$ 接地，另有电流源注入 $I_S$。从该节点流出的电阻电流依次为 $(V-E_1)/R_1,(V-E_2)/R_2,V/R_3$，所以

$$
\left(\frac1{R_1}+\frac1{R_2}+\frac1{R_3}\right)V=I_S+\frac{E_1}{R_1}+\frac{E_2}{R_2}.
$$

左边是总电导乘节点电位，右边是源的注入贡献。若有两个未知节点，每个节点对角系数是接入它的电导之和，另一节点的系数是两节点间电导的负值。

### 电压源跨两个未知节点怎么办

普通欧姆关系不能求理想电压源电流。把源两端节点包成超节点，外边界列 KCL，再补 $V_a-V_b=U_S$。求完节点电压要回到原图，按题目要求的参考方向恢复每个电流，不能把节点电位直接当成每个元件两端电压。

### 学习顺序

先读：[电阻串并联与分压分流](/my-web/notes/obsidian/f6180e1bff800236/)、[基尔霍夫电流定律KCL](/my-web/notes/obsidian/87f1dce4c5d02a59/)、[基尔霍夫电压定律KVL](/my-web/notes/obsidian/e8ca477daa3b2118/)。

再用到：[叠加定理](/my-web/notes/obsidian/98d7b871642b2259/)、[戴维宁定理](/my-web/notes/obsidian/29d0477b8a7ab3b3/)、[非线性电阻与负载线](/my-web/notes/obsidian/f832fae005637b62/)。

[在学习地图中定位本节](/my-web/notes/?map=D07#notes-graph-heading)

## 概念与选择

支路电流法把各支路电流作为未知量，列 $n-1$ 个独立 KCL 和 $b-n+1$ 个独立 KVL。节点电压法把非参考节点的电位作为未知量，用电阻支路 $i_{ab}=(V_a-V_b)/R$ 把 KCL 写成电压方程。这里节点电压法作为帮助解题的补充组织方法；课件主线是支路电流法。

## 推导

节点 $a$ 通过 $R_1$ 连到已知 $V_1$，通过 $R_2$ 接地，电流源 $I_S$ 注入节点，KCL 为

$$
\frac{V_a-V_1}{R_1}+\frac{V_a}{R_2}=I_S.
$$

未知节点之间若有理想电压源，可列超节点 KCL，并补 $V_a-V_b=U_S$。

## 解题步骤

1. 选择参考地并标所有未知电位/支路电流。
2. 找真正独立的方程，附加电源约束。
3. 解方程后还原待求电流，带符号解释方向。
4. 用另一个节点的 KCL 或功率平衡复查。

## 补充示例｜两行求出节点电压

**题目：** $a$ 通过 $2\Omega$ 连到6V节点、通过 $4\Omega$ 接地，1A电流源从地注入 $a$。

1. $\frac{V_a-6}{2}+\frac{V_a}{4}=1$。
2. 乘4：$2V_a-12+V_a=4$，得 $V_a=16/3\mathrm V$。
3. 从6V节点流向 $a$ 的电流 $i_1=(6-16/3)/2=1/3\mathrm A$。
4. 从 $a$ 向地 $i_2=(16/3)/4=4/3\mathrm A$，满足 $1+1/3=4/3$。

## 易错与自检

“节点电位”一定相对选定的参考地。一个节点有多条支路时，先统一以流出为正写 $(V_a-V_{\mathrm{邻}})/R$，可减少符号错误。

## 闭卷回想

只求一个节点电压时，为什么通常不必先求所有支路电流？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第61页至第68页。页码是阅读器页码。
- [课堂笔记图06 · IMG20261015231901](/my-web/notes-media/asset-11ee4fe73b676246.webp)。
- [课堂笔记图07 · IMG20261015231905](/my-web/notes-media/asset-0a34cf85ac193d04.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015231901](/my-web/notes-media/asset-11ee4fe73b676246.webp)

## 关联与返回

[电阻串并联与分压分流](/my-web/notes/obsidian/f6180e1bff800236/)、[基尔霍夫电流定律KCL](/my-web/notes/obsidian/87f1dce4c5d02a59/)、[基尔霍夫电压定律KVL](/my-web/notes/obsidian/e8ca477daa3b2118/)、[戴维宁定理](/my-web/notes/obsidian/29d0477b8a7ab3b3/)

[返回电路入口](/my-web/notes/obsidian/115436d99c2c2ddd/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [双电源供电：支路电流与电源吸收功率](/my-web/notes/obsidian/d3f7e725d6b14baa/) · 综合
- [已知两支路电流反求电桥参数](/my-web/notes/obsidian/b1996e24533bb9ee/) · 进阶

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-直流电路（6学时）-2026更新 · 多源多支路电流方程](/my-web/notes/obsidian/85f9dbeeea23a917/#%E9%A2%98%E5%9E%8B06-%E5%A4%9A%E6%BA%90%E5%A4%9A%E6%94%AF%E8%B7%AF%E7%94%B5%E6%B5%81%E6%96%B9%E7%A8%8B)
