export let mock_expensereport = {
    addRow: function addRow(params) {
        this.go("addexpense");
    },
    submit: function submit(params) {
        this.go("submitted");
    },
    auth: function auth(params) {
        this.
            go('expensereport');
    },
    expenses_editRow: function expenses_editRow(params) {
        this.go("addexpense");
    }
};
