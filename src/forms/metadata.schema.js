export const schema = {
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "title": "Component Name"
    },

    "is_ros": {
      "type": "boolean",
      "title": "Is ROS Component",
      "default": false
    },

    "runtime": {
      "type": "string",
      "title": "Component Runtime",
      "enum": [
        "Cloud",
        "Device"
      ],
      "default": "Cloud"
    }
  },
  "dependencies": {
    "is_ros": {
      "oneOf": [
        {
          "properties": {
            "is_ros": { "const": false }
          }
        },
        {
          "properties": {
            "is_ros": { "const": true },
            "ros_distro": {
              "type": "string",
              "title": "ROS Distribution",
              "enum": [
                "Kinetic",
                "Melodic"
              ],
              "default": "Kinetic"
            }
          }
        }
      ]
    },
    "runtime": {
      "oneOf": [
        {
          "properties": {
            "runtime": { "enum": ["Cloud"] },
            "replica": {
              "type": "number",
              "title": "Replicas to run the component",
              "minimum": 1,
              "maximum": 5
            }
          }
        },
        {
          "properties": {
            "runtime": { "enum": ["Device"] },
            "arch": {
              "type": "string",
              "title": "Architecture",
              "enum": [
                "arm32v7",
                "arm64v8",
                "amd64"
              ],
              "default": "amd64"
            },
            "restart_policy": {
              "type": "string",
              "title": "Restart Policy",
              "enum": [
                "Never",
                "Always",
                "On Failure"
              ],
              "default": "Never"
            }
          }
        }
      ]
    }
  }
}


export const uiSchema = {}