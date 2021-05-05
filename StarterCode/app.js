console.log('app js loaded')

d3.csv('../data/data.csv').then(data => {
    console.log(data)
})