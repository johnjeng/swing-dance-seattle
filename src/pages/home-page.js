import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { SUBFILTER_LEARN_CLASSES } from "../constants";
import { selectClassesByDay, selectSubfilter } from "../redux/selectors";
import Filter from "../containers/filter";
import RecurringSchedule from "../components/recurring-schedule";

class HomePage extends React.Component {
  static propTypes = {
    classesByDay: PropTypes.object,
    subfilter: PropTypes.string
  };

  renderContent() {
    const { classesByDay, subfilter } = this.props;

    switch (subfilter) {
      case SUBFILTER_LEARN_CLASSES: {
        return <RecurringSchedule experiencesByDay={classesByDay}/>;
      }
      default: {
        return <div>some content</div>;
      }
    }
  }

  render() {
    return (
      <div>
        <div>
          welcome message
        </div>
        <Filter/>
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  classesByDay: selectClassesByDay(state),
  subfilter: selectSubfilter(state)
});

export default connect(mapStateToProps)(HomePage);
