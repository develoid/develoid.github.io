---
layout: default
page_title: DEVELGUIDE
---


<div data-include-path="./Header.html"></div>
<div data-include-path="./TabBar.html"></div>
<div data-include-path="./SideBar.html"></div>

<main>

<div class="Side-Bar_dummy"></div>

<div class="h1-with-account">
    <h1 class="LargeTitle">디벨가이드</h1>
</div>

<div class="Activity">

<div class="search">
<input type="text" id="searchInput" class="searchInput" placeholder="search...">
<ul id="searchResults" class="searchResults"></ul>
</div>

<div class="category">
<ul class="categoryList">
{% assign pages_list = site.pages %}
{% for node in pages_list %}
  {% if node.title != null %}
    {% if node.layout == "category" %}
    <a class="categoryLink {% if page.url == node.url %} active{% endif %}"
    href="{{ site.baseurl }}{{ node.url }}"><li><b>{{ node.title }}</b></li></a>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>
</div>

</div>

</main>

<!-- Script pointing to jekyll-search.js -->
<script src="{{site.baseurl}}/asset/js/jekyll-search.js" type="text/javascript"></script>
<script src="{{site.baseurl}}/asset/js/import.js" type="text/javascript"></script>
<script src="{{site.baseurl}}/asset/js/theme-toggle.js" type="text/javascript"></script>
<script src="{{site.baseurl}}/asset/js/header-scroll.js" type="text/javascript"></script>

<script type="text/javascript">
      SimpleJekyllSearch({
        searchInput: document.getElementById('searchInput'),
        resultsContainer: document.getElementById('searchResults'),
        json: '{{ site.baseurl }}/search.json',
        searchResultTemplate: '<a href="{url}" title="{desc}"><li>{title}</li></a>',
        noResultsText: '<li>검색 결과를 찾을 수 없습니다..ㅠㅜ</li>',
        limit: 20,
        fuzzy: false,
        exclude: ['Welcome']
      })
</script>
