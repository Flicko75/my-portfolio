export const projects = [
    {
        id: "telsys",
        title: "Telemetry Processing System",
        summary:
            "Real-time IoT telemetry pipeline using Kafka for event routing, Redis for fast reads, and SSE for live monitoring.",
        stack: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "Redis", "Docker"],
        github: "https://github.com/Flicko75/telemetry-system",

        details: [
            {
                title: "Overview",
                items: [
                    "Simulates IoT devices continuously sending telemetry data",
                    "Classifies incoming data based on severity",
                    "Routes data streams to Kafka topics based on severity",
                    "Streams live device updates using Server-Sent Events (SSE)",
                    "Generates alerts for critical conditions with deduplication"
                ]
            },
            {
                title: "Implementation",
                items: [
                    "Structured the system as a multi-module Maven project with separate services",
                    "Used Apache Kafka to decouple ingestion, processing, and alerting",
                    "Implemented a threshold-based classifier for battery, temperature, and pressure",
                    "Stored device state in Redis for fast access, with PostgreSQL as fallback",
                    "Applied rate limiting at the ingestion layer for high-frequency data"
                ]
            },
            {
                title: "System Flow",
                items: [
                    "Simulator sends telemetry packets to the ingestion API",
                    "API validates data and publishes it to Kafka",
                    "Processing service classifies severity and updates Redis and PostgreSQL",
                    "Alert service consumes critical topics and generates alerts",
                    "Monitoring API exposes REST endpoints and SSE streams"
                ]
            },
            {
                title: "Notes",
                items: [
                    "Used Kafka instead of direct service calls for better decoupling",
                    "Leveraged Redis to reduce database load for frequently accessed state",
                    "Implemented rate limiting using Redis TTL counters",
                    "Chose SSE over WebSockets for one-way real-time updates",
                    "Handled Docker networking constraints between containers"
                ]
            },
            {
                title: "Testing & Setup",
                items: [
                    "Wrote 70+ unit tests for classification logic and service layers",
                    "Used Mockito to isolate external dependencies",
                    "Set up GitHub Actions CI to run tests on every push",
                    "Configured Docker Compose to run the entire system with a single command"
                ]
            }
        ]
    },

    {
        id: "task-manager",
        title: "Task Management System",
        summary:
            "Backend system for managing tasks with role-based access control and JWT authentication.",
        stack: ["Java", "Spring Boot", "PostgreSQL"],
        github: "https://github.com/Flicko75/taskman",

        details: [
            {
                title: "Overview",
                items: [
                    "Supports multiple users working on tasks within teams",
                    "Provides role-based permissions for creating, updating, and assigning tasks",
                    "Allows users to collaborate through task comments"
                ]
            },
            {
                title: "Implementation",
                items: [
                    "Built REST APIs using Spring Boot for task and user management",
                    "Implemented JWT-based authentication with Spring Security",
                    "Enforced role-based access control at the API level",
                    "Structured logic using controller → service → repository architecture"
                ]
            },
            {
                title: "Data & Storage",
                items: [
                    "Used PostgreSQL to manage users, tasks, and relationships",
                    "Handled task assignment and role mapping using relational tables",
                    "Used DTOs to avoid exposing internal entities"
                ]
            },
            {
                title: "Notes",
                items: [
                    "Implemented role validation in the service layer",
                    "Used stateless JWT authentication instead of session-based auth",
                    "Dockerized the application for consistent local setup"
                ]
            },
            {
                title: "Testing",
                items: [
                    "Wrote 150+ unit and integration tests for request flows and validation",
                    "Covered edge cases related to role permissions and task updates"
                ]
            }
        ]
    },

    {
        id: "link-shortener",
        title: "Link Shortener Website",
        summary:
            "URL shortening service with user accounts and basic analytics.",
        stack: ["Java", "Spring Boot", "PostgreSQL"],
        github: "https://github.com/Flicko75/link-nest",

        details: [
            {
                title: "Overview",
                items: [
                    "Generates short links that redirect to original URLs",
                    "Tracks link usage and provides basic analytics",
                    "Allows users to manage their links after authentication"
                ]
            },
            {
                title: "Implementation",
                items: [
                    "Built REST APIs using Spring Boot for link creation, redirection, and tracking",
                    "Generated unique short codes and mapped them to original URLs in PostgreSQL",
                    "Implemented user authentication to associate links with accounts",
                    "Recorded access events for analytics"
                ]
            },
            {
                title: "System",
                items: [
                    "API handles link creation and redirection requests",
                    "Short codes are resolved to original URLs via database lookup",
                    "Analytics data is stored and displayed to users",
                    "Frontend built with React for link management and analytics"
                ]
            },
            {
                title: "Notes",
                items: [
                    "Ensured uniqueness of short codes to avoid collisions",
                    "Kept redirection logic simple to minimize latency",
                    "Separated authentication and link handling logic"
                ]
            }
        ]
    }
];