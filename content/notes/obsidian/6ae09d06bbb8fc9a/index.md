---
title: EP03 异号双圆环：精确电势到远场偶极近似
date: '2026-10-16T11:41:12.628755+00:00'
lastmod: '2026-10-16T11:41:12.628755+00:00'
draft: false
description: ''
tags:
- 原题精解
- 大物
note_links:
- notes/obsidian/09dc45185b27d0e3/index.md
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/581bfd027b33ab9b/index.md
- notes/obsidian/64eecd8aa05cc58a/index.md
- notes/obsidian/8f9705eb2776bc64/index.md
obsidian: true
note_course: 大学物理
---

# 异号双圆环：精确电势到远场偶极近似

## 原题与配图

![EP03-1](/my-web/notes-media/asset-ee5abbe2e4eb0572.png)

![EP03-2](/my-web/notes-media/asset-fc6d3ea2667c191f.png)

**教材习题5-38，印刷第208页，附原图 · 综合**

两个半径均为 $R$ 的圆环带电 $\pm q$，以中心 $O$ 对称平行放置，环间距 $l\ll R$。以环心连线为 $x$ 轴，正电环在右。（1）求轴线上电势分布；（2）取无穷远为零，证明当 $x\gg R$ 时，$V\approx ql/(4\pi\varepsilon_0x^2)$。

## 解题思路

电势是标量，比先求电场再积分方便。先写两个圆环的精确势，再根据 $l\ll R$ 做一次小间距展开，最后使用 $x\gg R$；每一步近似都要说明忽略了什么。

## 逐步解答

### 1. 写出精确轴线电势

记 $k_e=1/(4\pi\varepsilon_0)$，正、负电环中心在 $x=l/2,-l/2$。同一环上各电荷到轴线点距离相等，故

$$
\boxed{V(x)=k_eq\left[\frac1{\sqrt{R^2+(x-l/2)^2}}-\frac1{\sqrt{R^2+(x+l/2)^2}}\right].}
$$

### 2. 对小间距作泰勒展开

令 $f(x)=(R^2+x^2)^{-1/2}$。则

$$
f(x-l/2)-f(x+l/2)=-lf'(x)+O(l^3),
$$

$$
f'(x)=-\frac{x}{(R^2+x^2)^{3/2}}.
$$

所以一阶小间距近似为

$$
V(x)\approx k_eql\frac{x}{(R^2+x^2)^{3/2}}.
$$

偶次项因对称相减而消失。

### 3. 进一步取远场 $x\gg R$，$x>0$

$$
\frac{x}{(R^2+x^2)^{3/2}}=\frac1{x^2}\left(1+\frac{R^2}{x^2}\right)^{-3/2}\approx\frac1{x^2}.
$$

$$
\boxed{V(x)\approx\frac{ql}{4\pi\varepsilon_0x^2}.}
$$

若考察负半轴，应写 $V\approx k_eql\,x/|x|^3$，势为负；不能把正半轴的 $1/x^2$ 结果原样延续到左侧。

## 结果自检

精确式满足 $V(-x)=-V(x)$、$V(0)=0$。系统总电荷为零，因此远场没有 $1/|x|$ 的单极项，首项按 $1/x^2$ 衰减。

## 易错点

“远离圆环”要求距离大于 $R$；仅 $x\gg l$ 不足以直接把圆环都看成点电荷。

## 对应知识点

[均匀带电圆环轴线场强](/my-web/notes/obsidian/581bfd027b33ab9b/) · [电势与电势叠加](/my-web/notes/obsidian/09dc45185b27d0e3/) · [电场与电势的梯度关系](/my-web/notes/obsidian/8f9705eb2776bc64/) · [电偶极子与均匀场中的力矩](/my-web/notes/obsidian/64eecd8aa05cc58a/)

## 原始出处

《物理学》第七版上册 PDF第229页

原图从项目资料逐页截取；解题过程为本库重新推导。图片默认展开，点击图片可放大。

[返回原题题库](/my-web/notes/obsidian/0ccc1ba647a82d72/) · [课程入口](/my-web/notes/obsidian/43f6cacf0a44b408/)
