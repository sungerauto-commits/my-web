---
title: D08 叠加定理
date: '2026-10-16T17:07:06.894298+00:00'
lastmod: '2026-10-16T17:07:06.894298+00:00'
draft: false
description: ''
tags:
- 电路
- 知识点
note_links:
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/29d0477b8a7ab3b3/index.md
- notes/obsidian/7de8d96e94f22918/index.md
- notes/obsidian/85f9dbeeea23a917/index.md
- notes/obsidian/9ed1c7c2e782ef18/index.md
- notes/obsidian/e531b97aac547143/index.md
obsidian: true
note_course: 电路
---

# 叠加定理

> [!tip] 做题入口
> 多个独立源逐个作用，最后叠加电压或电流。

## 详细讲解：从理解到列式

### 图解：源置零

![源置零](/my-web/notes-media/asset-e2966f6d72616c85.svg)

置零操作与求终值不同，求终值要保留实际电源。 图为本库补充示意，不替代原题中的几何与方向。

### 叠加的对象是线性响应

在线性电阻、线性电容电感和线性受控源网络中，方程可写成 $A\mathbf x=\mathbf b_1+\mathbf b_2$。由于同一个矩阵 $A$ 不变，解为 $\mathbf x=A^{-1}\mathbf b_1+A^{-1}\mathbf b_2$。这就是各独立激励分别造成的电压、电流可以相加的依据。

### 为什么求功率时不能直接叠加

若同一电阻电流为 $i=i_1+i_2$，则

$$
p=R(i_1+i_2)^2=Ri_1^2+Ri_2^2+2Ri_1i_2.
$$

分开算的两项功率漏了交叉项。因此先用叠加求总电压或总电流，再代入功率公式。

### 实际做题的四步

每次只保留一个独立源，其余独立电压源短路、独立电流源开路；受控源始终保留。各子电路沿用同一待求量的参考方向，分别计算，最后代数相加。若某源贡献为负，它是在削弱沿正参考方向的响应，不是可以忽略。

初始储能也能构成响应的一部分；暂态题若电容原本带电，不能只叠加外部源的零状态响应而漏掉零输入响应。看到二极管等非线性元件时，不能无条件套用此定理。

### 学习顺序

先读：[独立源与受控源](/my-web/notes/obsidian/e531b97aac547143/)、[支路电流法与节点电压法](/my-web/notes/obsidian/7de8d96e94f22918/)。

用于练习：[对应课件的题型练习](/my-web/notes/obsidian/9ed1c7c2e782ef18/)。

[在学习地图中定位本节](/my-web/notes/?map=D08#notes-graph-heading)

## 概念与适用条件

线性电路中，响应电压、电流等于各独立源分别作用的代数和。每次仅保留一个独立源，其他独立电压源置零短路、独立电流源置零开路；受控源保留。非线性电阻一般不能直接使用叠加。

## 推导

线性方程 $A\mathbf x=\mathbf b_1+\mathbf b_2$，给出 $\mathbf x=A^{-1}\mathbf b_1+A^{-1}\mathbf b_2$。功率含平方：$(i_1+i_2)^2R$ 有交叉项，因此功率不能按各源单独作用的功率直接相加。

## 解题步骤

1. 在原电路上固定目标电流箭头或电压正负。
2. 为每个独立源画一张除源后的等效电路。
3. 求带符号的分响应，并按同一参考相加。
4. 有需要时用总响应计算功率。

## 课件原题｜例1.7.1

**题图见直流课件 PDF 第78页。** $U_S=10\mathrm V$，$I_S=2\mathrm A$，$R_1=4\Omega,R_2=1\Omega,R_3=5\Omega,R_4=3\Omega$，求图中 $I_5,U_6$。

1. 电压源单独作用，电流源开路。$I'_5=10/(4+1)+10/(5+3)=3.25\mathrm A$。
2. 按原图 $U_6$ 的参考正负，$U'_6=1\times2-3\times1.25=-1.75\mathrm V$。
3. 电流源单独作用，电压源短路。分流得到 $1.6\mathrm A$ 和 $1.25\mathrm A$。
4. 按原图目标箭头，$I''_5=1.6-1.25=0.35\mathrm A$；$U''_6=1\times1.6+3\times1.25=5.35\mathrm V$。
5. $I_5=3.25+0.35=3.6\mathrm A$，$U_6=-1.75+5.35=3.6\mathrm V$。

## 易错与自检

每个分电路都要保留相同目标参考。除源后拓扑会变化，要重新判断串并联。不要叠加功率。

## 闭卷回想

两个分响应电流分别为1A和2A，通过1Ω电阻时，总功率为什么不是1W+4W？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第69页至第80页。页码是阅读器页码。
- [课堂笔记图06 · IMG20261015231901](/my-web/notes-media/asset-11ee4fe73b676246.webp)。
- [课堂笔记图07 · IMG20261015231905](/my-web/notes-media/asset-0a34cf85ac193d04.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015231901](/my-web/notes-media/asset-11ee4fe73b676246.webp)

> [!example]- 展开查看原题所在课件页
> 1-直流电路（6学时）-2026更新

## 关联与返回

[独立源与受控源](/my-web/notes/obsidian/e531b97aac547143/)、[支路电流法与节点电压法](/my-web/notes/obsidian/7de8d96e94f22918/)、[戴维宁定理](/my-web/notes/obsidian/29d0477b8a7ab3b3/)

[返回电路入口](/my-web/notes/obsidian/115436d99c2c2ddd/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-直流电路（6学时）-2026更新 · 叠加法分源求响应](/my-web/notes/obsidian/85f9dbeeea23a917/#%E9%A2%98%E5%9E%8B07-%E5%8F%A0%E5%8A%A0%E6%B3%95%E5%88%86%E6%BA%90%E6%B1%82%E5%93%8D%E5%BA%94)
