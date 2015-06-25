function convertTextareas() {
    var textareas = document.getElementsByTagName("textarea");
		console.log(textareas.length);
    for (var i = 0; i < textareas.length; i++) {
        textareas[i].value = textareas[i].value.replace(
            /\d+\.?\d+\s+(kg|lbs)/g, 
            function (match, capture) {
                if(capture == 'kg') {
                    factor = 2.20462;
                    unit = 'lbs';
                } else {
                    factor = 0.453592;
                    unit = 'kg';
                }
                return match + ' (' + match.replace(/(\d+\.?\d+)\s+(?:kg|lbs)/g,
                                     function (match2, capture2) {
                                         return Math.round(capture2 * factor * 10) / 10;
                                     }) + ' ' + unit + ')';
            });
    }
		return false;
};
