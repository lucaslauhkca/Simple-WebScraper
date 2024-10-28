from flask import Flask, request, jsonify
from flask_cors import CORS
from bs4 import BeautifulSoup
import requests
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

nltk.download('punkt')
nltk.download('punkt_tab')

app = Flask(__name__)
CORS(app)

@app.route('/scrape', methods=['POST'])
def scrape_website():
    data = request.json
    url = data.get('url')
    
    if not url:
        return jsonify({"error": "URL is required"}), 400
    
    # Fetch website
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Extract text content
        text = ' '.join([p.get_text() for p in soup.find_all('p')])   
        tokens = word_tokenize(text)
        words = [word for word in tokens if word.isalpha()]
        stop_words = set(stopwords.words('english'))
        filtered_words = [w for w in words if not w.lower() in stop_words]
        freq_dist = nltk.FreqDist(filtered_words)
        common_words = [word for word, _ in freq_dist.most_common(10)]
        
        # Generate questions
        questions = generate_questions(common_words)
        
        return jsonify({
            "questions": questions
        })
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

def generate_questions(keywords):
    questions = []
    for keyword in keywords:
        question = {
            "question": f"Are you interested in topics related to {keyword}?",
            "options": ["Yes", "No", "Maybe"],
        }
        questions.append(question)
    return questions

if __name__ == '__main__':
    app.run(debug=True)
