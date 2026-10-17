---
title: R25 连续均匀分布
date: '2026-10-16T17:07:07.057871+00:00'
lastmod: '2026-10-16T17:07:07.057871+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/1908780ea766a34a/index.md
- notes/obsidian/1a2adbe54fd640b8/index.md
- notes/obsidian/35c0448e7aeb3994/index.md
- notes/obsidian/398e913b88e52dfe/index.md
- notes/obsidian/4ca1b2d1cb4584b3/index.md
- notes/obsidian/51b2f723cc621afb/index.md
- notes/obsidian/937033040958dfa7/index.md
- notes/obsidian/a4baa267f6b84d83/index.md
- notes/obsidian/cd3e85505394c498/index.md
obsidian: true
note_course: 概率论
---

# 连续均匀分布

> [!tip] 做题入口
> 等长子区间概率相同，密度必须是常数。

## 详细讲解：从理解到列式

### 图解：密度与CDF

![密度与CDF](/my-web/notes-media/asset-87a33aaea47a5cbf.svg)

密度图下面积等于CDF的增量，密度高度本身不等于概率。 图为本库补充示意，不替代原题中的几何与方向。

### 均匀意味着等长区间分得相同概率

若 $X\sim U(a,b)$，总区间长度为 $b-a$，常密度由积分为1给出 $f=1/(b-a)$。CDF在区间内是 $F(x)=(x-a)/(b-a)$，外部补0和1。不要把区间中点当成密度的参数，也不要把“连续型”自动当成“均匀”。

### 事件先转成区间长度

求 $P(c<X<d)$，先将 $(c,d)$ 与 $(a,b)$ 取交，再用交集长度除以 $b-a$。若题目由X决定方程是否有实根，先用判别式解出满足条件的X集合，再计算其长度；这一步是代数到概率的转换。

两个独立均匀变量的和一般不再均匀：例如 $U(0,1)$ 两变量相加，中间的和可由更多组合得到，密度呈三角形。非线性变换也通常不保持均匀性，要用原像或CDF法重新求分布，不能仅将原端点代入函数后写“仍均匀”。

### 学习顺序

先读：[概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/)。

用于练习：[ER05 红灯等待：有跳跃的混合分布](/my-web/notes/obsidian/937033040958dfa7/)、[ER09 余弦变换：两个反函数分支都要计入](/my-web/notes/obsidian/4ca1b2d1cb4584b3/)。

[在学习地图中定位本节](/my-web/notes/?map=R25#notes-graph-heading)

## 前提与后续关系

**先确认：** [概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/)

**继续用于：** 结合下方关联节点做题与复查。

## 定义与前提

$X\sim U(a,b)$，$a<b$，密度 $f(x)=1/(b-a)$（$a<x<b$），外部0。

## 逐步推导

均匀性要求支持区间内 $f=c$，归一化 $c(b-a)=1$ 得 $c=1/(b-a)$。积分得

$$
F(x)=\begin{cases}0&x\le a\\(x-a)/(b-a)&a<x<b\\1&x\ge b.\end{cases}
$$

概率等于所求区间与 $(a,b)$ 交集的长度除以 $b-a$。

## 课件原题｜三次独立观测

**题目：** $X\sim U(2,5)$，独立观测3次，求至少两次大于3（第24—25页）。

1. 单次成功概率 $p=P(X>3)=(5-3)/(5-2)=2/3$。
2. 令 $K$ 为成功次数，$K\sim\operatorname{Bin}(3,2/3)$。
3. $P(K\ge2)=\binom32(2/3)^2(1/3)+(2/3)^3=20/27$。
4. 逻辑是连续分布先给单次事件概率，再由独立重复试验生成离散计数分布。

## 易错与边界

圆盘面积均匀不等于半径均匀。观察时刻“随机”还需说明是否在时间区间均匀，才能把等车时间建成均匀分布。

## 回想任务

若三次观测并不独立，即使每次边缘分布相同，还能得到20/27吗？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第19页至第25页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图15 · IMG20261015233251](/my-web/notes-media/asset-f7562be5f02cb933.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233251](/my-web/notes-media/asset-f7562be5f02cb933.webp)

> [!example]- 展开查看原题所在课件页
> 2-4review、

## 关联与返回

[几何概型](/my-web/notes/obsidian/a4baa267f6b84d83/)、[二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/)、[概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/)、[函数分布的分布函数法](/my-web/notes/obsidian/1a2adbe54fd640b8/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [红灯等待：有跳跃的混合分布](/my-web/notes/obsidian/937033040958dfa7/) · 综合
- [余弦变换：两个反函数分支都要计入](/my-web/notes/obsidian/4ca1b2d1cb4584b3/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [2-1review · 等车时间连续取值](/my-web/notes/obsidian/398e913b88e52dfe/#%E9%A2%98%E5%9E%8B03-%E7%AD%89%E8%BD%A6%E6%97%B6%E9%97%B4%E8%BF%9E%E7%BB%AD%E5%8F%96%E5%80%BC)
- [2-4review、 · 均匀变量的区间概率与方程实根](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B04-%E5%9D%87%E5%8C%80%E5%8F%98%E9%87%8F%E7%9A%84%E5%8C%BA%E9%97%B4%E6%A6%82%E7%8E%87%E4%B8%8E%E6%96%B9%E7%A8%8B%E5%AE%9E%E6%A0%B9)
- [2-4review、 · 均匀观测转为二项次数](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B05-%E5%9D%87%E5%8C%80%E8%A7%82%E6%B5%8B%E8%BD%AC%E4%B8%BA%E4%BA%8C%E9%A1%B9%E6%AC%A1%E6%95%B0)
- [2-4review、 · 先抽球再在不相邻区间均匀取数](/my-web/notes/obsidian/51b2f723cc621afb/#%E9%A2%98%E5%9E%8B12-%E5%85%88%E6%8A%BD%E7%90%83%E5%86%8D%E5%9C%A8%E4%B8%8D%E7%9B%B8%E9%82%BB%E5%8C%BA%E9%97%B4%E5%9D%87%E5%8C%80%E5%8F%96%E6%95%B0)
