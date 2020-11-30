/*
This script will split one sentence into two sentences.
Useful for say-type embeds.

Separator: " | "
Example Text: "This is the title. | This is the description."
*/

// This part stores your sentence in a variable.
// !!!   Replace "Text-Variable-Name" with the name of your variable (must be a DBM variable). Do not remove the quotation marks (" ")!   !!!
let Text = tempVars("Text-Variable-Name");

// This part splits the text into two parts (after " | ") and then stores them in two different variables.
let NewText = Text.split(" | ");
let Title = NewText[0];
let Description = NewText[1]

// This part converts the "Title" variable and the "Description"
this.storeValue(Title, 1, "Title", cache);
this.storeValue(Description, 1, "Description", cache);

/*
Outputs:

Title  =  tempVars("Title")
Description  =  tempVars("Description")
*/