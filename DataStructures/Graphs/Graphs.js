
/*
WHAT ARE GRAPHS

NODES + CONNECTIONS

A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.
    */


/*
USES FOR GRAPHS
Social Networks
Location / Mapping
Routing Algorithms
Visual Hierarchy
File System Optimizations
EVERYWHERE!
*/


/*
Recommendations
"People also watched"
"You might also like..."
"People you might know"
"Frequently bought with"


https://musicmap.info/
*/



/*
TYPES OF GRAPHS


ESSENTIAL GRAPH TERMS
Vertex - a node
Edge - connection between nodes
Weighted/Unweighted - values assigned to distances between vertices
Directed/Undirected - directions assigned to distanced between vertices



directed:their are arrows on the edges between vertice/nodes
weighted: their are values on the edges between vertices/nodes.
    */




/*
Storing Graphs using Adjacency Matrix.
Storing Graphs using Adjacency list.



    */

/*
Adjacency Matrix:


-	A	B	C	D	E	F
A	0	1	0	0	0	1
B	1	0	1	0	0	0
C	0	1	0	1	0	0
D	0	0	1	0	1	0
E	0	0	0	1	0	1
F	1	0	0	0	1	0






Adjacency list:

graph of numbers:

[
0 [1,5],
1 [0,2],
2 [1,3],
3 [2,4],
4 [3,5],
5 [4,0]
]


graph of strings:


{
    A: ["B", "F"],
    B: ["A", "C"],
    C: ["B", "D"],
    D: ["C", "E"],
    E: ["D", "F"],
    F: ["E", "A"]
}


*/


/*

DIFFERENCES & BIG O

|V| - number of vertices

|E| - number of edges

OPERATION	ADJACENCY LIST	ADJACENCY MATRIX
Add Vertex	O(1)	​O(|V^2|)
Add Edge	O(1)	O(1)
Remove Vertex	O(|V| + |E|)	​O(|V^2|)
Remove Edge	O(|E|)	O(1)
Query	O(|V| + |E|)	O(1)
Storage	O(|V| + |E|)	​O(|V^2|)
    */



/*
Adjacency List

Can take up less space (in sparse graphs)
Faster to iterate over all edges
Can be slower to lookup specific edge




Adjacency Matrix


Takes up more space (in sparse graphs)
Slower to iterate over all edges
Faster to lookup specific edge
*/
/*

What will we use?

An Adjacency List


Why?
Most data in the real-world tends to lend itself to sparser and/or larger graphs




OUR GRAPH CLASS
class Graph {
    constructor(){
        this.adjacencyList = {}
    }
}
WE ARE BUILDING AN UNDIRECTED GRAPH
*/



/*
ADDING A VERTEX
Write a method called addVertex, which accepts a name of a vertex
It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
g.addVertex("Tokyo")
{
    "Tokyo": []
}
*/

