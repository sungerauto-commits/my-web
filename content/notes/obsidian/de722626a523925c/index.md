---
title: ER06 两阶段抽检：条件概率与联合概率
date: '2026-10-16T11:40:43.113945+00:00'
lastmod: '2026-10-16T11:40:43.113945+00:00'
draft: false
description: ''
tags:
- 原题精解
- 概率论
note_links:
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/1908780ea766a34a/index.md
- notes/obsidian/2587cd6473932f70/index.md
- notes/obsidian/a5655733731507cc/index.md
- notes/obsidian/a621a6267a419841/index.md
- notes/obsidian/c166658f0594b5a0/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/e753433a0de5fba5/index.md
- notes/obsidian/f3732cf365957480/index.md
obsidian: true
note_course: 概率论
---

# 两阶段抽检：条件概率与联合概率

## 原题与配图

![ER06-1](/my-web/notes-media/asset-50a016e512c48811.webp)

![ER06-2](/my-web/notes-media/asset-38ef28b3ff72705d.webp)

**教材第二章习题9，印刷第56—57页 · 综合**

大批产品次品率 10%。首次任取 10 件，无次品则接收，次品数大于 2 则拒收，否则再任取 5 件，仅当这 5 件无次品时接收。求：（1）首次即接收；（2）需第二次检验；（3）按第二次检验标准被接收；（4）首次未能决定且第二次通过；（5）最终被接收的概率。注意原题首次是“无次品”，所以第一次有 1 或 2 件次品都进入复检。

## 解题思路

把流程变成互斥的接收路径。第三问是进入复检以后，第二次样本本身合格的条件概率；第四问才是实际走完整条复检接收路径的联合概率。对“大批”采用独立、同次品率的二项近似；若有限批且不放回，需批量与次品总数改用超几何模型。

## 逐步解答

### 1. 建立两次样本计数

令 $X\sim B(10,0.1)$，$Z\sim B(5,0.1)$，采用独立抽样模型。设复检事件 $D=\{X=1\}\cup\{X=2\}$。

### 2. 首次直接接收

$$
\boxed{P(X=0)=0.9^{10}\approx0.348678.}
$$

### 3. 需要复检

$$
\boxed{P(D)=\binom{10}{1}0.1\,0.9^9+\binom{10}{2}0.1^2\,0.9^8\approx0.581131.}
$$

### 4. 第二次标准通过的条件概率（第三问）

进入复检以后，标准是第二批 5 件无次品。由独立性，

$$
\boxed{P(Z=0\mid D)=P(Z=0)=0.9^5=0.59049.}
$$

### 5. 复检接收的联合概率（第四问）

$$
\boxed{P(D\cap\{Z=0\})=P(D)P(Z=0\mid D)\approx0.343152.}
$$

### 6. 合并两条互斥接收路径（第五问）

$$
\boxed{P(\text{接收})=0.9^{10}+\left[10(0.1)0.9^9+45(0.1)^2 0.9^8\right]0.9^5\approx0.691830.}
$$

流程可读成：$X=0$ 直接收；$X=1,2$ 再看 $Z=0$；$X\ge3$ 直接拒。

## 结果自检

最终接收率必须大于直接接收率，小于“直接接收或进入复检”的概率。最终拒收率为 $P(X\ge3)+P(D)P(Z\ge1)$，与接收率之和为 1。

## 易错点

不能把第三问的 $0.59049$ 直接加到首次接收率；那是给定进入复检后的概率。也不能把首次 1 件次品误算成直接接收。

## 对应知识点

[事件运算与德摩根律](/my-web/notes/obsidian/f3732cf365957480/) · [加法公式与容斥](/my-web/notes/obsidian/a621a6267a419841/) · [条件概率](/my-web/notes/obsidian/a5655733731507cc/) · [乘法公式与概率树](/my-web/notes/obsidian/e753433a0de5fba5/) · [全概率公式](/my-web/notes/obsidian/2587cd6473932f70/) · [二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/) · [超几何分布与不放回抽样](/my-web/notes/obsidian/c166658f0594b5a0/)

## 原始出处

《概率论与数理统计》第五版 PDF第71页 · 《概率论与数理统计》第五版 PDF第72页

原图从项目资料逐页截取；解题过程为本库重新推导。图片默认展开，点击图片可放大。

[返回原题题库](/my-web/notes/obsidian/0ccc1ba647a82d72/) · [课程入口](/my-web/notes/obsidian/cd3e85505394c498/)
