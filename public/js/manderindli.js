import { async } from "@firebase/util";
import { getSlicesFromFirebase, addNewSliceToFirebase } from "./firebase.js";

const labelarray = [6,7,8,9,10,11,12,13,14,15];
var xx = 0;
var yy = 0;

export async function add(amount) {
    if (amount > 0) {
        await addNewSliceToFirebase(amount);
    } else {
        console.log("invalid amount " + amount);
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
    return mean;
};

export async function getStabOfSlices() {
    const data = await getSlicesFromFirebase();
    const amounts = data.map((slice) => slice.amount);
    const stab = amounts.reduce((a, b) => a + b, 0);
    return stab;
};

export async function count_bins_for_barplot() {
    const ray0 = labelarray;
    const ray1 = await getSlicesFromFirebase();
    let bar_plot_array = [2,1];
    const zz = await getSumOfFruits();
    for (var i = 0; i < ray0.length; i++){
        for (var j = 0; j < ray1.length; j++){
            if (ray0[i] == ray1[j]) {
                xx += 1;
            }
        }
        yy = xx / +(zz);
        console.log(yy);
        bar_plot_array.push(yy);
    }
    console.log(bar_plot_array);
    return bar_plot_array;
};

export async function draw_boxplot() {
    ray = await getSlicesFromFirebase();
    var boxplot = {
    x: "boxplot",
    y: ray,
    name: "slices",
    marker: {color: '#FF851B'},
    type: "box"
    };  
    
    var layout = {
        yaxis: {
            title: "Anzahl Schnitze", 
            zeroline: false
        },
    };
    const boxplotid = document.getElementById("plot-02-boxplot").innerHTML;
    Plotly.newPlot('plot-02-boxplot', boxplotid, boxplot);
};

/* QQQQQQQQQQQQQQQQQQQQ */


function draw_bar_diagram(){
    ray0 = labelarray;
    ray1 = state["bar_plot_array"];
    //console.log(state["bar_plot_array"])
    var data = [
        {
            x: ray0,
            y: ray1,
            type: 'bar'
        }
    ];
    var layout = {
        xaxis: {
            showticklabels: true,
            type: 'category',
        }
    }
    Plotly.newPlot('plot-01-bar', data, layout);
}

function update_stats() {
    sum();
    median();
    mean();
    stab();
    totalsli();
    count_bins_for_barplot();
}

function draw_stats(){
    document.getElementById('sum_of_fruits').innerHTML = state["sum"];
    document.getElementById("total_slices").innerHTML = state["totalsli"];
    document.getElementById('median_of_slices').innerHTML = state["median"];
    document.getElementById('mean_of_slices').innerHTML = state["mean"];
    document.getElementById('stab_of_slices').innerHTML =  state["stdv"];
}