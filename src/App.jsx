import React, { useState, useEffect } from 'react';

// Data
const careerData = [
  {
    id: 0.5,
    company: "Virginia State University",
    role: "B.S. Manufacturing Engineering",
    location: "Petersburg, VA",
    period: "2019",
    type: "Education",
    bullets: [
      "GPA: 3.9/4.0 (ABET Accredited)",
      "Foundation in lean manufacturing, process optimization, and engineering principles"
    ],
    industry: "Education",
    skills: ["Manufacturing", "Lean", "Engineering"]
  },
  {
    id: 1,
    company: "Cummins",
    role: "Manufacturing Engineer Intern",
    location: "Columbus, IN",
    period: "2019",
    type: "Internship",
    bullets: [
      "Drove 70% reduction in ergonomic risk by redesigning workstations using Lean and DMAIC methodologies",
      "Achieved 50% improvement in process productivity through streamlined workflows and waste elimination",
      "Co-designed solutions with operators ensuring smooth adoption of new standards"
    ],
    industry: "Manufacturing",
    skills: ["DMAIC", "Lean", "Process Improvement"]
  },
  {
    id: 2,
    company: "Honeywell Flour Mill",
    role: "Mechanical Engineer",
    location: "Lagos, Nigeria",
    period: "2020",
    type: "Full-time",
    bullets: [
      "Coordinated 10+ technicians across departments, improving maintenance alignment",
      "Improved uptime and process reliability through prioritized preventive maintenance",
      "Reduced operational surprises by implementing clear communication of planned downtime"
    ],
    industry: "Manufacturing",
    skills: ["Cross-functional Leadership", "Maintenance Planning", "Operations"]
  },
  {
    id: 3,
    company: "KPMG",
    role: "IT Business Analyst",
    location: "Lagos, Nigeria",
    period: "2020",
    type: "Full-time",
    bullets: [
      "Analyzed enterprise application requirements supporting 100+ end-users across multiple business units",
      "Achieved 70% issue resolution rate through structured SDLC processes and UAT coordination",
      "Reduced rework cycles by 45% through early clarification of edge cases and requirements documentation"
    ],
    industry: "Consulting",
    skills: ["SDLC", "Requirements Analysis", "UAT", "Stakeholder Management"]
  },
  {
    id: 4,
    company: "PwC",
    role: "Data & Analytics Consultant",
    location: "Lagos, Nigeria",
    period: "2021",
    type: "Full-time",
    bullets: [
      "Migrated Azure Data Warehouse converting 12 fragmented sources into star schema using T-SQL and SSIS",
      "Reduced report inconsistencies from 40% to ~15% across 8 business units",
      "Created migration documentation reducing onboarding time by 4.5 days"
    ],
    industry: "Consulting",
    skills: ["Azure Synapse", "T-SQL", "SSIS", "Star Schema", "ETL"]
  },
  {
    id: 4.5,
    company: "Virginia State University",
    role: "M.S. Computer Science",
    location: "Petersburg, VA",
    period: "2023",
    type: "Education",
    bullets: [
      "GPA: 4.0/4.0 (ABET Accredited)",
      "Focus on cloud computing, machine learning, and distributed systems",
      "Cyber-Physical Security research: Built prototype platform protecting manufacturing IP through encryption and decentralized design"
    ],
    industry: "Education",
    skills: ["Computer Science", "ML", "Cloud Computing", "Security"]
  },
  {
    id: 5,
    company: "Amazon Web Services",
    role: "Solutions Architect Intern",
    location: "Austin, TX",
    period: "2023",
    type: "Internship",
    bullets: [
      "Delivered first validated prototype for space-based computer vision using AWS IoT Greengrass and SageMaker",
      "Automated containerized ML model deployment eliminating configuration drift through Docker pipelines",
      "Facilitated cross-functional alignment between aerospace engineers and ML teams through technical documentation"
    ],
    industry: "Cloud/Tech",
    skills: ["AWS IoT Greengrass", "SageMaker", "Docker", "YOLO", "Edge Computing"]
  },
  {
    id: 6,
    company: "Amazon Web Services",
    role: "Solutions Architect",
    location: "Austin, TX",
    period: "2024",
    type: "Full-time",
    bullets: [
      "Built Direct Connect solution reducing inter-agency query latency by 65%, enabling $85K incremental revenue",
      "Implemented Amazon Bedrock multi-agent AI platform decreasing content development time by 2 days",
      "Designed GCP-to-AWS migration strategy securing $1M annual AWS commitment",
      "Deployed EKS microservices platform reducing document processing time by 85%",
      "Optimized Aurora database reducing infrastructure costs by $180K annually"
    ],
    industry: "Cloud/Tech",
    skills: ["AWS", "Bedrock", "EKS", "Aurora", "Direct Connect", "Transit Gateway"]
  }
];

