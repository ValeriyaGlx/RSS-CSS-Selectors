const data = [
  {
    level: 1,
    levelName: 'A',
    title: 'Select The Foxes',
    codeFragment: `
    <div class="forest">
    <fox class="dance"></fox>
    <fox class="dance"></fox>
    </div>`,
    htmlFragment: `
    <<span class="html-tag">div</span> <span class="html-class">class</span>="<span class="html-class-name">forest</span>">
    <div><<span class="html-tag for-hover">fox</span>/></div>
    <div><<span class="html-tag for-hover">fox</span>/></div>
    <&#47<span class="html-tag">div</span>>`,
    rightAnwser: ['fox'],
    description: {
      title: 'Type selector',
      task: 'Select elements by their type',
      tag: '<span class="tag">A</span>',
      description: `
      Selects all elements of type A.
      Type refers to the type of tag, so <span class="tag">div</span>, <span class="tag">p</span> and <span class="tag">ul</span> are all different element types.`,
      examples: ['div selects all <div> elements.', 'p selects all <p> elements.'],
    },
  },

  {
    level: 2,
    levelName: '.classname',
    title: 'Select The Squirrel With a Nut',
    codeFragment: `
    <div class="forest">
    <squirrel></squirrel>
    <squirrel class="with-nut dance"></squirrel>
    </div>`,
    htmlFragment: `
    <<span class="html-tag">div</span> <span class="html-class">class</span>="<span class="html-class-name">forest</span>">
    <div><<span class="html-tag for-hover">squirrel</span>/></div>
    <div><<span class="html-tag for-hover">squirrel</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">with-nut</span>"/></div>
    <&#47<span class="html-tag">div</span>>`,
    rightAnwser: ['.with-nut'],
    description: {
      title: 'Class selector',
      task: 'Select elements by their class',
      tag: '<span class="tag">.classname</span>',
      description: `The class selector selects all elements with that class attribute. Elements can have many classes.`,
      examples: ['.neato selects all elements with class="neato"', '.active selects all elements with class="active"'],
    },
  },

  {
    level: 3,
    levelName: '#id',
    title: 'Select The Pink Bird',
    codeFragment: `
    <div class="forest">
    <bird></bird>
    <bird class="pink dance" id='pink'></bird>
    </div>`,
    htmlFragment: `
    <<span class="html-tag">div</span> <span class="html-class">class</span>="<span class="html-class-name">forest</span>">
    <div><<span class="html-tag for-hover">bird</span>/></div>
    <div><<span class="html-tag for-hover">bird</span> <span class="html-id for-hover">id</span>="<span class="html-class-name for-hover">pink</span>"/></div>
    <&#47<span class="html-tag">div</span>>`,
    rightAnwser: ['#pink'],
    description: {
      title: 'Id selector',
      task: 'Select elements by their id',
      tag: '<span class="tag">#id</span>',
      description: `Selects the element with a specific <span class="tag">id</span>. You can also combine the ID selector with the type selector. 
      Elements can only have one ID, but many classes.`,
      examples: ['#cool selects any element with id="cool"', 'ul#long selects ul id="long"'],
    },
  },

  {
    level: 4,
    levelName: 'A B',
    title: 'Select The Squirrel Into The Cave',
    codeFragment: `
    <div class="forest">
    <cave>
    <squirrel class="dance">
    </cave>
    <squirrel></squirrel>
    </div>`,
    htmlFragment: `
    <<span class="html-tag">div</span> <span class="html-class">class</span>="<span class="html-class-name">forest</span>">
    <div>
    <<span class="html-tag for-hover">cave</span>>
    <div class="inside"><<span class="html-tag for-hover">squirrel</span>/></div>
    <&#47<span class="html-tag for-hover">cave</span>>
    </div>
    <div><<span class="html-tag for-hover">squirrel</span>/></div>
    <&#47<span class="html-tag">div</span>>
    `,
    rightAnwser: ['cave squirrel'],
    description: {
      title: 'Descendant selector',
      task: 'Select an element inside another element',
      tag: '<span class="tag">A B</span>',
      description: `Selects all <span class="tag">B</span> inside of <span class="tag">A</span>.
      <span class="tag">B</span> is called a descendant because it is inside of another element.`,
      examples: [
        `p  strong selects all <strong> elements that are inside of any <p>`,
        `#fancy span selects any <span> elements that are
         inside of the element with id="fancy"`,
      ],
    },
  },

  {
    level: 5,
    levelName: 'A, B',
    title: 'Select All The Caves and Stumps',
    codeFragment: `
    <div class="forest">
    <squirrel class="with-nut"></squirrel>
    <stump class="dance">
    <squirrel></squirrel>
    </stump>
    <cave class="dance">
    <squirrel class="with-nut">
    </cave>
    <squirrel></squirrel>
    <stump class="dance">
    <squirrel></squirrel>
    </stump>
    </div>`,
    htmlFragment: `
    <<span class="html-tag">div</span> <span class="html-class">class</span>="<span class="html-class-name">forest</span>">
    <div><<span class="html-tag for-hover">squirrel</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">with-nut</span>"/></div>
    <div>
    <<span class="html-tag for-hover">stump</span>>
    <div class="inside"><<span class="html-tag for-hover">squirrel</span>/></div>
    <&#47<span class="html-tag for-hover">stump</span>>
    </div>
    <div>
    <<span class="html-tag for-hover">cave</span>>
    <div class="inside"><<span class="html-tag for-hover">squirrel</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">with-nut</span>"/></div>
    <&#47<span class="html-tag for-hover">cave</span>>
    </div>
    <div><<span class="html-tag for-hover">squirrel</span>/></div>
    <div>
    <<span class="html-tag for-hover">stump</span>>
    <div class="inside"><<span class="html-tag for-hover">squirrel</span>/></div>
    <&#47<span class="html-tag for-hover">stump</span>>
    </div>
    <&#47<span class="html-tag">div</span>>
    `,
    rightAnwser: ['cave, stump'],
    description: {
      title: 'Comma combinator',
      task: 'Combine selectors with commas!',
      tag: '<span class="tag">A, B</span>',
      description: `Thanks to Shatner technology, this selects all <span class="tag">A</span> and <span class="tag">B</span> elements.
       You can combine any selectors this way, and you can specify more than two. `,
      examples: [
        `p, .fun selects all <p> elements as well as all elements with class="fun"`,
        `a, p, div selects all <a>, <p> and <div> elements`,
      ],
    },
  },

  {
    level: 6,
    levelName: 'A.classname',
    title: 'Select The Deers',
    codeFragment: `
    <div class="forest">
    <mount>
     <deer class="dance brown"></deer>
     </mount>
     <squirrel class="brown"></squirrel>
     <rabbit></rabbit>
     <stump>
     <fox></fox>
     </stump>
     <deer class="dance brown"></deer>
    </div>`,
    htmlFragment: `
      <<span class="html-tag">div</span> <span class="html-class">class</span>="<span class="html-class-name">forest</span>">
      <div>
      <<span class="html-tag for-hover">cave</span>>
      <div class="inside"><<span class="html-tag for-hover">deer</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">brown</span>"/></div>
      <&#47<span class="html-tag for-hover">cave</span>>
      </div>
      <div><<span class="html-tag for-hover">squirrel</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">brown</span>"/></div>
      <div><<span class="html-tag for-hover">rabbit</span>/></div>
      <div>
      <<span class="html-tag for-hover">stump</span>>
      <div class="inside"><<span class="html-tag for-hover">fox</span>/></div>
      <&#47<span class="html-tag for-hover">stump</span>>
      </div>
      <div><<span class="html-tag for-hover">deer</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">brown</span>"/></div>
      <&#47<span class="html-tag">div</span>>
    `,
    rightAnwser: ['deer.brown'],
    description: {
      title: '',
      task: 'Combine the class selector',
      tag: '<span class="tag">A.classname</span>',
      description: `You can combine the class selector with other selectors, like the type selector.`,
      examples: [
        `ul.important selects all <ul> elements that have class="important"`,
        `#big.wide selects all elements with id="big" that also have class="wide"`,
      ],
    },
  },

  {
    level: 7,
    levelName: '*',
    title: 'Select All',
    codeFragment: `
    <div class="forest">
    <mount class="mount dance">
    <fox class="dance"></fox>
    </mount>
    <deer class="dance"></deer>
    <mount class="dance">
    <rabbit class="dance"></rabbit>
    </mount>
    </div>`,
    htmlFragment: `
    <<span class="html-tag">div</span> <span class="html-class">class</span>="<span class="html-class-name">forest</span>">
    <div>
    <<span class="html-tag for-hover">cave</span>>
    <div class="inside"><<span class="html-tag for-hover">fox</span>/></div>
    <&#47<span class="html-tag for-hover">cave</span>>
    </div>
    <div><<span class="html-tag for-hover">deer</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">brown</span>"/></div>
    <div>
    <<span class="html-tag for-hover">cave</span>>
    <div class="inside"><<span class="html-tag for-hover">rabbit</span>/></div>
    <&#47<span class="html-tag for-hover">cave</span>>
    </div>
    <&#47<span class="html-tag">div</span>>
    `,
    rightAnwser: ['*', '.forest *', '.forest > *'],
    description: {
      title: 'The universal selector',
      task: 'You can select everything!',
      tag: '<span class="tag">*</span>',
      description: `You can select all elements with the universal selector!`,
      examples: ['p * selects any element inside all <p> elements.', '* selects all elements.'],
    },
  },

  {
    level: 8,
    levelName: 'A *',
    title: 'Select All Animals In The Stump',
    codeFragment: `
    <div class="forest">
    <stump>
    <snail class="top dance"></snail>
    <rabbit class="lay dance"></rabbit>
    </stump>
    <rabbit></rabbit>
    </div>`,
    htmlFragment: `
    <<span class="html-tag">div</span> <span class="html-class">class</span>="<span class="html-class-name">forest</span>">
    <div>
    <<span class="html-tag for-hover">stump</span>>
    <div class="inside"><<span class="html-tag for-hover">snail</span>/></div>
    <div class="inside"><<span class="html-tag for-hover">rabbit</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">lay</span>"/></div>
    <&#47<span class="html-tag for-hover">stump</span>>
    </div>
    <div><<span class="html-tag for-hover">rabbit</span>/></div>
    <&#47<span class="html-tag">div</span>>
    `,
    rightAnwser: ['stump *'],
    description: {
      title: '',
      task: 'Combine the universal selector',
      tag: '<span class="tag">A *</span>',
      description: 'This selects all elements inside of <span class="tag">A</span>.',
      examples: [
        `ul.fancy * selects every element inside all <ul> class="fancy" elements.`,
        `div * selects every element inside all <div>`,
      ],
    },
  },

  {
    level: 9,
    levelName: ':first-child',
    title: 'Select The First Snail',
    codeFragment: `
    <div class="forest">
    <rabbit></rabbit>
    <cave></cave>
    <stump>
    <snail class="dance top"></snail>
    <snail class="snail"></snail>
    </stump>
    </div>`,
    htmlFragment: `
    <<span class="html-tag">div</span> <span class="html-class">class</span>="<span class="html-class-name">forest</span>">
    <div><<span class="html-tag for-hover">rabbit</span>/></div>
    <div><<span class="html-tag for-hover">cave</span>/></div>
    <div>
    <<span class="html-tag for-hover">stump</span>>
    <div class="inside"><<span class="html-tag for-hover">snail</span>/></div>
    <div class="inside"><<span class="html-tag for-hover">snail</span>/></div>
    <&#47<span class="html-tag for-hover">stump</span>>
    </div>
    <&#47<span class="html-tag">div</span>>
    `,
    rightAnwser: ['snail:first-child'],
    description: {
      title: 'First child pseudo-selector',
      task: 'Select a first child element inside of another element',
      tag: '<span class="tag">:first-child</span>',
      description: `You can select the first child element. A child element is any element that is directly nested in another element.b
      You can combine this pseudo-selector with other selectors.`,
      examples: [
        `p:first-child selects all first child <p> elements.`,
        `div p:first-child selects all first child <p> elements that are in a <div>.`,
      ],
    },
  },

  {
    level: 10,
    levelName: ':last-child',
    title: 'And Now Select the Last Snail',
    codeFragment: `
    <div class="forest">
    <rabbit></rabbit>
    <cave></cave>
    <stump>
    <snail class="top snail select"></snail>
    <snail class="dance"></snail>
    </stump>
    </div>`,
    htmlFragment: `
    <<span class="html-tag">div</span> <span class="html-class">class</span>="<span class="html-class-name">forest</span>">
    <div><<span class="html-tag for-hover">rabbit</span>/></div>
    <div><<span class="html-tag for-hover">cave</span>/></div>
    <div>
    <<span class="html-tag for-hover">stump</span>>
    <div class="inside"><<span class="html-tag for-hover">snail</span>/></div>
    <div class="inside"><<span class="html-tag for-hover">snail</span>/></div>
    <&#47<span class="html-tag for-hover">stump</span>>
    </div>
    <&#47<span class="html-tag">div</span>>
    `,
    rightAnwser: ['snail:last-child'],
    description: {
      title: 'Last child pseudo-selector',
      task: 'Select a last child element inside of another element',
      tag: '<span class="tag">:last-child</span>',
      description: `You can use this selector to select an element that is the last child element inside of another element.`,
      examples: [
        `span:last-child selects all last-child <span> elements.`,
        `ul li:last-child selects the last <li> elements inside of any <ul>.`,
      ],
    },
  },

  {
    level: 11,
    levelName: ':nth-child(a)',
    title: 'Select the 5th bird',
    codeFragment: `
    <div class="forest">
    <bird></bird>
    <bird class='pink'></bird>
    <bird class='pink'></bird>
    <bird></bird>
    <bird class='dance'></bird>
    <bird class='pink'></bird>
    </div>`,
    htmlFragment: `
    <<span class="html-tag">div</span> <span class="html-class">class</span>="<span class="html-class-name">forest</span>">
    <div><<span class="html-tag for-hover">bird</span>/></div>
    <div><<span class="html-tag for-hover">bird</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">pink</span>"/></div>
    <div><<span class="html-tag for-hover">bird</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">pink</span>"/></div>
    <div><<span class="html-tag for-hover">bird</span>/></div>
    <div><<span class="html-tag for-hover">bird</span>/></div>
    <div><<span class="html-tag for-hover">bird</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">pink</span>"/></div>
    <&#47<span class="html-tag">div</span>>`,
    rightAnwser: ['bird:nth-child(5)'],
    description: {
      title: 'Nth Child Pseudo-selector',
      task: 'Select an element by its order in another element',
      tag: '<span class="tag">:nth-child(even)</span>',
      description: `Selects the <span class="tag">nth</span> (Ex: 1st, 3rd, 12th etc.) child element in another element.`,
      examples: [
        `:nth-child(8) selects every element that is the 8th child of another element.`,
        `div p:nth-child(2) selects the second <p> in every <div>`,
      ],
    },
  },

  {
    level: 12,
    levelName: ':nth-child(even)',
    title: 'Select every second stump',
    codeFragment: `
    <div class="forest">
    <stump>
    <fox></fox>
    </stump>
    <stump class="dance">
    <rabbit></rabbit>
    </stump>
    <stump>
    <snail class="top"></snail>
    </stump>
    <stump  class="dance">
    <squirrel class="with-nut"></squirrel>
    </stump>
    </div>`,
    htmlFragment: `
    <<span class="html-tag">div</span> <span class="html-class">class</span>="<span class="html-class-name">forest</span>">
    <div>
    <<span class="html-tag for-hover">stump</span>>
    <div class="inside"><<span class="html-tag for-hover">fox</span>/></div>
    <&#47<span class="html-tag for-hover">stump</span>>
    </div>
    <div>
    <<span class="html-tag for-hover">stump</span>>
    <div class="inside"><<span class="html-tag for-hover">rabbit</span>/></div>
    <&#47<span class="html-tag for-hover">stump</span>>
    </div>
    <div>
    <<span class="html-tag for-hover">stump</span>>
    <div class="inside"><<span class="html-tag for-hover">snail</span>/></div>
    <&#47<span class="html-tag for-hover">stump</span>>
    </div>
    <div>
    <<span class="html-tag for-hover">stump</span>>
    <div class="inside"><<span class="html-tag for-hover">squirrel</span>/></div>
    <&#47<span class="html-tag for-hover">stump</span>>
    </div>
    <&#47<span class="html-tag">div</span>>`,
    rightAnwser: ['stump:nth-child(even)'],
    description: {
      title: 'Even child pseudo-selector',
      task: 'Select every even child element inside of another element',
      tag: '<span class="tag">:nth-child(even)</span>',
      description: `Odd and <span class="tag">even</span> are keywords that can be used to match child elements whose index is odd or even (the index of the first child is 1).`,
      examples: [
        'tr:nth-child(even) selects all even <tr> in the table',
        `div p:nth-child(even) selects even <p> elements in every <div>`,
      ],
    },
  },

  {
    level: 13,
    levelName: ':nth-child(odd)',
    title: 'Select every odd cave',
    codeFragment: `
    <div class="forest">
    <cave class="dance">
    <snail></snail>
    </cave>
    <cave>
    <rabbit></rabbit>
    </cave>
    <cave class="dance">
    <fox></fox>
    </cave>
    <cave>
    <rabbit></rabbit>
    </cave>
    </div>`,
    htmlFragment: `
    <<span class="html-tag">div</span> <span class="html-class">class</span>="<span class="html-class-name">forest</span>">
    <div>
    <<span class="html-tag for-hover">cave</span>>
    <div class="inside"><<span class="html-tag for-hover">snail</span>/></div>
    <&#47<span class="html-tag for-hover">cave</span>>
    </div>
    <div>
    <<span class="html-tag for-hover">cave</span>>
    <div class="inside"><<span class="html-tag for-hover">rabbit</span>/></div>
    <&#47<span class="html-tag for-hover">cave</span>>
    </div>
    <div>
    <<span class="html-tag for-hover">cave</span>>
    <div class="inside"><<span class="html-tag for-hover">fox</span>/></div>
    <&#47<span class="html-tag for-hover">cave</span>>
    </div>
    <div>
    <<span class="html-tag for-hover">cave</span>>
    <div class="inside"><<span class="html-tag for-hover">rabbit</span>/></div>
    <&#47<span class="html-tag for-hover">cave</span>>
    </div>
    <&#47<span class="html-tag">div</span>>
    `,
    rightAnwser: ['cave:nth-child(odd)'],
    description: {
      title: 'Odd child pseudo-selector',
      task: 'Select every odd child element inside of another element',
      tag: '<span class="tag">:nth-child(odd)</span>',
      description: `<span class="tag">Odd</span> and even are keywords that can be used to match child elements whose index is odd or even (the index of the first child is 1).`,
      examples: [
        'tr:nth-child(odd) selects all odd <tr> in the table',
        `div p:nth-child(odd) selects odd <p> elements in every <div>`,
      ],
    },
  },

  {
    level: 14,
    levelName: ':nth-child(An + B)',
    title: 'Select every third animal',
    codeFragment: `
    <div class="forest">
    <animal class="deer"></animal>
    <animal class="snail"></animal>
    <animal class="dance rabbit"></animal>
    <animal class="squirrel"></animal>
    <animal class="fox"></animal>
    <animal class="dance snail"></animal>
    </div>`,
    htmlFragment: `
    <<span class="html-tag">div</span> <span class="html-class">class</span>="<span class="html-class-name">forest</span>">
    <div><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">deer</span>"/></div>
    <div><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">snail</span>"/></div>
    <div><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">rabbit</span>"/></div>
    <div><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">squirell</span>"/></div>
    <div><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">fox</span>"/></div>
    <div><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">snail</span>"/></div>
    <&#47<span class="html-tag">div</span>>
    `,
    rightAnwser: ['animal:nth-child(3n + 0)'],
    description: {
      title: 'Even child pseudo-selector',
      task: 'Select every evet child element inside of another element',
      tag: '<span class="tag">:nth-child(An + B)</span>',
      description: '',
      examples: [
        `p:nth-child(3n+0) selects every third <p> element.`,
        `span:nth-child(6n+2) selects every 6th instance of a <span>, starting from (and including) the second instance.`,
      ],
    },
  },

  {
    level: 15,
    levelName: 'A + B',
    title: "Select Every Animal that's Next the Cave",
    codeFragment: `
    <div class="forest">
    <cave>
    <animal class='squirrel'></animal>
    </cave>
    <animal class="dance rabbit"></animal>
    <animal class='fox'></animal>
    <cave>
    </cave>
    <animal class="dance fox"></animal>
    </div>`,
    htmlFragment: `
    <<span class="html-tag">div</span> <span class="html-class">class</span>="<span class="html-class-name">forest</span>">
    <div>
    <<span class="html-tag for-hover">cave</span>>
    <div class="inside"><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">squirell</span>"/></div>
    <&#47<span class="html-tag for-hover">cave</span>>
    </div>
    <div><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">rabbit</span>"/></div>
    <div><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">fox</span>"/></div>
    <div>
    <<span class="html-tag for-hover">cave</span>/>
    </div>
    <div><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">fox</span>"/></div>
    <&#47<span class="html-tag">div</span>>
    `,
    rightAnwser: ['cave + animal'],
    description: {
      title: 'Adjacent Sibling Selector',
      task: 'Select an element that directly follows another element',
      tag: '<span class="tag">A + B</span>',
      description: `Selects the first <span class="tag">B</span> element
      that is placed immediately after <span class="tag">A</span> elements`,
      examples: [
        `div + a selects every <a> element that directly follows a <div>`,
        `p + .intro selects every element with class="intro" that directly follows a <p>`,
      ],
    },
  },

  {
    level: 16,
    levelName: 'A ~ B',
    title: 'Select Every Bird Toside Animal',
    codeFragment: `
    <div class="forest">
    <animal class="deer"></animal>
    <bird class="pink dance"></bird>
    <bird class="dance"></bird>
    <animal class="squirrel"></animal>
    <cave>
    <bird class="pink" ></bird>
    </cave>
    <animal class="snail"></animal>
    </div>`,
    htmlFragment: `
    <<span class="html-tag">div</span> <span class="html-class">class</span>="<span class="html-class-name">forest</span>">
    <div><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">deer</span>"/></div>
    <div><<span class="html-tag for-hover">bird</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">pink</span>"/></div>
    <div><<span class="html-tag for-hover">bird</span>/></div>
    <div><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">squirrel</span>"/></div>
    <div>
    <<span class="html-tag for-hover">cave</span>>
    <div class="inside"><<span class="html-tag for-hover">bird</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">pink</span>"/></div>
    <&#47<span class="html-tag for-hover">cave</span>>
    </div>
    <div><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">snail</span>"/></div>
    <&#47<span class="html-tag">div</span>>
    `,
    rightAnwser: ['animal ~ bird', 'animal~bird'],
    description: {
      title: 'General Sibling Selector',
      task: 'Selects every B element that is preceded by a A element',
      tag: '<span class="tag">A ~ B</span>',
      description: `You can select all siblings of an element that follow it.
      This is like the Adjacent Selector <span class="tag">A + B</span> except it gets all of the following elements instead of one.`,
      examples: [
        `A ~ B selects all B that follow a A`,
        'div ~ p selects all <p> elements that are next siblings of <div> elements',
      ],
    },
  },

  {
    level: 17,
    levelName: 'A > B',
    title: 'Selects all animals where the parent is the stump',
    codeFragment: `
    <div class="forest">
    <cave>
    <animal class="rabbit"></animal>
    </cave>
    <animal class="rabbit"></animal>
    <stump>
    <animal class="dance rabbit"></animal>
    </stump>
    <stump>
    <animal class="dance rabbit"></animal>
    </stump>
    </div>`,
    htmlFragment: `
    <<span class="html-tag">div</span> <span class="html-class">class</span>="<span class="html-class-name">forest</span>">
    <div>
    <<span class="html-tag for-hover">cave</span>>
    <div class="inside"><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">rabbit</span>"/></div>
    <&#47<span class="html-tag for-hover">cave</span>>
    </div>
    <div><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">rabbit</span>"/></div>
    <div>
    <<span class="html-tag for-hover">stump</span>>
    <div class="inside"><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">rabbit</span>"/></div>
    <&#47<span class="html-tag for-hover">stump</span>>
    </div>
    <div>
    <<span class="html-tag for-hover">stump</span>>
    <div class="inside"><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">rabbit</span>"/></div>
    <&#47<span class="html-tag for-hover">stump</span>>
    </div>
    <&#47<span class="html-tag">div</span>>
    `,
    rightAnwser: ['stump > .rabbit'],
    description: {
      title: 'Child Selector',
      task: 'Select direct children of an element',
      tag: '<span class="tag">A > B</span>',
      description: `You can select elements that are direct children of other elements.
      A child element is any element that is nested directly in another element.`,
      examples: [
        'A > B selects all B that are a direct children A',
        'div > p selects all <p> elements that are children of a <div> element',
      ],
    },
  },

  {
    level: 18,
    levelName: ':empty',
    title: 'Select the Empty Caves',
    codeFragment: `
    <div class="forest">
    <cave>
    <animal class='rabbit'></animal>
    </cave>
    <cave class="dance"></cave>
    <cave class="dance"></cave>
    <cave>
    <animal class='squirrel'></animal>
    </cave>
    </div>`,
    htmlFragment: `
    <<span class="html-tag">div</span> <span class="html-class">class</span>="<span class="html-class-name">forest</span>">
    <div>
    <<span class="html-tag for-hover">cave</span>>
    <div class="inside"><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">rabbit</span>"/></div>
    <&#47<span class="html-tag for-hover">cave</span>>
    </div>
    <div>
    <<span class="html-tag for-hover">cave</span>/>
    </div>
    <div>
    <<span class="html-tag for-hover">cave</span>/>
    </div>
    <div>
    <<span class="html-tag for-hover">cave</span>>
    <div class="inside"><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">squirrel</span>"/></div>
    <&#47<span class="html-tag for-hover">cave</span>>
    </div>
    <&#47<span class="html-tag">div</span>>
    `,
    rightAnwser: ['cave:empty'],
    description: {
      title: 'Empty Selector',
      task: 'The :empty selector matches every element that has no children (including text nodes)',
      tag: '<span class="tag">:empty</span>',
      description: `Selects elements that don't have any other elements inside of them.`,
      examples: [
        `div:empty selects all empty <div> elements.`,
        'section:empty selects all <section> without any content',
      ],
    },
  },

  {
    level: 19,
    levelName: ':not(A)',
    title: 'Select Animanl That Are Not Brown',
    codeFragment: `
    <div class="forest">
    <animal class='squirrel brown'></animal>
    <animal class='deer brown'></animal>
    <animal class="dance snail"></animal>
    <animal class="dance fox"></animal>
    <animal class="with-nut squirrel brown"></animal>
    </div>`,
    htmlFragment: `
    <<span class="html-tag">div</span> <span class="html-class">class</span>="<span class="html-class-name">forest</span>">
    <div><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">squirrel brown</span>"/></div>
    <div><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">fox brown</span>"/></div>
    <div><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">snail</span>"/></div>
    <div><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">fox</span>"/></div>
    <div><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">squirrel brown</span>"/></div>
    <&#47<span class="html-tag">div</span>>
    `,
    rightAnwser: ['animal:not(.brown)'],
    description: {
      title: 'Negation Pseudo-class',
      task: 'Selects every element that is not a A element',
      tag: '<span class="tag">:not(A)</span>',
      description: 'You can use this to select all elements that do not match selector <span class="tag">A</span>.',
      examples: [
        `:not(#fancy) selects all elements that do not have id="fancy"`,
        `:not(.big, .medium) selects all elements that do not have class="big" or class="medium".`,
      ],
    },
  },

  {
    level: 20,
    levelName: '[target]',
    title: 'Select animals with name',
    codeFragment: `
    <div class="forest">
    <animal class='snail'></animal>
    <animal class="dance rabbit" name="Bunny"></animal>
    <animal class="dance squirrel" name="Nansy"></animal>
    <animal class='fox'></animal>
    </div>`,
    htmlFragment: `
    <<span class="html-tag">div</span> <span class="html-class">class</span>="<span class="html-class-name">forest</span>">
    <div><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">snail</span>"/></div>
    <div><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">rabbit</span>" <span class="html-attr for-hover">name</span>="<span class="html-class-name for-hover">Bunny</span>"/></div>
    <div><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">squirrel</span>" <span class="html-attr for-hover">name</span>="<span class="html-class-name for-hover">Nancy</span>"/></div>
    <div><<span class="html-tag for-hover">animal</span> <span class="html-class for-hover">class</span>="<span class="html-class-name for-hover">fox</span>"/></div>
    <&#47<span class="html-tag">div</span>>
    `,
    rightAnwser: ['[name]'],
    description: {
      title: 'Attribute Selector',
      task: 'Selects all elements with a target attribute',
      tag: '<span class="tag">[target]</span>',
      description: `Attributes appear inside the opening tag of an element, like this:
      <span class="tag">span attribute="value"</span>. An attribute does not always have a value, it can be blank!`,
      examples: [
        `a[href] selects all <a> elements that have a href="anything" attribute.`,
        `[type] selects all elements that have a type="anything" attribute.`,
      ],
    },
  },
];
export default data;
