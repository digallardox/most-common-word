const lyrics =
  "Go and take this the wrong way You knew who I was with every step that I ran to you Only blue or black days Electin' strange perfections in any stranger I choose".toLowerCase();
const lyricWords = lyrics.split("").filter((e) => /[a-z]/.test(e));

const letters = [];
lyricWords.forEach((e) => {
  if (!letters.includes(e)) {
    letters.push(e);
  }
});

lettersNotUsed(letters);

function lettersNotUsed(letters) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const notUsed = [];
  alphabet.forEach((e) => {
    if (!letters.includes(e)) {
       notUsed.push(e)
    }
  });
  console.log("The following letters are never used:", notUsed.join(", "));
}

const songWords = lyrics.split(" ").filter((e) => /[a-z]/.test(e));

let wordCount = {}
songWords.forEach((e) => {
  if (e in wordCount !== true) {
    wordCount = {
      ...wordCount,
      [e]: 1
    }
  } else if (e in wordCount) {
    wordCount[e] += 1
  }
})

Object.getOwnPropertyNames(wordCount)
let sortable = []


  for (let item in wordCount) {
    sortable.push([item, wordCount[item]]);
  }

  sortable.sort(function (a, b) {
    return b[1] - a[1];
  });

  let top5 = sortable.slice(0, 5)

  let toObj = {}
  top5.forEach((e) => {
    const [ key, item ] = e
    // remove outer bracket []
    toObj = {
      ...toObj,
      [key]: item
    }
  })
  console.log("The top five most used words:")

  console.log(toObj)