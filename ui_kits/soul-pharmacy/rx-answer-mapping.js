// rx-answer-mapping.js — 자가문진(Q1/Q2/Q3) 응답을 80종 처방전 중 하나로 결정하는 매핑/점수 로직.
//
// 화면상 문항 4개(assessment-data.js의 groups[0..3])와 이 문서의 "Q1/Q2/Q3" 용어는 다음처럼 대응한다.
//   groups[0] = Q1  — 단일 선택(최대 1개). A/B 후보군을 "게이트"로 완전히 나눈다(가중치 없음).
//   groups[1] = Q2a — 다중 선택(최대 3개). "현재 상태" 1차 — 선택된 항목마다 그 항목이 가리키는
//                      처방 1개(유형별)에 +3.
//   groups[2] = Q2b — 다중 선택(최대 2개). "현재 상태" 2차 — 위와 동일하게 선택 항목마다 +3.
//                      (groups[1]+groups[2]를 합쳐 사용자 문서의 "Q2"에 해당 — 현재 상태 판별)
//   groups[3] = Q3  — 다중 선택(무제한). "원하는 방향" — 선택된 항목마다 그 항목이 가리키는
//                      처방(유형별로 1~2개일 수 있음) 각각에 +2.
// 여러 항목을 선택하면 항목별 점수가 그대로 합산된다(AssessmentPaper가 이미 각 문항을 다중선택
// 가능하게 만들어뒀음 — maxSel: Q1=1, Q2a=3, Q2b=2, Q3=무제한).
//
// 최종 처방 = 같은 Q1 유형(A/B) 후보 5개 중 합산 점수가 가장 높은 처방.
// 동점 시 우선순위: ①Q2(groups[1] 또는 [2])에서 직접 지목된 처방 > ②Q3(groups[3])에서 지목된
// 처방 > ③그래도 동점이면 처방 번호 순(A.1→...→B.5)으로 먼저 오는 쪽. (부분 일치 +1 티어는
// 사용자가 제공한 매핑표에 없어 구현하지 않음 — 필요하면 각 매핑 항목에 "부분 일치" 대상을
// 추가로 정의해서 +1로 넣으면 된다.)
//
// 각 항목 값 형태: 단일 문자열("A.2") 또는 문자열 배열(["A.3","A.5"]) — 배열이면 그 유형의 여러
// 처방이 동시에 그 항목을 가리킨다는 뜻(사용자 문서의 "A.3 / A.5" 표기). 항목에 해당 유형 값이
// 없으면(예: 그 항목이 B 전용) 그 유형에서는 점수를 주지 않는다.
window.RX_ANSWER_MAPPING = {
  "anxious": {
    "q2a": [
      { "A": "A.2", "B": "B.4" },
      { "A": "A.3", "B": "B.5" },
      { "A": "A.5", "B": "B.5" },
      { "A": "A.5", "B": "B.2" }
    ],
    "q2b": [
      { "A": "A.4", "B": "B.3" },
      { "A": "A.3", "B": "B.1" },
      { "A": "A.1", "B": "B.3" },
      { "A": "A.1", "B": "B.1" }
    ],
    "q3": [
      { "A": ["A.3", "A.5"], "B": ["B.2"] },
      { "A": ["A.1", "A.2"], "B": ["B.3"] },
      { "A": ["A.3"], "B": ["B.2"] },
      { "A": ["A.2", "A.5"], "B": ["B.4"] },
      { "A": ["A.1", "A.4"], "B": ["B.3"] },
      { "A": ["A.3", "A.5"], "B": ["B.1", "B.2", "B.5"] }
    ]
  },
  "broken": {
    "q2a": [
      { "A": "A.4", "B": "B.3" },
      { "A": "A.4", "B": "B.2" },
      { "A": "A.2", "B": "B.3" },
      { "A": "A.2", "B": "B.4" }
    ],
    "q2b": [
      { "A": "A.1", "B": "B.1" },
      { "A": "A.3", "B": "B.3" },
      { "A": "A.1", "B": ["B.1", "B.2"] },
      { "A": "A.4", "B": "B.4" }
    ],
    "q3": [
      { "A": ["A.4"], "B": ["B.3"] },
      { "A": ["A.2", "A.4"], "B": ["B.3"] },
      { "A": ["A.2", "A.4"], "B": ["B.4"] },
      { "A": ["A.5"], "B": ["B.5"] },
      { "A": ["A.1", "A.3"], "B": ["B.5"] },
      { "A": ["A.2"], "B": ["B.3"] }
    ]
  },
  "compare": {
    "q2a": [
      { "A": "A.2", "B": "B.3" },
      { "A": "A.1", "B": "B.4" },
      { "A": "A.2", "B": "B.1" },
      { "A": "A.3", "B": "B.3" }
    ],
    "q2b": [
      { "A": "A.2", "B": "B.2" },
      { "A": "A.3", "B": ["B.2", "B.3"] },
      { "A": "A.4", "B": "B.5" },
      { "A": "A.3", "B": "B.2" }
    ],
    "q3": [
      { "A": ["A.5"], "B": ["B.4"] },
      { "A": ["A.2"], "B": ["B.2"] },
      { "A": ["A.3"], "B": ["B.1"] },
      { "A": ["A.1"], "B": ["B.4"] },
      { "A": ["A.1", "A.5"], "B": ["B.4"] },
      { "A": ["A.3"], "B": ["B.2", "B.3"] }
    ]
  },
  "waiting": {
    "q2a": [
      { "A": "A.1", "B": "B.4" },
      { "A": "A.2", "B": "B.1" },
      { "A": "A.3", "B": "B.3" },
      { "A": "A.4", "B": "B.3" }
    ],
    "q2b": [
      { "A": "A.3", "B": "B.2" },
      { "A": "A.5", "B": ["B.1", "B.5"] },
      { "B": "B.4" },
      { "B": "B.5" }
    ],
    "q3": [
      { "A": ["A.3", "A.5"], "B": ["B.2"] },
      { "A": ["A.2"], "B": ["B.1"] },
      { "A": ["A.1"], "B": ["B.4"] },
      { "A": ["A.1", "A.2"], "B": ["B.5"] },
      { "A": ["A.4"], "B": ["B.1"] },
      { "A": ["A.5"], "B": ["B.3"] }
    ]
  },
  "forgive": {
    "q2a": [
      { "A": "A.4", "B": "B.1" },
      { "A": "A.1", "B": "B.2" },
      { "A": "A.2", "B": "B.2" },
      { "A": "A.3", "B": "B.3" }
    ],
    "q2b": [
      { "A": "A.5", "B": "B.4" },
      { "A": "A.4", "B": "B.2" },
      { "A": "A.3", "B": "B.3" },
      { "A": "A.5", "B": "B.4" }
    ],
    "q3": [
      { "A": ["A.4"], "B": ["B.5"] },
      { "A": ["A.4"], "B": ["B.2"] },
      { "A": ["A.1", "A.5"], "B": ["B.4"] },
      { "A": ["A.3"], "B": ["B.3"] },
      { "A": ["A.2", "A.5"], "B": ["B.1"] },
      { "A": ["A.3"], "B": ["B.3", "B.5"] }
    ]
  },
  "distant": {
    "q2a": [
      { "A": "A.5", "B": "B.1" },
      { "A": "A.2", "B": ["B.1", "B.5"] },
      { "A": "A.3", "B": "B.3" },
      { "A": "A.4", "B": "B.4" }
    ],
    "q2b": [
      { "A": "A.1", "B": "B.2" },
      { "A": "A.3", "B": "B.3" },
      { "A": "A.3", "B": "B.3" },
      { "A": "A.4", "B": "B.4" }
    ],
    "q3": [
      { "A": ["A.1"], "B": ["B.3"] },
      { "A": ["A.3"], "B": ["B.2"] },
      { "A": ["A.4", "A.5"], "B": ["B.4"] },
      { "A": ["A.2"], "B": ["B.5"] },
      { "A": ["A.2"], "B": ["B.1"] },
      { "A": ["A.1"], "B": ["B.1", "B.5"] }
    ]
  },
  "calling": {
    "q2a": [
      { "A": "A.1", "B": "B.5" },
      { "A": "A.4", "B": "B.4" },
      { "A": "A.3", "B": "B.4" },
      { "A": "A.1", "B": "B.3" }
    ],
    "q2b": [
      { "A": "A.5", "B": "B.5" },
      { "A": "A.2", "B": "B.1" },
      { "A": "A.2", "B": "B.3" },
      { "A": "A.1", "B": "B.5" }
    ],
    "q3": [
      { "A": ["A.1", "A.3"], "B": ["B.4"] },
      { "A": ["A.1"], "B": ["B.3"] },
      { "A": ["A.3"], "B": ["B.4"] },
      { "A": ["A.2"], "B": ["B.3", "B.5"] },
      { "A": ["A.1", "A.5"], "B": ["B.5"] },
      { "A": ["A.2"], "B": ["B.1", "B.2"] }
    ]
  },
  "thanks": {
    "q2a": [
      { "A": "A.4", "B": "B.1" },
      { "A": "A.4", "B": "B.4" },
      { "A": "A.3", "B": "B.3" },
      { "A": "A.2", "B": "B.4" }
    ],
    "q2b": [
      { "A": "A.3", "B": "B.2" },
      { "A": "A.1", "B": ["B.4", "B.5"] },
      { "A": "A.4", "B": "B.4" },
      { "A": "A.3", "B": "B.1" }
    ],
    "q3": [
      { "A": ["A.1"], "B": ["B.4"] },
      { "A": ["A.3"], "B": ["B.2"] },
      { "A": ["A.5"], "B": ["B.3"] },
      { "A": ["A.5"], "B": ["B.5"] },
      { "A": ["A.4"], "B": ["B.1"] },
      { "A": ["A.2"], "B": ["B.1", "B.2"] }
    ]
  }
};

