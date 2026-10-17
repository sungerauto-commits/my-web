---
title: P26 静电能量与能量密度
date: '2026-10-16T17:07:06.990653+00:00'
lastmod: '2026-10-16T17:07:06.990653+00:00'
draft: false
description: ''
tags:
- 大物
- 知识点
note_links:
- notes/obsidian/24e59c001e2459b3/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/4deccae1762f21a1/index.md
- notes/obsidian/5bd546b0c5a7dedc/index.md
- notes/obsidian/663edd45ab10d844/index.md
- notes/obsidian/9ce6a3433eb1249c/index.md
- notes/obsidian/af37467a4edc5504/index.md
- notes/obsidian/d683ec540ee491cb/index.md
- notes/obsidian/e069de2496b8452b/index.md
- notes/obsidian/fb9f374dfa570d82/index.md
obsidian: true
note_course: 大学物理
---

# 静电能量与能量密度

> [!tip] 做题入口
> 集中电容用能量公式，空间分布用场能积分。

## 详细讲解：从理解到列式

### 为什么充电能量含二分之一

几何固定、线性电容从0充到Q时，瞬间电压 $u=q/C$，加入微量电荷的功 $dW=u\,dq$。积分得到

$$
W=\int_0^Q\frac qC,dq=\frac{Q^2}{2C}=\frac12QU=\frac12CU^2.
$$

不能用最终电压 U 乘全部充入电荷，因为充电过程中电压不是一直等于 U。

### 从电容器能量到空间场能

均匀平板中 $C=\varepsilon S/d$、$U=Ed$，代入得 $W=\tfrac12\varepsilon E^2Sd$，所以线性无色散介质的静电能密度为 $w=\tfrac12\mathbf E\cdot\mathbf D$。非均匀场积分 $W=\int w,dV$，不能拿某一点场乘整个体积。

### 机械功题必须计入电源

若系统接电池，场能变化不等于外力功，因为电池能提供或吸收 $\int U\,dQ$。缓慢过程可用 $W_{ext}+W_{battery}=\Delta W_{field}$，其中规定电池向系统供能为正。固定 Q 时电池项为0；固定 U 时要保留它。这是插介质后场能有时增加、仍受到吸入作用的原因。

### 学习顺序

先读：[静电力做功与电势能](/my-web/notes/obsidian/e069de2496b8452b/)、[电容定义与平行板电容](/my-web/notes/obsidian/fb9f374dfa570d82/)。

再用到：[插入介质时固定Q还是固定U](/my-web/notes/obsidian/24e59c001e2459b3/)。

