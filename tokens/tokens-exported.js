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
          "fontFamily": {
            "value": "{fontFamily.sans}",
            "type": "fontFamily"
          },
          "fontWeight": {
            "value": "Regular",
            "type": "fontWeight"
          },
          "lineHeight": {
            "value": "100%",
            "type": "lineHeight"
          },
          "fontSize": {
            "value": "{phone.fontSize.sm}",
            "type": "fontSize"
          }
        }
      },
      "content": {
        "sm": {
          "fontFamily": {
            "value": "{fontFamily.serif}",
            "type": "fontFamily"
          },
          "fontWeight": {
            "value": "Regular",
            "type": "fontWeight"
          },
          "lineHeight": {
            "value": "100%",
            "type": "lineHeight"
          },
          "fontSize": {
            "value": "{phone.fontSize.sm}",
            "type": "fontSize"
          }
        }
      }
    },
    "light": {
      "composite": {
        "button": {
          "action": {
            "default": [
              {
                "borderRadius": {
                  "value": "{phone.borderRadius.md}",
                  "type": "borderRadius"
                },
                "fill": {
                  "value": "{light.colors.button.action.default}",
                  "type": "fill"
                }
              },
              {
                "typography": {
                  "value": "{phone.typography.ui.sm}",
                  "type": "typography"
                },
                "fill": {
                  "value": "{color.creamy}",
                  "type": "fill"
                }
              }
            ],
            "active": [
              {
                "borderRadius": {
                  "value": "{phone.borderRadius.md}",
                  "type": "borderRadius"
                },
                "fill": {
                  "value": "{light.colors.button.action.active}",
                  "type": "fill"
                }
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
        "value": "15",
        "type": "fontSizes"
      }
    },
    "light": {
      "composite": {
        "button": {
          "action": {
            "default": [
              {
                "fill": {
                  "value": "{light.colors.button.action.default}",
                  "type": "fill"
                },
                "borderRadius": {
                  "value": "{phone.borderRadius.md}",
                  "type": "borderRadius"
                },
                "typography": {
                  "value": "{phone.typography.ui.sm}",
                  "type": "typography"
                }
              },
              {
                "typography": {
                  "value": "{phone.typography.ui.sm}",
                  "type": "typography"
                },
                "fill": {
                  "value": "{color.creamy}",
                  "type": "fill"
                }
              }
            ],
            "active": [
              {
                "borderRadius": {
                  "value": "{phone.borderRadius.md}",
                  "type": "borderRadius"
                },
                "fill": {
                  "value": "{light.colors.button.action.active}",
                  "type": "fill"
                }
              }
            ]
          }
        }
      }
    },
    "typography": {
      "ui": {
        "sm": {
          "fontFamily": {
            "value": "{fontFamily.sans}",
            "type": "fontFamily"
          },
          "fontWeight": {
            "value": "Regular",
            "type": "fontWeight"
          },
          "lineHeight": {
            "value": "100%",
            "type": "lineHeight"
          },
          "fontSize": {
            "value": "{phone.fontSize.sm}",
            "type": "fontSize"
          }
        }
      },
      "content": {
        "sm": {
          "fontFamily": {
            "value": "{fontFamily.serif}",
            "type": "fontFamily"
          },
          "fontWeight": {
            "value": "Regular",
            "type": "fontWeight"
          },
          "lineHeight": {
            "value": "100%",
            "type": "lineHeight"
          },
          "fontSize": {
            "value": "{phone.fontSize.sm}",
            "type": "fontSize"
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