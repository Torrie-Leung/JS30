
    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
    inventors.forEach((inventor) => {
      inventor.years = inventor.passed - inventor.year
    })
    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    console.table(inventors)

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    let answer = inventors.filter(function(inventor){
      return inventor.year >= 1500 && inventor.year < 1600
    })
    console.table(answer)
    //es6ver 
    let answ = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600
    )
    console.table(answ)
    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
    let res = inventors.map(inventor => inventor.first + ' '+ inventor.last)
    console.table(res)
    //forEach-需产生array
    let result = []
    inventors.forEach(inventor => result.push(inventor.first + ' '+ inventor.last))
    console.table(result)
    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    let ans = inventors.sort((a,b) => a.year - b.year)
    console.table(ans)
    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    let total = 0
    inventors.forEach((inventor)=>{
      total += inventor.passed - inventor.year
    })
    console.log(total)

    let tot = inventors.reduce((tot,inventor)=>{
      return tot + inventor.passed - inventor.year
    },0)
    console.log(tot)
    // 5. Sort the inventors by years lived
    let ans5 = inventors.sort((a,b) => {
      return (a.passed - a.year) - (b.passed - b.year)
    })
    console.table(ans5)
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    // let aRR = [];
    // document.querySelectorAll('.mw-category-group li a').forEach((item)=>{aRR.push(item.title)});
    let aRR = ["Boulevards of Paris", "City walls of Paris", "Thiers wall", "Wall of Charles V", "Wall of Philip II Augustus", "City gates of Paris", "Haussmann's renovation of Paris", "Boulevards of the Marshals", "Boulevard Auguste-Blanqui", "Boulevard Barbès", "Boulevard Beaumarchais", "Boulevard de l'Amiral-Bruix", "Boulevard Mortier", "Boulevard Poniatowski", "Boulevard Soult", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard du Crime", "Boulevard du Général-d'Armée-Jean-Simon", "Boulevard Haussmann", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard Lefebvre", "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard Marguerite-de-Rochechouart", "Boulevard Montmartre", "Boulevard du Montparnasse", "Boulevard Raspail", "Boulevard Richard-Lenoir", "Boulevard Saint-Germain", "Boulevard Saint-Michel", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard du Temple", "Boulevard Voltaire", "Boulevard de la Zone"];

    let ars = aRR.filter(title => title.indexOf('de') !== -1)
    console.log(ars)
    // 7. sort Exercise
    // Sort the people alphabetically by last name
    let aas = people.sort((a,b) => {
      let [aFirst,aLast] = a.split(', ')
      let [bFirst,bLast] = b.split(', ')
      return aLast[0] > bLast[0] ? 1 : bLast[0] > aLast[0] ? -1:0
    })
    console.table(aas)
    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    let ree=data.reduce((obj,content)=>{
      console.log('obj',obj)
      console.log('contnet',content)
      if(!obj[content]) obj[content] = 1
      else obj[content] += 1

      return obj
    },{})

    console.table(ree)


