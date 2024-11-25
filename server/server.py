from flask import Flask, request, jsonify
from flask_cors import CORS
import openai

app = Flask(__name__)

# Разрешаем CORS
CORS(app)

# Установите ваш OpenAI API-ключ
openai.api_key = "Ваш_API_ключ"

# Эндпоинт для получения данных (GET-запрос)
@app.route('/server/ai', methods=['GET'])
def get_ai_data():
    try:
        # Тестовый ответ для фронтенда
        return jsonify({"message": "Success!"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Эндпоинт для работы с OpenAI (POST-запрос)
@app.route('/server/ai', methods=['POST'])
def ai_response():
    data = request.json
    user_message = data.get("message", "")
    ask = f"Оцени текст на использование нейросети от 1 до 100: {user_message}"

    if not user_message:
        return jsonify({"error": "Message is required"}), 400

    try:
        # Отправляем запрос к OpenAI API
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": ask}]
        )
        # Извлекаем ответ
        ai_response = response['choices'][0]['message']['content']
        return jsonify({"response": ai_response})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
