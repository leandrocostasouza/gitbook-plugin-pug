GitBook Pug Plugin
==============

This is a [Pug](http://jade-lang.com/reference) GitBook plugins.
  
  ```
{% pug %}
mixin tableRow(...items)
  tr
    each item in items
      td= item
mixin tableHeader(...items)
  tr.w3-theme
    each item in items
      th= item

table.w3-table-all.w3-card-4.w3-hoverable 
    +tableHeader('a','b','c','d','e','f','g')
    +tableRow('a','b','c','d','e','f','g')
    +tableRow('a','b','c','d','e','f','g')
    +tableRow('a','b','c','d','e','f','g')
    +tableRow('a','b','c','d','e','f','g')
    +tableRow('a','b','c','d','e','f','g')
    +tableRow('a','b','c','d','e','f','g')
    +tableRow('a','b','c','d','e','f','g')
    +tableRow('a','b','c','d','e','f','g')
    +tableRow('a','b','c','d','e','f','g')
    +tableRow('a','b','c','d','e','f','g')
    +tableRow('a','b','c','d','e','f','g')
    +tableRow('a','b','c','d','e','f','g')
    +tableRow('a','b','c','d','e','f','g')
    +tableRow('a','b','c','d','e','f','g')
    +tableRow('a','b','c','d','e','f','g')
    +tableRow('a','b','c','d','e','f','g')
{% endpug %}
```
