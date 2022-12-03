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

export async function getSumOfFruits() {
    const sliceList = await getSlicesFromFirebase();
    return sliceList.length;
};

export async function getTotalSlices() {
    const sliceList = await getSlicesFromFirebase();
    let total = 0;
    for (let i = 0; i < sliceList.length; i++) {
        total += sliceList[i].amount;
    }
    return total;
};

export async function getMedian() {
    const data = await getSlicesFromFirebase();
    const amounts = data.map((slice) => slice.amount);
    const sortedAmounts = amounts.sort((a, b) => a - b);
    const middle = Math.floor(sortedAmounts.length / 2);
    const isEven = sortedAmounts.length % 2 === 0;
    const median = isEven ? (sortedAmounts[middle] + sortedAmounts[middle - 1]) / 2 : sortedAmounts[middle];
    return median;
};

export async function getMean() {
    const data = await getSlicesFromFirebase();
    const amounts = data.map((slice) => slice.amount);
    const sum = amounts.reduce((a, b) => a + b, 0);
    const mean = sum / amounts.length;
    let rounded_mean = mean.toFixed(2)
    return rounded_mean;
};

export async function getStabOfSlices() {
    const data = await getSlicesFromFirebase();
    const amounts = data.map((slice) => slice.amount);
    const n = amounts.length;
    const mean = amounts.reduce((a, b) => a + b) / n;
    var stab = Math.sqrt(amounts.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
    let rounded_stab = stab.toFixed(2);
    return rounded_stab;
};

export async function count_bins_for_barplot() {
    const labelarray = [6,7,8,9,10,11,12,13,14,15];
    var xx = 0;
    var yy = 0;
    const ray0 = labelarray;
    const ray1 = await getSlicesFromFirebase();
    const amounts = ray1.map((slice) => slice.amount);
    var bar_plot_array = [];
    const zz = parseInt(await getSumOfFruits());

    for (var i = 0; i < ray0.length; i++){
        for (var j = 0; j < amounts.length; j++){
            if (ray0[i] == amounts[j]) {
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
    const labelarray = [6,7,8,9,10,11,12,13,14,15];
    var ray0 = labelarray;
    var ray1 = await count_bins_for_barplot();
    console.log(ray1, "RAY1");
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
    var ray = await getSlicesFromFirebase();
    const amounts = ray.map((slice) => slice.amount);
    var data = [{
    x: "boxplot",
    y: amounts,
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