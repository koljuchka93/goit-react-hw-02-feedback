export const App = () => {
  
    state = {
      good: 0,
      neutral: 0,
      bad: 0
    };

    countTotalFeedback = () => {
      const {good, neutral, bad} = this.state;
      const result = good + neutral + bad;
      return result;
      };

    countPositiveFeedbackPercentage = () => {
      const result = this.countTotalFeedback();
      const {good} = this.state;
      const persentage = (good * 100) / result;
      return Math.round(persentage);
      };

    onLeaveFeedback = option => {
      this.setState(state => ({
        [option]: state[option] + 1,
      }));
      }

};
