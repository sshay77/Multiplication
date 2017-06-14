import ko from 'knockout';
import homeTemplate from 'text!./home.html';

class HomeViewModel {
    constructor(route) {

        this.message = ko.observable('Welcome to yo-ko!');

        var model = new Array(11).fill(new Array(11).fill(1));

        model = model.map(function (row, i) {
            return row.map(function (col, j) {
                return i * j || (i + j);
            });
        });

        this.model = model;
        this.selectedRow = ko.observable(0);
        this.selectedCol = ko.observable(0);
        this.selectedCel = ko.pureComputed(function () {
            return this.model[this.selectedRow()][this.selectedCol()];
        }, this);
    }

    reset() {
        this.selectedRow(0);
        this.selectedCol(0);
        this.message('You invoked doSomething() on the viewmodel.');
    }

    click(irow, jcol) {
        console.log(irow, jcol);
        this.selectedRow(irow || this.selectedRow());
        this.selectedCol(jcol || this.selectedCol());
        return;
    }
}

export default { viewModel: HomeViewModel, template: homeTemplate };