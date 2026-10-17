---
title: P27 插入介质时固定Q还是固定U
date: '2026-10-16T17:07:06.991655+00:00'
lastmod: '2026-10-16T17:07:06.991655+00:00'
draft: false
description: ''
tags:
- 大物
- 知识点
note_links:
- notes/obsidian/3dfa67a5b7eeec93/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/4deccae1762f21a1/index.md
- notes/obsidian/663edd45ab10d844/index.md
- notes/obsidian/7ae1f1f4ff41bd7b/index.md
- notes/obsidian/7dd1c65aed21f95d/index.md
- notes/obsidian/9038a67e0032fe4c/index.md
- notes/obsidian/a7b196bda29841f1/index.md
- notes/obsidian/ea2bc1f82c5e399a/index.md
- notes/obsidian/fb9f374dfa570d82/index.md
obsidian: true
note_course: 大学物理
---

# 插入介质时固定Q还是固定U

> [!tip] 做题入口
> 第一步先看电源是否仍接着，再判断场、电荷和能量变化。

## 详细讲解：从理解到列式

### 图解：介质串并联

![介质串并联](/my-web/notes-media/asset-a20b596e2470512a.svg)

对照两种划分，分别确定是各层电压相加还是各区电荷相加。 图为本库补充示意，不替代原题中的几何与方向。

### 第一句就标出实验约束

断开电源且忽略漏电时 Q 固定；理想电源保持连接时 U 固定。几何或介质改变导致 C 变化，再用 $Q=CU$ 推另一个量。不能同时保持 Q 和 U 不变而又让 C 改变。

### 同样插入介质，两种条件的能量相反

若 C 从 $C_0$ 增加到 $C_1$，固定 Q 时 $U_1=Q/C_1$ 下降，场能 $Q^2/(2C_1)$ 下降；固定 U 时 $Q_1=C_1U$ 增加，场能 $C_1U^2/2$ 上升。后者能量来自电池，并不意味着介质一定受到排斥。

固定 U、缓慢插入时，电池供能 $W_b=U\Delta Q=U^2\Delta C$，场能增加 $\Delta W=U^2\Delta C/2$，余下一半可转为机械功。因此若只用固定 U 的场能增加来判断力的方向，会漏掉电池。

### 解题顺序

先依据图中开关判断连接状态，再由介质串并联结构求 C，接着求 Q、U、分区 E，最后算能量。若在插入过程中断电，应分阶段处理：断开瞬间的 Q 成为后续固定值，不能把全程都归到同一种条件。

### 学习顺序

先读：[电容串并联与混合介质](/my-web/notes/obsidian/ea2bc1f82c5e399a/)、[静电能量与能量密度](/my-web/notes/obsidian/7ae1f1f4ff41bd7b/)。

用于练习：[EP06 固定电压插入介质板与导体板](/my-web/notes/obsidian/7dd1c65aed21f95d/)。

[在学习地图中定位本节](/my-web/notes/?map=P27#notes-graph-heading)

## 概念与适用条件

平板几何固定、线性均匀介质完全填充后，$C'=\varepsilon_rC_0$。电容已与电源断开且无漏电：$Q$ 固定。仍接恒压源：$U$ 固定。以下忽略边缘，介质无耗散，不涉及击穿。

## 推导

固定 $Q$：$U'=Q/C'=U_0/\varepsilon_r$，$W'=Q^2/(2C')=W_0/\varepsilon_r$。

固定 $U$：$Q'=C'U=\varepsilon_rQ_0$，$W'=\tfrac12C'U^2=\varepsilon_rW_0$。固定间距时 $E=U/d$，因此恒压完全填充后 $E$ 不变；不能一律说场缩小 $\varepsilon_r$ 倍。

## 解题步骤

1. 看题中“充电后断开”“保持连接”等字眼。
2. 几何和介质先求新电容。
3. 固定 $Q$ 用 $U=Q/C$，固定 $U$ 用 $Q=CU$。
4. 求储能后，若问机械功，再计入电池功 $W_b=U\Delta Q$。

## 补充示例｜同一电容的两种操作

**题目：** $C_0=100\mathrm{pF}$，初始 $U_0=10\mathrm V$，完整插入 $\varepsilon_r=4$ 的介质。

1. 初始 $Q_0=1\mathrm{nC}$，$W_0=5\mathrm{nJ}$，新电容400pF。
2. 断开电源：$Q'=1\mathrm{nC}$，$U'=2.5\mathrm V$，$W'=1.25\mathrm{nJ}$。
3. 保持恒压：$U'=10\mathrm V$，$Q'=4\mathrm{nC}$，$W'=20\mathrm{nJ}$。
4. 恒压过程中电池提供 $U\Delta Q=10\times3\mathrm{nC}=30\mathrm{nJ}$，储能只增加15nJ；若准静态无耗散，其余15nJ可转为对外机械功。

## 易错与自检

部分插入厚度为 $\delta$ 的介质是串联分层：$C=\varepsilon_0S/(d-\delta+\delta/\varepsilon_r)$。插入不接触极板的导体板则其内部 $E=0$，等效间距为 $d-\delta$；不是把导体当一般有限介电常数。

## 闭卷回想

恒压插入介质时，储能增加而介质仍被吸入，额外能量来自哪里？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第29页至第31页。页码是阅读器页码。
- [课堂笔记图12 · IMG20261015233003](/my-web/notes-media/asset-cb2afb5e4adcc6ac.webp)。
- [课堂笔记图15 · IMG20261015233025](/my-web/notes-media/asset-ba547a054f138d19.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233003](/my-web/notes-media/asset-cb2afb5e4adcc6ac.webp)

## 关联与返回

[电介质极化与极化强度](/my-web/notes/obsidian/9038a67e0032fe4c/)、[电位移D与介质高斯定理](/my-web/notes/obsidian/a7b196bda29841f1/)、[电容定义与平行板电容](/my-web/notes/obsidian/fb9f374dfa570d82/)、[电容串并联与混合介质](/my-web/notes/obsidian/ea2bc1f82c5e399a/)、[静电能量与能量密度](/my-web/notes/obsidian/7ae1f1f4ff41bd7b/)、[电容的伏安关系与储能](/my-web/notes/obsidian/4deccae1762f21a1/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [固定电压插入介质板与导体板](/my-web/notes/obsidian/7dd1c65aed21f95d/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [6-1-静电场中的导体和电介质(简) 1 · 固定自由电荷插入均匀电介质](/my-web/notes/obsidian/3dfa67a5b7eeec93/#%E9%A2%98%E5%9E%8B04-%E5%9B%BA%E5%AE%9A%E8%87%AA%E7%94%B1%E7%94%B5%E8%8D%B7%E6%8F%92%E5%85%A5%E5%9D%87%E5%8C%80%E7%94%B5%E4%BB%8B%E8%B4%A8)
- [6-2-电容和静电能量（简）1 · 接电源时插入介质板与金属板](/my-web/notes/obsidian/663edd45ab10d844/#%E9%A2%98%E5%9E%8B07-%E6%8E%A5%E7%94%B5%E6%BA%90%E6%97%B6%E6%8F%92%E5%85%A5%E4%BB%8B%E8%B4%A8%E6%9D%BF%E4%B8%8E%E9%87%91%E5%B1%9E%E6%9D%BF)
