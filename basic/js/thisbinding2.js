function Chart() {
    this.count = 0;
}
Chart.prototype.getCount = function () {
    //debugger    
    console.log(this.count);
    return this.count;
}

var chart1 = new Chart();
chart1.getCount();