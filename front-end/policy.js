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

let rBtn = document.getElementById('r-btn')
rBtn.addEventListener("click", function () {
    if (document.getElementById("removePolicy-form").style.display == "none") {
        document.getElementById("removePolicy-form").style.display = "inline";
    }
    else
    {
        document.getElementById("removePolicy-form").style.display="none"
    }
})

let revBtn = document.getElementById('revbtn')
revBtn.addEventListener("click", function () {
    if (document.getElementById("reviewPolicy-form").style.display == "none") {
        document.getElementById("reviewPolicy-form").style.display = "inline";
    }
    else
    {
        document.getElementById("reviewPolicy-form").style.display="none"
    }
})


//for viewing health policies

let btnv1=document.getElementById('v1');

let count1=0;
btnv1.addEventListener("click",function(){
  count1++;
  if(count1==1)
   {
    axios
    .post("http://localhost:8080/viewhealth", {
      type: 'Health-Policy'
    })
    .then(res => showOutputbtnv1(res))
    .catch(err => console.error(err));
  }
})

function showOutputbtnv1(res)
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

      
      
      <th scope="col">policy_id </th>
      <th scope="col">policy_details </th>
      <th scope="col">amount</th>
      <th scope="col">type </th>
      <th scope="col">duration </th>
      
      
    </tr>
  </thead>
  <tbody>
        <tr>
          
          <td><p>${ data.policy_id} </p> <br /> </td>
          <td><p>${ data.policy_details}  </p> <br /> </td>
          <td><p>${ data.amount} </p> <br /> </td>
          <td><p>${ data.type} </p> <br /> </td>
          <td><p>${ data.duration} </p> <br /> </td>
          
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
          
          <td><p>${ data.policy_id} </p> <br /> </td>
          <td><p>${ data.policy_details}  </p> <br /> </td>
          <td><p>${ data.amount} </p> <br /> </td>
          <td><p>${ data.type} </p> <br /> </td>
          <td><p>${ data.duration} </p> <br /> </td>
          
        </tr>
    <tbody>
    </table></center>
    `;
    d1.appendChild(e);
  }
  
   i=i+1;
  

});

}
let count2=0



/////for viewing vehicle policies


let btnv2=document.getElementById('v2');

btnv2.addEventListener("click",function(){
  count2++;
 
  if(count2==1)
  {

  
    axios
    .post("http://localhost:8080/viewvehicle", {
      type: 'Vehicle-Policy'
    })
    .then(res => showOutputbtnv2(res))
    .catch(err => console.error(err));
  }
})

function showOutputbtnv2(res)
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

      
      
      <th scope="col">policy_id </th>
      <th scope="col">policy_details </th>
      <th scope="col">amount</th>
      <th scope="col">type </th>
      <th scope="col">duration </th>
      
      
    </tr>
  </thead>
  <tbody>
        <tr>
          
          <td><p>${ data.policy_id} </p> <br /> </td>
          <td><p>${ data.policy_details}  </p> <br /> </td>
          <td><p>${ data.amount} </p> <br /> </td>
          <td><p>${ data.type} </p> <br /> </td>
          <td><p>${ data.duration} </p> <br /> </td>
          
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
          
          <td><p>${ data.policy_id} </p> <br /> </td>
          <td><p>${ data.policy_details}  </p> <br /> </td>
          <td><p>${ data.amount} </p> <br /> </td>
          <td><p>${ data.type} </p> <br /> </td>
          <td><p>${ data.duration} </p> <br /> </td>
          
        </tr>
    <tbody>
    </table></center>
    `;
    d2.appendChild(e);
  }
  
   i=i+1;
  

});

}
let count3=0

///for viewing home policies

let btnv3=document.getElementById('v3');

btnv3.addEventListener("click",function(){

 count3++;
 if(count3==1)
 {

 
  
    axios
    .post("http://localhost:8080/viewhome", {
      type: 'Home-Policy'
    })
    .then(res => showOutputbtnv3(res))
    .catch(err => console.error(err));
  }
})

function showOutputbtnv3(res)
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

      
      
      <th scope="col">policy_id </th>
      <th scope="col">policy_details </th>
      <th scope="col">amount</th>
      <th scope="col">type </th>
      <th scope="col">duration </th>
      
      
    </tr>
  </thead>
  <tbody>
        <tr>
          
          <td><p>${ data.policy_id} </p> <br /> </td>
          <td><p>${ data.policy_details}  </p> <br /> </td>
          <td><p>${ data.amount} </p> <br /> </td>
          <td><p>${ data.type} </p> <br /> </td>
          <td><p>${ data.duration} </p> <br /> </td>
          
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
          
          <td><p>${ data.policy_id} </p> <br /> </td>
          <td><p>${ data.policy_details}  </p> <br /> </td>
          <td><p>${ data.amount} </p> <br /> </td>
          <td><p>${ data.type} </p> <br /> </td>
          <td><p>${ data.duration} </p> <br /> </td>
          
        </tr>
    <tbody>
    </table></center>
    `;
    d3.appendChild(e);
  }
  
   i=i+1;
  

});

}

//for viewing custumers
let count4=0
let btnv4=document.getElementById('v4');

btnv4.addEventListener("click",function(){

count4++;
if(count4==1)
{


  
    axios
    .post("http://localhost:8080/viewcustomers", {
      type: 'Home-Policy'
    })
    .then(res => showOutputbtnv4(res))
    .catch(err => console.error(err));
  }
})

function showOutputbtnv4(res)
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

      
      
      <th scope="col">Username</th>
      <th scope="col">Email </th>
      
      
    </tr>
  </thead>
  <tbody>
        <tr>
          
          <td><p>${ data.username} </p> <br /> </td>
          <td><p>${ data.email}  </p> <br /> </td>
          
          
        </tr>
    <tbody>
    </table></center>
      
  
     
   `;   d4.appendChild(e);
      }  
  else{
    
let e = document.createElement('div');


    // d1.appendChild(e)
    e.innerHTML = `
  <center>  <table class="table" border="1px">
    <tbody>
        <tr>
          
          <td><p>${ data.username} </p> <br /> </td>
          <td><p>${ data.email}  </p> <br /> </td>
    
          
        </tr>
    <tbody>
    </table></center>
    `;
    d4.appendChild(e);
  }
  
   i=i+1;
  

});

}


//log out for user
let btnlogout=document.getElementById('logout');

btnlogout.addEventListener("click",function(){

  axios
  .get('http://localhost:8080/viewcustomers', {
    timeout: 5000
  })
  .then(res => showOutput(res))
  .catch(err => console.error(err));
}
)


































