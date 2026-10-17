---
title: T17 2-3随机变量的分布函数review 题型
date: '2026-10-16T16:58:18.952106+00:00'
lastmod: '2026-10-16T16:58:18.952106+00:00'
draft: false
description: ''
tags: []
note_links:
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/89bcb92b5fa2ff2b/index.md
- notes/obsidian/9ed1c7c2e782ef18/index.md
- notes/obsidian/a4baa267f6b84d83/index.md
- notes/obsidian/b7c7668670cc1cc4/index.md
- notes/obsidian/f90f2e4ddd7a9d01/index.md
obsidian: true
note_course: 概率论
---

# 2-3随机变量的分布函数review · 题型整理

[学习地图](/my-web/notes/#notes-graph-heading) · [返回全部 PPT](/my-web/notes/obsidian/9ed1c7c2e782ef18/)

**原课件：** 2-3随机变量的分布函数review.pdf。以下页码均为 PDF 阅读器页码。

## 先找题型

- [01 由0—1及三次投币分布律求阶梯CDF](/my-web/notes/obsidian/221d8beefa5c1b9f/#%E9%A2%98%E5%9E%8B01-%E7%94%B101%E5%8F%8A%E4%B8%89%E6%AC%A1%E6%8A%95%E5%B8%81%E5%88%86%E5%B8%83%E5%BE%8B%E6%B1%82%E9%98%B6%E6%A2%AFcdf)
- [02 分段CDF待定参数与区间概率](/my-web/notes/obsidian/221d8beefa5c1b9f/#%E9%A2%98%E5%9E%8B02-%E5%88%86%E6%AE%B5cdf%E5%BE%85%E5%AE%9A%E5%8F%82%E6%95%B0%E4%B8%8E%E5%8C%BA%E9%97%B4%E6%A6%82%E7%8E%87)
- [03 CDF的凸组合仍为CDF的证明](/my-web/notes/obsidian/221d8beefa5c1b9f/#%E9%A2%98%E5%9E%8B03-cdf%E7%9A%84%E5%87%B8%E7%BB%84%E5%90%88%E4%BB%8D%E4%B8%BAcdf%E7%9A%84%E8%AF%81%E6%98%8E)
- [04 跳跃CDF反求离散质量](/my-web/notes/obsidian/221d8beefa5c1b9f/#%E9%A2%98%E5%9E%8B04-%E8%B7%B3%E8%B7%83cdf%E5%8F%8D%E6%B1%82%E7%A6%BB%E6%95%A3%E8%B4%A8%E9%87%8F)
- [05 均匀圆盘落点的半径分布](/my-web/notes/obsidian/221d8beefa5c1b9f/#%E9%A2%98%E5%9E%8B05-%E5%9D%87%E5%8C%80%E5%9C%86%E7%9B%98%E8%90%BD%E7%82%B9%E7%9A%84%E5%8D%8A%E5%BE%84%E5%88%86%E5%B8%83)

## 题型01 由0—1及三次投币分布律求阶梯CDF

**原课件页与配图**

![T17-p4](/my-web/notes-media/asset-ee730c7f227366bc.webp)

原页与续页：第4页 · 第10页。

**识别与列式路线**

1. 按取值排序逐段累加质量。
2. 每个跳点取右侧高度。
3. 再求区间与尾事件。

**容易卡住的地方：** 离散端点是否包含会改变概率。

**读懂依据：** [离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/) · [分布函数及右连续性](/my-web/notes/obsidian/89bcb92b5fa2ff2b/)。

## 题型02 分段CDF待定参数与区间概率

**原课件页与配图**

![T17-p16](/my-web/notes-media/asset-80faba231ff07dc8.webp)

原页与续页：第16页 · 第17页。

**识别与列式路线**

1. 依次用两端极限、右连续、单调性定参数。
2. 按目标端点使用F差。

**容易卡住的地方：** 不要把截图提取中错位的不等号直接当题意，原页可核对。

**读懂依据：** [分布函数及右连续性](/my-web/notes/obsidian/89bcb92b5fa2ff2b/)。

## 题型03 CDF的凸组合仍为CDF的证明

**原课件页与配图**

![T17-p18](/my-web/notes-media/asset-1cb90d26c43da601.webp)

原页与续页：第18页。

**识别与列式路线**

1. 分别验证单调不减、右连续及两端极限。
2. 非负权重与总和1各有对应作用。

**容易卡住的地方：** 只有数值落在0到1之间还不够。

**读懂依据：** [概率公理与基本性质](/my-web/notes/obsidian/b7c7668670cc1cc4/) · [分布函数及右连续性](/my-web/notes/obsidian/89bcb92b5fa2ff2b/)。

## 题型04 跳跃CDF反求离散质量

**原课件页与配图**

![T17-p20](/my-web/notes-media/asset-02ddf0edef198c1f.webp)

原页与续页：第20页。

**识别与列式路线**

1. 每个质量等于F(x)−F(x−)。
2. 用已知点质量与末端1定参数，再列全部非零质量。

**容易卡住的地方：** 点概率不是F(x)本身。

**读懂依据：** [离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/) · [分布函数及右连续性](/my-web/notes/obsidian/89bcb92b5fa2ff2b/)。

## 题型05 均匀圆盘落点的半径分布

**原课件页与配图**

![T17-p23](/my-web/notes-media/asset-a687931268c77ff6.webp)

原页与续页：第23页。

**识别与列式路线**

1. 事件X≤r对应同心小圆盘。
2. 面积比r²/R²给CDF，支撑外补0和1。

**容易卡住的地方：** 二维面积均匀不代表半径均匀。

**读懂依据：** [几何概型](/my-web/notes/obsidian/a4baa267f6b84d83/) · [分布函数及右连续性](/my-web/notes/obsidian/89bcb92b5fa2ff2b/)。

## 怎么继续练

这页按题型给出方法路线；需要逐题完整演算时，进入 [原题精解](/my-web/notes/obsidian/0ccc1ba647a82d72/) 或对应知识点的例题。拿原课件中的另一题，用同一流程独立写第一步，再核对原答案。
