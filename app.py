from flask import Flask, render_template

app = Flask(__name__)

# Data produk
products = [
    {"name": "Notion Life Planner", "desc": "Sistem manajemen hidup harian.", "price": "Rp 49.000"},
    {"name": "Canva Social Media Kit", "desc": "Template desain siap pakai.", "price": "Rp 99.000"},
    {"name": "UI/UX Components", "desc": "Kumpulan elemen desain website.", "price": "Rp 150.000"}
]

@app.route('/')
def home():
    return render_template('index.html', products=products)

if __name__ == '__main__':
    app.run(debug=True)
