---
layout: default
title: 付瑶 · Yao Fu — 详细版
description: 后端工程师，长期做路径规划、优化引擎、地图类系统。
---

# 付瑶 · Yao Fu

[fubupc@gmail.com](mailto:fubupc@gmail.com) · [github.com/fubupc](https://github.com/fubupc) · [LinkedIn](https://www.linkedin.com/in/yao-fu-b8965271/) · [简版](./)

## 关于我

后端 / 系统方向工程师，10+ 年经验，长期做路径规划、优化引擎、大规模地图数据类系统。主用 Go 和 Rust，对运行时性能、内存布局、并发模型有第一手生产经验。

## Grab 路径规划引擎（从零用 Go 重写 OSRM）

Grab 原本的路径规划基于 C++ OSRM，与公司以 Go 为主的服务栈集成成本高，且核心能力希望沉淀在内部。团队启动 Go 重写项目，第一个可用版本由我从零写出，上线后成为 Grab 东南亚地理服务的核心组件，支撑司机匹配、计费、ETA 等业务——量级上承载东南亚领先的网约车 / 外卖平台之一的路网请求。后续团队加入持续迭代。

性能目标对标 C++ OSRM：

- **P50 接近 OSRM**（数十公里 routing：OSRM ~1-2ms，Go 版 ~3-5ms），可接受代价换 FFI 消除与 Go 原生集成
- **P99 是真正的挑战**（~300ms，受 Go GC 模型制约），调过 GOGC 等运行时参数但收益有限——本质是大只读图堆对象与 Go GC 的根本性冲突

围绕 GC 和内存布局做的几个有代表性的设计决策：

- **抛弃统一 `Location` interface，改用具体类型 `LatLng` struct + 按需实时计算 XY**。Go 的 interface 对每个值有 16B header，且非指针类型装入 interface 会逃逸到堆上——对于路网这种千万级 node 的场景，意味着上 GB 的额外开销和数量级更多的 GC 扫描对象。以时间换空间。
- **设计 dense internal ID 索引层**。OSM 原始 node ID 是 64-bit 稀疏整数（按国家分 shard，印度 / 印尼这种最大 shard 已接近亿级 node），如果各下游数据结构（adjacency list、landmark、R-tree refs）都用 OSM ID 作 key，每个 hashmap 都是 GB 量级的浪费。引入一个 OSM ID → internal int32 的索引层，所有下游结构改为按 internal ID 索引的连续数组——同时省内存、提速、显著降低 GC 扫描对象数。

- **进一步把 ID 索引压到极限**。识别出 OSM ID → internal ID 的 lookup 不在路由热路径上（路由本身走的是 internal ID），于是把这一层从 `map[int64]int32` 进一步替换为 sorted `[]int64` + 二分查找。在最大 shard 上单一索引从 ~3-4GB 降到 ~800MB，GC 对象数从数万降到 1。冷路径 ~5x lookup 变慢换数量级内存与 GC 收益。

- **持续推动 Rust 重写方向的评估**。识别出 P99 是语言层面问题而非 tuning 能解决，ownership-based 内存管理对"load once, read many"的图数据是更合适的工具。重写最终未启动（业务 SLO 上 P99 对司机匹配场景可接受，团队带宽优先投在地图数据管线）。这个未解决的问题也是我后来系统性深入 Rust 的直接动机。

## 其他独立负责的项目

- **MVRO Portal — 路径优化服务的监控调试平台**（Rust/Axum + React 全栈，从零独立搭建）：订阅 MVRO 的 Pub/Sub 事件流落库，状态视图由纯函数从事件流投影重建——从机制上消除乱序、晚到、重复、崩溃恢复等问题；提供 DAG 时间线、解决方案地图可视化、请求对比等调试视图
- **矢量地图瓦片渲染**（Grab）
- **实时交通系统**（NextBillion，Rust + OpenLR）：整合多源交通数据给路径规划用

## NextBillion 路径优化服务的重构

回 NextBillion 后接手了一个路径优化服务的请求接入层（不含算法本身）。原有代码结构混乱，半年里一边配合算法引擎做新功能开发和线上 bug 修复，一边推进重构——分层抽象、拆解大对象、消除并发隐患、补足关键测试。

## 内部技术知识库 / AI 协作基础设施

把分散在口头传承、聊天记录、个人笔记里的部署流程、排错经验、服务架构、基础设施细节系统化整理成 AI 和开发人员都能直接读懂的知识库——既方便新人快速建立对公司基础设施的整体认知，也为后续接入"数字员工"（AI agent 自动完成运维、排障、开发任务）打下了基础。

## Rust 与系统方向的深入

2022 年起系统性学习 Rust，部分动机是想从根上回答"Grab 时代那个 GC tail latency 问题，用 Rust 是不是真的能消掉"。覆盖几个层面：

- **语言核心机制的设计动机**：ownership / borrow rule 为什么这么设计（manage heap data 的本质）；lifetime 体系（reborrow 语义、`'a` vs `T: 'a` 的区别、scope lifetime）；trait 与 type system（associated type、object safety、HKT、existential type、orphan rule）
- **proc-macro 实战**：完整通关 dtolnay 的 [proc-macro-workshop](https://github.com/dtolnay/proc-macro-workshop)（`derive(Builder)`、`derive(CustomDebug)`、`seq!`、`#[sorted]`、`#[bitfield]`）
- **成熟库的源码与设计分析**：serde 的 `Deserialize` / `Deserializer` / `Visitor` 三 trait 设计；axum 的 extractor 依赖注入与 tower 的 `Service` trait 设计；从 RFC 角度理解 deref coercion 等
- 较早期项目（时间稍久）：bare-metal OS（CS140e）、async runtime 机制 + 自实现 mpsc/oneshot/broadcast channel

## 工作经历

**NextBillion.ai · 高级后端工程师** · 2025.08 – 至今
:   路径优化服务的接入层维护与重构；可视化前台与对外 API 全栈开发

**Rust / 系统方向深入** · 2022.06 – 2025.08
:   系统性学习 Rust 与底层方向：bare-metal OS、async 运行时、proc-macro、type-level 编程；区块链、React 等

**NextBillion.ai · 高级后端工程师** · 2020.03 – 2022.06
:   实时交通系统（Rust + OpenLR）；ETA 调优；地图缺陷自动检测

**Grab · 高级后端工程师** · 2016.04 – 2020.03
:   Go 重写 OSRM 路径规划引擎（核心贡献者）；矢量地图瓦片渲染；ETA 预测优化

**Alibaba · DevOps** · 2013.09 – 2015.07

**数云 · 系统管理员** · 2011.11 – 2013.08

## 教育

中南大学 · 物理学学士 · 2003 – 2007

## 技术栈

**Expert**: Go, Rust, Linux systems, large-scale graph / map data structures
**Proficient**: Python, JavaScript/TypeScript, PostgreSQL, Kubernetes, Docker, GCP / AWS
