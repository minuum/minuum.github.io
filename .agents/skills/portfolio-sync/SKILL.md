---
name: portfolio-sync
description: >-
  대학원 컨택 종합 마스터 문서가 업데이트되었을 때, 이력서(CV), 콜드 메일 초안, 액션 플랜 등의 하위 프로필 문서들을 정밀하게 동기화하고 검증하는 지침형 스킬입니다.
---

# Portfolio Document Synchronizer (포트폴리오 문서 동기화 스킬)

## Overview
이 스킬은 **대학원 컨택 종합 마스터 문서**([대ᄒาᆨ원 컨택 종ᄒาᆸ 마스터 문서](file:///Users/minu/dev/portfolio/대ᄒาᆨ원 컨택 종ᄒาᆸ 마스터 문서 (2026년 6월 9일 기준).md))를 단일 진실 공급원(Single Source of Truth)으로 삼아, 아래 하위 프로필 문서들이 항상 동일한 팩트와 최신 수치를 유지하도록 동기화 작업을 수행합니다.

### 동기화 대상 문서 목록
1. **기준 문서 (마스터):** [대ᄒาᆨ원 컨택 종ᄒาᆸ 마스터 문서 (2026년 6월 9일 기준).md](file:///Users/minu/dev/portfolio/대ᄒาᆨ원 컨택 종ᄒาᆸ 마스터 문서 (2026년 6월 9일 기준).md)
2. **영문 이력서:** [CV_MinwooLee.md](file:///Users/minu/dev/portfolio/CV_MinwooLee.md)
3. **자소서 및 메일:** [cold_email_draft_kor.md](file:///Users/minu/dev/portfolio/cold_email_draft_kor.md)
4. **일정 및 계획:** [action_plan_june_2026.md](file:///Users/minu/dev/portfolio/action_plan_june_2026.md)

---

## Quick Start
마스터 문서의 팩트가 변경된 것을 감지(또는 사용자가 변경을 요청)하면 에이전트는 즉시 다음 단계를 수행합니다:

```bash
# 1단계: 마스터 문서에서 변경된 팩트(예: GPA, 신규 수상, 성공률 수치 등)를 파악합니다.
# 2단계: 이 스킬에 명시된 워크플로우를 따라 CV, 메일 초안, 액션 플랜의 대상 구절을 수정합니다.
# 3단계: 교차 검증 체크리스트를 실행하여 오탈자와 수치 불일치를 검출합니다.
# 4단계: 프로젝트 루트의 scripts/render_pdf.sh 스크립트를 실행하여 PDF 문서를 업데이트하고 final_submission 폴더를 정돈합니다.
```

---

## Workflow (동기화 절차)

### 1. 변경 팩트 수집 및 분류
- 마스터 문서에서 변경되거나 새롭게 추가된 항목을 식별합니다.
- 다음 카테고리로 팩트를 분류합니다:
  - **인적 사항/학적:** GPA 성적 (예: `4.27`), 지도교수 성명 및 소속 연구실
  - **연구 실적 (MoNaVLA 등):** 주행 성공률 수치 (예: `96.6%`), MLP 단계별 성능 개선 수치, 사용 모델 구조, 기여 핵심 동인 분석 팩트
  - **로봇 플랫폼 경험 (Serbot 2 등):** 실기기 제어 범위 (예: 하드웨어 CAD 설계가 아닌 ROS2 드라이버 셋업/이동방법 소프트웨어 구축 등으로 한정)
  - **수상 및 논문 실적:** 대회/컨퍼런스 정식 명칭, 수상 등급 (예: `2026-1 강남대학교 캡스톤디자인 경진대회 은상`), 논문 저자 순서

### 2. 하위 문서 전파 및 번역 적용
- **영문 이력서 ([CV_MinwooLee.md](file:///Users/minu/dev/portfolio/CV_MinwooLee.md)):** 
  - 수집된 팩트를 자연스러운 영문 기술 용어로 번역하여 적용합니다. (예: `2026-1 강남대학교 캡스톤디자인 경진대회 은상` -> `Silver Prize, 2026-1 Kangnam University Capstone Design Competition`)
  - 모든 영문 설명은 **Action-Project-Result (APR)** 포맷을 준수해야 합니다.
- **자소서 및 메일 ([cold_email_draft_kor.md](file:///Users/minu/dev/portfolio/cold_email_draft_kor.md)):**
  - 메일 템플릿과 1페이지 미니 자소서의 본문에 수정된 팩트와 성과를 국문 흐름에 맞게 적용합니다.
  - 지나치게 과장되거나 마스터 문서와 대치되는 텍스트를 정제합니다.
- **액션 플랜 ([action_plan_june_2026.md](file:///Users/minu/dev/portfolio/action_plan_june_2026.md)):**
  - 신규 팩트로 인해 컨택 우선순위가 변동되거나(예: 신규 수상 분야와 매칭되는 랩 발견), 일정 및 준비물 체크리스트가 바뀌는 경우 이를 일정표와 할 일 목록에 동기화합니다.

### 3. 교차 검증 (Cross-Verification)
- 수정된 파일(CV, 자소서, 액션플랜)에 대해 `grep_search` 등을 활용하여 이전 팩트(구버전 수치)가 여전히 잔존해 있는지 전수 검사합니다.
- 전체 파일에서 특정 수치(예: `4.27`, `96.6%`)가 일관되게 적용되었는지 1:1 대조합니다.

### 4. 실물 PDF 컴파일 및 최종 정돈
- 마크다운 동기화가 끝나면, 터미널에서 다음 스크립트를 실행하여 지원 서류 PDF를 즉각 재생성하고 `final_submission/` 디렉토리에 맞춤형으로 정돈합니다.
  ```bash
  ./scripts/render_pdf.sh
  ```
- 컴파일이 완료된 후, 루트 디렉토리에 중복 생성된 임시 PDF 파일이 제거되었는지 확인하고, 오직 `final_submission/` 내의 대학별 서브 디렉토리에만 완성본이 탑재되었는지 확인합니다.

---

## Common Mistakes (자주 발생하는 실수)
1. **임의 번역으로 인한 공식 명칭 왜곡:** 
   - 예: `캡스톤디자인 경진대회`를 자의적으로 `CapStone Design Contest` 등으로 혼용 표기하는 것 금지. `Capstone Design Competition`으로 명칭을 통일하여 유지할 것.
2. **실기기 개발 범위 과장 (환각):**
   - 모바일 플랫폼 Serbot 2의 경우 기성 플랫폼을 활용한 '제어 및 Linux/ROS2 인프라 설정'이 팩트임에도, '로봇 직접 설계/제작'으로 자동 번역 과정에서 과장되지 않도록 기술(Configured, Integrated, Established 스택 단어 사용)해야 함.
3. **일부 파일 누락:**
   - CV만 고치고 cold_email_draft 내의 자소서를 누락하는 실수가 잦으므로, 반드시 모든 문서의 수정 내역을 검증 단계에서 명시해야 함.
4. **PDF 스크립트 실행 누락:**
   - 마크다운 문서를 고친 뒤 `./scripts/render_pdf.sh` 실행을 누락하면, 메일에 첨부할 실제 PDF 파일들이 예전 버전 수치로 남아있게 되므로 동기화 시 반드시 스크립트 실행을 완료해야 함.
