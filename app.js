(() => {
  "use strict";

  const PAGE_W = 612;
  const PAGE_H = 792;
  const MX = 64;
  const CW = 484;
  const BOTTOM = 720;
  const BODY_SIZE = 10.5;
  const BODY_LEAD = 16;

  const TYPES = {
    "short-story": { label: "Short story", accent: "#9b4a32" },
    "field-report": { label: "Field report", accent: "#3f6f5a" },
    "recipe": { label: "Recipe card", accent: "#ad6526" },
    "technical-memo": { label: "Technical memo", accent: "#3d5f8a" },
    "poetry": { label: "Poetry chapbook", accent: "#7a4a6f" },
    "interview": { label: "Interview transcript", accent: "#4f6a6a" },
    "travelogue": { label: "Travelogue", accent: "#a9812a" },
    "manual": { label: "Product manual", accent: "#6a5540" }
  };

  const ADJ = [
    "amber", "hollow", "patient", "salt-stained", "quiet", "fractured", "velvet",
    "northern", "improvised", "ceramic", "drowsy", "luminous", "rusted", "tidal",
    "paper", "moonlit", "sturdy", "unreasonable", "oracular", "brass", "feathered",
    "low-voltage", "midnight", "tender", "crooked", "glass", "wandering",
    "upholstered", "minor", "electric", "handwritten", "temporary", "sainted",
    "feral", "polite", "backward", "lunar", "varnished", "wind-bent", "glacial",
    "overdue", "reversible", "half-remembered", "small", "excellent", "damp"
  ];

  const NOUN = [
    "archive", "lantern", "orchard", "tram", "harbor", "ledger", "greenhouse",
    "typewriter", "stairwell", "radio", "postcard", "bicycle", "observatory",
    "cupboard", "ferry", "library", "kettle", "weathervane", "sidewalk", "balcony",
    "atlas", "compass", "apron", "telescope", "bench", "drawer", "clock", "field",
    "corridor", "parcel", "blueprint", "hammock", "accordion", "mirror", "crate",
    "notebook", "turnstile", "foghorn", "meadow", "awning", "boiler", "quilt",
    "staircase", "pocket", "lampshade", "gate", "veranda", "envelope", "statue"
  ];

  const PLACES = [
    "Reykjavik", "the old quarter", "Pittsburgh", "the salt flats", "a rented orchard",
    "the night bus", "Buenos Aires", "the municipal pool", "a borrowed kitchen",
    "the northern line", "Marfa", "the lighthouse", "a hotel lobby",
    "the archive basement", "the ferry deck", "a town called Bell", "the conservatory",
    "a gravel road", "the planetarium", "the laundromat on 9th", "the east pier",
    "a drowned village", "the botanical garden", "the last platform", "the post office"
  ];

  const NAMES = [
    "Mara", "Ivo", "June", "Oskar", "Nell", "Tomas", "Priya", "Bram", "Sofia",
    "Ellis", "Wren", "Hugo", "Ada", "Piet", "Ruth", "Casimir", "Nadia", "Levi",
    "Ines", "Arthur", "Mina", "Felix", "Dara", "August", "Lena"
  ];

  const ABSTRACTS = [
    "patience", "silence", "appetite", "weather", "memory", "procedure",
    "loneliness", "good timing", "civic pride", "momentum", "tenderness",
    "protocol", "luck", "grammar", "suspicion", "architecture", "grief",
    "applause", "currency", "rhythm", "focus", "hope", "small talk", "gravity"
  ];

  const OBJECTS = [
    "umbrella", "thermos", "cassette", "envelope", "ladder", "lantern", "broom",
    "camera", "suitcase", "hat", "radio", "chair", "notebook", "jar", "clock",
    "spoon", "key", "ticket", "map", "glove", "bell", "ribbon", "torch", "cup"
  ];

  const FOODS = [
    "plum cake", "miso broth", "rye pancakes", "apple butter", "saffron rice",
    "cold noodles", "brown butter pears", "lemon barley soup", "smoked trout",
    "cardamom buns", "fennel salad", "oat biscuits", "pear jam", "chestnut soup",
    "buttermilk pie", "roasted leeks", "rice pudding", "walnut bread"
  ];

  const VERB_PAST = [
    "arrived", "vanished", "waited", "folded", "hummed", "drifted", "returned",
    "collapsed", "listened", "opened", "counted", "hesitated", "wandered",
    "settled", "insisted", "remembered", "borrowed", "repaired", "measured", "forgot"
  ];

  const VERB_BASE = [
    "drifts", "clicks", "flickers", "hums", "locks", "turns", "stalls", "resets",
    "leans", "opens", "waits", "circles", "settles", "folds"
  ];

  const NUMBERS = [
    "two", "three", "four", "five", "six", "seven", "eight", "nine", "eleven",
    "thirteen", "nineteen", "twenty-two", "forty", "a hundred"
  ];

  const PLURALS = [
    "letters", "umbrellas", "receipts", "candles", "bells", "keys", "invoices",
    "pebbles", "bicycles", "gloves", "maps", "cups", "buttons", "stones",
    "postcards", "spoons", "envelopes", "sparrows", "coils", "photographs"
  ];

  const TIMES = [
    "Tuesday", "a cold Friday", "the first morning of spring", "a Sunday in November",
    "the last week of August", "the night before the flood", "a slow Thursday",
    "the second week of rain", "an ordinary afternoon", "just after midnight"
  ];

  const UNITS = ["grams", "cups", "handfuls", "spoonfuls", "pinches"];

  const SENTENCES = {
    whimsical: [
      "The {adj} {noun} arrived on {time}, carrying {number} {plural} and a {adj2} {object}.",
      "Nobody in {place} could explain why the {noun} {verb} whenever {name} mentioned {abstract}.",
      "A small committee of {plural} was assembled to discuss the {adj} {noun}, but the meeting dissolved into {abstract}.",
      "By morning, the {noun} had been {verb} twice and repainted the color of {adj} {object}s.",
      "There was a {noun} in the hallway that only {name} could see, and it was {adj} about it.",
      "The {adj} {object} {verb} into the room, as if {abstract} were a kind of {noun}.",
      "We followed the {noun} to {place} and found {number} {plural} arranged in a {adj} circle.",
      "Someone had written the word {abstract} on the {noun}, in {adj} ink, and signed it with {name}.",
      "The {noun} was {adj}, which is exactly how {name} preferred it.",
      "At {time}, the {noun} {verb} and everyone pretended not to notice."
    ],
    deadpan: [
      "The {noun} was {verb}. This was expected.",
      "At {time}, {name} counted {number} {plural} and wrote the total in the {noun}.",
      "There was some discussion of {abstract}, but the {adj} {noun} remained where it was.",
      "The {object} was {adj}. Nobody had asked it to be.",
      "A {adj} {noun} was observed near {place}. No further action was taken.",
      "{name} described the {noun} as {adj}, then repeated the word three times for clarity.",
      "The {plural} were {verb} and returned to their approximate positions.",
      "It rained for {number} minutes. The {noun} did not comment.",
      "The {adj} {object} was moved from {place} to {place}, for reasons that were never minuted.",
      "This is the part where {name} was supposed to mention {abstract}. They mentioned the {noun} instead."
    ],
    lyrical: [
      "There is a {adj} {noun} in the way {place} remembers {abstract}.",
      "The {noun} {verb}, and the light stayed {adj} for {number} minutes.",
      "We kept the {adj} {object} between us like a sentence neither of us could finish.",
      "In {place}, {abstract} is a kind of weather; the {noun} {verb} before dawn.",
      "The {plural} were {adj}, and {name} said that was the whole point of {abstract}.",
      "Somewhere behind the {noun}, a {adj} {object} was learning the shape of the dark.",
      "I thought of {place}, and the {noun} {verb} as if it had heard me.",
      "There was {abstract} in the room, {adj} and unrepeatable, and then it was {time} again.",
      "The {noun} holds the afternoon the way a {object} holds {abstract}.",
      "We were {adj} for {number} days, and the {noun} kept its own counsel."
    ],
    technical: [
      "Initial inspection of the {noun} showed {adj} {abstract} across {number} sampled {plural}.",
      "The {noun} was {verb} at 06:40, then measured against the {adj} baseline from {place}.",
      "Operators reported no change in {abstract}, though the {adj} {noun} exceeded its rated tolerance by {number} percent.",
      "A second pass over the {noun} produced {adj} readings and one {adj2} {object}.",
      "The {adj} {object} was logged at {place} and removed from the {noun} for inspection.",
      "Under normal load, {abstract} remains {adj}; the {noun} should not be {verb} without clearance.",
      "The {plural} were {verb} sequentially. No {adj} deviation was recorded.",
      "Field units at {place} confirmed that the {noun} {verb} at intervals of {number} minutes.",
      "A {adj} {noun} was substituted for the original {object}; performance remained {adj2}.",
      "The remaining {abstract} is within specification and can be {verb} at {time}."
    ]
  };

  const RECIPE_STEPS = [
    "Warm the {food} with {number} {plural} until the kitchen smells {adj}.",
    "Fold in the {adj} {food} and let it sit for {number} minutes.",
    "Do not discuss {abstract} while the {noun} is on the stove.",
    "Season with {abstract} and a {adj} pinch of {food}.",
    "Transfer to the {object}, cover, and forget about it for {number} minutes.",
    "Serve beside the {noun}, with {plural} for anyone who asks.",
    "If the mixture looks {adj}, add {number} more {plural} and stir once.",
    "Finish with {food} and a small amount of {abstract}.",
    "Set the {object} near the window and let the {noun} cool.",
    "Taste it. If it reminds you of {place}, add {number} {plural}."
  ];

  const MANUAL_STEPS = [
    "Place the {object} on a {adj} surface.",
    "Connect the {noun} to the {object} until it clicks.",
    "Hold the {noun} for {number} seconds, then release.",
    "Confirm that the {adj} light remains steady.",
    "Store the {object} away from {place}.",
    "Repeat steps {number} through {number} if the {noun} drifts.",
    "Wipe the {noun} with a {adj} cloth. Do not submerge it in {abstract}.",
    "If the {object} hums, this is normal. If it {verb}, see the appendix."
  ];

  const QUESTIONS = [
    "What did you notice about the {noun}?",
    "When did {place} first feel {adj}?",
    "How would you describe {abstract} to a stranger?",
    "Was the {object} already there?",
    "Who asked you to {verb} the {noun}?",
    "What happened after the {adj} {noun} was {verb}?",
    "Do you think the {plural} were connected?",
    "What did {name} say about the {abstract}?",
    "Would you go back to {place}?",
    "Is there anything about the {noun} you would change?"
  ];

  const ROMAN = [
    "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII",
    "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI", "XXII",
    "XXIII", "XXIV", "XXV", "XXVI", "XXVII", "XXVIII", "XXIX", "XXX"
  ];

  const WIDTH_TABLE = [
    278, 278, 355, 556, 556, 889, 667, 191, 333, 333, 389, 584, 278, 333, 278,
    278, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 278, 278, 584, 584,
    584, 556, 1015, 667, 667, 722, 722, 667, 611, 778, 722, 278, 500, 667, 556,
    833, 722, 778, 667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, 278,
    278, 278, 469, 556, 333, 556, 556, 500, 556, 556, 278, 556, 556, 222, 222,
    500, 222, 833, 556, 556, 556, 556, 333, 500, 278, 556, 500, 722, 500, 500,
    500, 334, 260, 334, 584
  ];

  const PREVIEW_COLORS = {
    ink: "#241d19",
    muted: "#79695b",
    light: "#9b8c7d",
    rule: "#cdc2b2"
  };

  const PDF_COLORS = {
    ink: [0.13, 0.11, 0.1],
    muted: [0.43, 0.37, 0.32],
    light: [0.58, 0.52, 0.46],
    rule: [0.8, 0.76, 0.7]
  };

  const $ = (id) => document.getElementById(id);

  const ui = {
    type: $("docType"),
    tone: $("tone"),
    pages: $("pageCount"),
    pagesOut: $("pageCountOut"),
    seed: $("seed"),
    reroll: $("reroll"),
    generate: $("generate"),
    download: $("download"),
    docTitle: $("docTitle"),
    chipPages: $("chipPages"),
    chipWords: $("chipWords"),
    chipSize: $("chipSize"),
    paper: $("paper"),
    prev: $("prevPage"),
    next: $("nextPage"),
    pageLabel: $("pageLabel"),
    dots: $("pageDots"),
    footSeed: $("footSeed"),
    footGenre: $("footGenre")
  };

  let state = null;
  let regenerateTimer = 0;

  function hashSeed(value) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < value.length; i += 1) {
      h ^= value.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function mulberry32(a) {
    return function random() {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function pick(r, list) {
    return list[Math.floor(r() * list.length)];
  }

  function int(r, min, max) {
    return min + Math.floor(r() * (max - min + 1));
  }

  function cap(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  const SMALL_WORDS = new Set(["a", "an", "the", "and", "of", "in", "on", "for", "to", "at", "by", "with", "from"]);

  function titleCase(value) {
    return String(value).split(" ").map((word, index) => {
      const bare = word.replace(/[^a-z]/gi, "").toLowerCase();
      if (index > 0 && SMALL_WORDS.has(bare)) return word.toLowerCase();
      return word.replace(/(^|[-/])([a-z])/g, (match, prefix, letter) => prefix + letter.toUpperCase());
    }).join(" ");
  }

  function capFirst(value) {
    const trimmed = value.trim();
    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
  }

  function fill(template, r, extra) {
    return template.replace(/\{(\w+)\}/g, (match, key) => {
      if (extra && Object.prototype.hasOwnProperty.call(extra, key)) return extra[key];
      switch (key) {
        case "adj": return pick(r, ADJ);
        case "adj2": return pick(r, ADJ);
        case "noun": return pick(r, NOUN);
        case "place": return pick(r, PLACES);
        case "name": return pick(r, NAMES);
        case "abstract": return pick(r, ABSTRACTS);
        case "object": return pick(r, OBJECTS);
        case "food": return pick(r, FOODS);
        case "verb": return pick(r, VERB_PAST);
        case "number": return pick(r, NUMBERS);
        case "plural": return pick(r, PLURALS);
        case "time": return pick(r, TIMES);
        case "unit": return pick(r, UNITS);
        default: return match;
      }
    }).replace(/\ba ([aeiou])/g, "an $1");
  }

  function sentence(r, tone) {
    return fill(pick(r, SENTENCES[tone] || SENTENCES.whimsical), r);
  }

  function paragraph(r, tone, count) {
    const total = count || int(r, 3, 5);
    const pool = [...(SENTENCES[tone] || SENTENCES.whimsical)];
    const parts = [];
    for (let i = 0; i < total; i += 1) {
      if (!pool.length) pool.push(...(SENTENCES[tone] || SENTENCES.whimsical));
      const index = Math.floor(r() * pool.length);
      const template = pool.splice(index, 1)[0];
      parts.push(fill(template, r));
    }
    return capFirst(parts.join(" "));
  }

  function h2(text) {
    return { type: "h2", text };
  }

  function p(tone, r, count) {
    return { type: "p", text: paragraph(r, tone, count) };
  }

  function bullets(lines) {
    return lines.map((text) => ({ type: "bullet", text: capFirst(text) }));
  }

  function quote(text) {
    return { type: "quote", text };
  }

  const TITLE_FOR = {
    "short-story": (r) => `The ${cap(pick(r, ADJ))} ${cap(pick(r, NOUN))} of ${cap(pick(r, PLACES))}`,
    "field-report": (r) => `Field Notes on the ${cap(pick(r, ADJ))} ${cap(pick(r, NOUN))}`,
    "recipe": (r) => `${cap(pick(r, ADJ))} ${cap(pick(r, FOODS))} for ${cap(pick(r, NUMBERS))}`,
    "technical-memo": (r) => `Protocol ${int(r, 4, 88)}: The ${cap(pick(r, ADJ))} ${cap(pick(r, NOUN))}`,
    "poetry": (r) => `Toward a ${cap(pick(r, ADJ))} ${cap(pick(r, NOUN))}`,
    "interview": (r) => `A Conversation About ${cap(pick(r, ABSTRACTS))}`,
    "travelogue": (r) => `${cap(pick(r, NUMBERS))} Days in ${cap(pick(r, PLACES))}`,
    "manual": (r) => `Quick Start: The ${cap(pick(r, ADJ))} ${cap(pick(r, NOUN))}`
  };

  function modelCode(r) {
    const letters = "ABCDEFGHJKLMNPQRSTUVWXYZ";
    const letter = () => letters[Math.floor(r() * letters.length)];
    return `${letter()}${letter()}-${int(r, 100, 999)}${letter()}`;
  }

  const SUBTITLE_FOR = {
    "short-story": (r) => `A short fiction recovered from the ${pick(r, ADJ)} ${pick(r, NOUN)} archive.`,
    "field-report": (r) => `A preliminary survey by ${pick(r, NAMES)}, conducted ${pick(r, TIMES)} and filed from ${pick(r, PLACES)}.`,
    "recipe": (r) => `Serves ${pick(r, NUMBERS)}. Prep time: ${pick(r, NUMBERS)} minutes. Patience: optional.`,
    "technical-memo": (r) => `Distribution: internal. Classification: ${pick(r, ADJ)}. Review cycle: ${pick(r, NUMBERS)} days.`,
    "poetry": (r) => `Stanzas assembled from overheard ${pick(r, ABSTRACTS)} and ${pick(r, PLURALS)}.`,
    "interview": (r) => `Recorded in ${pick(r, PLACES)}. Transcribed from memory, lightly ${pick(r, VERB_PAST)}.`,
    "travelogue": (r) => `Notes, receipts, and one ${pick(r, ADJ)} map.`,
    "manual": (r) => `Model ${modelCode(r)}. Assembly required. Warranty void if read aloud.`
  };

  function fieldSection(n, r, tone) {
    const heads = ["Observation", "Instruments", "Anomalies", "Local accounts", "Recommendation", "Addendum", "Marginalia", "Dispatches"];
    const out = [h2(`${String(n).padStart(2, "0")} / ${pick(r, heads)}`)];
    if (r() < 0.34) {
      out.push(bullets([
        fill("{adj} {noun}: {number} {plural} recorded at {place}", r),
        fill("{adj} reading of {abstract} near the {noun}", r),
        fill("Local report of a {adj2} {object} at {time}", r),
        fill("Unverified count: {number} {plural}", r)
      ]));
    } else {
      out.push(p(tone, r));
      if (r() < 0.6) out.push(p(tone, r, 2));
    }
    return out;
  }

  function storySection(n, r, tone) {
    const numeral = ROMAN[n - 1] || `Part ${n}`;
    const out = [h2(numeral), p(tone, r, int(r, 4, 6))];
    if (r() < 0.52) {
      out.push(quote(capFirst(fill(pick(r, SENTENCES.lyrical), r))));
    } else {
      out.push(p(tone, r, 3));
    }
    return out;
  }

  function recipeSection(n, r, tone) {
    if (n === 1) {
      const items = [];
      const count = int(r, 5, 7);
      for (let i = 0; i < count; i += 1) {
        items.push(fill("{adj} {food}, {number} {unit}", r));
      }
      return [h2("Ingredients"), ...bullets(items)];
    }
    if (n === 2) {
      const steps = [];
      const count = int(r, 4, 6);
      for (let i = 0; i < count; i += 1) steps.push(fill(pick(r, RECIPE_STEPS), r));
      return [h2("Method"), ...bullets(steps)];
    }
    if (n === 3) {
      return [
        h2("Notes"),
        p(tone, r, 3),
        ...bullets([
          fill("Best served with {food} and a view of {place}", r),
          fill("The {noun} can be replaced with {number} {plural}", r)
        ])
      ];
    }
    return [
      h2(`Variation ${n - 3} / ${cap(pick(r, ADJ))}`),
      p(tone, r, 2),
      ...bullets([
        fill("Swap the {food} for {food}", r),
        fill("Add {number} {plural} and reduce the {noun} by half", r),
        fill("Finish with {abstract}, never with {abstract}", r)
      ])
    ];
  }

  function memoSection(n, r, tone) {
    const heads = ["Summary", "Background", "Observations", "Risk assessment", "Recommendation", "Appendix", "Open questions"];
    const label = n <= heads.length ? `${n}. ${heads[n - 1]}` : `Appendix ${String.fromCharCode(64 + ((n - heads.length) % 26 || 26))}`;
    const out = [h2(label)];
    if (n === 4) {
      out.push(...bullets([
        fill("Risk: {adj} {abstract}. Mitigation: {noun} review at {time}.", r),
        fill("Exposure: {number} {plural}. Owner: {name}.", r),
        fill("Residual concern: the {adj} {object} near {place}.", r)
      ]));
      out.push(p(tone, r, 2));
    } else if (r() < 0.4) {
      out.push(p(tone, r, 2));
      out.push(...bullets([
        fill("Metric {number}: {adj}", r),
        fill("Observed at {place}: {number} {plural}", r)
      ]));
    } else {
      out.push(p(tone, r));
      out.push(p(tone, r, 2));
    }
    return out;
  }

  function poetrySection(n, r) {
    const out = [h2(ROMAN[n - 1] || `${n}`)];
    const stanzas = [];
    const stanzaCount = int(r, 2, 3);
    for (let s = 0; s < stanzaCount; s += 1) {
      const lines = [];
      const lineCount = int(r, 3, 4);
      for (let l = 0; l < lineCount; l += 1) {
        lines.push(fill(pick(r, [
          "the {noun} {verb} in {place}",
          "{name} says the {noun} is {adj}",
          "we counted {number} {plural} and called it {abstract}",
          "somewhere a {adj} {object} is waiting",
          "the {adj} {noun} keeps its own {abstract}",
          "after {time}, even {abstract} becomes {adj}",
          "i left the {object} by the {noun}",
          "nothing in {place} remembers the {noun}",
          "a {adj} {object}, then {number} {plural}, then rain",
          "the {noun} does not answer to {abstract}"
        ]), r));
      }
      stanzas.push(lines.join("\n"));
    }
    out.push({ type: "verse", text: stanzas.join("\n\n") });
    return out;
  }

  function interviewSection(n, r, tone) {
    const subject = cap(pick(r, NAMES));
    const interviewer = cap(pick(r, NAMES));
    const out = [h2(`Session ${String(n).padStart(2, "0")} / ${cap(pick(r, ABSTRACTS))}`)];
    const exchanges = int(r, 1, 2);
    for (let i = 0; i < exchanges; i += 1) {
      const answer = `${capFirst(sentence(r, tone))} ${capFirst(sentence(r, tone))}`;
      out.push({ type: "p", text: `Q (${interviewer}): ${fill(pick(r, QUESTIONS), r)}` });
      out.push({ type: "p", text: `A (${subject}): ${answer}` });
    }
    if (r() < 0.45) {
      out.push(quote(capFirst(fill(pick(r, SENTENCES.lyrical), r))));
    }
    return out;
  }

  function travelSection(n, r, tone) {
    const heads = ["Arrival", "The {noun}", "A small detour", "What we ate", "Departure", "Return"];
    let label;
    if (n <= heads.length) {
      label = fill(heads[n - 1], r);
    } else {
      label = `Day ${n - heads.length} / ${cap(pick(r, ADJ))}`;
    }
    const out = [h2(cap(label)), p(tone, r, 3)];
    if (r() < 0.4) {
      out.push(...bullets([
        fill("Carried: {number} {plural}, one {adj} {object}, and a map of {place}", r),
        fill("Lost: the {object}, our patience, and {number} {plural}", r),
        fill("Found: a {adj} {noun} behind the {noun}", r)
      ]));
    } else {
      out.push(p(tone, r, 2));
    }
    return out;
  }

  function manualSection(n, r, tone) {
    const heads = ["What's in the box", "Setup", "Daily use", "Maintenance", "Troubleshooting", "Warranty"];
    if (n <= heads.length) {
      const label = heads[n - 1];
      if (n === 1) {
        return [
          h2(label),
          ...bullets([
            `${cap(pick(r, OBJECTS))} / qty ${pick(r, NUMBERS)}`,
            `${cap(pick(r, OBJECTS))} / qty ${pick(r, NUMBERS)}`,
            `${cap(pick(r, ADJ))} ${pick(r, NOUN)} / qty ${pick(r, NUMBERS)}`,
            "This document (qty 1, already read)"
          ])
        ];
      }
      if (n === 2 || n === 5) {
        const steps = [];
        for (let i = 0; i < 4; i += 1) {
          steps.push(fill(pick(r, MANUAL_STEPS), r, { verb: pick(r, VERB_BASE) }));
        }
        return [h2(label), ...bullets(steps)];
      }
      if (n === 6) {
        return [h2(label), p(tone, r, 2), p(tone, r, 2)];
      }
      return [
        h2(label),
        p(tone, r, 2),
        ...bullets([
          fill("If the {noun} {verb}, remove the {object} and wait {number} minutes.", r, { verb: pick(r, VERB_BASE) }),
          fill("Replace the {object} with a {adj} one from {place}.", r)
        ])
      ];
    }
    return [
      h2(`Appendix ${n - heads.length} / ${cap(pick(r, ADJ))} notes`),
      p(tone, r, 2),
      ...bullets([
        fill("Do not use the {noun} near {place}", r),
        fill("Keep the {object} away from {abstract} and direct sunlight", r),
        fill("For service, contact {name} at the {adj} office", r)
      ])
    ];
  }

  function sectionFactory(type, r, tone) {
    let n = 0;
    return function nextSection() {
      n += 1;
      switch (type) {
        case "field-report": return fieldSection(n, r, tone);
        case "recipe": return recipeSection(n, r, tone);
        case "technical-memo": return memoSection(n, r, tone);
        case "poetry": return poetrySection(n, r);
        case "interview": return interviewSection(n, r, tone);
        case "travelogue": return travelSection(n, r, tone);
        case "manual": return manualSection(n, r, tone);
        default: return storySection(n, r, tone);
      }
    };
  }

  function charWidth(code) {
    const index = code - 32;
    if (index >= 0 && index < WIDTH_TABLE.length) return WIDTH_TABLE[index];
    return 556;
  }

  function measure(text, size, bold) {
    let total = 0;
    for (let i = 0; i < text.length; i += 1) total += charWidth(text.charCodeAt(i));
    return (total / 1000) * size * (bold ? 1.025 : 1);
  }

  function wrap(text, maxWidth, size, bold) {
    const words = String(text).split(/\s+/).filter(Boolean);
    if (!words.length) return [""];
    const lines = [];
    let current = "";
    words.forEach((word) => {
      const candidate = current ? `${current} ${word}` : word;
      if (!current || measure(candidate, size, bold) <= maxWidth) {
        current = candidate;
      } else {
        lines.push(current);
        current = word;
      }
    });
    if (current) lines.push(current);
    return lines;
  }

  function prepareBlock(block) {
    if (block.type === "h2") {
      const lines = wrap(block.text.toUpperCase(), CW - 14, 12, true);
      return { type: "h2", lines, size: 12, lead: 16, before: 14, after: 5, x: MX + 12, bold: true };
    }
    if (block.type === "bullet") {
      const lines = wrap(block.text, CW - 18, BODY_SIZE);
      return { type: "bullet", lines, size: BODY_SIZE, lead: 15.2, before: 0, after: 3, x: MX + 18 };
    }
    if (block.type === "quote") {
      const lines = wrap(block.text, CW - 34, 11, true);
      return { type: "quote", lines, size: 11, lead: 17, before: 5, after: 11, x: MX + 21, italic: true };
    }
    if (block.type === "verse") {
      const lines = [];
      block.text.split("\n").forEach((raw) => {
        if (!raw.trim()) lines.push("");
        else lines.push(...wrap(raw, CW - 8, 11));
      });
      return { type: "verse", lines, size: 11, lead: 18, before: 0, after: 15, x: MX + 5 };
    }
    const lines = wrap(block.text, CW, BODY_SIZE);
    return { type: "p", lines, size: BODY_SIZE, lead: BODY_LEAD, before: 0, after: 9, x: MX };
  }

  function pushText(page, text, x, top, size, font, color) {
    page.items.push({ kind: "text", text, x, top, size, font: font || "regular", color: color || "ink" });
  }

  function pushTextRight(page, text, right, top, size, font, color) {
    page.items.push({
      kind: "text",
      text,
      x: right - measure(text, size, font === "bold"),
      top,
      size,
      font: font || "regular",
      color: color || "ink"
    });
  }

  function pushRect(page, x, top, w, h, color) {
    page.items.push({ kind: "rect", x, top, w, h, color });
  }

  function pushLine(page, x, top, w, thickness, color) {
    page.items.push({ kind: "line", x, top, w, thickness, color });
  }

  function pushVLine(page, x, top, h, w, color) {
    page.items.push({ kind: "vline", x, top, h, w, color });
  }

  function pushDot(page, cx, top, radius, color) {
    page.items.push({ kind: "dot", x: cx, top, radius, color });
  }

  function drawFirstHeader(page, doc) {
    pushText(page, doc.kicker, MX, 76, 8.5, "bold", "accent");
    const titleLines = wrap(doc.title, CW, 27, true);
    titleLines.forEach((line, i) => pushText(page, line, MX, 108 + i * 32, 27, "bold", "ink"));
    const subBase = 108 + (titleLines.length - 1) * 32 + 25;
    const subLines = wrap(doc.subtitle, CW, 10.5);
    subLines.forEach((line, i) => pushText(page, line, MX, subBase + i * 14, 10.5, "regular", "muted"));
    const ruleTop = subBase + (subLines.length - 1) * 14 + 13;
    pushRect(page, MX, ruleTop, 48, 3, doc.accent);
    return ruleTop + 26;
  }

  function drawRunningHeader(page, doc) {
    let title = doc.title;
    while (measure(title, 8.5, true) > 340 && title.length > 4) title = `${title.slice(0, -4)}...`;
    pushText(page, title, MX, 70, 8.5, "bold", "ink");
    pushTextRight(page, doc.kicker, MX + CW, 70, 7.5, "bold", "muted");
    pushLine(page, MX, 82, CW, 0.7, "rule");
  }

  function drawFooter(page, doc, index, total) {
    pushLine(page, MX, 736, CW, 0.6, "rule");
    pushRect(page, MX, 748, 3.5, 3.5, doc.accent);
    pushText(page, `${doc.id} / ${doc.kicker}`, MX + 10, 755, 7.5, "regular", "muted");
    pushTextRight(page, `PAGE ${index + 1} OF ${total}`, MX + CW, 755, 7.5, "bold", "muted");
  }

  function drawBlock(page, block, top, doc) {
    const y = top + block.before;
    if (block.type === "h2") pushRect(page, MX, y + 4, 3.5, 3.5, doc.accent);
    if (block.type === "quote") pushVLine(page, MX + 3, y + 1, Math.max(10, block.lines.length * block.lead - 3), 2, doc.accent);
    block.lines.forEach((line, i) => {
      if (!line) return;
      const baseline = y + i * block.lead + block.size * 0.82;
      const font = block.bold ? "bold" : block.italic ? "italic" : "regular";
      pushText(page, line, block.x, baseline, block.size, font, "ink");
    });
    if (block.type === "bullet") {
      pushDot(page, MX + 5, y + BODY_SIZE * 0.82 - 2.6, 1.5, doc.accent);
    }
  }

  function paginate(doc) {
    const pages = [];
    let page;
    let cursor = 0;
    let bodyTop = 0;

    function startPage(first) {
      page = { items: [] };
      pages.push(page);
      if (first) {
        cursor = drawFirstHeader(page, doc);
        bodyTop = cursor;
      } else {
        drawRunningHeader(page, doc);
        cursor = 104;
        bodyTop = 104;
      }
    }

    startPage(true);
    const prepared = doc.blocks.map(prepareBlock);
    let index = 0;

    while (index < prepared.length) {
      const block = prepared[index];
      const contentHeight = block.lines.length * block.lead;
      const available = BOTTOM - cursor - block.before;

      if (block.type === "h2") {
        const headingHeight = block.before + contentHeight + block.after;
        const next = prepared[index + 1];
        const needed = headingHeight + (next ? next.before + Math.min(next.lines.length, 2) * next.lead : 0);
        if (cursor + needed > BOTTOM && cursor > bodyTop + 8) {
          startPage(false);
          continue;
        }
      } else if (contentHeight > available && cursor > bodyTop + 8) {
        const fit = Math.floor(available / block.lead);
        if (fit >= 2) {
          drawBlock(page, { ...block, lines: block.lines.slice(0, fit), after: 0 }, cursor, doc);
          prepared[index] = { ...block, lines: block.lines.slice(fit), before: 0 };
          startPage(false);
          continue;
        }
        startPage(false);
        continue;
      }

      drawBlock(page, block, cursor, doc);
      cursor += block.before + contentHeight + block.after;
      index += 1;
    }

    pages.forEach((item, index) => drawFooter(item, doc, index, pages.length));
    return { pages, bodyTop, endCursor: cursor };
  }

  function countWords(parts) {
    return parts.join(" ").trim().split(/\s+/).filter(Boolean).length;
  }

  function hexToRgb(hex) {
    const clean = hex.replace("#", "");
    const value = parseInt(clean, 16);
    return [
      ((value >> 16) & 255) / 255,
      ((value >> 8) & 255) / 255,
      (value & 255) / 255
    ];
  }

  function pdfColor(color, accent) {
    if (color === "accent") return hexToRgb(accent);
    return PDF_COLORS[color] || PDF_COLORS.ink;
  }

  function num(value) {
    return Number(value.toFixed(2)).toString();
  }

  function rgbCommand(color) {
    return `${num(color[0])} ${num(color[1])} ${num(color[2])} rg`;
  }

  function rgbStroke(color) {
    return `${num(color[0])} ${num(color[1])} ${num(color[2])} RG`;
  }

  function escapePdf(text) {
    return String(text).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  }

  function circlePath(cx, cy, radius) {
    const c = 0.5522847498 * radius;
    const x = cx;
    const y = cy;
    return [
      `${num(x + radius)} ${num(y)} m`,
      `${num(x + radius)} ${num(y + c)} ${num(x + c)} ${num(y + radius)} ${num(x)} ${num(y + radius)} c`,
      `${num(x - c)} ${num(y + radius)} ${num(x - radius)} ${num(y + c)} ${num(x - radius)} ${num(y)} c`,
      `${num(x - radius)} ${num(y - c)} ${num(x - c)} ${num(y - radius)} ${num(x)} ${num(y - radius)} c`,
      `${num(x + c)} ${num(y - radius)} ${num(x + radius)} ${num(y - c)} ${num(x + radius)} ${num(y)} c`,
      "f"
    ].join("\n");
  }

  function itemToPdf(item, accent) {
    if (item.kind === "text") {
      const font = item.font === "bold" ? "F2" : item.font === "italic" ? "F3" : "F1";
      const color = pdfColor(item.color, accent);
      const y = PAGE_H - item.top;
      return `${rgbCommand(color)}\nBT /${font} ${num(item.size)} Tf ${num(item.x)} ${num(y)} Td (${escapePdf(item.text)}) Tj ET`;
    }
    if (item.kind === "rect") {
      const color = hexToRgb(item.color);
      return `${rgbCommand(color)}\n${num(item.x)} ${num(PAGE_H - item.top - item.h)} ${num(item.w)} ${num(item.h)} re f`;
    }
    if (item.kind === "line") {
      const color = pdfColor(item.color, accent);
      const y = PAGE_H - item.top;
      return `${rgbStroke(color)}\n${num(item.thickness)} w\n${num(item.x)} ${num(y)} m ${num(item.x + item.w)} ${num(y)} l S`;
    }
    if (item.kind === "vline") {
      const color = pdfColor(item.color, accent);
      const startY = PAGE_H - item.top;
      return `${rgbStroke(color)}\n${num(item.w)} w\n${num(item.x)} ${num(startY)} m ${num(item.x)} ${num(startY - item.h)} l S`;
    }
    if (item.kind === "dot") {
      const color = hexToRgb(item.color);
      return `${rgbCommand(color)}\n${circlePath(item.x, PAGE_H - item.top, item.radius)}`;
    }
    return "";
  }

  function pdfDate() {
    const d = new Date();
    const pad = (value) => String(value).padStart(2, "0");
    return `D:${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}+00'00'`;
  }

  function buildPdf(doc, pages) {
    const kids = [];
    pages.forEach((_, index) => kids.push(`${7 + index * 2} 0 R`));

    let pdf = "%PDF-1.4\n";
    const offsets = [];
    let objectCount = 6 + pages.length * 2;

    function addObject(id, body) {
      offsets[id] = pdf.length;
      pdf += `${id} 0 obj\n${body}\nendobj\n`;
    }

    addObject(1, "<< /Type /Catalog /Pages 2 0 R >>");
    addObject(2, `<< /Type /Pages /Kids [${kids.join(" ")}] /Count ${pages.length} >>`);
    addObject(3, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>");
    addObject(4, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>");
    addObject(5, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >>");
    addObject(6, `<< /Title (${escapePdf(doc.title)}) /Author (PaperMint) /Subject (${escapePdf(doc.kicker)}) /Creator (PaperMint random document generator) /Producer (PaperMint PDF 1.4) /CreationDate (${pdfDate()}) >>`);

    pages.forEach((page, index) => {
      const pageId = 7 + index * 2;
      const contentId = 8 + index * 2;
      const stream = page.items.map((item) => itemToPdf(item, doc.accent)).join("\n");
      addObject(
        pageId,
        `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_W} ${PAGE_H}] /Resources << /Font << /F1 3 0 R /F2 4 0 R /F3 5 0 R >> >> /Contents ${contentId} 0 R >>`
      );
      addObject(contentId, `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);
    });

    const xrefOffset = pdf.length;
    pdf += `xref\n0 ${objectCount + 1}\n0000000000 65535 f \n`;
    for (let i = 1; i <= objectCount; i += 1) {
      pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
    }
    pdf += `trailer\n<< /Size ${objectCount + 1} /Root 1 0 R /Info 6 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

    const bytes = new Uint8Array(pdf.length);
    for (let i = 0; i < pdf.length; i += 1) bytes[i] = pdf.charCodeAt(i) & 255;
    return bytes;
  }

  function buildDocument(options) {
    const type = options.type;
    const tone = options.tone;
    const seed = options.seed;
    const pageCount = options.pageCount;
    const typeInfo = TYPES[type];
    const hash = hashSeed(`${type}|${tone}|${seed}`);
    const r = mulberry32(hash);
    const title = titleCase(TITLE_FOR[type](r));
    const subtitle = SUBTITLE_FOR[type](r);
    const accent = typeInfo.accent;
    const id = `PM-${String(hash % 1000000).padStart(6, "0")}`;
    const kicker = typeInfo.label.toUpperCase();
    const intro = { type: "p", text: paragraph(r, tone, 4) };
    const nextSection = sectionFactory(type, r, tone);
    const sections = [];
    let blocks = [intro];

    let layout = paginate({ title, subtitle, kicker, id, accent, blocks });
    let guard = 0;
    while (layout.pages.length < pageCount && guard < 140) {
      sections.push(nextSection());
      blocks = [intro, ...sections.flat()];
      layout = paginate({ title, subtitle, kicker, id, accent, blocks });
      guard += 1;
    }
    guard = 0;
    while (layout.pages.length > pageCount && sections.length > 0 && guard < 220) {
      sections.pop();
      blocks = [intro, ...sections.flat()];
      layout = paginate({ title, subtitle, kicker, id, accent, blocks });
      guard += 1;
    }

    if (layout.pages.length === pageCount && BOTTOM - layout.endCursor > 96) {
      let codaText = "";
      let best = null;
      const codaType = type === "poetry" ? "verse" : "p";
      const linePool = [
        "the {noun} {verb} in {place}",
        "{name} says the {noun} is {adj}",
        "we counted {number} {plural} and called it {abstract}",
        "somewhere a {adj} {object} is waiting",
        "nothing in {place} remembers the {noun}",
        "a {adj} {object}, then {number} {plural}, then rain",
        "after {time}, even {abstract} becomes {adj}",
        "the {adj} {noun} keeps its own {abstract}"
      ];
      let codaPool = type === "poetry" ? [...linePool] : [...(SENTENCES[tone] || SENTENCES.whimsical)];
      const maxLines = 40;
      for (let i = 0; i < maxLines; i += 1) {
        if (!codaPool.length) {
          codaPool = type === "poetry" ? [...linePool] : [...(SENTENCES[tone] || SENTENCES.whimsical)];
        }
        const pickIndex = Math.floor(r() * codaPool.length);
        const template = codaPool.splice(pickIndex, 1)[0];
        const addition = capFirst(fill(template, r));
        const carrier = type === "poetry" ? (codaText ? "\n" : "") : (codaText ? " " : "");
        const trialText = codaText + carrier + addition;
        const trialBlock = { type: codaType, text: trialText };
        const trialBlocks = [...blocks, trialBlock];
        const trialLayout = paginate({ title, subtitle, kicker, id, accent, blocks: trialBlocks });
        if (trialLayout.pages.length > pageCount) break;
        codaText = trialText;
        best = { blocks: trialBlocks, layout: trialLayout };
        if (BOTTOM - trialLayout.endCursor < 40) break;
      }
      if (best) {
        blocks = best.blocks;
        layout = best.layout;
      }
    }

    const words = countWords([title, subtitle, ...blocks.map((block) => block.text || "")]);
    const doc = { title, subtitle, kicker, id, accent, blocks, words };
    const pdf = buildPdf(doc, layout.pages);
    return { doc, layout, pdf, words };
  }

  function previewColor(color, accent) {
    if (color === "accent") return accent;
    return PREVIEW_COLORS[color] || PREVIEW_COLORS.ink;
  }

  function cqw(points) {
    return `${(points / PAGE_W * 100).toFixed(4)}cqw`;
  }

  function renderPage() {
    if (!state) return;
    const page = state.layout.pages[state.index];
    const accent = state.doc.accent;
    const frag = document.createDocumentFragment();

    page.items.forEach((item) => {
      const node = document.createElement("div");
      if (item.kind === "text") {
        node.className = "p-item";
        node.textContent = item.text;
        node.style.left = `${(item.x / PAGE_W) * 100}%`;
        node.style.top = `${((item.top - item.size * 0.8) / PAGE_H) * 100}%`;
        node.style.fontSize = cqw(item.size);
        node.style.color = previewColor(item.color, accent);
        node.style.fontFamily = "'Helvetica Neue', Helvetica, Arial, sans-serif";
        node.style.fontWeight = item.font === "bold" ? "700" : "400";
        node.style.fontStyle = item.font === "italic" ? "italic" : "normal";
      } else if (item.kind === "rect") {
        node.className = "p-rect";
        node.style.left = `${(item.x / PAGE_W) * 100}%`;
        node.style.top = `${(item.top / PAGE_H) * 100}%`;
        node.style.width = cqw(item.w);
        node.style.height = cqw(item.h);
        node.style.background = item.color;
      } else if (item.kind === "line") {
        node.className = "p-line";
        node.style.left = `${(item.x / PAGE_W) * 100}%`;
        node.style.top = `${(item.top / PAGE_H) * 100}%`;
        node.style.width = cqw(item.w);
        node.style.height = `max(1px, ${cqw(item.thickness)})`;
        node.style.background = previewColor(item.color, accent);
      } else if (item.kind === "vline") {
        node.className = "p-vline";
        node.style.left = `${(item.x / PAGE_W) * 100}%`;
        node.style.top = `${(item.top / PAGE_H) * 100}%`;
        node.style.width = `max(1px, ${cqw(item.w)})`;
        node.style.height = cqw(item.h);
        node.style.background = previewColor(item.color, accent);
      } else if (item.kind === "dot") {
        node.className = "p-dot";
        const diameter = item.radius * 2;
        node.style.left = `${((item.x - item.radius) / PAGE_W) * 100}%`;
        node.style.top = `${((item.top - item.radius) / PAGE_H) * 100}%`;
        node.style.width = `max(1.5px, ${cqw(diameter)})`;
        node.style.height = `max(1.5px, ${cqw(diameter)})`;
        node.style.background = item.color;
      }
      frag.appendChild(node);
    });

    ui.paper.replaceChildren(frag);
    ui.paper.classList.remove("turning");
    void ui.paper.offsetWidth;
    ui.paper.classList.add("turning");
  }

  function renderDots() {
    if (!state) return;
    const total = state.layout.pages.length;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < total; i += 1) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Go to page ${i + 1}`);
      dot.setAttribute("aria-current", i === state.index ? "true" : "false");
      dot.addEventListener("click", () => {
        state.index = i;
        syncPager();
        renderPage();
      });
      frag.appendChild(dot);
    }
    ui.dots.replaceChildren(frag);
  }

  function syncPager() {
    if (!state) return;
    const total = state.layout.pages.length;
    ui.pageLabel.textContent = `${state.index + 1} / ${total}`;
    ui.prev.disabled = state.index === 0;
    ui.next.disabled = state.index === total - 1;
    const dots = ui.dots.querySelectorAll("button");
    dots.forEach((dot, i) => dot.setAttribute("aria-current", i === state.index ? "true" : "false"));
  }

  function syncMeta() {
    if (!state) return;
    const total = state.layout.pages.length;
    const kb = state.pdf.length / 1024;
    ui.docTitle.textContent = state.doc.title;
    ui.chipPages.textContent = `${total} ${total === 1 ? "page" : "pages"}`;
    ui.chipWords.textContent = `${state.words} words`;
    ui.chipSize.textContent = `${kb < 10 ? kb.toFixed(1) : Math.round(kb)} KB`;
    ui.footSeed.textContent = state.seed;
    ui.footGenre.textContent = TYPES[state.type].label.toLowerCase();
  }

  function slugify(value) {
    return value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 56) || "papermint-document";
  }

  function randomSeed() {
    return String(Math.floor(1000 + Math.random() * 900000));
  }

  function updateRangeFill() {
    const value = Number(ui.pages.value);
    const min = Number(ui.pages.min);
    const max = Number(ui.pages.max);
    const percent = ((value - min) / (max - min)) * 100;
    ui.pages.style.setProperty("--fill", `${percent}%`);
    ui.pagesOut.textContent = `${value} ${value === 1 ? "page" : "pages"}`;
  }

  function generate(options) {
    const settings = options || {};
    if (settings.newSeed) ui.seed.value = randomSeed();
    let seed = ui.seed.value.trim();
    if (!seed) {
      seed = randomSeed();
      ui.seed.value = seed;
    }
    const type = ui.type.value;
    const tone = ui.tone.value;
    const pageCount = Number(ui.pages.value);

    ui.generate.dataset.working = "true";
    const result = buildDocument({ type, tone, seed, pageCount });
    state = {
      ...result,
      seed,
      type,
      tone,
      index: 0
    };
    document.documentElement.dataset.docType = type;
    renderPage();
    renderDots();
    syncPager();
    syncMeta();
    ui.generate.dataset.working = "false";
  }

  function download() {
    if (!state) return;
    const blob = new Blob([state.pdf], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${slugify(state.doc.title)}-${state.seed}.pdf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 5000);
  }

  function scheduleGenerate() {
    window.clearTimeout(regenerateTimer);
    regenerateTimer = window.setTimeout(() => generate(), 120);
  }

  ui.pages.addEventListener("input", () => {
    updateRangeFill();
    scheduleGenerate();
  });
  ui.type.addEventListener("change", () => generate());
  ui.tone.addEventListener("change", () => generate());
  ui.seed.addEventListener("keydown", (event) => {
    if (event.key === "Enter") generate();
  });
  ui.reroll.addEventListener("click", () => generate({ newSeed: true }));
  ui.generate.addEventListener("click", () => generate());
  ui.download.addEventListener("click", download);
  ui.prev.addEventListener("click", () => {
    if (!state || state.index === 0) return;
    state.index -= 1;
    syncPager();
    renderPage();
  });
  ui.next.addEventListener("click", () => {
    if (!state || state.index >= state.layout.pages.length - 1) return;
    state.index += 1;
    syncPager();
    renderPage();
  });

  window.addEventListener("keydown", (event) => {
    const tag = document.activeElement ? document.activeElement.tagName : "";
    if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;
    if (event.key === "g" || event.key === "G") generate();
    if (event.key === "d" || event.key === "D") download();
    if (event.key === "ArrowLeft" && state && state.index > 0) {
      state.index -= 1;
      syncPager();
      renderPage();
    }
    if (event.key === "ArrowRight" && state && state.index < state.layout.pages.length - 1) {
      state.index += 1;
      syncPager();
      renderPage();
    }
  });

  updateRangeFill();
  generate();
})();
