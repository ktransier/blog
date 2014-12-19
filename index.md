---
layout: main
published: true
---

{% for post in site.categories['blog'] %}
  <div class="post">
    <div class="post-title">
      <a href="{{ post.url}}">{{ post.title }}</a>
    </div>
    <div class="post-date">
      {{post.date | date: "%B %Y" }}
    </div>
    {{ post.excerpt }}
  </div>
{% endfor %}
