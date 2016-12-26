import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'react-redux';
import { loadPostsRequest, loadPostsSuccess, loadPostsFailure } from './actionCreators';

const animaConfig = [
    { opacity: [1, 0], translateY: [0, 50] },
    { opacity: [1, 0], translateY: [0, -50] }
]

class ReduxComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    loadData(userId) {
            // 调用 React Redux `connect()` 注入的 props ：
            let { dispatch, posts } = this.props;

            if (posts[userId]) {
              // 这里是被缓存的数据！啥也不做。
              return;
            }

            // Reducer 可以通过设置 `isFetching` 响应这个 action
            // 因此让我们显示一个 Spinner 控件。
            dispatch(loadPostsRequest(userId));

            // Reducer 可以通过填写 `users` 响应这些 actions
            fetch(`http://myapi.com/users/${userId}/posts`).then(
              response => dispatch(loadPostsSuccess(userId, response)),
              error => dispatch(loadPostsFailure(userId, error))
            );
          }

          componentDidMount() {
            this.loadData(this.props.userId);
          }

          componentWillReceiveProps(nextProps) {
            if (nextProps.userId !== this.props.userId) {
              this.loadData(nextProps.userId);
            }
          }
    render() {
        if (this.props.isLoading) {
          return <p>Loading...</p>;
        }
        return (
                <QueueAnim animConfig={animaConfig}>
                    <div key="content">
                        <div className="container">
                                <div className="row">
                                </div>
                        </div>
                    </div>
                </QueueAnim>

            )
    }

}

export default connect(state => ({
  posts: state.posts
}))(ReduxComponent);
// export default IndexComponent;
