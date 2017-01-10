import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { StickyContainer, Sticky } from 'react-sticky';
const DATALIST = [
  {
    headerName : "ListA",
    items : [{
      title : "items1"
    }, {
      title : "items2"
    }, {
      title : "items3"
    },{
      title : "items4"
    },{
      title : "items5"
    },{
      title : "items6"
    }]
  }, {
    headerName : "ListB",
    items : [{
      title : "items1"
    }, {
      title : "items2"
    }, {
      title : "items3"
    },{
      title : "items4"
    },{
      title : "items5"
    },{
      title : "items6"
    }]
  },{
    headerName : "ListC",
    items : [{
      title : "items1"
    }, {
      title : "items2"
    }, {
      title : "items3"
    },{
      title : "items4"
    },{
      title : "items5"
    },{
      title : "items6"
    }]
  },{
    headerName : "ListD",
    items : [{
      title : "items1"
    }, {
      title : "items2"
    }, {
      title : "items3"
    },{
      title : "items4"
    },{
      title : "items5"
    },{
      title : "items6"
    }]
  },{
    headerName : "ListE",
    items : [{
      title : "items1"
    }, {
      title : "items2"
    }, {
      title : "items3"
    },{
      title : "items4"
    },{
      title : "items5"
    },{
      title : "items6"
    }]
  },{
    headerName : "ListF",
    items : [{
      title : "items1"
    }, {
      title : "items2"
    }, {
      title : "items3"
    }]
  },{
    headerName : "ListG",
    items : [{
      title : "items1"
    }, {
      title : "items2"
    }, {
      title : "items3"
    },{
      title : "items4"
    },{
      title : "items5"
    },{
      title : "items6"
    }]
  },{
    headerName : "ListH",
    items : [{
      title : "items1"
    }, {
      title : "items2"
    }, {
      title : "items3"
    }]
  }
 ]

const animaConfig = [
    { opacity: [1, 0], translateY: [0, 50] },
    { opacity: [1, 0], translateY: [0, -50] }
]

class StickyComponent extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }


    render() {
        var arr = new Array(10)
        let timeline = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010].map((decade) => {
          return (
            <StickyContainer style={{zIndex: 4}} key={decade}>
              <Sticky style={{zIndex: 3}}>
                <h2>{decade}s</h2>
              </Sticky>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </StickyContainer>
          );
        })

        return (
            <StickyContainer>
              <div className="container">
                <div className="row-flex row-flex-wrap">
                  <div className="flex-col column">
                    { timeline }
                  </div>
                </div>
              </div>
            </StickyContainer>
            )

    }

}


export default StickyComponent;
