---
title: 概率论入口
date: '2026-10-16T16:57:35.545125+00:00'
lastmod: '2026-10-16T16:57:35.545125+00:00'
draft: false
description: ''
tags: []
note_links:
- notes/obsidian/0f5dc8ebf244204a/index.md
- notes/obsidian/16327b65ee8a93ba/index.md
- notes/obsidian/1908780ea766a34a/index.md
- notes/obsidian/1a2adbe54fd640b8/index.md
- notes/obsidian/2587cd6473932f70/index.md
- notes/obsidian/29f9bf39693ad5be/index.md
- notes/obsidian/31e82cf4de0ca98b/index.md
- notes/obsidian/35c0448e7aeb3994/index.md
- notes/obsidian/4a76fe89cc194b49/index.md
- notes/obsidian/4ca1b2d1cb4584b3/index.md
- notes/obsidian/4ce10c1d3948db07/index.md
- notes/obsidian/51e9e4eba3515a19/index.md
- notes/obsidian/52522b56538c6fc4/index.md
- notes/obsidian/53b46e5bee6faeba/index.md
- notes/obsidian/568d3edc42a57ff7/index.md
- notes/obsidian/57bef1228797c3a5/index.md
- notes/obsidian/6aadc038130fe19b/index.md
- notes/obsidian/6f86eb85a87811f3/index.md
- notes/obsidian/72752b2f2f01ad82/index.md
- notes/obsidian/749b0e191a8c3ec0/index.md
- notes/obsidian/7f9d2b002c3455e4/index.md
- notes/obsidian/89bcb92b5fa2ff2b/index.md
- notes/obsidian/8bf43a3c44d5d61d/index.md
- notes/obsidian/911d7fab9131419c/index.md
- notes/obsidian/937033040958dfa7/index.md
- notes/obsidian/9ed1c7c2e782ef18/index.md
- notes/obsidian/9fa6b6113ecaf1aa/index.md
- notes/obsidian/a45bf361a307c0fc/index.md
- notes/obsidian/a4baa267f6b84d83/index.md
- notes/obsidian/a5655733731507cc/index.md
- notes/obsidian/a621a6267a419841/index.md
- notes/obsidian/aecbddcbdc38f474/index.md
- notes/obsidian/b2eae495d224c2fb/index.md
- notes/obsidian/b6cadfdd889e25b0/index.md
- notes/obsidian/b7c7668670cc1cc4/index.md
- notes/obsidian/bea362af3f9ef604/index.md
- notes/obsidian/c166658f0594b5a0/index.md
- notes/obsidian/c2b3c878d1831b06/index.md
- notes/obsidian/c45a43c99adf4894/index.md
- notes/obsidian/cf5d3585e7466d15/index.md
- notes/obsidian/d3cc4d4401e98773/index.md
- notes/obsidian/d547d77dd097f5bb/index.md
- notes/obsidian/de722626a523925c/index.md
- notes/obsidian/e1c777437b6403c4/index.md
- notes/obsidian/e753433a0de5fba5/index.md
- notes/obsidian/f3732cf365957480/index.md
- notes/obsidian/f90f2e4ddd7a9d01/index.md
- notes/obsidian/feed334eee9899c6/index.md
obsidian: true
note_course: 概率论
---

# 概率论｜沿着逻辑找公式

