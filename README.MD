# AvinashLang !!

[AvinashLang Playground(will be updated soon)](https://github.com/raselmandol/avinash-lang) 

[AvinashLang Npm Package(will be updated soon)](https://github.com/raselmandol/avinash-lang)

My friend ``Avinash Sing Rajput``, from Bihar, India is a very funny guy. He is always happy and laughing(if you know you know). `Joke` is his weapon to make everyone laugh.

The main idea is from : bhai-lang https://github.com/DulLabs/bhai-lang 💡, so I started writing and changing the syntax list!
To start with right now we just convert `.avinash` files to `.js` and then run them with `node` and so anything that you could do in javascript land you can do it in  avinash-lang.

## Future State 🚀

Feel free to add ideas(specially for parser), open up PR(s) and contribute.

## Playground 

Check out the [AvinashLang Playground(will be updated soon)](https://github.com/raselmandol) to write and run your `.avinash` code.
See the reference and tutorial table also.

## Installation 💻

`make sure you have node installed`

## Install typescript
```
npm install -g typescript
```

## Clone the repo
```
git clone https://github.com/raselmandol/avinash-lang.git
```
```
cd avinash-lang
```
```
npm install
```
```
npm install -g typescript
```
Then create a file with (.avinash) extension, write code and in terminal type:
```
.\avinash ProgramName.avinash
```
or
```
avinash programName.avinash
```

## Usage 📝

Create a new file (programName.avinash)

```
boloAvinash ("Hello World!");
```

## Run 🚀

```
.\avinash programName.avinash
```
or
```
avinash programName.avinash
```

## Output 🖨️

```
Hello World!
```

## Documentation 📚

### Variables 📊

Variables can be declared using `avinash ka variable ye`;

```
avinash ka variable ye day = "Sunday";
avinash ka variable ye temperature = 12;
avinash ka variable ye isSunny = sahiAvinash;
avinash ka variable ye counter = 0;
```

### Types 🔠

Numbers and strings are like other languages. Null values can be denoted using `nullAvinash`. `sahiAvinash` and `vinashNahA` are the boolean values.

```
 avinash ka variable ye a = 10;
 avinash ka variable ye b = 10 + (15*20);
 avinash ka variable ye c = "de_do";
 avinash ka variable ye d = 'thik hai';
 avinash ka variable ye e = nullAvinash;
 avinash ka variable ye f = sahiAvinash;
 avinash ka variable ye g = NahAvinash;
```

### Built-ins 🛠️

Use `boloAvinash` to print anything to the console.

```
boloAvinash ("Hello World!");
```

```
// AvinashLang script: something.avinash

// Declare some variables
avinash ka variable ye day = "Sunday";
avinash ka variable ye temperature = 25;
avinash ka variable ye isSunny = sahiAvinash;
avinash ka variable ye counter = 0;

// Print a greeting
boloAvinash ("Good Morning, aaj kaunsa din hai? - " + day);

// Check weather conditions
agarAvinash (temperature > 30) {
  boloAvinash ("Gaarmi laag raha hai, AC chalao!");
} nahitoAvinash (temperature < 20) {
  boloAvinash ("Thaand lag raha hai Avinash, sweater pehno!");
} varnaAvinash {
  boloAvinash ("Aajka weather kaafi comfortable, Avinash!");
}
```

## Conditionals 🔄

avinash-lang supports the if-else-if ladder construct, `agarAvinash` block will execute if the condition is `sahiAvinash`, otherwise one of the subsequently added `nahitoAvinash` blocks will execute if their respective condition is `sahiAvinash`, and the `varnaAvinash` block will eventually execute if all of the above conditions are `NahAvinash`.

```
agarAvinash (temperature > 30) {
  boloAvinash ("Gaarmi laag raha hai, AC chalao!");
} nahitoAvinash (temperature < 20) {
  boloAvinash ("Thaand lag raha hai Avinash, sweater pehno!");
} varnaAvinash {
  boloAvinash ("Aajka weather kaafi comfortable, Avinash!");
}

// Is it sunny?
agarAvinash (isSunny == sahiAvinash) {
  boloAvinash ("Dhoop ho raha hai, chaalo picnic kartehe?");
} varnaAvinash {
  boloAvinash ("Kaafi darkmode me hai sky, ghaar me raho!");
}
```

## Loops 🔁

Statements inside `jabtakAvinash` blocks are executed as long as a specified condition evaluates to `sahiAvinash`. If the condition becomes `NahAvinash`, the statement within the loop stops executing and control passes to the statement following the loop. Use `rukAvinash` to break the loop and `continueAvinash` avinash to continue within the loop.

```
boloAvinash ("Countdown shuru kar raha hu:");
jabtakAvinash (counter < 5) {
  boloAvinash(5 - counter + "...");
  counter += 1;
  agarAvinash (counter == 3) {
    boloAvinash ("Arreh half way agaya!");
    continueAvinash;
  }
}
boloAvinash ("Khatam!");
```

## Functions ⚙️

You can define a function using the `ye function Avinash` syntax, followed by the function name and parameters in parentheses. The function body is enclosed in curly braces.

```
ye function Avinash addit(a,b){
    deAvinash (a+b);
}
```

In this example, a function named `addit` is defined with two parameters, a and b. The function body adds these parameters and returns the result using deAvinash.

```
boloAvinash (addit(9,14));
```

### Function Output 🔄

Functions in Avinash-Lang can return values using the deAvinash statement. The returned value can be assigned to a variable or used directly in expressions.

```
ye function Avinash multiply(x, y) {
    deAvinash (x * y);
}

avinash ka variable ye result = multiply(5, 9);
boloAvinash ("The result is: " + result);
```

In this example, the multiply function returns the product of its parameters, and the result is assigned to the result variable and printed.


## Authors

- [@raselmandol](https://github.com/raselmandol)


