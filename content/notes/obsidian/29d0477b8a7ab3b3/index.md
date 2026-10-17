---
title: D09 戴维宁定理
date: '2026-10-16T17:07:06.895310+00:00'
lastmod: '2026-10-16T17:07:06.895310+00:00'
draft: false
description: ''
tags:
- 电路
- 知识点
note_links:
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/29f66ad91509ead0/index.md
- notes/obsidian/7de8d96e94f22918/index.md
- notes/obsidian/85f9dbeeea23a917/index.md
- notes/obsidian/90cba90d8e907b67/index.md
- notes/obsidian/98d7b871642b2259/index.md
- notes/obsidian/d3f7e725d6b14baa/index.md
- notes/obsidian/e531b97aac547143/index.md
- notes/obsidian/edb0e5e8a8388139/index.md
- notes/obsidian/f6180e1bff800236/index.md
obsidian: true
note_course: 电路
---

# 戴维宁定理

> [!tip] 做题入口
> 只求一条负载支路时，先把其余电路变成电压源串电阻。

## 详细讲解：从理解到列式

### 图解：戴维宁

![戴维宁](/my-web/notes-media/asset-26e5e0683683a284.svg)

黑箱只承诺端口等效，不承诺内部各元件的功率不变。 图为本库补充示意，不替代原题中的几何与方向。

### 从端口伏安直线理解等效

把线性网络看成有两个外接端子的黑箱。定义端口电压 $u=V_a-V_b$，端口电流 $i$ 从网络流向负载。它的端口关系可写成

$$
u=U_{oc}-R_{th}i.
$$

截距是开路时的电压，斜率的负值是等效电阻。这条线与“理想电压源串电阻”的端口关系一致，负载因此无法区分二者。等效只保证端口行为，不保证内部各支路功率相同。

### 两个参数怎样求

先断开负载，保留所有源，计算 $U_{oc}$。再把独立源置零，从负载端看进去求 $R_{th}$。若有受控源，保留受控源并加测试源，按测试电流流入端口的约定取 $R_{th}=U_t/I_t$；不要误把端口输出电流代入这个比值。

### 接回负载与自检

电阻负载 $R_L$ 接回后，$i=U_{oc}/(R_{th}+R_L)$，$u=R_Li$。$R_L\to\infty$ 时 $i\to0,u\to U_{oc}$；$R_L=0$ 时 $u=0$。有受控源的有源网络可能出现负等效电阻，不能仅凭负号断言错误，应检查端口参考方向和电路稳定条件。原题要内部电流时，仍要回原电路计算。

### 学习顺序

先读：[独立源与受控源](/my-web/notes/obsidian/e531b97aac547143/)、[支路电流法与节点电压法](/my-web/notes/obsidian/7de8d96e94f22918/)。

再用到：[诺顿定理与电源等效变换](/my-web/notes/obsidian/29f66ad91509ead0/)、[一阶电路三要素法](/my-web/notes/obsidian/90cba90d8e907b67/)。

[在学习地图中定位本节](/my-web/notes/?map=D09#notes-graph-heading)

## 概念与适用条件

线性有源二端网络在端口上可等效成 $U_{\mathrm{th}}$ 串联 $R_{\mathrm{th}}$。$U_{\mathrm{th}}=U_{\mathrm{oc}}$；$R_{\mathrm{th}}$ 是独立源置零后从端口看入的电阻，受控源保留并可加测试源求 $u_t/i_t$。等效只保证端口关系，不保证内部各元件电流相同。

## 推导

线性端口特性写为 $u=U_{\mathrm{oc}}-Ri$，其中 $i$ 定义为网络向负载输出的电流。接上 $R_L$ 后 $u=iR_L$，所以 $i=U_{\mathrm{oc}}/(R+R_L)$。$R=U_{\mathrm{oc}}/I_{\mathrm{sc}}$ 只在短路电流存在且该比值可用时使用，$0/0$ 时改用测试源。

## 解题步骤

1. 把待求负载拿开，标定端口正负。
2. 保留所有源求开路电压。
3. 独立源置零求端口电阻，必要时加测试源。
4. 重新接回负载求电流，负载本身不计入等效内阻。

## 课件原题｜例1.8.1

**电路图见 PDF 第92页。** $U_S=6\mathrm V,I_S=3\mathrm A,R_1=1\Omega,R_2=2\Omega$，求 $R_2$ 电流。

1. 移除 $R_2$，求 $U_{\mathrm{oc}}=U_S+R_1I_S=6+1\times3=9\mathrm V$。
2. 将6V源短路、3A源开路，端口只看见 $R_1$，所以 $R_{\mathrm{th}}=1\Omega$。
3. 接回2Ω负载，$I_2=9/(1+2)=3\mathrm A$。
4. 自检端口电压 $U=3\times2=6\mathrm V$，满足原网络节点方程。

## 易错与自检

开路电压的计算阶段不除源。含受控源时，不能把所有源都去掉。电阻可能是有源端口的负等效电阻，不能盲套纯无源网络的结论。

## 闭卷回想

为什么求 $R_{\mathrm{th}}$ 时必须先移除负载？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第82页至第95页。页码是阅读器页码。
- [课堂笔记图07 · IMG20261015231905](/my-web/notes-media/asset-0a34cf85ac193d04.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015231905](/my-web/notes-media/asset-0a34cf85ac193d04.webp)

> [!example]- 展开查看原题所在课件页
> 1-直流电路（6学时）-2026更新

## 关联与返回

[电阻串并联与分压分流](/my-web/notes/obsidian/f6180e1bff800236/)、[独立源与受控源](/my-web/notes/obsidian/e531b97aac547143/)、[叠加定理](/my-web/notes/obsidian/98d7b871642b2259/)、[诺顿定理与电源等效变换](/my-web/notes/obsidian/29f66ad91509ead0/)、[一阶电路三要素法](/my-web/notes/obsidian/90cba90d8e907b67/)

[返回电路入口](/my-web/notes/obsidian/115436d99c2c2ddd/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [双电源供电：支路电流与电源吸收功率](/my-web/notes/obsidian/d3f7e725d6b14baa/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-直流电路（6学时）-2026更新 · 戴维宁和诺顿求负载](/my-web/notes/obsidian/85f9dbeeea23a917/#%E9%A2%98%E5%9E%8B08-%E6%88%B4%E7%BB%B4%E5%AE%81%E5%92%8C%E8%AF%BA%E9%A1%BF%E6%B1%82%E8%B4%9F%E8%BD%BD)
- [2-电路的瞬态分析（4学时）-2026更新(1) · 从新电路求终值和时间常数](/my-web/notes/obsidian/edb0e5e8a8388139/#%E9%A2%98%E5%9E%8B04-%E4%BB%8E%E6%96%B0%E7%94%B5%E8%B7%AF%E6%B1%82%E7%BB%88%E5%80%BC%E5%92%8C%E6%97%B6%E9%97%B4%E5%B8%B8%E6%95%B0)
