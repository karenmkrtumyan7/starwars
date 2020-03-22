import React, { useEffect, useState } from 'react';
import "./item.css"
import ErrorComponent from '../error/error';
import Loader from '../loader/loader';

function Item(props) {
    let {id, onItemSelected, getImage, children} = props;
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const {name} = data;
    const image = getImage(id);

    useEffect(() => {
        if (!id) {
            return;
        }
        setLoaded(false);
        onItemSelected(id)
            .then(data => {
                setData(data);
                setError(false);
            })
            .catch(e => {
                setError(true);
            })
            .finally(() => setLoaded(true));
    }, [id, onItemSelected]);

    if (!id) {
        return null;
    } else if (error && loaded) {
        return <ErrorComponent />
    } else if (!loaded && !error) {
        return <Loader />
    }

    return (
        <div className="item">
            <div className="person-image">
                <img src={image} alt="person"/>
            </div>
            <div className="person-info">
                <h1>{name}</h1>
                <ul>
                    {React.Children.map(children, child => React.cloneElement(child, {data}))}
                </ul>
            </div>
        </div>
    )
}

export default Item;