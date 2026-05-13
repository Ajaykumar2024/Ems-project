
 
  const employees = [
    {
      "id": 1,
      "firstName": "Amit",
      "email": "e@e.com",
      "password": "123",
      "taskCounts": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Fix login bug",
          "taskDescription": "Resolve login authentication issue",
          "taskDate": "2026-04-20",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Add validation",
          "taskDescription": "Form validation",
          "taskDate": "2026-04-21",
          "category": "Frontend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Update UI",
          "taskDescription": "Improve dashboard design",
          "taskDate": "2026-04-18",
          "category": "Design"
        }
      ]
    },
    {
      "id": 2,
      "firstName": "Rahul",
      "email": "employee2@example.com",
      "password": "123",
      "taskCounts": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Create landing page",
          "taskDescription": "Design homepage UI",
          "taskDate": "2026-04-21",
          "category": "Frontend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Fix CSS issues",
          "taskDescription": "Resolve responsive bugs",
          "taskDate": "2026-04-19",
          "category": "Frontend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Optimize images",
          "taskDescription": "Compress images for speed",
          "taskDate": "2026-04-18",
          "category": "Performance"
        }
      ]
    },
    {
      "id": 3,
      "firstName": "Priya",
      "email": "employee3@example.com",
      "password": "123",
      "taskCounts": {
        "active": 1,
        "newTask": 0,
        "completed": 2,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Database schema",
          "taskDescription": "Design user database",
          "taskDate": "2026-04-22",
          "category": "Backend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Write queries",
          "taskDescription": "Create SQL queries",
          "taskDate": "2026-04-20",
          "category": "Database"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "API testing",
          "taskDescription": "Test APIs",
          "taskDate": "2026-04-21",
          "category": "Testing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Data migration",
          "taskDescription": "Migrate old data",
          "taskDate": "2026-04-19",
          "category": "Database"
        }
      ]
    },
    {
      "id": 4,
      "firstName": "Sneha",
      "email": "employee4@example.com",
      "password": "123",
      "taskCounts": {
        "active": 2,
        "newTask": 2,
        "completed": 0,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Testing module",
          "taskDescription": "Write test cases",
          "taskDate": "2026-04-23",
          "category": "Testing"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "UI testing",
          "taskDescription": "Test UI components",
          "taskDate": "2026-04-24",
          "category": "QA"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Automation test",
          "taskDescription": "Automate test scripts",
          "taskDate": "2026-04-20",
          "category": "Testing"
        }
      ]
    },
    {
      "id": 5,
      "firstName": "Vikram",
      "email": "employee5@example.com",
      "password": "123",
      "taskCounts": {
        "active": 1,
        "newTask": 1,
        "completed": 2,
        "failed": 0
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Deploy app",
          "taskDescription": "Deploy on server",
          "taskDate": "2026-04-24",
          "category": "DevOps"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Setup CI/CD",
          "taskDescription": "Configure pipeline",
          "taskDate": "2026-04-22",
          "category": "DevOps"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Server config",
          "taskDescription": "Setup production server",
          "taskDate": "2026-04-21",
          "category": "Infrastructure"
        }
      ]
    }
  ]

  const admin=[ {
    "id": 101,
    "email": "admin@me.com",
    "password": "123"
  }
  ]

export const setLocalStorage=()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage=()=>{
    const employees= JSON.parse(localStorage.getItem('employees'))
    const admin= JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
    
}