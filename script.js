function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function generatePlan() {
  const goal = document.getElementById("goal").value;

  // You can also fetch from JSON files or backend
  const workouts = {
    "Weight Loss": ["Jumping jacks", "Burpees", "Plank", "Mountain climbers"],
    "Muscle Gain": ["Push-ups", "Deadlifts", "Squats", "Bench press"],
    "Flexibility": ["Yoga", "Stretching", "Pilates", "Tai Chi"]
  };

  const meals = {
    "Weight Loss": ["Oats with berries", "Salad with chickpeas", "Grilled veggies"],
    "Muscle Gain": ["Egg sandwich", "Protein smoothie", "Chicken with rice"],
    "Flexibility": ["Fruit bowl", "Tofu stir fry", "Mixed lentil soup"]
  };

  const quotes = [
    "Your only limit is you.",
    "Small progress is still progress.",
    "Every workout counts.",
    "Fitness is not a destination, it's a lifestyle."
  ];

  document.getElementById("workout").innerText = "🏋️ Workout: " + getRandom(workouts[goal]);
  document.getElementById("meal").innerText = "🥗 Meal: " + getRandom(meals[goal]);
  document.getElementById("motivation").innerText = "💬 Motivation: " + getRandom(quotes);
}
