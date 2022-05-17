/*
Removing a Node in a BST
This one can be tough!


No Children, No Problem


Removing a Node - 0 children

Steps - Iteratively

Find the parent of the node that needs to be removed and the node that needs to be removed
If the value we are removing is greater than the parent node
Set the right property of the parent to be null
If the value we are removing is less than the parent node​
Set the left property of the parent to be null
Otherwise, the node we are removing has to be the root, so set the root to be null

*/





/*


One Child, One Problem

Steps - Iteratively
Removing a Node - 1 child
Find the parent of the node that needs to be removed and the node that needs to be removed
See if the child of the node to be removed is on the right side or the left side
If the value we are removing is greater than the parent node​​
Set the right property of the parent to be the child
If the value we are removing is less than the parent node​
Set the left property of the parent to be the child
Otherwise, set the root property of the tree to be the child

*/





/*
Two Children, More Problems


Removing a Node - 2 children
Steps - Iteratively

Find the parent of the node that needs to be removed and the node that needs to be removed
Find the predecessor node and store that in a variable
Set the left property of the predecessor node to be the left property of the node that is being removed
If the value we are removing is greater than the parent node​​
Set the right property of the parent to be the right property of the node to be removed
If the value we are removing is less than the parent node​
Set the left property of the parent to be the right property of the node to be removed
Otherwise, set the root of the tree to be the right property of the node to be removed

*/