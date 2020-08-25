import React from 'react'
import { ReactComponent as PlayButton } from './play-button.svg'
import './App.scss'
import './reset.css'

const App = () => {
  const testArray = [
    {
      title: 'Task 1',
      project: 'Fix content',
      time: '0:30:02'
    },
    {
      title: 'Task 1',
      project: 'Fix content',
      time: '0:30:02'
    },
    {
      title: 'Task 1',
      project: 'Fix content',
      time: '0:30:02'
    },
    {
      title: 'Task 1',
      project: 'Fix content',
      time: '0:30:02'
    },
    {
      title: 'Task 1',
      project: 'Fix content',
      time: '0:30:02'
    }
  ]

  return (
    <div className="app">
      <div className="app__header">WE MAKE WEBSITES - TOGGLE</div>
      <div className="app__input app__input--top">
        <input type="text" placeholder="What are you working on?"></input>
        <button><PlayButton /></button>
      </div>
      <div className="app__input app__input--bottom">
        <input type="text" placeholder="Please enter name of Asana ticket/task"></input>
        <select>
          <option>None</option>
          <option>Billable</option>
          <option>QA</option>
          <option>Non-billable</option>
          <option>Deployment</option>
          <option>Training</option>
          <option>UAT</option>
        </select>
      </div>
      <div className="app__tracking">
        <div className="app__day-header">
          <span>Today: 6h 18m</span>
          <span>This week: 14h 10m</span>
        </div>
        <div className="app__day">
          <div className="app__day-data">
            <span>Tue, 25 Aug</span>
            <span>6:18:47</span>
          </div>
          {testArray.map(item => {
            return (
              <div className="app__item">
                <div className="app__item-text">
                  <p>{item.title}</p>
                  <p>{item.project}</p>
                </div>
                <div className="app__item-controls">
                  <p>{item.time}</p>
                  <button><PlayButton /></button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