const projectsData = [
  // AWS SA CURRENT ROLE - 21 Projects
  {
    id: 1,
    title: "Justice Information Exchange – Direct Connect",
    company: "AWS",
    summary: "Private, low-latency connectivity between justice agencies reducing query latency by 65%",
    context: "Multiple justice agencies needed secure, fast communication without traversing public internet, meeting CJIS requirements.",
    role: "Designed and deployed private connectivity using AWS Direct Connect with private virtual interfaces. Standardized VPC routing, enforced segmentation, and implemented least-privilege access.",
    approach: [
      "Designed Direct Connect architecture with private VIFs",
      "Standardized VPC routing via Transit Gateway/Virtual Private Gateway",
      "Enforced network segmentation with route tables and Network Firewall",
      "Implemented IAM least-privilege and KMS envelope encryption",
      "Authored runbooks and test plans for throughput, jitter, and latency validation"
    ],
    impact: [
      "Reduced inter-agency query latency by ~65%",
      "Enabled onboarding of 5 additional county law enforcement agencies",
      "Met CJIS requirements with private connectivity and key management",
      "Drove ~$85K in incremental opportunity"
    ],
    techStack: ["Direct Connect", "VPC", "Transit Gateway", "Network Firewall", "IAM", "KMS", "CloudWatch"],
    industry: "Public Sector",
    year: 2024,
    competencies: ["Cloud Architecture", "Networking", "Security", "Compliance"],
    featured: true
  },
  {
    id: 2,
    title: "Corrections Education Platform – Agentic AI",
    company: "AWS",
    summary: "AI-powered content creation system reducing development time by 60% with safety guardrails",
    context: "Corrections facilities needed faster, safer content creation and delivery for educational programs in low-bandwidth environments.",
    role: "Architected constrained, safety-guarded content system using Amazon Bedrock Agents with Knowledge Bases for RAG workflows.",
    approach: [
      "Implemented Bedrock Agents with Knowledge Bases for RAG",
      "Built guardrails for prompt/response filtering and PII handling",
      "Added edge caching and offline-tolerant delivery patterns",
      "Delivered playbooks for content teams",
      "Integrated observability for model performance and drift"
    ],
    impact: [
      "Content development time decreased by 60%",
      "Pilot projected 35% improvement in educational outcomes",
      "Unlocked $150K in projected expansion budget",
      "Designed reusable content-safety guardrails"
    ],
    techStack: ["Amazon Bedrock", "Knowledge Bases", "S3", "RAG", "IAM", "KMS", "CloudWatch"],
    industry: "Public Sector",
    year: 2024,
    competencies: ["AI/ML", "Cloud Architecture", "Security"],
    featured: true
  },
  {
    id: 3,
    title: "Gun Detection Company – GCP→AWS Migration",
    company: "AWS",
    summary: "Migration strategy for real-time alerting platform securing $1M annual AWS commitment",
    context: "Client required migration of life-safety real-time alerting platform from GCP to AWS with strict SLOs and zero-downtime requirements.",
    role: "Led discovery to map GCP services to AWS equivalents and designed phased migration plan with failover patterns.",
    approach: [
      "Mapped GCP services to AWS equivalents",
      "Designed VPC and API Gateway ingress patterns",
      "Created regional failover patterns for HA",
      "Documented rollback paths and performance benchmarks",
      "Produced executive-level roadmap with risks and timelines"
    ],
    impact: [
      "Secured executive commitment with risk-managed migration plan",
      "Drove ~$1M projected annual AWS spend",
      "Preserved real-time performance goals with low-latency design"
    ],
    techStack: ["VPC", "API Gateway", "Route53", "IAM", "KMS", "CloudWatch", "CI/CD"],
    industry: "Enterprise",
    year: 2024,
    competencies: ["Cloud Architecture", "Migration", "Strategy"],
    featured: true
  },
  {
    id: 4,
    title: "Child Welfare AI Platform – Multi-Agent System",
    company: "AWS",
    summary: "Three-agent AI system reducing document processing time by 80-90% for caseworkers",
    context: "Child welfare caseworkers spent excessive time on paperwork instead of working with families.",
    role: "Implemented three cooperating agent classes on Amazon EKS with Bedrock for document intelligence, data research, and drafting.",
    approach: [
      "Built Document Intelligence agent for intake classification",
      "Created Data Research agent for policy/record lookup with RAG",
      "Implemented Drafting agent for case narratives",
      "Enforced PII controls, audit logs, and human-in-the-loop approvals",
      "Provided runbooks for dataset refresh and prompt governance"
    ],
    impact: [
      "Document processing time decreased by 80-90%",
      "Intake research time decreased by 70-80%",
      "Created path for $150K in follow-on scope"
    ],
    techStack: ["Amazon EKS", "Bedrock", "Vector DB", "RAG", "S3", "IAM", "KMS", "CloudWatch"],
    industry: "Public Sector",
    year: 2024,
    competencies: ["AI/ML", "Cloud Architecture", "Security"],
    featured: true
  },
  {
    id: 5,
    title: "State Tax System – Reliability & Performance",
    company: "AWS",
    summary: "Database optimization reducing costs by 30% with 15-minute disaster recovery",
    context: "State tax systems required improved database performance with strict recovery time objectives.",
    role: "Diagnosed TLS failures, tuned Aurora performance, introduced caching, and designed DR strategy.",
    approach: [
      "Diagnosed and fixed TLS failures from Network Firewall domain filtering",
      "Tuned Aurora instance class, read replicas, and parameter groups",
      "Introduced ElastiCache to absorb hot reads",
      "Recalibrated autoscaling configurations",
      "Designed DR for 15-minute RTO with cross-AZ replication"
    ],
    impact: [
      "Database performance improved by 45%",
      "Infrastructure cost decreased by 30%",
      "Implemented 15-minute RTO disaster recovery",
      "Supported $120K in additional funded scope"
    ],
    techStack: ["Aurora", "ElastiCache", "Auto Scaling", "Network Firewall", "IAM", "KMS", "CloudWatch"],
    industry: "Public Sector",
    year: 2024,
    competencies: ["Cloud Architecture", "Database", "Cost Optimization"],
    featured: false
  },
  {
    id: 6,
    title: "Child Welfare System – Secure Multi-Agency Integration",
    company: "AWS",
    summary: "Secure data sharing for 7 agencies achieving 99.99% availability",
    context: "Seven state agencies needed secure, reliable data exchange with strict isolation requirements.",
    role: "Defined isolation and data-sharing patterns using API Gateway with Lambda authorizers and fine-grained IAM.",
    approach: [
      "Designed API Gateway architecture with Lambda authorizers",
      "Implemented fine-grained IAM for access control",
      "Established SLAs, schema contracts, and versioning",
      "Built onboarding templates and smoke tests",
      "Leveraged managed services to compress timeline"
    ],
    impact: [
      "Reduced implementation timeline by 3 months",
      "Established secure integrations with 7 state agencies",
      "Achieved 99.99% availability target",
      "Contributed $85K in projected spend increase"
    ],
    techStack: ["API Gateway", "Lambda", "IAM", "KMS", "CloudWatch"],
    industry: "Public Sector",
    year: 2024,
    competencies: ["Cloud Architecture", "Security", "Integration"],
    featured: false
  },
  {
    id: 7,
    title: "Research Network – Data Pipeline Modernization",
    company: "AWS",
    summary: "ETL refactoring with AWS Glue plus hands-on team enablement",
    context: "Analytics team needed scalable, cataloged data pipelines with better visibility.",
    role: "Refactored ETL using AWS Glue and delivered 200-level hands-on workshop to upskill the team.",
    approach: [
      "Refactored ETL using AWS Glue for job orchestration",
      "Optimized reads/writes for semi-structured data in S3",
      "Aligned partitions and compression for cost/performance",
      "Delivered 200-level hands-on workshop",
      "Added operational metrics for job success and SLA adherence"
    ],
    impact: [
      "Delivered working Glue-based pipeline with data catalog",
      "Demonstrated performance gains vs. legacy ETL",
      "Enabled team to own and optimize pipelines"
    ],
    techStack: ["AWS Glue", "S3", "Glue Data Catalog", "IAM", "CloudWatch"],
    industry: "Research",
    year: 2024,
    competencies: ["Data Architecture", "Cloud Architecture", "Training"],
    featured: false
  },
  {
    id: 8,
    title: "County Government – Site-to-Site VPN",
    company: "AWS",
    summary: "Secure tunnel from county data center to AWS with validated failover",
    context: "County government needed secure private connectivity between on-prem infrastructure and AWS.",
    role: "Assessed on-prem topology and provisioned Site-to-Site VPN with configuration guides.",
    approach: [
      "Assessed on-premises network topology",
      "Provisioned Site-to-Site VPN with Customer Gateway",
      "Configured Virtual Private Gateway with strong ciphers",
      "Produced configuration guides for AWS and on-prem devices",
      "Validated tunnel stability and failover"
    ],
    impact: [
      "Delivered stable, secure VPN with validated redundancy",
      "Created reusable runbooks for IT teams",
      "Documented mirror configurations for both platforms"
    ],
    techStack: ["Site-to-Site VPN", "VPC", "Customer Gateway", "Virtual Private Gateway", "CloudWatch"],
    industry: "Public Sector",
    year: 2024,
    competencies: ["Cloud Architecture", "Networking", "Security"],
    featured: false
  },
  {
    id: 9,
    title: "Emergency Response Platform – HA/Failover Architecture",
    company: "AWS",
    summary: "9-1-1 platform resilience with multi-AZ failover and partner integrations",
    context: "PSAP (9-1-1) workloads required high availability and resilience for critical call handling.",
    role: "Reviewed workloads against Well-Architected Framework and coordinated partner deployments.",
    approach: [
      "Reviewed PSAP workloads against AWS Well-Architected Framework",
      "Proposed multi-AZ deployment patterns with health-based failover",
      "Designed back-pressure and queueing mechanisms",
      "Coordinated Snowflake, Datadog, and Deepgram integrations",
      "Documented reliability roadmap and marketplace procurement"
    ],
    impact: [
      "Multi-AZ failover design approved for call handling",
      "Aligned telemetry across Snowflake and Datadog",
      "Documented phased adoption roadmap"
    ],
    techStack: ["Multi-AZ", "Route53", "CloudWatch", "Snowflake", "Datadog", "Deepgram"],
    industry: "Public Sector",
    year: 2024,
    competencies: ["Cloud Architecture", "Reliability", "Integration"],
    featured: false
  },
  {
    id: 10,
    title: "DoD Army – GovCloud Security Documentation",
    company: "AWS",
    summary: "Security Impact Analyses enabling adoption of ~10 new services in GovCloud",
    context: "Army needed official security documentation to authorize AWS services in GovCloud.",
    role: "Co-authored Security Impact Analyses (SIA) and Security Usage Guidance (SUG), personally owning AppStream 2.0 and GuardDuty documents.",
    approach: [
      "Authored SIA/SUG for multiple AWS services",
      "Owned AppStream 2.0 and GuardDuty documentation",
      "Standardized templates and control mappings",
      "Created reviewer checklists for ATO decisions"
    ],
    impact: [
      "Enabled adoption of ~10 new services",
      "Reduced review cycles with standardized templates",
      "Delivered complete AppStream 2.0 and GuardDuty packages"
    ],
    techStack: ["AppStream 2.0", "GuardDuty", "IAM", "KMS", "Security Documentation"],
    industry: "Defense",
    year: 2024,
    competencies: ["Security", "Compliance", "Documentation"],
    featured: false
  },
  {
    id: 11,
    title: "Governance & Security Enhancements – RCPs & CI/CD",
    company: "AWS",
    summary: "Org-wide guardrails and developer security training for 19 developers",
    context: "Organization needed stronger governance controls and developer security awareness.",
    role: "Rolled out Resource Control Policies across AWS Organizations and delivered security training.",
    approach: [
      "Rolled out RCPs alongside existing SCPs",
      "Defined exception workflows and drift detection",
      "Delivered Security for Developers workshop (OWASP Top 10, SAST, SCA)",
      "Embedded security gates in CI/CD pipelines"
    ],
    impact: [
      "Hardened governance with org-wide RCPs + SCPs",
      "Upskilled 19 developers across 5 departments",
      "Reduced review friction with clearer exception pathways"
    ],
    techStack: ["AWS Organizations", "SCP", "RCP", "CI/CD", "SAST/SCA", "IAM", "CloudWatch"],
    industry: "Enterprise",
    year: 2024,
    competencies: ["Security", "DevOps", "Training"],
    featured: false
  },
  {
    id: 12,
    title: "Market Expansion & RFP Leadership",
    company: "AWS",
    summary: "A&S expansion framework and State Tax Modernization RFP technical leadership",
    context: "Non-US enterprises entering regulated US markets needed guidance, and state RFP required strong technical positioning.",
    role: "Contributed to expansion framework and led technical architecture review for State Tax Modernization RFP.",
    approach: [
      "Authored ~25% of A&S expansion framework",
      "Covered CMMC 2.0/ITAR posture and landing zone patterns",
      "Led technical architecture review for state RFP",
      "Defined service mappings and compliance narratives"
    ],
    impact: [
      "Authored ~25% of expansion framework",
      "Strengthened AWS positioning in major state RFP",
      "Produced reusable patterns for future bids"
    ],
    techStack: ["Landing Zones", "CMMC", "ITAR", "Governance Controls"],
    industry: "Enterprise",
    year: 2024,
    competencies: ["Strategy", "Compliance", "Documentation"],
    featured: false
  },
  {
    id: 13,
    title: "Smart City IoT – AppStream 2.0 Migration Discovery",
    company: "AWS",
    summary: "Citrix to AppStream migration analysis for 110 users with 60-70 concurrent sessions",
    context: "Smart City program needed to migrate from self-managed Citrix to managed AppStream 2.0.",
    role: "Analyzed migration feasibility including user profiling, app compatibility, and cost/performance trade-offs.",
    approach: [
      "Profiled 110 named users (60-70 concurrent)",
      "Assessed app compatibility and graphics needs",
      "Evaluated identity integration options",
      "Produced discovery report with fleet sizing and session policies",
      "Defined phased pilot approach"
    ],
    impact: [
      "Produced capacity and concurrency models",
      "Documented image build standards to shorten pilot",
      "Defined SSO integration to reduce operational risk"
    ],
    techStack: ["AppStream 2.0", "SSO", "CloudWatch", "Fleet Sizing"],
    industry: "Public Sector",
    year: 2024,
    competencies: ["Cloud Architecture", "Migration", "Discovery"],
    featured: false
  },
  {
    id: 14,
    title: "Healthcare Exchange – SQL Always Encrypted on ECS",
    company: "AWS",
    summary: "Troubleshooting SQL Server encryption in containerized ECS environment",
    context: "Healthcare application had encryption issues in containerized deployment.",
    role: "Investigated SQL Server Always Encrypted behavior in ECS containers and documented solutions.",
    approach: [
      "Reproduced encryption/provider issues",
      "Documented client driver requirements",
      "Identified key store dependencies and base image changes",
      "Proposed sidecar patterns and connection policy tuning"
    ],
    impact: [
      "Isolated root causes with reliable configuration",
      "Reduced troubleshooting time with repeatable checklist",
      "Preserved security posture with maintained performance"
    ],
    techStack: ["ECS", "SQL Server", "Always Encrypted", "KMS", "Containers"],
    industry: "Healthcare",
    year: 2024,
    competencies: ["Cloud Architecture", "Security", "Troubleshooting"],
    featured: false
  },
  {
    id: 15,
    title: "Government Technology Co. – QuickSight Workshop",
    company: "AWS",
    summary: "Administrator and embedding-focused BI enablement workshop",
    context: "Team needed training on QuickSight for self-service BI and embedded analytics.",
    role: "Delivered QuickSight enablement workshop covering admin, embedding, and governance.",
    approach: [
      "Covered dataset prep and SPICE optimization",
      "Taught row-level security patterns",
      "Demonstrated embedding with IAM/federated auth",
      "Provided lab guides and reference dashboards"
    ],
    impact: [
      "Accelerated BI self-service adoption",
      "Handed off reusable labs and templates",
      "Improved governance with RLS patterns"
    ],
    techStack: ["QuickSight", "SPICE", "RLS", "S3", "Athena", "IAM"],
    industry: "Public Sector",
    year: 2024,
    competencies: ["Data Architecture", "Training", "Documentation"],
    featured: false
  },
  {
    id: 16,
    title: "Government Contractor – AMS Onboarding Framework",
    company: "AWS",
    summary: "AWS Managed Services onboarding handbook with IAM, tagging, and ITSM integration",
    context: "Client moving to AWS Managed Services needed comprehensive onboarding documentation.",
    role: "Authored onboarding framework covering IAM roles, tagging, monitoring, and ticketing integration.",
    approach: [
      "Designed IAM role structure",
      "Created tag taxonomies for cost/inventory",
      "Defined monitoring and backup baselines",
      "Established change windows and escalation paths",
      "Integrated with ITSM ticketing"
    ],
    impact: [
      "Cut onboarding time with ready-to-use standards",
      "Reduced operational risk with clear escalation flows",
      "Improved cost hygiene via consistent tagging"
    ],
    techStack: ["AMS", "IAM", "CloudWatch", "AWS Backup", "ITSM"],
    industry: "Public Sector",
    year: 2024,
    competencies: ["Cloud Architecture", "Operations", "Documentation"],
    featured: false
  },
  {
    id: 17,
    title: "Contact Center Platform – Amazon Connect Alignment",
    company: "AWS",
    summary: "Cross-team design coordination for Amazon Connect rollout",
    context: "Organization adopting Amazon Connect needed aligned patterns across teams.",
    role: "Coordinated cross-team design for contact flows, agent tooling, and analytics exports.",
    approach: [
      "Designed contact flows and agent tooling patterns",
      "Established call recording retention policies",
      "Defined analytics export standards",
      "Created deployment strategy and environment promotion standards"
    ],
    impact: [
      "Reduced rework with pre-deployment pattern alignment",
      "Shortened time-to-value with clear promotion strategy",
      "Improved analytics readiness with export standards"
    ],
    techStack: ["Amazon Connect", "Contact Flows", "Kinesis", "Analytics"],
    industry: "Enterprise",
    year: 2024,
    competencies: ["Cloud Architecture", "Integration", "Strategy"],
    featured: false
  },
  {
    id: 18,
    title: "Identity Architecture – Cognito vs. Okta Evaluation",
    company: "AWS",
    summary: "Identity platform comparison with decision matrix and migration considerations",
    context: "Client needed to choose between Amazon Cognito and Okta for identity management.",
    role: "Facilitated identity platform evaluation comparing auth flows, MFA, pricing, and migration paths.",
    approach: [
      "Compared auth flows and token lifecycles",
      "Evaluated MFA options and user migration paths",
      "Analyzed hosted UI vs. custom options",
      "Produced decision matrix with cost analysis",
      "Coordinated with AWS Identity specialists"
    ],
    impact: [
      "Delivered clear decision matrix with trade-offs",
      "Identified migration blockers early",
      "Aligned security and product teams"
    ],
    techStack: ["Amazon Cognito", "Okta", "OAuth", "OIDC", "MFA"],
    industry: "Enterprise",
    year: 2024,
    competencies: ["Security", "Architecture", "Strategy"],
    featured: false
  },
  {
    id: 19,
    title: "GenAI POC Facilitation – Government Portfolio",
    company: "AWS",
    summary: "Multiple GenAI proofs-of-concept with reusable templates and playbooks",
    context: "Government contractor needed to evaluate GenAI use cases with measurable criteria.",
    role: "Orchestrated multiple GenAI POCs covering retrieval patterns, prompt management, and evaluation.",
    approach: [
      "Ran experiments with retrieval patterns and model selection",
      "Established reusable templates for datasets and guardrails",
      "Created human-review workflows",
      "Captured lessons learned into internal playbook"
    ],
    impact: [
      "Shortened future POC cycles with standardized templates",
      "Reduced safety risk with clear review steps",
      "Informed go/no-go decisions with measurable criteria"
    ],
    techStack: ["Bedrock", "Vector Stores", "Evaluation Harness", "Prompt Management"],
    industry: "Public Sector",
    year: 2024,
    competencies: ["AI/ML", "POC", "Strategy"],
    featured: false
  },
  {
    id: 20,
    title: "A&S EMEA→US Market Expansion Framework",
    company: "AWS",
    summary: "Expansion framework for non-US enterprises entering regulated US markets",
    context: "International companies needed guidance to operate in strict US regulated markets.",
    role: "Contributed ~25% of expansion framework covering landing zones, compliance, and data residency.",
    approach: [
      "Defined landing zone patterns for US regulated markets",
      "Documented CMMC 2.0/ITAR control posture",
      "Addressed data residency requirements",
      "Created resource hub with patterns and compliance references"
    ],
    impact: [
      "Equipped field and partner teams with reusable guidance",
      "Reduced time-to-market with standardized controls",
      "Improved bid quality with compliance alignment"
    ],
    techStack: ["Landing Zones", "CMMC", "ITAR", "Data Residency Controls"],
    industry: "Enterprise",
    year: 2024,
    competencies: ["Compliance", "Strategy", "Documentation"],
    featured: false
  },
  {
    id: 21,
    title: "Thought Leadership & Community Impact",
    company: "AWS",
    summary: "NSBE conference session (300-400 attendees), university lecture (45+ students), Cloud Practitioner program",
    context: "Expanding AWS adoption and building talent pipelines through community engagement.",
    role: "Delivered talks at major conferences and created educational programs.",
    approach: [
      "Delivered NSBE conference session to 300-400 attendees",
      "Taught university guest lecture with hands-on labs",
      "Created Cloud Practitioner upskilling program",
      "Curated curricula and mentorship structures"
    ],
    impact: [
      "NSBE session reached 300-400 within 12,000+ conference",
      "Engaged 45+ university students with practical AWS content",
      "Produced reusable curricula for partners and clients"
    ],
    techStack: ["Workshop Materials", "Labs", "Learning Paths"],
    industry: "Community",
    year: 2024,
    competencies: ["Leadership", "Training", "Community"],
    featured: false
  },
  // AWS INTERN
  {
    id: 22,
    title: "Satellite ML On-Orbit Inference",
    company: "AWS (Intern)",
    summary: "First validated prototype for space-based computer vision enabling on-orbit object detection",
    context: "Designed a satellite-based ML object-detection solution for on-orbit deployment on constrained satellite hardware.",
    role: "Led end-to-end solution design from architecture to POC validation. Defined cloud-to-edge architecture supporting in-orbit inference, data ingestion, model packaging, and deployment workflows.",
    approach: [
      "Architected containerized ML workloads with automated build-and-test pipelines",
      "Created architecture diagrams, flowcharts, and technical guides",
      "Built and validated full POC using YOLO and satellite imagery in Greengrass sandbox",
      "Completed 300-level space systems training to bridge cloud and aerospace domains"
    ],
    impact: [
      "Delivered first validated prototype proving on-orbit CV inference viability",
      "Standardized cloud-to-edge deployment pattern for future satellite teams",
      "Informed future AWS aerospace roadmap"
    ],
    techStack: ["AWS IoT Greengrass", "Amazon SageMaker", "Docker", "YOLO", "AWS IAM", "VPC"],
    industry: "Aerospace",
    year: 2023,
    competencies: ["Cloud Architecture", "AI/ML", "Edge Computing", "Documentation"],
    featured: true,
    blogLink: "https://aws.amazon.com/blogs/publicsector/aws-successfully-runs-aws-compute-machine-learning-services-orbiting-satellite-first-space-experiment/"
  },
  // PwC
  {
    id: 23,
    title: "Azure Data Warehouse Migration",
    company: "PwC",
    summary: "Consolidated 12 data sources into star schema, reducing report inconsistencies from 40% to 15%",
    context: "Client had fragmented data across 12 sources causing reporting inconsistencies across 8 business units.",
    role: "Contributed to enterprise data migration covering requirements, architecture, ETL design, and documentation.",
    approach: [
      "Validated migration scope and business logic in requirement sessions",
      "Designed star schemas for fact and dimension tables",
      "Collaborated with data engineers to validate ETL pipelines",
      "Authored client-facing and internal migration documentation"
    ],
    impact: [
      "Reduced report inconsistencies from 40% to ~15%",
      "Reduced onboarding time by 4.5 days",
      "Standardized pipeline validation across teams"
    ],
    techStack: ["Azure Synapse", "T-SQL", "SSIS", "Azure Data Pipelines"],
    industry: "Consulting",
    year: 2021,
    competencies: ["Data Architecture", "Cloud Architecture", "Documentation"],
    featured: false
  },
  // KPMG
  {
    id: 24,
    title: "Enterprise Application Business Analysis",
    company: "KPMG",
    summary: "IT business analysis supporting 100+ end-users with 70% issue resolution rate",
    context: "Enterprise application used by multiple internal business units needed continuous improvement.",
    role: "Served as IT Business Analyst translating business requirements into application features.",
    approach: [
      "Led requirement-gathering sessions with stakeholders",
      "Created user requirement documents and functional specs",
      "Provided UI/UX feedback based on user input",
      "Coordinated UAT and feedback loops"
    ],
    impact: [
      "Achieved 70% issue-resolution rate",
      "Supported 100+ end-users across business units",
      "Reduced rework by clarifying edge cases upfront"
    ],
    techStack: ["SDLC", "Requirements Documentation", "Issue Tracking", "UAT"],
    industry: "Consulting",
    year: 2020,
    competencies: ["Business Analysis", "Requirements", "Documentation"],
    featured: false
  },
  // Honeywell
  {
    id: 25,
    title: "Maintenance Coordination & Uptime Improvement",
    company: "Honeywell Flour Mill",
    summary: "Cross-functional maintenance coordination for 10+ technicians improving uptime",
    context: "Production equipment maintenance needed better coordination across departments.",
    role: "Led cross-functional production maintenance coordination, organizing work for 10+ technicians.",
    approach: [
      "Coordinated maintenance activities around production schedules",
      "Prioritized preventive and corrective tasks by equipment criticality",
      "Identified root causes of breakdowns",
      "Communicated planned work and downtime to supervisors"
    ],
    impact: [
      "Coordinated 10+ technicians across departments",
      "Improved uptime and process reliability",
      "Reduced operational surprises with clear communication"
    ],
    techStack: ["Maintenance Planning", "Work Order Systems", "Cross-functional Coordination"],
    industry: "Manufacturing",
    year: 2020,
    competencies: ["Leadership", "Operations", "Documentation"],
    featured: false
  },
  // Cummins
  {
    id: 26,
    title: "Ergonomics & Productivity Improvement Initiative",
    company: "Cummins",
    summary: "70% ergonomic risk reduction and 50% productivity improvement using Lean/DMAIC",
    context: "Production line had ergonomic risks and inefficiencies affecting worker safety and throughput.",
    role: "Led ergonomic and safety process improvements using DMAIC and Lean methodologies.",
    approach: [
      "Assessed tasks for ergonomic risk with quality lab",
      "Applied DMAIC and Lean to propose workstation changes",
      "Partnered with operators and safety teams to test changes",
      "Captured improvements in standard work documentation"
    ],
    impact: [
      "70% reduction in ergonomic risk",
      "50% improvement in process productivity",
      "Locked improvements into standard work docs"
    ],
    techStack: ["DMAIC", "Lean", "Ergonomic Assessment", "Standard Work Documentation"],
    industry: "Manufacturing",
    year: 2019,
    competencies: ["Process Improvement", "Leadership", "Documentation"],
    featured: false
  },
  // Academic
  {
    id: 27,
    title: "Cyber-Physical Security Platform",
    company: "Academic Research",
    summary: "Prototype platform protecting manufacturing IP through encryption and decentralized design",
    context: "Research project addressing protection of manufacturing intellectual property and sensitive data.",
    role: "Built prototype cyber-physical security platform applying encryption and decentralized design principles.",
    approach: [
      "Applied encryption and decentralized design principles",
      "Modeled access patterns and threat scenarios",
      "Implemented secure storage and transmission mechanisms",
      "Evaluated design against manufacturing workflows"
    ],
    impact: [
      "Demonstrated decentralized encryption-first design viability",
      "Reduced breach impact through compartmentalized security",
      "Created concrete starting point for future industrial security work"
    ],
    techStack: ["Encryption Frameworks", "Distributed Systems", "Security Modeling"],
    industry: "Research",
    year: 2023,
    competencies: ["Security", "Architecture", "Research"],
    featured: false
  }
];

