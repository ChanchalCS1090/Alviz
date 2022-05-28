import { useState } from "react";
import BinaryTree from "./BinaryTree.js";

const BinarySearchTree = () => {

    const initialState = {
        nodes: "50,25,75,12,38,62,88,6,18,32,44,56,68,81,93,3,9,15,21,29,35,41,47,53,59,65,71,78,84,90,96,2,5,8,11,14,17,20,23,28,31,34,37,40,43,46,49,52,55,58,61,64,67,70,73,77,80,83,86,89,92,95,98",
        search: 5,
        speed: 5,
        tree: [],
        height: 0,
    }

    const [state, setState] = useState(initialState);

    const inputHandler = (event) =>
        setState({ ...state, [event.target.name]: event.target.value });

    const draw = () => {
        let nodes = state.nodes.split(",").map(Number);
        let tree = new BinaryTree();
        nodes.forEach(element => {
            tree.insert(element);
        });
        let queue = [], prestatetree = [];
        queue.push(tree.root);
        let flag = true;
        while (flag) {
            flag = false;
            let temp = [];
            for (let i = 0; i < queue.length; i++) {
                const element = queue[i];
                if (element) {
                    temp.push(element.value);
                }
                else {
                    temp.push(element);
                }
            }
            prestatetree.push(temp.slice(0));
            let tempqueue = queue.slice(0);
            queue = [];
            for (let i = 0; i < tempqueue.length; i++) {
                const element = tempqueue[i];
                if (element) {
                    queue.push(element.left);
                    queue.push(element.right);
                    flag = true;
                }
                else {
                    queue.push(null);
                    queue.push(null);
                }
            }
        }
        setState({ ...state, tree: prestatetree.slice(0), height: tree.height });
    }

    const play = () => {
        console.log(state.tree);
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col text-center py-4">
                    <h4 className="text-1">Binary Search Tree</h4>
                </div>
            </div>
            <div className="row">
                <div className="col text-light d-flex justify-content-around">
                    <label>Nodes: <input name="nodes" className="mx-4" defaultValue={state.nodes} onChange={inputHandler}></input></label>
                    <label>Node to Search: <input name="search" type="number" className="mx-4" defaultValue={state.search}></input></label>
                    <label>Speed:
                        <select name="speed" type="select" className="mx-4" defaultValue={state.speed}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </label>
                    <button className="btn btn-success" onClick={draw}>Generate Tree</button>
                    <button className="btn btn-success" onClick={play}>Play</button>
                </div>
            </div>
            <div className="row">
                <div className="tree col pt-5 mt-5" style={{ width: `${30 * Math.pow(2, (state.height - 1))}px` }}>
                    {state.tree.map((element, i) => {
                        if (i < state.tree.length - 1)
                            return <div key={i} className="py-4 treerow d-flex justify-content-around">
                                {element.map((node, i) => {
                                    return <div key={i} className="node d-flex justify-content-center align-items-center">{node ? node : ""}</div>
                                })}
                            </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default BinarySearchTree;