---
title: P13 电势与电势叠加
date: '2026-10-16T17:07:06.955378+00:00'
lastmod: '2026-10-16T17:07:06.955378+00:00'
draft: false
description: ''
tags:
- 大物
- 知识点
note_links:
- notes/obsidian/10da961e673c07ae/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/57de3eff4a09bd6f/index.md
- notes/obsidian/581bfd027b33ab9b/index.md
- notes/obsidian/58d990316008085d/index.md
- notes/obsidian/5db3f92103115401/index.md
- notes/obsidian/61c5fb0adfb7b15d/index.md
- notes/obsidian/63721ac0914763f7/index.md
- notes/obsidian/64eecd8aa05cc58a/index.md
- notes/obsidian/653e59c64053d33c/index.md
- notes/obsidian/6ae09d06bbb8fc9a/index.md
- notes/obsidian/8f9705eb2776bc64/index.md
- notes/obsidian/9ce6a3433eb1249c/index.md
- notes/obsidian/bf68bff3575ef0c4/index.md
- notes/obsidian/cfa586bb35f32867/index.md
- notes/obsidian/d683ec540ee491cb/index.md
- notes/obsidian/dc29171c37873863/index.md
- notes/obsidian/e069de2496b8452b/index.md
- notes/obsidian/fb9f374dfa570d82/index.md
obsidian: true
note_course: 大学物理
---

# 电势与电势叠加

> [!tip] 做题入口
> 电势是标量；求场难但距离简单时，可先求电势。

## 详细讲解：从理解到列式

### 图解：球体场势

![球体场势](/my-web/notes-media/asset-2146e49460bdf473.svg)

对比图的斜率：−dV/dr=E，不能由E=0推V=0。 图为本库补充示意，不替代原题中的几何与方向。

### 电势先选参考，再比较差值

在静电场中，$V_B-V_A=-\int_A^B\mathbf E\cdot d\mathbf l$。势能为 $U=qV$，因此 $V$ 是单位电荷的势能。改变零势参考只给所有电势加同一常数，不改变场、电势差和做功。

### 为什么势的叠加比场简单

点电荷以无穷远为零时 $V=k_eq/r$，连续分布 $V=k_e\int dq/r$。电势是标量，正负电荷靠 $dq$ 的符号区别，不再投影方向；多个电荷即使位于不同方位，只需逐项代数相加。场的方向信息要通过势的空间变化率找回。

例如两等量异号电荷的中垂面上，到两电荷距离相等，电势可处处为零，但场不必为零，因为离开这个面时电势在改变。“沿某个面恒势”只说明切向场为零，不说明法向场也为零。

局部场为零也不决定绝对电势。一个带电球壳内部处处 $E=0$，但以无穷远为零时内部 $V=k_eQ/R$。这些反例能检查自己是否真正区分了“一个点的值”和“附近的变化”。

### 学习顺序

先读：[库仑定律与电场强度](/my-web/notes/obsidian/5db3f92103115401/)。

再用到：[半圆环的场强与电势](/my-web/notes/obsidian/cfa586bb35f32867/)、[球对称电荷的分区电场与电势](/my-web/notes/obsidian/61c5fb0adfb7b15d/)、[电场与电势的梯度关系](/my-web/notes/obsidian/8f9705eb2776bc64/)、[静电力做功与电势能](/my-web/notes/obsidian/e069de2496b8452b/)、[电偶极子与均匀场中的力矩](/my-web/notes/obsidian/64eecd8aa05cc58a/)、[导体静电平衡](/my-web/notes/obsidian/58d990316008085d/)、[电容定义与平行板电容](/my-web/notes/obsidian/fb9f374dfa570d82/)。

