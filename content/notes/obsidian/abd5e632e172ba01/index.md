---
title: D17 RL一阶响应
date: '2026-10-16T17:07:06.905320+00:00'
lastmod: '2026-10-16T17:07:06.905320+00:00'
draft: false
description: ''
tags:
- 电路
- 知识点
note_links:
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/19b122467f6cebf2/index.md
- notes/obsidian/50aed8ea4d5c45b2/index.md
- notes/obsidian/74b4cec86c01df5d/index.md
- notes/obsidian/90cba90d8e907b67/index.md
- notes/obsidian/edb0e5e8a8388139/index.md
obsidian: true
note_course: 电路
---

# RL一阶响应

> [!tip] 做题入口
> 电感电流从原初值逐渐走向新的直流值。

## 详细讲解：从理解到列式

### 图解：一阶响应

![一阶响应](/my-web/notes-media/asset-16801da95c3297ab.svg)

从图中读“初值、终值、剩余差值”，而不是背一个固定充电百分比。 图为本库补充示意，不替代原题中的几何与方向。

### 由端口等效写出 RL 方程

换路后线性网络等效为恒压源 $U_{th}$ 与 $R_{eq}$ 串联，电感电流取关联方向：

$$
L\frac{di_L}{dt}+R_{eq}i_L=U_{th}.
$$

终值 $I_\infty=U_{th}/R_{eq}$，时间常数 $\tau=L/R_{eq}$，因此

$$
i_L=I_\infty+(I_0-I_\infty)e^{-t/\tau}.
$$

代入伏安关系得 $u_L=R_{eq}(I_\infty-I_0)e^{-t/\tau}$。对纯放电 $I_\infty=0$，电感电压相对于原关联极性为负。

### 续流电阻为什么可能与换路前不同

断开电源后，原来并联的两只电阻可能通过电感组成串联放电回路。计算 $R_{eq}$ 必须从电感的两个端子看换路后的网络，不能把原电路总电阻照抄。电阻越大，纯 RL 的电流衰减越快，因为 $L/R$ 越小；这与 RC 的 $RC$ 越大越慢不要混淆。

核验方法：$i_L(0^+)=I_0$、$i_L(\infty)=I_\infty$，再检查 $Ldi_L/dt+R_{eq}i_L=U_{th}$。初值连续并不要求 $u_L(0^+)=u_L(0^-)$。

### 学习顺序

先读：[电感的伏安关系与储能](/my-web/notes/obsidian/19b122467f6cebf2/)、[一阶电路三要素法](/my-web/notes/obsidian/90cba90d8e907b67/)。

用于练习：[ED06 RL断电续流：电感电压为何变负](/my-web/notes/obsidian/74b4cec86c01df5d/)。

[在学习地图中定位本节](/my-web/notes/?map=D17#notes-graph-heading)

## 概念与适用条件

串联等效 RL 电路在恒定电压 $U_S$ 激励下：

$$
i_L(t)=I_\infty+(I_0-I_\infty)e^{-t/\tau},\quad I_\infty=U_S/R,\quad\tau=L/R.
$$

有复杂电阻网络时，用电感端口看到的等效电阻；不一定是图中某一个标号电阻。

## 推导

KVL 得 $Ldi/dt+Ri=U_S$。稳态特解 $I_\infty=U_S/R$，自然响应 $Ae^{-Rt/L}$，初值确定 $A=I_0-I_\infty$。电感关联电压 $u_L=Ldi/dt=R(I_\infty-I_0)e^{-t/\tau}$。

## 解题步骤

1. 从换路前稳态求 $I_0$，电感电流连续。
2. 从换路后直流电路求 $I_\infty$。
3. 独立源置零，从电感两端求 $R_{\mathrm{eq}}$。
4. 写电流，再按关联关系求电压。

## 补充示例｜RL接通

**题目：** 零初始电流，12V经6Ω接0.3H理想电感。

1. $I_0=0$、$I_\infty=12/6=2\mathrm A$。
2. $\tau=0.3/6=0.05\mathrm s$。
3. $i_L=2(1-e^{-20t})\mathrm A$，$u_L=12e^{-20t}\mathrm V$。
4. $t=0.05\mathrm s$ 时 $i_L\approx1.264\mathrm A$；起始电流为0，起始电感电压为12V。

## 易错与自检

RC 的时间常数是 $RC$，RL 是 $L/R$。电感短路仅指直流稳态；接通瞬间不能跳过初始电流条件。

## 闭卷回想

在 $L$ 不变时增大串联电阻，时间常数和最终电流怎样变化？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第54页至第61页。页码是阅读器页码。
- [课堂笔记图10 · IMG20261015231929](/my-web/notes-media/asset-ebf2353729b16f40.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015231929](/my-web/notes-media/asset-ebf2353729b16f40.webp)

## 关联与返回

[电感的伏安关系与储能](/my-web/notes/obsidian/19b122467f6cebf2/)、[换路定律与初始值](/my-web/notes/obsidian/50aed8ea4d5c45b2/)、[一阶电路三要素法](/my-web/notes/obsidian/90cba90d8e907b67/)

[返回电路入口](/my-web/notes/obsidian/115436d99c2c2ddd/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [RL断电续流：电感电压为何变负](/my-web/notes/obsidian/74b4cec86c01df5d/) · 进阶

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [2-电路的瞬态分析（4学时）-2026更新(1) · 从新电路求终值和时间常数](/my-web/notes/obsidian/edb0e5e8a8388139/#%E9%A2%98%E5%9E%8B04-%E4%BB%8E%E6%96%B0%E7%94%B5%E8%B7%AF%E6%B1%82%E7%BB%88%E5%80%BC%E5%92%8C%E6%97%B6%E9%97%B4%E5%B8%B8%E6%95%B0)
