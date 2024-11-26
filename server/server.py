from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
from dotenv import load_dotenv
import os



app = Flask(__name__)

# Разрешаем CORS
CORS(app)

# Загружаем секрет
load_dotenv()

db_password = os.getenv('DB_API')

# Ключ
client = OpenAI(api_key="")


# Эндпоинт для получения данных (GET-запрос)
@app.route('/server/ai', methods=['GET'])
def get_ai_data():
    try:
        # Тестовый ответ для фронтенда
        return jsonify({"member": "John Doe",
                        "name": "Test Analysis",
                        "time": "2024-11-25 15:00",})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# Эндпоинт для работы с OpenAI (POST-запрос)
@app.route('/server/ai', methods=['POST'])
def ai_data():
    data = request.json
    user_message = data.get("message", "")
    ask = f"Я буду давать тебе текст, ты должен оценить текст от 0 до 100, сам текст:{user_message}, если не можешь оценить текст оцени его на оценку 0, если он имеет набор слов но он не савязани логически или имеет какие либо проблемы, оцени его оценкой 0, если текст похож на написаный человек напиши 0, остальная оценка зависит от схожости написаного текста, с патернами которые ты используешь для написания текста, также проверь сущиствует ли этот текс в интернете если да, то оцени его в 0,  в конце анализа напиши только оценку от 0 до 100"

    if not user_message:
        return jsonify({"error": "Message is required"}), 

    try:
        # Отправляем запрос к OpenAI API
        response = client.chat.completions.create(
            messages=[{"role": "user", "content": ask}],
            model="gpt-3.5-turbo"  
        )
        # Извлекаем ответ
        ai_response = response.choices[0].message.content
        return jsonify({"response": ai_response})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
