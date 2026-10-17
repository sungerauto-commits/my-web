---
title: EP04 半球面电势差：镜像补成完整球壳
date: '2026-10-16T11:41:12.673024+00:00'
lastmod: '2026-10-16T11:41:12.673024+00:00'
draft: false
description: ''
tags:
- 原题精解
- 大物
note_links:
- notes/obsidian/09dc45185b27d0e3/index.md
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/61c5fb0adfb7b15d/index.md
- notes/obsidian/a7515dd943226c39/index.md
- notes/obsidian/e069de2496b8452b/index.md
- notes/obsidian/f8d9b9949f706896/index.md
obsidian: true
note_course: 大学物理
---

# 半球面电势差：镜像补成完整球壳

## 原题与配图

![EP04-1](/my-web/notes-media/asset-cb2486e0c3fe68f4.png)

![EP04-2](/my-web/notes-media/asset-d84c4705e120345d.png)

**教材习题5-39，印刷第208页，附原图 · 综合**

半径 $R$ 的均匀带电半球面倒扣在 $Oxy$ 平面，面密度 $\sigma$。平面内 $A=(0,R/2)$，$B=(3R/2,0)$，求电势差 $U_{AB}$。

## 解题思路

半球面缺乏完整球对称，不能直接用高斯法求其场。但对赤道平面上的点，原半球面和镜像下半球面的电势贡献逐点相等。因此所求电势恰为同密度完整球壳电势的一半。

## 逐步解答

### 1. 证明“半势”关系

对每个上半球面积元 $(x',y',z')$，镜像面积元为 $(x',y',-z')$。观察点在 $z=0$，到二者距离相同，电荷也相同，所以 $dV_{upper}=dV_{lower}$。

$$
V_{hemisphere}=\frac12V_{full\ sphere}\quad(z=0).
$$

### 2. 写出完整球壳的势

完整球壳总电荷 $Q_f=4\pi R^2\sigma$。取无穷远为零：

$$
V_f(r)=\begin{cases}\dfrac{Q_f}{4\pi\varepsilon_0R}=\dfrac{\sigma R}{\varepsilon_0},&r\le R,\\\dfrac{Q_f}{4\pi\varepsilon_0r}=\dfrac{\sigma R^2}{\varepsilon_0r},&r\ge R.\end{cases}
$$

### 3. 分别识别 A 在球内、B 在球外

$$
V_A=\frac12\frac{\sigma R}{\varepsilon_0}=\frac{\sigma R}{2\varepsilon_0},
$$

$$
V_B=\frac12\frac{\sigma R^2}{\varepsilon_0(3R/2)}=\frac{\sigma R}{3\varepsilon_0}.
$$

### 4. 按定义相减

$$
\boxed{U_{AB}=V_A-V_B=\frac{\sigma R}{6\varepsilon_0}.}
$$

## 结果自检

正电荷时 $V_A>V_B$，$U_{AB}>0$。若将点移出赤道平面，“到镜像元等距”失效，就不能使用半势关系。

## 易错点

球内恒势是完整球壳的结论，不代表半球面内所有位置均为同一电势。这里的巧法只对赤道平面上的观察点成立。

## 对应知识点

[电场叠加与连续电荷积分](/my-web/notes/obsidian/f8d9b9949f706896/) · [高斯定理与对称性判断](/my-web/notes/obsidian/a7515dd943226c39/) · [球对称电荷的分区电场与电势](/my-web/notes/obsidian/61c5fb0adfb7b15d/) · [电势与电势叠加](/my-web/notes/obsidian/09dc45185b27d0e3/) · [静电力做功与电势能](/my-web/notes/obsidian/e069de2496b8452b/)

## 原始出处

《物理学》第七版上册 PDF第229页

原图从项目资料逐页截取；解题过程为本库重新推导。图片默认展开，点击图片可放大。

[返回原题题库](/my-web/notes/obsidian/0ccc1ba647a82d72/) · [课程入口](/my-web/notes/obsidian/43f6cacf0a44b408/)
