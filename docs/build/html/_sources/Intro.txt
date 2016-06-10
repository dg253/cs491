Intro
=====

Functions
^^^^^^^^^

**Description**:" Get all users",
**Url**:"/users",
**Method**: "GET",
**Params**:{ 
	Page: {Type: [integer],
	Description: "# Results per page",
	Required: "true"},
	Limit: {Type: [integer],
	Description: "Amount of results (max:50)",
	Required: "true"}
	}
**Response**: {
	Code: “200",
	Content: {
		ID:"126",
			First_name:"John",
			Last_name: “Doe",
			Email:Johndoe@yahoo.com }
}

**Description**: "Get a specific user", 
**Url**: "/Users/id", //id of specific user
**Method**:"GET",
**Response**: {
Code: "200",
Content: {
	Id:“126",
	First_name:"John",
	Last_name: "Doe",
	Email:"Johndoe@yahoo.com"}
OR
Code: "404",
Content: {error: "User does not exist"}
}


**Description**: "Add a new user", 
**Url**: "/Users/id",
**Method**:"POST",
**Params**: {
  First_name: [string], reuired,
  Last_name: [String], required,
  Email: [String], required,
  Password: [Alphanumeric],required
  Confirm_password [Alphanumeric], required	 
},
(example) request: {
  First_name: "John",
  Last_name: "doe",
  Email:"Johndoe@yahoo.com",
  Password:"JD12345",
  Confirm_password:"JD12345" 
},
**Response**: {
Code:"201",
Content: {
	First_name:"John",
	Last_name: "Doe",
	Email:"Johndoe@yahoo.com",
	Note: "New user has been added"
	}
//Error codes probably necessary
}


**Description**: "Modify an existing user", 
**Url**: "/Users/id",
**Method**:"PUT",
**Params**: {
  First_name: [string], reuired,
  Last_name: [String], required,
  Email: [String], required,	
},
request: {
  ID: "126"	
  First_name: "John",
  Last_name: "doe",
  Email:"Johndoe@yahoo.com"    
},

**Response**: {
Code: “200",
Content: {
		 First_name:"John",
		 Last_name: "Doe",
		 Email:"Johndoe@yahoo.com"
		 Note: "user has been updated"},
		 
}

OR

Code: “401",
Content: {error:"Duplicate information found"}
}


**Description**: "Delete user from database", 
**Url**: "/Users/id",
**Method**:"DELETE",
**Params**: {
	Email: [string], required, 
	Password: [Alphanumeric], required
  },
**Response**: {
Code: “200",
Content: {Id:"126"}
}


**Description**: "Authenticate user", 
**Url**: "/Users/id",
**Method**:"POST",
**Params**: {
	Email: [string], required, 
	Password: [Alphanumeric], required 
  },
**Response**: {
Code: “200",
Content: {note:"Email was sent"}

OR

Code: “401",
Content: {error:"invalid email or password "}
}