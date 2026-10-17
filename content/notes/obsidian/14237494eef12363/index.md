---
title: T16 2-2离散型随机变量review 题型
date: '2026-10-16T17:06:03.100348+00:00'
lastmod: '2026-10-16T17:06:03.100348+00:00'
draft: false
description: ''
tags: []
note_links:
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/0f5dc8ebf244204a/index.md
- notes/obsidian/1908780ea766a34a/index.md
- notes/obsidian/31e82cf4de0ca98b/index.md
- notes/obsidian/749b0e191a8c3ec0/index.md
- notes/obsidian/9ed1c7c2e782ef18/index.md
- notes/obsidian/9fa6b6113ecaf1aa/index.md
- notes/obsidian/b6cadfdd889e25b0/index.md
- notes/obsidian/c45a43c99adf4894/index.md
- notes/obsidian/cf5d3585e7466d15/index.md
- notes/obsidian/e753433a0de5fba5/index.md
- notes/obsidian/f90f2e4ddd7a9d01/index.md
obsidian: true
note_course: 概率论
---

# 2-2离散型随机变量review · 题型整理

[学习地图](/my-web/notes/#notes-graph-heading) · [返回全部 PPT](/my-web/notes/obsidian/9ed1c7c2e782ef18/)

**原课件：** 2-2离散型随机变量review.pdf。以下页码均为 PDF 阅读器页码。

## 先找题型

- [01 分布律合法性与归一化参数](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B01-%E5%88%86%E5%B8%83%E5%BE%8B%E5%90%88%E6%B3%95%E6%80%A7%E4%B8%8E%E5%BD%92%E4%B8%80%E5%8C%96%E5%8F%82%E6%95%B0)
- [02 无放回样本最大号码分布](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B02-%E6%97%A0%E6%94%BE%E5%9B%9E%E6%A0%B7%E6%9C%AC%E6%9C%80%E5%A4%A7%E5%8F%B7%E7%A0%81%E5%88%86%E5%B8%83)
- [03 二项恰好次数与尾概率](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B03-%E4%BA%8C%E9%A1%B9%E6%81%B0%E5%A5%BD%E6%AC%A1%E6%95%B0%E4%B8%8E%E5%B0%BE%E6%A6%82%E7%8E%87)
- [04 两个人命中次数的比较](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B04-%E4%B8%A4%E4%B8%AA%E4%BA%BA%E5%91%BD%E4%B8%AD%E6%AC%A1%E6%95%B0%E7%9A%84%E6%AF%94%E8%BE%83)
- [05 二项尾事件与最可能次数](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B05-%E4%BA%8C%E9%A1%B9%E5%B0%BE%E4%BA%8B%E4%BB%B6%E4%B8%8E%E6%9C%80%E5%8F%AF%E8%83%BD%E6%AC%A1%E6%95%B0)
- [06 稀少事故的泊松近似](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B06-%E7%A8%80%E5%B0%91%E4%BA%8B%E6%95%85%E7%9A%84%E6%B3%8A%E6%9D%BE%E8%BF%91%E4%BC%BC)
- [07 维修人员最少配置与合用比较](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B07-%E7%BB%B4%E4%BF%AE%E4%BA%BA%E5%91%98%E6%9C%80%E5%B0%91%E9%85%8D%E7%BD%AE%E4%B8%8E%E5%90%88%E7%94%A8%E6%AF%94%E8%BE%83)
- [08 由泊松点概率关系反求参数](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B08-%E7%94%B1%E6%B3%8A%E6%9D%BE%E7%82%B9%E6%A6%82%E7%8E%87%E5%85%B3%E7%B3%BB%E5%8F%8D%E6%B1%82%E5%8F%82%E6%95%B0)
- [09 首次正品：三种放回机制](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B09-%E9%A6%96%E6%AC%A1%E6%AD%A3%E5%93%81%E4%B8%89%E7%A7%8D%E6%94%BE%E5%9B%9E%E6%9C%BA%E5%88%B6)
- [10 单次抽检构造0—1分布](/my-web/notes/obsidian/14237494eef12363/#%E9%A2%98%E5%9E%8B10-%E5%8D%95%E6%AC%A1%E6%8A%BD%E6%A3%80%E6%9E%84%E9%80%A001%E5%88%86%E5%B8%83)

## 题型01 分布律合法性与归一化参数

**原课件页与配图**

![T16-p4](/my-web/notes-media/asset-1d5150ea772e0ccc.webp)

原页与续页：第4页 · 第5页。

**识别与列式路线**

1. 分别核验每项非负与总和1。
2. 用总和定常数后重新检查所有项。

**容易卡住的地方：** 归一化不能补救某项为负。

**读懂依据：** [离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/)。

## 题型02 无放回样本最大号码分布

**原课件页与配图**

![T16-p6](/my-web/notes-media/asset-b09523af3cb64bd5.webp)

原页与续页：第6页。

**识别与列式路线**

1. X=k时必须取到k，其余两号从小于k中取。
2. 确定k范围后列组合比。

**容易卡住的地方：** 最大值不是5个号码上的均匀变量。

**读懂依据：** [古典概型与组合计数](/my-web/notes/obsidian/cf5d3585e7466d15/) · [离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/)。

## 题型03 二项恰好次数与尾概率

**原课件页与配图**

![T16-p15](/my-web/notes-media/asset-84877e71dd7a008b.webp)

原页与续页：第15页 · 第18页。

**识别与列式路线**

1. 确定固定次数、独立和同p。
2. 列二项分布，再对至少/至多所对应整数求和。

**容易卡住的地方：** “至少8”包括8、9、10，不能漏端点。

**读懂依据：** [0—1分布与指示变量](/my-web/notes/obsidian/31e82cf4de0ca98b/) · [二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/)。

## 题型04 两个人命中次数的比较

**原课件页与配图**

![T16-p16](/my-web/notes-media/asset-4e3c2dca4f35fe02.webp)

原页与续页：第16页。

**识别与列式路线**

1. 各自定义X、Y并求二项律。
2. X=Y按相同k求和，X>Y按整数对求和。
3. 独立才可乘边缘概率。

**容易卡住的地方：** 不是把两人的命中率直接相减。

**读懂依据：** [二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/) · [事件独立与互斥的区别](/my-web/notes/obsidian/0f5dc8ebf244204a/)。

## 题型05 二项尾事件与最可能次数

**原课件页与配图**

![T16-p20](/my-web/notes-media/asset-a8a0c0384cfe4c98.webp)

原页与续页：第20页。

**识别与列式路线**

1. 先求尾概率。
2. 比较相邻质量 p(k+1)/p(k)，判断何处由增变减。
3. 处理(n+1)p为整数时的双众数。

**容易卡住的地方：** 均值np不是总能直接当众数，需取相邻整数并比较。

**读懂依据：** [二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/)。

## 题型06 稀少事故的泊松近似

**原课件页与配图**

![T16-p21](/my-web/notes-media/asset-575540d4903a143e.webp)

原页与续页：第21页 · 第25页。

**识别与列式路线**

1. 精确计数先定B(n,p)。
2. 近似参数λ=np。
3. 至少两次用1减0次和1次。

**容易卡住的地方：** 先保留精确模型，再给近似结果。

**读懂依据：** [泊松分布与计数参数](/my-web/notes/obsidian/9fa6b6113ecaf1aa/) · [二项到泊松的极限推导](/my-web/notes/obsidian/c45a43c99adf4894/)。

## 题型07 维修人员最少配置与合用比较

**原课件页与配图**

![T16-p31](/my-web/notes-media/asset-71cce918622567fa.webp)

![T16-p32](/my-web/notes-media/asset-3520209bd0692234.webp)

![T16-p33](/my-web/notes-media/asset-19125b22acb37122.webp)

原页与续页：第31页 · 第32页 · 第33页。

**识别与列式路线**

1. 把人员N变成故障计数阈值。
2. 求使CDF达到目标的最小整数。
3. 分组方案需各组同时可应付。

**容易卡住的地方：** 合用与分组的失效事件不同；ER02给80台方案精解。

**读懂依据：** [二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/) · [泊松分布与计数参数](/my-web/notes/obsidian/9fa6b6113ecaf1aa/) · [二项到泊松的极限推导](/my-web/notes/obsidian/c45a43c99adf4894/)。

## 题型08 由泊松点概率关系反求参数

**原课件页与配图**

![T16-p35](/my-web/notes-media/asset-d09e0ca13d5f884d.webp)

原页与续页：第35页。

**识别与列式路线**

1. 写出两个质量公式，将共同 e^−λ 消去。
2. 解λ并核验其为正，再求目标质量。

**容易卡住的地方：** 不能把不同k的阶乘省掉。

**读懂依据：** [泊松分布与计数参数](/my-web/notes/obsidian/9fa6b6113ecaf1aa/)。

## 题型09 首次正品：三种放回机制

**原课件页与配图**

![T16-p37](/my-web/notes-media/asset-905d0a87a7f0b162.webp)

原页与续页：第37页 · 第38页。

**识别与列式路线**

1. 分别写每次抽取前的正次品数量。
2. 固定概率放回才是几何。
3. 另两种按条件路径给停止律及有限支撑。

**容易卡住的地方：** 补回正品与把原品放回会改变后续概率。

**读懂依据：** [乘法公式与概率树](/my-web/notes/obsidian/e753433a0de5fba5/) · [几何分布与首次成功](/my-web/notes/obsidian/b6cadfdd889e25b0/)。

## 题型10 单次抽检构造0—1分布

**原课件页与配图**

![T16-p9](/my-web/notes-media/asset-5d45123011ad3c29.webp)

原页与续页：第9页。

**识别与列式路线**

1. 规定合格记1、不合格记0。
2. 200件中190件合格给P(X=1)=190/200=0.95，P(X=0)=0.05。
3. 列出支撑{0,1}并核验概率之和为1。

**容易卡住的地方：** 0和1是人为赋予事件的数值标签；换标签后分布律中的概率位置也要交换。

**读懂依据：** [随机变量是样本空间上的函数](/my-web/notes/obsidian/749b0e191a8c3ec0/) · [0—1分布与指示变量](/my-web/notes/obsidian/31e82cf4de0ca98b/)。

## 怎么继续练

这页按题型给出方法路线；需要逐题完整演算时，进入 [原题精解](/my-web/notes/obsidian/0ccc1ba647a82d72/) 或对应知识点的例题。拿原课件中的另一题，用同一流程独立写第一步，再核对原答案。
