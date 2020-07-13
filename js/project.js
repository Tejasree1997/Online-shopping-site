//content being generated with JSON string
const product = `[{"image":"./img/asus/asus1.jpg", "name":"Asus a30", "price":"CAD 700", "cat":"laptop"}
,{"image":"./img/asus/asus2.jpg", "name":"Asus n234", "price":"CAD 620", "cat":"laptop"},
{"image":"./img/asus/asus3.jpg","name":"Asus a1233", "price":"CAD 800", "cat":"laptop"}
,{"image":"./img/dell/dell1.jpg","name":"Dell a1233", "price":"CAD 800", "cat":"laptop"}
, {"image":"./img/dell/dell2.jpg","name":"Dell a1233", "price":"CAD 800", "cat":"laptop"}
, {"image":"./img/dell/dell3.jpg","name":"Dell a1233", "price":"CAD 800", "cat":"laptop"}
, {"image":"./img/dell/dell4.jpg","name":"Dell a1233", "price":"CAD 800", "cat":"laptop"}
, {"image":"./img/dell/dell5.jpg","name":"Dell a1233", "price":"CAD 800", "cat":"laptop"}
, {"image":"./img/hp/hp1.jpg","name":"HP a1233", "price":"CAD 800", "cat":"laptop"}
, {"image":"./img/hp/hp2.jpg","name":"HP a1233", "price":"CAD 800", "cat":"laptop"}
, {"image":"./img/hp/hp3.jpg","name":"HP a1233", "price":"CAD 800", "cat":"laptop"}
, {"image":"./img/hp/hp4.jpg","name":"HP a1233", "price":"CAD 800", "cat":"laptop"}
, {"image":"./img/hp/hp5.jpg","name":"HP a1233", "price":"CAD 800", "cat":"laptop"}
, {"image":"./img/hp/hp6.jpg","name":"HP a1233", "price":"CAD 800", "cat":"laptop"}
, {"image":"./img/adapters/adap1.jpg","name":"Adap a1233", "price":"CAD 8", "cat":"accessories"}
, {"image":"./img/adapters/adap2.jpg","name":"Adap a1233", "price":"CAD 8", "cat":"accessories"}
, {"image":"./img/adapters/adap3.jpg","name":"Adap a1233", "price":"CAD 8", "cat":"accessories"}
, {"image":"./img/adapters/adap4.jpg","name":"Adap a1233", "price":"CAD 8", "cat":"accessories"}
, {"image":"./img/adapters/adap5.jpg","name":"Adap a1233", "price":"CAD 8", "cat":"accessories"}
, {"image":"./img/adapters/adap6.jpg","name":"Adap a1233", "price":"CAD 8", "cat":"accessories"}
, {"image":"./img/adapters/adap7.jpg","name":"Adap a1233", "price":"CAD 8", "cat":"accessories"}
, {"image":"./img/hard-disks/hard1.jpg","name":"Hdd a1233", "price":"CAD 80", "cat":"accessories"}
, {"image":"./img/hard-disks/hard2.jpg","name":"Hdd a1233", "price":"CAD 80", "cat":"accessories"}
, {"image":"./img/hard-disks/hard3.jpg","name":"Hdd a1233", "price":"CAD 80", "cat":"accessories"}
, {"image":"./img/pendrives/kingston/kingston1.jpg","name":"kingston a1233", "price":"CAD 30", "cat":"accessories"}
, {"image":"./img/pendrives/kingston/kingston2.jpg","name":"kingston a1233", "price":"CAD 30", "cat":"accessories"}
, {"image":"./img/pendrives/kingston/kingston3.jpg","name":"kingston a1233", "price":"CAD 30", "cat":"accessories"}
, {"image":"./img/pendrives/kingston/kingston4.jpg","name":"kingston a1233", "price":"CAD 30", "cat":"accessories"}
, {"image":"./img/pendrives/patriot/patriot1.jpg","name":"patriot a1233", "price":"CAD 30", "cat":"accessories"}
, {"image":"./img/pendrives/patriot/patriot2.jpg","name":"patriot a1233", "price":"CAD 30", "cat":"accessories"}
, {"image":"./img/pendrives/patriot/patriot3.jpg","name":"patriot a1233", "price":"CAD 30", "cat":"accessories"}
, {"image":"./img/pendrives/samsung/samsung1.jpg","name":"samsung a1233", "price":"CAD 30", "cat":"accessories"}
, {"image":"./img/pendrives/samsung/samsung2.jpg","name":"samsung a1233", "price":"CAD 30", "cat":"accessories"}
, {"image":"./img/pendrives/samsung/samsung3.jpg","name":"samsung a1233", "price":"CAD 30", "cat":"accessories"}
, {"image":"./img/pendrives/sanddisk/sanddisk1.jpg","name":"sanddisk a1233", "price":"CAD 30", "cat":"accessories"}
, {"image":"./img/pendrives/sanddisk/sanddisk2.jpg","name":"sanddisk a1233", "price":"CAD 30", "cat":"accessories"}
, {"image":"./img/pendrives/sanddisk/sanddisk3.jpg","name":"sanddisk a1233", "price":"CAD 30", "cat":"accessories"}
, {"image":"./img/pendrives/sanddisk/sanddisk4.jpg","name":"sanddisk a1233", "price":"CAD 30", "cat":"accessories"}
, {"image":"./img/pendrives/sanddisk/sanddisk5.jpg","name":"sanddisk a1233", "price":"CAD 30", "cat":"accessories"}
, {"image":"./img/pendrives/sanddisk/sanddisk6.jpg","name":"sanddisk a1233", "price":"CAD 30", "cat":"accessories"}
, {"image":"./img/pendrives/sony/sony1.jpg","name":"sony a1233", "price":"CAD 30", "cat":"accessories"}
, {"image":"./img/pendrives/sony/sony2.jpg","name":"sony a1233", "price":"CAD 30", "cat":"accessories"}
, {"image":"./img/pendrives/sony/sony3.jpg","name":"sony a1233", "price":"CAD 30", "cat":"accessories"}
, {"image":"./img/screenguards/screen1.jpg","name":"skin a1233", "price":"CAD 30", "cat":"accessories"}
, {"image":"./img/screenguards/screen2.jpg","name":"skin a1233", "price":"CAD 30", "cat":"accessories"}
, {"image":"./img/screenguards/screen3.jpg","name":"skin a1233", "price":"CAD 30", "cat":"accessories"}
, {"image":"./img/screenguards/screen4.jpg","name":"skin a1233", "price":"CAD 30", "cat":"accessories"}
, {"image":"./img/screenguards/screen5.jpg","name":"skin a1233", "price":"CAD 30", "cat":"accessories"}

]`;

