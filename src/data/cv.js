const cv = {
  "experience": [
    {
      "name": "T.Rowe Price",
      "title": "Senior Software Engineer (FTA)",
      "location": "London, UK",
      "start": "May 2023",
      "description": "Global investment management firm with top-tier internally designed software to invest with confidence. I work in the investment risk platform team to aggregate third and first party data and assest portfolio risk."
    },
    {
      "name": "Reddit",
      "title": "Software Engineer",
      "location": "London, UK",
      "start": "Apr 2022",
      "end": "Feb 2023",
      "description": "Fast-paced environment at a large scale with very high engineering standards. Every service is designed to scale and serve 500 million users with low latency and high availability. AWS, Golang, Python, Postgres, Redis, Kubernetes, GraphQL.",
      "bulletPoints": [
        "Reddit Talk. Live AMA/podcast where hosts can invite guests to the stage and talk. When the Product Manager identified a potential increase of listeners by allowing users without an account, I designed and implemented a permission flag system to allow existing and new types of users to listen and interact with Talk. This increased the number of users per talk and the engagement in the platform. It also helped the team to work easily with permission and authorization when adding new features for individual categories of users.",
        "Matrix Chat. Decentralised live communication system with federation in mind. I owned the feature to react with an emoji and send a sticker in a chat. I was responsible for creating a design document, coordinating with the front-end engineers, writing estimations and building the feature in the back-end. This feature is currently serving 500 millions of clients.",
        "I was responsible of reviewing 25% of the codebase's Pull Requests by ensuring only self-documented, reliable and clear code would serve production traffic."
      ]
    },
    {
      "name": "7digital",
      "title": "Senior Software Engineer",
      "location": "London, UK",
      "start": "Nov 2019",
      "end": "Mar 2022",
      "description": "Serving multimedia via streaming and download in both B2B and B2C models. I worked in the core system responsible for processing terabytes of data daily from music labels as fast as possible. GCP, Terraform, .NET Core, NodeJS, C++, PowerShell.",
      "bulletPoints": [
        "Migrated old UI apps that used to process a median of 2TB of data per day. I designed a cloud-native system in Google Compute Engine by migrating the existing system into .NET Core. The service is triggered by serverless functions written in NodeJS that consumes GCP's Pub/Sub messages sent by our data providers. The new system decreased the human error, increased the throughput outside the core office time and increased the P99 of to process data end-to-end from 6 days to 40 minutes.",
        "Added metrics and logging to the critical components. I noticed a degradation of network performance due to socket saturation. After the fix I increased the network throughput from 160Mb/s to 2Gb/s to fully use the provided cloud network bridge's performance.",
        "Migrated a media deliverer API to .NET Core and trimmed the start-up library lifting to improve the cold boot from 2 seconds to 800ms.",
        "Deployed custom builds of ffmpeg (an open-soruce encoder in C++) to gain up to 1.5x of throughput when converting lossless media into lossy formats.",
        "99% of pair programming, TDD was used for every single line of code with Unit Tests, Integration Tests and E2E tests."
      ]
    },
    {
      "name": "Comparison Technologies",
      "title": "Software Engineer",
      "location": "London, UK",
      "start": "Oct 2018",
      "end": "Oct 2019",
      "description": "Providing online and offline comparision solutions to business and retails across England. AWS, Lambda serverless RESTful services in .NET Core, NodeJS and Golang using CQRS and Event Sourcing.",
      "bulletPoints": [
        "Helped the team lead to migrate the whole tech stack from Rackspace to AWS. I used CloudFormation as infrastructure code and moved the main client-facing website to EC2 and using CloudFront as CDN. This improved latency when navigating through the website and improved reilability and availability. I also tightened the security through service gateway and private load balancers.",
        "I presented a prototype of the new front-facing website written in React and Typescript, chosen to be used as a reference for its next production iteration.",
        "Pair programming and full BDD with 98% of code coverage."
      ]
    },
    {
      "name": "SafeToNet",
      "title": ".NET Software Developer",
      "location": "London, UK",
      "start": "Feb 2018",
      "end": "Oct 2018",
      "description": "Small start-up with a relatively new development team, carrying from the legacy of an outsourced prototype for a parental control app.",
      "bulletPoints": [
        "Rewrote the whole architecture from a monololith written in WCF into a thin service in .NET Core deployed into MS Azure as a Docker image.",
        "Created a CI/CD pipeline with Azure Pipelines to speed-up the back-end service iterations.",
        "Introduced to the back-end team the concept of testing code to ensure robust code would be deployed to our Staging environment.",
        "Analysed and addressed the requirements from the BA, mobile and QA teams."
      ]
    },
    {
      "name": "edilportale.com S.p.A.",
      "title": ".NET Software Developer (contract)",
      "location": "Bari, Italy",
      "start": "Apr 2017",
      "end": "Dec 2017",
      "bulletPoints": [
        "Maintenance of public-facing web portals using ASP.NET MVC, backed by a custom CRM also written using the same tech stack.",
        "Profiled Microsoft SQL Server to detect performance degradations and port to ElasticSearch the most critical text-based queries.",
        "Engineered and developed the back-end and front-end of a newsletter editor used by the editorial staff.",
        "Engineered and developed end-to-end a task scheduler for internal use.",
        "Detected and fixed secure holes such as SQL injection and unsalted stored passwords."
      ]
    },
    {
      "name": "Nearcons S.r.l.",
      "title": "Software Developer (intern)",
      "location": "Taranto, Italy",
      "start": "Jun 2016",
      "end": "Dec 2016",
      "description": "First job experience on web-based services. While the company was mainly focused on consultancy, I was the first developer to create a in-house prototype of a gym app compaion for end users.",
      "bulletPoints": [
        "Learnt and developed a RESTful service written in .NET Framework by using MsSQL as persistent storage. I had full control of the server specifications.",
        "Developed an Android client using Java 1.8 and Android API 21 and an iOS client using Xcode 3.0 with Swift 3.0. I was responsible of taking care of the UI and UX too.",
        "Used Facebook and Google API to authenticate users using OAuth2 instead of a custom authentication solution.",
      ]
    }
  ],
  "skills": [
    {
      "name": "languages",
      "values": [
        "C", "C++", "C#", "Golang", "Python", "JavaScript", "Terraform", "Powershell"
      ]
    },
    {
      "name": "services",
      "values": [
        "AWS Lambda", "Amazon SQS", "GCP Functions", "GCP Compute Engine", "GCP Pub/Sub"
      ]
    },
    {
      "name": "storage",
      "values": [
        "PostgreSQL", "MsSQL", "SQLite", "DynamoDB", "MongoDB", "Redis"
      ]
    },
    {
      "name": "others",
      "values": [
        "Docker", "Kubernetes", "GraphQL", "Graphana", "Logdna", "Statsd",
      ]
    }
  ],
}

export default cv;
