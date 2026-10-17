---
title: R02 事件运算与德摩根律
date: '2026-10-16T17:07:06.995159+00:00'
lastmod: '2026-10-16T17:07:06.995159+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/0f5dc8ebf244204a/index.md
- notes/obsidian/1077b445258d9a76/index.md
- notes/obsidian/2587cd6473932f70/index.md
- notes/obsidian/434279b5a684ce01/index.md
- notes/obsidian/52522b56538c6fc4/index.md
- notes/obsidian/5742a76210edd3ab/index.md
- notes/obsidian/6f86eb85a87811f3/index.md
- notes/obsidian/87e6d6e74caa8b2b/index.md
- notes/obsidian/a5655733731507cc/index.md
- notes/obsidian/a621a6267a419841/index.md
- notes/obsidian/acd5040bd40d76c5/index.md
- notes/obsidian/b7c7668670cc1cc4/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/de722626a523925c/index.md
obsidian: true
note_course: 概率论
---

# 事件运算与德摩根律

> [!tip] 做题入口
> 把“至少、都、仅有、不是全部”准确翻译成集合。

## 详细讲解：从理解到列式

### 图解：事件集合

![事件集合](/my-web/notes-media/asset-7fe7d7ba512fdb4b.svg)

看重叠理解计数；能否独立还要检验概率关系。 图为本库补充示意，不替代原题中的几何与方向。

### 把中文限制写成逻辑条件

$A\cup B$ 表示至少一个发生，$A\cap B$ 表示两个都发生，$\overline A$ 表示 A 不发生，$A\setminus B=A\cap\overline B$ 表示 A 发生而 B 不发生。“恰有一个”是 $(A\cap\overline B)\cup(\overline A\cap B)$，不是简单的 $A\cup B$。

### 为什么取反时连接词要交换

“不是至少一个发生”就要求全部不发生，因此 $\overline{A\cup B}=\overline A\cap\overline B$；“不是两个都发生”只要求至少一个不发生，因此 $\overline{A\cap B}=\overline A\cup\overline B$。这就是德摩根律的语义来源。

### 将复杂事件拆成互斥路径

“第3次首次成功”是前两次失败且第三次成功；“三次恰两次成功”是成功位置分别为12、13、23的三条互斥路径。先把路径写清楚，再决定用加法还是乘法。重复试验中“至少一次”通常先算“全不发生”更短，但全不发生的概率能否写成乘积，仍需检查独立性。

### 学习顺序

先读：[样本空间与事件](/my-web/notes/obsidian/52522b56538c6fc4/)。

再用到：[加法公式与容斥](/my-web/notes/obsidian/a621a6267a419841/)、[全概率公式](/my-web/notes/obsidian/2587cd6473932f70/)。

[在学习地图中定位本节](/my-web/notes/?map=R02#notes-graph-heading)

## 前提与后续关系

**先确认：** [样本空间与事件](/my-web/notes/obsidian/52522b56538c6fc4/)

**继续用于：** [概率公理与基本性质](/my-web/notes/obsidian/b7c7668670cc1cc4/)、[加法公式与容斥](/my-web/notes/obsidian/a621a6267a419841/)、[条件概率](/my-web/notes/obsidian/a5655733731507cc/)、[独立重复试验与至少一次](/my-web/notes/obsidian/6f86eb85a87811f3/)

## 定义与前提

$A\cup B$ 表示至少一件发生，$A\cap B$ 表示两件都发生，$A^c$ 表示 $A$ 不发生，$A\setminus B=A\cap B^c$ 表示 $A$ 发生而 $B$ 不发生。$A\cap B=\varnothing$ 称互斥；互斥是集合关系。

## 推导｜德摩根律

对任意样本点 $\omega$：

$$
\omega\in(A\cup B)^c\iff\omega\notin A\ \text{且}\ \omega\notin B\iff\omega\in A^c\cap B^c.
$$

所以 $(A\cup B)^c=A^c\cap B^c$。同理 $(A\cap B)^c=A^c\cup B^c$。这说明“至少一次”的反面是“一次都没有”，“全部发生”的反面是“至少一次没发生”。

## 解题步骤与补充例题

**题目：** 三个元件工作事件为 $A,B,C$，系统要求至少两个工作。

1. 直接表达 $(A\cap B)\cup(A\cap C)\cup(B\cap C)$，允许三个都工作。
2. 若题目改成“恰好两个”，则是 $AB C^c\cup A B^cC\cup A^cBC$。
3. 后三个事件互斥，求概率时可以直接相加。
4. 前三个事件并不互斥，都包含 $ABC$，不能直接相加概率。

## 易错与边界

补集必须相对同一个样本空间。“不全是正面”不等于“全是反面”。互斥不等于独立，后者要用概率乘积判定。

## 回想任务

把“$A,B,C$ 至多发生一个”分别写成互斥事件的并与“至少两个发生”的补集。

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第11页至第24页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图02 · IMG20261015233107](/my-web/notes-media/asset-5eb6b7977865df47.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233107](/my-web/notes-media/asset-5eb6b7977865df47.webp)

