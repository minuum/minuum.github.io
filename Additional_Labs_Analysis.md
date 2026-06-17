# 🎓 추가 3개 연구실 심층 분석 리포트 (한양대 CGR, 고려대 ISR, 고려대/연세대 IRL)

사용자님이 추가로 요청하신 3개 핵심 연구실에 대한 최신 연구 동향, 핏(Fit) 분석 및 구체적인 어필 포인트 분석 리포트입니다.

> [!IMPORTANT]
> **연구실 소속 및 정보 정정 안내**
> - **연세대 IRL (송재복 교수님):** 기존 메모에 '연세대 IRL'로 표기되어 있었으나, **송재복 교수님은 고려대학교 기계공학부 소속**이시며 이메일 역시 `jbsong@korea.ac.kr`입니다. (고려대 Intelligent Robotics Laboratory가 정식 명칭입니다). 이 점을 컨택 메일 및 면접 준비 시 혼동하지 않도록 유의하시기 바랍니다.

---

## 🏆 추가 연구실 종합 핏(Fit) 분석 요약

| 연구실 (지도교수) | 주력 연구 분야 | 이민우 지원자의 핵심 어필 스택 | 추천 우선순위 |
| :--- | :--- | :--- | :--- |
| **고려대 ISR Lab**<br>(정우진 교수) | 모바일 로봇 내비게이션, SLAM, LiDAR 위치 추정 | **MoNaVLA (모바일 내비게이션 + VLA) 구현 경험**, visual bias 극복 및 실물 주행 튜닝 | **1순위 (Perfect Fit)** |
| **한양대 CGR Lab**<br>(이윤상 교수) | 강화학습 기반 캐릭터 애니메이션, Sim-to-Real 보행 제어 | **Sim-to-Real 도메인 갭 해결**, 가상 환경에서 학습된 정책의 실물 로봇(3축 옴니휠) 이식 경험 | **2순위 (High Match)** |
| **고려대 IRL Lab**<br>(송재복 교수) | 안전 매니퓰레이터 설계, 모바일 로봇 내비게이션, SLAM | **3축 옴니휠 직접 설계 및 기구학(Kinematics) 제어**, 로봇 하드웨어 빌딩 역량 | **3순위 (Strong HW Match)** |

---

