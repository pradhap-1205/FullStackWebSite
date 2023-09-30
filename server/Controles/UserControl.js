import UserModel from "../Models/UserModel.js";
import bcrypr from 'bcrypt'


export const registerUser = async (req,res) =>{
  const {email,firstName,lastName,password} = req.body;
  const  salt = await bcrypr.genSalt(10)
  const hassPass = await bcrypr.hash(password, salt)

  const newUser = new  UserModel({email,firstName,lastName, password : hassPass});
  try {
      await newUser.save()
      res.status(200).json(newUser)
  } catch (err) {
      res.status(500).json(err)
  }
}

//Login 
export const loginUser = async (req,res) =>{
const {email,password} = req.body;
try {
  const userEmail = await UserModel.findOne({email:email})
  if(userEmail){
      const vality = await bcrypr.compare(password, userEmail.password)

      vality ? res.status(200).json(userEmail) : res.status(400).json("wrong password")
  }else
  {
      res.status(500).json("email doesn't Work  ")
  }
  
} catch (err) {
  res.status(502).json(err)
}
}


//Get User By:id
export const GetUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).json("User not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//Get User All
export const GetUserAll = async (req, res) => {
  try {
    const user = await UserModel.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get User Delete
export const UserDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findByIdAndDelete(id);
    if (user) {
      res.status(201).send({ message: "delete successfully" });
    } else {
      res.status(402).send({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//User Update
export const UserUpdate = async (req, res) => {
  try {
    if (
      !req.body.email ||
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.password
    ) {
      return res.status(403).send({
        message:
          "All the fields are required: email, firstName, lastName, password",
      });
    }

    const { id } = req.body;
    const result = await UserModel.findByIdAndUpdate(id, req.body);
    if (result) {
      return res.status(201).send({ message: "Update successful" });
    } else {
      return res.status(404).send({ message: "User not found" });
    }
  } catch (err) {
    console.error("Error updating user:", err);
    return res.status(500).json(err);
  }
};
