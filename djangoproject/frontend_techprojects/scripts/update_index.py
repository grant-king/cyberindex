import os
import re

"""
This script will update the Django index.html template with the proper js and css asset file names (from Vue index.html).
"""

vue_index_file = '../static/frontend_techprojects/index.html'
django_index_file = '../templates/frontend_techprojects/index.html'

# Function to extract the hashed file names
def extract_file_names(file_path):
    js_file_name = None
    css_file_name = None

    with open(file_path, 'r') as file:
        content = file.read()
        # Using regular expressions to find the JS and CSS files
        js_match = re.search(r'/static/frontend_techprojects/assets/index-(.+?)\.js', content)
        css_match = re.search(r'/static/frontend_techprojects/assets/index-(.+?)\.css', content)

        if js_match:
            js_file_name = js_match.group(0).split('/')[-1]  # Extracting the file name
            print(js_file_name)
        if css_match:
            css_file_name = css_match.group(0).split('/')[-1]  # Extracting the file name
            print(css_file_name)

    return js_file_name, css_file_name

# Function to update the Django index.html file
def update_django_index(js_file_name, css_file_name):
    with open(django_index_file, 'r') as file:
        content = file.read()

    # Replacing the placeholders with actual file names
    content = re.sub(r'assets/index.*?\.js', f'assets/{js_file_name}', content)
    content = re.sub(r'assets/index.*?\.css', f'assets/{css_file_name}', content)

    with open(django_index_file, 'w') as file:
        file.write(content)

# Extracting file names
js_file_name, css_file_name = extract_file_names(vue_index_file)

# Updating the Django index.html
update_django_index(js_file_name, css_file_name)

print("Updated Django index.html with the latest JS and CSS file names.")