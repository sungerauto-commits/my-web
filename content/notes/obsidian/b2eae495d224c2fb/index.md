---
title: ER01 选箱后不放回抽取：贝叶斯更新
date: '2026-10-16T11:40:29.250066+00:00'
lastmod: '2026-10-16T11:40:29.250066+00:00'
draft: false
description: ''
tags:
- 原题精解
- 概率论
note_links:
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/2587cd6473932f70/index.md
- notes/obsidian/7f9d2b002c3455e4/index.md
- notes/obsidian/a5655733731507cc/index.md
- notes/obsidian/c166658f0594b5a0/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/e753433a0de5fba5/index.md
obsidian: true
note_course: 概率论
---

# 选箱后不放回抽取：贝叶斯更新

## 原题与配图

![ER01-1](/my-web/notes-media/asset-151417d0d1d6e615.webp)

**PPT 1-6 第28页，第三题（10分） · 进阶**

两箱同种零件：第一箱 50 件，其中一等品 10 件；第二箱 30 件，其中一等品 18 件。随机选一箱，先后取两件，取后不放回。已知第一次取出一等品，求第二次仍是一等品的概率。

## 解题思路

有两层不确定性：来自哪一箱、箱内取到什么。第一次看到一等品后，两箱的可信程度已经改变；先更新箱子的后验，再算不放回的第二次抽取。逻辑链：选箱先验 → 第一次一等品的似然 → 箱子后验 → 第二次条件概率。

## 逐步解答

### 1. 定义事件并算观察到的证据

令 $C_i$ 表示选中第 $i$ 箱，$A$、$B$ 分别表示第一次、第二次取出一等品。等概率选箱给出 $P(C_i)=1/2$。

$$
P(A)=\frac12\frac{10}{50}+\frac12\frac{18}{30}=\frac25.
$$

### 2. 用贝叶斯公式更新来源

$$
P(C_1\mid A)=\frac{(1/2)(10/50)}{2/5}=\frac14,\qquad P(C_2\mid A)=\frac34.
$$

第二箱一等品比例更高，因此观察到一等品后更可能来自第二箱。

### 3. 在更新后的样本空间中分箱求和

$$
P(B\mid A,C_1)=\frac9{49},\qquad P(B\mid A,C_2)=\frac{17}{29}.
$$

$$
\boxed{P(B\mid A)=\frac14\frac9{49}+\frac34\frac{17}{29}=\frac{690}{1421}\approx0.4856.}
$$

### 4. 用联合概率复核

$$
P(AB)=\frac12\frac{10\cdot9}{50\cdot49}+\frac12\frac{18\cdot17}{30\cdot29}=\frac{276}{1421}.
$$

再由 $P(B\mid A)=P(AB)/P(A)$ 得到同一答案。

## 结果自检

结果在 $9/49$ 与 $17/29$ 之间，满足加权平均的范围。先验平均一等品率为 $0.4$，看到一次一等品后，对较优箱子的信心提高，第二次的预测概率上升到约 $0.4856$。

## 易错点

不能把两箱合并成 80 件后抽取；也不能在第二次仍用 $1/2,1/2$ 加权。给定同一箱以后，不放回抽取的两次结果也不独立。

## 对应知识点

[条件概率](/my-web/notes/obsidian/a5655733731507cc/) · [乘法公式与概率树](/my-web/notes/obsidian/e753433a0de5fba5/) · [全概率公式](/my-web/notes/obsidian/2587cd6473932f70/) · [贝叶斯公式与先验更新](/my-web/notes/obsidian/7f9d2b002c3455e4/) · [超几何分布与不放回抽样](/my-web/notes/obsidian/c166658f0594b5a0/)

## 原始出处

概率论 PPT 1-6 PDF第28页

原图从项目资料逐页截取；解题过程为本库重新推导。图片默认展开，点击图片可放大。

[返回原题题库](/my-web/notes/obsidian/0ccc1ba647a82d72/) · [课程入口](/my-web/notes/obsidian/cd3e85505394c498/)
