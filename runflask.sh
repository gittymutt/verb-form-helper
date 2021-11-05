#! /bin/bash
echo "Going into the env and starting the Flask server..."
source venv/bin/activate
python -m flask run &
cd my-app
ng serve --open