[在学习地图中定位本节](/my-web/notes/?map=P13#notes-graph-heading)

## 概念与适用条件

$V_A-V_B=\int_A^B\mathbf E\cdot d\mathbf l$。取参考点 $P_0$ 的 $V=0$，则 $V(P)=\int_P^{P_0}\mathbf E\cdot d\mathbf l$。对有限且积分收敛的电荷分布，可取无穷远为零并用 $V=\int k\,dq/r$。

## 推导

电场力是静电保守力，$W_{AB}=q_0(V_A-V_B)$，由库仑场积分得点电荷电势 $kq/r$。多个源的势直接按电荷正负作代数叠加，不能像场强一样额外投影。

## 解题步骤

1. 说明电势零点，先检查无穷远参考是否收敛。
2. 已知源分布用标量叠加；已知分区场用路径积分。
3. 路径跨分区时拆开积分，不能漏掉远处区域的贡献。

## 课件原题｜两同心带电薄球面（习题5-31）

**题目：** 半径 $R_1<R_2$ 的给定均匀薄球面分别带 $Q_1,Q_2$。

1. 每个球面内部电势为 $kQ/R$，外部为 $kQ/r$。
2. $r<R_1$：$V=kQ_1/R_1+kQ_2/R_2$。
3. $R_1<r<R_2$：$V=kQ_1/r+kQ_2/R_2$。
4. $r>R_2$：$V=k(Q_1+Q_2)/r$。
5. 分别在两个边界检查连续；外壳虽然在内部贡献零场，仍贡献常数电势。

## 易错与自检

电势零点任意，但同一道题各项必须使用同一零点。不能把不同材料区内的 $E=0$ 理解为 $V=0$。

## 闭卷回想

一个均匀带电球壳对内部任一点贡献的电场是零，为什么它对内部电势的贡献不是零？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第41页至第43页。页码是阅读器页码。
- [课堂笔记图02 · IMG20261015232204](/my-web/notes-media/asset-337e83723a4dee33.webp)。
- [课堂笔记图03 · IMG20261015232214](/my-web/notes-media/asset-c980e9e2dbd0480f.webp)。
- [课堂笔记图07 · IMG20261015232244](/my-web/notes-media/asset-dc0064a7bf3f57b1.webp)。
- [课堂笔记图08 · IMG20261015232250](/my-web/notes-media/asset-5d2855c9d45dc7b8.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232204](/my-web/notes-media/asset-337e83723a4dee33.webp)

> [!example]- 展开查看原题所在课件页
> 第五章习题课（第7版）1

## 关联与返回

[均匀带电圆环轴线场强](/my-web/notes/obsidian/581bfd027b33ab9b/)、[球对称电荷的分区电场与电势](/my-web/notes/obsidian/61c5fb0adfb7b15d/)、[无限长线与圆柱对称场](/my-web/notes/obsidian/bf68bff3575ef0c4/)、[电场与电势的梯度关系](/my-web/notes/obsidian/8f9705eb2776bc64/)、[静电力做功与电势能](/my-web/notes/obsidian/e069de2496b8452b/)、[接地条件与导体电势](/my-web/notes/obsidian/10da961e673c07ae/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [异号双圆环：精确电势到远场偶极近似](/my-web/notes/obsidian/6ae09d06bbb8fc9a/) · 综合
- [半球面电势差：镜像补成完整球壳](/my-web/notes/obsidian/57de3eff4a09bd6f/) · 综合
- [先接地外壳再接地内球：逐阶段守恒](/my-web/notes/obsidian/63721ac0914763f7/) · 挑战
- [偏心球形空腔：分区对称与系统能量](/my-web/notes/obsidian/d683ec540ee491cb/) · 挑战
- [带介质球壳：位移场、电势与束缚电荷](/my-web/notes/obsidian/dc29171c37873863/) · 挑战

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [5-3-电势(简)1 · 参考点选择与点电荷电势](/my-web/notes/obsidian/653e59c64053d33c/#%E9%A2%98%E5%9E%8B01-%E5%8F%82%E8%80%83%E7%82%B9%E9%80%89%E6%8B%A9%E4%B8%8E%E7%82%B9%E7%94%B5%E8%8D%B7%E7%94%B5%E5%8A%BF)
- [5-3-电势(简)1 · 圆环和圆盘的电势叠加](/my-web/notes/obsidian/653e59c64053d33c/#%E9%A2%98%E5%9E%8B02-%E5%9C%86%E7%8E%AF%E5%92%8C%E5%9C%86%E7%9B%98%E7%9A%84%E7%94%B5%E5%8A%BF%E5%8F%A0%E5%8A%A0)
- [5-3-电势(简)1 · 球壳、实体球和多球面的分区势](/my-web/notes/obsidian/653e59c64053d33c/#%E9%A2%98%E5%9E%8B03-%E7%90%83%E5%A3%B3%E5%AE%9E%E4%BD%93%E7%90%83%E5%92%8C%E5%A4%9A%E7%90%83%E9%9D%A2%E7%9A%84%E5%88%86%E5%8C%BA%E5%8A%BF)
- [第五章习题课（第7版）1 · 圆环、同号与异号半环的场和势](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B02-%E5%9C%86%E7%8E%AF%E5%90%8C%E5%8F%B7%E4%B8%8E%E5%BC%82%E5%8F%B7%E5%8D%8A%E7%8E%AF%E7%9A%84%E5%9C%BA%E5%92%8C%E5%8A%BF)
- [第五章习题课（第7版）1 · 单球壳、实体球与多同心球面的势](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B07-%E5%8D%95%E7%90%83%E5%A3%B3%E5%AE%9E%E4%BD%93%E7%90%83%E4%B8%8E%E5%A4%9A%E5%90%8C%E5%BF%83%E7%90%83%E9%9D%A2%E7%9A%84%E5%8A%BF)
- [第五章习题课（第7版）1 · 补完整球壳求半球电势差](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B10-%E8%A1%A5%E5%AE%8C%E6%95%B4%E7%90%83%E5%A3%B3%E6%B1%82%E5%8D%8A%E7%90%83%E7%94%B5%E5%8A%BF%E5%B7%AE)
- [第五章习题课（第7版）1 · 球内外电势叠加与等势面](/my-web/notes/obsidian/9ce6a3433eb1249c/#%E9%A2%98%E5%9E%8B15-%E7%90%83%E5%86%85%E5%A4%96%E7%94%B5%E5%8A%BF%E5%8F%A0%E5%8A%A0%E4%B8%8E%E7%AD%89%E5%8A%BF%E9%9D%A2)
