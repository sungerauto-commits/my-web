---
title: P06 带电圆盘与圆环分割
date: '2026-10-16T17:07:06.931939+00:00'
lastmod: '2026-10-16T17:07:06.931939+00:00'
draft: false
description: ''
tags:
- 大物
- 知识点
note_links:
- notes/obsidian/1831dd60eeae54c2/index.md
- notes/obsidian/3264ea7c2054acbc/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/581bfd027b33ab9b/index.md
- notes/obsidian/653e59c64053d33c/index.md
- notes/obsidian/9ce6a3433eb1249c/index.md
- notes/obsidian/d189b87b4f0e48eb/index.md
- notes/obsidian/e808e3a51757b08c/index.md
- notes/obsidian/f8d9b9949f706896/index.md
obsidian: true
note_course: 大学物理
---

# 带电圆盘与圆环分割

> [!tip] 做题入口
> 圆盘切成同心细圆环，复用圆环轴线公式。

## 详细讲解：从理解到列式

### 图解：圆环积分

![圆环积分](/my-web/notes-media/asset-4b45cd7f75f63b99.svg)

三次方分母来自距离平方乘投影因子；不是额外背的规则。 图为本库补充示意，不替代原题中的几何与方向。

### 将圆盘分成同心细环

半径 $R$、面密度 $\sigma$ 的圆盘，在轴线上距盘 $x>0$ 处求场。取半径 $s$、宽 $ds$ 的环，电荷 $dq=2\pi\sigma s\,ds$。使用圆环轴线场：

$$
E_x=2\pi k_e\sigma x\int_0^R\frac{s\,ds}{(x^2+s^2)^{3/2}}=\frac\sigma{2\varepsilon_0}\left(1-\frac{x}{\sqrt{x^2+R^2}}\right).
$$

积分原函数为 $-1/\sqrt{x^2+s^2}$。计算上下限时出现的 $1/x$ 仅适用于已设定的 $x>0$；跨到另一侧时要重新处理绝对值或用对称性反向。

### 怎样用圆盘得到平面和圆孔

$R\to\infty$ 得无限平面场 $\sigma/(2\varepsilon_0)$；$x\gg R$ 得总电荷 $\pi R^2\sigma$ 的点电荷场。挖去圆孔，则用完整平面减同密度圆盘，得到孔轴线场。薄盘表面两侧的场存在跳变，不能把盘轴线公式的 $x\to0^+$ 当成带电表面本身不加说明的唯一场值。

### 学习顺序

先读：[均匀带电圆环轴线场强](/my-web/notes/obsidian/581bfd027b33ab9b/)。

用于练习：[EP02 无限带电平面挖圆孔：补偿法与轴线积分](/my-web/notes/obsidian/d189b87b4f0e48eb/)。

[在学习地图中定位本节](/my-web/notes/?map=P06#notes-graph-heading)

## 概念与适用条件

半径 $R$ 的圆盘面密度 $\sigma$ 均匀，轴线上 $x>0$：
$$
E_x=\frac{\sigma}{2\varepsilon_0}\left(1-\frac{x}{\sqrt{x^2+R^2}}\right),\quad
V=\frac{\sigma}{2\varepsilon_0}(\sqrt{x^2+R^2}-x).
$$


对两侧统一写电势应将 $x$ 换成 $|x|$；场在盘面两侧有法向跳变。

## 推导

取半径 $r$、宽 $dr$ 的细圆环，$dq=\sigma2\pi r\,dr$。由圆环公式

$$
E_x=\int_0^R\frac{kx\sigma2\pi r\,dr}{(x^2+r^2)^{3/2}}.
$$

用 $\int r(x^2+r^2)^{-3/2}dr=-1/\sqrt{x^2+r^2}$，得到上式。

## 解题步骤

1. 确认是轴线场点，说明横向抵消。
2. 面积元写成 $2\pi r\,dr$，不是 $\pi r^2dr$。
3. 代入圆环结果，积分半径从0到 $R$。
4. 圆环形薄盘可用大圆盘减小圆盘。

## 课件原题｜习题课例1D

1. 按积分得到轴向场表达式。
2. $x\ll R$，$E_x\approx\sigma/(2\varepsilon_0)$，趋近无限大非导体薄平面的一侧场。
3. $x\gg R$，展开 $x/\sqrt{x^2+R^2}\approx1-R^2/(2x^2)$，得 $E_x\approx\sigma R^2/(4\varepsilon_0x^2)=kQ/x^2$。
4. 用 $-dV/dx$ 可复核场强。

## 易错与自检

有限圆盘的场只在靠近中心且距盘面远小于半径时近似常量。上式的 $x=0$ 场指单侧极限，不定义理想带电面上的自身场。

## 闭卷回想

圆盘中心挖掉半径 $a$ 的孔后，轴线场强怎样由两个圆盘相减？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第18页至第19页。页码是阅读器页码。
- [课堂笔记图03 · IMG20261015232214](/my-web/notes-media/asset-c980e9e2dbd0480f.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232214](/my-web/notes-media/asset-c980e9e2dbd0480f.webp)

> [!example]- 展开查看原题所在课件页
> 第五章习题课（第7版）1

## 关联与返回

[电场叠加与连续电荷积分](/my-web/notes/obsidian/f8d9b9949f706896/)、[均匀带电圆环轴线场强](/my-web/notes/obsidian/581bfd027b33ab9b/)、[无限大平面与多平面叠加](/my-web/notes/obsidian/e808e3a51757b08c/)、[补偿法与挖孔电荷分布](/my-web/notes/obsidian/3264ea7c2054acbc/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [无限带电平面挖圆孔：补偿法与轴线积分](/my-web/notes/obsidian/d189b87b4f0e48eb/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [5-1-电场强度(简)1 · 均匀圆盘的双重积分与细环法](/my-web/notes/obsidian/1831dd60eeae54c2/#%E9%A2%98%E5%9E%8B05-%E5%9D%87%E5%8C%80%E5%9C%86%E7%9B%98%E7%9A%84%E5%8F%8C%E9%87%8D%E7%A7%AF%E5%88%86%E4%B8%8E%E7%BB%86%E7%8E%AF%E6%B3%95)
- [5-1-电场强度(简)1 · 半球壳球心场](/my-web/notes/obsidian/1831dd60eeae54c2/#%E9%A2%98%E5%9E%8B06-%E5%8D%8A%E7%90%83%E5%A3%B3%E7%90%83%E5%BF%83%E5%9C%BA)
- [5-3-电势(简)1 · 圆环和圆盘的电势叠加](/my-web/notes/obsidian/653e59c64053d33c/#%E9%A2%98%E5%9E%8B02-%E5%9C%86%E7%8E%AF%E5%92%8C%E5%9C%86%E7%9B%98%E7%9A%84%E7%94%B5%E5%8A%BF%E5%8F%A0%E5%8A%A0)
- [第五章习题课（第7版）1 · 圆盘、圆环带、半球壳与有限棒](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B03-%E5%9C%86%E7%9B%98%E5%9C%86%E7%8E%AF%E5%B8%A6%E5%8D%8A%E7%90%83%E5%A3%B3%E4%B8%8E%E6%9C%89%E9%99%90%E6%A3%92)
