export const projects = [
    {
        id : "task-manager",
        title : "Task Management System",
        summary : "Task management system supporting role-based access control for secure multi-user collaboration.",
        stack: ["Java", "Spring Boot", "PostgreSQL"],
        github : "https://github.com/Flicko75/taskman",
        details: [
            {
                title : "Problem",
                items: [
                    "Teams need a centralized system to manage tasks allocated to users.",
                    "Different user roles require different permissions for creating, updating and viewing tasks.",
                    "The system must enforce role-based restrictions at the API level.",
                    "Users need to communicate within teams using comments on the assigned tasks."
                ]
            },
            {
                title : "Approach",
                items: [
                    "Designed a REST-based backend using Spring Boot.",
                    "Separated authentication, business logic, and persistence using layered architecture."
                ]
            },
            {
                title : "Architecture",
                items: [
                    "Spring Boot REST API handles task lifecycle operations.",
                    "Role-based access control enforced using Spring Security.",
                    "PostgreSQL stores tasks, users, and role mappings.",
                    "Service layer separates business logic from controller endpoints.",
                    "Dockerized the application for easier deployment and environment consistency"
                ]
            },
            {
                title: "Engineering Decisions",
                items: [
                    "Used PostgreSQL for strong relational consistency between users and tasks.",
                    "Chose Spring Security for RBAC instead of a custom authorization system."
                ]
            }
        ]
    },
    {
        id : "link-shortener",
        title : "Link Shortener Website",
        summary : "Link Shortening Website with user account and analytics.",
        stack: ["Java", "Spring Boot", "PostgreSQL"],
        github : "https://github.com/Flicko75/link-nest",
        details: [
            {
                title : "Problem",
                items: [
                    "Long URLs are difficult to share and track.",
                    "Users need a system that generates short links and tracks usage.",
                    "The system should associate links with user accounts."
                ]
            },
            {
                title : "Approach",
                items: [
                    "Designed a REST-based backend using Spring Boot for link generation and redirection.",
                    "Implemented user authentication to associate shortened links with user accounts."
                ]
            },
            {
                title : "Architecture",
                items: [
                    "Spring Boot REST API handles link creation and redirection.",
                    "Unique short codes generated and mapped to original URLs in PostgreSQL.",
                    "User authentication manages ownership of links.",
                    "Analytics module records access events for each short link.",
                    "React frontend displays analytics dashboards and allows users to manage and track their links."
                ]
            },
        ]
    }
];