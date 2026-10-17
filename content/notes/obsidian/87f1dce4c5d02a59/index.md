---
title: D05 基尔霍夫电流定律KCL
date: '2026-10-16T17:07:06.890293+00:00'
lastmod: '2026-10-16T17:07:06.890293+00:00'
draft: false
description: ''
tags:
- 电路
- 知识点
note_links:
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/3502c3003a7fe1bb/index.md
- notes/obsidian/44b18b6111927f4a/index.md
- notes/obsidian/7de8d96e94f22918/index.md
- notes/obsidian/85f9dbeeea23a917/index.md
- notes/obsidian/b1996e24533bb9ee/index.md
- notes/obsidian/cfd166f4fe2772af/index.md
- notes/obsidian/d3f7e725d6b14baa/index.md
- notes/obsidian/edb0e5e8a8388139/index.md
obsidian: true
note_course: 电路
---

# 基尔霍夫电流定律KCL

> [!tip] 做题入口
> 看到节点和分支，先列流入等于流出。

## 详细讲解：从理解到列式

### 图解：KCL

![KCL](/my-web/notes-media/asset-fb67c8dfddd63a26.svg)

把每条支路电流按同一流入/流出约定列式。 图为本库补充示意，不替代原题中的几何与方向。

### KCL 是节点处的电荷守恒

在集中参数电路模型中，把理想节点视为不积累净电荷的连接点。流入与流出的电荷率相等，因此 $\sum i_{in}=\sum i_{out}$。这里是带参考方向的代数量；一个未知电流算成负值，自动表示它实际反向。

### 从节点方程到节点电压法

把节点电位设为 $V$，相邻节点电位为 $V_k$。定义每条电阻支路电流都从本节点流出：

$$
i_k=\frac{V-V_k}{R_k},\qquad \sum_k\frac{V-V_k}{R_k}=I_{\text{注入}}.
$$

左边所有差值的顺序一致，右边电流源向节点注入取正，离开节点取负。例如 $V$ 经 2 Ω 接 10 V 节点、经 3 Ω 接地，另有 1 A 注入，则 $(V-10)/2+V/3=1$。不要一条支路写流入，另一条又写流出，却忘了在总和中改符号。

### 节点数与独立方程

有 $n$ 个节点时，KCL 的独立节点方程通常只有 $n-1$ 个，因为所有节点方程相加，每条支路电流一进一出抵消。选地是选电位参考，不是把所有接地支路电流变成零。存在连接两个未知节点的理想电压源时，可把两节点合成超节点，再补源的电压约束。

### 学习顺序

先读：[参考方向与关联参考方向](/my-web/notes/obsidian/44b18b6111927f4a/)。

再用到：[支路电流法与节点电压法](/my-web/notes/obsidian/7de8d96e94f22918/)、[交流并联与导纳](/my-web/notes/obsidian/cfd166f4fe2772af/)。

[在学习地图中定位本节](/my-web/notes/?map=D05#notes-graph-heading)

## 概念与适用条件

集中参数电路中，对任一节点，电流代数和为零：$\sum i_k=0$。可以约定流入为正、流出为负，也可以反过来，但同一方程必须统一。

## 推导

节点不被作为独立储存净电荷的元件。由电荷守恒，单位时间流入电荷量等于流出电荷量。一个连通电路有 $n$ 个节点时，只有 $n-1$ 个独立节点方程，最后一个会由其他方程相加得到。

## 解题步骤

1. 标节点，不把同一根理想导线上的位置拆成多个节点。
2. 标电流参考箭头，按箭头列式。
3. 代入带符号的已知值，负值仍按原箭头参与运算。

## 补充示例｜负电流仍按原方向列式

**题目：** $i_1=2\mathrm A$、$i_2=-1\mathrm A$ 的参考都流入节点，$i_3$ 参考流出。

1. 先按参考箭头写 $i_1+i_2-i_3=0$。
2. 代入 $2+(-1)-i_3=0$，得 $i_3=1\mathrm A$。
3. 实际 $i_2$ 为流出 $1\mathrm A$；实际流入2A，流出1A+1A，守恒。

## 易错与自检

不能看到 $i_2<0$ 就先反转箭头、又保留负数，这会重复改号。KCL 也适用于包围若干节点的闭合边界，内部支路电流相互抵消。

## 闭卷回想

为什么每个节点都列 KCL 会多出一个相关方程？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第51页至第56页。页码是阅读器页码。
- [课堂笔记图05 · IMG20261015231854](/my-web/notes-media/asset-d33147ddab79d2ca.webp)。
- [课堂笔记图06 · IMG20261015231901](/my-web/notes-media/asset-11ee4fe73b676246.webp)。
- [课堂笔记图15 · IMG20261015232109](/my-web/notes-media/asset-3a9fddc86bc7418b.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015231854](/my-web/notes-media/asset-d33147ddab79d2ca.webp)

## 关联与返回

[参考方向与关联参考方向](/my-web/notes/obsidian/44b18b6111927f4a/)、[支路电流法与节点电压法](/my-web/notes/obsidian/7de8d96e94f22918/)、[交流并联与导纳](/my-web/notes/obsidian/cfd166f4fe2772af/)

[返回电路入口](/my-web/notes/obsidian/115436d99c2c2ddd/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [双电源供电：支路电流与电源吸收功率](/my-web/notes/obsidian/d3f7e725d6b14baa/) · 综合
- [已知两支路电流反求电桥参数](/my-web/notes/obsidian/b1996e24533bb9ee/) · 进阶
- [恒流源RC换路：负电容电流的含义](/my-web/notes/obsidian/3502c3003a7fe1bb/) · 进阶

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-直流电路（6学时）-2026更新 · 节点或广义节点求电流](/my-web/notes/obsidian/85f9dbeeea23a917/#%E9%A2%98%E5%9E%8B04-%E8%8A%82%E7%82%B9%E6%88%96%E5%B9%BF%E4%B9%89%E8%8A%82%E7%82%B9%E6%B1%82%E7%94%B5%E6%B5%81)
- [2-电路的瞬态分析（4学时）-2026更新(1) · 电源存在的换接与多电流响应](/my-web/notes/obsidian/edb0e5e8a8388139/#%E9%A2%98%E5%9E%8B07-%E7%94%B5%E6%BA%90%E5%AD%98%E5%9C%A8%E7%9A%84%E6%8D%A2%E6%8E%A5%E4%B8%8E%E5%A4%9A%E7%94%B5%E6%B5%81%E5%93%8D%E5%BA%94)
