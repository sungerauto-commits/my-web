---
title: P05 有限带电直棒
date: '2026-10-16T17:07:06.923423+00:00'
lastmod: '2026-10-16T17:07:06.923423+00:00'
draft: false
description: ''
tags:
- 大物
- 知识点
note_links:
- notes/obsidian/1831dd60eeae54c2/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/663edd45ab10d844/index.md
- notes/obsidian/9ce6a3433eb1249c/index.md
- notes/obsidian/9ed1c7c2e782ef18/index.md
- notes/obsidian/a7515dd943226c39/index.md
- notes/obsidian/bf68bff3575ef0c4/index.md
- notes/obsidian/f8d9b9949f706896/index.md
obsidian: true
note_course: 大学物理
---

# 有限带电直棒

> [!tip] 做题入口
> 有限直棒通常用积分；无限长才直接用柱对称结论。

## 详细讲解：从理解到列式

### 先建立不会歧义的坐标

直棒放在 $y$ 轴 $-l\le y\le l$，观察点为 $(a,0)$，$a>0$。均匀线密度 $\lambda$。成对电荷元的竖向场抵消，$dq=\lambda dy$，距离 $\sqrt{a^2+y^2}$，因此

$$
E_x=2k_e\lambda\int_0^l\frac{a\,dy}{(a^2+y^2)^{3/2}}=\frac{2k_e\lambda l}{a\sqrt{a^2+l^2}}.
$$

投影因子 $a/\sqrt{a^2+y^2}$ 是分母三次方的来源。若棒不以观察点垂足对称，竖向分量一般不为零，需要对两个分量分别积分。

### 两个极限帮你检查

$a\gg l$ 时 $E_x\approx k_e(2l\lambda)/a^2$，等于总电荷的点电荷远场；$l\to\infty$ 时 $E_x\to2k_e\lambda/a=\lambda/(2\pi\varepsilon_0a)$，恢复无限长线。二者距离衰减规律不同，不能在有限棒附近直接使用无限长线公式。

题目用端点张角表示答案时，可用 $\sin\alpha=l/\sqrt{a^2+l^2}$ 换元。务必说明角从垂线还是棒轴量起，否则 sin、cos 会交换。

### 学习顺序

先读：[电场叠加与连续电荷积分](/my-web/notes/obsidian/f8d9b9949f706896/)。

用于练习：[对应课件的题型练习](/my-web/notes/obsidian/9ed1c7c2e782ef18/)。

[在学习地图中定位本节](/my-web/notes/?map=P05#notes-graph-heading)

## 概念与适用条件

长 $L$ 的细棒沿 $x$ 轴放置，中心在原点，线密度 $\lambda=Q/L$。求垂直平分线场点 $P(0,y)$，取 $y>0$。

## 推导

源元 $dq=\lambda dx$，距离 $s=\sqrt{x^2+y^2}$。左右对称消去水平分量：
$$
E_y=k\lambda\int_{-L/2}^{L/2}\frac{y\,dx}{(x^2+y^2)^{3/2}}
=\frac{kQ}{y\sqrt{y^2+(L/2)^2}}.
$$


积分原函数可用 $x/[y\sqrt{x^2+y^2}]$ 核对。

## 解题步骤

1. 区分场点在延长线、垂直平分线还是一般位置。
2. 建立坐标，明确积分上下限。
3. 用对称性决定保留分量。
4. 求出表达式后检查远场和长棒极限。

## 课件原题｜习题5-10的垂直平分线部分

1. 按上式得到 $E_y=kQ/[y\sqrt{y^2+(L/2)^2}]$。
2. $y\gg L$ 时 $E_y\approx kQ/y^2$，如同点电荷。
3. 固定 $\lambda$、令 $L\to\infty$，因为 $Q=\lambda L$，得 $E_y\to2k\lambda/y=\lambda/(2\pi\varepsilon_0y)$。
4. 不要在无限长极限中一边固定 $Q$、一边声称线密度不变。

## 易错与自检

延长线场点不是同一个公式。高斯定理对有限棒仍成立，但端部破坏柱对称，不能把场强从曲面积分中直接提出。

## 闭卷回想

从有限棒推无限线时，应该固定总电荷还是线密度？为什么？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第50页至第52页。页码是阅读器页码。
- [课堂笔记图02 · IMG20261015232204](/my-web/notes-media/asset-337e83723a4dee33.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232204](/my-web/notes-media/asset-337e83723a4dee33.webp)

> [!example]- 展开查看原题所在课件页
> 5-1-电场强度(简)1

## 关联与返回

[电场叠加与连续电荷积分](/my-web/notes/obsidian/f8d9b9949f706896/)、[高斯定理与对称性判断](/my-web/notes/obsidian/a7515dd943226c39/)、[无限长线与圆柱对称场](/my-web/notes/obsidian/bf68bff3575ef0c4/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [5-1-电场强度(简)1 · 有限带电棒垂直平分线场](/my-web/notes/obsidian/1831dd60eeae54c2/#%E9%A2%98%E5%9E%8B07-%E6%9C%89%E9%99%90%E5%B8%A6%E7%94%B5%E6%A3%92%E5%9E%82%E7%9B%B4%E5%B9%B3%E5%88%86%E7%BA%BF%E5%9C%BA)
- [6-2-电容和静电能量（简）1 · 双平行长直导线的单位长度电容](/my-web/notes/obsidian/663edd45ab10d844/#%E9%A2%98%E5%9E%8B02-%E5%8F%8C%E5%B9%B3%E8%A1%8C%E9%95%BF%E7%9B%B4%E5%AF%BC%E7%BA%BF%E7%9A%84%E5%8D%95%E4%BD%8D%E9%95%BF%E5%BA%A6%E7%94%B5%E5%AE%B9)
- [第五章习题课（第7版）1 · 圆盘、圆环带、半球壳与有限棒](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B03-%E5%9C%86%E7%9B%98%E5%9C%86%E7%8E%AF%E5%B8%A6%E5%8D%8A%E7%90%83%E5%A3%B3%E4%B8%8E%E6%9C%89%E9%99%90%E6%A3%92)
