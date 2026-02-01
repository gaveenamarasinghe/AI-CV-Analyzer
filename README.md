# AI-CV Analyser

AI-CV Analyser is an intelligent resume and CV analysis platform that leverages artificial intelligence to extract, parse, and analyze candidate information from CV documents. The system provides comprehensive insights, skill matching, and automated candidate evaluation to streamline recruitment processes.

## Project Overview

AI-CV Analyser enables recruiters and HR professionals to:
- Automatically extract structured data from CV documents (PDF, DOCX, TXT)
- Analyze candidate qualifications, skills, and experience
- Match candidates against job descriptions
- Generate candidate scores and rankings
- Identify key strengths and areas for improvement
- Store and manage candidate profiles in a centralized database

## Core Functionalities

### 1. Document Processing
- **Multi-format Support**: Process CVs in PDF, DOCX, DOC, and TXT formats
- **Text Extraction**: Advanced OCR and text extraction from scanned documents
- **Document Validation**: Verify document integrity and format compatibility
- **Batch Processing**: Upload and process multiple CVs simultaneously

### 2. AI-Powered Data Extraction
- **Personal Information**: Extract name, contact details, location, and professional links
- **Work Experience**: Parse job titles, companies, durations, responsibilities, and achievements
- **Education**: Extract degrees, institutions, graduation dates, and academic achievements
- **Skills**: Identify technical skills, soft skills, and proficiency levels
- **Certifications**: Extract professional certifications and licenses
- **Languages**: Identify spoken languages and proficiency levels
- **Projects**: Extract project descriptions, technologies used, and outcomes

### 3. Intelligent Analysis
- **Experience Analysis**: Calculate total years of experience, career progression, and job stability
- **Skill Assessment**: Evaluate skill relevance, proficiency, and market demand
- **Education Evaluation**: Assess educational background and qualifications
- **Gap Analysis**: Identify missing skills or qualifications for specific roles
- **Career Trajectory**: Analyze career progression and growth patterns

### 4. Job Matching
- **Job Description Parsing**: Extract requirements from job postings
- **Candidate Matching**: Match candidates against job requirements using AI algorithms
- **Match Score**: Generate compatibility scores (0-100) based on multiple factors
- **Match Breakdown**: Detailed analysis of matches and gaps
- **Ranking System**: Rank candidates by suitability for specific positions

### 5. Candidate Management
- **Profile Storage**: Store extracted candidate data in structured format
- **Search & Filter**: Advanced search and filtering capabilities
- **Candidate Dashboard**: Comprehensive view of candidate profiles
- **History Tracking**: Track analysis history and updates
- **Export Options**: Export candidate data in various formats (JSON, CSV, PDF)

### 6. Reporting & Analytics
- **Candidate Reports**: Generate detailed analysis reports
- **Comparison Tools**: Compare multiple candidates side-by-side
- **Statistics Dashboard**: View analytics and insights
- **Trend Analysis**: Track hiring trends and patterns

## Technology Stack

### Frontend
- **Next.js** - React framework with App Router
- **React** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Component library
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **TypeScript** - Type-safe backend development
- **PostgreSQL** - Relational database
- **Prisma** - ORM for database management

### AI & ML Services
- **OpenAI GPT-4** - Natural language processing and extraction
- **Anthropic Claude** - Alternative AI model for analysis
- **PDF.js** - PDF parsing and text extraction
- **Mammoth.js** - DOCX file parsing
- **Tesseract.js** - OCR for scanned documents

### File Processing
- **Multer** - File upload handling
- **pdf-parse** - PDF text extraction
- **docx** - DOCX file processing
- **Sharp** - Image processing (for CV screenshots)

### Authentication & Security
- **Clerk** - Authentication and user management
- **JWT** - Token-based authentication
- **bcrypt** - Password hashing
- **Helmet** - Security headers

### Storage
- **AWS S3** - Document storage (or alternative cloud storage)
- **Cloudinary** - Image and document hosting (optional)

### Monitoring & Observability
- **Sentry** - Error tracking
- **Winston** - Logging
- **OpenTelemetry** - Distributed tracing

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- PostgreSQL 14+
- OpenAI API key (or alternative AI service)
- AWS S3 account (or alternative storage)

### Installation

1. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Database
   DATABASE_URL=postgresql://user:password@localhost:5432/ai_cv_analyser

   # Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # AI Services
   OPENAI_API_KEY=your_openai_api_key
   ANTHROPIC_API_KEY=your_anthropic_api_key

   # File Storage
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   AWS_REGION=your_aws_region
   AWS_S3_BUCKET_NAME=your_bucket_name

   # Application
   NODE_ENV=development
   PORT=3000
   NEXT_PUBLIC_APP_URL=http://localhost:3000

   # Optional: Monitoring
   SENTRY_DSN=your_sentry_dsn
   ```

3. **Set up the database**

   ```bash
   # Generate Prisma client
   npx prisma generate

   # Run migrations
   npx prisma migrate dev

   # Seed database (optional)
   npx prisma db seed
   ```

4. **Database Schema**

   The application uses Prisma for database management. Key tables include:

   - `users` - User accounts and authentication
   - `candidates` - Candidate profiles
   - `documents` - Uploaded CV documents
   - `extractions` - Extracted data from CVs
   - `job_postings` - Job descriptions
   - `matches` - Candidate-job matches
   - `analyses` - Analysis results and scores

### Running the Development Server

```bash
# Start the development server
npm run dev

# Start the backend server (if separate)
npm run dev:server
```
