
var slChart = Class.$extend({
    __init__: function(options){

        this.canvasId = options.canvasId;
        this.id = options.id;
        this.period_id = options.period_id;
        this.url = options.url
        sl.log("slChart options::",options);
        this.context = jQuery("#" + this.canvasId).get(0).getContext("2d");
        this.paintGraph()
    },

    getData: function(){


        var url = this.url + "?id=" + this.id + "&period_id=" + this.period_id;
        var data = jQuery.ajax({
            url:url,
            dataType:"json"
        })
        return data;
    },
    processData:function(data, textStatus, jqXHR){
        sl.log("data to process",data);
        var percentages = [];
        var dates = [];
        for (var i=0; i <data.length; i++){
            percentages.push(data[i].percentage);
            dates.push(data[i].date)
        }
        sl.log("percentages",percentages)
        sl.log("dates",dates)

        this.paint(percentages,dates)

    },

    paint: function(percentages,dates) {
          sl.log("paint",percentages,dates)
        var config = {
            type: 'line',
            data: {
                labels: dates, // Hours

                datasets: [{
                    label: "Grade Trend",
                    data: percentages,
                    fill: false
                }]
            },

            options: {
                bezierCurve : false,
                responsive: true,
                scales: {
                    xAxes: [
                        {
                            type: "time",
                            display: true,
                            time: {
                                format: 'MM/DD/YY',
                                displayFormat: 'MM/DD/YY'
                            },
                            ticks: {
                                userCallback: function (dataLabel, index, data) {
                                    return index % (data.length - 1) === 0 ? dataLabel : ''; //only first and last dates
                                }
                            }
                        }
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                show: true,
                                labelString: 'Percent'
                            },
                            ticks: {
                                userCallback: function (dataLabel, index, data) {
                                    return parseFloat(dataLabel.toFixed(2));
                                }
                            }
                        }
                    ]
                }
            }
        };
        var myLineChart = new Chart(this.context,config);
    },

    paintGraph: function(){
        jQuery.when(this.getData()).then(jQuery.proxy(this.processData,this))
    }

})