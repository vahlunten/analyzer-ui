# About this project
Analyzer-ui is front-end application to display the results of analyzer-ts actor inside the Apify console.
# Output
Front-end application is compiled into single HTML file, that will be stored inside the key-value store of analyzer-ts actor run. 
# How to run
## How to run on Apify platform
1. Run the analyzer-ts actor
2. Open the DASHBOARD.html file inside the key-value store. 
## How to run on local computer
1. Download this repository and analyzer-ts repository into the same folder. 
2. Install dependencies in both of the projects.
    ```
    cd ./analyzer-ts
    npm install
    ...
    ...
    cd ../analyzer-ui
    npm install
    ...
    ```
3. Start the dev server. And open the web applicaiton. 
    ```
    npm run dev
    // VITE v3.2.2  ready in 427 ms
    // ➜  Local:   http://127.0.0.1:5174/
    // ➜  Network: use --host to expose
    ```
4. Observe the default result of the analyzer-ts actor. 
5. Run the analyzer-ts actor with your input and refresh the front-end application to display the results of an analysis.

# How it works
Svelte, Vite and vite-plugin-singlefile are used to bundle the application into a single HTML file.
## How it works on Apify platform 
The DASHBOARD.html file is stored inside the key-value store of each run. When the user opens the application, it will fetch the analysis results from the key-value store. 
## How it works on a locla computer
When the app is running locally it will, upon refreshing, turn the local key-value store into a web server and fetch the data from the analysis.

# Scripts

## Start a development server
`npm run dev`

## Build the application
Output will be stored in /build/index.html file.

`npm run build`

