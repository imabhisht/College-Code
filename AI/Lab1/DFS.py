class Node: 
    def __init__(self,data) -> None:
        self.visited = False
        self.value = data

    def visited(self) -> None:
        self.visited = True

    def is_visited(self) -> bool:
        return self.visited
    

nodes = []
for x in range(10):
    nodes.append(Node(x))

graph = {
    nodes[5]: [nodes[3],nodes[7]],
    nodes[3]: [nodes[2],nodes[4]],
    nodes[7]: [nodes[8]],
    nodes[2]: [],
    nodes[4]: [nodes[8]],
    nodes[8]: []

}


def dfs(graph, node: Node):
    if not node.is_visited():
        node.is_visited()
        print(node.value)
        if(graph[node]):
            for neighbour in graph[node]:
                dfs(graph, neighbour)

dfs(graph, nodes[0])

