import React         from 'react';
import ReactDOM      from 'react-dom';
import faker         from "faker";
import CommentDetail from './CommentDetail';
import ApprovalCard  from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          date="Today at 6:00 PM"
          text="Such app"
          avatar={ faker.image.avatar() }
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          date="Yesterday at 5:00 PM"
          text="Very cool"
          avatar={ faker.image.avatar() }
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          date="Two days ago at 4:00 PM"
          text="Much wow"
          avatar={ faker.image.avatar() }
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);