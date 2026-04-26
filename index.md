---
layout: default
title: 付瑶 · Yao Fu
description: 后端工程师，长期做路径规划、优化引擎、地图类系统。
---

# 付瑶 · Yao Fu

fubupc@gmail.com · [github.com/fubupc](https://github.com/fubupc) · [LinkedIn](https://www.linkedin.com/in/yao-fu-b8965271/) · [详细版](./resume.md)

后端 / 系统方向工程师，10+ 年。长期做路径规划、优化引擎、大规模地图数据类系统。主用 Go 和 Rust。

## 工作经历

- **NextBillion.ai** · 高级后端工程师 · 2025.08 – 至今
  路径优化服务接入层维护与重构；搭建配套监控调试平台（Rust + React 全栈）
- **Gap 期间进一步学习 Rust 等技术** · 2022.06 – 2025.08
- **NextBillion.ai** · 高级后端工程师 · 2020.03 – 2022.06
  实时交通系统（Rust + OpenLR）；ETA 调优；地图缺陷自动检测
- **Grab** · 高级后端工程师 · 2016.04 – 2020.03
  Go 从零重写 C++ OSRM 路径规划引擎；矢量瓦片渲染
- **Alibaba** · DevOps · 2013.09 – 2015.07
- **数云 · 系统管理员** · 2011.11 – 2013.08

## 一些项目经验

- **Go 从零重写 OSRM**（Grab）：上线后成为东南亚业务的核心地理服务，路网图数据在亿级 node 量级。P50 接近 OSRM；P99 受 Go GC 模型制约一直是挑战，围绕图数据做了几轮数据结构与内存布局优化，节约可观内存并降低 GC 压力
- **NextBillion 路径优化接入层 (MVRO) 重构**：一边做新功能和线上 bug 修复，一边推进分层抽象、拆解大对象、消除并发隐患、补关键测试等
- **Rust 深入学习（Gap 期间）**：理解 ownership / lifetime / trait 的设计动机与细节；proc-macro 实战；了解 type-level 编程思想；分析 serde、axum 等成熟库理解 Rust 风格 API 设计
- **实时交通系统**（NextBillion，Rust + OpenLR）：整合多源交通数据给路径规划用
- **路径优化服务的监控调试平台**（Rust/Axum + React 全栈）：提供执行状态实时监控，执行事件时间线，优化结果可视化等功能


## 技术栈

Go · Rust · Linux · PostgreSQL · Kubernetes · GCP / AWS

## 教育

中南大学 · 物理学学士 · 2003 – 2007
