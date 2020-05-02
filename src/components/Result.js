import React from 'react';

function Result(props) {
    let result = props.result;
    return (
        <div className="result">
            {result}
        </div>
    );
}

export default Result;
