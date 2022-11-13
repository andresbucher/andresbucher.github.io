import { getSlicesFromFirebase, addNewSliceToFirebase } from "./firebase.js";

export async function add(amount) {
    if (amount > 0) {
        await addNewSliceToFirebase(amount);
    } else {
        console.log("invalid amount " + amount);
    }
}

export async function getSumOfFruits() {
    const sliceList = await getSlicesFromFirebase();
    return sliceList.length;
}

export async function getTotalSlices() {
    const sliceList = await getSlicesFromFirebase();
    let total = 0;
    for (let i = 0; i < sliceList.length; i++) {
        total += sliceList[i].amount;
    }
    return total;
}

export async function getMedian() {
    const data = await getSlicesFromFirebase();
    const amounts = data.map((slice) => slice.amount);
    const sortedAmounts = amounts.sort((a, b) => a - b);
    const middle = Math.floor(sortedAmounts.length / 2);
    const isEven = sortedAmounts.length % 2 === 0;
    const median = isEven ? (sortedAmounts[middle] + sortedAmounts[middle - 1]) / 2 : sortedAmounts[middle];
    console.log("Median: " + median);
    return median;
}

export async function getMean() {
    const data = await getSlicesFromFirebase();
    const amounts = data.map((slice) => slice.amount);
    const sum = amounts.reduce((a, b) => a + b, 0);
    const mean = sum / amounts.length;
    console.log("Mean: " + mean);
    return mean;
}

export async function getStabOfSlices() {
    const data = await getSlicesFromFirebase();
    const amounts = data.map((slice) => slice.amount);
    const stab = amounts.reduce((a, b) => a + b, 0);
    console.log("Stab: " + stab);
    return stab;
}

/*
const labelarray = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let dom_has_loaded = false;

let state = {
    all_slices : null,
    sum: null,
    totalsli: null,
    median: null,
    mean: null,
    stdv: null,
    bar_plot_array: null
};



function sum(){
    ray = state["all_slices"];
    state["sum"] = ray.length;
}

function totalsli() {
    ray = state["all_slices"];
    var total = 0;
    for (var i = 0; i < ray.length; i++){
        total += ray[i];
    }
    state["totalsli"] = total;
}

function median(){
    ray = state["all_slices"];
    ray.sort(function(a,b){
        return a-b;
    });
    var half = Math.floor(ray.length / 2);
    
    if (ray.length % 2) {
        med = ray[half];
    }
    else {
        med = (ray[half - 1] + ray[half]) / 2.0;
    }
    state["median"] = med;
}

function mean() {
    ray = state["all_slices"];
    state["mean"] = (ray.reduce((a, b) => a + b) / ray.length).toFixed(2);
}

function stab() {
    ray = state["all_slices"];
    const n = ray.length;
    const mean = ray.reduce((a, b) => a + b) / n;
    state["stdv"] = Math.sqrt(ray.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n).toFixed(2);
}

function count_bins_for_barplot() {
    ray0 = labelarray;
    ray1 = state["all_slices"];
    bar_plot_array = [];
    x = 0;
    for (var i = 0; i < ray0.length; i++){
        for (var j = 0; j < ray1.length; j++){
            if (ray0[i] == ray1[j]) {
                x += 1;
            }
        }
        y = x / state["sum"];
        bar_plot_array.push(y);
        x = 0;
        y = 0;
    }
    state["bar_plot_array"] = bar_plot_array;
}

function draw_boxplot() {
    ray = state["all_slices"];
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
    var boxdata = [boxplot];
    boxplotid = document.getElementById("plot-02-boxplot");
    Plotly.newPlot(boxplotid, boxdata);
}

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

function draw_plots() {
    draw_boxplot();
    draw_bar_diagram();
}

function clear_form_field() {
    document.getElementById("input0").value = "";
}


document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        
        dom_has_loaded = true;
        
        let form = document.getElementById("form");
        
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const slice = parseInt(document.getElementById("input0").value);
            if (slice >= 5 && slice <= 15) {
                
                database push





            }
            else {
                alert("schick mir es foti, süscht glaubis ned lol")
            }
        });
    }
}

*/
