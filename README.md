# 🕹 Floppy Fowl

**Floppy Fowl** is a **physics-based side-scrolling game** developed using the **Phaser 3 framework**. The game simulates real-time **gravitational dynamics**, collision detection, and user-input processing to create an engaging and interactive experience. Players must navigate through obstacles while maintaining **state-dependent motion constraints**.

---
![image](https://github.com/user-attachments/assets/26b97ad8-ba18-49fd-85ae-08f660e22b78)
---

## 📌 Features

- **Game Engine:** Built using **Phaser 3**, leveraging the Arcade Physics Engine for **rigid body simulation**.
- **Sprite Animation:** Implements sprite sheet rendering for **frame-based animation sequences**.
- **Collision Detection:** Utilizes **overlap detection and rigid-body physics constraints** to determine success and failure conditions.
- **Dynamic User Input Handling:** Keyboard event listeners manage state transitions and **kinematic body transformations**.
- **Text-Based UI Feedback:** Displays instructional prompts and game state messages using Phaser’s **text rendering API**.
- **Victory & Failure States:** Implements **finite-state machine (FSM) logic** to determine when a player has won or lost.

---

## 🔧 Installation

### **1️⃣ Prerequisites**
Ensure you have a modern web browser that supports JavaScript and the **Phaser 3 library**.

### **2️⃣ Clone or Download**
```bash
git clone https://github.com/yourusername/floppy-fowl.git
cd floppy-fowl
```
Alternatively, you can **download** the ZIP file and extract it.

### **3️⃣ Run the Game**
Simply open `index.html` in your browser:
- **Windows:** Double-click `index.html`.
- **Mac/Linux:** Right-click and open with a browser.

---

## 🎮 How to Play

1. **Start the Game:** Press the **Spacebar** to initialize the game state.
2. **Control the Bird:** Use the **Up Arrow (↑)** to apply **impulse force** and control altitude.
3. **Navigate Obstacles:** Avoid collisions with **static colliders** (columns) and the ground.
4. **Win Condition:** Reach the end of the level without crashing.
5. **Lose Condition:** Collision with an obstacle or the ground results in a **terminal state transition** (Game Over).

---

## 🛠️ Technologies Used

- **Phaser 3** - Game framework
- **JavaScript (ES6)** - Core programming language
- **HTML5 & CSS** - Game rendering and UI elements

## 📜 License

This project is open-source and available under the **MIT License**.