const certifications = [
  { name: "AWS Solutions Architect – Professional", level: "Professional", icon: "🏆" },
  { name: "AWS Security – Specialty", level: "Specialty", icon: "🛡️" },
  { name: "AWS Machine Learning Engineer – Associate", level: "Associate", icon: "🤖" },
  { name: "AWS Developer – Associate", level: "Associate", icon: "💻" },
  { name: "AWS SysOps Administrator – Associate", level: "Associate", icon: "⚙️" },
  { name: "AWS AI Practitioner", level: "Foundational", icon: "🧠" },
  { name: "AWS Solutions Architect – Associate", level: "Associate", icon: "☁️" },
  { name: "AWS Cloud Practitioner", level: "Foundational", icon: "📚" }
];

const testimonials = [
  {
    name: "Kathryn O'Donnell",
    role: "Hiring Manager, AWS",
    relationship: "Managed Adeogo directly",
    date: "August 2023",
    quote: "He impressed me and the team with his technical capabilities, his willingness to learn, and his open and engaging nature. He took ownership in his learning path, finding and diving in to the areas he needed to successfully complete his project. His project was a tough one too: we tasked him with building and deploying an ML model that could operate on a satellite using Amazon SageMaker and AWS IoT Greengrass. He did an excellent job, including his final presentation which was interesting and informative for the entire team.",
    highlight: "tasked him with building and deploying an ML model that could operate on a satellite"
  },
  {
    name: "Eric Parsel",
    role: "Mentor, AWS",
    relationship: "Mentored Adeogo",
    date: "September 2023",
    quote: "Adeogo was an excellent addition to our team during his summer internship at AWS. His commitment to growth and improvement was impressive and recognized amongst other members of the team. His learning curve challenged him in a number of directions, and he was able to scale up quickly and apply his newfound knowledge effectively to his work. It's clear that Adeogo possesses a strong drive for success and a dedication to continuous learning.",
    highlight: "scale up quickly and apply his newfound knowledge effectively"
  }
];

