
window.onload = function() {
  // Build a system
  let url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  let options = {
  "swaggerDoc": {
    "openapi": "3.0.0",
    "paths": {
      "/cats": {
        "post": {
          "operationId": "CatsController_create",
          "summary": "Create cat",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateCatDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Cat"
                  }
                }
              }
            },
            "403": {
              "description": "Forbidden."
            }
          },
          "tags": [
            "cats"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/cats/{id}": {
        "get": {
          "operationId": "CatsController_findOne",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "The found record",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Cat"
                  }
                }
              }
            }
          },
          "tags": [
            "cats"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      }
    },
    "info": {
      "title": "Cats example",
      "description": "The cats API description",
      "version": "1.0",
      "contact": {}
    },
    "tags": [
      {
        "name": "cats",
        "description": ""
      }
    ],
    "servers": [],
    "components": {
      "schemas": {
        "CreateCatDto": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "age": {
              "type": "number"
            },
            "breed": {
              "type": "string"
            }
          },
          "required": [
            "name",
            "age",
            "breed"
          ]
        },
        "Cat": {
          "type": "object",
          "properties": {
            "age": {
              "type": "number",
              "example": 1,
              "description": "The age of the Cat"
            },
            "breed": {
              "type": "string",
              "example": "Maine Coon",
              "description": "The breed of the Cat"
            },
            "name": {
              "type": "string",
              "description": "The name of the Cat",
              "example": "Kitty"
            }
          },
          "required": [
            "age",
            "breed",
            "name"
          ]
        }
      }
    }
  }
};
  url = options.swaggerUrl || url
  let urls = options.swaggerUrls
  let customOptions = options.customOptions
  let spec1 = options.swaggerDoc
  let swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (let attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  let ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.initOAuth) {
    ui.initOAuth(customOptions.initOAuth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}