[在学习地图中定位本节](/my-web/notes/?map=P26#notes-graph-heading)

## 概念与适用条件

固定几何、线性电容器：

$$
W=\tfrac12QU=\tfrac12CU^2=\frac{Q^2}{2C}.
$$

线性无耗散介质中，能量密度 $w=\tfrac12\mathbf E\cdot\mathbf D$，各向同性时 $w=\tfrac12\varepsilon E^2$。整个空间场能 $W=\int w\,dV$。对点电荷系的相互作用能另用 $\sum_{i<j}kq_iq_j/r_{ij}$，不计发散的点电荷自能。

## 推导

逐步给电容充电，瞬时电压 $u(q)=q/C$，外力微元功 $dW=u\,dq$，积分 $W=\int_0^Q(q/C)dq=Q^2/(2C)$。平板中再代 $C=\varepsilon S/d$、$U=Ed$，得到 $W=\frac12\varepsilon E^2Sd$。

## 解题步骤

1. 已知电容参数时，按已知 $Q$ 或 $U$ 选择最省事的等价式。
2. 已知场分布时，选体积元并覆盖全部有场区域。
3. 有电源与机械运动时，把电源做功也列入能量平衡。

## 课件原题｜球形电容器场能（例6）

**题目：** 两球半径 $a<b$，均匀介质 $\varepsilon$，电荷 $\pm Q$。

1. 间隙场 $E=Q/(4\pi\varepsilon r^2)$，能量密度 $w=Q^2/(32\pi^2\varepsilon r^4)$。
2. 球壳体积元 $dV=4\pi r^2dr$。
3. $W=\int_a^b Q^2/(8\pi\varepsilon r^2)dr=Q^2(1/a-1/b)/(8\pi\varepsilon)$。
4. 用 $C=4\pi\varepsilon ab/(b-a)$ 代入 $Q^2/(2C)$ 得到相同结果。

## 易错与自检

对已充好电的电容，不能用最终电压直接写充电功 $W=UQ$；充电过程中电压从0增长，平均为最终值一半。电池供能和电容储能也不是同一个量。

## 闭卷回想

已知场而不知道电容的几何公式时，为什么仍能通过 $\int w\,dV$ 求储能？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第19页至第27页。页码是阅读器页码。
- [课堂笔记图15 · IMG20261015233025](/my-web/notes-media/asset-ba547a054f138d19.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233025](/my-web/notes-media/asset-ba547a054f138d19.webp)

> [!example]- 展开查看原题所在课件页
> 6-2-电容和静电能量（简）1

## 关联与返回

[静电力做功与电势能](/my-web/notes/obsidian/e069de2496b8452b/)、[电容定义与平行板电容](/my-web/notes/obsidian/fb9f374dfa570d82/)、[球形电容器与孤立导体球电容](/my-web/notes/obsidian/af37467a4edc5504/)、[同轴圆柱电容器](/my-web/notes/obsidian/5bd546b0c5a7dedc/)、[插入介质时固定Q还是固定U](/my-web/notes/obsidian/24e59c001e2459b3/)、[电容的伏安关系与储能](/my-web/notes/obsidian/4deccae1762f21a1/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [偏心球形空腔：分区对称与系统能量](/my-web/notes/obsidian/d683ec540ee491cb/) · 挑战

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [6-2-电容和静电能量（简）1 · 由充电积分推能量及场能密度](/my-web/notes/obsidian/663edd45ab10d844/#%E9%A2%98%E5%9E%8B05-%E7%94%B1%E5%85%85%E7%94%B5%E7%A7%AF%E5%88%86%E6%8E%A8%E8%83%BD%E9%87%8F%E5%8F%8A%E5%9C%BA%E8%83%BD%E5%AF%86%E5%BA%A6)
- [6-2-电容和静电能量（简）1 · 球形、柱形和平板中的场能积分](/my-web/notes/obsidian/663edd45ab10d844/#%E9%A2%98%E5%9E%8B06-%E7%90%83%E5%BD%A2%E6%9F%B1%E5%BD%A2%E5%92%8C%E5%B9%B3%E6%9D%BF%E4%B8%AD%E7%9A%84%E5%9C%BA%E8%83%BD%E7%A7%AF%E5%88%86)
- [6-2-电容和静电能量（简）1 · 多个点电荷的相互作用能](/my-web/notes/obsidian/663edd45ab10d844/#%E9%A2%98%E5%9E%8B08-%E5%A4%9A%E4%B8%AA%E7%82%B9%E7%94%B5%E8%8D%B7%E7%9A%84%E7%9B%B8%E4%BA%92%E4%BD%9C%E7%94%A8%E8%83%BD)
- [第五章习题课（第7版）1 · 同心接地壳与偏心空腔能量](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B12-%E5%90%8C%E5%BF%83%E6%8E%A5%E5%9C%B0%E5%A3%B3%E4%B8%8E%E5%81%8F%E5%BF%83%E7%A9%BA%E8%85%94%E8%83%BD%E9%87%8F)
- [第五章习题课（第7版）1 · 多个点电荷系统的相互作用能](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B14-%E5%A4%9A%E4%B8%AA%E7%82%B9%E7%94%B5%E8%8D%B7%E7%B3%BB%E7%BB%9F%E7%9A%84%E7%9B%B8%E4%BA%92%E4%BD%9C%E7%94%A8%E8%83%BD)
