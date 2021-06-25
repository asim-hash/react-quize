import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Home from '../Pages/Home/Home'
import Quiz from '../Pages/Quiz/Quiz'
import Result from '../Pages/Result/Result'
import './main.css'


const Main = () => {
  const [questions, setQuestions] = useState()
  const [name, setName] = useState()
  const [score, setScore] = useState(0)

  const fetchQuestions = async (category = '', difficulty = '') => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${
        difficulty && `&difficulty=${difficulty}`
      }&type=multiple`
    )

    setQuestions(data.results)
  }
  return (
    <div>
      <div className="app" style={{ background: '#83adf3' }}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home name={name} setName={setName} fetchQuestions={fetchQuestions} />
          </Route>
          <Route path="/quiz">
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>
          <Route path="/result">
            <Result name={name} score={score} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

Main.propTypes = {}

export default Main
