# Portfolio — Minwoo Lee (이민우)

## Who

Kangnam University, AI Major, 4th year (GPA 4.27/4.5).  
Applying to Korean grad school robotics/AI labs for **Spring 2027 admission** (contact phase: June–October 2026).

Research focus: **Vision-Language-Action (VLA) models**, mobile robot navigation, sim-to-real transfer, embodied AI.  
Key project: **MoNaVLA** — adapting 7DOF manipulator policy (RoboVLMs) to 2DOF mobile robot, 96.6% closed-loop success in simulation, real robot on Jetson Orin + ROS2.  
Publication: KCI journal (2nd author), IPACT 2024 Outstanding Paper, 2026-1 Kangnam University Capstone Design Competition Silver Prize.

## Files in this directory

| File | Contents |
|------|----------|
| `CV_MinwooLee.md` | Full English CV |
| `CoverLetter_MinwooLee_*.md` | Lab-specific cover letters (RLLAB, ISR, VAIL, AIRobotics) |
| `cold_email_draft_kor.md` | Cold email templates (KR) for all priority labs |
| `대학원 컨택 종합 마스터 문서 (2026년 6월 9일 기준).md` | Master contact strategy |
| `action_plan_june_2026.md` | Day-by-day action plan (June 2026 contact phase) |
| `*_Lab_Analysis.md` | Deep-dive lab analysis per university |
| `research_summary_template.md` | One-page research summary for applications |

## Target labs (14명, ranked by fit)

Detailed profiles are in `/Users/minu/dev/scholar-lab-radar/applicant_report.md`.  
Raw data per lab: `/Users/minu/dev/scholar-lab-radar/labs/<slug>/`.

| Priority | 교수 | 소속 | Fit | 슬러그 |
|----------|------|------|-----|--------|
| S | 오성회 (Songhwai Oh) | 서울대 RLLAB | 0.705 | songhwai-oh |
| S | Joseph J. Lim | KAIST CLVR | 0.578 | joseph-j-lim |
| S | 이영운 (Youngwoon Lee) | 연세대 RLLAB | 0.500 | youngwoon-lee |
| A | 유현우 (Hyeonwoo Yu) | 성균관 LAIR | 0.891 | hyunwoo-yoo |
| A | 정우진 (Woojin Chung) | 고려대 ISR | 0.861 | woojin-chung |
| A | 박대형 (Daehyung Park) | KAIST RIRO | 0.762 | daehyung-park |
| A | 이정범 (Jungbeom Lee) | 고려대 VAIL | 0.750 | jungbeom-lee |
| A | 김현진 (H. Jin Kim) | 서울대 LARR | 0.736 | h-jin-kim |
| A | 문형필 (Hyungpil Moon) | 성균관 RISE | 0.483 | hyungpil-moon |
| A | 김균암 (Kyunam Kim) | 성균관 AMRL | 0.286 | kyunnam-kim |
| B | 송재복 (Jae-Bok Song) | 고려대 IRL | 0.649 | jaebok-song |
| B | 이윤상 (Yoonsang Lee) | 한양 CGR | 0.630 | yunsang-lee |
| B | 김기훈 (Keehoon Kim) | POSTECH MARCH | 0.280 | keehoon-kim |
| — | 남창주 | 서강대 | — | OpenAlex 미등록 |

## scholar-lab-radar 활용

스킬이 `~/.claude/skills/scholar-lab-radar`에 전역 설치되어 있습니다.  
타겟 리스트: `/Users/minu/dev/scholar-lab-radar/skills/scholar-lab-radar/targets.toml`

```bash
# 새 교수 추가 후 전체 재실행
cd /Users/minu/dev/scholar-lab-radar
python3 skills/scholar-lab-radar/scripts/applicant.py \
  --targets skills/scholar-lab-radar/targets.toml \
  --mailto 202204249@kangnam.ac.kr \
  --years 5 --out ./labs

# 특정 교수 1명만 빠르게 프로파일
# → Claude Code에서: "이 교수 랩 프로파일 해줘: <이름>"
```

각 랩 그래프 뷰어 (브라우저에서 열기):
```
open /Users/minu/dev/scholar-lab-radar/labs/youngwoon-lee/graph.html
```

## 지원 타임라인

| 시기 | 할 일 |
|------|-------|
| 2026-06 (지금) | S/A 티어 교수 컨택, TOEIC/TEPS 등록 |
| 2026-07–08 | 인턴십, CS285 자기학습, 논문 추가 준비 |
| 2026-09 | 자기소개서 작성 |
| 2026-10 | Spring 2027 원서 제출 |
