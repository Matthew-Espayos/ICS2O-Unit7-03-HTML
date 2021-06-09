// Creating variables
let age = 0
// Connect "Age?" button to "random" function
document.getElementById('mybutton').addEventListener('click', checkage)
// Get users age and convert it to an integer
function checkage () {
  age = document.getElementById('myinput').value
  age = parseInt(age)
  // Checking to see if they are 17 or older. If they are, they are able to watch an R-rated movie
  if (age >= 17) {
    document.getElementById('myanswer').innerHTML = 'You can see an R-rated movie alone'
  } else if (age >= 13) {
    document.getElementById('myanswer').innerHTML = 'You can see a PG-13 movie alone'
  } else if (age >= 5) {
    document.getElementById('myanswer').innerHTML = 'You can see a G or PG movie alone'
  } else {
    document.getElementById('myanswer').innerHTML = 'Go back to mommy youre too young for anything'
  }
}
