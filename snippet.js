// MIT license, see: https://github.com/tjcrowder/simple-snippets-console/blob/master/LICENSE
var snippet = {
    version: "1.1",

    // Writes out the given text in a monospaced paragraph tag, escaping
    // & and < so they aren't rendered as HTML.
    log: function(msg, tag) {
        var elm = document.createElement(tag || "p");
        elm.style.fontFamily = "monospace";
        elm.style.margin = "2px 0 2px 0";
        if (Object.prototype.toString.call(msg) === "[object Array]") {
            msg = msg.join();
        } else if (typeof object === "object") {
            msg = msg === null ? "null" : JSON.stringify(msg);
        } else {
            msg = String(msg);
        }
        elm.innerHTML = msg.replace(/&/g, '&amp;').replace(/</g, '&lt;');
        document.body.appendChild(elm);
    },

    // Writes out the given HTML at the end of the body,
    // exactly as-is
    logHTML: function(html) {
        document.body.insertAdjacentHTML("beforeend", html);
    }
};
