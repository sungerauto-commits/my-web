---
title: P09 球对称电荷的分区电场与电势
date: '2026-10-16T17:07:06.937360+00:00'
lastmod: '2026-10-16T17:07:06.937360+00:00'
draft: false
description: ''
tags:
- 大物
- 知识点
note_links:
- notes/obsidian/09dc45185b27d0e3/index.md
- notes/obsidian/3264ea7c2054acbc/index.md
- notes/obsidian/3dfa67a5b7eeec93/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/57de3eff4a09bd6f/index.md
- notes/obsidian/58d990316008085d/index.md
- notes/obsidian/63721ac0914763f7/index.md
- notes/obsidian/653e59c64053d33c/index.md
- notes/obsidian/683030f693ffcfdc/index.md
- notes/obsidian/8f9705eb2776bc64/index.md
- notes/obsidian/95fd4a5603d6b827/index.md
- notes/obsidian/9ce6a3433eb1249c/index.md
- notes/obsidian/a7515dd943226c39/index.md
- notes/obsidian/af37467a4edc5504/index.md
- notes/obsidian/dc29171c37873863/index.md
obsidian: true
note_course: 大学物理
---

# 球对称电荷的分区电场与电势

> [!tip] 做题入口
> 球壳和实心球的内部场不同，先求包围电荷。

## 详细讲解：从理解到列式

### 图解：球体场势

![球体场势](/my-web/notes-media/asset-2146e49460bdf473.svg)

对比图的斜率：−dV/dr=E，不能由E=0推V=0。 图为本库补充示意，不替代原题中的几何与方向。

### 图解：球对称高斯面

![球对称高斯面](/my-web/notes-media/asset-8a2fd65c95c2506a.svg)

虚线是人为选择的高斯面，Q内依赖其半径。 图为本库补充示意，不替代原题中的几何与方向。

### 先分清实体球、薄球壳和导体球

均匀绝缘实体球的体内仍有电荷；均匀薄壳只有表面电荷；静电导体则金属体内场为零。三种对象球外都可能表现为点电荷场，内部规律却不同。

对均匀绝缘实体球，$r<R$ 时 $Q_{enc}=\rho4\pi r^3/3$，所以 $E_r=\rho r/(3\varepsilon_0)$；$r>R$ 时用总电荷 $Q$，$E_r=k_eQ/r^2$。对薄球壳，$r<R$ 时包围电荷为零且有球对称，所以场为零。

### 场分区后，势也要跨区连接

取无穷远势为零。实体球内 $V(r)=V(R)+\int_r^R E_r(s)ds$，其中 $V(R)=k_eQ/R$，而不是从内部局部场直接猜 $k_eQ/r$。均匀球得到

$$
V(r)=\frac{k_eQ}{2R}\left(3-\frac{r^2}{R^2}\right),\quad r\le R.
$$

薄壳内部恒势 $k_eQ/R$。边界若没有理想电偶极层，电势连续；存在面电荷时场的法向分量可以跳变。画 $E(r),V(r)$ 两张图能避免把“场为零”和“势为零”混为一谈。

### 学习顺序

先读：[高斯定理与对称性判断](/my-web/notes/obsidian/a7515dd943226c39/)、[电势与电势叠加](/my-web/notes/obsidian/09dc45185b27d0e3/)。

再用到：[补偿法与挖孔电荷分布](/my-web/notes/obsidian/3264ea7c2054acbc/)、[球形电容器与孤立导体球电容](/my-web/notes/obsidian/af37467a4edc5504/)。

