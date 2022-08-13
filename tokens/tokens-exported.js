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
    "borderRadius": {
      "xs": {
        "value": "3",
        "type": "borderRadius"
      },
      "sm": {
        "value": "6",
        "type": "borderRadius"
      },
      "md": {
        "value": "9",
        "type": "borderRadius"
      },
      "lg": {
        "value": "18",
        "type": "borderRadius"
      }
    },
    "fontSize": {
      "sm": {
        "value": "15",
        "type": "fontSizes"
      }
    },
    "typography": {
      "ui": {
        "sm": {
          "value": {
            "fontFamily": "{fontFamily.sans}",
            "fontWeight": "Regular",
            "lineHeight": "100%",
            "fontSize": "{phone.fontSize.sm}"
          },
          "type": "typography"
        }
      },
      "content": {
        "sm": {
          "value": {
            "fontFamily": "{fontFamily.serif}",
            "fontWeight": "Regular",
            "lineHeight": "100%",
            "fontSize": "{phone.fontSize.sm}"
          },
          "type": "typography"
        }
      }
    },
    "light": {
      "composite": {
        "button": {
          "action": {
            "default": [
              {
                "value": {
                  "borderRadius": "{phone.borderRadius.md} + {phone.borderRadius.lg} * {phone.borderRadius.md} + {phone.borderRadius.lg} - {phone.borderRadius.md} / {phone.borderRadius.xs} + {aaa.bbb}",
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
    "borderRadius": {
      "xs": {
        "value": "3",
        "type": "borderRadius"
      },
      "sm": {
        "value": "6",
        "type": "borderRadius"
      },
      "md": {
        "value": "9",
        "type": "borderRadius"
      },
      "lg": {
        "value": "18",
        "type": "borderRadius"
      }
    },
    "fontSize": {
      "sm": {
        "value": "13",
        "type": "fontSizes"
      }
    },
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