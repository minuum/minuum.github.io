---
title: "Research Log: Developing Mobile-VLA for Indoor Navigation"
date: "2025-12-10"
description: "A weekly breakdown of my undergraduate research project: Adapting Vision-Language-Action models for mobile robots."
tags: ["Research", "VLA", "ROS2", "PyTorch", "DevLog"]
---

# Research Log: Mobile-VLA Development (2025)

*This log documents my 4-month journey (May 2025 - Aug 2025) developing a multimodal AI system for mobile robot control. It is based on actual development history and experiment reports.*

---

## 📅 Phase 1: Initiation & Setup (May 2025)

**Week 1-2: Environment Construction**
- **Objective:** Build a stable simulation and training environment.
- **Actions:**
    - Set up **ROS2 Humble** environment for mobile robot control.
    - Integrated **RoboVLMs** as a submodule for the base VLM architecture.
    - Designed the core `VLAInferenceNode` to bridge ROS2 topics with PyTorch models.
- **Challenge:** Compatibility issues between ROS2 (C++ based middleware) and PyTorch (Python). Resolved by containerizing the environment using **Docker**.

**Week 3-4: Data Pipeline Design**
- **Objective:** Define how to feed robot data into the VLA.
- **Actions:**
    - Defined the data schema: `Image (224x224)` + `Text Command` -> `2D Action (v, w)`.
    - Implemented a data recorder node to capture extensive teleoperation sessions.

---

## 📅 Phase 2: Implementation & Data (June 2025)

**Week 5-6: Data Collection**
- **Stats:** Collected **479 episodes** (approx. 8,622 frames).
- **Process:** Manually drove the robot in various indoor environments while giving text commands (e.g., "Go to the kitchen", "Turn left at the corner").
- **Insight:** Real-world data is extremely noisy. Implemented a filtering script to remove stationary segments.

**Week 7-8: Baseline Models (LSTM & CLIP)**
- **Experiment:** Before using heavy VLMs, I tested lighter models.
- **Models:**
    - `Simple LSTM`: Only uses action history.
    - `CLIP + LSTM`: Uses frozen CLIP embeddings for visual features.
- **Result:** The baseline models struggled to generalize to new rooms, confirming the need for a stronger semantic understanding (VLA).

---

## 📅 Phase 3: The "VLA" Core (July 2025)

**Week 9-10: Integrating Kosmos-2**
- **Architecture:** `Kosmos-2 Vision Encoder` + `Korean Text Encoder` + `Action Policy Head`.
- **Implementation:**
    - Built the **Action Predictor** to output `linear_x` (velocity) and `angular_z` (turn rate).
    - Designed a fusion layer to combine visual tokens with text command embeddings.

**Week 11-12: Training & "The Reality Check"**
- **Performance:** Achieved an **MAE (Mean Absolute Error) of 0.804**.
- **Issue:** The model showed signs of severe **Overfitting**. Training loss dropped rapidly, but validation accuracy stuck at 0%.
- **Analysis:** The dataset (479 episodes) was too small for such a large parameter model (Kosmos-2).

---

## 📅 Phase 4: Refactoring & Optimization (August 2025)

**Week 13-14: Optimization Strategies**
- **Hypothesis:** Model complexity is too high for the data size.
- **Attempts:**
    - **Conservative Augmentation:** Applied rotation/color jitter to images.
    - **Hybrid Optimization:** Simplified the Policy Head architecture.
- **Result:** Improved stability, but generalization remained a challenge.

**Week 15-16: Final Refactoring (The "Cleanup")**
- **Action:** Massive code refactoring to ensure reproducibility.
    - **File Reduction:** Consolidated 24,142 files -> **95 core files** (Removed redundancy).
    - **Documentation:** Wrote comprehensive READMEs and `PERFORMANCE_SUMMARY.md`.
    - **Modularization:** Separated `core` (production) from `experimental` (research) code.

---

## 📝 Conclusion & Future Work

Although we haven't reached the "Product-Ready" MAE goal of 0.1 yet, this project successfully established a **complete VLA pipeline** from data collection to inference. 

**Key Achievements:**
- ✅ **System:** End-to-end ROS2 + VLA Loop.
- ✅ **Code:** 99% Codebase reduction & Modular structure.
- ✅ **Honesty:** Identified critical "Data Scarcity" bottleneck.

**Next Steps (Winter 2025):**
I plan to apply **LoRA (Low-Rank Adaptation)** to fine-tune the model more efficiently and deploy it on a **physical TurtleBot** to test real-world adaptation.

