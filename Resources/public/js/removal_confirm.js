jQuery(function(a){"use strict";function t(t){if(null===i){var n=a(t.currentTarget);e.append(o(n)),i=a("#becklyn-bootstrap-modal"),i.on("click","[data-dismiss=modal]",l).modal(),t.stopPropagation(),t.preventDefault()}}function l(){null!==i&&i.on("hidden.bs.modal",n).modal("hide")}function n(){null!==i&&(i.remove(),i=null)}function o(a){var t=a.data("original-title")||a.attr("title"),l=a.attr("href"),n=a.data("confirm"),o=a.data("confirm-label")||"Fortfahren",i=a.data("cancel-label")||"Abbrechen";return['<div class="modal fade" id="becklyn-bootstrap-modal" role="dialog">','<div class="modal-dialog">','<div class="modal-content">','<div class="modal-header">','<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>','<h4 class="modal-title">',d(t),"</h4>","</div>",'<div class="modal-body">',"<p>",d(n),"</p>","</div>",'<div class="modal-footer">','<button class="btn btn-default" data-dismiss="modal">',i,"</button>",'<a href="',l,'" class="btn btn-danger">',o,"</a>","</div>","</div>","</div>","</div>"].join("")}function d(a){if(null===a||!a.length)return"";var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"},l=/[&<>"']/g;return(""+a).replace(l,function(a){return t[a]})}var i=null,e=a(document.body);a("[data-confirm]").on("click",t)});