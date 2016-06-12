Transactions
============

Functions
^^^^^^^^^

**Description**: Get all transactions
**Url**: /user/{transactions}
**Method**: GET
**Params**:
	transactions_tags - filter by tag
	transactions_date - filter by date
	page
		description: page to show
		type: [integer]
	page_limit
		description: amount of max results
		typer: [integer]
**Success Response**: 
{
	*Code*: 200 (OK)
}
**Error Response**: 
{
	*Code*: 401 (Unauthorized), 404 (Not Found)
}

**Description**: Get an individual transaction
**Url**: /user/transactions/transaction
**Method**: GET
**Params**:
	transaction_id
**Success Response**: 
{
 	*Code*: 200 (OK)
}
**Error Response**: 
{
	*Code*: 400 (Bad Request), 404 (Not Found), 500 (Internal Server Error)
}

**Description**: Add a transaction
**Url**: /user/transactions/transaction
**Method**: POST
**Params**:
	transaction_id
	transaction_name
	transaction_date
	transaction_location
	transaction_amount
	transaction_tags
**Success Response**: 
{
 	*Code*: 201 (Created)
}
**Error Response**: 
{
	*Code*: 400 (Bad Request), 409 (Conflict), 415 (Bad Content Type), 500 (Internal Server Error)
}

**Description**: Edit a transaction
**Url**: /user/transactions/transaction
**Method**: PUT
**Params**:
	transaction_id
	transaction_name
	transaction_date
	transaction_location
	transaction_amount
	transaction_tags
**Success Response**: 
{
 	*Code*: 200 (OK)
}
**Error Response**: 
{
	*Code*: 400 (Bad Request), 405 (Resource Not Allowed), 409 (Conflict), 415 (Bad Content Type), 500 (Internal Server Error)
}

**Description**: Delete a transaction
**Url**: /user/transactions/transaction
**Method**: DELETE
**Params**:
	transaction_id
**Success Response**: 
{
 	*Code*: 204 (No Content)
}
**Error Response**: 
{
	*Code*: 400 (Bad Request), 404 (Not Found), 409 (Conflict), 500 (Internal Server Error)
}

**Description**: Search a transaction
**Url**: /user/transactions/transaction
**Method**: GET
**Params**:
	transaction_tags
**Success Response**: 
{
 	*Code*: 200 (OK)
}
**Error Response**: 
{
	*Code*: 400 (Bad Request), 404 (Not Found), 409 (Conflict), 500 (Internal Server Error)
}
