Quick start

run it

    npm start

setup

    npm install

Web UI

After npm start, navigate to http://localhost:5011

API Docs

To view more comprehensive docs with examples visit the SmartContract.com SOLC webdocs

---

Compile

Endpoint: /api/compile

Description: Compiles 1 or more .sol source files.

Input:

Sources object as defined in SOLC Input JSON spec

Returns:

contracts, formal, sourceList, sources. See these keys in the SOLC Output JSON spec

---

Update ABI

Endpoint: /api/compile

Description:

Compiles 1 or more .sol source files.

Input:

    {
        "input_ABI": [
          {
            "constant":false,
            "inputs":[],
            "name":"hello",
            "outputs":[
              {"name":"",
               "type":"string"}
            ],
            "payable":false,
            "type":"function"}
        ],
        "ABI_version": "0.3.6"
    }

Returns:

    {
      "updated_ABI": [
        {
         "constant":false,
         "inputs":[],
         "name":"hello",
         "outputs":[
           {
             "name":"",
            "type":"string"
           }
         ],
         "payable":true,
         "type":"function"
        },{
          "type":"fallback",
          "payable":true
        }
      ]
    }
