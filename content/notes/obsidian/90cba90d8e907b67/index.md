---
title: D15 一阶电路三要素法
date: '2026-10-16T17:07:06.902813+00:00'
lastmod: '2026-10-16T17:07:06.902813+00:00'
draft: false
description: ''
tags:
- 电路
- 知识点
note_links:
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/15aec57c6df1f613/index.md
- notes/obsidian/19b122467f6cebf2/index.md
- notes/obsidian/29d0477b8a7ab3b3/index.md
- notes/obsidian/3502c3003a7fe1bb/index.md
- notes/obsidian/4deccae1762f21a1/index.md
- notes/obsidian/50aed8ea4d5c45b2/index.md
- notes/obsidian/74b4cec86c01df5d/index.md
- notes/obsidian/abd5e632e172ba01/index.md
- notes/obsidian/e36be8778d58d649/index.md
- notes/obsidian/edb0e5e8a8388139/index.md
obsidian: true
note_course: 电路
---

# 一阶电路三要素法

> [!tip] 做题入口
> 先找初值、终值、时间常数，再写指数。

## 详细讲解：从理解到列式

### 图解：一阶响应

![一阶响应](/my-web/notes-media/asset-16801da95c3297ab.svg)

从图中读“初值、终值、剩余差值”，而不是背一个固定充电百分比。 图为本库补充示意，不替代原题中的几何与方向。

### 先选真正的状态，再推指数形式

RC 网络通常选 $x=u_C$，RL 网络选 $x=i_L$。固定拓扑、恒定源的线性一阶方程可化为

$$
\tau\frac{dx}{dt}+x=x_\infty.
$$

减去常数特解，令 $y=x-x_\infty$，则 $dy/y=-dt/\tau$。从 0 积分到 $t$：

$$
\ln\frac{|y(t)|}{|y(0)|}=-\frac t\tau\Rightarrow x(t)=x_\infty+(x_0-x_\infty)e^{-t/\tau}.
$$

若初值恰等于终值，$y=0$，响应恒定，不能在分离变量时丢掉这个解。

### 三个参数为什么分别这样求

初值来自上一阶段和换路连续性；终值是换路后“时间足够久”的受迫平衡，因此要保留电源。时间常数描述偏离平衡后的自然衰减，求它时把独立源置零、保留受控源和换路后的网络，RC 有 $\tau=R_{eq}C$，RL 有 $\tau=L/R_{eq}$。

求其他支路电流时，先用已求状态和元件关系表达它，再找它自己的初值与终值。多次换路应写 $e^{-(t-t_k)/\tau_k}$，其中 $t_k$ 是当前阶段起点。两个独立储能状态通常形成二阶系统，不能因为题中只求一个电压，就直接使用单指数。

### 学习顺序

先读：[戴维宁定理](/my-web/notes/obsidian/29d0477b8a7ab3b3/)、[换路定律与初始值](/my-web/notes/obsidian/50aed8ea4d5c45b2/)。

再用到：[RC充放电与全响应](/my-web/notes/obsidian/e36be8778d58d649/)、[RL一阶响应](/my-web/notes/obsidian/abd5e632e172ba01/)。

