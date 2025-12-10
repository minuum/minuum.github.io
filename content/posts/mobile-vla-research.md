---
title: "Research: Mobile-VLA Context Adaptation"
date: "2024-12-10"
description: "Analysis of latent context vector adaptation for transferring 7DOF manipulator policies to 2DOF mobile robots."
tags: ["Research", "VLA", "Mobile Robotics", "Results"]
---

# Analysis of Context Vector Adaptation for Mobile-VLA

*Transferring 7DOF Manipulator Policies to 2DOF Mobile Robots*

## 1. Research Overview

Recent **Vision-Language-Action (VLA)** models have shown impressive capabilities in manipulating objects with robotic arms (e.g., 7DOF). However, directly applying these pre-trained policies to **2DOF mobile robots** presents a significant "Domain Gap" in both:
*   **Action Space:** Joints (7DOF) vs. Wheels (Differential Drive)
*   **Visual Context:** Static Tabletop View vs. Dynamic Mobile View

This study aims to **validate the feasibility of adapting RoboVLMs** to mobile platforms by analyzing the **latent context vectors**.

## 2. Key Methodologies

*   **Model:** RoboVLMs (Based on LLaVA/OpenFlamingo architecture)
*   **Data Collection:** Collected custom images from a 2DOF Mobile Robot in indoor environments.
*   **Context Extraction:** Extracted high-dimensional context vectors from the VLM's vision encoder and language projection layers.
*   **Analysis:** Used **t-SNE** for dimensionality reduction to visualize the clustering of context vectors based on navigational intent.

## 3. Preliminary Results

### Cluster Separation
The extracted context vectors showed distinct clustering for "Left Turn" and "Right Turn" scenarios. This suggests that the VLM **retains semantic understanding** of spatial commands even when fed with unseen mobile robot camera feeds.

### Action Mapping
We identified the need for a **"Velocity Mapping Layer"** to convert the 7DOF end-effector delta-pose predictions into 2DOF differential drive velocities ($v, \omega$).

## 4. Future Research Plan

My goal for the upcoming Winter Internship is to extend this analysis by:

1.  **Fine-tuning:** Implementing **LoRA (Low-Rank Adaptation)** on the VLA model using the collected mobile dataset.
2.  **Closed-Loop Control:** Building a **ROS2-based inference loop** to validate real-time navigation performance.
3.  **Hardware Deployment:** Deploying the optimized model on an actual mobile robot (e.g., TurtleBot).

---
*This page serves as a summary of my ongoing undergraduate research.*
