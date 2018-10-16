const journalEntries = [
  {
      date: "07/24/2018",
      concept: "Array methods",
      entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
      mood: "Neutral"
  },
  {
    date: "10/15/2018",
    concept: "Lab day",
    entry: "We finished discussing appending to the DOM. I worked on exercises after that.",
    mood: "Fantastic"
},
  {
      date: "10/16/2018",
      concept: "Daily Journal pt 2",
      entry: "We finished discussing functions. Now I'm working on the daily journal again",
      mood: "Good"
  }
]

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/

const container = document.querySelector(".entryLog");

const makeJournalEntryComponent = function(journalEntry) {
  return `
    <section class="entry--posted"> 
      <h1>${journalEntry.concept}</h1>
      <h2>${journalEntry.date}</h2>
      <p>${journalEntry.entry}</p>
      <footer>${journalEntry.mood}</footer>
    </section>
  `
}

function renderJournalEntries(entries) {
  // define empty array to hold DOM data from function called in loop
  let arr = [];
  // loop array of objects and push return of function call to new array
  for (let i = 0; i < entries.length; i++) {
    arr.push(makeJournalEntryComponent(entries[i]));
  }
  // reverse order to get recent entries first
  arr = arr.reverse().join('<br />');
  // append DOM content to container
  container.innerHTML += arr;
}

renderJournalEntries(journalEntries);