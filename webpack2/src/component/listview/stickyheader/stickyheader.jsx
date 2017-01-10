import React from 'react';
import QueueAnim from 'rc-queue-anim';
import ReactListView from 'react-listview-sticky-header';
let styles = {
  outerDiv: {
    height: '400px',
    overflowY: 'auto',
    outline: '1px dashed blue',
    width: '100%',
  },

  ul: {
    margin: '0px',
    listStyleType: 'none',
    padding: '0'
  },

  fixedPosition: {
    position : 'fixed',
    width : '100%',
    top: '0px'
  },

  listHeader: {
    width: '100%',
    height: '40px',
    background: 'green',
    color: 'white'
  },

  listItems: {
    color: 'blue'
  },
};
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

class StickyheaderComponent extends React.Component {
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

        // let {boilerplateReducer1} =this.props;
        // console.log("boilerplateReducer1 :" + boilerplateReducer1);
        // if (this.state.isLoading) {
        //         return <LoadingComponent />
        // }
        // const {list} = this.state;
        return (
                <QueueAnim animConfig={animaConfig}>
                    <div key="content" className="height_full">
                            <div className="container">
                                    <div className="row">
                                        <ReactListView
                                            data={DATALIST}
                                            headerAttName="headerName"
                                            itemsAttName="items"
                                            styles={styles}
                                          />
                                    </div>
                            </div>
                    </div>
                </QueueAnim>
            )

    }

}


export default StickyheaderComponent;
