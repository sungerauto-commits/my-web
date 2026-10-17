---
title: P25 电容串并联与混合介质
date: '2026-10-16T17:07:06.989655+00:00'
lastmod: '2026-10-16T17:07:06.989655+00:00'
draft: false
description: ''
tags:
- 大物
- 知识点
note_links:
- notes/obsidian/24e59c001e2459b3/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/4deccae1762f21a1/index.md
- notes/obsidian/663edd45ab10d844/index.md
- notes/obsidian/7dd1c65aed21f95d/index.md
- notes/obsidian/9038a67e0032fe4c/index.md
- notes/obsidian/a7b196bda29841f1/index.md
- notes/obsidian/fb9f374dfa570d82/index.md
obsidian: true
note_course: 大学物理
---

# 电容串并联与混合介质

> [!tip] 做题入口
> 沿电场分层看串联，分面积并排看并联。

## 详细讲解：从理解到列式

### 图解：介质串并联

![介质串并联](/my-web/notes-media/asset-a20b596e2470512a.svg)

对照两种划分，分别确定是各层电压相加还是各区电荷相加。 图为本库补充示意，不替代原题中的几何与方向。

### 串联、并联由边界条件区分

并联电容两端接同一对等势体，U 相同，$Q=\sum Q_i=U\sum C_i$，所以 C 直接相加。串联中间导体若原本中性且孤立，其两面诱导等量异号电荷，各段所带电荷大小相同，而总 U 为各段之和，所以 $1/C=\sum1/C_i$。中间导体预先带净电荷时，不能直接套“各段 Q 相同”。

### 混合介质先看场穿过的方向

沿电场方向分成厚度 $d_i$ 的层，界面无自由电荷，则 D 相同，各层电压相加：

$$
C=\frac{S}{\sum_i d_i/\varepsilon_i}.
$$

若沿板面分成面积 $S_i$ 的区域，每区跨同一板间距 d，U 相同，各区电荷相加：$C=\sum_i\varepsilon_iS_i/d$。

判断口诀不是“画在上下就串联”，而是“场线是否依次穿过”。图中把电容器旋转后，串并联关系不应改变。遇到同时按面积、厚度分层的复杂结构，先划分完整的并联通道，再求各通道内部串联，必要时直接用边界方程而不是强行拆元件。

### 学习顺序

先读：[电位移D与介质高斯定理](/my-web/notes/obsidian/a7b196bda29841f1/)、[电容定义与平行板电容](/my-web/notes/obsidian/fb9f374dfa570d82/)。

再用到：[插入介质时固定Q还是固定U](/my-web/notes/obsidian/24e59c001e2459b3/)。

[在学习地图中定位本节](/my-web/notes/?map=P25#notes-graph-heading)

## 概念与适用条件

并联电压相同，$C_{\mathrm{eq}}=\sum C_i$。简单串联且中间孤立导体初始净电荷为零时，各电容带等量电荷，$1/C_{\mathrm{eq}}=\sum1/C_i$。若中间导体预带净电荷，需要另列守恒，不能直接假设各段电荷相同。

## 推导

并联 $Q=\sum C_iU$。串联 $U=\sum Q/C_i$。平行板内沿场方向分层介质，$C=S/(d_1/\varepsilon_1+d_2/\varepsilon_2)$；介质在面积方向并排、两块都跨同一间距时，$C=(\varepsilon_1S_1+\varepsilon_2S_2)/d$。忽略边缘、界面附近非理想效应。

## 解题步骤

1. 画电场线和介质界面，判断电场先穿过哪一层。
2. 各部分拥有相同电压还是相同法向 $D$，据此判断并/串联。
3. 先分别求几何电容，再合并；必要时用电势降直接验证。

## 课件原题｜两层介质模型（例5B）

**题目：** 两层介质厚 $d_1,d_2$，介电常数 $\varepsilon_1,\varepsilon_2$，覆盖整块面积 $S$。

1. 无自由界面电荷，$D_n=Q/S$ 在两层相同。
2. $E_1=Q/(\varepsilon_1S)$，$E_2=Q/(\varepsilon_2S)$。
3. $U=E_1d_1+E_2d_2=(Q/S)(d_1/\varepsilon_1+d_2/\varepsilon_2)$。
4. $C=Q/U=S/(d_1/\varepsilon_1+d_2/\varepsilon_2)$，与串联法一致。
5. 若 $d_1=d_2=d/2$、$\varepsilon_1=2\varepsilon_0,\varepsilon_2=4\varepsilon_0$，则 $C=(8/3)\varepsilon_0S/d$。

## 易错与自检

电容串并联规律与电阻相反。判断介质串并联要看几何方向，不看图纸中的“上下/左右”这两个词。

## 闭卷回想

两种介质各占一半面积与各占一半厚度，电容公式为什么不同？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第14页至第18页。页码是阅读器页码。
- [课堂笔记图15 · IMG20261015233025](/my-web/notes-media/asset-ba547a054f138d19.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233025](/my-web/notes-media/asset-ba547a054f138d19.webp)

> [!example]- 展开查看原题所在课件页
> 6-2-电容和静电能量（简）1

## 关联与返回

[电介质极化与极化强度](/my-web/notes/obsidian/9038a67e0032fe4c/)、[电位移D与介质高斯定理](/my-web/notes/obsidian/a7b196bda29841f1/)、[电容定义与平行板电容](/my-web/notes/obsidian/fb9f374dfa570d82/)、[插入介质时固定Q还是固定U](/my-web/notes/obsidian/24e59c001e2459b3/)、[电容的伏安关系与储能](/my-web/notes/obsidian/4deccae1762f21a1/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [固定电压插入介质板与导体板](/my-web/notes/obsidian/7dd1c65aed21f95d/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [6-2-电容和静电能量（简）1 · 介质按面积分区的并联模型](/my-web/notes/obsidian/663edd45ab10d844/#%E9%A2%98%E5%9E%8B03-%E4%BB%8B%E8%B4%A8%E6%8C%89%E9%9D%A2%E7%A7%AF%E5%88%86%E5%8C%BA%E7%9A%84%E5%B9%B6%E8%81%94%E6%A8%A1%E5%9E%8B)
- [6-2-电容和静电能量（简）1 · 沿场分层介质与导体插板](/my-web/notes/obsidian/663edd45ab10d844/#%E9%A2%98%E5%9E%8B04-%E6%B2%BF%E5%9C%BA%E5%88%86%E5%B1%82%E4%BB%8B%E8%B4%A8%E4%B8%8E%E5%AF%BC%E4%BD%93%E6%8F%92%E6%9D%BF)
- [6-2-电容和静电能量（简）1 · 接电源时插入介质板与金属板](/my-web/notes/obsidian/663edd45ab10d844/#%E9%A2%98%E5%9E%8B07-%E6%8E%A5%E7%94%B5%E6%BA%90%E6%97%B6%E6%8F%92%E5%85%A5%E4%BB%8B%E8%B4%A8%E6%9D%BF%E4%B8%8E%E9%87%91%E5%B1%9E%E6%9D%BF)
