import React from 'react';
import NavigationComponent from './components/NavigationComponent';
import HomeComponent from './components/HomeComponent';
import BubbleSortComponent from './components/BubbleSortComponent';
import InsertionSortComponent from './components/InsertionSortComponent';
import SelectionSortComponent from './components/SelectionSortComponent';
import BinarySearchTree from './components/BinarySearchTree';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App bg-black">
          <NavigationComponent />
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route path="/bubbleSort" component={BubbleSortComponent} />
            <Route path="/insertionSort" component={InsertionSortComponent} />
            <Route path="/selectionSort" component={SelectionSortComponent} />
            <Route path="/binarySearchTree" component={BinarySearchTree} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
