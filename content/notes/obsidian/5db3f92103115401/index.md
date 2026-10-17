---
title: P01 库仑定律与电场强度
date: '2026-10-16T17:07:06.906326+00:00'
lastmod: '2026-10-16T17:07:06.906326+00:00'
draft: false
description: ''
tags:
- 大物
- 知识点
note_links:
- notes/obsidian/09dc45185b27d0e3/index.md
- notes/obsidian/1831dd60eeae54c2/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/64eecd8aa05cc58a/index.md
- notes/obsidian/9ce6a3433eb1249c/index.md
- notes/obsidian/be46d9ab8747aa2d/index.md
- notes/obsidian/f8d9b9949f706896/index.md
obsidian: true
note_course: 大学物理
---

# 库仑定律与电场强度

> [!tip] 做题入口
> 先分清场源电荷和检验电荷，再定矢量方向。

## 详细讲解：从理解到列式

### 先区分场和受力

电场 $\mathbf E$ 描述源电荷在空间建立的作用；试探电荷所受力才是 $\mathbf F=q_0\mathbf E$。负试探电荷受力与场反向，不能因此把同一点的电场也改成反向。定义场时设试探电荷足够小，不显著改变源电荷分布。

### 写矢量公式时谁指向谁

源点为 $\mathbf r'$，观察点为 $\mathbf r$，连接矢量 $\mathbf R=\mathbf r-\mathbf r'$ 从源指向观察点：

$$
\mathbf E(\mathbf r)=\frac1{4\pi\varepsilon_0}\frac{q\mathbf R}{|\mathbf R|^3}.
$$

若 $q<0$，符号已把方向反转，不需要再人为反一次。多个点电荷先逐项写矢量或分量，再相加；只有共线且取好正方向时才可直接加带符号的大小。

### 做题第一步

在图中标观察点、源点及距离，先定每项方向，再决定是否能用对称性消掉分量。若算受力，最后才乘被研究电荷。自检单位：$E$ 为 N/C 或 V/m，力为 N；将源电荷放大两倍，固定分布的场应放大两倍。

### 学习顺序

先读：本节可作为起点。

再用到：[电场叠加与连续电荷积分](/my-web/notes/obsidian/f8d9b9949f706896/)、[电通量](/my-web/notes/obsidian/be46d9ab8747aa2d/)、[电势与电势叠加](/my-web/notes/obsidian/09dc45185b27d0e3/)、[电偶极子与均匀场中的力矩](/my-web/notes/obsidian/64eecd8aa05cc58a/)。

[在学习地图中定位本节](/my-web/notes/?map=P01#notes-graph-heading)

## 概念与适用条件

点电荷在真空中的静电力：$\mathbf F=kqq_0\hat{\mathbf r}/r^2$，$k=1/(4\pi\varepsilon_0)$，$\hat{\mathbf r}$ 从场源指向场点。电场定义为不扰动原电荷分布的检验电荷所受力与电荷量之比：$\mathbf E=\mathbf F/q_0$。负检验电荷受力与场强相反。

## 推导

将库仑力除以 $q_0$ 得点电荷场 $\mathbf E=kq\hat{\mathbf r}/r^2$。场是场源和空间位置决定的，不由检验电荷的正负决定。点电荷模型适用于自身尺寸相对观察距离很小，或具有相应球对称外场的情形。

## 解题步骤

1. 画场源和场点，标从场源指向场点的位移。
2. 正源向外、负源向内，确定场矢量。
3. 有多个源先求各场，再按分量相加。
4. 求实际力时最后乘 $q_0$。

## 补充示例｜负电荷的受力方向

**题目：** 原点固定 $q=+2\mathrm{nC}$，在 $x=0.3\mathrm m$ 放 $q_0=-1\mathrm{nC}$。

1. $E=kq/r^2\approx9\times10^9\times2\times10^{-9}/0.09=200\mathrm{N/C}$。
2. 场向 $+x$。
3. $F_x=q_0E=-2\times10^{-7}\mathrm N$，力向原点。

## 易错与自检

$\mathbf E$ 是矢量，$E$ 的大小非负；分量可为负。常数采用 $k\approx9.0\times10^9\mathrm{N\,m^2/C^2}$ 作估算，不要漏掉电荷的纳、微单位。

## 闭卷回想

把检验电荷从正改负，会改变原来的场强还是只改变所受力？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- [课堂笔记图01 · IMG20261015232141](/my-web/notes-media/asset-c0210b31ddd8aed8.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232141](/my-web/notes-media/asset-c0210b31ddd8aed8.webp)

## 关联与返回

[电场叠加与连续电荷积分](/my-web/notes/obsidian/f8d9b9949f706896/)、[电通量](/my-web/notes/obsidian/be46d9ab8747aa2d/)、[电势与电势叠加](/my-web/notes/obsidian/09dc45185b27d0e3/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [5-1-电场强度(简)1 · 库仑力与万有引力数量级比较](/my-web/notes/obsidian/1831dd60eeae54c2/#%E9%A2%98%E5%9E%8B01-%E5%BA%93%E4%BB%91%E5%8A%9B%E4%B8%8E%E4%B8%87%E6%9C%89%E5%BC%95%E5%8A%9B%E6%95%B0%E9%87%8F%E7%BA%A7%E6%AF%94%E8%BE%83)
- [5-1-电场强度(简)1 · 电偶极子中垂线与轴线场](/my-web/notes/obsidian/1831dd60eeae54c2/#%E9%A2%98%E5%9E%8B02-%E7%94%B5%E5%81%B6%E6%9E%81%E5%AD%90%E4%B8%AD%E5%9E%82%E7%BA%BF%E4%B8%8E%E8%BD%B4%E7%BA%BF%E5%9C%BA)
- [第五章习题课（第7版）1 · 正方形顶点点电荷的合力](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B11-%E6%AD%A3%E6%96%B9%E5%BD%A2%E9%A1%B6%E7%82%B9%E7%82%B9%E7%94%B5%E8%8D%B7%E7%9A%84%E5%90%88%E5%8A%9B)
