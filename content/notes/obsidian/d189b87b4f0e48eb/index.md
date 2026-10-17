---
title: EP02 无限带电平面挖圆孔：补偿法与轴线积分
date: '2026-10-16T11:41:11.338783+00:00'
lastmod: '2026-10-16T11:41:11.338783+00:00'
draft: false
description: ''
tags:
- 原题精解
- 大物
note_links:
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/148759da30c3ab16/index.md
- notes/obsidian/3264ea7c2054acbc/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/581bfd027b33ab9b/index.md
- notes/obsidian/a7515dd943226c39/index.md
- notes/obsidian/e808e3a51757b08c/index.md
- notes/obsidian/f8d9b9949f706896/index.md
obsidian: true
note_course: 大学物理
---

# 无限带电平面挖圆孔：补偿法与轴线积分

## 原题与配图

![EP02-1](/my-web/notes-media/asset-5204e827f2d92435.png)

![EP02-2](/my-web/notes-media/asset-52badbd7cb51819e.png)

**教材习题5-19，印刷第205页，附原图 · 综合**

无限大均匀带电薄平板面密度 $\sigma$，中央有半径 $r$ 的圆孔。求孔轴线上与平板相距 $x$ 的点 $P$ 的电场。

## 解题思路

真实分布等于“完整无限平面”减去“同密度圆盘”。圆孔破坏了平面对称性，直接用简单柱形高斯面不能从通量唯一确定局部场。先用完整平面与圆盘这两个已知模型叠加。

## 逐步解答

### 1. 选择方向与完整平面场

取垂直平面的坐标轴指向 $P$，先讨论 $x>0,\sigma>0$。

$$
E_{plane}=\frac{\sigma}{2\varepsilon_0}.
$$

### 2. 用同心圆环推导圆盘轴线场

令圆环半径 $s$、电荷 $dq=2\pi\sigma s\,ds$，横向分量互相抵消。

$$
dE_x=\frac1{4\pi\varepsilon_0}\frac{x\,dq}{(x^2+s^2)^{3/2}}.
$$

$$
E_{disk}=\frac{\sigma x}{2\varepsilon_0}\int_0^r\frac{s\,ds}{(x^2+s^2)^{3/2}}=\frac{\sigma}{2\varepsilon_0}\left(1-\frac{x}{\sqrt{x^2+r^2}}\right).
$$

### 3. 相减得到圆孔场

$$
\boxed{E_x=E_{plane}-E_{disk}=\frac{\sigma}{2\varepsilon_0}\frac{x}{\sqrt{x^2+r^2}}.}
$$

对带符号的轴坐标 $x$，上述表达式也自然适用；电场关于孔平面反向，$x=0$ 孔中心场为 0。

## 结果自检

$x\to0$ 得 0；$x\gg r$ 恢复无限平面场；$r\to0$ 且 $x\ne0$ 时孔的影响消失。

## 易错点

减去的是电荷分布与对应的矢量场，不是减去一个几何面积比例。孔轴线场随 $x$ 改变，不能照搬完整平面的常场结论。

## 对应知识点

[电场叠加与连续电荷积分](/my-web/notes/obsidian/f8d9b9949f706896/) · [均匀带电圆环轴线场强](/my-web/notes/obsidian/581bfd027b33ab9b/) · [带电圆盘与圆环分割](/my-web/notes/obsidian/148759da30c3ab16/) · [高斯定理与对称性判断](/my-web/notes/obsidian/a7515dd943226c39/) · [无限大平面与多平面叠加](/my-web/notes/obsidian/e808e3a51757b08c/) · [补偿法与挖孔电荷分布](/my-web/notes/obsidian/3264ea7c2054acbc/)

## 原始出处

《物理学》第七版上册 PDF第226页

原图从项目资料逐页截取；解题过程为本库重新推导。图片默认展开，点击图片可放大。

[返回原题题库](/my-web/notes/obsidian/0ccc1ba647a82d72/) · [课程入口](/my-web/notes/obsidian/43f6cacf0a44b408/)
