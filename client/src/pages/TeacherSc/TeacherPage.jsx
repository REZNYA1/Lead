import React, { useState, useEffect } from 'react';
import './General.css';
import './Diagram.css';
import './Tests.css';
import './Ai.css'




function TeacherPage() {
  const [data, setData] = useState(null); // Состояние для данных
  const [view, setView] = useState('General'); // Состояние для переключения между видами
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null); // Состояние для ошибок
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/server/ai');
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          setError('Error fetching data');
        }
      } catch (error) {
        setError('Error with request: ' + error.message);
      }
    };

    fetchData();
  }, []);

  const sendJson = async () => {
    const jsonData = {
      member: "John Doe",
      test: "Test 1",
      time: "2024-11-26T12:00:00",
      active: true,
    };

    try {
      const res = await fetch("http://localhost:5000/upload_json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });

      const result = await res.json();
      setResponse(result);
    } catch (error) {
      setError("Error: " + error.message);
    }
  };

  return (
    <div className="container">
      {/* Левая часть (20% ширины и вся высота) */}
      <div className="left">
        <div className="top"> 
          <div className="circle"></div>
        </div>
        <div className="center"> 
          <button onClick={() => setView('General')} className="buttonLeft">General</button>
          <button onClick={() => setView('Test')} className="buttonLeft">Tests</button>
          <button onClick={() => setView('Ai')} className="buttonLeft">Ai cheack</button>
        </div>
      </div>

      {/* Правая часть (80% ширины) */}
      <div className="right">
        {error && <div className="error">{error}</div>}
        {view === 'General' && (
          <div className="Main">
            <div className="top">
              <div className='titleBox'>
                <div className='title'>
                  <label>General</label>
                </div>
              </div>
              <div className='eventMenu'>

              </div>
            </div>
            <div className="bot">
              {/* Нижняя часть с двумя карточками */}
              <div className="DiagramCard">
              
                <div className="pie-container">
                    <div className="pie" id="a1"></div>
                    <div className="pie" id="a2"></div>
                    <div className="pie" id="a3"></div>
                    <div className="pie" id="a4"></div>
              
              </div>
                <div className='bottom'>
                  <div className='left'>
                  <label style={{ color: '#5cb57b' }}>{data ? data.member : 'No data'}</label>
                  <label style={{ color: '#432e2d' }}>{data ? data.member : 'No data'}</label>
                  </div>
                  <div className='right'>
                  <label style={{ color: '#5cb57b' }}>{data ? data.member : 'No data'}</label>
                  <label style={{ color: '#432e2d' }}>{data ? data.member : 'No data'}</label>
                  </div>
               </div>
             </div>
            <div className='memberInfo'>
              <div className='top'>
                <div className='card'>
                <div class="card-top">
                  <p>Member</p>
                </div>
                <div class="card-bottom">
                  <label>{data ? data.member : 'No data'}</label>
                </div>
                </div>
                <div className='card'>
                <div class="card-top">
                  <p>Name</p>
                </div>
                <div class="card-bottom">
                  <label>{data ? data.member : 'No data'}</label>
                </div>
                </div>
                <div className='card'>
                <div class="card-top">
                  <p>Time</p>
                </div>
                <div class="card-bottom">
                  <label>{data ? data.member : 'No data'}</label>
                </div>
                </div>
                
              </div>
            </div>
                

            </div>
          </div>
        )} 
        {view === 'Test' && (
          <div className="Info">
            
          </div>
        )}
        {view === 'Ai' && (
          <div>
            <h1>AI Check View</h1>
            <p>Analyze with AI tools here.</p>
          </div>
          )}
      </div>
    </div>
  );
}

export default TeacherPage;
