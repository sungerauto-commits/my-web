---
title: D16 RC充放电与全响应
date: '2026-10-16T17:07:06.903815+00:00'
lastmod: '2026-10-16T17:07:06.903815+00:00'
draft: false
description: ''
tags:
- 电路
- 知识点
note_links:
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/15aec57c6df1f613/index.md
- notes/obsidian/3502c3003a7fe1bb/index.md
- notes/obsidian/4deccae1762f21a1/index.md
- notes/obsidian/50aed8ea4d5c45b2/index.md
- notes/obsidian/90cba90d8e907b67/index.md
- notes/obsidian/edb0e5e8a8388139/index.md
obsidian: true
note_course: 电路
---

# RC充放电与全响应

> [!tip] 做题入口
> 电容从初始电压向新终值靠近，方向由差值决定。

## 详细讲解：从理解到列式

### 图解：一阶响应

![一阶响应](/my-web/notes-media/asset-16801da95c3297ab.svg)

从图中读“初值、终值、剩余差值”，而不是背一个固定充电百分比。 图为本库补充示意，不替代原题中的几何与方向。

### 对电容端口作戴维宁等效

换路后把电容移开，剩余网络等效为 $U_{th}$ 串 $R_{th}$。沿充电方向列 $U_{th}=R_{th}i_C+u_C$，代入 $i_C=Cdu_C/dt$：

$$
R_{th}C\frac{du_C}{dt}+u_C=U_{th}.
$$

所以终值为 $U_{th}$，时间常数为 $R_{th}C$，并不要求初始电容未充电。

### 电流也要由导数得到

若 $u_C(0^+)=U_0$，则

$$
u_C=U_{th}+(U_0-U_{th})e^{-t/\tau},\quad i_C=\frac{U_{th}-U_0}{R_{th}}e^{-t/\tau}.
$$

若 $U_0>U_{th}$，电流为负，电容向网络释放能量。$U_0=0$ 只是零状态充电的特例；$U_{th}=0$ 才是纯放电特例。

一倍时间常数后，离终值的差只剩 $e^{-1}\approx36.8\%$，并非所有情况下“电压已到63.2%”。例如从 12 V 放到 0 V，电压剩 36.8%；从 12 V 变到 18 V，完成的是电压变化量的63.2%。求某阈值时先写 $(u_C-U_{th})/(U_0-U_{th})=e^{-t/\tau}$，再取对数，检查比值必须为正。

### 学习顺序

先读：[电容的伏安关系与储能](/my-web/notes/obsidian/4deccae1762f21a1/)、[一阶电路三要素法](/my-web/notes/obsidian/90cba90d8e907b67/)。

用于练习：[ED02 开关闭合后节点变负：跨接电容的全响应](/my-web/notes/obsidian/15aec57c6df1f613/)、[ED08 恒流源RC换路：负电容电流的含义](/my-web/notes/obsidian/3502c3003a7fe1bb/)。

