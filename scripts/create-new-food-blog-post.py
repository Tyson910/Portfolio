# WARNING: This is python written by an ECMAScript dev, could get ugly :)
# requires python 3.6 >=
"""
In order to use fancy CLI interface run
pip3 install inquirer
then run python3 create-new-food-blog-post.py
"""
from log import colorLogger
import os
import re
import sys
import inquirer
import datetime

def slugifyStr(stringy : str):
    # Replace all runs of whitespace with a single dash
    return re.sub(r"\s+", '-', stringy)

def main():
    blog_post_directory = 'src/content/food'
    colorLogger.green('Creating a new food blog post')
    # Ask user for input
    questions = [
    # Ask user for dish name (Meta Title)
    inquirer.Text('dish_name', message="What is the name of the dish you are going to write about?"),
    # Ask user for short dish description (Meta Description)
    inquirer.Text('dish_description', message="Give a short description (1-2 sentences) for the dish"),
    # Ask for difficulty level [beginner, intermediate, expert]
    inquirer.List('difficulty_level',
        message="How difficult would you say this dish is?",
        choices=['Beginner', 'Intermediate', 'Expert'],
        carousel=True
    ),
    ]
    answers = inquirer.prompt(questions)
    # Convert blog post name to slug, no spaces allowed!
    blog_post_url = slugifyStr(answers['dish_name']).lower()
    today = datetime.datetime.now()
    todaysDateMonthYear = today.strftime("%b %d %Y")
    # create recipe-name.md with frontmatter
    try:
        f = open(f"{blog_post_directory}/{blog_post_url}.mdx", "x")
        # write meta title/description, dateCreated to .md file
        f.writelines([
            '---\n',
            "layout: '@layouts/BlogLayout.astro'\n",
            "author: 'Tyson Suttle'\n",
            f"title: '{answers['dish_name']}'\n",
            f"meta_description: '{answers['dish_description']}'\n"
            f"difficulty: '{answers['difficulty_level']}'\n",
            "draft: true\n",
            "tags: []\n",
            "totalCookTime : ''\n"
            f"dateCreated: '{todaysDateMonthYear}'\n",
            f"lastUpdated: '{todaysDateMonthYear}'\n",
            "---\n",
            "## Ingredients:\n\n",
            "### Steps",
        ])
        f.close()
        colorLogger.green(f'Created a new food blog post file at {blog_post_directory}/{blog_post_url}.mdx')
    except FileExistsError:
        colorLogger.red(f'Error! {blog_post_url}.md file already exists!')
        sys.exit(0)
    
main()