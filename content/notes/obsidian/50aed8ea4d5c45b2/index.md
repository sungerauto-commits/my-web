---
title: D14 换路定律与初始值
date: '2026-10-16T17:07:06.901814+00:00'
lastmod: '2026-10-16T17:07:06.901814+00:00'
draft: false
description: ''
tags:
- 电路
- 知识点
note_links:
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/15aec57c6df1f613/index.md
- notes/obsidian/19b122467f6cebf2/index.md
- notes/obsidian/3502c3003a7fe1bb/index.md
- notes/obsidian/4deccae1762f21a1/index.md
- notes/obsidian/74b4cec86c01df5d/index.md
- notes/obsidian/90cba90d8e907b67/index.md
- notes/obsidian/edb0e5e8a8388139/index.md
obsidian: true
note_course: 电路
---

# 换路定律与初始值

> [!tip] 做题入口
> 连续的是电容电压和电感电流，其他量重新算。

## 详细讲解：从理解到列式

### 图解：换路三张图

![换路三张图](/my-web/notes-media/asset-fa4c50b66e1d55c4.svg)

对照三时刻画图，区分状态连续和其他支路量突变。 图为本库补充示意，不替代原题中的几何与方向。

### 连续的是状态量，不是所有支路量

电容用 $u_C$、电感用 $i_L$ 记录储能状态。在不存在冲激激励的常规换路题中，这两个量连续；电容电流、电感电压、其他节点电位可以突变。原因分别是 $C\Delta u_C=\int i_Cdt$、$L\Delta i_L=\int u_Ldt$，不是“电路所有东西都来不及变”。

### 三张图各做什么

第一张为 $0^-$：按换路前连接求状态，若已直流稳态则电容开路、电感短路。第二张为 $0^+$：先换成新连接，把电容替成已知电压源 $u_C(0^-)$，电感替成已知电流源 $i_L(0^-)$，用 KCL/KVL 求其他初值。第三张为 $\infty$：按换路后连接求最终稳态。

例如电容左正右负，初值为 12 V，若换路后左端接地，则 $0-V_{right}=12$，右端瞬间为 $-12\rm V$。保持的是两端电位差，并非右端对地电位。若前一阶段尚未稳态，必须用前一阶段结束时的实际状态接续，不能重新假定为稳态初值。

### 学习顺序

先读：[电容的伏安关系与储能](/my-web/notes/obsidian/4deccae1762f21a1/)、[电感的伏安关系与储能](/my-web/notes/obsidian/19b122467f6cebf2/)。

再用到：[一阶电路三要素法](/my-web/notes/obsidian/90cba90d8e907b67/)。

[在学习地图中定位本节](/my-web/notes/?map=D14#notes-graph-heading)

## 概念与适用条件

在电容电流、电感电压没有冲激的通常换路条件下，

$$
u_C(0^+)=u_C(0^-),\qquad i_L(0^+)=i_L(0^-).
$$

若理想电容被强迫瞬时接到不同理想电压，或电感被理想开路强迫电流骤变，可能涉及冲激或模型失效，不能机械套普通题型。

## 推导

由 $\Delta u_C=C^{-1}\int i_Cdt$、$\Delta i_L=L^{-1}\int u_Ldt$，在趋于零的时间区间内，有限电流/电压的积分趋于零，故状态量连续。

## 解题步骤

1. 画 $0^-$ 电路。若题目说换路前已达到直流稳态，电容开路、电感短路。
2. 求 $u_C(0^-)$、$i_L(0^-)$，不能默认等于零。
3. 连续到 $0^+$。
4. 画换路后的 $0^+$ 电路：电容以已知电压源替代，电感以已知电流源替代。
5. 用 KCL/KVL 求其余初始电压、电流。

## 补充示例｜电容初始电流能突变

**题目：** 电容原有 $u_C(0^-)=4\mathrm V$，换路后通过2kΩ接到10V源，$i_C$ 流入正端。

1. $u_C(0^+)=4\mathrm V$。
2. $0^+$ 时电阻电压为 $10-4=6\mathrm V$。
3. $i_C(0^+)=6/2000=3\mathrm{mA}$。
4. 换路前电容若是直流稳态，$i_C(0^-)=0$；电流从0跳到3mA不违反换路定律。

## 易错与自检

$0^+$ 不是 $\infty$。电容不能在这两个时刻都不加判断地视为开路。只对状态量用连续关系。

## 闭卷回想

电容电流可以突变而电压不能突变，这与 $i=Cdu/dt$ 是否矛盾？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第26页至第34页。页码是阅读器页码。
- [课堂笔记图10 · IMG20261015231929](/my-web/notes-media/asset-ebf2353729b16f40.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015231929](/my-web/notes-media/asset-ebf2353729b16f40.webp)

## 关联与返回

[电容的伏安关系与储能](/my-web/notes/obsidian/4deccae1762f21a1/)、[电感的伏安关系与储能](/my-web/notes/obsidian/19b122467f6cebf2/)、[一阶电路三要素法](/my-web/notes/obsidian/90cba90d8e907b67/)

[返回电路入口](/my-web/notes/obsidian/115436d99c2c2ddd/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [开关闭合后节点变负：跨接电容的全响应](/my-web/notes/obsidian/15aec57c6df1f613/) · 综合
- [RL断电续流：电感电压为何变负](/my-web/notes/obsidian/74b4cec86c01df5d/) · 进阶
- [恒流源RC换路：负电容电流的含义](/my-web/notes/obsidian/3502c3003a7fe1bb/) · 进阶

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [2-电路的瞬态分析（4学时）-2026更新(1) · 换路瞬间与最终稳态的全部支路量](/my-web/notes/obsidian/edb0e5e8a8388139/#%E9%A2%98%E5%9E%8B01-%E6%8D%A2%E8%B7%AF%E7%9E%AC%E9%97%B4%E4%B8%8E%E6%9C%80%E7%BB%88%E7%A8%B3%E6%80%81%E7%9A%84%E5%85%A8%E9%83%A8%E6%94%AF%E8%B7%AF%E9%87%8F)
- [2-电路的瞬态分析（4学时）-2026更新(1) · 有初始电压的全响应与阈值时间](/my-web/notes/obsidian/edb0e5e8a8388139/#%E9%A2%98%E5%9E%8B03-%E6%9C%89%E5%88%9D%E5%A7%8B%E7%94%B5%E5%8E%8B%E7%9A%84%E5%85%A8%E5%93%8D%E5%BA%94%E4%B8%8E%E9%98%88%E5%80%BC%E6%97%B6%E9%97%B4)
- [2-电路的瞬态分析（4学时）-2026更新(1) · 电源存在的换接与多电流响应](/my-web/notes/obsidian/edb0e5e8a8388139/#%E9%A2%98%E5%9E%8B07-%E7%94%B5%E6%BA%90%E5%AD%98%E5%9C%A8%E7%9A%84%E6%8D%A2%E6%8E%A5%E4%B8%8E%E5%A4%9A%E7%94%B5%E6%B5%81%E5%93%8D%E5%BA%94)
