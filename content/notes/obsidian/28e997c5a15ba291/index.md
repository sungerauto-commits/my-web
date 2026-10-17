---
title: D21 RLC串联与相量图
date: '2026-10-16T16:50:33.999038+00:00'
lastmod: '2026-10-16T16:50:33.999038+00:00'
draft: false
description: ''
tags:
- 电路
- 知识点
note_links:
- notes/obsidian/115436d99c2c2ddd/index.md
- notes/obsidian/1522323228def87d/index.md
- notes/obsidian/2ddfbd4ee7f83581/index.md
- notes/obsidian/3ab140eab2134944/index.md
- notes/obsidian/4e19b59e90ddbc69/index.md
- notes/obsidian/5f47f9e9111db566/index.md
- notes/obsidian/e8ca477daa3b2118/index.md
- notes/obsidian/f022f03e0999976d/index.md
obsidian: true
note_course: 电路
---

# RLC串联与相量图

> [!tip] 做题入口
> 串联用同一电流，电压按相量相加。

## 详细讲解：从理解到列式

### 图解：相量三角形

![相量三角形](/my-web/notes-media/asset-8f8cc99feca3d765.svg)

先把有效值放到相量方向上，再用复数加法或直角三角形。 图为本库补充示意，不替代原题中的几何与方向。

### 用共同电流把相量图画出来

串联电路各元件电流相同，取 $\dot I$ 沿实轴，则 $\dot U_R=RI$ 向右，$\dot U_L=jX_LI$ 向上，$\dot U_C=-jX_CI$ 向下。于是

$$
\dot U=I[R+j(X_L-X_C)],\quad |Z|=\sqrt{R^2+(X_L-X_C)^2}.
$$

总电压幅值是矢量和的模，不是 $U_R+U_L+U_C$ 的算术和。相角 $\varphi=\operatorname{atan2}(X_L-X_C,R)$，电流相对电压的相角为 $-\varphi$。

### 判性质、算数值、再回到图

先计算净电抗 $X=X_L-X_C$。$X>0$ 为感性、电流滞后；$X<0$ 为容性、电流超前；$X=0$ 总体呈电阻性。再用 $I=U/|Z|$ 求幅值，最后用各元件阻抗恢复电压。

即使总电压不大，$U_L$ 和 $U_C$ 也可能分别很大而互相抵消。不能因为串联就断言每个元件有效电压都小于电源。核验时在复平面上加总，而不是只检查幅值的算术和。

### 学习顺序

先读：[基尔霍夫电压定律KVL](/my-web/notes/obsidian/e8ca477daa3b2118/)、[RLC元件复阻抗](/my-web/notes/obsidian/3ab140eab2134944/)。

再用到：[串联谐振](/my-web/notes/obsidian/5f47f9e9111db566/)。

[在学习地图中定位本节](/my-web/notes/?map=D21#notes-graph-heading)

## 概念与适用条件

串联 RLC：$Z=R+j(X_L-X_C)$，$\underline I=\underline U/Z$。

$$
|Z|=\sqrt{R^2+(X_L-X_C)^2},\qquad\varphi=\arg Z.
$$

$X_L>X_C$ 为感性，电压超前电流；$X_L<X_C$ 为容性，电流超前电压。

## 推导

由相量 KVL，$\underline U=\underline U_R+\underline U_L+\underline U_C=\underline I[R+j(X_L-X_C)]$。选电流为横轴，$U_R$ 向右、$U_L$ 向上、$U_C$ 向下。总电压是这三个向量的和。

## 解题步骤

1. 全部元件换为复阻抗，求总 $Z$。
2. 复数相除求电流，先保留相位。
3. 各电压用 $\underline U_k=Z_k\underline I$。
4. 相量相加复核 KVL；不要用有效值算术相加。

## 补充示例｜容性串联电路

**题目：** $\underline U=100\angle0^\circ$ V，$R=6\Omega,X_L=2\Omega,X_C=10\Omega$。

1. $Z=6-j8=10\angle(-53.13^\circ)\Omega$。
2. $\underline I=10\angle53.13^\circ$ A，即电流超前电压53.13°。
3. 以电流为参考时，$\underline U_R=60$、$\underline U_L=j20$、$\underline U_C=-j100$ V。
4. 和为 $60-j80$ V，其模100V、相对电流角−53.13°，一致。这里参考轴旋转了，不能把这些量与原绝对相位直接混用。

## 易错与自检

阻抗三角形的斜边是 $|Z|$，不是复数 $Z$。电容或电感上的电压可能超过电源电压，仍满足相量 KVL。

## 闭卷回想

为何串联电路中 $U_L+U_C$ 通常不等于两者电压有效值的算术和？

## 资料来源与原图

正文中的“课件原题/笔记模型”有对应来源；“补充示例/补充推导”是为解释方法独立编写，数值不冒充原题答案。

- [课堂笔记图12 · IMG20261015232043](/my-web/notes-media/asset-d601fa22fe06aaa2.webp)。
- [课堂笔记图13 · IMG20261015232055](/my-web/notes-media/asset-b6de1ece95449993.webp)。
- [课堂笔记图14 · IMG20261015232059](/my-web/notes-media/asset-8a3cd9afd34161ec.webp)。

> [!example]- 展开查看手写原图
> ![IMG20261015232043](/my-web/notes-media/asset-d601fa22fe06aaa2.webp)

## 关联与返回

[基尔霍夫电压定律KVL](/my-web/notes/obsidian/e8ca477daa3b2118/)、[相量与复数运算](/my-web/notes/obsidian/1522323228def87d/)、[RLC元件复阻抗](/my-web/notes/obsidian/3ab140eab2134944/)、[交流功率与功率因数](/my-web/notes/obsidian/f022f03e0999976d/)、[串联谐振](/my-web/notes/obsidian/5f47f9e9111db566/)

[返回电路入口](/my-web/notes/obsidian/115436d99c2c2ddd/) · [复习首页](/my-web/notes/#notes-graph-heading)

## 进阶原题

- [日光灯镇流器反求与功率因数补偿](/my-web/notes/obsidian/4e19b59e90ddbc69/) · 综合
- [从复电压反求两个串联元件](/my-web/notes/obsidian/2ddfbd4ee7f83581/) · 进阶
