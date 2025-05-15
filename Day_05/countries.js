const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
console.log('In Countries.js file ')
console.log(countries)

if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA')
}else
{
    countries.push('Ethiopia')
}
console.log(countries)
