---
title: ED08 恒流源RC换路：负电容电流的含义
date: '2026-10-16T11:41:10.177927+00:00'
lastmod: '2026-10-16T11:41:10.177927+00:00'
draft: false
description: ''
tags:
- 原题精解
- 电路
note_links:
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/4deccae1762f21a1/index.md
- notes/obsidian/50aed8ea4d5c45b2/index.md
- notes/obsidian/87f1dce4c5d02a59/index.md
- notes/obsidian/90cba90d8e907b67/index.md
- notes/obsidian/e36be8778d58d649/index.md
obsidian: true
note_course: 电路
---

# 恒流源RC换路：负电容电流的含义

## 原题与配图

![ED08-1](/my-web/notes-media/asset-762e3fc5dd448b7a.webp)

![ED08-2](/my-web/notes-media/asset-b6bd3d02eb564b9d.webp)

**电路瞬态分析 PPT 第68页，应用举例练习1 · 进阶**

9 mA 恒流源与 6 kΩ、电容 2 μF 并联，开关合上后另接入 3 kΩ 支路。合闸前已稳态，$t=0$ 合闸。求 $u_C,i_C,i_2$。电容上正下负，$i_C,i_2$ 都向下。

## 解题思路

用初值、终值、时间常数先确定唯一的电容电压，再由元件关系得到两条电流。电压在下降，按关联参考方向的电容电流自然为负，不代表计算错误。

## 逐步解答

### 1. 初值与终值

换路前电容开路：$u_C(0^-)=9\rm mA\times6k\Omega=54\rm V$，所以 $u_C(0^+)=54\rm V$。

换路后直流稳态等效电阻 $6k\parallel3k=2k\Omega$，因此 $u_C(\infty)=9\rm mA\times2k\Omega=18\rm V$。

### 2. 时间常数

求电容所见电阻时，将独立电流源置零，即开路：

$$
\tau=(6k\parallel3k)\times2\mu\rm F=0.004s.
$$

### 3. 电压全响应

$$
\boxed{u_C(t)=18+(54-18)e^{-t/0.004}=18+36e^{-250t}\rm V.}
$$

### 4. 用定义得到电流

$$
\boxed{i_C(t)=C\frac{du_C}{dt}=-18e^{-250t}\rm mA,}
$$

$$
\boxed{i_2(t)=u_C/3k\Omega=6+12e^{-250t}\rm mA.}
$$

电容电流实际向上，释放此前储存的能量；开关刚合上，3 kΩ 支路电流 18 mA，超过电流源的 9 mA，差额由电容提供。

## 结果自检

6 kΩ 中电流为 $3+6e^{-250t}\rm mA$。三条向下电流相加：$-18e^{-250t}+6+12e^{-250t}+3+6e^{-250t}=9\rm mA$，任意时刻满足 KCL。

## 易错点

不能把独立电流源置零成短路。不能把 $i_C$ 的负号删掉；这个负号解释了换路瞬间大电阻电流从哪里得到补充。

## 对应知识点

[基尔霍夫电流定律KCL](/my-web/notes/obsidian/87f1dce4c5d02a59/) · [电容的伏安关系与储能](/my-web/notes/obsidian/4deccae1762f21a1/) · [换路定律与初始值](/my-web/notes/obsidian/50aed8ea4d5c45b2/) · [一阶电路三要素法](/my-web/notes/obsidian/90cba90d8e907b67/) · [RC充放电与全响应](/my-web/notes/obsidian/e36be8778d58d649/)

## 原始出处

电路瞬态分析 PPT PDF第68页

原图从项目资料逐页截取；解题过程为本库重新推导。图片默认展开，点击图片可放大。

[返回原题题库](/my-web/notes/obsidian/0ccc1ba647a82d72/) · [课程入口](/my-web/notes/obsidian/115436d99c2c2ddd/)
