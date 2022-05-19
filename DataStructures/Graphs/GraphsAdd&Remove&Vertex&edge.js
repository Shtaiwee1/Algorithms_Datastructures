/*
ADDING A VERTEX
Write a method called addVertex, which accepts a name of a vertex
It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
g.addVertex("Tokyo")
{
    "Tokyo": []
}
*/



/*
class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
}
*/




//an adjacency list is basically an object with key value pairs where the keys are the vertices and the values are the relationships(edges) for that vertex
// or it can be an array of arrays where each index in the outer array is a vertex and the inner arrays are the edges.

//practice
/*
class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        //add a vertex to the graph check for duplicates(error handling for keys that if they already exist)
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
}

let newGraph = new Graph()
newGraph.addVertex("Istanbul")

*/


/*
    ADDING AN EDGE
This function should accept two vertices, we can call them vertex1 and vertex2
The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
Don't worry about handling errors/invalid vertices
*/


/*
    //solution

class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");

*/




//practice
/*
class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1 ,v2){
        //push vertex 2 to the array that has the key of vertex 1 and do the same for vertex 1
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
}



let g= new Graph()

g.addVertex("Tokyo")
g.addVertex("Palestine")
g.addVertex("Jordan")

*/



/*
    REMOVING AN EDGE
This function should accept two vertices, we'll call them vertex1 and vertex2
The function should reassign the key of vertex1 to be an array that does not contain vertex2
The function should reassign the key of vertex2 to be an array that does not contain vertex1
Don't worry about handling errors/invalid vertices
*/


/*
class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1 ,v2){
        //push vertex 2 to the array that has the key of vertex 1 and do the same for vertex 1
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }

    removeEdge(v1 ,v2){
//filter the array for the first vertex let it show everything but the second vertex and do the same for the second vertex
        this.adjacencyList[v1] = this.adjacencyList[v1].filter( v => v!== v2  )
        this.adjacencyList[v2] = this.adjacencyList[v2].filter( v => v!== v1  )
    }
}



let g= new Graph()

g.addVertex("Tokyo")
g.addVertex("Palestine")
g.addVertex("Jordan")




/*

REMOVING A VERTEX


    The function should accept a vertex to remove
The function should loop as long as there are any other vertices in the adjacency list for that vertex
Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
delete the key in the adjacency list for that vertex

*/

/*
    class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");







*/


//practice

class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1 ,v2){
        //push vertex 2 to the array that has the key of vertex 1 and do the same for vertex 1
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }

    removeEdge(v1 ,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter( v => v!== v2  )
        this.adjacencyList[v2] = this.adjacencyList[v2].filter( v => v!== v1  )
    }

    removeVertex(vertex){
        //loop over the array for that vertex as long as there is anything in it
        while(this.adjacencyList[vertex].length){
            //with every loop pop the last item and store it in a variable
            let adjacentVertex = this.adjacencyList[vertex].pop()
            //call the removeEdge function on that variable to delete all edges for other vertices
            this.removeEdge(vertex , adjacentVertex)
        }
        //delete the vertex itself after the loop and after looping over the array emptying it and removing all edges from other vertices

        delete this.adjacencyList[vertex]
        
        
        
    }
}




let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");
