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
    },
    "test": {
      "red": {
        "value": "red",
        "type": "color"
      }
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
  "letterSpacing": {
    "test": {
      "value": "16",
      "type": "letterSpacing"
    },
    "testExpression": {
      "value": "{lineHeight.test}",
      "type": "letterSpacing"
    }
  },
  "size": {
    "test": {
      "a": {
        "value": "14",
        "type": "sizing"
      },
      "b": {
        "value": "15",
        "type": "sizing"
      },
      "c": {
        "value": "{spacing} * 15",
        "type": "sizing"
      }
    }
  },
  "lineHeight": {
    "test": {
      "value": "77",
      "type": "lineHeights"
    }
  },
  "borderRadius": {
    "test": {
      "value": "2",
      "type": "borderRadius"
    },
    "testExpression": {
      "value": "{lineHeight.test} * 2",
      "type": "borderRadius"
    }
  },
  "borderWidth": {
    "test": {
      "value": "{size.test.a} {size.test.b}",
      "type": "borderWidth"
    },
    "testExpression": {
      "value": "{letterSpacing.testExpression} * {spacing}",
      "type": "borderWidth"
    }
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
    "spacing": {
      "value": "{spacing}",
      "type": "spacing"
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
                  "value": "{light.colors.surface.normal}",
                  "type": "fill"
                },
                "horizontalPadding": {
                  "value": "{phone.spacing} * 2",
                  "type": "spacing"
                },
                "verticalPadding": {
                  "value": "{spacing} + 1",
                  "type": "spacing"
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
                  "value": "{light.colors.surface.deeper}",
                  "type": "fill"
                },
                "horizontalPadding": {
                  "value": "{phone.spacing} * 2",
                  "type": "spacing"
                },
                "verticalPadding": {
                  "value": "{spacing} + 1",
                  "type": "spacing"
                }
              }
            ],
            "hover": [
              {
                "borderRadius": {
                  "value": "{phone.borderRadius.md}",
                  "type": "borderRadius"
                },
                "fill": {
                  "value": "{light.colors.surface.deep}",
                  "type": "fill"
                },
                "horizontalPadding": {
                  "value": "{phone.spacing} * 2",
                  "type": "spacing"
                },
                "verticalPadding": {
                  "value": "{spacing} + 1",
                  "type": "spacing"
                }
              }
            ],
            "disabled": [
              {
                "borderRadius": {
                  "value": "{phone.borderRadius.md}",
                  "type": "borderRadius"
                },
                "fill": {
                  "value": "{light.colors.surface.faded}",
                  "type": "fill"
                },
                "horizontalPadding": {
                  "value": "{phone.spacing} * 2",
                  "type": "spacing"
                },
                "verticalPadding": {
                  "value": "{spacing} + 1",
                  "type": "spacing"
                }
              }
            ]
          }
        }
      }
    },
    "dark": {
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
                  "value": "{light.colors.surface.normal}",
                  "type": "fill"
                },
                "horizontalPadding": {
                  "value": "{phone.spacing} * 2",
                  "type": "spacing"
                },
                "verticalPadding": {
                  "value": "{spacing} + 1",
                  "type": "spacing"
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
                  "value": "{light.colors.surface.deeper}",
                  "type": "fill"
                },
                "horizontalPadding": {
                  "value": "{phone.spacing} * 2",
                  "type": "spacing"
                },
                "verticalPadding": {
                  "value": "{spacing} + 1",
                  "type": "spacing"
                }
              }
            ],
            "hover": [
              {
                "borderRadius": {
                  "value": "{phone.borderRadius.md}",
                  "type": "borderRadius"
                },
                "fill": {
                  "value": "{light.colors.surface.deep}",
                  "type": "fill"
                },
                "horizontalPadding": {
                  "value": "{phone.spacing} * 2",
                  "type": "spacing"
                },
                "verticalPadding": {
                  "value": "{spacing} + 1",
                  "type": "spacing"
                }
              }
            ],
            "disabled": [
              {
                "borderRadius": {
                  "value": "{phone.borderRadius.md}",
                  "type": "borderRadius"
                },
                "fill": {
                  "value": "{light.colors.surface.faded}",
                  "type": "fill"
                },
                "horizontalPadding": {
                  "value": "{phone.spacing} * 2",
                  "type": "spacing"
                },
                "verticalPadding": {
                  "value": "{spacing} + 1",
                  "type": "spacing"
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
    "spacing": {
      "value": "{spacing}",
      "type": "spacing"
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
                  "value": "{light.colors.surface.normal}",
                  "type": "fill"
                },
                "horizontalPadding": {
                  "value": "{phone.spacing} * 2",
                  "type": "spacing"
                },
                "verticalPadding": {
                  "value": "{spacing} + 1",
                  "type": "spacing"
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
                  "value": "{light.colors.surface.deeper}",
                  "type": "fill"
                },
                "horizontalPadding": {
                  "value": "{phone.spacing} * 2",
                  "type": "spacing"
                },
                "verticalPadding": {
                  "value": "{spacing} + 1",
                  "type": "spacing"
                }
              }
            ],
            "hover": [
              {
                "borderRadius": {
                  "value": "{phone.borderRadius.md}",
                  "type": "borderRadius"
                },
                "fill": {
                  "value": "{light.colors.surface.deep}",
                  "type": "fill"
                },
                "horizontalPadding": {
                  "value": "{phone.spacing} * 2",
                  "type": "spacing"
                },
                "verticalPadding": {
                  "value": "{spacing} + 1",
                  "type": "spacing"
                }
              }
            ],
            "disabled": [
              {
                "borderRadius": {
                  "value": "{phone.borderRadius.md}",
                  "type": "borderRadius"
                },
                "fill": {
                  "value": "{light.colors.surface.faded}",
                  "type": "fill"
                },
                "horizontalPadding": {
                  "value": "{phone.spacing} * 2",
                  "type": "spacing"
                },
                "verticalPadding": {
                  "value": "{spacing} + 1",
                  "type": "spacing"
                }
              }
            ]
          }
        }
      }
    },
    "dark": {
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
                  "value": "{light.colors.surface.normal}",
                  "type": "fill"
                },
                "horizontalPadding": {
                  "value": "{phone.spacing} * 2",
                  "type": "spacing"
                },
                "verticalPadding": {
                  "value": "{spacing} + 1",
                  "type": "spacing"
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
                  "value": "{light.colors.surface.deeper}",
                  "type": "fill"
                },
                "horizontalPadding": {
                  "value": "{phone.spacing} * 2",
                  "type": "spacing"
                },
                "verticalPadding": {
                  "value": "{spacing} + 1",
                  "type": "spacing"
                }
              }
            ],
            "hover": [
              {
                "borderRadius": {
                  "value": "{phone.borderRadius.md}",
                  "type": "borderRadius"
                },
                "fill": {
                  "value": "{light.colors.surface.deep}",
                  "type": "fill"
                },
                "horizontalPadding": {
                  "value": "{phone.spacing} * 2",
                  "type": "spacing"
                },
                "verticalPadding": {
                  "value": "{spacing} + 1",
                  "type": "spacing"
                }
              }
            ],
            "disabled": [
              {
                "borderRadius": {
                  "value": "{phone.borderRadius.md}",
                  "type": "borderRadius"
                },
                "fill": {
                  "value": "{light.colors.surface.faded}",
                  "type": "fill"
                },
                "horizontalPadding": {
                  "value": "{phone.spacing} * 2",
                  "type": "spacing"
                },
                "verticalPadding": {
                  "value": "{spacing} + 1",
                  "type": "spacing"
                }
              }
            ]
          }
        }
      }
    }
  },
  "light": {
    "colors": {
      "surface": {
        "normal": {
          "value": "{color.coolGray}",
          "type": "color"
        },
        "faded": {
          "value": "#d7d8d9",
          "type": "color"
        },
        "deep": {
          "value": "#7c8084",
          "type": "color"
        },
        "deeper": {
          "value": "#707479",
          "type": "color"
        }
      },
      "ink": {
        "normal": {
          "value": "{color.greenishBlack}",
          "type": "color"
        }
      },
      "paper": {
        "normal": {
          "value": "{color.creamy}",
          "type": "color"
        }
      }
    }
  },
  "dark": {
    "colors": {
      "surface": {
        "normal": {
          "value": "{color.coolGray}",
          "type": "color"
        },
        "faded": {
          "value": "#d7d8d9",
          "type": "color"
        },
        "deep": {
          "value": "#7c8084",
          "type": "color"
        },
        "deeper": {
          "value": "#707479",
          "type": "color"
        }
      },
      "ink": {
        "normal": {
          "value": "{color.greenishBlack}",
          "type": "color"
        }
      },
      "paper": {
        "normal": {
          "value": "{color.creamy}",
          "type": "color"
        }
      }
    }
  }
}