[在学习地图中定位本节](/my-web/notes/?map=D16#notes-graph-heading)

## 概念与适用条件

换路后电容通过等效电阻 $R$ 接到恒定等效电压 $U_S$：

$$
u_C=U_S+(U_0-U_S)e^{-t/(RC)},\quad i_C=\frac{U_S-U_0}{R}e^{-t/(RC)}.
$$

这里 $i_C$ 流入电容电压正端。零输入响应是 $U_0e^{-t/\tau}$；零状态响应是 $U_S(1-e^{-t/\tau})$；全响应为二者相加。

## 推导

KVL：$Ri_C+u_C=U_S$，代入 $i_C=Cdu_C/dt$，得到 $RC\,du_C/dt+u_C=U_S$。用初始条件求解得上式。$t=\tau$ 时，偏离终值的部分剩 $e^{-1}\approx36.8\%$，不是总电压一定剩36.8%。

## 解题步骤

1. 求 $U_0,U_S,RC$。
2. 写 $u_C(t)$，再按指定参考求 $i_C(t)$。
3. 求到达目标 $U_*$ 的时间：$t=-\tau\ln[(U_*-U_S)/(U_0-U_S)]$。
4. 检查括号内是否在 $(0,1]$，否则可能没有非负时间解。

## 课件原题｜例2.4.1（修正符号）

**题目：** $U_0=15\mathrm V,U_S=10\mathrm V,R=10\mathrm{k}\Omega,C=20\mu\mathrm F$，求初始电流和电压降到12V的时间。

1. $\tau=10^4\times20\times10^{-6}=0.2\mathrm s$。
2. $u_C(t)=10+5e^{-5t}\mathrm V$。
3. 按课件图中向下流入电容正端的箭头，$i_C=Cdu_C/dt=-0.5e^{-5t}\mathrm{mA}$，故 $i_C(0^+)=-0.5\mathrm{mA}$。
4. $12=10+5e^{-5t}$，得 $e^{-5t}=0.4$，$t=-\ln0.4/5\approx0.1833\mathrm s$。

> [!warning] 原资料勘误
> 瞬态课件 PDF 第52页先写 $(U_S-U_0)/R$，随后代数计算写成 $(15-10)/10=+0.5\mathrm{mA}$，与图中参考方向不一致。负号表示实际向外放电；若改取放电方向为正，电流大小才写 $+0.5\mathrm{mA}$。本笔记按原图箭头统一修正。

## 易错与自检

不要只凭“充电/放电”猜正负，尤其有负初始电压时。求电流后再积分，应恢复电压的变化。

## 闭卷回想

若 $U_0=2\mathrm V,U_S=8\mathrm V$，经过一个时间常数，电容电压是多少？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第36页至第53页。页码是阅读器页码。
- [课堂笔记图11 · IMG20261015231933](/my-web/notes-media/asset-987d9c8fda1f8990.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015231933](/my-web/notes-media/asset-987d9c8fda1f8990.webp)

> [!example]- 展开查看原题所在课件页
> 2-电路的瞬态分析（4学时）-2026更新(1)

## 关联与返回

[电容的伏安关系与储能](/my-web/notes/obsidian/4deccae1762f21a1/)、[换路定律与初始值](/my-web/notes/obsidian/50aed8ea4d5c45b2/)、[一阶电路三要素法](/my-web/notes/obsidian/90cba90d8e907b67/)

[返回电路入口](/my-web/notes/obsidian/115436d99c2c2ddd/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [开关闭合后节点变负：跨接电容的全响应](/my-web/notes/obsidian/15aec57c6df1f613/) · 综合
- [恒流源RC换路：负电容电流的含义](/my-web/notes/obsidian/3502c3003a7fe1bb/) · 进阶

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [2-电路的瞬态分析（4学时）-2026更新(1) · 由微分方程求 RC 充电](/my-web/notes/obsidian/edb0e5e8a8388139/#%E9%A2%98%E5%9E%8B02-%E7%94%B1%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E6%B1%82-rc-%E5%85%85%E7%94%B5)
- [2-电路的瞬态分析（4学时）-2026更新(1) · 有初始电压的全响应与阈值时间](/my-web/notes/obsidian/edb0e5e8a8388139/#%E9%A2%98%E5%9E%8B03-%E6%9C%89%E5%88%9D%E5%A7%8B%E7%94%B5%E5%8E%8B%E7%9A%84%E5%85%A8%E5%93%8D%E5%BA%94%E4%B8%8E%E9%98%88%E5%80%BC%E6%97%B6%E9%97%B4)
- [2-电路的瞬态分析（4学时）-2026更新(1) · 电容放电与三支路分流](/my-web/notes/obsidian/edb0e5e8a8388139/#%E9%A2%98%E5%9E%8B05-%E7%94%B5%E5%AE%B9%E6%94%BE%E7%94%B5%E4%B8%8E%E4%B8%89%E6%94%AF%E8%B7%AF%E5%88%86%E6%B5%81)
- [2-电路的瞬态分析（4学时）-2026更新(1) · 恒流源 RC 全响应与负电流](/my-web/notes/obsidian/edb0e5e8a8388139/#%E9%A2%98%E5%9E%8B06-%E6%81%92%E6%B5%81%E6%BA%90-rc-%E5%85%A8%E5%93%8D%E5%BA%94%E4%B8%8E%E8%B4%9F%E7%94%B5%E6%B5%81)
