---
title: D06 基尔霍夫电压定律KVL
date: '2026-10-16T17:07:06.891292+00:00'
lastmod: '2026-10-16T17:07:06.891292+00:00'
draft: false
description: ''
tags:
- 电路
- 知识点
note_links:
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/28e997c5a15ba291/index.md
- notes/obsidian/44b18b6111927f4a/index.md
- notes/obsidian/7de8d96e94f22918/index.md
- notes/obsidian/85f9dbeeea23a917/index.md
- notes/obsidian/b1996e24533bb9ee/index.md
- notes/obsidian/d3f7e725d6b14baa/index.md
obsidian: true
note_course: 电路
---

# 基尔霍夫电压定律KVL

> [!tip] 做题入口
> 绕回起点，电势升降的代数和为零。

## 详细讲解：从理解到列式

### KVL 先规定走回路的方向

沿闭合回路走一圈回到同一点，电位改变量之和为零。若跨越标注的负端到正端，电位上升 $+u$；正端到负端，下降 $-u$。也可以统一写压降之和为零，但不要在同一个方程里混用两套规则。

### 把“看箭头”与“看极性”分开

跨元件产生的电位改变量首先看电压正负标注；电流箭头只在把电压改写成 $Ri$ 等伏安关系时使用。例如沿电流通过关联电阻，是压降 $Ri$；逆电流通过，是电位上升 $Ri$。电源也按标注极性处理，不因它叫电源就一律加正号。

对 12 V 电源与两电阻串联回路，沿电源负到正、再沿电流过电阻，写

$$
12-R_1I-R_2I=0\Rightarrow I=\frac{12}{R_1+R_2}.
$$

若反向绕回路，整个方程都变号，解不变。若只其中一项变号，说明不是单纯改变绕行方向。

### 适用模型与检查

本课程集中参数电路已把感应电动势归入电感或电源等元件电压，按该模型列 KVL。若直接分析被变化磁通穿过的空间导线回路，需考虑法拉第感应，不能简单把静电场的保守性搬过去。算完选另一条未使用回路核对，常能发现源极性写反。

### 学习顺序

先读：[参考方向与关联参考方向](/my-web/notes/obsidian/44b18b6111927f4a/)。

再用到：[支路电流法与节点电压法](/my-web/notes/obsidian/7de8d96e94f22918/)、[RLC串联与相量图](/my-web/notes/obsidian/28e997c5a15ba291/)。

[在学习地图中定位本节](/my-web/notes/?map=D06#notes-graph-heading)

## 概念与适用条件

集中参数模型中沿任一闭合回路，各元件端电压的代数和为零。时变磁通引起的电动势应已纳入电感或电压源模型；不能在模型之外漏掉额外感应电动势。

## 推导

若按电位变化写，跨过元件从负端到正端记 $+u$，从正端到负端记 $-u$。闭合走一圈回到同一点，总变化为零。也可统一记电压降，但不要在一个式子里混两种约定。

## 解题步骤

1. 定一个回路巡视方向。
2. 只根据电压正负标记写升降，不直接根据“电源/电阻”名称猜正负。
3. 再用 $u=\pm Ri$ 替换电阻电压。

## 补充示例｜一条简单回路

**题目：** 12V 电源与 $2\Omega$、$4\Omega$ 串联，选电源向外输出的回路电流 $i$。

1. 从电源负端走到正端记 $+12$。
2. 沿电流穿过两个电阻各记 $-2i$、$-4i$。
3. $12-2i-4i=0$，得 $i=2\mathrm A$。
4. 从反方向走则 $-12+2i+4i=0$，结果相同。

## 易错与自检

开路两端也有电压，可以通过含开路端点的电位路径求电势差。电流源两端电压常是未知数，不能默认等于零。

## 闭卷回想

若巡视方向反了，整条 KVL 方程应如何变化？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第57页至第60页。页码是阅读器页码。
- [课堂笔记图05 · IMG20261015231854](/my-web/notes-media/asset-d33147ddab79d2ca.webp)。
- [课堂笔记图06 · IMG20261015231901](/my-web/notes-media/asset-11ee4fe73b676246.webp)。
- [课堂笔记图07 · IMG20261015231905](/my-web/notes-media/asset-0a34cf85ac193d04.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015231854](/my-web/notes-media/asset-d33147ddab79d2ca.webp)

## 关联与返回

[参考方向与关联参考方向](/my-web/notes/obsidian/44b18b6111927f4a/)、[支路电流法与节点电压法](/my-web/notes/obsidian/7de8d96e94f22918/)、[RLC串联与相量图](/my-web/notes/obsidian/28e997c5a15ba291/)

[返回电路入口](/my-web/notes/obsidian/115436d99c2c2ddd/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [双电源供电：支路电流与电源吸收功率](/my-web/notes/obsidian/d3f7e725d6b14baa/) · 综合
- [已知两支路电流反求电桥参数](/my-web/notes/obsidian/b1996e24533bb9ee/) · 进阶

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-直流电路（6学时）-2026更新 · 回路极性与 KVL 求未知量](/my-web/notes/obsidian/85f9dbeeea23a917/#%E9%A2%98%E5%9E%8B05-%E5%9B%9E%E8%B7%AF%E6%9E%81%E6%80%A7%E4%B8%8E-kvl-%E6%B1%82%E6%9C%AA%E7%9F%A5%E9%87%8F)