// selections에서 group(문항 index)에 대해 실제 선택된 option index들을 전부 모은다.
// (문항마다 다중 선택 가능 — Q1=1개, Q2a=최대3개, Q2b=최대2개, Q3=무제한)
function _rxCollectSelected(selections, group) {
  var out = [];
  for (var i = 0; i < 12; i++) {
    if (selections[group + "-" + i]) out.push(i);
  }
  return out;
}

// Q1 응답(자가문진 selections) → 최종 처방전 1개.
// classifyType/RX_PRESCRIPTIONS/resolvePrescriptionByNum(rx-prescriptions.js)에 의존한다.
// 매핑 데이터가 없는 감정(default 등)은 null을 반환 — 호출부에서 기존 window.resolvePrescription로
// 폴백해야 한다.
window.resolvePrescriptionByAssessment = function (mood, selections) {
  var mapping = window.RX_ANSWER_MAPPING[mood];
  if (!mapping) return null;
  var type = window.classifyType(mood, selections);
  if (!type) return null;
  var candidates = (window.RX_PRESCRIPTIONS[mood] && window.RX_PRESCRIPTIONS[mood][type]) || [];
  if (!candidates.length) return null;

  var scores = {}, q2Hit = {}, q3Hit = {};
  var order = [];
  candidates.forEach(function (c) { scores[c.num] = 0; order.push(c.num); });

  function applyEntry(entry, weight, hitMap) {
    if (!entry) return;
    var target = entry[type];
    if (!target) return;
    var arr = Array.isArray(target) ? target : [target];
    arr.forEach(function (num) {
      if (scores[num] === undefined) return; // 다른 유형 처방 — 이 유형 후보군엔 없음
      scores[num] += weight;
      hitMap[num] = true;
    });
  }

  _rxCollectSelected(selections, 1).forEach(function (i) { applyEntry(mapping.q2a[i], 3, q2Hit); });
  _rxCollectSelected(selections, 2).forEach(function (i) { applyEntry(mapping.q2b[i], 3, q2Hit); });
  _rxCollectSelected(selections, 3).forEach(function (i) { applyEntry(mapping.q3[i], 2, q3Hit); });

  var best = order[0];
  for (var k = 1; k < order.length; k++) {
    var n = order[k];
    if (scores[n] > scores[best]) { best = n; continue; }
    if (scores[n] === scores[best]) {
      var bQ2 = q2Hit[best] ? 1 : 0, nQ2 = q2Hit[n] ? 1 : 0;
      if (nQ2 > bQ2) { best = n; continue; }
      if (nQ2 === bQ2) {
        var bQ3 = q3Hit[best] ? 1 : 0, nQ3 = q3Hit[n] ? 1 : 0;
        if (nQ3 > bQ3) { best = n; continue; }
      }
      // 그래도 동점이면 처방 번호 순서상 먼저 나오는(=order에서 먼저 나온) 쪽을 유지한다.
    }
  }

  var resolved = window.resolvePrescriptionByNum(mood, type, best);
  if (resolved) {
    resolved.q1Type = type;
    resolved.q2aAnswers = _rxCollectSelected(selections, 1);
    resolved.q2bAnswers = _rxCollectSelected(selections, 2);
    resolved.q3Answers = _rxCollectSelected(selections, 3);
    resolved._rxScores = scores; // 디버그/검수용 — UI에 노출하지 않음
  }
  return resolved;
};
