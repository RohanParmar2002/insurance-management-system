import authRoutes from "./routes/auth.js";
// import userRoutes from "./routes/users.js";
// import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import express from "express";
import nodemailer from "nodemailer";
import { db } from "./db.js";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(express.static("./front-end"));
app.use(express.urlencoded({ extended: false }));

// app.get('/front-end/index.html',(req,res)=>{

// })
app.get("/auth/admin/admin_login_page.html", (req, res) => {
    res.send("front-end/admin_login_page");
});
app.get("/auth/user_login_page.html", (req, res) => {
    res.send("front-end/user_login_page");
});

app.get("/auth/admin/index.html", (req, res) => {
    res.send("front-end/admin_login_page");
});











app.use("/auth", authRoutes);
app.post("/admin/addpolicy", (req, res) => {
    const query = "insert into policies() values (?)";

    console.log(req.body);
    console.log(req.body.amount);
    const values = [
        parseInt(req.body.policy_id),
        req.body.policy_details,
        parseInt(req.body.amount),
        req.body.type,
        parseInt(req.body.duration),
    ];

    console.log(values);
    db.query(query, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        else return res.status(200).json("policy has been inserted into data base");
    });
});

app.post("/admin/removepolicy", (req, res) => {
    const query = "delete from policies where policy_id=(?)";

    const values = [parseInt(req.body.policy_id)];

    // console.log(values);
    db.query(query, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        else return res.status(200).json("policicy has been removed from database");
    });
});
 ///for viewing health
app.post("/viewhealth", (req, res) => {
    const query = "select * from policies where type=(?)";
    const values = [req.body.type];

    db.query(query, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        // console.log(data);
        res.status(200).json(data);
    });
});


///for viewing vehicle

app.post("/viewvehicle", (req, res) => {
    const query = "select * from policies where type=(?)";
    const values = [req.body.type];

    db.query(query, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        // console.log(data);
        res.status(200).json(data);
    });
});


///for viewing home

app.post("/viewhome", (req, res) => {
    const query = "select * from policies where type=(?)";
    const values = [req.body.type];

    db.query(query, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        // console.log(data);
        res.status(200).json(data);
    });
});


///for viewing customers

app.post("/viewcustomers", (req, res) => {
    const query = "select username,email from customers_login";
    const values = [req.body.type];

    db.query(query,(err, data) => {
        if (err) return res.status(500).json(err);
        // console.log(data);
        res.status(200).json(data);
    });
});
////for review-policy

app.post('/admin/reviewpolicy',(req,res)=>{

    const query = "update health set status=(?) where username=(?) and policy_id=(?)";
    const values=[req.body.status,req.body.username,req.body.policy_id]

    db.query(query,values,(err, data) => {
        if (err) return res.status(500).json(err);
        // console.log(data);
        res.status(200).json("status changed successfully");
    });

})






////////////////////////////USER PART

 

//health insert
app.post("/inserthealth", (req, res) => {
    const query = "insert into health(username,policy_id,name,gender,date_of_birth,marital_status,phone,address) values (?)";
      
    let email
    const username=[req.body.username]
    const query2="select email from customers_login where username=(?)";
    db.query(query2,[username],(err,data)=>{
        if (err) return res.status(500).json(err);
        else
        {    console.log(data);
             email=data[0].email;
        }
    })

    const values = [
        req.body.username,
        parseInt(req.body.policy_id),
        req.body.name,
        req.body.gender,
        req.body.date_of_birth,
        req.body.marital_status,
        parseInt(req.body.phone),
        req.body.address
    ];
let from="impostercrewfreedom@gmail.com";
let nam="sandstormarriving101@gmail.com"
    db.query(query, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        else {
            var transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: "impostercrewfreedom@gmail.com",
                  pass: "avuwpktrouxkalqw",
                },
              });
              var mailoptions = {
                from: from,
                to: email,
                subject: "Regarding your insurance policy request",
                text: `Thank you ${username} for applying to buy our health policy your request if under process and will be verified soon`,
              };
              transporter.sendMail(mailoptions, (err, result) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Email send: " + result.response);
                }
              })
            return res.status(200).json("your policy is under verification stage");
        }
    });
});


