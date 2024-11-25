import React, { useState, useEffect } from 'react';
import './Teacher.css';

function TeacherPage() {
  const [data, setData] = useState(null); // Состояние для данных
  const [view, setView] = useState('test'); // Состояние для переключения между видами

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/server/ai');
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          console.error('Error, data');
        }
      } catch (error) {
        console.error('Error, request:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {/* Левая часть (20% ширины и вся высота) */}
      <div className="left">
        <button onClick={() => setView('test')} className="button">Current test</button>
        <button onClick={() => setView('info')} className="button">Info</button>
      </div>

      {/* Правая часть (80% ширины) */}
      <div className="right">
        {view === 'test' ? (
          <div className="cards">
            
            <div className="card">
              <label>member</label>
              <p>{data ? data.member: 'Loading...'}</p>
            </div>

           
            <div className="card">
              <label>test name</label>
              <p>{data ? data.name : 'Loading...'}</p>
            </div>

            <div className="card">
              <label>time</label>
              <p>{data ? data.time : 'Loading...'}</p>
            </div>
          </div>
        ) : (
          <div className="info-view">
            <div className="cards">
          
            <div className="card">
              <label>member</label>
              <p>{data ? data.message : 'Loading...'}</p>
            </div>

         
            <div className="card">
              <label>test name</label>
              <p>{data ? data.message : 'Loading...'}</p>
            </div>
            <button  className="button">download info</button>

            
           
          </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TeacherPage;
