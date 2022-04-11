# Checklist for Initializing Virtual Environment

## One-Time Process
1. Install Pip Environment
    ```
    pip3 install pipenv
    ```

## Everytime Process
1. Install Flask
    ```
    pipenv install flask==2.0.3
    ```
    - Doing so will create a ***Pipfile*** and ***Pipfile.lock*** file inside your project folder.
2. Initiliaze the Pip Virtual Environment
    ```
    pipenv shell
    ```
3. Create a ***static*** folder inside your project folder.
    - This is where you'll store:
        - CSS
        - Javascript
        - Images
4. Create a ***templates*** folder inside your project folder.
    - This is where you'll store:
        - HTML