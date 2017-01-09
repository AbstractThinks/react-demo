import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { hashHistory } from 'react-router';
import Infinite from 'react-infinite';

const animaConfig = [
    { opacity: [1, 0], translateY: [0, 50] },
    { opacity: [1, 0], translateY: [0, -50] }
]



class InfiniteComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: this.buildElements(0, 20),
            isInfiniteLoading: false
        }
    }
    componentWillMount() {

    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    login() {
        hashHistory.push('boilerplate');
    }

    buildElements(start, end) {
        var elements = [];
        for (var i = start; i < end; i++) {
            elements.push(
                <div key={i} className="infinite-list-item">
                    List Item {i}
                </div>
            )
        }
        return elements;
    }
    handleInfiniteLoad() {
        var that = this;
        this.setState({
            isInfiniteLoading: true
        });
        setTimeout(function() {
            var elemLength = that.state.elements.length,
                newElements = that.buildElements(elemLength, elemLength + 1000);
            that.setState({
                isInfiniteLoading: false,
                elements: that.state.elements.concat(newElements)
            });
        }, 2500);
    }

    elementInfiniteLoad() {
        return (
            <div className="infinite-list-item">
                Loading...
            </div>
        )
    }
    render() {
        return (
            <QueueAnim animConfig={animaConfig}>
                <div key="content">
                    <div className="container height_full" >
                        <Infinite
                         elementHeight={40}
                         containerHeight={250}
                         infiniteLoadingBeginBottomOffset={200}
                         onInfiniteLoad={this.handleInfiniteLoad.bind(this)}
                         loadingSpinnerDelegate={this.elementInfiniteLoad()}
                         isInfiniteLoading={this.state.isInfiniteLoading}>
                            {this.state.elements}
                        </Infinite>
                    </div>
                </div>
            </QueueAnim>
            )
    }

}


export default InfiniteComponent;
