import { Project } from '../core/models/project';

export const PROJECTS: Project[] = [
    {
        slug: 'oepar',
        name: 'OEPAR — Public Evidence Platform',
        eyebrow: 'Civic Tech · Public Finance · Evidence Traceability',

        type: 'product',

        description:
            'An independent public-interest platform that connects public claims, spending, procurement and measurable outcomes to the original evidence behind them.',

        summary:
            'OEPAR — Organisation for Evidence, Public Accountability and Results — collects, preserves and normalizes public records so journalists, researchers, NGOs and citizens can inspect evidence chains across multiple European jurisdictions.',

        role: 'Founder & Full-Stack Engineer',

        status: 'Deployed',

        technologies: [
            'Angular',
            'TypeScript',
            'Java',
            'Spring Boot',
            'Spring Security',
            'PostgreSQL',
            'Flyway',
            'Docker',
            'Northflank',
            'REST APIs',
            'Apache PDFBox',
            'Apache POI',
            'JSoup',
            'Testcontainers',
            'Internationalization'
        ],

        highlights: [
            'Designed a public-interest evidence platform for tracing claims, contracts, spending, delivery and results',
            'Integrated public procurement and financial sources across France, Belgium, the United Kingdom, England and Wales',
            'Built source adapters and ingestion workflows for official APIs, datasets, documents and statistical records',
            'Preserved raw source snapshots and SHA-256 checksums to support traceability and detect later revisions',
            'Normalized heterogeneous public records into searchable and comparable evidence',
            'Built public finance, procurement, investigation, programme and accountability-trace experiences',
            'Created a private editorial and evidence-administration workspace',
            'Implemented bilingual English and French interfaces',
            'Added PostgreSQL full-text search and versioned database migrations with Flyway',
            'Secured administrative workflows with Spring Security, CSRF protection and request rate limiting',
            'Implemented document extraction for PDF, spreadsheet, CSV and HTML sources',
            'Containerized and deployed the Angular frontend and Spring Boot backend on Northflank'
        ],

        challenge:
            'Public spending evidence is fragmented across jurisdictions, portals, APIs, spreadsheets, PDFs and changing government websites. Records often use different formats and accounting scopes, making it difficult to connect a public claim to the contracts, spending, delivery evidence and limitations behind it without overstating what the data proves.',

        solution:
            'I built OEPAR as an Angular and Spring Boot platform backed by PostgreSQL. Dedicated adapters collect official public records, preserve raw snapshots and checksums, normalize evidence into a consistent model and expose reproducible links between claims, sources, calculations and limitations. A separate editorial workspace supports review, monitoring, corrections and publication workflows.',

        result:
            'OEPAR is deployed on Northflank with mapped evidence sources across several European jurisdictions and a foundation for collaboration with journalists, NGOs, researchers and public-accountability organizations.',

        sections: [
            {
                title: 'Public evidence, not unsupported conclusions',
                content:
                    'OEPAR follows public claims from announcement to contract, spending, delivery and measurable results. Each conclusion remains connected to its original sources, while missing evidence, incompatible scopes and methodological limits stay visible to the reader.',
                image:
                    '/images/projects/oepar/oepar-home.png'
            },
            {
                title: 'Evidence methodology',
                content:
                    'The platform separates source records, normalized data, deterministic calculations, observations, interpretations and limitations. Raw snapshots and checksums preserve provenance so that later source changes and corrections can be identified rather than silently replacing earlier evidence states.',
                image:
                    '/images/projects/oepar/methodology-diagram.png'
            },
            {
                title: 'Multi-jurisdiction source coverage',
                content:
                    'OEPAR maps procurement, budget execution, annual accounts, tax receipts and statistical evidence from France, Belgium, the United Kingdom and Wales, while explicitly showing where comparable evidence is unavailable or cannot safely be attributed to a narrower jurisdiction.',
                image:
                    '/images/projects/oepar/oepar-sources.png'
            },
            {
                title: 'Data ingestion and normalization',
                content:
                    'The Spring Boot backend uses dedicated source adapters and importers to process official APIs, CSV files, spreadsheets, PDFs and HTML documents. Heterogeneous records are normalized into PostgreSQL and indexed for evidence search and comparison.',
                image:
                    '/images/projects/oepar/oepar-search.png'
            },
            {
                title: 'Editorial and investigation workflows',
                content:
                    'A private operations workspace supports investigation discovery, editorial drafts, programme candidates, evidence feedback, source monitoring, import previews and transparent revisions to published work.',
                image:
                    '/images/projects/oepar/oepar-investigations.png'
            },
            {
                title: 'Security and deployment readiness',
                content:
                    'Administrative routes are protected with Spring Security, session-based authentication, CSRF protection and endpoint rate limits. The containerized frontend and backend are deployed on Northflank, database changes are managed through Flyway, and integration tests use Testcontainers with PostgreSQL.',
                image:
                    '/images/projects/oepar/oepar-traces.png'
            }
        ],

        featured: true,

        liveUrl:
            'https://p01--oepar-front--kj4dhp54lvvg.code.run/',

        liveLabel:
            'Visit OEPAR',

        coverImage:
            '/images/projects/oepar/oepar-home.png',

        screenshots: [
            '/images/projects/oepar/oepar-home.png',
            '/images/projects/oepar/oepar-search.png',
            '/images/projects/oepar/oepar-investigations.png',
            '/images/projects/oepar/oepar-treasury.png',
            '/images/projects/oepar/oepar-sources.png',
            '/images/projects/oepar/oepar-traces.png',
            '/images/projects/oepar/oepar-join.png'
        ],

        architectureImage:
            '/images/projects/oepar/methodology-diagram.png'
    },

    {
        slug: 'studevia',
        name: 'Studevia',
        eyebrow: 'SaaS · Education · Visa Preparation',

        type: 'product',

        description:
            'A full-stack SaaS platform designed to help international students organize and manage their study and visa-preparation journey.',

        summary:
            'Studevia brings student onboarding, visa-preparation workflows, document handling, interview preparation and assistant support into one platform.',

        role: 'Founder & Full-Stack Engineer',

        status: 'Beta / Validation',

        technologies: [
            'Angular',
            'TypeScript',
            'Java',
            'Spring Boot',
            'Spring Security',
            'MySQL',
            'Docker',
            'Docker Compose',
            'Caddy',
            'OVH Cloud',
            'Cloudflare',
            'ClamAV',
            'Cloudinary',
            'Brevo',
            'Stripe',
            'Stripe Java SDK'
        ],

        highlights: [
            'Designed and developed the Angular frontend and Spring Boot backend',
            'Implemented authentication and role-based application flows',
            'Built student, assistant and administrative workflows',
            'Implemented document upload, review and validation functionality',
            'Integrated malware scanning for uploaded documents',
            'Built REST APIs for the main platform workflows',
            'Containerized the application with Docker and Docker Compose',
            'Configured Caddy as reverse proxy with HTTPS',
            'Configured DNS, email-related infrastructure and production routing',
            'Implemented cloud backup infrastructure',
            'Integrated Cloudinary as temporary cloud storage for beta media/file handling',
            'Integrated Stripe payments using the Stripe Java SDK in the Spring Boot backend',
            'Kept Stripe secret credentials on the server side rather than exposing them to the Angular client',
            'Deployed the beta environment to OVH Cloud'
        ],

        challenge:
            'Building a production-ready platform required more than developing the application itself. The system needed secure document handling, authentication, multiple user roles, reliable deployment, HTTPS, backups and infrastructure capable of supporting a real beta environment.',

        solution:
            'I designed the application as a containerized Angular and Spring Boot stack, added MySQL persistence, secured uploads with malware scanning, configured Caddy for HTTPS and reverse proxying, connected Cloudflare for DNS and deployed the platform on OVH Cloud with backup infrastructure.',

        result:
            'Studevia reached a deployed beta environment that can be used for product validation, workflow testing and continued development based on real user feedback.',

        sections: [
            {
                title: 'The problem',
                content:
                    'International students often have to manage admission requirements, visa preparation, supporting documents, interview preparation and communication across multiple disconnected tools. Studevia was designed to centralize that journey and make the process easier to follow.'
            },

            {
                title: 'Student journey',
                content:
                    'The student experience is structured around the different stages of the study and visa-preparation process. Users can manage their profile, follow their progress, upload required documents and access preparation tools from a centralized dashboard.',
                image:
                    '/images/projects/studevia/student-dashboard.png'
            },

            {
                title: 'Document workflow',
                content:
                    'Documents are uploaded through the platform and can be reviewed as part of the student journey. The upload flow was designed with security in mind, including malware scanning before documents are accepted into the workflow.',
                image:
                    '/images/projects/studevia/documents.png'
            },

            {
                title: 'Assistant and administrative workflows',
                content:
                    'The application supports multiple roles so students can receive guidance while assistants and administrators can review progress, manage platform workflows and support users through the preparation process.',
                image:
                    '/images/projects/studevia/assistant-dashboard.png'
            },

            {
                title: 'Payments and subscriptions',
                content:
                    'Studevia integrates Stripe through the Stripe Java SDK in the Spring Boot backend. Sensitive Stripe credentials are kept server-side, while the Angular frontend communicates with backend payment endpoints. This keeps secret keys out of the browser and allows payment and subscription logic to be handled securely on the server.',
                image:
                    '/images/projects/studevia/payments.png'
            },

            {
                title: 'Interview preparation',
                content:
                    'Studevia includes interview-preparation functionality designed to help students practice before visa or admission interviews. The feature is built as part of the wider student-preparation workflow rather than as a standalone tool.',
                image:
                    '/images/projects/studevia/interview-preparation.png'
            },

            {
                title: 'Production deployment',
                content:
                    'Studevia is deployed as a multi-service Docker environment on OVH Cloud. The production stack includes the Spring Boot backend, Angular web application, MySQL database and ClamAV malware-scanning service, with container health checks used to verify service availability.',
                image:
                    '/images/projects/studevia/production-deployment.png'
            }
        ],

        featured: true,

        liveUrl:
            'https://beta.studevia.com/',

        liveLabel:
            'View Beta',

        coverImage:
            '/images/projects/studevia/studevia-cover.png',

        screenshots: [
            '/images/projects/studevia/home.png',
            '/images/projects/studevia/student-dashboard.png',
            '/images/projects/studevia/documents.png',
            '/images/projects/studevia/interview-preparation.png'
        ],

        architectureImage:
            '/images/projects/studevia/architecture.png'
    },

    {
        slug: 'tsdb',
        name: 'TSDB — The Streaming Database',
        eyebrow: 'Streaming · Movies · TV · Discovery',

        type: 'product',

        description:
            'A streaming discovery platform for movies, TV shows, actors and live TV channels, combining rich media metadata with search, recommendations and selected free-to-watch content.',

        summary:
            'TSDB is a deployed entertainment discovery platform inspired by services such as TMDB, with enhanced search, actor filmographies, recommendations, live IPTV channels and selected legal free-streaming options.',

        role: 'Founder & Full-Stack Developer',

        status: 'Deployed',

        technologies: [
            'Angular',
            'TypeScript',
            'Java',
            'Spring Boot',
            'Oracle Autonomous Database',
            'Redis',
            'REST APIs',
            'TMDB API',
            'Nginx',
            'Cloudflare'
        ],

        highlights: [
            'Built movie, TV show, actor, company and live-channel discovery flows',
            'Implemented unified search across movies, TV shows, actors, production companies and channels',
            'Added voice-powered search for faster content discovery',
            'Built actor profile pages with filmography and character roles',
            'Built company pages for discovering titles associated with studios and production companies',
            'Integrated recommendations and similar-content discovery',
            'Integrated TMDB metadata, ratings and reviews',
            'Added access to selected free-to-watch movies and series where legally available',
            'Integrated more than 8,000 publicly available IPTV channels',
            'Implemented category-based filtering for movies and TV content',
            'Implemented Redis caching to reduce repeated data retrieval and improve response performance',
            'Connected the application to Oracle Autonomous Database',
            'Deployed the platform behind Nginx and Cloudflare'
        ],

        challenge:
            'Entertainment information is fragmented across different services, while users often need to search separately for movies, TV shows, actors, recommendations and live channels.',

        solution:
            'I built TSDB as a unified discovery platform that combines structured entertainment metadata, actor filmographies, recommendations, search and selected legal streaming sources in a single interface.',

        result:
            'TSDB is deployed as a live product and provides a working entertainment discovery experience across movies, television, people and live channels without requiring a user account.',

        sections: [
            {
                title: 'Movie and TV discovery',
                content:
                    'TSDB provides structured information about movies and television shows, including synopsis, cast, character roles, ratings, related titles and recommendations. The experience is designed to make it easy to move from one title to another through connected content.',
                image:
                    '/images/projects/tsdb/movie-details.png'
            },

            {
                title: 'People and filmographies',
                content:
                    'Users can search for actors and open dedicated profile pages containing biography information, social links and a visual list of productions they have contributed to, including the roles they played.',
                image:
                    '/images/projects/tsdb/person-details.png'
            },

            {
                title: 'Studios and production companies',
                content:
                    'Production companies are also first-class discovery entities in TSDB. Users can search for studios and companies and explore the movies and television productions associated with them, creating another path for discovering content beyond titles, genres and actors.',
                image:
                    '/images/projects/tsdb/company-details.png'
            },

            {
                title: 'Multi-entity search and voice search',
                content:
                    'TSDB provides a unified search experience across movies, TV shows, actors, production companies and live TV channels. Users can search for a title, find an actor and explore their filmography, or search for companies such as Marvel, Lionsgate or Sony to discover associated productions. Voice search provides an additional hands-free way to perform searches.',
                image:
                    '/images/projects/tsdb/search.png'
            },

            {
                title: 'Recommendations and similar content',
                content:
                    'Movie and TV detail pages expose related and similar titles so users can continue discovering content from the same page rather than restarting a search.',
                image:
                    '/images/projects/tsdb/recommendations.png'
            },

            {
                title: 'Live TV and IPTV',
                content:
                    'The platform includes access to more than 8,000 publicly available IPTV channels sourced from open IPTV lists. Users can browse and search channels directly from the application.',
                image:
                    '/images/projects/tsdb/live-tv.png'
            },

            {
                title: 'Selected free streaming',
                content:
                    'Some movies and series can be watched directly where a legitimate free source is available. The platform does not attempt to provide unauthorized access to copyrighted content.',
                image:
                    '/images/projects/tsdb/watch.png'
            },

            {
                title: 'Data and backend',
                content:
                    'TSDB combines external entertainment metadata with backend services written in Java and persistence using Oracle Autonomous Database. The Angular frontend communicates with backend services through REST APIs.',
                image:
                    '/images/projects/tsdb/backend.png'
            },

            {
                title: 'Caching and performance',
                content:
                    'Redis is used as a caching layer to reduce repeated retrieval of frequently requested data and improve response times. This helps avoid unnecessary calls to external services and reduces load on the backend for data that does not need to be fetched again on every request.',
                image:
                    '/images/projects/tsdb/cache.png'
            },

            {
                title: 'Production deployment',
                content:
                    'The application is deployed as a live web product using Angular, Java, Nginx and Cloudflare, with Oracle Autonomous Database providing persistent data storage.',
                image:
                    '/images/projects/tsdb/deployment.png'
            }
        ],

        featured: true,

        liveUrl:
            'https://www.tsdb.pw/home',

        liveLabel:
            'Visit TSDB',

        coverImage:
            '/images/projects/tsdb/tsdb-cover.png',

        screenshots: [
            '/images/projects/tsdb/home.png',
            '/images/projects/tsdb/person-details.png',
            '/images/projects/tsdb/movie-details.png',
            '/images/projects/tsdb/live-tv.png',
            '/images/projects/tsdb/search.png'
        ],

        architectureImage:
            '/images/projects/tsdb/architecture.png'
    },

    {
        slug: 'wedding-invitation',

        name: 'Digital Wedding Invitation Platform',

        eyebrow: 'Events · RSVP · QR Code · Guest Management',

        type: 'product',

        description:
            'A complete digital wedding invitation and guest-management platform combining a personalized event website with RSVP, confirmation PDFs, transactional email and QR-based guest admission.',

        summary:
            'A deployed wedding platform that guides guests from invitation and RSVP through personalized confirmation and QR-code check-in, while keeping secret-dependent services behind secure server-side endpoints.',

        role: 'Full-Stack Developer',

        status: 'Deployed',

        technologies: [
            'Angular',
            'TypeScript',
            'Firebase',
            'Firestore',
            'Firebase Hosting',
            'Vercel',
            'Resend',
            'Dopio',
            'QR Code',
            'jsPDF',
            'html2canvas',
            'Responsive Design'
        ],

        highlights: [
            'Built a responsive digital wedding invitation experience',
            'Implemented a complete RSVP workflow for invited guests',
            'Supported attendance, plus-one information, meal choice and guest messages',
            'Stored and managed RSVP and guest data with Firebase',
            'Generated personalized confirmation documents and unique QR codes',
            'Introduced Dopio for reliable server-side PDF generation after Safari compatibility issues with client-side PDF generation',
            'Integrated Resend for transactional email delivery',
            'Implemented secure Vercel server-side endpoints for operations requiring private credentials',
            'Kept Dopio and Resend service tokens out of the Angular client by storing them as Vercel environment variables',
            'Built QR-based guest admission and check-in functionality',
            'Implemented duplicate-entry detection for already checked-in guests',
            'Created an administrative guest-management interface',
            'Added CSV export for guest and RSVP data',
            'Designed responsive desktop and mobile experiences'
        ],

        challenge:
            'The application needed to manage RSVP data, personalized confirmations, transactional email and QR-based event admission reliably across different browsers. Client-side PDF generation introduced compatibility issues on Safari, while external services such as Dopio and Resend required private credentials that could not safely be exposed in the Angular frontend.',

        solution:
            'I kept the public Angular application and Firebase data workflow on Firebase, while introducing secure server-side endpoints on Vercel for secret-dependent operations. The frontend calls Vercel when it needs PDF generation or transactional email, and Vercel securely accesses Dopio and Resend using environment-stored credentials. This created a clear security boundary between the browser and private third-party service tokens.',

        result:
            'The platform was deployed for a real wedding and provided a complete digital guest journey from invitation through RSVP, confirmation, email delivery and QR-based event admission, while maintaining a secure separation between client-side functionality and private service credentials.',

        sections: [
            {
                title: 'The invitation experience',
                content:
                    'The application presents the couple, their story, event details and photo gallery through a responsive digital wedding experience designed for both desktop and mobile visitors.',
                image:
                    '/images/projects/wedding-invitation/home.png'
            },

            {
                title: 'RSVP workflow',
                content:
                    'Guests can confirm whether they will attend and provide the information required for the event, including contact details, attendance status, plus-one information, meal selection and an optional message for the couple.',
                image:
                    '/images/projects/wedding-invitation/rsvp.png'
            },

            {
                title: 'Firebase data workflow',
                content:
                    'Firebase provides the main application data layer for RSVP and guest information. The Angular application reads and writes guest-related data while the administrative interface uses the same data source to manage responses and event attendance.',
                image:
                    '/images/projects/wedding-invitation/firebase-data.png'
            },

            {
                title: 'Personalized confirmation',
                content:
                    'After a guest completes the RSVP process, the platform creates a personalized confirmation containing the information required for the event and a unique QR code for admission.',
                image:
                    '/images/projects/wedding-invitation/confirmation.png'
            },

            {
                title: 'Cross-browser PDF generation',
                content:
                    'The initial confirmation flow used client-side PDF generation with jsPDF and html2canvas. During testing, Safari introduced compatibility issues that made the generated documents unreliable. Dopio was therefore introduced as a server-side PDF generation solution to produce consistent confirmation documents across browsers.',
                image:
                    '/images/projects/wedding-invitation/pdf-generation.png'
            },

            {
                title: 'Secure server-side integrations',
                content:
                    'The Angular frontend does not contain the private credentials required by Dopio or Resend. Instead, it calls secure endpoints deployed on Vercel. Those endpoints store the service credentials as environment variables and communicate with the external services on behalf of the frontend.',
                image:
                    '/images/projects/wedding-invitation/vercel-security.webp'
            },

            {
                title: 'Transactional email',
                content:
                    'Resend is used for transactional guest communication. Email-related requests are sent through the Vercel server-side layer so the Resend API credentials remain private and are never exposed to the browser.',
                image:
                    '/images/projects/wedding-invitation/email.png'
            },

            {
                title: 'Guest check-in',
                content:
                    'Each confirmed guest receives a unique QR code that can be scanned at the venue. The check-in flow identifies the guest, records admission and detects when a QR code has already been used.',
                image:
                    '/images/projects/wedding-invitation/check-in.png'
            },

            {
                title: 'Guest administration',
                content:
                    'An administrative interface provides visibility into guest responses and attendance information. Guest data can also be exported as CSV for operational use before and during the event.',
                image:
                    '/images/projects/wedding-invitation/admin.png'
            },

            {
                title: 'Production architecture',
                content:
                    'The Angular application is hosted on Firebase, with Firebase also providing the guest and RSVP data layer. For operations requiring private service credentials, the frontend communicates with secure Vercel server-side endpoints. Those endpoints call Dopio for PDF generation and Resend for transactional email, keeping all sensitive tokens outside the client application.',
                image:
                    '/images/projects/wedding-invitation/deployment.webp'
            }
        ],

        featured: true,

        liveUrl:
            'https://sephora-wedding.web.app/',

        liveLabel:
            'View Live Site',

        coverImage:
            '/images/projects/wedding-invitation/wedding-invitation-cover.png',

        screenshots: [
            '/images/projects/wedding-invitation/home.png',
            '/images/projects/wedding-invitation/rsvp.png',
            '/images/projects/wedding-invitation/confirmation.png',
            '/images/projects/wedding-invitation/rsvp1.png',
            '/images/projects/wedding-invitation/admin.png'
        ],

        architectureImage:
            '/images/projects/wedding-invitation/architecture.png'
    },


    {
        slug: 'anet-patiss',
        name: 'Anet Patiss',
        eyebrow: 'Business · E-commerce · Order Management',

        type: 'client',

        description:
            'A full-stack business platform for a custom cake and pastry brand, combining service presentation, order workflows, payments, reviews, order tracking and administrative management.',

        summary:
            'Anet Patiss is a digital business platform designed to help customers discover services, place orders, track progress, make payments and interact with the brand through a more complete online experience.',

        role: 'Developer & Product Builder',

        status: 'Ready for Deployment',

        technologies: [
            'Angular',
            'TypeScript',
            'Java',
            'Spring Boot',
            'Spring Security',
            'MySQL',
            'Stripe',
            'Cloudinary',
            'Geoapify',
            'Brevo',
            'Cloudflare',
            'OVH',
            'REST APIs',
            'Responsive Design'
        ],

        highlights: [
            'Built a full-stack business platform with Angular and Spring Boot',
            'Implemented cake and service presentation for a real pastry business',
            'Built customer order workflows without requiring account creation',
            'Added optional customer registration and login',
            'Implemented order tracking for customer orders',
            'Integrated Stripe for secure payment workflows',
            'Integrated Cloudinary for product and portfolio media storage',
            'Integrated Geoapify for address and location-related features',
            'Integrated Brevo for customer email communication',
            'Created an administrative dashboard for business operations',
            'Implemented local customer reviews with future support for Google Reviews',
            'Designed a responsive experience for desktop and mobile'
        ],

        challenge:
            'The business needed more than a simple showcase website. Customers needed to discover cake services, place orders without unnecessary friction, track their order, make payments and leave reviews, while the business needed administrative tools to manage orders and customer interactions.',

        solution:
            'I built Anet Patiss as a full-stack Angular and Spring Boot platform backed by MySQL. The customer journey supports ordering with or without an account, secure payment through Stripe, media handling through Cloudinary, location-related support through Geoapify, customer communication through Brevo and operational management through an admin dashboard.',

        result:
            'The application is ready for deployment and gives the business a dedicated digital platform for customer acquisition, order handling, communication, payments and future service expansion.',

        sections: [
            {
                title: 'Business and service presentation',
                content:
                    'The platform presents the Anet Patiss brand, custom cake services and real work examples so potential customers can understand the business and evaluate its style before ordering.',
                image:
                    '/images/projects/anet-patiss/home.png'
            },

            {
                title: 'Order workflow',
                content:
                    'Customers can place orders directly through the platform without being forced to create an account. Registration and login remain optional for users who want a more personalized experience.',
                image:
                    '/images/projects/anet-patiss/order.png'
            },

            {
                title: 'Order tracking',
                content:
                    'The platform allows customers to follow the progress of an order after it has been placed, creating better transparency between the initial request and final delivery or collection.',
                image:
                    '/images/projects/anet-patiss/order-tracking.png'
            },

            {
                title: 'Payments',
                content:
                    'Stripe is integrated into the platform to support secure online payment workflows for customer orders.',
                image:
                    '/images/projects/anet-patiss/payments.png'
            },

            {
                title: 'Admin dashboard',
                content:
                    'An administrative dashboard provides tools for managing orders, customer activity, service content and operational workflows from a centralized interface.',
                image:
                    '/images/projects/anet-patiss/admin.jpeg'
            },

            {
                title: 'Media and portfolio management',
                content:
                    'Cloudinary is used to manage and deliver cake and business images, making it easier to maintain a visual portfolio without storing all media directly in the core application.',
                image:
                    '/images/projects/anet-patiss/cloudinary.png'
            },

            {
                title: 'Location and address services',
                content:
                    'Geoapify supports address and location-related functionality, which can help with customer location workflows and delivery-related information.',
                image:
                    '/images/projects/anet-patiss/location.png'
            },

            {
                title: 'Customer communication',
                content:
                    'Brevo is integrated to support customer email communication around order and business workflows.',
                image:
                    '/images/projects/anet-patiss/email.png'
            },

            {
                title: 'Customer reviews',
                content:
                    'The platform currently supports its own review workflow for customers. Because the business is still operating locally, this can be used immediately, with future plans to integrate or complement it with Google Reviews.',
                image:
                    '/images/projects/anet-patiss/review.png'
            },

            {
                title: 'Deployment readiness',
                content:
                    'The application is intended for deployment on OVH, with Cloudflare used at the edge for DNS and protection. The deployment architecture can later evolve further with Docker and a reverse proxy layer if needed.',
                image:
                    '/images/projects/anet-patiss/assistant.png'
            }
        ],

        featured: true,

        coverImage:
            '/images/projects/anet-patiss/anet-patiss-cover.png',

        screenshots: [
            '/images/projects/anet-patiss/home.png',
            '/images/projects/anet-patiss/order.png',
            '/images/projects/anet-patiss/order-tracking.png',
            '/images/projects/anet-patiss/admin.jpeg',
            '/images/projects/anet-patiss/footer.png',
            '/images/projects/anet-patiss/review.png'
        ],

        architectureImage:
            '/images/projects/anet-patiss/architecture.png'
    },

    {
        slug: 'euid',

        name: 'EUID — Evolutionary Unique Identifier',

        eyebrow: 'Open Source · Java · Distributed Systems',

        type: 'open-source',

        description:
            'A high-performance UUID v8 generator for distributed systems, designed to produce time-ordered, topology-aware and fully decodable identifiers.',

        summary:
            'EUID is an open-source Java library that combines timestamp ordering, distributed topology information and deterministic sequencing inside an RFC-compatible 128-bit UUID structure.',

        role: 'Creator & Open-Source Maintainer',

        status: 'Open Source · v0.2.0',

        technologies: [
            'Java',
            'Maven',
            'UUID v8',
            'Distributed Systems',
            'Base58',
            'JUnit',
            'JMH'
        ],

        highlights: [
            'Designed a custom RFC-compatible UUID v8 identifier layout',
            'Embedded region, shard and node topology directly into generated identifiers',
            'Implemented monotonic time-ordered identifier generation',
            'Implemented a 48-bit per-node sequence counter',
            'Built deterministic identifier decoding',
            'Implemented Base58 encoding and decoding',
            'Designed the library with zero external runtime dependencies',
            'Created concurrent and high-performance generator implementations',
            'Built dedicated JMH benchmarks for generation, multi-threading, string conversion and Base58 performance',
            'Designed identifiers to improve ordering and database index locality'
        ],

        challenge:
            'Traditional random UUIDs provide strong uniqueness but do not naturally expose infrastructure topology, chronological ordering or predictable database locality. Distributed systems may also need identifiers that remain independently generated while still carrying useful information about where and when they were created.',

        solution:
            'I designed EUID around UUID v8, using the 128-bit structure to encode time, region, shard, node and sequence information while preserving UUID compatibility. Separate generator implementations support different concurrency and performance requirements, and the identifier can be decoded back into its constituent metadata.',

        result:
            'EUID provides a sortable, infrastructure-aware and fully decodable identifier format for distributed Java applications, backed by automated tests and dedicated JMH performance benchmarks.',

        sections: [
            {
                title: 'Why EUID exists',
                content:
                    'EUID explores a different approach to distributed identifiers by combining uniqueness with time ordering and infrastructure awareness. Instead of treating an identifier as an opaque random value, EUID can preserve useful metadata such as when and where an identifier was generated.'
            },

            {
                title: 'UUID v8 layout',
                content:
                    'The identifier uses a custom UUID v8 layout containing timestamp, region, shard, node and sequence information. This allows EUID values to remain compatible with the standard 128-bit UUID representation while carrying application-specific distributed-system metadata.'
            },

            {
                title: 'Distributed topology',
                content:
                    'Region, shard and node information can be embedded directly inside an identifier. This allows generated IDs to carry information about the infrastructure that produced them without requiring a separate lookup.'
            },

            {
                title: 'Time ordering and sequencing',
                content:
                    'EUID combines millisecond timestamp information with a monotonic sequence so identifiers generated within the same time window can remain consistently ordered. This also makes the identifier format more suitable for ordered storage than purely random identifiers.'
            },

            {
                title: 'Concurrent generation',
                content:
                    'The library provides generator implementations designed for different concurrency scenarios, including fast per-thread generation and concurrent shared generation.'
            },

            {
                title: 'Decoding',
                content:
                    'EUID identifiers are not opaque. They can be decoded to recover their embedded timestamp and topology information, which can be useful for diagnostics, infrastructure analysis and distributed-system tooling.'
            },

            {
                title: 'Base58 support',
                content:
                    'The library supports Base58 encoding and decoding as a more compact representation when standard UUID text formatting is not required.'
            },

            {
                title: 'Performance benchmarks',
                content:
                    'Dedicated JMH benchmarks were created for EUID v0.2.0 covering raw generation, multi-threaded generation, generation with string conversion and Base58 operations. The benchmark suite is maintained separately so performance testing remains isolated from the core library.',
                image:
                    '/images/projects/euid/euid-cover.png'
            },

            {
                title: 'Open-source engineering',
                content:
                    'EUID is maintained as an open-source Java library with a separate benchmark project, automated tests and a focus on keeping the core runtime lightweight with no external runtime dependencies.'
            }
        ],

        featured: false,

        repoUrl:
            'https://github.com/louis-franck-moussima/euid-java',

        coverImage:
            '/images/projects/euid/euid-cover.png',

        screenshots: [
            '/images/projects/euid/euid-cover.png'
        ]
    }
];
