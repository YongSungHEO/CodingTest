-- 모든 레코드 조회하기
SELECT * FROM ANIMAL_INS order by ANIMAL_ID;

-- 역순 정렬하기
SELECT NAME, DATETIME FROM ANIMAL_INS order by ANIMAL_ID DESC;

-- 아픈 동물 찾기
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS WHERE INTAKE_CONDITION = 'Sick';

-- 어린 동물 찾기
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS WHERE INTAKE_CONDITION != 'Aged' order by ANIMAL_ID;

-- 동물의 아이디와 이름
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS ORDER BY ANIMAL_ID;

-- 여러 기준으로 정렬하기
SELECT ANIMAL_ID, NAME, DATETIME FROM ANIMAL_INS
ORDER BY NAME, DATETIME DESC;

-- 상위 n개 레코드
SELECT NAME FROM ANIMAL_INS
ORDER BY DATETIME LIMIT 1;

-- 최솟값 구하기
SELECT MIN (DATETIME) AS '시간' FROM ANIMAL_INS;

-- 최댓값 구하기
SELECT MAX (DATETIME) AS '시간' FROM ANIMAL_INS;

-- 동물 수 구하기
SELECT COUNT(*) FROM ANIMAL_INS;

-- 중복 제거하기
SELECT COUNT(DISTINCT NAME) AS 'count'
FROM ANIMAL_INS
WHERE NAME IS NOT NULL;

-- 이름이 없는 동물의 아이디
SELECT ANIMAL_ID FROM ANIMAL_INS WHERE NAME IS NULL;

-- 고양이와 개는 몇 마리 있을까
SELECT ANIMAL_TYPE, COUNT(*) AS count FROM ANIMAL_INS GROUP BY ANIMAL_TYPE;

-- 동명 동물 수 찾기
SELECT NAME, COUNT(*) AS COUNT FROM ANIMAL_INS GROUP BY NAME HAVING COUNT(NAME) >= 2;

-- 없어진 기록 찾기
SELECT B.ANIMAL_ID, B.NAME
FROM ANIMAL_INS A RIGHT OUTER JOIN ANIMAL_OUTS B
ON A.ANIMAL_ID = B.ANIMAL_ID
WHERE A.ANIMAL_ID IS NULL
ORDER BY B.ANIMAL_ID;

-- 있었는데요 없었습니다
SELECT A.ANIMAL_ID, A.NAME
FROM ANIMAL_INS A JOIN ANIMAL_OUTS B
ON A.ANIMAL_ID = B.ANIMAL_ID
WHERE A.DATETIME > B.DATETIME
ORDER BY A.DATETIME;

-- 오랜 기간 보호한 동물(1)
SELECT A.NAME, A.DATETIME
FROM ANIMAL_INS A LEFT OUTER JOIN ANIMAL_OUTS B
ON A.ANIMAL_ID = B.ANIMAL_ID
WHERE B.ANIMAL_ID IS NULL
ORDER BY A.DATETIME
LIMIT 3;

-- 보호소에서 중성화한 동물
SELECT A.ANIMAL_ID, A.ANIMAL_TYPE, A.NAME
FROM ANIMAL_INS A JOIN ANIMAL_OUTS B
ON A.ANIMAL_ID = B.ANIMAL_ID AND A.SEX_UPON_INTAKE LIKE "%Intact%"
WHERE B.SEX_UPON_OUTCOME NOT LIKE "%Intact%"
ORDER BY A.ANIMAL_ID;

-- 루시와 엘라 찾기
SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE
FROM ANIMAL_INS
WHERE NAME = 'Lucy' OR NAME = 'Ella' OR NAME = 'Pickle'
OR NAME = 'Rogan' OR NAME = 'Sabrina' OR NAME = 'Mitty'
ORDER BY ANIMAL_ID;

-- 이름이 el로 끝나는 동물 찾기
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE NAME LIKE '%el%' AND ANIMAL_TYPE = 'Dog'
ORDER BY NAME;