const skills = {
  "Cloud Platforms": ["AWS", "Azure", "GCP"],
  "AWS Services": ["IoT Greengrass", "SageMaker", "Bedrock", "EKS", "Aurora", "Lambda", "API Gateway", "Direct Connect", "Transit Gateway"],
  "Data & Analytics": ["SQL", "T-SQL", "Star Schema", "ETL", "Azure Synapse", "SSIS"],
  "AI/ML": ["YOLO", "Deep Learning", "Machine Learning", "RAG"],
  "DevOps & Containers": ["Docker", "CI/CD", "Infrastructure as Code"],
  "Languages": ["Python", "TypeScript", "Bash", "R"],
  "Methodologies": ["SDLC", "DMAIC", "Lean", "Agile"]
};

const metrics = [
  { label: "Revenue Influenced", value: "$1.2M+", icon: "💰" },
  { label: "Cost Savings Delivered", value: "$180K+", icon: "📉" },
  { label: "AWS Certifications", value: "8", icon: "🏅" },
  { label: "Latency Reduction", value: "65%", icon: "⚡" }
];

// Components
const Navigation = ({ activeSection, setActiveSection }) => {
  const sections = ['Home', 'Journey', 'Projects', 'Skills', 'Testimonials', 'Contact'];
  
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId.toLowerCase());
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(10, 10, 15, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      zIndex: 1000,
      padding: '16px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div 
        onClick={() => scrollToSection('home')}
        style={{ 
          fontFamily: "'Syne', sans-serif", 
          fontSize: '20px', 
          fontWeight: 700,
          color: '#fff',
          letterSpacing: '-0.5px',
          cursor: 'pointer'
        }}>
        AO<span style={{ color: '#FF9500' }}>.</span>
      </div>
      <div style={{ display: 'flex', gap: '32px' }}>
        {sections.map(section => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            style={{
              background: 'none',
              border: 'none',
              color: activeSection === section.toLowerCase() ? '#FF9500' : 'rgba(255,255,255,0.7)',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'color 0.3s ease',
              letterSpacing: '0.5px'
            }}
          >
            {section}
          </button>
        ))}
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="home" style={{
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '120px 60px 60px',
    position: 'relative',
    overflow: 'hidden'
  }}>
    {/* Background gradient */}
    <div style={{
      position: 'absolute',
      top: '-50%',
      right: '-20%',
      width: '800px',
      height: '800px',
      background: 'radial-gradient(circle, rgba(255,149,0,0.15) 0%, transparent 70%)',
      pointerEvents: 'none'
    }} />
    
    <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '14px',
        color: '#FF9500',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        marginBottom: '24px',
        fontWeight: 500
      }}>
        Solutions Architect
      </p>
      
      <h1 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: '72px',
        fontWeight: 700,
        color: '#fff',
        lineHeight: 1.1,
        marginBottom: '24px',
        letterSpacing: '-2px'
      }}>
        Adeogo Olajide
      </h1>
      
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '22px',
        color: 'rgba(255,255,255,0.7)',
        lineHeight: 1.6,
        marginBottom: '48px',
        maxWidth: '700px'
      }}>
        Turning complex cloud challenges into scalable, revenue-driving architectures. 
        From satellite ML inference to multi-agency data platforms—I design solutions 
        that work at the edge of what's possible.
      </p>
      
      {/* Metrics Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px',
        marginBottom: '48px'
      }}>
        {metrics.map((metric, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            padding: '24px',
            textAlign: 'center'
          }}>
            <span style={{ fontSize: '28px', display: 'block', marginBottom: '8px' }}>{metric.icon}</span>
            <p style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '28px',
              fontWeight: 700,
              color: '#FF9500',
              marginBottom: '4px'
            }}>
              {metric.value}
            </p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              color: 'rgba(255,255,255,0.5)',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              {metric.label}
            </p>
          </div>
        ))}
      </div>
      
      {/* CTA Buttons */}
      <div style={{ display: 'flex', gap: '16px' }}>
        <button 
          onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          style={{
            background: '#FF9500',
            color: '#000',
            border: 'none',
            padding: '16px 32px',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '14px',
            fontWeight: 600,
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
          }}>
          View Projects ↓
        </button>
        <button style={{
          background: 'transparent',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.3)',
          padding: '16px 32px',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '14px',
          fontWeight: 500,
          borderRadius: '8px',
          cursor: 'pointer'
        }}>
          Download Resume
        </button>
      </div>
    </div>
  </section>
);

