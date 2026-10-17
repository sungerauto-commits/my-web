---
title: P02 电场叠加与连续电荷积分
date: '2026-10-16T17:07:06.908326+00:00'
lastmod: '2026-10-16T17:07:06.908326+00:00'
draft: false
description: ''
tags:
- 大物
- 知识点
note_links:
- notes/obsidian/02e13da3fb3fda17/index.md
- notes/obsidian/148759da30c3ab16/index.md
- notes/obsidian/1831dd60eeae54c2/index.md
- notes/obsidian/3264ea7c2054acbc/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/57de3eff4a09bd6f/index.md
- notes/obsidian/581bfd027b33ab9b/index.md
- notes/obsidian/5db3f92103115401/index.md
- notes/obsidian/683030f693ffcfdc/index.md
- notes/obsidian/95fd4a5603d6b827/index.md
- notes/obsidian/9ce6a3433eb1249c/index.md
- notes/obsidian/a7515dd943226c39/index.md
- notes/obsidian/cfa586bb35f32867/index.md
- notes/obsidian/d189b87b4f0e48eb/index.md
obsidian: true
note_course: 大学物理
---

# 电场叠加与连续电荷积分

> [!tip] 做题入口
> 几何不够对称时，把电荷切小、投影，再积分。

## 详细讲解：从理解到列式

### 图解：圆环积分

![圆环积分](/my-web/notes-media/asset-4b45cd7f75f63b99.svg)

三次方分母来自距离平方乘投影因子；不是额外背的规则。 图为本库补充示意，不替代原题中的几何与方向。

### 连续分布其实是很多微小点电荷

对每个源电荷元 $dq$，到观察点的距离和方向一般都不同：

$$
d\mathbf E=\frac1{4\pi\varepsilon_0}\frac{dq}{R^2}\hat{\mathbf R},\quad dq=\lambda dl,\ \sigma dS,\ \rho dV.
$$

选择哪一种 $dq$ 由带电对象的维度决定，不由积分符号的外观决定。线密度单位 C/m、面密度 C/m²、体密度 C/m³。

### 为什么先投影再积分

不同电荷元的场方向不同，直接积“场强大小”会把本应抵消的分量也加进去。先画一对对称电荷元，证明横向分量抵消，再写留下的 $dE_x=dE\cos\theta$，最后对所有源位置积分。

例如轴线上的带电环，到各元距离都为 $\sqrt{R^2+x^2}$，但轴向投影还有 $x/\sqrt{R^2+x^2}$，不能漏掉。距离并不恒定的带电棒，不能把观察点到中心的距离统一提出积分。做完用远场检验：距离远大于带电体尺寸时，首项通常应接近总电荷的点电荷场；总电荷为零时则要看更高阶项。

### 学习顺序

先读：[库仑定律与电场强度](/my-web/notes/obsidian/5db3f92103115401/)。

再用到：[均匀带电圆环轴线场强](/my-web/notes/obsidian/581bfd027b33ab9b/)、[半圆环的场强与电势](/my-web/notes/obsidian/cfa586bb35f32867/)、[有限带电直棒](/my-web/notes/obsidian/02e13da3fb3fda17/)、[补偿法与挖孔电荷分布](/my-web/notes/obsidian/3264ea7c2054acbc/)。

