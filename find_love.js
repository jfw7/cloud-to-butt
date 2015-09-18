String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

walk(document.body);
var heartbeat = document.createElement('div');
heartbeat.className = 'find-love-heartbeat';
heartbeat.style.top = (80*Math.random() + 10) + "%";
heartbeat.style.left = (80*Math.random() + 10) + "%";
document.body.appendChild(heartbeat);

function walk(node) {
  // I stole this function from here:
  // http://is.gd/mwZp7E

  var child, next;

  switch (node.nodeType) {
    case 1: // Element
    case 9: // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      handleText(node);
      break;
  }
}

function handleText(textNode) {
  var i = 0;
  var max = Math.random() * 100;

  while (i++ < max) {

    var v = textNode.nodeValue;

    var verb = window.findLoveVerbs[Math.floor(Math.random() * window.findLoveVerbs.length)];
    var noun = window.findLoveNouns[Math.floor(Math.random() * window.findLoveNouns.length)];

    v = v.replace(new RegExp('\\b' + verb + 'ing', 'g'), 'loving');
    v = v.replace(new RegExp('\\b' + verb.capitalizeFirstLetter() + 'ing', 'g'), 'Loving');
    v = v.replace(new RegExp('\\b' + verb, 'g'), 'love');
    v = v.replace(new RegExp('\\b' + verb.capitalizeFirstLetter(), 'g'), 'Love');
    v = v.replace(new RegExp('\\b' + noun, 'g'), 'love');
    v = v.replace(new RegExp('\\b' + noun.capitalizeFirstLetter(), 'g'), 'Love');
    v = v.replace('lovee', 'love');
    v = v.replace('Lovee', 'Love');
    v = v.replace('loveing', 'loving');
    v = v.replace('Loveing', 'Loving');

    v = v.replace('')

    textNode.nodeValue = v;
  }

}
