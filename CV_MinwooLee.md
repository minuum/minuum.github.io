# Minwoo Lee
Email: [minwool0357@gmail.com](mailto:minwool0357@gmail.com) | Phone: +82-10-6757-3689 | GitHub: [github.com/minuum](https://github.com/minuum)  
Portfolio: [minuum-portfolio](https://minuum.notion.site/minuum-portfolio) | Research Page: [minuum.github.io/MoNaVLA](https://minuum.github.io/MoNaVLA/)

---

## EDUCATION
**Kangnam University** — Yongin, South Korea  
*Bachelor of Science in Artificial Intelligence* (Senior)  
- Expected Graduation: Feb. 2027  
- GPA: **4.27 / 4.5** (Ranked top of the department)

---

## RESEARCH INTERESTS
- Vision-Language-Action (VLA) Models for Robotics
- Embodied AI & Mobile Robot Navigation
- Sim-to-Real Transfer & Physical Latency Mitigation
- Deep Reinforcement Learning

---

## PUBLICATIONS & ACADEMIC CONFERENCES
- **Designing Conversational AI Services Using RAG-Based Loneliness Analysis for Koreans**  
  *Journal of the Korea Convergence Society (JCCT)*, KCI Registered, 2024.  
  **Minwoo Lee** (2nd Author), et al.  
  - Presented at the International Conference on IPACT 2024 — **Outstanding Paper Award**

---

## RESEARCH EXPERIENCE
**Undergraduate Research Assistant** — Advised by Prof. Inyeop Choe, Kangnam University  
*Project: MoNaVLA (Mobile Navigation Vision-Language-Action Models)* | *Jan. 2025 – Present*  
- **Diagnosis & Analysis:** Diagnosed structural text-attention collapse in the Kosmos-2 VLA backbone through per-layer attention measurement and frozen linear probe classification (val_acc: 96.6%), revealing that post-training had silently destroyed the text pathway regardless of downstream fine-tuning.
- **Insight Validation:** Confirmed that visual grounding drives navigation decisions via a target object masking ablation that induced 100% action reversal.
- **Architecture Design:** Designed a two-stage decomposition pipeline integrating PaliGemma2 as a zero-shot visual grounder with the Kosmos-2 vision encoder, bounding box history, and L2 normalization.
- **Performance:** Achieved a **96.6% closed-loop navigation success rate** (FPE: 0.102m), recovering from near-zero success in the end-to-end baseline.
- **Real-Robot Deployment:** Developed a 10Hz asynchronous controller and Jitter Hold filtering pipeline to bridge the sim-to-real gap on Jetson Orin + ROS2.
- **Award:** Won the **Silver Prize at the 2026-1 Kangnam University Capstone Design Competition**.

---

## PROJECT EXPERIENCE
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

## AWARDS & HONORS
- **Silver Prize**, 2026-1 Kangnam University Capstone Design Competition
- **Grand Prize (Dean of College of Engineering Award)**, 2025 Kangnam University Hackathon 'Kangnengthon' (Jointly hosted by Kangnam University & GDGoC: Kangnam University)
- **Outstanding Paper Award**, IPACT 2024 International Conference
- **First Prize (Best Project Award)**, Software Academic Festival (Kangnam University, 2024)
- **Excellence Award**, AI Academic Festival (Kangnam University, 2024)
- **Award**, K-HTML Hackathon (2024)

---

## TECHNICAL SKILLS
- **AI/ML:** PyTorch, HuggingFace, LoRA/PEFT, PaliGemma, CLIP, SigLIP, Kosmos-2, LangGraph (Agent), LangSmith, FAISS, Pinecone (Vector DB), BM25, CrossEncoder (Reranker)
- **Robotics & Infra:** ROS2, Jetson Orin, Linux (Ubuntu), Locomotion Control, Asynchronous Control, Git
- **Programming Languages:** Python, C++, SQL
- **Languages:** Korean (Native), English (Intermediate — preparing for TOEIC)

---

## COURSEWORK
- **Deep Reinforcement Learning** — *Self-study (UC Berkeley CS285: Deep RL course lectures & homework)*  
  - Focused on Imitation Learning, Policy Gradients, Actor-Critic methods, and value-based RL.
