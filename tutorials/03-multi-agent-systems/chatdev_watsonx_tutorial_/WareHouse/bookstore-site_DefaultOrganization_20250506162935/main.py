'''
Main application file for Turn the Page bookstore website.
Defines routes for homepage, about page, and products page.
'''
from flask import Flask, render_template
app = Flask(__name__)
# Sample data for demonstration purposes
books = [
    {"title": "Book 1", "author": "Author 1"},
    {"title": "Book 2", "author": "Author 2"},
    {"title": "Book 3", "author": "Author 3"}
]
@app.route('/')
def index():
    '''
    Render the homepage template.
    '''
    return render_template('index.html')
@app.route('/about')
def about():
    '''
    Render the about page template.
    '''
    return render_template('about.html')
@app.route('/products')
def products():
    '''
    Render the products page template, passing in sample book data.
    '''
    return render_template('products.html', books=books)
if __name__ == '__main__':
    # Run the application in debug mode for development purposes
    app.run(debug=True)