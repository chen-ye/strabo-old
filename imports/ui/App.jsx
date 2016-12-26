import React, { Component } from 'react';

import MapGL from 'react-map-gl';

//import Task from './Task.jsx';

// App component - represents the whole app
export default class App extends Component {
//    getTasks() {
//        return [
//            { _id: 1, text: 'This is task 1' },
//            { _id: 2, text: 'This is task 2' },
//            { _id: 3, text: 'This is task 3' },
//        ];
//    }
//
//    renderTasks() {
//        return this.getTasks().map((task) => (
//            <Task key={task._id} task={task} />
//        ));
//    }

    render() {
        return (
            <div className="map-container">
                <MapGL
                    width={400}
                    height={400}
                    latitude={37.7577}
                    longitude={-122.4376}
                    zoom={8}
                    onChangeViewport={viewport => {
                        const {latitude, longitude, zoom} = viewport;
                        // Optionally call `setState` and use the state to update the map.
                    }}
                    />
            </div>
        );
    }
}