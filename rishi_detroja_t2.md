# Software Project Management: Task-2 (PLT-2)
## Student: Rishi Detroja (23BCE288)
### Project: FleetFlow (Frontend UI & Charts)

---

## 📊 Comparing Different Ways to Build Software

Here is a simple look at five popular models used to plan and build software projects:

| Development Model | How it Works | Good Points (Pros) | Bad Points (Cons) |
| :--- | :--- | :--- | :--- |
| **Waterfall** | Step-by-step in a straight line. Cannot go back. | Easy to plan; clear steps. | Hard to make changes later; bugs found late. |
| **Incremental** | Build the software in small parts, one by one. | Gets basic parts working quickly. | Needs good planning; parts must fit together. |
| **Spiral** | Focuses heavily on finding and fixing risks first. | Great for avoiding big mistakes. | Very expensive and takes a lot of time. |
| **Agile** | Small cycles, very flexible, adapts to changes. | Easy to change; updates come fast. | Hard to know the final cost and time early. |
| **DevOps** | Continuous building, testing, and deployment. | Saves time with automation; fast fixes. | Hard to set up at the start. |

---

## 🛠️ Quick Comparison Table

| Feature | Waterfall | Incremental | Spiral | Agile | DevOps |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Easy to Change?** | Very Hard | Medium | Easy | Very Easy | Easy |
| **Handles Risks?** | Poor | Medium | Excellent | Good | Good (Auto-tests) |
| **Design / Prototyping**| Poor | Medium | High | Excellent (Fast updates) | Medium |
| **Speed to Deliver** | Slow | Medium | Slow | Fast | Very Fast |
| **User Feedback** | At the very end | After each part | After each cycle | Continuous | Continuous |

---

## 💡 Why We Chose the Agile Model for FleetFlow's Frontend

For the frontend (the screens and user dashboard) of FleetFlow, we chose the **Agile Model**. Here is why:

### 1. Making Screens Better with User Feedback:
Building website screens requires seeing them in action. Users often want changes to the colors, how buttons look, or how tables are sorted.
* With Agile, we can build a simple draft of the dashboard page, show it to users, and quickly change it in the next few days if they find it confusing.
* If we used Waterfall, we would have to build the whole frontend first. If a manager did not like the layout, changing it would be very difficult and slow because the project phases would be closed.

### 2. Matching Screens with Backend Work:
Our pages need to display data from the backend APIs (which Vaidik built).
* Working in small Agile cycles allows us to build the frontend screens at the same time the backend APIs are created.
* For example, while Vaidik was building the database validation check for vehicle weights, I was building the trip form screen. We could connect them immediately, test for errors, and make quick fixes. This saved us a lot of time.
