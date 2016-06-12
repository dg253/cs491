Expenses
========

Functions
^^^^^^^^^

**Description**: Get all budgets
**Url**: /user/{budgets}
**Method**: GET
**Params**:
	budget_tags - filter by tag ?
	budget_startdate - # of first budget to return
	budget_enddate - # of last budget to return	
**Success Response**: 
{
	*Code*: 200 (OK)
}
**Error Response**: 
{
	*Code*: 401 (Unauthorized), 404 (Not Found)
}

**Description**: Get an individual budget
**Url**: /user/budgets/budget
**Method**: GET
**Params**:
	budget_id

**Success Response**: 
{
 	*Code*: 200 (OK)
}
**Error Response**: 
{
	*Code*: 400 (Bad Request), 404 (Not Found), 500 (Internal Server Error)
}

**Description**: Add a budget
**Url**: /user/budgets/budget
**Method**: POST
**Params**:
	budget_id
	budget_name
	budget_amount
	budget_startdate
	budget_enddate
	budget_tags
	budget_desc
**Success Response**: 
{
 	*Code*: 201 (Created)
}
**Error Response**: 
{
	*Code*: 400 (Bad Request), 409 (Conflict), 415 (Bad Content Type), 500 (Internal Server Error)
}

**Description**: Edit a budget
**Url**: /user/budgets/budget
**Method**: PUT
**Params**:
	budget_id
	budget_name
	budget_amount
	budget_startdate
	budget_enddate
	budget_tags
	budget_desc
**Success Response**: 
{
 	*Code*: 200 (OK)
}
**Error Response**: 
{
	*Code*: 400 (Bad Request), 405 (Resource Not Allowed), 409 (Conflict), 415 (Bad Content Type), 500 (Internal Server Error)
}

**Description**: Delete a budget
**Url**: /user/budgets/budget
**Method**: DELETE
**Params**:
	budget_id
**Success Response**: 
{
 	*Code*: 204 (No Content)
}
**Error Response**: 
{
	*Code*: 400 (Bad Request), 404 (Not Found), 409 (Conflict), 500 (Internal Server Error)
}

**Description**: Get all bills
**Url**: /user/{bills}
**Method**: GET
**Params**:
	bill_tags - filter by tag
	bill_startdate - # of first budget to return
	bill_enddate - # of last budget to return
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

**Description**: Get an individual bill
**Url**: /user/bills/bill
**Method**: GET
**Params**:
	bill_id
**Success Response**: 
{
 	*Code*: 200 (OK)
}
**Error Response**: 
{
	*Code*: 400 (Bad Request), 404 (Not Found), 500 (Internal Server Error)
}

**Description**: Add a Bill
**Url**: /user/bills/bill
**Method**: POST
**Params**:
	bill_id
	bill_name
	bill_amount
	bill_startdate
	bill_enddate
	bill_tags
	bill_freq
	bill_desc
**Success Response**: 
{
 	*Code*: 201 (Created)
}
**Error Response**: 
{
	*Code*: 400 (Bad Request), 409 (Conflict), 415 (Bad Content Type), 500 (Internal Server Error)
}

**Description**: Edit a Bill
**Url**: /user/bills/bill
**Method**: PUT
**Params**:
	bill_id
	bill_name
	bill_amount
	bill_startdate
	bill_enddate
	bill_tags
	bill_freq
	bill_desc
**Success Response**: 
{
 	*Code*: 200 (OK)
}
**Error Response**: 
{
	*Code*: 400 (Bad Request), 405 (Resource Not Allowed), 409 (Conflict), 415 (Bad Content Type), 500 (Internal Server Error)
}


**Description**: Delete a Bill
**Url**: /user/bills/bill
**Method**: DELETE
**Params**:
	bill_id
**Success Response**: 
{
 	*Code*: 204 (No Content)
}
**Error Response**: 
{
	*Code*: 400 (Bad Request), 404 (Not Found), 409 (Conflict), 500 (Internal Server Error)
}

**Description**: Search a Bill
**Url**: /user/bills/bill
**Method**: GET
**Params**:
	bill_tags
**Success Response**: 
{
 	*Code*: 200 (OK)
}
**Error Response**: 
{
	*Code*: 400 (Bad Request), 404 (Not Found), 409 (Conflict), 500 (Internal Server Error)
}
