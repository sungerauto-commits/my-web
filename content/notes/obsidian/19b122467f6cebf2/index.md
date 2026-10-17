---
title: D13 电感的伏安关系与储能
date: '2026-10-16T17:07:06.900812+00:00'
lastmod: '2026-10-16T17:07:06.900812+00:00'
draft: false
description: ''
tags:
- 电路
- 知识点
note_links:
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/3ab140eab2134944/index.md
- notes/obsidian/44b18b6111927f4a/index.md
- notes/obsidian/48f4acf6a44a144b/index.md
- notes/obsidian/50aed8ea4d5c45b2/index.md
- notes/obsidian/74b4cec86c01df5d/index.md
- notes/obsidian/90cba90d8e907b67/index.md
- notes/obsidian/abd5e632e172ba01/index.md
- notes/obsidian/edb0e5e8a8388139/index.md
obsidian: true
note_course: 电路
---

# 电感的伏安关系与储能

> [!tip] 做题入口
> 电感电压由电流变化率决定，直流稳态短路。

## 详细讲解：从理解到列式

### 图解：换路三张图

![换路三张图](/my-web/notes-media/asset-fa4c50b66e1d55c4.svg)

对照三时刻画图，区分状态连续和其他支路量突变。 图为本库补充示意，不替代原题中的几何与方向。

### 电感把电流的变化转成电压

线性电感的磁链 $\lambda=Li$，关联参考方向下 $u=d\lambda/dt=L\,di/dt$。因此电压决定电流变化率，而不是直接决定电流大小：

$$
i(t)=i(t_0)+\frac1L\int_{t_0}^t u(s)\,ds.
$$

电感两端某时刻电压为零，只说明电流当时不再变化，不说明电流本身为零。

### 连续性和能量从哪来

若换路电压有限且无冲激，对零时宽积分得 $L[i(0^+)-i(0^-)]=0$，电流连续。储能由 $dW=pdt=Li\,di$ 积分：$W_L=Li^2/2$。电流衰减时 $di/dt<0$，按原关联极性会出现负电压，电感正在供能维持原电流。

### 做题时要同时画续流路径

换路前直流稳态将理想电感视为短路，求它自身的支路电流；换路后保留该电流初值，重新找完整回路。不能只说“电流不断”却把全部续流路径断掉；理想电感电流被瞬间强制为零需要冲激电压，真实电路常通过寄生电容、火花或保护支路释放能量。理想模型与实际现象应分开解释。

### 学习顺序

先读：[参考方向与关联参考方向](/my-web/notes/obsidian/44b18b6111927f4a/)、[功率与功率平衡](/my-web/notes/obsidian/48f4acf6a44a144b/)。

再用到：[换路定律与初始值](/my-web/notes/obsidian/50aed8ea4d5c45b2/)、[RL一阶响应](/my-web/notes/obsidian/abd5e632e172ba01/)、[RLC元件复阻抗](/my-web/notes/obsidian/3ab140eab2134944/)。

[在学习地图中定位本节](/my-web/notes/?map=D13#notes-graph-heading)

## 概念与适用条件

线性定值电感关联参考下，$u=L\,di/dt$。电感中的电流稳定不变时，理想电感端电压为零。真实线圈还存在绕线电阻，不能把真实线圈的直流电阻一概当成零。

## 推导

磁链 $\Psi=Li$。把自感电动势与端口电压的参考统一，得到关联关系 $u=d\Psi/dt=Ldi/dt$。

$$
p=ui=Li\frac{di}{dt},\qquad W_L=\int_0^i Lx\,dx=\tfrac12Li^2.
$$

积分电流时 $i(t)=i(t_0)+L^{-1}\int_{t_0}^t u(\xi)d\xi$。

## 解题步骤

1. 标关联参考方向。
2. 求电压时对电流求导；求电流时积分并保留初值。
3. 判断直流稳态时用理想短路代替电感。

## 补充示例｜电流衰减时的电压

**题目：** $L=0.5\mathrm H$，$i(t)=2e^{-4t}\mathrm A$，关联参考。

1. $di/dt=-8e^{-4t}\mathrm{A/s}$。
2. $u(t)=-4e^{-4t}\mathrm V$。
3. $p=ui=-8e^{-8t}\mathrm W$，说明电感向外释放能量。
4. $W_L(0)=\frac12\times0.5\times2^2=1\mathrm J$；$\int_0^\infty(-p)dt=1\mathrm J$，一致。

## 易错与自检

“电感电流连续”不代表电压连续。无互感时，电感串并联形式与电阻相同；有互感时不能直接相加。

## 闭卷回想

为什么电感电流下降时，按关联方向计算的端电压可能为负？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第20页至第24页。页码是阅读器页码。
- [课堂笔记图10 · IMG20261015231929](/my-web/notes-media/asset-ebf2353729b16f40.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015231929](/my-web/notes-media/asset-ebf2353729b16f40.webp)

## 关联与返回

[换路定律与初始值](/my-web/notes/obsidian/50aed8ea4d5c45b2/)、[一阶电路三要素法](/my-web/notes/obsidian/90cba90d8e907b67/)、[RL一阶响应](/my-web/notes/obsidian/abd5e632e172ba01/)、[RLC元件复阻抗](/my-web/notes/obsidian/3ab140eab2134944/)

[返回电路入口](/my-web/notes/obsidian/115436d99c2c2ddd/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [RL断电续流：电感电压为何变负](/my-web/notes/obsidian/74b4cec86c01df5d/) · 进阶

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [2-电路的瞬态分析（4学时）-2026更新(1) · 换路瞬间与最终稳态的全部支路量](/my-web/notes/obsidian/edb0e5e8a8388139/#%E9%A2%98%E5%9E%8B01-%E6%8D%A2%E8%B7%AF%E7%9E%AC%E9%97%B4%E4%B8%8E%E6%9C%80%E7%BB%88%E7%A8%B3%E6%80%81%E7%9A%84%E5%85%A8%E9%83%A8%E6%94%AF%E8%B7%AF%E9%87%8F)