## 关联与返回

[样本空间与事件](/my-web/notes/obsidian/52522b56538c6fc4/)、[加法公式与容斥](/my-web/notes/obsidian/a621a6267a419841/)、[事件独立与互斥的区别](/my-web/notes/obsidian/0f5dc8ebf244204a/)、[独立重复试验与至少一次](/my-web/notes/obsidian/6f86eb85a87811f3/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [两阶段抽检：条件概率与联合概率](/my-web/notes/obsidian/de722626a523925c/) · 综合

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-2review · 三事件中文条件翻译](/my-web/notes/obsidian/1077b445258d9a76/#%E9%A2%98%E5%9E%8B02-%E4%B8%89%E4%BA%8B%E4%BB%B6%E4%B8%AD%E6%96%87%E6%9D%A1%E4%BB%B6%E7%BF%BB%E8%AF%91)
- [1-2review · 四零件合格次数的事件表达](/my-web/notes/obsidian/1077b445258d9a76/#%E9%A2%98%E5%9E%8B03-%E5%9B%9B%E9%9B%B6%E4%BB%B6%E5%90%88%E6%A0%BC%E6%AC%A1%E6%95%B0%E7%9A%84%E4%BA%8B%E4%BB%B6%E8%A1%A8%E8%BE%BE)
- [1-3review · 互斥、包含和交事件概率计算](/my-web/notes/obsidian/87e6d6e74caa8b2b/#%E9%A2%98%E5%9E%8B02-%E4%BA%92%E6%96%A5%E5%8C%85%E5%90%AB%E5%92%8C%E4%BA%A4%E4%BA%8B%E4%BB%B6%E6%A6%82%E7%8E%87%E8%AE%A1%E7%AE%97)
- [1-4review · 投币恰好一次与至少一次](/my-web/notes/obsidian/5742a76210edd3ab/#%E9%A2%98%E5%9E%8B05-%E6%8A%95%E5%B8%81%E6%81%B0%E5%A5%BD%E4%B8%80%E6%AC%A1%E4%B8%8E%E8%87%B3%E5%B0%91%E4%B8%80%E6%AC%A1)
- [1-5review · 事件代数后计算条件概率](/my-web/notes/obsidian/acd5040bd40d76c5/#%E9%A2%98%E5%9E%8B05-%E4%BA%8B%E4%BB%B6%E4%BB%A3%E6%95%B0%E5%90%8E%E8%AE%A1%E7%AE%97%E6%9D%A1%E4%BB%B6%E6%A6%82%E7%8E%87)
- [1-6review · 零件合格状态的事件代数表达](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B12-%E9%9B%B6%E4%BB%B6%E5%90%88%E6%A0%BC%E7%8A%B6%E6%80%81%E7%9A%84%E4%BA%8B%E4%BB%B6%E4%BB%A3%E6%95%B0%E8%A1%A8%E8%BE%BE)
- [1-6review · 由包含关系证明事件恒等式](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B13-%E7%94%B1%E5%8C%85%E5%90%AB%E5%85%B3%E7%B3%BB%E8%AF%81%E6%98%8E%E4%BA%8B%E4%BB%B6%E6%81%92%E7%AD%89%E5%BC%8F)
