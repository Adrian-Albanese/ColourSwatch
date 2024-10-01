# How to add a new colour space

<p>To add a new colour space to the colour swatch app, please follow these steps</p>

## Step 1, Add colour space name to array
<ul>
<li>Navigate to server/colourswatch/api/views.py</li>
<li>Edit line 8 and add your new colour space name to the array as text </li>
</ul>

<p>For example, add 'BRGB' to the end of the array</p>
<p>Before:</p>
<pre>colourspaces = ['RGB', 'HSL']</pre>
<p>After:</p>
<pre>colourspaces = ['RGB', 'HSL', 'BRGB']</pre>

## Step 2, Add colour space name to match/case statement block

<p>For example, add 'BRGB' case to the end of the match/case block</p>
<pre>
match colourspaces[index]:
        case 'RGB': colour = {'type': 'RGB', 'r': random.randint(0,255), 'g': random.randint(0,255), 'b': random.randint(0,255)}
        case 'HSL': colour = {'type': 'HSL', 'hue': random.randint(0,360), 'sat': random.randint(0,100), 'light': random.randint(0,100)}   
        case 'BRGB': colour = {'type': 'BRGB', 'r': random.randint(0,10000), 'g': random.randint(0,10000), 'b': random.randint(0,10000)} 
    return Response(colour)

</pre>

## Step 3, Add your colour space name to the swatch component

<ul>
<li>Navigate to client/app/src/components/swatch.jsx</li>
<li>Add the colour space name to the switch statement inside the fetchColour() function</li>
</ul>

For example, if you would like to add the 'BRGB' colour space add it to the end of the switch statement, like shown below

<pre>
switch (data.type) {
        case 'RGB': setColour(`rgb(${data.r},${data.g},${data.b})`); break;
        case 'HSL': setColour(`hsl(${data.hue},${data.sat}%,${data.light}%)`); break;
        case 'BRGB': setColour(`BRGB(${data.r},${data.g}%,${data.b}%)`); break;
        default: setColour('pink'); // Fallback if no type matches
      }
</pre>

**Please Note:** The format of data passed into setColour must be a vaild css background-color value

Colors in CSS can be specified by the following methods:
<ul>
<li>Hexadecimal colors
<li>Hexadecimal colors with transparency
<li>RGB colors
<li>RGBA colors
<li>HSL colors
<li>HSLA colors
<li>Predefined/Cross-browser color names
<li>With the currentcolor keyword
</ul>