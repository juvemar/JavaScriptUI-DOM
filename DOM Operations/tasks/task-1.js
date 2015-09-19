/*

 Create a function that takes an id or DOM element and an array of contents

 * if an id is provided, select the element
 * Add divs to the element
 * Each div's content must be one of the items from the contents array
 * The function must remove all previous content from the DOM element provided
 * Throws if:
 * The provided first parameter is neither string or existing DOM element
 * The provided id does not select anything (there is no element that has such an id)
 * Any of the function params is missing
 * Any of the function params is not as described
 * Any of the contents is neight `string` or `number`
 * In that case, the content of the element **must not be** changed
 */

module.exports = function solver() {

    return function (element, contents) {
        var i,
            len
        //newDiv,
        //divCopy,
        //fragment
            ;

        if (!(element instanceof HTMLElement)) {
            if (typeof(element) !== 'string') {
                throw new Error('First parameter is neither string and existing DOM element');
            }
            else {
                element = document.getElementById(element);
            }
        }

        if (!Array.isArray(contents)) {
            throw new Error("Contents is not an array");
        }

        for (i = 0, len = contents.length; i < len; i += 1) {
            if (typeof(contents[i]) !== 'string' && typeof(contents[i]) !== 'number') {
                throw new Error("Invalid content type");
            }
        }

        //el.innerHTML = '';
        //fragment = document.createDocumentFragment();
        //newDiv = document.createElement('div');
        element.innerHTML = '';

        for (i = 0, len = contents.length; i < len; i += 1) {
            //divCopy = newDiv.cloneNode(true);
            //divCopy.innerHTML = contents[i];
            //fragment.appendChild(divCopy);

            element.innerHTML += '<div>' + contents[i] + '</div>';
        }

        //el.appendChild(fragment);
    };
};