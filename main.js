var model = new Array(11).fill(new Array(11).fill(1));

model = model.map(function (row, i) {
    return row.map(function (col, j) {
        return i * j || (i + j);
    });
});

model.selectedRow = ko.observable(0);
model.selectedCol = ko.observable(0);
model.selectedCel = ko.pureComputed(function(){
    return model[model.selectedRow()][ model.selectedCol()];
});
model.click = function (irow, jcol) {
    console.log(irow, jcol);
    model.selectedRow(irow || model.selectedRow());
    model.selectedCol(jcol || model.selectedCol());
    return;
};

ko.applyBindings(model);