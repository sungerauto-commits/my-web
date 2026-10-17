---
title: D10 诺顿定理与电源等效变换
date: '2026-10-16T17:07:06.896816+00:00'
lastmod: '2026-10-16T17:07:06.896816+00:00'
draft: false
description: ''
tags:
- 电路
- 知识点
note_links:
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/29d0477b8a7ab3b3/index.md
- notes/obsidian/85f9dbeeea23a917/index.md
- notes/obsidian/9ed1c7c2e782ef18/index.md
- notes/obsidian/e531b97aac547143/index.md
- notes/obsidian/f6180e1bff800236/index.md
obsidian: true
note_course: 电路
---

# 诺顿定理与电源等效变换

> [!tip] 做题入口
> 同一个端口，也可写成电流源并电阻。

## 详细讲解：从理解到列式

### 图解：戴维宁

![戴维宁](/my-web/notes-media/asset-26e5e0683683a284.svg)

黑箱只承诺端口等效，不承诺内部各元件的功率不变。 图为本库补充示意，不替代原题中的几何与方向。

### 两种等效是同一条端口直线

从戴维宁关系 $u=U_{th}-R_{th}i$ 移项：

$$
i=\frac{U_{th}}{R_{th}}-\frac{u}{R_{th}}=I_N-\frac u{R_N}.
$$

因此 $I_N=U_{th}/R_{th}$，$R_N=R_{th}$。电流源箭头应使开路时正端电位为正，例如电流源从 $b$ 向 $a$ 推送电流，配合并联电阻，产生 $u_{ab}=I_NR_N$。

### 短路电流不等于内部任意支路电流

把端口 $a,b$ 短接，用题目指定方向求短路支路电流，才是 $I_{sc}$。若端口输出方向与诺顿箭头约定一致，$I_N=I_{sc}$。图里某个电流源恰好标了数值，不能因此认定它就是整个网络的诺顿电流。

### 什么不能变换

只有“电压源与其串联电阻构成的完整二端支路”才能整体变成电流源并联电阻；变换后内部节点不再与原来一一对应。若某控制量依赖这个内部节点，必须保留其关系，不能只看外形直接替换。理想零内阻电压源不能换成有限数值的诺顿源，理想无限内阻电流源也不能换成有限数值的戴维宁源。

### 学习顺序

先读：[戴维宁定理](/my-web/notes/obsidian/29d0477b8a7ab3b3/)。

用于练习：[对应课件的题型练习](/my-web/notes/obsidian/9ed1c7c2e782ef18/)。

[在学习地图中定位本节](/my-web/notes/?map=D10#notes-graph-heading)

## 概念与适用条件

线性二端网络可等效为 $I_N$ 并联 $R_N$，$I_N=I_{\mathrm{sc}}$，$R_N=R_{\mathrm{th}}$。对于有限且非零的内阻，$U_{\mathrm{th}}=I_NR_N$。转换时必须让开路端口的电压极性保持一致。

## 推导

诺顿网络端口输出电流满足 $i=I_N-u/R_N$，整理为 $u=I_NR_N-R_Ni$，与戴维宁端口方程相同。负载电流按并联分流计算：$I_L=I_N R_N/(R_N+R_L)$。

## 解题步骤

1. 确定端口和对外输出电流方向。
2. 求短路电流或由戴维宁参数转换。
3. 按同节点并联关系接回负载。
4. 用开路电压检查源箭头和电压正负是否一致。

## 课件原题续解｜例1.8.1

1. 原网络 $U_{\mathrm{oc}}=9\mathrm V$、$R_N=1\Omega$，所以 $I_N=9\mathrm A$。
2. 9A电流源与1Ω并联，再接2Ω负载。
3. $I_L=9\times1/(1+2)=3\mathrm A$，与戴维宁法一致。

## 易错与自检

裸理想电压源没有一个有限内阻的诺顿替代；理想电流源也不能随意改成有限电压源。电源变换保持端口特性，不保持变换前后内阻中的功耗。

## 闭卷回想

6V电压源串3Ω变成诺顿源时，电流是多少？开路端电压应是多少？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第91页至第95页。页码是阅读器页码。
- [课堂笔记图07 · IMG20261015231905](/my-web/notes-media/asset-0a34cf85ac193d04.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015231905](/my-web/notes-media/asset-0a34cf85ac193d04.webp)

> [!example]- 展开查看原题所在课件页
> 1-直流电路（6学时）-2026更新

## 关联与返回

[电阻串并联与分压分流](/my-web/notes/obsidian/f6180e1bff800236/)、[独立源与受控源](/my-web/notes/obsidian/e531b97aac547143/)、[戴维宁定理](/my-web/notes/obsidian/29d0477b8a7ab3b3/)

[返回电路入口](/my-web/notes/obsidian/115436d99c2c2ddd/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-直流电路（6学时）-2026更新 · 戴维宁和诺顿求负载](/my-web/notes/obsidian/85f9dbeeea23a917/#%E9%A2%98%E5%9E%8B08-%E6%88%B4%E7%BB%B4%E5%AE%81%E5%92%8C%E8%AF%BA%E9%A1%BF%E6%B1%82%E8%B4%9F%E8%BD%BD)