var user= new Object(
  [
      {
          username:"user1",
          password:"bunny"
      },
      {
          username:"user2",
          password:"tejasree"
      },
     
  ]
)


//selecting the targeting element 
let main = document.querySelector('main')

//parsing the JSON data
let products = JSON.parse(product);

//Generating HTML with the provided JSON data
products.forEach(product => {
  main.innerHTML += `<div class="product">
    <img src='${product.image}' alt='${product.name}'>
    <h1>${product.name}</h1>
    <span>${product.cat}</span>
    <h4>${product.price}</h4>
    <button onclick='addToCart()'>ADD TO CART</button>
    </div>`
});


//search functionality
function search(input) {

  let userInput = input.value.toUpperCase();

  //products class being put into an another variable products because products variable will hold array of elements of dom
  let products = document.querySelectorAll('.product')

  products.forEach(product => {
    let name = product.querySelector('h1').innerText;
    let cat = product.querySelector('span').innerText;
    let price = product.querySelector('h4').innerText;
    if ((name + " " + cat + " " + price).toUpperCase().includes(userInput)) {
      product.style.display = 'inline-block'



    }
    else {
      product.style.display = 'none'
    }
  })
  //console.log(products);
}

//function for adding an item to cart
function addToCart() 
{
  //let main=document.querySelectorAll("main");
  //let main1=document.getElementById();
  
  console.log("cart")
  main.innerHTML =
    `<table id = "list">
        <tr>
            <th><label for = "Quantity">Quantity</label></th>
            <th><label for = "Price">Price</label></th>
            <th><label for = "Cat">Category</label></th>
        </tr>
        <tr>
            <td></td> 
        </tr>
        
    </table>`

}


//laptop filter
function filter(ele) 
{

  console.log(ele)
  let buttonName = ele.innerText.toUpperCase();
  let products = document.querySelectorAll('.product')
  products.forEach(product=>
    {
      let cat = product.querySelector('span').innerText;
      if (( cat).toUpperCase()===buttonName) 
      {
        product.style.display = 'inline-block'
      }
      else 
      {
        product.style.display = 'none'
      }
    })
}

//login form
function check() {
  
  ` <h1>Login Form</h1>

<form action="" method="post">
  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
        
    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
    </label>
  </div>

  <div class="container" style="background-color:#f1f1f1">
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>`
}

//login function

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function login(event) {
  event.preventDefault()

  let founduser = false;
  let username = event.target.querySelector('.username').value
  //   console.log(userinput);

  let password = event.target.querySelector('.password').value

  //  console.log(userpass);

  for (let i = 0; i < user.length; i++) {
      let login_user = user[i]
      //   console.log(username == user[i].email);
      //   console.log(password == user[i].password);
      if (username == user[i].username && password == user[i].password) {
          console.log('login');

          document.querySelector('.item-counter').style.display = 'block'

      }

  }
}


function openNav() {
  document.getElementById("mySidenav").style.width = "100%";

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const onclose = () => window.location.href = "project.html";



/* coding for cart */
const navopn = () => document.getElementById("myNav").style.height = "100%";


const navclose = () => document.getElementById("myNav").style.height = "0%";


