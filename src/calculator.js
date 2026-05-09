#!/usr/bin/env node

// Node.js CLI Calculator
// Supports: addition (add), subtraction (sub), multiplication (mul), division (div)

function toNums(arr) {
  return arr.map(s => {
    const n = Number(s)
    if (Number.isNaN(n)) {
      console.error(`Invalid number: ${s}`)
      process.exit(2)
    }
    return n
  })
}

function add(nums) { return nums.reduce((a,b)=>a+b, 0) }
function sub(nums) { if (nums.length===0) return 0; return nums.slice(1).reduce((a,b)=>a-b, nums[0]) }
function mul(nums) { return nums.reduce((a,b)=>a*b, 1) }
function div(nums) {
  if (nums.length===0) return NaN
  return nums.slice(1).reduce((a,b)=>{
    if (b === 0) {
      console.error('Error: division by zero')
      process.exit(3)
    }
    return a / b
  }, nums[0])
}

const [ , , cmd, ...args ] = process.argv
if (!cmd) {
  console.log('Usage: node src/calculator.js <add|sub|mul|div> <num1> <num2> ...')
  process.exit(1)
}

const nums = toNums(args)
let result
switch (cmd) {
  case 'add':
    result = add(nums)
    break
  case 'sub':
    result = sub(nums)
    break
  case 'mul':
    result = mul(nums)
    break
  case 'div':
    result = div(nums)
    break
  default:
    console.error(`Unknown command: ${cmd}`)
    console.log('Supported commands: add, sub, mul, div')
    process.exit(2)
}

// Print result and exit
if (Number.isFinite(result)) {
  console.log(result)
  process.exit(0)
} else {
  console.error('Result is not a finite number')
  process.exit(4)
}
