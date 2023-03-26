import React, { Component } from 'react';

import SectionTitle from './SectionTitle/SectionTitle';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = label => {
    this.setState(prevState => {
      console.log(prevState);
      return { [label.option]: prevState[label.option] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const all = neutral + bad + good;

    return Math.ceil((good / all) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const Totalall = neutral + bad + good;
    return (
      <Container>
        <SectionTitle title="Please Leave feedback" />
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleIncrement}
        />

        <SectionTitle title="Statistics" />
        {Totalall > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Container>
    );
  }
}
