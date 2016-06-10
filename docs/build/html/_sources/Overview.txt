Overview
========

Functions
^^^^^^^^^

**Description**: "Retrieve Balance Graph Info", 
**Url**: "/Users/id",
**Method**:"GET",
**Response**: {
*Code*: “200",
Content: {account_balance: [integer]
	account_savings: [integer]
	total: [integer]}

OR
	
*Code*: “404",
Content: {error:"Information not found"}
}

**Description**: "Retrieve Net Worth Graph Info", 
**Url**: "/Users/id",
**Method**:"GET",
**Response**: {
*Code*: “200",
Content: {Net_Worth: [integer]
	Assets: [integer]
	Liabilities: [integer]}

OR
	
*Code*: “404",
Content: {error:"Information not found"}
}


**Description**: "Flex Card Info" - Reuse retrieve budget function, if Flex spending is treated as such


**Description**: "Retrieve Overview Data Card Info", 
**Url**: "/Users/id",
**Method**:"GET",
**Response**: {
*Code*: “200",
Content: {	Assets: [integer]
	Liabilities: [integer]}
	
OR
	
*Code*: “404",
Content: {error:"Information not found"}
}