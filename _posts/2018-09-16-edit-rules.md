---
layout: post
title:  "마크다운 작성방법"
author: SiRyuA
categories:
tags:
---

<h1 class="ruleTitle">디벨가이드 마크다운 작성 방법</h1>

<h2 class="ruleH2">준수사항</h2>

1. 1차 출처 명시 필수
2. [라이센스](/license.html) 준수
3. 개인 의견을 제외한 상태에서 정확한 사실만 기입



<h2 class="ruleH2">마크다운 작성 추천 에디터</h2>

1. [ATOM](https://atom.io/) 기본 markdown Addon 사용 (Ctrl + Shift + M)
2. [Typora](https://typora.io/)



<h2 class="ruleH2">상단 제목 작성 방법</h2>

```
  ---
  layout: post
  title:  "마크다운 작성"
  author: "작성자"
  categories: 카테고리 // 2곳 초과되는 복수 카테고리 금지 + 항상 첫 글자는 대문자
  tags:
  - 태그1
  - 태그2
  - 태그3
  - 태그4
  ---
```

* 한글을 사용 할 경우 항상 "" 안에 작성



<h2 class="ruleH2">타이틀 종류 및 크기</h2>

# TEST1
## TEST2
### TEST3
#### TEST4
##### TEST5
###### TEST6

```
# TEST1
## TEST2
### TEST3
#### TEST4
##### TEST5
###### TEST6
```



<h2 class="ruleH2">리스트(좌측 라인)</h2>

> TEST1
>> TEST2
>>> TEST3

```
> TEST1
>> TEST2
>>> TEST3
```



<h2 class="ruleH2">리스트(점)</h2>

* TEST1
+ TEST2
- TEST3

```
* TEST1
+ TEST2
- TEST3
```



<h2 class="ruleH2">리스트(숫자)</h2>

1. TEST1
2. TEST2
3. TEST3

```
1. TEST1
2. TEST2
3. TEST3
```



<h2 class="ruleH2">리스트(복합)</h2>

> TEST1
> TEST2
> * TEST1
> * TEST2
>> 1. TEST1
>> 2. TEST2

```
> TEST1
> TEST2
> * TEST1
> * TEST2
>> 1. TEST1
>> 2. TEST2
```



<h2 class="ruleH2">단어 강조</h2>

`_posts`

```
`_posts`
```



<h2 class="ruleH2">코드</h2>

~~~
TEST
 TEST
TEST
    TEST
~~~

~~~
 !~~~ << ! 제거
  TEST
   TEST
  TEST
      TEST
 !~~~ << ! 제거
~~~



<h2 class="ruleH2">선 긋기</h2>

--

```
--
```



<h2 class="ruleH2">URL 링크</h2>

[TEST](https://google.com)
<https://google.com>

```
[TEST](https://google.com)
<https://google.com>
```



<h2 class="ruleH2">글자 스타일</h2>

_TEST_

**TEST**

~~TEST~~

```
_TEST_

**TEST**

~~TEST~~
```



<h2 class="ruleH2">이미지 첨부</h2>

![Alt TEXT]({{ site.baseurl }}/asset/img/develoid_logo_light.png)

```
![Alt TEXT](https://develoid.github.io/asset/img/develoid_logo_light.png)
```



<h2 class="ruleH2">표 작성</h2>

| left     |    center     | right |
|:-|:-:|--:|
| col 1    |abcdefg        | 12345 |
| col 2    |   hrjklmnop   |  1234 |
| col 3    |     qrstuvwxyz|   123 |

```
| left     |    center     | right |
|:-|:-:|--:|
| col 1    |abcdefg        | 12345 |
| col 2    |   hrjklmnop   |  1234 |
| col 3    |     qrstuvwxyz|   123 |
```

* [마크다운 표 작성 사이트](https://www.tablesgenerator.com/markdown_tables)
