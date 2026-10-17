---
title: 电路入口
date: '2026-10-16T16:57:35.541126+00:00'
lastmod: '2026-10-16T16:57:35.541126+00:00'
draft: false
description: ''
tags: []
note_links:
- notes/obsidian/1522323228def87d/index.md
- notes/obsidian/15aec57c6df1f613/index.md
- notes/obsidian/19b122467f6cebf2/index.md
- notes/obsidian/1b7851796d5b3152/index.md
- notes/obsidian/28e997c5a15ba291/index.md
- notes/obsidian/29d0477b8a7ab3b3/index.md
- notes/obsidian/29f66ad91509ead0/index.md
- notes/obsidian/2ddfbd4ee7f83581/index.md
- notes/obsidian/3502c3003a7fe1bb/index.md
- notes/obsidian/3ab140eab2134944/index.md
- notes/obsidian/44b18b6111927f4a/index.md
- notes/obsidian/48f4acf6a44a144b/index.md
- notes/obsidian/4deccae1762f21a1/index.md
- notes/obsidian/4e19b59e90ddbc69/index.md
- notes/obsidian/50aed8ea4d5c45b2/index.md
- notes/obsidian/53a8e7a42b0b67fa/index.md
- notes/obsidian/5f47f9e9111db566/index.md
- notes/obsidian/74b4cec86c01df5d/index.md
- notes/obsidian/7de8d96e94f22918/index.md
- notes/obsidian/87f1dce4c5d02a59/index.md
- notes/obsidian/90cba90d8e907b67/index.md
- notes/obsidian/98d7b871642b2259/index.md
- notes/obsidian/9ed1c7c2e782ef18/index.md
- notes/obsidian/abd5e632e172ba01/index.md
- notes/obsidian/b1996e24533bb9ee/index.md
- notes/obsidian/cfd166f4fe2772af/index.md
- notes/obsidian/d3f7e725d6b14baa/index.md
- notes/obsidian/e36be8778d58d649/index.md
- notes/obsidian/e531b97aac547143/index.md
- notes/obsidian/e8ca477daa3b2118/index.md
- notes/obsidian/f022f03e0999976d/index.md
- notes/obsidian/f6180e1bff800236/index.md
- notes/obsidian/f832fae005637b62/index.md
obsidian: true
note_course: 电路
---

# 电路｜从直流到正弦交流

