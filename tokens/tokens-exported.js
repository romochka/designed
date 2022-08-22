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
  "typography": {
    "test": {
      "textCase": {
        "value": "uppercase",
        "type": "textCase"
      },
      "fontWeight": {
        "value": "Bold",
        "type": "fontWeight"
      }
    }
  },
  "breakpoints": {
    "xs": {
      "value": 4,
      "type": "unit"
    },
    "sm": {
      "value": 6,
      "type": "unit"
    },
    "md": {
      "value": 8,
      "type": "unit"
    },
    "lg": {
      "value": 8,
      "type": "unit"
    },
    "xl": {
      "value": 12,
      "type": "unit"
    },
    "xxl": {
      "value": 12,
      "type": "unit"
    }
  },
  "breakpoint": {
    "phone": {
      "value": "6",
      "type": "sizing"
    },
    "tablet": {
      "value": "8",
      "type": "sizing"
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
    "spacing": [
      {
        "value": "{spacing}",
        "type": "spacing"
      }
    ],
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
                  "value": "{phone.spacing.0} * 2",
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
                  "value": "{light.colors.paper.normal}",
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
                  "value": "{phone.spacing.0} * 2",
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
                  "value": "{phone.spacing.0} * 2",
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
                  "value": "{phone.spacing.0} * 2",
                  "type": "spacing"
                },
                "verticalPadding": {
                  "value": "{spacing} + 1",
                  "type": "spacing"
                }
              }
            ]
          }
        },
        "navbar": [
          {
            "fill": {
              "value": "{light.colors.week.5}",
              "type": "fill"
            }
          }
        ]
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
                  "value": "{dark.colors.surface.normal}",
                  "type": "fill"
                },
                "horizontalPadding": {
                  "value": "{phone.spacing.0} * 2",
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
                  "value": "{dark.colors.ink.normal}",
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
                  "value": "{dark.colors.surface.deeper}",
                  "type": "fill"
                },
                "horizontalPadding": {
                  "value": "{phone.spacing.0} * 2",
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
                  "value": "{dark.colors.surface.deep}",
                  "type": "fill"
                },
                "horizontalPadding": {
                  "value": "{phone.spacing.0} * 2",
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
                  "value": "{dark.colors.surface.faded}",
                  "type": "fill"
                },
                "horizontalPadding": {
                  "value": "{phone.spacing.0} * 2",
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
                  "value": "{dark.colors.ink.normal}",
                  "type": "fill"
                },
                "opacity": {
                  "value": "0.2",
                  "type": "opacity"
                }
              }
            ]
          }
        },
        "navbar": [
          {
            "fill": {
              "value": "{light.colors.week.5}",
              "type": "fill"
            }
          }
        ]
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
    "spacing": [
      {
        "value": "{spacing}",
        "type": "spacing"
      }
    ],
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
                  "value": "{phone.spacing.0} * 2",
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
                  "value": "{light.colors.paper.normal}",
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
                  "value": "{phone.spacing.0} * 2",
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
                  "value": "{phone.spacing.0} * 2",
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
                  "value": "{phone.spacing.0} * 2",
                  "type": "spacing"
                },
                "verticalPadding": {
                  "value": "{spacing} + 1",
                  "type": "spacing"
                }
              }
            ]
          }
        },
        "navbar": [
          {
            "fill": {
              "value": "{light.colors.week.5}",
              "type": "fill"
            },
            "width": [
              {
                "value": "{breakpoints.xs} * 6",
                "type": "sizing"
              },
              {
                "value": "{breakpoints.sm} * 6",
                "type": "sizing"
              },
              {
                "value": "{breakpoints.md} * 6",
                "type": "sizing"
              },
              {
                "value": "{breakpoints.lg} * 6",
                "type": "sizing"
              },
              {
                "value": "{breakpoints.xl} * 6",
                "type": "sizing"
              },
              {
                "value": "{breakpoints.xxl} * 6",
                "type": "sizing"
              }
            ]
          }
        ]
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
                  "value": "{dark.colors.surface.normal}",
                  "type": "fill"
                },
                "horizontalPadding": {
                  "value": "{phone.spacing.0} * 2",
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
                  "value": "{dark.colors.ink.normal}",
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
                  "value": "{dark.colors.surface.deeper}",
                  "type": "fill"
                },
                "horizontalPadding": {
                  "value": "{phone.spacing.0} * 2",
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
                  "value": "{dark.colors.surface.deep}",
                  "type": "fill"
                },
                "horizontalPadding": {
                  "value": "{phone.spacing.0} * 2",
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
                  "value": "{dark.colors.surface.faded}",
                  "type": "fill"
                },
                "horizontalPadding": {
                  "value": "{phone.spacing.0} * 2",
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
                  "value": "{dark.colors.ink.normal}",
                  "type": "fill"
                },
                "opacity": {
                  "value": "0.2",
                  "type": "opacity"
                }
              }
            ]
          }
        },
        "navbar": [
          {
            "fill": {
              "value": "{light.colors.week.5}",
              "type": "fill"
            },
            "width": [
              {
                "value": "{breakpoints.xs} * 6",
                "type": "sizing"
              },
              {
                "value": "{breakpoints.sm} * 6",
                "type": "sizing"
              },
              {
                "value": "{breakpoints.md} * 6",
                "type": "sizing"
              },
              {
                "value": "{breakpoints.lg} * 6",
                "type": "sizing"
              },
              {
                "value": "{breakpoints.xl} * 6",
                "type": "sizing"
              },
              {
                "value": "{breakpoints.xxl} * 6",
                "type": "sizing"
              }
            ]
          }
        ]
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
        },
        "tinted": {
          "value": "#EFECE9",
          "type": "color"
        }
      },
      "story": {
        "accent": [
          {
            "value": "#292929",
            "type": "color"
          },
          {
            "value": "#BC2A44",
            "type": "color"
          },
          {
            "value": "#2E3F5A",
            "type": "color"
          }
        ]
      },
      "week": [
        {
          "value": "#693a5a",
          "type": "color",
          "description": "sunday"
        },
        {
          "value": "#823f49",
          "type": "color",
          "description": "monday"
        },
        {
          "value": "#6f5438",
          "type": "color",
          "description": "tuesday"
        },
        {
          "value": "#5f5a36",
          "type": "color",
          "description": "wednesday"
        },
        {
          "value": "#42673c",
          "type": "color",
          "description": "thursday"
        },
        {
          "value": "#486575",
          "type": "color",
          "description": "friday"
        },
        {
          "value": "#58658c",
          "type": "color",
          "description": "saturday"
        }
      ]
    }
  },
  "dark": {
    "colors": {
      "surface": {
        "normal": {
          "value": "#44484c",
          "type": "color"
        },
        "faded": {
          "value": "#3b3d3f",
          "type": "color"
        },
        "deep": {
          "value": "#3f4348",
          "type": "color"
        },
        "deeper": {
          "value": "#373b42",
          "type": "color"
        }
      },
      "ink": {
        "normal": {
          "value": "#ddddd9",
          "type": "color"
        }
      },
      "paper": {
        "normal": {
          "value": "#3c3f3d",
          "type": "color"
        },
        "tinted": {
          "value": "#EFECE9",
          "type": "color"
        }
      },
      "story": {
        "accent": [
          {
            "value": "#292929",
            "type": "color"
          },
          {
            "value": "#BC2A44",
            "type": "color"
          },
          {
            "value": "#2E3F5A",
            "type": "color"
          }
        ]
      },
      "week": [
        {
          "value": "#ab31c2",
          "type": "color",
          "description": "sunday"
        },
        {
          "value": "#c0653f",
          "type": "color",
          "description": "monday"
        },
        {
          "value": "#6f5438",
          "type": "color",
          "description": "tuesday"
        },
        {
          "value": "#5f5a36",
          "type": "color",
          "description": "wednesday"
        },
        {
          "value": "#42673c",
          "type": "color",
          "description": "thursday"
        },
        {
          "value": "#486575",
          "type": "color",
          "description": "friday"
        },
        {
          "value": "#58658c",
          "type": "color",
          "description": "saturday"
        }
      ]
    }
  },
  "tokenSetOrder": [
    "base",
    "device",
    "scheme",
    "composites"
  ]
}