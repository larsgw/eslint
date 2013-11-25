/**
 * @fileoverview Tests for no-alert rule.
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslintTester = require("../../../lib/tests/eslintTester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

eslintTester.add("no-alert", {
    valid: [
        "a[o.k](1)",
    	"foo.alert(foo)",
    	"foo.confirm(foo)",
    	"foo.prompt(foo)"
    ],
    invalid: [
        { code: "alert(foo)", errors: [{ message: "Unexpected alert.", type: "CallExpression"}] },
        { code: "window.alert(foo)", errors: [{ message: "Unexpected alert.", type: "CallExpression"}] },
        { code: "confirm(foo)", errors: [{ message: "Unexpected confirm.", type: "CallExpression"}] },
        { code: "window.confirm(foo)", errors: [{ message: "Unexpected confirm.", type: "CallExpression"}] },
        { code: "prompt(foo)", errors: [{ message: "Unexpected prompt.", type: "CallExpression"}] },
        { code: "window.prompt(foo)", errors: [{ message: "Unexpected prompt.", type: "CallExpression"}] }
    ]
});
