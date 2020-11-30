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
    "resource_limit": {
      "type": "string",
      "enum": [
        "X-small: 0.5 cpu core, 2 GiB memory",
        "Small: 1 cpu core, 4 GiB memory",
        "Medium: 2 cpu core, 8 GiB memory",
        "Large: 4 cpu core, 16 GiB memory",
        "X-Large: 8 cpu core, 32 GiB memory"
      ],
      "default": "x-small: 0.5 cpu core, 2 GiB memory"
    },

    "executable_type": {
      "type": ["string", "null"],
      "enum": ["Build", "Docker"],
      "default": "Build",
      "title": "Executable type"
    }



  },
  "dependencies": {
    "executable_type": {
      "oneOf": [
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
}