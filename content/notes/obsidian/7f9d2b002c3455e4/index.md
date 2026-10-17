---
title: R10 贝叶斯公式与先验更新
date: '2026-10-16T17:07:07.011678+00:00'
lastmod: '2026-10-16T17:07:07.011678+00:00'
draft: false
description: ''
tags:
- 概率论
- 知识点
note_links:
- notes/obsidian/2587cd6473932f70/index.md
- notes/obsidian/434279b5a684ce01/index.md
- notes/obsidian/a5655733731507cc/index.md
- notes/obsidian/acd5040bd40d76c5/index.md
- notes/obsidian/b2eae495d224c2fb/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/e753433a0de5fba5/index.md
obsidian: true
note_course: 概率论
---

# 贝叶斯公式与先验更新

> [!tip] 做题入口
> 结果已经发生，比较各原因对这个结果的贡献。

## 详细讲解：从理解到列式

### 图解：贝叶斯概率树

![贝叶斯概率树](/my-web/notes-media/asset-3f65eb17323b730b.svg)

一条路径相乘，多条互斥路径相加，观察结果后再归一化。 图为本库补充示意，不替代原题中的几何与方向。

### 从正向生成概率反推来源

题目已告诉你结果 A 发生，要比较原因 $B_j$ 的可信程度。先写条件概率定义，不跳步骤：

$$
P(B_j\mid A)=\frac{P(A\cap B_j)}{P(A)}=\frac{P(B_j)P(A\mid B_j)}{\sum_iP(B_i)P(A\mid B_i)}.
$$

第一步改变参照总体；第二步分子用乘法、分母用全概率。先验 $P(B_j)$ 是观察前来源比例，似然 $P(A\mid B_j)$ 是该来源产生当前证据的概率，后验是观察后来源比例。似然本身不是后验。

### 用人数看清基础发生率

设10000件产品，甲产6000件、次品率1%，预计60件次品；乙产4000件、次品率3%，预计120件次品。发现次品后，在180件次品这个新总体中，乙占120/180=2/3。乙次品率3%与后验2/3谈的是不同总体。

### 连续观察时不能沿用旧权重

第一件结果已知后，若继续抽第二件，应以第一次得到的后验作为新的来源权重；箱内不放回概率还要按剩余数量更新。ER01 分别更新“哪一箱”与“箱内剩什么”，这两种更新不能只做一种。最终后验各项和应为1；若分母过小或漏原因，和不为1能立刻暴露问题。

### 学习顺序

先读：[条件概率](/my-web/notes/obsidian/a5655733731507cc/)、[全概率公式](/my-web/notes/obsidian/2587cd6473932f70/)。

用于练习：[ER01 选箱后不放回抽取：贝叶斯更新](/my-web/notes/obsidian/b2eae495d224c2fb/)。

[在学习地图中定位本节](/my-web/notes/?map=R10#notes-graph-heading)

## 前提与后续关系

**先确认：** [条件概率](/my-web/notes/obsidian/a5655733731507cc/)、[乘法公式与概率树](/my-web/notes/obsidian/e753433a0de5fba5/)、[全概率公式](/my-web/notes/obsidian/2587cd6473932f70/)

**继续用于：** 结合下方关联节点做题与复查。

## 定理与前提

沿用划分 $B_i$，且 $P(A)>0$：

$$
P(B_j\mid A)=\frac{P(B_j)P(A\mid B_j)}{\sum_iP(B_i)P(A\mid B_i)}.
$$

先验 $P(B_j)$ 乘似然 $P(A\mid B_j)$ 得联合概率，再用观察结果总概率归一化。

## 逐步推导

先按条件概率写 $P(B_j\mid A)=P(AB_j)/P(A)$。分子用乘法公式，分母用全概率公式。它不是新加的一条概率公理，而是前面定义和定理的组合。

## 补充例题｜发现次品后追查机器

**题目：** 甲产60%、乙产40%，次品率1%、3%，已知取到次品，求来自乙的概率。

1. 分子为“乙且次品”概率 $0.4\times0.03=0.012$。
2. 分母为总次品概率 $0.018$。
3. $P(\text{乙}\mid\text{次品})=0.012/0.018=2/3$。
4. 甲的后验为1/3，两项和为1。

## 易错与反例

不能把“乙产的次品率3%”当作“次品来自乙的概率”。诊断、误报类题同理，结果可靠性同时受基础发生率影响。

## 回想任务

如果乙产量从40%降到1%，即使乙次品率不变，发现次品后来自乙的概率会怎样变化？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- 原课件 PDF 第20页至第25页。页码是阅读器页码。
- 原始PPT（外部打开）；PDF为该PPT的阅读副本。
- [课堂笔记图04 · IMG20261015233122](/my-web/notes-media/asset-c30416d27b4505ca.webp)。
- [课堂笔记图07 · IMG20261015233153](/my-web/notes-media/asset-dc2a791caa17adab.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015233122](/my-web/notes-media/asset-c30416d27b4505ca.webp)

## 关联与返回

[条件概率](/my-web/notes/obsidian/a5655733731507cc/)、[乘法公式与概率树](/my-web/notes/obsidian/e753433a0de5fba5/)、[全概率公式](/my-web/notes/obsidian/2587cd6473932f70/)

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [选箱后不放回抽取：贝叶斯更新](/my-web/notes/obsidian/b2eae495d224c2fb/) · 进阶

## 按课件练这个知识点

先看原页题目，尝试写出第一步，再对照方法路线。

- [1-5review · 已知命中、色盲或产品合格反推原因](/my-web/notes/obsidian/acd5040bd40d76c5/#%E9%A2%98%E5%9E%8B07-%E5%B7%B2%E7%9F%A5%E5%91%BD%E4%B8%AD%E8%89%B2%E7%9B%B2%E6%88%96%E4%BA%A7%E5%93%81%E5%90%88%E6%A0%BC%E5%8F%8D%E6%8E%A8%E5%8E%9F%E5%9B%A0)
- [1-6review · 两次考试相关结果的资格与贝叶斯](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B07-%E4%B8%A4%E6%AC%A1%E8%80%83%E8%AF%95%E7%9B%B8%E5%85%B3%E7%BB%93%E6%9E%9C%E7%9A%84%E8%B5%84%E6%A0%BC%E4%B8%8E%E8%B4%9D%E5%8F%B6%E6%96%AF)
- [1-6review · 选箱且不放回、已知第一次一等品](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B08-%E9%80%89%E7%AE%B1%E4%B8%94%E4%B8%8D%E6%94%BE%E5%9B%9E%E5%B7%B2%E7%9F%A5%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%80%E7%AD%89%E5%93%81)
- [1-6review · 不同地区报名表的来源划分](/my-web/notes/obsidian/434279b5a684ce01/#%E9%A2%98%E5%9E%8B10-%E4%B8%8D%E5%90%8C%E5%9C%B0%E5%8C%BA%E6%8A%A5%E5%90%8D%E8%A1%A8%E7%9A%84%E6%9D%A5%E6%BA%90%E5%88%92%E5%88%86)