**[打开概率论学习地图](/my-web/notes/?map=R10#notes-graph-heading)** · [按本节PPT找题型](/my-web/notes/obsidian/9ed1c7c2e782ef18/)

依据19张课堂笔记和新增的第一、二章11份PPT。每个节点写明前提、逐步推导、例题和易错边界；图谱箭头表示定义、推导或计算工具的依赖，不是仅按章节把词连起来。

[打开可点击逻辑图谱](/my-web/notes/#notes-graph-heading) · [按公式追溯推导](/my-web/notes/obsidian/4a76fe89cc194b49/) · [返回首页](/my-web/notes/#notes-graph-heading)

## 五条复习主线

事件如何算：[样本空间与事件](/my-web/notes/obsidian/52522b56538c6fc4/) → [事件运算与德摩根律](/my-web/notes/obsidian/f3732cf365957480/) → [概率公理与基本性质](/my-web/notes/obsidian/b7c7668670cc1cc4/) → [加法公式与容斥](/my-web/notes/obsidian/a621a6267a419841/)

条件信息如何更新：[条件概率](/my-web/notes/obsidian/a5655733731507cc/) → [乘法公式与概率树](/my-web/notes/obsidian/e753433a0de5fba5/) → [全概率公式](/my-web/notes/obsidian/2587cd6473932f70/) → [贝叶斯公式与先验更新](/my-web/notes/obsidian/7f9d2b002c3455e4/)

独立如何变成计数分布：[事件独立与互斥的区别](/my-web/notes/obsidian/0f5dc8ebf244204a/) → [两两独立与相互独立](/my-web/notes/obsidian/feed334eee9899c6/) → [独立重复试验与至少一次](/my-web/notes/obsidian/6f86eb85a87811f3/) → [二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/) → [二项到泊松的极限推导](/my-web/notes/obsidian/c45a43c99adf4894/)

分布的统一表达：[随机变量是样本空间上的函数](/my-web/notes/obsidian/749b0e191a8c3ec0/) → [分布函数及右连续性](/my-web/notes/obsidian/89bcb92b5fa2ff2b/) → [概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/) → [正态分布的参数与形状](/my-web/notes/obsidian/bea362af3f9ef604/) → [正态标准化与分位数](/my-web/notes/obsidian/51e9e4eba3515a19/)

新变量如何继承旧分布：[随机变量是样本空间上的函数](/my-web/notes/obsidian/749b0e191a8c3ec0/) → [离散随机变量函数的分布](/my-web/notes/obsidian/aecbddcbdc38f474/) → [函数分布的分布函数法](/my-web/notes/obsidian/1a2adbe54fd640b8/) → [单调变换密度与绝对值因子](/my-web/notes/obsidian/8bf43a3c44d5d61d/) → [非单调变换与多分支求和](/my-web/notes/obsidian/29f9bf39693ad5be/)

## 做题先问四件事

1. 原始试验和随机变量分别是什么？支持集从0开始还是从1开始？
2. 已知条件放在哪个事件中？题目是否保证独立、同概率、等可能或均匀？
3. 求的是点概率、区间概率、密度、分布函数还是变换后的分布？
4. 这是精确计算还是近似？所有分支加起来是否为1？

## 模型与概率公理

| 知识点 | 何时打开 |
| --- | --- |
| [样本空间与事件](/my-web/notes/obsidian/52522b56538c6fc4/) | 先说清一次试验记录什么，再谈概率。 |
| [事件运算与德摩根律](/my-web/notes/obsidian/f3732cf365957480/) | 把“至少、都、仅有、不是全部”准确翻译成集合。 |
| [频率与概率的区别](/my-web/notes/obsidian/6aadc038130fe19b/) | 频率来自已做的有限试验，概率属于选定的随机模型。 |
| [概率公理与基本性质](/my-web/notes/obsidian/b7c7668670cc1cc4/) | 后面的公式都应回到非负、归一、可列可加三条。 |
| [加法公式与容斥](/my-web/notes/obsidian/a621a6267a419841/) | 重叠部分多算一次，就减一次；三集合要再补回来。 |
| [古典概型与组合计数](/my-web/notes/obsidian/cf5d3585e7466d15/) | 有限等可能才是“有利结果数除以总数”。 |
| [几何概型](/my-web/notes/obsidian/a4baa267f6b84d83/) | 等可能指相同几何量，不是坐标数字看起来平均。 |

## 条件概率与独立

| 知识点 | 何时打开 |
| --- | --- |
| [条件概率](/my-web/notes/obsidian/a5655733731507cc/) | 已知B发生，就在B内部重新归一化。 |
| [乘法公式与概率树](/my-web/notes/obsidian/e753433a0de5fba5/) | 多步骤同时成功，把每一步在此前历史下的概率相乘。 |
| [全概率公式](/my-web/notes/obsidian/2587cd6473932f70/) | 按互斥且穷尽的原因分类，先条件计算再加权。 |
| [贝叶斯公式与先验更新](/my-web/notes/obsidian/7f9d2b002c3455e4/) | 结果已经发生，比较各原因对这个结果的贡献。 |
| [事件独立与互斥的区别](/my-web/notes/obsidian/0f5dc8ebf244204a/) | 互斥说不能同时发生，独立说知道一个不改变另一个概率。 |
| [两两独立与相互独立](/my-web/notes/obsidian/feed334eee9899c6/) | 三事件要检查三对和三者交集，不能只查两两。 |
| [独立重复试验与至少一次](/my-web/notes/obsidian/6f86eb85a87811f3/) | 先检查独立、同概率，再把“至少一次”转成补事件。 |

## 变量与离散分布

| 知识点 | 何时打开 |
| --- | --- |
| [随机变量是样本空间上的函数](/my-web/notes/obsidian/749b0e191a8c3ec0/) | X不是某个未知常数，而是给每个试验结果赋数值的规则。 |
| [离散分布律与归一化](/my-web/notes/obsidian/f90f2e4ddd7a9d01/) | 先列所有可能值，再确保概率非负且总和为1。 |
| [0—1分布与指示变量](/my-web/notes/obsidian/31e82cf4de0ca98b/) | 把某事件是否发生编码成0或1。 |
| [二项分布的组合推导](/my-web/notes/obsidian/1908780ea766a34a/) | 固定n次独立同概率试验，统计成功次数。 |
| [超几何分布与不放回抽样](/my-web/notes/obsidian/c166658f0594b5a0/) | 总体有限且不放回，成功率随抽取历史改变。 |
| [几何分布与首次成功](/my-web/notes/obsidian/b6cadfdd889e25b0/) | 固定的是停止规则，试验次数本身是随机的。 |

## 泊松与近似

| 知识点 | 何时打开 |
| --- | --- |
| [泊松分布与计数参数](/my-web/notes/obsidian/9fa6b6113ecaf1aa/) | λ表示该观察范围的平均计数尺度，先匹配时间或空间长度。 |
| [二项到泊松的极限推导](/my-web/notes/obsidian/c45a43c99adf4894/) | n增大、p缩小而np保留为λ，固定k逐项取极限。 |
| [泊松计数的独立筛选](/my-web/notes/obsidian/53b46e5bee6faeba/) | 总数泊松，每个独立保留概率p，保留数仍是泊松。 |
| [二项分布的正态近似与连续性修正](/my-web/notes/obsidian/16327b65ee8a93ba/) | 先区分稀有事件泊松近似与中部计数的正态近似。 |

## 分布函数与连续分布

| 知识点 | 何时打开 |
| --- | --- |
| [分布函数及右连续性](/my-web/notes/obsidian/89bcb92b5fa2ff2b/) | F(x)累积的是X≤x，跳跃高度就是该点概率。 |
| [概率密度与分布函数的关系](/my-web/notes/obsidian/35c0448e7aeb3994/) | 概率是面积，密度是每单位长度的概率浓度。 |
| [连续均匀分布](/my-web/notes/obsidian/d547d77dd097f5bb/) | 等长子区间概率相同，密度必须是常数。 |
| [指数分布与等待时间](/my-web/notes/obsidian/c2b3c878d1831b06/) | 指数参数先定为速率λ，避免与均值参数混用。 |
| [指数无记忆性的推导](/my-web/notes/obsidian/a45bf361a307c0fc/) | 已等s以后，剩余等待的条件分布与初始相同。 |
| [正态分布的参数与形状](/my-web/notes/obsidian/bea362af3f9ef604/) | μ决定中心，σ决定尺度；N(μ,σ²)第二参数是方差。 |
| [正态标准化与分位数](/my-web/notes/obsidian/51e9e4eba3515a19/) | 先把区间变成标准差单位，再查同一张Φ表。 |
| [正态密度归一化常数的推导](/my-web/notes/obsidian/57bef1228797c3a5/) | √(2π)来自高斯积分，不是随意选的系数。 |

## 随机变量函数

| 知识点 | 何时打开 |
| --- | --- |
| [离散随机变量函数的分布](/my-web/notes/obsidian/aecbddcbdc38f474/) | 先映射取值，再把相同结果的概率合并。 |
| [函数分布的分布函数法](/my-web/notes/obsidian/1a2adbe54fd640b8/) | 把g(X)≤y准确解回X的范围，是所有变换公式的起点。 |
| [单调变换密度与绝对值因子](/my-web/notes/obsidian/8bf43a3c44d5d61d/) | 反函数导数负责长度缩放，绝对值保证概率非负。 |
| [非单调变换与多分支求和](/my-web/notes/obsidian/29f9bf39693ad5be/) | 一个y可能来自多个x，每条有效原像分支都要算。 |

## 原课件与推导边界

原始PPT保留，可在每个节点中打开；另生成PDF阅读副本以便直接定位幻灯片。课件与照片中可读出的原题已注明定位，独立编写的示例与微积分补充推导单独标识。

当前包括二项→泊松的逐项极限、泊松筛选、CDF右连续、无记忆性、变换密度绝对值、多分支求和、正态归一化。二项→正态的完整极限定理证明和后续数理统计尚未展开；该近似节点明确保留证明边界。

## 进阶原题精解

- [选箱后不放回抽取：贝叶斯更新](/my-web/notes/obsidian/b2eae495d224c2fb/) · 进阶
- [维修人员分组与合用：二项模型比较](/my-web/notes/obsidian/e1c777437b6403c4/) · 综合
- [桥式系统可靠性：对桥臂分情况](/my-web/notes/obsidian/72752b2f2f01ad82/) · 综合
- [指数等待转为二项离开次数](/my-web/notes/obsidian/568d3edc42a57ff7/) · 进阶
- [红灯等待：有跳跃的混合分布](/my-web/notes/obsidian/937033040958dfa7/) · 综合
- [两阶段抽检：条件概率与联合概率](/my-web/notes/obsidian/de722626a523925c/) · 综合
- [零一排列无相邻：等可能与插空法](/my-web/notes/obsidian/4ce10c1d3948db07/) · 进阶
- [黑球返还再添球：停止时间不是几何分布](/my-web/notes/obsidian/911d7fab9131419c/) · 综合
- [余弦变换：两个反函数分支都要计入](/my-web/notes/obsidian/4ca1b2d1cb4584b3/) · 综合
- [连续尺寸映射为离散利润](/my-web/notes/obsidian/d3cc4d4401e98773/) · 进阶
