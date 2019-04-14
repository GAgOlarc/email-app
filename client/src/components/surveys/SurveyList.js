import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions/index';

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    render() {
        const cards = this.props.surveys.reverse().map(survey => (
            <div className="card blue-grey darken-1" key={survey._id}>
                <div class="card-content white-text">
                    <span className="card-title">{survey.title}</span>
                    <p>{survey.body}</p>
                    <p>Sent On: {new Date(survey.dateSent).toLocaleDateString()}</p>
                    <p>
                        {
                            survey.lastResponded ?
                                'Last Responded: ' + new Date(survey.lastResponded).toLocaleDateString()
                                : null
                        }
                    </p>
                </div>
                <div className="card-action">
                    <a>Yes: {survey.yes}</a>
                    <a>No: {survey.no}</a>
                </div>
            </div>
        ));

        return (
            <div>
                {cards}
            </div>
        )
    }
}

const mapStateToProps = ({ surveys }) => ({
    surveys
});

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
