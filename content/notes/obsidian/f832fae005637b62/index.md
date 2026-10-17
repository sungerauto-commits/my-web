---
title: D11 非线性电阻与负载线
date: '2026-10-16T17:07:06.897811+00:00'
lastmod: '2026-10-16T17:07:06.897811+00:00'
draft: false
description: ''
tags:
- 电路
- 知识点
note_links:
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/29d0477b8a7ab3b3/index.md
- notes/obsidian/7de8d96e94f22918/index.md
- notes/obsidian/85f9dbeeea23a917/index.md
- notes/obsidian/9ed1c7c2e782ef18/index.md
- notes/obsidian/f6180e1bff800236/index.md
obsidian: true
note_course: 电路
---

# 非线性电阻与负载线

> [!tip] 做题入口
> 看到曲线伏安特性，找工作点，不要当成固定电阻。

## 详细讲解：从理解到列式

### 方程的未知量是同一个工作点

非线性元件用 $i=f(u)$ 或伏安曲线表示；外部线性网络可先等效成 $U_{th},R_{th}$，其约束为 $i=(U_{th}-u)/R_{th}$。真正的电压、电流必须同时满足这两条关系，所以是曲线与负载直线的交点。

### 负载线怎么画

在横轴 $u$、纵轴 $i$ 的同一坐标系，取两截距 $(U_{th},0)$、$(0,U_{th}/R_{th})$ 连成直线，再找与元件曲线的交点。两坐标必须单位一致；若纵轴用 mA，则斜率数值也要相应换算。

### 静态电阻和微分电阻不同

工作点为 $(U_0,I_0)$ 时，静态电阻 $R_{static}=U_0/I_0$ 是原点到该点的割线比；微分电阻 $r_d=(du/di)_0$ 描述该点附近小变化。只在足够小的扰动下，才可写 $\Delta u\approx r_d\Delta i$。曲线明显弯曲时，不能用一个固定电阻覆盖全部工作范围。

交点可能不止一个，存在多个代数工作点时还需结合器件模型和动态稳定性判断。仅用一张静态图，通常不能证明哪个交点在实际电路中稳定。

### 学习顺序

先读：[支路电流法与节点电压法](/my-web/notes/obsidian/7de8d96e94f22918/)。

用于练习：[对应课件的题型练习](/my-web/notes/obsidian/9ed1c7c2e782ef18/)。

[在学习地图中定位本节](/my-web/notes/?map=D11#notes-graph-heading)

## 概念与适用条件

非线性元件的 $U-I$ 关系不是过原点的固定斜率直线。工作点静态电阻 $R=U/I$，动态电阻 $r=dU/dI$，两者一般不同。动态电阻只用于工作点附近的小变化近似。

## 推导

把外部线性网络等效为 $U_{\mathrm{th}},R_{\mathrm{th}}$，KVL 给出 $U+R_{\mathrm{th}}I=U_{\mathrm{th}}$。这条直线与非线性特性 $I=f(U)$ 的交点同时满足元件规律和外部电路，因而是工作点。

## 解题步骤

1. 取出非线性元件，先求外部戴维宁等效。
2. 用 $I=0$ 和 $U=0$ 两个截距画负载线。
3. 与元件特性求交得到 $U_Q,I_Q$。
4. 由原点连线算静态电阻，由工作点切线算动态电阻。

## 课件原题｜例1.9.1

**曲线见直流课件 PDF 第99、102页。** $U_S=6\mathrm V,R_1=R_2=2\mathrm{k}\Omega$。

1. 外电路 $U_{\mathrm{th}}=6\times2/(2+2)=3\mathrm V$。
2. $R_{\mathrm{th}}=2\parallel2=1\mathrm{k}\Omega$。
3. 负载线截距为 $(U=3\mathrm V,I=0)$ 和 $(U=0,I=3\mathrm{mA})$。
4. 图示交点 $U_Q=1\mathrm V,I_Q=2\mathrm{mA}$，所以 $R=0.5\mathrm{k}\Omega$。
5. 课件在该点的切线给出 $r=1\mathrm{k}\Omega$；这是原图读数，不能只由一个工作点推算。

## 易错与自检

若横轴是电压、纵轴是电流，曲线切线斜率是 $dI/dU$，动态电阻取其倒数。不要对整个含非线性元件的电路直接套叠加定理。

## 闭卷回想

只有 $(U_Q,I_Q)$ 这两个数，能否知道动态电阻？还缺什么信息？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第97页至第102页。页码是阅读器页码。
- [课堂笔记图08 · IMG20261015231913](/my-web/notes-media/asset-abfbd50fb58bf90f.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015231913](/my-web/notes-media/asset-abfbd50fb58bf90f.webp)

> [!example]- 展开查看原题所在课件页
> 1-直流电路（6学时）-2026更新

## 关联与返回

[电阻串并联与分压分流](/my-web/notes/obsidian/f6180e1bff800236/)、[戴维宁定理](/my-web/notes/obsidian/29d0477b8a7ab3b3/)

[返回电路入口](/my-web/notes/obsidian/115436d99c2c2ddd/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-直流电路（6学时）-2026更新 · 非线性元件工作点与两种电阻](/my-web/notes/obsidian/85f9dbeeea23a917/#%E9%A2%98%E5%9E%8B09-%E9%9D%9E%E7%BA%BF%E6%80%A7%E5%85%83%E4%BB%B6%E5%B7%A5%E4%BD%9C%E7%82%B9%E4%B8%8E%E4%B8%A4%E7%A7%8D%E7%94%B5%E9%98%BB)
