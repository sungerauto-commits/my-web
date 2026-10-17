---
title: P16 电偶极子与均匀场中的力矩
date: '2026-10-16T17:07:06.966012+00:00'
lastmod: '2026-10-16T17:07:06.966012+00:00'
draft: false
description: ''
tags:
- 大物
- 知识点
note_links:
- notes/obsidian/09dc45185b27d0e3/index.md
- notes/obsidian/1831dd60eeae54c2/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/5db3f92103115401/index.md
- notes/obsidian/653e59c64053d33c/index.md
- notes/obsidian/6ae09d06bbb8fc9a/index.md
- notes/obsidian/8f9705eb2776bc64/index.md
- notes/obsidian/9038a67e0032fe4c/index.md
- notes/obsidian/e069de2496b8452b/index.md
obsidian: true
note_course: 大学物理
---

# 电偶极子与均匀场中的力矩

> [!tip] 做题入口
> 两力合力为零，仍可能形成转矩。

## 详细讲解：从理解到列式

### 定义方向要先固定

电偶极子由相距 $l$ 的等量异号电荷组成，偶极矩 $\mathbf p=q\mathbf l$ 从负电荷指向正电荷。对远处观察点，$r\gg l$，两个点电荷势的 $1/r$ 项抵消，保留一阶差得到

$$
V\approx\frac1{4\pi\varepsilon_0}\frac{\mathbf p\cdot\hat{\mathbf r}}{r^2}.
$$

它是远场近似，不适用于紧贴任一电荷的位置。

### 均匀外场中合力为零，力矩却不为零

两电荷受力 $\pm q\mathbf E$，在均匀场中抵消；力的作用点不同，形成力偶，$\boldsymbol\tau=\mathbf p\times\mathbf E$，大小 $pE\sin\theta$。势能 $U=-\mathbf p\cdot\mathbf E$；平行同向时最低，反向时最高。因此合力为零不能推出物体既不平动也不转动。

非均匀场下，两电荷处的场不相等，合力一般不为零；在偶极近似下可写成相应势能梯度。做题先判断外场是否均匀，再分别问合力、力矩、能量，不用一个“受力为零”包办三问。

### 学习顺序

先读：[库仑定律与电场强度](/my-web/notes/obsidian/5db3f92103115401/)、[电势与电势叠加](/my-web/notes/obsidian/09dc45185b27d0e3/)。

再用到：[电介质极化与极化强度](/my-web/notes/obsidian/9038a67e0032fe4c/)。

[在学习地图中定位本节](/my-web/notes/?map=P16#notes-graph-heading)

## 概念与适用条件

电偶极子由 $+q$、$-q$ 相隔 $l$ 构成，电偶极矩 $\mathbf p=q\mathbf l$ 从负指向正。均匀外场中总力为零，力矩 $\boldsymbol\tau=\mathbf p\times\mathbf E$，势能 $U=-\mathbf p\cdot\mathbf E$（零点取垂直取向）。

## 推导

正负电荷受力 $\pm q\mathbf E$ 相互抵消，但作用线不同，两力矩之和 $\tau=qlE\sin\theta=pE\sin\theta$。势能关于角度的变化给出恢复转矩。远场 $r\gg l$ 的偶极势为 $V\approx k\mathbf p\cdot\hat{\mathbf r}/r^2$，属于近似式。

## 解题步骤

1. 画清 $\mathbf p$ 的方向。
2. 判断外场是否均匀；不均匀时总力一般不为零。
3. 力矩用 $pE\sin\theta$，势能用 $-pE\cos\theta$。

## 补充示例｜转动释放能量

**题目：** 偶极矩 $p$ 在匀强场 $E$ 中，由 $90^\circ$ 转到 $0^\circ$。

1. 初势能 $U_i=0$，末势能 $U_f=-pE$。
2. 电场力做功 $W=U_i-U_f=pE$。
3. 若未耗散且原来静止，获得转动动能 $pE$。
4. 平行是稳定平衡，反平行也是零力矩位置但不稳定。

## 易错与自检

电偶极矩不能从正指向负。只有在远场条件下才能用 $1/r^2$ 的偶极势代替精确双点电荷叠加式。

## 闭卷回想

为什么 $\theta=180^\circ$ 时力矩为零，却不是稳定取向？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第55页。页码是阅读器页码。
- [课堂笔记图05 · IMG20261015232231](/my-web/notes-media/asset-d982bb1696e66e56.webp)。
- [课堂笔记图07 · IMG20261015232244](/my-web/notes-media/asset-dc0064a7bf3f57b1.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232231](/my-web/notes-media/asset-d982bb1696e66e56.webp)

## 关联与返回

[库仑定律与电场强度](/my-web/notes/obsidian/5db3f92103115401/)、[电势与电势叠加](/my-web/notes/obsidian/09dc45185b27d0e3/)、[电场与电势的梯度关系](/my-web/notes/obsidian/8f9705eb2776bc64/)、[静电力做功与电势能](/my-web/notes/obsidian/e069de2496b8452b/)、[电介质极化与极化强度](/my-web/notes/obsidian/9038a67e0032fe4c/)

[返回大物入口](/my-web/notes/obsidian/43f6cacf0a44b408/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [异号双圆环：精确电势到远场偶极近似](/my-web/notes/obsidian/6ae09d06bbb8fc9a/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [5-1-电场强度(简)1 · 电偶极子中垂线与轴线场](/my-web/notes/obsidian/1831dd60eeae54c2/#%E9%A2%98%E5%9E%8B02-%E7%94%B5%E5%81%B6%E6%9E%81%E5%AD%90%E4%B8%AD%E5%9E%82%E7%BA%BF%E4%B8%8E%E8%BD%B4%E7%BA%BF%E5%9C%BA)
- [5-3-电势(简)1 · 偶极子远场电势与搬移电荷做功](/my-web/notes/obsidian/653e59c64053d33c/#%E9%A2%98%E5%9E%8B05-%E5%81%B6%E6%9E%81%E5%AD%90%E8%BF%9C%E5%9C%BA%E7%94%B5%E5%8A%BF%E4%B8%8E%E6%90%AC%E7%A7%BB%E7%94%B5%E8%8D%B7%E5%81%9A%E5%8A%9F)