## 1. 고려대학교 ISR LAB (Intelligent Systems & Robotics)
* **지도교수:** 정우진 교수 (`smartrobot@korea.ac.kr`)
* **연구실 홈페이지:** [https://isr.korea.ac.kr/](https://isr.korea.ac.kr/)
* **연구 분야:** 자율주행, 모바일 로봇 내비게이션, LiDAR 기반 위치 추정(Localization), 멀티 로봇 시스템

### 🔬 최신 핵심 연구 및 논문 동향
- **트래버서빌리티 학습 (Traversability Learning):** *Learning Self-Supervised Traversability With Navigation Experiences of Mobile Robots* (IEEE RA-L)
  - 로봇이 주행하면서 겪은 경험을 바탕으로 갈 수 있는 길(평지)과 갈 수 없는 길(장애물, 비포장)을 스스로 학습하는 연구입니다.
- **실외 환경 위치 추정 (Localization):** *Uncertainty-Aware LiDAR-Based Localization for Outdoor Mobile Robots* (Journal of Field Robotics)
  - 눈, 비, 안개 또는 동적 장애물이 많은 실외 환경에서 LiDAR 센서의 불확실성을 감안하여 로봇의 정확한 위치를 실시간으로 추정하는 기술입니다.

### 🎯 이민우 지원자 핏(Fit) 분석 및 어필 전략
- **어필 키워드:** `#ROS2_Navigation`, `#Mobile_VLA`, `#Real_World_Deploy`
- **구체적 전략:** 
  - 정우진 교수님 연구실은 이론 연구에 그치지 않고 **인천공항, coex 등 실제 복잡한 다중 이용 시설에서 돌아가는 모바일 로봇 주행**을 검증하는 랩입니다. 
  - 지원자가 479개 에피소드의 실환경 터틀봇 주행 데이터를 직접 구축하고, VLA 모델이 실환경 주행에서 겪는 **시각적 편향(Visual Bias) 문제를 극복**하려 노력했던 구체적 스토리를 매우 높게 평가할 것입니다.
  - "이론 위주의 모델 튜닝을 넘어, 로봇 하드웨어에 탑재하여 오차가 존재하는 실환경(Real World) 주행을 실질적으로 제어하고 개선해 본 풀스택 경험"을 중심으로 메일을 작성해야 합니다.

---

## 2. 한양대학교 CGR LAB (Computer Graphics & Robotics Lab)
* **지도교수:** 이윤상 교수 (`yoonsanglee@hanyang.ac.kr`)
* **연구실 홈페이지:** [https://cgrhyu.github.io/](https://cgrhyu.github.io/)
* **연구 분야:** 딥러닝/강화학습 기반 가상 캐릭터 애니메이션, 물리 시뮬레이션, 로봇 보행 및 운동 제어

### 🔬 최신 핵심 연구 및 논문 동향
- **근골격계 물리 캐릭터 제어:** *FreeMusco: Motion-Free Learning of Latent Control for Morphology-Adaptive Locomotion in Musculoskeletal Characters* (SIGGRAPH Asia 2025 예정)
  - 복잡한 근골격계를 가진 가상 캐릭터가 동작 캡처 데이터 없이 스스로 보행 및 제어 정책을 강화학습으로 획득하는 구조 연구입니다.
- **물리 기반 스포츠 에이전트 제어:** *PhysicsFC: Learning User-Controlled Skills for a Physics-Based Football Player Controller* (SIGGRAPH 2025 예정)
  - 물리 법칙이 적용되는 시뮬레이션 환경 내에서 사람의 입력을 받아 축구선수 캐릭터가 다양한 물리적 기술(슛, 드리블 등)을 자연스럽게 수행하도록 제어하는 RL 연구입니다.

### 🎯 이민우 지원자 핏(Fit) 분석 및 어필 전략
- **어필 키워드:** `#Sim-to-Real`, `#Physics_Simulation`, `#RL_Control`
- **구체적 전략:**
  - CGR 랩은 정통 기계 로보틱스보다는 컴퓨터 그래픽스(SIGGRAPH) 학회 기반의 **가상 물리 공간(Mujoco, Isaac Gym 등) 내에서의 강화학습 제어 및 모션 생성**에 특화되어 있습니다. 최근에는 이를 실물 로봇 제어(보행 로봇 등)로 확장하고 있습니다.
  - 지원자가 3축 옴니휠 하드웨어를 직접 제어하며 **시뮬레이션(Sim) 물리 법칙과 실제 하드웨어(Real) 간의 마찰력, 모터 데드존 등 물리적 오차를 제어 공학적으로 튜닝하고 극복한 경험**을 강조하십시오. 
  - "시뮬레이션과 실제 하드웨어 사이의 간극(Sim-to-Real Domain Gap)을 좁히는 데 관심이 크며, 대형 비전-언어 모델(VLA)의 모빌리티 제어를 물리 시뮬레이션 기반 학습 모델로 확장하고 싶다"는 학술적 포부를 제시하는 것이 유리합니다.

---

## 3. 고려대학교 IRL (Intelligent Robotics Laboratory)
* **지도교수:** 송재복 교수 (`jbsong@korea.ac.kr`)
* **연구실 홈페이지:** [https://sites.google.com/view/intelligent-robot-laboratory/home](https://sites.google.com/view/intelligent-robot-laboratory/home)
* **연구 분야:** 안전 로봇 매니퓰레이터(Safe Robot Arm), 모바일 로봇 주행 및 충돌 회피, SLAM, 메카니즘 설계

### 🔬 최신 핵심 연구 및 논문 동향
- **안전/경량 협동로봇 기구 설계:** 중력 보상 모듈(Gravity Compensation) 및 충돌 감지 제어 기술을 통해 사람과 안전하게 협업하는 로봇 팔 설계 분야에서 국내 최고의 권위를 자랑합니다.
- **모바일 로봇 기반 주행 제어:** 자율주행 모바일 로봇이 매니퓰레이터와 결합(Mobile Manipulator)하여 다양한 작업을 수행할 때의 협조 제어 및 실시간 3D SLAM 기반 위치 추정 연구를 병행합니다.

### 🎯 이민우 지원자 핏(Fit) 분석 및 어필 전략
- **어필 키워드:** `#3-Axis_Omniwheel_Kinematics`, `#Hardware_Design`, `#Robot_Mechanism`
- **구체적 전략:**
  - 전통적인 기계 제어 및 메커니즘 설계 분야의 뿌리 깊은 명문 랩입니다. AI 알고리즘 하나만 다루는 학생보다는 **직접 하드웨어의 설계를 이해하고 기구학(Kinematics)을 수학적으로 풀어 로봇을 움직여 본 학생**을 대단히 선호합니다.
  - 지원자가 **"3축 옴니휠 로봇을 밑바닥부터 직접 기구학 설계(Kinematics)를 구현하여 정방향/역방향 기구학을 풀어 제어 보드를 튜닝한 경험"**을 전면에 세워야 합니다.
  - "하드웨어를 완벽하게 다룰 줄 아는 상태에서 최신 VLA/VLM 지능을 탑재할 수 있는 역량(Software-Hardware Integration Capability)"이 본인의 무기임을 어필하며, 랩의 모바일 매니퓰레이터 자율주행 성능 향상에 하드웨어적 제어 정밀도와 지능을 모두 기여할 수 있음을 강조해야 합니다.
