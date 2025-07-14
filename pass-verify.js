const bcrypt = require('bcrypt')

async function verifyPassword(){


  const myPassword = 'admin123'
  const hash= '$2b$10$JOHTzST4GEnVBigdpVFAruRIaUjVmNuuOty/q5CDen.3OGnI602kC'

  const isMatch = await bcrypt.compare(myPassword,hash)
  console.log(isMatch)
}

verifyPassword()
