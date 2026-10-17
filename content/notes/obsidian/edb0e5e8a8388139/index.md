---
title: T02 2-电路的瞬态分析（4学时）-2026更新(1) 题型
date: '2026-10-16T16:58:18.940302+00:00'
lastmod: '2026-10-16T16:58:18.940302+00:00'
draft: false
description: ''
tags: []
note_links:
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/19b122467f6cebf2/index.md
- notes/obsidian/29d0477b8a7ab3b3/index.md
- notes/obsidian/4deccae1762f21a1/index.md
- notes/obsidian/50aed8ea4d5c45b2/index.md
- notes/obsidian/87f1dce4c5d02a59/index.md
- notes/obsidian/90cba90d8e907b67/index.md
- notes/obsidian/9ed1c7c2e782ef18/index.md
- notes/obsidian/abd5e632e172ba01/index.md
- notes/obsidian/e36be8778d58d649/index.md
obsidian: true
note_course: 电路
---

# 2-电路的瞬态分析（4学时）-2026更新(1) · 题型整理

[学习地图](/my-web/notes/#notes-graph-heading) · [返回全部 PPT](/my-web/notes/obsidian/9ed1c7c2e782ef18/)

**原课件：** 2-电路的瞬态分析（4学时）-2026更新(1).pdf。以下页码均为 PDF 阅读器页码。

## 先找题型

- [01 换路瞬间与最终稳态的全部支路量](/my-web/notes/obsidian/edb0e5e8a8388139/#%E9%A2%98%E5%9E%8B01-%E6%8D%A2%E8%B7%AF%E7%9E%AC%E9%97%B4%E4%B8%8E%E6%9C%80%E7%BB%88%E7%A8%B3%E6%80%81%E7%9A%84%E5%85%A8%E9%83%A8%E6%94%AF%E8%B7%AF%E9%87%8F)
- [02 由微分方程求 RC 充电](/my-web/notes/obsidian/edb0e5e8a8388139/#%E9%A2%98%E5%9E%8B02-%E7%94%B1%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E6%B1%82-rc-%E5%85%85%E7%94%B5)
- [03 有初始电压的全响应与阈值时间](/my-web/notes/obsidian/edb0e5e8a8388139/#%E9%A2%98%E5%9E%8B03-%E6%9C%89%E5%88%9D%E5%A7%8B%E7%94%B5%E5%8E%8B%E7%9A%84%E5%85%A8%E5%93%8D%E5%BA%94%E4%B8%8E%E9%98%88%E5%80%BC%E6%97%B6%E9%97%B4)
- [04 从新电路求终值和时间常数](/my-web/notes/obsidian/edb0e5e8a8388139/#%E9%A2%98%E5%9E%8B04-%E4%BB%8E%E6%96%B0%E7%94%B5%E8%B7%AF%E6%B1%82%E7%BB%88%E5%80%BC%E5%92%8C%E6%97%B6%E9%97%B4%E5%B8%B8%E6%95%B0)
- [05 电容放电与三支路分流](/my-web/notes/obsidian/edb0e5e8a8388139/#%E9%A2%98%E5%9E%8B05-%E7%94%B5%E5%AE%B9%E6%94%BE%E7%94%B5%E4%B8%8E%E4%B8%89%E6%94%AF%E8%B7%AF%E5%88%86%E6%B5%81)
- [06 恒流源 RC 全响应与负电流](/my-web/notes/obsidian/edb0e5e8a8388139/#%E9%A2%98%E5%9E%8B06-%E6%81%92%E6%B5%81%E6%BA%90-rc-%E5%85%A8%E5%93%8D%E5%BA%94%E4%B8%8E%E8%B4%9F%E7%94%B5%E6%B5%81)
- [07 电源存在的换接与多电流响应](/my-web/notes/obsidian/edb0e5e8a8388139/#%E9%A2%98%E5%9E%8B07-%E7%94%B5%E6%BA%90%E5%AD%98%E5%9C%A8%E7%9A%84%E6%8D%A2%E6%8E%A5%E4%B8%8E%E5%A4%9A%E7%94%B5%E6%B5%81%E5%93%8D%E5%BA%94)

## 题型01 换路瞬间与最终稳态的全部支路量

**原课件页与配图**

![T02-p31](/my-web/notes-media/asset-d353c531779a5d87.webp)

原页与续页：第31页。

**识别与列式路线**

1. 画 0−、0+、∞ 三图。
2. 状态连续。
3. 其他初值用换路后的 KCL/KVL 求。

**容易卡住的地方：** 只有 uC、iL 常规连续，不是所有量都连续。

**读懂依据：** [电容的伏安关系与储能](/my-web/notes/obsidian/4deccae1762f21a1/) · [电感的伏安关系与储能](/my-web/notes/obsidian/19b122467f6cebf2/) · [换路定律与初始值](/my-web/notes/obsidian/50aed8ea4d5c45b2/)。

## 题型02 由微分方程求 RC 充电

**原课件页与配图**

![T02-p46](/my-web/notes-media/asset-7a67134db8ff3112.webp)

原页与续页：第46页。

**识别与列式路线**

1. KVL 加电容伏安关系得到一阶方程。
2. 先求常数特解，再求指数齐次解。
3. 用初值定系数。

**容易卡住的地方：** 这页主要是推导过程，不另编成一道人为原题。

**读懂依据：** [一阶电路三要素法](/my-web/notes/obsidian/90cba90d8e907b67/) · [RC充放电与全响应](/my-web/notes/obsidian/e36be8778d58d649/)。

## 题型03 有初始电压的全响应与阈值时间

**原课件页与配图**

![T02-p52](/my-web/notes-media/asset-1c5a56f4bdb34058.webp)

原页与续页：第52页。

**识别与列式路线**

1. 求 U0、U∞ 和 RC。
2. 用全响应求 iC(0+)。
3. 将目标电压代入，分离指数后取对数求时间。

**容易卡住的地方：** 原页算式存在正负方向易混之处；按图中关联方向独立求导核验。

**读懂依据：** [换路定律与初始值](/my-web/notes/obsidian/50aed8ea4d5c45b2/) · [RC充放电与全响应](/my-web/notes/obsidian/e36be8778d58d649/)。

## 题型04 从新电路求终值和时间常数

**原课件页与配图**

![T02-p59](/my-web/notes-media/asset-82d79c75edc855e1.webp)

原页与续页：第59页。

**识别与列式路线**

1. 终值保留实际源并取直流稳态。
2. 时间常数用新拓扑并置零独立源。
3. 分别使用 RC 或 L/R。

**容易卡住的地方：** 已断开的旧电源侧电阻不加入放电路径。

**读懂依据：** [戴维宁定理](/my-web/notes/obsidian/29d0477b8a7ab3b3/) · [一阶电路三要素法](/my-web/notes/obsidian/90cba90d8e907b67/) · [RL一阶响应](/my-web/notes/obsidian/abd5e632e172ba01/)。

## 题型05 电容放电与三支路分流

**原课件页与配图**

![T02-p63](/my-web/notes-media/asset-7f61d46427ccc04c.webp)

原页与续页：第63页。

**识别与列式路线**

1. 先求原稳态电容电压。
2. 新网络端口求等效电阻。
3. 由电容状态写总放电电流，再逐支路分流。

**容易卡住的地方：** 三个支路响应各有方向，不直接复制同一个幅值。

**读懂依据：** [一阶电路三要素法](/my-web/notes/obsidian/90cba90d8e907b67/) · [RC充放电与全响应](/my-web/notes/obsidian/e36be8778d58d649/)。

## 题型06 恒流源 RC 全响应与负电流

**原课件页与配图**

![T02-p68](/my-web/notes-media/asset-9c40aa720fd04bda.webp)

原页与续页：第68页。

**识别与列式路线**

1. 求初值54 V、终值18 V、时间常数4 ms。
2. 写电压，再求导得电容电流，除电阻得支路电流。

**容易卡住的地方：** 负电容电流表示放电供能；详解见 ED08。

**读懂依据：** [电容的伏安关系与储能](/my-web/notes/obsidian/4deccae1762f21a1/) · [一阶电路三要素法](/my-web/notes/obsidian/90cba90d8e907b67/) · [RC充放电与全响应](/my-web/notes/obsidian/e36be8778d58d649/)。

## 题型07 电源存在的换接与多电流响应

**原课件页与配图**

![T02-p72](/my-web/notes-media/asset-75ccd8e87763bfb4.webp)

原页与续页：第72页。

**识别与列式路线**

1. 先从原图求 uC(0−)。
2. 重新辨认闭合后的网络和各支路。
3. 用状态表达支路电流，再核验 KCL。

**容易卡住的地方：** 不能沿用换路前的串并联结构。

**读懂依据：** [基尔霍夫电流定律KCL](/my-web/notes/obsidian/87f1dce4c5d02a59/) · [换路定律与初始值](/my-web/notes/obsidian/50aed8ea4d5c45b2/) · [一阶电路三要素法](/my-web/notes/obsidian/90cba90d8e907b67/)。

## 怎么继续练

这页按题型给出方法路线；需要逐题完整演算时，进入 [原题精解](/my-web/notes/obsidian/0ccc1ba647a82d72/) 或对应知识点的例题。拿原课件中的另一题，用同一流程独立写第一步，再核对原答案。
