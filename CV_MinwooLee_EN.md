# Minwoo Lee
*Bachelor Student, Kangnam University — Yongin, South Korea*  
Email: [minwool0357@gmail.com](mailto:minwool0357@gmail.com) | Phone: +82-10-6757-3689 | GitHub: [github.com/minuum](https://github.com/minuum)  
Portfolio: [minuum-portfolio](https://minuum.notion.site/minuum-portfolio) | Research Page: [minuum.github.io/MoNaVLA](https://minuum.github.io/MoNaVLA/)

---

## EDUCATION
**Kangnam University** — Yongin, South Korea  
*Bachelor of Science in Artificial Intelligence* (Senior, 1st Semester)  
- Expected Graduation: Feb. 2027  
- GPA: **4.27 / 4.5** (Ranked top of the department)

---

## RESEARCH INTERESTS
- Vision-Language-Action (VLA) Models for Robotics
- Embodied AI & Mobile Robot Navigation
- Sim-to-Real Transfer & Physical Latency Mitigation
- Deep Reinforcement Learning

---

## PUBLICATIONS & MANUSCRIPTS
- **EdgeGround-VLA: On-Device Goal-Directed Navigation via Dual Frozen Grounding Encoders**  
  *Journal of The Korea Society of Computer and Information (JKSCI)*, KCI Registered, **Under Review (2026)**.  
  **Minwoo Lee** (1st Author / Project Lead), et al.  
  - Fuses dual frozen grounding encoders (OWLv2 + Kosmos-2) with a 0.866M-parameter action head (1.128M total trained parameters).  
  - Achieves **95.0% real-robot goal-reaching success rate** fully on-device on Jetson Orin NX.  
  - Project Page: [minuum.github.io/EdgeGroundVLA](https://minuum.github.io/EdgeGroundVLA/)

- **Designing Conversational AI Services Using RAG-Based Loneliness Analysis for Koreans**  
  *Journal of the Korea Convergence Society (JCCT)*, KCI Registered, 2024.  
  **Minwoo Lee** (2nd Author), et al.

---

## CONFERENCES
- Presented at the International Conference on IPACT 2024 — **Outstanding Paper Award**  
  **Minwoo Lee** (2nd Author), et al.

---

## RESEARCH EXPERIENCES
**Undergraduate Research Assistant** — Advised by Prof. Inyeop Choe, Kangnam University  
*Project: On-Device Vision-Language-Action Models for Mobile Robotics* | *Sep. 2025 – Present*  
- **Diagnosis & Analysis:** Diagnosed structural text-attention collapse in the Kosmos-2 VLA backbone through per-layer attention measurement and frozen linear probe classification (val_acc: 96.6%), revealing that post-training had silently destroyed the text pathway regardless of downstream fine-tuning.
- **Insight Validation:** Confirmed that visual grounding drives navigation decisions via a target object masking ablation that induced 100% action reversal.
- **Architecture Design:** Designed a two-stage decomposition pipeline integrating PaliGemma2 as a zero-shot visual grounder with the Kosmos-2 vision encoder, bounding box history, and L2 normalization.
- **Performance:** Improved closed-loop navigation success rate from 10.3% (simple MLP baseline) to 66.7% (Decomposition v1) to **96.6%** (final, FPE: 0.094m) — a 9.4x gain from pipeline refinement alone on an identical grounding source, recovering from near-zero success in the end-to-end Kosmos-2 baseline.
- **Real-Robot Validation:** Deployed the PaliGemma2 grounder on the physical Serbot 2 platform, raising real-robot grounding accuracy from 0% to 51.4% across 6 sessions (512 frames) by fixing camera-decoding bugs and applying bounding-box noise filtering; full closed-loop control testing is the next step.
- **Award:** Won the **Silver Prize at the 2026-1 Kangnam University Capstone Design Competition**.

---

## AWARDS AND HONORS
- **Silver Prize**, 2026-1 Kangnam University Capstone Design Competition
- **Grand Prize (Dean of College of Engineering Award)**, 2025 Kangnam University Hackathon 'Kangnengthon' (Jointly hosted by Kangnam University & GDGoC: Kangnam University)
- **Outstanding Paper Award**, IPACT 2024 International Conference
- **First Prize (Best Project Award)**, Software Academic Festival (Kangnam University, 2024)
- **Excellence Award**, AI Academic Festival (Kangnam University, 2024)
- **Award**, K-HTML Hackathon (2024)

---

## PROJECTS
**Serbot 2 Robot Platform Integration** — Individual Project | *Jan. 2025 – Mar. 2025*  
- Configured a Jetson Orin-based Linux environment and integrated ROS2 driver nodes for the Serbot 2 omnidirectional mobile robot platform.
- Implemented core locomotion control scripts and configured the hardware-software communication interface to host VLA inference models.
- Resolved physical-to-virtual command delays and stabilized actuator control signals.

**Ladi** — Software Academic Festival | *Oct. 2024*  
- Developed an AI-based healthcare routine recommendation system (**Ladi**), winning the **First Prize**.
- Implemented a hybrid search system combining dense (FAISS) and sparse (KiwiBM25) retrievers to optimize medical QA search.
- Integrated a CrossEncoder Reranker to improve recommendation quality, and optimized prompt templates using LangSmith.
- Preprocessed AIHub healthcare QA data to categorize diseases and route intents.

**Liberty** — AI Academic Festival | *May 2024*  
- Served as Project Manager (PM) and lead architect for an AI Legal QA Agent system (**Liberty**), winning the **Excellence Award**.
- Built a multi-agent workflow using LangGraph, integrating dynamic query rewriting and quick filtering.
- Implemented a hybrid retriever (FAISS + KiwiBM25 + Pinecone) achieving 1.000 score in faithfulness and retrieval accuracy benchmarks.

---

## SKILLS AND TECHNIQUES
- **AI/ML:** PyTorch, HuggingFace, LoRA/PEFT, PaliGemma2, CLIP, SigLIP, Kosmos-2, LangGraph (Agent), LangSmith, FAISS, Pinecone (Vector DB), BM25, CrossEncoder (Reranker)
- **Robotics & Infra:** ROS2, Jetson Orin, Linux (Ubuntu), Locomotion Control, Asynchronous Control, Git
- **Programming Languages:** Python, C++, SQL
- **Languages:** Korean (Native), English (Intermediate — preparing for TOEIC)

---

## COURSEWORK
- **Deep Reinforcement Learning** — *Self-study (UC Berkeley CS285: Deep RL course lectures & homework)*  
  - Focused on Imitation Learning, Policy Gradients, Actor-Critic methods, and value-based RL.