[在学习地图中定位本节](/my-web/notes/?map=P02#notes-graph-heading)

## 概念与适用条件

离散电荷 $\mathbf E=\sum kq_i\hat{\mathbf r}_i/r_i^2$；连续电荷 $\mathbf E=\int k\,dq\,\hat{\mathbf r}/r^2$。电荷元可写 $dq=\lambda dl$、$\sigma dS$、$\rho dV$。积分变量在场源上，场点坐标是参数。

## 推导

连续分布是大量微小点电荷的极限。对称电荷元可能使某些分量抵消，但这不意味着每个电荷元的场强为零。若距离随源点改变，要把分母和投影因子全部写成积分变量的函数。

## 解题步骤

1. 定场点、源点、坐标系及积分区间。
2. 选电荷元并写 $dq$。
3. 写 $d\mathbf E$，先用对称性删去抵消的分量。
4. 对保留的分量积分；检查方向、量纲和远场极限。

## 补充示例｜两个对称点电荷

**题目：** $x=\pm a$ 各放 $+q$，求 $P(0,y)$、$y>0$ 处电场。

1. 两源到 $P$ 距离均为 $s=\sqrt{a^2+y^2}$。
2. 水平分量抵消，竖直分量相加。
3. 单个竖直分量 $E_y^{(1)}=(kq/s^2)(y/s)$。
4. $\mathbf E=2kqy/(a^2+y^2)^{3/2}\,\hat{\mathbf y}$。
5. $y\gg a$ 时 $E\approx k(2q)/y^2$，符合总电荷远场。

## 易错与自检

不能把 $\int |d\mathbf E|$ 当成 $|\int d\mathbf E|$。高斯定理始终成立，但不足以直接求出一般非对称分布的局部场。

## 闭卷回想

电荷元的电场大小是 $k\,dq/s^2$，投影后分母为什么经常变成 $s^3$？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第50页至第53页。页码是阅读器页码。
- [课堂笔记图01 · IMG20261015232141](/my-web/notes-media/asset-c0210b31ddd8aed8.webp)。
- [课堂笔记图02 · IMG20261015232204](/my-web/notes-media/asset-337e83723a4dee33.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232141](/my-web/notes-media/asset-c0210b31ddd8aed8.webp)

## 关联与返回

[库仑定律与电场强度](/my-web/notes/obsidian/5db3f92103115401/)、[均匀带电圆环轴线场强](/my-web/notes/obsidian/581bfd027b33ab9b/)、[半圆环的场强与电势](/my-web/notes/obsidian/cfa586bb35f32867/)、[有限带电直棒](/my-web/notes/obsidian/02e13da3fb3fda17/)、[带电圆盘与圆环分割](/my-web/notes/obsidian/148759da30c3ab16/)、[高斯定理与对称性判断](/my-web/notes/obsidian/a7515dd943226c39/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [非均匀带电球：高斯法与球壳叠加](/my-web/notes/obsidian/683030f693ffcfdc/) · 综合
- [无限带电平面挖圆孔：补偿法与轴线积分](/my-web/notes/obsidian/d189b87b4f0e48eb/) · 综合
- [半球面电势差：镜像补成完整球壳](/my-web/notes/obsidian/57de3eff4a09bd6f/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [5-1-电场强度(简)1 · 均匀圆环轴线场与极值](/my-web/notes/obsidian/1831dd60eeae54c2/#%E9%A2%98%E5%9E%8B03-%E5%9D%87%E5%8C%80%E5%9C%86%E7%8E%AF%E8%BD%B4%E7%BA%BF%E5%9C%BA%E4%B8%8E%E6%9E%81%E5%80%BC)
- [5-1-电场强度(简)1 · 半圆环的非抵消分量](/my-web/notes/obsidian/1831dd60eeae54c2/#%E9%A2%98%E5%9E%8B04-%E5%8D%8A%E5%9C%86%E7%8E%AF%E7%9A%84%E9%9D%9E%E6%8A%B5%E6%B6%88%E5%88%86%E9%87%8F)
- [5-1-电场强度(简)1 · 均匀圆盘的双重积分与细环法](/my-web/notes/obsidian/1831dd60eeae54c2/#%E9%A2%98%E5%9E%8B05-%E5%9D%87%E5%8C%80%E5%9C%86%E7%9B%98%E7%9A%84%E5%8F%8C%E9%87%8D%E7%A7%AF%E5%88%86%E4%B8%8E%E7%BB%86%E7%8E%AF%E6%B3%95)
- [5-1-电场强度(简)1 · 半球壳球心场](/my-web/notes/obsidian/1831dd60eeae54c2/#%E9%A2%98%E5%9E%8B06-%E5%8D%8A%E7%90%83%E5%A3%B3%E7%90%83%E5%BF%83%E5%9C%BA)
- [5-1-电场强度(简)1 · 有限带电棒垂直平分线场](/my-web/notes/obsidian/1831dd60eeae54c2/#%E9%A2%98%E5%9E%8B07-%E6%9C%89%E9%99%90%E5%B8%A6%E7%94%B5%E6%A3%92%E5%9E%82%E7%9B%B4%E5%B9%B3%E5%88%86%E7%BA%BF%E5%9C%BA)
- [5-2-高斯定理(简)1 · 判断高斯法能否直接解出场强](/my-web/notes/obsidian/95fd4a5603d6b827/#%E9%A2%98%E5%9E%8B06-%E5%88%A4%E6%96%AD%E9%AB%98%E6%96%AF%E6%B3%95%E8%83%BD%E5%90%A6%E7%9B%B4%E6%8E%A5%E8%A7%A3%E5%87%BA%E5%9C%BA%E5%BC%BA)
- [第五章习题课（第7版）1 · 圆环、同号与异号半环的场和势](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B02-%E5%9C%86%E7%8E%AF%E5%90%8C%E5%8F%B7%E4%B8%8E%E5%BC%82%E5%8F%B7%E5%8D%8A%E7%8E%AF%E7%9A%84%E5%9C%BA%E5%92%8C%E5%8A%BF)
