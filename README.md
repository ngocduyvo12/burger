# burger

The purpose of this app is to create a want to eat list of burgers, and the ability to devour the burger on these list and reorganize them.

This app will use mysql database to store burgers that the user wants to eat and burgers that have already eaten. 

Completing the form at the bottom of the web page will store the name of the burger into mysql data base and assign that burger with the boolean state of devour to false. Which mean this burger have not been eaten. After the burger have been added to the data base, reload the page to see the burger on the not devoured side of the web page. 

When appending the name of the burger from the un-devoured list, a button will also be created with the id of the burger on the data base and the state of true. This button can then be used to change the state of un-devour to true. Any burger with this devoured state will be rendered on the devoured side of the web page when the page refresh.