const CareerTimeline = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  
  return (
    <section id="journey" style={{ padding: '100px 60px', background: 'rgba(255,255,255,0.02)' }}>
      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: '48px',
        fontWeight: 700,
        color: '#fff',
        marginBottom: '16px',
        letterSpacing: '-1px'
      }}>
        Career Journey
      </h2>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '18px',
        color: 'rgba(255,255,255,0.6)',
        marginBottom: '12px',
        maxWidth: '600px'
      }}>
        From manufacturing floors to satellite systems—a progression built on solving 
        complex problems across domains.
      </p>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '13px',
        color: 'rgba(255,149,0,0.7)',
        marginBottom: '60px'
      }}>
        ↳ Click any role to expand details
      </p>
      
      {/* Timeline */}
      <div style={{ position: 'relative' }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute',
          left: '140px',
          top: 0,
          bottom: 0,
          width: '2px',
          background: 'linear-gradient(to bottom, #FF9500, rgba(255,149,0,0.2))'
        }} />
        
        {careerData.map((role, index) => (
          <div 
            key={role.id}
            onClick={() => setSelectedRole(selectedRole === role.id ? null : role.id)}
            style={{
              display: 'flex',
              gap: '40px',
              marginBottom: '32px',
              cursor: 'pointer'
            }}
          >
            {/* Year */}
            <div style={{
              width: '100px',
              textAlign: 'right',
              fontFamily: "'Syne', sans-serif",
              fontSize: '16px',
              fontWeight: 600,
              color: '#FF9500',
              paddingTop: '20px'
            }}>
              {role.period.split('-')[0].split(' ')[0]}
            </div>
            
            {/* Node */}
            <div style={{
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              background: selectedRole === role.id ? '#FF9500' : '#1a1a24',
              border: '3px solid #FF9500',
              marginTop: '20px',
              transition: 'all 0.3s ease',
              flexShrink: 0
            }} />
            
            {/* Content */}
            <div style={{
              flex: 1,
              background: selectedRole === role.id ? 'rgba(255,149,0,0.1)' : 'rgba(255,255,255,0.03)',
              border: `1px solid ${selectedRole === role.id ? 'rgba(255,149,0,0.3)' : 'rgba(255,255,255,0.08)'}`,
              borderRadius: '16px',
              padding: '24px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              if (selectedRole !== role.id) {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedRole !== role.id) {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              }
            }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#fff',
                    marginBottom: '4px'
                  }}>
                    {role.role}
                  </h3>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '15px',
                    color: 'rgba(255,255,255,0.6)'
                  }}>
                    {role.company} · {role.location}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{
                    background: 'rgba(255,149,0,0.15)',
                    color: '#FF9500',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500
                  }}>
                    {role.industry}
                  </span>
                  <span style={{
                    color: 'rgba(255,255,255,0.4)',
                    fontSize: '18px',
                    transition: 'transform 0.3s ease',
                    transform: selectedRole === role.id ? 'rotate(180deg)' : 'rotate(0deg)',
                    display: 'inline-block'
                  }}>
                    ▼
                  </span>
                </div>
              </div>
              
              {selectedRole === role.id && (
                <div style={{ marginTop: '20px', animation: 'fadeIn 0.3s ease' }}>
                  <ul style={{ 
                    margin: 0, 
                    padding: '0 0 0 20px',
                    listStyle: 'none'
                  }}>
                    {role.bullets.map((bullet, i) => (
                      <li key={i} style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '14px',
                        color: 'rgba(255,255,255,0.8)',
                        marginBottom: '12px',
                        lineHeight: 1.6,
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '-20px',
                          color: '#FF9500'
                        }}>→</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                    {role.skills.map((skill, i) => (
                      <span key={i} style={{
                        background: 'rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.7)',
                        padding: '4px 12px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontFamily: "'DM Sans', sans-serif"
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState({ industry: 'All', competency: 'All', year: 'All' });
  const [selectedProject, setSelectedProject] = useState(null);
  
  const industries = ['All', ...new Set(projectsData.map(p => p.industry))];
  const competencies = ['All', ...new Set(projectsData.flatMap(p => p.competencies))];
  const years = ['All', ...new Set(projectsData.map(p => p.year.toString()))].sort().reverse();
  
  const filteredProjects = projectsData.filter(p => {
    if (filter.industry !== 'All' && p.industry !== filter.industry) return false;
    if (filter.competency !== 'All' && !p.competencies.includes(filter.competency)) return false;
    if (filter.year !== 'All' && p.year.toString() !== filter.year) return false;
    return true;
  });
  
  return (
    <section id="projects" style={{ padding: '100px 60px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
        <div>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '48px',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '16px',
            letterSpacing: '-1px'
          }}>
            Project Portfolio
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '18px',
            color: 'rgba(255,255,255,0.6)',
            maxWidth: '500px'
          }}>
            Deep dives into solutions I've architected—from concept to production impact.
          </p>
        </div>
        
        {/* Filters */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {[
            { label: 'Industry', options: industries, key: 'industry' },
            { label: 'Competency', options: competencies, key: 'competency' },
            { label: 'Year', options: years, key: 'year' }
          ].map(f => (
            <select
              key={f.key}
              value={filter[f.key]}
              onChange={(e) => setFilter({ ...filter, [f.key]: e.target.value })}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '8px',
                padding: '10px 16px',
                color: '#fff',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                cursor: 'pointer',
                minWidth: '140px'
              }}
            >
              {f.options.map(opt => (
                <option key={opt} value={opt} style={{ background: '#1a1a24' }}>{f.label}: {opt}</option>
              ))}
            </select>
          ))}
        </div>
      </div>
      
      {/* Projects Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
        gap: '24px'
      }}>
        {filteredProjects.map(project => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: project.featured ? '1px solid rgba(255,149,0,0.3)' : '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '28px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {project.featured && (
              <span style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#FF9500',
                color: '#000',
                padding: '4px 10px',
                borderRadius: '4px',
                fontSize: '11px',
                fontWeight: 600,
                fontFamily: "'DM Sans', sans-serif"
              }}>
                FEATURED
              </span>
            )}
            
            <div style={{
              display: 'flex',
              gap: '8px',
              marginBottom: '16px',
              flexWrap: 'wrap'
            }}>
              <span style={{
                background: 'rgba(255,149,0,0.15)',
                color: '#FF9500',
                padding: '4px 10px',
                borderRadius: '4px',
                fontSize: '12px',
                fontFamily: "'DM Sans', sans-serif"
              }}>
                {project.industry}
              </span>
              <span style={{
                background: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.6)',
                padding: '4px 10px',
                borderRadius: '4px',
                fontSize: '12px',
                fontFamily: "'DM Sans', sans-serif"
              }}>
                {project.year}
              </span>
            </div>
            
            <h3 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '20px',
              fontWeight: 600,
              color: '#fff',
              marginBottom: '8px',
              lineHeight: 1.3
            }}>
              {project.title}
            </h3>
            
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '4px'
            }}>
              {project.company}
            </p>
            
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.6,
              marginBottom: '20px'
            }}>
              {project.summary}
            </p>
            
            {/* Tech stack preview */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {project.techStack.slice(0, 4).map((tech, i) => (
                <span key={i} style={{
                  background: 'rgba(255,255,255,0.06)',
                  color: 'rgba(255,255,255,0.5)',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontFamily: "'DM Sans', sans-serif"
                }}>
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span style={{
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: '11px',
                  padding: '4px'
                }}>
                  +{project.techStack.length - 4} more
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '40px'
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#12121a',
              borderRadius: '24px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              padding: '40px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{
                  background: 'rgba(255,149,0,0.15)',
                  color: '#FF9500',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontFamily: "'DM Sans', sans-serif"
                }}>
                  {selectedProject.industry}
                </span>
                <span style={{
                  background: 'rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.6)',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontFamily: "'DM Sans', sans-serif"
                }}>
                  {selectedProject.year}
                </span>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '24px',
                  cursor: 'pointer'
                }}
              >
                ×
              </button>
            </div>
            
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '32px',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '8px'
            }}>
              {selectedProject.title}
            </h2>
            
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '16px',
              color: '#FF9500',
              marginBottom: '24px'
            }}>
              {selectedProject.company}
            </p>
            
            {/* Context */}
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.5)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '12px'
              }}>
                Context
              </h4>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '15px',
                color: 'rgba(255,255,255,0.8)',
                lineHeight: 1.7
              }}>
                {selectedProject.context}
              </p>
            </div>
            
            {/* My Role */}
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.5)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '12px'
              }}>
                My Role
              </h4>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '15px',
                color: 'rgba(255,255,255,0.8)',
                lineHeight: 1.7
              }}>
                {selectedProject.role}
              </p>
            </div>
            
            {/* Approach */}
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.5)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '12px'
              }}>
                Approach
              </h4>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {selectedProject.approach.map((item, i) => (
                  <li key={i} style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '15px',
                    color: 'rgba(255,255,255,0.8)',
                    marginBottom: '10px',
                    paddingLeft: '20px',
                    position: 'relative',
                    lineHeight: 1.6
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: '#FF9500' }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Impact */}
            <div style={{ 
              marginBottom: '28px',
              background: 'rgba(255,149,0,0.08)',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid rgba(255,149,0,0.2)'
            }}>
              <h4 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                color: '#FF9500',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '12px'
              }}>
                Impact
              </h4>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {selectedProject.impact.map((item, i) => (
                  <li key={i} style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '15px',
                    color: '#fff',
                    marginBottom: '8px',
                    paddingLeft: '20px',
                    position: 'relative',
                    fontWeight: 500
                  }}>
                    <span style={{ position: 'absolute', left: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Tech Stack */}
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.5)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '12px'
              }}>
                Tech Stack
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedProject.techStack.map((tech, i) => (
                  <span key={i} style={{
                    background: 'rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.8)',
                    padding: '8px 14px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontFamily: "'DM Sans', sans-serif"
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Blog Link if exists */}
            {selectedProject.blogLink && (
              <a 
                href={selectedProject.blogLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#FF9500',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '14px',
                  textDecoration: 'none'
                }}
              >
                Read AWS Blog Post →
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

const SkillsSection = () => (
  <section id="skills" style={{ padding: '100px 60px', background: 'rgba(255,255,255,0.02)' }}>
    <div style={{ display: 'flex', gap: '80px' }}>
      {/* Skills */}
      <div style={{ flex: 1 }}>
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '48px',
          fontWeight: 700,
          color: '#fff',
          marginBottom: '48px',
          letterSpacing: '-1px'
        }}>
          Skills & Technologies
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h4 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                fontWeight: 600,
                color: '#FF9500',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '12px'
              }}>
                {category}
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {items.map((skill, i) => (
                  <span key={i} style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.8)',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontFamily: "'DM Sans', sans-serif"
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Certifications */}
      <div style={{ width: '400px' }}>
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '32px',
          fontWeight: 700,
          color: '#fff',
          marginBottom: '32px'
        }}>
          8x AWS Certified
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {certifications.map((cert, i) => (
            <div key={i} style={{
              background: 'rgba(255,149,0,0.08)',
              border: '1px solid rgba(255,149,0,0.2)',
              borderRadius: '12px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px'
            }}>
              <span style={{ fontSize: '24px' }}>{cert.icon}</span>
              <div>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '14px',
                  color: '#fff',
                  fontWeight: 500,
                  marginBottom: '2px'
                }}>
                  {cert.name}
                </p>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.5)'
                }}>
                  {cert.level}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section id="testimonials" style={{ padding: '100px 60px' }}>
    <h2 style={{
      fontFamily: "'Syne', sans-serif",
      fontSize: '48px',
      fontWeight: 700,
      color: '#fff',
      marginBottom: '16px',
      letterSpacing: '-1px'
    }}>
      What Leaders Say
    </h2>
    <p style={{
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '18px',
      color: 'rgba(255,255,255,0.6)',
      marginBottom: '60px'
    }}>
      Feedback from AWS leadership during my internship
    </p>
    
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
      {testimonials.map((t, i) => (
        <div key={i} style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '20px',
          padding: '36px'
        }}>
          <div style={{
            fontSize: '48px',
            color: '#FF9500',
            fontFamily: 'Georgia, serif',
            lineHeight: 1,
            marginBottom: '20px'
          }}>
            "
          </div>
          
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '16px',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.8,
            marginBottom: '28px'
          }}>
            {t.quote}
          </p>
          
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
            <p style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '16px',
              fontWeight: 600,
              color: '#fff',
              marginBottom: '4px'
            }}>
              {t.name}
            </p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              color: '#FF9500',
              marginBottom: '2px'
            }}>
              {t.role}
            </p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              color: 'rgba(255,255,255,0.5)'
            }}>
              {t.relationship} · {t.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" style={{ 
    padding: '100px 60px',
    background: 'linear-gradient(to bottom, rgba(255,149,0,0.05), transparent)',
    textAlign: 'center'
  }}>
    <h2 style={{
      fontFamily: "'Syne', sans-serif",
      fontSize: '48px',
      fontWeight: 700,
      color: '#fff',
      marginBottom: '16px'
    }}>
      Let's Build Something
    </h2>
    <p style={{
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '18px',
      color: 'rgba(255,255,255,0.6)',
      marginBottom: '40px',
      maxWidth: '500px',
      margin: '0 auto 40px'
    }}>
      Open to discussing cloud architecture challenges, new opportunities, or just connecting.
    </p>
    
    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
      <a href="mailto:xxx@gmail.com" style={{
        background: '#FF9500',
        color: '#000',
        padding: '16px 32px',
        borderRadius: '8px',
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '14px',
        fontWeight: 600,
        textDecoration: 'none'
      }}>
        Email Me
      </a>
      <a href="https://linkedin.com/in/adeogo-olajide" target="_blank" rel="noopener noreferrer" style={{
        background: 'transparent',
        color: '#fff',
        padding: '16px 32px',
        borderRadius: '8px',
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '14px',
        fontWeight: 500,
        textDecoration: 'none',
        border: '1px solid rgba(255,255,255,0.3)'
      }}>
        LinkedIn
      </a>
    </div>
    
    <p style={{
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '14px',
      color: 'rgba(255,255,255,0.4)',
      marginTop: '40px'
    }}>
      Austin, Texas · Open to relocation · 908-367-1220
    </p>
  </section>
);

// Main App
export default function AdeogosPortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  
  return (
    <div style={{
      background: '#0a0a0f',
      minHeight: '100vh',
      color: '#fff'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        ::selection {
          background: #FF9500;
          color: #000;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0a0a0f;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(255,149,0,0.3);
          border-radius: 4px;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <CareerTimeline />
      <ProjectsSection />
      <SkillsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