**[打开电路学习地图](/my-web/notes/?map=D07#notes-graph-heading)** · [按本节PPT找题型](/my-web/notes/obsidian/9ed1c7c2e782ef18/)

依据15张课堂笔记和两份授课PDF，笔记中已出现正弦相量、复阻抗串并联，故这些也已纳入。没有把之后的三相、电子器件等未提供课堂内容自动扩成当前复习任务。

[打开知识图谱](/my-web/notes/#notes-graph-heading) · [返回首页](/my-web/notes/#notes-graph-heading)

## 作业优先入口

负号或方向乱了：[参考方向与关联参考方向](/my-web/notes/obsidian/44b18b6111927f4a/) → [功率与功率平衡](/my-web/notes/obsidian/48f4acf6a44a144b/) → [基尔霍夫电流定律KCL](/my-web/notes/obsidian/87f1dce4c5d02a59/) → [基尔霍夫电压定律KVL](/my-web/notes/obsidian/e8ca477daa3b2118/)

不知道怎么列方程：[电阻串并联与分压分流](/my-web/notes/obsidian/f6180e1bff800236/) → [支路电流法与节点电压法](/my-web/notes/obsidian/7de8d96e94f22918/) → [叠加定理](/my-web/notes/obsidian/98d7b871642b2259/) → [戴维宁定理](/my-web/notes/obsidian/29d0477b8a7ab3b3/)

换路题不知道从哪开始：[换路定律与初始值](/my-web/notes/obsidian/50aed8ea4d5c45b2/) → [一阶电路三要素法](/my-web/notes/obsidian/90cba90d8e907b67/) → [RC充放电与全响应](/my-web/notes/obsidian/e36be8778d58d649/) → [RL一阶响应](/my-web/notes/obsidian/abd5e632e172ba01/)

交流题一上来不会算：[正弦量与有效值](/my-web/notes/obsidian/53a8e7a42b0b67fa/) → [相量与复数运算](/my-web/notes/obsidian/1522323228def87d/) → [RLC元件复阻抗](/my-web/notes/obsidian/3ab140eab2134944/) → [RLC串联与相量图](/my-web/notes/obsidian/28e997c5a15ba291/) → [交流并联与导纳](/my-web/notes/obsidian/cfd166f4fe2772af/) → [交流功率与功率因数](/my-web/notes/obsidian/f022f03e0999976d/)

## 直流基础

| 知识点 | 何时打开 |
| --- | --- |
| [参考方向与关联参考方向](/my-web/notes/obsidian/44b18b6111927f4a/) | 算出负数，先解释方向，再判断是否做错。 |
| [功率与功率平衡](/my-web/notes/obsidian/48f4acf6a44a144b/) | 判断电源供电还是被充电，要看电流从哪端进入。 |
| [电阻串并联与分压分流](/my-web/notes/obsidian/f6180e1bff800236/) | 先看节点连接，不能凭元件画得像不像串联。 |
| [独立源与受控源](/my-web/notes/obsidian/e531b97aac547143/) | 电压源定电压，电流源定电流；另一个量由外部电路决定。 |
| [基尔霍夫电流定律KCL](/my-web/notes/obsidian/87f1dce4c5d02a59/) | 看到节点和分支，先列流入等于流出。 |
| [基尔霍夫电压定律KVL](/my-web/notes/obsidian/e8ca477daa3b2118/) | 绕回起点，电势升降的代数和为零。 |

## 直流分析方法

| 知识点 | 何时打开 |
| --- | --- |
| [支路电流法与节点电压法](/my-web/notes/obsidian/7de8d96e94f22918/) | 不能直接串并联时，用KCL和KVL组织未知量。 |
| [叠加定理](/my-web/notes/obsidian/98d7b871642b2259/) | 多个独立源逐个作用，最后叠加电压或电流。 |
| [戴维宁定理](/my-web/notes/obsidian/29d0477b8a7ab3b3/) | 只求一条负载支路时，先把其余电路变成电压源串电阻。 |
| [诺顿定理与电源等效变换](/my-web/notes/obsidian/29f66ad91509ead0/) | 同一个端口，也可写成电流源并电阻。 |
| [非线性电阻与负载线](/my-web/notes/obsidian/f832fae005637b62/) | 看到曲线伏安特性，找工作点，不要当成固定电阻。 |

## 储能与换路

| 知识点 | 何时打开 |
| --- | --- |
| [电容的伏安关系与储能](/my-web/notes/obsidian/4deccae1762f21a1/) | 电容电流由电压变化率决定，直流稳态开路。 |
| [电感的伏安关系与储能](/my-web/notes/obsidian/19b122467f6cebf2/) | 电感电压由电流变化率决定，直流稳态短路。 |
| [换路定律与初始值](/my-web/notes/obsidian/50aed8ea4d5c45b2/) | 连续的是电容电压和电感电流，其他量重新算。 |
| [一阶电路三要素法](/my-web/notes/obsidian/90cba90d8e907b67/) | 先找初值、终值、时间常数，再写指数。 |
| [RC充放电与全响应](/my-web/notes/obsidian/e36be8778d58d649/) | 电容从初始电压向新终值靠近，方向由差值决定。 |
| [RL一阶响应](/my-web/notes/obsidian/abd5e632e172ba01/) | 电感电流从原初值逐渐走向新的直流值。 |

## 正弦稳态

| 知识点 | 何时打开 |
| --- | --- |
| [正弦量与有效值](/my-web/notes/obsidian/53a8e7a42b0b67fa/) | 幅值、有效值、频率和初相要分清。 |
| [相量与复数运算](/my-web/notes/obsidian/1522323228def87d/) | 同频正弦稳态，把微分方程转成复数代数。 |
| [RLC元件复阻抗](/my-web/notes/obsidian/3ab140eab2134944/) | R同相，L电压超前电流90°，C电压滞后电流90°。 |
| [RLC串联与相量图](/my-web/notes/obsidian/28e997c5a15ba291/) | 串联用同一电流，电压按相量相加。 |
| [交流并联与导纳](/my-web/notes/obsidian/cfd166f4fe2772af/) | 并联同电压，支路电流相量相加。 |
| [交流功率与功率因数](/my-web/notes/obsidian/f022f03e0999976d/) | 有效值相乘得到视在功率，有功还要乘相位差的余弦。 |
| [串联谐振](/my-web/notes/obsidian/5f47f9e9111db566/) | 感抗与容抗抵消时，总阻抗只剩电阻。 |

## 原课件作业记录

以下只是课件原有题号，不代表新的本周布置；对应扫描教材题面尚未逐题录成答案。知识节点中的“课件原题”有明确例号，其余为独立补充题。

| 资料定位 | 课件所列题号 | 查找方法 |
| --- | --- | --- |
| 直流课件末页 | 1.2.1、1.3.1、1.5.1、1.5.2、1.6.1、1.6.6、1.7.1、1.8.1、1.8.4 | 按概念→定律→叠加→等效网络入口查找 |
| 瞬态课件末页 | 2.2.1、2.3.1、2.4.1、2.4.2、2.5.2、2.6.1、2.6.3、2.6.5；P48练习题 | 先认储能元件，再按三要素求解 |

**已核对勘误：** 瞬态例2.4.1初始电流的符号，见对应RC节点；保留了原页链接。

## 进阶原题精解

- [双电源供电：支路电流与电源吸收功率](/my-web/notes/obsidian/d3f7e725d6b14baa/) · 综合
- [开关闭合后节点变负：跨接电容的全响应](/my-web/notes/obsidian/15aec57c6df1f613/) · 综合
- [日光灯镇流器反求与功率因数补偿](/my-web/notes/obsidian/4e19b59e90ddbc69/) · 综合
- [从功率变化反求并联阻抗](/my-web/notes/obsidian/1b7851796d5b3152/) · 综合
- [已知两支路电流反求电桥参数](/my-web/notes/obsidian/b1996e24533bb9ee/) · 进阶
- [RL断电续流：电感电压为何变负](/my-web/notes/obsidian/74b4cec86c01df5d/) · 进阶
- [从复电压反求两个串联元件](/my-web/notes/obsidian/2ddfbd4ee7f83581/) · 进阶
- [恒流源RC换路：负电容电流的含义](/my-web/notes/obsidian/3502c3003a7fe1bb/) · 进阶
