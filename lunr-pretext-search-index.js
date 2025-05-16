var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-our-first-day",
  "level": "1",
  "url": "sec-our-first-day.html",
  "type": "Section",
  "number": "1.1",
  "title": "Our First Day",
  "body": " Our First Day  Here is the beginning of our section!  I just created a paragraph. Let's include some emphasized text. This is emphasized text. I need a quote too. Here. I need a term too. A term is something I define. And also some math, because why not. and .  These are my favorite animals, ordered in how I thought of them.   koalas   who doesn't like chickens?   Chickens    Pigeons     Now I'll tell you my favorite numbers in no particular order.   7    32    22      Hi!       1 2 3    4 5 6     Now with LaTeX...                             S_0    S_1   0  0  1  1       Do loops work?   And here is the one that didn't work:      graph={1:[3,4,5,5],2:[4,5],3:[4,5],6:[2,4]}          "
},
{
  "id": "sec-our-first-day-3",
  "level": "2",
  "url": "sec-our-first-day.html#sec-our-first-day-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "term "
},
{
  "id": "sec-our-first-day-9",
  "level": "2",
  "url": "sec-our-first-day.html#sec-our-first-day-9",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": "                  "
},
{
  "id": "sec-our-first-day-10",
  "level": "2",
  "url": "sec-our-first-day.html#sec-our-first-day-10",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": "       S_0    S_1   0  0  1  1       Do loops work?  "
},
{
  "id": "sec-our-first-day-12",
  "level": "2",
  "url": "sec-our-first-day.html#sec-our-first-day-12",
  "type": "Figure",
  "number": "1.1.3",
  "title": "",
  "body": "    graph={1:[3,4,5,5],2:[4,5],3:[4,5],6:[2,4]}         "
},
{
  "id": "sec-more-stuff",
  "level": "1",
  "url": "sec-more-stuff.html",
  "type": "Section",
  "number": "1.2",
  "title": "More stuff",
  "body": " More stuff  Just trying to create a new section!    A graph is a triple such that ....      A graph is a triple such that ....     Embedding a video.... hopefully.  Here is a video of Chris Kurz discussing order of operations in ASL.     Embedding Desmos  Here is a Desmos thing that I really, really like. Please see what happens when you change .   Graph of     "
},
{
  "id": "def-graph",
  "level": "2",
  "url": "sec-more-stuff.html#def-graph",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  A graph is a triple such that ....   "
},
{
  "id": "axiom-graph",
  "level": "2",
  "url": "sec-more-stuff.html#axiom-graph",
  "type": "Axiom",
  "number": "1.2.2",
  "title": "",
  "body": "  A graph is a triple such that ....   "
},
{
  "id": "subsec--3",
  "level": "2",
  "url": "sec-more-stuff.html#subsec--3",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": " Graph of   "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.3",
  "title": "Section Title",
  "body": " Section Title  Text of section.   Here is my contribution.  "
},
{
  "id": "sec-section-trying-tex-to-pretext",
  "level": "1",
  "url": "sec-section-trying-tex-to-pretext.html",
  "type": "Section",
  "number": "1.4",
  "title": "LaTeX converting to PreTeXt",
  "body": " LaTeX converting to PreTeXt    The quantity is more than . And if you want to know, .     Well, I said so.   "
},
{
  "id": "sec-section-trying-tex-to-pretext-2",
  "level": "2",
  "url": "sec-section-trying-tex-to-pretext.html#sec-section-trying-tex-to-pretext-2",
  "type": "Theorem",
  "number": "1.4.1",
  "title": "",
  "body": "  The quantity is more than . And if you want to know, .   "
},
{
  "id": "sec-section-trying-tex-to-pretext-3",
  "level": "2",
  "url": "sec-section-trying-tex-to-pretext.html#sec-section-trying-tex-to-pretext-3",
  "type": "Proof",
  "number": "1.4.1",
  "title": "",
  "body": " Well, I said so.  "
},
{
  "id": "sec-section-trying-more-tex",
  "level": "1",
  "url": "sec-section-trying-more-tex.html",
  "type": "Section",
  "number": "1.5",
  "title": "LaTeX converting to PreTeXt again",
  "body": " LaTeX converting to PreTeXt again   Hello.      "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book is dedicated to my family for putting up with me going to a full week workshop.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
