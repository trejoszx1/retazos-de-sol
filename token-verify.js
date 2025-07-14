const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInNjb3BlIjoiY3VzdG9tZXIiLCJpYXQiOjE3MDU3MjQzMTJ9.xG74x2G7WUQgGQD9sHlWzQ5Q-I9uakbeculfYLWAk1M'

const jwt = require('jsonwebtoken')

const secret = 'mycat';

function verigyToken(token,secret){
  return jwt.verify(token,secret);
}

const payload = verigyToken(token,secret)
console.log(payload)
