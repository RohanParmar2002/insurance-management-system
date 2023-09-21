let pBtn = document.getElementById('p-btn')
pBtn.addEventListener("click", function () {
    if (document.getElementById("addPolicy-form").style.display == "none") {
        document.getElementById("addPolicy-form").style.display = "inline";
    }
    else
    {
        document.getElementById("addPolicy-form").style.display="none"
    }
})

let rBtn = document.getElementById('v1')
rBtn.addEventListener("click", function () {
    if (document.getElementById("removePolicy-form").style.display == "none") {
        document.getElementById("removePolicy-form").style.display = "inline";
    }
    else
    {
        document.getElementById("removePolicy-form").style.display="none"
    }
})

let v2Btn=document.getElementById('v2')
v2Btn.addEventListener("click", function () {
    if (document.getElementById("viewpolicy").style.display == "none") {
        document.getElementById("viewpolicy").style.display = "inline";
    }
    else
    {
        document.getElementById("viewpolicy").style.display="none"
    }
})


















////my policies for user
//health
let btnu1=document.getElementById('u1');

btnu1.addEventListener("click",function(){
    axios
    .post("http://localhost:8080/userhealth", {
      type: 'Health-Policy',
      username:'sudheer'
    })
    .then(res => showOutputbtnu1(res))
    .catch(err => console.error(err));
})

function showOutputbtnu1(res)
{
    console.log(res.data)
if (res.data>0) {
    
}


// e.innerHTML = 'JavaScript DOM';

let i=0;
res.data.forEach(function(data){
          i=i+1
      if (i==1) {
        let e = document.createElement('div');
        e.innerHTML=` 
<center>  <table class="table" border="1px">
  
  <thead>
    <tr>

      
      
      <th scope="col">username</th>
      <th scope="col">policy_id </th>
      <th scope="col">status </th>
     
      
      
    </tr>
  </thead>
  <tbody>
        <tr>
          
          <td><p>${ data.username} </p> <br /> </td>
          <td><p>${ data.policy_id}  </p> <br /> </td>
          <td><p>${ data.status}  </p> <br /> </td>
        
          
        </tr>
    <tbody>
    </table></center>
      
  
     
   `;   d1.appendChild(e);
      }  
  else{
    
let e = document.createElement('div');


    // d1.appendChild(e)
    e.innerHTML = `
  <center>  <table class="table" border="1px">
    <tbody>
        <tr>
          
        <td><p>${ data.username} </p> <br /> </td>
        <td><p>${ data.policy_id}  </p> <br /> </td>
        <td><p>${ data.status}  </p> <br /> </td>
          
        </tr>
    <tbody>
    </table></center>
    `;
    d1.appendChild(e);
  }
  
   i=i+1;
  

});
}

///////vehicle
let btnu2=document.getElementById('u2');

btnu2.addEventListener("click",function(){

    axios
    .post("http://localhost:8080/uservehicle", {
      type: 'Vehicle-Policy',
      username:'sudheer'
    })
    .then(res => showOutputbtnu2(res))
    .catch(err => console.error(err));
})

function showOutputbtnu2(res)
{
    console.log(res.data)
if (res.data>0) {
    
}


// e.innerHTML = 'JavaScript DOM';

let i=0;
res.data.forEach(function(data){
          i=i+1
      if (i==1) {
        let e = document.createElement('div');
        e.innerHTML=` 
<center>  <table class="table" border="1px">
  
  <thead>
    <tr>

      
      
      <th scope="col">username</th>
      <th scope="col">policy_id </th>
      <th scope="col">status </th>
     
      
      
    </tr>
  </thead>
  <tbody>
        <tr>
          
          <td><p>${ data.username} </p> <br /> </td>
          <td><p>${ data.policy_id}  </p> <br /> </td>
          <td><p>${ data.status}  </p> <br /> </td>
        
          
        </tr>
    <tbody>
    </table></center>
      
  
     
   `;   d2.appendChild(e);
      }  
  else{
    
let e = document.createElement('div');


    // d1.appendChild(e)
    e.innerHTML = `
  <center>  <table class="table" border="1px">
    <tbody>
        <tr>
          
        <td><p>${ data.username} </p> <br /> </td>
        <td><p>${ data.policy_id}  </p> <br /> </td>
        <td><p>${ data.status}  </p> <br /> </td>
          
        </tr>
    <tbody>
    </table></center>
    `;
    d2.appendChild(e);
  }
  
   i=i+1;
  

});
}




//home
let btnu3=document.getElementById('u3');

btnu3.addEventListener("click",function(){

    axios
    .post("http://localhost:8080/userhome", {
      type: 'Home-Policy',
      username:'sudheer'
    })
    .then(res => showOutputbtnu3(res))
    .catch(err => console.error(err));
})

function showOutputbtnu3(res)
{
    console.log(res.data)
if (res.data>0) {
    
}


// e.innerHTML = 'JavaScript DOM';

let i=0;
res.data.forEach(function(data){
          i=i+1
      if (i==1) {
        let e = document.createElement('div');
        e.innerHTML=` 
<center>  <table class="table" border="1px">
  
  <thead>
    <tr>

      
      
      <th scope="col">username</th>
      <th scope="col">policy_id </th>
      <th scope="col">status </th>
     
      
      
    </tr>
  </thead>
  <tbody>
        <tr>
          
          <td><p>${ data.username} </p> <br /> </td>
          <td><p>${ data.policy_id}  </p> <br /> </td>
          <td><p>${ data.status}  </p> <br /> </td>
        
          
        </tr>
    <tbody>
    </table></center>
      
  
     
   `;   d3.appendChild(e);
      }  
  else{
    
let e = document.createElement('div');


    // d1.appendChild(e)
    e.innerHTML = `
  <center>  <table class="table" border="1px">
    <tbody>
        <tr>
          
        <td><p>${ data.username} </p> <br /> </td>
        <td><p>${ data.policy_id}  </p> <br /> </td>
        <td><p>${ data.status}  </p> <br /> </td>
          
        </tr>
    <tbody>
    </table></center>
    `;
    d3.appendChild(e);
  }
  
   i=i+1;
  

});
}





















