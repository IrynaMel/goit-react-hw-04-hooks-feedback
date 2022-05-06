import React from 'react'
import FeedbackOptions from './components/Feedback/Feedback'
import Statistic from './components/Statistic/Statistic'
import Container from './App.styled'
import Section from './components/Section/Section'

class App extends React.Component {
  state ={
    good: 0,
    neutral: 0,
    bad: 0,    
};

onLeaveFeedback=(e)=>{
  const name = e.currentTarget.name;
 
  this.setState((prevState) =>  { 
    return {
    [name]: prevState[name] + 1} })
}
countTotalFeedback = ()=>{
  return Object.values(this.state).reduce((total, value)=> total+value, 0)
}

countPositiveFeedbackPercentage=()=>{
  return (this.state.good/Object.values(this.state).reduce((total, value)=> total+value, 0) *100).toFixed()
}


render=()=>{

  const Keys =  Object.keys(this.state)
  const { good, neutral, bad } = this.state;
  const total = this.countTotalFeedback()
  const positivePercent = this.countPositiveFeedbackPercentage()
  
  return (
    <Container>
      <Section title={"Please, leave a feedback"}>
    <FeedbackOptions 
      options = {Keys}
      onLeaveFeedback = {this.onLeaveFeedback}/>
    </Section>
    <Section title = {'Statistics'}>
      <Statistic 
       good = {good}
       neutral={neutral}
       bad = {bad}
       total={total}
       positivePercent = {positivePercent}
      />
    </Section>
    </Container>)
}
};

// export default App

export default App;
