# Minwoo Lee
*Bachelor Student, Kangnam University — Yongin, South Korea*  
Email: [minwool0357@gmail.com](mailto:minwool0357@gmail.com) | Phone: +82-10-6757-3689 | GitHub: [github.com/minuum](https://github.com/minuum)  
Portfolio: [minuum-portfolio](https://minuum.notion.site/minuum-portfolio) | Research Page: [minuum.github.io/EdgeGroundVLA](https://minuum.github.io/EdgeGroundVLA/)

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
- **EdgeGround-VLA Architecture (1st Author):** Proposed and implemented EdgeGround-VLA, an on-device navigation model fusing heterogeneous vision grounding encoders (OWLv2 + Kosmos-2) with a lightweight 3-DoF action head (0.866M parameters).  
- **Parameter Efficiency & On-Device Deployment:** Engineered a lightweight policy training only 1.128M parameters out of 459M total parameters, achieving 95.0% goal-reaching success rate in 100 real-robot trials on NVIDIA Jetson Orin NX without cloud connectivity or pre-built infrastructure. (*Submitted & Under Review at JKSCI, KCI-registered journal*)  
- **VLA Backbone Analysis & Pipeline Optimization:** Conducted per-layer attention measurement and frozen linear probe classification to analyze VLA backbone representations, developing a 2-stage decomposition pipeline that improved closed-loop navigation performance.  
- **Real-Robot Control Stack:** Configured Jetson Orin Linux and ROS2 driver nodes on the 3-axis omnidirectional Serbot 2 mobile platform; built a 10Hz asynchronous action re-issuance and Jitter Hold filtering stack to maintain continuous control under edge inference latency (~1.02s).  
- **Award:** Won the **Silver Prize at the 2026-1 Kangnam University Capstone Design Competition** during the VLA research project.

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
