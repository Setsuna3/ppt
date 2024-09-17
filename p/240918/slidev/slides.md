---
# You can also start simply with 'default'
theme: prussianblue
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Welcome to Slidev
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
---

# 关于银行点钞视频分析的讨论

2024/9/18

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
transition: fade-out
layout: two-cols
id: 1
---


## 视频合规性评估
* 复旦论文
	* GCN 手部检测，Diffusion 视频分割，进行动作检测，将序列和真实序列进行匹配（匈牙利算法） 
* AQA 问题?
* 评价指标
	* Average IOU@d
	* （如果有动作评分）相关系数 Spearman's rank correlation
	* （如果有动作评分）Relative L2-distance

::right::

## 违规/合规动作分类细节

* 点钞监督
* 钱财偷拿
* 点钞质量

## 物品溯源

* 目标检测，建立规则模型。

## 视频脱敏&训练

* 应用场景 & 效果