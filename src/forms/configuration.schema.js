export const schema = {
  "type": "object",
  "properties": {
    "name": {
      "type": ["string", "null"],
      "title": "Name"
    },
    "default_value": {
      "type": ["string", "null"],
      "title": "Default value"
    },
    "description": {
      "type": "string",
      "title": "Description"
    },
    "is_exposed_externally": {
      "type": "boolean",
      "title": "This parameter is exposed externally",
      "default": false
    }
  },
  "dependencies": {
    "is_exposed_externally": {
      "oneOf": [
        {
          "properties": {
            "is_exposed_externally": { "const": false }
          }
        },
        {
          "properties": {
            "is_exposed_externally": { "const": true },
            "name_of_exposed_parameter": {
              "type": "string",
              "title": "Name of exposed parameter"
            }
          }
        }
      ]
    }

  }
}