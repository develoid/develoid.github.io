---
layout: default
page_title: DEVELGUIDE
---

<main>

<div class="Side-Bar_dummy"></div>

<div class="h1-with-account">
  <h1 class="LargeTitle">디벨가이드</h1>
</div>

<div class="div-search mobile-search pointer">
  <i class="iSearch iRegular"></i>
  <h3 class="Subheadline">테크 지식</h3>
</div>

<div class="Activity">
  <div class="text text-row">
    <h2 class="Title2">색인</h2>
  </div>

  <div class="category">
  {% assign pages_list = site.pages %}
  {% for node in pages_list %}
    {% if node.title != null %}
      {% if node.layout == "category" %}
      <a href="{{ site.baseurl }}{{ node.url }}">
        <div class="box-A {% if page.url == node.url %} active{% endif %}">
          <div class="box_text-A">
            <p class="Body f500">{{ node.title }}</p>
          </div>
          <div class="box_go">
            <i class="iArrowKeyRight fill"></i>
          </div>
        </div>
      </a>
      {% endif %}
    {% endif %}
  {% endfor %}
  </div>

  <div class="divider"></div>

  <div class="grid-row row-3-col">
    <a href="/license.html">
      <div class="box-A">
        <div class="box_icon-A">
          <i class="iShare fill"></i>
        </div>
        <div class="box_text-A">
          <p class="Body f500">라이센스</p>
        </div>
        <div class="box_go">
          <i class="iArrowKeyRight fill"></i>
        </div>
      </div>
    </a>
    <a href="/participation.html">
      <div class="box-A">
        <div class="box_icon-A">
          <i class="iInventoryNote fill"></i>
        </div>
        <div class="box_text-A">
          <p class="Body f500">참여방법</p>
        </div>
        <div class="box_go">
          <i class="iArrowKeyRight fill"></i>
        </div>
      </div>
    </a>
    <a href="/edit-rules.html">
      <div class="box-A">
        <div class="box_icon-A">
          <i class="iEdit fill"></i>
        </div>
        <div class="box_text-A">
          <p class="Body f500">작성방법</p>
        </div>
        <div class="box_go">
          <i class="iArrowKeyRight fill"></i>
        </div>
      </div>
    </a>
  </div>

</div>

</main>