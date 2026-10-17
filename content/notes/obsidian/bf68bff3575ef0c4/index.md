---
title: P10 无限长线与圆柱对称场
date: '2026-10-16T17:07:06.939368+00:00'
lastmod: '2026-10-16T17:07:06.939368+00:00'
draft: false
description: ''
tags:
- 大物
- 知识点
note_links:
- notes/obsidian/02e13da3fb3fda17/index.md
- notes/obsidian/09dc45185b27d0e3/index.md
- notes/obsidian/3dfa67a5b7eeec93/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/5bd546b0c5a7dedc/index.md
- notes/obsidian/653e59c64053d33c/index.md
- notes/obsidian/663edd45ab10d844/index.md
- notes/obsidian/95fd4a5603d6b827/index.md
- notes/obsidian/9ce6a3433eb1249c/index.md
- notes/obsidian/a7515dd943226c39/index.md
obsidian: true
note_course: 大学物理
---

# 无限长线与圆柱对称场

> [!tip] 做题入口
> 同轴圆柱侧面有通量，两个端面的通量为零。

## 详细讲解：从理解到列式

### 无限长对称性意味着场不随轴向改变

无限长均匀线电荷或无限长圆柱，绕轴旋转和沿轴平移后分布不变，场只能沿径向且只依赖 $r$。取长度 $L$ 的同轴高斯柱，端面法线沿轴、场沿径向，端面通量为零，侧面通量 $2\pi rLE$。

线电荷 $Q_{enc}=\lambda L$，所以 $E_r=\lambda/(2\pi\varepsilon_0r)$。均匀实体圆柱半径 $R$、密度 $\rho$，柱内 $Q_{enc}=\rho\pi r^2L$，得 $E_r=\rho r/(2\varepsilon_0)$；柱外改用总线密度 $\lambda=\rho\pi R^2$。

### 为什么无限长线不能直接把无穷远势设为零

电势差 $V(b)-V(a)=-\int_a^b E_rdr=-\lambda\ln(b/a)/(2\pi\varepsilon_0)$。当 $b\to\infty$ 积分对数发散，因此不能为理想无限长线定义有限的“无穷远零势”。可选某个有限半径为参考。有限长导线远处则是另一问题，不能混用理想无限长模型的参考条件。

### 学习顺序

先读：[高斯定理与对称性判断](/my-web/notes/obsidian/a7515dd943226c39/)。

再用到：[同轴圆柱电容器](/my-web/notes/obsidian/5bd546b0c5a7dedc/)。

[在学习地图中定位本节](/my-web/notes/?map=P10#notes-graph-heading)

## 概念与适用条件

无限长均匀线电荷 $\lambda$ 在真空中 $E_r=\lambda/(2\pi\varepsilon_0r)$。无限长、均匀体密度 $\rho$、半径 $R$ 的圆柱内部为 $E_r=\rho r/(2\varepsilon_0)$，外部为 $E_r=\rho R^2/(2\varepsilon_0r)$。假定不存在破坏对称性的其他源。

## 推导

选长 $l$、半径 $r$ 的同轴闭合柱面。端面法向沿轴，而场沿径向，端面通量为零。侧面通量 $E\,2\pi rl$。线电荷包围量 $\lambda l$，实心柱内部包围量 $\rho\pi r^2l$。

## 解题步骤

1. 判断长到可以忽略端部效应，明确线、柱面还是柱体分布。
2. 分区写电荷量。
3. 求场后，电势差用两个有限半径间的积分。

## 课件原题｜例3与推广例3A

1. 对线电荷，高斯式给出 $E_r=\lambda/(2\pi\varepsilon_0r)$。
2. 两半径 $r_a,r_b$ 的电势差
   $$
   V(r_a)-V(r_b)=\frac{\lambda}{2\pi\varepsilon_0}\ln\frac{r_b}{r_a}.
   $$


3. $\lambda>0$ 且 $r_b>r_a$ 时，靠近线处电势更高。
4. 因为 $\int_r^\infty dr/r$ 发散，不能给孤立理想无限线选一个有限的“无穷远电势为零”。

## 易错与自检

圆柱体内部的包围电荷只取高斯面内部部分。对有限长导线用无限线公式需明确观察位置远离端部。

## 闭卷回想

为什么无限长线电荷可以求两个有限位置之间的电势差，却不能按通常方式定义以无穷远为零的电势？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第30页至第33页。页码是阅读器页码。
- [课堂笔记图02 · IMG20261015232204](/my-web/notes-media/asset-337e83723a4dee33.webp)。
- [课堂笔记图07 · IMG20261015232244](/my-web/notes-media/asset-dc0064a7bf3f57b1.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232204](/my-web/notes-media/asset-337e83723a4dee33.webp)

> [!example]- 展开查看原题所在课件页
> 第五章习题课（第7版）1

## 关联与返回

[有限带电直棒](/my-web/notes/obsidian/02e13da3fb3fda17/)、[高斯定理与对称性判断](/my-web/notes/obsidian/a7515dd943226c39/)、[电势与电势叠加](/my-web/notes/obsidian/09dc45185b27d0e3/)、[同轴圆柱电容器](/my-web/notes/obsidian/5bd546b0c5a7dedc/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [5-2-高斯定理(简)1 · 无限长线、圆柱面和实体柱](/my-web/notes/obsidian/95fd4a5603d6b827/#%E9%A2%98%E5%9E%8B04-%E6%97%A0%E9%99%90%E9%95%BF%E7%BA%BF%E5%9C%86%E6%9F%B1%E9%9D%A2%E5%92%8C%E5%AE%9E%E4%BD%93%E6%9F%B1)
- [5-3-电势(简)1 · 无限长线与同轴圆筒的电势差](/my-web/notes/obsidian/653e59c64053d33c/#%E9%A2%98%E5%9E%8B04-%E6%97%A0%E9%99%90%E9%95%BF%E7%BA%BF%E4%B8%8E%E5%90%8C%E8%BD%B4%E5%9C%86%E7%AD%92%E7%9A%84%E7%94%B5%E5%8A%BF%E5%B7%AE)
- [6-1-静电场中的导体和电介质(简) 1 · 同轴介质的位移场与极化电荷](/my-web/notes/obsidian/3dfa67a5b7eeec93/#%E9%A2%98%E5%9E%8B05-%E5%90%8C%E8%BD%B4%E4%BB%8B%E8%B4%A8%E7%9A%84%E4%BD%8D%E7%A7%BB%E5%9C%BA%E4%B8%8E%E6%9E%81%E5%8C%96%E7%94%B5%E8%8D%B7)
- [6-2-电容和静电能量（简）1 · 双平行长直导线的单位长度电容](/my-web/notes/obsidian/663edd45ab10d844/#%E9%A2%98%E5%9E%8B02-%E5%8F%8C%E5%B9%B3%E8%A1%8C%E9%95%BF%E7%9B%B4%E5%AF%BC%E7%BA%BF%E7%9A%84%E5%8D%95%E4%BD%8D%E9%95%BF%E5%BA%A6%E7%94%B5%E5%AE%B9)
- [第五章习题课（第7版）1 · 均匀与变密度无限长圆柱](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B05-%E5%9D%87%E5%8C%80%E4%B8%8E%E5%8F%98%E5%AF%86%E5%BA%A6%E6%97%A0%E9%99%90%E9%95%BF%E5%9C%86%E6%9F%B1)
