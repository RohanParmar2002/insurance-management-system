
let btntarget=document.getElementById('target');
let count=0;

btntarget.addEventListener("click",function(){
   
  count++;
  if(count==1)
  {
    axios
    .post("http://localhost:8080/showall", {
      type: "test",
      username:'sudheer'
    })
    .then(res => showtarget(res))
    .catch(err => console.error(err));
  }


})

function showtarget(res){

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
    
          
          
          <th scope="col">policy_id</th>
          <th scope="col">policy_details</th>
          <th scope="col">amount</th>
          <th scope="col">type</th>
          <th scope="col">duration</th>
          
          
        </tr>
      </thead>
      <tbody>
            <tr>
              
              <td><p>${ data.policy_id} </p> <br /> </td>
              <td><p>${ data.policy_details}  </p> <br /> </td>
              <td><p>${ data.amount}  </p> <br /> </td>
              <td><p>${ data.type}  </p> <br /> </td>
              <td><p>${ data.duration}  </p> <br /> </td>
            </tr>
        <tbody>
        </table></center>
          
      
         
       `;   tar.appendChild(e);
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
            <td><p>${ data.amount}  </p> <br /> </td>
            <td><p>${ data.type}  </p> <br /> </td>
            <td><p>${ data.duration}  </p> <br /> </td>
            </tr>
        <tbody>
        </table></center>
        `;
        tar.appendChild(e);
      }
      
       i=i+1;
      
    
    });







}











