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
{% endpug %}
```

### version: "0.0.4"
add pug external file

mixin.pug
```
mixin tableRow(...items)
  tr
    each item in items
      td= item
mixin tableHeader(...items)
  tr.w3-theme
    each item in items
      th= item
```

book.json

```
{
    "plugins": [
        "pug"
    ],
    "pluginsConfig": {
      "pug": {
        "mixin": "mixin.pug"
      }        
    }
}
```

gitbook file

```
{% pug %}
table.w3-table-all.w3-card-4.w3-hoverable 
    +tableHeader('a','b','c','d','e','f','g')
    +tableRow('a','b','c','d','e','f','g')
{% endpug %}
```

