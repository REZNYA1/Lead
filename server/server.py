from flask import Flask, request, jsonify
from openai import OpenAI
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

# Установите ваш OpenAI API-ключ
client = OpenAI(
    api_key="Key"
)


@app.route('/server/ai', methods=['POST'])
def ai_data():
    data = request.json
    user_message = data.get("message", "")
    ask = f"Оцени текст на использование нейросети от 1 до 100, {user_message}"

    if not user_message:
        return jsonify({"error": "Message is required"}), 400

    try:
        # Отправляем запрос к OpenAI API
        response = client.chat.completions.create(
            messages=[{"role": "user", "content": ask}],
            model="gpt-3.5-turbo"  
        )
        # Извлекаем ответ
        ai_response = response['choices'][0]['message']['content']
        return jsonify({"response": ai_response})
    except Exception as e:
        return jsonify({"error": str(e)}), 500





if __name__ == '__main__':
    app.run(debug=True)

    app.run(debug=True)
