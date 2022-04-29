import {useState} from 'react';
import FeedbackOptions from './components/Feedback/Feedback'
import Statistic from './components/Statistic/Statistic'
import Container from './App.styled'
import Section from './components/Section/Section'

// let total = 0;
//   let positivePercent = 0;

export default function App(){
 const [good, setGood] = useState(0);
 const [neutral, setNeutral] = useState(0);
 const [bad, setBad] = useState(0);

 const onLeaveFeedback = (event) => {
    const { name } = event.target;
    console.log(name);
    switch (name) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  const total = countTotalFeedback();
  const positivePercent = countPositiveFeedbackPercentage();
  

//  useEffect(()=>{
//     total = good + neutral + bad;
//      positivePercent = (good /total *  100).toFixed()

//  }, [good, bad, neutral])

 return(
    <Container>
    <Section title={"Please, leave a feedback"}>
  <FeedbackOptions 
    options = {['good', 'neutral', 'bad']}
    onLeaveFeedback = {onLeaveFeedback}/>
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