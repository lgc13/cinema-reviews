# Cinema Reviews

### TypeScript Start guide

- You can follow [this guide](https://www.sitepoint.com/react-with-typescript-best-practices/)

1. Create an app

    ```shell script
    yarn create react-app cinema-reviews --template typescript 
    ```

2. Modify `tsconfig.json`

    - Make it look like this [template](tsconfig.json)

3. Add ESLint/Prettier dependencies

    ```shell script
    # I had an issue with the new eslint, so I removed it from the script
    yarn add @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react --dev
    yarn add prettier eslint-config-prettier eslint-plugin-prettier --dev
    ```
   
4. Add ESLint/Prettier rules:

    - Create a `.eslintrc.js` at the project root, and make it look like [this one](.eslintrc.js)

5. Set up ESLint with IntelliJ

    - Follow the `Allow your IDE's to use it` steps mentioned [here](https://github.com/lgc13/LucasCosta_portfolio/blob/master/wiki/cheat-sheet.md#eslint--prettier)
    
6. Add scripts to run lint, and prettier from the cmd line to the `package.json`

    ```json
    {
        "scripts": {
            "_otherScripts": "...",
            "lint": "echo 'Running lint' && ./node_modules/.bin/eslint 'src/**/*.tsx'",
            "lint-fix": "echo 'Prettifying!' && ./node_modules/.bin/eslint --fix 'src/**/*.tsx'"
          }
    }
    ```