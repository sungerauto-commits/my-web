---
title: P14 电场与电势的梯度关系
date: '2026-10-16T17:07:06.963906+00:00'
lastmod: '2026-10-16T17:07:06.963906+00:00'
draft: false
description: ''
tags:
- 大物
- 知识点
note_links:
- notes/obsidian/09dc45185b27d0e3/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/581bfd027b33ab9b/index.md
- notes/obsidian/61c5fb0adfb7b15d/index.md
- notes/obsidian/64eecd8aa05cc58a/index.md
- notes/obsidian/653e59c64053d33c/index.md
- notes/obsidian/6ae09d06bbb8fc9a/index.md
obsidian: true
note_course: 大学物理
---

# 电场与电势的梯度关系

> [!tip] 做题入口
> 电势下降最快的方向就是电场方向。

## 详细讲解：从理解到列式

### 图解：球体场势

![球体场势](/my-web/notes-media/asset-2146e49460bdf473.svg)

对比图的斜率：−dV/dr=E，不能由E=0推V=0。 图为本库补充示意，不替代原题中的几何与方向。

### 负号表示沿场方向电势降低

由 $dV=-\mathbf E\cdot d\mathbf l$，只沿 x 方向移动时 $\partial V/\partial x=-E_x$，三维合写为 $\mathbf E=-\nabla V$。求某个分量时，要对该方向坐标求偏导，其他坐标保持不变。

### 从势函数恢复电场

若 $V(x,y)=Axy+Bx^2$，则 $E_x=-(Ay+2Bx)$、$E_y=-Ax$。把它当成一元函数只对 x 求导，会漏掉 y 方向的场。若具有球对称 $V=V(r)$，则 $E_r=-dV/dr$；但一般标成“r”的距离变量未必足以描述整个势，先核对对称性。

### 图像怎样读

在 $V$ 随位置的曲线上，斜率越陡，沿该方向的场分量大小越大；水平段该分量为零。等势面密集表示势变化快，场垂直等势面，指向势降低的一侧。注意电场线朝低势方向，与负电荷受到的力方向相反。给定某条路径的 $V(s)$，只能推出沿该路径切向的场分量，不能凭一条曲线恢复全部三维场。

### 学习顺序

先读：[电势与电势叠加](/my-web/notes/obsidian/09dc45185b27d0e3/)。

用于练习：[EP03 异号双圆环：精确电势到远场偶极近似](/my-web/notes/obsidian/6ae09d06bbb8fc9a/)。

[在学习地图中定位本节](/my-web/notes/?map=P14#notes-graph-heading)

## 概念与适用条件

$dV=-\mathbf E\cdot d\mathbf l$，故 $\mathbf E=-\nabla V$。直角坐标 $E_x=-\partial V/\partial x$、$E_y=-\partial V/\partial y$、$E_z=-\partial V/\partial z$。仅一维变化时才写 $E_x=-dV/dx$。

## 推导

沿任意微位移，电势全微分是 $dV=\nabla V\cdot d\mathbf l$。与电势差定义比较得到负梯度。等势面上的切向电势变化为零，所以电场垂直等势面。

## 解题步骤

1. 明确给出的电势是完整空间函数，还是只给某一条线的取值。
2. 对各独立坐标求偏导并加负号。
3. 只知道一条轴线上的电势时，一般只能得到该方向分量；其他分量需要对称性补充。

## 补充示例｜由二维势求场

**题目：** $V(x,y)=A(x^2-y^2)$，$A$ 单位 $\mathrm{V/m^2}$。

1. $E_x=-2Ax$，$E_y=+2Ay$，$E_z=0$。
2. 在 $(a,0)$，场沿 $-x$（假定 $A,a>0$）。
3. 沿 $x$ 方向验证 $V(b,0)-V(a,0)=A(b^2-a^2)=-\int_a^b E_xdx$。
4. 代入圆环轴线电势也能求出圆环轴向场，横向分量为零还需圆环轴对称。

## 易错与自检

电势值大不等于电场大，场由空间变化率决定。一个点 $V=0$ 也不意味着该点 $\mathbf E=0$。

## 闭卷回想

给整个空间的电势都加常数100V，场强会不会改变？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- [课堂笔记图05 · IMG20261015232231](/my-web/notes-media/asset-d982bb1696e66e56.webp)。
- [课堂笔记图08 · IMG20261015232250](/my-web/notes-media/asset-5d2855c9d45dc7b8.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232231](/my-web/notes-media/asset-d982bb1696e66e56.webp)

## 关联与返回

[均匀带电圆环轴线场强](/my-web/notes/obsidian/581bfd027b33ab9b/)、[球对称电荷的分区电场与电势](/my-web/notes/obsidian/61c5fb0adfb7b15d/)、[电势与电势叠加](/my-web/notes/obsidian/09dc45185b27d0e3/)、[电偶极子与均匀场中的力矩](/my-web/notes/obsidian/64eecd8aa05cc58a/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [异号双圆环：精确电势到远场偶极近似](/my-web/notes/obsidian/6ae09d06bbb8fc9a/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [5-3-电势(简)1 · 已知电势通过梯度求场](/my-web/notes/obsidian/653e59c64053d33c/#%E9%A2%98%E5%9E%8B06-%E5%B7%B2%E7%9F%A5%E7%94%B5%E5%8A%BF%E9%80%9A%E8%BF%87%E6%A2%AF%E5%BA%A6%E6%B1%82%E5%9C%BA)
