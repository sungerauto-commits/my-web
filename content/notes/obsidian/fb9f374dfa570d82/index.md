---
title: P22 电容定义与平行板电容
date: '2026-10-16T17:07:06.980147+00:00'
lastmod: '2026-10-16T17:07:06.980147+00:00'
draft: false
description: ''
tags:
- 大物
- 知识点
note_links:
- notes/obsidian/09dc45185b27d0e3/index.md
- notes/obsidian/24e59c001e2459b3/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/4deccae1762f21a1/index.md
- notes/obsidian/58d990316008085d/index.md
- notes/obsidian/5bd546b0c5a7dedc/index.md
- notes/obsidian/663edd45ab10d844/index.md
- notes/obsidian/7ae1f1f4ff41bd7b/index.md
- notes/obsidian/7dd1c65aed21f95d/index.md
- notes/obsidian/9ce6a3433eb1249c/index.md
- notes/obsidian/a7b196bda29841f1/index.md
- notes/obsidian/af37467a4edc5504/index.md
- notes/obsidian/e808e3a51757b08c/index.md
- notes/obsidian/ea2bc1f82c5e399a/index.md
obsidian: true
note_course: 大学物理
---

# 电容定义与平行板电容

> [!tip] 做题入口
> 电容由几何和介质决定，Q与U是同一状态的对应量。

## 详细讲解：从理解到列式

### 图解：介质串并联

![介质串并联](/my-web/notes-media/asset-a20b596e2470512a.svg)

对照两种划分，分别确定是各层电压相加还是各区电荷相加。 图为本库补充示意，不替代原题中的几何与方向。

### 电容是给定结构下 Q 与电势差的比例

两导体等量异号带电，$C=Q/(V_+-V_-)$。线性介质、固定几何时，Q 放大一倍会使 E 和电势差一并放大一倍，比例 C 不变。它不是“充得越多电容越大”。Q 通常取正极板电荷大小，电势差取正值。

### 平行板公式的每一步

忽略边缘效应，板间均匀介质中 $D=Q/S$，所以 $E=Q/(\varepsilon S)$。板间电势差 $U=Ed=Qd/(\varepsilon S)$，于是

$$
C=\frac QU=\frac{\varepsilon S}{d}.
$$

面积大使同样 Q 更分散，场与电压降低，电容增大；间距大使同样场经历更长积分距离，电压增大，电容减小。

公式需要板的线尺度明显大于间距，且介质近似线性均匀。电源连接与否不会改变给定结构的 C，但会决定改变几何时是 U 固定还是 Q 固定。若只说“插板后电容增大，所以电压增大”，就是混淆了结构关系与外部约束。

### 学习顺序

先读：[电势与电势叠加](/my-web/notes/obsidian/09dc45185b27d0e3/)、[导体静电平衡](/my-web/notes/obsidian/58d990316008085d/)。

再用到：[球形电容器与孤立导体球电容](/my-web/notes/obsidian/af37467a4edc5504/)、[同轴圆柱电容器](/my-web/notes/obsidian/5bd546b0c5a7dedc/)、[电容串并联与混合介质](/my-web/notes/obsidian/ea2bc1f82c5e399a/)、[静电能量与能量密度](/my-web/notes/obsidian/7ae1f1f4ff41bd7b/)。

[在学习地图中定位本节](/my-web/notes/?map=P22#notes-graph-heading)

## 概念与适用条件

两导体构成电容器，极板带 $\pm Q$，电势差 $U=V_+-V_-$，$C=Q/U$。在线性介质与固定几何条件下，$C$ 与充入多少 $Q$ 无关。平行板面积 $S$、间距 $d$、均匀介质 $\varepsilon$，忽略边缘效应：$C=\varepsilon S/d$。

## 推导

先假设正极板自由电荷 $Q$。由平面对称和介质高斯定理 $D=Q/S$，$E=Q/(\varepsilon S)$，$U=Ed=Qd/(\varepsilon S)$，最终 $C=Q/U=\varepsilon S/d$。通用路线为“设Q→求场→求电势差→相除”。

## 解题步骤

1. 明确极板、面积和间距，判断能否忽略边缘。
2. 区分介电常数 $\varepsilon$ 与相对介电常数 $\varepsilon_r$。
3. 由几何求 $C$，再按题目的电源连接条件求 $Q,U$。

## 补充数值例｜平行板

**题目：** $S=100\mathrm{cm^2}$、$d=1\mathrm{mm}$、$\varepsilon_r=4$，两板电压10V。

1. $S=0.01\mathrm{m^2}$，$d=10^{-3}\mathrm m$。
2. $C=8.854\times10^{-12}\times4\times0.01/10^{-3}\approx354.16\mathrm{pF}$。
3. $Q=CU\approx3.542\mathrm{nC}$。
4. $E=U/d=10^4\mathrm{V/m}$；复核 $\varepsilon ES=Q$。

## 易错与自检

平方厘米转平方米要乘 $10^{-4}$。$Q=0,U=0$ 时几何电容仍存在，不能把 $0/0$ 当作“电容不存在”。

## 闭卷回想

同一个线性电容器电压加倍，电容、电荷、能量分别怎样变？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第6页至第8页。页码是阅读器页码。
- [课堂笔记图13 · IMG20261015233008](/my-web/notes-media/asset-6db6903affbc8b46.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233008](/my-web/notes-media/asset-6db6903affbc8b46.webp)

## 关联与返回

[无限大平面与多平面叠加](/my-web/notes/obsidian/e808e3a51757b08c/)、[电位移D与介质高斯定理](/my-web/notes/obsidian/a7b196bda29841f1/)、[球形电容器与孤立导体球电容](/my-web/notes/obsidian/af37467a4edc5504/)、[同轴圆柱电容器](/my-web/notes/obsidian/5bd546b0c5a7dedc/)、[电容串并联与混合介质](/my-web/notes/obsidian/ea2bc1f82c5e399a/)、[静电能量与能量密度](/my-web/notes/obsidian/7ae1f1f4ff41bd7b/)、[插入介质时固定Q还是固定U](/my-web/notes/obsidian/24e59c001e2459b3/)、[电容的伏安关系与储能](/my-web/notes/obsidian/4deccae1762f21a1/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [固定电压插入介质板与导体板](/my-web/notes/obsidian/7dd1c65aed21f95d/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [6-2-电容和静电能量（简）1 · 平板、球形、同轴柱形电容](/my-web/notes/obsidian/663edd45ab10d844/#%E9%A2%98%E5%9E%8B01-%E5%B9%B3%E6%9D%BF%E7%90%83%E5%BD%A2%E5%90%8C%E8%BD%B4%E6%9F%B1%E5%BD%A2%E7%94%B5%E5%AE%B9)
- [6-2-电容和静电能量（简）1 · 双平行长直导线的单位长度电容](/my-web/notes/obsidian/663edd45ab10d844/#%E9%A2%98%E5%9E%8B02-%E5%8F%8C%E5%B9%B3%E8%A1%8C%E9%95%BF%E7%9B%B4%E5%AF%BC%E7%BA%BF%E7%9A%84%E5%8D%95%E4%BD%8D%E9%95%BF%E5%BA%A6%E7%94%B5%E5%AE%B9)
- [第五章习题课（第7版）1 · 三种电容器极板间的电势差](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B16-%E4%B8%89%E7%A7%8D%E7%94%B5%E5%AE%B9%E5%99%A8%E6%9E%81%E6%9D%BF%E9%97%B4%E7%9A%84%E7%94%B5%E5%8A%BF%E5%B7%AE)
