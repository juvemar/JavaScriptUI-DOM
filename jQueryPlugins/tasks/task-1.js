function solve() {
    return function (selector) {
        var $selectedList = $(selector)
                .hide(),
            i;

        var options = $selectedList.find('option');

        var numberOfOptions = $selectedList.find('option').size();

        var $dropDiv = $('<div />')
            .addClass('dropdown-list')
            .append($selectedList);

        var $currentDiv = $('<div />')
            .addClass('current')
            .attr('data-value', '')
            .text('Select value');

        var $containerDiv = $('<div />')
            .addClass('options-container')
            .css({
                'position': 'absolute',
                'display': 'none'
            });

        $currentDiv.on('click', function () {
            var $container = $('.options-container');
            $container.css('display', 'inline-block');
        });

        $containerDiv.on('click', function (ev) {
            var $clicked = $(ev.target);
            var $divToDisplay = $('.current');
            $divToDisplay.text($clicked.html());
            $selectedList.val($clicked.attr('data-value'));

            var $container = $(this)
                .css('display', 'none');
        });

        ;

        for (i = 0; i < numberOfOptions; i += 1) {
            var $dropItem = $('<div />')
                .addClass('dropdown-item')
                .attr('data-value', $(options[i]).val())
                .attr('data-index', i + 1)
                .text($(options[i]).text())
                .appendTo($containerDiv);
        }

        $dropDiv.appendTo('body');
        $currentDiv.appendTo($dropDiv);
        $containerDiv.appendTo($dropDiv);
    };
}

module.exports = solve;