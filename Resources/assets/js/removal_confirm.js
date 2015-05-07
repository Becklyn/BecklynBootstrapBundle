jQuery(function($) {
    "use strict";

    var $modal = null;
    var $body  = $(document.body);

    /**
     * Handles the element click
     *
     * @param event {jQuery.Event}
     */
    function onElementClick (event)
    {
        // there is an open modal already
        if ($modal !== null)
        {
            return;
        }

        var $link = $(event.currentTarget);
        $body.append(renderModalContent($link));
        $modal = $("#becklyn-bootstrap-modal");
        $modal
            .on("click", "[data-dismiss=modal]", onHide)
            .modal();

        event.stopPropagation();
        event.preventDefault();
    }

    /**
     * Callback, when the modal should be hidden
     */
    function onHide ()
    {
        if ($modal !== null)
        {
            $modal
                .on("hidden.bs.modal", onHidden)
                .modal("hide");
        }
    }

    /**
     * Callback for when the element is hidden
     */
    function onHidden ()
    {
        if ($modal !== null)
        {
            $modal.remove();
            $modal = null;
        }
    }

    function renderModalContent ($link)
    {
        var title        = $link.data("original-title") || $link.attr("title");
        var url          = $link.attr("href");
        var message      = $link.data("confirm");
        var confirmLabel = $link.data("confirm-label") || "Continue";
        var cancelLabel  = $link.data("cancel-label") || "Cancel";

        return [
            '<div class="modal fade" id="becklyn-bootstrap-modal" role="dialog">',
                '<div class="modal-dialog">',
                    '<div class="modal-content">',
                        '<div class="modal-header">',
                            '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>',
                            '<h4 class="modal-title">', escapeHtml(title), '</h4>',
                        '</div>',
                        '<div class="modal-body">',
                            '<p>', escapeHtml(message), '</p>',
                        '</div>',
                        '<div class="modal-footer">',
                            '<button class="btn btn-default" data-dismiss="modal">', cancelLabel ,'</button>',
                            '<a href="', url, '" class="btn btn-danger">', confirmLabel ,'</a>',
                        '</div>',
                    '</div>',
                '</div>',
            '</div>'
        ].join("");
    }

    /**
     * Escapes inline HTML
     *
     * Inspired by underscore.js's _.escape
     *
     * @param string
     * @returns {string}
     */
    function escapeHtml (string)
    {
        if ((string === null) || !string.length)
        {
            return '';
        }

        var entityMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;'
        };
        var regex = /[&<>"']/g;

        return ('' + string).replace(regex, function (match) { return entityMap[match]; });
    }

    // register necessary event listeners
    $("[data-confirm]").on("click", onElementClick);
});
