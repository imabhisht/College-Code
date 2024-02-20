import numpy as np

class Perceptron:
    def __init__(self, input_size, learning_rate=0.01, epochs=100):
        self.weights = np.zeros(input_size + 1)
        self.learning_rate = learning_rate
        self.epochs = epochs

    def activation_function(self, x):
        return 1 if x >= 0 else 0

    def predict(self, inputs):
        print(inputs)
        summation = np.dot(inputs, self.weights[1:]) + self.weights[0]
        print(summation)
        return self.activation_function(summation)

    def train(self, training_inputs, labels):
        for _ in range(self.epochs):
            for inputs, label in zip(training_inputs, labels):
                prediction = self.predict(inputs)
                self.weights[1:] += self.learning_rate * (label - prediction) * inputs
                self.weights[0] += self.learning_rate * (label - prediction)


# Sample dataset (OR gate)
training_inputs = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
labels = np.array([0, 1, 1, 1])

# Create Perceptron instance
perceptron = Perceptron(input_size=2)

# Train the Perceptron
perceptron.train(training_inputs, labels)

# Test the trained Perceptron
inputs = np.array([1, 0])
print("Prediction for [1, 0]:", perceptron.predict(inputs))
