import React from 'react';

function KeyPad(props) {


    const changeValue = (e) => {
        props.onClick(e.target.name)
    }

    return (

        <div className="calc">
            <div className="calcrow">
                <button className="operator" name="C" onClick={changeValue} >AC</button>
                <button className="operator" name="CE" onClick={changeValue}>&larr;</button>
                <button className="operator" name="*" onClick={changeValue}>*</button>
            </div>

            <div className="calcrow">
                <button className='num' name="7" onClick={changeValue}>7</button>
                <button className='num' name="8" onClick={changeValue}>8</button>
                <button className='num' name="9" onClick={changeValue}>9</button>
                <button className="operator" name="/" onClick={changeValue}>/</button>
            </div>

            <div className="calcrow">
                <button className='num' name="4" onClick={changeValue}>4</button>
                <button className='num' name="5" onClick={changeValue}>5</button>
                <button className='num' name="6" onClick={changeValue}>6</button>
                <button className="operator" name="-" onClick={changeValue}>-</button>
            </div>

            <div className='calcrow'>
                <button className='num' name="1" onClick={changeValue} >1</button>
                <button className='num' name="2" onClick={changeValue}>2</button>
                <button className='num' name="3" onClick={changeValue}>3</button>
                <button className="operator" name="+" onClick={changeValue}>+</button>
            </div>

            <div className="calcrow">
                <button className='num' name="0" onClick={changeValue}>0</button>
                <button className="equal" name="=" onClick={changeValue}>=</button>
            </div>


        </div>
    );
}

export default KeyPad;
