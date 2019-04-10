import React                  from 'react';
import { connect }            from 'react-redux';
import UserHeader             from './UserHeader';
import { fetchPostsAndUsers } from '../actions';

class PostsList extends React.Component {
  render() {
    return (
      <div className="ui relaxed divided list">
        { this.renderList() }
      </div>
    );
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={ post.id }>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{ post.title }</h2>
              <p>{ post.body }</p>
            </div>
            <UserHeader userId={ post.userId } />
          </div>
        </div>
      );
    });
  }

  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }
}

const mapStateToProps = ({ posts }) => {
  return { posts };
};

PostsList = connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostsList);

export default PostsList;