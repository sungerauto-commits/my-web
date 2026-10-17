---
title: D03 电阻串并联与分压分流
date: '2026-10-16T17:07:06.888295+00:00'
lastmod: '2026-10-16T17:07:06.888295+00:00'
draft: false
description: ''
tags:
- 电路
- 知识点
note_links:
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/29d0477b8a7ab3b3/index.md
- notes/obsidian/44b18b6111927f4a/index.md
- notes/obsidian/7de8d96e94f22918/index.md
- notes/obsidian/85f9dbeeea23a917/index.md
- notes/obsidian/87f1dce4c5d02a59/index.md
obsidian: true
note_course: 电路
---

# 电阻串并联与分压分流

> [!tip] 做题入口
> 先看节点连接，不能凭元件画得像不像串联。

## 详细讲解：从理解到列式

### 先看连接关系，再看图形外观

串联要求中间节点没有其他分支，因而流过同一电流；并联要求两端分别接同一对节点，因而电压相同。电阻画在同一条直线上并不保证串联，图上相邻也不保证并联。

### 分压和分流分别怎么来

串联时 $U=I(R_1+R_2)$，而 $U_1=IR_1$，消去 $I$：

$$
U_1=U\frac{R_1}{R_1+R_2}.
$$

并联时 $I=U(1/R_1+1/R_2)$，$I_1=U/R_1$，消去 $U$：

$$
I_1=I\frac{1/R_1}{1/R_1+1/R_2}=I\frac{R_2}{R_1+R_2}.
$$

所以串联大电阻分得更多电压，并联小电阻分得更多电流。“分流分子是另一只电阻”只适用于两支路写成电阻比的形式；多支路直接用电导比更稳妥。

### 有负载时先重画等效网络

若在分压电阻 $R_2$ 上接负载 $R_L$，下臂已变成 $R_2\parallel R_L$，不能沿用空载分压比。检查极限：$R_L\to\infty$ 回到空载；$R_L\to0$ 输出电压趋零。遇到桥式连接而不能逐步串并联时，转用节点法，不硬套分压公式。

### 学习顺序

先读：[参考方向与关联参考方向](/my-web/notes/obsidian/44b18b6111927f4a/)。

再用到：[支路电流法与节点电压法](/my-web/notes/obsidian/7de8d96e94f22918/)。

[在学习地图中定位本节](/my-web/notes/?map=D03#notes-graph-heading)

## 概念与适用条件

串联元件通过同一电流，中间节点不能再有其他分支；并联元件连接在同一对节点，电压相同。导线可拉长、弯曲，拓扑连接关系不变。

## 推导

串联：$U=I(R_1+R_2)$，所以 $R_{\mathrm{eq}}=R_1+R_2$，$U_1=UR_1/(R_1+R_2)$。

并联：$I=U/R_1+U/R_2$，所以

$$
R_{\mathrm{eq}}=\frac{R_1R_2}{R_1+R_2},\qquad I_1=I\frac{R_2}{R_1+R_2}.
$$

并联分流公式分子是另一支路电阻；电阻小的支路分到的电流大。

## 解题步骤

1. 给等电位导线标相同节点名。
2. 判断同电流还是同电压；复杂桥式电路不能强行串并联。
3. 从最内层合并，再逐层还原求支路量。

## 补充示例｜分压后再分流

**题目：** $12\mathrm V$ 电源供给 $2\Omega$ 与 $(6\Omega\parallel3\Omega)$ 的串联电路。

1. 并联部分 $R_p=6\times3/(6+3)=2\Omega$。
2. 总电阻 $4\Omega$，总电流 $I=12/4=3\mathrm A$。
3. 并联部分电压 $U_p=3\times2=6\mathrm V$。
4. 两支路 $I_6=6/6=1\mathrm A$，$I_3=6/3=2\mathrm A$。
5. 自检 $I_6+I_3=3\mathrm A$，且并联等效电阻小于 $3\Omega$。

## 易错与自检

一根导线短接某个电阻时，其两端电压为零。开路支路电流为零，但两端电压未必为零。

## 闭卷回想

为什么两个并联电阻的等效电阻一定小于任一个正电阻？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第46页至第50页。页码是阅读器页码。
- [课堂笔记图05 · IMG20261015231854](/my-web/notes-media/asset-d33147ddab79d2ca.webp)。
- [课堂笔记图06 · IMG20261015231901](/my-web/notes-media/asset-11ee4fe73b676246.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015231854](/my-web/notes-media/asset-d33147ddab79d2ca.webp)

## 关联与返回

[基尔霍夫电流定律KCL](/my-web/notes/obsidian/87f1dce4c5d02a59/)、[支路电流法与节点电压法](/my-web/notes/obsidian/7de8d96e94f22918/)、[戴维宁定理](/my-web/notes/obsidian/29d0477b8a7ab3b3/)

[返回电路入口](/my-web/notes/obsidian/115436d99c2c2ddd/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-直流电路（6学时）-2026更新 · 等效电阻与串并联识别](/my-web/notes/obsidian/85f9dbeeea23a917/#%E9%A2%98%E5%9E%8B03-%E7%AD%89%E6%95%88%E7%94%B5%E9%98%BB%E4%B8%8E%E4%B8%B2%E5%B9%B6%E8%81%94%E8%AF%86%E5%88%AB)
