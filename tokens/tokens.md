# Tokens

## Object

```
tokens[device][colorScheme].composite[variant][state][index]
```

Button sample:

```
<Button>
  Label text
</Button>
```

## State
States are arrays. 
Use first token `.stateName[0]` for container, the rest - for children.

### Button default state
Container:
```
tokens.phone.light.composite.button.action.default[0]
```
Text:
```
tokens.phone.light.composite.button.action.default[1]
```

### Button:hover
Container:
```
tokens.phone.light.composite.button.action.hover[0]
```
<br />

## Basic tokens
```
tokens[color|spacing|fontFamily].*
```
Basic tokens are used as reference values inside other tokens.

<br />

## Device-dependent tokens
```
tokens[device][borderRadius|fontSize|typography].*
```
Everything that depends on the screen size.

<br />

## Color scheme-dependent tokens
```
tokens[colorScheme][colors].*
```
Everything color-related.

<br />


## Composite tokens
```
tokens[device][scheme].composite.*
```



## Get value

### Endpoints
Endpoint is the last token's part, which returns the value.
```
tokens.phone.light.composite.button.action[0]
```
`action[0]` is an endpoint

## Fallback

### Siblings order

device:
```
["phone", "tablet"]
```

colorScheme: \["light", "dark"]

