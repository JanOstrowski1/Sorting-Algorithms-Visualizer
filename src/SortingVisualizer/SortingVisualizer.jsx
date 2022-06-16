import React from "react";
import './sortingVisualizer.css';
import '../sortingAlgorithms/sortingAlgorithms.js'

export class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }


    componentDidMount() {
        this.resetArray();
    }

    resetArray =() => {
        const array = [];
        for (let i = 0; i < 140; i++) {
            array.push(randomIntFromInterval(5, 700));
        }
        this.setState({array});
    }

    mergeSort(){

    }

    quickSort(){

    }

    heapSort(){

    }

    bubbleSort(){

    }


    render() {
        const {array} = this.state;

        return (
            <>
                <div id="container">
                    <div className="arrayBarWrapper">
                        {array.map((value, idx) => (
                            <div
                                className="arrayBar"
                                key={idx}
                                style={{height: `${value}px`,marginTop:`calc(70vh-${value}px)`}}>
                            </div>
                        ))}
                    </div>
                    <div className="buttonWrapper">
                        <button className="button" onClick={this.resetArray}>Generate new array</button>
                        <button className="button" >Merge Sort</button>
                        <button className="button" >Quick Sort</button>
                        <button className="button" >Heap Sort</button>
                        <button className="button" >Bubble Sort</button>
                    </div>
                </div>
            </>
        );
    }


}

function randomIntFromInterval(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}