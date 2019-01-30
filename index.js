
document.addEventListener('DOMContentLoaded', function(){
  let bodyMoves = [
    {
      chest: ['Bench Press', 'Incline Bench Press', 'Decline Bench Press', 'Butterfly'],
      shoulders: ['Front/Side Raises','Shoulder Press', 'Shrugs', 'Upright Row'],
      triceps: ['Skull Crusher', 'Overhead Extension'],
      back: ['Reverse Fly', 'Lat Raises', 'Pull Ups'],
      biceps: ['Curl Burns', 'Hammer Curl', 'Standing Iso Curl']
    }
  ];
  let users = [
    {
      id: 1,
      userName: 'josh',
      password: 'abc'
    }
  ];
  let currentUser = '';
  let welcomeToggle = true;
  let caseyToggle = false;
  let workoutToggle = false;
  // const signInForm = document.querySelector('#sign-in');
  // const formBlock = document.querySelector('#form-block');
  // const formUser = document.querySelector('#username-input');
  // const formPass = document.querySelector('#password-input');
//####################################################################
  const rightBar = document.querySelector('#right-bar');
  const leftBar = document.querySelector('#left-bar');
  const welcomeTable = document.querySelector('#welcome-table');
  const mainTable = document.querySelector('#main-table');
  const caseyButton = document.querySelector('#casey-bday');
  const caseyBday = [5,24,1989];
  const workOutButton = document.querySelector('#work-out-log');
//####################################################################

//####################################################################
  caseyButton.addEventListener('click', e => {
    workoutToggle = false;
    caseyToggle = !caseyToggle
    if (caseyToggle){
      welcomeToggle = !welcomeToggle
      welcomeTable.style.display = 'none'
      mainTable.style.display = 'block'
      const today = new Date();
      const daysUntil = new Date(2019,04,24) - today;
      Math.ceil(daysUntil/(24*60*60*1000))
      if (today.getDate() == caseyBday[1] && today.getMonth() == caseyBday[0] - 1){
        mainTable.innerHTML = `<h3>Yes, Yes, Yes!!!!!!!!!! HappyBirthday!!!!</h3>`
      } else {
        const daysUntilHalf = new Date(2019,11,24) - today;
        Math.ceil(daysUntilHalf/(24*60*60*1000))
        mainTable.innerHTML = `<h3>Nope, not for ${Math.ceil(daysUntil/(24*60*60*1000))} more days!</h3>`
        mainTable.innerHTML += `<h3>Half Birthday is not for ${Math.ceil(daysUntilHalf/(24*60*60*1000))} more days!</h3>`
      }
    } else {
      welcomeToggle = !welcomeToggle
      welcomeTable.style.display = 'block'
      mainTable.style.display = 'none'
    }
  })//end of casey caseyButton
  //####################################################################

  workOutButton.addEventListener('click', e => {
    workoutToggle = !workoutToggle;
    caseyToggle = false;
    welcomeToggle = false;
    if (workoutToggle){
      welcomeTable.style.display = 'none'
      mainTable.style.display = 'block'
      mainTable.innerHTML = `
      <table class="table">
        <th>
        stuff
        </th>
      </table>
      `
    } else {
      welcomeTable.style.display = 'block'
      mainTable.style.display = 'none'
    }
  })//end of workout button


  // signInForm.addEventListener('submit', e=>{
  //   e.preventDefault();
  //   const foundUser = users.find((user)=>{
  //     return user.userName.toLowerCase() === formUser.value.toLowerCase()
  //   })//end find
  //   if (foundUser.password === formPass.value){
  //     currentUser = foundUser
  //     alert(`You are now singed in ${currentUser.userName}`)
  //     formBlock.style.display = 'none';
  //     leftBar.style.display = 'block';
  //     rightBar.style.display = 'block';
  //     mainTable.style.display = 'block';
  //   }
  //   signInForm.reset()
  // })//end submit event listener

})//end of dom content loaded
