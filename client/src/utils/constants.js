export const tests = [
	{
		key: 1,
		name: "What is Big O? Algorithm Analysis.",
		time: 3,
		author: "Maksym Ivanov",
		questions: [
			{
				question: "What does Big O notation describe?",
				options: [
					"The worst-case performance of an algorithm",
					"The exact runtime of an algorithm",
					"The memory usage of an algorithm",
					"The best-case performance of an algorithm",
				],
				correctAnswer: "The worst-case performance of an algorithm",
			},
			{
				question: "Which of the following is the fastest Big O complexity?",
				options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
				correctAnswer: "O(1)",
			},
			{
				question: "What is the Big O complexity of a binary search algorithm?",
				options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
				correctAnswer: "O(log n)",
			}
		],
	},
	{
		key: 2,
		name: "Artificial Intelligence.",
		time: 5,
		author: "Artem Starykov",
		questions: [
			{
				question: "What is the primary goal of Artificial Intelligence?",
				options: [
					"To build machines that can think and act like humans",
					"To automate repetitive tasks",
					"To replace all human jobs",
					"To process data faster than humans",
				],
				correctAnswer: "To build machines that can think and act like humans",
			},
			{
				question: "Which branch of AI focuses on systems that learn from data?",
				options: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Robotics"],
				correctAnswer: "Machine Learning",
			},
			{
				question: "What is a Turing Test designed to evaluate?",
				options: [
					"The intelligence of a machine",
					"The efficiency of an algorithm",
					"The performance of hardware",
					"The ethical implications of AI",
				],
				correctAnswer: "The intelligence of a machine",
			}
		],
	}
]