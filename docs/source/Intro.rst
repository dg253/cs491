Intro
=====

Functions
^^^^^^^^^

**Description**: "Get all users",
 - **Url**: "/users"
 - **Method**: "GET"
 - **Params**: 
 
	 - Page: {Type: [integer],
	   Description: "# Results per page",
	   Required: "true"},
	 - Limit: {Type: [integer],
	   Description: "Amount of results (max:50)",
	   Required: "true"}
	
 - **Success Response**: {
 
	 - Code: “200" (OK)
	 - Content: {
		 - ID: "126",
		 - First_name: "John",
		 - Last_name: “Doe",
		 - Email:Johndoe@yahoo.com }
}
 - **Error Response**:
{
    - Code: "404",
    - Content: {error: "Users do not exist"}
}

**Description**: "Get a specific user", 
 - **Url**: "/Users/id"
 - **Method**: "GET"
 - **Success Response**: {
 
   - Code: "200" (OK)
   - Content: {
   
	 - Id:“126",
	 - First_name: "John",
	 - Last_name: "Doe",
	 - Email: "Johndoe@yahoo.com"}
	 
}
 - **Error Response**:
{

   - Code: "404",
   - Content: {error: "User does not exist"}
   
}


**Description**: "Add a new user", 
 - **Url**: "/Users/id",
 - **Method**: "POST",
 - **Params**: {
 
   - First_name: [string], reuired,
   - Last_name: [String], required,
   - Email: [String], required,
   - Password: [Alphanumeric], required
   - Confirm_password [Alphanumeric], required	 
},

 - Example request: {

   - First_name: "John",
   - Last_name: "doe",
   - Email: "Johndoe@yahoo.com",
   - Password: "JD12345",
   - Confirm_password: "JD12345" 
}
 - **Success Response**: {
   - Code: "201" (Created)
   - Content: {
	 - First_name: "John",
	 - Last_name: "Doe",
	 - Email: "Johndoe@yahoo.com",
	 - Note: "New user has been added"
	}
}
 - **Error Response**: 
{
   - *Code*: 400 (Bad Request), 409 (Conflict), 415 (Bad Content Type), 500 (Internal Server Error)
}


**Description**: "Modify an existing user", 
 - **Url**: "/Users/id",
 - **Method**: "PUT",
 - **Params**: {
   - First_name: [string], reuired,
   - Last_name: [String], required,
   - Email: [String], required,	
},
 - Example request: {

   - ID: "126"	
   - First_name: "John",
   - Last_name: "doe",
   - Email: "Johndoe@yahoo.com"  
   
},

 - **Success Response**: {
 
   - Code: “200" (OK)
   - Content: {
   
     - First_name: "John",
	 - Last_name: "Doe",
	 - Email: "Johndoe@yahoo.com"
	 - Note: "user has been updated"},
		 
}
}

 - **Error Response**:
{

   - Code: “401" (Unauthorized)
   - Content: {error: "Duplicate information found"}
   
}


**Description**: "Delete user from database", 
 - **Url**: "/Users/id",
 - **Method**: "DELETE",
 - **Params**: {
 
   - Email: [string], required 
   - Password: [Alphanumeric], required
   
  },
 - **Success Response**: {
 
   - Code: “200",
   - Content: {Id: "126"}
   
}


**Description**: "Authenticate user", 
 - **Url**: "/Users/id",
 - **Method**: "POST",
 - **Params**: {
 
	 - Email: [string], required, 
	 - Password: [Alphanumeric], required 
	 
  },
 - **Success Response**: {
 
   - Code: “200",
   - Content: {note: "Email was sent"}
   
}
 - **Error Response**:
{

   - Code: “401",
   - Content: {error: "invalid email or password "}
   
}