//vehicle insert

app.post("/insertvehicle", (req, res) => {
    const query = "insert into vehicle(username,policy_id,vehicle_id,owner,model,phone) values (?)";
   
    let email
    const username=[req.body.username]
    const query2="select email from customers_login where username=(?)";
    db.query(query2,[username],(err,data)=>{
        if (err) return res.status(500).json(err);
        else
        {    console.log(data);
             email=data[0].email;
        }
    })



    const values = [
        req.body.username,
        parseInt(req.body.policy_id),
        req.body.vehicle_id,
        req.body.owner,
        req.body.model,
        parseInt(req.body.phone)
    ];
    let from="impostercrewfreedom@gmail.com";
let nam="sandstormarriving101@gmail.com"
    db.query(query, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        else {
            var transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: "impostercrewfreedom@gmail.com",
                  pass: "avuwpktrouxkalqw",
                },
              });
              var mailoptions = {
                from: from,
                to: email,
                subject: "Regarding your insurance policy request",
                text: `Thank you ${username} for applying to buy our vehicle policy your request if under process and will be verified soon`,
              };
              transporter.sendMail(mailoptions, (err, result) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Email send: " + result.response);
                }
              })
            return res.status(200).json("your policy is under verification stage");
        }
    });
});
   
    






//home policy 

app.post("/inserthome", (req, res) => {
    const query = "insert into home(username,policy_id,owner,house_no,city,pincode,phone) values (?)";
  
    let email
    const username=[req.body.username]
    const query2="select email from customers_login where username=(?)";
    db.query(query2,[username],(err,data)=>{
        if (err) return res.status(500).json(err);
        else
        {    console.log(data);
             email=data[0].email;
        }
    })




    const values = [
        req.body.username,
        parseInt(req.body.policy_id),
        req.body.owner,
        req.body.house_no,
        req.body.city,
        parseInt(req.body.pincode),
        parseInt(req.body.phone),
    ];

    let from="impostercrewfreedom@gmail.com";
    let nam="sandstormarriving101@gmail.com"
        db.query(query, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            else {
                var transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                      user: "impostercrewfreedom@gmail.com",
                      pass: "avuwpktrouxkalqw",
                    },
                  });
                  var mailoptions = {
                    from: from,
                    to: email,
                    subject: "Regarding your insurance policy request",
                    text: `Thank you ${username} for applying to buy our Home policy your request if under process and will be verified soon`,
                  };
                  transporter.sendMail(mailoptions, (err, result) => {
                    if (err) {
                      console.log(err);
                    } else {
                      console.log("Email send: " + result.response);
                    }
                  })
                return res.status(200).json("your policy is under verification stage");
            }
        });

   
});




//view health

app.post("/userhealth", (req, res) => {
    const query = "select * from health where username=(?)";
    const values = [req.body.username];

    db.query(query, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        // console.log(data);
        res.status(200).json(data);
    });
});


//view vehicle

app.post("/uservehicle", (req, res) => {
    const query = "select * from vehicle where username=(?)";
    const values = [req.body.username];

    db.query(query, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        // console.log(data);
        res.status(200).json(data);
    });
});

//view home

app.post("/userhome", (req, res) => {
    const query = "select * from home where username=(?)";
    const values = [req.body.username];

    db.query(query, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        // console.log(data);
        res.status(200).json(data);
    });
});

///////view all policies


app.post("/showall", (req, res) => {
    const query = "select * from policies";
    // const values = [req.body.username];

    db.query(query,  (err, data) => {
        if (err) return res.status(500).json(err);
        // console.log(data);
        res.status(200).json(data);
    });
});
























































app.listen(8080, () => {
    console.log("listining on 8080");
});
