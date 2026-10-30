export const fiverr = 'https://www.fiverr.com/usamah171';
export const developerCredential = 'https://www.credly.com/earner/earned/badge/6b9d9b61-565b-4010-af72-05d58862f423';

export const offerings = [
  {
    "id": "architecture",
    "title": "Salesforce architecture & advisory",
    "short": "Resolve the design before committing to delivery.",
    "copy": "Make platform decisions with a clear view of your business process, data, constraints and the systems around Salesforce.",
    "deliverables": [
      "Current-state system and process map",
      "Architecture decision records and solution blueprint",
      "Prioritized delivery roadmap and acceptance criteria"
    ],
    "boundary": "Start with a focused discovery or design review. Delivery scope and production changes are agreed separately.",
    "service": "Architecture & advisory",
    "icon": "architecture",
    "fit": "A new implementation, a difficult platform decision or an org that has become hard to change.",
    "steps": [
      "Understand the system",
      "Compare the options",
      "Agree the blueprint"
    ],
    "projects": [
      "A phased CRM modernization roadmap",
      "An architecture review before a major implementation"
    ]
  },
  {
    "id": "security",
    "title": "Security, identity & access",
    "short": "Give people and integrations the access they need.",
    "copy": "Review Salesforce sharing, permissions, identity flows and integration trust boundaries. Translate the findings into a practical remediation plan and agreed configuration changes.",
    "deliverables": [
      "Role, permission-set and sharing model review",
      "SSO and integration identity design",
      "Prioritized access findings and verification scenarios"
    ],
    "boundary": "A scoped Salesforce architecture and configuration review. Penetration testing, formal compliance certification and a managed security operations service are not included.",
    "service": "Security, identity & access",
    "icon": "architecture",
    "fit": "Growing teams, sensitive records, external users or integrations with excessive access.",
    "steps": [
      "Map the identities",
      "Review the boundaries",
      "Verify the access"
    ],
    "projects": [
      "Redesign permissions after a team restructure",
      "Plan SSO and service-account access for a connected app"
    ]
  },
  {
    "id": "integration",
    "title": "MuleSoft & API integration",
    "short": "Keep business information moving between systems.",
    "copy": "Design and implement bounded API integrations between Salesforce and the applications your teams depend on, including MuleSoft where it fits the environment.",
    "deliverables": [
      "API contracts, field mappings and authentication design",
      "Error handling, retries and reconciliation approach",
      "Integration implementation, test evidence and runbook"
    ],
    "boundary": "The proposal confirms connected systems, supported operations, volumes, licenses and operational ownership.",
    "service": "MuleSoft & API integration",
    "icon": "architecture",
    "fit": "Repeated data entry, disconnected applications or integrations that are difficult to recover when they fail.",
    "steps": [
      "Define the contract",
      "Connect the systems",
      "Reconcile the result"
    ],
    "projects": [
      "Connect CRM customer records with an ERP",
      "Replace a fragile point-to-point integration"
    ]
  },
  {
    "id": "data",
    "title": "Data architecture & migration",
    "short": "Build a reliable foundation for reporting and AI.",
    "copy": "Plan Salesforce data models, ownership rules and migration work. For Data 360, start with source readiness, identity-resolution requirements and an architecture assessment before choosing an implementation scope.",
    "deliverables": [
      "Object relationships, field ownership and data dictionary",
      "Migration mappings, reconciliation and exception plan",
      "Data-quality rules and repeatable acceptance checks"
    ],
    "boundary": "Data volumes, source quality, approved handling, migration tooling and cutover responsibilities are confirmed during discovery.",
    "service": "Data architecture & migration",
    "icon": "architecture",
    "fit": "A CRM migration, duplicated records, unreliable reporting or unclear ownership of business data.",
    "steps": [
      "Understand the sources",
      "Map and reconcile",
      "Plan the cutover"
    ],
    "projects": [
      "Plan a legacy CRM migration into Salesforce",
      "Review a customer data model before adding AI",
      "Assess Data 360 source and identity-resolution readiness"
    ]
  },
{
  "id": "agentforce",
  "title": "Agentforce readiness & solution design",
  "short": "Decide what an agent should do before building it.",
  "copy": "Assess a candidate Salesforce AI use case, its data and action boundaries, and the path to a controlled pilot. Compare native Agentforce with a custom Claude integration where the business needs a choice.",
  "deliverables": [
    "Use-case fit and architecture options",
    "Knowledge, data, access and action-readiness review",
    "Pilot scope, evaluation plan and human escalation design"
  ],
  "boundary": "An advisory and readiness engagement. Product access, licensing and a separately validated pilot are required before committing to implementation.",
  "service": "Agentforce readiness & design",
  "icon": "architecture",
  "fit": "An organisation considering Salesforce AI that needs a bounded use case and a realistic pilot plan.",
  "steps": [
    "Define the use case",
    "Check data and access",
    "Design the pilot"
  ],
  "projects": [
    "Assess a service knowledge assistant before a pilot",
    "Compare Agentforce and Claude for a CRM workflow"
  ]
},
  {
    "id": "ai",
    "title": "Claude AI & governed workflows",
    "short": "Move from a promising experiment to a testable workflow.",
    "copy": "Apply Claude to a specific CRM or development task with approved context, clear permissions, human review and examples that define acceptable output.",
    "deliverables": [
      "Workflow design, tool permissions and review points",
      "Claude API or compatible MCP integration within scope",
      "Evaluation examples, failure cases and handover guidance"
    ],
    "boundary": "Provider compatibility, data permissions and usage costs are checked first. Autonomous production actions and additional platforms need explicit scope.",
    "service": "Claude AI & governed workflows",
    "icon": "ai",
    "fit": "A repeatable knowledge task, a CRM drafting workflow or a development team adopting Claude Code.",
    "steps": [
      "Choose a bounded task",
      "Connect approved context",
      "Evaluate the output"
    ],
    "projects": [
      "Draft account briefs from approved CRM context",
      "Configure Claude Code with project instructions and MCP tools"
    ]
  },
  {
    "id": "location",
    "title": "ArcGIS & location intelligence",
    "short": "Bring geography into the decisions made in your CRM.",
    "copy": "Connect Salesforce records with ArcGIS maps and supported location operations, from address geocoding to feature queries and routing context.",
    "deliverables": [
      "Map experience and CRM record context",
      "Agreed geocoding, feature query or routing operation",
      "Field mappings, permissions, tests and handover"
    ],
    "boundary": "ArcGIS licensing, org compatibility and geographic data permissions are confirmed first. Salesforce Maps is a separate product.",
    "service": "ArcGIS & location intelligence",
    "icon": "location",
    "fit": "Teams managing assets, service locations, territories or records whose location changes the next action.",
    "steps": [
      "Locate the records",
      "Connect the map",
      "Support the decision"
    ],
    "projects": [
      "Show service assets on a Salesforce record map",
      "Add geocoding and location validation to address entry"
    ]
  },
  {
    "id": "delivery",
    "title": "Salesforce engineering & releases",
    "short": "Deliver changes your team can test and maintain.",
    "copy": "Build Apex, Lightning components and automation within an agreed architecture. Improve the route from development through testing and release.",
    "deliverables": [
      "Scoped Apex, LWC or automation implementation",
      "Testing approach and deployment dependency review",
      "Release checklist, rollback considerations and documentation"
    ],
    "boundary": "Target environments, existing technical debt, release tooling and ongoing support are defined in the proposal.",
    "service": "Salesforce engineering & releases",
    "icon": "architecture",
    "fit": "A complex workflow, a custom interface, a brittle release process or changes that need clear technical ownership.",
    "steps": [
      "Design the change",
      "Build and test",
      "Release and hand over"
    ],
    "projects": [
      "Build an LWC workspace for a multi-step process",
      "Review a release pipeline and deployment dependencies",
      "Improve Service Cloud case routing and agent handover",
      "Simplify Sales Cloud opportunity stages and approvals"
    ]
  },
  {
    "id": "development",
    "title": "Portals, websites & connected apps",
    "short": "Create a useful experience around your business systems.",
    "copy": "Build customer-facing websites, business portals and connected applications, including Salesforce Experience Cloud where appropriate.",
    "deliverables": [
      "User journeys and responsive interface design",
      "Scoped portal, website or application implementation",
      "Integration, accessibility checks and operational handover"
    ],
    "boundary": "Authentication, hosting, payment systems, content, accessibility targets and support are scoped for each project.",
    "service": "Portals, websites & connected apps",
    "icon": "development",
    "fit": "Customers or staff need a clearer way to submit information, check progress or work with business data.",
    "steps": [
      "Map the user journey",
      "Build the experience",
      "Connect the follow-up"
    ],
    "projects": [
      "Create an Experience Cloud customer self-service portal",
      "Build a business website connected to an enquiry workflow"
    ]
  }
] as const;

