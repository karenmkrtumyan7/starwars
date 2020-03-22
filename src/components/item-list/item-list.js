import React, { Component } from 'react';
import "./item-list.css";
import Loader from '../loader/loader';

class ItemList extends Component {
    render() {
        const {data, renderItem, setId } = this.props;
        const names = data.map( (el, i) => { 
            const label = renderItem(el);
            return (<li key={ el.name + i } 
                        onClick={() => setId(`${i + 1}`)}>
                        { label }
                    </li>);
            });
        return (
            <>
                { data.length ? <ul className="list"> { names } </ul> : <Loader/> }
            </>
        );
    }
}


export default ItemList;