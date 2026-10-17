---
title: 概率论推导路线
date: '2026-10-16T08:49:50.762539+00:00'
lastmod: '2026-10-16T08:49:50.762539+00:00'
draft: false
description: ''
tags: []
note_links:
- notes/obsidian/0f5dc8ebf244204a/index.md
- notes/obsidian/1908780ea766a34a/index.md
- notes/obsidian/2587cd6473932f70/index.md
- notes/obsidian/29f9bf39693ad5be/index.md
- notes/obsidian/35c0448e7aeb3994/index.md
- notes/obsidian/51e9e4eba3515a19/index.md
- notes/obsidian/53b46e5bee6faeba/index.md
- notes/obsidian/57bef1228797c3a5/index.md
- notes/obsidian/7f9d2b002c3455e4/index.md
- notes/obsidian/89bcb92b5fa2ff2b/index.md
- notes/obsidian/8bf43a3c44d5d61d/index.md
- notes/obsidian/a45bf361a307c0fc/index.md
- notes/obsidian/a621a6267a419841/index.md
- notes/obsidian/b7c7668670cc1cc4/index.md
- notes/obsidian/c166658f0594b5a0/index.md
- notes/obsidian/c45a43c99adf4894/index.md
- notes/obsidian/cd3e85505394c498/index.md
- notes/obsidian/e753433a0de5fba5/index.md
obsidian: true
note_course: 概率论
---

# 概率论｜公式从哪里来

看见一个结论，先沿本表回到其前提。正文的推导可直接逐行阅读；需要公式时可从节点跳回这里。

| 目标公式 / 结论 | 核心前提 | 推导动作 | 完整节点 |
| --- | --- | --- | --- |
| 补事件与单调性 | 概率公理 | 互斥分解样本空间 | [概率公理与基本性质](/my-web/notes/obsidian/b7c7668670cc1cc4/) |
| 并事件加法公式 | 可加性 | 减去重复计算的交集 | [加法公式与容斥](/my-web/notes/obsidian/a621a6267a419841/) |
| 乘法公式 | 条件事件概率为正 | 由条件概率定义移项 | [乘法公式与概率树](/my-web/notes/obsidian/e753433a0de5fba5/) |
| 全概率 | 互斥且穷尽的划分 | 把A拆成ABᵢ再相加 | [全概率公式](/my-web/notes/obsidian/2587cd6473932f70/) |
| 贝叶斯 | 观察事件概率为正 | 条件定义＋乘法＋全概率 | [贝叶斯公式与先验更新](/my-web/notes/obsidian/7f9d2b002c3455e4/) |
| 独立补事件 | P(AB)=P(A)P(B) | 由P(A)减P(AB) | [事件独立与互斥的区别](/my-web/notes/obsidian/0f5dc8ebf244204a/) |
| 二项分布 | 固定次数、相互独立、同概率 | 单序列概率×位置组合数 | [二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/) |
| 超几何分布 | 有限总体不放回等可能抽取 | 目标与非目标两类组合计数 | [超几何分布与不放回抽样](/my-web/notes/obsidian/c166658f0594b5a0/) |
| 泊松极限 | p→0且np→λ、固定k | 拆为四因子分别取极限 | [二项到泊松的极限推导](/my-web/notes/obsidian/c45a43c99adf4894/) |
| 泊松筛选 | 总数泊松、给定总数后二项 | 按N全概率求和、指数级数 | [泊松计数的独立筛选](/my-web/notes/obsidian/53b46e5bee6faeba/) |
| CDF右连续 | 概率对递减事件列连续 | X≤x+1/n递减到X≤x | [分布函数及右连续性](/my-web/notes/obsidian/89bcb92b5fa2ff2b/) |
| 密度与区间概率 | F可由非负可积密度表示 | 积分相减、微积分求导 | [概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/) |
| 指数无记忆 | 指数生存函数 | 条件概率中指数相除 | [指数无记忆性的推导](/my-web/notes/obsidian/a45bf361a307c0fc/) |
| 正态归一化常数 | 高斯积分、二维变量代换 | 平方积分再转极坐标 | [正态密度归一化常数的推导](/my-web/notes/obsidian/57bef1228797c3a5/) |
| 正态标准化 | σ>0 | 平移缩放、密度变换 | [正态标准化与分位数](/my-web/notes/obsidian/51e9e4eba3515a19/) |
| 单调变换密度 | 有效支持内严格单调及可微反函数 | 由CDF法链式求导 | [单调变换密度与绝对值因子](/my-web/notes/obsidian/8bf43a3c44d5d61d/) |
| 非单调变换密度 | 有限/可处理的有效单调分支 | 每个原像分支密度相加 | [非单调变换与多分支求和](/my-web/notes/obsidian/29f9bf39693ad5be/) |

## 三个推导检查点

- 写等号前先说明为什么：定义、互斥可加、独立、变量代换、级数，还是近似。
- 写一个分式先看分母：条件事件是否正概率、变量是否在支持集、变换导数是否适用。
- 每次结尾检查：支持集、非负性、归一性、端点、极限。通过检查只是当前解答合理，不替代你自己的闭卷作答记录。

[返回概率论入口](/my-web/notes/obsidian/cd3e85505394c498/)