export const credentials = [
  { group: 'Salesforce architecture', issuer: 'Salesforce', items: ['Salesforce Certified Application Architect', 'Salesforce Certified System Architect', 'Salesforce Certified Platform Data Architect', 'Salesforce Certified Platform Integration Architect', 'Salesforce Certified Platform Identity and Access Management Architect', 'Salesforce Certified Platform Sharing and Visibility Architect', 'Salesforce Certified Platform Development Lifecycle and Deployment Architect'] },
  { group: 'Salesforce development & administration', issuer: 'Salesforce', items: ['Salesforce Certified Platform Developer', 'Salesforce Certified Platform Developer II', 'Salesforce Certified Platform Administrator', 'Salesforce Certified Platform App Builder'] },
  { group: 'MuleSoft integration', issuer: 'Salesforce / MuleSoft', items: ['Salesforce Certified MuleSoft Developer', 'Salesforce Certified MuleSoft Platform Integration Architect'] },
  { group: 'Claude architecture & development', issuer: 'Anthropic', items: ['Claude Certified Architect - Foundations', 'Claude Certified Developer - Foundations'] },
];

export type WorkItem = {id:string; category:string; kind:string; title:string; description:string; challenge:string; approach:string; evidence:string; outputs:string[]; download?:string; visual:'map'|'blueprint'|'code'|'web'};
export const workItems: WorkItem[] = [
  {id:'claude-workflow',category:'AI workflows',kind:'Personal demonstration',title:'From an issue to a tested change',description:'A synthetic repository, a focused bug and explicit boundaries for Claude and MCP.',challenge:'A priority-normalization function treated surrounding whitespace inconsistently. The demonstration needed to show both a useful correction and exactly what had been tested.',approach:'A synthetic issue and repository were used for a Claude web-chat suggestion. The proposed correction was tested locally. A separate filesystem MCP client check examined tool discovery, permitted reads and rejected paths.',evidence:'The local code test suite went from four passing / one failing to five passing. MCP protocol checks were separate from the chat: this does not claim an authenticated Claude Code-to-MCP end-to-end run.',outputs:['Project instructions and synthetic issue','Before/after test evidence','MCP verification boundaries and handover sample'],download:'/samples/claude-workflow-delivery-sample.pdf',visual:'code'},
  {id:'architecture-blueprint',category:'Architecture',kind:'Sample deliverable',title:'A decision before implementation',description:'An example of the decision memo, diagrams and phased roadmap a focused review can produce.',challenge:'A team needs to choose a practical Salesforce solution before committing to implementation. Requirements, alternatives and unresolved assumptions need to be visible.',approach:'A fictional scenario is structured into a scoped architecture decision: requirements, options, data and integration boundaries, risks and next validation steps.',evidence:'This is a synthetic delivery sample, not a completed client engagement, security certification or exhaustive org audit.',outputs:['Written decision and alternatives','Solution-boundary diagram','Prioritized risks and next steps'],download:'/samples/salesforce-architecture-sample.pdf',visual:'blueprint'},
  {id:'location-context',category:'Location systems',kind:'Service concept',title:'CRM records with location context',description:'An illustrated ArcGIS–Salesforce flow for assets, address geocoding and map context.',challenge:'Location data and CRM records often sit in separate views. A proposed integration should explain which records, fields and operations connect them.',approach:'The concept connects an agreed Salesforce object to an ArcGIS map and one supported service operation. Authentication, field mapping and write approval are defined before implementation.',evidence:'The map on this site is an original illustration using fictional locations. It is not a live ArcGIS connection or evidence of a client deployment.',outputs:['Defined record and field scope','Map and service-operation design','Acceptance and handover plan'],visual:'map'},
  {id:'avorlume-site',category:'Web & software',kind:'This website',title:'A studio with a connected enquiry flow',description:'A responsive portfolio with service selection, a project brief and an email enquiry route.',challenge:'A portfolio should do more than introduce services. It needs to help visitors understand fit and make a clear next step.',approach:'This site combines dedicated services, work and About pages with an enquiry form and a direct email contact route.',evidence:'You are exploring the delivered interface. Project briefs are accepted through Formspree and stored in a private dashboard. Email delivery to Mansoor’s verified inbox was tested on 30 October 2026. ',outputs:['Responsive pages and accessible navigation','Project selection and enquiry form','Clear contact route and privacy notice'],visual:'web'},
];
