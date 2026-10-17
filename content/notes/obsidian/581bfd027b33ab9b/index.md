---
title: P03 均匀带电圆环轴线场强
date: '2026-10-16T17:07:06.909326+00:00'
lastmod: '2026-10-16T17:07:06.909326+00:00'
draft: false
description: ''
tags:
- 大物
- 知识点
note_links:
- notes/obsidian/09dc45185b27d0e3/index.md
- notes/obsidian/148759da30c3ab16/index.md
- notes/obsidian/1831dd60eeae54c2/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/653e59c64053d33c/index.md
- notes/obsidian/6ae09d06bbb8fc9a/index.md
- notes/obsidian/8f9705eb2776bc64/index.md
- notes/obsidian/9ce6a3433eb1249c/index.md
- notes/obsidian/d189b87b4f0e48eb/index.md
- notes/obsidian/f8d9b9949f706896/index.md
obsidian: true
note_course: 大学物理
---

# 均匀带电圆环轴线场强

> [!tip] 做题入口
> 圆环各元距离相同，横向分量抵消，保留轴向。

## 详细讲解：从理解到列式

### 图解：圆环积分

![圆环积分](/my-web/notes-media/asset-4b45cd7f75f63b99.svg)

三次方分母来自距离平方乘投影因子；不是额外背的规则。 图为本库补充示意，不替代原题中的几何与方向。

### 圆环题的几何信息如何进入积分

半径 $R$ 的均匀圆环带电 $Q$，观察点在环心轴线上，坐标 $x$。每个元到观察点距离 $s=\sqrt{R^2+x^2}$。成对电荷元的横向场抵消，轴向投影为 $x/s$：

$$
dE_x=\frac{1}{4\pi\varepsilon_0}\frac{x\,dq}{(R^2+x^2)^{3/2}}.
$$

这一系数与源元位置无关，因此积分 $\int dq=Q$，得 $E_x=k_eQx/(R^2+x^2)^{3/2}$。用带符号的 $x$，左右两侧方向会自动相反。

### 由式子读出规律

环心 $x=0$ 场为零，是矢量抵消而非没有电荷；远处 $|x|\gg R$ 恢复点电荷场。对正半轴求导，$dE_x/dx\propto R^2-2x^2$，所以最大值出现在 $x=R/\sqrt2$，不是环心。

环上各元对轴线点的电势都可标量相加，$V=k_eQ/\sqrt{R^2+x^2}$；再用 $E_x=-dV/dx$ 能复核场公式。环心电势为 $k_eQ/R$，场为零并不意味着电势也为零。

### 学习顺序

先读：[电场叠加与连续电荷积分](/my-web/notes/obsidian/f8d9b9949f706896/)。

再用到：[带电圆盘与圆环分割](/my-web/notes/obsidian/148759da30c3ab16/)。

[在学习地图中定位本节](/my-web/notes/?map=P03#notes-graph-heading)

## 概念与适用条件

半径 $R$ 的均匀带电细圆环，总电荷 $Q$，轴线坐标 $x$ 从圆心量起。真空中

$$
E_x=\frac{kQx}{(R^2+x^2)^{3/2}},\qquad V(x)=\frac{kQ}{\sqrt{R^2+x^2}}.
$$

电势以无穷远为零，场强公式适用于轴线上；不能当作完整空间场。

## 推导

各元到场点距离 $s=\sqrt{R^2+x^2}$。轴向投影 $dE_x=(k\,dq/s^2)(x/s)$，积分 $\int dq=Q$。电势是标量，直接 $V=\int k\,dq/s=kQ/s$。

## 解题步骤

1. 认出圆环轴线模型。
2. 先说明横向场分量抵消。
3. 写距离和轴向投影，最后对 $dq$ 积分。
4. 用 $E_x=-dV/dx$ 独立检查。

## 课件原题｜习题课例1、例1A

**题目：** 给定 $Q,R,x$，求轴线电场和电势；见习题课 PDF 第14—15页。

1. 写 $dE_x=kx\,dq/(R^2+x^2)^{3/2}$。
2. 积分得上面两个表达式。
3. 圆心 $E_x(0)=0$，但 $V(0)=kQ/R$，展示“场为零、电势非零”。
4. $|x|\gg R$ 时 $V\sim kQ/|x|$；$Q>0$ 时场从圆心向两侧外指。
5. 对 $Q>0$ 且 $x>0$，求导 $dE_x/dx=kQ(R^2-2x^2)/(R^2+x^2)^{5/2}$，场强最大位置 $x=R/\sqrt2$。

## 易错与自检

环心电场为零不代表整个轴线场为零。轴上电势关于 $x$ 偶对称，轴向场关于 $x$ 奇对称。

## 闭卷回想

为什么圆环场强在圆心为零、远处也趋零，中间却能出现最大值？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第14页至第15页。页码是阅读器页码。
- [课堂笔记图03 · IMG20261015232214](/my-web/notes-media/asset-c980e9e2dbd0480f.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232214](/my-web/notes-media/asset-c980e9e2dbd0480f.webp)

> [!example]- 展开查看原题所在课件页
> 第五章习题课（第7版）1

## 关联与返回

[电场叠加与连续电荷积分](/my-web/notes/obsidian/f8d9b9949f706896/)、[带电圆盘与圆环分割](/my-web/notes/obsidian/148759da30c3ab16/)、[电势与电势叠加](/my-web/notes/obsidian/09dc45185b27d0e3/)、[电场与电势的梯度关系](/my-web/notes/obsidian/8f9705eb2776bc64/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [无限带电平面挖圆孔：补偿法与轴线积分](/my-web/notes/obsidian/d189b87b4f0e48eb/) · 综合
- [异号双圆环：精确电势到远场偶极近似](/my-web/notes/obsidian/6ae09d06bbb8fc9a/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [5-1-电场强度(简)1 · 均匀圆环轴线场与极值](/my-web/notes/obsidian/1831dd60eeae54c2/#%E9%A2%98%E5%9E%8B03-%E5%9D%87%E5%8C%80%E5%9C%86%E7%8E%AF%E8%BD%B4%E7%BA%BF%E5%9C%BA%E4%B8%8E%E6%9E%81%E5%80%BC)
- [5-3-电势(简)1 · 圆环和圆盘的电势叠加](/my-web/notes/obsidian/653e59c64053d33c/#%E9%A2%98%E5%9E%8B02-%E5%9C%86%E7%8E%AF%E5%92%8C%E5%9C%86%E7%9B%98%E7%9A%84%E7%94%B5%E5%8A%BF%E5%8F%A0%E5%8A%A0)
- [第五章习题课（第7版）1 · 圆环、同号与异号半环的场和势](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B02-%E5%9C%86%E7%8E%AF%E5%90%8C%E5%8F%B7%E4%B8%8E%E5%BC%82%E5%8F%B7%E5%8D%8A%E7%8E%AF%E7%9A%84%E5%9C%BA%E5%92%8C%E5%8A%BF)
