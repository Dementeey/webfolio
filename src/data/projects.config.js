export default [
  {
    title: 'Custom Lodash Array',
    items: [
      {
        label: 'map',
        hash: 'map',
        info: {
          title: '.map(collection, [iteratee=_.identity])',
          description:
            'Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments: (value, index|key, collection).',
          arguments: `
            collection (Array|Object): The collection to iterate over.
            [iteratee=_.identity] (Function): The function invoked per iteration.
          `,
          returns: '(Array): Returns the new mapped array'
        },
        example: `map([1, 2, 3])`,
        code: `function map(value) {
  console.log('function map =>', value);
}`
      }
    ]
  }
]
