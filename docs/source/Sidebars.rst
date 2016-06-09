Sidebars
========

Functions
^^^^^^^^^

Description: "Search Function"
Url: "/Users/id"
Method:"POST"
Params: {
	Term: [string], reqired 
	}
Response: {
  Code: “200",
  Content: {Id:"126"}
	OR
  Code: “404",
  Content: {error:"No matching term found"}
  }


Description: "Activity Feed" - Reuse search function, but with date instead of term

