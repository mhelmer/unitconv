#Unit Converter

Searches a website for textareas and appends imperial/metric weights with their respective conversion in parenthesis. For example, a textarea with the text

> My deadlift 1RM is currently 165 kg and my squat 1RM is 150 kg.

would be replaced with

> My deadlift 1RM is currently 165 kg (363.8 lbs) and my squat 1RM is 150 kg (330.7 lbs).

To use it, add a bookmark with the following URL, then click it when you want to convert your textarea data.

```
javascript:(function(){if(typeof convertTextareas=="undefined"){s=document.createElement('script');s.type='text/javascript';s.src='https://mhelmer.github.io/unitconv/js/unitconv.js?v='+parseInt(Math.random()*99999999);s.onload=function(){convertTextareas();};document.body.appendChild(s);}else{convertTextareas();}})();
```

Alternatively, you can paste into the box on https://mhelmer.github.io/unitconv/

