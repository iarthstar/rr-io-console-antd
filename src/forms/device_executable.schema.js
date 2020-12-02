import Radio from "../common/form/widgets/Radio";

export const schema = {
  "type": "object",
  "properties": {
    "name": {
      "type": ["string", "null"],
      "title": "Executable Name"
    },
    "is_simulation": {
      "type": "boolean",
      "title": "Simulation",
      "default": false
    },

    "executable_type": {
      "type": "string",
      "enum": ["Build", "Docker", "Default"],
      "default": "Build",
      "title": "Executable type"
    }
  },
  "dependencies": {
    "executable_type": {
      "oneOf": [
        {
          "properties": {
            "executable_type": { "enum": ["Default"] },
            "command": { "type": "string", "title": "Command to run on the device" }
          }
        },
        {
          "properties": {
            "executable_type": { "enum": ["Docker"] },
            "command": { "type": "string", "title": "Command to run in the docker container" },
            "docker_image": {
              "type": "string",
              "title": "Docker Image"
            },
            "run_as_bash": { "type": "boolean", "default": true, "title": "Run command from bash shell" },
            "private_image": {
              "type": "boolean",
              "title": "Private Image"
            }
          }
        },
        {
          "properties": {
            "executable_type": { "enum": ["Build"] },
            "build_id": {
              "type": "string",
              "title": "Choose Build"
            },
            "command": { "type": "string", "title": "Command to run in the docker container" }
          }
        }
      ]
    },

    "private_image": {
      "oneOf": [
        {
          "properties": {
            "private_image": { "const": false }
          }
        },
        {
          "properties": {
            "private_image": { "const": true },
            "secret_id": { "type": "string", "title": "Credentials" }
          }
        }
      ]
    }
  }
};

export const uiSchema = {
  "executable_type": {
    "ui:widget": "radio"
  }
};

export const widgets = {
  "RadioWidget": Radio
};