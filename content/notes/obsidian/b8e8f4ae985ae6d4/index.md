---
title: T19 2-5随机变量的函数的分布review 题型
date: '2026-10-16T16:58:18.953106+00:00'
lastmod: '2026-10-16T16:58:18.953106+00:00'
draft: false
description: ''
tags: []
note_links:
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/1a2adbe54fd640b8/index.md
- notes/obsidian/29f9bf39693ad5be/index.md
- notes/obsidian/51e9e4eba3515a19/index.md
- notes/obsidian/8bf43a3c44d5d61d/index.md
- notes/obsidian/9ed1c7c2e782ef18/index.md
- notes/obsidian/aecbddcbdc38f474/index.md
- notes/obsidian/bea362af3f9ef604/index.md
- notes/obsidian/f90f2e4ddd7a9d01/index.md
obsidian: true
note_course: 概率论
---

# 2-5随机变量的函数的分布review · 题型整理

[学习地图](/my-web/notes/#notes-graph-heading) · [返回全部 PPT](/my-web/notes/obsidian/9ed1c7c2e782ef18/)

**原课件：** 2-5随机变量的函数的分布review.pdf。以下页码均为 PDF 阅读器页码。

## 先找题型

- [01 离散线性与平方变换合并同值](/my-web/notes/obsidian/b8e8f4ae985ae6d4/#%E9%A2%98%E5%9E%8B01-%E7%A6%BB%E6%95%A3%E7%BA%BF%E6%80%A7%E4%B8%8E%E5%B9%B3%E6%96%B9%E5%8F%98%E6%8D%A2%E5%90%88%E5%B9%B6%E5%90%8C%E5%80%BC)
- [02 指数和线性单调变换密度](/my-web/notes/obsidian/b8e8f4ae985ae6d4/#%E9%A2%98%E5%9E%8B02-%E6%8C%87%E6%95%B0%E5%92%8C%E7%BA%BF%E6%80%A7%E5%8D%95%E8%B0%83%E5%8F%98%E6%8D%A2%E5%AF%86%E5%BA%A6)
- [03 正态平方与多分支非单调变换](/my-web/notes/obsidian/b8e8f4ae985ae6d4/#%E9%A2%98%E5%9E%8B03-%E6%AD%A3%E6%80%81%E5%B9%B3%E6%96%B9%E4%B8%8E%E5%A4%9A%E5%88%86%E6%94%AF%E9%9D%9E%E5%8D%95%E8%B0%83%E5%8F%98%E6%8D%A2)
- [04 正态尺寸映射为离散利润](/my-web/notes/obsidian/b8e8f4ae985ae6d4/#%E9%A2%98%E5%9E%8B04-%E6%AD%A3%E6%80%81%E5%B0%BA%E5%AF%B8%E6%98%A0%E5%B0%84%E4%B8%BA%E7%A6%BB%E6%95%A3%E5%88%A9%E6%B6%A6)
- [05 支撑只在负半轴的平方与线性变换](/my-web/notes/obsidian/b8e8f4ae985ae6d4/#%E9%A2%98%E5%9E%8B05-%E6%94%AF%E6%92%91%E5%8F%AA%E5%9C%A8%E8%B4%9F%E5%8D%8A%E8%BD%B4%E7%9A%84%E5%B9%B3%E6%96%B9%E4%B8%8E%E7%BA%BF%E6%80%A7%E5%8F%98%E6%8D%A2)
- [06 无限离散分布的奇偶、倍数和尾事件](/my-web/notes/obsidian/b8e8f4ae985ae6d4/#%E9%A2%98%E5%9E%8B06-%E6%97%A0%E9%99%90%E7%A6%BB%E6%95%A3%E5%88%86%E5%B8%83%E7%9A%84%E5%A5%87%E5%81%B6%E5%80%8D%E6%95%B0%E5%92%8C%E5%B0%BE%E4%BA%8B%E4%BB%B6)
- [07 正态变量仿射变换仍正态](/my-web/notes/obsidian/b8e8f4ae985ae6d4/#%E9%A2%98%E5%9E%8B07-%E6%AD%A3%E6%80%81%E5%8F%98%E9%87%8F%E4%BB%BF%E5%B0%84%E5%8F%98%E6%8D%A2%E4%BB%8D%E6%AD%A3%E6%80%81)

## 题型01 离散线性与平方变换合并同值

**原课件页与配图**

![T19-p5](/my-web/notes-media/asset-1899ec6bf5649988.webp)

原页与续页：第5页 · 第6页 · 第9页。

**识别与列式路线**

1. 逐个旧值代入新函数。
2. 对重复的新值合并概率。
3. 重新排序并核验总和1。

**容易卡住的地方：** 平方后正负原值可能映到同一个值。

**读懂依据：** [离散随机变量函数的分布](/my-web/notes/obsidian/aecbddcbdc38f474/)。

## 题型02 指数和线性单调变换密度

**原课件页与配图**

![T19-p11](/my-web/notes-media/asset-a498aacf4dc7f012.webp)

原页与续页：第11页 · 第13页 · 第16页 · 第18页 · 第20页 · 第36页。

**识别与列式路线**

1. 先求输出支撑。
2. 解反函数，再乘导数绝对值。
3. 也可先用CDF原像法再求导。

**容易卡住的地方：** 线性系数负时不等号反向，密度仍非负。

**读懂依据：** [函数分布的分布函数法](/my-web/notes/obsidian/1a2adbe54fd640b8/) · [单调变换密度与绝对值因子](/my-web/notes/obsidian/8bf43a3c44d5d61d/)。

## 题型03 正态平方与多分支非单调变换

**原课件页与配图**

![T19-p24](/my-web/notes-media/asset-bfb5f54cecd102ee.webp)

原页与续页：第24页 · 第28页。

**识别与列式路线**

1. y≤0先补CDF为0。
2. y>0原像是[−√y,√y]。
3. 两支求和不能漏掉负根。

**容易卡住的地方：** 两支只有在原密度非零且满足分段范围时才贡献。

**读懂依据：** [函数分布的分布函数法](/my-web/notes/obsidian/1a2adbe54fd640b8/) · [非单调变换与多分支求和](/my-web/notes/obsidian/29f9bf39693ad5be/)。

## 题型04 正态尺寸映射为离散利润

**原课件页与配图**

![T19-p32](/my-web/notes-media/asset-8862752d26baaea5.webp)

原页与续页：第32页 · 第33页。

**识别与列式路线**

1. 把每个利润值对应的尺寸区间求清楚。
2. 对正态区间标准化。
3. 列三个离散概率，完整精解见ER10。

**容易卡住的地方：** 连续输入不保证连续输出，g不连续也不是判断离散的充要条件。

**读懂依据：** [正态标准化与分位数](/my-web/notes/obsidian/51e9e4eba3515a19/) · [离散随机变量函数的分布](/my-web/notes/obsidian/aecbddcbdc38f474/)。

## 题型05 支撑只在负半轴的平方与线性变换

**原课件页与配图**

![T19-p38](/my-web/notes-media/asset-904eb9e68e3c1d18.webp)

原页与续页：第38页 · 第39页 · 第40页。

**识别与列式路线**

1. 先按原支撑判断合法反函数。
2. 平方只取负根分支，线性变换按映射确定输出范围。

**容易卡住的地方：** 不是所有平方变换都有两个实际贡献分支。

**读懂依据：** [函数分布的分布函数法](/my-web/notes/obsidian/1a2adbe54fd640b8/) · [单调变换密度与绝对值因子](/my-web/notes/obsidian/8bf43a3c44d5d61d/) · [非单调变换与多分支求和](/my-web/notes/obsidian/29f9bf39693ad5be/)。

## 题型06 无限离散分布的奇偶、倍数和尾事件

**原课件页与配图**

![T19-p43](/my-web/notes-media/asset-2f5c3147a11c1abc.webp)

原页与续页：第43页。

**识别与列式路线**

1. 将符合条件的k写成2m、3m等序列。
2. 利用等比级数求和。
3. 尾事件按起始整数计数。

**容易卡住的地方：** 倍数事件的级数首项与公比都要随所选子序列改变。

**读懂依据：** [离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/) · [离散随机变量函数的分布](/my-web/notes/obsidian/aecbddcbdc38f474/)。

## 题型07 正态变量仿射变换仍正态

**原课件页与配图**

![T19-p41](/my-web/notes-media/asset-dbbb630efb3a794a.webp)

原页与续页：第41页 · 第42页。

**识别与列式路线**

1. 对Y=aX+b用反函数密度公式，提取新均值aμ+b、新方差a²σ²。
2. a≠0时绝对值因子不可少。

**容易卡住的地方：** 新标准差是|a|σ；a=0时是退化分布，不是正方差正态。

**读懂依据：** [正态分布的参数与形状](/my-web/notes/obsidian/bea362af3f9ef604/) · [单调变换密度与绝对值因子](/my-web/notes/obsidian/8bf43a3c44d5d61d/)。

## 怎么继续练

这页按题型给出方法路线；需要逐题完整演算时，进入 [原题精解](/my-web/notes/obsidian/0ccc1ba647a82d72/) 或对应知识点的例题。拿原课件中的另一题，用同一流程独立写第一步，再核对原答案。
