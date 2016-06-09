Wishlist
========

Functions
^^^^^^^^^

Description: Get all wishes
Url: /user/{wishlist}
Method: GET
Params:
	wish_tags - filter by tag
	wish_date - filter by date
	page
		description: page to show
		type: [integer]
	page_limit
		description: amount of max results
		typer: [integer]
Success Response: 
{
	Code: 200 (OK)
}
Error Response: 
{
	Code: 401 (Unauthorized), 404 (Not Found)
}


Description: Get an individual wish
Url: /user/wishlist/wish
Method: GET
Params:
	wish_id
Success Response: 
{
 	Code: 200 (OK)
}
Error Response: 
{
	Code: 400 (Bad Request), 404 (Not Found), 500 (Internal Server Error)
}

Description: Add a wish
Url: /user/wishlist/wish
Method: POST
Params:
	wish_id
	wish_name
	wish_merchant
	wish_purchaselink
	wish_date
	wish_tags
	wish_desc
Success Response: 
{
 	Code: 201 (Created)
}
Error Response: 
{
	Code: 400 (Bad Request), 409 (Conflict), 415 (Bad Content Type), 500 (Internal Server Error)
}

Description: Edit a wish
Url: /user/wishlist/wish
Method: PUT
Params:
	wish_id
	wish_name
	wish_merchant
	wish_purchaselink
	wish_date
	wish_tags
	wish_desc
Success Response: 
{
 	Code: 200 (OK)
}
Error Response: 
{
	Code: 400 (Bad Request), 405 (Resource Not Allowed), 409 (Conflict), 415 (Bad Content Type), 500 (Internal Server Error)
}


Description: Delete a wish
Url: /user/wishlist/wish
Method: DELETE
Params:
	wish_id
Success Response: 
{
 	Code: 204 (No Content)
}
Error Response: 
{
	Code: 400 (Bad Request), 404 (Not Found), 409 (Conflict), 500 (Internal Server Error)
}

Description: Search a Bill
Url: /user/wishlist/wish
Method: GET
Params:
	wish_tags
Success Response: 
{
 	Code: 200 (OK)
}
Error Response: 
{
	Code: 400 (Bad Request), 404 (Not Found), 409 (Conflict), 500 (Internal Server Error)
}
