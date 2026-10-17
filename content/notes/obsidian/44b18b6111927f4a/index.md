---
title: D01 参考方向与关联参考方向
date: '2026-10-16T17:07:06.884268+00:00'
lastmod: '2026-10-16T17:07:06.884268+00:00'
draft: false
description: ''
tags:
- 电路
- 知识点
note_links:
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/19b122467f6cebf2/index.md
- notes/obsidian/48f4acf6a44a144b/index.md
- notes/obsidian/4deccae1762f21a1/index.md
- notes/obsidian/53a8e7a42b0b67fa/index.md
- notes/obsidian/85f9dbeeea23a917/index.md
- notes/obsidian/87f1dce4c5d02a59/index.md
- notes/obsidian/b1996e24533bb9ee/index.md
- notes/obsidian/d3f7e725d6b14baa/index.md
- notes/obsidian/e531b97aac547143/index.md
- notes/obsidian/e8ca477daa3b2118/index.md
- notes/obsidian/f6180e1bff800236/index.md
obsidian: true
note_course: 电路
---

# 参考方向与关联参考方向

> [!tip] 做题入口
> 算出负数，先解释方向，再判断是否做错。

## 详细讲解：从理解到列式

### 图解：参考方向

![参考方向](/my-web/notes-media/asset-593f924b34643d0f.svg)

箭头和正负端先定义变量，计算后再解释实际方向。 图为本库补充示意，不替代原题中的几何与方向。

### 先把“量的定义”和“物理方向”分开

电压 $u_{ab}=V_a-V_b$ 是两个电位的有序差，交换下标就变号；电流则是沿所画箭头通过的电荷流率。箭头是变量的定义，不是事先猜答案。算出 $i=-2\rm A$，含义是沿箭头的电流为负，即实际有 2 A 反向流动。

### 从同一个电阻推出两种写法

对电阻，高电位向低电位的实际电流满足欧姆定律。若电流参考从 $a$ 指向 $b$，定义电阻电导 $G=1/R$，就有 $i=G(V_a-V_b)=u_{ab}/R$。若把电流箭头改成 $b\to a$，新变量 $i'=-i$，于是 $u_{ab}=-Ri'$。不是欧姆定律变了，而是变量变了。

功率也先统一为“元件吸收的功率”：电流参考流入标注正端时 $p=ui$，流入负端时 $p=-ui$。因此关联参考下 $ui<0$ 表示元件向外供能，不能把它说成计算失败。

### 列式时怎么检查

每写一个 $u=Ri$，用笔沿电流箭头看它先进入哪一端；每算一个功率，先声明是吸收还是发出。做完后把负的电流改述成实际方向，原方程中的符号保持不变。自问：若只把电压正负端交换，电阻耗散功率会改变吗？不会，因为电压定义与功率公式的符号会一起改变。

### 学习顺序

先读：本节可作为起点。

再用到：[功率与功率平衡](/my-web/notes/obsidian/48f4acf6a44a144b/)、[电阻串并联与分压分流](/my-web/notes/obsidian/f6180e1bff800236/)、[独立源与受控源](/my-web/notes/obsidian/e531b97aac547143/)、[基尔霍夫电流定律KCL](/my-web/notes/obsidian/87f1dce4c5d02a59/)、[基尔霍夫电压定律KVL](/my-web/notes/obsidian/e8ca477daa3b2118/)、[电容的伏安关系与储能](/my-web/notes/obsidian/4deccae1762f21a1/)、[电感的伏安关系与储能](/my-web/notes/obsidian/19b122467f6cebf2/)、[正弦量与有效值](/my-web/notes/obsidian/53a8e7a42b0b67fa/)。

[在学习地图中定位本节](/my-web/notes/?map=D01#notes-graph-heading)

## 概念与适用条件

电流箭头、电压的正负端是人为选定的参考。定义 $u_{ab}=V_a-V_b$，$i>0$ 表示实际电流沿参考箭头。电流从电压标注的正端流入元件时，称为关联参考方向。参考方向定好以后，不要在计算中途偷偷更换。

## 为什么这样写

对线性电阻，关联时 $u=Ri$，非关联时 $u=-Ri$。两种写法描述同一个物理规律，只是变量定义不同。$u_{ab}<0$ 意味着 $V_a<V_b$，不是“没有电压”。

## 解题步骤

1. 在每个待求支路上画电流箭头，在元件两端写电压正负。
2. 判断电阻的电压、电流是否关联，再写伏安关系。
3. 保留这些参考方向列 KCL、KVL。
4. 解出负数时，用一句话解释实际方向。

## 补充示例｜电阻上出现负电流

**题目：** $R=3\Omega$，定义 $u_{ab}=6\mathrm V$，电流参考从 $b$ 指向 $a$，求 $i$。

1. 电流参考从电压负端进入，是非关联参考。
2. 写 $u_{ab}=-Ri$，于是 $i=-6/3=-2\mathrm A$。
3. 实际电流为 $2\mathrm A$，从 $a$ 流向 $b$；符合高电势流向低电势。

## 易错与自检

负电流不能直接带入“发出功率”结论，要看关联关系。复查时把实际箭头画出来，检查电阻是否始终吸收功率。

## 闭卷回想

同一电阻仅把电流参考反向，电压不变，伏安方程和电流数值分别怎样变化？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第17页至第31页。页码是阅读器页码。
- [课堂笔记图03 · IMG20261015231836](/my-web/notes-media/asset-9a88eedb658bff8f.webp)。
- [课堂笔记图05 · IMG20261015231854](/my-web/notes-media/asset-d33147ddab79d2ca.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015231836](/my-web/notes-media/asset-9a88eedb658bff8f.webp)

## 关联与返回

[功率与功率平衡](/my-web/notes/obsidian/48f4acf6a44a144b/)、[基尔霍夫电流定律KCL](/my-web/notes/obsidian/87f1dce4c5d02a59/)、[基尔霍夫电压定律KVL](/my-web/notes/obsidian/e8ca477daa3b2118/)

[返回电路入口](/my-web/notes/obsidian/115436d99c2c2ddd/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [双电源供电：支路电流与电源吸收功率](/my-web/notes/obsidian/d3f7e725d6b14baa/) · 综合
- [已知两支路电流反求电桥参数](/my-web/notes/obsidian/b1996e24533bb9ee/) · 进阶

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-直流电路（6学时）-2026更新 · 参考方向与欧姆关系](/my-web/notes/obsidian/85f9dbeeea23a917/#%E9%A2%98%E5%9E%8B01-%E5%8F%82%E8%80%83%E6%96%B9%E5%90%91%E4%B8%8E%E6%AC%A7%E5%A7%86%E5%85%B3%E7%B3%BB)
