---
title: EP01 非均匀带电球：高斯法与球壳叠加
date: '2026-10-16T11:41:11.280550+00:00'
lastmod: '2026-10-16T11:41:11.280550+00:00'
draft: false
description: ''
tags:
- 原题精解
- 大物
note_links:
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/61c5fb0adfb7b15d/index.md
- notes/obsidian/a7515dd943226c39/index.md
- notes/obsidian/f8d9b9949f706896/index.md
obsidian: true
note_course: 大学物理
---

# 非均匀带电球：高斯法与球壳叠加

## 原题与配图

![EP01-1](/my-web/notes-media/asset-12edbe50246021e1.png)

**教材习题5-18，印刷第205页 · 综合**

半径 $R$ 的球体内电荷球对称分布，$\rho=kr$（$0\le r\le R$），球外 $\rho=0$。$k$ 是常量。分别用高斯定理和电场叠加原理求 $E$ 与 $r$ 的关系。

## 解题思路

球对称允许高斯面上场强提出积分，但包围电荷要对变密度积分。叠加法则把实体球分解为薄球壳，使用球壳内场为零、外场等效为球心点电荷的结果。为避免与库仑常量混淆，下文将原题 $k$ 记作 $\kappa$。

## 逐步解答

### 1. 积分得到包围电荷

半径 $s$、厚度 $ds$ 的球壳电荷为

$$
dq=\rho(s)4\pi s^2ds=4\pi\kappa s^3ds.
$$

因此 $r\le R$ 时，

$$
Q_{enc}(r)=4\pi\kappa\int_0^r s^3ds=\pi\kappa r^4.
$$

总电荷为 $Q=\pi\kappa R^4$。

### 2. 高斯定理求内外场

$$
4\pi r^2E_r=Q_{enc}/\varepsilon_0.
$$

$$
\boxed{E_r(r)=\begin{cases}\dfrac{\kappa r^2}{4\varepsilon_0},&0\le r\le R,\\\dfrac{\kappa R^4}{4\varepsilon_0 r^2},&r>R.\end{cases}}
$$

这里 $E_r$ 是径向分量，$\kappa>0$ 时向外；若为负则方向向内，场强大小取绝对值。

### 3. 独立用球壳叠加

观察点在 $r<R$：$s>r$ 的球壳不贡献内部场，$s<r$ 的球壳视为球心点电荷。

$$
E_r(r)=\int_0^r\frac{dq}{4\pi\varepsilon_0r^2}=\frac{\kappa}{\varepsilon_0r^2}\int_0^r s^3ds=\frac{\kappa r^2}{4\varepsilon_0}.
$$

观察点在球外，则积分上限改为 $R$，得到外场表达式。

## 结果自检

中心场为 0；$r=R$ 两式均为 $\kappa R^2/(4\varepsilon_0)$，边界连续。$\kappa$ 单位为 $\rm C/m^4$，结果单位为 $\rm N/C$。

## 易错点

不能把 $Q_{enc}$ 写成 $\rho(r)\times4\pi r^3/3$；密度不是常数。外层球壳场为零，只在观察点处于壳内时成立。

## 对应知识点

[电场叠加与连续电荷积分](/my-web/notes/obsidian/f8d9b9949f706896/) · [高斯定理与对称性判断](/my-web/notes/obsidian/a7515dd943226c39/) · [球对称电荷的分区电场与电势](/my-web/notes/obsidian/61c5fb0adfb7b15d/)

## 原始出处

《物理学》第七版上册 PDF第226页

原图从项目资料逐页截取；解题过程为本库重新推导。图片默认展开，点击图片可放大。

[返回原题题库](/my-web/notes/obsidian/0ccc1ba647a82d72/) · [课程入口](/my-web/notes/obsidian/43f6cacf0a44b408/)
