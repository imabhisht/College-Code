class Node: 
    def __init__(self,data) -> None:
        self.visited = False
        self.value = data

    def now_visited(self) -> None:
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


queue = []

def bfs(queue,graph,node: Node):
    node.now_visited()
    queue.append(node)

    while queue:
        m = queue.pop(0)
        
        print(m.value, end=" ")

        for neighbour_node in graph[m]:
            if not neighbour_node.visited:
                node.now_visited()
                queue.append(neighbour_node)



bfs(queue,graph,nodes[5])
print()