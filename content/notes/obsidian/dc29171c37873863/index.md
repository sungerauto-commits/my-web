---
title: EP08 带介质球壳：位移场、电势与束缚电荷
date: '2026-10-16T11:41:17.269284+00:00'
lastmod: '2026-10-16T11:41:17.269284+00:00'
draft: false
description: ''
tags:
- 原题精解
- 大物
note_links:
- notes/obsidian/09dc45185b27d0e3/index.md
- notes/obsidian/0ccc1ba647a82d72/index.md
- notes/obsidian/43f6cacf0a44b408/index.md
- notes/obsidian/58d990316008085d/index.md
- notes/obsidian/61c5fb0adfb7b15d/index.md
- notes/obsidian/9038a67e0032fe4c/index.md
- notes/obsidian/a7515dd943226c39/index.md
- notes/obsidian/a7b196bda29841f1/index.md
obsidian: true
note_course: 大学物理
---

# 带介质球壳：位移场、电势与束缚电荷

## 原题与配图

![EP08-1](/my-web/notes-media/asset-c17dad32036be044.png)

![EP08-2](/my-web/notes-media/asset-34fe2837d4b7b75e.png)

**教材习题6-25，印刷第248页，附原图 · 挑战**

半径 $a=R=0.10\rm m$ 的导体球带电 $Q=1.0\times10^{-8}\rm C$。球外包裹厚 $d=0.10\rm m$、$\varepsilon_r=5.0$ 的均匀介质，外部为空气，令 $b=a+d=0.20\rm m$。求：（1）距球心 5、15、25 cm 处的 $\mathbf D,\mathbf E$；（2）这些点的电势；（3）极化电荷面密度。

## 解题思路

介质高斯定理只包围自由电荷，先求 $D$ 再按各区介电常数求 $E$。电势必须跨区积分，不能把局部 $E\propto1/r^2$ 直接套成单一介质的 $kQ/(\varepsilon_r r)$。极化面电荷则由 $\sigma_b=\mathbf P\cdot\mathbf n$ 判断正负。

## 逐步解答

### 1. 分区求 D 与 E

静电导体内 $E=0$；采用金属内宏观场 $D=0$ 的通常约定。介质及空气中，自由电荷高斯定理给出

$$
D_r=\frac{Q}{4\pi r^2}\quad(r>a).
$$

$$
E_r=\begin{cases}0,&r<a,\\\dfrac{Q}{4\pi\varepsilon_0\varepsilon_r r^2},&a<r<b,\\\dfrac{Q}{4\pi\varepsilon_0r^2},&r>b.\end{cases}
$$

正 $Q$ 时方向均径向向外。数值用 $k_e\approx9.0\times10^9$：

| 距离 | $D_r$（$\rm C/m^2$） | $E_r$（$\rm V/m$） |
| --- | --- | --- |
| 0.05 m | 0 | 0 |
| 0.15 m | $3.537\times10^{-8}$ | 800 |
| 0.25 m | $1.273\times10^{-8}$ | 1440 |

### 2. 从无穷远逐层积分求势

取 $V(\infty)=0$，则

$$
V(r)=\begin{cases}k_eQ\left[\dfrac1{\varepsilon_r}\left(\dfrac1a-\dfrac1b\right)+\dfrac1b\right],&r\le a,\\k_eQ\left[\dfrac1{\varepsilon_r}\left(\dfrac1r-\dfrac1b\right)+\dfrac1b\right],&a<r<b,\\\dfrac{k_eQ}{r},&r\ge b.\end{cases}
$$

因此

$$
\boxed{V(0.05)=540\rm V,\quad V(0.15)=480\rm V,\quad V(0.25)=360\rm V.}
$$

导体内部的 $E=0$ 只代表势不变，并不代表势为 0。

### 3. 求极化强度及两界面的束缚电荷

介质中

$$
\mathbf P=\varepsilon_0(\varepsilon_r-1)\mathbf E=\frac{\varepsilon_r-1}{\varepsilon_r}\frac{Q}{4\pi r^2}\hat{\mathbf r}.
$$

内表面的介质外法线为 $-\hat{\mathbf r}$，外表面为 $+\hat{\mathbf r}$，所以

$$
\boxed{\sigma_b(a)=-\frac45\frac Q{4\pi a^2}\approx-6.366\times10^{-8}\rm C/m^2,}
$$

$$
\boxed{\sigma_b(b)=+\frac45\frac Q{4\pi b^2}\approx+1.592\times10^{-8}\rm C/m^2.}
$$

介质体内 $\rho_b=-\nabla\cdot\mathbf P=0$；两球面束缚总电荷分别为 $-0.8Q$、$+0.8Q$，总和为 0。

## 结果自检

$V$ 在 $a,b$ 处连续；$-dV/dr$ 等于对应分区的 $E_r$。$D_r$ 跨介质外表面连续，因为那里没有自由面电荷；$E_r$ 会因介电常数改变而跳变。

## 易错点

内表面负号来自“介质体的外法线朝内”。不要以为越远电场必然越弱：15 cm 在高介电常数层，25 cm 在空气，跨界后场强可增大。

## 对应知识点

[高斯定理与对称性判断](/my-web/notes/obsidian/a7515dd943226c39/) · [球对称电荷的分区电场与电势](/my-web/notes/obsidian/61c5fb0adfb7b15d/) · [电势与电势叠加](/my-web/notes/obsidian/09dc45185b27d0e3/) · [导体静电平衡](/my-web/notes/obsidian/58d990316008085d/) · [电介质极化与极化强度](/my-web/notes/obsidian/9038a67e0032fe4c/) · [电位移D与介质高斯定理](/my-web/notes/obsidian/a7b196bda29841f1/)

## 原始出处

《物理学》第七版上册 PDF第269页

原图从项目资料逐页截取；解题过程为本库重新推导。图片默认展开，点击图片可放大。

[返回原题题库](/my-web/notes/obsidian/0ccc1ba647a82d72/) · [课程入口](/my-web/notes/obsidian/43f6cacf0a44b408/)
