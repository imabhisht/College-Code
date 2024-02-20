import heapq

class PuzzleState:
    def __init__(self, puzzle, moves=0, previous=None):
        self.puzzle = puzzle
        self.moves = moves
        self.previous = previous
        self.priority = self.heuristic() + self.moves

    def __lt__(self, other):
        return self.priority < other.priority

    def __eq__(self, other):
        return self.puzzle == other.puzzle

    def __hash__(self):
        return hash(str(self.puzzle))

    def __str__(self):
        return '\n'.join([' '.join(map(str, row)) for row in self.puzzle])

    def __repr__(self):
        return str(self)

    def is_goal(self):
        return self.puzzle == [[0, 1, 2], [3, 4, 5], [6, 7, 8]]

    def possible_moves(self):
        moves = []
        zero_row, zero_col = self.find_zero()
        for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
            new_row, new_col = zero_row + dr, zero_col + dc
            if 0 <= new_row < 3 and 0 <= new_col < 3:
                new_puzzle = [row[:] for row in self.puzzle]
                new_puzzle[zero_row][zero_col], new_puzzle[new_row][new_col] = \
                    new_puzzle[new_row][new_col], new_puzzle[zero_row][zero_col]
                moves.append(PuzzleState(new_puzzle, self.moves + 1, self))
        return moves

    def find_zero(self):
        for i in range(3):
            for j in range(3):
                if self.puzzle[i][j] == 0:
                    return i, j

    def heuristic(self):
        distance = 0
        for i in range(3):
            for j in range(3):
                if self.puzzle[i][j] != 0:
                    goal_row, goal_col = divmod(self.puzzle[i][j], 3)
                    distance += abs(i - goal_row) + abs(j - goal_col)
        return distance

def a_star(start_state):
    visited = set()
    heap = [start_state]

    while heap:
        current_state = heapq.heappop(heap)
        if current_state.is_goal():
            return current_state
        visited.add(current_state)
        for move in current_state.possible_moves():
            if move not in visited:
                heapq.heappush(heap, move)

    return None

def trace_path(goal_state):
    path = []
    current_state = goal_state
    while current_state:
        path.append(current_state)
        current_state = current_state.previous
    return reversed(path)

def print_path(path):
    for i, state in enumerate(path):
        print(f"Step {i}:")
        print(state)
        print()

def solve_puzzle(start_puzzle):
    start_state = PuzzleState(start_puzzle)
    goal_state = a_star(start_state)
    if goal_state:
        path = trace_path(goal_state)
        print("Solution Found!")
        print_path(path)
    else:
        print("No solution found.")

start_puzzle = [
    [1, 2, 3],
    [4, 0, 5],
    [6, 7, 8]
]

solve_puzzle(start_puzzle)
