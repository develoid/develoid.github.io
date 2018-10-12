---
layout: post
title:  "작성규칙"
date:   2018-09-16 00:00:00 +0900
author: SiRyuA
categories:
tags:
---

# ■■■ 상단 제목 작성 예시 ■■■
```
  ---
  layout: post
  title:  "마크다운 작성"
  date:   2018-09-18 00:00:00 +0900
  author: 작성자
  categories: 카테고리 // 2곳 초과되는 복수 카테고리 금지
  tags:
  - 태그1
  - 태그2
  - 태그3
  - 태그4
  ---
```

----

# ■■■ 타이틀 사이즈 ■■■

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

----

# ■■■ 리스트 ■■■

> TEST1
>> TEST2
>>> TEST3

```
> TEST1
>> TEST2
>>> TEST3
```

> TEST1
> * TEST1
> * TEST1

```
> TEST1
> * TEST1
> * TEST1
```

* TEST1
+ TEST2
- TEST3

```
* TEST1
+ TEST2
- TEST3
```
----

# ■■■ 단어강조 ■■■

`_posts`

```
`_posts`
```

----

# ■■■ 코드 ■■■

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

----

# ■■■ 줄긋기 ■■■

------

```
------
```

----

# ■■■ URL 링크 ■■■

[TEST](https://google.com)
<https://google.com>

```
[TEST](https://google.com)
<https://google.com>
```

----

# ■■■ 글자 스타일 ■■■

_TEST_

**TEST**

~~TEST~~

```
_TEST_

**TEST**

~~TEST~~
```

----

# ■■■ 이미지 ■■■

![Alt TEXT]({{ site.baseurl }}/asset/img/logo.png)

```
![Alt TEXT](https://develoid.github.io/asset/img/logo.png)
```

----

# ■■■ 표 ■■■

| left     |    center     | right |
|:---------|:-------------:|------:|
| col 1    |abcdefg        | 12345 |
| col 2    |   hrjklmnop   |  1234 |
| col 3    |     qrstuvwxyz|   123 |

```
| left     |    center     | right |
|:---------|:-------------:|------:|
| col 1    |abcdefg        | 12345 |
| col 2    |   hrjklmnop   |  1234 |
| col 3    |     qrstuvwxyz|   123 |
```

[마크다운 표 작성 사이트](https://www.tablesgenerator.com/markdown_tables)
