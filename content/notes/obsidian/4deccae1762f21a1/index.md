---
title: D12 电容的伏安关系与储能
date: '2026-10-16T17:07:06.898811+00:00'
lastmod: '2026-10-16T17:07:06.898811+00:00'
draft: false
description: ''
tags:
- 电路
- 知识点
note_links:
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/15aec57c6df1f613/index.md
- notes/obsidian/3502c3003a7fe1bb/index.md
- notes/obsidian/3ab140eab2134944/index.md
- notes/obsidian/44b18b6111927f4a/index.md
- notes/obsidian/48f4acf6a44a144b/index.md
- notes/obsidian/50aed8ea4d5c45b2/index.md
- notes/obsidian/7ae1f1f4ff41bd7b/index.md
- notes/obsidian/90cba90d8e907b67/index.md
- notes/obsidian/e36be8778d58d649/index.md
- notes/obsidian/edb0e5e8a8388139/index.md
- notes/obsidian/fb9f374dfa570d82/index.md
obsidian: true
note_course: 电路
---

# 电容的伏安关系与储能

> [!tip] 做题入口
> 电容电流由电压变化率决定，直流稳态开路。

## 详细讲解：从理解到列式

### 图解：换路三张图

![换路三张图](/my-web/notes-media/asset-fa4c50b66e1d55c4.svg)

对照三时刻画图，区分状态连续和其他支路量突变。 图为本库补充示意，不替代原题中的几何与方向。

### 从电荷定义一步步到电流

对线性、固定电容，定义正极板电荷 $q=Cu$。若电流参考流入这个正端，就有 $i=dq/dt$，从而

$$
i=C\frac{du}{dt},\qquad u(t)=u(t_0)+\frac1C\int_{t_0}^t i(s)\,ds.
$$

积分式说明：电压保存了电流的历史。只知道某时刻电流为零，并不能推出电压为零；它只说明该时刻电压变化率为零。

### 为什么电压不能随便跳变

对换路瞬间积分，$C[u(0^+)-u(0^-)]=\int_{0^-}^{0^+}i(t)dt$。电流若有限、没有冲激，右侧在零时宽内为零，所以电压连续。若理想模型强制电容电压突跳，就需要冲激电流，超出了普通换路题的有限电流假设。

### 储能不是凭记忆多加一个一半

给电容从 0 充到 $U$ 时，加入微小电荷 $dq$ 所需能量为 $dW=u\,dq$。代入 $u=q/C$，

$$
W=\int_0^{CU}\frac qC\,dq=\frac12CU^2.
$$

电流与电压关联时，$p=ui=d(Cu^2/2)/dt$。$p<0$ 表示放出能量。直流稳态下电容开路，是因为 $du/dt=0$，不是因为它已经没有电荷。

### 学习顺序

先读：[参考方向与关联参考方向](/my-web/notes/obsidian/44b18b6111927f4a/)、[功率与功率平衡](/my-web/notes/obsidian/48f4acf6a44a144b/)。

再用到：[换路定律与初始值](/my-web/notes/obsidian/50aed8ea4d5c45b2/)、[RC充放电与全响应](/my-web/notes/obsidian/e36be8778d58d649/)、[RLC元件复阻抗](/my-web/notes/obsidian/3ab140eab2134944/)。

[在学习地图中定位本节](/my-web/notes/?map=D12#notes-graph-heading)

## 概念与适用条件

线性、定值电容关联参考下，$q=Cu$，$i=C\,du/dt$。这里 $q$ 是电压正端极板的带符号电荷。直流稳态 $du/dt=0$，所以电容电流为零；电压仍可能非零。

## 推导

由 $i=dq/dt$ 得 $i=Cdu/dt$。吸收功率 $p=ui=Cu\,du/dt$，从零电压充到 $u$ 的储能为

$$
W_C=\int_0^u Cv\,dv=\tfrac12Cu^2.
$$

储能增减由 $u\,du/dt$ 的符号决定，不能只看 $du/dt$。

## 解题步骤

1. 先确认电流是否进入电压正端；非关联时加负号。
2. 已知电压函数，求导得到电流。
3. 已知电流时积分：$u(t)=u(t_0)+C^{-1}\int_{t_0}^t i(\xi)d\xi$，不能漏初值。

## 补充示例｜由电压求电流

**题目：** $C=2\mu\mathrm F$，$u(t)=5(1-e^{-1000t})\mathrm V$，关联参考。

1. $du/dt=5000e^{-1000t}\mathrm{V/s}$。
2. $i(t)=2\times10^{-6}\times5000e^{-1000t}=10e^{-1000t}\mathrm{mA}$。
3. 稳态 $u=5\mathrm V$，$i=0$，储能 $W=\frac12\times2\times10^{-6}\times25=25\mu\mathrm J$。

## 易错与自检

“电容隔直流”指稳态。换路瞬间若有初始电压，不能直接把电容短路。$\mu\mathrm F=10^{-6}\mathrm F$。

## 闭卷回想

一个带5V初始电压的理想电容在断开外电路后，其电流和电压各是多少？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第14页至第18页。页码是阅读器页码。
- [课堂笔记图09 · IMG20261015231919](/my-web/notes-media/asset-0c4bcf1c5126d98a.webp)。
- [课堂笔记图10 · IMG20261015231929](/my-web/notes-media/asset-ebf2353729b16f40.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015231919](/my-web/notes-media/asset-0c4bcf1c5126d98a.webp)

## 关联与返回

[换路定律与初始值](/my-web/notes/obsidian/50aed8ea4d5c45b2/)、[一阶电路三要素法](/my-web/notes/obsidian/90cba90d8e907b67/)、[RC充放电与全响应](/my-web/notes/obsidian/e36be8778d58d649/)、[电容定义与平行板电容](/my-web/notes/obsidian/fb9f374dfa570d82/)、[静电能量与能量密度](/my-web/notes/obsidian/7ae1f1f4ff41bd7b/)

[返回电路入口](/my-web/notes/obsidian/115436d99c2c2ddd/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [开关闭合后节点变负：跨接电容的全响应](/my-web/notes/obsidian/15aec57c6df1f613/) · 综合
- [恒流源RC换路：负电容电流的含义](/my-web/notes/obsidian/3502c3003a7fe1bb/) · 进阶

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [2-电路的瞬态分析（4学时）-2026更新(1) · 换路瞬间与最终稳态的全部支路量](/my-web/notes/obsidian/edb0e5e8a8388139/#%E9%A2%98%E5%9E%8B01-%E6%8D%A2%E8%B7%AF%E7%9E%AC%E9%97%B4%E4%B8%8E%E6%9C%80%E7%BB%88%E7%A8%B3%E6%80%81%E7%9A%84%E5%85%A8%E9%83%A8%E6%94%AF%E8%B7%AF%E9%87%8F)
- [2-电路的瞬态分析（4学时）-2026更新(1) · 恒流源 RC 全响应与负电流](/my-web/notes/obsidian/edb0e5e8a8388139/#%E9%A2%98%E5%9E%8B06-%E6%81%92%E6%B5%81%E6%BA%90-rc-%E5%85%A8%E5%93%8D%E5%BA%94%E4%B8%8E%E8%B4%9F%E7%94%B5%E6%B5%81)
