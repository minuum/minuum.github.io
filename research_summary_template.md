# Research Summary: Mobile-VLA Adaptation
*One-Page Research Highlight for Grad School Application*

---

## 📌 작성 가이드는 한국어로, 내용은 영어로 작성하세요.
(교수님들은 학생의 영어 논문 작성 능력을 중요하게 생각합니다. 요약본은 **영어**로 작성하는 것을 강력 추천합니다.)

---

## **Project Title: Bridging the Gap: Adapting RoboVLMs for Mobile-VLA Navigation**
**Researcher:** Minu Lee (Undergraduate, Kangnam Univ.)
**Period:** May 2025 – Aug 2025

### **1. Problem Statement**
Current VLA (Vision-Language-Action) models like RoboVLM are predominantly trained on **static manipulator data (7DOF arms)**. Directly applying these models to **mobile robots (2DOF bases)** fails due to:
- **Domain Shift:** Viewpoint difference (Eye-in-hand vs. Forward-facing camera).
- **Action Space Mismatch:** 7DOF (End-effector pose) ≠ 2DOF (Linear/Angular velocity).
- **Data Scarcity:** Lack of high-quality mobile robot instruction-following datasets.

### **2. Methodology**
To address these challenges, I proposed and implemented a **Context Adaptation Pipeline**:
1.  **Cross-Embodiment Data Collection:** Collected 479 episodes of mobile navigation data using a teleoperated TurtleBot in indoor environments.
2.  **Context Vector Alignment:** Analyzed the feature space of RoboVLM's vision encoder. Added a **Linear Projection Layer** to map mobile robot visual tokens to the pre-trained VLA's action token space.
3.  **Action Head Fine-tuning:** Froze the VLM backbone (Kosmos-2 based) and fine-tuned only the lightweight action head to predict normalized $(v, w)$ velocities.

### **3. Key Results**
- **Quantitative:** Achieved **0.804 MAE** on the validation set (Baseline: 1.2).
- **Qualitative:** Successfully performed basic instruction following ("Go to the kitchen") in seen environments, though generalization to unseen rooms remains a challenge.
- **Analysis:** Identified that the "Action Chunking" technique used in manipulators is less effective for the continuous, non-holonomic constraints of mobile robots.

### **4. Future Work (Winter 2025)**
- **LoRA Fine-tuning:** Applying Low-Rank Adaptation to the VLM backbone to better capture mobile-specific visual semantics (e.g., obstacles, corridors) without catastrophic forgetting.
- **Sim-to-Real Transfer:** validating the policy on a physical TurtleBot 4.

---

## 🖼️ [Visuals]
*(Place 2-3 key figures here: e.g., System Architecture Diagram, T-SNE plot of Context Vectors, or a sequence of robot frames)*

---

### **🔗 Links**
- **Full Project Log:** [Link to your Portfolio Blog]
- **Codebase:** [Link to GitHub]
- **Demo Video:** [Link to YouTube/Drive]
