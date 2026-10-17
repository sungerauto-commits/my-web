---
title: T13 1-5review 题型
date: '2026-10-16T17:05:10.714323+00:00'
lastmod: '2026-10-16T17:05:10.714323+00:00'
draft: false
description: ''
tags: []
note_links:
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/2587cd6473932f70/index.md
- notes/obsidian/52522b56538c6fc4/index.md
- notes/obsidian/7f9d2b002c3455e4/index.md
- notes/obsidian/9ed1c7c2e782ef18/index.md
- notes/obsidian/a5655733731507cc/index.md
- notes/obsidian/a621a6267a419841/index.md
- notes/obsidian/b6cadfdd889e25b0/index.md
- notes/obsidian/c166658f0594b5a0/index.md
- notes/obsidian/e753433a0de5fba5/index.md
- notes/obsidian/f3732cf365957480/index.md
obsidian: true
note_course: 概率论
---

# 1-5review · 题型整理

[学习地图](/my-web/notes/#notes-graph-heading) · [返回全部 PPT](/my-web/notes/obsidian/9ed1c7c2e782ef18/)

**原课件：** 1-5review.pdf。以下页码均为 PDF 阅读器页码。

## 先找题型

- [01 已知存活年龄的条件概率](/my-web/notes/obsidian/acd5040bd40d76c5/#%E9%A2%98%E5%9E%8B01-%E5%B7%B2%E7%9F%A5%E5%AD%98%E6%B4%BB%E5%B9%B4%E9%BE%84%E7%9A%84%E6%9D%A1%E4%BB%B6%E6%A6%82%E7%8E%87)
- [02 抽样方式与条件乘法](/my-web/notes/obsidian/acd5040bd40d76c5/#%E9%A2%98%E5%9E%8B02-%E6%8A%BD%E6%A0%B7%E6%96%B9%E5%BC%8F%E4%B8%8E%E6%9D%A1%E4%BB%B6%E4%B9%98%E6%B3%95)
- [03 转箱后再抽球的全概率](/my-web/notes/obsidian/acd5040bd40d76c5/#%E9%A2%98%E5%9E%8B03-%E8%BD%AC%E7%AE%B1%E5%90%8E%E5%86%8D%E6%8A%BD%E7%90%83%E7%9A%84%E5%85%A8%E6%A6%82%E7%8E%87)
- [04 添球与逐次损坏的历史依赖](/my-web/notes/obsidian/acd5040bd40d76c5/#%E9%A2%98%E5%9E%8B04-%E6%B7%BB%E7%90%83%E4%B8%8E%E9%80%90%E6%AC%A1%E6%8D%9F%E5%9D%8F%E7%9A%84%E5%8E%86%E5%8F%B2%E4%BE%9D%E8%B5%96)
- [05 事件代数后计算条件概率](/my-web/notes/obsidian/acd5040bd40d76c5/#%E9%A2%98%E5%9E%8B05-%E4%BA%8B%E4%BB%B6%E4%BB%A3%E6%95%B0%E5%90%8E%E8%AE%A1%E7%AE%97%E6%9D%A1%E4%BB%B6%E6%A6%82%E7%8E%87)
- [06 工厂来源与随机选箱的加权总体率](/my-web/notes/obsidian/acd5040bd40d76c5/#%E9%A2%98%E5%9E%8B06-%E5%B7%A5%E5%8E%82%E6%9D%A5%E6%BA%90%E4%B8%8E%E9%9A%8F%E6%9C%BA%E9%80%89%E7%AE%B1%E7%9A%84%E5%8A%A0%E6%9D%83%E6%80%BB%E4%BD%93%E7%8E%87)
- [07 已知命中、色盲或产品合格反推原因](/my-web/notes/obsidian/acd5040bd40d76c5/#%E9%A2%98%E5%9E%8B07-%E5%B7%B2%E7%9F%A5%E5%91%BD%E4%B8%AD%E8%89%B2%E7%9B%B2%E6%88%96%E4%BA%A7%E5%93%81%E5%90%88%E6%A0%BC%E5%8F%8D%E6%8E%A8%E5%8E%9F%E5%9B%A0)
- [08 缩小样本空间计算条件概率](/my-web/notes/obsidian/acd5040bd40d76c5/#%E9%A2%98%E5%9E%8B08-%E7%BC%A9%E5%B0%8F%E6%A0%B7%E6%9C%AC%E7%A9%BA%E9%97%B4%E8%AE%A1%E7%AE%97%E6%9D%A1%E4%BB%B6%E6%A6%82%E7%8E%87)

## 题型01 已知存活年龄的条件概率

**原课件页与配图**

![T13-p6](/my-web/notes-media/asset-68388e747e711b6c.webp)

原页与续页：第6页。

**识别与列式路线**

1. 写“活过25”包含于“活过20”。
2. 条件概率分子化成较小事件。
3. 除以已知条件概率。

**容易卡住的地方：** 给了两个尾概率，不足以直接假设寿命指数分布。

**读懂依据：** [条件概率](/my-web/notes/obsidian/a5655733731507cc/)。

## 题型02 抽样方式与条件乘法

**原课件页与配图**

![T13-p7](/my-web/notes-media/asset-a7dec2abb8538d92.webp)

原页与续页：第7页。

**识别与列式路线**

1. 为每一步建立给定历史下的概率。
2. 不放回更新数量，放回则恢复。

**容易卡住的地方：** 有放回是否独立仍需均匀随机抽取的机制。

**读懂依据：** [乘法公式与概率树](/my-web/notes/obsidian/e753433a0de5fba5/) · [超几何分布与不放回抽样](/my-web/notes/obsidian/c166658f0594b5a0/)。

## 题型03 转箱后再抽球的全概率

**原课件页与配图**

![T13-p9](/my-web/notes-media/asset-3cbc9602f9912d01.webp)

原页与续页：第9页。

**识别与列式路线**

1. 按从甲箱移入白球或黑球划分。
2. 更新乙箱组成。
3. 将两条路径概率相加。

**容易卡住的地方：** 第二箱概率依赖转移颜色，不能直接用原比例。

**读懂依据：** [乘法公式与概率树](/my-web/notes/obsidian/e753433a0de5fba5/) · [全概率公式](/my-web/notes/obsidian/2587cd6473932f70/)。

## 题型04 添球与逐次损坏的历史依赖

**原课件页与配图**

![T13-p10](/my-web/notes-media/asset-a7065cec9bee9525.webp)

原页与续页：第10页 · 第11页。

**识别与列式路线**

1. 明确指定颜色序列或连续未损坏的路径。
2. 每步条件概率连乘，分母按历史更新。

**容易卡住的地方：** 这类停止/连续成功题未必是几何分布。

**读懂依据：** [乘法公式与概率树](/my-web/notes/obsidian/e753433a0de5fba5/) · [几何分布与首次成功](/my-web/notes/obsidian/b6cadfdd889e25b0/)。

## 题型05 事件代数后计算条件概率

**原课件页与配图**

![T13-p12](/my-web/notes-media/asset-52df6fe9c48164bd.webp)

原页与续页：第12页。

**识别与列式路线**

1. 先化简目标与给定事件的交集。
2. 用加法与对立求分子分母。
3. 最后相除。

**容易卡住的地方：** 先化事件再代数字，比把不明含义的概率凑成比值可靠。

**读懂依据：** [事件运算与德摩根律](/my-web/notes/obsidian/f3732cf365957480/) · [加法公式与容斥](/my-web/notes/obsidian/a621a6267a419841/) · [条件概率](/my-web/notes/obsidian/a5655733731507cc/)。

## 题型06 工厂来源与随机选箱的加权总体率

**原课件页与配图**

![T13-p16](/my-web/notes-media/asset-e2eb84867ce013b5.webp)

原页与续页：第16页 · 第18页 · 第26页。

**识别与列式路线**

1. 按来源构造互斥完备划分。
2. 来源权重乘对应目标率再求和。

**容易卡住的地方：** 等概率选箱与等概率选全体产品的来源权重可能不同。

**读懂依据：** [全概率公式](/my-web/notes/obsidian/2587cd6473932f70/)。

## 题型07 已知命中、色盲或产品合格反推原因

**原课件页与配图**

![T13-p22](/my-web/notes-media/asset-14cd6313404c44c4.webp)

![T13-p24](/my-web/notes-media/asset-38a5e7fb1b026f4a.webp)

![T13-p25](/my-web/notes-media/asset-461db8caf83d90d1.webp)

![T13-p26](/my-web/notes-media/asset-98475c3716538c38.webp)

![T13-p27](/my-web/notes-media/asset-7b0e5663ef9e5a47.webp)

![T13-p28](/my-web/notes-media/asset-020e9415f04f16bf.webp)

原页与续页：第22页 · 第24页 · 第25页 · 第26页 · 第27页 · 第28页。

**识别与列式路线**

1. 先验乘似然得到各来源的证据概率。
2. 以所有来源证据概率之和归一化。

**容易卡住的地方：** P(结果|来源)不等于P(来源|结果)，甲乙两类权重也不总是1/2。

**读懂依据：** [贝叶斯公式与先验更新](/my-web/notes/obsidian/7f9d2b002c3455e4/)。

## 题型08 缩小样本空间计算条件概率

**原课件页与配图**

![T13-p2](/my-web/notes-media/asset-fc12f9f3666718a7.webp)

原页与续页：第2页。

**识别与列式路线**

1. 两次投币的等可能结果为HH、HT、TH、TT。
2. 已知至少一次正面后只剩HH、HT、TH。
3. 两面相同只剩HH，故P(B|A)=1/3，而未给定条件时P(B)=1/2。

**容易卡住的地方：** 先确定给定事件，再计算它与目标的交集；不能沿用原来的四个结果作为条件概率分母。

**读懂依据：** [样本空间与事件](/my-web/notes/obsidian/52522b56538c6fc4/) · [条件概率](/my-web/notes/obsidian/a5655733731507cc/)。

## 怎么继续练

这页按题型给出方法路线；需要逐题完整演算时，进入 [原题精解](/my-web/notes/obsidian/0ccc1ba647a82d72/) 或对应知识点的例题。拿原课件中的另一题，用同一流程独立写第一步，再核对原答案。
