# Tokens

## Struc

\[device][colorScheme].tokens[component][variant][state][0|childIndex+1]

taking Button for instance,

\<Button>
Text
\</Button>

### Button default state
Container:  
phone.light.tokens.button.action[0]  
Text:
phone.light.tokens.button.action[1]

### Button:hover
Container: phone.light.tokens.button.action.hover[0]  

## Fallback
upper sibling, then parent

<pre>
tokenArray = [
   container: value,
   child1: value,
   child2: [
      container: value,
      child1: value
      child2: value
   ],
   child3: value
]
</pre>

### Siblings order
device: \["phone", "tablet"]  
colorScheme: \["light", "dark"]