[在学习地图中定位本节](/my-web/notes/?map=P09#notes-graph-heading)

## 概念与适用条件

均匀薄球壳半径 $R$、总电荷 $Q$：$r<R$ 场为零，$r>R$ 场为 $kQ/r^2$。均匀实心球内部包围电荷随 $r^3$ 增长，内部场不为零。以下真空、无其他破坏对称性的源，电势以无穷远为零。

## 推导

球对称时 $E(r)4\pi r^2=Q_{\mathrm{内}}(r)/\varepsilon_0$。实心均匀球 $Q_{\mathrm{内}}=Qr^3/R^3$，故

$$
E(r)=\begin{cases}kQr/R^3&r<R\\kQ/r^2&r>R.\end{cases}
$$

内部电势要分段积分：$V(r)=\int_r^R kQs/R^3\,ds+\int_R^\infty kQ/s^2\,ds$。

## 解题步骤

1. 区分面电荷球壳与体电荷实心球。
2. 按材料边界分区，逐区写 $Q_{\mathrm{内}}$。
3. 先求场，再分段积分求电势，跨边界保持电势连续。

## 课件原题｜均匀实心球（习题课例2A、5A）

1. 由上式得到内外场。
2. 外部 $V=kQ/r$；内部 $V=kQ(3R^2-r^2)/(2R^3)$。
3. 圆心 $E(0)=0$、$V(0)=3kQ/(2R)$；表面两侧 $E=kQ/R^2$ 连续。
4. 对比薄球壳：内部 $E=0$、$V=kQ/R$，表面法向场存在跳变。
5. 若 $\rho=\rho(r)$ 不均匀，改用 $Q_{\mathrm{内}}(r)=4\pi\int_0^r\rho(s)s^2ds$，不能再用固定体积分数。

## 易错与自检

同样“球体”可能指绝缘体，也可能指导体；静电平衡导体的净电荷在表面。检查 $r=R$ 电势连续及 $r\to\infty$ 电势归零。

## 闭卷回想

均匀实心球中心处场强为零，为什么不能据此推出它内部处处等势？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第23页至第29页。页码是阅读器页码。
- [课堂笔记图04 · IMG20261015232226](/my-web/notes-media/asset-d3deb563aba9e6f5.webp)。
- [课堂笔记图08 · IMG20261015232250](/my-web/notes-media/asset-5d2855c9d45dc7b8.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232226](/my-web/notes-media/asset-d3deb563aba9e6f5.webp)

> [!example]- 展开查看原题所在课件页
> 第五章习题课（第7版）1

## 关联与返回

[高斯定理与对称性判断](/my-web/notes/obsidian/a7515dd943226c39/)、[电势与电势叠加](/my-web/notes/obsidian/09dc45185b27d0e3/)、[电场与电势的梯度关系](/my-web/notes/obsidian/8f9705eb2776bc64/)、[导体静电平衡](/my-web/notes/obsidian/58d990316008085d/)、[球形电容器与孤立导体球电容](/my-web/notes/obsidian/af37467a4edc5504/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [非均匀带电球：高斯法与球壳叠加](/my-web/notes/obsidian/683030f693ffcfdc/) · 综合
- [半球面电势差：镜像补成完整球壳](/my-web/notes/obsidian/57de3eff4a09bd6f/) · 综合
- [先接地外壳再接地内球：逐阶段守恒](/my-web/notes/obsidian/63721ac0914763f7/) · 挑战
- [带介质球壳：位移场、电势与束缚电荷](/my-web/notes/obsidian/dc29171c37873863/) · 挑战

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [5-2-高斯定理(简)1 · 球壳和均匀实体球的分区场](/my-web/notes/obsidian/95fd4a5603d6b827/#%E9%A2%98%E5%9E%8B03-%E7%90%83%E5%A3%B3%E5%92%8C%E5%9D%87%E5%8C%80%E5%AE%9E%E4%BD%93%E7%90%83%E7%9A%84%E5%88%86%E5%8C%BA%E5%9C%BA)
- [5-3-电势(简)1 · 球壳、实体球和多球面的分区势](/my-web/notes/obsidian/653e59c64053d33c/#%E9%A2%98%E5%9E%8B03-%E7%90%83%E5%A3%B3%E5%AE%9E%E4%BD%93%E7%90%83%E5%92%8C%E5%A4%9A%E7%90%83%E9%9D%A2%E7%9A%84%E5%88%86%E5%8C%BA%E5%8A%BF)
- [6-1-静电场中的导体和电介质(简) 1 · 同心内球与厚球壳的电荷场势及接地](/my-web/notes/obsidian/3dfa67a5b7eeec93/#%E9%A2%98%E5%9E%8B03-%E5%90%8C%E5%BF%83%E5%86%85%E7%90%83%E4%B8%8E%E5%8E%9A%E7%90%83%E5%A3%B3%E7%9A%84%E7%94%B5%E8%8D%B7%E5%9C%BA%E5%8A%BF%E5%8F%8A%E6%8E%A5%E5%9C%B0)
- [6-1-静电场中的导体和电介质(简) 1 · 带电球外多层介质分区场](/my-web/notes/obsidian/3dfa67a5b7eeec93/#%E9%A2%98%E5%9E%8B06-%E5%B8%A6%E7%94%B5%E7%90%83%E5%A4%96%E5%A4%9A%E5%B1%82%E4%BB%8B%E8%B4%A8%E5%88%86%E5%8C%BA%E5%9C%BA)
- [第五章习题课（第7版）1 · 球壳、均匀球与径向变密度球](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B04-%E7%90%83%E5%A3%B3%E5%9D%87%E5%8C%80%E7%90%83%E4%B8%8E%E5%BE%84%E5%90%91%E5%8F%98%E5%AF%86%E5%BA%A6%E7%90%83)
- [第五章习题课（第7版）1 · 单球壳、实体球与多同心球面的势](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B07-%E5%8D%95%E7%90%83%E5%A3%B3%E5%AE%9E%E4%BD%93%E7%90%83%E4%B8%8E%E5%A4%9A%E5%90%8C%E5%BF%83%E7%90%83%E9%9D%A2%E7%9A%84%E5%8A%BF)
- [第五章习题课（第7版）1 · 球内外电势叠加与等势面](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B15-%E7%90%83%E5%86%85%E5%A4%96%E7%94%B5%E5%8A%BF%E5%8F%A0%E5%8A%A0%E4%B8%8E%E7%AD%89%E5%8A%BF%E9%9D%A2)
