class SolveJugProblem:
    def __init__(self, m, n, target):
        self.m = m
        self.n = n
        self.target = target
        self.initial_state = self.get_initial_state()

    def start_the_search(self):
        graph_is_visited = {}
        queue = []
        queue.append(self.initial_state)
        while queue:
            current_selected = queue.pop(0)
            print("Current: ", current_selected)

            if self.check_if_goal(current_selected):
                print("Goal state reached:", current_selected)
                break

            neighbour_list = []
            neighbour_list.append(self.op_FILL_JUG1(current_selected))
            neighbour_list.append(self.op_FILL_JUG2(current_selected))
            neighbour_list.append(self.op_EMPTY_JUG1(current_selected))
            neighbour_list.append(self.op_EMPTY_JUG2(current_selected))
            neighbour_list.append(self.op_POUR_JUG1_TO_JUG2(current_selected))
            neighbour_list.append(self.op_POUR_JUG2_TO_JUG1(current_selected))

            for neighbour in neighbour_list:
                if neighbour not in graph_is_visited:
                    graph_is_visited[neighbour] = True
                    queue.append(neighbour)

    def queue(self, OPERARTION, state):
        pass

    def get_initial_state(self):
        return (0, 0)

    def op_FILL_JUG1(self, state):
        return (self.m, state[1])

    def op_FILL_JUG2(self, state):
        return (state[0], self.n)

    def op_EMPTY_JUG1(self, state):
        return (0, state[1])

    def op_EMPTY_JUG2(self, state):
        return (state[0], 0)

    def op_POUR_JUG1_TO_JUG2(self, state):
        if state[0] + state[1] <= self.n:
            return (0, state[0] + state[1])
        else:
            return (state[0] - (self.n - state[1]), self.n)

    def op_POUR_JUG2_TO_JUG1(self, state):
        if state[0] + state[1] <= self.m:
            return (state[0] + state[1], 0)
        else:
            return (self.m, state[1] - (self.m - state[0]))

    def check_if_goal(self, state):
        return state[0] == self.target or state[1] == self.target


obj = SolveJugProblem(4, 3, 2)
obj.start_the_search()
