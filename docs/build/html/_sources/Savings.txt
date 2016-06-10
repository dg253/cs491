Savings
=======

Functions
^^^^^^^^^

**Description**: Get all savings
**Url**: /user/{savings}
**Method**: GET
**Params**:
	savings_tags - filter by tag
	savings_date - filter by date
	savings_term - filter by short/long term
**Success Response**: 
{
	*Code*: 200 (OK)
}
**Error Response**: 
{
	*Code*: 401 (Unauthorized), 404 (Not Found)
}


**Description**: Get an individual savings
**Url**: /user/savings/saving
**Method**: GET
**Params**:
	savings_id
**Success Response**: 
{
 	*Code*: 200 (OK)
}
**Error Response**: 
{
	*Code*: 400 (Bad Request), 404 (Not Found), 500 (Internal Server Error)
}

**Description**: Add a savings
**Url**: /user/savings/saving
**Method**: POST
**Params**:
	savings_id
	savings_name
	savings_amount
	savings_downpay
	savings_term
	savings_tags
	savings_**Description**
**Success Response**: 
{
 	*Code*: 201 (Created)
}
**Error Response**: 
{
	*Code*: 400 (Bad Request), 409 (Conflict), 415 (Bad Content Type), 500 (Internal Server Error)
}

**Description**: Edit a savings
**Url**: /user/savings/saving
**Method**: PUT
**Params**:
	savings_id
	savings_name
	savings_amount
	savings_downpay
	savings_term
	savings_tags
	savings_**Description**
**Success Response**: 
{
 	*Code*: 200 (OK)
}
**Error Response**: 
{
	*Code*: 400 (Bad Request), 405 (Resource Not Allowed), 409 (Conflict), 415 (Bad Content Type), 500 (Internal Server Error)
}


**Description**: Delete a savings
**Url**: /user/savings/saving
**Method**: DELETE
**Params**:
	savings_id
**Success Response**: 
{
 	*Code*: 204 (No Content)
}
**Error Response**: 
{
	*Code*: 400 (Bad Request), 404 (Not Found), 409 (Conflict), 500 (Internal Server Error)
}

