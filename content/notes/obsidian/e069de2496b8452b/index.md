---
title: P15 静电力做功与电势能
date: '2026-10-16T17:07:06.964904+00:00'
lastmod: '2026-10-16T17:07:06.964904+00:00'
draft: false
description: ''
tags:
- 大物
- 知识点
note_links:
- notes/obsidian/09dc45185b27d0e3/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/57de3eff4a09bd6f/index.md
- notes/obsidian/5db3f92103115401/index.md
- notes/obsidian/64eecd8aa05cc58a/index.md
- notes/obsidian/653e59c64053d33c/index.md
- notes/obsidian/663edd45ab10d844/index.md
- notes/obsidian/7ae1f1f4ff41bd7b/index.md
- notes/obsidian/9ce6a3433eb1249c/index.md
obsidian: true
note_course: 大学物理
---

# 静电力做功与电势能

> [!tip] 做题入口
> 先看初末位置电势，路径再曲折也不影响静电功。

## 详细讲解：从理解到列式

### 先区分“场力做功”和“外力做功”

电荷从 A 移到 B，静电力做功 $W_E=q(V_A-V_B)$；势能变化 $\Delta U=q(V_B-V_A)=-W_E$。若缓慢移动且动能不变，外力与电场力平衡，$W_{ext}=\Delta U$。不是任何移动过程都可直接说外力功等于势能差。

### 正负电荷如何检查符号

正电荷沿场方向移动，电势下降，静电力做正功，势能降低；负电荷沿场方向移动时受力反向，静电力做负功，势能反而增加。公式中的 $q$ 带符号，不能统一替成 $|q|$ 后再凭印象补正负。

### 系统能量要防止重复计算

多个点电荷的相互作用能可写 $U=\sum_{i<j}k_eq_iq_j/r_{ij}$，每一对只算一次。若用每个电荷位置处由其他电荷产生的势 $V_{others,i}$，则 $U=\tfrac12\sum_iq_iV_{others,i}$；一半用于消除成对重复。点电荷自身的无限自能不在这个相互作用能公式中。连续导体的能量问题则可用导体总电荷与导体势，或直接积分场能。

### 学习顺序

先读：[电势与电势叠加](/my-web/notes/obsidian/09dc45185b27d0e3/)。

再用到：[静电能量与能量密度](/my-web/notes/obsidian/7ae1f1f4ff41bd7b/)。

[在学习地图中定位本节](/my-web/notes/?map=P15#notes-graph-heading)

## 概念与适用条件

场源保持不变、静电场中，电场力对电荷 $q$ 从 $A$ 到 $B$ 做功

$$
W_{AB}=q(V_A-V_B)=-\Delta E_p,\quad E_p=qV.
$$

若还要计外力功和动能，使用动能定理 $\Delta K=W_{\mathrm{电}}+W_{\mathrm{外}}$。只有准静态或初末动能相同且无其他耗散时，外力功才等于电势能增加。

## 推导

$W_{AB}=\int_A^Bq\mathbf E\cdot d\mathbf l$，由电势差定义得到 $q(V_A-V_B)$。在闭合路径上 $W=0$，是静电场环路定理的表现。

## 解题步骤

1. 判断场源是否固定，排除运动电荷导致的整体分布改变。
2. 单独求 $V_A,V_B$，注意同一零点。
3. 代入带符号的电荷量 $q$。
4. 需要速度时再与动能变化连接。

## 补充示例｜负电荷从高势到低势

**题目：** $q=-2\mathrm{nC}$ 从 $V_A=100\mathrm V$ 到 $V_B=20\mathrm V$。

1. $W=q(100-20)=-160\mathrm{nJ}$，电场力做负功。
2. $\Delta E_p=-W=+160\mathrm{nJ}$，电势能增加。
3. 若缓慢搬运，外力需要做 $+160\mathrm{nJ}$ 的功。
4. 路径无关，但若有摩擦，外力功还需计入耗散，不能仅等于势能变化。

## 易错与自检

正电荷趋向低电势不等于负电荷也如此。$W=q(V_A-V_B)$ 的顺序不要写反。

## 闭卷回想

负电荷在电势下降方向运动时，电势能增加还是减少？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第44页至第45页。页码是阅读器页码。
- [课堂笔记图02 · IMG20261015232204](/my-web/notes-media/asset-337e83723a4dee33.webp)。
- [课堂笔记图03 · IMG20261015232214](/my-web/notes-media/asset-c980e9e2dbd0480f.webp)。
- [课堂笔记图07 · IMG20261015232244](/my-web/notes-media/asset-dc0064a7bf3f57b1.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232204](/my-web/notes-media/asset-337e83723a4dee33.webp)

## 关联与返回

[库仑定律与电场强度](/my-web/notes/obsidian/5db3f92103115401/)、[电势与电势叠加](/my-web/notes/obsidian/09dc45185b27d0e3/)、[电偶极子与均匀场中的力矩](/my-web/notes/obsidian/64eecd8aa05cc58a/)、[静电能量与能量密度](/my-web/notes/obsidian/7ae1f1f4ff41bd7b/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [半球面电势差：镜像补成完整球壳](/my-web/notes/obsidian/57de3eff4a09bd6f/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [5-3-电势(简)1 · 偶极子远场电势与搬移电荷做功](/my-web/notes/obsidian/653e59c64053d33c/#%E9%A2%98%E5%9E%8B05-%E5%81%B6%E6%9E%81%E5%AD%90%E8%BF%9C%E5%9C%BA%E7%94%B5%E5%8A%BF%E4%B8%8E%E6%90%AC%E7%A7%BB%E7%94%B5%E8%8D%B7%E5%81%9A%E5%8A%9F)
- [6-2-电容和静电能量（简）1 · 多个点电荷的相互作用能](/my-web/notes/obsidian/663edd45ab10d844/#%E9%A2%98%E5%9E%8B08-%E5%A4%9A%E4%B8%AA%E7%82%B9%E7%94%B5%E8%8D%B7%E7%9A%84%E7%9B%B8%E4%BA%92%E4%BD%9C%E7%94%A8%E8%83%BD)
- [第五章习题课（第7版）1 · 两点间移动电荷的场力功](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B08-%E4%B8%A4%E7%82%B9%E9%97%B4%E7%A7%BB%E5%8A%A8%E7%94%B5%E8%8D%B7%E7%9A%84%E5%9C%BA%E5%8A%9B%E5%8A%9F)
- [第五章习题课（第7版）1 · 多个点电荷系统的相互作用能](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B14-%E5%A4%9A%E4%B8%AA%E7%82%B9%E7%94%B5%E8%8D%B7%E7%B3%BB%E7%BB%9F%E7%9A%84%E7%9B%B8%E4%BA%92%E4%BD%9C%E7%94%A8%E8%83%BD)
