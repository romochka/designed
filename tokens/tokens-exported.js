export const tokens = {
  "color": {
    "coolGray": {
      "value": "#8F9397",
      "type": "color",
      "description": "button surface"
    },
    "creamy": {
      "value": "#FBFAF5",
      "type": "color"
    },
    "greenishBlack": {
      "value": "#12241F",
      "type": "color"
    }
  },
  "fontFamily": {
    "sans": {
      "value": "Inter",
      "type": "fontFamilies"
    },
    "serif": {
      "value": "Bitter",
      "type": "fontFamilies"
    }
  },
  "spacing": {
    "value": "8",
    "type": "spacing"
  },
  "phone": {
    "light": {
      "composite": {
        "button": {
          "action": {
            "default": [
              {
                "value": {
                  "borderRadius": "{phone.borderRadius.md}",
                  "fill": "{light.colors.button.action.default}"
                },
                "type": "composition"
              },
              {
                "value": {
                  "typography": "{phone.typography.ui.sm}",
                  "fill": "{color.creamy}"
                },
                "type": "composition"
              },
              null,
              {
                "value": {
                  "typography": "{phone.typography.ui.sm}",
                  "fill": "{color.creamy}"
                },
                "type": "composition"
              }
            ],
            "active": [
              {
                "value": {
                  "borderRadius": "{phone.borderRadius.md}",
                  "fill": "{light.colors.button.action.active}"
                },
                "type": "composition"
              }
            ]
          }
        }
      }
    }
  },
  "tablet": {
    "light": {
      "composite": {
        "button": {
          "action": {
            "default": {
              "value": {
                "fill": "{light.colors.button.action.default}",
                "borderRadius": "{phone.borderRadius.md}",
                "typography": "{phone.typography.ui.sm}"
              },
              "type": "composition"
            }
          }
        }
      }
    }
  },
  "light": {
    "colors": {
      "button": {
        "action": {
          "default": {
            "value": "{color.coolGray}",
            "type": "color"
          },
          "active": {
            "value": "#7c8084",
            "type": "color"
          }
        }
      }
    }
  },
  "devicename": {
    "value": "123",
    "type": "other",
    "description": "devicetype"
  }
}