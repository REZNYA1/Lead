import React, { useState, useEffect } from 'react';
import './Teacher.css';

function TeacherPage() {
  const [data, setData] = useState(null); // Состояние для данных

  useEffect(() => {
    // Функция для запроса данных с бэкенда
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/server/ai');
        if (response.ok) {
          const result = await response.json();
          setData(result); // Сохраняем полученные данные
        } else {
          console.error('Error, data');
        }
      } catch (error) {
        console.error('Error, request:', error);
      }
    };

    fetchData();
  }, []);

  const handleClick = () => {
    // Обработчик событий
    console.log('Кнопка нажата');
  };

  return (
    <div className="container">
      {/* Левая часть (20% ширины и вся высота) */}
      <div className="left">
        <button onClick={handleClick} className="button">Curent test</button>
        <button onClick={handleClick} className="button">Info</button>
      </div>

      {/* Правая часть (80% ширины) */}
      <div className="right">
        <div className="cards">
          {/* Карточка 1 */}
          <div className="card">
            <label>member</label>
            <p>{data ? data.message : 'Louding...'}</p>
          </div>

          {/* Карточка 2 */}
          <div className="card">
            <label>test name</label>
            <p>{data ? data.message : 'Louding...'}</p>
          </div>

          {/* Карточка 3 */}
          <div className="card">
            <label>time</label>
            <p>{data ? data.message : 'Louding...'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherPage;
