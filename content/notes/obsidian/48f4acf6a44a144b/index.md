---
title: D02 功率与功率平衡
date: '2026-10-16T17:07:06.886287+00:00'
lastmod: '2026-10-16T17:07:06.886287+00:00'
draft: false
description: ''
tags:
- 电路
- 知识点
note_links:
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/19b122467f6cebf2/index.md
- notes/obsidian/44b18b6111927f4a/index.md
- notes/obsidian/4deccae1762f21a1/index.md
- notes/obsidian/85f9dbeeea23a917/index.md
- notes/obsidian/b1996e24533bb9ee/index.md
- notes/obsidian/d3f7e725d6b14baa/index.md
- notes/obsidian/e531b97aac547143/index.md
- notes/obsidian/f022f03e0999976d/index.md
obsidian: true
note_course: 电路
---

# 功率与功率平衡

> [!tip] 做题入口
> 判断电源供电还是被充电，要看电流从哪端进入。

## 详细讲解：从理解到列式

### 图解：参考方向

![参考方向](/my-web/notes-media/asset-593f924b34643d0f.svg)

箭头和正负端先定义变量，计算后再解释实际方向。 图为本库补充示意，不替代原题中的几何与方向。

### 为什么所有元件要用同一种功率约定

一个电源可能供能，也可能被其他电源充电。统一用吸收功率 $p_{abs}$：$p_{abs}>0$ 是能量进入元件，$p_{abs}<0$ 是能量离开。这样全电路的能量守恒写成 $\sum p_{abs}=0$，不必先猜谁是电源。

### 功率和能量的联系

电压的单位 J/C，电流的单位 C/s，所以 $ui$ 的单位是 J/s。关联参考下，

$$
p=ui,\qquad W(t_1)-W(t_0)=\int_{t_0}^{t_1}p(t)\,dt.
$$

对电阻代入 $u=Ri$，得 $p_R=Ri^2=u^2/R\ge0$；被动电阻不可能持续输出能量。对电容、电感，瞬时功率可以为负，因为它们能把先前储存的能量还给电路。

### 怎样用它发现错误

先算所有电阻的耗散功率，再按各源的实际参考关系算源功率。例如源吸收功率为 $-24\rm W$，电阻共耗 $21.6\rm W$，另一元件吸收 $2.4\rm W$，代数和才为零。若把 $-24$ 改成 $+24$ 再相加，等于混用了发出与吸收约定。功率平衡是整体核验，通过它也不能保证每个未知量都唯一正确，还应代回 KCL/KVL。

### 学习顺序

先读：[参考方向与关联参考方向](/my-web/notes/obsidian/44b18b6111927f4a/)。

再用到：[电容的伏安关系与储能](/my-web/notes/obsidian/4deccae1762f21a1/)、[电感的伏安关系与储能](/my-web/notes/obsidian/19b122467f6cebf2/)、[交流功率与功率因数](/my-web/notes/obsidian/f022f03e0999976d/)。

[在学习地图中定位本节](/my-web/notes/?map=D02#notes-graph-heading)

## 概念与适用条件

瞬时功率 $p=ui$ 的“正表示吸收”建立在关联参考方向下。非关联时，吸收功率为 $p_{\mathrm{abs}}=-ui$。元件叫电源并不保证它始终供电；理想电压源也可以吸收能量。

## 推导

电荷 $dq$ 从正端进入，获得能量 $dW=u\,dq$，所以 $p=dW/dt=u\,dq/dt=ui$。电阻关联时

$$
p_R=ui=Ri^2=\frac{u^2}{R}\ge0.
$$

以吸收功率统一记号，完整电路满足 $\sum p_{\mathrm{abs}}=0$。

## 解题步骤

1. 先求电压、电流，再逐个判断是否关联。
2. 统一写“吸收功率”；发出功率表现为负值。
3. 求和检查功率守恒。

## 课件原题｜例1.5.1

**题目与电路图：** 直流课件 PDF 第45页。$U_S=3\mathrm V$、$I_S=3\mathrm A$、$R=1\Omega$，三者串联，电流进入电压源正端。

1. 电流源固定回路电流，$I=3\mathrm A$。
2. 电流源需要克服电阻和电压源的压降，$U=U_S+RI_S=6\mathrm V$。
3. 电阻吸收 $P_R=3^2\times1=9\mathrm W$。
4. 电压源吸收 $P_U=3\times3=9\mathrm W$，相当于被充电。
5. 电流源电流从其电压负端进入，吸收功率 $P_I=-6\times3=-18\mathrm W$。
6. $9+9-18=0$，功率平衡。

## 易错与自检

不能把“电压源发出9W”当成默认答案。只有电阻可直接用 $I^2R$，不能对理想电流源套这个式子。

## 闭卷回想

理想电压源电压不变时，外部电路能不能使它从供电变成吸收电能？依据是什么？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第45页。页码是阅读器页码。
- [课堂笔记图02 · IMG20261015231827](/my-web/notes-media/asset-60ee910588e39f12.webp)。
- [课堂笔记图03 · IMG20261015231836](/my-web/notes-media/asset-9a88eedb658bff8f.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015231827](/my-web/notes-media/asset-60ee910588e39f12.webp)

> [!example]- 展开查看原题所在课件页
> 1-直流电路（6学时）-2026更新

## 关联与返回

[参考方向与关联参考方向](/my-web/notes/obsidian/44b18b6111927f4a/)、[独立源与受控源](/my-web/notes/obsidian/e531b97aac547143/)、[交流功率与功率因数](/my-web/notes/obsidian/f022f03e0999976d/)

[返回电路入口](/my-web/notes/obsidian/115436d99c2c2ddd/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [双电源供电：支路电流与电源吸收功率](/my-web/notes/obsidian/d3f7e725d6b14baa/) · 综合
- [已知两支路电流反求电桥参数](/my-web/notes/obsidian/b1996e24533bb9ee/) · 进阶

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-直流电路（6学时）-2026更新 · 源的电压电流与功率平衡](/my-web/notes/obsidian/85f9dbeeea23a917/#%E9%A2%98%E5%9E%8B02-%E6%BA%90%E7%9A%84%E7%94%B5%E5%8E%8B%E7%94%B5%E6%B5%81%E4%B8%8E%E5%8A%9F%E7%8E%87%E5%B9%B3%E8%A1%A1)
