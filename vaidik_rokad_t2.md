# Software Project Management: Task-2 (PLT-2)
## Student: Vaidik Rokad (23BCE291)
### Project: FleetFlow (Backend & Database Setup)

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
| **Speed to Deliver** | Slow | Medium | Slow | Fast | Very Fast |
| **User Feedback** | At the very end | After each part | After each cycle | Continuous | Continuous |
| **Best For** | Simple projects with fixed rules | Medium-sized projects | Huge, risky projects | Projects that change often | Teams needing fast updates |

---

## 💡 Why We Chose Agile and DevOps for FleetFlow

For the backend of FleetFlow, we combined the **Agile Model** and **DevOps Model**. Here is why:

### 1. Building in Small Steps (Agile):
Our system has separate parts (like Login, Vehicles, Drivers, and Trips). 
* With Agile, we can build the backend database and API for one part first (like login), test it, and make sure it works before moving to the next part.
* If the user asks for a new feature later (like adding a new expense category), we can easily add it to the database table without starting the whole project over.

### 2. Running the App Anywhere (DevOps & Docker):
As the backend developer, I packaged the app in a **Docker Container**:
* This means the database and server run inside a virtual box. It will run exactly the same way on my computer, my teammate's computer, or the web.
* Using simple scripts (`rebuild.sh` or `rebuild.bat`), we can automatically rebuild the database and restart the server in one click whenever we write new code. This avoids setup errors.
