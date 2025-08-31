# Development Guidelines

## Project Overview

### Purpose
This document provides project-specific rules and limitations for AI Agents working on the CT Task Management System. It focuses exclusively on operational guidance for modifying and extending this system.

### Technology Stack
- TypeScript/JavaScript
- Node.js
- Express.js
- MCP (Model Context Protocol) SDK
- Zod for validation
- UUID for unique identifiers

## Project Architecture

### Directory Structure
- `src/` - Main source code
- `docs/` - Documentation
- `data/` - Data storage
- `scripts/` - Utility scripts
- `dist/` - Compiled output

### Core Modules
- Task Management
- User Management
- Project Management
- Notification System
- Reporting Engine

## Code Standards

### Naming Conventions
- Use camelCase for variables and functions
- Use PascalCase for classes and types
- Use UPPER_SNAKE_CASE for constants
- Use descriptive names that clearly indicate purpose

### Formatting Requirements
- Use 2-space indentation
- Always use semicolons
- Use single quotes for strings
- Place opening braces on the same line

### Comment Rules
- Use JSDoc for function documentation
- Add inline comments for complex logic
- Keep comments up to date with code changes

## Functionality Implementation Standards

### Task Creation
- Always validate input using Zod schemas
- Generate UUIDs for new task identifiers
- Set creation timestamp automatically
- Initialize status to "todo"

### Task Modification
- Only allow modifications to specific fields
- Maintain audit trail of changes
- Update timestamp on each modification
- Validate all input data

### Task Deletion
- Implement soft deletion when possible
- Maintain referential integrity
- Log deletion events

## Framework/Plugin/Third-party Library Usage Standards

### MCP SDK
- Use provided tools for file operations
- Follow MCP patterns for tool registration
- Handle errors according to MCP guidelines

### Express.js
- Use middleware for common functionality
- Implement proper error handling
- Follow RESTful API design principles

### Zod
- Define schemas for all external input
- Use strict validation
- Provide clear error messages

## Workflow Standards

### Development Process
1. Analyze requirements
2. Plan implementation
3. Write code following standards
4. Test implementation
5. Submit for review

### Git Workflow
- Create feature branches for new work
- Write clear commit messages
- Squash commits when appropriate
- Create pull requests for review

## Key File Interaction Standards

### README.md
- Update when project features change
- Keep getting started instructions current
- Maintain accurate feature list

### package.json
- Update dependencies carefully
- Maintain consistent versioning
- Update scripts as needed

## AI Decision-making Standards

### When to Create New Files
- When implementing new features
- When separating concerns improves clarity
- When file size becomes unwieldy

### When to Modify Existing Files
- When fixing bugs
- When extending existing functionality
- When improving performance

### Handling Ambiguous Requests
1. Identify key requirements
2. Check existing code for patterns
3. Make minimal, safe changes
4. Document assumptions

## Prohibited Actions

### Code Quality
- **DO NOT** ignore TypeScript errors
- **DO NOT** skip input validation
- **DO NOT** use magic numbers or strings
- **DO NOT** write overly complex functions

### Project Structure
- **DO NOT** modify package-lock.json directly
- **DO NOT** commit node_modules
- **DO NOT** ignore .gitignore rules

### Dependencies
- **DO NOT** add unnecessary dependencies
- **DO NOT** downgrade dependencies without reason
- **DO NOT** use deprecated packages

### Security
- **DO NOT** commit sensitive information
- **DO NOT** expose internal APIs publicly
- **DO NOT** ignore validation errors