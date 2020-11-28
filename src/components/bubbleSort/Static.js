import React from 'react';
import { Row, Col } from 'reactstrap';

class BubbleSortComponent extends React.Component {

    render() {

        let rows = [];
        let row = [];
        let array = this.props.array.slice(0);
        let length = this.props.array.length;
        for (let cl = 0; cl < length; cl++) row.push(<Col key={cl + 1} className="p-2 bgc-0 border border-dark">{ array[cl] }</Col>);
        rows.push(<Row key={0} className="m-2 border border-dark">{ row.slice(0) }</Row>)
        for (let i = 0, k = 1000; i < length; i++) {

            for (let j = 0; j < length - i - 1; j++) {

                row = [];
                if (array[j] > array[j + 1]) {

                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    for (let c = 0; c < length; c++) {
                        if(c === j) row.push(<Col key={c + 100} className="p-2 border bgc-18 border-dark">{ array[c] }</Col>);
                        else if(c === j + 1) row.push(<Col key={c + 100} className="p-2 border bgc-19 border-dark">{ array[c] }</Col>);
                        else row.push(<Col key={c + 100} className="p-2 border bgc-0 border-dark">{ array[c] }</Col>);
                    } 
                    rows.push(<Row key={k++} className="m-2 border border-dark">{ row.slice(0) }</Row>);
                }
            }
        }

        return (

            <div className="m-5">
                {rows}
            </div>
        );
    }
}

export default BubbleSortComponent;