[在学习地图中定位本节](/my-web/notes/?map=D15#notes-graph-heading)

## 概念与适用条件

单一独立储能状态、参数固定、换路后直流激励的一阶线性电路，在每个固定拓扑时间段内可写

$$
f(t)=f(\infty)+[f(0^+)-f(\infty)]e^{-t/\tau}.
$$

对稳定无源 RC、RL 网络，$\tau>0$。多次换路要分段，以每段换路时刻为新起点；二阶RLC暂态不能直接使用一条一阶指数。

## 推导

一阶方程 $a\,df/dt+bf=c$ 的常数特解为 $f_\infty=c/b$。令 $g=f-f_\infty$，得 $dg/dt=-g/\tau$、$\tau=a/b$，所以 $g=g_0e^{-t/\tau}$。

## 解题步骤

1. 换路前求状态量，利用连续性求 $0^+$。
2. 换路后求 $\infty$：直流稳态电容开路、电感短路。
3. 在换路后拓扑中移除储能元件、独立源置零，求它两端看入的 $R_{\mathrm{eq}}$；受控源保留。
4. RC：$\tau=R_{\mathrm{eq}}C$；RL：$\tau=L/R_{\mathrm{eq}}$。
5. 写响应，用 $t=0$、$t\to\infty$ 和单位秒核对。

## 课件原题｜例2.6.1

**题图见瞬态课件 PDF 第63页。** 换路前48V通过 $R_0=2\Omega,R_1=6\Omega,R_3=4\Omega$，电容25μF稳定后换接放电，另有 $R_2=1.6\Omega$。

1. $u_C(0^-)=48\times4/(2+6+4)=16\mathrm V$。
2. 换路后电容看到 $R_2+(R_1\parallel R_3)=1.6+2.4=4\Omega$。
3. $\tau=4\times25\mu\mathrm F=10^{-4}\mathrm s$；无外激励，终值为0。
4. 初始放电电流 $i_2(0^+)=16/4=4\mathrm A$，分流 $i_1(0^+)=1.6\mathrm A$、$i_3(0^+)=2.4\mathrm A$。
5. 按原图箭头：$i_1=1.6e^{-10^4t}$ A，$i_2=4e^{-10^4t}$ A，$i_3=2.4e^{-10^4t}$ A。

## 易错与自检

时间常数用换路后电阻，不能把已断开的电源侧电阻带进去。任意支路响应的初值需要 KCL/KVL，不能直接复制 $u_C$ 或 $i_L$ 的连续性。

## 闭卷回想

为什么求终值要保留电源，而求时间常数要把独立源置零？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第55页至第67页。页码是阅读器页码。
- [课堂笔记图10 · IMG20261015231929](/my-web/notes-media/asset-ebf2353729b16f40.webp)。
- [课堂笔记图11 · IMG20261015231933](/my-web/notes-media/asset-987d9c8fda1f8990.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015231929](/my-web/notes-media/asset-ebf2353729b16f40.webp)

> [!example]- 展开查看原题所在课件页
> 2-电路的瞬态分析（4学时）-2026更新(1)

## 关联与返回

[戴维宁定理](/my-web/notes/obsidian/29d0477b8a7ab3b3/)、[电容的伏安关系与储能](/my-web/notes/obsidian/4deccae1762f21a1/)、[电感的伏安关系与储能](/my-web/notes/obsidian/19b122467f6cebf2/)、[换路定律与初始值](/my-web/notes/obsidian/50aed8ea4d5c45b2/)、[RC充放电与全响应](/my-web/notes/obsidian/e36be8778d58d649/)、[RL一阶响应](/my-web/notes/obsidian/abd5e632e172ba01/)

[返回电路入口](/my-web/notes/obsidian/115436d99c2c2ddd/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [开关闭合后节点变负：跨接电容的全响应](/my-web/notes/obsidian/15aec57c6df1f613/) · 综合
- [RL断电续流：电感电压为何变负](/my-web/notes/obsidian/74b4cec86c01df5d/) · 进阶
- [恒流源RC换路：负电容电流的含义](/my-web/notes/obsidian/3502c3003a7fe1bb/) · 进阶

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [2-电路的瞬态分析（4学时）-2026更新(1) · 由微分方程求 RC 充电](/my-web/notes/obsidian/edb0e5e8a8388139/#%E9%A2%98%E5%9E%8B02-%E7%94%B1%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E6%B1%82-rc-%E5%85%85%E7%94%B5)
- [2-电路的瞬态分析（4学时）-2026更新(1) · 从新电路求终值和时间常数](/my-web/notes/obsidian/edb0e5e8a8388139/#%E9%A2%98%E5%9E%8B04-%E4%BB%8E%E6%96%B0%E7%94%B5%E8%B7%AF%E6%B1%82%E7%BB%88%E5%80%BC%E5%92%8C%E6%97%B6%E9%97%B4%E5%B8%B8%E6%95%B0)
- [2-电路的瞬态分析（4学时）-2026更新(1) · 电容放电与三支路分流](/my-web/notes/obsidian/edb0e5e8a8388139/#%E9%A2%98%E5%9E%8B05-%E7%94%B5%E5%AE%B9%E6%94%BE%E7%94%B5%E4%B8%8E%E4%B8%89%E6%94%AF%E8%B7%AF%E5%88%86%E6%B5%81)
- [2-电路的瞬态分析（4学时）-2026更新(1) · 恒流源 RC 全响应与负电流](/my-web/notes/obsidian/edb0e5e8a8388139/#%E9%A2%98%E5%9E%8B06-%E6%81%92%E6%B5%81%E6%BA%90-rc-%E5%85%A8%E5%93%8D%E5%BA%94%E4%B8%8E%E8%B4%9F%E7%94%B5%E6%B5%81)
- [2-电路的瞬态分析（4学时）-2026更新(1) · 电源存在的换接与多电流响应](/my-web/notes/obsidian/edb0e5e8a8388139/#%E9%A2%98%E5%9E%8B07-%E7%94%B5%E6%BA%90%E5%AD%98%E5%9C%A8%E7%9A%84%E6%8D%A2%E6%8E%A5%E4%B8%8E%E5%A4%9A%E7%94%B5%E6%B5%81%E5%93%8D%E5%BA%94)
