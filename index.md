---
layout: default
title: 付瑶 · Yao Fu
description: 后端工程师，长期做路径规划、优化引擎、地图类系统。
---

# 付瑶 · Yao Fu

[fubupc@gmail.com](mailto:fubupc@gmail.com) · [github.com/fubupc](https://github.com/fubupc) · [LinkedIn](https://www.linkedin.com/in/yao-fu-b8965271/)

## 关于我

后端工程师，15+ 年经验，长期做路径规划、优化引擎、地图类系统，主用 Go 和 Rust。比起追新框架、抢热点技术，更在意把一个系统真正做扎实——架构清晰、抽象稳健、后人能读懂能改。

## 愿意花时间把代码和架构理顺

回 NextBillion 接手了 MVRO（优化引擎的请求接入层，不含算法本身）这个历史包袱较重的服务，半年里围绕它做了几件事：把存储层从业务逻辑里抽离、给一个 60 多字段的"上帝对象"写了拆分方案并先补测试再重构、修了一处潜伏已久的并发数据竞争（前任只补了 panic recovery，没解决根因）、把代码里所有"游离 goroutine 副作用"做了一次系统 audit 并按优先级输出整改文档。这些都不是被指派的活，自己觉得对项目长期有价值就做了。

## 在公司内部发起了一个跨团队的知识库

一个叫 **contexts** 的内部 repo，把散在口头传承、聊天记录、个人笔记里的部署流程、排错经验、服务架构、基础设施细节结构化整理进去，组织成 5 层（skills / rules / guides / infra / services）。里面包含像"MVRO 问题排查流程"、"prd-deploy 部署系统机制"、"gateway 代理匹配语义"这类内容。现在多个服务的文档（包括 mvro、mvro-portal 等的 CLAUDE.md）都引用它，团队和 AI agent（Cursor / Claude Code）在日常工作里都在用。

## 实战经验

### Grab 路径规划引擎（Go 重写 OSRM）

Grab 原本的路径规划服务基于开源的 C++ OSRM，代码复杂、维护和业务集成成本高。我主导用 Go 重写了一版，在达到同等 QPS 与延迟的前提下让代码结构更清晰、更容易针对业务做扩展。上线后成为 Grab 地理服务的核心组件——东南亚每天海量的司机匹配、计费、ETA 预测都走这个引擎。涉及图算法、数据结构压缩、并发调度、GC 友好的内存布局、正确性验证（跟 OSRM 输出做大规模 diff 测试）等一堆问题。是我目前做过技术挑战最大、也是最满意的项目。

### 其他比较完整 own 的项目

- **MVRO Portal**（Rust/Axum + React 全栈）：MVRO 优化平台的监控、调试、可视化系统。后端用事件溯源设计——所有事件落库，状态视图由纯函数从事件流重建，从机制上消除乱序、晚到、重复、崩溃恢复等常见问题。
- **Route Planner API**（Go）：从计费单体里抽出来的对外 API，遵循 Google AIP 资源命名规范，作为 MVRO 之上的产品层。
- **实时交通系统**（Rust + OpenLR）：整合多源交通数据给路径规划用。
- **TomTom Multinet → OSM 转换工具**（Go，带队做）：把复杂的商用地图格式转成 OSM，能处理亿级节点和路段的大地图。

## 学东西偏向深入的理解

2022 年起业余系统性学 Rust，做的项目偏系统方向——用 Rust 写过 Raspberry Pi 的 bare-metal OS（自实现 kernel、FAT32 驱动、内存分配器）、原创了一个带手写 proc-macro 的 Rust 库、做过 HTTP/3 + QUIC 的异步抓取系统等。代码都在 [GitHub](https://github.com/fubupc) 上。

写语言和底层相关的学习笔记是我的习惯，比如：

- 《Rust Trait 设计溯源——从 Strachey 1967 到 Wadler typeclass，再到 Java/Go/Rust 的演化对比》
- 《syn 库 ParseStream::peek 的类型层编程解析》
- 《Borrow / &mut / move / reborrow 与 lifetime 辨析》
- 《Rust async 的内部实现机制》
- 《Variance 如何影响 Lifetime 子类型》
- CSAPP 链接与符号解析的深入研究

这些在日常业务里用不太到，但对理解语言机制、写出可靠的抽象很有帮助。

## 工作经历

**NextBillion.ai · 高级后端工程师** <span class="timeline-when">· 2025.08 – 至今</span>
{: .timeline-role }
<span class="timeline-desc">MVRO 接入层维护与重构；Portal 与 Route Planner API 全栈开发</span>

**自学 / 技术探索** <span class="timeline-when">· 2022.06 – 2025.08</span>
{: .timeline-role }
<span class="timeline-desc">Rust 系统编程、proc-macro、async、type-level 编程；区块链；React</span>

**NextBillion.ai · 高级后端工程师** <span class="timeline-when">· 2020.03 – 2022.06</span>
{: .timeline-role }
<span class="timeline-desc">实时交通系统（Rust + OpenLR）；带队做 TomTom Multinet → OSM 转换工具；基于历史轨迹的 ETA 调优；地图缺陷自动检测</span>

**Grab · 高级后端工程师** <span class="timeline-when">· 2016.04 – 2020.03</span>
{: .timeline-role }
<span class="timeline-desc">Go 重写 OSRM 路径规划引擎；矢量地图瓦片渲染；ETA 预测优化</span>

**Alibaba · DevOps** <span class="timeline-when">· 2013.09 – 2015.07</span>
{: .timeline-role }

**数云 · 系统管理员** <span class="timeline-when">· 2011.11 – 2013.08</span>
{: .timeline-role }

## 教育

中南大学 · 物理学学士 · 2003 – 2007

## 技术栈

Rust · Go · Python · JavaScript · PostgreSQL · Linux · Kubernetes · Docker · GCP / AWS / 阿里云
