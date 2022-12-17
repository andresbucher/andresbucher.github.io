import { async } from "@firebase/util";
import { getSlicesFromFirebase, addNewSliceToFirebase } from "./firebase.js";
import Plotly from "../../node_modules/plotly.js-dist";
import { doc } from "firebase/firestore/lite";

export async function add(amount) {
    if (amount > 0 && amount < 16) {
        await addNewSliceToFirebase(amount);
    } else {
        alert("invalid amount suspected: " + amount + " please send a picture of the tangerine to Andi for data-manipulation inspection");
    }
};


export async function get_list_from_firebase() {
    const object = await getSlicesFromFirebase();
    const sliceObject = object.map((slice) => slice.amount);
    database_list.length = 0;
    database_list = database_list.concat(sliceObject);
};

export async function getSumOfFruits() {
    var slicelist = database_list;
    return slicelist.length;
};

export async function getTotalSlices() {
    var slicelist = database_list;
    let total = 0;
    for (let i = 0; i < slicelist.length; i++) {
        total += slicelist[i];
    }
    return total;
};

export async function getMedian() {
    var slicelist = database_list;
    const sortedAmounts = slicelist.sort((a, b) => a - b);
    const middle = Math.floor(sortedAmounts.length / 2);
    const isEven = sortedAmounts.length % 2 === 0;
    const median = isEven ? (sortedAmounts[middle] + sortedAmounts[middle - 1]) / 2 : sortedAmounts[middle];
    return median;
};

export async function getMean() {
    var slicelist = database_list;
    const sum = slicelist.reduce((a, b) => a + b, 0);
    const mean = sum / slicelist.length;
    let rounded_mean = mean.toFixed(2)
    return rounded_mean;
};

export async function getStabOfSlices() {
    var slicelist = database_list;
    const n = slicelist.length;
    const mean = slicelist.reduce((a, b) => a + b) / n;
    var stab = Math.sqrt(slicelist.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
    let rounded_stab = stab.toFixed(2);
    return rounded_stab;
};

export async function count_bins_for_barplot() {
    var slicelist = database_list;
    const labelarray = [5,6,7,8,9,10,11,12,13,14,15];
    var xx = 0;
    var yy = 0;
    const ray0 = labelarray;
    var bar_plot_array = [];
    const zz = parseInt(await getSumOfFruits());

    for (var i = 0; i < ray0.length; i++){
        for (var j = 0; j < slicelist.length; j++){
            if (ray0[i] == slicelist[j]) {
                xx += 1;
            };
        };
        yy = parseFloat(xx / zz);
        bar_plot_array.push(yy);
        xx = 0;
    };
    return bar_plot_array;
};

export async function draw_bar_diagram() {
    const labelarray = [5,6,7,8,9,10,11,12,13,14,15];
    var ray0 = labelarray;
    var ray1 = await count_bins_for_barplot();
    console.log(labelarray);
    var data = [{
            x: ray0,
            y: ray1,
            marker: {color: '#FF851B'},
            type: 'bar',
        }
    ];

    var layout = {
        xaxis: {
            showticklabels: true,
            type: 'category',
        }
    };
    var config = {responsive: true}
    Plotly.newPlot("plot-01-bar", data, layout, config);
};

export async function draw_boxplot() {
    var slicelist = database_list;
    var data = [{
    x: "boxplot",
    y: slicelist,
    name: "segments",
    marker: {color: '#FF851B'},
    type: "box"
        }
    ];  
    
    var layout = {
        yaxis: {
            title: "Anzahl Segmente", 
            zeroline: false
        },
    };
    var config = {responsive: true}
    Plotly.newPlot('plot-02-boxplot', data, layout, config);
};

var database_list = [];