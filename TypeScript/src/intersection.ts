type E = {
  name: string
  age: number
}
type F = {
  name: string
  email: string
}
type G = E & F
const H: G = {
  name: 'Harkirat',
  email: 'durga@gmail.com',
  age: 20,
}
